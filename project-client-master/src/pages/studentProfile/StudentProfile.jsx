import "./studentProfile.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
// import { Context } from "../../context/Context";

export default function StudentProfile() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [student, setStudent] = useState({});
  const PF = "https://ictak-project.herokuapp.com/images/";
  //   const { user } = useContext(Context);
  const [name, setName] = useState("");
  useEffect(() => {
    const getStudent = async () => {
      const res = await axios.get(
        "https://ictak-project.herokuapp.com/api/student/find/" + path
        // {
        //   headers: { token: "Bearer " + user.accessToken },
        // }
      );
      setStudent(res.data);
      setName(res.data.name);
      console.log(name);
    };
    getStudent();
  }, [path]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleUpdate = async () => {
    try {
      await axios.put(
        `https://ictak-project.herokuapp.com/api/student/${student._id}`,
        {
          name,
        }
        // {
        //   headers: { token: "Bearer " + user.accessToken },
        // }
      );
      //   setUpdateMode(false);
    } catch (err) {}
  };
  return (
    <div className="studentProfile">
      <div className="container">
        <div className="row gutters">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="account-settings">
                  <div className="user-profile">
                    <div className="user-avatar">
                      <img src={PF + student.photo} alt="Maxwell Admin" />
                    </div>
                    <h5 className="user-name">{student.name}</h5>
                    <h6 className="user-email">{student.email}</h6>
                  </div>
                  <div className="about">
                    <h5 className="user-name">About</h5>
                    <p>{`I'm ${student.name}. From ${student.place}. `}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mb-2 text-primary">Personal Details</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input
                        autoFocus
                        type="text"
                        className="form-control"
                        id="fullName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" id="eMail" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input type="text" className="form-control" id="phone" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>Place</label>
                      <input type="url" className="form-control" id="website" />
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>Address</label>
                      <textarea
                        rows={6}
                        type="name"
                        className="form-control"
                        id="Street"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group col-xl-12">
                          <label>Qualification</label>
                          <input
                            type="name"
                            className="form-control"
                            id="ciTy"
                          />
                        </div>
                        <div className="form-group col-xl-12">
                          <label>Pass-out year</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>Course</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>Year</label>
                      <input type="text" className="form-control" id="zIp" />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>Employment Status</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>Skillset</label>
                      <input type="text" className="form-control" id="zIp" />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>Password</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>Confirm Password</label>
                      <input type="text" className="form-control" id="zIp" />
                    </div>
                  </div>
                </div>

                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-right ">
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        className="btn btn-secondary mt-5 px-5 float-end "
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        onClick={handleUpdate}
                        className="btn btn-primary mt-5 px-5 mx-5 float-end"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
