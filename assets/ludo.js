var sw = window.screen.width, sh = window.screen.height * 0.75
var ll = sw / 4, lr = sw * 3 / 4
var myState = new Kiwi.State('myState');
var game = new Kiwi.Game("ludo", 'Trans', myState, { renderer: Kiwi.RENDERER_CANVAS , width:sw , height:sh});
var kk, pasxo, d, spiro=100, sano=100, nivelo_longa, tempdeturo, krokodilebla, sxtonebla
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
var nivelo = +params.nivelo
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

myState.preload = function(){
  Kiwi.State.prototype.preload.call(this);
  this.addImage('k1', 'bildoj/k1.svg');
  this.addImage('sxtono_d', 'bildoj/sxtono_d.svg');
  this.addImage('sxtono_md', 'bildoj/sxtono_md.svg');
  this.addImage('plagxo', 'bildoj/plagxo.svg');
  this.addImage('krokodilo_d', 'bildoj/krokodilo_d.svg');
  this.addImage('krokodilo_md', 'bildoj/krokodilo_md.svg');
  this.addImage('testudo', 'bildoj/testudo.svg');
};

myState.create = function(){
  Kiwi.State.prototype.create.call(this);
  this.game.stage.resize(sw, sh);
  this.game.stage.color = '#00bcd4'

  this.k = new Kiwi.GameObjects.Sprite(this, this.textures['k1'], lr-32, sh/3+32);
  //this.k.centerAnchorPoint()
  this.k.anchorPointX = 32
  this.k.anchorPointY = 32
  kk = this.k

  this.testudoj = new Kiwi.Group(this)
  this.krokodiloj = new Kiwi.Group(this)
  this.sxtonoj = new Kiwi.Group(this)
  this.amd = []
  this.ad = []
  this.t = []

  this.testudo = new Kiwi.GameObjects.Sprite(this, this.textures['testudo'], lr-64, sh/3)
  this.testudo.addTag(this.ad.length)
  this.testudo.addTag("d")
  this.testudoj.addChild(this.testudo)
  this.t.push(this.testudo)
  this.amd.push(0)
  this.ad.push(1)
  for(i = 0; i < nivelo_longa; i++) {
    if(hazarde(2)){
      if(hazarde(krokodilebla)){
        this.krokodiloj.addChild(new Kiwi.GameObjects.Sprite(this, this.textures['krokodilo_md'], ll-64, -sh/3*i))
        this.testudo = new Kiwi.GameObjects.Sprite(this, this.textures['testudo'], lr-64, -sh/3*i)
        this.testudo.addTag(this.ad.length)
        this.testudo.addTag("d")
        this.testudoj.addChild(this.testudo)
        this.t.push(this.testudo)
        this.amd.push(3)
        this.ad.push(1)
      }
      else if(hazarde(sxtonebla)){
        this.testudo = new Kiwi.GameObjects.Sprite(this, this.textures['testudo'], lr-64, -sh/3*i)
        this.testudo.addTag(this.ad.length)
        this.testudo.addTag("d")
        this.testudoj.addChild(this.testudo)
        this.t.push(this.testudo)
        this.sxtono = new Kiwi.GameObjects.Sprite(this, this.textures['sxtono_md'], ll-64, -sh/3*i)
        this.sxtonoj.addChild(this.sxtono)
        this.amd.push(2)
        this.ad.push(1)
      }
      else{
        this.testudo = new Kiwi.GameObjects.Sprite(this, this.textures['testudo'], ll-64, -sh/3*i)
        this.testudo.addTag(this.ad.length)
        this.testudo.addTag("md")
        this.testudoj.addChild(this.testudo)
        this.t.push(this.testudo)
        this.amd.push(1)
        this.ad.push(0)
      }
    }
    else{
      if(hazarde(krokodilebla)){
        this.krokodiloj.addChild(new Kiwi.GameObjects.Sprite(this, this.textures['krokodilo_d'], lr-64, -sh/3*i))
        this.testudo = new Kiwi.GameObjects.Sprite(this, this.textures['testudo'], ll-64, -sh/3*i)
        this.testudo.addTag(this.ad.length)
        this.testudo.addTag("md")
        this.testudoj.addChild(this.testudo)
        this.t.push(this.testudo)
        this.amd.push(1)
        this.ad.push(3)
        }
      else if(hazarde(sxtonebla)){
        this.testudo = new Kiwi.GameObjects.Sprite(this, this.textures['testudo'], ll-64, -sh/3*i)
        this.testudo.addTag(this.ad.length)
        this.testudo.addTag("d")
        this.testudoj.addChild(this.testudo)
        this.t.push(this.testudo)
        this.sxtono = new Kiwi.GameObjects.Sprite(this, this.textures['sxtono_d'], lr-64, -sh/3*i)
        this.sxtonoj.addChild(this.sxtono)
        this.amd.push(1)
        this.ad.push(2)
      }
      else{
        this.testudo = new Kiwi.GameObjects.Sprite(this, this.textures['testudo'], lr-64, -sh/3*i)
        this.testudo.addTag(this.ad.length)
        this.testudo.addTag("d")
        this.testudoj.addChild(this.testudo)
        this.t.push(this.testudo)
        this.amd.push(0)
        this.ad.push(1)
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
  for(i = 0; i < sw / 256 + 1; i++){
    for(j = 0; j < 2; j++){
      this.plagxo = new Kiwi.GameObjects.StaticImage(this, this.textures['plagxo'], i*256, -sh/3*nivelo_longa - j*255+sh/12)
      this.plagxoj.addChild(this.plagxo)
    }
  }
  console.log(this.t)
  console.log(this.ad, this.amd)
  this.addChild(this.testudoj)
  this.addChild(this.krokodiloj)
  this.addChild(this.sxtonoj)
  this.addChild(this.plagxoj);
  this.addChild(this.k);
  
  this.tempo = 0
  this.tempilo = this.game.time.clock.createTimer('tempilo', 0.1, nivelo_longa*tempdeturo*100000, true);
  this.tempilo.createTimerEvent( Kiwi.Time.TimerEvent.TIMER_COUNT, this.jeTempiloKalkulo1s, this );
  this.tempilo.createTimerEvent( Kiwi.Time.TimerEvent.TIMER_STOP, this.jeTempiloHalto, this );
  
  pasxo = 0
  d = true
  document.getElementById("dekstru").addEventListener("click", function(){kk.x = lr-32; kk.y -= sh/3; d = true; pasxo++;})
  document.getElementById("maldekstru").addEventListener("click", function(){kk.x = ll-32; kk.y -= sh/3; d = false; pasxo++;})
};

myState.update = function(){
  Kiwi.State.prototype.update.call(this);
  var playerOffsetY = this.k.height * 0.5;
  this.game.cameras.defaultCamera.transform.y = -1 * this.k.y + this.game.stage.height * 0.6 - playerOffsetY;
  if(pasxo >= nivelo_longa){this.menuo("gajnanto")}
  else if(sano <= 0){this.menuo("mortita")}
  else if(spiro <= 0){this.menuo("subakvita")}
  if(!(((this.ad[pasxo] === 1 || this.ad[pasxo] === 2) && d) || ((this.amd[pasxo] === 1 || this.amd[pasxo] === 2) && d == false)) && this.tempo > this.lastaTempo && pasxo != 0 && pasxo != nivelo_longa){
    if((this.ad[pasxo] === 3 && d) || (this.amd[pasxo] === 3 && d == false)){
      spiro-=5
    }
    else{
      spiro-=10
    }
    document.getElementById("spiro").style.width = spiro + "vw"
  }
  if(((this.ad[pasxo] === 3 && d) || (this.amd[pasxo] === 3 && d == false)) && this.tempo > this.lastaTempo && pasxo != 0 && pasxo != nivelo_longa){
    sano-=15
    document.getElementById("sano").style.width = sano + "vw"
  }
  this.lastaTempo = this.tempo
};
myState.dekstren = function(){
  this.k.x = lr
}
myState.jeTempiloKalkulo1s = function(){
  if(this.tempo < (nivelo_longa+1)*tempdeturo*100000){
    this.tempo+=1
    this.tt = this.testudoj.getFirstChildByTag(pasxo)
    if (this.tt !== null){
      if(this.tt.alpha <= 0){
        if(this.amd[pasxo] === 1){
          this.amd[pasxo] = 0
          this.testudoj.removeChild(this.tt)
        }
        if(this.ad[pasxo] === 1){
          this.ad[pasxo] = 0
          this.testudoj.removeChild(this.tt)
        }
      }
      else if ((this.tempo % tempdeturo == 0) && ((this.ad[pasxo] === 1 && d) || (this.amd[pasxo] === 1 && d==false))){
        this.tt.alpha -= 1/3
      }
    }
  }
  else{
    this.menuo("fintempe")
  }
}
myState.menuo = function(stato){
  alert(stato)
  //window.location = "file:///android_asset/menuo.html?stato="+stato+"&nivelo="+nivelo
  window.location = "menuo.html?stato="+stato+"&nivelo="+nivelo
}
