import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title={'Mustafa Osman'}>
      <article className="md:p-12   p-1 m-5 md:m-16 text-[#186F65]">
        <span 
        // className="HeadingMain text-6xl bg-gradient-to-r from-[#cc6666] to-[#33ccff] font-extrabold bg-clip-text text-transparent   "
        className=" text-6xl          bg-gradient-to-r from-[#219C90] via-[#B5CB99] to-[#EE9322] p-3 bg-clip-text text-transparent  font-bold 
"
        
        
        
        >Mustafa Osman</span>
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
