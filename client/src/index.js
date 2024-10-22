import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';

import Insereretapeconst from './insereretapeconst.js';
import Insereretapeext from './insereretapeext.js';
import EtapeconstAdmin from './EtapeconstAdmin.js';
import EtapeextAdmin from './EtapeextAdmin.js';
import Projetconst from './projetconst.js';
import Projetext from './projetext.js';
import Projetconstadmin from './projetconstadmin.js';
import Projetextadmin from './projetextadmin.js';
import Home from './Home.js';
import Homeadmin from './Homeadmin.js';
import InsererConstruction from './insererConstruction.js'
import Insererextension from './insererextension.js'
import PlanAdmin from './PlanAdmin.js'
import HistoriqueExt from './HistoriqueExt.js'
import HistoriqueConst from './HistoriqueConst.js'
import HistoriqueCstAdmin from './HistoriqueCstAdmin.js'
import HistoriqueExAdmin from './HistoriqueExAdmin.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projetconst" element={<Projetconst />} />
      <Route path="/projetconstadmin" element={<Projetconstadmin />} />

      <Route path="/EtapeconstAdmin" element={<EtapeconstAdmin />} />
      <Route path="/EtapeextAdmin" element={<EtapeextAdmin />} />

      <Route path="/projetextadmin" element={<Projetextadmin />} />
      <Route path="/projetext" element={<Projetext />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Homeadmin" element={<Homeadmin />} />
      <Route path="/insereretapeconst" element={<Insereretapeconst />} />
      <Route path="/insereretapeext" element={<Insereretapeext />} />
      <Route path="/InsererConstruction" element={<InsererConstruction />} />
      <Route path="/Insererextension" element={<Insererextension />} />
    
      <Route path="/PlanAdmin" element={<PlanAdmin />} />
      <Route path="/HistoriqueExt" element={<HistoriqueExt />} />
      <Route path="/HistoriqueConst" element={<HistoriqueConst />} />
      <Route path="/HistoriqueCstAdmin" element={<HistoriqueCstAdmin />} />
      <Route path="/HistoriqueExAdmin" element={<HistoriqueExAdmin />} />
    </Routes>
  </Router>
  
);

