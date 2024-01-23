import { Line } from 'react-chartjs-2';

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    }
  },
};

export function LineGraph({ dataPoints, graphLabel }) {
  
  const extractedCoordinates = {
    time: [],
    rating: []
  };

  dataPoints.forEach((dataPoint) => {
    extractedCoordinates.time.push(dataPoint.time);
    extractedCoordinates.rating.push(dataPoint.rating);
  });

const data = {
  labels: extractedCoordinates.time,
  datasets: [
    {
      label: graphLabel,
      data: extractedCoordinates.rating,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ]
};

  return <Line options={options} data={data} />;
}
