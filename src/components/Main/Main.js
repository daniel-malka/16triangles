import React, { useState, useEffect, useRef } from 'react';
import TrianglesCanvas from '../TrianglesCanvas/TrianglesCanvas';
import RightsideMenu from '../RightsideMenu/RightsideMenu';
import { Button, Slider, Typography } from '@mui/material';
import Circles from '../circles/Circles';
import BackgroundColorPickerComponent from '../BackgroundColorPickerComponent/BackgroundColorPickerComponent';
import TriangleColorPickerComponent from '../TriangleColorPickerComponent/TriangleColorPickerComponent';

const Main = () => {
  const [isCirclesApp, setIsCirclesApp] = useState(false);
  const [isModified, setIsModified] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [bgColors, setBgColors] = useState(['#000']);
  const [fillColor, setFillColor] = useState(['#fff']);
  const [strokeColor, setStrokeColor] = useState(['#ffffff']);
  const [strokeWidth, setStrokeWidth] = useState(3);
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(true);
  const [isbackgroundColorPickerOpen, setIsbackgroundColorPickerOpen] = useState(false);
  const [isTrianglesColorPickerOpen, setIsTrianglesColorPickerOpen] = useState(false);
  const canvasRef1 = useRef(null);
  const canvasRef2 = useRef(null);
  const [screen, setScreen] = useState(window.innerWidth);
  const [bgSize, setBgSize] = useState(screen - 20);
  const [size, setSize] = useState(screen);
  const [trianglesSize, setTrianglesSize] = useState((screen - 20) / 10);
  const handleCirclesApp = () => {
    setIsCirclesApp(!isCirclesApp);
    setBgColors([]);
    setStrokeColor(['#fff']);
  };
  useEffect(() => {
    setSize(screen);
  }, [screen, setIsTrianglesColorPickerOpen, setIsbackgroundColorPickerOpen]);
  const marks = [
    {
      value: (bgSize / 10).toFixed(3),
      label: `${(bgSize / 10).toFixed(3)}`,
    },
    {
      value: (bgSize / 9.5).toFixed(3),
      label: `${(bgSize / 9.5).toFixed(3)}`,
    },
    {
      value: bgSize / 9,
      label: `${bgSize / 9}`,
    },
    {
      value: bgSize / 8.5,
      label: `${bgSize / 8.5}`,
    },
    {
      value: bgSize / 8,
      label: `${bgSize / 8}`,
    },
    {
      value: bgSize / 7.5,
      label: `${bgSize / 7.5}`,
    },
    {
      value: bgSize / 7,
      label: `${bgSize / 7}`,
    },
    {
      value: bgSize / 6.5,
      label: `${bgSize / 6.5}`,
    },
    {
      value: bgSize / 6,
      label: `${bgSize / 6}`,
    },
    {
      value: bgSize / 5.5,
      label: `${bgSize / 5.5}`,
    },
    {
      value: bgSize / 5,
      label: `${bgSize / 5}`,
    },
    {
      value: bgSize / 4.5,
      label: `${bgSize / 4.5}`,
    },
    {
      value: bgSize / 4,
      label: `${bgSize / 4}`,
    },
    {
      value: bgSize / 3.5,
      label: `${bgSize / 3.5}`,
    },
    {
      value: bgSize / 3,
      label: `${bgSize / 3}`,
    },
    {
      value: bgSize / 2.5,
      label: `${bgSize / 2.5}`,
    },
    {
      value: bgSize / 2,
      label: `${bgSize / 2}`,
    },
    {
      value: bgSize / 1.5,
      label: `${bgSize / 1.5}`,
    },
    {
      value: bgSize / 1,
      label: `${bgSize / 1}`,
    },
  ];
  const handleSaveClick = () => {
    const canvas = isCirclesApp ? canvasRef1.current : canvasRef2.current;
    const resizedCanvas = document.createElement('canvas');
    const scaleFactor = 10;
    resizedCanvas.width = canvas.width * scaleFactor;
    resizedCanvas.height = canvas.height * scaleFactor;
    const resizedContext = resizedCanvas.getContext('2d');
    resizedContext.drawImage(canvas, 0, 0, resizedCanvas.width, resizedCanvas.height);

    const link = document.createElement('a');
    link.href = resizedCanvas.toDataURL();
    link.download = isCirclesApp ? 'circles.png' : 'triangles.png';
    link.click();
  };

  useEffect(() => {
    if (screen > 1440) setBgSize(800);
  }, [isCirclesApp]);

  useEffect(() => {
    setIsModified(true);
  }, [bgColors, fillColor, trianglesSize, strokeWidth, strokeColor]);

  const handleIsClicked = () => {
    console.log('hi');
    setIsClicked(!isClicked);
    setIsModified(false);
  };

  return screen > 1440 ? (
    <section className="main">
      <RightsideMenu
        isbackgroundColorPickerOpen={isbackgroundColorPickerOpen}
        setIsbackgroundColorPickerOpen={setIsbackgroundColorPickerOpen}
        isTrianglesColorPickerOpen={isTrianglesColorPickerOpen}
        setIsTrianglesColorPickerOpen={setIsTrianglesColorPickerOpen}
        strokeWidth={strokeWidth}
        setStrokeWidth={setStrokeWidth}
        isCirclesApp={isCirclesApp}
        isRightMenuOpen={isRightMenuOpen}
        setIsRightMenuOpen={setIsRightMenuOpen}
        bgColors={bgColors}
        setBgColors={setBgColors}
        strokeColor={strokeColor}
        setStrokeColor={setStrokeColor}
        fillColor={fillColor}
        setFillColor={setFillColor}
        trianglesSize={trianglesSize}
        setTrianglesSize={setTrianglesSize}
        bgSize={bgSize}
        setBgSize={setBgSize}
      />

      <div className="main__settings-buttons-box">
        <button className={`main__button  ${isModified && 'main__run-button'}`} onClick={handleIsClicked}>
          Run
        </button>
        <button className="main__button  main__save-button" onClick={handleSaveClick}>
          Save
        </button>
        <button className="main__button main__circle-button" onClick={handleCirclesApp}>
          {isCirclesApp ? 'triangles' : 'circles'}
        </button>
      </div>
      <div className="main__canvases">
        {!isCirclesApp ? (
          <TrianglesCanvas
            screen={screen}
            bgSize={bgSize}
            isClicked={isClicked}
            canvasRef={canvasRef2}
            strokeColor={strokeColor}
            fillColor={fillColor}
            setFillColor={setFillColor}
            bgColors={bgColors}
            trianglesSize={trianglesSize}
          />
        ) : (
          <Circles
            screen={screen}
            isClicked={isClicked}
            size={size}
            strokeColor={strokeColor}
            fillColor={fillColor}
            bgColors={bgColors}
            strokeWidth={strokeWidth}
            canvasRef={canvasRef1}
          />
        )}
      </div>
    </section>
  ) : screen < 1440 && screen > 800 ? (
    ''
  ) : screen <= 800 ? (
    <section className="main main-tablet">
      <div className="main__settings">
        <div className="main__settings-first-box">
          <div className="main__settings-background">
            <Typography variant="subtitle1">Background Color:</Typography>
            <div className="main__settings-buttons">
              {' '}
              <Button onClick={() => setIsbackgroundColorPickerOpen(!isbackgroundColorPickerOpen)}>
                {isbackgroundColorPickerOpen ? `Close` : `Open`} background palette
              </Button>
              <Button onClick={() => setBgColors([])}>
                {bgColors.length >= 1 &&
                  `reset colors        
               `}
              </Button>
              <Typography variant="subtitle1">
                selected colors {bgColors.length}
                (up to 4)
              </Typography>
            </div>

            <BackgroundColorPickerComponent colors={bgColors} setColors={setBgColors} isVisible={isbackgroundColorPickerOpen} />
          </div>
          <div className="main__settings-triangles">
            <Typography variant="subtitle1">{!isCirclesApp ? 'Triangles ' : 'Circles '}colors:</Typography>
            <Button onClick={() => setIsTrianglesColorPickerOpen(!isTrianglesColorPickerOpen)}>
              {isTrianglesColorPickerOpen ? `Close ${isCirclesApp ? 'triangle' : 'circle'} palette` : 'Open triangle palette'}
            </Button>
            <TriangleColorPickerComponent
              className="right-menu__triangles-color-picker"
              fillColor={fillColor}
              setFillColor={setFillColor}
              strokeColor={strokeColor}
              setStrokeColor={setStrokeColor}
              isVisible={isTrianglesColorPickerOpen}
            />
            <Typography variant="subtitle1">{isCirclesApp ? 'Triangle' : 'Circle'} size:</Typography>
            {!isCirclesApp ? (
              <Slider
                className="right-menu__triangle-size-slider"
                aria-label="Restricted values"
                valueLabelDisplay="auto"
                step={null}
                sx={{
                  width: '300px',
                  '& .MuiSlider-rail': {
                    height: 8, // Adjust the height of the rail
                    borderRadius: 4, // Adjust the border radius of the rail
                  },
                  '& .MuiSlider-track': {
                    height: 8, // Adjust the height of the track
                    borderRadius: 4, // Adjust the border radius of the track
                  },
                }}
                marks={marks.map((mark) => ({
                  ...mark,
                  label: mark.value === trianglesSize && '',
                }))}
                min={0}
                max={bgSize}
                onChange={(event, newSize) => setTrianglesSize(newSize * 2)}
              />
            ) : (
              <Slider
                sx={{
                  width: '300px',
                  '& .MuiSlider-rail': {
                    height: 8, // Adjust the height of the rail
                    borderRadius: 4, // Adjust the border radius of the rail
                  },
                  '& .MuiSlider-track': {
                    height: 8, // Adjust the height of the track
                    borderRadius: 4, // Adjust the border radius of the track
                  },
                }}
                className="right-menu__triangle-size-slider"
                getAriaLabel={() => 'Temperature range'}
                valueLabelDisplay="auto"
                value={strokeWidth}
                onChange={(event, newStrokeWidth) => setStrokeWidth(newStrokeWidth)}
                marks={marks}
                min={1}
                max={10}
                step={1}
                disableSwap
              />
            )}
          </div>{' '}
        </div>
        <div className="main__settings-buttons-box">
          <button className="main__button main__run-button" onClick={handleIsClicked}>
            Run
          </button>
          <button className=" main__button main__save-button" onClick={handleSaveClick}>
            Save
          </button>
          <button className="main__button main__circle-button" onClick={handleCirclesApp}>
            circles
          </button>
        </div>
      </div>
      <div className="main__content-tablet">
        {!isCirclesApp ? (
          <TrianglesCanvas
            screen={screen}
            bgSize={bgSize}
            isClicked={isClicked}
            canvasRef={canvasRef2}
            strokeColor={strokeColor}
            fillColor={fillColor}
            setFillColor={setFillColor}
            bgColors={bgColors}
            trianglesSize={trianglesSize}
          />
        ) : (
          <Circles
            screen={screen}
            bgSize={bgSize}
            isClicked={isClicked}
            size={size}
            strokeColor={strokeColor}
            fillColor={fillColor}
            bgColors={bgColors}
            strokeWidth={strokeWidth}
            canvasRef={canvasRef1}
          />
        )}
      </div>
    </section>
  ) : (
    ''
  );
};

export default Main;
