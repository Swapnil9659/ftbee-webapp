import React, { useEffect, useState } from 'react';

const Contact = (callback) => {
    let disableButton= true;
   
  
    const [inputValues, setInputValue] = useState({
      uname: "",
      email: "",
      tel: "",
      message: ""
    });
  
    const [validation, setValidation] = useState({
      uname: "",
      email: "",
      tel: "",
      message: "",
    });
    
  
    const checkValidation = () => {
      let errors = {};
  
      //name validation
      if (!inputValues.uname.trim()) {
        errors.uname = "Name is required";
      } else {
        errors.uname = "";
      }
  
      // email validation
      if (!inputValues.email.trim()) {
        errors.email = "Email is required";
      } else if (!/^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputValues.email)) {
        errors.email = "Please enter a valid email address";
      } else {
        errors.email = "";
      }
     
      //mobile no. validation
      const tel = inputValues.tel;
      if (tel.length < 10 || tel.length > 10) {
        errors.tel = "Mobile No. must be equal to 10 digits";
      } else if (!/^(?=.*[0-9]).{10}$/.test(tel)) {
        errors.tel = "Mobile No. must contain only digits";
      } else {
        errors.tel = "";
      }
  
       //message validation
       if (inputValues.message.length < 50) {
        errors.message = "Your Message must contain atleast 50 characters";
      } else if (inputValues.message.length >= 100) {
        errors.message = "Your Message must not contain more than 100 characters";
      } else {
        errors.message = "";
      }
      
  
      setValidation(errors); 
    };
    if(inputValues.uname!=="" && inputValues.email!=="" && inputValues.tel!=="" && inputValues.message!==""){
      
      if(!validation.uname && !validation.email && !validation.tel && !validation.message){
          disableButton= false;
      }
    }
    else{
      disableButton= true;
    }
  
     function handleChange(event){
      const { name, value } = event.target;
      setInputValue({ ...inputValues, [name]: value });
      console.log(event.target.value)
  
    }
  
    const handelSubmit = (e) => {
      e.preventDefault();
  
      setInputValue({
        uname: '',
        email: '',
        tel: '',
        message: ''
      })
    } ;
    
  
  
    useEffect(() => {
      checkValidation();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputValues]);
  
  return (
    <div className='mx-5'>
        <section className="recipe ml-5">
            <div className="row pt-3">
            <div className="col-lg-2 col-md-2 col-sm-2 justify-content-start">
            </div>
            <div className="col-lg-12 col-md-12 col-sm-8 bg-primary px-5 rounded-top pt-3 ">
              <span className="text-white text-uppercase fs-2 fw-normal">Contact Us</span>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-2 justify-content-end">
            </div>
            </div> 
            <section className="bg-primary rounded-bottom px-4">
                <div className="row d-flex">
                    <div className=" shadow-lg p-3 rounded col-lg-6 col-md-6 col-sm-12 mt-4 ml-5 my-5">
                        <form method="POST" onSubmit={handelSubmit}>
                            <div className="col-md-10">
                            <input placeholder="Your name *" name="uname" id="uname" type="text" tabindex="1" autofocus className="form-control px-3 mb-4 rounded"   onChange={(e) => handleChange(e)} value={inputValues.uname}/>
                            {validation.uname && <p className="text-warning text-uppercase fw-bold">{validation.uname}</p>}
                            
                            </div>
                            <div className="col-md-10">
                            <input placeholder="Your Email Address *" name="email" id="email" type="email" tabindex="2" className="form-control px-3 mb-4 rounded" onChange={(e) => handleChange(e)} value={inputValues.email}/>
                            {validation.email && <p className="text-warning text-uppercase fw-bold">{validation.email}</p>}
                            </div>
                            <div className="col-md-10">
                            <input placeholder="Your Phone Number *" name="tel" type="tel" id="tel" tabindex="3" className="form-control px-3 mb-4 rounded" onChange={(e) => handleChange(e)} value={inputValues.tel}  />
                            {validation.tel && <p className="text-warning text-uppercase fw-bold">{validation.tel}</p>}
                            </div>
                            <div className="col-md-10">
                            <textarea placeholder="Type your Message" type="text" name="message" id="message" tabindex="4" className="form-control px-3 mb-4 rounded" onChange={(e) => handleChange(e)} value={inputValues.message}/>
                            {validation.message && <p className="text-warning text-uppercase fw-bold">{validation.message}</p>}
                            </div>
                            <div className="col-lg-6 col-10">
                            <button type="submit" className="btn w-75 rounded p-3 text-uppercase fs-5" disabled={disableButton}>Submit</button>
                            </div>
                        </form> 
                    </div>
                    <div className="shadow-lg p-5 mt-4 mb-5 rounded col-lg-6 col-md-6 col-sm-12">
                        <div className="row  mt-5">
                            <h5 className="text-white justify-content-start ml-3"><b>It’s ftbee[Bee foodie, Bee trendy]</b></h5>
                        </div>
                        <div className="row mt-4">
                            <p className="text-white justify-content-center ml-3 fs-5 fw-bold">Come join us in our culinary adventure where we’ll create sophisticated & elegant meals which you can easily prepare as your everyday meal for your family & friends..Come join us in our culinary adventure where we’ll create sophisticated & elegant meals which you can easily prepare as your everyday meal for your family & friends..</p>
                        </div>
                        <div> 
                            <button className="btn rounded">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </div>
  )
}
export default Contact
