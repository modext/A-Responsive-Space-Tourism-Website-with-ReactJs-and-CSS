import React, { useState } from 'react'
import data from '../../starter-code/data.json'
import "./destination.css"

function Destination() {
    

  const world = (data.destinations)
  
const [planets] = useState(world)
const[value, setValue] = useState(0)

const {name, description,images, distance, travel} 
= planets[value]


  

        return (
          <main>
          
          <section className='destination'>
            <h1 className='pick'><span className='dspan'>01</span>Pick your Destination</h1>
            <div className='dest'>
              <article className='lefter'>
                <img src={images.png} alt={name} title={name} />
              </article>
              <article className="righter">
                  {planets.map((item, i) => (
                    <button key={i} onClick={() => 
                      setValue(i)} 
                      className={i===value && "spoton"}>{item.name}</button>
                  
                  ))}
                  <h2>{name}</h2>
                  <p key={value}> {description} </p>
                  <div className='line' />
                  <ul className='destlist'>
                    <li> <span className='distance'>Avg. Distance</span> {distance}</li>
                    <li><span className='time'>Est. Travel Time</span> {travel}</li>
                  </ul>

                </article>
            </div>
          </section>
        

        </main>
        )

    
}

export default Destination;
