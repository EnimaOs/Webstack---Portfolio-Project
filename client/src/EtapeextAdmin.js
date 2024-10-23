import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { HomeIcon, PlusCircleIcon, LogoutIcon, ClockIcon } from '@heroicons/react/solid';
import logo from './images.jpeg';
function EtapeextAdmin() {
  const location = useLocation();
  const { id } = location.state || {};
  const [selectedPlan, setSelectedPlan] = useState('');
const [plans, setPlans] = useState([]);

  const [showDropdownn, setShowDropdownn] = useState(false);
  const [showDropdownnn, setShowDropdownnn] = useState(false);
  const [nomValue, setNomValue] = useState(id ? parseInt(id) : '');
const[prov,setProv]=useState('');
  const [message, setMessage] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownnnn, setShowDropdownnnn] = useState(false);
  const [showDropdownnnnn, setShowDropdownnnnn] = useState(false);


  function charger() {
    axios.post('http://localhost:3011/etapeextension')
      .then(response => {
        setMessage(response.data.results);
        console.log(response.data.results,'oul');
      })
      .catch(error => {
        console.error('Error fetching message:', error);
      });
  }

  function fetchPlans() {
    axios.post('http://localhost:3011/api/plans')
      .then(response => {
        console.log(response.data.results);
        setPlans(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching plans:', error);
      });
  }

  useEffect(() => {
   fetchPlans();
    charger();
  }, []);
  const handlePlanChange = (e) => {
    const selectedPlanValue = e.target.value;
    setSelectedPlan(selectedPlanValue); 
  
   
    if (selectedPlanValue !== '') {
      axios.post('http://localhost:3011/filtrerparplan', { idPlan: selectedPlanValue })
        .then(response => {
          setMessage(response.data.results);
        })
        .catch(error => {
          console.error('Erreur lors du filtrage par plan:', error);
        });
    }
    else{
      charger();
    }
  };
  




  const handleDelete = (id,idetat) => {
    if(idetat<5){
    axios.post('http://localhost:3011/api/modifieretapeextension', {id:id,idetat:idetat})
      .then(response => {
      
        charger(); 
      })
      .catch(error => {
        console.error('Erreur lors de la suppression du projet:', error);
      });}
      else{
        alert("l'etape est deja livré")
      }
  };


  

  
  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };
  const handleDropdownTogglee = () => {
    setShowDropdownn(!showDropdownn);
  };
  const handleDropdownToggleee = () => {
    setShowDropdownnn(!showDropdownnn);
  };
  const handleDropdownToggleeee = () => {
    setShowDropdownnnn(!showDropdownnnn);
  };
  const handleDropdownToggleeeee = () => {
    setShowDropdownnnnn(!showDropdownnnnn);
  };

  return (
    <div>
    <div>
    <div>
  <h1 className="text-5xl font-extrabold text-center text-gray-800 ">Académie</h1>
  <h1 className="text-2xl font-semibold text-center text-gray-700 relative top-16 ">Etapes</h1>
</div>

</div>

<div className="flex">
  {/* Sidebar */}
  <div className="fixed inset-y-0 left-0 bg-green-900 w-64 p-4">
    <div className="text-white">
      <img src={logo} alt="Logo" className="ml-12 pb-16" style={{ maxWidth: '120px' }} />
      <nav>
        <ul>
          <li className="mb-4">
            <Link to="/Homeadmin" className="text-white font-medium hover:bg-green-600 py-1 rounded-sm px-2 text-lg flex">
              <HomeIcon className="h-5 w-5 mr-2 mt-1" />Accueil
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/PlanAdmin" className="text-white font-medium hover:bg-green-600 py-1 rounded-sm px-2 text-lg flex">
              <PlusCircleIcon className="h-5 w-5 mr-2 mt-1" />Créer Plan
            </Link>
          </li>
          <li className="mb-3">
            <button onClick={handleDropdownToggle} className="text-white hover:bg-green-600 font-medium py-1 px-2 rounded-sm text-lg block">
              Projets
              <svg className="h-4 w-4 inline-block ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 12l-8-8 1.5-1.5L10 9.986l6.5-6.5L18 4z" clipRule="evenodd" />
              </svg>
            </button>
            {showDropdown && (
              <div className="absolute mt-1 w-64 bg-green-300 rounded-lg shadow-lg">
                <ul>
                  <li>
                    <Link to="/projetextadmin" className="text-black font-medium block px-4 py-2 hover:bg-green-400">Extension</Link>
                  </li>
                  <li>
                    <Link to="/projetconstadmin" className="text-black font-medium block px-4 py-2 hover:bg-green-400">Construction</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="mb-3">
            <button onClick={handleDropdownToggleeee} className="text-white hover:bg-green-600 font-medium py-1 px-2 rounded-sm text-lg flex">
              <ClockIcon className="h-5 w-5 mr-2 mt-1" />Historique
            </button>
            {showDropdownnnn && (
              <div className="absolute mt-1 w-64 bg-green-300 rounded-lg shadow-lg">
                <ul>
                  <li>
                    <Link to="/HistoriqueCstAdmin" className="text-black font-medium block px-4 py-2 hover:bg-green-400">Construction</Link>
                  </li>
                  <li>
                    <Link to="/HistoriqueExAdmin" className="text-black font-medium block px-4 py-2 hover:bg-green-400">Extension</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="mb-52">
            <button onClick={handleDropdownToggleee} className="text-white hover:bg-green-600 font-medium py-1 px-2 rounded-sm text-lg flex">
              <ClockIcon className="h-5 w-5 mr-2 mt-1" />Etapes
            </button>
            {showDropdownnn && (
              <div className="absolute mt-1 w-64 bg-green-300 rounded-lg shadow-lg">
                <ul>
                  <li>
                    <Link to="/EtapeconstAdmin" className="text-black font-medium block px-4 py-2 hover:bg-green-400">Construction</Link>
                  </li>
                  <li>
                    <Link to="/EtapeextAdmin" className="text-black font-medium block px-4 py-2 hover:bg-green-400">Extension</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="mb-3">
            <Link to="/" className="text-white hover:bg-green-600 font-medium py-1 px-2 rounded-sm text-lg flex"><LogoutIcon className="h-5 w-5 mr-2 mt-1" />Déconnexion</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>
      <div className=" ml-64 flex justify-center items-center relative top-80">
      <div className=" w-10/12 shadow-lg rounded-lg overflow-hidden margin: 0 auto">
      <select value={selectedPlan} onChange={handlePlanChange} className="p-2 mt-4 mb-4 bg-gray-100 border border-gray-300 rounded-md">
            <option value=""></option>
            {plans.map(plan => (
              <option key={plan.id_plan} value={plan.id_plan}>{`${plan.datedebut} - ${plan.datefinale}`}</option>
            ))}
          </select>
    <table className="table-auto w-full">
      <thead className="bg-gray-200">
        <tr>
        <th className="px-4 py-2">Direction Provinciale</th>
          <th className="px-4 py-2">Etape</th>
          <th className="px-4 py-2">Etat </th>
          <th className="px-4 py-2">Année budgétaire  </th>
          <th className="px-4 py-2">Remarques</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {message && message.map((rowData, index) => (
          <tr className={`text-center ${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'}`} key={index}>
            <td className="px-4 py-2">{rowData.username}</td>
            <td className="px-4 py-2">{rowData.etape}</td>
            <td className="px-4 py-2">{rowData.etat}</td>
            <td className="px-4 py-2">{rowData.annee}</td>
            <td className="px-4 py-2">{rowData.remarque}</td>
            <td className="px-4 py-2">
            <button onClick={() => handleDelete(rowData.idetape,rowData.idetat)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">accepter</button>
            
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>




  



      
  </div>
 
  );
}

export default EtapeextAdmin;