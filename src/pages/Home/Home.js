import Card from "../../components/Card/Card";
import MainButton from "../../components/MainButton";
import { data } from "../../data/data";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="first">
        <div className="first__text">
          <span className="first__text--title">{data.title}</span>
          <span className="first__text--subtitle">{data.subTitle}</span>
          <MainButton>Know More</MainButton>
        </div>
        <img className="first__img" src={data.img1} alt={data.title} />
      </div>

      <div className="second pad">
        <img alt="img" className="second__img" src={data.img2} />
        <img alt="img" className="second__img2" src={data.img3} />
        <div className="second__text">
          <span className="second__text--subtitle">{data.subTitle}</span>
        </div>
      </div>

      <div className="third pad">
        <div className="third__head">
          <span className="third__head--text">{data.title2}</span>
          <img alt="img" src="/path.svg" width="100%" />
        </div>
        <div className="third__cards">
          {data.list.map((card) => {
            return <Card title={card.title} image={card.image} />;
          })}
        </div>
      </div>
      <div className="fourth pad">
        <img src={data.img4} className="fourth__img" alt={data.title} />
        <div className="fourth__text">
          <span className="fourth__text--title">{data.title}</span>
          <span className="fourth__text--subtitle">{data.subTitle}</span>
          <MainButton>Know More</MainButton>
        </div>
      </div>
      <div className="fifth pad">
        {/* <img src={data.img2} className="fifth__img" /> */}
      </div>
    </div>
  );
};

export default Home;
