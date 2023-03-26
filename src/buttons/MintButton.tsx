import { Button, useRecordContext } from 'react-admin';

export const MintButton = (props: any) => {
   const record = useRecordContext();
   const handleClick = () => {
      console.log("record: ", record);
      alert("Minting function can be implemented")
   };
   return <Button onClick={handleClick} {...props} label="🎊 Mint" alignIcon="left"  />;
};
