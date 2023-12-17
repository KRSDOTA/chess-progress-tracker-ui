import { TextField } from '@mui/material';
import './App.css';
import Statistics from './statistics/Statistics';

function App() {
  return (
    <>
      <Statistics />
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Small"
        variant="filled"
        size="small"
      />
    </>
  );
}

export default App;
