import {assets} from "../assets/assets"
const Sidebar = () => {
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-amber-300 hidden lg:flex">
         <div className="bg-[#021104] h-[15%] rounded flex flex-col justify-around">
             <div className="flex items-center gap-3 pl-8 cursor-pointer">
                  <img className="w-6" src={assets.home_icon} alt=""/>
                  <p className="font-bold">Home</p>
             </div>
             <div className="flex items-center gap-3 pl-8 cursor-pointer">
                  <img className="w-6" src={assets.search_icon} alt=""/>
                  <p className="font-bold">Search</p>
             </div>
         </div>
         <div className="bg-[#021104] h-[85%] rounded">
            <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                     <img className="w-8" src={assets.stack_icon} alt=""/> 
                     <p className="font semibold">Your library</p>
                </div>
                <div className="flex items-center gap-3">
                    <img className="w-5" src={assets.arrow_icon} alt=""/>
                    <img className="w-5" src={assets.plus_icon} alt=""/>
                </div>
            </div>
            <div className="p-4 bg-[#2a1444] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
                    <h1>Create your first playlist</h1>
                    <p className="font-light">It's easy we will help you</p>
                    <button className="px-4 py-1.5 bg-amber-50 text-[15px] text-black rounded-full mt-4">Create playlist</button>
            </div>
              <div className="p-4 bg-[#2a1444] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
                    <h1>Something immense</h1>
                    <p className="font-light">over the horizon</p>
                    <button className="px-4 py-1.5 bg-amber-50 text-[15px] text-black rounded-full mt-4">browse the void</button>
            </div>
            
         </div>
    </div>
  )
}

export default Sidebar
