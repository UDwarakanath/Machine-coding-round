import {useState,useEffect} from 'react'
import axios from "axios"
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredusers] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "https://randomuser.me/api/?results=20&inc=name,picture,id,cell&nat=in"
        );
        const data = await res.data;
        setUsers(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const displayUsers = users?.map((user) => {
    const { name, cell, id, picture } = user;
    const fullName = name.first+name.last
    const filter = fullName.toLowerCase().includes(filteredUsers.toLowerCase())
   
    if (filter) {
      return (
        <div key={id.value} className="container">
          <div  >
            <img src={picture.medium}  className="profile"/>
          </div>
          <div className="details">
            <div className="user_name">
              <h5>{name.first + " "+name.last}</h5>
            </div>
            <div className="user_cell">
              <span>{cell}</span>
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <div className='body'>
      <input type="text" onChange={(e) => setFilteredusers(e.target.value)} />
      {displayUsers}
    </div>
  );
}

export default App;
