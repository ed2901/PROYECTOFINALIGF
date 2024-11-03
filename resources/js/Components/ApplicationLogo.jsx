import React from 'react';
import logo from '/resources/Images/logo.png'; // Asegúrate de que la ruta sea correcta

export default function ApplicationLogo(props) {
    return (
        <img
            {...props}
            src={logo}
            alt="Logo"
            style={{ width: '100', height: '100', marginTop: '0', marginLeft: '1' }} // Ajusta aquí el tamaño y la posición
        />
    );
}
