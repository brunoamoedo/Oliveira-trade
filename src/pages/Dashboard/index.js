
import { useContext} from 'react';
import { ReactDOM } from 'react';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import './index.css'

export default function Dashboard(){
  const { user,moedas} = useContext(AuthContext);
  let result = []
  result = Object.keys(moedas).join(',').split(',')
  console.log(Object.values(moedas).forEach((value)=>{
    console.log(value)
  }))
  return(
    <div>
      <Header/>
      <div className='secao1'>
        <div className='textoSecao1'>
          <h3 style={{fontSize: '2.5rem',fontWeight:'600',textAlign:'center'}}>
            Segurança para aplicações financeiras
          </h3>  
          <h6 style={{textAlign:'center'}}>
          Simples se você está começando. Robusta se já investe. Eleita a melhor corretora do Brasil.
          </h6>
          <h5 style={{textAlign:'center',textTransform: 'capitalize'}}>
          Seja bem vindo, <span style={{color:'#b8860b'}}>{user.nome}</span>
          </h5>
        </div>
      </div>
      
      {
          Object.values(moedas).map((value)=>
          {
            return(
              <div className='secao2'>
                <div className='box'>
                  <span style={{textAlign:'center'}}><h3 style={{fontWeight:'bold'}}>{value.name}</h3></span>
                  <span style={{color:'green',fontWeight:'bold'}}>Maior Oferta: {value.high}</span>
                  <span style={{color:'red',fontWeight:'bold'}}>Menor Oferta: {value.low}</span>
                </div>
                <br></br>
            </div>
        
                )
          })
        }
      
    </div>
  )
}