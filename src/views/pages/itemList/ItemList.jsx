import React, { useState, useEffect } from "react";
import "./ItemList.css";

import ItensService from "../../../components/services/ItensService";

import Item from "../../../components/layout/item/Item";

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

    return (
        <div className="List">
            <h1>Lista em loja</h1>
            <h3>Aqui vocês poderão encontrar a lista de presentes.
                Para aqueles que preferem nos presentear em uma loja física,
                abaixo também uma sugestão de Loja.</h3>
            <div className="ItemList">
                {itens.length !== 0 ? itens.map(({ productId, productName, productImagePath, links, productDescription}) =>
                    <Item key={productId} id={productId}
                    title={productName} image={productImagePath} links={links} description={productDescription} idsDisabled={listItensHasChoosen}/>
                ) : ""}
            </div>
        </div>
    )
}
export default ItemList;