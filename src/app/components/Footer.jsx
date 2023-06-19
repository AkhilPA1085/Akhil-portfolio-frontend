import React from "react";
import ContentWrapper from "./common/ContentWrapper";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer pt-24 bg-bgColor mt-24 border-t-2">
      <ContentWrapper>
        <div className="flex items-center">
          <div className="content">
            <div className="title text-titleColor font-md text-4xl capitalize mb-5">
              Reach Out to me!
            </div>
            <div className="sub-title text-titleColor text-xl capitalize">
              discus a project or just want to say hi?
              <br />
              my inbox is open for all
            </div>
            <div className="flex items-center flex-wrap gap-5 my-5">
              <Link
                href="#"
                className="hover:transform hover:scale-110 hover:transition-all hover:duration-300"
              >
                <Image src="/icons/LinkedIn.svg" width={25} height={25} alt=""/>
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
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Footer;
