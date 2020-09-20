import React from 'react';

import './Header.scss';

export default () => (
    <header id="nav-header">
        <nav id="nav">
            <div className="container">
                <a href="/" className="home-item nav-item">Padaria do João</a>
                <div className="nav-items">
                    <a href="/" className="nav-item">Início</a>
                    <a href="/produtos" className="nav-item">Produtos</a>
                    <a href="/sobre" className="nav-item">Sobre</a>
                </div>
            </div>
        </nav>
    </header>
);