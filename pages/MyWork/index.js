import FadeInSection from "../../components/FadeInSection";
import wemet from "../../assets/imgs/wemet.png";
import mediasoup from "../../assets/imgs/mediasoup-cli.png";
import kadamatee from "../../assets/imgs/kadamatee.png";
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
          <figure>
            <h3>wemet.live</h3>
            <div>
              <Image src={wemet.src} alt="wemet.live"   width={372}
               height={192}></Image>
              <figcaption>
                <p>
                  An online video chat service that allows users to chat
                  globally and randomly without registration.
                </p>
                <p>
                  {" "}
                  <a
                    rel="noreferrer"
                    href="https://github.com/musta20/wemetServer"
                    target={"_blank"}
                  >
                    github.com/musta20/wemetServer
                  </a>
                </p>
                <p>
                  {" "}
                  <a
                    rel="noreferrer"
                    href="https://wemet.live"
                    target={"_blank"}
                  >
                    wemet.live
                  </a>
                </p>
              </figcaption>
            </div>
          </figure>
        </FadeInSection>
      )}
      {isShown && (
        <FadeInSection>
          <figure>
            <h3>kadamatee.com</h3>
            <div>
              <Image
                src={kadamatee.src}
                alt="kadamatee.com"
                width={372}
                height={192}
              ></Image>
              <figcaption>
                <p>
                  Kadamatee It is a marketplace program designed to provide the
                  public with online government services from multiple
                  providers.
                </p>
                <p>
                  <a
                    rel="noreferrer"
                    href="https://github.com/musta20/Services"
                    target={"_blank"}
                  >
                    github.com/musta20/Services
                  </a>
                </p>
                <p>
                  <a
                    rel="noreferrer"
                    href="https://kadamatee.com/"
                    target={"_blank"}
                  >
                    kadamatee.com
                  </a>
                </p>
              </figcaption>
            </div>
          </figure>
        </FadeInSection>
      )}
    </Layout>
  );
}
