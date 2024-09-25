import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div className="flex items-center justify-center flex-col w-full h-screen">
            <p className="font-bold text-2xl">Error 404 page not found!</p>
            <Link to="/" className="text-blue-700 font-semibold mt-4 text-lg">Home</Link>
        </div>
    );
}