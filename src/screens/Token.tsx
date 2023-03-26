import { useMediaQuery, Box, Typography } from '@mui/material';
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    EmailField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    TextInput,
    useRecordContext,
} from 'react-admin';
//import { MyUrlField } from '../fields/MyUrlField';

import { MintButton } from '../buttons/MintButton';

const TokenFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
];

export const TokenList = () => {
    return (
        <List filters={TokenFilters}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="image" />
                <TextField source="level" />
                <TextField source="points" />
                <EditButton />
                <MintButton label="Mint" undoable={false.toString()} />
            </Datagrid>
        </List>
    );
}
const TokenTitle = () => {
    const record = useRecordContext();
    return <span>Token {record ? `"${record.name}"` : ''}</span>;
};

export const TokenEdit = () => (
    <Edit title={<TokenTitle />} mutationMode="pessimistic" redirect="list">
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" />
            <TextInput source="image" />
            <TextInput source="level" />
            <TextInput source="points" />
        </SimpleForm>
    </Edit>
);

export const TokenCreate = () => (
    <Create title="New Token" redirect="list">
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="image" />
        </SimpleForm>
    </Create>
);
