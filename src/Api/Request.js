import React from 'react'
import axios from 'axios'
  function Request(url,headers={},params={},data=false,method="GET") {

        return new Promise(async(resolve,reject)=>{
            const options={
                method,
                url,
                headers,
                params
            }
            if(data)
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

export const GetRequest=(url,headers,params)=> Request(url,headers,params)
export const PostRequest= (url,headers,params,data)=>Request(url,headers,params,data,"POST")
