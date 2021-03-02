import React from 'react';

import './dashboard.scss';

const Dashboard = () => (

  <div className="dashboard">

    <h2 className="dashboard--title"> Mon tableau de bord</h2>

    <div className="cat cat__img cat__img--un">
  <div className="cat__center">
    <div className="prod__band">
      <div className="cat-card--title-band"><h4><a href="mon-compte/mes-infos">Mes infos</a></h4></div>
    </div>
  </div>
</div>

<div className="cat cat__img cat__img--deux">
  <div className="cat__center">
    <div className="prod__band">
    <div className="cat-card--title-band"><h4><a href="mon-compte/mes-favoris">Mes favoris</a></h4></div>
    </div>
  </div>
</div>

<div className="cat cat__img cat__img--trois">
  <div className="cat__center">
    <div className="prod__band">
    <div className="cat-card--title-band"><h4><a href="mon-compte/mes-commandes">Mes commandes</a></h4></div>
    </div>
  </div>
</div>

</div>
);





export default Dashboard;
