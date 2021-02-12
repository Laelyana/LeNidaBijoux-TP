import React from 'react';

import './dashboard.scss';

const Dashboard = () => (
  <div className="dashboard">
    <h2> Mon tableau de bord</h2>
    <div className="dashboard__items">
      <div className="dashboard__items--box"><h4>Mon profil</h4></div>
      <div className="dashboard__items--box"><h4>Mes favoris</h4></div>
      <div className="dashboard__items--box"><h4>Mes commandes</h4></div>
    </div>
  </div>
)

export default Dashboard;
