<html>
<title>Using Markdown</title>
<script
      src="https://www.w3.org/Tools/respec/respec-w3c"
      class="remove"
      defer
    ></script>
<script>
var respecConfig = {
  format: "markdown"
}
</script>
<body>

---
title: VC Holder HTTP API v0.0.3-unstable
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="vc-holder-http-api">VC Holder HTTP API v0.0.3-unstable</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is an Experimental Open API Specification for the [VC Data Model](https://www.w3.org/TR/vc-data-model/).

Web: <a href="https://github.com/w3c-ccg/vc-api">GitHub Source Code</a> 
License: <a href="http://www.w3.org/Consortium/Legal/copyright-software.">W3C Software and Document License</a>

<h1 id="vc-holder-http-api-holder_credentials">holder_Credentials</h1>

## getCredential

<a id="opIdgetCredential"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /credentials/{id} \
  -H 'Accept: application/json'

```

```http
GET /credentials/{id} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/credentials/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/credentials/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/credentials/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/credentials/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/credentials/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/credentials/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /credentials/{id}`

*Gets a credential or verifiable credential by ID*

<h3 id="getcredential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|false|none|

> Example responses

> 200 Response

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.gov/credentials/3732",
  "type": [
    "VerifiableCredential",
    "UniversityDegreeCredential"
  ],
  "issuer": "did:example:123",
  "issuanceDate": "2020-03-16T22:37:26.544Z",
  "credentialSubject": {
    "id": "did:example:123",
    "degree": {
      "type": "BachelorDegree",
      "name": "Bachelor of Science and Arts"
    }
  }
}
```

<h3 id="getcredential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Credential retrieved|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not Authorized|None|
|410|[Gone](https://tools.ietf.org/html/rfc7231#section-6.5.9)|Gone! There is no data here|None|
|418|[I'm a teapot](https://tools.ietf.org/html/rfc2324#section-2.3.1)|I'm a teapot - MUST not be returned outside of pre-arranged scenarios between both parties|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|Not Implemented|None|

<h3 id="getcredential-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## deleteCredential

<a id="opIddeleteCredential"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /credentials/{id}

```

```http
DELETE /credentials/{id} HTTP/1.1

```

```javascript

fetch('/credentials/{id}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.delete '/credentials/{id}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.delete('/credentials/{id}')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','/credentials/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/credentials/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "/credentials/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /credentials/{id}`

*Deletes a credential or verifiable credential by ID*

<h3 id="deletecredential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|false|none|

<h3 id="deletecredential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Credential deleted - this is a 202 by default as soft deletes and processing time are assumed|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not Authorized|None|
|410|[Gone](https://tools.ietf.org/html/rfc7231#section-6.5.9)|Gone! There is no data here|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|Not Implemented|None|

<aside class="success">
This operation does not require authentication
</aside>

## getCredentials

<a id="opIdgetCredentials"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /credentials \
  -H 'Accept: application/json'

```

```http
GET /credentials HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/credentials',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/credentials',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/credentials', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/credentials', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/credentials");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/credentials", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /credentials`

*Gets list of credentials or verifiable credentials*

<h3 id="getcredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|array[string]|false|none|

> Example responses

> 200 Response

```json
[
  {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "id": "http://example.gov/credentials/3732",
    "type": [
      "VerifiableCredential",
      "UniversityDegreeCredential"
    ],
    "issuer": "did:example:123",
    "issuanceDate": "2020-03-16T22:37:26.544Z",
    "credentialSubject": {
      "id": "did:example:123",
      "degree": {
        "type": "BachelorDegree",
        "name": "Bachelor of Science and Arts"
      }
    },
    "proof": {
      "type": "Ed25519Signature2018",
      "created": "2020-04-02T18:28:08Z",
      "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
      "proofPurpose": "assertionMethod",
      "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
    }
  }
]
```

<h3 id="getcredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Credentials retrieved|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not Authorized|None|
|410|[Gone](https://tools.ietf.org/html/rfc7231#section-6.5.9)|Gone! There is no data here|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|Not Implemented|None|

<h3 id="getcredentials-responseschema">Response Schema</h3>

Status Code **200**

*The Credentials*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|

*anyOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[VerifiableCredential](#schemaverifiablecredential)|false|none|A JSON-LD Verifiable Credential with a proof.|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[Credential](#schemacredential)|false|none|A JSON-LD Verifiable Credential without a proof.|
|»»» @context|[string]|false|none|The JSON-LD context of the credential.|
|»»» id|string|false|none|The ID of the credential.|
|»»» type|[string]|false|none|The JSON-LD type of the credential.|
|»»» issuer|[Issuer](#schemaissuer)|false|none|A JSON-LD Verifiable Credential Issuer.|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»» *anonymous*|string|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»» *anonymous*|object|false|none|none|
|»»»»» id|string|false|none|none|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»» issuanceDate|string|false|none|The issuanceDate|
|»»» expirationDate|string|false|none|The expirationDate|
|»»» credentialSubject|object|false|none|The subject|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|object|false|none|none|
|»»» proof|[LinkedDataProof](#schemalinkeddataproof)|false|none|A JSON-LD Linked Data proof.|
|»»»» type|string|false|none|Linked Data Signature Suite used to produce proof.|
|»»»» created|string|false|none|Date the proof was created.|
|»»»» challenge|string|false|none|A value chosen by the verifier to mitigate authentication proof replay attacks.|
|»»»» domain|string|false|none|The domain of the proof to restrict its use to a particular target.|
|»»»» nonce|string|false|none|A value chosen by the creator of a proof to randomize proof values for privacy purposes.|
|»»»» verificationMethod|string|false|none|Verification Method used to verify proof.|
|»»»» proofPurpose|string|false|none|The purpose of the proof to be used with verificationMethod.|
|»»»» jws|string|false|none|Detached JSON Web Signature.|
|»»»» proofValue|string|false|none|Value of the Linked Data proof.|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[Credential](#schemacredential)|false|none|A JSON-LD Verifiable Credential without a proof.|

<aside class="success">
This operation does not require authentication
</aside>

## deriveCredential

<a id="opIdderiveCredential"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /credentials/derive \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST /credentials/derive HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "verifiableCredential": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "id": "http://example.gov/credentials/3732",
    "type": [
      "VerifiableCredential",
      "UniversityDegreeCredential"
    ],
    "issuer": "did:example:123",
    "issuanceDate": "2020-03-16T22:37:26.544Z",
    "credentialSubject": {
      "id": "did:example:123",
      "degree": {
        "type": "BachelorDegree",
        "name": "Bachelor of Science and Arts"
      }
    },
    "proof": {
      "type": "Ed25519Signature2018",
      "created": "2020-04-02T18:28:08Z",
      "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
      "proofPurpose": "assertionMethod",
      "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
    }
  },
  "frame": {},
  "options": {
    "nonce": "lEixQKDQvRecCifKl789TQj+Ii6YWDLSwn3AxR0VpPJ1QV5htod/0VCchVf1zVM0y2E="
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/credentials/derive',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post '/credentials/derive',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/credentials/derive', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/credentials/derive', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/credentials/derive");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/credentials/derive", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /credentials/derive`

*Derives a credential and returns it in the response body.*

Derives a credential and returns it in the response body.

> Body parameter

```json
{
  "verifiableCredential": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "id": "http://example.gov/credentials/3732",
    "type": [
      "VerifiableCredential",
      "UniversityDegreeCredential"
    ],
    "issuer": "did:example:123",
    "issuanceDate": "2020-03-16T22:37:26.544Z",
    "credentialSubject": {
      "id": "did:example:123",
      "degree": {
        "type": "BachelorDegree",
        "name": "Bachelor of Science and Arts"
      }
    },
    "proof": {
      "type": "Ed25519Signature2018",
      "created": "2020-04-02T18:28:08Z",
      "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
      "proofPurpose": "assertionMethod",
      "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
    }
  },
  "frame": {},
  "options": {
    "nonce": "lEixQKDQvRecCifKl789TQj+Ii6YWDLSwn3AxR0VpPJ1QV5htod/0VCchVf1zVM0y2E="
  }
}
```

<h3 id="derivecredential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeriveCredentialRequest](#schemaderivecredentialrequest)|false|Parameters for deriving the credential.|

> Example responses

> 201 Response

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.gov/credentials/3732",
  "type": [
    "VerifiableCredential",
    "UniversityDegreeCredential"
  ],
  "issuer": "did:example:123",
  "issuanceDate": "2020-03-16T22:37:26.544Z",
  "credentialSubject": {
    "id": "did:example:123",
    "degree": {
      "type": "BachelorDegree",
      "name": "Bachelor of Science and Arts"
    }
  },
  "proof": {
    "type": "Ed25519Signature2018",
    "created": "2020-04-02T18:28:08Z",
    "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "proofPurpose": "assertionMethod",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
  }
}
```

<h3 id="derivecredential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Credential derived successfully.|[VerifiableCredential](#schemaverifiablecredential)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid Request|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|Not Implemented|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="vc-holder-http-api-holder_presentations">holder_Presentations</h1>

## getPresentation

<a id="opIdgetPresentation"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /presentations/{id} \
  -H 'Accept: application/json'

```

```http
GET /presentations/{id} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/presentations/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/presentations/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/presentations/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/presentations/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/presentations/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/presentations/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /presentations/{id}`

*Gets a presentation or verifiable presentation by ID*

<h3 id="getpresentation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|false|none|

> Example responses

> 200 Response

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "holder": "did:example:123",
  "type": "VerifiablePresentation",
  "verifiableCredential": [
    {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
      ]
    },
    {
      "id": "http://example.gov/credentials/3732"
    },
    {
      "type": [
        "VerifiableCredential",
        "UniversityDegreeCredential"
      ]
    },
    {
      "issuer": "did:example:123"
    },
    {
      "issuanceDate": "2020-03-16T22:37:26.544Z"
    },
    {
      "credentialSubject": {
        "id": "did:example:123",
        "degree": {
          "type": "BachelorDegree",
          "name": "Bachelor of Science and Arts"
        }
      }
    },
    {
      "proof": {
        "type": "Ed25519Signature2018",
        "created": "2020-04-02T18:28:08Z",
        "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
        "proofPurpose": "assertionMethod",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
      }
    }
  ]
}
```

<h3 id="getpresentation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Credential retrieved|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not Authorized|None|
|410|[Gone](https://tools.ietf.org/html/rfc7231#section-6.5.9)|Gone! There is no data here|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|Not Implemented|None|

<h3 id="getpresentation-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## deletePresentation

<a id="opIddeletePresentation"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /presentations/{id}

```

```http
DELETE /presentations/{id} HTTP/1.1

```

```javascript

fetch('/presentations/{id}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.delete '/presentations/{id}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.delete('/presentations/{id}')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','/presentations/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/presentations/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "/presentations/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /presentations/{id}`

*Deletes a presentation or verifiable presentation by ID*

<h3 id="deletepresentation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|false|none|

<h3 id="deletepresentation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Presentation deleted - this is a 202 by default as soft deletes and processing time are assumed|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not Authorized|None|
|410|[Gone](https://tools.ietf.org/html/rfc7231#section-6.5.9)|Gone! There is no data here|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|Not Implemented|None|

<aside class="success">
This operation does not require authentication
</aside>

## getPresentations

<a id="opIdgetPresentations"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /Presentation \
  -H 'Accept: application/json'

```

```http
GET /Presentation HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/Presentation',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/Presentation',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/Presentation', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/Presentation', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/Presentation");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/Presentation", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /Presentation`

*Gets list of presentations or verifiable presentations*

<h3 id="getpresentations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|array[string]|false|none|

> Example responses

> 200 Response

```json
[
  {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "holder": "did:example:123",
    "type": "VerifiablePresentation",
    "verifiableCredential": [
      {
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://www.w3.org/2018/credentials/examples/v1"
        ]
      },
      {
        "id": "http://example.gov/credentials/3732"
      },
      {
        "type": [
          "VerifiableCredential",
          "UniversityDegreeCredential"
        ]
      },
      {
        "issuer": "did:example:123"
      },
      {
        "issuanceDate": "2020-03-16T22:37:26.544Z"
      },
      {
        "credentialSubject": {
          "id": "did:example:123",
          "degree": {
            "type": "BachelorDegree",
            "name": "Bachelor of Science and Arts"
          }
        }
      },
      {
        "proof": {
          "type": "Ed25519Signature2018",
          "created": "2020-04-02T18:28:08Z",
          "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
          "proofPurpose": "assertionMethod",
          "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
        }
      }
    ]
  }
]
```

<h3 id="getpresentations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Presentations retrieved|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not Authorized|None|
|410|[Gone](https://tools.ietf.org/html/rfc7231#section-6.5.9)|Gone! There is no data here|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Error|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|Not Implemented|None|

<h3 id="getpresentations-responseschema">Response Schema</h3>

Status Code **200**

*The Presentations*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|

*anyOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[Presentation](#schemapresentation)|false|none|A JSON-LD Verifiable Presentation without a proof.|
|»» @context|[string]|false|none|The JSON-LD context of the presentation.|
|»» id|string|false|none|The ID of the presentation.|
|»» type|[string]|false|none|The JSON-LD type of the presentation.|
|»» holder|object¦null|false|none|The holder - will be ignored if no proof is present since there is no proof of authority over the credentials|
|»» verifiableCredential|[allOf]|false|none|The Verifiable Credentials|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»» *anonymous*|[Credential](#schemacredential)|false|none|A JSON-LD Verifiable Credential without a proof.|
|»»»» @context|[string]|false|none|The JSON-LD context of the credential.|
|»»»» id|string|false|none|The ID of the credential.|
|»»»» type|[string]|false|none|The JSON-LD type of the credential.|
|»»»» issuer|[Issuer](#schemaissuer)|false|none|A JSON-LD Verifiable Credential Issuer.|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»» *anonymous*|string|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»»» *anonymous*|object|false|none|none|
|»»»»»» id|string|false|none|none|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»»» issuanceDate|string|false|none|The issuanceDate|
|»»»» expirationDate|string|false|none|The expirationDate|
|»»»» credentialSubject|object|false|none|The subject|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»» *anonymous*|object|false|none|none|
|»»»» proof|[LinkedDataProof](#schemalinkeddataproof)|false|none|A JSON-LD Linked Data proof.|
|»»»»» type|string|false|none|Linked Data Signature Suite used to produce proof.|
|»»»»» created|string|false|none|Date the proof was created.|
|»»»»» challenge|string|false|none|A value chosen by the verifier to mitigate authentication proof replay attacks.|
|»»»»» domain|string|false|none|The domain of the proof to restrict its use to a particular target.|
|»»»»» nonce|string|false|none|A value chosen by the creator of a proof to randomize proof values for privacy purposes.|
|»»»»» verificationMethod|string|false|none|Verification Method used to verify proof.|
|»»»»» proofPurpose|string|false|none|The purpose of the proof to be used with verificationMethod.|
|»»»»» jws|string|false|none|Detached JSON Web Signature.|
|»»»»» proofValue|string|false|none|Value of the Linked Data proof.|

*or*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[VerifiablePresentation](#schemaverifiablepresentation)|false|none|A JSON-LD Verifiable Presentation with a proof.|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[Presentation](#schemapresentation)|false|none|A JSON-LD Verifiable Presentation without a proof.|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|object|false|none|none|
|»»» proof|[LinkedDataProof](#schemalinkeddataproof)|false|none|A JSON-LD Linked Data proof.|

<aside class="success">
This operation does not require authentication
</aside>

## provePresentation

<a id="opIdprovePresentation"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /presentations/prove \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST /presentations/prove HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "presentation": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "holder": "did:example:123",
    "type": "VerifiablePresentation",
    "verifiableCredential": [
      {
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://www.w3.org/2018/credentials/examples/v1"
        ]
      },
      {
        "id": "http://example.gov/credentials/3732"
      },
      {
        "type": [
          "VerifiableCredential",
          "UniversityDegreeCredential"
        ]
      },
      {
        "issuer": "did:example:123"
      },
      {
        "issuanceDate": "2020-03-16T22:37:26.544Z"
      },
      {
        "credentialSubject": {
          "id": "did:example:123",
          "degree": {
            "type": "BachelorDegree",
            "name": "Bachelor of Science and Arts"
          }
        }
      },
      {
        "proof": {
          "type": "Ed25519Signature2018",
          "created": "2020-04-02T18:28:08Z",
          "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
          "proofPurpose": "assertionMethod",
          "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
        }
      }
    ]
  },
  "options": {
    "type": "Ed25519Signature2018",
    "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "proofPurpose": "assertionMethod",
    "created": "2020-04-02T18:48:36Z",
    "domain": "example.com",
    "challenge": "d436f0c8-fbd9-4e48-bbb2-55fc5d0920a8"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/presentations/prove',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post '/presentations/prove',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/presentations/prove', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/presentations/prove', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/presentations/prove");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/presentations/prove", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /presentations/prove`

*Proves a presentation and returns it in the response body.*

Proves a presentation and returns it in the response body.

> Body parameter

```json
{
  "presentation": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "holder": "did:example:123",
    "type": "VerifiablePresentation",
    "verifiableCredential": [
      {
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://www.w3.org/2018/credentials/examples/v1"
        ]
      },
      {
        "id": "http://example.gov/credentials/3732"
      },
      {
        "type": [
          "VerifiableCredential",
          "UniversityDegreeCredential"
        ]
      },
      {
        "issuer": "did:example:123"
      },
      {
        "issuanceDate": "2020-03-16T22:37:26.544Z"
      },
      {
        "credentialSubject": {
          "id": "did:example:123",
          "degree": {
            "type": "BachelorDegree",
            "name": "Bachelor of Science and Arts"
          }
        }
      },
      {
        "proof": {
          "type": "Ed25519Signature2018",
          "created": "2020-04-02T18:28:08Z",
          "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
          "proofPurpose": "assertionMethod",
          "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
        }
      }
    ]
  },
  "options": {
    "type": "Ed25519Signature2018",
    "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "proofPurpose": "assertionMethod",
    "created": "2020-04-02T18:48:36Z",
    "domain": "example.com",
    "challenge": "d436f0c8-fbd9-4e48-bbb2-55fc5d0920a8"
  }
}
```

<h3 id="provepresentation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProvePresentationRequest](#schemaprovepresentationrequest)|false|Parameters for proving the presentation.|

> Example responses

> 201 Response

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "holder": "did:example:123",
  "type": "VerifiablePresentation",
  "verifiableCredential": [
    {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
      ]
    },
    {
      "id": "http://example.gov/credentials/3732"
    },
    {
      "type": [
        "VerifiableCredential",
        "UniversityDegreeCredential"
      ]
    },
    {
      "issuer": "did:example:123"
    },
    {
      "issuanceDate": "2020-03-16T22:37:26.544Z"
    },
    {
      "credentialSubject": {
        "id": "did:example:123",
        "degree": {
          "type": "BachelorDegree",
          "name": "Bachelor of Science and Arts"
        }
      }
    },
    {
      "proof": {
        "type": "Ed25519Signature2018",
        "created": "2020-04-02T18:28:08Z",
        "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
        "proofPurpose": "assertionMethod",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
      }
    }
  ],
  "proof": {
    "type": "Ed25519Signature2018",
    "created": "2020-04-02T18:28:08Z",
    "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "proofPurpose": "assertionMethod",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
  }
}
```

<h3 id="provepresentation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Presentation successfully proved!|[VerifiablePresentation](#schemaverifiablepresentation)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|invalid input!|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|error!|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="vc-holder-http-api-holder_exchanges">holder_Exchanges</h1>

## initiateExchange

<a id="opIdinitiateExchange"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /exchanges/{exchange-id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST /exchanges/{exchange-id} HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/exchanges/{exchange-id}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post '/exchanges/{exchange-id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/exchanges/{exchange-id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/exchanges/{exchange-id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/exchanges/{exchange-id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/exchanges/{exchange-id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /exchanges/{exchange-id}`

