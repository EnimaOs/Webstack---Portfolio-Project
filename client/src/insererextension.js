import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { HomeIcon, PlusCircleIcon, LogoutIcon, ClockIcon } from '@heroicons/react/solid';
import logo from './images.jpeg'
function Insererextension() {
    const [nom, setNom] = useState('');
    const [localisation, setLocalisation] = useState('');
    const [prix, setPrix] = useState('');
    const [superficie, setSuperficie] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdownn, setShowDropdownn] = useState(false);
    const [showDropdownnn, setShowDropdownnn] = useState(false);
    const [showDropdownnnn, setShowDropdownnnn] = useState(false);
  const [showDropdownnnnn, setShowDropdownnnnn] = useState(false);
    const [date, setDate] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
    const [formData, setFormData] = useState({
      id_projet_extension: '',
      cd_etab: '',
      nombre_salle: '',
      taux_salle: '',
      encombrement: '',
      motif: '',
      etape_id: '',
      etat_etape_id: ''
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await axios.post("http://localhost:5500/inconst", formData);
          console.log(response.data); 
      } catch (error) {
          console.error("Error fetching data:", error);
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
<div className="flex">
      {/* Sidebar */}
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
                        <Link to="/projetconst" className="text-black font-medium  block px-4 py-2 hover:bg-green-400">Extension</Link>
                      </li>
                      <li>
                        <Link to="/projetext" className="text-black font-medium  block px-4 py-2 hover:bg-green-400">Construction</Link>
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
      

      <div className="flex-1 p-2 ml-64  mt-20">
  <div className="flex justify-center items-center h-5/6">
    <form onSubmit={handleFormSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8    w-8/12">
      <h1 className="text-2xl mb-3">Ajouter un projet</h1>
      <div className="grid grid-cols-2 gap-2">
        <div>
      

         

          <label className="block text-gray-700" htmlFor="cd_cycle">CD Cycle</label>
          <input className="border border-gray-300 rounded-md py-2 px-4 mb-3 w-5/6" type="text" name="cd_cycle" id="cd_cycle" value={formData.cd_cycle} onChange={handleChange} />

          <label className="block text-gray-700" htmlFor="netab">cd_etab</label>
          <input className="border border-gray-300 rounded-md py-2 px-4 mb-3 w-5/6" type="text" name="netab" id="netab" value={formData.netab} onChange={handleChange} />

          <label className="block text-gray-700" htmlFor="cd_com">nombre_salle</label>
          <input className="border border-gray-300 rounded-md py-2 px-4 mb-3 w-5/6" type="text" name="cd_com" id="cd_com" value={formData.cd_com} onChange={handleChange} />

          <label className="block text-gray-700" htmlFor="longitude">taux_salle</label>
          <input className="border border-gray-300 rounded-md py-2 px-4 mb-3 w-5/6" type="text" name="longitude" id="longitude" value={formData.longitude} onChange={handleChange} />
        </div>
        <div>
        <label className="block text-gray-700" htmlFor="encombrement">Encombrement</label>
          <input className="border border-gray-300 rounded-md py-2 px-4 mb-3 w-5/6" type="text" name="encombrement" id="encombrement" value={formData.encombrement} onChange={handleChange} />
          <label className="block text-gray-700" htmlFor="motif">Motif</label>
          <input className="border border-gray-300 rounded-md py-2 px-4 mb-3 w-5/6" type="text" name="motif" id="motif" value={formData.motif} onChange={handleChange} />
 
          
        </div>
        <div>
       

         
       

        </div>
        <div>
        
       
        
          
         
        </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Envoyer</button>
    </form>
  </div>
</div>









      </div>
    );
  }
export default Insererextension;
