import React, { useState } from 'react';
import { ColorPicker } from '@mui/material';

const ColorPickerComponent = ({ onSelectColor }) => {
  const [selectedColor, setSelectedColor] = useState('#000000');

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  const handleColorSelect = () => {
    // Pass the selected color to the parent component
    onSelectColor(selectedColor);
  };

  return (
    <div>
      <ColorPicker color={selectedColor} onChange={handleColorChange} />
      <button onClick={handleColorSelect}>Select Color</button>
    </div>
  );
};

export default ColorPickerComponent;
