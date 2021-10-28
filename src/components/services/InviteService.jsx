import http from "../plugins/http-common";

const getByCode = code => {
    return http.get(`code/${code}`);
}

const getIfExistsByCode = code => {
    return http.get(`inviteExists/${code}`);
}

const confirmInvite = (id, data) => {
    return http.put(`/code/${id}`, data);
};

const InviteService = {
    getByCode,
    confirmInvite,
    getIfExistsByCode
};

export default InviteService;