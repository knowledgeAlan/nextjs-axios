 
import { useSearchParams } from 'next/navigation'


export default function Home() {

  const searchParams = useSearchParams();
 

  const paymentLinkId:string|null =searchParams.get('id');

  console.log("order==paymentLinkId==parameter==",paymentLinkId);
  return (
    <main className="">
      
    </main>
  );
}
