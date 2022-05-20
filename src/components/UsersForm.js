import React, { useEffect, useState } from 'react';

const UsersForm = ({createUser, userSelected, editUser, closeForm}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthday, setBirthday] = useState('');

    const[isEditing, setIsEditing] = useState('');

    const submit = (e) =>{
        e.preventDefault();
        const user = {
            first_name: firstName,
            last_name: lastName,
            email,
            password,
            birthday
        }
        createUser(user);
        deselectUser();
    }

    useEffect(()=>{
        if (userSelected!==null) {
            setFirstName(userSelected.first_name);
            setLastName(userSelected.last_name);
            setEmail(userSelected.email);
            setPassword(userSelected.password);
            setBirthday(userSelected.birthday);
            setIsEditing(true);
        } else {
            deselectUser();
            setIsEditing(false);
        }
    },[userSelected])

    const edit = () =>{
        const user = {
            first_name: firstName,
            last_name: lastName,
            email,
            password,
            birthday
        }
        editUser(user);
        setIsEditing(false);
        deselectUser();
    }

    const deselectUser = () =>{
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setBirthday('');
    }

    return (
        <div className='modal-container'>
        <form onSubmit={submit} className='form-container modal'>
            <i className="fa-solid fa-rectangle-xmark" onClick={closeForm}></i>
            {!isEditing ?<h2 className='form-title'>New user</h2>:<h2 className='form-title'>Edit user</h2>}
            <div className='form-input'>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" onChange={(e)=>setFirstName(e.target.value)} value={firstName} placeholder='Type the name'/>
            </div>

            <div className='form-input'>
                <label htmlFor="lastName">Last name</label>
                <input type="text" id="lastName" onChange={(e)=>setLastName(e.target.value)} value={lastName} placeholder='Type the last name'/>
            </div>
            <div className='form-input'>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Type the email'/>
            </div>
            <div className='form-input'>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Type the password'/>
            </div>
            <div className='form-input'>
                <label htmlFor="date">Birthday</label>
                <input type="date" id="date" onChange={(e)=>setBirthday(e.target.value)} value={birthday}/>
            </div>
            { !isEditing ? <button type="submit" className="btn btn-primary">Create a new user</button>
          : <button type="button" className="btn btn-warning" onClick={edit}>Edit user</button>}
        </form>
        <div className="overlay" onClick={closeForm}></div>
        </div>
    );
};

export default UsersForm;