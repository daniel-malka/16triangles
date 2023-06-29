import React, { useState, useEffect, useRef } from 'react';
import TrianglesCanvas from '../TrianglesCanvas/TrianglesCanvas';
import RightsideMenu from '../RightsideMenu/RightsideMenu';
import { Button, Slider, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import BackgroundColorPickerComponent from '../BackgroundColorPickerComponent/BackgroundColorPickerComponent';
import TriangleColorPickerComponent from '../TriangleColorPickerComponent/TriangleColorPickerComponent';
function Main() {
  const [isClicked, setIsClicked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [bgColors, setBgColors] = useState([]);
  const [triangleColors, setTriangleColors] = useState(['#ffffff']);
  const [triangleStrokeColor, setTriangleStrokeColor] = useState(['#ffffff']);
  const [trianglesSize, setTrianglesSize] = useState(40);
  const [bgSize, setBgSize] = useState(500);
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(true);
  const [isbackgroundColorPickerOpen, setIsbackgroundColorPickerOpen] = useState(false);
  const [isTrianglesColorPickerOpen, setIsTrianglesColorPickerOpen] = useState(false);
  const canvasRef = useRef(null);
  const [screen, setScreen] = useState(window.innerWidth);
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
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.href = canvas.toDataURL(); // Get the canvas data URL
    link.download = 'canvas.png'; // Set the download filename
    link.click(); // Simulate click on the link to trigger download
  };

  return screen > 1440 ? (
    <section className="main">
      <RightsideMenu
        isRightMenuOpen={isRightMenuOpen}
        setIsRightMenuOpen={setIsRightMenuOpen}
        bgColors={bgColors}
        setBgColors={setBgColors}
        triangleStrokeColor={triangleStrokeColor}
        setTriangleStrokeColor={setTriangleStrokeColor}
        triangleColors={triangleColors}
        setTriangleColors={setTriangleColors}
        trianglesSize={trianglesSize}
        setTrianglesSize={setTrianglesSize}
        bgSize={bgSize}
        setBgSize={setBgSize}
      />{' '}
      <div className="main__settings-buttons-box">
        <button className="main__run-button" onClick={() => setIsClicked(!isClicked)}>
          Run
        </button>
        <button className="main__save-button" onClick={handleSaveClick}>
          Save
        </button>
      </div>
      <div className="main__content">
        <TrianglesCanvas
          bgSize={bgSize}
          isClicked={isClicked}
          canvasRef={canvasRef}
          triangleColors={triangleColors}
          setTriangleColors={setTriangleColors}
          bgColors={bgColors}
          trianglesSize={trianglesSize}
        />
      </div>
    </section>
  ) : screen < 1440 ? (
    <section className="main main-tablet">
      <div className="main__settings">
        <div className="main__settings-first-box">
          <div className="main__settings-background">
            <Typography variant="subtitle1">Background Color:</Typography>
            <Button onClick={() => setIsbackgroundColorPickerOpen(!isbackgroundColorPickerOpen)}>
              {isbackgroundColorPickerOpen ? 'Close background palette' : 'Open background palette'}
            </Button>
            {bgColors.length >= 1 && <Button onClick={() => setBgColors([])}>reset colors</Button>}
            <BackgroundColorPickerComponent colors={bgColors} setColors={setBgColors} isVisible={isbackgroundColorPickerOpen} />
          </div>
          <div className="main__settings-triangles">
            <Typography variant="subtitle1">Triangles colors:</Typography>
            <Button onClick={() => setIsTrianglesColorPickerOpen(!isTrianglesColorPickerOpen)}>
              {' '}
              {isTrianglesColorPickerOpen ? 'Close background palette' : 'Open background palette'}
            </Button>
            <TriangleColorPickerComponent
              className="right-menu__triangles-color-picker"
              triangleColors={triangleColors}
              setTriangleColors={setTriangleColors}
              triangleStrokeColor={triangleStrokeColor}
              setTriangleStrokeColor={setTriangleStrokeColor}
              isVisible={isTrianglesColorPickerOpen}
            />
            <Typography variant="subtitle1">Triangle size:</Typography>
            <Slider
              className="right-menu__triangle-size-slider"
              aria-label="Restricted values"
              valueLabelDisplay="auto"
              step={null}
              sx={{
                width: 150,
              }}
              marks={marks.map((mark) => ({
                ...mark,
                label: mark.value === trianglesSize && '',
              }))}
              min={0}
              max={bgSize}
              onChange={(event, newSize) => setTrianglesSize(newSize * 2)}
            />{' '}
          </div>{' '}
        </div>
        <div className="main__settings-buttons-box">
          <button className="main__run-button" onClick={() => setIsClicked(!isClicked)}>
            Run
          </button>
          <button className="main__save-button" onClick={handleSaveClick}>
            Save
          </button>
          {/* <Typography variant="h5" className="right-menu__advanced-title">
            Advanced Triangles Settings
          </Typography>
          <FormControl>
            <FormLabel className="right-menu__triangles-congestion">Triangles congestion:</FormLabel>
            <RadioGroup
              row
              className="right-menu__triangles-radio"
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                className="right-menu__triangles-congestion-item"
                value="1"
                control={<Radio className="right-menu__triangles-congestion-item" />}
              />
              <FormControlLabel
                className="right-menu__triangles-congestion-item"
                value="2"
                control={<Radio className="right-menu__triangles-congestion-item" />}
              />
              <FormControlLabel
                className="right-menu__triangles-congestion-item"
                value="3"
                control={<Radio className="right-menu__triangles-congestion-item" />}
              />
              <FormControlLabel
                className="right-menu__triangles-congestion-item"
                value="4"
                control={<Radio className="right-menu__triangles-congestion-item" />}
              />
              <FormControlLabel
                className="right-menu__triangles-congestion-item"
                value="?"
                control={<Radio className="right-menu__triangles-congestion-item" />}
              />
            </RadioGroup>
          </FormControl>
          <Typography variant="subtitle1">Sequence:</Typography> */}
        </div>
      </div>
      <div className="main__content-tablet">
        <TrianglesCanvas
          screen={screen}
          bgSize={bgSize}
          isClicked={isClicked}
          canvasRef={canvasRef}
          triangleColors={triangleColors}
          setTriangleColors={setTriangleColors}
          bgColors={bgColors}
          trianglesSize={trianglesSize}
        />
      </div>
    </section>
  ) : (
    screen < 500 && <></>
  );
}

export default Main;
