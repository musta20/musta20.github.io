import Header from "./Header"
import Footer from "./Footer"



export default function Layout (props){
return <><Header></Header>
      <div className="container">

{props.children}
</div>
<Footer></Footer>
</>}