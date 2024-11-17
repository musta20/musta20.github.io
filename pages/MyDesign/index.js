import { designs } from '../../data/projects.json';
// import kadamate from "../../assets/imgs/kadamatee/kadamate.png";
// import landingPage from "../../assets/imgs/kadamatee/landing page.png";
// import mobileGame from "../../assets/imgs/kadamatee/mobile game.png";


// import iphones1 from "../../assets/imgs/apple-store/1.png"
// import iphones2 from "../../assets/imgs/apple-store/2.png"
// import iphones3 from "../../assets/imgs/apple-store/3.png"
// import iphones4 from "../../assets/imgs/apple-store/4.png"
// import iphones5 from "../../assets/imgs/apple-store/5.png"


// import beauty1 from "../../assets/imgs/beauty/1.png"
// import beauty2 from "../../assets/imgs/beauty/2.png"
// import beauty3 from "../../assets/imgs/beauty/3.png"
// import beauty4 from "../../assets/imgs/beauty/4.png"


// import insurance1 from "../../assets/imgs/insurance/1.png" 
// import insurance2 from "../../assets/imgs/insurance/faq.png" 
// import insurance3 from "../../assets/imgs/insurance/header.png" 
// import insurance4 from "../../assets/imgs/insurance/story.png" 



// import music1 from "../../assets/imgs/music/1.png" 
// import music4 from "../../assets/imgs/music/3.png" 
// import music3 from "../../assets/imgs/music/music-product-page.png" 
// import music2 from "../../assets/imgs/music/2.png" 


// import photography1 from "../../assets/imgs/photograpy/1.png"
// import photography2 from "../../assets/imgs/photograpy/photograpy-mobile.jpg"
// import photography3 from "../../assets/imgs/photograpy/photograpy.jpg"

// import realstate1 from "../../assets/imgs/realstate/1.png"
// import realstate2 from "../../assets/imgs/realstate/blog-company-mobile.png"
// import realstate3 from "../../assets/imgs/realstate/faq.png"
// import realstate4 from "../../assets/imgs/realstate/header.png"

// import shoes1 from "../../assets/imgs/shoes-store/1.png"
// import shoes2 from "../../assets/imgs/shoes-store/header (2).png"
// import shoes3 from "../../assets/imgs/shoes-store/shoes-store-mobile.png"
// import shoes4 from "../../assets/imgs/shoes-store/shoes-store.png"
// import shoes5 from "../../assets/imgs/shoes-store/shop.png"

// import interorblog1 from "../../assets/imgs/interor-blog/1.png"
// import interorblog2 from "../../assets/imgs/interor-blog/interor-blog.png"
// import interorblog3 from "../../assets/imgs/interor-blog/interor-blog-mobile.png"

import PhotoSwipeLightbox from 'photoswipe/lightbox';

import 'photoswipe/style.css';
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import BlurryLoadingImage from "../../components/BlurryLoadingImage";
import Link from "next/link";
 
export default function MyDesign() {

  // const images = [kadamate,landingPage,mobileGame];
  // const iphonesStore = [iphones1,iphones2,iphones3,iphones4,iphones5];
  // const beautyStore = [beauty1,beauty2,beauty3,beauty4];
  // const insuranceStore = [insurance1,insurance2,insurance3,insurance4];
  // const musicStore = [music1,music2,music3,music4];
  // const photographyStore = [photography1,photography2,photography3];
  // const realstateStore = [realstate1,realstate2,realstate3,realstate4];
  // const shoesStore = [shoes1,shoes2,shoes3,shoes4,shoes5];
  // const interorblogStore = [interorblog1,interorblog2,interorblog3];
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

        {/* {showGallery(iphonesStore)}
        {showGallery(beautyStore)}
        {showGallery(insuranceStore)}
        {showGallery(musicStore)}
        {showGallery(photographyStore)}
        {showGallery(realstateStore)}
        {showGallery(shoesStore)}
        {showGallery(interorblogStore)} */}

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

        
 
      </div>
    </Layout>
  );
}

const showGallery = (images) => {
  return (
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
  )
}
