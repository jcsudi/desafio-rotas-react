import house from '../../assets/house.svg';
import { NavLink } from 'react-router-dom';
import './styles.css';
export default function Header(){

    return(

        <header>
        <div className="container">
            <div className="nav-container">
                <div className="dflex">
                    <NavLink to="/home" className={({isActive}) => isActive ? "nav-menu-item menu-active": "nav-menu-item"}>
                        Início
                    </NavLink>
                    <NavLink to="/products" className={({isActive}) => isActive ? "nav-menu-item menu-active": "nav-menu-item"}>
                        Produtos
                    </NavLink>
                    <NavLink to="/about" className={({isActive}) => isActive ? "nav-menu-item menu-active": "nav-menu-item"}>
                        Sobre nós
                    </NavLink>
                </div>
                <NavLink to="/home">
                    <img src={house} alt="Home" />
                </NavLink>
            </div>

        </div>
    </header>

    );

}