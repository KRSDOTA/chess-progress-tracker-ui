import { Box } from '@mui/material';
import './App.css';
import Statistics from './statistics/Statistics';
import SearchAppBar from './statistics/search/AppBar';

function App() {
  return (
    <Box className="app-container">
      <SearchAppBar />
      <Statistics />
    </Box>
  );
}

export default App;
