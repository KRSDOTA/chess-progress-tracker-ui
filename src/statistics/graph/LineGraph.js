import React from 'react';
import { Line } from 'react-chartjs-2';

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export function LineGraph({ dataPoints, label }) {
  
const data = {
  datasets: [
    [...dataPoints.time],
    {
      label: label,
      data: [...dataPoints.rating],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};

  return <Line options={options} data={data} />;
}
