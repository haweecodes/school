import { About } from "@/constants/types";
import RenderHTML from "../htmlRenderer";
import Collapsible from "../collapse";

const CourseDetail = ({ detail, index }: { detail: About, index: number }) => {
  return (
    <Collapsible title={<RenderHTML htmlContent={detail.title} />} content={<RenderHTML htmlContent={detail.description} />}  index={index}/>
  );
};

export default CourseDetail;
