import { useState } from 'react';
import { Routes , Route, useNavigate } from 'react-router-dom'
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/nav.jsx';
import axios from 'axios';
import Detail from './components/Detail/Detail'
import About from './components/About/About'

const URL = "https://rym2.up.railway.app/api/character"

const API_KEY = "henrystaff"

function App() {

      const navigate = useNavigate()

   const [ characters , setCharacters] = useState([])


   function onSearch(id) {
      const characterId = characters.filter(
         char => char.id === Number(id)
      )
      if(characterId.length){
         return alert(`${characterId[0].name} ya existe!`)
      }
      axios(`${URL}/${id}?key=${API_KEY}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters([...characters, data])
            } else {
               window.alert("¡El id debe ser un numero entre 1 y 826!");
            }
         }
      )
      navigate("/home")
   }

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
      }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes>
            <Route 
               path="/home" 
               element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route 
               path="/about" 
               element={<About/>} />
            <Route 
               path="/detail/:id" 
               element={<Detail/>} />
            <Route/>
         </Routes>
      </div>
   );
}

export default App;
