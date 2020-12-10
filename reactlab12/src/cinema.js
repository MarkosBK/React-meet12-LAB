import React from "react";

export default function Cinema(props) {
  let { title, producer, release, actors, company, preview } = props.cinema;
  return (
    <div className="card" style={{ width: "18rem" }}>
        <img src={preview} style={{width: "200px"}} class="card-img-top" alt="..."></img>
      {/* <div style={{backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url('${preview}')`}} class="card-img-top"></div> */}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Producer {producer}</li>
        <li className="list-group-item">Release: {release}</li>
        <li className="list-group-item">Company: {company}</li>
        <li className="list-group-item">
          Actors:{" "}
          {actors.forEach((item) => {
            return <span>{item}</span>;
          })}
        </li>
      </ul>
    </div>
  );
}
