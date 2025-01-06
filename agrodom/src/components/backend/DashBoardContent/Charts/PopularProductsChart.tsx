import { Box, Typography } from "@mui/material"

import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from "react-chartjs-2"


ChartJs.register(ArcElement, Tooltip, Legend)






export default function PopularProductsChart() {

  const data = {
    labels: ['Red Fish', 'Blue Marlin', 'Yellow Fin Tuna', 'Passion Fruit'],
    datasets: [
      {
        label: '# of Votes',
        data: [40, 15, 23, 29],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  
  return (
    
    <Box sx={{ backgroundColor: '#0F172A', borderRadius: '4px'}}
    padding={4}
    marginLeft={2} 
    marginTop={4}>

      <Typography variant="h6" fontWeight={900}>
        Popular Products
      </Typography>

      <Box>

      </Box>

    </Box>
  )
}
