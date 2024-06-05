
"use client"
import React,{Suspense,useEffect} from 'react';

import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';

import 'unfetch/polyfill'

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
  }


 
  
  return (
    <Suspense>
      <Order/>
    </Suspense>
    
  );
}
