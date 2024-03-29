import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { apiUrl ,filterData } from "./data";
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import './index.css';

function App() {
const [courses ,setCourses] =useState(null);
const [loading ,setLoading] =useState(true);

async function fetchData(){
  setLoading(true);
  try{

    let response =await fetch(apiUrl);
    let output =  await response.json();

    setCourses(output.data);
  }
  catch(error){
    toast.error("network shi kro bhai");

  }
  setLoading(false);
}

useEffect(()=>{
  fetchData();
},[])


  return (
   <div className='min-h-screen flex flex-col ' >
    
<div>
  <Navbar/>
</div>

 <div className='bg-slate-800'>
 <div>
   <Filter filterData={filterData} />
  </div>

  <div className='w-11/12 max-w-[1200px] mx-auto flex  flex-wrap justify-center items-start min-h-[50vh]'>
 {loading ? (<Spinner/>) : (<Cards  courses={courses} />)}
  </div>


 </div>

   </div>
  );
}

export default App;
