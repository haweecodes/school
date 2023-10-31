const CourseFeatures = ({ features }: any) => {
  return (
    <>
      <p>{features.name}</p>
      {features.values.map((instructor: any) => {
        return (
          <div
            key={instructor.title}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {instructor.title}
            </h5>
          </div>
        );
      })}
    </>
  );
};

export default CourseFeatures;
