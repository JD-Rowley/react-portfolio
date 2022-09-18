import React, { useState } from 'react';
import './index.css';

function SearchBar() {
    const API_URL = "https://api.github.com/users/jd-rowley/repos?per_page=100&sort=created_at";

    const [languageData, setLanguageData] = useState(() => {
        fetch(API_URL)
            .then((res) => {
                if(res.ok) {
                    res.json().then((data) => {
                        if(data) {
                            const filterLanguages = data.filter((language, index, self) => 
                                index === self.findIndex((obj) => (obj.language === language.language))
                            );
                            const languages = filterLanguages.map(l => {
                                return(
                                    <option key={l.id} value={l.language}>{l.language}</option>
                                )
                            });
                            setLanguageData(languages);
                        }
                    });
                }
            })
    })

    return(
        <div className='drop-down'>
            <select name='languages' id='languages' placeholder='Choose a language'>
                {languageData}
            </select>
        </div>
    )
}

export default SearchBar;