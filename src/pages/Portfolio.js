import React, { useEffect, useRef, useState } from 'react';
import Carousel from '../components/Carousel';
import ProjectCard from '../components/ProjectCard';
import Select from 'react-select';
import { ProgressBar } from 'loading-animations-react';
import { usePromiseTracker, trackPromise } from 'react-promise-tracker';

import autoAnimate from '@formkit/auto-animate';

function Portfolio() {
    const API_URL = "https://api.github.com/users/jd-rowley/repos?per_page=100&sort=created_at";
    const parentRef = useRef(null);
    const { promiseInProgress } = usePromiseTracker();

    useEffect(() => {
        if(parentRef.current) {
            autoAnimate(parentRef.current);
        }
    }, [parentRef])

    // access github API and find all projects with a description and apply props to the ProjectCard component
    const [ repoData, setRepoData ] = useState(() => {
        trackPromise(
        fetch(API_URL)
            .then((res) => {
                if(res.ok) {
                    res.json().then((data) => {
                        if(data) {
                            const filterProjects = data.filter(project => project.description !== null)
                            const projects = filterProjects.map(project => {
                                return <ProjectCard 
                                    key = {project.id}
                                    deploy = {project.homepage}
                                    title = {project.name.replaceAll('-', ' ').toUpperCase()}
                                    github = {project.html_url}
                                    githubtitle = {project.name}
                                    description = {project.description}
                                    language = {project.language}
                                    tools = {project.topics.toString().split(',').join(', ')}             
                                />
                            });
                            setRepoData(projects);
                        } else {
                            return "No repos found..."
                        }
                    });
                } else {
                    return "Something went wrong...";
                }
            }))
        .catch(err => {
            alert("Unable to connect to GitHub...");
        })
    });

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

    function filterByLanguage(event) {
        trackPromise(
        fetch(API_URL)
            .then(res => {
                if(res.ok) {
                    res.json().then((data) => {
                        if(data) {
                            const filterProjects = data.filter(project => (project.description !== null && project.language === event.value))
                            const projects = filterProjects.map(project => {
                                return <ProjectCard 
                                    key = {project.id}
                                    deploy = {project.homepage}
                                    title = {project.name.split('-').join(' ').toUpperCase()}
                                    github = {project.html_url}
                                    githubtitle = {project.name}
                                    description = {project.description}
                                    language = {project.language}
                                    tools = {project.topics.toString().split(',').join(', ')}             
                                />
                            });
                            setRepoData(projects);
                        } else {
                            return "No repos found..."
                        }
                    });
                } else {
                    return "Something went wrong...";
                }
            })
        )
    }

    function recallAllProjects() {
        trackPromise(
        fetch(API_URL)
            .then((res) => {
                if(res.ok) {
                    res.json().then((data) => {
                        if(data) {
                            const filterProjects = data.filter(project => project.description !== null)
                            const projects = filterProjects.map(project => {
                                return <ProjectCard 
                                    key = {project.id}
                                    deploy = {project.homepage}
                                    title = {project.name.split('-').join(' ').toUpperCase()}
                                    github = {project.html_url}
                                    githubtitle = {project.name}
                                    description = {project.description}
                                    language = {project.language}
                                    tools = {project.topics.toString().split(',').join(', ')}             
                                />
                            });
                            setRepoData(projects);
                        } else {
                            return "No repos found..."
                        }
                    });
                } else {
                    return "Something went wrong...";
                }
            }))
            .catch(err => {
                alert("Unable to connect to GitHub...");
            }
        );    
    }

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
        <section className="container">
            <Carousel />
            <div className="other-projects">
                <h2>Projects:</h2>
                <div className='search-container'>
                    <Select 
                        theme={customTheme}
                        options={languageData}
                        className='drop-down'
                        placeholder='Select a Language...'
                        onChange={filterByLanguage}
                    />
                    <button
                        type='click'
                        className={'card-header-btn card-btn'}  
                        onClick={recallAllProjects}
                    >
                        Show All
                    </button>
                </div>
            </div>
            <div>
                    {promiseInProgress && 
                    <div className='loading'>
                        <ProgressBar borderColor='none' />
                    </div>
                    }
                <div className="projects-container" ref={parentRef}>
                    {repoData}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;