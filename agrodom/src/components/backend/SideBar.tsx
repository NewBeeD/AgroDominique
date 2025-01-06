import { Box, Stack } from "@mui/material";
import Link from "next/link";

const SideBar = () => {
  
  
  return (
    
    <Box 
    sx={{ backgroundColor: '#1E293B', position: 'fixed', left: 0, top:0}} 
    minHeight='100vh' 
    width={200} 
    padding={3} 
    color='#F8FAFC'
    >

      <Box marginBottom={6}>
        <Link href="#">Logo</Link>

      </Box>


      <Stack spacing={2}>

        <Link href="#">Dashboard</Link>
        <Link href="#">Catalogue</Link>
        <Link href="#">Customers</Link>
        <Link href="#">Markets</Link>
        <Link href="#">Suppliers</Link>
        <Link href="#">Order</Link>
        <Link href="#">Staff</Link>
        <Link href="#">Settings</Link>
        <Link href="#">Online Store</Link>

      </Stack>

    </Box>
  );
}

export default SideBar;