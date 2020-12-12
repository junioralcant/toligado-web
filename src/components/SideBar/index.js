import React, { useState, useEffect } from "react";
import {
  FiCamera,
  FiGrid,
  FiCodesandbox,
  FiAlignJustify,
  FiX,
} from "react-icons/fi";
import { AiOutlinePoweroff } from "react-icons/ai";
import { BsFillArchiveFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import { logout } from "../../services/auth";

import { SideNav, Button, Background, Close, companyData } from "./styles";

const SideBar = ({ page, history }) => {
  const [pageName, setPageName] = useState("dashboard");
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
      <Button teste={sidebarActive ? "" : "teste"} onClick={activeSidebar}>
        <FiAlignJustify />
      </Button>
      <SideNav teste={sidebarActive ? "teste" : ""}>
        <strong>
          <span>
            <FiGrid />
          </span>

          <p>Tô Ligado SSMA</p>
        </strong>

        <div className="companyData">
          <p>CNPJ: 04.855.934/0001-66</p>
          <p>RAZÃO SOCIAL: CLARO S.A.</p>
          <p>OBRAS: OPRA TAL E OBRA TAL</p>
          <p>N FUNCIONÁRIOs: 350</p>
        </div>

        <div>
          <small>Menu</small>
        </div>

        <Link to="/" className={pageName === "dashboard" ? "active" : ""}>
          <span>
            <FiGrid />
          </span>
          <p>Dashboard</p>
        </Link>

        <Link to="/draw" className={pageName === "draw" ? "active" : ""}>
          <span>
            <FiCodesandbox />
          </span>
          <p>Sorteio</p>
        </Link>

        <button onClick={goOut}>
          <span>
            <AiOutlinePoweroff />
          </span>
          <p>Sair</p>
        </button>
      </SideNav>
      <Background teste={sidebarActive ? "teste" : ""}>
        <Close onClick={activeSidebar}>
          <FiX />
        </Close>
      </Background>
    </>
  );
};

export default SideBar;
