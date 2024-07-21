import FadeInSection from "../../components/FadeInSection";
import mediasoup from "../../assets/imgs/mediasoup-cli.png";
import smt from "../../assets/imgs/smt.png";
import lrf from "../../assets/imgs/laravel-record-filter.png";
import mybnb from "../../assets/imgs/mybnb.png";
import asset from "../../assets/imgs/asset.png";
import base from "../../assets/imgs/baseproject.png";
 
import { useState } from "react";
import Layout from "../../components/Layout";
import Image from "next/image";

export default function MyWork() {
  const [isShown, setIsShown] = useState(true);

  return (
    <Layout title={"Mustafa Osman : My Work"}>
      {isShown && (
        <FadeInSection>
          <figure id="mywork">
            <h3>Mediasoup-cli</h3>
            <div>
              <Image
               width={372}
               height={192}
                src={mediasoup.src}
                alt="mediaspu-cli"
              ></Image>

              <figcaption>
                <p>
                  JavaScript cli tool for monitoring mediasoup server
                  applications.
                </p>
                <p>
                  <a
                    rel="noreferrer"
                    href="https://github.com/musta20/mediasoup-cli"
                    target={"_blank"}
                  >
                    github.com/musta20/mediasoup-cli
                  </a>
                </p>

                <a
                  rel="noreferrer"
                  href="https://www.npmjs.com/package/mediasoup-cli"
                  target={"_blank"}
                >
                  npmjs.com/package/mediasoup-cli
                </a>
              </figcaption>
            </div>
          </figure>
        </FadeInSection>
      )}

{isShown && (
        <FadeInSection>
          <figure id="mywork">
            <h3>laravel records filter</h3>
            <div>
              <Image
               width={372}
               height={192}
                src={lrf.src}
                alt="laravel-records-filter"
              ></Image>

              <figcaption>
                <p>
                  laravle package for filtering and sorting records in laravel
                  applications.
                </p>
                <p>
                  <a
                    rel="noreferrer"
                    href="https://github.com/musta20/laravel-records-filter"
                    target={"_blank"}
                  >
                    github.com/musta20/laravel-records-filter
                  </a>
                </p>

                <a
                  rel="noreferrer"
                  href="https://packagist.org/packages/musta20/laravel-records-filter"
                  target={"_blank"}
                >
                  packagist.org/packages/musta20/laravel-records-filter
                </a>
              </figcaption>
            </div>
          </figure>
        </FadeInSection>
      )}


{isShown && (
        <FadeInSection>
          <figure id="mywork">
            <h3>matajer</h3>
            <div>
              <Image
               width={372}
               height={192}
                src={smt.src}
                alt="laravel-records-filter"
              ></Image>

              <figcaption>
                <p>
                  matajer is eCommerce platform for create small business online store.
                </p>
                <p>
                  <a
                    rel="noreferrer"
                    href="https://github.com/musta20/smt"
                    target={"_blank"}
                  >
                    github.com/musta20/smt
                  </a>
                </p>

                <a
                  rel="noreferrer"
                  href="https://9802131.xyz/"
                  target={"_blank"}
                >
                  9802131.xyz/
                </a>
              </figcaption>
            </div>
          </figure>
        </FadeInSection>
      )}


{isShown && (
        <FadeInSection>
          <figure id="mywork">
            <h3>mybnb</h3>
            <div>
              <Image
               width={372}
               height={192}
                src={mybnb.src}
                alt="mybnb"
              ></Image>

              <figcaption>
                <p>
                  mybnb is a booking platform similar to airbnb.
                </p>
                <p>
                  <a
                    rel="noreferrer"
                    href="https://github.com/musta20/mybnb"
                    target={"_blank"}
                  >
                    github.com/musta20/mybnb
                  </a>
                </p>

                <a
                  rel="noreferrer"
                  href="http://mybnb.testgit.xyz/"
                  target={"_blank"}
                >
                 mybnb.testgit.xyz
                </a>
              </figcaption>
            </div>
          </figure>
        </FadeInSection>
      )}



{isShown && (
        <FadeInSection>
          <figure id="mywork">
            <h3>assets mangment system</h3>
            <div>
              <Image
               width={372}
               height={192}
                src={asset.src}
                alt="mybnb"
              ></Image>

              <figcaption>
                <p>
                  Assets mangment system build using filamentphp.
                </p>
                <p>
                  <a
                    rel="noreferrer"
                    href="https://github.com/musta20/assets_management_laravel"
                    target={"_blank"}
                  >
                   github.com/musta20/assets_management_laravel
                  </a>
                </p>

                <a
                  rel="noreferrer"
                  href="http://asset.testgit.xyz/"
                  target={"_blank"}
                >
                 asset.testgit.xyz
                </a>
              </figcaption>
            </div>
          </figure>
        </FadeInSection>
      )}


{isShown && (
        <FadeInSection>
          <figure id="mywork">
            <h3>cms</h3>
            <div>
              <Image
               width={372}
               height={192}
                src={base.src}
                alt="mybnb"
              ></Image>

              <figcaption>
                <p>
                  baceproject is cms based on laravel.
                </p>
                <p>
                  <a
                    rel="noreferrer"
                    href="https://github.com/musta20/baseProject"
                    target={"_blank"}
                  >
                   github.com/musta20/baseProject
                  </a>
                </p>

                <a
                  rel="noreferrer"
                  href="http://baseproject.testgit.xyz/"
                  target={"_blank"}
                >
                 baseproject.testgit.xyz
                </a>
              </figcaption>
            </div>
          </figure>
        </FadeInSection>
      )}



    </Layout>
  );
}
