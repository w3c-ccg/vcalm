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

    const requestSchema = document.createElement('pre');
    requestSchema.innerHTML = JSON.stringify(
      endpoint.requestBody.content['application/json'].schema.properties ||
      endpoint.requestBody.content['application/json'].schema,
      null, 2);
    section.appendChild(requestSchema);

  }
}

async function injectOas(config, document) {
  try {
    let issuerApi = await SwaggerParser.validate('issuer.yml');
    console.log('API name: %s, Version: %s',
      issuerApi.info.title, issuerApi.info.version);
    let verifierApi = await SwaggerParser.validate('verifier.yml');
    console.log('API name: %s, Version: %s',
      verifierApi.info.title, verifierApi.info.version);
    let holderApi = await SwaggerParser.validate('holder.yml');
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
