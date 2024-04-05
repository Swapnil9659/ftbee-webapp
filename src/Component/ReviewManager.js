import React,  {useState, useEffect, useRef}  from 'react';
import Adminheader from './Adminheader';
import JoditEditor from 'jodit-react';
import { db, storage} from '../firebase';
import {Timestamp, addDoc, collection} from 'firebase/firestore';

const ReviewManager = () => {
    const dataCollection = collection(db, "reviewPost");
  
    const editor =useRef(null)
    const image =useRef(null)
   
  const [inputValues, setInputValue] = useState({
    category:"",
    protype: "",
    pname: "",
    mobname: "",
    review: "",
    compname: "",
    comparison: "",
    time: Timestamp.now()
  });

  const [validation, setValidation] = useState({
    category:"",
    protype: "",
    pname: "",
    mobname: "",
    review: "",
    compname: "",
    comparison: ""
  });
  

  const checkValidation = () => {
    let errors = {};
    //Select Category validation
    if (!inputValues.category.trim()) {
      errors.category = "Category is required";
    } else {
      errors.category = "";
    }

    //product type  validation
    if (!inputValues.protype.trim()) {
      errors.protype = "Product Type is required";
    } else {
      errors.protype = "";
    }

    // product name validation
    if (!inputValues.pname.trim())   {
      errors.pname = "Product Name is required";
    } else {
      errors.pname = "";
    }

    // manufacturer, owner, brand name validation
    if (!inputValues.mobname.trim())   {
        errors.mobname = "Manufacturer Or Owner Or Brand Name is required";
      } else {
        errors.mobname = "";
      }

    //content validation
    if (!inputValues.review.trim() || inputValues.review==="<p><br></p>") {
      errors.review = "Review is required";
    } else {
      errors.review = "";
    }

    setValidation(errors); 
  };

   function handleChange(event){
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
    console.log(event.target.value)
  }

  const handleComparisonChange=(data)=>{
    console.log("data",data)
    setInputValue({ ...inputValues, 'comparison': data }); 
    let comparison= inputValues.comparison
    console.log("content",comparison)
  }
  
  const handleReviewChange=(data)=>{
    console.log("data",data)
    setInputValue({ ...inputValues, 'review': data }); 
    let review= inputValues.review
    console.log("content",review)
  }
 
  const handelSubmit = (e) => {
    e.preventDefault();
    if (inputValues.category===""|| inputValues.protype==="" || inputValues.pname==="" || inputValues.mobname==="" || inputValues.review==="") {
    alert('Please Fill All Fields');
    
  }else{
    addDoc (dataCollection,{
        category: inputValues.category,
        protype: inputValues.protype,
        pname: inputValues.pname,
        mobname: inputValues.mobname,
        review: inputValues.review,
        compname: inputValues.compname,
        comparison: inputValues.comparison,
    });
  setInputValue({
    category:"",
    protype: "",
    pname: "",
    mobname: "",
    review: "",
    compname: "",
    comparison: ""
  })
  }
  };

  
  useEffect(() => {
    checkValidation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValues]);


  return (
    
    <div>
        <Adminheader/>
        <section className="bg-primary position-relative mx-5 rounded-top">
            <div className="container">
                <div className="row mt-3">
                    <div className="col-12 text-center pt-3">
                        <span className="text-white pt-2 text-uppercase fs-2 fw-normal">Review Manager</span>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-primary rounded-bottom px-4 mx-5 mb-4 rounded-bottom">
          <form method="POST" onSubmit={handelSubmit}>
            <div className="row d-flex">
              <div className="shadow-lg p-3 rounded col-lg-6 col-md-6 col-sm-12 mt-4 ml-5 my-5">
                <div className="col-md-10 mx-auto">
                    <select name="category" className="w-100 p-3 mb-4 rounded text-uppercase" onChange={(e) => handleChange(e)} value={inputValues.category}>
                        <option value="">Select Category *</option>
                        <option>Food Products</option>
                        <option>Fashion & cothings</option>
                        <option>Restaurants, Hotels & Resorts</option>
                        <option>Fast Food centers & Cafes</option>
                        <option>Street Food</option>
                    </select>
                    {validation.category && <p className="text-warning ps-2 fs-6 text-uppercase fw-bold">{validation.category}</p>}
                </div>
                <div className="col-md-10 mx-auto">
                  <input placeholder="product Type *" name="protype" id="protype" type="text" tabindex="1" autofocus className="form-control px-3 mb-4 rounded text-uppercase"   onChange={(e) => handleChange(e)} value={inputValues.protype}/>
                  {validation.protype && <p className="text-warning ps-2 fs-6 text-uppercase fw-bold">{validation.protype}</p>}
                </div>
                <div className="col-md-10 mx-auto">
                <input placeholder="Product Name *" name="pname" type="text" id="pname" tabindex="3" className="form-control px-3 mb-4 rounded text-uppercase" onChange={(e) => handleChange(e)} value={inputValues.pname}  />
                {validation.pname && <p className="text-warning ps-2 fs-6 text-uppercase fw-bold">{validation.pname}</p>}
                </div>
                <div className="col-md-10 mx-auto">
                <input placeholder="Manufacturer Or Owner Or Brand Name *" name="mobname" type="text" id="mobname" tabindex="3" className="form-control px-3 mb-4 rounded text-uppercase" onChange={(e) => handleChange(e)} value={inputValues.mobname}  />
                {validation.mobname && <p className="text-warning ps-2 fs-6 text-uppercase fw-bold">{validation.mobname}</p>}
                </div>
                <div className="px-5 mb-2  text-light fw-bold"><span className='text-warning text-uppercase'>Note :</span> Enter product review.<br/> URL of the images if any inside text editor.</div>
                <div className="col-md-10 mx-auto mb-4 text-uppercase rounded fw-normal">
                  <JoditEditor 
                  ref={editor} 
                  name="review"
                  id="review"
                  value={inputValues.review}
                  onChange={handleReviewChange}
                  />
                  {validation.review && <p className="text-warning ps-2 mt-3 fw-bold">{validation.review}</p>}
                </div>
              </div>
              <div className="shadow-lg p-3 rounded col-lg-6 col-md-6 col-sm-12 mt-4 ml-5 my-5">
                <div className="col-md-10 mx-auto">
                <input placeholder="Competitors Name" name="compname" type="text" id="compname" tabindex="3" className="form-control px-3 mb-4 rounded text-uppercase" onChange={(e) => handleChange(e)} value={inputValues.compname}  />
                </div>
                <div className="px-5 mb-2  text-light fw-bold"><span className='text-warning text-uppercase'>Note :</span> Enter product comparison.<br/> URL of the images if any inside text editor.</div>
                <div className="col-md-10 mx-auto mb-4 text-uppercase rounded fw-normal">
                  <JoditEditor 
                  ref={editor} 
                  name="comparison"
                  id="comparison"
                  value={inputValues.comparison}
                  onChange={handleComparisonChange}
                  />
                </div>
                <div className="col-11 d-grid gap-2 d-md-flex justify-content-md-end">
                  <button type="submit" className="btn rounded p-2 me-2 text-uppercase fs-6">Add</button>
                  <button type="reset" className="btn rounded p-2 text-uppercase fs-6">Cancel</button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    )
  }

export default ReviewManager