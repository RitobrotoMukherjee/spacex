import '../css/Missions.css';
import '../css/Profile.css';
import { useSelector } from 'react-redux';
import ProfileTable from './Profile-components/ProfileTables';

const MyProfile = () => {
  const { Rockets } = useSelector((state) => state.rockets);
  const { missionList } = useSelector((state) => state.missions);

  const reservedRockets = Rockets.filter(({ reserved }) => reserved);
  const joinedMissions = missionList.filter(({ reserved }) => reserved);

  return (
    <section className="mission-container">
      <div className="profile-holder">
        <ProfileTable dataList={reservedRockets} header="My Rockets" type="rockets" />
        <ProfileTable dataList={joinedMissions} header="My Missions" type="missions" />
      </div>
    </section>
  );
};

export default MyProfile;
