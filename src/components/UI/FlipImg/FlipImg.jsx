import React from "react";
import "./FlipImg.scss";
import flipData from './FlipData';


const OutFlipImg = () => {
  return (
    <>
    <div className="out">
      <div className='mainFlipImg container'>
        {flipData.map((item) => (
          <FlipImg item={item} key={item.id} />
        ))}
        
      </div>
    </div>
    </>
  );
};

const FlipImg = ({ item }) => {
  const { imgData, miniTitle, description, bigTitle } = item ;

  return (
    <div className="flipImg">
      <div className="font scenter">
        <img src={imgData} alt="" />
        <div className="bigTitle">{bigTitle}</div>
        <div>{miniTitle}</div>
      </div>
      <div className="back center">
        <div className="back-content">
          {description}
        </div>
      </div>
    </div>
  );
}
export default OutFlipImg
