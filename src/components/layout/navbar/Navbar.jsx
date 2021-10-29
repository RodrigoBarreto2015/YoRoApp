import React, { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import { Icon, Modal, Header, Button } from 'semantic-ui-react';
import {
  Link
} from "react-router-dom";

import { GlobalContext } from "../../../data/Store";
import InviteService from "../../services/InviteService";
import Counter from "../../plugins/Counter";

function Navbar() {

  const [style, setStyle] = useState("Navbar-Container");
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const { inviteCode, confirmed, confirmPresence, inviteQuantity, itens } = useContext(GlobalContext);
  const [value, setValue] = useState("");

  const [open, setOpen] = React.useState(false);
  const [modalMsg, setModalMsg] = React.useState("");

  useEffect(() => {
    if (confirmed) {
      setValue("Presença confirmada");
    } else {
      setValue("Confirmar presença");
    }
  }, [confirmed]);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset >= 400 || menuIsVisible) {
        setStyle("Navbar-Container dark");
      } else {
        setStyle("Navbar-Container");
      }
    }
  }, [menuIsVisible]);

  const setInviteConfirmation = (code, data) => {
    InviteService.confirmInvite(code, data)
      .then(response => confirmPresence(response.data.confirmed))
      .catch(e => {
        console.log(e);
      });
  };

  const onClickHandler = (e) => {
    setMenuIsVisible(!menuIsVisible);
    if (menuIsVisible) {
      setStyle("Navbar-Container");
    } else {
      setStyle("Navbar-Container dark");
    }
  }

  const handleClick = () => {
    if (inviteQuantity > 3 && itens.length < 2) {
      setOpen(true);
      setModalMsg("Para convites com mais de 3 pessoas incluídas, são necessários mais de um presente para confirmar a presença!")
    } else {
      setInviteConfirmation(inviteCode, !confirmed);
    }
  }

  const hideMenu = () => {
    setMenuIsVisible(false);
  }

  return (
    <div className={style}>
      <div className={`Menu-Section ${menuIsVisible ? "on" : ""}`}>
        <div className="Menu-toogle" onClick={onClickHandler}>
          <div id="one" className="one"></div>
          <div id="two" className="two"></div>
          <div id="three" className="three"></div>
        </div>

        <nav className="SideBar-Menu">
          <ul>
            <li><Icon color='black' name='home' />
              <Link onClick={hideMenu} to="/">Página Inicial</Link ></li>
            <li><Icon color='black' name='gift' />
              <Link onClick={hideMenu} to="/gift_list">Lista de presentes</Link ></li>
            <li><Icon color='black' name='sign-in' />
              <a onClick={handleClick}>{value}</a></li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li><Link to="/">Página Inicial</Link></li>
            <li><Link to="/gift_list">Lista de presentes</Link></li>
            <li><a onClick={handleClick}>{value}</a></li>
          </ul>
        </nav>
      </div>
      <div className="Counter-Section">
        <Counter />
      </div>

      <Modal
        closeIcon
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Header icon='warning' content='Erro' />
        <Modal.Content>
          <p>
            {modalMsg}
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={() => setOpen(false)}>
            <Icon name='checkmark' /> Escolher outro
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  )
}
export default Navbar;