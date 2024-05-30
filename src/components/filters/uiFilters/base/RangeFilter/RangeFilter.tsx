import React, { useEffect, useState } from "react";
import { Button, Menu, Slider } from "@mui/material";

export type Range = {
  min: number;
  max: number;
};

type RangeProps = {
  label: string;
  range: Range;
  selected?: Range;
  onApply: (selected?: Range) => void;
  onSelectedChange?: any;
};

export const RangeFilter = ({
  label,
  range,
  selected = range,
  onApply,
  onSelectedChange,
}: RangeProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [tempValue, setTempValue] = useState<Range>({
    min: range.min,
    max: range.max,
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTempValue(selected);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setTempValue({ min: range.min, max: range.max });
    setAnchorEl(null);
  };

  const handleApply = () => {
    onApply(
      tempValue.min !== range.min || tempValue.max !== range.max
        ? tempValue
        : undefined,
    );
    setAnchorEl(null);
  };

  useEffect(() => {
    if (selected.min !== range.min || selected.max !== range.max) {
      onSelectedChange(selected)
    }
  }, [selected]);

  const handleChange = (_: Event, newValue: number | number[]) => {
    const val = newValue as number[];
    setTempValue({ min: val[0], max: val[1] });
  };

  return (
    <>
      <Button
        onClick={handleClick}
        variant="outlined"
        style={{
          backgroundColor:
            selected.min !== range.min || selected.max !== range.max
              ? "lightskyblue"
              : "white",
        }}
      >
        {selected.min === range.min && selected.max === range.max
          ? label
          : `${label}: ${selected.min} - ${selected.max}`}
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
