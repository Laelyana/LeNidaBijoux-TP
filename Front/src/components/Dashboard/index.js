import React from 'react';

import './dashboard.scss';

const Dashboard = () => (
  <div className="dashboard">
    <h2> Mon tableau de bord</h2>
    <div className="dashboard__items">
      <a className="dashboard__items--box" href="/mon-compte/mes-infos"><div><h4>Mon profil</h4></div></a>
      <a className="dashboard__items--box" href="/mon-compte/mes-favoris"><div><h4>Mes favoris</h4></div></a>
      <a className="dashboard__items--box" href="/mon-compte/mes-commandes"><div><h4>Mes commandes</h4></div></a>
    </div>
  </div>
)

export default Dashboard;
