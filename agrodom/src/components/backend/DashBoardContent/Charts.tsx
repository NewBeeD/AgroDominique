import { Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import WeeklySalesChart from "./Charts/WeeklySalesChart";
import PopularProductsChart from "./Charts/PopularProductsChart";


const Charts = () => {
  
  
  
  return (
    
    <Box>

      <Grid container spacing={3}>

        <WeeklySalesChart />

        <PopularProductsChart />

      </Grid>





    </Box>

  );
}

export default Charts;


