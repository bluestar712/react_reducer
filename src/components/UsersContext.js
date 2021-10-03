import React from 'react';

const initialState = {
    users: {
        loading: false,
        data: null,
        error: null
    },
    user: {
        loading: false,
        data: null,
        error: null
    }
};

const loadingState = {
    loading: true,
    data: null,
    error: null
}

const success = data => ({
    loading: false,
    data,
    error: null
});

const error = error => ({
    loading: false,
    data: null,
    error: error
});

function usersReducer(state, action){
    switch(action.type){
        case 'GET_USERS':
            return {
                ...state,
                users: loadingState
            };
        case 'GET_USERS_SUCCESS':
            return {
                ...state,
                users: success(action.data)
            };
        case 'GET_USERS_ERROR':
            return {
                ...state,
                users: error(action.error)
            };
            
    }
}

