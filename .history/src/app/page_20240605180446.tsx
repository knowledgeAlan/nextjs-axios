
"use client"
import React,{Suspense} from 'react';

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

  let url:string = "https://api.ipify.org/?format=json";
  const fetcher = url => fetch(url).then(r => r.json());

  const { data, error } = useSWR(url, fetcher);

  console.log("data====",data);
  
  return (
    <Suspense>
      <Order/>
    </Suspense>
    
  );
}
