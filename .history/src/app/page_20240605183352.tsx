
"use client"
import React,{Suspense,useEffect} from 'react';

import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.ipify.org/?format=json',
  timeout: 5000, // Timeout if necessary
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

const fetchData = async ( url:string , options = {}) => { 
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error retrieving data:', error);
    throw new Error('Could not get data');
  }
};
  function Order() {
     
 

  const paymentLinkId:string|null =useSearchParams().get('id');

  console.log("order==paymentLinkId=order=parameter==",paymentLinkId);

  return (
      <div>
          order
      </div>
  )
}



export default function Home() {

  const test = async()=>{

   
  
    const res = await fetch('https://api.ipify.org/?format=json')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    
   
     console.log("order==res===",res);


     let res1 = await fetchData("https://api.ipify.org/?format=json");

     console.log("order==res1===",res1);

  }

  useEffect(()=>{
    test();
  },[])

 
  
  return (
    <Suspense>
      <Order/>
    </Suspense>
    
  );
}
