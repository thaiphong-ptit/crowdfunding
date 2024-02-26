import Image from "next/image";
import React from "react";
import { Sue_Ellen_Francisco, Shippori_Mincho } from "next/font/google";
const sue_Ellen_Francisco = Sue_Ellen_Francisco({
  weight: "400",
  subsets: ["latin"],
});
const shippori_Mincho = Shippori_Mincho({
  weight: "800",
  subsets: ["latin"],
});

interface Props {
  imgURL: string;
  title: string;
  raised: Number;
  goal: Number;
  percent: Number;
}
export default function SingleEvent({
  imgURL,
  title,
  raised,
  goal,
  percent,
}: Props) {
  return (
    <div className="bg-white w-[440px] h-[695px]" key={Math.random()}>
      <div className="relative">
        <Image alt="event img" src={imgURL} width={437} height={387} />
        <div
          className={`${shippori_Mincho.className} absolute top-[10%] left-[5%] text-[25px] leading-[30px] w-[85px] h-[46px] text-primary-2 bg-white text-center flex justify-center items-center `}
        >
          <p>{`${percent}%`}</p>
        </div>
      </div>
      <div>
        <div className="w-[443px] px-[20px] py-[30px]">
          <p
            className={`${shippori_Mincho.className} text-[25px] leading-[30px] text-primary-3 `}
          >
            {title}
          </p>
          <div className="flex-start flex h-1.5 w-full overflow-hidden rounded-full bg-[#C5CECC] font-sans text-xs font-medium my-[20px]">
            <div
              className={`flex items-center justify-center h-full overflow-hidden text-white break-all bg-primary-2 rounded-full`}
              style={{ width: `${percent}%` }}
            ></div>
          </div>
          <div className="flex flex-row justify-between">
            <p
              className={`${shippori_Mincho.className} text-[20px] leading-[24px] text-primary-3 `}
            >
              {`Raised - ${raised} M`}
            </p>
            <p
              className={`${shippori_Mincho.className} text-[20px] leading-[24px] text-primary-2`}
            >
              {`Goal - $${goal} M`}
            </p>
          </div>
          <button className="uppercase bg-primary-3 text-white font-medium text-[18px] leading-5 w-[145px] h-[65px] rounded-[34px] mt-[50px]">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}