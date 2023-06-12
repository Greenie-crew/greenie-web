import React, { useEffect, useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, CategoryScale, DoughnutController } from "chart.js";

import { useDispatch } from "react-redux";
import { setImageURL } from "../actions/imageActions";

import classes from "./Graph.module.css";
import svgPaths from "../components/SvgPaths";

ChartJS.register(Tooltip, ArcElement, CategoryScale, DoughnutController);

const Graph = (props) => {
  const dispatch = useDispatch();

  const canvasRef = useRef(null);

  useEffect(() => {
    const drawGraph = () => {
      const chartOptions = {
        // 차트 옵션
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

      const chartConfig = {
        type: "doughnut",
        data: {
          datasets: [
            {
              data: props.resource.map((resource) => parseFloat(resource.percent)),
              backgroundColor: props.resource.map((resource) => svgPaths[resource.title].color),
              hoverBackgroundColor: props.resource.map((resource) => svgPaths[resource.title].color),
            },
          ],
        },
        options: chartOptions,
      };

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const chart = new ChartJS(ctx, chartConfig);

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
        chart.destroy();
      };
    };

    drawGraph();

    const imageURL = generateImageURL();
    dispatch(setImageURL(imageURL));
  }, [props.resource, props.db, dispatch]);

  const generateImageURL = () => {
    if (!canvasRef.current) return null;

    const canvas = canvasRef.current;
    return canvas.toDataURL(); // Canvas 데이터를 이미지 데이터 URL로 변환
  };

  const imageURL = generateImageURL();

  //   let imageState = useSelector((state) => state.imageURL);

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

  return (
    <div className={classes.graph}>
      <canvas ref={canvasRef} data={data} />
      {imageURL && <img src={imageURL} alt="Graph" />}
    </div>
  );
};

export default Graph;
