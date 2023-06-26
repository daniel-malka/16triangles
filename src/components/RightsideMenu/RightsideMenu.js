import React, { useState } from 'react';
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
  bgColors,
  setBgColors,
  bgSize,
  setBgSize,
  trianglesSize,
  setTrianglesSize,
  triangleColors,
  setTriangleColors,
  triangleStrokeColor,
  setTriangleStrokeColor,
}) {
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);
  const [isbackgroundColorPickerOpen, setIsbackgroundColorPickerOpen] = useState(false);
  const [isTrianglesColorPickerOpen, setIsTrianglesColorPickerOpen] = useState(false);
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
            {isbackgroundColorPickerOpen ? `Close background palette` : `open background palette`}
          </Button>
          <BackgroundColorPickerComponent colors={bgColors} setColors={setBgColors} isVisible={isbackgroundColorPickerOpen} />
          <Typography variant="subtitle1">Canvas size:</Typography>
          <Slider
            className="right-menu__canvas-size"
            aria-label="Temperature"
            defaultValue={bgSize}
            valueLabelDisplay="auto"
            marks
            step={trianglesSize}
            min={100}
            max={850}
            onChange={(newSize) => setBgSize(newSize.target.value)}
          />
          <Typography variant="subtitle1">Triangles colors:</Typography>
          <Button onClick={() => setIsTrianglesColorPickerOpen(!isTrianglesColorPickerOpen)}>
            {isTrianglesColorPickerOpen ? `Close triangle palette` : `open triangle palette`}
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
            aria-label="Temperature"
            defaultValue={trianglesSize}
            valueLabelDisplay="auto"
            step={5}
            marks
            min={5}
            max={400}
            onChange={(newSize) => setTrianglesSize(newSize.target.value)}
          />
          <Typography variant="h5" className="right-menu__advanced-title">
            Advanced Triangles Settings
          </Typography>
          <FormControl>
            <FormLabel className="right-menu__triangles-congestion">triangles congestion:</FormLabel>
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
          <Typography variant="subtitle1">sequence:</Typography>
        </div>
      </div>
    </>
  );
}

export default RightsideMenu;
