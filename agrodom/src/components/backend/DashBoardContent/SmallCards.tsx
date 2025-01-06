import { Box, Stack } from "@mui/material";
import Grid from '@mui/material/Grid2';
import LargeCard from "./LargeCard";
import SmallCard from "./SmallCard";


const SmallCards = () => {

  const orderStatus = [{

    title: "Total Order",
    sales: 612,     
  },
  {

    title: "Orders Pending",
    sales: 146,     
  },
  {

    title: "Orders Processing",
    sales: 251,     
  },
  {

    title: "Orders Delivered",
    sales: 360,     
  }
]
  
  
  return (
    
    <Box width='100%' display='flex' >

      <Grid container spacing={3}>

        {orderStatus.map((item, idx) => {

          return (

            <SmallCard data={item} id={idx} key={idx} />
          )
        })}

      </Grid>


    </Box>
  );
}

export default SmallCards;