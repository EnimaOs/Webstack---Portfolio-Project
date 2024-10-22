import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, PlusCircleIcon, LogoutIcon, ClockIcon, EyeIcon } from '@heroicons/react/solid';
import logo from './images.jpeg';

function HistoriqueCstAdmin() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownn, setShowDropdownn] = useState(false);
  const [showDropdownnn, setShowDropdownnn] = useState(false);
  const [showDropdownnnn, setShowDropdownnnn] = useState(false);
  const [showDropdownnnnn, setShowDropdownnnnn] = useState(false);

  const [historique, setHistorique] = useState([]);
  const [etatDetails, setEtatDetails] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const location = useLocation();
  const { id } = location.state || {};

  const handleDropdownToggle = () => setShowDropdown(!showDropdown);
  const handleDropdownTogglee = () => setShowDropdownn(!showDropdownn);
  const handleDropdownToggleee = () => setShowDropdownnn(!showDropdownnn);
  const handleDropdownToggleeee = () => setShowDropdownnnn(!showDropdownnnn);
  const handleDropdownToggleeeee = () => setShowDropdownnnnn(!showDropdownnnnn);

  useEffect(() => {
    async function fetchHistorique() {
      try {
        const response = await axios.post("http://localhost:5500/api/HistoriqueAdminCst", { id });
        setHistorique(response.data.results);
      } catch (error) {
        console.error("Error fetching extension steps history:", error);
      }
    }
    fetchHistorique();
  }, [id]);

  const handleView = async (idetape) => {
    try {
      const response = await axios.post("http://localhost:5500/api/HistoriqueAdminEtatCst", { idetat: idetape });
      setEtatDetails(response.data.results);
      setShowModal(true);
    } catch (error) {
      console.error("Error fetching state details:", error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setEtatDetails([]);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { timeZone: 'UTC' });
  };

    return(
        <>
        
        <div>
    <div>
    <h1 className="text-3xl font-bold text-center text-lime-600 relative top-16 ml-20">Historique des étapes Construction</h1>
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
     
      <div className="ml-64 p-4 pt-64 text-center">
        <table className="table-auto mx-auto w-10/12 bg-white rounded-lg overflow-hidden shadow-lg margin: 0 auto">
          <thead className="bg-gray-200 text-gray-700">
            <tr className="text-semibold text-lg">
              <th className="px-4 py-2">Id_Étape</th>
              <th className="px-4 py-2">Id_État</th>
              <th className="px-4 py-2">Étape</th>
              <th className="px-4 py-2">État</th>
              <th className="px-4 py-2">Année</th>
              <th className="px-4 py-2">Montant</th>
              <th className="px-4 py-2">Partenaire</th>
              <th className="px-4 py-2">Budget</th>
              <th className="px-4 py-2">Remarque</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {historique.map((etape, index) => (
              <tr key={index} className="border">
                <td className="px-4 py-2">{etape.idetape}</td>
                <td className="px-4 py-2">{etape.idetat}</td>
                <td className="px-4 py-2">{etape.etape}</td>
                <td className="px-4 py-2">{etape.etat}</td>
                <td className="px-4 py-2">{etape.annee}</td>
                <td className="px-4 py-2">{etape.montant}</td>
                <td className="px-4 py-2">{etape.partenaire}</td>
                <td className="px-4 py-2">{etape.budget}</td>
                <td className="px-4 py-2">{etape.remarque}</td>
                <td className="px-4 py-2">
                  <button onClick={() => handleView(etape.idetape)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center"> <EyeIcon className="h-5 w-5 mr-2" />View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-green-50 p-8 rounded shadow-lg max-w-md mx-auto">
            <h2 className="text-xl text-center font-bold mb-4 text-green-700">Détails de l'État</h2>
            <table className="table-auto w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-2 font-semibold bg-green-200 text-green-800">Etat Précédent</th>
                  <th className="px-4 py-2 font-semibold bg-green-200 text-green-800">Etat Actuel</th>
                  <th className="px-4 py-2 font-semibold bg-green-200 text-green-800">Date</th>
                </tr>
              </thead>
              <tbody>
                {etatDetails.map((detail, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
                    <td className="px-4 py-2 border">{detail.etat_precedent}</td>
                    <td className="px-4 py-2 border">{detail.etat}</td>
                    <td className="px-4 py-2 border">{formatDate(detail.date)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={closeModal} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md">Close</button>
          </div>
        </div>
      )}
        </>
    );
}

export default HistoriqueCstAdmin