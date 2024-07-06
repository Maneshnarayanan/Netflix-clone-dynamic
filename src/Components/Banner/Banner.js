import React from 'react'
import './Banner.css'
function Banner() {
    return (
        <div className='banner'>
            <div className="content">
                <h1 className="title">Movie name</h1>
                <div className="banner-buttons">
                    <button className="button">Play</button>
                    <button className="button">+ My list</button>
                    <h1 className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis harum ducimus unde neque iure sapiente quibusdam nesciunt distinctio totam dolorem, nobis non illum repellat laborum? A hic quae possimus non?</h1>

                </div>
            </div>

            <div className="fade"></div>

        </div>
    )
}

export default Banner