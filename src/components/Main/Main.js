import React, { useState, useRef } from 'react';
import TrianglesCanvas from '../TrianglesCanvas/TrianglesCanvas';
import RightsideMenu from '../RightsideMenu/RightsideMenu';

function Main() {
  const [isClicked, setIsClicked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [bgColors, setBgColors] = useState(['#000000']);
  const [triangleColors, setTriangleColors] = useState(['#ffffff']);
  const [triangleStrokeColor, setTriangleStrokeColor] = useState(['#ffffff']);
  const canvasRef = useRef(null);

  const handleSaveClick = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.href = canvas.toDataURL(); // Get the canvas data URL
    link.download = 'canvas.png'; // Set the download filename
    link.click(); // Simulate click on the link to trigger download
  };
  return (
    <section className="main">
      <RightsideMenu
        bgColors={bgColors}
        setBgColors={setBgColors}
        triangleStrokeColor={triangleStrokeColor}
        setTriangleStrokeColor={setTriangleStrokeColor}
        triangleColors={triangleColors}
        setTriangleColors={setTriangleColors}
      />
      <div className="main__content">
        <TrianglesCanvas
          isClicked={isClicked}
          canvasRef={canvasRef}
          triangleColors={triangleColors}
          setTriangleColors={setTriangleColors}
          bgColors={bgColors}
        />
        <button className="main__run-button" onClick={() => setIsClicked(!isClicked)}>
          Run
        </button>
        <button className="main__save-button" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </section>
  );
}

export default Main;
