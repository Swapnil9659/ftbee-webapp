import React,  {useState, useEffect, useRef}  from 'react';
import Adminheader from './Adminheader';
import JoditEditor from 'jodit-react';
import { db, storage} from '../firebase';
import {Timestamp, addDoc, collection} from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
//import { ToastContainer, toast } from 'react-toastify';

const BlogManager =({ placeholder })=>{
  //let disableButton= false;
  const [thumbnail, setthumbnail] = useState();
  const dataCollection = collection(db, "BlogManager");

  const editor =useRef(null)
  const image =useRef(null)
   /*const config = useMemo(()=>
		{
			placeholder= "Type Procedure / Method *"
		},
		[placeholder]
	);*/
  

  //* Upload Image Function 
  let uploadImage = () => {
    if (!thumbnail) return;
    const imageRef = ref(storage, `blogimage/${thumbnail.name}`);
    uploadBytes(imageRef, thumbnail).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        const productRef = collection(db, "blogPost")
        addDoc(productRef, {
          inputValues,
          thumbnail: url,
          time: Timestamp.now(),
          date: new Date().toLocaleString(
            "en-US",
            {
              month: "short",
              day: "2-digit",
              year: "numeric"
            }
          ) 
        })
      });
    });
  }
   
  const [inputValues, setInputValue] = useState({
    category:"",
    blogtitle: "",
    content: "",
    time: Timestamp.now()
  });

  const [validation, setValidation] = useState({
    category:"",
    blogtitle: "",
    content: ""
  });
  

  const checkValidation = () => {
    let errors = {};
    //Select Category validation
    if (!inputValues.category.trim()) {
      errors.category = "Category is required";
    } else {
      errors.category = "";
    }

    //recipe name validation
    if (!inputValues.blogtitle.trim()) {
      errors.blogtitle = "Blog Title is required";
    } else {
      errors.blogtitle = "";
    }

     //content validation
     if (!inputValues.content.trim() || inputValues.content==="<p><br></p>") {
        errors.content = "Blog Post required";
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
    if (inputValues.category===""|| inputValues.blogtitle==="" || inputValues.content==="" || uploadImage()===null) {
    alert('Please Fill All Fields');
    
  }else{

  setInputValue({
    category:"",
    blogtitle: "",
    content: ""
  })
  image.current.value= "";
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
                <span className="text-white pt-2 text-uppercase fs-2 fw-normal">Blogs Manager</span>
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
                      <option>Food</option>
                      <option>Fashion</option>
                  </select>
                  {validation.category && <p className="text-warning ps-2 fs-6 text-uppercase fw-bold">{validation.category}</p>}
                </div>
                <div className="col-md-10 mx-auto">
                  <input placeholder="Blog Title*" name="blogtitle" id="blogtitle" type="text" tabindex="1" autofocus className="form-control px-3 mb-4 rounded text-uppercase"   onChange={(e) => handleChange(e)} value={inputValues.blogtitle}/>
                  {validation.blogtitle && <p className="text-warning ps-2 fs-6 text-uppercase fw-bold">{validation.blogtitle}</p>}
                </div>
                <div className="col-md-10 mx-auto mb-3 rounded">
                <div>
                <div className="py-2 text-light fw-bold"><span className='text-warning text-uppercase'>Note :</span> Enter Image PNG, JPG, GIF files here.</div>
                 {/* main Content  */}
                  <div className="mb-3 text-danger">
                    {/* Thumbnail  */}
                   {/*thumbnail && <img className="mb-3"
                        src={thumbnail
                            ? URL.createObjectURL(thumbnail)
                            : ""}
                        alt="thumbnail"
                        />*/} 
                                      {/* First Thumbnail Input  */}
                                      <input
                        type="file"
                        ref={image}
                        label="Upload thumbnail"
                        className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] placeholder-black bg-white text-uppercase fs-6 fw-bold rounded p-1"
                        onChange={(e) => setthumbnail(e.target.files[0])}
                        id="file"
                    />
                  </div>           
                </div>
                </div>
              </div>
              <div className="shadow-lg p-3 rounded col-lg-6 col-md-6 col-sm-12 mt-4 ml-5 my-5">
                <div className="px-5 mb-2  text-light fw-bold"><span className='text-warning text-uppercase'>Note :</span> Don't enter image inside the text editor.</div>
                <div className="col-md-10 mx-auto mb-4 text-uppercase rounded fw-normal">
                  <JoditEditor 
                  ref={editor} 
                  name="content"
                  id="content"
                  value={inputValues.content}
                  onChange={handleEditorChange}
                  />
                  {validation.content && <p className="text-warning ps-2 mt-3 fw-bold">{validation.content}</p>}
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

export default BlogManager;
  
