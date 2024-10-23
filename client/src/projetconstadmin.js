import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { HomeIcon, PlusCircleIcon, LogoutIcon, ClockIcon } from '@heroicons/react/solid';
import logo from './images.jpeg';
function Projetconst() {
  const location = useLocation();
  const { id } = location.state || {};
  const [direction, setdirection] = useState('');
  const [datedebut, setdatedebut] = useState('');
  const [datefin, setdatefin] = useState('');
  const [showDropdownn, setShowDropdownn] = useState(false);
  const [showDropdownnn, setShowDropdownnn] = useState(false);
  const [nomValue, setNomValue] = useState(id ? parseInt(id) : '');
const[prov,setProv]=useState('');
  const [message, setMessage] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownnnn, setShowDropdownnnn] = useState(false);
  const [showDropdownnnnn, setShowDropdownnnnn] = useState(false);


  function charger() {
    axios.post('http://localhost:5500/projetconst')
      .then(response => {
        setMessage(response.data.results);
        console.log(response.data.results,'oul');
      })
      .catch(error => {
        console.error('Error fetching message:', error);
      });
  }

  

  useEffect(() => {
   
    charger();
  }, []);





  const handleDelete = (id) => {
    axios.post('http://localhost:5500/api/modifier', {  id:id})
      .then(response => {
      
        charger(); 
      })
      .catch(error => {
        console.error('Erreur lors de la suppression du projet:', error);
      });
  };


   const handleDirectionChange = (e) => {
    const value = e.target.value;
    setdirection(value);
     axios.post('http://localhost:5500/api/filtrer', { direction: value, datedebut: datedebut, datefin: datefin })
    .then(response => {
      console.log('Success:', response.data);
      setMessage(response.data.results); 
    })
    .catch(error => {
      console.error('Error:', error);
    });
};


  const handleDateDebutChange = (e) => {
    const value = e.target.value;
    setdatedebut(value);
    axios.post('http://localhost:5500/api/filtrer', { direction: direction,datedebut: datedebut,datefin: datefin })
    .then(response => {
      console.log('Success:', response.data);
      setMessage(response.data.results); 
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  const handleDateFinChange = (e) => {
    const value = e.target.value;
    setdatefin(value);
    axios.post('http://localhost:5500/api/filtrer', { direction: direction,datedebut: datedebut,datefin: datefin })
    .then(response => {
      console.log('Success:', response.data);
      setMessage(response.data.results); 
      console.log(message);
    })
    .catch(error => {
      console.error('Error:', error);
    });
    
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
  <h1 className="text-2xl font-semibold text-center text-gray-700 relative top-16 ">Projets</h1>
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
<div className="ml-64 flex flex-col justify-center items-center relative top-80">
  <div className="flex justify-center items-center mb-4 space-x-4">
    <input
      type="text"
      placeholder="Nom de la Direction"
      value={direction}
      onChange={handleDirectionChange}
      className="px-4 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-600"
    />
    <input
      type="date"
      value={datedebut}
      onChange={handleDateDebutChange}
      className="px-4 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-600"
    />
    <input
      type="date"
      value={datefin}
      onChange={handleDateFinChange}
      className="px-4 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-600"
    />
  </div>
  
  <div className="w-3/4 shadow-lg rounded-lg overflow-hidden">
    <table className="table-auto w-full">
      <thead className="bg-gray-200">
        <tr>
          <th className="px-4 py-2">id projet</th>
          <th className="px-4 py-2">Nom Projet</th>
          <th className="px-4 py-2">Date de création</th>
          <th className="px-4 py-2">Etat</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {message && message.map((rowData, index) => (
          <tr className={`text-center ${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'}`} key={index}>
            <td className="px-4 py-2">{rowData.id_projet_constr}</td>
            <td className="px-4 py-2">{rowData.nom_projet}</td>
            <td className="px-4 py-2">{rowData.date}</td>
            <td className="px-4 py-2">{rowData.etat}</td>
            <td className="px-4 py-2">
              <button onClick={() => handleDelete(rowData.id_projet_constr)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">accepter</button>
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

export default Projetconst;