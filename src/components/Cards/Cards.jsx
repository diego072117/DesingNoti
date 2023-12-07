import data from "@/data/data.json";
import "@/scss/Cards.scss";

export const Cards = () => {
  return (
    <div className="container-cards">
      {data.map((card) => (
        <div className="container-card" key={card.id}>
          <div className="img-card">
            <img src={card.img} alt={card.name} />
          </div>
          <div className="info-card">
            <h2>{card.id}</h2>
            <h3>{card.name}</h3>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
