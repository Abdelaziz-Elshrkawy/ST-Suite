import FilterUnit from "./FilterUnit";
import Button from '@mui/material/Button'

export default function Filters() {
    return (
        <div id="filters">
            <p id="filter-title">Filters</p>
            <FilterUnit title="Industry" placeHolder="Health care." info="Choose something"/>
            <FilterUnit title="Industry" placeHolder="Health care." info="Choose something"/>
            <FilterUnit title="Industry" placeHolder="Health care." info="Choose something"/>
            <Button variant="contained" id="filter-btn" color="secondary" style={{
                backgroundColor: '#554DB7',
                width: '100%',
                margin: 'auto',
                padding: '10px',
                textTransform: 'none',
                fontSize: '1.2em'
            }}>
            Apply Filters
            </Button>
        </div>
    );
}
