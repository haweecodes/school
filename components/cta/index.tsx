const CourseCTA = ({ content }: any) => {
  return (
    <div className="mb-3">
      <div className="inline-block my-2 text-2xl font-semibold">৳1000</div>
      <button type="button" className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{content.name}</button>
    </div>
  );
};

export default CourseCTA;
