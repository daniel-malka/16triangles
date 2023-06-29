import { useState } from 'react';
import { SketchPicker } from 'react-color';
import './BackgroundColorPickerComponent.css';

const BackgroundColorPickerComponent = ({ isVisible, colors, setColors }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const handleColorChange = (color) => {
    // Check if the color picker is being dragged
    if (isDragging) {
      return; // Ignore color changes while dragging
    }

    const newColor = color.hex;

    const colorExists = colors.includes(newColor);

    const isColorLimitReached = colors.length >= 4;

    if (!colorExists && !isColorLimitReached) {
      setColors([...colors, newColor]);
    }
  };
  return (
    isVisible && (
      <div>
        <SketchPicker
          color={colors[colors.length - 1]}
          onChange={handleColorChange}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />
      </div>
    )
  );
};

export default BackgroundColorPickerComponent;
