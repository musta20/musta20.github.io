import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title={'Mustafa Osman'}>
      <article className="md:p-12 p-1 m-5 md:m-12 text-[#29a9d4]">
        <span className="HeadingMain text-6xl bg-gradient-to-r from-[#cc6666] to-[#33ccff] font-extrabold bg-clip-text text-transparent   ">Mustafa Osman</span>
        <p className="text-auto md:w-11/12 text-lg  py-1">
          “I&apos;m a full stack developer with programming experience in building
          high performance web applications for small to midsize businesses .
        </p>

        <p className="text-auto md:w-11/12 text-lg py-1 ">
          Working with back-end technology : laravel , livewire , rest-api ,
          expressjs.
        </p>
        <p className="text-auto md:w-11/12 text-lg  py-1">
          Build a ui using platforms like : livewire , remix , tailwind ,
          chakra-ui , css , html .
        </p>
        <p> Manage and test the project from start to end.</p>
      </article>
    </Layout>
  );
}
