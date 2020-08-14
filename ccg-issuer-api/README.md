# VC Issuer HTTP API

This repo has moved to [vc-http-api](https://github.com/w3c-ccg/vc-http-api).

This is an open API specification for issuing digital credentials based on standards such as the Verifiable Credentials Data Model (https://www.w3.org/TR/vc-data-model/), JWT (https://tools.ietf.org/html/rfc7519), and Open Badges (https://openbadges.org/). Implementations of this API may differ in terms of which data formats or proof formats they do or do not support. Also, implementations may choose to not support certain parts of this API (e.g. optional parts include changing and retrieving the status of a credential, or refreshing a credential).

The latest version can be viewed at https://w3c-ccg.github.io/vc-issuer-http-api/index.html.

## Versioning

This repo and specification use [Semantic Versioning 2.0.0](https://semver.org/#semantic-versioning-200).

The API version is defined [api.yml](./api.yml).

You can browse the [latest release of github](https://github.com/w3c-ccg/vc-issuer-http-api/releases).

When implementing this specification servers must respect the `VC-API-Version` HTTP Header. 

For example:

```
curl -s -X POST https://example.com/issuer/credentials \
-H 'Content-type: application/json' \
-H 'VC-API-Version: 0.0.1' \
-d @./payload.json  
```

## Contact

* https://www.w3.org/community/credentials/
