import React from 'react';
import './CSS/App.css';
import Header from './Components/Header/Header';
import { Nav } from './Components/Nav/Nav';
import Content from './Components/Content/Content';

function App() {
    return (
        <div className="App">
            <Header />
            <Nav/>
            <Content/>
        </div>
    );
}

export default App;
