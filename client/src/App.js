import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validation from "./LoginValidation"
import axios from "axios";
import './index.css';
import logo from './images.jpeg';
import log2 from './2.png';

function App(){
    //stocke les valeurs des champs de saisie (Direction provinciale et Mot de passe).
    const [values,setValues] = useState({
        DirectionProvinciale :'',
        password : ''
    })

    const navigate = useNavigate();
//stocke les erreurs de validation des champs de saisie.
const [errors , setErrors] = useState({})


const handleInput = (event) =>{
    const { name, value } = event.target;
    setValues(prev => ({...prev, [name]: value }));
}


const handleSubmit = async (event) => {
    event.preventDefault();
    const err = validation(values);
    setErrors(err);
    try {
        const response = await axios.post("http://localhost:5000/login", {
            Direction_prov: values.DirectionProvinciale, 
            password: values.password 
        });

        console.log(response.data);
        const userType = response.data.userType;
        const userId = response.data.userId; // Récupération de l'ID de l'utilisateur

        if (userType === "admin") {
            navigate('/Homeadmin', { state: { directionProvinciale: values.DirectionProvinciale } });
        } else if (userType === "user") {
            navigate('/Home', { state: { directionProvinciale: values.DirectionProvinciale, id: userId } }); // Transmettre l'ID
      
        } else {
            console.log("Unknown user type");
        }
    } catch (error) {
        console.error("Error:", error); 
    }
};




    return (
       
        <div className="w-full h-screen flex justify-center items-center ">
        <div className="flex w-full h-full max-w-7xl">
            
            {/* Section pour l'image à gauche */}
            <div className="relative w-90 flex flex-col justify-center items-center">
                <img src={log2} alt="Secondary logo" className="pb-6" />
            </div>
    
            {/* Section pour le formulaire de connexion */}
            <div className="w-1/2 bg-white p-4  mr-6 rounded-md flex flex-col justify-center">
                
                {/* Logo principal */}
                <div className="self-center text-center pb-8">
                    <img src={logo} alt="Logo" className="img-fluid" style={{ maxWidth: '140px' }} />
                </div>
    
                
                <div className="text-start mb-2">
                    <form onSubmit={handleSubmit}>
                        
                        {/* Champ Direction Provinciale */}
                        <div className="mb-4">
                            <label htmlFor="DirectionProvinciale" className="font-bold">Direction Provinciale</label>
                            <input
                             placeholder="Entrer votre direction"
                                type="text"
                                name="DirectionProvinciale"
                                onChange={handleInput}
                                className="form-input mt-2 p-2 block w-full rounded-md border border-gray-300"
                            />
                            {errors.DirectionProvinciale && <span className="text-red-600">{errors.DirectionProvinciale}</span>}
                        </div>
                        
                        {/* Champ Mot de passe */}
                        <div className="mb-3">
                            <label htmlFor="password" className="font-bold">Password</label>
                            <input
                            placeholder="*********"
                                type="password"
                                name="password"
                                onChange={handleInput}
                                className="form-input mt-2 p-2 block w-full rounded-md  border border-gray-300"
                            />
                            {errors.password && <span className="text-red-600">{errors.password}</span>}
                        </div>
                        
                        {/* Bouton de soumission */}
                        <button
                            type="submit"
                            className="p-2 mt-4 w-full rounded-md bg-green-600 text-white hover:bg-green-700"
                        >
                            Log in
                        </button>
                        
                        {/* Texte sous le bouton */}
                        <p className="mt-3 text-center text-gray-600 ">Vous acceptez nos conditions et politiques</p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
    
    
    )
}

export default App;