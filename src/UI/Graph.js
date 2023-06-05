import React, { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import classes from "./Graph.module.css";
import svgPaths from "../components/SvgPaths";

ChartJS.register(ArcElement, Tooltip);

const Graph = (props) => {
  useEffect(() => {
    ChartJS.register({
      id: "customPlugin",
      afterDraw: (chart) => {
        const { ctx, chartArea } = chart;

        // 이미지 그리기
        const image = new Image();
        image.src = svgPaths[props.resource[0].title].src;
        const imageWidth = 50;
        const imageHeight = 50;
        const imageX = (chartArea.left + chartArea.right - imageWidth) / 2;
        const imageY = (chartArea.top + chartArea.bottom - imageHeight) / 2.5;
        ctx.drawImage(image, imageX, imageY, imageWidth, imageHeight);

        // 텍스트 그리기
        const DBavg_text = `${props.db} DB`;
        const textX = (chartArea.left + chartArea.right) / 2;
        const textY = imageY + imageHeight + 30;
        ctx.textAlign = "center";
        ctx.font = "bold 20px arial";
        ctx.fillStyle = "black";
        ctx.fillText(DBavg_text, textX, textY);
      },
    });
  }, [props.resource, props.db]);

  const colors = props.resource.map((resource) => svgPaths[resource.title].color);

  const data = {
    datasets: [
      {
        data: props.resource.map((resource) => parseFloat(resource.percent)),
        backgroundColor: colors,
        hoverBackgroundColor: colors,
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
