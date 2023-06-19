import Image from "next/image";
import Link from "next/link";
import MotionAnimation from "./common/MotionAnimation";

const Card = ({ data }) => {
  const image = data?.attributes?.image?.data?.attributes?.url;
  return (
    <MotionAnimation type="Tween">
      <div className="h-full flex flex-col items-center justify-between shadow">
        <Image
          src={process.env.NEXT_PUBLIC_UPLOAD_URL + image}
          height={200}
          width={200}
          alt=""
          className="w-full"
        />
        <div className="body p-5 flex flex-col">
          <Link
            href={`/projects/${data?.id}`}
            className="title font-bold capitalize text-titleColor text-center pb-10"
          >
            {data?.attributes?.title}
          </Link>
          {/* <div className="desc mt-2 mb-5 text-blue">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            aspernatur sed? Ipsa?
          </div> */}
          <div className="bottom mt-auto md:flex items-center gap-5">
            {data?.attributes?.gitUrl && (
              <Link
                href={data?.attributes?.gitUrl}
                className="text-black font-bold capitalize bg-white h-12 w-12 shadow rounded-full flex justify-center items-center"
              >
                <Image
                  src="/icons/gitHub-black.svg"
                  width={25}
                  height={25}
                  alt=""
                />
              </Link>
            )}

            {data?.attributes?.siteUrl && (
              <Link
                href={data?.attributes?.siteUrl}
                className="text-titleColor font-bold capitalize bg-white py-3 px-5 shadow"
              >
                view page
              </Link>
            )}
          </div>
        </div>
      </div>
    </MotionAnimation>
  );
};

export default Card;
