
# Verification, Validation, and Veracity

This attempts a general description of the process whereby a relying party checks whether they will accept Verifiable Credential or Verifiable Presentation. An additional goal is to provide a framework and context for the “verification” steps provided in the vc-http-api repository.

This process is broken into three sub-processes called Verification, Validation, and Veracity (“3V”). 

# Table of contents

- [Verification, Validation, and Veracity](#verification-validation-and-veracity)
- [Definitions](#definitions)
- [3V Procedure](#3v-procedure)
  - [Verification](#verification)
  - [Validation](#validation)
  - [Veracity](#veracity)
- [Interfaces between Validation and Verification](#interfaces-between-validation-and-verification)
- [Sources](#sources)


# Definitions

Definitions of the first two terms come from the [VC-DATA-MODEL](https://www.w3.org/TR/vc-data-model). The third is a replacement/repurposing of what the VC-DATA-MODEL calls “Validity”. (Renaming due to insufficient distinction between the words “validation” and “validity”.)

*   **Verification**
    *   The evaluation of whether a [verifiable credential](https://www.w3.org/TR/vc-data-model/#dfn-verifiable-credentials) or [verifiable presentation](https://www.w3.org/TR/vc-data-model/#dfn-verifiable-presentations) is an authentic and timely statement of the issuer or presenter, respectively. This includes checking that: the credential (or presentation) conforms to the specification; the proof method is satisfied; and, if present, the status check succeeds.
    *   Source: [https://www.w3.org/TR/vc-data-model/#dfn-verify](https://www.w3.org/TR/vc-data-model/#dfn-verify)
*   **Validation**
    *   The assurance that a [verifiable credential](https://www.w3.org/TR/vc-data-model/#dfn-verifiable-credentials) or a [verifiable presentation](https://www.w3.org/TR/vc-data-model/#dfn-verifiable-presentations) meets the needs of a [verifier](https://www.w3.org/TR/vc-data-model/#dfn-verifier) and other dependent stakeholders. [The VC-DATA-MODEL] specification is constrained to [verifying](https://www.w3.org/TR/vc-data-model/#dfn-verify) [verifiable credentials](https://www.w3.org/TR/vc-data-model/#dfn-verifiable-credentials) and [verifiable presentations](https://www.w3.org/TR/vc-data-model/#dfn-verifiable-presentations) regardless of their usage. Validating [verifiable credentials](https://www.w3.org/TR/vc-data-model/#dfn-verifiable-credentials) or [verifiable presentations](https://www.w3.org/TR/vc-data-model/#dfn-verifiable-presentations) is outside the scope of [the VC-DATA-MODEL] specification.
    *   Source: [https://www.w3.org/TR/vc-data-model/#dfn-credential-validation](https://www.w3.org/TR/vc-data-model/#dfn-credential-validation)
*   **Veracity (renamed from VC-DATA-MODEL Validity)**
    *   Proposed definition: Additional application-, domain-, or business- specific checks for determining whether the VC or VP fits the intended use. This may have the effect of restricting or relaxing the acceptance of results from previous steps.
    *   The VC-DATA-MODEL describes “validity” as a “...variety of specific business process checks”, with the following examples listed:
        *   The professional licensure status of the holder.
        *   A date of license renewal or revocation.
        *   The sub-qualifications of an individual.
        *   If a relationship exists between the holder and the entity with whom the holder is attempting to interact.
        *   The geolocation information associated with the holder.
    *   Source: [https://www.w3.org/TR/vc-data-model/#validity-checks](https://www.w3.org/TR/vc-data-model/#validity-checks)

# 3V Procedure

The input to the 3V procedure is a Verifiable Presentation (VP), which:

*   Contains a list of VCs
*   May contain a separate proof

At a high level, the 3V procedure involves:

1. 3V each VC in the VP 
    - See "Verify(VC)"
3. 3V VP outer layer
    - See "Verify(VP)"

## Verification

### Verify (VC)

1. Check well-formed according to VC-DATA-MODEL
    1. E.g., required fields are present
2. Check proof (DID resolver provided by verifier)
    2. Credential hasn’t been tampered with
        1. Signed with an expected issuer DID/key (per document loader provided by caller)
    3. Signed by key authorized for the purposes of signing
    4. Expected properties are present (per proof data model)
3. Check timeliness and status (per callbacks provided by verifier)

### Verify (VP)

Same as Verify (VC), with these additions/changes:

1. VP proof is optional, but if present it must pass checks.
2. Make sure the `domain` and `challenge` values are ones the verifier was expecting


## Validation

These are categories of validation checks, but do not prescribe specific ways of checking. The verifier may determine how these checks are performed by providing callbacks to the “Verification” layer. This interface is described in "Interfaces between Validation and Verification".

*   Timeliness and Status (callback to verification)
    *   issuanceDate isn’t in the future, not past expiration date
    *   Status is “current”, e.g., not revoked, not expired, etc.
*   Credential Holder/Subject is expected party
    *   Authenticate 
        *   Including DID auth, traditional auth method
    *   Other checks
        *   Public key material (TODO: check this doesn't conflict with another category) 
        *   Subject attributes listed in the credential 
*   Issuer is expected party
    *   The value associated with the `issuer` property identifies an issuer that is known to and trusted by the verifier.
        *   E.g., Check the issuer DID against an allow-list
*   Proof attributes (TODO: still teasing apart this from DID checks.)
    *   From: [https://www.w3.org/TR/vc-data-model/#proofs-signatures-0](https://www.w3.org/TR/vc-data-model/#proofs-signatures-0)
    *   Acceptably recent metadata regarding the public key associated with the signature is available. For example, the metadata might include properties related to expiration, key owner, or key purpose.
    *   The key is not suspended, revoked, or expired.
*   DID and DID Document Check (Issuer and Holder)
    *   A more complete list of considerations should be provided in the context of the DID spec (or related docs). Here are some examples:
        *   Check to make sure the signing keys are not marked revoked in the latest version of the DID document (or have not been removed).
            *   If the keys _are_ currently revoked, try and determine whether they were valid at the time the VC was issued, and whether to accept it. (This is very much usecase/threat-model specific).
            *   Different DID methods and Key types have different ways of marking key expiration/revocation.
        *   Check to make sure the issuer DID has not been revoked.


## Veracity

Perform any other application-specific or domain-specific validation around fitness for purpose. 

Veracity checks do not fall within the scope of vc-http-api, but we call it out as a general bucket for additional checks, which serve one of these purposes


ssume it means that verifiers that have better policies / higher bars for verification are better than verifiers that put less effort in... some verifiers will take credentials in any shape or form, other have stricter preferences.

1. Verifiers or relying parties choosing to restrict the credentials accepted. They may do this to enforce policies or additional standards. Examples include:
    1. Accept credentials with specific accreditations
    2. Checking nested signatures/proofs
2. Verifiers or relying parties choosing to relax the credentials accepted: e.g., override a previous “failed” status, to accept a broader range of credentials. Examples may include:
    1. Accept issuanceDate in the future (post-dated checks)
    2. Accept another institution’s expired credentials (e.g., if the issuing institution went out of business) 

# Interfaces between Validation and Verification

There are two relevant interfaces between Validation and Verification:

*   Callbacks to determine credential timeliness and status
    *   This provides flexibility for verifier to make their own judgment about whether they’ll accept a credential; e.g., some parties may accept an issuanceDate that falls in the future, while others won’t
*   Document loaders to DID resolution, JSON-LD contexts, or any other document needed at runtime

# Sources

Sources include the VC Data Model, emerging specifications, and implementations, including:

*   VC-DATA-MODEL “Validation”
    *   [https://www.w3.org/TR/vc-data-model/#validation](https://www.w3.org/TR/vc-data-model/#validation)
*   VC-DATA-MODEL “Validity”
    *   [https://www.w3.org/TR/vc-data-model/#validity-checks](https://www.w3.org/TR/vc-data-model/#validity-checks)
*   vc-http-api
    *   [https://github.com/w3c-ccg/vc-http-api](https://github.com/w3c-ccg/vc-http-api)
    *   Specific references:
        *   Plugfest verifier test suite:
            *   [https://github.com/w3c-ccg/vc-http-api/tree/master/packages/plugfest-2020#verifier](https://github.com/w3c-ccg/vc-http-api/tree/master/packages/plugfest-2020#verifier)
        *   Github issues:
            *   https://github.com/w3c-ccg/vc-http-api/issues/55
            *   https://github.com/w3c-ccg/vc-http-api/issues/59
            *   [https://github.com/w3c-ccg/vc-http-api/issues/57](https://github.com/w3c-ccg/vc-http-api/issues/57)
        *   https://github.com/w3c-ccg/vc-http-api/tree/master/packages/plugfest-2020#verifier
*   Digital Bazaar’s VC-JS implementation
    *   [https://github.com/digitalbazaar/vc-js](https://github.com/digitalbazaar/vc-js)
*   VC-DATA-MODEL “Proofs (Signatures)”
    *   [https://www.w3.org/TR/vc-data-model/#proofs-signatures-0](https://www.w3.org/TR/vc-data-model/#proofs-signatures-0)
