import React, {useState, useEffect} from 'react';
import {
  FiGrid,
  FiCodesandbox,
  FiAlignJustify,
  FiX,
  FiActivity,
} from 'react-icons/fi';
import {AiOutlinePoweroff} from 'react-icons/ai';
import {Link} from 'react-router-dom';

import {logout, user} from '../../services/auth';

import {SideNav, Button, Background, Close} from './styles';

import logo from '../../assets/logo-white.png';

const SideBar = ({page}) => {
  const userLogged = user();

  const [pageName, setPageName] = useState('dashboard');
  const [sidebarActive, setSideBarActive] = useState(false);

  useEffect(() => {
    setPageName(page);
  }, [page]);

  function activeSidebar() {
    setSideBarActive(!sidebarActive);
  }

  function goOut() {
    logout();
    window.history.go(0);
  }

  return (
    <>
      <Button
        teste={sidebarActive ? '' : 'teste'}
        onClick={activeSidebar}
      >
        <FiAlignJustify />
      </Button>
      <SideNav teste={sidebarActive ? 'teste' : ''}>
        <strong>
          <span>
            <FiGrid />
          </span>

          <p>Tô Ligado SSMA</p>
        </strong>

        <div>
          <small>Menu</small>
        </div>

        <Link
          to="/"
          className={pageName === 'dashboard' ? 'active' : ''}
        >
          <span>
            <FiGrid />
          </span>
          <p>Registro</p>
        </Link>

        {!userLogged.responsableFor && (
          <Link
            to="/home-draw"
            className={pageName === 'draw' ? 'active' : ''}
          >
            <span>
              <FiCodesandbox />
            </span>
            <p>Sorteio</p>
          </Link>
        )}
        <Link
          to="/home-graphics"
          className={pageName === 'graphics' ? 'active' : ''}
        >
          <span>
            <FiActivity />
          </span>
          <p>Gráficos</p>
        </Link>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 100,
          }}
        >
          <img src={logo} style={{width: 120}} alt="" />
        </div>

        <button onClick={goOut}>
          <span>
            <AiOutlinePoweroff />
          </span>
          <p>Sair</p>
        </button>
      </SideNav>
      <Background teste={sidebarActive ? 'teste' : ''}>
        <Close onClick={activeSidebar}>
          <FiX />
        </Close>
      </Background>
    </>
  );
};

export default SideBar;
