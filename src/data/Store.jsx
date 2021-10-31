import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

import InviteService from "../components/services/InviteService";

const initialState = {
    inviteCode: localStorage.getItem("invite") ? JSON.parse(localStorage.getItem("invite")).inviteCode : "",
    inviteName: localStorage.getItem("invite") ? JSON.parse(localStorage.getItem("invite")).inviteName : "",
    inviteQuantity: localStorage.getItem("invite") ? JSON.parse(localStorage.getItem("invite")).inviteQuantity : 0,
    itens: localStorage.getItem("invite") ? JSON.parse(localStorage.getItem("invite")).itens : [],
    confirmed: localStorage.getItem("invite") ? JSON.parse(localStorage.getItem("invite")).confirmed : false,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const confirmPresence = confirm => {
        dispatch({ type: "CONFIRM_PRESENCE", payload: confirm });
    }

    const chooseItemList = item => {
        dispatch({ type: "CHOOSE_ITEM", payload: item });
    }

    const unChooseItemList = item => {
        var filtered = state.itens.filter(x => x.productId !== item.productId);
        dispatch({ type: "UNCHOOSE_ITEM", payload: filtered });
    }

    const updateItens = itens => {
        dispatch({ type: "UPDATE_ITENS", payload: itens });
    }

    const updateInviteCode = inviteCode => {
        dispatch({ type: "UPDATE_INVITE_CODE", payload: inviteCode });
    }

    const updateInviteName = invitationName => {
        dispatch({ type: "UPDATE_INVITE_NAME", payload: invitationName });
    }

    const updateConsfirmation = inviteConfirmation => {
        dispatch({ type: "UPDATE_INVITE_CONFIRMATION", payload: inviteConfirmation });
    }

    const updateInviteQuantity = inviteQuantity => {
        dispatch({ type: "UPDATE_INVITE_QUANTITY", payload: inviteQuantity });
    }

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("invite"));

        if (user !== null) {
            user.inviteCode = state.inviteCode;
            user.inviteName = state.inviteName;
            user.inviteQuantity = state.inviteQuantity;
            user.itens = state.itens;
            user.confirmed = state.confirmed;

            localStorage.setItem('invite', JSON.stringify(user));
        }
    }, [state], [localStorage.getItem("invite")]);

    const getInviteByCode = code => {
        InviteService.getByCode(code)
            .then(response => {
                localStorage.setItem('invite', JSON.stringify(response.data));
                let user = JSON.parse(localStorage.getItem("invite"));

                updateInviteCode(localStorage.getItem("inviteCode"));
                updateInviteName(user.inviteName);
                updateConsfirmation(user.confirmed);
                updateInviteQuantity(user.inviteQuantity)
                updateItens(user.itens);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const getInviteIfExistsByCode = code => {
        InviteService.getIfExistsByCode(code)
            .then(response => {
                if (response.data === true) {
                    getInviteByCode(props.code);
                    localStorage.setItem('inviteCode', props.code);
                }
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        if (props.code !== null) {
            getInviteIfExistsByCode(props.code);
        }
    }, [props.code]);

    return (
        <GlobalContext.Provider value={{
            inviteCode: state.inviteCode,
            inviteName: state.inviteName,
            inviteQuantity: state.inviteQuantity,
            itens: state.itens,
            confirmed: state.confirmed,
            playMusic: state.playMusic,
            confirmPresence,
            chooseItemList,
            unChooseItemList
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}