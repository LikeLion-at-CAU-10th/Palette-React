import React from 'react';

import { 
    DarkModeContainer, 
    ToggleBall, 
    ToggleButton, 
    } from '../styles/darkmode';

const DarkMode = ({ darkMode, setDarkMode}) => {
    const toggleDarkMode = () => {
        //darkMode 현재 상태가  true->false, false->true로 바꿈
        setDarkMode((darkMode)=> !darkMode);
    };
    


return (
    <>
            <DarkModeContainer>
            <ToggleButton>
                <ToggleBall onClick={toggleDarkMode}/>
            </ToggleButton>
            </DarkModeContainer>
    </>
    );
    
    
};

export default DarkMode;
