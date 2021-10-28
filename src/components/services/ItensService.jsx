import http from "../plugins/http-common";

const getAll = () => {
    return http.get("itens");
}

const getAllChosen = () => {
    return http.get("itens/alreadyChosen");
};

const getItemById = (id) => {
    return http.get(`/item/${id}`);
};

const getItemAlreadyChoose = (id) => {
    return http.get(`/itemAlreadyChoosen/${id}`);
};

const chooseItem = (code, id, data) => {
    return http.put(`item/${code}/${id}`, data);
};

const ItemService = {
    getAll,
    getAllChosen,
    getItemById,
    chooseItem,
    getItemAlreadyChoose
};

export default ItemService;