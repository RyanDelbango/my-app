import classes from './Profile.module.css';
import { useNavigate } from 'react-router-dom';
import React from 'react'

const Profile = () => {
  const navigate = useNavigate()

  return (
    <div className={classes.Profile}>
      <h2 onClick={() => navigate('/')}>Hello Worldlies</h2>
    </div>
  );
}

export default Profile;
