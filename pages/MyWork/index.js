import FadeInSection from "../../components/FadeInSection";
import { work } from '../../data/projects.json';
import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function MyWork() {
  return (
    <Layout title={"Mustafa Osman : My Work"}>
      {work.map((project, index) => (
        <FadeInSection key={index}>
          <figure className="p-12 m-12 border-[#186F65] mx-auto w-4/6 bg-[#eff1f0] rounded-mdd shadow-sm hover:shadow-md transition">
            <div className="flex flex-col lg:flex-row gap-5 place-items-center">
              <div>
                <h3 className="text-3xl font-bold p-1 text-[#186F65]">
                  {project.title}
                </h3>
                <Image
                  width={372}
                  height={192}
                  src={project.image.src}
                  alt={project.title}
                />
              </div>
              <figcaption className="border-2 bg-gray-50 rounded-mdd p-6">
                <p className="text-lg text-[#186F65] py-1">
                  {project.description}
                </p>
                {project.links.map((link, linkIndex) => (
                  <p key={linkIndex}>
                    <Link
                      lagacyBehavior
                      className="text-[#50d8c8] font-bold hover:underline"
                      rel="noreferrer"
                      href={link.url}
                      target="_blank"
                    >
                      {link.text}
                    </Link>
                  </p>
                ))}
                {project.login && (
                  <>
                    <p className="font-bold my-2">Login Credentials:</p>
                    <p>Username: {project.login.username}</p>
                    <p>Password: {project.login.password}</p>
                  </>
                )}
              </figcaption>
            </div>
          </figure>
        </FadeInSection>
      ))}
    </Layout>
  );
}
