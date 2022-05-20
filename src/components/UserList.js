import React from 'react';

const UserList = ({users, deleteUser, selectUser, showForm}) => {
    return (
      <main className='main-container'>
        {users.map(user=>(
          <article className='main-card' key={user.id}>
              <section className='card-info'>
                <h2 className='card-name'>{user.first_name} {user.last_name}</h2>
                <hr />
                <p className='card-label'>Correo</p>
                <p>{user.email}</p>
                <p className='card-label'>Cumpleaños</p>
                <p>🎁 {user.birthday}</p>
                <hr />
              </section>
              <section className='card-buttons'>
                <i className="fa-solid fa-trash" onClick={()=>deleteUser(user.id)}></i>
                <i className="fa-solid fa-pencil" onClick={()=>{selectUser(user); showForm()}}></i>
              </section>
          </article>
        ))
        }
      </main>
    );
};

export default UserList;