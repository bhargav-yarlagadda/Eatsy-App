'use client'
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";  // Importing Image from next/image

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white shadow-md rounded-lg">
      <div className="flex items-center space-x-8">
        <Link href="/" className="text-2xl font-bold text-indigo-500 hover:text-indigo-400 transition-colors duration-300">
          Eatsy
        </Link>
        <Link href="/about" className="text-sm font-medium hover:text-indigo-300 transition-colors duration-300">
          About
        </Link>
        <Link href="/contact" className="text-sm font-medium hover:text-indigo-300 transition-colors duration-300">
          Contact
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        {session ? (
          <div className="flex items-center space-x-4">
            {/* Profile image using next/image */}

            <span className="text-sm text-white font-semibold">{`Welcome, ${session?.user?.name}`}</span>
            <Image
              src={session?.user?.image || "/default-profile.png"}  // Default profile image fallback
              alt="Profile"
              width={32}  // Width of the image
              height={32}  // Height of the image
              className="rounded-full border-2 border-gray-600"
            />
            <button
              onClick={() => signOut()}
              className="bg-gray-700 text-white py-1 px-4 rounded-md border border-gray-600 hover:bg-gray-600 transition-colors duration-300"
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
