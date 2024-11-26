import React, { useState } from 'react';
import './index.css';

function App() {
/* F I R S T - S E C T I O N */
/* Première partie : state (état, donnée) */
// Un state ne se modifie pas, il est inchangé!
  const [cocktails, setCocktails] = useState([
    {id: 1, name: "Daiquiri"},
    {id: 2, name: "Tonic"},
    {id: 3, name: "Cuba"},
    {id: 4, name: "Caïpirinha"},
  ]);

  const [newCocktail, setNewCocktail] = useState("");

/* S E C O N D - S E C T I O N */
/* Deuxième partie : comportement (click, ...) */
  const handleDelete = (id) => {
    //1. copie du state
    const cocktailsCopy = [...cocktails];

    //2. manipuler le state
    const cocktailsCopyUpdated = cocktailsCopy.filter((cocktail) => cocktail.id !== id);
    
    //3. modifier le state avec le SETTER
    setCocktails(cocktailsCopyUpdated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //1. copie du state
    const cocktailsCopy = [...cocktails];
    //2. manipuler le state
    const id = new Date().getTime();
    const name = newCocktail.trim();
    cocktailsCopy.push({id, name});
    //3. modifier le state avec le SETTER
    setCocktails(cocktailsCopy);
    setNewCocktail("");
  }

  const handleChange = (e) => {
    setNewCocktail(e.target.value);
  }
    
/* T H I R D - S E C T I O N */
/* Troisième partie : affichage (render) */
  
  return (<div className="p-8 max-w-2xl mx-auto">
    <h1 className="text-3xl font-bold text-center mb-6">Cocktails :</h1>
    <ul className="list-disc pl-5 mb-4">
      {cocktails.map((cocktail) => (
        <li key={cocktail.id} className="flex justify-between items-center mb-2"><span className="text-lg">{cocktail.name}</span><button onClick={() => handleDelete(cocktail.id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">X</button></li>
      ))}
    </ul> 
    <form action="submit" onSubmit={handleSubmit} className="flex gap-2 items-center">
      <input 
      value={newCocktail} 
      type="text" 
      placeholder="Add a cocktail..."
      onChange={handleChange}
      className="border p-2 rounded w-full"
      />
      <button
      type="submit"
      disabled={!newCocktail.trim()}
      className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400">add</button>
    </form>
  </div>
  );
}

export default App


// Gestion du formulaire d'ajout de cocktails
//1. creation du forms
//2. soumission du formulaire
//3. collecter la réponse du formulaire
//3a. useRef (pas la plus utilisées car pas de rerender auto)
//3b. synchro ascendante/descendante