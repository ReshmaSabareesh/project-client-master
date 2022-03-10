import Course from "../course/Course";
import "./courses.css";

function Courses({ courses }) {
  return (
    <>
      <h2>Courses</h2>
      <div className="courses">
        {courses.map((c, key) => (
          <Course key={key} course={c} />
        ))}
      </div>
    </>
  );
}

export default Courses;
