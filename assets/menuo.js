function getSearchParameters() {
      var prmstr = window.location.search.substr(1);
      return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray( prmstr ) {
    var params = {};
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}

var params = getSearchParameters();
stato = params.stato
nivelo = params.nivelo
var mesagxo
denove = document.getElementById("denove")
sekve = document.getElementById("sekve")
if(stato == "gajnanto"){
  mesagxo = "به سلامت رد شدی!"
  denove.style.display = "none"
}
else if(stato == "malgajnanto"){
  mesagxo = "غرق شدی!"
  sekve.style.display = "none"
}
else if(stato == "fintempe"){
  mesagxo = "زمان به پایان رسید!"
  sekve.style.display = "none"
}
document.getElementById("stato").innerHTML = mesagxo

document.getElementById("denove").addEventListener("click", function(){
  window.location = "file:///android_asset/ludo.html?nivelo="+nivelo
  //window.location = "ludo.html?nivelo="+nivelo
})
document.getElementById("sekve").addEventListener("click", function(){
  window.location = "file:///android_asset/ludo.html?nivelo="+(1+(+nivelo))
  //window.location = "ludo.html?nivelo="+(1+(+nivelo))
})
