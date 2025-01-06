import { Box, Stack } from "@mui/material";
import Grid from '@mui/material/Grid2';
import LargeCard from "./LargeCard";


const LargeCards = () => {

  const orderStats = [{

    period: "Todays Orders",
    sales: 105.67,     
  },
  {

    period: "Yesterday's Orders",
    sales: 205.67,     
  },
  {

    period: "This Month",
    sales: 2658.24,     
  },
  {

    period: "Last Month",
    sales: 3052.24,     
  },
  {
    period: "All Time Sales",
    sales: 56987.56,     
  }
]
  
  
  return (
    
    <Box width='100%' display='flex' >

      <Grid container spacing={3}>

        {orderStats.map((item, idx) => {

          return (

            <LargeCard data={item} key={idx} id={idx} />
          )
        })}

        {/* <LargeCard bgcolor="#195915" />
        <LargeCard bgcolor="#12527b" />
        <LargeCard bgcolor="#991c1c" />
        <LargeCard bgcolor="#a851f9" />
        <LargeCard bgcolor="#6057b5" /> */}

      </Grid>


    </Box>
  );
}

export default LargeCards;