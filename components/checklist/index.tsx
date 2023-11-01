import { Pointers } from "@/constants/types";
import Image from "next/image";

const CourseChecklist = ({ checklist }: { checklist: Pointers[] }) => {
  return (
    <>
      {checklist.map((checkers: any) => {
        return (
          <div
            key={checkers.text}
            className="mb-3 flex items-center leading-5"
          >
            <div className="inline-block h-[20px] w-[20px] transition-opacity duration-300 ease-in-out">
              <Image width={24} height={24} className="rounded-full w-30 h-30 " src={checkers.icon} alt="saf" />
            </div>

            <h5 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
              {checkers.text}
            </h5>
          </div>
        );
      })}
    </>
  );
};

export default CourseChecklist;
