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
import StatisticsOverview from './statistics/Statistics';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

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
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box className="app-container">
        <StatisticsOverview />
      </Box>
    </LocalizationProvider>
  );
}

export default App;
