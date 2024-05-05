import React from 'react'
import axios from 'axios'
  function Request(url:string,headers={},params={},data={},method="GET") {

        return new Promise(async(resolve,reject)=>{
            const options:any={
                method,
                url,
                headers,
                params
            }
            if(JSON.stringify(data) !== '{}')
            options.body= JSON.stringify(data)

            const response = await axios.request(options)
            const result =await response.data

            if(result.errors.length<=0)
                resolve(result)
            else
                reject(result)


        })

//     if(!data)
//     await axios.get(url,headers,params).then((response)=>{

//         return response

// }).catch((error)=>{
//         return error
//     })

//     await axios.post(url,data,headers,params).then((response)=>{  return response  })
//     .catch((error)=>{
//         return error

//     })
}

export const GetRequest=(url:string,headers:object,params:object)=> Request(url,headers,params)
export const PostRequest= (url:string,headers:object,params:object,data:object)=>Request(url,headers,params,data,"POST")
