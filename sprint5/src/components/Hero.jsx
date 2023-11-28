import "./hero.css"

export default function Hero() {
    return (<>
        <div className="hero-container">
            <img className="hero__image" src="images/illustration-intro.png" alt="" />
            <h1 className="hero__title"> All your files in one secure location, <br/> accesible anywhere </h1>
            <p className="hero__text"> Fylo stores all your most important files in one secure location. <br/>  Access them wherever you need, share and collaborate with <br/> friends, family and co-workers.</p>
            <button className="hero__button" type="button"> Get Started</button>
        </div>
    </>)
}