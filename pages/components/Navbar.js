import React from "react";
import Link from "next/link";
import Image from "next/image";

//Navbar becomes useless in next.js as layout can lead to ease of access
//Instead of including navbar in each page we can nest our pages in this layout
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={120} height={77} />
      </div>
      <Link href="/"> Home </Link>
      <Link href="/about"> About </Link>
      <Link href="/listing"> Listing </Link>
      <Link href="/dummy"> API Dummy </Link>
    </nav>
  );
};

export default Navbar;
