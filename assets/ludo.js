var sw = window.screen.width, sh = window.screen.height * 0.8
var ll = sw / 4, lr = sw * 3 / 4
var myState = new Kiwi.State('myState');
var game = new Kiwi.Game("ludo", 'Trans', myState, { renderer: Kiwi.RENDERER_CANVAS , width:sw , height:sh});
var kk, pasxo, la_d, la_md, d, tempo, spiro=100, sano=100, nivelo_longa, tempdeturo, krokodilebla, sxtonebla
var ad = []
var amd = []
function elekti(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}
function hazarde(h){
  var a = Array.apply(null, {length: h}).map(Number.call, Number)
  if (elekti(a) == 0){
    return true;
  }
  else{
    return false;
  }
}
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
var nivelo = +params.nivelo,
jxeleo = params.jxeleo
switch(jxeleo){
  case "flava":
  switch(nivelo){
    case 0:
    nivelo_longa = 10;
    tempdeturo = 12;
    krokodilebla = 0;
    sxtonebla = 2;
    break;
    case 1:
    nivelo_longa = 20;
    tempdeturo = 12;
    krokodilebla = 0;
    sxtonebla = 2;
    break;
    case 2:
    nivelo_longa = 15;
    tempdeturo = 12;
    krokodilebla = 8;
    sxtonebla = 10;
    break;
    case 3:
    nivelo_longa = 60;
    tempdeturo = 9;
    krokodilebla = 0;
    sxtonebla = 10;
    break;
    case 4:
    nivelo_longa = 25;
    tempdeturo = 12;
    krokodilebla = 4;
    sxtonebla = 0;
    break;
    case 5:
    nivelo_longa = 40;
    tempdeturo = 3;
    krokodilebla = 20;
    sxtonebla = 10;
    break;
    default:
    nivelo_longa = 10;
    tempdeturo = 12;
    krokodilebla = 4;
    sxtonebla = 4;
  }
  break;
  case "verda":
  switch(nivelo){
    case 0:
    nivelo_longa = 15;
    tempdeturo = 6;
    krokodilebla = 0;
    sxtonebla = 3;
    break;
    case 1:
    nivelo_longa = 10;
    tempdeturo = 3;
    krokodilebla = 0;
    sxtonebla = 0;
    break;
    case 2:
    nivelo_longa = 30;
    tempdeturo = 1;
    krokodilebla = 6;
    sxtonebla = 4;
    break;
    case 3:
    nivelo_longa = 60;
    tempdeturo = 3;
    krokodilebla = 4;
    sxtonebla = 6;
    break;
    case 4:
    nivelo_longa = 25;
    tempdeturo = 1;
    krokodilebla = 4;
    sxtonebla = 0;
    break;
    case 5:
    nivelo_longa = 40;
    tempdeturo = 3;
    krokodilebla = 2;
    sxtonebla = 10;
    break;
    default:
    nivelo_longa = 10;
    tempdeturo = 12;
    krokodilebla = 4;
    sxtonebla = 4;
  }
  break;
}
myState.preload = function(){
  Kiwi.State.prototype.preload.call(this);
  this.addImage('flava', 'bildoj/flava.svg');
  this.addImage('verda', 'bildoj/verda.svg');
  this.addImage('sxtono_d', 'bildoj/sxtono_d.svg');
  this.addImage('sxtono_md', 'bildoj/sxtono_md.svg');
  this.addImage('plagxo', 'bildoj/plagxo.svg');
  this.addSpriteSheet('krokodilo_d', 'bildoj/krokodilo_d.svg', 128,128);
  this.addSpriteSheet('krokodilo_md', 'bildoj/krokodilo_md.svg', 128, 128);
  this.addImage('testudo', 'bildoj/testudo.svg');
  this.addImage('negxulo', 'bildoj/negxulo.svg');
  this.addImage('negxo', 'bildoj/negxo.svg');
  this.addImage('pingveno', 'bildoj/pingveno.svg');
  this.addImage('degelata_negxulo', 'bildoj/degelata_negxulo.svg');
  this.addImage('verda_antaux', 'bildoj/verda_antaux.svg');
  this.addImage('viola_antaux', 'bildoj/viola_antaux.svg');
  this.addAudio('la_d', 'sonoj/la_d.mp3');
  this.addAudio('la_md', 'sonoj/la_md.mp3');
  this.addImage('profunda_akvo', 'bildoj/profunda_akvo.svg');
  this.addImage('nubo1', 'bildoj/nubo1.svg');
  this.addImage('nubo2', 'bildoj/nubo2.svg');
};

