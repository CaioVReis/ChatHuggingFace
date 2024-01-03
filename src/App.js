import {Navbar} from './components/NavBar';
import './App.css';
import { GifMovie } from './components/video';
import { TextP } from './components/TextP';
import { Stores } from './components/Store';
import { Cards } from './components/Cards';
import ImgEqp from './ImgEquipe';
import { LogoLinks } from './Logos';
import { LogoCE } from './components/ChamaELasLg';

function App() {
  return (
    <>
    <div className='PinkRose w-screen h-screen'>

    <div>
 <Navbar/>
    </div>
    <div className='w-screen h-full flex'>
      <div className='w-2/5 mt-40 ml-10'><TextP/></div>
    
    <div className=' w-1/2 h-1/2 mt-40'><GifMovie /></div>
     
   
      </div>
      <div className='w-96 -mt-72 ml-8'>
      <Stores/>
     </div>
    </div>
    
    <div className='w-screen h-screen'>

     <div className='mt-10'>
        <header class="text-center mx-auto mb-12 lg:px-20">
        <h2 class="text-2xl leading-normal mb-2 font-bold text-black">Atendimento Exclusivo!</h2>
        < p class="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">Conheça Todos Nossos Atendimentos.!</p>
      </header>
     </div>
     <div class="flex flex-wrap flex-row -mx-4 text-center">

  
  <Cards tittle="Kids" disc="Mais Conforto e Segurança para seus Filhos." svg="Kids"/>
  <Cards tittle="Mercado" disc="Levamos sua compra no mercado o Mais rapido ate voce" svg="Mercado"/>
  <Cards tittle="Pets" disc="Precisa Levar Seu Animal de estimaçao para algum lugar?" svg="Pets"/>
  <Cards tittle="PCD" disc="Pessoas com deficiencia" svg="PCD"/>
  <Cards tittle="LGBTQIA+" disc="LBGTQIA+" svg="LGBTQIA+"/>
  <Cards tittle="Tuor" disc="Tuor Poços de Caldas Conheça Nossa Linda cidade da melhor forma!" svg="Tuor"/>

     </div>


    <div className='PinkRose w-screen h-screen flex '>
        <div className='PinkRose w-3/5 h-screen'>

       <p className="text-5xl text-white ml-5 mt-10 italic font-bold  ">Quer Conheçer A Nossa Historia?</p>
          <div className='mt-20 ml-3'>
            <ImgEqp url="file:///C:/Users/kaio%20vinicios/Desktop/Imagem%20do%20WhatsApp%20de%202023-12-22%20%C3%A0(s)%2014.34.10_d2be136f.jpg" />
          </div>   
        </div>
           <div class=" w-2/6 h-screen mt-28 ml-8 text-white text-lg leading-relaxed "><p class="mt-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Duis iaculis elit ac neque maximus elementum et vel urna.  Duis pellentesque eleifend libero sed ultricies. Nullam vel diam quam. Vivamus risus ex, pulvinar convallis eros at, aliquet accumsan libero.  Nam vehicula eu turpis eget laoreet. Quisque lobortis mauris posuere, consequat augue facilisis, eleifend sem. Maecenas id luctus nisl.  id ligula faucibus, a blandit ligula sollicitudin. Donec vestibulum felis magna, nec interdum odio ullamcorper non. Proin auctor, quam vel feugiat malesuada, turpis quam iaculis mauris, sed scelerisque ex massa sit amet libero. Donec volutpat a ipsum eu rhoncus. Praesent nisl orci, suscipit aliquet magna eget, ultricies fringilla erat.</p></div>
          
          
        </div>
      
           <div className='w-full h-28  bg-black flex '>

       <div className=' flex-col w-10'>
        <LogoLinks svg="Whatsapp" />
        <LogoLinks svg="Instagram"/>
        <LogoLinks svg="linkedin"/>
        </div>

    <div className=' flex flex-col  w-32 '>
        <a className='text-white  mt-2 hover:text-pink-600  '>WhatsApp</a>
         <a className='text-white mt-2 hover:text-pink-600' href='https://www.instagram.com/chamaelasmotoristas?igsh=MW1nYmk1d2hjaWZ1Ng==' target='_blank' >Instagram</a>
       
         
          <a className='text-white mt-2 hover:text-pink-600 '>linkedin</a>
    </div>
          
           <div className='w-2/3'></div>
           <div className='w-80 -mt-3 ml-56 '>
            <LogoCE/>
           </div>
       </div>
      
       
    






        </div>


    
   
    

    </>
  );
}

export default App;
