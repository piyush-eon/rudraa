import "./Card.scss";

const Card = ({ title, image }) => {
  return (
    <div className="card">
      <img src={image} className="card__img" alt={title} />
      <span className="card__title">{title}</span>
      <a className="card__link" href="http://localhost:3000">
        see more..
      </a>
    </div>
  );
};

export default Card;
