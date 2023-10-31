const CourseTrailer = ({ content }: any) => {
  return (
    <video width="320" height="240" controls>
      <source src={content.download_link} type="video/mp4" />
    </video>
  );
};

export default CourseTrailer;
