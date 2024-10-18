import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title={'Mustafa Osman'}>
      <article className="md:p-12 font-sans   md:w-8/12  md:mx-auto   p-3 m-5 md:m-16 text-[#186F65]">
        <span 
        // className="HeadingMain text-6xl bg-gradient-to-r from-[#cc6666] to-[#33ccff] font-extrabold bg-clip-text text-transparent   "
        className=" text-7xl  bg-gradient-to-r from-[#219C90] via-[#B5CB99] to-[#EE9322] p-3 bg-clip-text text-transparent  font-bold "
        
        
        
        >Mustafa Osman</span>
        <p className="text-auto md:w-11/12 text-xl font-medium py-1">
          “I&apos;m a full stack developer with programming experience in building
          high performance web applications for small to midsize businesses .
        </p>

        <p className="text-auto md:w-11/12 text-lg py-1 ">
          Working with back-end technology :  laravel  , nodjs , docker , github , ci/cd , rest-api .
        </p>
        <p className="text-auto md:w-11/12 text-lg  py-1">
          Build front-end and ui using platforms like : react (remix , next) , livewire  , tailwind ,
          figma  .
        </p>
        <p> Manage and test the project from start to end.</p>
      </article>
    </Layout>
  );
}
