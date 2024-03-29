import { useRef, useState } from 'react'
import './register.scss'

const Register = () => {
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailReft = useRef()
    const passwordRef = useRef()

    const handleStart = ()=>{
        setEmail(emailReft.current.value)
    }

    const handleFinish = ()=>{
        setPassword(emailReft.current.value)
    }

  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
                <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                <button className="login-button">Sign In</button>  
            </div>
        </div>
        <div className="container">
            <h1>Unlimited movies Tv Shows, and more.</h1>
            <h2>Watch anywhere. cancel anytime.</h2>
            <p>
                Ready to watch? Enter your email to create or reastart your membership.
            </p>
                {!email ? (
                    <div className="input">
                        <input type="email" placeholder='email adress' ref={emailReft}/>
                        <button className="register-button" onClick={handleStart}>Get Started</button>
                    </div>
                ): (<form className="input">
                        <input type="password" placeholder='password' ref={passwordRef}/>
                        <button className="register-button" onClick={handleFinish}>Start</button>
                    </form>)}
        </div>
    </div> 
  )
}

export default Register