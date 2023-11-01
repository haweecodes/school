import { Pointers, SectionResponse } from "@/constants/types";

const CoursePointers = ({ detail }: { detail: SectionResponse<Pointers> }) => {
  return (
    <>
      <ul>
        {detail?.values?.map((pointers: Pointers) => {
          return (
            <li key={pointers.text} className="max-w space-y-1 py-2 text-gray-500 list-disc list-inside dark:text-gray-400">
              {pointers.text}
            </li>
          );
        })}
      </ul>

    </>
  );
};

export default CoursePointers;
