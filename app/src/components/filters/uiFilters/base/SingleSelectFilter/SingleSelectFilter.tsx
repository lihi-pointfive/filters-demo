import React, { useState } from "react";
import { Button, Menu, MenuItem, TextField } from "@mui/material";
import { Option } from "../../../types.ts";

type SingleSelectProps = {
  label: string;
  options: Option[];
  selected?: Option | null;
  onSelectedChange: (selected: Option | null) => void;
  onFilterClear: () => void;
};

export const SingleSelectFilter = ({
  label,
  options,
  selected,
  onSelectedChange,
  onFilterClear,
}: SingleSelectProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedItem, setSelectedItem] = useState<Option | null>(
    selected || null,
  );
  const [searchText, setSearchText] = useState("");
  const [tempSelectedItem, setTempSelectedItem] = useState<Option | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTempSelectedItem(selectedItem);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setTempSelectedItem(null);
    setAnchorEl(null);
  };

  const handleItemClick = (item: Option) => {
    setTempSelectedItem(item);
  };

  const handleApply = () => {
    setTempSelectedItem(tempSelectedItem);
    if (!tempSelectedItem) {
      onFilterClear();
    } else {
      // Replace with onApply
      onSelectedChange(selectedItem);
    }
    setSelectedItem(tempSelectedItem);
    setAnchorEl(null);
  };

  const filteredItems = options.filter((item) =>
    item.label.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <>
      <Button onClick={handleClick} variant="outlined">
        {selectedItem ? selectedItem.label : label}
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