myState.create = function(){
  Kiwi.State.prototype.create.call(this);
  this.game.stage.resize(sw, sh);
  this.game.stage.color = '#00bcd4'
  
  this.profunda_akvo = new Kiwi.GameObjects.Sprite(this, this.textures['profunda_akvo'], 0,0)
  this.profunda_akvo.scaleX = sw
  this.profunda_akvo.scaleY = sh
  //this.profunda_akvo.alpha = 0
  var sf = sh/3.6
  switch (jxeleo){
    case "flava":
    this.k = new Kiwi.GameObjects.Sprite(this, this.textures['flava'], lr-32, sh/3+32);
    break;
    case "verda":
    this.k = new Kiwi.GameObjects.Sprite(this, this.textures['verda'], lr-32, sh/3+32);
    break;
  }
  this.k.scaleToHeight(sf/2)
  //this.k.centerAnchorPoint()
  this.k.anchorPointX = 32
  this.k.anchorPointY = 32
  kk = this.k

  this.testudoj = new Kiwi.Group(this)
  this.krokodiloj_d = new Kiwi.Group(this)
  this.krokodiloj_md = new Kiwi.Group(this)
  this.sxtonoj = new Kiwi.Group(this)
  this.nuboj_altaj = new Kiwi.Group(this)
  this.nuboj_malaltaj = new Kiwi.Group(this)

  var testudo = new Kiwi.GameObjects.Sprite(this, this.textures['testudo'], lr-64, sh/3)
  testudo.addTag(ad.length)
  testudo.scaleToHeight(sf)
  this.testudoj.addChild(testudo)
  amd.push(0)
  ad.push(1)
  for(i = 0; i < nivelo_longa; i++) {
    if(hazarde(2)){
      if(hazarde(krokodilebla)){
        var krokodilo = new Kiwi.GameObjects.Sprite(this, this.textures['krokodilo_md'], ll-64, -sh/3*i)
        krokodilo.scaleToHeight(sf)
        this.krokodiloj_md.addChild(krokodilo)
        var testudo = new Kiwi.GameObjects.Sprite(this, this.textures['testudo'], lr-64, -sh/3*i)
        testudo.addTag(ad.length)
        testudo.scaleToHeight(sf)
        this.testudoj.addChild(testudo)
        amd.push(3)
        ad.push(1)
      }
      else if(hazarde(sxtonebla)){
        var testudo = new Kiwi.GameObjects.Sprite(this, this.textures['testudo'], lr-64, -sh/3*i)
        testudo.addTag(ad.length)
        testudo.scaleToHeight(sf)
        this.testudoj.addChild(testudo)
        var sxtono = new Kiwi.GameObjects.Sprite(this, this.textures['sxtono_md'], ll-64, -sh/3*i)
        sxtono.scaleToHeight(sf)
        this.sxtonoj.addChild(sxtono)
        amd.push(2)
        ad.push(1)
      }
      else{
        var testudo = new Kiwi.GameObjects.Sprite(this, this.textures['testudo'], ll-64, -sh/3*i)
        testudo.addTag(ad.length)
        testudo.scaleToHeight(sf)
        this.testudoj.addChild(testudo)
        amd.push(1)
        ad.push(0)
      }
    }
    else{
      if(hazarde(krokodilebla)){
        var krokodilo = new Kiwi.GameObjects.Sprite(this, this.textures['krokodilo_d'], lr-64, -sh/3*i)
        krokodilo.scaleToHeight(sf)
        this.krokodiloj_d.addChild(krokodilo)
        var testudo = new Kiwi.GameObjects.Sprite(this, this.textures['testudo'], ll-64, -sh/3*i)
        testudo.addTag(ad.length)
        testudo.scaleToHeight(sf)
        this.testudoj.addChild(testudo)
        amd.push(1)
        ad.push(3)
        }
      else if(hazarde(sxtonebla)){
        var testudo = new Kiwi.GameObjects.Sprite(this, this.textures['testudo'], ll-64, -sh/3*i)
        testudo.addTag(ad.length)
        testudo.scaleToHeight(sf)
        this.testudoj.addChild(testudo)
        var sxtono = new Kiwi.GameObjects.Sprite(this, this.textures['sxtono_d'], lr-64, -sh/3*i)
        sxtono.scaleToHeight(sf)
        this.sxtonoj.addChild(sxtono)
        amd.push(1)
        ad.push(2)
      }
      else{
        var testudo = new Kiwi.GameObjects.Sprite(this, this.textures['testudo'], lr-64, -sh/3*i)
        testudo.addTag(ad.length)
        testudo.scaleToHeight(sf)
        this.testudoj.addChild(testudo)
        amd.push(0)
        ad.push(1)
      }
    }
  }
  this.plagxoj = new Kiwi.Group(this)
  for(i = 0; i < sw / 256 + 1; i++){
    for(j = 0; j < 2; j++){
      this.plagxo = new Kiwi.GameObjects.StaticImage(this, this.textures['plagxo'], i*256, sh/3 + j*255)
      this.plagxoj.addChild(this.plagxo)
    }
  }
  this.degelata_negxulo = new Kiwi.GameObjects.StaticImage(this, this.textures['degelata_negxulo'], -32, sh/3-32)
  for(i = 0; i < sw / 256 + 1; i++){
    for(j = 0; j < 2; j++){
      this.plagxo = new Kiwi.GameObjects.StaticImage(this, this.textures['negxo'], i*256, -sh/3*nivelo_longa - j*255+sh/3-80)
      this.plagxoj.addChild(this.plagxo)
    }
  }
  if(hazarde(2)){
    this.negxulo = new Kiwi.GameObjects.StaticImage(this, this.textures['negxulo'], sw/2-64, -sh/3*(nivelo_longa-1))
  }
  else{
    this.negxulo = new Kiwi.GameObjects.StaticImage(this, this.textures['pingveno'], sw/2-64, -sh/3*(nivelo_longa-1))
  }
  this.verda_antaux = new Kiwi.GameObjects.StaticImage(this, this.textures['verda_antaux'], lr, -sh/3*(nivelo_longa-1))
  this.viola_antaux = new Kiwi.GameObjects.StaticImage(this, this.textures['viola_antaux'], ll-64, -sh/3*(nivelo_longa-1))
  for(i=0; i<nivelo_longa*3; i++){
    var nubo = new Kiwi.GameObjects.Sprite(this, this.textures['nubo'+(Math.floor(Math.random()*2)+1).toString()], Math.random()*sw*2, -(sh/10)*i)
    nubo.scaleToHeight(sf*1.7);
    this.nuboj_altaj.addChild(nubo);
  }
  for(i=0; i<nivelo_longa*3; i++){
    var nubo = new Kiwi.GameObjects.Sprite(this, this.textures['nubo'+(Math.floor(Math.random()*2)+1).toString()], Math.random()*sw*2, -(sh/10)*i)
    nubo.scaleToHeight(sf*1.1);
    this.nuboj_malaltaj.addChild(nubo);
  }
  this.nuboj_malaltaj.forEach(this, this.nubo_malalta_movi)
  this.nuboj_altaj.forEach(this, this.nubo_alta_movi)

  console.log(ad, amd)
  this.addChild(this.profunda_akvo);
  this.addChild(this.testudoj);
  this.addChild(this.krokodiloj_d);
  this.addChild(this.krokodiloj_md);
  this.addChild(this.sxtonoj);
  this.addChild(this.plagxoj);
  this.addChild(this.negxulo);
  this.addChild(this.degelata_negxulo);
  this.addChild(this.verda_antaux);
  this.addChild(this.viola_antaux);
  this.addChild(this.k);
  this.addChild(this.nuboj_malaltaj);
  this.addChild(this.nuboj_altaj);
  this.krokodiloj_d.callAll('animation', 'add', ['mangxi', [0,1,2,3], 0.1, true, true])
  this.krokodiloj_md.callAll('animation', 'add', ['mangxi', [0,1,2,3], 0.1, true, true])
  tempo = 0
  this.tempilo = this.game.time.clock.createTimer('tempilo', 0.01, nivelo_longa*tempdeturo*1000, true);
  this.tempilo.createTimerEvent( Kiwi.Time.TimerEvent.TIMER_COUNT, this.jeTempiloKalkulo1s, this );
  this.tempilo.createTimerEvent( Kiwi.Time.TimerEvent.TIMER_STOP, this.jeTempiloHalto, this );
  this.la_d = new Kiwi.Sound.Audio(this.game, 'la_d', 0.705, false);
  this.la_md = new Kiwi.Sound.Audio(this.game, 'la_md', 0.575, false);
  pasxo = 0
  d = true
  la_d = this.la_d
  la_md = this.la_md
  document.getElementById("dekstru").addEventListener("click", function(){la_d.play('default', true); kk.x = lr-32; kk.y -= sh/3; d = true; pasxo++;})
  document.getElementById("maldekstru").addEventListener("click", function(){la_md.play('default', true); kk.x = ll-32; kk.y -= sh/3; d = false; pasxo++;})
};

