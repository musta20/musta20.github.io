import { FaGithubAlt } from "react-icons/fa";
import { BiBuildingHouse } from "react-icons/bi";
import { BiPurchaseTag } from "react-icons/bi";
import { PiPaintBrush } from "react-icons/pi";

import Link from "next/link";
export default function Header() {
  return (
    <header className="flex p-5 align-center gap-3 justify-between ">
      <Link href="/">
        <a
          rel="noreferrer"
          className="Heading bg-gradient-to-r from-[#cc6666] to-[#33ccff] p-1 bg-clip-text text-transparent  font-bold "
        >
          {" "}
          Mustafa Osman
        </a>
      </Link>

      <nav className="flex md:gap-10 gap-3 text-md  text-[#29a9d4]">
        <Link href="/MyWork">
          <div className="flex place-items-center cursor-pointer hover:text-[#00526d]  flex-col ">
            <BiBuildingHouse size={25} title="MyWork"></BiBuildingHouse>
            MyWork
          </div>
        </Link>

        <Link href="/MyDesign">
          <div className="flex place-items-center cursor-pointer hover:text-[#00526d]  flex-col ">
            <PiPaintBrush size={25} title="MyDesign"></PiPaintBrush>
            MyDesign
          </div>
        </Link>

        <a
          rel="noreferrer"
          href="http://github.com/musta20"
          target={"_blank"}
          className="flex place-items-center hover:text-[#00526d]   flex-col"
        >
          <FaGithubAlt size={25} title="GitHub"></FaGithubAlt>
          Github
        </a>
      </nav>
    </header>
  );
}
