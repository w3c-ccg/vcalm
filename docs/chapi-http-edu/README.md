A Walkthrough of a University Degree Flow End to End with CHAPI and a slightly modified CCG VC Data Model API.

## 1. DID Auth

On the website that will be issuing the credential, the subject / holder of the credential must first complete DID Auth.

This step is required to ensure that only the subject / holder can receive a VC from the issuer.

If I cannot complete DIDAuth with CHAPI as did:example:123, I should not be issued a VC University Degree for did:example:123.

Example CHAPI Query:

```js
const query = {
  web: {
    VerifiablePresentation: {
      query: {
        type: "DIDAuth",
      },
      // a 128-bit randomly generated value encoded as a string (use a UUID);
      // it will be digitally signed in the authentication proof
      // that will be attached to the VerifiablePresentation response
      challenge: "99612b24-63d9-11ea-b99f-4f66f3e4f81a",
      // the domain that must be digitally signed in the authentication
      // proof that will be attached to the VerifiablePresentation
      // response, identifying the recipient
      domain: "issuer.interop.transmute.world",
    },
  },
};
const result = await navigator.credentials.get(query);
```

Example CHAPI Response:

```json
{
  "@context": "https://www.w3.org/2018/credentials/v1",
  "type": "VerifiablePresentation",
  "holder": "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
  "proof": {
    "type": "Ed25519Signature2018",
    "created": "2020-04-02T18:21:44Z",
    "verificationMethod": "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd#z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
    "proofPurpose": "authentication",
    "challenge": "99612b24-63d9-11ea-b99f-4f66f3e4f81a",
    "domain": "issuer.interop.transmute.world",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..2xjpkHW6EY-cKD8DrMIkkiB2Q_k6kHynTbR7XGgtYR92blQWpL6Q-2nTdQi1rNhJtmHw1wWWssKMO0EdIEnsCw"
  }
}
```

## 2. Issuance

Next a request for a University degree needs to be made to the university website.

The website needs to verify the DIDAuth Response provided by the wallet, so that it can issue a credential for the wallet subject / holder.

### Request

POST https://vc.transmute.world/vc-data-model/verifications

```json
{
  "@context": "https://www.w3.org/2018/credentials/v1",
  "type": "VerifiablePresentation",
  "holder": "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
  "proof": {
    "type": "Ed25519Signature2018",
    "created": "2020-04-02T18:21:44Z",
    "verificationMethod": "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd#z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
    "proofPurpose": "authentication",
    "challenge": "99612b24-63d9-11ea-b99f-4f66f3e4f81a",
    "domain": "issuer.interop.transmute.world",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..2xjpkHW6EY-cKD8DrMIkkiB2Q_k6kHynTbR7XGgtYR92blQWpL6Q-2nTdQi1rNhJtmHw1wWWssKMO0EdIEnsCw"
  }
}
```

## Response

```json
{ "checks": ["proof"] }
```

Normally, the issuance request flow would look like:

User Agent -> Issuer Website (university.example.com) -> Internal Issuer API

For now we will use HTTP and CHAPI to request the credential be issued and stored in the user's wallet directly (skipping the university.example.com step, since it simply forwards requests based on business logic.)

### Request

POST https://vc.transmute.world/vc-data-model/credentials

```json
{
  "credential": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "id": "http://example.gov/credentials/3732",
    "type": ["VerifiableCredential", "UniversityDegreeCredential"],
    "issuer": "did:web:vc.transmute.world",
    "issuanceDate": "2020-03-16T22:37:26.544Z",
    "credentialSubject": {
      "id": "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
      "degree": {
        "type": "BachelorDegree",
        "name": "Bachelor of Science and Arts"
      }
    }
  },
  "options": {
    "proofPurpose": "assertionMethod",
    "issuer": "did:web:vc.transmute.world",
    "verificationMethod": "did:web:vc.transmute.world#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN"
  }
}
```

### Response

