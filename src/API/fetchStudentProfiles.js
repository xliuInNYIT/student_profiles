const fetchStudentProfiles = function(){
    const URL = "https://api.hatchways.io/assessment/students";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", URL, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

export default fetchStudentProfiles;