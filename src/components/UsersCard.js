import React from 'react';


const UsersCard = ({user,deleteUserById, setUpdateInfo}) => {

    const handleEdit = () => {
        setUpdateInfo(user)
    }
   
   
    return (
        <article className='card'>
        
            <h3 className='card_title'>{user.first_name} {user.last_name}</h3>
            <ul className='card_body'>
                <li className='card_item'>
                    <span className='card_span'>correo</span>
                    {user.email}
                </li>
                <li className='card_item'>
                    <span className='card_span'>cumpleaños</span>
                    {user.birthday}
                </li>
            </ul>
            <footer className='card_footer'>
                <button className='card_btn trash' onClick={() => deleteUserById(user.id)} ><i className="fa-solid fa-trash"></i></button>
                
                <button className='card_btn square' onClick={() => handleEdit()}><i className="fa-solid fa-pen-to-square"></i></button>
            </footer>
        </article>
    );
};

export default UsersCard;