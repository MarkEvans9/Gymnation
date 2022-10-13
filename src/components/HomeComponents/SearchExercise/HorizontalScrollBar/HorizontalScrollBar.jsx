import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "./HorizontalScroll.css";
import BodyPartCard from "./BodyPartCard/BodyPartCard";
import ExerciseCard from "../../Exercises/ExerciseCard/ExerciseCard";

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, isBodyPart }) => {
  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return <p onClick={() => scrollPrev()}>Left</p>;
  };

  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return <p onClick={() => scrollNext()}>Right</p>;
  };

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <div
          style={{ margin: "0 40px" }}
          key={item.id || item}
          title={item.id || item}
          item={item.id || item}
        >
          {isBodyPart ? (
            <BodyPartCard
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </div>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;
