import { HomeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";


export function Home() {
  return (
    <div>
      <HomeIcon className="h-6 w-6 text-blue-500" />
      <h1 className="text-3xl font-bold underline">Countries-and-Cities</h1>
      <Link to="/login">
      <button>Login</button>
      </Link>
      {" "}
      <Link to="/signup"><button>Sign up</button></Link>


    </div>
  );
}
