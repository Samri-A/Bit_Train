import {Box , Button , Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../img/dark_logo.jpg";
import { useState } from 'react';
import NavBox from './nav_bar';
const Header = ({title})=>{
    const [showNav , setShowNav] = useState(false)
    
    const handleClick =()=>{
    
        setShowNav(!showNav);
    }
    return(
        <Box bgcolor={'black'}>
          <Box display={'flex'} flexDirection={'row'}>
            <Button onClick={handleClick}  startIcon={<MenuIcon  sx={{color:'white', fontSize: '40px !important'}}/>}></Button>
            <Typography mt={2} color='white' fontFamily={'sans-serif'} fontSize={'18px'}> {title}</Typography>
            <Box
                      component="img"
                        src={logo}
                        alt="Logo"
                        sx={{
                          height: '45px',
                          borderRadius: '50%',
                          position: 'relative',
                          marginLeft: '30px',
                          marginLeft: 'auto'
                        }}
            
                      >
            
             </Box>
          </Box>
          {showNav && <NavBox/>} 
          </Box>
    );

}

export default Header;