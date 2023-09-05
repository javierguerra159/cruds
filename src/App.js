


import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import FormUsers from './components/FormUsers';
import UsersCard from './components/UsersCard';


function App() {

  const [users, setUsers] = useState();
  const [updateInfo, setUpdateInfo] = useState()
  const [ closeForm, setCloseForm ] = useState(true)

  const getAllUsers = () => {
    const URL = 'http://users-crud.academlo.tech/users/'
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const createNewUser = data => {
    const URL = 'http://users-crud.academlo.tech/users/'
    axios.post(URL, data)
      .then(() => getAllUsers())
      .catch(err => console.log(err))

  }



  const deleteUserById = (id) => {
    const URL = `http://users-crud.academlo.tech/users/${id}/`
    axios.delete(URL)
      .then(() => getAllUsers())
      .catch(err => console.log(err))
  }

  const updateUserById = (id, data) => {
    const URL = `http://users-crud.academlo.tech/users/${id}/`
    axios.put(URL, data)
      .then(() => getAllUsers())
      .catch(err => console.log(err))
  }

  return (
    <div className="App">

      <button onClick={() => setCloseForm(false)} className='app_btn'>Open Form</button>
      <div className={`form_container ${closeForm && 'close_form'}`} >

        <FormUsers
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          setCloseForm={setCloseForm}
        />
      </div>
      <div className='user_container'>

        {
          users?.map(user => (
            <UsersCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}

            />

          ))
        }
      </div>
    </div>
  );
}

export default App;
