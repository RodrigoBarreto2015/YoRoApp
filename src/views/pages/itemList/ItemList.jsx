import React, { useState, useEffect } from "react";
import "./ItemList.css";

import ItensService from "../../../components/services/ItensService";

import Item from "../../../components/layout/item/Item";

import { Button } from 'semantic-ui-react';

function ItemList() {

    const [itens, setItens] = useState([]);
    const [listItensHasChoosen, setListItensHasChoosen] = useState([]);
    const [visible, setVisible] = useState(8);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        retrieveItens();
        retrieveAllItensChoosen();
    }, []);

    const retrieveItens = () => {
        ItensService.getAll()
            .then(response => {
                setItens(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const retrieveAllItensChoosen = () => {
        ItensService.getAllChosen()
            .then(response => {
                setListItensHasChoosen(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const handleShowMoreItens = () => {
        setVisible(prevValue => prevValue + 8);

        if (itens.length < visible) {
            setHasMore(false);
        }
    };


    return (
        <div className="List">
            <h1>Lista em loja</h1>
            <h3>Aqui vocês poderão encontrar a lista de presentes.
                Para aqueles que preferem nos presentear em uma loja física,
                abaixo também uma sugestão de Loja.</h3>
            <div className="ItemList">
                {itens.length !== 0 ? itens.slice(0, visible).map(({ productId, productName, productImagePath, links, productDescription }) =>
                    <Item key={productId} id={productId}
                        title={productName} image={productImagePath} links={links} description={productDescription} idsDisabled={listItensHasChoosen} />
                ) : ""}
            </div>
            {hasMore ? <div className="ShowMoreButton">
                <div><Button as='div' onClick={handleShowMoreItens} labelPosition='right'>
                    <Button color='red'>
                        Carregar mais
                    </Button>
                </Button></div>
            </div> : ""}
        </div>
    )
}
export default ItemList;