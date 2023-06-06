import React, { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import classes from "./Graph.module.css";
import svgPaths from "../components/SvgPaths";

ChartJS.register(Tooltip, ArcElement);

const Graph = (props) => {
  useEffect(() => {
    const customPlugin = {
      id: "customPlugin",
      beforeDraw: (chart) => {
        const ctx = chart.ctx;
        const chartArea = chart.chartArea;

        // 이미지 그리기
        const image = new Image();
        image.src = svgPaths[props.resource[0].title].src;

        const imageWidth = 50;
        const imageHeight = 50;
        const imageX = (chartArea.left + chartArea.right - imageWidth) / 2;
        const imageY = (chartArea.top + chartArea.bottom - imageHeight) / 2.5;

        image.onload = () => {
          ctx.drawImage(image, imageX, imageY, imageWidth, imageHeight);
        };

        // 텍스트 그리기
        const DBavg_text = `${props.db}`;
        const textX = (chartArea.left + chartArea.right) / 2.15;
        const textY = imageY + imageHeight + 32;
        const originalFont = ctx.font;

        ctx.textAlign = "center";
        ctx.font = "bold 20px arial";
        ctx.fillStyle = "black";
        ctx.fillText(DBavg_text, textX, textY);
        ctx.font = originalFont;

        // 두 번째 텍스트 그리기
        const dbX = textX + ctx.measureText(props.db).width + 13;
        const dbY = textY;
        ctx.font = "normal 16px arial";
        ctx.fillStyle = "#111111";
        ctx.fillText("dB", dbX, dbY);
        ctx.font = originalFont;
      },
    };

    ChartJS.register(customPlugin);

    return () => {
      ChartJS.unregister(customPlugin);
    };
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
    <div className={classes.graph}>
      <Doughnut data={data} options={chartOptions} />
    </div>
  );
};

export default Graph;
