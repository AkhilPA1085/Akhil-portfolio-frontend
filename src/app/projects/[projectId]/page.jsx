import React from "react";
import { getData } from "../../../../services/api";
import ContentWrapper from "@/app/components/common/ContentWrapper";
import Image from "next/image";
import Link from "next/link";

const Project = async ({ params: { projectId } }) => {
  const jsondata = await getData(`/projects/${projectId}`);
  const data = jsondata?.data;
  return (
    <div className="single-project pt-24">
      <ContentWrapper>
        <div className="flex items-center">
          <Image width={500} height={500} src="" alt="project-img" />
          <div className="content">
            <div className="font-bold text-4xl text-titleColor capitalize mb-10">
              {data?.attributes?.title}
            </div>

            <div className="text-titleColor text-xl mb-10 flex flex-wrap">
              {data?.attributes?.description}
            </div>

            <div className="bottom mt-auto md:flex items-center gap-5">
              <Link
                href="#"
                className="text-black font-bold capitalize bg-white h-12 w-12 shadow rounded-full flex justify-center items-center"
              >
                <Image
                  src="/icons/gitHub-black.svg"
                  width={25}
                  height={25}
                  alt=""
                />
              </Link>
              <Link
                href="#"
                className="text-titleColor font-bold capitalize bg-white py-3 px-5 shadow"
              >
                view page
              </Link>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Project;
