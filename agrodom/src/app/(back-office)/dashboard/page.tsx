
import Heading from "@/components/backend/Heading";
import { Box } from "@mui/material";


import LargeCards from "@/components/backend/DashBoardContent/LargeCards";
import SmallCards from "@/components/backend/DashBoardContent/SmallCards";
import Charts from "@/components/backend/DashBoardContent/Charts";


const Dashboard = () => {
  
  
  
  return (
    <Box>
      <Heading title='Dashboard Overview' />

      {/* Large Cards */}

      <Box paddingLeft={2}>
        <LargeCards />
      </Box>

      {/* Small Cards */}
      <Box marginTop={4} paddingLeft={2}>
        <SmallCards />
      </Box>

      {/* Sales Charts */}
      <Box>
        <Charts />
      </Box>

      {/* Table of Orders */}
    </Box>
  );
}

export default Dashboard;