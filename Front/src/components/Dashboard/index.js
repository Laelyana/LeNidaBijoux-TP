import React from 'react';

import './dashboard.scss';

const Dashboard = () => (

  <div className="dashboard">

    <h2 className="dashboard--title"> Mon tableau de bord</h2>
   
    <div className="cat cat__img cat__img--un">
    <a href="mon-compte/mes-infos">
  <div className="cat__center">
    <div className="prod__band">
      <div className="cat-card--title-band"><h4>Mes infos</h4></div>
    </div>
  </div></a>
</div>


<div className="cat cat__img cat__img--deux">
<a href="mon-compte/mes-favoris">
  <div className="cat__center">
    <div className="prod__band">
    <div className="cat-card--title-band"><h4>Mes favoris</h4></div>
    </div>
  </div></a>
</div>

<div className="cat cat__img cat__img--trois">
<a href="mon-compte/mes-commandes">
  <div className="cat__center">
    <div className="prod__band">
    <div className="cat-card--title-band"><h4>Mes commandes</h4></div>
    </div>
  </div></a>
</div>

</div>
);





export default Dashboard;
