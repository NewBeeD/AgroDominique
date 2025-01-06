import { Box, Stack, Typography } from "@mui/material";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';





const SmallCard = ({ data, id }) => {

  const dataIcon = 
  id == 0? {icon: <ShoppingCartIcon />, bgColor: '#195915'}: 
  id === 1? {icon: <AutorenewIcon />, bgColor: '#12527b'}: 
  id === 2? {icon: <LocalShippingIcon />, bgColor: '#991c1c'} : 
  {icon: <CheckCircleIcon />, bgColor: '#a851f9'};

  
  
  
  return (
    
    <Box 
    sx={{ borderRadius: 3, border: '2px solid white', backgroundColor: '#0F172A'}} 

    width={200}
    >

      <Stack 
      direction='row' 
      spacing={2} 
      justifyContent='center' 
      alignItems='center'
      >

        <Box 
        padding={2.3} 
        width={4} 
        height={4} 
        sx={{ backgroundColor: dataIcon.bgColor, borderRadius: '20px'}} 
        display='flex' 
        justifyContent='center' 
        alignItems='center'>

          {dataIcon.icon}

        </Box>


        <Stack direction='column' paddingY={2}>

          <Typography variant="body2">{data.title}</Typography>
          <Typography variant="h6" fontWeight={900}>{data.sales}</Typography>

        </Stack>

      </Stack>

    </Box>
  );
}

export default SmallCard;