"use client";
import React, { useEffect, useState } from "react";
import ContentWrapper from "../components/common/ContentWrapper";
import Image from "next/image";
import Link from "next/link";
import TypeWriter from "../components/common/TypeWriter";
import { getData } from "../../../services/api";

const Banner = async () => {
  const [staticText, setStaticText] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setStaticText(true);
    }, 2000);
  }, []);

  const jsondata = await getData("/banners?populate=*");
  const data = jsondata?.data;
  return (
    <div className="banner bg-bgColor md:h-screen w-full pt-24 relative">
      <ContentWrapper>
        {data?.map((item) => {
          const image = item?.attributes?.bannerImage?.data?.attributes?.url;
          return (
            <div
              className="md:flex justify-between items-center"
              key={item?.id}
            >
              <div className="content">
                <div className="flex items-center">
                  <div className="title font-bold text-titleColor text-4xl">
                    Hi all,
                  </div>
                  <div className="title font-bold text-titleColor text-4xl">
                    {staticText ? (
                      <TypeWriter string="I am Akhil" />
                    ) : (
                      "I am Akhil"
                    )}
                  </div>
                </div>
                <div className="title text-titleColor text-xl">
                  <TypeWriter string={item?.attributes?.bannerDesc} />
                </div>
                <div className="flex items-center gap-5 mt-5 mb-10">
                  <Link
                    href="#"
                    className="hover:transform hover:scale-110 hover:transition-all hover:duration-300"
                  >
                    <Image
                      src="/icons/LinkedIn.svg"
                      height={25}
                      width={25}
                      alt=""
                    />
                  </Link>
                  <Link
                    href="#"
                    className="hover:transform hover:scale-110 hover:transition-all hover:duration-300"
                  >
                    <Image
                      src="/icons/gitHub.svg"
                      height={25}
                      width={25}
                      alt=""
                    />
                  </Link>
                </div>
                <Link
                  href="https://docs.google.com/document/d/1CcdxRdPAtZp3jvGbONyDc0Q57lUYvjKjNN3eM_ZMRWY/edit?usp=sharing"
                  className="text-white font-bold capitalize bg-black py-3 px-5"
                >
                  See My Resume
                </Link>
              </div>
              <Image
                height={500}
                width={500}
                src={process.env.NEXT_PUBLIC_UPLOAD_URL + image}
                alt=""
              />
            </div>
          );
        })}
      </ContentWrapper>
      
    </div>
  );
};

export default Banner;
