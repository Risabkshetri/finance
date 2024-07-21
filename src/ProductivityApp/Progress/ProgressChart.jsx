// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler,
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler
// );

// const ProgressChart = ({ data }) => {
//   const chartData = {
//     labels: data.map(item => {
//       const date = new Date(item.date);
//       return date.getDate(); // Only show day of the month
//     }),
//     datasets: [
//       {
//         label: 'Notes Created',
//         data: data.map(item => item.notesCount),
//         borderColor: 'rgba(255, 99, 132, 1)',
//         backgroundColor: 'rgba(255, 99, 132, 0.1)',
//         fill: true,
//         tension: 0.4,
//       },
//       {
//         label: 'AI Chats',
//         data: data.map(item => item.chatsCount),
//         borderColor: 'rgba(53, 162, 235, 1)',
//         backgroundColor: 'rgba(53, 162, 235, 0.1)',
//         fill: true,
//         tension: 0.4,
//       },
//       {
//         label: 'Financial Progress',
//         data: data.map(item => item.financialProgress),
//         borderColor: 'rgba(75, 192, 192, 1)',
//         backgroundColor: 'rgba(75, 192, 192, 0.1)',
//         fill: true,
//         tension: 0.4,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: 'top',
//         labels: {
//           usePointStyle: true,
//           pointStyle: 'circle',
//           padding: 20,
//         },
//       },
//       title: {
//         display: true,
//         text: 'Your Progress Over Time',
//         font: {
//           size: 20,
//           weight: 'bold',
//         },
//         padding: {
//           top: 10,
//           bottom: 30,
//         },
//       },
//       tooltip: {
//         mode: 'index',
//         intersect: false,
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false,
//         },
//         ticks: {
//           maxTicksLimit: 10,
//         },
//       },
//       y: {
//         grid: {
//           color: 'rgba(0, 0, 0, 0.05)',
//         },
//         ticks: {
//           padding: 10,
//         },
//       },
//     },
//     interaction: {
//       mode: 'nearest',
//       axis: 'x',
//       intersect: false,
//     },
//     elements: {
//       point: {
//         radius: 0,
//         hitRadius: 10,
//         hoverRadius: 5,
//       },
//     },
//   };

//   return (
//     <div style={{ width: '100%', height: '400px' }}>
//       <Line data={chartData} options={options} />
//     </div>
//   );
// };

// export default ProgressChart;


import React from 'react';
import { Line, Bar, Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ProgressChart = ({ data, chartType }) => {
    console.log(data)
  const chartData = {
    labels: data.map(item => {
      const date = new Date(item.date);
      return `${date.getDate()}/${date.getMonth() + 1}`; // Show day/month
    }),
    datasets: [
      {
        label: 'Notes Created',
        data: data.map(item => item.notesCount),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'AI Chats',
        data: data.map(item => item.chatsCount),
        borderColor: 'rgba(53, 162, 235, 1)',
        backgroundColor: 'rgba(53, 162, 235, 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Financial Progress',
        data: data.map(item => item.financialProgress),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
        },
      },
      title: {
        display: true,
        text: 'Your Progress Over Time',
        font: {
          size: 20,
          weight: 'bold',
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: chartType !== 'radar' ? {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          maxTicksLimit: 10,
        },
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          padding: 10,
        },
      },
    } : {},
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
    elements: {
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 5,
      },
    },
  };

  const ChartComponent = chartType === 'bar' ? Bar : chartType === 'radar' ? Radar : Line;

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ChartComponent data={chartData} options={options} />
    </div>
  );
};

export default ProgressChart;