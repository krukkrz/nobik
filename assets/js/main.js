function updateCounter(){
    const url = "https://email-counter-nobik.herokuapp.com/3"

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "PUT", url, false ); // false for synchronous request
    xmlHttp.send( null );
}