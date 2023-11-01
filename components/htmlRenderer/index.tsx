import { RenderHTMLProps } from "@/constants/types";

const RenderHTML: React.FC<RenderHTMLProps> = (props) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: props.htmlContent }} />
  );
}

export default RenderHTML;
