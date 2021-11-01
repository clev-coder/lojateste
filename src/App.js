import React,{useState,useEffect} from 'react';
import logo from "./image/logo-1.png";
import cart from "./image/cart.png";
import './App.css'

function App()


{
  const[produtos,setprodutos] = useState([])
  useEffect(() => {
     fetch ('https://sandboxmc.gateway.linkapi.com.br/v1/links')
    .then(response => response.json())
    .then (data=>{ 
      setprodutos(data)
      console.log(produtos)
    } )
  },[])
 const [resposta, setresposta] = useState("teste")



 
 //<img src={produtos.filter(produto =>produto.id==2).map(p=>p.icon_image)}alt="imagem"/>
 
const style={

  color:"red"
}

 return( 
  <>
  <header> <img src={logo}width="140"/></header>
 <header>
   <nav>
  <input type="text" placeholder="o que você precisa?"/>
  </nav>
  </header>
  <p style={style}><i className="fi fi-rr-user"></i></p>
 <div className="login">
<p>minha conta </p>
<p>ajuda </p>
<p>ajuda </p>
 </div>
 <div className="icons"></div>
 <header>
  <img src={cart} width="24"/>
  </header>
 

 <div className="menu">
 <section  className="submenu">
   <h4>Todos os departamentos</h4>
   <h4>ofertas</h4>
   <h4> Lançamentos</h4>
   <h4>Mais Queridos</h4>
   <h4>Multilovers</h4>  

      </section>

      <div className="menu2">
 <h4>Rua Maracaju - Loja 019</h4>
 </div>
    </div>
   <section>
<di className="troca">
<a href="https://www.multicoisas.com.br/?blo=s">Trocar loja</a>
</di>
 <div className="Banner1">
   <section>
   <img src={produtos.filter(produto =>produto.id==2).map(p=>p.icon_image)}alt="imagem" width="1860"/>
   </section>
   </div>
   <section>
   <section>
   <img src={produtos.filter(produto =>produto.id==1300).map(p=>p.icon_image)}alt="imagem" width="50"/>
   </section>
   </section>
   <section>
   <img src={produtos.filter(produto =>produto.id==700).map(p=>p.icon_image)}alt="imagem" width="50" />
   </section>
   
   <img src={produtos.filter(produto =>produto.id==600).map(p=>p.icon_image)}alt="imagem"
   width="50"/>
 
 <section>
 <img src={produtos.filter(produto =>produto.id==800).map(p=>p.icon_image)}alt="imagem" width="50"/>
 </section>
 <section>
 <img src={produtos.filter(produto =>produto.id==1100).map(p=>p.icon_image)}alt="imagem" width="50"/>
 </section>
 <section>
 <img src={produtos.filter(produto =>produto.id==500).map(p=>p.icon_image)}alt="imagem" width="50"/>
 </section>
 <section>
 <img src={produtos.filter(produto =>produto.id==1200).map(p=>p.icon_image)}alt="imagem" width="50"/>
 </section>
 <section>
 <img src={produtos.filter(produto =>produto.id==1400).map(p=>p.icon_image)}alt="imagem" width="50"/>
 </section>
 <section>
 <img src={produtos.filter(produto =>produto.id==1600).map(p=>p.icon_image)}alt="imagem" width="50"/>
 </section>
 <section>
 <img src={produtos.filter(produto =>produto.id==100).map(p=>p.icon_image)}alt="imagem" width="50"/>
 </section>
 
 <div className="sessao1">
   <section>
   <h3>
     receba em casa
   </h3>
   <h3>
     retire na loja fisica
   </h3>
   <h3>
     suporte de venda
   </h3>
  < h3>
     pagamento facilitado
   </h3>
   < h3>
     Entrega ate um dia últil
   </h3>
   </section>
 </div>
 </section>
 <div className="section-2">
   
     <h2>navegue por departamento</h2>
   
 </div>

  
   
  </>
) }


export default App;