*Initiates an exchange of information.*

A client can use this endpoint to initiate an exchange of a particular type. The client can include HTTP POST information related to the details of exchange it would like to initiate. If the server understands the request, it returns a Verifiable Presentation Request. A request that the server cannot understand results in an error.

> Body parameter

```json
{}
```

<h3 id="initiateexchange-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchange-id|path|string|true|A potentially human-readable identifier for an exchange.|
|body|body|any|false|Information related to the type of exchange the client would like to start.|

> Example responses

> 200 Response

```json
{
  "query": [
    {
      "type": "DIDAuth"
    },
    {
      "type": "QueryByExample",
      "credentialQuery": {
        "reason": "We need to see your existing University Degree credential.",
        "example": {
          "@context": [
            "https://www.w3.org/2018/credentials/v1",
            "https://www.w3.org/2018/credentials/examples/v1"
          ],
          "type": "UniversityDegreeCredential"
        }
      }
    }
  ],
  "challenge": "3182bdea-63d9-11ea-b6de-3b7c1404d57f",
  "domain": "edu.example",
  "interact": {
    "service": [
      {
        "type": "UnmediatedPresentationService2021",
        "serviceEndpoint": "https://edu.example/workflows/123456/presentations"
      }
    ]
  }
}
```

<h3 id="initiateexchange-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Proceed with exchange.|[VerifiablePresentationRequest](#schemaverifiablepresentationrequest)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Request is malformed.|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|Service not implemented.|None|

