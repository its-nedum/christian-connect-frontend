import jwt_decode from 'jwt-decode'

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
    if(getToken() === null || getToken() === undefined){
        return false
    }

    try{
        let { exp } = jwt_decode(getToken())
        if( exp < Math.ceil(new Date().getTime() / 1000)){
        localStorage.removeItem('christianconnectauthtoken')
        return false
        }
    }catch(e){
        return false
    }
        return true
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

export const newsKey = () => {
    return `ae9dfb783fa9425996a8900b6d676428`
}

export const getUsername = () => {
    let {username} = jwt_decode(getToken())
    return username
}

export const welcomeNote = () => {
    if(isLoggedIn()){
        let {name} = jwt_decode(getToken())
        return name
    }else{
        return false
    }
}

export const chatHost = () => {
    //return `localhost:8080`
    return `https://christian-connect-chat-api.herokuapp.com`
}
