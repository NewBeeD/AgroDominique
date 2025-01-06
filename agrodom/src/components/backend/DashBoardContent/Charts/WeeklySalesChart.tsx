import { Box, Typography } from "@mui/material"



export default function WeeklySalesChart() {
  
  
  return (
    
    <Box 
    sx={{ backgroundColor: '#0F172A', borderRadius: '4px'}}
    padding={4}
    marginLeft={2} 
    marginTop={4}>

      <Typography variant="h6" fontWeight={900}>
        Weekly Sales
      </Typography>
    </Box>
  )
}
