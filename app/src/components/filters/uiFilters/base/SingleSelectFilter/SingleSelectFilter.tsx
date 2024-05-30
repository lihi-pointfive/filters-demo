import React, { useEffect, useState } from "react";
import { Button, Menu, MenuItem, TextField } from "@mui/material";
import { Option } from "../../../types.ts";

type SingleSelectProps = {
  label: string;
  options: Option[];
  selected?: Option;
  onApply: (selected?: Option) => void;
  onSelectedChange: (selected?: Option) => void;
};

export const SingleSelectFilter = ({
  label,
  options,
  selected,
  onApply,
  onSelectedChange,
}: SingleSelectProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchText, setSearchText] = useState("");
  const [tempSelectedItem, setTempSelectedItem] = useState<
    Option | undefined
  >();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTempSelectedItem(selected);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setTempSelectedItem(undefined);
    setAnchorEl(null);
  };

  const handleItemClick = (item: Option) => {
    setTempSelectedItem(item);
  };

  const handleApply = () => {
    onApply(tempSelectedItem);
    setAnchorEl(null);
  };

  useEffect(() => {
    onSelectedChange(selected);
  }, [selected]);

  const filteredItems = options.filter((item) =>
    item.label.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <>
      <Button
        onClick={handleClick}
        variant="outlined"
        style={{
          backgroundColor: selected ? "lightskyblue" : "white",
        }}
      >
        {selected ? selected.label : label}
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <div className="px-4 py-2">
          <TextField
            size="small"
            variant="outlined"
            label="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div>
          {filteredItems.map((item) => (
            <MenuItem
              key={item.value}
              onClick={() => handleItemClick(item)}
              selected={tempSelectedItem === item}
            >
              {item.label}
            </MenuItem>
          ))}
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
