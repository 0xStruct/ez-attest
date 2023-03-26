import { Admin, Resource } from 'react-admin';
import AttestIcon from '@mui/icons-material/Approval';
import TokenIcon from '@mui/icons-material/Palette';

import { AttestList, AttestEdit, AttestCreate } from './screens/Attest';
import { TokenList, TokenEdit, TokenCreate } from './screens/Token';

import { Dashboard } from './screens/Dashboard';
import { authProvider } from './providers/authProvider';
import { dataProvider } from './providers/dataProvider.polybase';

import React, { useState } from 'react'
//import styled from 'styled-components'

import '@rainbow-me/rainbowkit/styles.css'
import {
    getDefaultWallets,
    RainbowKitProvider
} from '@rainbow-me/rainbowkit'

import {
    chain,
    configureChains,
    createClient,
    WagmiConfig
} from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'


const { chains, provider, webSocketProvider } = configureChains(
    [chain.optimismGoerli],
    [publicProvider()]
)

const { connectors } = getDefaultWallets({
    appName: 'Poly-attest',
    chains
})

const client = createClient({
    autoConnect: true,
    connectors,
    provider,
    webSocketProvider
})

const App = () => (
    <WagmiConfig client={client}>
        <RainbowKitProvider chains={chains}>
            <Admin
                dataProvider={dataProvider}
                dashboard={Dashboard}
            >
                <Resource
                    name="Attest"
                    list={AttestList}
                    edit={AttestEdit}
                    create={AttestCreate}
                    icon={AttestIcon}
                    recordRepresentation="id"
                />
                <Resource
                    name="Token"
                    list={TokenList}
                    edit={TokenEdit}
                    create={TokenCreate}
                    icon={TokenIcon}
                    recordRepresentation="name"
                />
            </Admin>
        </RainbowKitProvider>
    </WagmiConfig>
);

export default App;