<aside class="success">
This operation does not require authentication
</aside>

## receiveExchangeData

<a id="opIdreceiveExchangeData"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /exchanges/{exchange-id}/{transaction-id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
PUT /exchanges/{exchange-id}/{transaction-id} HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "holder": "did:example:123",
  "type": "VerifiablePresentation",
  "verifiableCredential": [
    {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
      ]
    },
    {
      "id": "http://example.gov/credentials/3732"
    },
    {
      "type": [
        "VerifiableCredential",
        "UniversityDegreeCredential"
      ]
    },
    {
      "issuer": "did:example:123"
    },
    {
      "issuanceDate": "2020-03-16T22:37:26.544Z"
    },
    {
      "credentialSubject": {
        "id": "did:example:123",
        "degree": {
          "type": "BachelorDegree",
          "name": "Bachelor of Science and Arts"
        }
      }
    },
    {
      "proof": {
        "type": "Ed25519Signature2018",
        "created": "2020-04-02T18:28:08Z",
        "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
        "proofPurpose": "assertionMethod",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
      }
    }
  ],
  "proof": {
    "type": "Ed25519Signature2018",
    "created": "2020-04-02T18:28:08Z",
    "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "proofPurpose": "assertionMethod",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/exchanges/{exchange-id}/{transaction-id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.put '/exchanges/{exchange-id}/{transaction-id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('/exchanges/{exchange-id}/{transaction-id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','/exchanges/{exchange-id}/{transaction-id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/exchanges/{exchange-id}/{transaction-id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/exchanges/{exchange-id}/{transaction-id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /exchanges/{exchange-id}/{transaction-id}`

*Receives information related to an existing exchange.*

A client can use this endpoint to continue the exchange of information associated with an initiated exchange by sending a Verifiable Presentation with information requested by the server to this endpoint.

> Body parameter

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "holder": "did:example:123",
  "type": "VerifiablePresentation",
  "verifiableCredential": [
    {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
      ]
    },
    {
      "id": "http://example.gov/credentials/3732"
    },
    {
      "type": [
        "VerifiableCredential",
        "UniversityDegreeCredential"
      ]
    },
    {
      "issuer": "did:example:123"
    },
    {
      "issuanceDate": "2020-03-16T22:37:26.544Z"
    },
    {
      "credentialSubject": {
        "id": "did:example:123",
        "degree": {
          "type": "BachelorDegree",
          "name": "Bachelor of Science and Arts"
        }
      }
    },
    {
      "proof": {
        "type": "Ed25519Signature2018",
        "created": "2020-04-02T18:28:08Z",
        "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
        "proofPurpose": "assertionMethod",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
      }
    }
  ],
  "proof": {
    "type": "Ed25519Signature2018",
    "created": "2020-04-02T18:28:08Z",
    "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "proofPurpose": "assertionMethod",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
  }
}
```

<h3 id="receiveexchangedata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchange-id|path|string|true|A potentially human-readable identifier for an exchange.|
|transaction-id|path|any|true|none|
|body|body|[VerifiablePresentation](#schemaverifiablepresentation)|false|A Verifiable Presentation.|

> Example responses

> 200 Response

```json
{
  "query": [
    {
      "type": "DIDAuth"
    },
    {
      "type": "QueryByExample",
      "credentialQuery": {
        "reason": "We need to see your existing University Degree credential.",
        "example": {
          "@context": [
            "https://www.w3.org/2018/credentials/v1",
            "https://www.w3.org/2018/credentials/examples/v1"
          ],
          "type": "UniversityDegreeCredential"
        }
      }
    }
  ],
  "challenge": "3182bdea-63d9-11ea-b6de-3b7c1404d57f",
  "domain": "edu.example",
  "interact": {
    "service": [
      {
        "type": "UnmediatedPresentationService2021",
        "serviceEndpoint": "https://edu.example/workflows/123456/presentations"
      }
    ]
  }
}
```

<h3 id="receiveexchangedata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Received data was accepted.|[VerifiablePresentationRequest](#schemaverifiablepresentationrequest)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Received data is malformed.|[ErrorResponse](#schemaerrorresponse)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|Service not implemented.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="vc-holder-http-api-issuer_credential">issuer_credential</h1>

## issueCredential

<a id="opIdissueCredential"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /credentials/issue \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST /credentials/issue HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "credential": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "id": "http://example.gov/credentials/3732",
    "type": [
      "VerifiableCredential",
      "UniversityDegreeCredential"
    ],
    "issuer": "did:example:123",
    "issuanceDate": "2020-03-16T22:37:26.544Z",
    "credentialSubject": {
      "id": "did:example:123",
      "degree": {
        "type": "BachelorDegree",
        "name": "Bachelor of Science and Arts"
      }
    }
  },
  "options": {
    "type": "Ed25519Signature2018",
    "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "proofPurpose": "assertionMethod",
    "created": "2020-04-02T18:48:36Z",
    "domain": "revocation.example",
    "challenge": "d436f0c8-fbd9-4e48-bbb2-55fc5d0920a8",
    "credentialStatus": {
      "type": "RevocationList2020Status"
    }
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/credentials/issue',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post '/credentials/issue',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/credentials/issue', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/credentials/issue', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/credentials/issue");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/credentials/issue", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /credentials/issue`

