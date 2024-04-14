import profilePic from "./assets/image.png"

function Card(){
    return (
        <div className="card">
            <img className = "card-image"alt="Profile Picture" src={profilePic}></img>
            <h2>Vedansh</h2>
            <p>I am a student at vit Chennai and i m working on this app</p>
        </div>
    )
}

export default Card;