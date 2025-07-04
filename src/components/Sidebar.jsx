import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {

  const navigate = useNavigate()

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-amber-300 hidden lg:flex">

      {/* ─── blocco Home / Search ───────────────────────────────────── */}
      <div
        className="h-[15%] rounded flex flex-col justify-around
                   bg-gradient-to-b
                   from-[#00000] via-[#10092f] to-[#1a0641]">
        <div onClick={() =>{navigate("/")}} className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon}   alt="" />
          <p className="font-bold">Home</p>
        </div>

        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      {/* ─── blocco Libreria + card playlist ────────────────────────── */}
      <div
        className="h-[85%] rounded overflow-y-auto scrollbar-hide
                   bg-gradient-to-b
                   from-[#1a0641] via-[#5742ad] to-[#b9ca1d]">
        {/* header libreria */}
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.plus_icon}  alt="" />
          </div>
        </div>

        {/* card 1 */}
        <div
          className="p-4 m-2 rounded font-semibold flex flex-col gap-1
                     bg-gradient-to-br
                     from-[#a50f0f] via-[#9a4231] to-[#e7df0bb5]">
          <h1>Create your first playlist</h1>
          <p className="font-light">It's easy, we will help you</p>
          <button
            className="px-4 py-1.5 bg-amber-50 text-[15px] text-black rounded-full mt-4
                       hover:bg-[#e4c411] transition">
            Create playlist
          </button>
        </div>

        {/* card 2 */}
        <div
          className="p-4 m-2 rounded mt-4 font-semibold flex flex-col gap-1
                     bg-gradient-to-bl
                     from-[#030360] via-[#1f258e] to-[#e7df0bb5]">
          <h1>Something immense</h1>
          <p className="font-light">over the horizon</p>
          <button
            className="px-4 py-1.5 bg-amber-50 text-[15px] text-black rounded-full mt-4
                       hover:bg-[#e4c411] transition">
            browse the void
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
