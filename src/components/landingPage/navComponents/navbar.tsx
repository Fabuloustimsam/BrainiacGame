import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex text-blue-500 font-bold text-3xl h-full py-5 px-10 justify-between w-screen">
        <div>
          <Image alt="logo" src={"/BrainiacLogo.svg"} width={230} height={53}/>
            
          
        </div>
        <Link href={"/login"}>
        <button className="bg-purple-700  active:shadow-2xl hover:bg-purple-500 rounded-xl text-white w-60 h-14 text-sm justify-center text-center">LOGIN</button></Link>
      
      
    </nav>
  ); 
}

