import { Box, Typography } from "@mui/material";


const Heading = ({title}) => {
  
  
  return (
    <Box>
      
      <Typography variant="h5" padding={4} fontWeight={900} color="white">

        {title}

      </Typography>
    </Box>
  );
}

export default Heading;