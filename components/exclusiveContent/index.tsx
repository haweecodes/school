import { ExclusiveFeatures } from "@/constants/types";
import Image from "next/image";

const CourseExclusiveFeatures = ({ features }: { features: ExclusiveFeatures }) => {
  return (
    <div className="flex flex-col items-start justify-between gap-3 py-5 md:flex-row">
      <div>
        <ul>
          {features.checklist.map((value: string) => <li key={value} className="max-w-md space-y-1 py-2  text-gray-500 list-disc list-inside dark:text-gray-400">
            {value}
          </li>)}
        </ul>
      </div>
      <div className="mb-4 max-w-[350px] transition-opacity duration-300 ease-in-out">
        <Image src={features.file_url} alt={features.title} width={250} height={250}></Image>
      </div>
    </div>
  );
};

export default CourseExclusiveFeatures;
