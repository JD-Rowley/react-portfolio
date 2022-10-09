import React, { useState } from 'react';
import Select from 'react-select';

function SearchBar(props) {
    const API_URL = "https://api.github.com/users/jd-rowley/repos?per_page=100&sort=created_at";

    // access API and loop through projects to find available languages for the dropdown bar
    const [languageData, setLanguageData] = useState(() => {
        fetch(API_URL)
            .then((res) => {
                if(res.ok) {
                    res.json().then((data) => {
                        if(data) {
                            const filterProjects = data.filter(project => project.description !== null)
                            const filterLanguages = filterProjects.filter((language, index, self) => 
                                index === self.findIndex((obj) => (obj.language === language.language))
                            );
                            const languages = filterLanguages.map(l => {
                                return(
                                    { key: l.id, value: l.language, label: l.language }
                                )
                            });
                            setLanguageData(languages);
                        }
                    });
                }
            });
    });

    function customTheme(theme) {
        return{
            ...theme,
            colors: {
                ...theme.colors,
                primary25: 'var(--primary)',
                primary: 'var(--primary)',
            }
        }
    }

    return(
        <Select 
            theme={customTheme}
            options={languageData}
            className='drop-down'
            placeholder='Select a Language...'
            onChange={props.onChange}
        />
    )
}

export default SearchBar;