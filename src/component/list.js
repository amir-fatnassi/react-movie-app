import React from 'react'
import Item from './item'
import './header.css'

function List({movie , addM}) { 
        return ( 
            <div className="containerList">
                <input className="serchButton" type="button" value='Add Movies'
                onClick={()=>{
                    addM({
                        srcImg:prompt("'movi image src:'"),
                        title: prompt('movie title:'),
                        date: Number(prompt('movie date: ')),
                        rating: Number(prompt('movie rating: ')),
                        type:prompt('movie type:')
                    })
                }
                }
                />
                <div className="rowList">
                    {movie.map((el,i)=>{return <Item key={i} el={el} />})}
                </div>
            </div>
        );
    }
export default List;