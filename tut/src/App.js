import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import useFetch from "./hooks/useFetch";

function App() {
  const [{response, error, isLoading}, doFetch] = useFetch('http://localhost:3004/posts')
  console.log('app', response, error, isLoading);
  useEffect(() => {
    doFetch()
  }, [])
  return (
    <div className="App">
      <p>Hello React</p>
    </div>
  );
}

export default App;