*Issues a credential and returns it in the response body.*

Issues a credential and returns it in the response body.

> Body parameter

```json
{
  "credential": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "id": "http://example.gov/credentials/3732",
    "type": [
      "VerifiableCredential",
      "UniversityDegreeCredential"
    ],
    "issuer": "did:example:123",
    "issuanceDate": "2020-03-16T22:37:26.544Z",
    "credentialSubject": {
      "id": "did:example:123",
      "degree": {
        "type": "BachelorDegree",
        "name": "Bachelor of Science and Arts"
      }
    }
  },
  "options": {
    "type": "Ed25519Signature2018",
    "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "proofPurpose": "assertionMethod",
    "created": "2020-04-02T18:48:36Z",
    "domain": "revocation.example",
    "challenge": "d436f0c8-fbd9-4e48-bbb2-55fc5d0920a8",
    "credentialStatus": {
      "type": "RevocationList2020Status"
    }
  }
}
```

<h3 id="issuecredential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IssueCredentialRequest](#schemaissuecredentialrequest)|false|Parameters for issuing the credential.|

> Example responses

> 201 Response

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.gov/credentials/3732",
  "type": [
    "VerifiableCredential",
    "UniversityDegreeCredential"
  ],
  "issuer": "did:example:123",
  "issuanceDate": "2020-03-16T22:37:26.544Z",
  "credentialSubject": {
    "id": "did:example:123",
    "degree": {
      "type": "BachelorDegree",
      "name": "Bachelor of Science and Arts"
    }
  },
  "proof": {
    "type": "Ed25519Signature2018",
    "created": "2020-04-02T18:28:08Z",
    "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "proofPurpose": "assertionMethod",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
  }
}
```

<h3 id="issuecredential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Credential successfully issued!|[VerifiableCredential](#schemaverifiablecredential)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|invalid input!|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|error!|None|

<aside class="success">
This operation does not require authentication
</aside>

## updateCredentialStatus

<a id="opIdupdateCredentialStatus"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /credentials/status \
  -H 'Content-Type: application/json'

```

```http
POST /credentials/status HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{
  "credentialId": "urn:uuid:45a44711-e457-4fa8-9b89-69fe0287c86a",
  "credentialStatus": [
    {
      "type": "RevocationList2020Status",
      "status": "0"
    }
  ]
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/credentials/status',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post '/credentials/status',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/credentials/status', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/credentials/status', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/credentials/status");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/credentials/status", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /credentials/status`

*Updates the status of an issued credential*

Updates the status of an issued credential.

> Body parameter

```json
{
  "credentialId": "urn:uuid:45a44711-e457-4fa8-9b89-69fe0287c86a",
  "credentialStatus": [
    {
      "type": "RevocationList2020Status",
      "status": "0"
    }
  ]
}
```

<h3 id="updatecredentialstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateCredentialStatus](#schemaupdatecredentialstatus)|false|Parameters for updating the status of the issued credential.|

<h3 id="updatecredentialstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Credential status successfully updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Credential not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="vc-holder-http-api-verifier_credential">verifier_credential</h1>

## verifyCredential

