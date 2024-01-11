import React,  {Component}  from 'react';
import FtbeewebappDataService from "../Services/ftbeewebapp.services";


export default class AddRecipe extends Component {
    constructor(props) {
      super(props);
      this.onChangeCategory = this.onChangeCategory.bind(this);
      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeIngredients = this.onChangeIngredients.bind(this);
      this.onChangeMethod = this.onChangeMethod.bind(this);
      this.onChangeTips = this.onChangeTips.bind(this);
      this.saveRecipe = this.saveRecipe.bind(this);
      this.newRecipe = this.newRecipe.bind(this);
  
      this.state = {
        id: null,
        category: "",
        name: "",
        ingredients: "",
        method: "",
        tips: "",

        submitted: false
      };
    }
  
    onChangeCategory(e) {
      this.setState({
        category: e.target.value
      });
    }
  
    onChangeName(e) {
      this.setState({
        name: e.target.value
      });
    }
    onChangeIngredients(e) {
        this.setState({
          ingredients: e.target.value
        });
      }
      onChangeMethod(e) {
        this.setState({
          method: e.target.value
        });
      }
      onChangeTips(e) {
        this.setState({
          tips: e.target.value
        });
      }
  
    saveRecipe() {
      var data = {
        category: this.state.category,
        name: this.state.name,
        ingredients: this.state.ingredients,
        method: this.state.method,
        tips: this.state.tips
      };
  
      FtbeewebappDataService.create(data)
        .then(response => {
          this.setState({
            id: response.data.id,
            category: response.data.category,
            name: response.data.name,
            ingredients: response.data.ingredients,
            method: response.data.method,
            tips: response.data.tips,

            submitted: true
          });
          console.log("data11",data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  
    newRecipe() { 
      this.setState({
        category: "",
        name: "",
        ingreadients: "",
        method: "",
        tips: "",
  
        submitted: false
       
      });
      console.log("I am in newRecipe", this.setState )
    }

    retrieveRecipe() {
      FtbeewebappDataService.getAll()
        .then(response => {
          this.setState({
            recipes: response.data
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    refreshList() {
      FtbeewebappDataService.get();
      this.setState({
        currentRecipe: null,
        currentIndex: 0
      });
    }
  
    render() {
        return (
            <div>
                <section className="rcontainer login">
                    <div className="row pt-3">
                    <div className="col-lg-1 col-md-1 col-sm-2 justify-content-start">
                    </div> 
                    <div className="col-lg-10 col-md-10 col-sm-8  justify-content-center">
                        <h4 className="text-darkblue"><b>Recipe Manager</b></h4>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 justify-content-end">
                    </div>
                    </div> 
                    <section className=" shadow-lg contact rounded px-4 mcontainer">
                        <div className="row mt-4">
                            <div className=" p-4 mb-5 rounded col-lg-12 col-md-12 col-sm-12 mt-4 mx-5 mt-5">
                                <form action="#">
                                    <div className="row">
                                        <label className="text-white" htmlform="name"><b>Category</b></label>
                                        <select  name="category" id="category" className="inputbox" onChange={this.onChangeCategory}>
                                            <option value="0">Select Category:</option>
                                            <option value="Starters">Starters</option>
                                            <option value="Complimentry Dishes">Complimentry Dishes</option>
                                            <option value="Main Course">Main Course</option>
                                            <option value="Desserts">Desserts</option>
                                            <option value="Quick & Easy">Quick & Easy</option>
                                            <option value="Diet Food">Diet Food</option>
                                            <option value="Instant Pot">Instant Pot</option>
                                            <option value="Bevrages">Bevrages</option>
                                            <option value="Kids Special">Kids Special</option>
                                            <option value="Seasonal Special">Seasonal Special</option>
                                            <option value="Baked Items">Baked Items</option>
                                            <option value="Continental">Continental</option>
                                            <option value="Traditional">Traditional</option>
                                            <option value="One Ingredient">One Ingredient</option>
                                            <option value="Salads & Soups">Salads & Soups</option>
                                            <option value="BreakFast">BreakFast</option>
                                        </select>
                                    </div>
                                    <div className="row mt-4">
                                        <label className="text-white" htmlform="name"><b>Recipe Name</b></label>
                                        <input
                                            type="text"
                                            className="inputbox"
                                            id="name"
                                            required
                                            value={this.state.name}
                                            onChange={this.onChangeName}
                                            name="name"
                                        /> 
                                    </div>
                                    <div className="row mt-4">
                                        <label className="text-white" htmlform="ingredients"><b>Ingredients</b></label>
                                        <input
                                            type="text"
                                            className="inputbox"
                                            id="ingredients"
                                            required
                                            value={this.state.ingredients}
                                            onChange={this.onChangeIngredients}
                                            name="ingredients"
                                        /> 
                                    </div>
                                    <div className="row mt-4">
                                        <label className="text-white" htmlform="passward"><b>Method</b></label>
                                        <textarea
                                            type="text"
                                            className="inputbox textarea"
                                            id="method"
                                            required
                                            value={this.state.method}
                                            onChange={this.onChangeMethod}
                                            name="method"
                                        /> 
                                    </div>
                                    <div className="row mt-4">
                                        <label className="text-white" htmlform="passward"><b>Conclusion || Tips</b></label>
                                        <textarea
                                            type="text"
                                            className="inputbox textarea"
                                            id="tips"
                                            required
                                            value={this.state.tips}
                                            onChange={this.onChangeTips}
                                            name="tips"
                                        /> 
                                    </div>
                                    <div className="my-4"> 
                                        {this.state.submitted ? (
                                            <div>
                                                <h4>You submitted successfully!</h4>
                                                <button onClick={this.newRecipe} className="py-2 px-5 mx-3 rounded border-0 text-white shadow-lg secblogs" >
                                                Add
                                                </button>
                                            </div>
                                            ) : (
                                            <div>
                                                <input onClick={this.saveRecipe} value="Submit" type="button" className="py-2 px-5 mx-3 rounded border-0 text-white shadow-lg secblogs" />
                                                
                                                <button onClick={this.refreshList} className="py-2 px-5 rounded border-0 text-white shadow-lg secblogs" >
                                                  View
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section> 
                </section>
            </div>
          )
    }
  }
  

/*export default function RecipeManager( props) {
    const [loading, setLoading] = useState(false);
    

    // handle button click of add recipe form
  const addRecipe = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:4000/recipes', { category: category, name: name,ingredients: ingredients, method: method, tips: tips }).then(response => {
      setLoading(false);
      //setUserSession(response.data.token, response.data.user);
      props.history.push('/recipemanager');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }
  return (
    <div>
        <section className="rcontainer login">
            <div className="row pt-3">
            <div className="col-lg-1 col-md-1 col-sm-2 justify-content-start">
            </div> 
            <div className="col-lg-10 col-md-10 col-sm-8  justify-content-center">
                <h4 className="text-darkblue"><b>Recipe Manager</b></h4>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-2 justify-content-end">
            </div>
            </div> 
            <section className=" shadow-lg contact rounded px-4 mcontainer">
                <div className="row mt-4">
                    <div className=" p-4 mb-5 rounded col-lg-12 col-md-12 col-sm-12 mt-4 mx-5 mt-5">
                        <form action="#">
                            <div className="row">
                                <label className="text-white" htmlform="name"><b>Category</b></label>
                                <select  name="category" id="category" className="inputbox" onClick={(e)=>{
                                    setCategory(e.target.value)}}>
                                    <option value="0">Select Category:</option>
                                    <option value="Starters">Starters</option>
                                    <option value="Complimentry Dishes">Complimentry Dishes</option>
                                    <option value="Main Course">Main Course</option>
                                    <option value="Desserts">Desserts</option>
                                    <option value="Quick & Easy">Quick & Easy</option>
                                    <option value="Diet Food">Diet Food</option>
                                    <option value="Instant Pot">Instant Pot</option>
                                    <option value="Bevrages">Bevrages</option>
                                    <option value="Kids Special">Kids Special</option>
                                    <option value="Seasonal Special">Seasonal Special</option>
                                    <option value="Baked Items">Baked Items</option>
                                    <option value="Continental">Continental</option>
                                    <option value="Traditional">Traditional</option>
                                    <option value="One Ingredient">One Ingredient</option>
                                    <option value="Salads & Soups">Salads & Soups</option>
                                    <option value="BreakFast">BreakFast</option>
                                </select>
                            </div>
                            <div className="row mt-4">
                                <label className="text-white" htmlform="name"><b>Recipe Name</b></label>
                                <input type="text" className="inputbox" placeholder="Enter Name" name="name" id="name" onClick={(e)=>{
                                    setName(e.target.value)
                                }} />
                            </div>
                            <div className="row mt-4">
                                <label className="text-white" htmlform="passward"><b>Ingredients</b></label>
                                <input type="text" className="inputbox" placeholder="Enter Ingredients" name="ingredients" id="ingredients" onClick={(e)=>{
                                    setIngredients(e.target.value)
                                }} />
                            </div>
                            <div className="row mt-4">
                                <label className="text-white" htmlform="passward"><b>Method</b></label>
                                <textarea  type="text" className="inputbox textarea" placeholder="Enter Method"name="method" id="method" onClick={(e)=>{
                                    setMethod(e.target.value)
                                }} />
                            </div>
                            <div className="row mt-4">
                                <label className="text-white" htmlform="passward"><b>Conclusion || Tips</b></label>
                                <textarea type="text" className="inputbox textarea" placeholder="Enter Conclusion || Tips" name="tips" id="tips" onClick={(e)=>{
                                    setTips(e.target.value)
                                }} />
                            </div>
                            <div className="my-4"> 
                            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                            <input className="py-2 px-5 rounded border-0 text-white shadow-lg secblogs" type="button"  value={loading ? 'Loading...' : 'Add'} onClick={addRecipe} disabled={loading} />
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
*/