  import { useMediaQuery, Box, Typography , Button , InputAdornment , Divider  , IconButton , TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useState } from "react";
import axios from 'axios';
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const add_user = async (formdata)=>{
  const response = await axios.post('http://localhost:5000/api/users/login' , formdata)
  return response

}

const Login = ()=>{
    const theme = useTheme();
    const navigate = useNavigate();
    const [message , setMessage] = useState();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [showPassword, setShowPassword] = useState(false);
    const [formdata , setFormdata] = useState(
      {
        email : '',
        password : ''
      }
    );
    const handleChange = (e) =>{
        setFormdata({
          ...formdata,
        [e.target.name]: e.target.value})
      }

    const handlesubmit = async (e) =>{
      e.preventDefault();
       try{
      const response = await add_user(formdata);
      setMessage(response.data.message)
      console.log(message);
      navigate('/home');
    }catch(error){
      setMessage(error.response?.data?.message || 'Error signing in. Please try again.');
      console.error(error);
    }
      }
    
     return(
        <>
        {isSmallScreen  ?      
        
            <Box
              sx={{
                minHeight: "100vh",
                bgcolor: "#0f0f0f",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: 2,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 400,
                  
                  p: 4,
                  borderRadius: 4,
                }}
              >
                <Typography variant="h5" color="white" fontWeight={600} mb={3} mt={3} textAlign="center">
                  Welcome Back 🙌
                </Typography>
                
                
        
                <Typography variant="subtitle2" color="white" mb={1}>
                  Email
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Enter email"
                  variant="outlined"
                  sx={{ mb: 2 ,
                    '&.MuiInputBase-root': {
                                 backgroundColor: 'white',
                                 borderRadius: 3,
                    }
                  }}
                />
        
                <Typography variant="subtitle2" color="white" mb={1}>
                  Password
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Enter password"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  sx={{ mb: 3 ,
                    '&.MuiInputBase-root': {
                                 backgroundColor: 'white',
                                 borderRadius: 3,
                    }
                  }}
                />
        
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    borderRadius: 999,
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "1rem",
                    bgcolor: "#6366f1",
                    py: 1.2,
                    "&:hover": {
                      bgcolor: "#4f46e5",
                    },
                  }}
                >
                  Login
                </Button>
                <Divider sx={{ my: 3, color: "#444" }}>OR CONTINUE WITH</Divider>
        
                <Box display="flex" justifyContent="center" mb={2}>
                  <FaGoogle size={28} color="#ea4335" style={{ cursor: "pointer" }} />
                </Box>
        
                <Typography variant="body2" color="#aaa" textAlign="center">
                  Do not you have an account?{" "}
                  <Button href="/register" sx={{
                    textTransform: "none",}}>
                    <Typography component="span" color="primary" fontWeight={500} sx={{ cursor: "pointer" }}>
                    Register
                   </Typography>
                  </Button>
                  
                </Typography>
              </Box>
            </Box>    : 

        <Box sx={
            {
                width:'100vw',
                height:'100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'black'
            }}
        > 
        
            <Typography color='white' >Try it on your phone </Typography>

       </Box>
    }
        </>
              
     );
}

export default Login;