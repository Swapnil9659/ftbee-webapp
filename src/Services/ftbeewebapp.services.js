import http from "../Utils/Common";

class FtbeewebappDataService {
  
  create(data) {
    console.log("post data1",data)
    return http.post("/recipes", data);
  }
  getAll() {
    return http.get("/recipes");
  }

  get(id) {
    return http.get(`/recipes/${id}`);
  }

  update(id, data) { 
    return http.put(`/recipes/${id}`, data);
  }

  delete(id) {
    return http.delete(`/recipes/${id}`);
  }

  deleteAll() {
    return http.delete(`/recipes`);
  }

  findByCategories(category) {
    return http.get(`/recipes?Category=${category}`);
  }
}

export default new FtbeewebappDataService();
