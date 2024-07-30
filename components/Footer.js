import { FaGithub, FaLinkedin, FaPhoneAlt, FaMapMarked } from "react-icons/fa";
import { SiGmail , SiUpwork } from "react-icons/si";

const Footer = () => (
  <footer className="flex flex-col md:flex-row p-16 align-center justify-around border-t text-[#29a9d4] ">
    <p className="flex gap-2">
      <SiGmail size={20}></SiGmail> 
      <a rel="noreferrer" href="mailto:musta.c137@gmail.com">musta.c137</a>

    </p>
    
    <p className="flex gap-2">
      <FaLinkedin size={20}></FaLinkedin>{" "}
      <a rel="noreferrer" href="https://linkedin.com/in/mustafa20-osman"
                            target={"_blank"}

      >mustafa20-osman</a>
    </p>
    <p className="flex gap-2">
      <SiUpwork size={20}></SiUpwork>{" "}
      <a rel="noreferrer" href="https://www.upwork.com/freelancers/~01d4de6c4118ac9405"
                            target={"_blank"}

      > mustafa osman</a>
    </p>
  </footer>
);

export default Footer;
