import { FaGithubAlt } from "react-icons/fa";
import { BiBuildingHouse } from "react-icons/bi";
import Link from "next/link";
export default function Header() {
  return (
    <header>
      <Link  href="/">
      
       <a rel="noreferrer" className="Heading"> Mustafa Osman</a>

      </Link>

      <nav>
        <p>
          <BiBuildingHouse size={25} title="MyWork"></BiBuildingHouse>

          <Link href="/MyWork">MyWork</Link>
        </p>
        <p>
          <FaGithubAlt size={25} title="GitHub"></FaGithubAlt>
          <a rel="noreferrer" href="http://github.com/musta20" target={"_blank"}>
            Github
          </a>
        </p>
      </nav>
    </header>
  );
}
