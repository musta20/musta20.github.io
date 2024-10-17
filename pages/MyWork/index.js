import FadeInSection from "../../components/FadeInSection";
import mediasoup from "../../assets/imgs/mediasoup-cli.png";
import smt from "../../assets/imgs/smt.png";
import lrf from "../../assets/imgs/laravel-record-filter.png";
import mybnb from "../../assets/imgs/mybnb.png";
import asset from "../../assets/imgs/asset.png";
import base from "../../assets/imgs/baseproject.png";
import wemet from "../../assets/imgs/wemet-des.png";
import nearme from "../../assets/imgs/nearme-des.png";

import { useState } from "react";
import Layout from "../../components/Layout";
import Image from "next/image";

export default function MyWork() {
  const [isShown, setIsShown] = useState(true);

  return (
    <Layout title={"Mustafa Osman : My Work"}>
      {isShown && (
        <FadeInSection>
          <figure className="p-12 m-12 border-[#186F65]   mx-auto w-4/6 bg-[#eff1f0]    rounded-mdd shadow-sm hover:shadow-md transition">
            <div className="flex flex-col lg:flex-row gap-5 place-items-center">
              <div>
                <h3 className="text-3xl font-bold p-1  text-[#186F65]">
                  Mediasoup-cli
                </h3>

                <Image
                  width={372}
                  height={192}
                  src={mediasoup.src}
                  alt="mediaspu-cli"
                ></Image>
              </div>

              <figcaption className=" border-2 bg-gray-50   rounded-mdd p-6">
                <p className="text-lg text-[#186F65] py-1">
                  JavaScript cli tool for monitoring mediasoup server
                  applications.
                </p>
                <p>
                  <a
                  className="text-[#50d8c8] font-bold hover:underline"
                  rel="noreferrer"
                    href="https://github.com/musta20/mediasoup-cli"
                    target={"_blank"}
                  >
                    github.com/musta20/mediasoup-cli
                  </a>
                </p>

                <a
                  className="text-[#50d8c8] font-bold hover:underline"
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
          <figure className="p-12 m-12 border-[#186F65]   mx-auto w-4/6 bg-[#eff1f0]    rounded-mdd shadow-sm hover:shadow-md transition">
          <div className="flex flex-col lg:flex-row gap-5 place-items-center">
              <div>
                <h3 className="text-3xl font-bold p-1  text-[#186F65]">
                  laravel records filter
                </h3>
                <Image
                  width={372}
                  height={192}
                  src={lrf.src}
                  alt="laravel-records-filter"
                ></Image>
              </div>
              <figcaption className=" border-2 bg-gray-50   rounded-mdd p-6">
                <p className="text-lg text-[#186F65] py-1 ">
                  laravle package for filtering and sorting records in laravel
                  applications.
                </p>
                <p>
                  <a
                  className="text-[#50d8c8] font-bold hover:underline"
                  rel="noreferrer"
                    href="https://github.com/musta20/laravel-records-filter"
                    target={"_blank"}
                  >
                    github.com/musta20/laravel-records-filter
                  </a>
                </p>

                <a
                  className="text-[#50d8c8] font-bold hover:underline"
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
          <figure className="p-12 m-12 border-[#186F65]   mx-auto w-4/6 bg-[#eff1f0]    rounded-mdd shadow-sm hover:shadow-md transition">
          <div className="flex flex-col lg:flex-row gap-5 place-items-center">
              <div>
                <h3 className="text-3xl font-bold p-1  text-[#186F65]">
                  wemet.live
                </h3>

                <Image
                  width={372}
                  height={192}
                  src={wemet.src}
                  alt="wemet.live"
                ></Image>
              </div>
              <figcaption className=" border-2 bg-gray-50   rounded-mdd p-6">
                <p className="text-lg text-[#136a86] py-1">
                Wemet is online video chat using mediasoup for random users.
                </p>
                <p>
                  <a
                  className="text-[#50d8c8] font-bold hover:underline"
                  rel="noreferrer"
                    href="https://github.com/musta20/wemetServer"
                    target={"_blank"}
                  >
                    https://github.com/musta20/wemetServer
                  </a>
                </p>

                <a
                  className="text-[#50d8c8] font-bold hover:underline"
                  rel="noreferrer"
                  href="https://wemet.live/"
                  target={"_blank"}
                >
                  https://wemet.live
                </a>
                
              </figcaption>
            </div>
          </figure>
        </FadeInSection>
      )}


{isShown && (
        <FadeInSection>
          <figure className="p-12  m-12 border-[#186F65]   mx-auto w-4/6 bg-[#eff1f0]    rounded-mdd shadow-sm hover:shadow-md transition">
          <div className="flex flex-col lg:flex-row gap-5 place-items-center">
              <div>
                <h3 className="text-3xl font-bold p-1  text-[#186F65]">
                  NearMe
                </h3>

                <Image
                  width={372}
                  height={192}
                  src={nearme.src}
                  alt="laravel-records-filter"
                ></Image>
              </div>
              <figcaption className=" border-2 bg-gray-50   rounded-mdd p-6">
                <p className="text-lg text-[#136a86] py-1">
                A web app to find a specific product close to you. using maps its search your area. this is still in development.
                
                </p>
                <p>
                  <a
                  className="text-[#50d8c8] font-bold hover:underline"
                  rel="noreferrer"
                    href="https://github.com/musta20/NearMe"
                    target={"_blank"}
                  >
                   github.com/musta20/NearMe
                  </a>
                </p>

                <a
                  className="text-[#50d8c8] font-bold hover:underline"
                  rel="noreferrer"
                  href="https://9802131.xyz/"
                  target={"_blank"}
                >
                  nearme.testgit.xyz
                </a>
                <p className="font-bold my-2">Login Credentials:</p>
                <p>
                  login url :{" "}
                  <a
                  className="text-[#50d8c8] font-bold hover:underline"
                  href="https://nearme.testgit.xyz/login"
                  >
                    https://nearme.testgit.xyz/login
                  </a>
                </p>
                <p>username : admin@admin</p>
                <p>password : Aa123456</p>
              </figcaption>
            </div>
          </figure>
        </FadeInSection>
      )}


      {isShown && (
        <FadeInSection>
          <figure className="p-12 m-12 border-[#186F65]   mx-auto w-4/6 bg-[#eff1f0]    rounded-mdd shadow-sm hover:shadow-md transition">
          <div className="flex flex-col lg:flex-row gap-5 place-items-center">
              <div>
                <h3 className="text-3xl font-bold p-1  text-[#186F65]">
                  matajer
                </h3>

                <Image
                  width={372}
                  height={192}
                  src={smt.src}
                  alt="laravel-records-filter"
                ></Image>
              </div>
              <figcaption className=" border-2 bg-gray-50   rounded-mdd p-6">
                <p className="text-lg text-[#136a86] py-1">
                  matajer is eCommerce platform for create small business online
                  store.
                </p>
                <p>
                  <a
                  className="text-[#50d8c8] font-bold hover:underline"
                  rel="noreferrer"
                    href="https://github.com/musta20/smt"
                    target={"_blank"}
                  >
                    github.com/musta20/smt
                  </a>
                </p>

                <a
                  className="text-[#50d8c8] font-bold hover:underline"
                  rel="noreferrer"
                  href="https://9802131.xyz/"
                  target={"_blank"}
                >
                  9802131.xyz/
                </a>
                <p className="font-bold my-2">Login Credentials:</p>
                <p>
                  login url :{" "}
                  <a
                  className="text-[#50d8c8] font-bold hover:underline"
                  href="https://musta.9802131.xyz/login"
                  >
                    https://musta.9802131.xyz/login
                  </a>
                </p>
                <p>username : musta@musta.com</p>
                <p>password : 1234</p>
              </figcaption>
            </div>
          </figure>
        </FadeInSection>
      )}

      {isShown && (
        <FadeInSection>
          <figure className="p-12 m-12 border-[#186F65]   mx-auto w-4/6 bg-[#eff1f0]    rounded-mdd shadow-sm hover:shadow-md transition">
          <div className="flex flex-col lg:flex-row gap-5 place-items-center">
              <div>
                <h3 className="text-3xl font-bold p-1  text-[#186F65]">
                  mybnb
                </h3>

                <Image
                  width={372}
                  height={192}
                  src={mybnb.src}
                  alt="mybnb"
                ></Image>
              </div>
              <figcaption className=" border-2 bg-gray-50   rounded-mdd p-6">
                <p className="text-lg text-[#136a86] py-1">
                  mybnb is a booking platform similar to airbnb.
                </p>
                <p>
                  <a
                  className="text-[#50d8c8] font-bold hover:underline"
                  rel="noreferrer"
                    href="https://github.com/musta20/mybnb"
                    target={"_blank"}
                  >
                    github.com/musta20/mybnb
                  </a>
                </p>

                <a
                  className="text-[#50d8c8] font-bold hover:underline"
                  rel="noreferrer"
                  href="http://mybnb.testgit.xyz/"
                  target={"_blank"}
                >
                  mybnb.testgit.xyz
                </a>
                <p className="font-bold my-2">Login Credentials:</p>
                <p>Username: admin@admin.com</p>
                <p>Password: password</p>
              </figcaption>
            </div>
          </figure>
        </FadeInSection>
      )}

      {isShown && (
        <FadeInSection>
          <figure className="p-12 m-12 border-[#186F65]   mx-auto w-4/6 bg-[#eff1f0]    rounded-mdd shadow-sm hover:shadow-md transition">
          <div className="flex flex-col lg:flex-row gap-5 place-items-center">
              <div>
                <h3 className="text-3xl font-bold p-1  text-[#186F65]">
                  assets mangment system
                </h3>
                <Image
                  width={372}
                  height={192}
                  src={asset.src}
                  alt="mybnb"
                ></Image>
              </div>
              <figcaption className="  border-2 bg-gray-50   rounded-mdd p-6">
                <p className="text-lg text-[#136a86] py-1">
                  Assets mangment system build using filamentphp.
                </p>
                <p className="text-center">
                  <a
                  className="text-[#50d8c8] font-bold hover:underline"
                  rel="noreferrer"
                    href="https://github.com/musta20/assets_management_laravel"
                    target={"_blank"}
                  >
                    github.com/musta20/
                    assets_management_laravel
                  </a>
                </p>

                <a
                  className="text-[#50d8c8] font-bold hover:underline"
                  rel="noreferrer"
                  href="http://asset.testgit.xyz/"
                  target={"_blank"}
                >
                  asset.testgit.xyz
                </a>
                <p className="font-bold my-2">Login Credentials:</p>
                <p>
                  login url :{" "}
                  <a
                                    target={"_blank"}

                  className="text-[#50d8c8] font-bold hover:underline"
                  href="https://asset.testgit.xyz/admin/login"
                  >
                    https://asset.testgit.xyz/admin/login
                  </a>
                </p>
                <p>Username: admin@admin.com</p>
                <p>Password: admin</p>
              </figcaption>
            </div>
          </figure>
        </FadeInSection>
      )}

      {isShown && (
        <FadeInSection>
          <figure className="p-12 m-12 border-[#186F65]   mx-auto w-4/6 bg-[#eff1f0]    rounded-mdd shadow-sm hover:shadow-md transition">
          <div className="flex flex-col lg:flex-row gap-5 place-items-center">
              <div>
                <h3 className="text-3xl font-bold p-1  text-[#186F65]">cms</h3>

                <Image
                  width={372}
                  height={192}
                  src={base.src}
                  alt="mybnb"
                ></Image>
              </div>
              <figcaption className=" border-2 bg-gray-50   rounded-mdd p-6">
                <p className="text-lg text-[#136a86] py-1">
                  baceproject is cms based on laravel.
                </p>
                <p>
                  <a
                  className="text-[#50d8c8] font-bold hover:underline"
                  rel="noreferrer"
                    href="https://github.com/musta20/baseProject"
                    target={"_blank"}
                  >
                    github.com/musta20/baseProject
                  </a>
                </p>

                <a
                  className="text-[#50d8c8] font-bold hover:underline"
                  rel="noreferrer"
                  href="http://baseproject.testgit.xyz/"
                  target={"_blank"}
                >
                  baseproject.testgit.xyz
                </a>
                <p className="font-bold my-2">Login Credentials:</p>
                <p>
                  login url :{" "}
                  <a
                  className="text-[#50d8c8] font-bold hover:underline"
                  href="https://baseproject.testgit.xyz/login"
                  >
                    https://baseproject.testgit.xyz/login
                  </a>
                </p>
                <p>Username: admin@admin.com</p>
                <p>Password: admin</p>
              </figcaption>
            </div>
          </figure>
        </FadeInSection>
      )}
    </Layout>
  );
}
