import React from 'react';
import { SketchPicker } from 'react-color';
import './BackgroundColorPickerComponent.css';

const BackgroundColorPickerComponent = ({ isVisible, colors, setColors }) => {
  const handleColorChange = (color, index) => {
    const updatedColors = [...colors];
    updatedColors[index] = color.hex;
    setColors(updatedColors);
  };

  return (
    isVisible && (
      <div>
        {colors.map((color, index) => (
          <div key={index}>
            <SketchPicker color={color} onChange={(newColor) => handleColorChange(newColor, index)} />
          </div>
        ))}
      </div>
    )
  );
};

export default BackgroundColorPickerComponent;
