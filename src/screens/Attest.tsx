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
import { AttestButton } from '../buttons/AttestButton';

const AttestFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
];

export const AttestList = () => {
    return (
        <List filters={AttestFilters}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="param1" />
                <TextField source="param2" />
                <TextField source="param3" />
                <TextField source="param4" />
                <EditButton />
                <AttestButton label="Attest" undoable={false.toString()} />
            </Datagrid>
        </List>
    );
}
const AttestTitle = () => {
    const record = useRecordContext();
    return <span>Attest {record ? `"${record.id}"` : ''}</span>;
};

export const AttestEdit = () => (
    <Edit title={<AttestTitle />} mutationMode="pessimistic" redirect="list">
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="param1" />
            <TextInput source="param2" />
            <TextInput source="param3" />
            <TextInput source="param4" />
        </SimpleForm>
    </Edit>
);

export const AttestCreate = () => (
    <Create title="New Attest" redirect="list">
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="param1" />
            <TextInput source="param2" />
            <TextInput source="param3" />
            <TextInput source="param4" />
        </SimpleForm>
    </Create>
);
