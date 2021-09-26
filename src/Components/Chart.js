import { memo } from "react";
import { Line, defaults } from "react-chartjs-2";
import styled from "styled-components";

const Canvas = styled.div`
  width: 100%;

  canvas {
    background-color: white;
  }

  @media (min-width: 900px) {
    width: 100%;
    height: 300px;
  }
`;

let Chart = ({ name, priceList }) => {
  let labelArray = [];
  for (let i = 0; i < priceList.length; i++) {
    labelArray.push(i);
  }

  defaults.font.size = "8px";
  const data = {
    labels: labelArray,
    datasets: [
      {
        label: name,
        data: priceList,
        fill: false,
        backgroundColor: "#eab300",
        borderColor: "#eab300",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  };

  return (
    <Canvas>
      <Line data={data} options={options} style={{}} />
    </Canvas>
  );
};

Chart = memo(Chart);

export default Chart;
