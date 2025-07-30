import { useTheme } from '@mui/material/styles';
import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { Box, Typography, Button, Card, CardContent, Grid , Stack } from '@mui/material';
import logo from "../img/dark_logo.jpg";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import NavBox from './nav_bar';
import Header from './Header';
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';
import WhatshotIcon from '@mui/icons-material/Whatshot'; // Streak
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'; // Workout
import OpacityIcon from '@mui/icons-material/Opacity'; // Water
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'; // Goal Completion


const Test = ()=>{
    const navigate = useNavigate();
    const [fitnessScore , setFitnessScore] = useState(82)
    const [showNav , setShowNav ] = useState(false)
      
    
     return(
          
        <Box bgcolor={'black'} pb={3}>
          <Header  />
          

      <Box pl={4} pr={3} display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" fontFamily={'sans-serif'} sx={{color:'white'  , fontWeight:'bold'}}> Overview</Typography>
        <Button variant="outlined" size="small" sx={{ borderRadius : '10%' ,color: "#6366f1" , textTransform:'none'}} startIcon={<RocketLaunchIcon/>}><Typography color='white'>All data</Typography></Button>
      </Box>
      <Box pl={3} pr={3}>
      <Card  className="card fitness-score" sx={{backgroundColor:'#333333F0'}}>
        <CardContent>
          
      {fitnessScore}
    
          <Typography variant='body1'  color="white" fontFamily={'sans-serif'} sx={{fontWeight:'bold'}}>
              Fitness Score
          </Typography>
          
          <Typography variant="body2" color="white" fontFamily={'sans-serif'}>
            Based on your latest tracking data, your score is 82 and considered Excellent. You're showing consistent gains — stay focused and keep pushing!
          </Typography>
          
          <Button variant="text" sx={{color:"#6366f1" , textTransform:'none' , marginLeft:'auto'}} >Tell me more</Button>
        </CardContent>
      </Card>
      <Typography p={1} variant="h6" color='white' sx={{fontWeight:'bold'}}>Highlights</Typography>
      
      <Grid container spacing={2} width={'100%'}>
        <Grid item width={'47%'}>
          <Card className="card highlight-card" sx={{backgroundColor:'#EA916EFF' , borderRadius : '5px'}}>
            <CardContent>
              <AccessibilityNewIcon sx={{
                      position: 'relative',
                      top: '3px', 
                      left: '86px', 
                      width: '72px', 
                      height: '72px', 
                      fill: '#FFFFFFFF', 
                    }}/>
              <Typography variant="body1" color="white" fontFamily={'sans-serif'} sx={{fontWeight:'bold'}}>Fat Decreased</Typography>
              <Typography variant="h6" color="white" fontFamily={'sans-serif'} sx={{fontWeight:'bold'}}>2%</Typography>
              <Typography variant="caption"  color="white" fontFamily={'sans-serif'}>updated 15 min ago</Typography>
            </CardContent>

          </Card>
        </Grid>
        <Grid item width={'47%'}>
          <Card className="card highlight-card" sx={{backgroundColor:'#EA916EFF'}}>
            <CardContent>
              <DirectionsRunOutlinedIcon
                sx={{
                      position: 'relative',
                      top: '3px', 
                      left: '86px', 
                      width: '72px', 
                      height: '72px', 
                      fill: '#FFFFFFFF', 
                    }}
              />
              <Typography variant="body1" color="white" fontFamily={'sans-serif'} sx={{fontWeight:'bold'}}>Gym check-ins</Typography>
              <Typography variant="h6" color="white" fontFamily={'sans-serif'} sx={{fontWeight:'bold'}}>12 days</Typography>
              <Typography variant="caption" color="white" fontFamily={'sans-serif'} >updated 5 min ago</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      <Box p={2} display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        
       <Typography variant="h6"  color='white' fontFamily={'sans-serif'} sx={{fontWeight:'bold'}}>
        This week report
      </Typography>
      <Button variant="text" size="small" sx={{ borderRadius : '10%' ,color: "#6366f1" , textTransform:'none'}} ><Typography color='6366f1'>View more</Typography></Button>

      </Box>
      <Grid container spacing={2}>
        <Grid item xs={6} width={'47%'}>
          <Card className="card">
            <CardContent sx={{ backgroundColor: '#333333F0' }}>
              <Stack alignItems="center" spacing={1}>
                <WhatshotIcon sx={{color:'#E25822'}} />
                <Typography variant="h6" color="white" fontFamily={'sans-serif'} sx={{fontWeight:'bold'}}>Streak</Typography>
                <Typography variant="body2" color="white" fontFamily={'sans-serif'} >3 Days</Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} width={'47%'}>
          <Card className="card">
            <CardContent sx={{ backgroundColor: '#333333F0' }}>
              <Stack alignItems="center" spacing={1}>
                <FitnessCenterIcon sx={{color :'#D3D3D3'}} />
                <Typography variant="h6" color="white" fontFamily={'sans-serif'} sx={{fontWeight:'bold'}}>Workout</Typography>
                <Typography variant="body2" color="white" fontFamily={'sans-serif'}>6h 45min</Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} width={'47%'}>
          <Card className="card">
            <CardContent sx={{ backgroundColor: '#333333F0' }}>
              <Stack alignItems="center" spacing={1}>
                <OpacityIcon sx={{color:'#87CEFA'}} />
                <Typography variant="h6" color="white" fontFamily={'sans-serif'} sx={{fontWeight:'bold'}}>Water</Typography>
                <Typography variant="body2" color="white" fontFamily={'sans-serif'}>10,659 ml</Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} width={'47%'}>
          <Card className="card">
            <CardContent sx={{ backgroundColor: '#333333F0' }}>
              <Stack alignItems="center" spacing={1}>
                <EmojiEventsIcon sx={{color:'#FFC107'}} />
                <Typography variant="h6" color="white" fontFamily={'sans-serif'} sx={{fontWeight:'bold'}}>Goal Completion</Typography>
                <Typography variant="body2" color="white" fontFamily={'sans-serif'} >80%</Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </Box>
    </Box>
              
     );
}

export default Test;