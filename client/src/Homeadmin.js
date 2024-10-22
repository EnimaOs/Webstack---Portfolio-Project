import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { HomeIcon, PlusCircleIcon, LogoutIcon, ClockIcon } from '@heroicons/react/solid';
import logo from './images.jpeg';
function Homeadmin() {

  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdownn, setShowDropdownn] = useState(false);
    const [showDropdownnn, setShowDropdownnn] = useState(false);
    const [showDropdownnnn, setShowDropdownnnn] = useState(false);
    const [showDropdownnnnn, setShowDropdownnnnn] = useState(false);

  const [prov, setProv] = useState('');
  const [plan, setplan] = useState('');




  
   
    function charger() {
      axios.post('http://localhost:5000/plan')
          .then(response => {
          
            setplan(response.data.results);
            
          })
          .catch(error => {
            console.error('Error fetching message:', error);
          });
      }
    useEffect(() => {
       
       charger();
       
        
    }, []);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
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

        <div className="flex-1 p-2 ml-64 mt-20">
        

        <h1 className="text-5xl font-extrabold text-center text-gray-800 ">Académie</h1>
   
            <h1 className="text-2xl font-semibold text-center text-gray-700 relative top-16">Plan en cours</h1>
            {plan && plan.map((rowData, index) => (
                        <h2 className='text-2xl font-semibold text-center text-gray-700 relative top-16' id={rowData.id_projet} key={index} >
                            {rowData.datedebut}-{rowData.datefinale} 
                        </h2>
                    ))}
        </div>
        </div>
    );  
}

export default Homeadmin;
