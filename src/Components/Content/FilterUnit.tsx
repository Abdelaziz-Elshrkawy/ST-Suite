import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { FilterUnitProps } from '../../Types/types';
import { MenuItem, Select, SelectChangeEvent, makeStyles } from '@mui/material';
import { useState } from 'react';
export default function FilterUnit({
    title,
    info,
    placeHolder,
}: FilterUnitProps) {
    const [selection, setSelection] = useState('');
    const Icon = () => (
        <CheckCircleOutlineIcon
            style={{
                marginRight: '5px',
                fontSize: '0.9em',
                position: 'relative',
                top: '2px',
            }}
        />
    );
    return (
        <div className="filter-unit" id={title.toLowerCase()}>
            <label htmlFor={title.toLowerCase()}>{title}</label>
            <Select
                id="select"
                labelId="demo-multiple-name-label"
                style={{
                    border: '1px solid #aaa',
                    borderRadius: '10px',
                    width: '100%',
                    backgroundColor: '#212121',
                    marginTop: '5px',
                    textAlign: 'left',
                    color: '#9b9b9b',
                    padding: 0,
                }}
                inputProps={{
                    MenuProps: {
                        MenuListProps: {
                            sx: {
                                backgroundColor: '#212121',
                            },
                        },
                    },
                }}
                onChange={(e: SelectChangeEvent) => {
                    setSelection(e.target.value);
                }}
                placeholder={selection}
            >
                <MenuItem value="option 1" style={{ color: '#aaa' }}>
                    <Icon />
                    option 1
                </MenuItem>
                <MenuItem value="option 2" style={{ color: '#aaa' }}>
                    <Icon />
                    option 2
                </MenuItem>
            </Select>
            <p className="info">{info}</p>
        </div>
    );
}
