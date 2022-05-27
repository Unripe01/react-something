import React, { useCallback, useState } from "react";

type Props = {
  clickedX: number;
  clickedY: number;
  handleClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

type hanaleParam = Parameters<Props["handleClick"]>[0];

//component
const UseCallbackSampleComponent: React.FC<Props> = (props) => (
  <div>
    <div
      style={{ width: 100, height: 100, background: "#ccf", marginLeft:10 }}
      onClick={props.handleClick}
    />
    <p
      style={{ width: 100, height: 100, background: "#fcc", marginLeft:10 }}
      onClick={props.handleClick}
    />
    <p>X : {props.clickedX}</p>
    <p>Y : {props.clickedY}</p>
  </div>
);

//container
const UseCallbackSampleContainer: React.FC = () => {
  const [state, update] = useState({
    clickedX: 0,
    clickedY: 0,
  });

  const handleClick = useCallback((event: hanaleParam) => {
    const { top, left } = event.currentTarget.getBoundingClientRect();
    update((prev) => ({
      ...prev,
      clickedX: event.clientX - left,
      clickedY: event.clientY - top,
    }));
  }, []);

  return (
    <UseCallbackSampleComponent
      clickedX={state.clickedX}
      clickedY={state.clickedY}
      handleClick={handleClick}
    />
  )
};

export default UseCallbackSampleContainer;
