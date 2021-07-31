export const API_URLS = {
    authentication: {
        type: 'post',
        url:'/the-eye/users/authorization'
    },
    locationList: {
        type: 'get',
        url: '/the-eye/locations/active?active=true'
    },
    modelList: {
        type: 'get',
        url: '/the-eye/client-config/models'
    },
    getModelConfig: {
        type: 'get',
        staticUrl: '/the-eye/client-config/'
    },
    saveModelConfig: {
        type: 'post',
        staticUrl: '/the-eye/client-config/'
    }
};