import { useMediaQuery, Box, Typography , Button , InputAdornment , Divider  , IconButton , TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useState } from "react";
import axios from 'axios';
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const add_user = async (formdata)=>{
  const response = await axios.post('http://localhost:5000/api/users/add' , formdata)
  return response

}

const Register = ()=>{
    const theme = useTheme();
    const navigate = useNavigate();
    const [message , setMessage] = useState();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [showPassword, setShowPassword] = useState(false);
    const [formdata , setFormdata] = useState(
      {
        name : '',
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
        <Box alignItems={'center'} justifyContent={'center'}  bgcolor={'black'}
         sx={
            {
                width:'100vw'
            }
         }
        > 
        
            <Typography p={5} color='white' sx={{
                fontSize: '32px' ,
                fontFamily: 'Archivo, sans-serif' ,
                textAlign : 'center'

            }}>Welcome 🙌</Typography>
            
                    

        <Box
            component="form"
            onSubmit={handlesubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column', 
              gap: 2, 
              fontFamily: 'Archivo, sans-serif' ,
              p:3,
              alignItems:'center'
              
              
            }}
          >
            <Typography variant="subtitle2" color="white" mb={1} sx={{ alignSelf: 'flex-start',fontFamily: 'Archivo, sans-serif'}}>
                      Full Name
                    </Typography>
                    <TextField
                      name='name'
                      value={formdata.name}
                      onChange={handleChange}
                      placeholder="Enter full name"
                      variant="outlined"
                      
                      
                      sx={{ mb: 2 ,
                        width: '90%',
                        '& .MuiInputBase-root': {
                         backgroundColor: 'white',
                         borderRadius: 5,
                       },
                      }}
                    />
            
        <Typography variant="subtitle2" color="white" mb={1} sx={{ alignSelf: 'flex-start',fontFamily: 'Archivo, sans-serif'}}>
          Email
        </Typography>
        <TextField
          name='email'
          value={formdata.email}
          onChange={handleChange}
          placeholder="Enter email"
          variant="outlined"
          
          sx={{ mb: 2 ,
            width: '90%',
            '& .MuiInputBase-root': {
             backgroundColor: 'white',
             borderRadius: 5,
           },

          }}
        />

        <Typography variant="subtitle2" color="white" mb={1} sx={{ alignSelf: 'flex-start',fontFamily: 'Archivo, sans-serif'}}>
          Password
        </Typography>
        <TextField
          name='password'
          value={formdata.password}
          onChange={handleChange}
          placeholder="Enter password"
          variant="outlined"
          type={"password"}
          
          sx={{ mb: 3 , 
            width: '90%',
            '& .MuiInputBase-root': {
                         backgroundColor: 'white',
                         borderRadius: 5,
                       },
          }}
        />
            <Button  variant='contained' sx={{ 
            width: '90%', borderRadius:5 , fontSize: "1rem" , 
            bgcolor: "#6366f1",}} type="submit">
              Submit
            </Button> 

            <Typography sx={{color: '#444' , textAlign : 'center'}}>OR CONTINUE WITH</Typography>
            <Box display="flex" justifyContent="center" mb={2}>
                      <FaGoogle size={28} color="red" style={{ cursor: "pointer" }} />
             </Box>

             <Typography variant="body2" color="#aaa" textAlign="center">
                       Do you have an account?{" "}
                       <Button href='/login' sx={{
            textTransform: "none",}}>
                        <Typography component="span" color="primary" fontWeight={500} sx={{ cursor: "pointer" }}>
                         Login
                       </Typography>
                       </Button>
                       
                     </Typography>
          </Box>

        
        </Box>     : 

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

export default Register;