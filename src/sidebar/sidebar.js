import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import logo from '../assets/logo.jpg';
import ProdutosIcon from '../assets/tag-solid.svg';
import FornecedoresIcon from '../assets/boxes-packing-solid.svg';
import ClientesIcon from '../assets/people-group-solid.svg';
import Produtos from '../Produtos/Produtos';

const Sidebar = () => {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleExpand = (menuId) => {
    setExpandedMenu(menuId === expandedMenu ? null : menuId);
  };

  const getMenuArrow = (menuId) => {
    return expandedMenu === menuId ? '˅' : '˃';
  };

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo Spark Peças e Acessórios" className="logo" />
      </div>

      <button className="expand-btn" onClick={() => toggleExpand('menu1')}>
        Cadastros <span className="arrow">{getMenuArrow('menu1')}</span>
      </button>
      <ul className={expandedMenu === 'menu1' ? 'expandable-menu show' : 'expandable-menu'}>
        <li>
          <img src={ProdutosIcon} alt="Produtos" className="menu-icon" />
          <Link to="/produtos" className="menu-link">Produtos</Link> 
        </li>
        <li>
          <img src={FornecedoresIcon} alt="Fornecedores" className="menu-icon" />
          <Link to="/fornecedores" className="menu-link">Fornecedores</Link>
        </li>
        <li>
          <img src={ClientesIcon} alt="Clientes" className="menu-icon" />
          <Link to="/clientes" className="menu-link">Clientes</Link> 
        </li>
      </ul>

      <button className="expand-btn" onClick={() => toggleExpand('menu2')}>
        Menu 2 <span className="arrow">{getMenuArrow('menu2')}</span>
      </button>
      <ul className={expandedMenu === 'menu2' ? 'expandable-menu show' : 'expandable-menu'}>
        <li><Link to="/opcao-a" className="menu-link">Opção A</Link></li> 
        <li><Link to="/opcao-b" className="menu-link">Opção B</Link></li> 
        <li><Link to="/opcao-c" className="menu-link">Opção C</Link></li> 
      </ul>
    </div>
  );
};

export default Sidebar;
