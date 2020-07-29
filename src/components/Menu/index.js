import React from 'react';
import Logo from '../../assets/imagem/Logo.jpg';
import Button from '../Button';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} alt="Gustaflix" />
            </a>
            <Button className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;