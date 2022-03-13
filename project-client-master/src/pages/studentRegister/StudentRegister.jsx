import "./studentRegister.css";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import validation from './Validation';
import axios from "axios";

//Razorpay code

  function loadScript(src)
            {
                return new Promise(resolve =>{
                const script = document.createElement('script')
                script.src = src
                script.onload = () => {
                resolve(true)
                  }
                  script.onerror = () =>{
                  resolve(false)
                  }
                  document.body.appendChild(script) 
              })
            } 
const __DEV__ = document.domain === 'localhost'


export default function StudentRegister() {

  //Manage form values
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    place: "",
    address: "",
    qualification: "",
    passOutYear: "",
    skillSet: "",
    employmentStatus: "",
    technologyTraining: "",
    year: "",
    course: "",
    photo: "",
    fee: "",
  });

  //flag for succesful submit
  const [isSubmit, setIsSubmit] = useState(false);
  
  //manage form errors
  const [formErrors, setFormErrors] = useState({});
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    //console.log(formValues);
    //fetchCourses();
  };
  const name = formValues.name;
  const email = formValues.email;
  const password = formValues.password;
   const phone = formValues.phone;
  const place = formValues.place;
  const address = formValues.address;
  const qualification = formValues.qualification;
  const passOutYear= formValues.passOutYear;
  // const skillSet= formValues.skillSet;
  const employmentStatus= formValues.employmentStatus;
   const technologyTraining= formValues.technologyTraining;
   const year= formValues.year;
   const course= formValues.course;
   const fee= formValues.fee; 
 // const photo= formValues.photo;



  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormErrors(validation(formValues));
    setIsSubmit(true);
    setError(false);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
     console.log("ok");
       try {
        
        const res = await axios.post("https://ictak-project.herokuapp.com/api/auth/student-register",  {
        name, 
        email,
        password,phone,
        place,address,qualification,
        passOutYear,employmentStatus,technologyTraining,year,course,fee}
    );
   //const data = await response.json();
     //displayRazorpay();
     res.data && window.location.replace("/student-login");
      } catch (err) {
        setError(true);
         console.log(err);
       }
    }
  else{
     console.log("error");
    }
   }
  //successfull signup validation
 useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit){
     console.log(formValues);
}
 },[formErrors]);


//Razorpay code
async function displayRazorpay(){
     const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
     if(!res){
        alert('Razorpay SDK failed to load.. Are you online?')
        return
     }
    //  try{
    //    const orderURL="http://localhost:5000/api/orders";
    //    const{data}=await axios.post(orderURL,{amount:fee});
    //  }catch(error){
    //    console.log(error);
    //  }
  const data = await fetch('http://localhost:5000/razorpay', {method:'POST'}).then((t) => t.json())
  const options = {
    key: __DEV__? 'rzp_test_7He7llbv9042c4' : 'PRODUCTION_KEY',
    //amount: data.amount, 
    amount: data.amount.toString(),
    currency: data.currency,  
    name: 'ICT ACADEMY',
    description: 'Welcome to payment section',
    image : "https://example.com/your_logo",
    order_id: data.id,
    //  handler : function (response){
    //      const payment_id = response.razorpay_payment_id
    //      console.log(payment_id)
    //       alert(response.razorpay_payment_id)
    //      alert(response.razorpay_order_id)
    //      alert(response.razorpay_signature)
    //      alert("payment successfully")
    // } 
    handler : async function (response){
      try{
        const data = await axios.post('http://localhost:5000/verify',response)
        console.log(data);
      }
       catch(error){
          console.log(error);
    }
      // const payment_id = response.razorpay_payment_id
      // console.log(payment_id)
      //  alert(response.razorpay_payment_id)
      //  alert(response.razorpay_order_id)
      // alert(response.razorpay_signature)
      // alert("payment successfully")
  },
     prefill: {
        name,
    //    phone:phone,
    //    email:email
    }};
    const rzp1 = new Razorpay(options);
    rzp1.on('payment.failed', function (response){
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
    }); 


const paymentObject = new window.Razorpay(options);
paymentObject.open()
}
 return (
    <div className="studentRegister">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <div className="formcol">
          <div className="formItemscol">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className ="registerInput"
              value ={formValues.username}
              onChange={handleChange}
            />
            {/* <p className="error">{formErrors.username}</p> */}
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={formValues.email}
              className="registerInput"
              onChange={handleChange}
            />
            {/* <p className="error">{formErrors.email}</p> */}
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formValues.password} 
              className="registerInput"
              onChange={handleChange}
            />
            {/* <p className="error">{formErrors.password}</p> */}
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={formValues.phone}
              className="registerInput"
              onChange={handleChange}
            />
            {/* <p className="error">{formErrors.phone}</p> */}
            <label>Place</label>
            <input
              type="text"
              name="place"
              value={formValues.place} 
              className="registerInput"
              onChange={handleChange}
            />
            {/* <p className="error">{formErrors.place}</p> */}
          </div>
          <div className="formItemscol">
            <label>Address</label>
            <textarea
              rows="5"
              type="text"
              value={formValues.address}
              name="address"
              className="registerInput address"
              onChange={handleChange}
            />
            {/* <p className="error">{formErrors.address}</p> */}
            <label>Qualification</label>
            <input
              type="text"
              name="qualification"
              value={formValues.qualification} 
              className="registerInput"
              onChange={handleChange}
            />
            {/* <p className="error">{formErrors.address}</p> */}
            <label>Pass-Out year</label>
            <input
              type="text"
              name="passOutYear"
              value={formValues.passOutYear}
              className="registerInput"
              onChange={handleChange}
            />
            {/* <p className="error">{formErrors.passOutYear}</p> */}
            {/* <label>skillSet</label>
            <input
              type="text"
              name="skillSet"
              value={formValues.skillSet}
              className="registerInput"
              onChange={handleChange}
            />
            <p className="error">{formErrors.skillSet}</p> */}
            <label>Employment Status</label>
            <input
              type="text"
              name="employmentStatus"
              value={formValues.employmentStatus}
              className="registerInput"
              onChange={handleChange}
            />
            <p className="error"></p>
          </div>
          <div className="formItemscol">
            <label>Technology Training</label>
            <input
              type="text"
              name="technologyTraining"
              value={formValues.technologyTraining}
              className="registerInput"
              onChange={handleChange}
            />
            {/* <p className="error">{formErrors.technologyTraining}</p> */}
            <label>Year</label>
            <input
              type="text"
              name="year"
              value={formValues.year}
              className="registerInput"
              onChange={handleChange}
            />
            {/* <p className="error">{formErrors.year}</p> */}
            <label>Course</label>
            <input
              type="text"
              name="course"
              value={formValues.course}
              className="registerInput"
              onChange={handleChange}
            />
            
            {/* <p className="error">{formErrors.password}</p>
            <label>Photo</label>
            <input
              type="file"
              name="photo"
              value={formValues.file}
              className="registerInput"
              onChange={handleChange}
            /> */}
            {/* <p className="error">{formErrors.password}</p> */}
            <label>Fee</label>
            <input
              type="text"
              name="fee"
              value={formValues.fee}
              className="registerInput"
              onChange={handleChange}
            />
            {/* <p className="error">{formErrors.password}</p> */}
          </div>
        </div>

        <button className="registerButton" type="submit">
          REGISTER
        </button>
      </form>
      <button onClick= {displayRazorpay} className="registerLoginButton">
        <Link to="#" className="link">
          Payment
        </Link>
      </button>
      
      
      {error && <span style={{color:"red"}}>Something Went Wrong!</span>}
    </div>
  );
}
