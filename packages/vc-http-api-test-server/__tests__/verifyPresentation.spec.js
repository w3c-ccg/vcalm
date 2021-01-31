let { suiteConfig } = global;

const help = require('../help');

describe('Verify Presentation API', () => {
    // Load in the static test fixtures
    let verifiablePresentations = suiteConfig.verifiablePresentations;

    const verifierEndpoint = suiteConfig.verifyPresentationConfiguration.endpoint;
    
    beforeEach(() => {
      verifiablePresentations = help.cloneObj(suiteConfig.verifiablePresentations);
    });

    // eslint-disable-next-line max-len
    describe(`1. The Verifier's Verify Presentation HTTP API MUST verify a Verifiable Presentation where the credential's issuer, presentation's holder and credential's subject are different.`, () => {
      it('should pass', async () => {
        const solutions = [];
        // this logic needs to account for object and string variations...
        const test_vps = verifiablePresentations.filter(vp => {
          return (
            vp.holder !== vp.verifiableCredential[0].issuer &&
            vp.holder !==
              vp.verifiableCredential[0].credentialSubject.id &&
            vp.verifiableCredential[0].issuer !==
              vp.verifiableCredential[0].credentialSubject.id
          );
        });
        await Promise.all(
          test_vps.map(async vp => {
            // this logic needs to account for objet and string variations
            expect(vp.holder).not.toBe(vp.verifiableCredential[0].issuer);
            expect(vp.holder).not.toBe(
              vp.verifiableCredential[0].credentialSubject.id
            );
            const body = {
              verifiablePresentation: vp,
              options: {
                challenge: vp.proof.challenge,
                domain: vp.proof.domain,
                checks: ['proof'],
              },
            };
            const res = await help.postJson(verifierEndpoint, body, {});
            expect(res.status).toBe(200);
            solutions.push(vp);
          })
        );
        expect(solutions.length).toBeGreaterThanOrEqual(1);
      });
    });

    // eslint-disable-next-line max-len
    describe(`2. The Verifier's Verify Presentation HTTP API MUST verify a Verifiable Presentation where the credential's issuer, presentation's holder and credential's subject are the same.`, () => {
      it('should pass', async () => {
        // this logic needs to account for object and string variations...
        const test_vps = verifiablePresentations.filter(vp => {
          return (
            vp.holder === vp.verifiableCredential[0].issuer || vp.verifiableCredential[0].issuer.id &&
            vp.holder === vp.verifiableCredential[0].credentialSubject.id
          );
        });
        const solutions = [];
        await Promise.all(
          test_vps.map(async vp => {
            const body = {
              verifiablePresentation: vp,
              options: {
                challenge: vp.proof.challenge,
                domain: vp.proof.domain,
                checks: ['proof'],
              },
            };
            const res = await help.postJson(verifierEndpoint, body, {});
            expect(res.status).toBe(200);
            solutions.push(vp);
          })
        );
        expect(solutions.length).toBeGreaterThanOrEqual(1);
      });
    });

    // eslint-disable-next-line max-len
    describe('3. The Verifier\'s Verify Presentation HTTP API MUST adhere to the proof verification format.', () => {
      it('should pass', async () => {
        const body = {
          verifiablePresentation: verifiablePresentations[0],
          options: {
            challenge: verifiablePresentations[0].proof.challenge,
            domain: verifiablePresentations[0].proof.domain,
            checks: ['proof'],
          },
        };
        const res = await help.postJson(verifierEndpoint, body, {});
        expect(res.status).toBe(200);
        expect(res.body.checks).toEqual(['proof']);
      });
    });

    // eslint-disable-next-line max-len
    describe('4. The Verifier\'s Verify Presentation HTTP API MUST return a 400 HTTP response status code when the request is rejected.', () => {
      it('should have error', async () => {
        const body = {
          verifiablePresentation: null,
          options: {
            challenge: verifiablePresentations[0].proof.challenge,
            domain: verifiablePresentations[0].proof.domain,
            checks: ['proof'],
          },
        };
        const res = await help.postJson(verifierEndpoint, body, {});
        expect(res.status).toBe(400);
      });
    });

    // eslint-disable-next-line max-len
    describe('5. The Verifier\'s Verify Presentation HTTP API MUST support the verification of, JSON-LD Proof, Ed25519Signature2018.', () => {
      it('should pass', async () => {
        const vp = verifiablePresentations[0];
        const proof = Array.isArray(vp.proof) ? vp.proof : [vp.proof];
        const type = 'Ed25519Signature2018';
        const ed25519Signature2018 = proof.find(p => p.type === type);
        expect(ed25519Signature2018).toBeDefined();
        const body = {
          verifiablePresentation: verifiablePresentations[0],
          options: {
            challenge: verifiablePresentations[0].proof.challenge,
            domain: verifiablePresentations[0].proof.domain,
            checks: ['proof'],
          },
        };
        const res = await help.postJson(verifierEndpoint, body, {});
        expect(res.status).toBe(200);
        expect(res.body.checks).toEqual(['proof']);
      });
    });

    // eslint-disable-next-line max-len
    describe(`6. The Verifier's Verify Presentation HTTP API MUST support "options.challenge" in the body of the POST request.`, () => {
      it('should have error', async () => {
        const body = {
          verifiablePresentation: verifiablePresentations[0],
        };
        const res = await help.postJson(verifierEndpoint, body, {});
        expect(res.status).toBe(400);
      });
    });
});
