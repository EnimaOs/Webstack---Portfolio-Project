import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { HomeIcon, PlusCircleIcon, LogoutIcon, ClockIcon } from '@heroicons/react/solid';
import logo from './images.jpeg';
function Projetext() {


  const [showDropdownn, setShowDropdownn] = useState(false);
  const [showDropdownnn, setShowDropdownnn] = useState(false);

const[prov,setProv]=useState('');
  const [message, setMessage] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownnnn, setShowDropdownnnn] = useState(false);
  const [showDropdownnnnn, setShowDropdownnnnn] = useState(false);
  const [formData, setFormData] = useState({
    id_projet_extension: '',
    cd_etab: '',
    nombre_salle: '',
    taux_salle: '',
    encombrement: '',
    motif: ''
    
});

  function charger() {
    axios.post('http://localhost:5000/api/messageext')
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







  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const showEditForm = (rowData) => {
    if(rowData.etat!=='comptabilisé'){
    document.getElementById('formel').style.display = 'block'; 
    setFormData({
      id_projet_extension: rowData.id_projet_extension,
     cd_etab: rowData.cd_etab,
      netab: rowData.netab,
      nombre_salle: rowData.nombre_salle,
      taux_salle: rowData.taux_salle,
      encombrement: rowData.encombrement,
      motif: rowData.motif
     
      
      
    });}
    else{
      alert('impossible de modifier un projet comptabilisé');
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/lesmm', { action: 'modifier', Data: formData })
      .then(response => {
        if (response.status === 200) {
          console.log('Projet modifié avec succès:', response.data.message);
          charger();
          document.getElementById('formel').style.display = 'none'; 
        } else {
          console.error('Erreur lors de la modification du projet:', response.data.message);
      
        }
      })
      .catch(error => {
        console.error('Erreur lors de la modification du projet:', error);
      
      });
  };
  function cacher(){
    document.getElementById('formel').style.display = 'none'; 
  }

  const handleDelete = (id,etat) => {
    if(etat!=='comptabilisé'){
      axios.post('http://localhost:5000/api/lesm', { action: 'supprimer', id })
      .then(response => {
       console.log('projet supprimé:',response.data)
        charger(); 
      })
      .catch(error => {
        console.error('Erreur lors de la suppression du projet:', error);
      });}
      else{
        alert('impossible de supprimer un projet comptabilisé');
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
  <h1 className="text-5xl font-extrabold text-center text-gray-800 ">Direction Provinciale {prov}</h1>
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
      <div className=" ml-64 flex justify-center items-center relative top-80">
      <div className="w-3/4 shadow-lg rounded-lg overflow-hidden margin: 0 auto">
    <table className="table-auto w-full">
      <thead className="bg-gray-200">
        <tr>
        <th className="px-4 py-2">id_projet_extension</th>
          <th className="px-4 py-2">date de création </th>
          <th className="px-4 py-2">Etat  </th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {message && message.map((rowData, index) => (
          <tr className={`text-center ${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'}`} key={index}>
          <td className="px-4 py-2">{rowData.id_projet_extension}</td>
            <td className="px-4 py-2">{rowData.date}</td>
            <td className="px-4 py-2">{rowData.etat}</td>
            <td className="px-4 py-2">
            <button onClick={() => showEditForm(rowData)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Modifier</button>
              <button onClick={() => handleDelete(rowData.id_projet_extension,rowData.etat)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Supprimer</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>




  

<form
  id='formel'
  onSubmit={handleFormSubmit}
  className={`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-2 w-2/4 ${formData.id ? 'block' : 'hidden'}`}
  style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
>
  <h1 className="text-2xl mb-4">Modifier un projet</h1>
  <h2 onClick={cacher} className='relative left-full text-xl  bottom-14 hover:cursor-pointer'>X</h2>


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
 
  );
}

export default Projetext;