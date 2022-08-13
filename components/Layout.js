import Header from "./Header"
import Footer from "./Footer"

import Head from 'next/head'


export default function Layout (props){
return <>
<Head>
      <title>{props.title}</title>
</Head>
<Header></Header>
      <div className="container">

{props.children}
</div>
<Footer></Footer>
</>}