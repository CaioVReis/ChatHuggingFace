import  NavItem, { NavDrive }  from "../NavItens"


const Navbar = () =>{
    return(
    
    
    <div className="fixed z-20 h-16 w-screen  flex  PinkRose">
        <div className="ml-5 w-48">
          <div className="font-bold m-1 text-2xl text-white antialiased"><a href="#/">Chama</a></div>
           <div className="font-bold ml-16 -mt-4 text-2xl text-white antialiased"><a href="#/">Elas</a></div>
        </div>
        <div className="flex  gap-28">
        <NavItem href="#home" tittle="Home" />
        <NavItem href="#tuor" tittle="Tuor Poços"/>
        <NavItem href="#publicidade" tittle="Publicidade"/>
        
        </div>
        <div className="flex ml-30">
        <NavDrive href="https://play.google.com/store/apps/details?id=com.mobapps.driver.chamaelas" target="_blank" tittle="Seja Uma Motorista"/>
        </div>
    </div>


    )
    

}

export{
    Navbar
}