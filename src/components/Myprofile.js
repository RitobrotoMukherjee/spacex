import '../css/Missions.css';
import '../css/Profile.css';
import { useSelector } from 'react-redux';
import ProfileTable from './Profile-components/ProfileTables';

const MyProfile = () => {
  const { Rockets } = useSelector((state) => state.rockets);

  const reservedRockets = Rockets.filter(({ reserved }) => reserved === true);

  return (
    <section className="mission-container">
      <div className="profile-holder">
        <ProfileTable dataList={reservedRockets} header="My Rockets" type="rockets" />
        <ProfileTable dataList={reservedRockets} header="My Missions" type="rockets" />
      </div>
    </section>
  );
};

export default MyProfile;
