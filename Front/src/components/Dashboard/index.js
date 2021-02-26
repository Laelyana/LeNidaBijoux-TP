import React from 'react';

import './dashboard.scss';

const Dashboard = () => (
  <div className="dashboard">
    <h2> Mon tableau de bord</h2>
    <div className="dashboard__items">
      <div className="dashboard__items--haut profil"></div>
      <div className="dashboard__items--bas"><a href="mon-compte/mes-infos"><h4>Mon profil</h4></a></div>
      </div>
      <div className="dashboard__items">
      <div className="dashboard__items--haut favoris"></div>
      <div className="dashboard__items--bas"><a href="mon-compte/mes-favoris"><h4>Mon profil</h4></a></div>
      </div>
      <div className="dashboard__items">
      <div className="dashboard__items--haut commandes"></div>
      <div className="dashboard__items--bas"><a href="mon-compte/mes-commandes"><h4>Mon profil</h4></a></div>
      </div>
    </div>
);

export default Dashboard;