<a id="opIdverifyCredential"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /credentials/verify \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST /credentials/verify HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "verifiableCredential": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "id": "http://example.gov/credentials/3732",
    "type": [
      "VerifiableCredential",
      "UniversityDegreeCredential"
    ],
    "issuer": "did:example:123",
    "issuanceDate": "2020-03-16T22:37:26.544Z",
    "credentialSubject": {
      "id": "did:example:123",
      "degree": {
        "type": "BachelorDegree",
        "name": "Bachelor of Science and Arts"
      }
    },
    "proof": {
      "type": "Ed25519Signature2018",
      "created": "2020-04-02T18:28:08Z",
      "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
      "proofPurpose": "assertionMethod",
      "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
    }
  },
  "options": {
    "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "proofPurpose": "assertionMethod",
    "created": "2020-04-02T18:48:36Z",
    "domain": "example.com",
    "challenge": "d436f0c8-fbd9-4e48-bbb2-55fc5d0920a8"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/credentials/verify',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post '/credentials/verify',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/credentials/verify', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/credentials/verify', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/credentials/verify");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/credentials/verify", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /credentials/verify`

*Verifies a verifiableCredential and returns a verificationResult in the response body.*

Verifies a verifiableCredential and returns a verificationResult in the response body.

> Body parameter

```json
{
  "verifiableCredential": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "id": "http://example.gov/credentials/3732",
    "type": [
      "VerifiableCredential",
      "UniversityDegreeCredential"
    ],
    "issuer": "did:example:123",
    "issuanceDate": "2020-03-16T22:37:26.544Z",
    "credentialSubject": {
      "id": "did:example:123",
      "degree": {
        "type": "BachelorDegree",
        "name": "Bachelor of Science and Arts"
      }
    },
    "proof": {
      "type": "Ed25519Signature2018",
      "created": "2020-04-02T18:28:08Z",
      "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
      "proofPurpose": "assertionMethod",
      "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
    }
  },
  "options": {
    "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "proofPurpose": "assertionMethod",
    "created": "2020-04-02T18:48:36Z",
    "domain": "example.com",
    "challenge": "d436f0c8-fbd9-4e48-bbb2-55fc5d0920a8"
  }
}
```

<h3 id="verifycredential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VerifyCredentialRequest](#schemaverifycredentialrequest)|false|Parameters for verifying a verifiableCredential.|

> Example responses

> 200 Response

```json
{
  "checks": [
    "proof"
  ],
  "warnings": [],
  "errors": []
}
```

<h3 id="verifycredential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Verifiable Credential successfully verified!|[VerificationResult](#schemaverificationresult)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|invalid input!|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|error!|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="vc-holder-http-api-verifier_presentation">verifier_presentation</h1>

## verifyPresentation

<a id="opIdverifyPresentation"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /presentations/verify \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST /presentations/verify HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "verifiablePresentation": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "holder": "did:example:123",
    "type": "VerifiablePresentation",
    "verifiableCredential": [
      {
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://www.w3.org/2018/credentials/examples/v1"
        ]
      },
      {
        "id": "http://example.gov/credentials/3732"
      },
      {
        "type": [
          "VerifiableCredential",
          "UniversityDegreeCredential"
        ]
      },
      {
        "issuer": "did:example:123"
      },
      {
        "issuanceDate": "2020-03-16T22:37:26.544Z"
      },
      {
        "credentialSubject": {
          "id": "did:example:123",
          "degree": {
            "type": "BachelorDegree",
            "name": "Bachelor of Science and Arts"
          }
        }
      },
      {
        "proof": {
          "type": "Ed25519Signature2018",
          "created": "2020-04-02T18:28:08Z",
          "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
          "proofPurpose": "assertionMethod",
          "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
        }
      }
    ],
    "proof": {
      "type": "Ed25519Signature2018",
      "created": "2020-04-02T18:28:08Z",
      "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
      "proofPurpose": "assertionMethod",
      "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
    }
  },
  "options": {
    "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "proofPurpose": "assertionMethod",
    "created": "2020-04-02T18:48:36Z",
    "domain": "example.com",
    "challenge": "d436f0c8-fbd9-4e48-bbb2-55fc5d0920a8"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/presentations/verify',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post '/presentations/verify',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/presentations/verify', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/presentations/verify', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/presentations/verify");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/presentations/verify", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /presentations/verify`

*Verifies a Presentation with or without proofs attached and returns a verificationResult in the response body.*

Verifies a verifiablePresentation and returns a verificationResult in the response body.  Given the possibility of denial of service, buffer overflow, or other style attacks, an implementation is permitted to rate limit or restrict requests against this API endpoint to those requests that contain only a single credential with a 413 or 429 error code as appropriate.

> Body parameter

```json
{
  "verifiablePresentation": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "holder": "did:example:123",
    "type": "VerifiablePresentation",
    "verifiableCredential": [
      {
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://www.w3.org/2018/credentials/examples/v1"
        ]
      },
      {
        "id": "http://example.gov/credentials/3732"
      },
      {
        "type": [
          "VerifiableCredential",
          "UniversityDegreeCredential"
        ]
      },
      {
        "issuer": "did:example:123"
      },
      {
        "issuanceDate": "2020-03-16T22:37:26.544Z"
      },
      {
        "credentialSubject": {
          "id": "did:example:123",
          "degree": {
            "type": "BachelorDegree",
            "name": "Bachelor of Science and Arts"
          }
        }
      },
      {
        "proof": {
          "type": "Ed25519Signature2018",
          "created": "2020-04-02T18:28:08Z",
          "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
          "proofPurpose": "assertionMethod",
          "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
        }
      }
    ],
    "proof": {
      "type": "Ed25519Signature2018",
      "created": "2020-04-02T18:28:08Z",
      "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
      "proofPurpose": "assertionMethod",
      "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
    }
  },
  "options": {
    "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "proofPurpose": "assertionMethod",
    "created": "2020-04-02T18:48:36Z",
    "domain": "example.com",
    "challenge": "d436f0c8-fbd9-4e48-bbb2-55fc5d0920a8"
  }
}
```

<h3 id="verifypresentation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|Parameters for verifying a verifiablePresentation.|

> Example responses

> 200 Response

```json
{
  "checks": [
    "proof"
  ],
  "warnings": [],
  "errors": []
}
```

<h3 id="verifypresentation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Verifiable Presentation successfully verified!|[VerificationResult](#schemaverificationresult)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid or malformed input|None|
|413|[Payload Too Large](https://tools.ietf.org/html/rfc7231#section-6.5.11)|Payload too large|None|
|429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Request rate limit exceeded.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_DeriveCredentialRequest">DeriveCredentialRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderivecredentialrequest"></a>
<a id="schema_DeriveCredentialRequest"></a>
<a id="tocSderivecredentialrequest"></a>
<a id="tocsderivecredentialrequest"></a>

```json
{
  "verifiableCredential": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "id": "http://example.gov/credentials/3732",
    "type": [
      "VerifiableCredential",
      "UniversityDegreeCredential"
    ],
    "issuer": "did:example:123",
    "issuanceDate": "2020-03-16T22:37:26.544Z",
    "credentialSubject": {
      "id": "did:example:123",
      "degree": {
        "type": "BachelorDegree",
        "name": "Bachelor of Science and Arts"
      }
    },
    "proof": {
      "type": "Ed25519Signature2018",
      "created": "2020-04-02T18:28:08Z",
      "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
      "proofPurpose": "assertionMethod",
      "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
    }
  },
  "frame": {},
  "options": {
    "nonce": "lEixQKDQvRecCifKl789TQj+Ii6YWDLSwn3AxR0VpPJ1QV5htod/0VCchVf1zVM0y2E="
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|verifiableCredential|[VerifiableCredential](#schemaverifiablecredential)|false|none|A JSON-LD Verifiable Credential with a proof.|
|frame|object|false|none|A JSON-LD frame used for selective disclosure.|
|options|[DeriveCredentialOptions](#schemaderivecredentialoptions)|false|none|Options for specifying how the derived credential is created.|

<h2 id="tocS_DeriveCredentialResponse">DeriveCredentialResponse</h2>
<!-- backwards compatibility -->
<a id="schemaderivecredentialresponse"></a>
<a id="schema_DeriveCredentialResponse"></a>
<a id="tocSderivecredentialresponse"></a>
<a id="tocsderivecredentialresponse"></a>

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.gov/credentials/3732",
  "type": [
    "VerifiableCredential",
    "UniversityDegreeCredential"
  ],
  "issuer": "did:example:123",
  "issuanceDate": "2020-03-16T22:37:26.544Z",
  "credentialSubject": {
    "id": "did:example:123",
    "degree": {
      "type": "BachelorDegree",
      "name": "Bachelor of Science and Arts"
    }
  },
  "proof": {
    "type": "Ed25519Signature2018",
    "created": "2020-04-02T18:28:08Z",
    "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "proofPurpose": "assertionMethod",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
  }
}

```

### Properties

*None*

<h2 id="tocS_ProvePresentationRequest">ProvePresentationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaprovepresentationrequest"></a>
<a id="schema_ProvePresentationRequest"></a>
<a id="tocSprovepresentationrequest"></a>
<a id="tocsprovepresentationrequest"></a>

```json
{
  "presentation": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "holder": "did:example:123",
    "type": "VerifiablePresentation",
    "verifiableCredential": [
      {
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://www.w3.org/2018/credentials/examples/v1"
        ]
      },
      {
        "id": "http://example.gov/credentials/3732"
      },
      {
        "type": [
          "VerifiableCredential",
          "UniversityDegreeCredential"
        ]
      },
      {
        "issuer": "did:example:123"
      },
      {
        "issuanceDate": "2020-03-16T22:37:26.544Z"
      },
      {
        "credentialSubject": {
          "id": "did:example:123",
          "degree": {
            "type": "BachelorDegree",
            "name": "Bachelor of Science and Arts"
          }
        }
      },
      {
        "proof": {
          "type": "Ed25519Signature2018",
          "created": "2020-04-02T18:28:08Z",
          "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
          "proofPurpose": "assertionMethod",
          "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
        }
      }
    ]
  },
  "options": {
    "type": "Ed25519Signature2018",
    "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "proofPurpose": "assertionMethod",
    "created": "2020-04-02T18:48:36Z",
    "domain": "example.com",
    "challenge": "d436f0c8-fbd9-4e48-bbb2-55fc5d0920a8"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|presentation|[Presentation](#schemapresentation)|false|none|A JSON-LD Verifiable Presentation without a proof.|
|options|[PresentCredentialOptions](#schemapresentcredentialoptions)|false|none|Options for specifying how the LinkedDataProof is created.|

<h2 id="tocS_ProvePresentationResponse">ProvePresentationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprovepresentationresponse"></a>
<a id="schema_ProvePresentationResponse"></a>
<a id="tocSprovepresentationresponse"></a>
<a id="tocsprovepresentationresponse"></a>

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "holder": "did:example:123",
  "type": "VerifiablePresentation",
  "verifiableCredential": [
    {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
      ]
    },
    {
      "id": "http://example.gov/credentials/3732"
    },
    {
      "type": [
        "VerifiableCredential",
        "UniversityDegreeCredential"
      ]
    },
    {
      "issuer": "did:example:123"
    },
    {
      "issuanceDate": "2020-03-16T22:37:26.544Z"
    },
    {
      "credentialSubject": {
        "id": "did:example:123",
        "degree": {
          "type": "BachelorDegree",
          "name": "Bachelor of Science and Arts"
        }
      }
    },
    {
      "proof": {
        "type": "Ed25519Signature2018",
        "created": "2020-04-02T18:28:08Z",
        "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
        "proofPurpose": "assertionMethod",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
      }
    }
  ],
  "proof": {
    "type": "Ed25519Signature2018",
    "created": "2020-04-02T18:28:08Z",
    "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "proofPurpose": "assertionMethod",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
  }
}

```

### Properties

*None*

<h2 id="tocS_NotifyPresentationAvailableRequest">NotifyPresentationAvailableRequest</h2>
<!-- backwards compatibility -->
<a id="schemanotifypresentationavailablerequest"></a>
<a id="schema_NotifyPresentationAvailableRequest"></a>
<a id="tocSnotifypresentationavailablerequest"></a>
<a id="tocsnotifypresentationavailablerequest"></a>

```json
{
  "query": [
    {
      "type": "RequestQueryByFrame",
      "credentialQuery": [
        {
          "type": [
            "VerifiableCredential",
            "CommercialInvoiceCertificate"
          ],
          "reason": "Wallet XYZ is ready to selectively disclose new credentials."
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|object|false|none|See https://w3c-ccg.github.io/vp-request-spec/#format|
|» type|string|false|none|The type of query the server should reply with.|
|» credentialQuery|object|false|none|Details of the client's available presentation|

<h2 id="tocS_NotifyPresentationAvailableResponse">NotifyPresentationAvailableResponse</h2>
<!-- backwards compatibility -->
<a id="schemanotifypresentationavailableresponse"></a>
<a id="schema_NotifyPresentationAvailableResponse"></a>
<a id="tocSnotifypresentationavailableresponse"></a>
<a id="tocsnotifypresentationavailableresponse"></a>

```json
{
  "query": [
    {
      "type": "QueryByFrame",
      "credentialQuery": {
        "frame": {
          "@context": [
            "https://www.w3.org/2018/credentials/v1",
            "https://w3id.org/traceability/v1",
            "https://w3id.org/bbs/v1"
          ],
          "type": [
            "VerifiableCredential",
            "CommercialInvoiceCertificate"
          ],
          "credentialSubject": {
            "@explicit": true,
            "type": [
              "CommercialInvoice"
            ],
            "purchaseDate": {},
            "destinationCountry": {}
          }
        }
      }
    }
  ],
  "domain": "jobs.example.com",
  "challenge": "3182bdea-63d9-11ea-b6de-3b7c1404d57f"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|object|false|none|See https://w3c-ccg.github.io/vp-request-spec/#format|
|domain|string|false|none|See https://w3id.org/security#domain|
|challenge|string|false|none|See https://w3id.org/security#challenge|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "id": "invalid-json",
  "message": "The provided JSON data was malformed."
}

```

A response that denotes that an error has occurred.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|message|string|true|none|none|
|details|object|false|none|none|

<h2 id="tocS_StorePresentationRequest">StorePresentationRequest</h2>
<!-- backwards compatibility -->
<a id="schemastorepresentationrequest"></a>
<a id="schema_StorePresentationRequest"></a>
<a id="tocSstorepresentationrequest"></a>
<a id="tocsstorepresentationrequest"></a>

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "holder": "did:example:123",
  "type": "VerifiablePresentation",
  "verifiableCredential": [
    {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
      ]
    },
    {
      "id": "http://example.gov/credentials/3732"
    },
    {
      "type": [
        "VerifiableCredential",
        "UniversityDegreeCredential"
      ]
    },
    {
      "issuer": "did:example:123"
    },
    {
      "issuanceDate": "2020-03-16T22:37:26.544Z"
    },
    {
      "credentialSubject": {
        "id": "did:example:123",
        "degree": {
          "type": "BachelorDegree",
          "name": "Bachelor of Science and Arts"
        }
      }
    },
    {
      "proof": {
        "type": "Ed25519Signature2018",
        "created": "2020-04-02T18:28:08Z",
        "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
        "proofPurpose": "assertionMethod",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
      }
    }
  ],
  "proof": {
    "type": "Ed25519Signature2018",
    "created": "2020-04-02T18:28:08Z",
    "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "proofPurpose": "assertionMethod",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
  }
}

```

### Properties

*None*

<h2 id="tocS_VerifiablePresentation">VerifiablePresentation</h2>
<!-- backwards compatibility -->
<a id="schemaverifiablepresentation"></a>
<a id="schema_VerifiablePresentation"></a>
<a id="tocSverifiablepresentation"></a>
<a id="tocsverifiablepresentation"></a>

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "holder": "did:example:123",
  "type": "VerifiablePresentation",
  "verifiableCredential": [
    {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
      ]
    },
    {
      "id": "http://example.gov/credentials/3732"
    },
    {
      "type": [
        "VerifiableCredential",
        "UniversityDegreeCredential"
      ]
    },
    {
      "issuer": "did:example:123"
    },
    {
      "issuanceDate": "2020-03-16T22:37:26.544Z"
    },
    {
      "credentialSubject": {
        "id": "did:example:123",
        "degree": {
          "type": "BachelorDegree",
          "name": "Bachelor of Science and Arts"
        }
      }
    },
    {
      "proof": {
        "type": "Ed25519Signature2018",
        "created": "2020-04-02T18:28:08Z",
        "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
        "proofPurpose": "assertionMethod",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
      }
    }
  ],
  "proof": {
    "type": "Ed25519Signature2018",
    "created": "2020-04-02T18:28:08Z",
    "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "proofPurpose": "assertionMethod",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
  }
}

