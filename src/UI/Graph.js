import React, { useEffect, useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import classes from "./Graph.module.css";

ChartJS.register(ArcElement, Tooltip);

ChartJS.register({
  id: "customPlugin",
  beforeDraw: (chart) => {
    const { ctx, chartArea } = chart;

    // 이미지 그리기
    const image = new Image();
    image.src = "/icons/car.svg";
    const imageWidth = 73;
    const imageHeight = 73;
    const imageX = (chartArea.left + chartArea.right - imageWidth) / 2;
    const imageY = (chartArea.top + chartArea.bottom - imageHeight) / 2.5;
    ctx.drawImage(image, imageX, imageY, imageWidth, imageHeight);

    // 텍스트 그리기
    const DBavg_text = "81.7 DB";
    const textX = (chartArea.left + chartArea.right) / 2;
    const textY = imageY + imageHeight + 10;
    ctx.textAlign = "center";
    ctx.font = "bold 20px arial";
    ctx.fillStyle = "black";
    ctx.fillText(DBavg_text, textX, textY);
  },
});

const Graph = (props) => {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green"],
    datasets: [
      {
        data: [70, 20, 5, 5],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#33FF9E"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#33FF9E"],
      },
    ],
  };

  const chartOptions = {
    // 차트 옵션
    plugins: {
      customPlugin: {}, // 사용자 정의 플러그인 추가
    },
    maintainAspectRatio: false,
    cutout: "70%",

    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  };

  return (
    <div style={{ justifyContent: "center" }}>
      <div className={classes.graph}>
        <Doughnut data={data} options={chartOptions} />
      </div>
    </div>
  );
};

export default Graph;
