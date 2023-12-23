import { CategoryScale, Chart } from "chart.js";
import { Line } from "react-chartjs-2";


Chart.register(CategoryScale);

/**
 * Component for taking time period props and displaying 
 * Graph data
 */
const data = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'ELO',
      data: [300, 400, 500, 600, 700, 800],
      borderWidth: 1
    }]
  };

function ProgressChart() {
    return (
        <>
        <Line 
        data={data}
        />
        </>
    )
}
export default ProgressChart;