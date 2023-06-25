import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button, Slider, Typography } from '@mui/material';
import './RightsideMenu.css';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import BorderClearRoundedIcon from '@mui/icons-material/BorderClearRounded';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
function RightsideMenu({ handleColorChange, handleColorPickerOpen, selectedColor, setSelectedColor }) {
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);

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
          <div className="right-menu__background-colors color-pallets"></div>
          <Typography variant="subtitle1">Canvas size:</Typography>
          <Slider className="right-menu__canvas-size" />
          <Typography variant="subtitle1">Triangles colors:</Typography>
          <div className="right-menu__triangle-colors color-pallets"></div>
          <Typography variant="subtitle1">Triangle size:</Typography>
          <Slider className="right-menu__triangle-size" />
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
