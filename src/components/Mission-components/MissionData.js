import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { handleReservation } from '../../redux/missions/missions';

const MissionData = ({
  id, name, description, reserved,
}) => {
  const dispatch = useDispatch();

  const handleMissionReservation = ({ target }) => {
    const { type } = target.dataset;
    dispatch(handleReservation({ id, type }));
  };

  return (
    <tr className="row">
      <td className="column mission-name">{name}</td>
      <td className="column mission-desc">{description}</td>
      <td className="column mission-status">
        {!reserved && (<p className="not-reserved">Not A Member</p>)}
        {reserved && (<p className="reserved">Active Member</p>)}
      </td>
      <td className="column mission-button">
        {!reserved && (
          <button type="button" className="btn" data-type="join" onClick={handleMissionReservation}>Join Mission</button>
        )}
        {reserved && (
          <button type="button" className="btn-leave" data-type="leave" onClick={handleMissionReservation}>Leave Mission</button>
        )}
      </td>
    </tr>
  );
};

MissionData.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionData;
