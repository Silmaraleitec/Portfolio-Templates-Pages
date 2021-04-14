import React from 'react';
import {HeaderArea} from './styled';
import { Link } from 'react-router-dom';
import imageLogo from './olx-logo-2-1.png';

import {isLogged, doLogout} from '../../../helpers/AuthHanler';



const Header = () => {
    let logged = isLogged();

    const handleLogout = () => {
        doLogout();
        window.location.href = '/';

    }
    return (
        <HeaderArea>
            <div className="container">
                <div className="logo">
                <img src={imageLogo} alt="imageLogo" width="52" height="28" />
                </div>
                <nav>
                    <ul>
                        {logged &&
                        <>
                        <li>
                            <Link to="" className="buttonBusca">Buscar</Link>
                        </li>
                            
                        <li>
                            <Link to="">Meus Anúncios</Link>
                        </li>
                        <li>
                            <Link to="">Chat</Link>
                        </li>
                        
                        <li>
                            <Link to="">Plano Profissional</Link>
                        </li>
                        <li>
                            <Link to="/my-account">Minha Conta</Link>
                        </li>
                        <li>
                            <button onClick={handleLogout}>Sair</button>
                        </li>
                        <li>
                            <Link to="/post-an-ad" className="button">Anunciar</Link>
                        </li>
                        
                        </>}
                        {!logged &&
                        <>
                         <li>
                            <Link to="" className="buttonBusca">Buscar</Link>
                        </li>
                        <li>
                            <Link to="">Plano Profissional</Link>
                        </li>
                       
                        <li>
                            <Link to="/signin">Entrar</Link>
                        </li>
                        <li>
                            <Link to="/signup">Cadastrar</Link>
                        </li>
                        <li>
                            <Link to="signin" className="button">Anunciar</Link>
                        </li>
                        
                        </>}
                    
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
}
export default Header;