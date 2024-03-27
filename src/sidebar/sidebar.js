import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import logo from '../assets/logo.jpg';
import ProdutosIcon from '../assets/tag-solid.svg';
import FornecedoresIcon from '../assets/boxes-packing-solid.svg';
import ClientesIcon from '../assets/people-group-solid.svg';

const Sidebar = ({setPageTitle}) => {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleExpand = (menuId) => {
    setExpandedMenu(menuId === expandedMenu ? null : menuId);
  };

  const getMenuArrow = (menuId) => {
    return expandedMenu === menuId ? '˅' : '˃';
  };

  const handleLinkClick = (pageTitle) => {
    setPageTitle(pageTitle); // Atualiza o título da página quando um link é clicado
  };

  return (
    <div className="sidebar">
      <div className="logo-container">
        <Link to="" onClick={() => handleLinkClick("Início")}><img src={logo} alt="Logo Spark Peças e Acessórios" className="logo" /></Link>
      </div>

      <button className="expand-btn" onClick={() => toggleExpand('menu1')}>
        Cadastros <span className="arrow">{getMenuArrow('menu1')}</span>
      </button>
      <ul className={expandedMenu === 'menu1' ? 'expandable-menu show' : 'expandable-menu'}>
        <li>
          <img src={ProdutosIcon} alt="Produtos" className="menu-icon" />
          <Link to="/produtos" className="menu-link"onClick={() => handleLinkClick("Início > Cadastros > Produtos")}>Produtos</Link> 
        </li>
        <li>
          <img src={FornecedoresIcon} alt="Fornecedores" className="menu-icon" />
          <Link to="" className="menu-link" onClick={() => handleLinkClick("Início")}>Fornecedores</Link>
        </li>
        <li>
          <img src={ClientesIcon} alt="Clientes" className="menu-icon" />
          <Link to="" className="menu-link" onClick={() => handleLinkClick("Início")}>Clientes</Link> 
        </li>
      </ul>

      <button className="expand-btn" onClick={() => toggleExpand('menu2')}>
        Consultas <span className="arrow">{getMenuArrow('menu2')}</span>
      </button>
      <ul className={expandedMenu === 'menu2' ? 'expandable-menu show' : 'expandable-menu'}>
      <li>
          <img src={ProdutosIcon} alt="Produtos" className="menu-icon" />
          <Link to="/consultar-produtos" className="menu-link" onClick={() => handleLinkClick("Início > Consultas > Produtos")}>Produtos</Link> 
        </li>
        <li>
          <img src={FornecedoresIcon} alt="Fornecedores" className="menu-icon" />
          <Link to="" className="menu-link" onClick={() => handleLinkClick("Início")}>Fornecedores</Link>
        </li>
        <li>
          <img src={ClientesIcon} alt="Clientes" className="menu-icon" />
          <Link to="" className="menu-link" onClick={() => handleLinkClick("Início")}>Clientes</Link> 
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
