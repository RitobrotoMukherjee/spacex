import React, { useEffect } from 'react';
import '../css/Rockets.css';
import { useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  return (
    <></>
  );
};

export default Rockets;
