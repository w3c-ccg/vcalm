let { suiteConfig } = global;

const httpClient = require('../services/httpClient');
const utilities = require('../services/utilities');

if (suiteConfig.verifyCredentialConfiguration) {
    describe('Verify Credential API - Conformance', () => {
        // Load in the static test fixtures
        let verifiableCredentials = utilities.filterVerifiableCredentialsForVendorConfig(suiteConfig.verifiableCredentials, suiteConfig.verifyCredentialConfiguration);

        const verifierEndpoint = suiteConfig.verifyCredentialConfiguration.endpoint;
        const credentialStatusesSupported = suiteConfig.verifyCredentialConfiguration.credentialStatusesSupported;

        beforeEach(() => {
            verifiableCredentials = utilities.cloneObj(suiteConfig.verifiableCredentials);
        });

        // eslint-disable-next-line max-len
        describe(`1. The Verifier's Verify Credential HTTP API MUST fail to verify a Verifiable Credential with a mutated signature value (such as a mutated jws) in the proof.`, () => {
            it('should pass with no mutation', async () => {
                const body = {
                    verifiableCredential: verifiableCredentials[0].data,
                    options: {
                        checks: ['proof'],
                    },
                };
                const res = await httpClient.postJson(verifierEndpoint, body, {});
                expect(res.status).toBe(200);
                expect(res.body.checks).toEqual(['proof']);
            });
            it('should fail with with mutation', async () => {
                const body = {
                    verifiableCredential: verifiableCredentials[0].data,
                    options: {
                        checks: ['proof'],
                    },
                };
                body.verifiableCredential.proof.jws += 'bar';
                const res = await httpClient.postJson(verifierEndpoint, body, {});
                expect(res.status).toBe(400);
            });
        });

        describe(`2. The Verifier's Verify Credential HTTP API MUST fail to verify a Verifiable Credential with the "created" property removed from the proof.`, () => {
            it('should fail without created in proof', async () => {
                const body = {
                    verifiableCredential: verifiableCredentials[0].data,
                    options: {
                        checks: ['proof'],
                    },
                };
                delete body.verifiableCredential.proof.created;
                const res = await httpClient.postJson(verifierEndpoint, body, {});
                expect(res.status).toBe(400);
            });
        });

        describe(`3. The Verifier's Verify Credential HTTP API MUST fail to verify a Verifiable Credential with a mutated "proofPurpose" in the proof.`, () => {
            it('should fail ', async () => {
                const body = {
                    verifiableCredential: {...verifiableCredentials[0].data},
                    options: {
                        checks: ['proof'],
                    },
                };
                body.verifiableCredential.proof.proofPurpose = 'bar';
                const res = await httpClient.postJson(verifierEndpoint, body, {});
                expect(res.status).toBe(400);
            });
        });

        describe('4. The Verifier\'s Verify Credential HTTP API MUST fail to verify a Verifiable Credential with a property added to the credential.', () => {
            it('should fail', async () => {
                const body = {
                    verifiableCredential: verifiableCredentials[0].data,
                    options: {
                        checks: ['proof'],
                    },
                };
                body.verifiableCredential.newProp = 'foo';
                const res = await httpClient.postJson(verifierEndpoint, body, {});
                expect(res.status).toBe(400);
            });
        });

        describe('5. The Verifier\'s Verify Credential HTTP API MUST fail to verify a Verifiable Credential with a property removed from the credential.', () => {
            it('should fail', async () => {
                const body = {
                    verifiableCredential: verifiableCredentials[0].data,
                    options: {
                        checks: ['proof'],
                    },
                };
                delete body.verifiableCredential.issuer;
                const res = await httpClient.postJson(verifierEndpoint, body, {});
                expect(res.status).toBe(400);
            });
        });

        describe('6. The Verifier\'s Verify Credential HTTP API MUST fail to verify a Verifiable Credential with a mutated property in the credential.', () => {
            it('should fail ', async () => {
                const body = {
                    verifiableCredential: verifiableCredentials[0].data,
                    options: {
                        checks: ['proof'],
                    },
                };
                body.verifiableCredential.issuer = 'bar';
                const res = await httpClient.postJson(verifierEndpoint, body, {});
                expect(res.status).toBe(400);
            });
        });

        describe('7. The Verifier\'s Verify Credential HTTP API MUST fail to verify a Verifiable Credential with a property added to the proof.', () => {
            it('should fail ', async () => {
                const body = {
                    verifiableCredential: verifiableCredentials[0].data,
                    options: {
                        checks: ['proof'],
                    },
                };
                body.verifiableCredential.proof.newProp = 'bar';
                const res = await httpClient.postJson(verifierEndpoint, body, {});
                expect(res.status).toBe(400);
            });
        });

        describe('8. The Verifier\'s Verify Credential HTTP API MUST fail to verify a Verifiable Credential with a property removed from the proof.', () => {
            it('should fail ', async () => {
                const body = {
                    verifiableCredential: verifiableCredentials[0].data,
                    options: {
                        checks: ['proof'],
                    },
                };
                delete body.verifiableCredential.proof.proofPurpose;
                const res = await httpClient.postJson(verifierEndpoint, body, {});
                expect(res.status).toBe(400);
            });
        });

        describe('9. The Verifier\'s Verify Credential HTTP API MUST fail to verify a Verifiable Credential with a mutated property in the proof.', () => {
            it('should fail ', async () => {
                const body = {
                    verifiableCredential: verifiableCredentials[0].data,
                    options: {
                        checks: ['proof'],
                    },
                };
                body.verifiableCredential.proof.created += 'bar';
                const res = await httpClient.postJson(verifierEndpoint, body, {});
                expect(res.status).toBe(400);
            });
        });

        describe('10. The Verifier\'s Verify Credential HTTP API MUST adhere to the proof verification format.', () => {
            it('should pass', async () => {
                const body = {
                    verifiableCredential: verifiableCredentials[0].data,
                    options: {
                        checks: ['proof'],
                    },
                };
                const res = await httpClient.postJson(verifierEndpoint, body, {});
                expect(res.status).toBe(200);
                expect(res.body.checks).toEqual(['proof']);
            });
        });

        // eslint-disable-next-line max-len
        describe('11. The Verifier\'s Verify Credential HTTP API MUST return a 400 HTTP response status code when the request is rejected.', () => {
            it('should have error', async () => {
                const body = {
                    verifiableCredential: null,
                    options: {
                        checks: ['proof'],
                    },
                };
                const res = await httpClient.postJson(verifierEndpoint, body, {});
                expect(res.status).toBe(400);
            });
        });

        describe('12. The Verifier\'s Verify Credential HTTP API MUST support the verification of JSON-LD Proof, Ed25519Signature2018.', () => {
            it('should pass', async () => {
                const vc = verifiableCredentials[0].data;
                const proof = Array.isArray(vc.proof) ? vc.proof : [vc.proof];
                const type = 'Ed25519Signature2018';
                const ed25519Signature2018 = proof.find(p => p.type === type);
                expect(ed25519Signature2018).toBeDefined();
                const body = {
                verifiableCredential: vc,
                options: {
                    checks: ['proof'],
                },
                };
                const res = await httpClient.postJson(verifierEndpoint, body, {});
                expect(res.status).toBe(200);
                expect(res.body.checks).toEqual(['proof']);
            });
        });

        if (credentialStatusesSupported) {
            describe(`13. The Verifier\'s Verify Credential HTTP API MAY support checking the status of a credential.`, () => {
                const fixtures = utilities.filterVerifiableCredentialsWithCredentialStatus(verifiableCredentials);

                fixtures.forEach((item) => {
                    const verifiableCredential = item.data;
                    item.credentialStatusTypes.forEach(statusType => {
                        // We have to introspect the general fixtures and detect if we know the credentialStatusType
                        // because we have to map what the `status` value means
                        if (statusType === 'RevocationList2020Status' && credentialStatusesSupported.includes(statusType)) {
                            // Using the index that the credential occupies in the credential status list to indicate whether the
                            // credential is revoked or not @see ../../../docs/fixtures/README.md`
                            describe(`For status type of: ${statusType}`, () => {
                                if (verifiableCredential.credentialStatus.revocationListIndex === "0") {
                                    it('should pass', async () => {
                                        const body = {
                                            verifiableCredential,
                                            options: {
                                                checks: ['proof', 'credentialStatus'],
                                            },
                                        };
                                        const res = await httpClient.postJson(verifierEndpoint, body, {});
                                        expect(res.status).toBe(200);
                                        expect(res.body.checks).toEqual(['proof', 'credentialStatus']);
                                    });
                                }
                                if (verifiableCredential.credentialStatus.revocationListIndex === "1") {
                                    it('should fail', async () => {
                                        const body = {
                                            verifiableCredential,
                                            options: {
                                                checks: ['proof', 'credentialStatus'],
                                            },
                                        };
                                        const res = await httpClient.postJson(verifierEndpoint, body, {});
                                        // TODO returning 400 from verify endpoint on failed verification is semantically incorrect, however
                                        // it is what the API spec currently defines
                                        expect(res.status).toBe(400);                                      
                                    });
                                }
                            });
                        }
                    })
                })
            })
        }
        
    });

    describe('Verify Credential API - Interop', () => {
        // Load in the static test fixtures
        let verifiableCredentials = utilities.filterVerifiableCredentialsForVendorConfig(suiteConfig.verifiableCredentials, suiteConfig.verifyCredentialConfiguration);

        const verifierEndpoint = suiteConfig.verifyCredentialConfiguration.endpoint;

        verifiableCredentials.forEach((verifiableCredential) => {
            describe(`Can verify verifiable credential ${verifiableCredential.name}, with issuer DID method ${verifiableCredential.issuerDidMethod} and linked data proof suite ${verifiableCredential.proofType}, fixture ${verifiableCredential.fileName}`, () => {
                it('should pass with no mutation', async () => {
                    const body = {
                    verifiableCredential: utilities.cloneObj(verifiableCredential.data),
                    options: {
                        checks: ['proof'],
                    },
                    };
                    const res = await httpClient.postJson(verifierEndpoint, body, {});
                    expect(res.status).toBe(200);
                    expect(res.body.checks).toEqual(['proof']);
                });
                it('should fail with mutated proof value', async () => {
                    const body = {
                    verifiableCredential: utilities.cloneObj(verifiableCredential.data),
                    options: {
                        checks: ['proof'],
                    },
                    };
                    if (body.verifiableCredential.proof.jws) {
                        body.verifiableCredential.proof.jws = 'badProof';
                    }
                    if (body.verifiableCredential.proof.proofValue) {
                        body.verifiableCredential.proof.proofValue = 'badProof';
                    }
                    const res = await httpClient.postJson(verifierEndpoint, body, {});
                    expect(res.status).toBe(400);
                });
                it('should fail with additional unsigned property in credential', async () => {
                    const body = {
                    verifiableCredential: utilities.cloneObj(verifiableCredential.data),
                    options: {
                        checks: ['proof'],
                    },
                    };
                    body.verifiableCredential.badPropTest = "bad";
                    const res = await httpClient.postJson(verifierEndpoint, body, {});
                    expect(res.status).toBe(400);
                });
                it('should fail with deleted property from credential', async () => {
                    const body = {
                    verifiableCredential: utilities.cloneObj(verifiableCredential.data),
                    options: {
                        checks: ['proof'],
                    },
                    };
                    // Assumes all interop test fixtures have a credential.credentialSubject property
                    delete body.verifiableCredential.credentialSubject;
                    const res = await httpClient.postJson(verifierEndpoint, body, {});
                    expect(res.status).toBe(400);
                });
            });
        });
    });
}
