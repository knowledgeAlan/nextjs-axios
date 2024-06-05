
"use client"
import React,{Suspense} from 'react'

 

import { useSearchParams } from 'next/navigation'

import Order from './pages/order'


export default function Home() {

  const searchParams = useSearchParams();
 

  const paymentLinkId:string|null =searchParams.get('id');

  console.log("order==paymentLinkId==parameter==",paymentLinkId);
  return (
    <Suspense>
      <Order/>
    </Suspense>
    
  );
}
