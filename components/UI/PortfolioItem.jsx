import React from "react";
import classes from "../../styles/portfolio-item.module.css";
import Image from "next/image";

const PortfolioItem = (props) => {
  const { title, img, liveUrl, keyword } = props.item;
  const hnadleLunch=()=>{
    window.open('')
  }
  return (
    <div className={`${classes.portfolio__item}`}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        {keyword.map((item, index) => (
          <span className={`${classes.portfolio__keyword}`} key={index}>
            {item}
          </span>
        ))}
      </div>

      <div className={`${classes.portfolio__img}`}>
        <Image alt="portfolio-img" src={img} width="380" height="250" />
      </div>

      <div className={`${classes.portfolio__live} bg-transparent`}>
        <button onClick={()=>window.open(liveUrl)} className="primary__btn">
          Launch
        </button>
      </div>
    </div>
  );
};

export default PortfolioItem;
