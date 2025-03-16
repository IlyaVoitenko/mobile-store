import { useState } from "react";
import "../../styles/components/_priceRange.scss";
const PriceRange = () => {
  const initialMinPrice = 0;
  const initialMaxPrice = 1100;

  const [sliderMinValue] = useState(initialMinPrice);
  const [sliderMaxValue] = useState(initialMaxPrice);

  const [minVal, setMinVal] = useState(initialMinPrice);
  const [maxVal, setMaxVal] = useState(initialMaxPrice);
  const [minInput, setMinInput] = useState(initialMinPrice);
  const [maxInput, setMaxInput] = useState(initialMaxPrice);

  const minGap = 5;

  const slideMin = (e: { target: { value: string } }) => {
    const value = parseInt(e.target.value, 10);
    if (value >= sliderMinValue && maxVal - value >= minGap) {
      setMinVal(value);
      setMinInput(value);
    }
  };

  const slideMax = (e: { target: { value: string } }) => {
    const { value } = e.target;
    const newValue = parseInt(value, 10);

    if (newValue <= sliderMaxValue && newValue - minVal >= minGap) {
      setMaxVal(newValue);
      setMaxInput(newValue);
    }
  };

  const handleMinInput = (e: { target: { value: string } }) => {
    const value = e.target.value
      ? sliderMinValue
      : parseInt(e.target.value, 10);
    if (value >= sliderMinValue && value < maxVal - minGap) {
      setMinInput(value);
      setMinVal(value);
    }
  };

  const handleMaxInput = (e: { target: { value: string } }) => {
    const { value } = e.target;
    const newValue = value ? sliderMaxValue : parseInt(value, 10);

    if (newValue <= sliderMaxValue && newValue > minVal + minGap) {
      setMaxInput(newValue);
      setMaxVal(newValue);
    }
  };

  return (
    <div className="double-slider-box">
      <div className="input-box">
        <div className="min-box">
          <input
            type="text"
            value={minInput + "$"}
            onChange={handleMinInput}
            className="min-input"
            min={sliderMinValue}
            max={maxVal - minGap}
          />
        </div>
        <span>to</span>
        <div className="max-box">
          <input
            type="text"
            value={maxInput + "$"}
            onChange={handleMaxInput}
            className="max-input"
            min={minVal + minGap}
            max={sliderMaxValue}
          />
        </div>
      </div>
      <div className="range-slider">
        <div className="slider-track"></div>
        <input
          type="range"
          min={sliderMinValue}
          max={sliderMaxValue}
          value={minVal}
          onChange={slideMin}
          className="min-val"
          placeholder="min"
        />
        <input
          type="range"
          min={sliderMinValue}
          max={sliderMaxValue}
          value={maxVal}
          onChange={slideMax}
          className="max-val"
          placeholder="Max"
        />
      </div>
    </div>
  );
};

export default PriceRange;
