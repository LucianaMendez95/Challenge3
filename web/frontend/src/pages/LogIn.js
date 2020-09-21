import { GoogleLogin } from 'react-google-login';
import React, { useState } from 'react';



const LogIn = props => {

    const [ingresoUsuario, setIngresoUsuario] = useState({
        mail: '',
        pass: ''
     })

     const leerImput = e => {
        const campo = e.target.name
        const valor = e.target.value
        setIngresoUsuario ({
            ...ingresoUsuario,
            [campo]: valor
        })
    }

    const enviarInfo  = async e => {
        e.preventDefault()
        await props.logUser(ingresoUsuario)
    }

    useEffect(()=>{
        if(props.success){
            alert("Welcome")
           props.history.push("/home")  
        }
    },[props.success]) 

    const responseGoogle = respuesta => {
        props.loguearUsuario({
            mail:respuesta.profileObj.email,
            pass:respuesta.profileObj.googleId})
        props.history.push("/home")  
    }

    
   
    

        return (   
            <div id="todoelhome">   

              <div id="divFormulario">
                  <form>
                     <h3>Log In form</h3>

                     <GoogleLogin id="GoogleLogin"
                        clientId="83311303903-d8eviki4j9rvmabuc0ceg0c5im70b2ab.apps.googleusercontent.com"
                        buttonText="Crear cuenta con google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />

                     <div id="divUsuario">
                         <input onChange={leerImput} type="text" id="mail" name="mail" placeholder="Write your mail here"></input>
                     </div>
                     <div id="divContraseña">
                         <input onChange={leerImput} type="password" id="pass" name="pass" placeholder="Write your password here"></input>
                     </div>
                     <button onClick={enviarInfo}>Log in</button>
                  </form>
              </div>
              
          </div>
        )
    
}

const mapStateToProps = state => {
    return{
        success: state.usuarios.success
    }
}

const mapDispatchToProps = {
    logUser: usuariosActions.logUser,
 }

export default connect(mapStateToProps, mapDispatchToProps) (LogIn)
