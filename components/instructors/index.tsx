import React from "react";
import Description from "../description/product-description";

const CourseInstructors = ({ detail }: any) => {
  return (
    <>
      <p>{detail.name}</p>
      {detail.values.map((instructor: any) => {
        return (
          <div key={instructor.slug} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {instructor.name}
            </h5>
            <Description description={instructor.description} />
          </div>
        );
      })}
    </>
  );
};

export default CourseInstructors;
