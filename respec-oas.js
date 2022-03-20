function getEndpoint({apis, path}) {
  let endpoint = {
    post: {
      summary: 'Error: API Endpoint not defined - ' + path
    }
  };

  for(const api of apis) {
    if(api.paths[path] !== undefined) {
      endpoint = api.paths[path];
    }
  }

  return endpoint;
}

function buildApiSummaryTables({config, document, apis}) {
  const apiTables = document.querySelectorAll("table.api-summary-table");

  // process every table
  for(const table of apiTables) {
    // set up the API summary table headers
    const tableHeader = document.createElement('tr');
    tableHeader.innerHTML = '<th>Endpoint</th><th>Description</th>';
    table.appendChild(tableHeader);

    // summarize each API endpoint
    for(const path of table.dataset.apiPath.split(/\s+/)) {
      if(path.trim().length > 0) {
        const endpoint = getEndpoint({apis, path});
        for(const verb in endpoint) {
          const {summary} = endpoint[verb];
          const tableRow = document.createElement('tr');
          tableRow.innerHTML =
            `<td>${verb.toUpperCase()}&nbsp;${path}</td><td>${summary}</td>`;
          table.appendChild(tableRow);
        }
      }
    }
  }
}

function buildEndpointDetails({config, document, apis}) {
  const apiDetailSections = document.querySelectorAll(".api-detail");

  // process every detail section
  for(const section of apiDetailSections) {
    // detail each API endpoint
    const [verb, path] = section.dataset.apiEndpoint.split(/\s+/);
    const endpoint = getEndpoint({apis, path})[verb];

    // summary for endpoint
    const summary = document.createElement('p');
    summary.innerHTML =
      verb.toUpperCase() + ' ' + path + ' - ' + endpoint.summary;
    section.appendChild(summary);

    // responses for endpoint
    const responsesTable = document.createElement('table');
    responsesTable.setAttribute('class', 'simple');
    responsesTable.innerHTML = '<tr><th>Response</th><th>Description</th></tr>';
    for(const response in endpoint.responses) {
      const responseDetail = endpoint.responses[response];
      const {description} = responseDetail;
      responsesTable.innerHTML +=
        `<tr><td>${response}</td><td>${description}</td></tr>`;
    }
    section.appendChild(responsesTable);

    // schema for endpoint
    const schemaSummary = document.createElement('p');
    schemaSummary.innerHTML =
      `The ${path} endpoint uses the following schema when receiving a ` +
      `${verb.toUpperCase()}:`;
    section.appendChild(schemaSummary);

    const requestSchema =
      endpoint.requestBody.content['application/json'].schema.properties ||
      endpoint.requestBody.content['application/json'].schema;

    let requestSchemaHtml = document.createElement('p');
    requestSchemaHtml.innerHTML = 'RENDERING ERROR'; // default
    if(requestSchema) {
      requestSchemaHtml = renderJsonSchema(requestSchema);
    }

    section.appendChild(requestSchemaHtml);

  }
}

function renderJsonSchema(schema) {
  const requestSchemaTable = document.createElement('table');
  const tableHeader = document.createElement('thead');
  const tableBody = document.createElement('tbody');

  requestSchemaTable.classList.add('simple');
  tableHeader.innerHTML = '<tr><th>Property</th><th>Description</th></tr>';

  // render every property in the schema
  for(const property in schema) {
    const subSchema = schema[property];
    let propertyRendering = `<code>${property}</code>`;
    let valueRendering = 'Error: JSON Schema value rendering failure.'; // default
    if(subSchema.type === 'object') {
      propertyRendering = `<code>${property}</code> [object]`;
      valueRendering = renderJsonSchemaObject(subSchema);
    } else {
      valueRendering = '<pre>' + JSON.stringify(subSchema, null, 2) + '</pre>';
    }
    tableBody.innerHTML +=
      `<tr><td style='vertical-align: top;'>${propertyRendering}</td>` +
      `<td>${valueRendering}</td></tr>`;
  }

  // tableBody.innerHTML += '<tr><td>DEBUG</td><td><pre>' +
  //   JSON.stringify(schema, null, 2) + '</pre></td></tr>';

  requestSchemaTable.appendChild(tableHeader);
  requestSchemaTable.appendChild(tableBody);

  return requestSchemaTable;
}

function renderJsonSchemaObject(schema) {
  let objectRendering = '';

  if(schema.allOf) {
    const mergedSchema = {
      type: 'object',
      properties: {}
    };
    for(item of schema.allOf) {
      for(property in item.properties) {
        mergedSchema.properties[property] = item.properties[property];
      }
    }

    objectRendering = renderJsonSchemaObject(mergedSchema);
  } else if(schema.oneOf) {
    objectRendering += ' either '
    let itemCount = 0;
    for(item of schema.oneOf) {
      if(item.type === 'string') {
        objectRendering += 'a string'
      } else if(item.type === 'object') {
        objectRendering += renderJsonSchemaObject(item);
      }

      itemCount += 1;
      if(itemCount < schema.oneOf.length) {
        objectRendering += ' or '
      }
    }
  } else if(schema.type === 'object') {
    if(!schema.properties) {
      objectRendering = 'an object.';
    } else {
      objectRendering += 'an object of the following form: <dl>';
      for(property in schema.properties) {
        const value = schema.properties[property];
        objectRendering += renderJsonSchemaProperty(property, value);
      }
      objectRendering += '</dl>';
    }
  } else {
    objectRendering = '<pre>' + JSON.stringify(schema, null, 2) + '</pre>';
  }

  return objectRendering;
}

function renderJsonSchemaProperty(property, value) {
  let propertyRendering = `<dt><code>${property}</code> [${value.type}]</dt>`;
  propertyRendering += '<dd>' + value.description + ' ' +
    renderJsonSchemaValue(property, value) + '</dd>';

  return propertyRendering;
}

function renderJsonSchemaValue(property, value) {
  let valueRendering = '';

  if(value.type === 'array') {
    valueRendering = `Each item in the <code>${property}</code> array MUST be `;
    if(value.items.type === 'object') {
      valueRendering += 'an object of the following form:';
      //typeDetails += renderJsonSchemaValue(property, value);
    } else if(value.items.type === 'string') {
      valueRendering += 'a string.';
    } else {
      valueRendering += `a ${value.items.type}:`;
    }
  } else if(value.type === 'object') {
    valueRendering =
      `The <code>${property}</code> object MUST be `;
    valueRendering += renderJsonSchemaObject(value);
  }
  else if(value.type === 'string') {
    // no-op
  } else {
    valueRendering = '<pre>' + JSON.stringify(value, null, 2) + '</pre>';
  }

  return valueRendering;
}

async function injectOas(config, document) {
  try {
    const issuerApi = await SwaggerParser.validate('issuer.yml');
    console.log('API name: %s, Version: %s',
      issuerApi.info.title, issuerApi.info.version);
    const verifierApi = await SwaggerParser.validate('verifier.yml');
    console.log('API name: %s, Version: %s',
      verifierApi.info.title, verifierApi.info.version);
    const holderApi = await SwaggerParser.validate('holder.yml');
    console.log('API name: %s, Version: %s',
      holderApi.info.title, holderApi.info.version);
    const apis = [issuerApi, verifierApi, holderApi];

    buildApiSummaryTables({config, document, apis});
    buildEndpointDetails({config, document, apis});
  }
  catch(err) {
    console.error(err);
  }
}
