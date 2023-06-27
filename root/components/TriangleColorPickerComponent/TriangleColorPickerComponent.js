import React from 'react';
import { SketchPicker } from 'react-color';
import './TriangleColorPickerComponent.css';

const TriangleColorPickerComponent = ({ isVisible, triangleColors, setTriangleColors }) => {
  const handleColorChange = (color, index) => {
    const updatedColors = [...triangleColors];
    updatedColors[index] = color.hex;
    setTriangleColors(updatedColors);
  };

  return (
    isVisible && (
      <div>
        {triangleColors.map((color, index) => (
          <div key={index}>
            <SketchPicker color={color} onChange={(newColor) => handleColorChange(newColor, index)} />
          </div>
        ))}
      </div>
    )
  );
};

export default TriangleColorPickerComponent;
