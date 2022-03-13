import "./search.css";
import { useEffect, useState } from "react";

import axios from "axios";
import Table from "../../components/table/Table";

export default function Search() {
  const [students, setStudents] = useState([]);
  const [query, setQuery] = useState("");
  // const keys = [
  //   "name",
  //   "qualification",
  //   "passOutYear",
  //   "course",
  //   "place",
  //   "exitExamMark",
  //   "EmploymentStatus",
  // ];

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await axios.get(
        "https://ictak-project.herokuapp.com/api/student/all"
      );
      setStudents(res.data);
    };
    fetchStudents();
  }, []);

  const search = (data) => {
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.qualification.toLowerCase().includes(query) ||
        item.course.toLowerCase().includes(query) ||
        item.exitExamMark.includes(query) ||
        item.passOutYear.includes(query) ||
        item.place.toLowerCase().includes(query) ||
        item.employmentStatus.toLowerCase().startsWith(query)
    );
  };
  return (
    <div className="searchmain">
      <input
        type="text"
        placeholder="Search"
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <span></span>
      <Table data={search(students)} />
    </div>
  );
}
