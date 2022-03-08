import React  from 'react';
import './home.css'

function Home() {
    return (
        <>
            <section className="home">
                <div className="overlay">
                    <article className='left'>
                        <h1 className="firster">So, you want to travel to</h1>
                        <h2 className='topic'>Space</h2>
                        <p>
                            Let’s face it; if you want to go to space, you might as well genuinely go to 
                            outer space and not hover kind of on the edge of it. Well sit back, and relax 
                            because we’ll give you a truly out of this world experience!
                        </p>
                    </article>
                    <article className="right">
                        <a href="/destination" className='btn btn-Donate' >EXPLORE </a>
                    </article>
                </div>
            </section>
        </>
    )
}


export default Home
