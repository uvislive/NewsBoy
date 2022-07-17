import React from 'react'

function Newsitem({ url, urlToImage, title, description }) {
    return (
        <div className="newsitem">






            <div className="card" style={{ width: "18rem" }}>
                <img src={urlToImage} className="card-img-top" alt="image" />
                <div className="card-body">
                    <h5 className="card-title"> {title}</h5>
                    <p className="card-text">{description}...</p>
                    <a href={url} className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>



    )
}

export default Newsitem