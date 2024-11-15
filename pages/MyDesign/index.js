import { designs } from '../../data/projects.json';
import kadamate from "../../assets/imgs/kadamatee/kadamate.png";
import landingPage from "../../assets/imgs/kadamatee/landing page.png";
import mobileGame from "../../assets/imgs/kadamatee/mobile game.png";

import PhotoSwipeLightbox from 'photoswipe/lightbox';

import 'photoswipe/style.css';
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import BlurryLoadingImage from "../../components/BlurryLoadingImage";
import Link from "next/link";
 
export default function MyDesign() {
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
        {designs.map((design, index) => (
          <div key={index} className="border p-0 hover:shadow-lg hover:scale-110 hover:shadow-[#2b3d2f5d] duration-200">
            <figure id="mywork" className="design p-0">
              <Link rel="noreferrer" href={design.url} target="_blank">
                <BlurryLoadingImage
                  preview={design.preview}
                  image={design.image}
                  alt={design.title}
                />
              </Link>
            </figure>
          </div>
        ))}

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
      </div>
    </Layout>
  );
}
