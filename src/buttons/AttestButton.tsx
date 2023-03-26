/* tslint:disable */
// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { Button, useRecordContext } from 'react-admin';
import { ethers } from 'ethers'
import {
   usePrepareContractWrite,
   useContractWrite,
   useWaitForTransaction,
   useNetwork
} from 'wagmi'
import { AttestationStationAddress } from '../constants/addresses'
import AttestationStationABI from '../constants/abi.json'

export const AttestButton = (props: any) => {
   const record = useRecordContext();

   const { chain } = useNetwork()
   const etherScanBaseLink = "https://goerli-optimism.etherscan.io/tx/"

   const args = {
      about: record.id, 
      key: ethers.utils.formatBytes32String('poly-attest'), 
      val: ethers.utils.toUtf8Bytes('polybase/Attest/id')
   }

   const {
      config,
      error: prepareError,
      isError: isPrepareError
   } = usePrepareContractWrite({
      address: AttestationStationAddress,
      abi: AttestationStationABI,
      functionName: 'attest',
      args: [
         [args]
      ],
      enabled: true
   })

   
   const { data, error, isError, write } = useContractWrite(config)

   const { isLoading, isSuccess } = useWaitForTransaction({
      hash: data?.hash
   })

   // https://community.optimism.io/docs/governance/attestation-station/#
   const doAttest = () => {
      console.log("record: ", record);

      // check record's id
      //if(!ethers.utils.isAddress(record.id)) throw new Error('invalid id, not a pubkey');

      console.log("write: ", write)

      // write to contract
      write?.()
   };


   return (
      <>
         <Button onClick={doAttest} {...props} label="👍 Attest" alignIcon="left" />
         {isError ? '⚠️' : null}
         {isSuccess ? '✅' : null}
      </>

   );
};
