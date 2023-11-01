import { Instructors, SectionResponse } from "@/constants/types";
import InstructorsCard from "../instructorsCard";

const InstructorWrapper = ({ detail }: { detail: SectionResponse<Instructors> }) => {
    return (
        <>
            {detail?.values?.map((instructor: Instructors) => {
                return (
                    <InstructorsCard key={instructor.slug} detail={instructor} />
                );
            })}</>
    );
};

export default InstructorWrapper;
