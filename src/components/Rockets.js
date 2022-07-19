import React, { useEffect } from 'react';
import '../css/Rockets.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const { loading, Rockets } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (Rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch]);

  return (

    <div>
      {loading && <div>Loading ...</div>}
      {!loading && Rockets.length ? (
        <div>

          {Rockets.map((Rocket) => (
            <div key={Rocket.id} className="Rocket">
              <img
                className="Rocket-Part1"
                src={Rocket.image}
                alt="rocket"
              />
              <div className="Rocket-Detail Rocket-Part2">
                <h2 className="name">{Rocket.name}</h2>
                <p className="description">{Rocket.description}</p>

              </div>

            </div>
          ))}

        </div>

      ) : null}
      ;
    </div>
  );
};

export default Rockets;
