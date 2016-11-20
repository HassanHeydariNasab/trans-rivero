function persa_cifero(cifero){
  return cifero.replace(/0/g, "۰").replace(/1/g, "۱").replace(/2/g, "۲").replace(/3/g, "۳").replace(/4/g, "۴").replace(/5/g, "۵").replace(/6/g, "۶").replace(/7/g, "۷").replace(/8/g, "۸").replace(/9/g, "۹")
}
var komencu_flava = document.getElementById("komencu_flava"), komencu_verda = document.getElementById("komencu_verda")
var nivelo_flava, nivelo_verda

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

komencu_flava.innerHTML = "مرحلهٔ " + persa_cifero(nivelo_flava.toString()) + " از ۲۰"
komencu_verda.innerHTML = "مرحلهٔ " + persa_cifero(nivelo_verda.toString()) + " از ۲۰"

komencu_flava.addEventListener("click", function(){
  window.location =  "ludo.html?jxeleo=flava&nivelo="+nivelo_flava
})
komencu_verda.addEventListener("click", function(){
  window.location =  "ludo.html?jxeleo=verda&nivelo="+nivelo_verda
})