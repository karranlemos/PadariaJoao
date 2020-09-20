import React from 'react';

export default () => (
    <header id="header">
        <nav id="nav">
            <div className="container">
                <a href="/" className="home-item nav-item">Padaria do João</a>
                <div className="nav-options">
                    <a href="/" className="nav-item">Início</a>
                    <a href="/produtos" className="nav-item">Produtos</a>
                    <a href="/sobre" className="nav-item">Sobre</a>
                </div>
            </div>
        </nav>
    </header>
);