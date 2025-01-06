import NavBar from '@/components/backend/NavBar';
import SideBar from '@/components/backend/SideBar';
import { Box } from '@mui/material';


const layout = ({ children}) => {
  
  
  return (

    <>

      <Box display='flex' >

        {/* sidebar */}

        <SideBar />

        <Box width='100%' >
          {/* Header */}
          
          <NavBar />

          <Box 
          color='white' 
          sx={{ backgroundColor: '#070707'}}
          minHeight='100vh'
          marginTop={10}
          marginLeft={25}>
            {children}
          </Box>

          {/* Main */}
        </Box>

        {/* Main Body */}

      </Box>

    </>
  );
}



export default layout;