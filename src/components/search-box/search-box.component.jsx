import React from 'react';

import './search-box.styles.css';

export default function SearchBox({ placeholder, handleChanges }) {
    return (
        <div className="search">
            <input type="search" 
            placeholder={placeholder} 
            onChange={handleChanges}/>
        </div>
    )
}
