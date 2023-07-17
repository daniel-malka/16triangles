import React, { useState, useEffect } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import BackgroundColorPickerComponent from '../BackgroundColorPickerComponent/BackgroundColorPickerComponent';
import TriangleColorPickerComponent from '../TriangleColorPickerComponent/TriangleColorPickerComponent';
import { Button, Slider, Typography } from '@mui/material';
import './RightsideMenu.css';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import BorderClearRoundedIcon from '@mui/icons-material/BorderClearRounded';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

function RightsideMenu({
  strokeWidth,
  setStrokeWidth,
  bgColors,
  isCirclesApp,
  setBgColors,
  bgSize,
  setBgSize,
  isRightMenuOpen,
  setIsRightMenuOpen,
  isbackgroundColorPickerOpen,
  setIsbackgroundColorPickerOpen,
  isTrianglesColorPickerOpen,
  setIsTrianglesColorPickerOpen,
  trianglesSize,
  setTrianglesSize,
  strokeColor,
  setStrokeColor,
  fillColor,
  setFillColor,
  setTriangleStrokeColor,
}) {
  useEffect(() => {
    if (isbackgroundColorPickerOpen) setIsTrianglesColorPickerOpen(false);
    // if (isTrianglesColorPickerOpen) setIsbackgroundColorPickerOpen(false);
  });
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
  return (
    <>
      <div className={`right-menu__menu ${isRightMenuOpen ? 'open' : 'closed'}`}>
        <Button
          className={`right-menu__toggle ${isRightMenuOpen ? 'open' : 'close'}`}
          onClick={() => setIsRightMenuOpen(!isRightMenuOpen)}
        >
          {!isRightMenuOpen ? (
            <ArrowForwardIosRoundedIcon className="right-menu__icon" />
          ) : (
            <ArrowBackIosRoundedIcon className="right-menu__icon" />
          )}
        </Button>

        <div className="right-menu__elements">
          <Typography variant="h5" className="right-menu__colors-title">
            Colors
          </Typography>
          <Typography variant="subtitle1">Background Color:</Typography>
          <Button onClick={() => setIsbackgroundColorPickerOpen(!isbackgroundColorPickerOpen)}>
            {isbackgroundColorPickerOpen ? 'Close background palette' : 'Open background palette'}
          </Button>
          {bgColors.length >= 1 && <Button onClick={() => setBgColors([])}>reset colors</Button>}
          <BackgroundColorPickerComponent colors={bgColors} setColors={setBgColors} isVisible={isbackgroundColorPickerOpen} />

          {/* <Typography variant="subtitle1">Canvas size:</Typography>
          <Slider
            className="right-menu__canvas-size"
            aria-label="Temperature"
            defaultValue={bgSize}
            valueLabelDisplay="auto"
            step={50}
            sx={{
              width: 300,
            }}
            marks
            min={100}
            max={800}
            onChange={(event, newSize) => setBgSize(newSize)}
          /> */}
          <Typography variant="subtitle1">{!isCirclesApp ? 'Triangles' : 'Circles'} colors:</Typography>
          <Button onClick={() => setIsTrianglesColorPickerOpen(!isTrianglesColorPickerOpen)}>
            {isTrianglesColorPickerOpen ? `Close` : `Open`} {!isCirclesApp ? `triangle` : `Circles`} palette
          </Button>
          <TriangleColorPickerComponent
            className="right-menu__triangles-color-picker"
            fillColor={fillColor}
            strokeColor={strokeColor}
            setStrokeColor={setStrokeColor}
            setTriangleStrokeColor={setTriangleStrokeColor}
            isVisible={isTrianglesColorPickerOpen}
          />
          <Typography variant="subtitle1">{!isCirclesApp ? 'Triangle' : 'Circle'} size:</Typography>
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

          <Typography variant="h5" className="right-menu__advanced-title">
            Advanced {!isCirclesApp ? 'Triangles' : 'Circles'} Settings
          </Typography>
          <FormControl>
            <FormLabel className="right-menu__triangles-congestion">
              {!isCirclesApp ? 'Triangle' : 'Circle'} congestion:
            </FormLabel>
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
              <BorderClearRoundedIcon />
              <FormControlLabel
                className="right-menu__triangles-congestion-item"
                value="2"
                control={<Radio className="right-menu__triangles-congestion-item" />}
              />
              <BorderClearRoundedIcon />
              <FormControlLabel
                className="right-menu__triangles-congestion-item"
                value="3"
                control={<Radio className="right-menu__triangles-congestion-item" />}
              />
              <BorderClearRoundedIcon />
              <FormControlLabel
                className="right-menu__triangles-congestion-item"
                value="4"
                control={<Radio className="right-menu__triangles-congestion-item" />}
              />
              <BorderClearRoundedIcon />
              <FormControlLabel
                className="right-menu__triangles-congestion-item"
                value="?"
                control={<Radio className="right-menu__triangles-congestion-item" />}
              />
              <QuestionMarkIcon />
            </RadioGroup>
          </FormControl>
          <Typography variant="subtitle1">Sequence:</Typography>
        </div>
      </div>
    </>
  );
}

export default RightsideMenu;
