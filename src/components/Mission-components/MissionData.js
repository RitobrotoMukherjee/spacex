import React from 'react';
import PropTypes from 'prop-types';

const MissionData = ({ name, description, reserved }) => (
  <tr className="row">
    <td className="column mission-name">{name}</td>
    <td className="column mission-desc">{description}</td>
    <td className="column mission-status">
      {!reserved && (<p className="not-reserved">Not A Member</p>)}
      {reserved && (<p className="reserved">Active Member</p>)}
    </td>
    <td className="column mission-button">
      {!reserved && (
      <button type="button" className="btn">Join Mission</button>
      )}
      {reserved && (
      <button type="button" className="btn-leave">Leave Mission</button>
      )}
    </td>
  </tr>
);

MissionData.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionData;
