import Newsitem from "./Newsitem";
import "./Newscomponent.css"
import React, { useDebugValue, useEffect, useState } from 'react'
import axios from "axios";

function Newscomponent({ category }) {

    const [article, setArticle] = useState([])

    useEffect(() => {
        async function fetchdata() {

            // const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=cded4670033446f1aa934f24db763ef9")
            // for category purpose 
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${category}&apiKey=cded4670033446f1aa934f24db763ef9`)
            // console.log(response)
            console.log(response.data.articles)
            setArticle(response.data.articles)
        }
        fetchdata();
    }, [category])




    return (
        <div className="yuvi">
            <h1 className="text-center my-4"> Top HeadLines </h1>
            <div className="container ">

                <div className="row" >



                    {

                        article.map((value) => {
                            return (


                                <div className="col-md-4">

                                    <Newsitem key={value.author} urlToImage={value.urlToImage} title={value.title} description={value.description} url={value.url} />
                                </div>


                            )
                        })


                    }
                </div>
            </div>

        </div>
    )
}

export default Newscomponent