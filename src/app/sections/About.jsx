"use client";
import React from "react";
import ContentWrapper from "../components/common/ContentWrapper";
import Image from "next/image";

import MotionAnimation from "../components/common/MotionAnimation";
import { getData } from "../../../services/api";

const About = async() => {
  const jsondata = await getData("/services");
  const data = jsondata?.data;
  return (
    <div className="about pt-24">
      <ContentWrapper>
        <div className="text-center text-titleColor text-4xl uppercase tracking-wider mb-10">
          What I do
        </div>
        <div className="text-center text-titleColor text-xl uppercase tracking-wider mb-10">
          CRAZY WEB DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
        </div>

        <div className="md:flex justify-between items-center">
          
          <MotionAnimation type="spring">
            <Image src="/images/About.webp" height={500} width={500} alt=""/>
          </MotionAnimation>

          

          <MotionAnimation type="Tween">
            <div className="content">
              <div className="text-center text-titleColor text-4xl uppercase tracking-wider mb-10 font-semibold">
                Web development
              </div>
              <div className="flex items-center justify-center flex-wrap gap-5">
                <Image
                  width={30}
                  height={30}
                  src="/icons/html.svg"
                  alt=""
                  className="hover:transform hover:scale-110 hover:transition-all hover:duration-300"
                />
                <Image
                  width={30}
                  height={30}
                  src="/icons/css.svg"
                  alt=""
                  className="hover:transform hover:scale-110 hover:transition-all hover:duration-300"
                />
                <Image
                  width={30}
                  height={30}
                  src="/icons/js.svg"
                  alt=""
                  className="hover:transform hover:scale-110 hover:transition-all hover:duration-300"
                />
                <Image
                  width={30}
                  height={30}
                  src="/icons/bootstrap.svg"
                  alt=""
                  className="hover:transform hover:scale-110 hover:transition-all hover:duration-300"
                />
                <Image
                  width={30}
                  height={30}
                  src="/icons/react.svg"
                  alt=""
                  className="hover:transform hover:scale-110 hover:transition-all hover:duration-300"
                />
                <Image
                  width={30}
                  height={30}
                  src="/icons/next.svg"
                  alt=""
                  className="hover:transform hover:scale-110 hover:transition-all hover:duration-300"
                />
                <Image
                  width={30}
                  height={30}
                  src="/icons/wordpress.svg"
                  alt=""
                  className="hover:transform hover:scale-110 hover:transition-all hover:duration-300"
                />
                <Image
                  width={30}
                  height={30}
                  src="/icons/strapi.svg"
                  alt=""
                  className="hover:transform hover:scale-110 hover:transition-all hover:duration-300"
                />
                <Image
                  width={30}
                  height={30}
                  src="/icons/redux.svg"
                  alt=""
                  className="hover:transform hover:scale-110 hover:transition-all hover:duration-300"
                />
                <Image
                  width={30}
                  height={30}
                  src="/icons/jquery.svg"
                  alt=""
                  className="hover:transform hover:scale-110 hover:transition-all hover:duration-300"
                />
                <Image
                  width={30}
                  height={30}
                  src="/icons/tailwind.svg"
                  alt=""
                  className="hover:transform hover:scale-110 hover:transition-all hover:duration-300"
                />
                <Image
                  width={30}
                  height={30}
                  src="/icons/sass.svg"
                  alt=""
                  className="hover:transform hover:scale-110 hover:transition-all hover:duration-300"
                />
              </div>
              {data?.map((item)=>(
                <div className="flex items-center gap-5 mt-5" key={item?.id}>
                  <Image src="/icons/bullet.svg" width={25} height={25} alt=""/>
                  <div className="text-start text-titleColor text-xl">
                    {item?.attributes?.description}
                  </div>
                </div>
              ))}
            </div>
          </MotionAnimation>

        </div>
      </ContentWrapper>
    </div>
  );
};

export default About;