```

A JSON-LD Verifiable Presentation with a proof.

### Properties

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Presentation](#schemapresentation)|false|none|A JSON-LD Verifiable Presentation without a proof.|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» proof|[LinkedDataProof](#schemalinkeddataproof)|false|none|A JSON-LD Linked Data proof.|

<h2 id="tocS_VerifiablePresentationRequest">VerifiablePresentationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaverifiablepresentationrequest"></a>
<a id="schema_VerifiablePresentationRequest"></a>
<a id="tocSverifiablepresentationrequest"></a>
<a id="tocsverifiablepresentationrequest"></a>

```json
{
  "query": [
    {
      "type": "DIDAuth"
    },
    {
      "type": "QueryByExample",
      "credentialQuery": {
        "reason": "We need to see your existing University Degree credential.",
        "example": {
          "@context": [
            "https://www.w3.org/2018/credentials/v1",
            "https://www.w3.org/2018/credentials/examples/v1"
          ],
          "type": "UniversityDegreeCredential"
        }
      }
    }
  ],
  "challenge": "3182bdea-63d9-11ea-b6de-3b7c1404d57f",
  "domain": "edu.example",
  "interact": {
    "service": [
      {
        "type": "UnmediatedPresentationService2021",
        "serviceEndpoint": "https://edu.example/workflows/123456/presentations"
      }
    ]
  }
}

```

A Verifiable Presentation Request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|[object]|false|none|A set of one or more queries sent by the requester.|
|» type|[string]|false|none|The type of the query.|
|challenge|string|false|none|A challenge, intended to prevent replay attacks, provided by the requester that is typically expected to be included in the Verifiable Presentation response.|
|domain|string|false|none|A domain, intended to prevent replay attacks, provided by the requester that is typically expected to be included in the Verifiable Presentation response.|
|interact|[object]|false|none|A list of interaction mechanisms that are supported by the server.|
|» service|object|false|none|A service that is supported by the server that is capable of receiving a response to the Verifiable Presentation Request.|
|»» type|[string]|false|none|The type of the service.|
|»» serviceEndpoint|string|false|none|A URL that can be utilized for interacting with the service for the purposes of responding to the Verifiable Presentation Request.|

<h2 id="tocS_Issuer">Issuer</h2>
<!-- backwards compatibility -->
<a id="schemaissuer"></a>
<a id="schema_Issuer"></a>
<a id="tocSissuer"></a>
<a id="tocsissuer"></a>

```json
{
  "id": "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd"
}

```

A JSON-LD Verifiable Credential Issuer.

### Properties

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» id|string|false|none|none|

<h2 id="tocS_Credential">Credential</h2>
<!-- backwards compatibility -->
<a id="schemacredential"></a>
<a id="schema_Credential"></a>
<a id="tocScredential"></a>
<a id="tocscredential"></a>

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.gov/credentials/3732",
  "type": [
    "VerifiableCredential",
    "UniversityDegreeCredential"
  ],
  "issuer": "did:example:123",
  "issuanceDate": "2020-03-16T22:37:26.544Z",
  "credentialSubject": {
    "id": "did:example:123",
    "degree": {
      "type": "BachelorDegree",
      "name": "Bachelor of Science and Arts"
    }
  }
}

```

