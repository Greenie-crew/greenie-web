import React, { useRef, useState } from "react";
import CardAlbum from "./CardAlbum";
import "./CardNewsList.css";

const CardNewsList = (props) => {
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();
  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };
  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;

      scrollRef.current.scrollLeft = startX - e.pageX;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth === maxScrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  const throttle = (func, ms) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };

  const delay = 100;
  const onThrottleDragMove = throttle(onDragMove, delay);

  return (
    <ul className="cardnews-list" ref={scrollRef} onMouseDown={onDragStart} onMouseMove={onThrottleDragMove} onMouseUp={onDragEnd} onMouseLeave={onDragEnd}>
      {props.items.map((album, index) => (
        <CardAlbum key={index} img={album.img} title={album.title} className="cardAlbum_margin" />
      ))}
    </ul>
  );
};

export default CardNewsList;
