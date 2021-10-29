import React, { useState, useEffect } from "react";
import "./ItemList.css";

import ItensService from "../../../components/services/ItensService";

import Item from "../../../components/layout/item/Item";

import { Button } from 'semantic-ui-react';

const itensPerPage = 8;
let arrayForHoldingItens = [];

function ItemList() {

    const [itens, setItens] = useState([]);
    const [listItensHasChoosen, setListItensHasChoosen] = useState([]);

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


    const [itensToShow, setItensToShow] = useState([]);
    const [next, setNext] = useState(8);
    const [showMore, setShowMore] = useState(true);

    const loopWithSlice = (start, end) => {
        const slicedItens = itens.slice(start, end);
        arrayForHoldingItens = [...arrayForHoldingItens, ...slicedItens];
        setItensToShow(arrayForHoldingItens);
    };

    useEffect(() => {
        loopWithSlice(0, itensPerPage);
    }, []);

    const handleShowMorePosts = () => {
        loopWithSlice(next, next + itensPerPage);
        setNext(next + itensPerPage);
        setShowMore(next < (itens.length - 1));
    };

    return (
        <div className="List">
            <h1>Lista em loja</h1>
            <h3>Aqui vocês poderão encontrar a lista de presentes.
                Para aqueles que preferem nos presentear em uma loja física,
                abaixo também uma sugestão de Loja.</h3>
            <div className="ItemList">
                {itensToShow.length !== 0 ? itensToShow.map(({ productId, productName, productImagePath, links, productDescription }) =>
                    <Item key={productId} id={productId}
                        title={productName} image={productImagePath} links={links} description={productDescription} idsDisabled={listItensHasChoosen} />
                ) : ""}
            </div>
            {showMore && <div><Button as='div' onClick={handleShowMorePosts} labelPosition='right'>
                <Button color='red'>
                    Carregar mais
                </Button>
            </Button></div>}
        </div>
    )
}
export default ItemList;