import React, { useEffect, useState } from "react";
import Courses from "../../components/courses/Courses";
import axios from "axios";
import "./viewCourses.css";

export default function ViewCourses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      const res = await axios.get(
        "https://ictak-project.herokuapp.com/api/course/"
      );
      setCourses(res.data);
    };
    fetchCourses();
  });
  return (
    <div className="viewCourses">
      <div className="inner">
        <Courses courses={courses} />
      </div>
    </div>
  );
}
