import React,  {useState, useEffect, useRef}  from 'react';
import Adminheader from '../Adminheader';
import JoditEditor from 'jodit-react';
import { db, storage} from '../../firebase';
import {Timestamp, addDoc, collection} from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
//import { ToastContainer, toast } from 'react-toastify';

const RecipeManager =({ placeholder })=>{
  //let disableButton= false;
  const [thumbnail, setthumbnail] = useState();
  const dataCollection = collection(db, "RecipeManager");

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
    const imageRef = ref(storage, `recipeimage/${thumbnail.name}`);
    uploadBytes(imageRef, thumbnail).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        const productRef = collection(db, "recipePost")
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
    continent:"",
    area:"",
    cuisines: "",
    cuisinetype: "",
    classify: "",
    rname: "",
    intro:"",
    preparationtime: "",
    cookingtime: "",
    servings: "",
    ingredients: "",
    content: "",
    time: Timestamp.now()
  });

  const [validation, setValidation] = useState({
    continent:"",
    area:"",
    cuisines: "",
    cuisinetype: "",
    classify: "",
    rname: "",
    intro:"",
    preparationtime: "",
    cookingtime: "",
    servings: "",
    ingredients: "",
    content: ""
  });
  

  const checkValidation = () => {
    let errors = {};
    //Select continent validation
    if (!inputValues.continent.trim()) {
      errors.continent = "continent is required";
    } else {
      errors.continent = "";
    }
    //Select area validation
    if (!inputValues.area.trim()) {
      errors.area = "Region is required";
    } else {
      errors.area = "";
    }
    //Select cuisine validation
    if (!inputValues.cuisines.trim()) {
      errors.cuisines = "Cuisine is required";
    } else {
      errors.cuisines = "";
    }
    //Select cuisine type validation
    if (!inputValues.cuisinetype.trim()) {
      errors.cuisinetype = "Cuisine Type is required";
    } else {
      errors.cuisinetype = "";
    }

    //Select classification validation
    if (!inputValues.classify.trim()) {
      errors.classify = "Classification is required";
    } else {
      errors.classify = "";
    }

    //recipe name validation
    if (!inputValues.rname.trim()) {
      errors.rname = "Recipe Name is required";
    } else {
      errors.rname = "";
    }


    // servings validation
    if (!inputValues.servings.trim())   {
      errors.servings = "Servings are required";
    } else {
      errors.servings = "";
    }

    //content validation
    if (!inputValues.content.trim() || inputValues.content==="<p><br></p>") {
      errors.content = "Type Procedure / Method is required";
    } else {
      errors.content = "";
    }

      //ingredients validation
  if (!inputValues.ingredients.trim()) {
    errors.ingredients = "ingredients are required";
  } else {
    errors.ingredients = "";
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

  const calTotalTime=(event)=>{
    const { name, value } = event.target;
    let preparationtime= setInputValue({ ...inputValues, [inputValues.preparationtime]: value });
    let cookingtime= setInputValue({ ...inputValues, [inputValues.cookingtime]: value });
    let totaltime= preparationtime + cookingtime;
    console.log("totaltime",preparationtime)
  }
 
  const handelSubmit = (e) => {
    e.preventDefault();
    if (inputValues.continent===""|| inputValues.area==="" || inputValues.cuisines==="" || inputValues.subcategory===""|| inputValues.rname==="" || inputValues.servings==="" || inputValues.preparationtime==="" || inputValues.ingredients==="" || inputValues.content==="" || uploadImage()===null) {
    alert('Please Fill All Fields');
    
  }else{

  setInputValue({
    continent: "",
    area: "",
    cuisines: "",
    cuisinetype: "",
    classify: "",
    rname: "",
    intro:"",
    preparationtime: "",
    cookingtime: "",
    servings: "",
    ingredients: "",
    content: ""
  })
  image.current.value= "";
  }
  };

  
  useEffect(() => {
    checkValidation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValues]);

    //  Cuisine DropDown data 

  

    const continent=['Asian', 'American', 'African', 'Europien', 'Oceanic']

    const asian=['Central Asian', 'East Asian', 'Southeast Asian', 'South Asian', 'west Asian']
    const casian=['Kazakh', 'Uzbek', 'Turkmen']
    const easian=['Chinese', 'Japnese', 'Korean', 'Taiwanese']
    const seasian=['Vietnamese', 'Thai', 'Malaysian', 'Indonesian', 'Burmese', 'Filipino']
    const sasian=['India', 'Pakistani', 'Sri Lanka', 'Bangladeshi']
    const wasian=['Iranian', 'Turkish', 'Arab', 'Levantine']

    const america=['Caribbean', 'Central America', 'North America', 'South America']
    const caribben=['Haitian', 'Cuba', 'Jamaican']
    const camerica=['Salvadoran', 'Belizean', 'Panamanian']
    const namerica=['America', 'Canada', 'Mexico']
    const samerica=['Argentine', 'Chilean', 'Venezuelean']

    const africa=['Central Africa', 'East Africa', 'North Africa', 'South Africa', 'West Africa']
    const cafrica=['Cameroonian', 'Angolan', 'Congolese']
    const eafrican=['South Sudanese', 'Ethiopian', 'Kenyan']
    const nafrican=['Moroccan', 'Egyptian', 'Tunisian']
    const safrican=['South Africa', 'zimbabwean', 'Botswana']
    const wafrican=['Nigerian', 'Ghanaian', 'Liberrian']

    const europe=['Central European', 'Eastern European', 'Northern European', 'Southern European', 'Western European']
    const ceurope=['German', 'Polsh', 'Swiss']
    const eeurope=['Russian', 'Romanian', 'Caucasian']
    const neurope=['British', 'Irish', 'Danish']
    const seurope=['Mediterranean', 'Greek', 'Spanish', 'Italian']
    const weurope=['Franch', 'Belgian', 'Dutch']

    const oceanic=['Australian', 'Polynesian', 'Melanesia']
    const austalia=['Australian']
    const polynese=['New Zealand']
    const melanesia=['Fijian']


    const cuisinetype=[  
    'Breakfast & Snacks', 
    'Starters & Appetizers', 
    'Soups & Salads, Condiments',
    'Flat Bread & Pancakes',
    'Curry, Gravy & Sabji',
    'Rice & Nuddels',
    'Pasta & Pizza',
    'Frozen Desearts',
    'Sweets & Puddings',
    'Mocktels & Shakes',
    'Cocktels',
    'Hot Bevrages',
    'Kids Special',
    'Diet Food',
    'Grilled & Smoked',
    'Breads',
    'Cakes & Muffins',
    'Pastries & Pies',
    'Cookies & Biscuits']


 /** Type variable to store different array for different dropdown */
 let region = null; 
 let cuisine = null;
  
 /** This will be used to create set of options that user will see */
 let options = null; 
 let options1 = null;

    if(inputValues.continent==="Asian"){
        region= asian;
    }else if(inputValues.continent==="American"){
        region= america;
    }else if(inputValues.continent==="African"){
      region= africa;
    }else if(inputValues.continent==="Europian"){
      region= europe;
    }else if(inputValues.continent==="Oceanic"){
      region= oceanic;
    }
    
    if(inputValues.area==="Central Asian"){
      cuisine= casian;
    }else if(inputValues.area==="East Asian"){
      cuisine= easian;
    }else if(inputValues.area==="Southeast Asian"){
      cuisine= seasian;
    }else if(inputValues.area==="South Asian"){
      cuisine= sasian;
    }else if(inputValues.area==="west Asian"){
      cuisine= wasian;
    }else if(inputValues.area==="Caribbean"){
      cuisine= caribben;
    }else if(inputValues.area==="Central America"){
      cuisine= camerica;
    }else if(inputValues.area==="North America"){
      cuisine= namerica;
    }else if(inputValues.area==="South America"){
      cuisine= samerica;
    }else if(inputValues.area==="Central Africa"){
      cuisine= cafrica;
    }else if(inputValues.area==="East Africa"){
      cuisine= eafrican;
    }else if(inputValues.area==="North Africa"){
      cuisine= nafrican;
    }else if(inputValues.area==="South Africa"){
      cuisine= safrican;
    }else if(inputValues.area==="West Africa"){
      cuisine= wafrican;
    }else if(inputValues.area==="Central European"){
      cuisine= ceurope;
    }else if(inputValues.area==="Eastern European"){
      cuisine= eeurope;
    }else if(inputValues.area==="Northern European"){
      cuisine= neurope;
    }else if(inputValues.area==="Southern European"){
      cuisine= seurope;
    }else if(inputValues.area==="Western European"){
      cuisine= weurope;
    }else if(inputValues.area==="Australian"){
      cuisine= austalia;
    }else if(inputValues.area==="Polynesian"){
      cuisine= polynese;
    }
    
    /** If "Type" is null or undefined then options will be null, 
       * otherwise it will create a options iterable based on our array 
       */
    if (region) { 
      options = region.map((el) => <option key={el}>{el}</option>); 
    } 

    if (cuisine) { 
      options1 = cuisine.map((el) => <option key={el}>{el}</option>); 
    } 
    

  return(
      <div>
        <Adminheader/>
        <section className="bg-primary position-relative mx-5 rounded-top">
          <div className="container">
            <div className="row mt-3">
              <div className="col-12 text-center pt-3">
                <span className="text-white pt-2 text-uppercase fs-2 fw-normal">Recipe Manager</span>
              </div>
            </div>
            
          </div>
        </section>
        <section className="bg-primary rounded-bottom px-4 mx-5 mb-4 rounded-bottom">
          <form method="POST" onSubmit={handelSubmit}>
            <div className="row d-flex">
              <div className="shadow-lg p-3 rounded col-lg-6 col-md-6 col-sm-12 mt-4 ml-5 my-5">
                <div className="col-md-10 mx-auto">
                  <select name="continent" className="w-100 p-3 mb-4 rounded text-uppercase" onChange={(e) => handleChange(e)} value={inputValues.continent}>
                    <option value="">Select Continent *</option>
                    {continent.map((option,index)=>{
                        return (
                            <option key={index}>
                                {option}
                            </option>
                        );
                    })}
                  </select>
                  {validation.continent && <p className="text-warning ps-2 fs-6 text-uppercase fw-bold">{validation.continent}</p>}
                </div> 
                <div className="col-md-10 mx-auto">
                <select name="area" className="w-100 p-3 mb-4 rounded text-uppercase" onChange={(e) => handleChange(e)} value={inputValues.area}> 
                <option value="">Select Region *</option>
                  { 
                    /** This is where we have used our options variable */
                    options 
                  } 
                </select> 
                {validation.area && <p className="text-warning ps-2 fs-6 text-uppercase fw-bold">{validation.area}</p>}
                </div> 
                <div className="col-md-10 mx-auto">
                <select name="cuisines" className="w-100 p-3 mb-4 rounded text-uppercase" onChange={(e) => handleChange(e)} value={inputValues.cuisines}> 
                <option value="">Select Cuisine *</option>
                  { 
                    /** This is where we have used our options variable */
                    options1 
                  } 
                </select> 
                {validation.cuisines && <p className="text-warning ps-2 fs-6 text-uppercase fw-bold">{validation.cuisines}</p>}
                </div> 
                <div className="col-md-10 mx-auto">
                  <select name="cuisinetype" className="w-100 p-3 mb-4 rounded text-uppercase" onChange={(e) => handleChange(e)} value={inputValues.cuisinetype}>
                      <option value="">Select Cuisines Types *</option>
                      {cuisinetype.map((option,index)=>{
                        return (
                            <option key={index}>
                                {option}
                            </option>
                        );
                    })}
                  </select>
                  {validation.cuisinetype && <p className="text-warning ps-2 fs-6 text-uppercase fw-bold">{validation.cuisinetype}</p>}
                </div>
                <div className="col-md-10 mx-auto">
                  <label className="radio bg-white mb-3 ms-2 p-2 rounded-start">
                    <input type="radio" name="classify" value="veg"  onChange={handleChange} checked={inputValues.classify==="veg"}/>
                    <b className="px-2 text-uppercase text-success fw-bold fs-6">Veg</b>
                  </label>
                  <label className="radio bg-white p-2 rounded-end">
                    <input type="radio" name="classify" className='border border-danger' value="nonveg" onChange={handleChange} checked={inputValues.classify==="nonveg"}/>
                    <b className="px-2 text-uppercase text-danger fw-bold fs-6">Non-Veg</b>
                  </label>
                    {validation.classify && <p className="text-warning ps-2 fs-6 text-uppercase fw-bold">{validation.classify}</p>}
                </div>
                <div className="col-md-10 mx-auto">
                  <input placeholder="Recipe Name *" name="rname" id="rname" type="text" tabindex="1" autofocus className="form-control px-3 mb-4 rounded text-uppercase"   onChange={(e) => handleChange(e)} value={inputValues.rname}/>
                  {validation.rname && <p className="text-warning ps-2 fs-6 text-uppercase fw-bold">{validation.rname}</p>}
                </div>
                <div className="col-md-10 mx-auto">
                  <textarea placeholder="Brief intro. of the recipe" name="intro" id="intro" type="text" tabindex="1" autofocus className="form-control px-3 mb-4 rounded text-uppercase"   onChange={(e) => handleChange(e)} value={inputValues.intro}/>
                </div>
                <div className="col-md-10 mx-auto mb-5">
                  <div>
                  <div className="py-2 text-light fw-bold"><span className='text-warning text-uppercase'>Note :</span> Enter Image PNG, JPG, GIF files here.</div>
                  {/* main Content  */}
                    <div className="text-danger">
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
                <div className="px-5 mb-2 text-light fw-bold"><span className='text-warning text-uppercase'>Tips :</span> For time values below, use H for hours and M for minutes.<br/>
                  Example- 1 H 30 M for 1 hr and 30 min.</div>
                <div className="col-md-10 mx-auto">
                  <input placeholder="Preparation Time" type="text" name="preparationtime" id="preparationtime" tabindex="4" className="form-control px-3 mb-4 rounded text-uppercase" onChange={(e) => handleChange(e)} value={inputValues.preparationtime}/>
                </div>
                <div className="col-md-10 mx-auto">
                  <input placeholder="Cooking Time" type="text" name="cookingtime" id="cookingtime" tabindex="4" className="form-control px-3 mb-4 rounded text-uppercase" onChange={(e) => handleChange(e)} value={inputValues.cookingtime}/>
                </div>
                <div className="col-md-10 mx-auto">
                  <input placeholder="Servings *" name="servings" type="text" id="servings" tabindex="3" className="form-control px-3 mb-4 rounded text-uppercase" onChange={(e) => handleChange(e)} value={inputValues.servings}  />
                  {validation.servings && <p className="text-warning ps-2 fs-6 text-uppercase fw-bold">{validation.servings}</p>}
                </div>
                <div className="px-5 mb-2  text-light fw-bold"><span className='text-warning text-uppercase'>Note :</span> Enter each ingredient and steps in the instructions on a new line.
                  Avoid using double quotation marks here. Don't enter image inside the text editor.</div>
                <div className="col-md-10 mx-auto">
                  <input placeholder="Ingrediants *" name="ingredients" id="ingredients" type="text" tabindex="1" autofocus className="form-control px-3 mb-4 rounded text-uppercase"   onChange={(e) => handleChange(e)} value={inputValues.ingredients}/>
                  {validation.ingredients && <p className="text-warning ps-2 fs-6 text-uppercase fw-bold">{validation.ingredients}</p>}
                </div>
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
  export default RecipeManager;
  

