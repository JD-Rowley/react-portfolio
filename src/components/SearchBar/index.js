import React, { useState } from 'react';
import './index.css';

function SearchBar(props) {
    const [languages, setLanguages] = useState("");

    function getLanguages() {

    }

    return(
        <div className='drop-down'>
            <select name='languages' id='languages' placeholder='Choose a language'>
                <option value='JavaScript'>JavaScript</option>
                <option value='TypeScript'>TypeScript</option>
                <option value='C#'>C#</option>
            </select>
        </div>
    )
}

export default SearchBar;