import { useEffect, useState } from "react";
import { IProduct } from "../../types";
import "../../styles/components/_priceRange.scss";
import { useDispatch, useSelector } from "react-redux";
import { setPriceRangeGoods } from "../../store/slices/productsSlice";
import { getPriceRangeSelector } from "../../store/selectors";
import { minAndMaxPriceListGoods } from "../../helper";
interface IPriceRangeProps {
  listProducts: IProduct[];
}
const PriceRange = ({ listProducts }: IPriceRangeProps) => {
  const dispatch = useDispatch();
  const priceRangeSelector = useSelector(getPriceRangeSelector);
  const { minPrice, maxPrice } = priceRangeSelector;
  const { initialMinPrice, initialMaxPrice } =
    minAndMaxPriceListGoods(listProducts) || {};
  const [sliderMinValue] = useState(initialMinPrice);
  const [sliderMaxValue] = useState(initialMaxPrice);

  const [minVal, setMinVal] = useState(minPrice ? minPrice : initialMinPrice);
  const [maxVal, setMaxVal] = useState(maxPrice ? maxPrice : initialMaxPrice);

  const minGap = 5;

  const slideMin = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(target.value, 10);
    if (sliderMinValue === null || sliderMinValue === undefined) return;
    if (maxVal === null || maxVal === undefined) return;

    if (value >= sliderMinValue && maxVal - value >= minGap) setMinVal(value);
  };

  const slideMax = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    const newValue = parseInt(value, 10);
    if (!sliderMaxValue) return;
    if (!minVal) return;
    if (newValue <= sliderMaxValue && newValue - minVal >= minGap)
      setMaxVal(newValue);
  };

  const handleMinInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const value = target.value ? sliderMinValue : parseInt(target.value, 10);
    if (!sliderMinValue) return;
    if (!maxVal) return;
    if (!value) return;

    if (value >= sliderMinValue && value < maxVal - minGap) setMinVal(value);
  };

  const handleMaxInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    const newValue = value ? sliderMaxValue : parseInt(value, 10);
    if (!sliderMaxValue) return;
    if (!minVal) return;
    if (!newValue) return;
    if (newValue <= sliderMaxValue && newValue > minVal + minGap)
      setMaxVal(newValue);
  };
  useEffect(() => {
    dispatch(
      setPriceRangeGoods({
        minPrice: minVal,
        maxPrice: maxVal,
      })
    );
  }, [maxVal, minVal, dispatch]);

  useEffect(() => {
    if (!maxPrice || !minPrice) {
      dispatch(
        setPriceRangeGoods({
          minPrice: initialMinPrice,
          maxPrice: initialMaxPrice,
        })
      );
    } else {
      dispatch(
        setPriceRangeGoods({
          minPrice,
          maxPrice,
        })
      );
    }
  }, []);

  return (
    <div className="double-slider-box">
      <div className="input-box">
        <div className="min-box">
          <input
            type="text"
            value={minPrice + "$"}
            onChange={handleMinInput}
            className="min-input"
            min={sliderMinValue ?? 0}
            max={maxVal ? maxVal - minGap : 0}
            placeholder="min-input"
          />
        </div>
        <span>to</span>
        <div className="max-box">
          <input
            type="text"
            value={maxPrice + "$"}
            onChange={handleMaxInput}
            className="max-input"
            min={minVal ? minVal + minGap : 0}
            max={sliderMaxValue ?? 0}
            placeholder="max-input"
          />
        </div>
      </div>
      <div className="range-slider">
        <div className="slider-track"></div>
        <input
          type="range"
          min={sliderMinValue ?? 0}
          max={sliderMaxValue ?? 0}
          value={minVal ?? 0}
          onChange={slideMin}
          className="min-val"
          placeholder="min"
        />
        <input
          type="range"
          min={sliderMinValue ?? 0}
          max={sliderMaxValue ?? 0}
          value={maxVal ?? 0}
          onChange={slideMax}
          className="max-val"
          placeholder="Max"
        />
      </div>
    </div>
  );
};

export default PriceRange;
