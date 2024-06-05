
"use client"
import React,{Suspense} from 'react'

 

import { useSearchParams } from 'next/navigation'

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

  const searchParams = useSearchParams();
 

  const paymentLinkId:string|null =searchParams.get('id');

  console.log("order==paymentLinkId==parameter==",paymentLinkId);
  return (
    <Suspense>
      <Order/>
    </Suspense>
    
  );
}
