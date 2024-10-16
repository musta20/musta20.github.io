import letter from "../../assets/imgs/letter-des.png";
import lettersmall from "../../assets/imgs/small/letter-des.png";
import smt from "../../assets/imgs/smt-des.png";
import smtsmall from "../../assets/imgs/small/smt-des-small.png";
import mybnb from "../../assets/imgs/mybnb-des.png";
import mybnbsmall from "../../assets/imgs/small/mybnb-des.png";
import base from "../../assets/imgs/base-des.png";
import basesmall from "../../assets/imgs/small/base-des.png";
import itc from "../../assets/imgs/itc-des.png";
import itcsmall from "../../assets/imgs/small/itc-des.png";
import tech from "../../assets/imgs/tech-des.png";
import techsmall from "../../assets/imgs/small/tech-des.png";
import sadana from "../../assets/imgs/sadana-des.png";
import sadanasmall from "../../assets/imgs/small/sadana-des.png";
 
import { useState } from "react";
import Layout from "../../components/Layout";
import BlurryLoadingImage from "../../components/BlurryLoadingImage";
import Image from "next/image";
import Link from "next/link";
 
export default function MyDesign() {
  const [isShown, setIsShown] = useState(true);

  return (
    <Layout title={"Mustafa Osman : My Design"}>
      <div className="grid p-16 gap-12 mx-auto w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {isShown && (
          <div className="border  p-0   hover:shadow-lg hover:scale-110  hover:shadow-[#2b3d2f5d] duration-200  ">
            <figure id="mywork" className="design p-0">
              <Link lagacyBehavior rel="noreferrer"  href="https://9802131.xyz/" target={"_blank"}>
              <Image
                  src={smt.src}
                  alt="mediaspu-cli"
                  placeholder="blur"

                  
                  blurDataURL={smtsmall.src}
                   width={600}
                   height={350}

                />
                {/* <BlurryLoadingImage
                  preview={smtsmall.src}
                  image={smt.src}
                   alt="mediaspu-cli"
                /> */}
              </Link>
            </figure>
          </div>
        )}

        {isShown && (
          <div className="border  p-0   hover:shadow-lg hover:scale-110  hover:shadow-[#2b3d2f5d] duration-200  ">
            <figure id="mywork" className="design">
              <Link lagacyBehavior
                rel="noreferrer"
                href="http://mybnb.testgit.xyz/"
                target={"_blank"}
              >
                <Image
                  src={mybnb.src}
                  alt="mediaspu-cli"
                  placeholder="blur"

                  
                  blurDataURL={mybnbsmall.src}
                   width={600}
                   height={350}

                />
                {/* <BlurryLoadingImage
                  preview={mybnbsmall.src}
                  image={mybnb.src}
                   alt="mediaspu-cli"
                /> */}
              </Link>
            </figure>
          </div>
        )}

        {isShown && (
          <div className="border  p-0   hover:shadow-lg hover:scale-110  hover:shadow-[#2b3d2f5d] duration-200  ">
            <figure id="mywork" className="design">
            <Link lagacyBehavior
                rel="noreferrer"
                href="http://baseproject.testgit.xyz/"
                target={"_blank"}
              >

                    <Image
                  src={base.src}
                  alt="mediaspu-cli"
                  placeholder="blur"

                  
                  blurDataURL={basesmall.src}
                   width={600}
                   height={350}

                />
            {/* <BlurryLoadingImage
                  preview={basesmall.src}
                  image={base.src}
                   alt="mediaspu-cli"
                /> */}
              </Link>
            </figure>
          </div>
        )}

        {isShown && (
          <div className="border  p-0   hover:shadow-lg hover:scale-110  hover:shadow-[#2b3d2f5d] duration-200  ">
            <figure id="mywork" className="design">
              <Link lagacyBehavior
                rel="noreferrer"
                href="https://testgit.xyz/sadana/"
                target={"_blank"}
              >

            <Image
                  src={sadana.src}
                  alt="mediaspu-cli"
                  placeholder="blur"

                  
                  blurDataURL={sadanasmall.src}
                   width={600}
                   height={350}

                />
                    {/* <BlurryLoadingImage
                  preview={sadanasmall.src}
                  image={sadana.src}
                   alt="mediaspu-cli"
                /> */}
              </Link>
            </figure>
          </div>
        )}

        {isShown && (
          <div className="border  p-0   hover:shadow-lg hover:scale-110  hover:shadow-[#2b3d2f5d] duration-200  ">
            <figure id="mywork" className="design">
              <Link lagacyBehavior
                rel="noreferrer"
                href="https://testgit.xyz/itc/"
                target={"_blank"}
              >


            <Image
                  src={itc.src}
                  alt="mediaspu-cli"
                  placeholder="blur"

                  
                  blurDataURL={itcsmall.src}
                   width={600}
                   height={350}

                />
                 {/* <BlurryLoadingImage
                  preview={itcsmall.src}
                  image={itc.src}
                   alt="mediaspu-cli"
                /> */}
              </Link>
            </figure>
          </div>
        )}

        {isShown && (
          <div className="border  p-0   hover:shadow-lg hover:scale-110  hover:shadow-[#2b3d2f5d] duration-200  ">
            <figure id="mywork" className="design">
              <Link lagacyBehavior
                rel="noreferrer"
                href="https://testgit.xyz/letter/"
                target={"_blank"}
              >


            <Image
                  src={letter.src}
                  alt="mediaspu-cli"
                  placeholder="blur"

                  
                  blurDataURL={lettersmall.src}
                   width={600}
                   height={350}

                />
                 {/* <BlurryLoadingImage
                  preview={lettersmall.src}
                  image={letter.src}
                   alt="mediaspu-cli"
                /> */}
              </Link>
            </figure>
          </div>
        )}

        {isShown && (
          <div className="border  p-0   hover:shadow-lg hover:scale-110  hover:shadow-[#2b3d2f5d] duration-200  ">
            <figure id="mywork" className="design">
              <Link lagacyBehavior
                rel="noreferrer"
                href="https://testgit.xyz/tech/"
                target={"_blank"}
              >
         <Image
                  src={tech.src}
                  alt="mediaspu-cli"
                  placeholder="blur"

                  
                  blurDataURL={techsmall.src}
                   width={600}
                   height={350}

                />
            
                
                {/* <BlurryLoadingImage
                  preview={techsmall.src}
                  image={tech.src}
                   alt="mediaspu-cli"
                /> */}
              </Link>
            </figure>
          </div>
        )}
      </div>
    </Layout>
  );
}