See [./vc.json](./vc.json).

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.gov/credentials/3732",
  "type": ["VerifiableCredential", "UniversityDegreeCredential"],
  "issuer": "did:web:vc.transmute.world",
  "issuanceDate": "2020-03-16T22:37:26.544Z",
  "credentialSubject": {
    "id": "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
    "degree": {
      "type": "BachelorDegree",
      "name": "Bachelor of Science and Arts"
    }
  },
  "proof": {
    "type": "Ed25519Signature2018",
    "created": "2020-04-02T18:28:08Z",
    "verificationMethod": "did:web:vc.transmute.world#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "proofPurpose": "assertionMethod",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
  }
}
```

On the client, the VC must now be stored in CHAPI, before it can be stored, it must be wrapped in a VP:

```js
const vp = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1",
  ],
  type: "VerifiablePresentation",
  verifiableCredential: [vc],
};
const webCredentialWrapper = new global.WebCredential(vp.type, vp);
const result = await navigator.credentials.store(webCredentialWrapper);
```

## 3. Presentation

Now that the user has the credential in their wallet, they can visit a website, and present the credential for verification. For example, a student discount at checkout time on software distribution website.

First the website, must request the VC from the wallet user via CHAPI. This request MUST include a domain and challenge to prevent replay attacks:

```js
const query = {
  web: {
    VerifiablePresentation: {
      query: [
        {
          type: "QueryByExample",
          credentialQuery: {
            reason: `Please present an UniversityDegreeCredential for JaneDoe.`,
            example: {
              "@context": [
                "https://www.w3.org/2018/credentials/v1",
                "https://www.w3.org/2018/credentials/examples/v1",
              ],
              type: ["UniversityDegreeCredential"],
            },
          },
        },
      ],
      // a 128-bit randomly generated value encoded as a string (use a UUID);
      // it will be digitally signed in the authentication proof
      // that will be attached to the VerifiablePresentation response
      challenge: "99612b24-63d9-11ea-b99f-4f66f3e4f81a",
      // the domain that must be digitally signed in the authentication
      // proof that will be attached to the VerifiablePresentation
      // response, identifying the recipient
      domain: "verifier.interop.transmute.world",
    },
  },
};
const result = await navigator.credentials.get(query);
```

In order to construct a valid VP, the presentation must be signed by the holder. If the holder uses keys that are protected in a KMS, the holder may need to request a VP by prooved by a remote service. Mobile applications that contain embedded keys, may perform this step locally.

### Request

POST https://vc.transmute.world/vc-data-model/presentations

```json
{
  "presentation": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "holder": "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
    "type": "VerifiablePresentation",
    "verifiableCredential": {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
      ],
      "id": "http://example.gov/credentials/3732",
      "type": ["VerifiableCredential", "UniversityDegreeCredential"],
      "issuer": "did:web:vc.transmute.world",
      "issuanceDate": "2020-03-16T22:37:26.544Z",
      "credentialSubject": {
        "id": "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
        "degree": {
          "type": "BachelorDegree",
          "name": "Bachelor of Science and Arts"
        }
      },
      "proof": {
        "type": "Ed25519Signature2018",
        "created": "2020-04-02T18:28:08Z",
        "verificationMethod": "did:web:vc.transmute.world#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
        "proofPurpose": "assertionMethod",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
      }
    }
  },
  "options": {
    "proofPurpose": "authentication",
    "domain": "verifier.interop.transmute.world",
    "challenge": "99612b24-63d9-11ea-b99f-4f66f3e4f81a",
    "verificationMethod": "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd#z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd"
  }
}
```

### Response

See [./vp.json](./vp.json).

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "holder": "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
  "type": "VerifiablePresentation",
  "verifiableCredential": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "id": "http://example.gov/credentials/3732",
    "type": ["VerifiableCredential", "UniversityDegreeCredential"],
    "issuer": "did:web:vc.transmute.world",
    "issuanceDate": "2020-03-16T22:37:26.544Z",
    "credentialSubject": {
      "id": "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
      "degree": {
        "type": "BachelorDegree",
        "name": "Bachelor of Science and Arts"
      }
    },
    "proof": {
      "type": "Ed25519Signature2018",
      "created": "2020-04-02T18:28:08Z",
      "verificationMethod": "did:web:vc.transmute.world#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
      "proofPurpose": "assertionMethod",
      "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
    }
  },
  "proof": {
    "type": "Ed25519Signature2018",
    "created": "2020-04-02T18:48:36Z",
    "verificationMethod": "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd#z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
    "proofPurpose": "authentication",
    "challenge": "99612b24-63d9-11ea-b99f-4f66f3e4f81a",
    "domain": "verifier.interop.transmute.world",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..b-o9btxwIMwrXJC3hHxwSWI_ZryUwi41siEVvOhCYigfp68Y_z1Ic5jqBBhezU109kGL7znEiu8r9yIkvfuZCA"
  }
}
```

## 3. Verification

Next, the client must submit the VP to to the verifier http API. Normally this information would flow through the following systems, possibly over many transports.

User Agent -> Verifier Website (software4students.example.com) -> Internal Verification API

Note: The Verifier Website might perform business validation before submiting the VP for verification. business validation migth include rejecting VCs issued by parties excluded from an `allow-list` or present a `deny-list`, or reject VPs where the `credentialSubject.id` is not the holder.

Validation of business logic MUST be performed prior to Verification of proof material.

HTTP is expensive, do not submit things to a `vc-data-model` HTTP API you know will fail.

The verifier HTTP API MUST verify the proof on the VP as well as the proof on the VC.

#### Verification Endpoint Is MISSING options for { domain, challenge }

## Request

POST https://vc.transmute.world/vc-data-model/verifications

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "holder": "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
  "type": "VerifiablePresentation",
  "verifiableCredential": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "id": "http://example.gov/credentials/3732",
    "type": ["VerifiableCredential", "UniversityDegreeCredential"],
    "issuer": "did:web:vc.transmute.world",
    "issuanceDate": "2020-03-16T22:37:26.544Z",
    "credentialSubject": {
      "id": "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
      "degree": {
        "type": "BachelorDegree",
        "name": "Bachelor of Science and Arts"
      }
    },
    "proof": {
      "type": "Ed25519Signature2018",
      "created": "2020-04-02T18:28:08Z",
      "verificationMethod": "did:web:vc.transmute.world#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
      "proofPurpose": "assertionMethod",
      "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"
    }
  },
  "proof": {
    "type": "Ed25519Signature2018",
    "created": "2020-04-02T18:48:36Z",
    "verificationMethod": "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd#z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
    "proofPurpose": "authentication",
    "challenge": "99612b24-63d9-11ea-b99f-4f66f3e4f81a",
    "domain": "verifier.interop.transmute.world",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..b-o9btxwIMwrXJC3hHxwSWI_ZryUwi41siEVvOhCYigfp68Y_z1Ic5jqBBhezU109kGL7znEiu8r9yIkvfuZCA"
  }
}
```

## Response

```json
{ "checks": ["proof"] }
```
