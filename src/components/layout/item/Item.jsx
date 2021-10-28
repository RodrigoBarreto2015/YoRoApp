import React, { useState, useContext } from "react";
import "./Item.css";
import 'semantic-ui-css/semantic.min.css';

import ItemService from "../../services/ItensService";
import { GlobalContext } from "../../../data/Store";

import { Card, Icon, Button, Label, Modal, Header } from 'semantic-ui-react';

function Item(props) {
    const [isActive, setIsActive] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [modalMsg, setModalMsg] = React.useState("");

    const links = props.links;

    const { inviteCode, itens, chooseItemList } = useContext(GlobalContext);

    let userItensId = [];
    let idsDisabled = props.idsDisabled;
    let disabled = null;

    let value = "";
    let color = "green";
    let buttonIcon = "right arrow";

    for (let i = 0; i < itens.length; i++) {
        userItensId.push(itens[i].productId);
    }

    if (userItensId.some(productId => productId === props.id)) {
        value = "Escolhi esse";
        color = "red";
        buttonIcon = "times";
    } else if (idsDisabled.some(id => id === props.id)) {
        value = "Já foi escolhido";
        disabled = true;
    } else {
        value = "Escolher esse";
        disabled = false;
    }

    const chooseItem = (code, id) => {
        ItemService.chooseItem(code, id, "")
            .then(response => {
                value = "Escolhi esse";
                color = "red";
                buttonIcon = "times";
                chooseItemList(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const itemAlreadyChoose = (id) => {
        ItemService.getItemAlreadyChoose(id)
            .then(response => {
                if (response.data != null && response.data) {
                    chooseItem(localStorage.getItem("inviteCode"), props.id);
                } else {
                    setModalMsg("Item acabou de ser escolhido, por favor selecione outro!");
                    setOpen(true);
                }
            })
            .catch(e => {
                console.log(e);
            });
    };

    const handleClick = () => {
        itemAlreadyChoose(props.id);
    }

    return (
        <div className="Item" disabled={disabled}>
            <Card>
                {props.image !== "" ? <img src={`https://drive.google.com/uc?export=view&id=${props.image}`}
                    alt={props.titulo} /> : <Label content='Image not found!' icon='warning' />}
                <Card.Content>
                    <Card.Header>{props.title}</Card.Header>
                    <Card.Meta>
                        <span>{props.description}</span>
                    </Card.Meta>
                    <Card.Description>
                        {links.length !== 0 ? <div className="accordion" onClick={() => setIsActive(!isActive)}>
                            <input type="radio" name="select" className="accordion-select" />
                            <div className="accordion-title">
                                <span>Onde encontrar <Icon name="angle down" /></span>
                            </div>

                            {links.map((link) => (
                                isActive && <div key={Math.random() * (links.length - 1) + 1} className="accordion-content" >
                                    <span><a href={link.linkUrl}
                                        target="_blank"
                                        rel="noopener noreferrer">{link.linkName}</a></span>
                                </div>
                            ))}
                        </div> : null}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    {
                        inviteCode !== "" ?
                            <div className="Button">
                                <Button color={color} icon onClick={handleClick} labelPosition='right' >
                                    {value}
                                    <Icon name={buttonIcon} />
                                </Button>
                            </div>
                            : ""}
                </Card.Content>
            </Card>

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

export default Item;