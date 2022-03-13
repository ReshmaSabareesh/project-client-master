
import "./ProfilePage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
// import { Context } from "../../context/Context";

export default function ProfilePage() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [student, setStudent] = useState({});
  const PF = "https://ictak-project.herokuapp.com/images/";
  //   const { user } = useContext(Context);
  const [name, setName] = useState("");
  useEffect(() => {
    const getStudent = async () => {
      const res = await axios.get("https://ictak-project.herokuapp.com/api/student/all" 
        //"https://ictak-project.herokuapp.com/api/student/find/" + path
        // {
        //   headers: { token: "Bearer " + user.accessToken },
        // }
      );
      console.log(res);
      setStudent(res.data);
      setName(res.data.name);
      console.log(name);
    };
    getStudent();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
  <div className="body" >
 <div className="container">
<div className="row gutters">
	<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
		<div className="card h-100">
			<div className="card-body">
				<div className="account-settings">
					<div className="user-profile">
						<div className="user-avatar">
							<img src={PF + student.photo} alt="Maxwell Admin"/>
						</div>
						<h5 className="user-name">{student.name}</h5>
						<h6 className="user-email">{student.email}</h6>
					</div>
					<div className="about">
						<h5 className="mb-2 text-primary">About</h5>
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
						<h6 className="mb-3 text-primary">Personal Details</h6>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlfor="fullName">Full Name</label>
							<input type="text" className="form-control" id="fullName"   value={student.name} />
						</div>
					</div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" id="eMail" value={student.email} />
                    </div>
                  </div>
				<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input type="text" className="form-control" id="phone"  value={student.email}/>
                    </div>
                  </div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlfor="website">place</label>
							<input type="url" className="form-control" id="website" placeholder="Website url" value={student.place}/>
						</div>
					</div>
				</div>
				<div className="row gutters">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<h6 className="mb-3 text-primary">Address</h6>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlfor="Street">Street</label>
							<input type="name" class="form-control" id="Street" placeholder="Enter Street"/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlfor="ciTy">City</label>
							<input type="name" class="form-control" id="ciTy" placeholder="Enter City"/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlfor="sTate">State</label>
							<input type="text" className="form-control" id="sTate" placeholder="Enter State"/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlfor="zIp">Zip Code</label>
							<input type="text" className="form-control" id="zIp" placeholder="Zip Code"/>
						</div>
					</div>
				</div>
				<div className="row gutters">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div className="text-right">
							<button type="button" id="submit" name="submit" className="btn btn-secondary">Cancel</button>
							<button type="button" id="submit" name="submit" className="btn btn-primary">Update</button>
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

        
