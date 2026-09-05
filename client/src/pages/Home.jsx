import React from "react";

const Home = () => {
  const divred = React.useRef(null);

  const [dimensions, setDimensions] = React.useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });

  React.useEffect(() => {
    const rect = divred.current.getBoundingClientRect();

    setDimensions({
      width: rect.width,
      height: rect.height,
      top: rect.top,
      left: rect.left,
    });
  }, []);

  console.log("current width", dimensions.width);
  console.log("current height", dimensions.height);
  console.log("current top", dimensions.top);
  console.log("current left", dimensions.left);

  return (
    <div>
      <h1 ref={divred}>Home</h1>
      <p>{dimensions.height}</p>
      <p>{dimensions.width}</p>
    </div>
  );
};

export default Home;