import React from "react";
import Top from "../../components/top/Top";
import Courses from "../../components/courses/Courses";
import "./home.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
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
    <div className="home">
      <Top />
      <Courses courses={courses} />
    </div>
  );
};

export default Home;
