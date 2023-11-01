import RenderHTML from "../htmlRenderer";

const CourseSections = ({ title, children }: {
  title?: string,
  children: any
}) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-extrabold mb-5">{title}</h2>
      {children}
    </section>
  );
};

export default CourseSections;
