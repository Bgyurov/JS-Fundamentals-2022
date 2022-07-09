function gramophone(bandName, albumName, songName) {

    let time = (bandName.length * albumName.length) * songName.length / 2;

    let fullrotate = time / 2.5;

    console.log(`The plate was rotated ${Math.ceil(fullrotate)} times.`);
}