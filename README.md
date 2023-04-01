# Poly-attest: unleashing the power of web3 database with the convenience of web2 tools

Innovations like **Polybase** and **Optimism** are happening fast. However, these tools are not fully utilized due to limitations in service integration resources.

With Poly-attest, various web3 services can be integrated easily for teams to make full use of these.

This dapp leverages react-admin to built admin panels / internal tools quickly. Then with Polybase, on Optimism's AttestationStation, attestations are fully extensible and dynamic.

In short, this project provides:

- comprehensive admin panel to manage collections data in Polybase like an Airtable
- tool to manage attestations, and facilitates dynamic and extensible attestation values

Demo: https://vimeo.com/813754930

## How is it made?

Polybase is used to store metadata for attestations. [Polybase schema](https://explorer.testnet.polybase.xyz/studio/pk%2F0x8d4dd155f0b2ce92fcfcfef99fc4abbce9b08c706fac94773be95771c817d068f45d12d648208a0776942565cea3379a29ddf9de92fc98899d3ff4235d96e105%2Fpoly-attest) 

Optimism's attestation is linked to Polybase collection item; extending its value. React-admin is used to build the powerful admin screens with a custom-built data provider to interact with Polybase data.

An admin panel for a Polybase collection can be easily built by referring to an existing screen in [src/screens/Attest.tsx](src/screens/Attest.tsx) file. 

Within a few minutes, new panel can be built. Custom data provider for Polybase is in [src/providers/dataProviders.polybase.ts](src/providers/dataProviders.polybase.ts) file.
