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
jxeleo = params.jxeleo
var mesagxo
denove = document.getElementById("denove")
sekve = document.getElementById("sekve")
k_antaux = document.getElementById("k_antaux")
if(stato == "gajnanto"){
  mesagxo = "به سلامت رد شدی!"
  window.localStorage.setItem("nivelo_"+jxeleo, +window.localStorage.getItem("nivelo_"+jxeleo)+1)
  sekve.innerHTML = "مرحلهٔ بعد ("+persa_cifero((1+(+nivelo)).toString())+")"
  denove.style.display = "none"
  k_antaux.src = "bildoj/"+jxeleo+"_antaux.svg"
}
else if(stato == "subakvita"){
  mesagxo = "غرق شدی!"
  sekve.style.display = "none"
  k_antaux.src = "bildoj/"+jxeleo+"_antaux_f.svg"
}
else if(stato == "mortita"){
  mesagxo = "مُردی!"
  sekve.style.display = "none"
  k_antaux.src = "bildoj/"+jxeleo+"_antaux_f.svg"
}
else if(stato == "fintempe"){
  mesagxo = "زمان به پایان رسید!"
  sekve.style.display = "none"
  k_antaux.src = "bildoj/"+jxeleo+"_antaux_f.svg"
}
document.getElementById("stato").innerHTML = mesagxo

document.getElementById("denove").addEventListener("click", function(){
  //window.location = "file:///android_asset/ludo.html?jxeleo="+jxeleo+"&nivelo="+nivelo
  window.location = "ludo.html?jxeleo="+jxeleo+"&nivelo="+nivelo
})
document.getElementById("sekve").addEventListener("click", function(){
  //window.location = "file:///android_asset/ludo.html?jxeleo="+jxeleo+"&nivelo="+(1+(+nivelo))
  window.location = "ludo.html?jxeleo="+jxeleo+"&nivelo="+(1+(+nivelo))
})
document.getElementById("reen").addEventListener("click", function(){
  //window.location = "file:///android_asset/niveloj.html"
  window.location = "niveloj.html"
})