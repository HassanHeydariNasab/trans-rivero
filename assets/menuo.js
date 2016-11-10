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
function persa_cifero(cifero){
  return cifero.replace(/0/g, "۰").replace(/1/g, "۱").replace(/2/g, "۲").replace(/3/g, "۳").replace(/4/g, "۴").replace(/5/g, "۵").replace(/6/g, "۶").replace(/7/g, "۷").replace(/8/g, "۸").replace(/9/g, "۹")
}

var params = getSearchParameters();
stato = params.stato
nivelo = params.nivelo
var mesagxo
denove = document.getElementById("denove")
sekve = document.getElementById("sekve")
k_antaux = document.getElementById("k_antaux")
k_antaux_f = document.getElementById("k_antaux_f")
if(stato == "gajnanto"){
  mesagxo = "به سلامت رد شدی!"
  sekve.innerHTML = "شروع مرحلهٔ بعد ("+persa_cifero((1+(+nivelo)).toString())+")"
  denove.style.display = "none"
  k_antaux_f.style.display = "none"
}
else if(stato == "subakvita"){
  mesagxo = "غرق شدی!"
  sekve.style.display = "none"
  k_antaux.style.display = "none"
}
else if(stato == "mortita"){
  mesagxo = "مُردی!"
  sekve.style.display = "none"
  k_antaux.style.display = "none"
}
else if(stato == "fintempe"){
  mesagxo = "زمان به پایان رسید!"
  sekve.style.display = "none"
  k_antaux.style.display = "none"
}
document.getElementById("stato").innerHTML = mesagxo

document.getElementById("denove").addEventListener("click", function(){
  try{
    //window.location = "file:///android_asset/ludo.html?nivelo="+nivelo
  }
  finally{
    window.location = "ludo.html?nivelo="+nivelo
  }
})
document.getElementById("sekve").addEventListener("click", function(){
  try{
    //window.location = "file:///android_asset/ludo.html?nivelo="+(1+(+nivelo))
  }
  finally{
    window.location = "ludo.html?nivelo="+(1+(+nivelo))
  }
})
