import LaunchScreen from "./component/LaunchScreen";
import RegisterScreen from "./component/Login";
import { useMediaQuery , Box , Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Register from "./component/Register";
import Home from "./component/Home";
import Test from './component/test';
import Setting from "./pages/Setting";
import AccountabilityPartner from './pages/Partner';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
    {isSmallScreen ? 
        <Router>
          <Routes>
            <Route path="/" element={<LaunchScreen/>}></Route>
             <Route path="/register"  element={<Register/>}></Route>
             <Route path="/login" element={<RegisterScreen/>}></Route>
             <Route path="/home" element={<Home/>}></Route>
             <Route path="/test" element={<Test/>} ></Route>
             <Route path="/setting" element={<Setting/>}></Route>
             <Route path="/partner" element={<AccountabilityPartner/>}></Route>
          </Routes>
         </Router>

    :
    
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

export default App;