A JSON-LD Verifiable Credential without a proof.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[string]|false|none|The JSON-LD context of the credential.|
|id|string|false|none|The ID of the credential.|
|type|[string]|false|none|The JSON-LD type of the credential.|
|issuer|[Issuer](#schemaissuer)|false|none|A JSON-LD Verifiable Credential Issuer.|
|issuanceDate|string|false|none|The issuanceDate|
|expirationDate|string|false|none|The expirationDate|
|credentialSubject|object|false|none|The subject|

<h2 id="tocS_LinkedDataProof">LinkedDataProof</h2>
<!-- backwards compatibility -->
<a id="schemalinkeddataproof"></a>
<a id="schema_LinkedDataProof"></a>
<a id="tocSlinkeddataproof"></a>
<a id="tocslinkeddataproof"></a>

```json
{
  "type": "Ed25519Signature2018",
  "created": "2020-04-02T18:28:08Z",
  "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
  "proofPurpose": "assertionMethod",
  "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
}

```

A JSON-LD Linked Data proof.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Linked Data Signature Suite used to produce proof.|
|created|string|false|none|Date the proof was created.|
|challenge|string|false|none|A value chosen by the verifier to mitigate authentication proof replay attacks.|
|domain|string|false|none|The domain of the proof to restrict its use to a particular target.|
|nonce|string|false|none|A value chosen by the creator of a proof to randomize proof values for privacy purposes.|
|verificationMethod|string|false|none|Verification Method used to verify proof.|
|proofPurpose|string|false|none|The purpose of the proof to be used with verificationMethod.|
|jws|string|false|none|Detached JSON Web Signature.|
|proofValue|string|false|none|Value of the Linked Data proof.|

<h2 id="tocS_VerifiableCredential">VerifiableCredential</h2>
<!-- backwards compatibility -->
<a id="schemaverifiablecredential"></a>
<a id="schema_VerifiableCredential"></a>
<a id="tocSverifiablecredential"></a>
<a id="tocsverifiablecredential"></a>

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.gov/credentials/3732",
  "type": [
    "VerifiableCredential",
    "UniversityDegreeCredential"
  ],
  "issuer": "did:example:123",
  "issuanceDate": "2020-03-16T22:37:26.544Z",
  "credentialSubject": {
    "id": "did:example:123",
    "degree": {
      "type": "BachelorDegree",
      "name": "Bachelor of Science and Arts"
    }
  },
  "proof": {
    "type": "Ed25519Signature2018",
    "created": "2020-04-02T18:28:08Z",
    "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "proofPurpose": "assertionMethod",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
  }
}

```

A JSON-LD Verifiable Credential with a proof.

### Properties

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Credential](#schemacredential)|false|none|A JSON-LD Verifiable Credential without a proof.|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» proof|[LinkedDataProof](#schemalinkeddataproof)|false|none|A JSON-LD Linked Data proof.|

<h2 id="tocS_DeriveCredentialOptions">DeriveCredentialOptions</h2>
<!-- backwards compatibility -->
<a id="schemaderivecredentialoptions"></a>
<a id="schema_DeriveCredentialOptions"></a>
<a id="tocSderivecredentialoptions"></a>
<a id="tocsderivecredentialoptions"></a>

```json
{
  "nonce": "lEixQKDQvRecCifKl789TQj+Ii6YWDLSwn3AxR0VpPJ1QV5htod/0VCchVf1zVM0y2E="
}

```

Options for specifying how the derived credential is created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nonce|string|false|none|An encoded nonce provided by the holder of the credential to be included into the LinkedDataProof.|

<h2 id="tocS_Presentation">Presentation</h2>
<!-- backwards compatibility -->
<a id="schemapresentation"></a>
<a id="schema_Presentation"></a>
<a id="tocSpresentation"></a>
<a id="tocspresentation"></a>

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "holder": "did:example:123",
  "type": "VerifiablePresentation",
  "verifiableCredential": [
    {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
      ]
    },
    {
      "id": "http://example.gov/credentials/3732"
    },
    {
      "type": [
        "VerifiableCredential",
        "UniversityDegreeCredential"
      ]
    },
    {
      "issuer": "did:example:123"
    },
    {
      "issuanceDate": "2020-03-16T22:37:26.544Z"
    },
    {
      "credentialSubject": {
        "id": "did:example:123",
        "degree": {
          "type": "BachelorDegree",
          "name": "Bachelor of Science and Arts"
        }
      }
    },
    {
      "proof": {
        "type": "Ed25519Signature2018",
        "created": "2020-04-02T18:28:08Z",
        "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
        "proofPurpose": "assertionMethod",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
      }
    }
  ]
}

```

