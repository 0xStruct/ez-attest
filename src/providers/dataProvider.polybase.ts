/* tslint:disable */
// @ts-nocheck
import { Polybase } from "@polybase/client"
import * as eth from "@polybase/eth"
import { PolybasePubkey } from "../constants/addresses"

const db = new Polybase({
    defaultNamespace: PolybasePubkey,
})

// define signer
db.signer(async (data: string) => {
    // A permission dialog will be presented to the user
    const accounts = await eth.requestAccounts()

    // If there is more than one account, you may wish to ask the user which
    // account they would like to use
    const account = accounts[0]

    const sig = await eth.sign(data, account)

    return { h: "eth-personal-sign", sig }
})

// TypeScript users must reference the type `DataProvider`
export const dataProvider = {
    getList: (resource, params) => {
        const collectionReference = db.collection(resource);

        return collectionReference.get().then(
            resp => {
                const _data = resp.data.map((value, index) => {
                    return value.data;
                })

                console.log(_data)

                return {
                    data: _data,
                    total: _data.length,
                }

            }
        )
    },

    getOne: (resource, params) => {
        const collectionReference = db.collection(resource);

        return collectionReference.record(params.id).get().then(
            resp => {
                return {
                    data: resp.data,
                }
            }
        )
    },

    getMany: (resource, params) => {
        throw new Error('Not implemented');
    },

    getManyReference: (resource, params) => {
        throw new Error('Not implemented');
    },

    update: (resource, params) => {
        const collectionReference = db.collection(resource);

        let _params = []
        if(resource === "Attest") _params = [params.data.param1, params.data.param2, params.data.param3, params.data.param4]
        if(resource === "Token") _params = [params.data.name, params.data.image, Number(params.data.level), Number(params.data.points)]

        return collectionReference.record(params.id).call("update", _params).then(
            resp => {
                return {
                    data: resp.data,
                }

            }
        )
    },

    updateMany: (resource, params) => {
        throw new Error('Not implemented');
    },

    create: (resource, params) => {
        const collectionReference = db.collection(resource);

        console.log("params: ", params)

        let _params = []
        if(resource === "Attest") _params = [params.data.id, params.data.param1, params.data.param2, params.data.param3, params.data.param4]
        if(resource === "Token") _params = [params.data.id, params.data.name, params.data.image]


        return collectionReference.create(_params).then(
            resp => {
                console.log("resp: ", resp)

                return {
                    data: resp.data,
                }

            }
        )
    },
        
    delete: (resource, params) => {
        const collectionReference = db.collection(resource);
        console.log("delete: ", params)
        return collectionReference.record(params.id).call("del").then(
            resp => {
                return {
                    data: resp.data,
                }

            }
        )
    },

    deleteMany: (resource, params) => {
        throw new Error('Not implemented');
    }
};
