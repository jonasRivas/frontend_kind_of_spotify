export class Album {
    constructor(
        // public _id: string, //en este caso de omite para hacerlo sencillo
        public title: string,
        public definition: string,
        public year: number,
        public image: string,
        public artist: string
    ) { }
}