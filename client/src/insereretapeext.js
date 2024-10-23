import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { HomeIcon, PlusCircleIcon, LogoutIcon, ClockIcon } from '@heroicons/react/solid';
import logo from './images.jpeg';

function Insereretapeconst() {
    const [plan, setPlan] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [constr, setConstr] = useState('');
    const [selectedProject, setSelectedProject] = useState('');
    const [message, setMessage] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdownn, setShowDropdownn] = useState(false);
    const [showDropdownnn, setShowDropdownnn] = useState(false);
    const [showDropdownnnn, setShowDropdownnnn] = useState(false);
    const [showDropdownnnnn, setShowDropdownnnnn] = useState(false);
    const [formData, setFormData] = useState({
      
        Annee_budgetaire: '',
    
        Remarques: ''
    });

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.post("http://localhost:3011/chargerpro");
                setMessage(response.data.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchProjects();
    }, []);

    useEffect(() => {
        charger();
    }, []);

    function charger() {
        axios.post('http://localhost:3011/plan')
            .then(response => {
                setPlan(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching message:', error);
            });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
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

  const handleConstrChange = (e) => {
    setConstr(e.target.value);
};

const handleProjectChange = (e) => {
    setSelectedProject(e.target.value);
};

    const handleFormSubmit = async (e) => {
      e.preventDefault();
      try {
          const plaan = document.getElementsByClassName('text-2xl font-semibold text-center text-gray-700 relative top-16 1')[0].id;
          const response = await axios.post("http://localhost:3011/insererext", { Data: formData, project_id: selectedProject, id_plan: plaan, etape: constr });
          console.log(response.data);
      } catch (error) {
          console.error("Error submitting form:", error);
      }
  };

    return (
        <div>
   <div className="flex">
    
      <div className="fixed inset-y-0 left-0 bg-green-900 w-64 p-4">
        <div className="text-white">
        <img src={logo} alt="Logo" className="ml-12 pb-16" style={{ maxWidth: '120px' }} />
          <nav>
            <ul>
            <li className="mb-4">
           
            <Link to="/Home" className="text-white font-medium hover:bg-green-600 py-1 rounded-sm px-2 text-lg flex"><HomeIcon className="h-5 w-5 mr-2 mt-1" />Accueil</Link>
            
          </li>
          <li className="mb-4">
                <button onClick={handleDropdownTogglee} className="flex text-white hover:bg-green-600 font-medium py-1 px-2 rounded-sm text-lg">
                <PlusCircleIcon className="h-5 w-5 mr-2 mt-1" />Créer Projet
                 
                </button>
                {showDropdownn && (
                  <div className="absolute mt-1 w-64 bg-green-300 rounded-lg shadow-lg">
                    <ul>
                      <li>
                        <Link to="/insererConstruction" className="text-black font-medium  block px-4 py-2 hover:bg-green-400">Construction</Link>
                      </li>
                      <li>
                        <Link to="/insererextension" className="text-black font-medium block px-4 py-2 hover:bg-green-400">Extension</Link>
                      </li>
                   
                    </ul>
                    
                  </div>
                )}
              </li>
             
              <li className="mb-3">
                <button onClick={handleDropdownToggleeeee} className="flex text-white  hover:bg-green-600 font-medium py-1 px-2 rounded-sm text-lg">
                <PlusCircleIcon className="h-5 w-5 mr-2 mt-1" />Créer Étape
                 
                </button>
                {showDropdownnnnn && (
                  <div className="absolute mt-1 w-64 bg-green-300 rounded-lg shadow-lg">
                    <ul>
                     
                      <li>
                        <Link to="/insereretapeconst" className="text-black font-medium  block px-4 py-2 hover:bg-green-400">Construction</Link>
                      </li>
                      <li>
                        <Link to="/insereretapeext" className="text-black font-medium  block px-4 py-2 hover:bg-green-400">Extension</Link>
                      </li>
                    </ul>
                    
                  </div>
                )}
              </li>
              <li className="mb-3">
                <button onClick={handleDropdownToggle} className="text-white hover:bg-green-600 font-medium py-1 px-2 rounded-sm text-lg block  ">
                Projets 
                  <svg className="h-4 w-4 inline-block ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 12l-8-8 1.5-1.5L10 9.986l6.5-6.5L18 4z" clipRule="evenodd" />
                  </svg>
                </button>
                {showDropdown && (
                  <div className="absolute mt-1 w-64 bg-green-300 rounded-lg shadow-lg">
                    <ul>
                      <li>
                        <Link to="/projetext" className="text-black font-medium  block px-4 py-2 hover:bg-green-400">Extension</Link>
                      </li>
                      <li>
                        <Link to="/projetconst" className="text-black font-medium  block px-4 py-2 hover:bg-green-400">Construction</Link>
                      </li>
                     
                    </ul>
                    
                  </div>
                )}
              </li>
            
              <li className="mb-52">
                <button onClick={handleDropdownToggleeee} className="text-white  hover:bg-green-600 font-medium py-1 px-2 rounded-sm text-lg flex  ">
                <ClockIcon className="h-5 w-5 mr-2 mt-1" />Historique
                
                </button>
                {showDropdownnnn && (
                  <div className="absolute mt-1 w-64 bg-green-300 rounded-lg shadow-lg">
                    <ul>
                     
                      <li>
                        <Link to="/HistoriqueConst" className="text-black font-medium  block px-4 py-2 hover:bg-green-400">Construction</Link>
                      </li>
                      <li>
                        <Link to="/HistoriqueExt" className="text-black font-medium  block px-4 py-2 hover:bg-green-400">Extension</Link>
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
                <div className="mb-4">
                    <label htmlFor="projectSelect" className="block text-gray-700">Vos projets comptabilisés</label>
                    <select className="border border-gray-300 rounded-md py-2 px-4 w-full" id="projectSelect" value={selectedProject} onChange={handleProjectChange}>
                        <option value=""></option>
                        {message && message.map((rowData, index) => (
                            <option key={index} value={rowData.id_projet_extension}>
                                {rowData.id_projet_extension}  {rowData.date_creation}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex justify-center items-center h-5/6">
                    <form onSubmit={handleFormSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-8/12">
                        <h1 className="text-2xl mb-3">Ajouter une étape</h1>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <label className="block text-gray-700" htmlFor="id_etape_construction">Étape d'extension</label>
                                <select className="border border-gray-300 rounded-md py-2 px-4 mb-3 w-5/6" name="etape" id="id_etape_construction" value={constr} onChange={handleConstrChange}>
                                <option></option>
                                    <option value="1">Etudes</option>
                                    <option value="2">Construction</option>
                                </select>

                                <label className="block text-gray-700" htmlFor="Annee_budgetaire">Année Budgétaire</label>
                                <input className="border border-gray-300 rounded-md py-2 px-4 mb-3 w-5/6" type="text" name="Annee_budgetaire" id="Annee_budgetaire" value={formData.Annee_budgetaire} onChange={handleChange} />

                                <label className="block text-gray-700" htmlFor="Remarques">Remarques</label>
                                <textarea className="border border-gray-300 rounded-md py-2 px-4 mb-3 w-5/6" name="Remarques" id="Remarques" value={formData.Remarques} onChange={handleChange}></textarea>
                            </div>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Envoyer</button>
                    </form>
                </div>
                <h1 className="text-2xl font-semibold text-center text-gray-700 relative top-16">Plan en cours</h1>
                {plan && plan.map((rowData, index) => (
                    <h2 className='text-2xl font-semibold text-center text-gray-700 relative top-16 1' id={rowData.id_plan} key={index} >
                        {rowData.datedebut}-{rowData.datefinale} 
                    </h2>
                ))}
            </div>
        </div>
    );
}

export default Insereretapeconst;
