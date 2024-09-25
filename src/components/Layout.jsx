import { Link } from "react-router-dom";

const Layout = ({children}) =>{
    return(
        <div className="pt-3 mx-5">
            <nav className="flex gap-3 mb-3">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/register">Sign Up</Link>
            </nav>
            {children}
            <footer className="absolute bottom-0 w-full">
                <p>This is the footeer</p>
            </footer>
        </div>
    );
}

export default Layout;