import React, { useState } from 'react'
import data from '../../starter-code/data.json'
import "./technology.css"
import {BiCircle} from "react-icons/bi"

function Technology() {   

        const world = (data.technology)
        
    const [cards] = useState(world)
    const[value, setValue] = useState(0)
    
    const {name, description,images} 
    = cards[value]
    
    return (
        <main>
            <section className='teching'>
                <h1 className='pick'><span className='dspan'>02</span>space launch 101</h1>
                    <div className='tech'>
                        <article className="left-tech">
                            <div className='left-tech-button'>
                                {cards.map((item, i) => (
                                <button key={i} onClick={() => 
                                setValue(i)} 
                                className={i===value && "spoton"}>{i +1}</button>
                            
                                ))}
                            </div>
                            
                            <div className='left-tech-tem'>
                                <h3 className='he'>the terminology...</h3>
                                <h2>{name}</h2>
                                <p key={value}> {description} </p>
                            </div>
                            
                            
                        </article>
                        <article className='right-tech'>
                            <picture>
                                <source media='(min-width: 64em)' srcSet={images.portrait} />
                                <img src={images.landscape} alt={name} title={name} />
                            </picture>
                            
                        </article>
                </div>
            </section>
        </main>
    )
}

export default Technology
