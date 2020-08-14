#  Verifiable Credential Issuer HTTP API Architecture Model
This document describes the architecture model and context for the Verifiable
Credential Issuer HTTP API.

## Overview
The Verifiable Credential Issuer HTTP API is designed to be a consistent API for
Issuer Services to call in order to generate Verifiable Credentials. This API is
intended for Issuer Services who are able to manage and secure external
connections to Holders. This API encapsulates and abstracts the Verifiable
Credential data model, format, and proof methods from Issuer Services. This API
also abstracts any underlying DID methods, resolver capabilities, and
cryptographic algorithms from the Issuer Services.

## Objectives
The following capture the objectives of this API.
1. Provide an open and consistent HTTP based API for Issuer Services to leverage
when generating Verifiable Credentials.
1. Provide format correctness checks on provided Verifiable Credential data and
cryptographic services for producing a complete Verifiable Credential.
1. Provide Verifiable Credential construction capabilities to abstract or
template specific Verifiable Credential properties as appropriate
(currently optional and under-specified).  
1. Support all Verifiable Credential types as defined in the Verifiable
Credentials Data Model v1.0 including JSON-LD, JWT and ZKP types.
1. Abstract the underlying DID methods and cryptographic algorithms from the
Issuer Services as required.
1. Rely on 'upstream' Issuer Services to manage connections with external
entities (like Holder software).

These objectives allow for Issuer Services to modify their underlying Verifiable
Credential, supported DID methods, and cryptographic suites software with
minimal impact to their application services, business logic and user experience.  

## Component Overview
The following diagram is a high level, generic overview of the intended
architecture context for this API.

![Architecture Diagram](images/vc-issuer-http-api.png)

### Components
#### 1. User Agent
This is the client software interacting with the
Issuer Service. This may be a user agent such as a web browser, a mobile App,
a Kiosk, or other software that is interacting with the Issuer Service for the
purposes of collecting a Verifiable Credential.

#### 2. Holder / Wallet
This is the software that is able to request/store/manage the user's
Verifiable Credentials, and possibly related artifacts such as DIDs and
cryptographic keys and so on. See the definition in the
[Verifiable Credentials Data Model 1.0](https://www.w3.org/TR/vc-data-model/#terminology)
specification. Examples include cloud
agents, mobile Apps, web browser apps, or a combination thereof. Holders may
make use of other software components not shown.    

#### 3. Issuer Front End Services
The Issuer service that renders to the user's agent software, helping them obtain the
credential and navigate the Issuer business logic.

#### 4. Issuer-to-Holder Communication Interface
The abstract interface for the Issuer and Holder to communicate to authenticate,
exchange, and manage DIDs and Verifiable Credentials. Issuer Services are
responsible for establishing a secure communication channel with the user's
Holder. Examples include CHAPI, DIDComm, possibly a proximity wireless channel, a physical/visual barcode
scanner, etc... . In certain deployments the communication interface is tightly
coupled to the user interface, and in other scenarios this is managed through
cloud agents.  

#### 5. Issuer Services
The Issuer collection of middleware / micro services / application servers that
make up the Issuer Service.

**5a. Issuer Application Services**: Application, middleware and business logic
associated with issuing credentials.

**5b. Verifiable Credential Issuer**: Application and middleware logic for preparing
Verifiable Credential data for a Holder.

#### 6. Issuer Subject Database
The database containing the Subject data the Issuer will use to generate Verifiable
Credentials.

#### 7. API Access Control Gateway
This architecture does not assume the deployment profile of the Verifiable
Credential Issuer API Service; it could be 'local and private' to the Issuer Services,
or it could be a multi-tenant cloud service. In all cases, securing inbound connections
is the purpose of this component and outside the scope of this specification.

#### 8. Verifiable Credential Issuer HTTP API Service
An implementation of the Verifiable Credentials Issuer HTTP API (this spec) that
is capable of generating Verifiable Credentials in accordance with the Issuer's
policies and approved technologies (including cryptographic methods and data
formats).

#### 9. Issuer Key Vault
A supporting cryptographic key manager service for the Issuer to protect private
keys and secrets associated with generating Verifiable Credentials (for example,
the Issuer DID private key).

#### 10. Credential Store or Audit History (optional?)
A repository of previously Issued credentials and/or credential identifiers
(and their lifecycle history and current status?).

#### 11. DID Resolver (optional)
When the Verifiable Credential Issuer Service and Holder are leveraging Decentralized
Identifiers, this API is expected to interact with the appropriate registries
and return any resulting DID Documents. This detail is meant to be abstracted from the
Issuer Service, but nothing in this architecture prevents the Issuer Service from
connecting directly to a registry for other application purposes.

#### 12. External Entities (optional?)
External entities capable of accessing the Verifiable Credentials Issuer HTTP API.
Examples may include other Issuer Services, or entities with permission to obtain
credential status.

## API Security
The method for securing the API interfaces from unauthorized
access is currently not defined as part of the API. The Issuer Service is
required to define and implement this security in accordance with their internal
requirements. Recommendations include OAuth 2.0 Client Credentials, mutual TLS,
DIDComm.     

## Issuance Process and Scope
Issuing a Verifiable Credential to a Holder requires several logical steps. This
section provides guidance on which steps are in scope for this API. Steps in
**scope are marked bold**.

1. Determine if Holder or Client (and represented entities, like the user) are
eligible for the Verifiable Credential. _This is an Issuer Service Application and Client level operation_.
1. Locate and establish a communication channel between the Issuer Service and the Holder.
_This is the operation of the Issuer-to-Holder Communication Interface_.
1. Establish trust with the Holder or Client through implemented policies and
governance frameworks. _This is an Issuer Service Application or Governance level operation, but
may be technically enabled by the Holder and the Issuer-to-Holder Communication Interface_.
1. Access internal data stores to build the set of claims/properties for the Subject
to be encoded in the Verifiable Credential document. _Currently this is Issuer Service Application and
Issuer Subject Database operations, but may become in scope for the HTTP API Service_.
1. Construct the Verifiable Credential Data Model representation in a compliant
format. _This is (currently) an Issuer Service Application operation - but may be supported
by construction and templating APIs when defined_.
1. **Validate the Credential, generate cryptographic proof for the Credential, and assemble the
completed the Verifiable Credential for delivery to the Holder. _This is currently
the operation of the Verifiable Credential Issuer HTTP API Service_.**
1. Communicate/deliver the final Verifiable Credential object to the Holder.
_Currently scoped as an operation of the Issuer Application and Isser-to-Holder
Communication Interface, but may become a function of the HTTP API Service_.
1. Maintain an auditable lifecycle for the issued Verifiable Credential (optional).
_This is an operation of the Issuer HTTP API, but lifecycle decisions are driven
by the Issuer Service Application_.    

## Limitations and Considerations
The current architecture provides the baseline functionality of Verifiable
Credential syntax validation, data model validation, and cryptographic proof
generation. Construction APIs, Credential Templating and APIs for calling out to
subject data stores have not yet been defined.

As mentioned above, securing the API endpoints is a requirement of the Issuer
Service.

The Key Vault, Credential Store, and DID Resolver may be provided as part of
the Issuer API implementation or supplied by the Issuer Service (this is
implementation specific).

*There may be a limitation for Credential proof formats that require a bi-lateral
communication channel for establishing or exchanging cryptographic materials!* This
is not the intention of the specification, and input from the community on how
to resolve any such issues would be appreciated.

## References
* Decentralized Identifiers specification
* Verifiable Credentials Data Model specification
* CHAPI
* DIDComm