A JSON-LD Verifiable Presentation without a proof.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[string]|false|none|The JSON-LD context of the presentation.|
|id|string|false|none|The ID of the presentation.|
|type|[string]|false|none|The JSON-LD type of the presentation.|
|holder|object¦null|false|none|The holder - will be ignored if no proof is present since there is no proof of authority over the credentials|
|verifiableCredential|[[VerifiableCredential](#schemaverifiablecredential)]|false|none|The Verifiable Credentials|

<h2 id="tocS_PresentCredentialOptions">PresentCredentialOptions</h2>
<!-- backwards compatibility -->
<a id="schemapresentcredentialoptions"></a>
<a id="schema_PresentCredentialOptions"></a>
<a id="tocSpresentcredentialoptions"></a>
<a id="tocspresentcredentialoptions"></a>

```json
{
  "type": "Ed25519Signature2018",
  "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
  "proofPurpose": "assertionMethod",
  "created": "2020-04-02T18:48:36Z",
  "domain": "example.com",
  "challenge": "d436f0c8-fbd9-4e48-bbb2-55fc5d0920a8"
}

```

Options for specifying how the LinkedDataProof is created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The type of the proof. Default is an appropriate proof type corresponding to the verification method.|
|verificationMethod|string|false|none|The URI of the verificationMethod used for the proof. If omitted, a default verification method will be used.|
|proofPurpose|string|false|none|The purpose of the proof. Default 'assertionMethod'.|
|created|string|false|none|The date and time of the proof (with a maximum accuracy in seconds). Default current system time.|
|challenge|string|false|none|A challenge provided by the requesting party of the proof. For example 6e62f66e-67de-11eb-b490-ef3eeefa55f2|
|domain|string|false|none|The intended domain of validity for the proof. For example website.example|

<h2 id="tocS_IssueCredentialRequest">IssueCredentialRequest</h2>
<!-- backwards compatibility -->
<a id="schemaissuecredentialrequest"></a>
<a id="schema_IssueCredentialRequest"></a>
<a id="tocSissuecredentialrequest"></a>
<a id="tocsissuecredentialrequest"></a>

```json
{
  "credential": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "id": "http://example.gov/credentials/3732",
    "type": [
      "VerifiableCredential",
      "UniversityDegreeCredential"
    ],
    "issuer": "did:example:123",
    "issuanceDate": "2020-03-16T22:37:26.544Z",
    "credentialSubject": {
      "id": "did:example:123",
      "degree": {
        "type": "BachelorDegree",
        "name": "Bachelor of Science and Arts"
      }
    }
  },
  "options": {
    "type": "Ed25519Signature2018",
    "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "proofPurpose": "assertionMethod",
    "created": "2020-04-02T18:48:36Z",
    "domain": "revocation.example",
    "challenge": "d436f0c8-fbd9-4e48-bbb2-55fc5d0920a8",
    "credentialStatus": {
      "type": "RevocationList2020Status"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credential|[Credential](#schemacredential)|false|none|A JSON-LD Verifiable Credential without a proof.|
|options|[IssueCredentialOptions](#schemaissuecredentialoptions)|false|none|Options for specifying how the LinkedDataProof is created.|

<h2 id="tocS_IssueCredentialResponse">IssueCredentialResponse</h2>
<!-- backwards compatibility -->
<a id="schemaissuecredentialresponse"></a>
<a id="schema_IssueCredentialResponse"></a>
<a id="tocSissuecredentialresponse"></a>
<a id="tocsissuecredentialresponse"></a>

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.gov/credentials/3732",
  "type": [
    "VerifiableCredential",
    "UniversityDegreeCredential"
  ],
  "issuer": "did:example:123",
  "issuanceDate": "2020-03-16T22:37:26.544Z",
  "credentialSubject": {
    "id": "did:example:123",
    "degree": {
      "type": "BachelorDegree",
      "name": "Bachelor of Science and Arts"
    }
  },
  "proof": {
    "type": "Ed25519Signature2018",
    "created": "2020-04-02T18:28:08Z",
    "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "proofPurpose": "assertionMethod",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
  }
}

```

### Properties

*None*

<h2 id="tocS_UpdateCredentialStatus">UpdateCredentialStatus</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecredentialstatus"></a>
<a id="schema_UpdateCredentialStatus"></a>
<a id="tocSupdatecredentialstatus"></a>
<a id="tocsupdatecredentialstatus"></a>

```json
{
  "credentialId": "urn:uuid:45a44711-e457-4fa8-9b89-69fe0287c86a",
  "credentialStatus": [
    {
      "type": "RevocationList2020Status",
      "status": "0"
    }
  ]
}

```

Request for updating the status of an issued credential.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credentialId|string|false|none|none|
|credentialStatus|[object]|false|none|none|
|» type|string|false|none|none|
|» status|string|false|none|none|

<h2 id="tocS_IssueCredentialOptions">IssueCredentialOptions</h2>
<!-- backwards compatibility -->
<a id="schemaissuecredentialoptions"></a>
<a id="schema_IssueCredentialOptions"></a>
<a id="tocSissuecredentialoptions"></a>
<a id="tocsissuecredentialoptions"></a>

```json
{
  "type": "Ed25519Signature2018",
  "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
  "proofPurpose": "assertionMethod",
  "created": "2020-04-02T18:48:36Z",
  "domain": "revocation.example",
  "challenge": "d436f0c8-fbd9-4e48-bbb2-55fc5d0920a8",
  "credentialStatus": {
    "type": "RevocationList2020Status"
  }
}

```

Options for specifying how the LinkedDataProof is created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The type of the proof. Default is an appropriate proof type corresponding to the verification method.|
|verificationMethod|string|false|none|The URI of the verificationMethod used for the proof. If omitted, a default verification method will be used.|
|proofPurpose|string|false|none|The purpose of the proof. Default 'assertionMethod'.|
|created|string|false|none|The date and time of the proof (with a maximum accuracy in seconds). Default current system time.|
|challenge|string|false|none|A challenge provided by the requesting party of the proof. For example 6e62f66e-67de-11eb-b490-ef3eeefa55f2|
|domain|string|false|none|The intended domain of validity for the proof. For example website.example|
|credentialStatus|object|false|none|The method of credential status to issue the credential including. If omitted credential status will be included.|
|» type|string|false|none|The type of credential status to issue the credential with|

<h2 id="tocS_VerifyCredentialRequest">VerifyCredentialRequest</h2>
<!-- backwards compatibility -->
<a id="schemaverifycredentialrequest"></a>
<a id="schema_VerifyCredentialRequest"></a>
<a id="tocSverifycredentialrequest"></a>
<a id="tocsverifycredentialrequest"></a>

```json
{
  "verifiableCredential": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "id": "http://example.gov/credentials/3732",
    "type": [
      "VerifiableCredential",
      "UniversityDegreeCredential"
    ],
    "issuer": "did:example:123",
    "issuanceDate": "2020-03-16T22:37:26.544Z",
    "credentialSubject": {
      "id": "did:example:123",
      "degree": {
        "type": "BachelorDegree",
        "name": "Bachelor of Science and Arts"
      }
    },
    "proof": {
      "type": "Ed25519Signature2018",
      "created": "2020-04-02T18:28:08Z",
      "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
      "proofPurpose": "assertionMethod",
      "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
    }
  },
  "options": {
    "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "proofPurpose": "assertionMethod",
    "created": "2020-04-02T18:48:36Z",
    "domain": "example.com",
    "challenge": "d436f0c8-fbd9-4e48-bbb2-55fc5d0920a8"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|verifiableCredential|[VerifiableCredential](#schemaverifiablecredential)|false|none|A JSON-LD Verifiable Credential with a proof.|
|options|[VerifyOptions](#schemaverifyoptions)|false|none|Options for specifying how the LinkedDataProof is verified.|

<h2 id="tocS_VerifyCredentialResponse">VerifyCredentialResponse</h2>
<!-- backwards compatibility -->
<a id="schemaverifycredentialresponse"></a>
<a id="schema_VerifyCredentialResponse"></a>
<a id="tocSverifycredentialresponse"></a>
<a id="tocsverifycredentialresponse"></a>

```json
{
  "checks": [
    "proof"
  ],
  "warnings": [],
  "errors": []
}

```

### Properties

*None*

<h2 id="tocS_VerifyPresentationRequest">VerifyPresentationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaverifypresentationrequest"></a>
<a id="schema_VerifyPresentationRequest"></a>
<a id="tocSverifypresentationrequest"></a>
<a id="tocsverifypresentationrequest"></a>

```json
{
  "verifiablePresentation": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "holder": "did:example:123",
    "type": "VerifiablePresentation",
    "verifiableCredential": [
      {
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://www.w3.org/2018/credentials/examples/v1"
        ]
      },
      {
        "id": "http://example.gov/credentials/3732"
      },
      {
        "type": [
          "VerifiableCredential",
          "UniversityDegreeCredential"
        ]
      },
      {
        "issuer": "did:example:123"
      },
      {
        "issuanceDate": "2020-03-16T22:37:26.544Z"
      },
      {
        "credentialSubject": {
          "id": "did:example:123",
          "degree": {
            "type": "BachelorDegree",
            "name": "Bachelor of Science and Arts"
          }
        }
      },
      {
        "proof": {
          "type": "Ed25519Signature2018",
          "created": "2020-04-02T18:28:08Z",
          "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
          "proofPurpose": "assertionMethod",
          "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
        }
      }
    ],
    "proof": {
      "type": "Ed25519Signature2018",
      "created": "2020-04-02T18:28:08Z",
      "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
      "proofPurpose": "assertionMethod",
      "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
    }
  },
  "options": {
    "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "proofPurpose": "assertionMethod",
    "created": "2020-04-02T18:48:36Z",
    "domain": "example.com",
    "challenge": "d436f0c8-fbd9-4e48-bbb2-55fc5d0920a8"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|verifiablePresentation|[VerifiablePresentation](#schemaverifiablepresentation)|false|none|A JSON-LD Verifiable Presentation with a proof.|
|options|[VerifyOptions](#schemaverifyoptions)|false|none|Options for specifying how the LinkedDataProof is verified.|

<h2 id="tocS_ProoflessVerifyPresentationRequest">ProoflessVerifyPresentationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaprooflessverifypresentationrequest"></a>
<a id="schema_ProoflessVerifyPresentationRequest"></a>
<a id="tocSprooflessverifypresentationrequest"></a>
<a id="tocsprooflessverifypresentationrequest"></a>

```json
{
  "presentation": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "holder": "did:example:123",
    "type": "VerifiablePresentation",
    "verifiableCredential": [
      {
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://www.w3.org/2018/credentials/examples/v1"
        ]
      },
      {
        "id": "http://example.gov/credentials/3732"
      },
      {
        "type": [
          "VerifiableCredential",
          "UniversityDegreeCredential"
        ]
      },
      {
        "issuer": "did:example:123"
      },
      {
        "issuanceDate": "2020-03-16T22:37:26.544Z"
      },
      {
        "credentialSubject": {
          "id": "did:example:123",
          "degree": {
            "type": "BachelorDegree",
            "name": "Bachelor of Science and Arts"
          }
        }
      },
      {
        "proof": {
          "type": "Ed25519Signature2018",
          "created": "2020-04-02T18:28:08Z",
          "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
          "proofPurpose": "assertionMethod",
          "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
        }
      }
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|presentation|[Presentation](#schemapresentation)|false|none|A JSON-LD Verifiable Presentation without a proof.|

<h2 id="tocS_VerifyPresentationResponse">VerifyPresentationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaverifypresentationresponse"></a>
<a id="schema_VerifyPresentationResponse"></a>
<a id="tocSverifypresentationresponse"></a>
<a id="tocsverifypresentationresponse"></a>

```json
{
  "checks": [
    "proof"
  ],
  "warnings": [],
  "errors": []
}

```

### Properties

*None*

<h2 id="tocS_VerifyOptions">VerifyOptions</h2>
<!-- backwards compatibility -->
<a id="schemaverifyoptions"></a>
<a id="schema_VerifyOptions"></a>
<a id="tocSverifyoptions"></a>
<a id="tocsverifyoptions"></a>

```json
{
  "verificationMethod": "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
  "proofPurpose": "assertionMethod",
  "created": "2020-04-02T18:48:36Z",
  "domain": "example.com",
  "challenge": "d436f0c8-fbd9-4e48-bbb2-55fc5d0920a8"
}

```

Options for specifying how the LinkedDataProof is verified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|challenge|string|false|none|A challenge provided by the requesting party of the proof. For example 6e62f66e-67de-11eb-b490-ef3eeefa55f2|
|domain|string|false|none|The intended domain of validity for the proof. For example website.example|

<h2 id="tocS_VerificationResult">VerificationResult</h2>
<!-- backwards compatibility -->
<a id="schemaverificationresult"></a>
<a id="schema_VerificationResult"></a>
<a id="tocSverificationresult"></a>
<a id="tocsverificationresult"></a>

```json
{
  "checks": [
    "proof"
  ],
  "warnings": [],
  "errors": []
}

```

Object summarizing a verification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checks|[string]|false|none|The checks performed|
|warnings|[string]|false|none|Warnings|
|errors|[string]|false|none|Errors|

</body>
</html>
