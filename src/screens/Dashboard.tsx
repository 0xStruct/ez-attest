import { Card, CardContent, CardHeader } from '@mui/material';
import { ConnectButton } from '@rainbow-me/rainbowkit'
import polyAttestImage from '../assets/poly-attest.png'

export const Dashboard = () => (
    <Card>
        <CardHeader title="Welcome to Poly-attest" />
        <CardContent>
            <div>
                Connect wallet to Optimism Goerli for Attestation
            </div>
            <ConnectButton
                accountStatus="full"
                chainStatus="full"
                showBalance={true}
                />
            <div>
                <h3>
                    Unleashing the power of web3 database with the convenience of web2 tools.
                </h3>
                <img src={polyAttestImage} />
                <p>
                    Innovations like Polybase and Optimism are happening fast. However, these tools are not fully utilized due to limitations in service integration resources.
                </p>
                <p>
                    With Poly-attest, various web3 services can be integrated easily for teams to make full use of these.
                </p>
                <p>
                    This dapp leverages react-admin to built admin panels / internal tools quickly. Then with Polybase, on Optimism's AttestationStation, attestations are fully extensible and dynamic.
                </p>


            </div>
            
        </CardContent>
    </Card>
);
