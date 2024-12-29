"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { useRef, useState } from "react";

const Navbar = () => {
  const { data: session } = useSession();
  const searchInputRef = useRef<any>(null); // Ref for the input field
  const [searchQuery, setSearchQuery] = useState(""); // State for storing the search value

  const handleSearch = () => {
    if (searchInputRef.current) {
      setSearchQuery(searchInputRef.current.value); // Update the state with the input value
      console.log("Search Query:", searchInputRef.current.value); // For debugging
    }
  };

  return (
    <nav className="flex rounded-t-none items-center justify-between p-4 bg-blue-950 text-white shadow-md rounded-lg">
      <div className="flex gap-2 items-center ">
        <Link
          href="/"
          className="text-md md:text-2xl font-bold text-indigo-500 hover:text-indigo-400 transition-colors duration-300"
        >
          Eatsy
        </Link>
        
        <Link
          href="/home"
          className="text-sm md:text-xl font-normal mx-2 hover:text-blue-500 text-white transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          href="/favorite"
          className="text-sm  md:text-xl font-normal mx-2 hover:text-blue-500 text-white transition-colors duration-300"
        >
          Favorite
        </Link>
      </div>

      <div className="flex  items-center">
        {session ? (
          <div className="flex items-center ">
            <div className="flex items-center justify-center gap-3">
              <input
                type="text"
                ref={searchInputRef} // Attach ref to the input field
                placeholder="Search..."
                className="rounded-md border w-2/3  md:w-full border-gray-300  text-black px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <IoIosSearch
                className="md:w-8 md:h-8 h-6 w-6 cursor-pointer text-white hover:text-blue-500 transition-colors"
                onClick={handleSearch} // Call handleSearch on icon click
              />
            </div>

            <div className="flex items-center justify-center gap-2">
              <Image
                src={session?.user?.image || "/default-profile.png"} // Default profile image fallback
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full border-2 border-gray-600"
              />
              <span className="text-sm hidden md:block text-white font-semibold">{`Welcome, ${
                session?.user?.name || "user"
              }`}</span>
            </div>
            <button
              onClick={() => signOut()}
              className="bg-gray-700 mx-2 text-white text-xs md:text-sm  py-1 px-2 md:px-4 rounded-md border border-gray-600 hover:bg-gray-600 transition-colors duration-300"
            >
              Sign Out
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Navbar;
