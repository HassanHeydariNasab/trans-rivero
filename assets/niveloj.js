function persa_cifero(cifero){
  return cifero.replace(/0/g, "۰").replace(/1/g, "۱").replace(/2/g, "۲").replace(/3/g, "۳").replace(/4/g, "۴").replace(/5/g, "۵").replace(/6/g, "۶").replace(/7/g, "۷").replace(/8/g, "۸").replace(/9/g, "۹")
}
var komencu_flava = document.getElementById("komencu_flava"), komencu_verda = document.getElementById("komencu_verda"), komencu_blua = document.getElementById("komencu_blua"), komencu_viola = document.getElementById("komencu_viola")
var nivelo_flava, nivelo_verda, nivelo_blua, nivelo_viola, sxlosita

nivelo_flava = window.localStorage.getItem("nivelo_flava")
if (!(nivelo_flava)){
  window.localStorage.setItem("nivelo_flava", 0)
  nivelo_flava = 0
}
nivelo_verda = window.localStorage.getItem("nivelo_verda")
if (!(nivelo_verda)){
  window.localStorage.setItem("nivelo_verda", 0)
  nivelo_verda = 0
}
nivelo_blua = window.localStorage.getItem("nivelo_blua")
if (!(nivelo_blua)){
  window.localStorage.setItem("nivelo_blua", 0)
  nivelo_blua = 0
}
nivelo_viola = window.localStorage.getItem("nivelo_viola")
if (!(nivelo_viola)){
  window.localStorage.setItem("nivelo_viola", 0)
  nivelo_viola = 0
}

komencu_flava.innerHTML = "مرحلهٔ " + persa_cifero(nivelo_flava.toString()) + " از ۲۰"
komencu_verda.innerHTML = "مرحلهٔ " + persa_cifero(nivelo_verda.toString()) + " از ۳۰"
komencu_blua.innerHTML = "مرحلهٔ " + persa_cifero(nivelo_blua.toString()) + " از ۲۰"
komencu_viola.innerHTML = "مرحلهٔ " + persa_cifero(nivelo_viola.toString()) + " از ۳۰"

sxlosita = window.localStorage.getItem("sxlosita")
if (!(sxlosita)){
  window.localStorage.setItem("sxlosita", 1)
  sxlosita = "1"
}
if (sxlosita == "0"){
  document.getElementById("komencu_blua").style.backgroundImage = "url('bildoj/ludu.svg')";
  document.getElementById("komencu_viola").style.backgroundImage = "url('bildoj/ludu.svg')";
}
komencu_flava.addEventListener("click", function(){
  window.location =  "ludo.html?jxeleo=flava&nivelo="+nivelo_flava
})
komencu_verda.addEventListener("click", function(){
  window.location =  "ludo.html?jxeleo=verda&nivelo="+nivelo_verda
})
komencu_blua.addEventListener("click", function(){
  if(sxlosita == "0"){
    window.location =  "ludo.html?jxeleo=blua&nivelo="+nivelo_blua
  }
  else if(sxlosita == "1"){
    mAndroid.malsxlosi_dialogo()
  }
})
komencu_viola.addEventListener("click", function(){
  if(sxlosita == "0"){
    window.location =  "ludo.html?jxeleo=viola&nivelo="+nivelo_viola
  }
  else if(sxlosita == "1"){
    mAndroid.malsxlosi_dialogo()
  }
})