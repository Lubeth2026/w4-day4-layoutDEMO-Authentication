
import { useEffect, useState } from 'react';
import { supabase } from './utils/supabase'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Pets from './components/Pets';
import CreatePet from './components/CreatePet';

function App() {
//READ from the Database//
  const [pets, setPets] = useState([]);
  useEffect(() => {
    async function getPets() {
      try {
        const { data } = await supabase.from("pets").select("*");
        setPets(data);
      } catch (error) {
        console.error(error);
      }
    }
    getPets();
  }, []);

  return (
    <>
      <h1>Workflow/Auth a project in React Database</h1>
      <Header />
      <Pets pets={pets} />
      <CreatePet />
      <Footer />
    </>
  );
}

export default App
