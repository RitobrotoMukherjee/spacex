import { useSelector } from 'react-redux';

const RocketsList = () => {
  const { Rockets } = useSelector((state) => state.rockets);

  return (

    <div>
      <ul>

        {Rockets.map((Rocket) => (
          <li key={Rocket.id} className="Rocket">
            <img
              className="Rocket-Part1"
              src={Rocket.image}
              alt="rocket"
            />

            <div className="Rocket-Detail Rocket-Part2">
              <h2 className="name">{Rocket.name}</h2>
              <p className="description">{Rocket.description}</p>

            </div>
          </li>

        ))}
      </ul>
    </div>

  );
};

export default RocketsList;
