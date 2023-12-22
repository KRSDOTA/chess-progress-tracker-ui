import { Box } from '@mui/material';
import './App.css';
import Statistics from './statistics/Statistics';
import OptionsBar from './statistics/options/AppBar';

function App() {
  return (
    <Box className="app-container">
      <OptionsBar />
      <Statistics />
    </Box>
  );
}

export default App;
