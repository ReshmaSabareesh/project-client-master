function validation(values){ //values=useState fomvalue
    const errors = {}; //storing errors
    //const regex = /^[^\s@]+@[^s@]+\.[^\s@]{2,}+$/i ;
    //const regExpMobile = /^[+-]?\d*(?:[.,]\d*)?$/;
    //const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})+$/;
    if(!values.name){
        errors.name = "username is required";
    }
    if(!values.email){
        errors.email = "email is required";
    }
    // else if(!regex.test(values.email)){
    //     errors.email = "email is invalid";
    // }
    if(!values.password){
        errors.password = "Password is required";
    }
    // else if(!passwordRegex.test(values.password)){
       // errors.password = "A minimum 8 characters password contains a combination of uppercase and lowercase letter and number are required.";
    //}
    if(!values.phone){
       errors.phone = "Enter valid phone no";
    }
    if(!values.place){
        errors.place = "Field is empty";
    }
     if(!values.address){
        errors.address = "Field is empty";
    } 
    if(!values.passOutYear){
        errors.passOutYear = "Field is empty";
    } 
    // if(!values.skillSet){
    //     errors.skillSet = "Field is empty";
    // }   
    if(!values.technologyTraining){
        errors.technologyTraining = "Field is empty";
    }   
    if(!values.year){
        errors.year = "Field is empty" ;
    }   
    if(!values.employmentStatus){
        errors.employmentStatus = "employmentStatus";
    }

    // if(!values.photo){
    //     errors.photo = "upload photo";
    // }
    return errors;

}
export default validation;