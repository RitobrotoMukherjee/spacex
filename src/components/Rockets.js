import React, { useEffect } from 'react';
import '../css/Rockets.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';
import RocketsList from './rocketsComponents/RochetsList';

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
      {!loading && (
        <div className="rocket-container">
          <RocketsList />
        </div>
      )}
    </div>
  );
};

export default Rockets;
