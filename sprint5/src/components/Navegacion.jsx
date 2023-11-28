import './navegacion.css'

export default function Navegacion(){
    return (<>
        <nav className="navegacion">
            <img className="navegacion__logo" src="icons/logo.svg" alt="" />
            <div className="navegacion__enlaces">
                <a className="navegacion__enlaces--item" href="">Features</a>
                <a className="navegacion__enlaces--item" href="">Team</a>
                <a className="navegacion__enlaces--item" href="">Sign in</a>
            </div>
        </nav>
    </>)
}
