import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';


const FormUsers = ({createNewUser, updateInfo, updateUserById, setUpdateInfo, setCloseForm}) => {

    
    const { handleSubmit, reset, register } = useForm()
    
      useEffect(() => {
          reset(updateInfo)
      }, [ updateInfo, reset])

    const submit = data => {

        if(updateInfo){
            updateUserById(updateInfo.id, data)
            setUpdateInfo()
        }else{
            createNewUser(data)
            
        }
        reset({
            name: "",
            
            first_name: "",
            last_name: "",
            birthday: ""
        })
        
        setCloseForm(true)
    }
   

    return (
        <form className='form' onSubmit={handleSubmit(submit)}>
            <div onClick={() => setCloseForm(true)} className='x'>X</div>

            <h2 className='form_title'>{updateInfo ? "update user" : "create user"}</h2>
            <div className='form_div'>
                <label className='form_label' htmlFor="email">Email</label>
                <input className='form_input' type="email" id="email" {...register("email")} />
            </div>
            <div className='form_div'>
                <label className='form_label' htmlFor="password">Password</label>
                <input className='form_input' type="password" id="paswword" {...register("password")} />
            </div>
            <div className='form_div'>
                <label className='form_label' htmlFor="first_name">First name</label>
                <input className='form_input' type="first_name" id="first_name" {...register("first_name")} />
            </div>
            <div className='form_div'>
                <label className='form_label' htmlFor="last_name">Last name</label>
                <input className='form_input' type="last_name" id="last_name" {...register("last_name")} />
            </div>
            <div className='form_div'>
                <label className='form_label' htmlFor="birthday">Birthday</label>
                <input className='form_input' type="date" id="birthday" {...register("birthday")} />
            </div>
            <button className='form_btn'>{updateInfo ? "update user" : "create user"}</button>
           
        </form>
    );
};

export default FormUsers;