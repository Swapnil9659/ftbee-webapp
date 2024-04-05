import React,  {useState, useEffect, useRef}  from 'react';
import Adminheader from './Adminheader';
import JoditEditor from 'jodit-react';
import { db, storage} from '../firebase';
import {Timestamp, addDoc, collection} from 'firebase/firestore';
//import { ToastContainer, toast } from 'react-toastify';

const TipsManager = () => {
  //let disableButton= false;
  const [thumbnail, setthumbnail] = useState();
  const dataCollection = collection(db, "shortTips");

  const editor =useRef(null)
   /*const config = useMemo(()=>
		{
			placeholder= "Type Procedure / Method *"
		},
		[placeholder]
	);*/

   
  const [inputValues, setInputValue] = useState({
    title: "",
    content: "",
    time: Timestamp.now()
  });

  const [validation, setValidation] = useState({
    title: "",
    content: ""
  });
  

  const checkValidation = () => {
    let errors = {};
    //recipe name validation
    if (!inputValues.title.trim()) {
      errors.title = "Title is required";
    } else {
      errors.title = "";
    }

     //content validation
     if (!inputValues.content.trim() || inputValues.content==="<p><br></p>") {
        errors.content = "Short Tips required";
      } else {
        errors.content = "";
      }
      setValidation(errors); 
    };

   function handleChange(event){
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
    console.log(event.target.value)
  }

 
  const handleEditorChange=(data)=>{
    console.log("data",data)
    setInputValue({ ...inputValues, 'content': data }); 
    let content= inputValues.content
    console.log("content",content)
  }
 
  const handelSubmit = (e) => {
    e.preventDefault();
    if (inputValues.title==="" || inputValues.content==="" ) {
    alert('Please Fill All Fields');
    
  }else{
    addDoc (dataCollection,{
        title: inputValues.title,
        content: inputValues.content,
    });
  setInputValue({
    title: "",
    content: ""
  })
  }
  };

  
  useEffect(() => {
    checkValidation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValues]);



    return(
      <div>
        <Adminheader/>
        <section className="bg-primary position-relative mx-5 rounded-top">
          <div className="container">
            <div className="row mt-3">
              <div className="col-12 text-center pt-3">
                <span className="text-white pt-2 text-uppercase fs-2 fw-normal">Tips Manager</span>
              </div>
            </div>
            
          </div>
        </section>
        <section className="bg-primary rounded-bottom px-4 mx-5 mb-4 rounded-bottom">
          <form method="POST" onSubmit={handelSubmit}>
            <div className="row d-flex">
                <div className="shadow-lg p-3 rounded mt-4 mx-auto my-5 w-50">
                    <div className="col-md-10 mx-auto">
                    <input placeholder="Title*" name="title" id="title" type="text" tabindex="1" autofocus className="form-control px-3 mb-4 rounded text-uppercase"   onChange={(e) => handleChange(e)} value={inputValues.title}/>
                    {validation.title && <p className="text-warning ps-2 fs-6 text-uppercase fw-bold">{validation.title}</p>}
                    </div>
                    <div className="p-3 rounded ml-5">
                        <div className="mb-2 px-5 text-light fw-bold"><span className='text-warning text-uppercase'>Note :</span>
                        Enter images if any inside the text editor.</div>
                        <div className="col-md-10 mx-auto mb-3 text-uppercase rounded fw-normal">
                        <JoditEditor 
                        ref={editor} 
                        name="content"
                        id="content"
                        value={inputValues.content}
                        onChange={handleEditorChange}
                        />
                        {validation.content && <p className="text-warning ps-2 mt-4 fw-bold">{validation.content}</p>}
                        </div>
                        <div className="col-11 d-grid gap-2 d-md-flex justify-content-md-end">
                        <button type="submit" className="btn rounded p-2 me-2 text-uppercase fs-6">Add</button>
                        <button type="reset" className="btn rounded p-2 text-uppercase fs-6">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
          </form>
        </section>
      </div>
    )
}

export default TipsManager