import { useSelector } from 'react-redux';
import MissionData from './MissionData';

const MissionTable = () => {
  const { missionList } = useSelector((state) => state.missions);

  return (
    <table className="missionTable">
      <thead>
        <tr>
          <th className="column table-heading">Mission</th>
          <th className="column table-heading">Description</th>
          <th className="column table-heading">Status</th>
          <th className="column table-heading">{' '}</th>
        </tr>
      </thead>
      <tbody>
        {missionList.map((mission) => (
          <MissionData
            key={mission.mission_id}
            name={mission.mission_name}
            description={mission.description}
            reserved={mission.reserved}
          />
        ))}
      </tbody>
    </table>
  );
};

export default MissionTable;
