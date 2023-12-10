import React from 'react'
import "./Featured.scss"

export const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Найди <i>лучшие</i> учебные материалы по любым предметам</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./img/search.png" alt=""  />
                        <input type="text" placeholder='aaaaaaaaaa bbbbbbb' />
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>WordPress</button>
                    <button>Logo Design</button>
                    <button>AI Services</button>
                </div>
            </div>
            <div className="right">
            <img src="./img/ownerd.png" alt="" />
            </div>
        </div>
    </div>
  )
}
