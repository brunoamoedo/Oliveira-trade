import { AuthContext } from '../../contexts/auth'
import { useContext } from 'react'
import './index.css'
import logo from '../../assets/logo.png'
import { Button } from 'react-bootstrap';
export default function Header(){
    const {user,signOut} = useContext(AuthContext)
    return(
        <div className="header">
            <img src={logo} alt="Logo da empresa"/>
            <span style={{color:'white',fontFamily:'roboto-Unbounded'}}>
                OLIVEIRA TRADE
            </span>
            
             
            <div className='logout'>
                <Button variant="danger" onClick={ () => signOut() }>Logout</Button>
             
            </div>
        </div>
    )
}