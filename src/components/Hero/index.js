import { Children } from 'react';

const Hero=({children })=>{
    return(
        <div className="w-full h-screen PinkRose" >
         {Children.map(children, child =>
        <div>
          {child}
        </div>
      )}

        </div>
        
    )
}

export{
    Hero,
}