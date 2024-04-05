import React from 'react'
import Getrecipe from './Getrecipe'
import { ViewRecipe } from './ViewRecipe'
import ViewBlogs from './ViewBlogs'
import ShortTipsTab from './ShortTipsTab'
//import { Container } from 'react-bootstrap'

export default function Home() {
  return (
    <div className='mx-3'>
        <section className="latestrec">
            <Getrecipe/>
            <div className="mx-2 mt-3 mb-5 border-bottom"></div>
        </section>
        <section>
            <div className="col-lg-12 col-md-12 col-sm-12  text-center justify-content-center">
                <h4 className="text-white">- Short tips -</h4>
            </div>
            <ShortTipsTab />
            <div className="mx-2 mb-4 border-bottom"></div>
        </section>
        <section>
            <ViewRecipe />
            <div className="mx-2 mb-4 my-4 pt-3 border-bottom"></div>
        </section>
        <section>
            <ViewBlogs />
        </section>
    </div>
  )
}

