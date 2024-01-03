
import Icon from "../icons"

const Cards=({tittle,disc,svg})=>{
    return(
         <div class="flex-shrink px-4 -ml-1 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" >

 

<div class="py-8 px-12 mb-12 bg-gray-200 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">

<div class="inline-block text-gray-900 mb-4">

 
<Icon icon={svg}/>


</div>

<h3 class="text-lg leading-normal mb-2 font-semibold text-black">{tittle}</h3>

<p class="text-gray-500">{disc}</p>

</div>

 

</div>

    )
}



export {
    Cards,
}