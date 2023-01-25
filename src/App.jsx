import React from 'react';
import Kekambas from './components/Kekambas';
import Nav from './components/Nav';
import ToDo from './components/ToDo';

export default function App() {
    return (
        <>
            <Nav />
            <div className="container">
                <ToDo />
                <Kekambas />
            </div>
        </>
    )
}
