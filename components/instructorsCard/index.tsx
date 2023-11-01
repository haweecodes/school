import { Instructors } from "@/constants/types";
import RenderHTML from "../htmlRenderer";
import Image from "next/image";

const InstructorsCard = ({ detail }: { detail: Instructors }) => {
  return (
    <div key={detail.slug} className="flex items-center md:rounded-md md:border md:p-5">
      <Image width={95} height={95} className="rounded-full w-30 h-30 " src={detail.image} alt="" />
      <div className="ml-4 flex-1">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {detail.name}
        </h5>
        <RenderHTML htmlContent={detail.description} />
      </div>
    </div>
  );
};

export default InstructorsCard;
