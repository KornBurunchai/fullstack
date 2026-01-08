class Media{
    constructor(info){
        this.publishData = info.publishData;
        this.name = info.name;
    }
}

class Song extends Media {
    constructor(songData){
        super(songData);
        this.artist = songData.artist;
    }
}

const Mysong = new Song({
    artist: 'Qreen',
    name:'Bohemian Rhapsody',
    publishData: 1975
});

console.log(Mysong);