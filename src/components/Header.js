import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1 className="center"> Gerenciamento de Livros</h1>
      <hr />
      <div className="links">
        <NavLink to="/list" className="link" activeClassName="active" exact>
          Lista de Livros
        </NavLink>
        <br></br><br></br>
        <NavLink to="/add" className="link" activeClassName="active">
          Adicionar Livro
        </NavLink>
      </div>
    </header>
  );
};

export default Header;