import React from 'react';

function Navbar(){
    return(
        <div className="navbar">
            <ul className="navbar_items">
                <li><a href="#">Noticias</a></li>
                <li><a href="#">Judiciales</a></li>
                <li><a href="#">Deportes</a></li>
                <li><a href="#">Clasificados</a></li>
                <li><a href="#">Politica</a></li>

                <form className="busqueda">
                    <input type="text" placeholder="Search"/>
                    <a href="#">Buscar</a>
                </form>
            </ul>
        </div>
    )
}

export default Navbar;