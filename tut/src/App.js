import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import useFetch from "./hooks/useFetch";

import {axios} from "./axios";
import { acceptsEncodings } from 'express/lib/request';

function App() {

  const [reminders, setReminders] = usesState([]);
  const [formData, setFormData] = useState({});
  const noReminders = !reminders || (reminders && reminders.length === 0);

  const getReminder =  async () => {
    const response = await axios.get("/reminders").catch((err) => console.log("Error:", err))

    if(response && response.data)
      setReminders(response.data)
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value }) //e.taget.name = e.target.value
  }

  const addReminder = async () => {
    const response = await axios.post("/reminders", formData).catch((err) => console.log("Error:", err))

    if(response)
      getReminders();
  };

  useEffect(() => {
    getReminders();
  }, []);
  
  // const [{response, error, isLoading}, doFetch] = useFetch('http://localhost:3004/posts')
  // console.log('app', response, error, isLoading);
  // useEffect(() => {
  //   doFetch()
  // }, [])

  return (
    <div className="App">
      <p>Hello React</p>
    </div>
  );
}

export default App;
