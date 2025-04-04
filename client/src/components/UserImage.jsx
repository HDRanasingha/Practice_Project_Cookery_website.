import { Box } from '@mui/material';

const UserImage = ({ image, size = "60px" }) => {
    return (
        <Box width={size} height={size}>
            <img
                style={{ objectFit: "cover", borderRadius: "50%", width: '100%', height: '100%' }}
                alt='user'
                src={`http://localhost:3001/assets/${image}`}
            />
        </Box>
    );
};

export default UserImage;
