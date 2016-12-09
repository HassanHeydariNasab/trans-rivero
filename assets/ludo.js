var sw = window.screen.width, sh = window.screen.height * 0.8
var ll = sw / 4, lr = sw * 3 / 4
var myState = new Kiwi.State('myState');
var game = new Kiwi.Game("ludo", 'Trans', myState, { renderer: Kiwi.RENDERER_AUTO , width:sw , height:sh});
var kk, pasxo=0, la_d, la_md, d, tempo, spiro=100, sano=100, nivelo_longa, tempdeturo, krokodilebla, sxtonebla, nuba, nubo_denco, nokte, sf, fulma, intervalo=100, rugxebla, flamebla, pasxo_fulmo_d=-6, pasxo_fulmo_md=-3, glaciebla=0, jxeleebla=0
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
  nuba = false
  nokte = false
  fulma = false
  rugxebla = 100
  flamebla = false
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
    nuba = true
    nubo_denco = 4
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
    nuba = true
    nubo_denco = 2
    case 6:
    nivelo_longa = 70;
    tempdeturo = 6;
    krokodilebla = 20;
    sxtonebla = 4;
    flamebla = true;
    break;
    default:
    nivelo_longa = 10;
    tempdeturo = 12;
    krokodilebla = 4;
    sxtonebla = 2;
    flamebla= true;
    jxeleebla = 1;
  }
  break;
  case "verda":
  document.getElementById("sano").style.backgroundColor = "#8BC34A";
  document.getElementById("spiro").style.backgroundColor = "#689F38";
  nuba = true;
  nubo_denco = 4
  nokte = true
  fulma = false
  rugxebla = 4
  flamebla = false
  switch(nivelo){
    case 0:
    nivelo_longa = 15;
    tempdeturo = 6;
    krokodilebla = 0;
    sxtonebla = 3;
    rugxebla = 0;
    nokte = false;
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
    rugxebla = 2;
    break;
    case 4:
    nivelo_longa = 25;
    tempdeturo = 1;
    krokodilebla = 4;
    sxtonebla = 0;
    fulma = true
    break;
    case 5:
    nivelo_longa = 40;
    tempdeturo = 3;
    krokodilebla = 2;
    sxtonebla = 10;
    nubo_denco = 1
    break;
    default:
    nivelo_longa = 10;
    tempdeturo = 12;
    krokodilebla = 4;
    sxtonebla = 2;
    fulma = true;
    glaciebla = 1;
    jxeleebla = 1;
  }
  break;
  case "blua":
  document.getElementById("sano").style.backgroundColor = "#2196F3";
  document.getElementById("spiro").style.backgroundColor = "#1976D2";
  nuba = true;
  nubo_denco = 4
  nokte = true
  fulma = false
  rugxebla = 4
  flamebla = false
  glaciebla = 5;
  switch(nivelo){
    case 0:
    nivelo_longa = 15;
    tempdeturo = 6;
    krokodilebla = 0;
    sxtonebla = 3;
    rugxebla = 0;
    nokte = false;
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
    rugxebla = 2;
    break;
    case 4:
    nivelo_longa = 25;
    tempdeturo = 1;
    krokodilebla = 4;
    sxtonebla = 0;
    fulma = true
    break;
    case 5:
    nivelo_longa = 40;
    tempdeturo = 3;
    krokodilebla = 2;
    sxtonebla = 10;
    nubo_denco = 1
    break;
    default:
    nivelo_longa = 10;
    tempdeturo = 12;
    krokodilebla = 4;
    sxtonebla = 2;
    fulma = true;
    jxeleebla = 1;
  }
  break;
  case "viola":
  document.getElementById("sano").style.backgroundColor = "#9C27B0";
  document.getElementById("spiro").style.backgroundColor = "#7B1FA2";
  nuba = true;
  nubo_denco = 4
  nokte = true
  fulma = false
  rugxebla = 4
  flamebla = false
  glaciebla = 5;
  switch(nivelo){
    case 0:
    nivelo_longa = 15;
    tempdeturo = 6;
    krokodilebla = 0;
    sxtonebla = 3;
    rugxebla = 0;
    nokte = false;
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
    rugxebla = 2;
    break;
    case 4:
    nivelo_longa = 25;
    tempdeturo = 1;
    krokodilebla = 4;
    sxtonebla = 0;
    fulma = true
    break;
    case 5:
    nivelo_longa = 40;
    tempdeturo = 3;
    krokodilebla = 2;
    sxtonebla = 10;
    nubo_denco = 1
    break;
    default:
    nivelo_longa = 10;
    tempdeturo = 12;
    krokodilebla = 4;
    sxtonebla = 2;
    fulma = true
    jxeleebla = 1;
  }
  break;
}
myState.preload = function(){
  Kiwi.State.prototype.preload.call(this);
  this.addSpriteSheet('flava', 'bildoj/flava_trema.svg', 64,64);
  this.addSpriteSheet('verda', 'bildoj/verda_trema.svg', 64,64);
  this.addSpriteSheet('blua', 'bildoj/blua_trema.svg', 64,64);
  this.addSpriteSheet('viola', 'bildoj/viola_trema.svg', 64,64);
  this.addImage('sxtono_d', 'bildoj/sxtono_d.svg');
  this.addImage('sxtono_md', 'bildoj/sxtono_md.svg');
  this.addImage('plagxo', 'bildoj/plagxo.svg');
  this.addSpriteSheet('krokodilo_d', 'bildoj/krokodilo_d.svg', 128,128);
  this.addSpriteSheet('krokodilo_md', 'bildoj/krokodilo_md.svg', 128, 128);
  this.addImage('testudo', 'bildoj/testudo.svg');
  this.addImage('testudo_rugxa', 'bildoj/testudo_rugxa.svg');
  this.addImage('negxulo', 'bildoj/negxulo.svg');
  this.addImage('negxo', 'bildoj/negxo.svg');
  this.addImage('pingveno', 'bildoj/pingveno.svg');
  this.addImage('degelata_negxulo', 'bildoj/degelata_negxulo.svg');
  this.addImage('verda_antaux', 'bildoj/verda_antaux.svg');
  this.addImage('viola_antaux', 'bildoj/viola_antaux.svg');
  this.addImage('profunda_akvo', 'bildoj/profunda_akvo.svg');
  this.addImage('nubo1', 'bildoj/nubo1.svg');
  this.addImage('nubo2', 'bildoj/nubo2.svg');
  this.addImage('nubo3', 'bildoj/nubo3.svg');
  this.addImage('nubo4', 'bildoj/nubo4.svg');
  this.addImage('nigrajxo', 'bildoj/nigrajxo.svg');
  this.addImage('fulmo', 'bildoj/fulmo.svg');
  this.addImage('flamo', 'bildoj/flamo.svg');
  this.addImage('glacio', 'bildoj/glacio.svg');
  this.addImage('jxeleo_flava', 'bildoj/jxeleo_flava.svg');
  this.addImage('jxeleo_verda', 'bildoj/jxeleo_verda.svg');
  this.addImage('jxeleo_blua', 'bildoj/jxeleo_blua.svg');
  this.addImage('jxeleo_viola', 'bildoj/jxeleo_viola.svg');
  if(!(window.location.toString().match(/android/))){
    this.addAudio('tondro1', 'sonoj/tondro1.mp3');
    this.addAudio('tondro2', 'sonoj/tondro2.mp3');
    this.addAudio('la_d', 'sonoj/la_d.mp3');
    this.addAudio('la_md', 'sonoj/la_md.mp3');
  }
};

