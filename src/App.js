import { Box } from '@mui/material';
import './App.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Statistics from './statistics/Statistics';
import OptionsBar from './statistics/options/AppBar';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  return (
    <Box className="app-container">
      <OptionsBar />
      <Statistics />
    </Box>
  );
}

export default App;
