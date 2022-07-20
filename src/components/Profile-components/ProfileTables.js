import PropTypes from 'prop-types';
import RandomId from '../../helpers/Random';

const ProfileTable = ({ header, dataList, type }) => (
  <div className="Flex">
    <h2 className="profile-heading table-heading">{header}</h2>
    <table className="profile-table">
      <tbody>
        {dataList.map((data) => (
          <tr key={RandomId()}>
            <td className="column data-name">
              {type === 'rockets' ? data.name : data.mission_name}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

ProfileTable.propTypes = {
  header: PropTypes.string.isRequired,
  dataList: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};

export default ProfileTable;
