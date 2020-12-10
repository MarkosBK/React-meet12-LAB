import React from "react";

export function CarouselItem(props) {
  const item = props.item;
  return (
    <div className="carousel-item" key={item.title}>
      <div
        className="d-block w-100 preview"
        style={{ backgroundImage: `url(${item.preview})` }}
      ></div>

      <div className="carousel-caption d-none d-md-block">
        <h3>{item.title}</h3>
        <h5>{item.description}</h5>
      </div>
    </div>
  );
}

export default function CarouselInfo(props) {
  let creations = props.creations;
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-ride="carousel"
      style={{ width: "75%" }}
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active" key={creations[0].title}>
          <div
            className="d-block w-100 preview"
            style={{ backgroundImage: `url(${creations[0].preview})` }}
          ></div>

          <div className="carousel-caption d-none d-md-block">
            <h3>{creations[0].title}</h3>
            <h5>{creations[0].description}</h5>
          </div>
        </div>

        {creations.slice(1).forEach((item) => {
          return <CarouselItem item={item}></CarouselItem>;
        })}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
