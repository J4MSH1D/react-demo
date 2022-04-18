import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-2 px-5 flex items-center justify-between">
      <div>Navbar</div>
      <div className="flex flex-row">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div className="mx-4">
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}
