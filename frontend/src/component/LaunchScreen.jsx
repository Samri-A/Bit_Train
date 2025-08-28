import React, { useState } from 'react';
import { useMediaQuery, Box, Typography , Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import img from "../img/photo_2025-07-26_10-03-09.jpg";
import logo from "../img/logo.jpg";
const LaunchScreen = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [isdarkmode, setIsDarkmode] = useState(true);
  return (
    <Box
      sx={{
        
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: isdarkmode ? 'black' : '#f0f0f0',
        p: 0,
      }}
    >
      {isSmallScreen ? (
        <Box>
        
        <Box
            component="img"
            src={img}
            alt="My image"
            sx={{
              height:'80%',
              width: '100vw',
              borderRadius: 2,
              borderLeft: 3,
              boxShadow: 3,
             
              borderBottomLeftRadius: 360,
              borderBottomRightRadius: 10,
            }}
            display={'flow'}
        >
              
          </Box>
          <Box
          component="img"
            src={logo}
            alt="Logo"
            sx={{
              height: '80px',
              width: '80px',
              borderRadius: '50%',
              position: 'relative',
              marginLeft: '30px',
            }}

          >

          </Box>
          <Box>
                <Typography fontSize={32} color='white' p={2} sx={{ fontFamily: 'Archivo, sans-serif' }}>
                  Let's start your gym journey today with us!
                </Typography>

                <Button
                  href='/register'
                  size='big'
                  sx={
                    {
                      width : '85%',
                      borderRadius: 10,
                      backgroundColor: 'white',
                      
                      margin:  '35px',
                      size: '50px'

                    }
                  }
                > 
                  <Typography sx={{color:'black', fontFamily: 'Archivo, sans-serif' ,
                    fontSize: '15px !important'}}> Get Started </Typography>
                  </Button>
              </Box>
        </Box>
      ) : (
        <Box
           sx={
            {
              display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
            }
           }>
                  <Typography variant="h4" color="text.secondary" textAlign="center">
          🚧 Coming Soon for large screen. Try it on your phone.
        </Typography>
        </Box>

      )}
    </Box>
  );
};

export default LaunchScreen;
