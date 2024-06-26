import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);
  const [isLeftShowing, setIsLeftShowing] = useState(false);
  const [isRightShowing, setIsRightShowing] = useState(true);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  const goForward = () => {
    setCurrCardIdx(currCardIdx + 1);    
    if( currCardIdx+1 === (total - 1) ) {
      setIsRightShowing(false);
    } else {
      setIsLeftShowing(true);
    }
  }

  //Decreases currCardIdx state by 1
  const goBack = () => {
    setCurrCardIdx(currCardIdx-1);
    if(currCardIdx === 1) {
      setIsLeftShowing(false);    
    } else {
      setIsRightShowing(true);
    }
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {isLeftShowing && <i
          className="bi bi-arrow-left-circle"
          onClick={goBack}
        />}
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        {isRightShowing && <i
          className="bi bi-arrow-right-circle"
          onClick={goForward}
        />}
      </div>
    </div>
  );
}

export default Carousel;
