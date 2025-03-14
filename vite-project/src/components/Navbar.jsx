import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full backdrop-blur-md bg-white/10 text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MMA Zone</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          ☰
        </button>
        <ul
          className={`md:flex md:space-x-6 absolute md:static top-14 left-0 w-full bg-black md:bg-transparent ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="p-2"><Link to="/">Home</Link></li>
          <li className="p-2"><Link to="/fighters">Fighters</Link></li>
          <li className="p-2"><Link to="/events">Events</Link></li>
          <li className="p-2"><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
