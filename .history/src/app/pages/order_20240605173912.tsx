"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'


export default function order() {
    const searchParams = useSearchParams;
 

    const paymentLinkId:string|null =searchParams.get('id');
  
    console.log("order==paymentLinkId==parameter==",paymentLinkId);

    return (
        <div>
            order
        </div>
    )
}
