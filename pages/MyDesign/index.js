import letter from "../../assets/imgs/letter-main.png";
import lettersmall from "../../assets/imgs/small/letter-des.png";
import smt from "../../assets/imgs/smt-main.png";
import smtsmall from "../../assets/imgs/small/smt-des-small.png";
import mybnb from "../../assets/imgs/mybnb-main.png";
import mybnbsmall from "../../assets/imgs/small/mybnb-des.png";
import base from "../../assets/imgs/base-main.png";
import basesmall from "../../assets/imgs/small/base-des.png";
import itc from "../../assets/imgs/itc-main.png";
import itcsmall from "../../assets/imgs/small/itc-des.png";
import tech from "../../assets/imgs/tech-main.png";
import techsmall from "../../assets/imgs/small/tech-des.png";
import sadana from "../../assets/imgs/sadana-main.png";
import sadanasmall from "../../assets/imgs/small/sadana-des.png";

import kadamate from "../../assets/imgs/kadamatee/kadamate.png";
import landingPage from "../../assets/imgs/kadamatee/landing page.png";
import mobileGame from "../../assets/imgs/kadamatee/mobile game.png";

import PhotoSwipeLightbox from 'photoswipe/lightbox';

import 'photoswipe/style.css';
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import BlurryLoadingImage from "../../components/BlurryLoadingImage";
import Image from "next/image";
import Link from "next/link";
 
export default function MyDesign() {
  const [isShown, setIsShown] = useState(true);
  const images = [kadamate,landingPage,mobileGame];

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + "imageGullare",
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <Layout title={"Mustafa Osman : My Design"}>
      <div className="grid p-16 gap-12 mx-auto w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {isShown && (
          <div className="border  p-0   hover:shadow-lg hover:scale-110  hover:shadow-[#2b3d2f5d] duration-200  ">
            <figure id="mywork" className="design p-0">
              <Link lagacyBehavior rel="noreferrer"  href="https://9802131.xyz/" target={"_blank"}>
              {/* <Image
                  src={smt.src}
                  alt="mediaspu-cli"
                  placeholder="blur"

                  
                  blurDataURL={smtsmall.src}
                   width={600}
                   height={350}

                /> */}
                <BlurryLoadingImage
                  preview={smtsmall.src}
                  image={smt.src}
                   alt="mediaspu-cli"
                />
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
             <div className="pswp-gallery border  p-0   hover:shadow-lg hover:scale-110  hover:shadow-[#2b3d2f5d] duration-200" id="imageGullare">
             { images.map((image, index) => (
               <a
               className={!index || 'hidden'}
                 href={image.src}
                 data-pswp-width={image.width}
                 data-pswp-height={image.height}
                 key={"imageGullare" + '-' + index}
                 target="_blank"
                 rel="noreferrer"
               >
                 <img src={image.src} alt="" />
               </a>
             ))}
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
                 {/* <Image
                  src={tech.src}
                  alt="mediaspu-cli"
                  placeholder="blur"

                  
                  blurDataURL={techsmall.src}
                   width={600}
                   height={350}

                /> */}
            
                
                <BlurryLoadingImage
                  preview={techsmall.src}
                  image={tech.src}
                   alt="mediaspu-cli"
                />
              </Link>
            </figure>
          </div>
        )}





 
      </div>
    </Layout>
  );
}