myState.create = function(){
  Kiwi.State.prototype.create.call(this);
  this.game.stage.resize(sw, sh);
  sf = sh/3.6
  this.game.stage.color = '#00bcd4'
  
  this.profunda_akvo = new Kiwi.GameObjects.StaticImage(this, this.textures['profunda_akvo'], 0,0)
  this.profunda_akvo.scaleX = sw/128
  this.profunda_akvo.scaleY = sh/120
  this.profunda_akvo.x = sw/2-64
  this.profunda_akvo.y = sh/2-64
  this.profunda_akvo.alpha = 0
  if(nokte){
    this.nigrajxo = new Kiwi.GameObjects.StaticImage(this, this.textures['nigrajxo'], 0,0)
    this.nigrajxo.scaleX = sw/128
    this.nigrajxo.scaleY = sh/120
    this.nigrajxo.x = sw/2-64
    this.nigrajxo.y = sh/2-64
  }
  if(fulma){
    this.fulmo = new Kiwi.GameObjects.StaticImage(this, this.textures['fulmo'], 0,0)
    this.fulmo.scaleX = sw/128
    this.fulmo.scaleY = sh/120
    this.fulmo.x = sw/2-64
    this.fulmo.y = sh/2-64
    this.fulmo.alpha = 0
  }
  if(flamebla){
    this.flamo_d = new Kiwi.GameObjects.StaticImage(this, this.textures['flamo'], lr,6*sh/3)
    this.flamo_d.scaleToHeight(sf)
    this.flamo_md = new Kiwi.GameObjects.StaticImage(this, this.textures['flamo'], ll,3*sh/3)
    this.flamo_md.scaleToHeight(sf)
    this.game.tweens.create(this.flamo_d).to({y: nivelo_longa*-sh/3}, nivelo_longa*1000, Kiwi.Animations.Tweens.Easing.Linear.None, true)
    this.game.tweens.create(this.flamo_md).to({y: (nivelo_longa+3)*-sh/3}, nivelo_longa*1000, Kiwi.Animations.Tweens.Easing.Linear.None, true)
  }
  switch (jxeleo){
    case "flava":
    this.k = new Kiwi.GameObjects.Sprite(this, this.textures['flava'], lr-32, sh/3+32);
    break;
    case "verda":
    this.k = new Kiwi.GameObjects.Sprite(this, this.textures['verda'], lr-32, sh/3+32);
    break;
    case "blua":
    this.k = new Kiwi.GameObjects.Sprite(this, this.textures['blua'], lr-32, sh/3+32);
    break;
    case "viola":
    this.k = new Kiwi.GameObjects.Sprite(this, this.textures['viola'], lr-32, sh/3+32);
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
  if(nuba){
    this.nuboj_altaj = new Kiwi.Group(this)
    this.nuboj_malaltaj = new Kiwi.Group(this)
  }

  var testudo = new Kiwi.GameObjects.Sprite(this, this.textures['testudo'], lr-64, sh/3)
  testudo.addTag(ad.length)
  testudo.scaleToHeight(sf)
  testudo.alpha = 0
  this.testudoj.addChild(testudo)
  amd.push(0)
  ad.push(1)
  for(i = 0; i < nivelo_longa; i++) {
    if(hazarde(2)){
      if(hazarde(krokodilebla)){
        var krokodilo = new Kiwi.GameObjects.Sprite(this, this.textures['krokodilo_md'], ll-64, -sh/3*i)
        krokodilo.scaleToHeight(sf)
        this.krokodiloj_md.addChild(krokodilo)
        if(hazarde(rugxebla)){
          testudo = new Kiwi.GameObjects.Sprite(this, this.textures['testudo_rugxa'], lr-64, -sh/3*i)
          testudo.addTag("rugxa")
        }
        else{
          testudo = new Kiwi.GameObjects.Sprite(this, this.textures['testudo'], lr-64, -sh/3*i)
        }
        testudo.addTag(ad.length)
        testudo.scaleToHeight(sf)
        this.testudoj.addChild(testudo)
        amd.push(3)
        ad.push(1)
      }
      else if(hazarde(sxtonebla)){
        if(hazarde(rugxebla)){
          testudo = new Kiwi.GameObjects.Sprite(this, this.textures['testudo_rugxa'], lr-64, -sh/3*i)
          testudo.addTag("rugxa")
        }
        else if(hazarde(glaciebla)){
          testudo = new Kiwi.GameObjects.Sprite(this, this.textures['glacio'], lr-64, -sh/3*i)
          testudo.addTag("glacio")
        }
        else if(hazarde(jxeleebla)){
          testudo = new Kiwi.GameObjects.Sprite(this, this.textures['jxeleo_'+jxeleo], lr-64, -sh/3*i)
          testudo.addTag("jxeleo")
        }
        else{
          testudo = new Kiwi.GameObjects.Sprite(this, this.textures['testudo'], lr-64, -sh/3*i)
        }
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
        if(hazarde(rugxebla)){
          testudo = new Kiwi.GameObjects.Sprite(this, this.textures['testudo_rugxa'], ll-64, -sh/3*i)
          testudo.addTag("rugxa")
        }
        else{
          testudo = new Kiwi.GameObjects.Sprite(this, this.textures['testudo'], ll-64, -sh/3*i)
        }
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
        if(hazarde(rugxebla)){
          testudo = new Kiwi.GameObjects.Sprite(this, this.textures['testudo_rugxa'], ll-64, -sh/3*i)
          testudo.addTag("rugxa")
        }
        else{
          testudo = new Kiwi.GameObjects.Sprite(this, this.textures['testudo'], ll-64, -sh/3*i)
        }
        testudo.addTag(ad.length)
        testudo.scaleToHeight(sf)
        this.testudoj.addChild(testudo)
        amd.push(1)
        ad.push(3)
        }
      else if(hazarde(sxtonebla)){
        if(hazarde(rugxebla)){
          testudo = new Kiwi.GameObjects.Sprite(this, this.textures['testudo_rugxa'], ll-64, -sh/3*i)
          testudo.addTag("rugxa")
        }
        else if(hazarde(glaciebla)){
          testudo = new Kiwi.GameObjects.Sprite(this, this.textures['glacio'], ll-64, -sh/3*i)
          testudo.addTag("glacio")
        }
        else if(hazarde(jxeleebla)){
          testudo = new Kiwi.GameObjects.Sprite(this, this.textures['jxeleo_'+jxeleo], ll-64, -sh/3*i)
          testudo.addTag("jxeleo")
        }
        else{
          testudo = new Kiwi.GameObjects.Sprite(this, this.textures['testudo'], ll-64, -sh/3*i)
        }
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
        if(hazarde(rugxebla)){
          testudo = new Kiwi.GameObjects.Sprite(this, this.textures['testudo_rugxa'], lr-64, -sh/3*i)
          testudo.addTag("rugxa")
        }
        else{
          testudo = new Kiwi.GameObjects.Sprite(this, this.textures['testudo'], lr-64, -sh/3*i)
        }
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
  if(nuba){
    for(i=0; i<nivelo_longa*3; i+=nubo_denco){
      var nubo = new Kiwi.GameObjects.Sprite(this, this.textures['nubo'+(Math.floor(Math.random()*4)+1).toString()], Math.random()*sw*2, -(sh/9)*i)
      nubo.scaleToHeight(sf*1.7);
      this.nuboj_altaj.addChild(nubo);
    }
    for(i=0; i<nivelo_longa*3; i+=nubo_denco){
      var nubo = new Kiwi.GameObjects.Sprite(this, this.textures['nubo'+(Math.floor(Math.random()*2)+1).toString()], Math.random()*sw*2, -(sh/9)*i)
      nubo.scaleToHeight(sf*1.1);
      this.nuboj_malaltaj.addChild(nubo);
    }
    this.nuboj_malaltaj.forEach(this, this.nubo_malalta_movi)
    this.nuboj_altaj.forEach(this, this.nubo_alta_movi)
  }

  console.log(ad)
  console.log(amd)
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
  if(flamebla){
    this.addChild(this.flamo_d);
    this.addChild(this.flamo_md);
  }
  if(nuba){
    this.addChild(this.nuboj_malaltaj);
    this.addChild(this.nuboj_altaj);
  }
  if(nokte){
    this.addChild(this.nigrajxo);
  }
  if(fulma){
    this.addChild(this.fulmo);
  }
  this.krokodiloj_d.callAll('animation', 'add', ['mangxi', [0,1,2,3], 0.1, true, true])
  this.krokodiloj_md.callAll('animation', 'add', ['mangxi', [0,1,2,3], 0.1, true, true])
  this.k.animation.add('tremi', [0,1,2,3], 0.16, true, true)
  if(!(window.location.toString().match(/android/))){
    this.la_d = new Kiwi.Sound.Audio(this.game, 'la_d', 0.705, false);
    this.la_md = new Kiwi.Sound.Audio(this.game, 'la_md', 0.575, false);
    this.tondro1 = new Kiwi.Sound.Audio(this.game, 'tondro1', 1.592, false);
    this.tondro2 = new Kiwi.Sound.Audio(this.game, 'tondro2', 3.134, false);
  }
  game.frameRate = 60
  tempo = 0
  this.tempilo = this.game.time.clock.createTimer('tempilo', 0.01, nivelo_longa*tempdeturo*10000, true);
  this.tempilo.createTimerEvent( Kiwi.Time.TimerEvent.TIMER_COUNT, this.jeTempiloKalkulo1s, this );
  pasxo = 0
  d = true
  la_d = this.la_d
  la_md = this.la_md
  document.getElementById("dekstru").addEventListener("click", function(){try{
    Android.playAudio2("sonoj/la_d.mp3");
  }
  catch(e){
    if(!(window.location.toString().match(/android/))){
      la_d.play('default', true);
    }
  }; kk.x = lr-32; kk.y -= sh/3; d = true; pasxo++;})
  document.getElementById("maldekstru").addEventListener("click", function(){try{
    Android.playAudio2("sonoj/la_md.mp3");
  }
  catch(e){
    if(!(window.location.toString().match(/android/))){
      la_md.play('default', true);
    }
  }; kk.x = ll-32; kk.y -= sh/3; d = false; pasxo++;})
};

myState.update = function(){
  Kiwi.State.prototype.update.call(this);
  var playerOffsetY = this.k.height * 0.5;
  this.game.cameras.defaultCamera.transform.y = -1 * this.k.y + this.game.stage.height * 0.6 - playerOffsetY;
  if(pasxo >= nivelo_longa){this.menuo("gajnanto")}
  else if(sano <= 0){this.menuo("mortita")}
  else if(spiro <= 0){this.menuo("subakvita")}
  if(pasxo/nivelo_longa <= 0.5){
    this.profunda_akvo.alpha = pasxo/nivelo_longa*2
  }
  else if(0.5 < pasxo/nivelo_longa <= 1){
    this.profunda_akvo.alpha = (1-(pasxo/nivelo_longa))*2
  }
  if(nokte){
    this.nigrajxo.y = this.k.y-80;
  }
  if(fulma){
    this.fulmo.y = this.k.y-80;
  }
  this.profunda_akvo.y = this.k.y-80;
  /*
  if (tempo % 100 == 0){
    console.log(game.frameRate, game.time.clock.delta)
  }
   */
};
myState.jeTempiloKalkulo1s = function(){
  if(tempo < (nivelo_longa+1)*tempdeturo*10000){
    tempo+=1
    if(!(((ad[pasxo] === 1 || ad[pasxo] === 2) && d) || ((amd[pasxo] === 1 || amd[pasxo] === 2) && d == false)) && tempo > this.lastaTempo && pasxo != 0 && pasxo != nivelo_longa){
      if((ad[pasxo] === 3 && d) || (amd[pasxo] === 3 && d == false)){
        spiro-=0.1
      }
      else{
        spiro-=0.6
      }
      document.getElementById("spiro").style.width = spiro + "vw"
    }
    if(((ad[pasxo] === 3 && d) || (amd[pasxo] === 3 && d == false)) && tempo > this.lastaTempo && pasxo != 0 && pasxo != nivelo_longa){
      sano-=0.9
      document.getElementById("sano").style.width = sano + "vw"
    }
    this.lastaTempo = tempo
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
        if(this.tt.hasTag("rugxa")){
          this.tt.alpha -= 1/12
        }
        else{
          if(this.tt.hasTag("glacio")){
            if(spiro < 100){
              spiro+=2
              document.getElementById("spiro").style.width = spiro + "vw"
            }
          }
          else if(this.tt.hasTag("jxeleo")){
            if(sano < 100){
              sano+=2
              document.getElementById("sano").style.width = sano + "vw"
            }
          }
        }
        this.tt.alpha -= 1/24
      }
    }
    if(flamebla){
      if(Math.abs(this.flamo_d.y - nivelo_longa*-sh/3) <= 32){
        this.flamo_d.y = 6*sh/3
        this.game.tweens.create(this.flamo_d).to({y: nivelo_longa*-sh/3}, nivelo_longa*1000, Kiwi.Animations.Tweens.Easing.Linear.None, true)
      }
      if(Math.abs(this.flamo_md.y - (nivelo_longa+3)*-sh/3) <= 32){
        this.flamo_md.y = 3*sh/3
        this.game.tweens.create(this.flamo_md).to({y: (nivelo_longa+3)*-sh/3}, nivelo_longa*1000, Kiwi.Animations.Tweens.Easing.Linear.None, true)
      }
      if(Math.abs(this.flamo_d.y - this.k.y) <= 32 && d){
        console.log("trafita_d!")
        spiro-=3
        document.getElementById("spiro").style.width = spiro + "vw"
      }
      if(Math.abs(this.flamo_md.y - this.k.y) <= 32 && d==false){
        console.log("trafita_md!")
        spiro-=3
        document.getElementById("spiro").style.width = spiro + "vw"
      }
    }
    if (nuba){
      if (tempo % 1600 == 0){
        /*n = this.nuboj_malaltaj.numChildren ()
          this.nuboj_malaltaj.swapChildrenAt(Math.floor(Math.random()*n), Math.floor(Math.random()*n))*/
        this.nuboj_malaltaj.forEach(this, this.nubo_malalta_movi)
      }
      if (tempo % 1000 == 0){
        this.nuboj_altaj.forEach(this, this.nubo_alta_movi)
      }
    }
    if (fulma){
      if (tempo % intervalo == 0 && this.fulmo.alpha == 0){
        this.fulmo.alpha = 1
        this.tempo_fulmo = tempo
      }
      else if (tempo == this.tempo_fulmo + 10 && this.fulmo.alpha == 1){
        this.fulmo.alpha = 0
        intervalo = Math.floor(Math.random()*400)+800
      }
      else if (tempo == this.tempo_fulmo + 100){
        intervalo = Math.floor(Math.random()*400)+800
        if(hazarde(2)){
          try{
            Android.playAudio("sonoj/tondro1.mp3");
          }
          catch(e){
            if(!(window.location.toString().match(/android/))){
              this.tondro1.play('default', true);
            }
          }
        }
        else{
          try{
            Android.playAudio("sonoj/tondro2.mp3");
          }
          catch(e){
            if(!(window.location.toString().match(/android/))){
              this.tondro2.play('default', true);
            }
          }
        }
      }
    }
  }
  else{
    this.menuo("fintempe")
  }
}
myState.menuo = function(stato){
  //window.location = "file:///android_asset/menuo.html?stato="+stato+"&jxeleo="+jxeleo+"&nivelo="+nivelo
  alert(stato)
  window.location = "menuo.html?stato="+stato+"&jxeleo="+jxeleo+"&nivelo="+nivelo
}
myState.nubo_alta_movi = function(nubo){
  nubo.x = Math.random()*sw*2+sw
  nubo.t = this.game.tweens.create(nubo).to({x: nubo.x-sw*4}, Math.random()*2000+8000, Kiwi.Animations.Tweens.Easing.Linear.None, true)
}
myState.nubo_malalta_movi = function(nubo){
  nubo.x = Math.random()*sw*2+sw
  nubo.t = this.game.tweens.create(nubo).to({x: nubo.x-sw*4}, Math.random()*3000+13000, Kiwi.Animations.Tweens.Easing.Linear.None, true)
}