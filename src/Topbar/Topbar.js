import React from 'react';
import classes from './Topbar.module.css'
const Topbar = (props) =>{

    return(

        <header className="App-header">
        <nav className={classes.Topbar}>
        <img src="https://i.dlpng.com/static/png/197684_preview.png" alt="Amazon logo"></img>
        </nav>
        
    </header>
    );
}

export default Topbar;