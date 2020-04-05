import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function Template(props) {
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);
    
  return (
    <div className="container">
        <header>
            <div className="menu">
                <Link className="link-logout" to="/">Home</Link>
                <div className="dropdown">
                    <span>Cadastro</span>
                    <div className="dropdown-content">
                        <Link to="/pessoas">Pessoas</Link>
                        <Link>Grupo de Unidades</Link>
                        <Link>Unidades</Link>
                        <Link>Modelos de Contratos</Link>
                        <Link>Contratos</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <span>Mensagens</span>
                    <div className="dropdown-content">

                    </div>
                </div>
                <div className="dropdown">
                    <span>Movimentações</span>
                    <div className="dropdown-content">

                    </div>
                </div>
                <div className="dropdown">
                    <span>Ajuda</span>
                    <div className="dropdown-content">

                    </div>
                </div>
            </div>  
            <div className="logout">
                <Link className="link-logout">Sair</Link>
            </div>
        </header>
        <body>
            {props.children}
        </body>
    </div>
  );
}
