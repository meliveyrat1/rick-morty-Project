import { useState } from "react";
import validation from "./validation";
import style from './Form.module.css';
import logo from './rymLogo.png'

function Form({login}){

   const [userData, setUserData] = useState({
      email:  '',
      password: ''
   });

   const [errors, setErrors] = useState({})

   const handleChange = (event) =>{
      setUserData({
         ...userData,
         [event.target.name]: event.target.value,
      })
      setErrors(
         validation({
           ...userData,
           [event.target.name]: event.target.value,
         })
       );
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      login(userData)

   }


   return(
      <div className={style.contenedor}>
         <h3>Login</h3>
      <img src={logo} alt="" className={style.img}/>
      <form onSubmit={handleSubmit} className={style.form}>
         <label 
         htmlFor="email"
         >Email: </label>
         <input 
         type="email"
         value={userData.email}
         name="email"
         onChange={handleChange}
         placeholder="e-mail"></input>
         {errors.email && <h5 className={style.error}>{errors.email}</h5>}
         <label 
         htmlFor="password"
         >Password: </label>
         <input 
         type="text"
         value={userData.password}
         name="password"
         onChange={handleChange}
         placeholder="password"></input>
          {errors.password && <h5 className={style.error}>{errors.password}</h5>}
         <button className={style.btn} 
         disabled={errors.email || 
         errors.password 
         
          }
         >Submit</button>
      </form>
      </div>
   )
}

export default Form;