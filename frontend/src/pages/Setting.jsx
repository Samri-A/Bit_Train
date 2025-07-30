import { Box, Card, CardContent, Typography, Divider, Switch, FormControlLabel } from "@mui/material";
import Header from "../component/Header";

const Setting = () => {
  return (
    <Box bgcolor="black"  p={0}>
      <Header title={'Settings'} />
      <Box ml={3} mr={2} pb={3} pt={1}>
        

        <Card sx={{ backgroundColor: "#1e1e1e", borderRadius: "8px", mb: 2 }}>
          <CardContent>
            <Typography variant="subtitle1" fontWeight="bold" color="white">
              My Gym Location
            </Typography>
            <Typography variant="body2" color="gray">
              Addis Ababa, Bole – FitZone Gym
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ backgroundColor: "#1e1e1e", borderRadius: "8px", mb: 2 }}>
          <CardContent>
            <FormControlLabel
              control={<Switch defaultChecked sx={{ color: "white" }} />}
              label={
                <Typography variant="body2" color="white">
                  Enable Workout Reminders
                </Typography>
              }
            />
          </CardContent>
        </Card>

        <Card sx={{ backgroundColor: "#1e1e1e", borderRadius: "8px", mb: 2 }}>
          <CardContent>
            <FormControlLabel
              control={<Switch sx={{ color: "white" }} />}
              label={
                <Typography variant="body2" color="white">
                  Dark Mode
                </Typography>
              }
            />
          </CardContent>
        </Card>

        <Card sx={{ backgroundColor: "#1e1e1e", borderRadius: "8px", mb: 2 }}>
          <CardContent>
            <Typography variant="subtitle1" fontWeight="bold" color="white">
              Account
            </Typography>
            <Typography variant="body2" color="gray">
              samrawit.asfaw@gmail.com
            </Typography>
            <Divider sx={{ my: 1, bgcolor: "gray" }} />
            <Typography variant="body2" color="primary" sx={{ cursor: "pointer" }}>
              Log out
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Setting;
