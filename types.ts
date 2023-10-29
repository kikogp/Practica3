

export type Disc={
    Name:string,
    Author:string,
    Format: "LP"| "CD" | "Single" | "Cassette" | "Reel to reel" | "Minidisc" | "Videocd",
    PrintingCountry:string,
    CoverArt:string,
    id:string,

}
 
export const Discs:Array<Disc> = [
    {Name:"Disco1", Author:"Twenty one pilots", Format:"LP", PrintingCountry:"USA", CoverArt:"TW",id:"33A"},
    {Name:"Disco2", Author:"The Strokes", Format:"CD", PrintingCountry:"USA", CoverArt:"Picasso",id:"44"},
    {Name:"Disco3", Author:"Tame Impala", Format:"Single", PrintingCountry:"Australia", CoverArt:"JJ",id:"2FF"},
    {Name:"Disco4", Author:"Pablo Alborán", Format:"CD", PrintingCountry:"Spain", CoverArt:"Juan",id:"YY"},
    {Name:"Disco5", Author:"Mago de oz", Format:"LP", PrintingCountry:"Spain", CoverArt:"Hombre hojalata",id:"2FE"},
    {Name:"Disco6", Author:"Coldplay", Format:"Minidisc", PrintingCountry:"UK", CoverArt:"Hot play",id:"2FD"},
    {Name:"Disco7", Author:"AJR", Format:"Videocd", PrintingCountry:"USA", CoverArt:"yo",id:"33B"},
    {Name:"Disco8", Author:"Masi", Format:"Single", PrintingCountry:"Spain", CoverArt:"Fernando Macías",id:"33"},
];