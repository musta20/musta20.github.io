import { FaGithubAlt } from "react-icons/fa";
import { BiBuildingHouse } from "react-icons/bi";
import { PiPaintBrush } from "react-icons/pi";

import Link from "next/link";
export default function Header() {
  return (
    <header className="flex   p-5 align-center gap-3 justify-between ">
      <Link href="/"  legacyBehavior
        
          rel="noreferrer"
          // className="Heading bg-gradient-to-r from-[#cc6666] to-[#33ccff] p-1 bg-clip-text text-transparent  font-bold "
       
          >
           <span     className="Heading
          
           duration-300
          
           transition-all
          
          delay-300 
          
          bg-gradient-to-r from-[#219C90] via-[#B5CB99] to-[#E9B824] p-3 bg-clip-text text-transparent  font-bold 

          hover:from-[#5ae0d3] hover:via-[#91ff00] hover:to-[#E9B824]

          hover:bg-gradient-to-l

" >  Mustafa Osman</span>
        
        
      </Link>

      <nav className="flex md:gap-10 gap-3 text-md  text-[#219C90]">
        <Link href="/MyWork">
          <div className="flex place-items-center transition duration-300   hover:bg-[#505757] hover:text-[#f1fae6]  p-3   cursor-pointer  flex-col ">
            <BiBuildingHouse size={25} title="MyWork"></BiBuildingHouse>
            MyWork
          </div>
        </Link>

        <Link href="/MyDesign">
          <div className="flex place-items-center cursor-pointer transition duration-300 hover:bg-[#505757] hover:text-[#f1fae6]  p-3   flex-col ">
            <PiPaintBrush size={25} title="MyDesign"></PiPaintBrush>
            MyDesign
          </div>
        </Link>

        <Link legacyBehavior
          rel="noreferrer"
          href="http://github.com/musta20"
          target={"_blank"}
        >
          <div           className="flex w-30 place-items-center transition duration-300 hover:bg-[#505757] hover:text-[#f1fae6]  p-3   flex-col"
          >          
          <FaGithubAlt size={25} title="GitHub">
          </FaGithubAlt>
          Github

          </div>

        </Link>
      </nav>
    </header>
  );
}
