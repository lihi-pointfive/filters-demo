import React, {useEffect, useState} from 'react';
import { Button, Checkbox, Menu, MenuItem, TextField } from '@mui/material';
import { Option } from '../../../types.ts';

type MultiSelectProps = {
    label: string;
    options: Option[];
    selected?: Option[];
    onApply?: any;
    onSelectedChange?: (selected: Option[]) => void;
}

export const MultiSelectFilter = ({ label, options, onApply, onSelectedChange }: MultiSelectProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedItems, setSelectedItems] = useState<Option[]>([]);
    const [searchText, setSearchText] = useState('');
    const [tempSelectedItems, setTempSelectedItems] = useState<Option[]>([]);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setTempSelectedItems(selectedItems);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setTempSelectedItems([]);
        setAnchorEl(null);
    };

    const handleItemClick = (item: Option) => {
        if (tempSelectedItems.includes(item)) {
            setTempSelectedItems(tempSelectedItems.filter((i) => i !== item));
        } else {
            setTempSelectedItems([...tempSelectedItems, item]);
        }
    };

    const handleApply = () => {
        setSelectedItems(tempSelectedItems);
        onApply();
        setAnchorEl(null);
    };

    useEffect(() => {
        onSelectedChange ? onSelectedChange(selectedItems || []) : null;
    }, [selectedItems])

    const filteredItems = options.filter((item) =>
        item.label.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <>
            <Button onClick={handleClick} variant="outlined">
                {selectedItems.length > 0 ? selectedItems.map(item => item.label).join(', ') : label}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <div className="px-4 py-2">
                    <TextField
                        size="small"
                        variant="outlined"
                        label="Select"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
                {filteredItems.map((item) => (
                    <MenuItem
                        sx={{ padding: '0 8px' }}
                        key={item.value}
                        onClick={() => handleItemClick(item)}
                        selected={tempSelectedItems.includes(item)}
                    >
                        <Checkbox
                            size="small"
                            checked={tempSelectedItems.includes(item)}
                            onChange={() => handleItemClick(item)}
                        />
                        {item.display ? item.display : item.label}
                    </MenuItem>
                ))}
                <div className="px-4 py-2">
                    <Button onClick={handleApply} variant="contained" color="primary">
                        Apply
                    </Button>
                </div>
            </Menu>
        </>
    );
};
