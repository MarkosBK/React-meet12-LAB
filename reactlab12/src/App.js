import "./App.css";
import CarouselInfo from "./carouselCreation";
import Cinema from "./cinema";
import CardInfo from "./general";
function App() {
  let william = {
    name: "Уильям Шекспир",
    birth: "не позднее 26 апреля 1564",
    died: "23 апреля (3 мая) 1616",
    birthLocation: "Стратфорд-апон-Эйвон, Уорикшир, Англия",
    photo: "shakespeare.png",
  };
  let creations = [
    {
      title: "title1",
      description: "description1description1",
      preview: "1.jpg",
    },
    {
      title: "title2",
      description: "description1description2",
      preview: "2.jpg",
    },
    {
      title: "title3",
      description: "description1description3",
      preview: "3.jpg",
    },
    {
      title: "title4",
      description: "description1description4",
      preview: "4.jpg",
    },
  ];
  let cinema = {
    title: "title1",
    producer: "producer1",
    release: "20.12.2020",
    actors: ["actor1", "actor2", "actor3"],
    company: "company1",
    preview: "logo512.png",
  };
  return (
    <div className="container">
      <div className="d-flex" style={{ height: "700px" }}>
      <CardInfo info={william}></CardInfo>
      <CarouselInfo creations={creations}></CarouselInfo>
      </div>
      
      <hr></hr>
      <Cinema cinema={cinema}></Cinema>
    </div>
  );
}

export default App;
