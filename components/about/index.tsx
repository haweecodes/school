import Description from "../description/product-description";

const CourseDetail = ({ detail }: any) => {
    return (
      <>
        <p>{detail.name}</p>
        {detail.values.map((instructor: any) => {
          return (
            <div
              key={instructor.text}
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
                <Description description={instructor.title}/>
              {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {instructor.text}
              </h5> */}
              <Description description={instructor.description}/>
            </div>
          );
        })}
      </>
    );
  };
  
  export default CourseDetail;
  