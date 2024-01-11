import React,  {useState}  from 'react';


export default function BlogPostManager() {
    //const [loading, setLoading] = useState(false);
    const title = useFormInput('');
   const content = useFormInput('');
   //const [error, setError] = useState(null);
    
  return (
    <div>
       
      <section className="rcontainer login">
            <div className="row pt-3">
            <div className="col-lg-1 col-md-1 col-sm-2 justify-content-start">
            </div> 
            <div className="col-lg-10 col-md-10 col-sm-8  justify-content-center">
                <h4 className="text-darkblue"><b>Blog Post Manager</b></h4>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-2 justify-content-end">
            </div>
            </div> 
            <section className=" shadow-lg contact rounded px-4 mcontainer">
                <div className="row mt-4">
                    <div className=" p-4 mb-5 rounded col-lg-12 col-md-12 col-sm-12 mt-4 mx-5 mt-5">
                        <form action="#">
                            <div className="row mt-4">
                                <label className="text-white" htmlform="passward"><b>Blog Title</b></label>
                                <input type="text" className="inputbox" placeholder="Enter Title" name="title" id="title" {...title} autoComplete="title" />
                            </div>
                            <div className="row mt-4">
                                <label className="text-white" htmlform="passward"><b>Blog Content</b></label>
                                <textarea type="text" className="inputbox textarea" placeholder="Enter Content" name="content" id="content" {...content}/>
                            </div>
                            <div className="row mt-4">
                                <label className="text-white" htmlform="passward"><b>Images</b></label>
                            </div>
                            <div className="my-4"> 
                            <input className="py-2 px-5 rounded border-0 text-white shadow-lg secblogs" type="button" value="Add" />
                            <input className="py-2 px-5 mx-3 rounded border-0 text-white shadow-lg secblogs" type="button" value="Update" />
                            <input className="py-2 px-5 rounded border-0 text-white shadow-lg secblogs" type="button" value="View"/>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </section>
    </div>
  )
}
const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
   
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  }