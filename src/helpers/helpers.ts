import { environment as env } from "src/environments/environment";

export const generateRamdomString = (length: number): string => {
    let text: string = '';
    for(let i = 0; i < length; i++){
        text += env.spotify.state.charAt(Math.floor(Math.random() * env.spotify.state.length));
    }
    return text;
}

export const generateQuery = (params: any): string =>{
    let query = '';
    for(let i in params){
        query += `${i}=${params[i]}&`
    }

    return query.substring(0, query.length -1);
}

export const encodeCredentials = (client_id: string, client_secret: string): string =>{
    // return new Buffer(`${client_id}:${client_secret}`).toString('base64');
    const encode = btoa(`${client_id}:${client_secret}`);
    console.log(encode);
    
    return encode;
}

export const saveLocalStorage = (key: string, data: object | string | any): boolean =>{
    localStorage.setItem(key, JSON.stringify(data));
    return true;
}

export const getLocalStorage = (key: string): object | string | undefined =>{
    return JSON.parse(localStorage.getItem(key) || '') || undefined;
}