myState.update = function(){
  Kiwi.State.prototype.update.call(this);
  var playerOffsetY = this.k.height * 0.5;
  this.game.cameras.defaultCamera.transform.y = -1 * this.k.y + this.game.stage.height * 0.6 - playerOffsetY;
  if(pasxo >= nivelo_longa){this.menuo("gajnanto")}
  else if(sano <= 0){this.menuo("mortita")}
  else if(spiro <= 0){this.menuo("subakvita")}
  else{
  if(!(((ad[pasxo] === 1 || ad[pasxo] === 2) && d) || ((amd[pasxo] === 1 || amd[pasxo] === 2) && d == false)) && tempo > this.lastaTempo && pasxo != 0 && pasxo != nivelo_longa){
    if((ad[pasxo] === 3 && d) || (amd[pasxo] === 3 && d == false)){
      spiro-=3
    }
    else{
      spiro-=1.5
    }
    document.getElementById("spiro").style.width = spiro + "vw"
  }
  if(((ad[pasxo] === 3 && d) || (amd[pasxo] === 3 && d == false)) && tempo > this.lastaTempo && pasxo != 0 && pasxo != nivelo_longa){
    sano-=4.5
    document.getElementById("sano").style.width = sano + "vw"
  }
    this.lastaTempo = tempo
  }

  if(pasxo/nivelo_longa <= 0.5){
    this.profunda_akvo.alpha = pasxo/nivelo_longa*2
  }
  else if(0.5 < pasxo/nivelo_longa <= 1){
    this.profunda_akvo.alpha = (1-(pasxo/nivelo_longa))*2
  }

};
myState.jeTempiloKalkulo1s = function(){
  if(tempo < (nivelo_longa+1)*tempdeturo*1000){
    tempo+=1
    this.tt = this.testudoj.getFirstChildByTag(pasxo)
    if (this.tt !== null && tempo % 2 === 0){
      if(this.tt.alpha <= 0){
        if(amd[pasxo] === 1){
          amd[pasxo] = 0
          this.testudoj.removeChild(this.tt)
        }
        if(ad[pasxo] === 1){
          ad[pasxo] = 0
          this.testudoj.removeChild(this.tt)
        }
      }
      else if ((tempo % tempdeturo == 0) && ((ad[pasxo] === 1 && d) || (amd[pasxo] === 1 && d==false))){
        this.tt.alpha -= 1/20
      }
    }
    if (tempo % 1600 == 0){
      this.nuboj_malaltaj.forEach(this, this.nubo_malalta_movi)
    }
    if (tempo % 1000 == 0){
      this.nuboj_altaj.forEach(this, this.nubo_alta_movi)
    }

  }
  else{
    this.menuo("fintempe")
  }
}
myState.menuo = function(stato){
  try{
    //window.location = "file:///android_asset/menuo.html?stato="+stato+"&jxeleo="+jxeleo+"&nivelo="+nivelo
  }
  finally{
    alert(stato)
    window.location = "menuo.html?stato="+stato+"&jxeleo="+jxeleo+"&nivelo="+nivelo
  }
}
//game.cameras.defaultCamera.transform.scale
myState.nubo_alta_movi = function(nubo){
  nubo.x = Math.random()*sw*2+sw
  nubo.t = this.game.tweens.create(nubo).to({x: nubo.x-sw*4}, Math.random()*2000+8000, Kiwi.Animations.Tweens.Easing.Linear.None, true)
}
myState.nubo_malalta_movi = function(nubo){
  nubo.x = Math.random()*sw*2+sw
  nubo.t = this.game.tweens.create(nubo).to({x: nubo.x-sw*4}, Math.random()*3000+13000, Kiwi.Animations.Tweens.Easing.Linear.None, true)
}