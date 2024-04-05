import React, { useState, useMemo } from 'react';
import Getrecipe from '../Getrecipe'
import BackToTopBtn from '../BackToTopBtn'
import Pagination from '../Pagination';
import data from "../../Jsondoc/Breakfast.json";
import {  Routes, NavLink, Route} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
data.items.map((d,index) =>(
    d.import
))

let PageSize = 8;

export default function RecipeHome() {
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return data.items.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
  return (
    <div className='mx-3'>
        <Getrecipe/>
        <div className="mx-2 border-bottom border-secondary"></div>
            <section className="recipe">
                <div className="row pt-3">
                    <div className="col-lg-1 col-md-1 col-sm-2 justify-content-start">
                    </div> 
                    <div className="col-lg-12 col-md-12 col-sm-12 bg-primary px-5 rounded-top py-3">
                    <span className="text-white pt-2 text-uppercase ms-3 fs-2 fw-normal">Recipes</span>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 justify-content-end">
                    </div>
                </div> 
                <div className="shadow-lg px-5 bg-primary rounded-bottom pb-4 mb-5">
                    <div className='row mb-3'>
                        {currentTableData.map((d,index) =>(
                            <div className='col-lg-2 col-md-4 col-sm-12 m-3 w-21' key={d.id}>
                                <div className="row"><img src={d.picture} className="rimg" /></div>
                                <Nav className="row"><NavLink className="btn rounded-3 py-2 w-100 " to={d.link}><b>{d.name}</b><i class="fa fa-hand-pointer fw-light fs-6 ps-2 rounded-circle xbootstrap ms-1"></i></NavLink></Nav>
                                <div className="rounded">
                                    <Routes>
                                        <Route path={d.link} element={ d.component} />
                                    </Routes>
                                </div>  
                            </div>
                        ))}
                    </div>
                    <Pagination
                    className="pagination-bar ms-3 w-75 py-1 rounded"
                    currentPage={currentPage}
                    totalCount={data.items.length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                    />
                </div>
            </section>   
        </div>
    )
}
