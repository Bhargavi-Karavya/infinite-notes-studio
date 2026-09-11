import midnight from "@/assets/midnight-echoes.jpg";
import neon from "@/assets/neon-skies.jpg";
import paper from "@/assets/paper-moons.jpg";

export type SongStatus = "Published" | "Draft" | "Review";
export type Song = { id:string; title:string; artist:string; album:string; status:SongStatus; created:string; duration:string; genre:string; language:string; artwork:string; lyrics:string; plays:string };
export const songs: Song[] = [
 {id:"midnight-echoes",title:"Midnight Echoes",artist:"Luna Vale",album:"Afterglow",status:"Published",created:"Sep 10, 2026",duration:"3:42",genre:"Alternative Pop",language:"English",artwork:midnight,plays:"1.2M",lyrics:"Streetlights flicker like a memory fading\nYour voice moves softly through the radio haze\nWe were sparks in the quiet, drawing constellations\nNow every midnight echoes your name"},
 {id:"neon-skies",title:"Neon Skies",artist:"The Satellites",album:"City Signals",status:"Published",created:"Sep 08, 2026",duration:"4:08",genre:"Electronic",language:"English",artwork:neon,plays:"842K",lyrics:"Under neon skies we learned to disappear\nThrough the static, every signal sounded clear\nCity lights were constellations in our eyes\nWe found forever under neon skies"},
 {id:"paper-moons",title:"Paper Moons",artist:"Mira Sol",album:"Tidal Letters",status:"Review",created:"Sep 05, 2026",duration:"3:18",genre:"Indie Folk",language:"English",artwork:paper,plays:"—",lyrics:"I folded all our promises in two\nSet them sailing on an ocean made of blue\nPaper moons keep watch above the tide\nHolding every word we left inside"},
 {id:"golden-hour",title:"Golden Hour",artist:"Elias North",album:"Open Roads",status:"Draft",created:"Sep 02, 2026",duration:"3:55",genre:"Acoustic",language:"English",artwork:midnight,plays:"—",lyrics:"The road runs quiet through the amber light\nWe keep on moving till the day meets night"},
 {id:"velvet-static",title:"Velvet Static",artist:"Nova Bloom",album:"Frequency",status:"Published",created:"Aug 29, 2026",duration:"2:59",genre:"Dream Pop",language:"English",artwork:neon,plays:"378K",lyrics:"Velvet static in the air tonight\nEvery frequency is burning bright"},
];
export const getSong=(id:string)=>songs.find((song)=>song.id===id) ?? songs[0];
