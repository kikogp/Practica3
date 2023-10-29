import express, {Request, Response} from "npm:express@4.18.2";
import {Disc,Discs} from "./types.ts";


const app = express();


app.get("/", (req: Request,res: Response)=>{

    let output:string = "<html><body>";

    Discs.forEach(e => output += ("<h1>" + e.Name + " " + e.Author + " " + e.Format + " " 
    + e.PrintingCountry + " " + e.CoverArt + " " + e.id  + "</h1>"));
    output += "</html></body>";
    res.send(output);

}).get("/:id", (req: Request,res: Response)=>{

    const idin = req.params.id;
    const s:string = `${idin}`;

    const d:Disc|undefined = Discs.find(e => e.id === s);

    if(d !== undefined){

    res.send("<html><body>" + "<h1>" + d.Name + " " + d.Author + " " + d.Format + " " 
    + d.PrintingCountry + " " + d.CoverArt + " " + d.id  + "</h1>" + "</html></body>");

   }else{ res.send("<html><body><h1> No se encontró el disco </h1></html></body>")}

}).get("/:name", (req: Request,res: Response)=>{
    const namein = req.params.id;
    const s:string = `${namein}`;

    let output:string = "<html><body>";

    
    output += "</html></body>";
})



app.listen(3000);