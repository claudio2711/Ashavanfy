/* DisplayAlbum.jsx ─ lista album & tracce “style Spotify” */

import { albumsData, songsData, assets } from "../assets/assets";
import NavBar            from "./NavBar";
import { useParams }     from "react-router-dom";
import { formatDuration, timeAgo } from "../utils";

const DisplayAlbum = () => {
  /* 1. routing e dati album */
  const { id }    = useParams();              // /album/:id
  const albumData = albumsData[id];           // oggetto album

  /* 2. render UI */
  return (
    <>
      <NavBar />

      {/* ───────────────────────── Header album ───────────────────────── */}
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumData.image} alt="" />

        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>

          <p className="mt-1">
            <img
              className="inline-block w-8"
              src={assets.Ashavanfy_logo}
              alt=""
            />
            <b>Ashavafy</b> • 6,666,616 likes
            <b> • {songsData.length} songs, </b>
            about 2&nbsp;hr&nbsp;30&nbsp;min
          </p>
        </div>
      </div>

      {/* ───────────────────────── Header colonne ──────────────────────── */}
      <div
        className="grid grid-cols-[40px_1fr_180px_120px_60px]
                   gap-4 px-2 pb-2 text-sm text-[#a7a7a7]
                   border-b border-[#232323]"
      >
        <p className="text-right">#</p>
        <p>Title</p>
        <p className="hidden sm:block">Album</p>
        <p className="hidden md:block whitespace-nowrap">Date Added</p>
        <img src={assets.clock_icon} className="m-auto w-4" alt="length" />
      </div>

      {/* ───────────────────────── Lista tracce ───────────────────────── */}
      {songsData.map((song, i) => (
        <div
          key={song.id ?? i}                     /* key univoca */
          className="grid grid-cols-[40px_1fr_180px_120px_60px]
                     items-center gap-4 px-2 py-2
                     text-amber-300 hover:bg-[#ffffff1a] cursor-pointer"
        >
          {/* n° progressivo */}
          <span className="text-right">{i + 1}</span>

          {/* titolo: copertina + testo */}
          <div className="flex items-center gap-5 overflow-hidden">
            <img className="w-10 flex-none rounded" src={song.image} alt="" />
            <p className="truncate text-amber-50">{song.name}</p>
          </div>

          {/* album */}
          <p className="hidden sm:block truncate">{song.album}</p>

          {/* data aggiunta */}
          <p className="hidden md:block whitespace-nowrap">
            {timeAgo(song.date)}
          </p>

          {/* durata */}
          <p className="text-right">{song.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
