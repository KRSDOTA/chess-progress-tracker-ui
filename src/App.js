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
      {/* <OptionsBar /> */}
      <StatisticsOverview />
    </Box>
  );
}

export default App;
