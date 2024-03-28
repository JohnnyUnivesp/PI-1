import React, { useEffect } from 'react';
import './Produtos.css';
//import logo from './sidebar'

function Produtos() {
  useEffect(() => {
    document.title = "Produtos";
}, []);

  return (
        
        <><h2 className='Titulo'>CADASTRO DE PRODUTOS</h2>
        <div className='produtos'>
      <form>
        <div className="form-group">
          <label htmlFor="CODIGO">Código:</label><br/>
          <input type="number" id="form" name="CODIGO" />
        </div>
        <div className="form-group">
          <label htmlFor="PRODUTO">Produto:</label><br/>
          <input type="text" id="form" name="PRODUTO" />
        </div>
        <div className="form-group">
          <label htmlFor="FORNECEDOR">Fornecedor:</label><br/>
          <input   type="text" id="form" name="FORNECEDOR" />
        </div>
        <div className="form-group">
          <label htmlFor="APLICAÇÃO">Aplicação:</label><br/>
          <input type="text" id="form" name="APLICAÇÃO" />
        </div>
        <div className="form-group">
          <label htmlFor="GARANTIA">Garantia(Meses):</label><br/>
          <input type="number" id="form" name="GARANTIA" />
        </div>
        <div className="form-group">
          <label htmlFor="QUANTIDADE">Quantidade:</label><br/>
          <input type="text" id="form" name="QUANTIDADE" />
        </div>
        <div className="form-group">
          <label htmlFor="VALOR UNITARIO">Valor Unitário:</label><br/>
          <input type="text" id="form" name="VALOR UNITARIO" />
        </div>
        <div className='button'>
          <button type="reset">Limpar</button>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div></>

  );
}

export default Produtos;