import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  IconButton,
  Button,
  Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShareIcon from '@mui/icons-material/Share';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Header from '../component/Header';
const AccountabilityPartner = () => {
  const partners = [
    {
      name: 'Tola',
      status: '4 days in a row',
      icon: <WhatshotIcon sx={{ color: 'orange' }} />,
      avatarColor: '#EA916EFF',
    },
    {
      name: 'Abechci',
      status: 'Missed  gym day',
      icon: null,
      avatarColor: '#EA916EFF',
    },
  ];

  return (
    <Box sx={{ bgcolor: '#000000', minHeight: '100vh', p: 2, pb: 8 }}>
       <Header title={'Partner'}/>
     

      <Stack spacing={2} ml={1}>
        {partners.map((partner, idx) => (
          <Card
            key={idx}
            sx={{
              bgcolor: '#fff',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              px: 2,
              py: 1,
              justifyContent: 'space-between',
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar sx={{ bgcolor: partner.avatarColor }}>
                {partner.name[0]}
              </Avatar>
              <Box>
                <Typography variant="subtitle2">{partner.name}</Typography>
                <Typography fontWeight="bold">
                  {partner.status} {partner.icon}
                </Typography>
              </Box>
            </Stack>
            <ArrowForwardIosIcon fontSize="small" />
          </Card>
        ))}
      </Stack>
      <Box
        sx={{
          position: 'fixed',
          bottom: 16,
          left: 16,
          right: 16,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button
          variant="contained"
          sx={{
            bgcolor: '#6366f1',
            borderRadius: 8,
            px: 4,
            textTransform: 'none',
            width : '90%'
          }}
          startIcon={<ShareIcon />}
        >
          Share Profile
        </Button>
      </Box>
    </Box>
  );
};

export default AccountabilityPartner;
