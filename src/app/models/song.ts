export class Song {
    constructor(
        // public _id: string, //en este caso de omite para hacerlo sencillo
        public number: number,
        public name: string,
        public duration: string,
        public file: string,
        public album: string
    ) { }
}