
"use client"
import React,{Suspense} from 'react'

 

import { useSearchParams } from 'next/navigation'

import Order from './pages/order'


export default function Home() {

 
  return (
    <Suspense>
      <Order/>
    </Suspense>
    
  );
}
