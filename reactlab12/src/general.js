import React from "react";
export default function CardInfo(props) {
  let { name, birth, died, birthLocation, photo } = props.info;
  return (
    <div className="card" style={{ width: "25%" }}>
      <div
        className="card-img-top preview"
        style={{ backgroundImage: `url(${photo})`, height: "350px", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}
      ></div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Дата рождения: {birth}</p>
        <p className="card-text">Дата смерти: {died}</p>
        <p className="card-text">Место рождения: {birthLocation}</p>
      </div>
    </div>
  );
}