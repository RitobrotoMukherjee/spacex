import '../css/Missions.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';
import MissionTable from './Mission-components/MissionsTable';

const Missions = () => {
  const dispatch = useDispatch();

  const { loading, missionList } = useSelector((state) => state.missions);

  useEffect(() => {
    if (missionList.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch]);

  return (
    <section className="mission-container">
      {loading
        && (<h2 className="loading">Loading...</h2>)}
      {!loading && (<MissionTable />)}
    </section>
  );
};

export default Missions;
