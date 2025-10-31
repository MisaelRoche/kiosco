import Image from "next/image";
import { redirect } from 'next/navigation'

console.log("Desde servidor");

export default function Home() {

  { redirect('/order') }


}
