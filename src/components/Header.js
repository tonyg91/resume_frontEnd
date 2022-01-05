import {Link} from "react-router-dom"

function Header(props){

    return (
    <>
    <header>
        <h1>Anthony Gonzales' Portfolio </h1>
    </header>
    <nav>
         <Link to="/">
          <div><h1>Home</h1></div>
         </Link>
         <h1>|</h1>
         <Link to="/about">
          <div><h1>About</h1></div>
         </Link>
         <h1>|</h1>
         <Link to="/projects">
          <div><h1>Projects</h1></div>
         </Link>
        </nav>
    </>
    )
}
export default Header