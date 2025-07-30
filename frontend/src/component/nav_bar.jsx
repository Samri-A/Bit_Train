import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useLocation, Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import GroupIcon from '@mui/icons-material/Group';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SettingsIcon from '@mui/icons-material/Settings';

const navItems = [
  { text: 'home', icon: <DashboardIcon />, path: '/home' },
  { text: 'Workouts', icon: <FitnessCenterIcon />, path: '/workouts' },
  { text: 'Progress', icon: <MonitorWeightIcon />, path: '/progress' },
  { text: 'Coach', icon: <SmartToyIcon />, path: '/coach' },
  { text: 'Partner', icon: <GroupIcon />, path: '/partner' },
  { text: 'Gyms Nearby', icon: <LocationOnIcon />, path: '/gyms' },
  { text: 'Settings', icon: <SettingsIcon />, path: '/setting' },
];

export default function NavBox() {
  const location = useLocation();

  return (
    <Drawer variant="permanent" sx={{ width: 240, '& .MuiDrawer-paper': { width: 240 } }}>
      <List>
        {navItems.map(({ text, icon, path }) => (
          <ListItem
            button
            key={text}
            component={Link}
            to={path}
            selected={location.pathname === path}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
