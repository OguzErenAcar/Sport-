import { GetRequest, PostRequest } from "./Request";

const headers={
    'x-rapidapi-key': '8370d9e021msh7f958074248e43cp1de392jsn1f21f57cf161',
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
}

export const getStanding= (params:object)=>{
    
    return  GetRequest(
        'https://api-football-v1.p.rapidapi.com/v3/standings',
        headers,
        params
    )
}

export const getNextMatches=(params:object)=>{
    
    return GetRequest(
        'https://api-football-v1.p.rapidapi.com/v3/fixtures',
        headers,
        params
    )
}
