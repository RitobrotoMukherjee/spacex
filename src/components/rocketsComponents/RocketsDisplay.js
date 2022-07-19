import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { handleRocketReservation } from '../../redux/rockets/rockets';

const RocketsList = ({
  id, image, name, description, reserved,
}) => {
  const dispatch = useDispatch();

  const handleReservation = ({ target }) => {
    const { type } = target.dataset;

    dispatch(handleRocketReservation({ id, type }));
  };

  let button;
  let reservedState;
  if (reserved) {
    button = <button type="button" className="btn-rocket btn-cancel" data-type="cancel" onClick={handleReservation}>Cancel Resrvation</button>;
    reservedState = <span className="reserved-state">Reserved</span>;
  } else {
    button = <button type="button" className="btn-rocket btn-reserve" data-type="reserve" onClick={handleReservation}>Reserve Rocket</button>;
    reservedState = <></>;
  }
  return (

    <div>
      <ul className="rocket-container">
        <li key={id} className="Rocket">
          <img
            className="Rocket-Part1"
            src={image}
            alt="rocket"
          />

          <div className="Rocket-Detail Rocket-Part2">
            <h2 className="name">{name}</h2>
            <p className="description">
              {reservedState}
              {description}
            </p>
            {button}
          </div>
        </li>
      </ul>
    </div>

  );
};

RocketsList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  image: PropTypes.node.isRequired,
};

export default RocketsList;
