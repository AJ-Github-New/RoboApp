import React from "react"

function Card({img,name,username,email,search}) {
  return (
    <div className="card align d-inline-flex addscale" style={{width: "18rem"}}>
      <img className="card-img-top" style={{backgroundColor:"lightgreen"}} src={img} alt="robo"/>
      <div className="card-body">
          <p className="card-title">{name}</p>
          <p className="card-text">{username}</p>
          <p className="card-text">{email}</p>
      </div>
      

    </div>
  );
}

export default Card;
