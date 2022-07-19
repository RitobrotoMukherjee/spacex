import '../css/Missions.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();

  const { loading, missionList } = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  if (loading) {
    return (
      <div><h1>Loading...</h1></div>
    );
  }
  return (
    <div>
      {missionList}
    </div>
  );
};

export default Missions;
