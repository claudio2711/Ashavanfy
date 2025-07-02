/* Helpers per durata e “time-ago”. Usa import { … } */

export const formatDuration = secs => {
  const m = Math.floor(secs / 60);
  const s = String(secs % 60).padStart(2, "0");
  return `${m}:${s}`;
};

export const timeAgo = iso => {
  const diff = Date.now() - new Date(iso).getTime();
  const day  = 86_400_000;          // ms in un giorno
  const d    = Math.round(diff / day);
  return d <= 1 ? "1 day ago" : `${d} days ago`;
};

export const fmt = secs => {
  const m = Math.floor(secs / 60);
  const s = String(Math.floor(secs % 60)).padStart(2, "0");
  return `${m}:${s}`;           // 0:05   4:04
};

