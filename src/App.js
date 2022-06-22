import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import UserList from './components/UserList';
import UsersForm from './components/UsersForm';
import './styles/styles.css'

function App() {

  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
      .catch(error => console.log(error.response));
  }, []);

  const getUser = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
      .catch(error => console.log(error.response));
  }

  const createUser = newUser => {
    axios.post('https://users-crud1.herokuapp.com/users/', newUser)
      .then(() => {
        alert('Usuario agregado');
        getUser();
      })
      .catch(error => console.log(error.response));
  }

  const deleteUser = userId => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${userId}/`)
      .then(() => {
        alert('Usuario eliminado');
        getUser();
      })
      .catch(error => console.log(error.response));
  }

  const selectUser = userClicked => {
    setUserSelected(userClicked);
  }

  const editUser = userToEdit => {
    axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, userToEdit)
      .then(() => {
        alert('Usuario editado');
        getUser();
      }).catch(error => console.log(error.response));
  }

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="App">
      <header className='header-container'>
        <h1 className='header-title'>Users API</h1>
        <button onClick={() => setShowForm(true)} className='header-button'>+ Create user</button>
      </header>
      {showForm && <UsersForm createUser={createUser} userSelected={userSelected} editUser={editUser} closeForm={() => setShowForm(false)} />}
      <UserList users={users} deleteUser={deleteUser} selectUser={selectUser} showForm={() => setShowForm(true)} />
    </div>
  );
}

export default App;
