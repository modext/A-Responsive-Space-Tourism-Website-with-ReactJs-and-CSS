import React, { useState } from 'react'
import "./crew.css"
import data from '../../starter-code/data.json'
import {BiCircle} from "react-icons/bi"

function Crew() {
    const world = (data.crew)

    const [people] = useState(world)
    const [value, setValue] = useState(0)


    const {name, bio, images, role} 
    = people[value]


        return (
            <>
                <section className='crewing'>
                    <h1 className='pick'><span className='dspan'>02</span>Meet your Crew</h1>
                        <div className='crew'>
                            <article className="left-crew">
                                <div>
                                    <h3>{role}</h3>
                                    <h2>{name}</h2>
                                    <p key={value}> {bio} </p>
                                </div>
                                <div>
                                    
                                        {people.map((item, i) => (
                                        <button key={i} onClick={() => 
                                        setValue(i)} 
                                        className={i===value && "spoton"}><BiCircle /></button>                 
                                    ))}

                                </div>
                                
                                
                            </article>
                            <article className='right-crew'>
                                <img src={images.png} alt={name} title={name} />
                            </article>
                    </div>
                </section>
            </>
        )

    
}
export default Crew
