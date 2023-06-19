import React from "react";
import ContentWrapper from "./common/ContentWrapper";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="header fixed top-0 left-0 w-full bg-white shadow py-5 z-10">
      <ContentWrapper>
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="brand font-bold capitalize text-3xl text-titleColor"
          >
            nav
          </Link>
          <div className="social-links flex items-center justify-between gap-5">
            <Link
              href="#"
              className="hover:transform hover:scale-110 hover:transition-all hover:duration-300"
            >
              <Image src="/icons/LinkedIn.svg" height={25} width={25} alt=""/>
            </Link>
            <Link
              href="#"
              className="hover:transform hover:scale-110 hover:transition-all hover:duration-300"
            >
              <Image src="/icons/gitHub.svg" height={25} width={25} alt=""/>
            </Link>
            <Link
              href="#"
              className="hover:transform hover:scale-110 hover:transition-all hover:duration-300"
            >
              <Image src="/icons/whatsapp.svg" width={25} height={25} alt=""/>
            </Link>
            <Link
              href="#"
              className="hover:transform hover:scale-110 hover:transition-all hover:duration-300"
            >
              <Image src="/icons/email.svg" width={25} height={25} alt=""/>
            </Link>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Navbar;
