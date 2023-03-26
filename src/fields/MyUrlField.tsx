import { useRecordContext } from 'react-admin';
import { Link } from '@mui/material';

const MyUrlField = ({ source }: { source: string }) => {
    const record = useRecordContext();
    return record ? (
        <Link href={record[source]} sx={{ textDecoration: 'none' }}>
            {record[source]}
        </Link>
    ) : null;
};

export default MyUrlField;
