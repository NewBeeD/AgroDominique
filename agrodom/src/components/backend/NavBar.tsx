import { Box, Button, Stack, IconButton } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const NavBar = () => {
  
  
  return (
    
    <Box 
    display='flex' 
    justifyContent='space-between' 
    height={60}
    paddingX={2}
    paddingY={5}
    sx={{ backgroundColor: '#0F172A', position: 'fixed', top: 0}}
    width='100%'
    marginLeft={25}
    >

      {/* Icon */}
      <IconButton>
        <MenuIcon sx={{ color: 'white'}} />
      </IconButton>

      {/* 3 Icons */}

      <Stack spacing={1} direction='row'>

        <IconButton>
          <DarkModeIcon sx={{ color: 'white'}} />
        </IconButton>

        <IconButton>
          <NotificationsNoneIcon sx={{ color: 'white'}} />
        </IconButton>

        <IconButton>
          <AccountCircleIcon sx={{ color: 'white'}} />
        </IconButton>

      </Stack>
    </Box>
  );
}

export default NavBar;