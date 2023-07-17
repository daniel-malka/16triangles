import React from 'react';
import { SketchPicker } from 'react-color';
import './TriangleColorPickerComponent.css';

const TriangleColorPickerComponent = ({ isVisible, strokeColor, setStrokeColor }) => {
  const handleColorChange = (color, index) => {
    const updatedColors = [...strokeColor];
    updatedColors[index] = color.hex;
    setStrokeColor(updatedColors);
  };

  return (
    isVisible &&
    Array.isArray(strokeColor) && (
      <div className="sketchpicker triangle-sketchpicker">
        {strokeColor.map((color, index) => (
          <div key={index}>
            <SketchPicker color={color} onChange={(newColor) => handleColorChange(newColor, index)} />
          </div>
        ))}
      </div>
    )
  );
};

export default TriangleColorPickerComponent;
