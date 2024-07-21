import FadeInSection from "../../components/FadeInSection";
import letter from "../../assets/imgs/letter-des.png";
import smt from "../../assets/imgs/smt-des.png";
import mybnb from "../../assets/imgs/mybnb-des.png";
import base from "../../assets/imgs/base-des.png";
import itc from "../../assets/imgs/itc-des.png";
import tech from "../../assets/imgs/tech-des.png";
import sadana from "../../assets/imgs/sadana-des.png";

import { useState } from "react";
import Layout from "../../components/Layout";
import Image from "next/image";

export default function MyWork() {
  const [isShown, setIsShown] = useState(true);

  return (
    <Layout title={"Mustafa Osman : My Work"}>
      <div className="grid  ">
        {isShown && (
          <FadeInSection>
            <figure id="mywork" className="design">
              <a rel="noreferrer" href="https://9802131.xyz/" target={"_blank"}>
                <Image
                  width={500}
                  height={250}
                  src={smt.src}
                  alt="mediaspu-cli"
                ></Image>
              </a>
            </figure>
          </FadeInSection>
        )}

        {isShown && (
          <FadeInSection>
            <figure id="mywork" className="design">
              <a
                rel="noreferrer"
                href="http://mybnb.testgit.xyz/"
                target={"_blank"}
              >
                <Image
                  width={500}
                  height={250}
                  src={mybnb.src}
                  alt="mediaspu-cli"
                ></Image>
              </a>
            </figure>
          </FadeInSection>
        )}

        {isShown && (
          <FadeInSection>
            <figure id="mywork" className="design">
              <a
                rel="noreferrer"
                href="http://baseproject.testgit.xyz/"
                target={"_blank"}
              >
                <Image
                  width={500}
                  height={250}
                  src={base.src}
                  alt="mediaspu-cli"
                ></Image>
              </a>
            </figure>
          </FadeInSection>
        )}

        {isShown && (
          <FadeInSection>
            <figure id="mywork" className="design">
              <a
                rel="noreferrer"
                href="https://testgit.xyz/sadana/"
                target={"_blank"}
              >
                <Image
                  width={500}
                  height={250}
                  src={sadana.src}
                  alt="mediaspu-cli"
                ></Image>
              </a>
            </figure>
          </FadeInSection>
        )}

        {isShown && (
          <FadeInSection>
            <figure id="mywork" className="design">
              <a
                rel="noreferrer"
                href="https://testgit.xyz/itc/"
                target={"_blank"}
              >
                <Image
                  width={500}
                  height={250}
                  src={itc.src}
                  alt="mediaspu-cli"
                ></Image>
              </a>
            </figure>
          </FadeInSection>
        )}

        {isShown && (
          <FadeInSection>
            <figure id="mywork" className="design">
              <a
                rel="noreferrer"
                href="https://testgit.xyz/letter/"
                target={"_blank"}
              >
                <Image
                  width={500}
                  height={250}
                  src={letter.src}
                  alt="mediaspu-cli"
                ></Image>
              </a>
            </figure>
          </FadeInSection>
        )}

        {isShown && (
          <FadeInSection>
            <figure id="mywork" className="design">
              <a
                rel="noreferrer"
                href="https://testgit.xyz/tech/"
                target={"_blank"}
              >
                <Image
                  width={500}
                  height={250}
                  src={tech.src}
                  alt="mediaspu-cli"
                ></Image>
              </a>
            </figure>
          </FadeInSection>
        )}
      </div>
    </Layout>
  );
}
