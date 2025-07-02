/*  DisplayAlbum.jsx  ────────────────────────────────────────────────
    Visualizza la pagina di un album:

    1.  Legge l’ID dalla URL (React-Router) e recupera i dati dell’album.
    2.  Mostra copertina, titolo, descrizione e info varie.
    3.  Stampa una tabella-griglia (4 colonne) con elenco tracce:
        ┌───┬───────────────────────┬──────────────┬───────────────┐
        │ # │  Cover + Titolo       │  Album       │  Date added   │
        └───┴───────────────────────┴──────────────┴───────────────┘
        • Colonne 3-4 nascoste su mobile.
        • Titoli lunghi troncati con ellipsis.
        • Righe evidenziate on-hover.
-------------------------------------------------------------------- */

import { albumsData, songsData, assets } from "../assets/assets";
import NavBar                from "./NavBar";
import { useParams }         from "react-router-dom";

const DisplayAlbum = () => {
  /* ── 1. Routing & dati album ─────────────────────────────────── */
  const { id }   = useParams();          // /album/:id
  const albumData = albumsData[id];      // oggetto album

  /* ── 2. UI ────────────────────────────────────────────────────── */
  return (
    <>
      <NavBar />

      {/* Header grande con copertina + descrizione */}
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
            <b> • 10 songs, </b>
            about 2&nbsp;hr&nbsp;30&nbsp;min
          </p>
        </div>
      </div>

      {/* ───── Header colonne della tabella ───── */}
      <div
        className="grid grid-cols-[40px_1fr_180px_120px]
                   gap-4 px-2 pb-2 text-sm text-[#a7a7a7]
                   border-b border-[#232323]"
      >
        <p className="text-right">#</p>
        <p>Title</p>
        <p className="hidden sm:block">Album</p>
        <p className="hidden sm:block whitespace-nowrap">Date Added</p>
      </div>

      {/* ───── Lista tracce ───── */}
      {songsData.map((item, index) => (
        <div
          key={item.id ?? index} /* usa id se c'è, altrimenti index */
          className="grid grid-cols-[40px_1fr_180px_120px]
                     items-center gap-4 px-2 py-2
                     text-[#a7a7a7] hover:bg-[#ffffff1a] cursor-pointer"
        >
          {/* numero progressivo */}
          <span className="text-right">{index + 1}</span>

          {/* titolo: copertina + testo */}
          <div className="flex items-center gap-5 overflow-hidden">
            <img className="w-10 flex-none rounded" src={item.image} alt="" />
            <p className="truncate text-amber-50">{item.name}</p>
          </div>

          {/* album */}
          <p className="hidden sm:block truncate">{item.album}</p>

          {/* data aggiunta */}
          <p className="hidden sm:block whitespace-nowrap">{item.date}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
