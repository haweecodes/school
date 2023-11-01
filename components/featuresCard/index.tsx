import { Features } from "@/constants/types";
import Image from "next/image";

const FeaturesCard = ({ features }: { features: Features }) => {
  return (
    <div key={features.title} className=" m-1 flex flex-row items-start gap-3">
      <Image
        width={24}
        height={24}
        src={features.icon}
        alt={features.title}
      ></Image>
      <div className="flex flex-1 flex-col gap-2">
        <h5 className="text-[18px] font-[500px] leading-[26px] text-white ">
          {features.title}
        </h5>
        <p className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
          {features.subtitle}
        </p>
      </div>
    </div>
  );
};

export default FeaturesCard;
