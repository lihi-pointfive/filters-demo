import React, { useState } from "react";
import { Button, Menu, Slider } from "@mui/material";

export type Range = {
  min: number;
  max: number;
};

type RangeProps = {
  label: string;
  range: Range;
  selected?: Range;
  onApply: (selected: Range) => void;
  onSelectedChange?: any;
  onFilterClear: () => void;
};

export const RangeFilter = ({
  label,
  range,
  onApply,
  onSelectedChange,
  onFilterClear,
}: RangeProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [value, setValue] = useState<Range>({ min: range.min, max: range.max });
  const [tempValue, setTempValue] = useState<Range>({
    min: range.min,
    max: range.max,
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTempValue(value);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setTempValue({ min: range.min, max: range.max });
    setAnchorEl(null);
  };

  const handleApply = () => {
    setTempValue(tempValue);
    if (!tempValue) {
      onFilterClear();
    } else {
      onApply(tempValue);
      onSelectedChange(tempValue);
    }
    setValue(tempValue);
    setAnchorEl(null);
  };

  const handleChange = (_: Event, newValue: number | number[]) => {
    const val = newValue as number[];
    setTempValue({ min: val[0], max: val[1] });
  };

  return (
    <>
      <Button onClick={handleClick} variant="outlined">
        {value.min === range.min && value.max === range.max
          ? label
          : `${label}: ${value.min} - ${value.max}`}
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <div>
          <Slider
            value={[tempValue.min, tempValue.max]}
            onChange={handleChange}
            valueLabelDisplay="on"
            min={range.min}
            max={range.max}
            aria-labelledby="range-slider"
            sx={{ width: "200px", mx: 3, mb: 2, mt: 5 }}
          />
        </div>
        <div className="px-4 py-2">
          <Button onClick={handleApply} variant="contained" color="primary">
            Apply
          </Button>
        </div>
      </Menu>
    </>
  );
};
