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

  const [showDropdownn, setShowDropdownn] = useState(false);
  const [showDropdownnn, setShowDropdownnn] = useState(false);
  const [nomValue, setNomValue] = useState(id ? parseInt(id) : '');
const[prov,setProv]=useState('');
  const [message, setMessage] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownnnn, setShowDropdownnnn] = useState(false);
  const [showDropdownnnnn, setShowDropdownnnnn] = useState(false);
  const [formData, setFormData] = useState({
    id_projet_constr: '',
    nom_projet: '',
    cd_cycle: '',
    netab: '',
    cd_com: '',
    longitude: '',
    latitude: '',
    nbre_salle: '',
    stade_sport: '',
    entrepots: '',
    salles_ateliers: '',
    restaurant: '',
    internat: '',
    taux_salle: '',
    encombrement: '',
    motif: '',
    etape_id: '',
    etat_etape_id: ''
  });

  function charger() {
    axios.post('http://localhost:5500/api/messagee', { Nom: nomValue })
      .then(response => {
        setMessage(response.data.results);
        console.log(response.data.results,'oul');
      })
      .catch(error => {
        console.error('Error fetching message:', error);
      });
  }
  const prevProvRef = useRef('');

  useEffect(() => {
    axios.post('http://localhost:5500/api/variable', { Nom: nomValue })
      .then(response => {
        if (response.data.success) {
          console.log(response.data.nomProjet);
          setProv(response.data.nomProjet);
        } else {
          console.error('API error:', response.data.error);
  
          setProv(prevProvRef.current);
        }
      })
      .catch(error => {
        console.error('Error:', error);
   
        setProv(prevProvRef.current);
      });
  }, []);

  useEffect(() => {
    prevProvRef.current = prov;
    charger();
  }, [prov]);







  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const showEditForm = (rowData) => {
    if(rowData.etat!=='comptabilisé'){
    document.getElementById('formel').style.display = 'block'; 
    setFormData({
      id_projet_constr: rowData.id_projet_constr,
      nom_projet: rowData.nom_projet,
      cd_cycle: rowData.cd_cycle,
      netab: rowData.netab,
      cd_com: rowData.cd_com,
      longitude: rowData.longitude,
      latitude: rowData.latitude,
      nbre_salle: rowData.nbre_salle,
      stade_sport: rowData.stade_sport.toString(),
      entrepots: rowData.entrepots.toString(),
      salles_ateliers: rowData.salles_ateliers.toString(),
      restaurant: rowData.restaurant.toString(),
      internat: rowData.internat.toString(),
      taux_salle: rowData.taux_salle,
      encombrement: rowData.encombrement,
      motif: rowData.motif,
      date_creation: rowData.date_creation,
      date_modification: rowData.date_modification,
      utilisateur_id: rowData.utilisateur_id,
    
      
      
    });}
    else{
      alert('impossible de modifier un projet comptabilisé');
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5500/api/lesm', { action: 'modifier', Data: formData , id: formData.id_projet_constr , nom: formData.nom_projet })
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
      axios.post('http://localhost:5500/api/lesm', { action: 'supprimer', id })
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
        <th className="px-4 py-2">id projet</th>
          <th className="px-4 py-2">Nom Projet</th>
          <th className="px-4 py-2">Date de création </th>
          <th className="px-4 py-2">Etat  </th>
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
            <button onClick={() => showEditForm(rowData)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Modifier</button>
              <button onClick={() => handleDelete(rowData.id_projet_constr,rowData.etat)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Supprimer</button>
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
        

          <label className="block text-gray-700" htmlFor="nom_projet">Nom Projet</label>
          <input className="border border-gray-300 rounded-md py-2 px-4 mb-3 w-5/6" type="text" name="nom_projet" id="nom_projet" value={formData.nom_projet} onChange={handleChange} />

          <label className="block text-gray-700" htmlFor="cd_cycle">CD Cycle</label>
          <input className="border border-gray-300 rounded-md py-2 px-4 mb-3 w-5/6" type="text" name="cd_cycle" id="cd_cycle" value={formData.cd_cycle} onChange={handleChange} />

          <label className="block text-gray-700" htmlFor="netab">Netab</label>
          <input className="border border-gray-300 rounded-md py-2 px-4 mb-3 w-5/6" type="text" name="netab" id="netab" value={formData.netab} onChange={handleChange} />

          <label className="block text-gray-700" htmlFor="cd_com">CD Com</label>
          <input className="border border-gray-300 rounded-md py-2 px-4 mb-3 w-5/6" type="text" name="cd_com" id="cd_com" value={formData.cd_com} onChange={handleChange} />

          <label className="block text-gray-700" htmlFor="longitude">Longitude</label>
          <input className="border border-gray-300 rounded-md py-2 px-4 mb-3 w-5/6" type="text" name="longitude" id="longitude" value={formData.longitude} onChange={handleChange} />
           <label className="block text-gray-700" htmlFor="encombrement">Encombrement</label>
          <input className="border border-gray-300 rounded-md py-2 px-4 mb-3 w-5/6" type="text" name="encombrement" id="encombrement" value={formData.encombrement} onChange={handleChange} />
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="latitude">Latitude</label>
          <input className="border border-gray-300 rounded-md py-2 px-4 mb-3 w-5/6" type="text" name="latitude" id="latitude" value={formData.latitude} onChange={handleChange} />

          <label className="block text-gray-700" htmlFor="nbre_salle">Nombre de Salles</label>
          <input className="border border-gray-300 rounded-md py-2 px-4 mb-3 w-10/12" type="text" name="nbre_salle" id="nbre_salle" value={formData.nbre_salle} onChange={handleChange} />

          <label className="block text-gray-700" htmlFor="stade_sport">Stade Sport</label>
          <input className="border border-gray-300 rounded-md py-2 px-4 mb-3 w-5/6" type="text" name="stade_sport" id="stade_sport" value={formData.stade_sport} onChange={handleChange} />

          <label className="block text-gray-700" htmlFor="entrepots">Entrepôts</label>
          <input className="border border-gray-300 rounded-md py-2 px-4 mb-3 w-5/6" type="text" name="entrepots" id="entrepots" value={formData.entrepots} onChange={handleChange} />

          <label className="block text-gray-700" htmlFor="salles_ateliers">Salles Ateliers</label>
          <input className="border border-gray-300 rounded-md py-2 px-4 mb-3 w-5/6" type="text" name="salles_ateliers" id="salles_ateliers" value={formData.salles_ateliers} onChange={handleChange} />

          <label className="block text-gray-700" htmlFor="restaurant">Restaurant</label>
          <input className="border border-gray-300 rounded-md py-2 px-4 mb-3 w-5/6" type="text" name="restaurant" id="restaurant" value={formData.restaurant} onChange={handleChange} />
          
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="internat">Internat</label>
          <input className="border border-gray-300 rounded-md py-2 px-4 mb-3 w-5/6" type="text" name="internat" id="internat" value={formData.internat} onChange={handleChange} />

          

         

          <label className="block text-gray-700" htmlFor="motif">Motif</label>
          <input className="border border-gray-300 rounded-md py-2 px-4 mb-3 w-5/6" type="text" name="motif" id="motif" value={formData.motif} onChange={handleChange} />


        </div>
        <div>
        <label className="block text-gray-700" htmlFor="taux_salle">Taux de Salles</label>
          <input className="border border-gray-300 rounded-md py-2 px-4 mb-3 w-5/6" type="text" name="taux_salle" id="taux_salle" value={formData.taux_salle} onChange={handleChange} />
         
          
         
        </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Envoyer</button>
</form>

      
  </div>
 
  );
}

export default Projetconst;