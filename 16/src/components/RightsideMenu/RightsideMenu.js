import React, { useState } from 'react';
import { Button, Typography, TextField, Popover } from '@mui/material';

import './RightsideMenu.css';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

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
          <Typography variant="subtitle1">Background Color</Typography>
          <div></div>

          <Typography variant="h5" className="right-menu__advanced-title">
            Advanced Triangles Settings
          </Typography>
          <ul>
            <li>Congestion</li>
            <li>Sequence</li>
            <li>Add Photo</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default RightsideMenu;
