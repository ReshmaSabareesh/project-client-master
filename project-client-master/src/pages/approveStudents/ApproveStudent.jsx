import { useEffect, useState } from "react";
import "./approveStudent.css";
import axios from "axios";
export default function ApproveStudent() {
  const [students, setStudents] = useState([]);
  const [id, setId] = useState("");
  useEffect(() => {
    const fetchStudents = async () => {
      const res = await axios.get(
        "https://ictak-project.herokuapp.com/api/student/approve"
      );
      setStudents(res.data);
    };
    fetchStudents();
  }, [id]);

  const handleClick = (event) => {
    setId(event.target.value);
  };
  useEffect(() => {
    const approveStudent = async () => {
      if (id) {
        try {
          await axios.put(
            `https://ictak-project.herokuapp.com/api/student/approve/${id}`
          );
        } catch (err) {}
      }
      setId("00");
    };
    approveStudent();
  }, [id]);

  return (
    <div className="approveStudent">
      <h5>Approve Student</h5>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Qualification</th>
            <th>Pass out year</th>
            <th>ICTAK Course</th>
            <th>Place</th>

            <th>Employment Status</th>
            <th>Action</th>
          </tr>
          {students.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.qualification}</td>
              <td>{item.passOutYear}</td>
              <td>{item.course}</td>
              <td>{item.place}</td>

              <td>{item.employmentStatus}</td>
              <td>
                <button value={item._id} onClick={handleClick}>
                  Approve
                </button>
                <button>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
