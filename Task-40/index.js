// Name = Ubaid 
// Date = 9-Oct-2022

function make_album(artist, title, track=0){
    let album_object = {
        artist: artist,
        title: title,
        track: track
    }
    return album_object;
}

let album1 = make_album("artist1", "ABC");
console.log(`Artist : ${album1.artist} Title: ${album1.title}`);

let album2 = make_album("artist2", "DEF");
console.log(`Artist : ${album2.artist} Title: ${album2.title}`);

let album3 = make_album("artist3", "XYZ", 5);
console.log(`Artist : ${album3.artist} Title: ${album3.title} Track: ${album3.track}`);