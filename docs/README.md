# [VC HTTP API](https://github.com/w3c-ccg/vc-http-api/) Goals

The W3C CCG VC HTTP API is a RESTful API definition conforming with the [OpenAPI (formerly known as Swagger) 3.0 Specification](https://swagger.io/specification/) for constructing and verifying objects which conform to the [Verifiable Credential Data Model](https://www.w3.org/TR/vc-data-model/) specification.  This API provides a standard set of interfaces by which interoperability may be tested and verified by various parties who leverage Verifiable Credentials (VCs).

As some implementations may not support all endpoints defined by this specification, the APIs provide a clean measure by which to identify which methods are or are not implemented when comparing solutions that provide VC support across vendors.

Test procedures and specifications are provided as part of this API definition to allow for repeatable and automated interoperability testing between solutions that interact with VCs.

## Style, Versioning, and Contribution
This API is versioned in conformance with the [Semantic Versioning 2.0 specification](https://semver.org/) to prevent breaking changes between minor versions, and to allow for reliable testing and integration of implementations of this API within enterprise environments.

API style, endpoint naming, and object definitions within the vc-http-api should be in compliance with the guidelines laid out in the [REST API Tutorial](https://restfulapi.net/).  The VC HTTP API conforms primarily to the [controller](https://restfulapi.net/resource-naming/) model as detailed in the REST documentation.

The actual standard and specification defined by the vc-http-api is provided in [YAML format](./vc-http-api.yml) and should be referenced directly by developers should questions arise, as certain interfaces on top of OpenAPI specifications may differ in their presentation of certain scenarios commonly encountered in API definitions, especially when dealling with `nullable` parameters or properties.

Contributions to this repo should take place via a Pull Request, and should generally reference an issue and related discussion around the topic 

## Best Practices

### Security

Implementations of this API SHOULD NOT be exposed directly over http(s) without authorization.  Best Practices around OAuth and other widely accepted standards for authentication and/or authorization should be followed.

### Holder APIs 

Holder APIs are optional as many implementations will not need them, however they are extremely useful for testing purposes as well as for cases where WebKMS is not present or not an option.

## Additional Documentation

- [Verifiable Credential Issuer HTTP API Architecture Model](architecture.md)
- [Verification, Validation, and Veracity](verification.md)
