import { Box, Typography } from "@mui/material";

import LayersIcon from '@mui/icons-material/Layers';

const LargeCard = ({ data , id }) => {


  const bgColor = id == 0? '#195915': id == 1? '#12527b': id == 2? "#991c1c": id == 3? "#a851f9": "#6057b5";
  
  
  return (



      <Box 
      color="white" 
      sx={{backgroundColor: bgColor, borderRadius: 5, border: '1px solid white'}}
      padding={6}
      display='flex'
      alignItems='center'
      flexDirection='column'
      minHeight='150px'
      width={200}
      textAlign='center'
      >
          
          <LayersIcon />

          <Box height={50} >
            <Typography variant="subtitle2">
              {data.period}
            </Typography>

          </Box>

          <Box >
            <Typography variant="h6" fontWeight={900}>
              ${data.sales}
            </Typography>

          </Box>


      </Box>


    
  );
}

export default LargeCard;