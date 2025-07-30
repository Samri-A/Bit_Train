import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  Stack,
  Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Header from '../component/Header';
const gyms = [
  {
    name: 'Dagim Gymnastics',
    distance: '500 m away',
    price: '2K per month',
    status: '24 hours open',
  },
  {
    name: 'Maya Gymnastics',
    distance: '1 km away',
    price: '2K per month',
    status: '24 hours open',
  },
];

const NearbyGyms = () => {
  return (
    <Box sx={{ bgcolor: '#17191f', color: 'white',p: 2 }} height = '100vh'>
      <Header title={'Nearby Gym'}/>
      <Stack spacing={2} pt={2}>
        {gyms.map((gym, index) => (
          <Card
            key={index}
            sx={{
              borderRadius: 2,
              boxShadow: 3,
              p: 1,
            }}
          >
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">
                {gym.name}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                <Box>
                  <Typography variant="body2">{gym.distance}</Typography>
                  <Typography variant="body2">{gym.price}</Typography>
                </Box>
                <Box>
                  <Typography variant="body2">{gym.status}</Typography>
                  <Link href="#" underline="none" sx={{ display: 'flex', alignItems: 'center', mt: 0.5, fontSize: 14 }}>
                    Explore <ArrowForwardIosIcon sx={{ fontSize: 14, ml: 0.5 }} />
                  </Link>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default NearbyGyms;
