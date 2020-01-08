export const saveToken = (token) => {
    localStorage.setItem('christianconnectauthtoken', token)
}

export const getToken = () => {
    return localStorage.getItem('christianconnectauthtoken')
}

export const setAuthToken = () => {
    return `Bearer ${localStorage.getItem('christianconnectauthtoken')}`
}

export const isLoggedIn = () => {
    if(getToken() === null){
        return false
    }else{
        return true
    }
}

export const logout = () => {
    localStorage.removeItem('christianconnectauthtoken')
    refreshCurrentPage()
}

const refreshCurrentPage = () => {
    if(!localStorage.getItem('christianconnectauthtoken')){
        window.location.reload()
    }
}