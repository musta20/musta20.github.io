import letter from "../../assets/imgs/letter-des.png";
import lettersmall from "../../assets/imgs/small/letter-des.png";
import smt from "../../assets/imgs/smt-des.png";
import smtsmall from "../../assets/imgs/small/smt-des-small.png";
import mybnb from "../../assets/imgs/mybnb-des.png";
import mybnbsmall from "../../assets/imgs/small//mybnb-des.png";
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
 
export default function MyDesign() {
  const [isShown, setIsShown] = useState(true);

  return (
    <Layout title={"Mustafa Osman : My Design"}>
      <div className="grid p-16 gap-12 mx-auto w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {isShown && (
          <div className="border  p-0   hover:shadow-lg hover:scale-110  hover:shadow-[#2b3d2f5d] duration-200  ">
            <figure id="mywork" className="design p-0">
              <a rel="noreferrer"  href="https://9802131.xyz/" target={"_blank"}>
                <BlurryLoadingImage
                  preview={smtsmall.src}
                  image={smt.src}
                   alt="mediaspu-cli"
                />
              </a>
            </figure>
          </div>
        )}

        {isShown && (
          <div className="border  p-0   hover:shadow-lg hover:scale-110  hover:shadow-[#2b3d2f5d] duration-200  ">
            <figure id="mywork" className="design">
              <a
                rel="noreferrer"
                href="http://mybnb.testgit.xyz/"
                target={"_blank"}
              >
                <BlurryLoadingImage
                  preview={mybnbsmall.src}
                  image={mybnb.src}
                   alt="mediaspu-cli"
                />
              </a>
            </figure>
          </div>
        )}

        {isShown && (
          <div className="border  p-0   hover:shadow-lg hover:scale-110  hover:shadow-[#2b3d2f5d] duration-200  ">
            <figure id="mywork" className="design">
              <a
                rel="noreferrer"
                href="http://baseproject.testgit.xyz/"
                target={"_blank"}
              >
            <BlurryLoadingImage
                  preview={basesmall.src}
                  image={base.src}
                   alt="mediaspu-cli"
                />
              </a>
            </figure>
          </div>
        )}

        {isShown && (
          <div className="border  p-0   hover:shadow-lg hover:scale-110  hover:shadow-[#2b3d2f5d] duration-200  ">
            <figure id="mywork" className="design">
              <a
                rel="noreferrer"
                href="https://testgit.xyz/sadana/"
                target={"_blank"}
              >
                    <BlurryLoadingImage
                  preview={sadanasmall.src}
                  image={sadana.src}
                   alt="mediaspu-cli"
                />
              </a>
            </figure>
          </div>
        )}

        {isShown && (
          <div className="border  p-0   hover:shadow-lg hover:scale-110  hover:shadow-[#2b3d2f5d] duration-200  ">
            <figure id="mywork" className="design">
              <a
                rel="noreferrer"
                href="https://testgit.xyz/itc/"
                target={"_blank"}
              >
                 <BlurryLoadingImage
                  preview={itcsmall.src}
                  image={itc.src}
                   alt="mediaspu-cli"
                />
              </a>
            </figure>
          </div>
        )}

        {isShown && (
          <div className="border  p-0   hover:shadow-lg hover:scale-110  hover:shadow-[#2b3d2f5d] duration-200  ">
            <figure id="mywork" className="design">
              <a
                rel="noreferrer"
                href="https://testgit.xyz/letter/"
                target={"_blank"}
              >
                 <BlurryLoadingImage
                  preview={lettersmall.src}
                  image={letter.src}
                   alt="mediaspu-cli"
                />
              </a>
            </figure>
          </div>
        )}

        {isShown && (
          <div className="border  p-0   hover:shadow-lg hover:scale-110  hover:shadow-[#2b3d2f5d] duration-200  ">
            <figure id="mywork" className="design">
              <a
                rel="noreferrer"
                href="https://testgit.xyz/tech/"
                target={"_blank"}
              >
                <BlurryLoadingImage
                  preview={techsmall.src}
                  image={tech.src}
                   alt="mediaspu-cli"
                />
              </a>
            </figure>
          </div>
        )}
      </div>
    </Layout>
  );
}
