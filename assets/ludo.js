var sw = window.screen.width, sh = window.screen.height * 0.8
var ll = sw / 4, lr = sw * 3 / 4
var myState = new Kiwi.State('myState');
var game = new Kiwi.Game("ludo", 'Trans', myState, { renderer: Kiwi.RENDERER_CANVAS , width:sw , height:sh});
var kk, pasxo, d, sano=100
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
myState.preload = function(){
  Kiwi.State.prototype.preload.call(this);
  this.addImage('k1', 'bildoj/k1.svg');
  this.addImage('sxtono_d', 'bildoj/sxtono_d.svg');
  this.addImage('sxtono_md', 'bildoj/sxtono_md.svg');
  this.addImage('akvo1', 'bildoj/akvo.png');
};

myState.create = function(){
  Kiwi.State.prototype.create.call(this);
  this.game.stage.resize(sw, sh);
  console.log(this.game.stage.height)
  console.log(this.game.stage.width)
  this.game.stage.color = '#00b4c4'
  this.akvoj = new Kiwi.Group(this)
  for(var i = 0; i < sw / 45; i++){
    for (var j = -30; j < sh / 39 * 50; j++){
      this.akvo = new Kiwi.GameObjects.StaticImage(this, this.textures['akvo1'], i*45, -j*39)
      this.akvo.anchorPointX = 0
      this.akvo.anchorPointY = 0
      //this.akvo.scaleToHeight(sh/10)
      this.akvoj.addChild(this.akvo)
    }
  }
  
  this.k = new Kiwi.GameObjects.Sprite(this, this.textures['k1'], lr-32, sh/3+32);
  //this.k.centerAnchorPoint()
  this.k.anchorPointX = 32
  this.k.anchorPointY = 32
  kk = this.k

  this.sxtonoj = new Kiwi.Group(this)
  this.amd = []
  this.ad = []

  this.sxtonoj.addChild(new Kiwi.GameObjects.Sprite(this, this.textures['sxtono_d'], lr-64, sh/3))
  this.amd.push(0)
  this.ad.push(1)
  for(i = 0; i < 16; i++) {
    if(hazarde(2)){
      this.sxtonoj.addChild(new Kiwi.GameObjects.Sprite(this, this.textures['sxtono_md'], ll-64, -sh/3*i))
      this.amd.push(1)
      this.ad.push(0)
      }
    else{
      this.sxtonoj.addChild(new Kiwi.GameObjects.Sprite(this, this.textures['sxtono_d'], lr-64, -sh/3*i))
      this.amd.push(0)
      this.ad.push(1)
    }
  }
  console.log(this.amd, this.ad)
  this.addChild(this.akvoj);
  this.addChild(this.sxtonoj)
  this.addChild(this.k);
  this.leftKey = this.game.input.keyboard.addKey( Kiwi.Input.Keycodes.A );
  this.tempo = 0
  this.tempilo = this.game.time.clock.createTimer('tempilo', 0.1, 600, true);
  this.tempilo.createTimerEvent( Kiwi.Time.TimerEvent.TIMER_COUNT, this.jeTempiloKalkulo1s, this );
  this.tempilo.createTimerEvent( Kiwi.Time.TimerEvent.TIMER_STOP, this.jeTempiloHalto, this );
  
  pasxo = 0
  d = true
  document.getElementById("dekstru").addEventListener("click", function(){kk.x = lr-32; kk.y -= sh/3; d = true; pasxo++;})
  document.getElementById("maldekstru").addEventListener("click", function(){kk.x = ll-32; kk.y -= sh/3; d = false; pasxo++;})
};

myState.update = function(){
  Kiwi.State.prototype.update.call(this);
  var playerOffsetX = this.k.width * 0.5;
  var playerOffsetY = this.k.height * 0.5;
  //this.game.cameras.defaultCamera.transform.x = -1 * this.k.x + this.game.stage.width * 0.5 - playerOffsetX;
  this.game.cameras.defaultCamera.transform.y = -1 * this.k.y + this.game.stage.height * 0.6 - playerOffsetY;
  if(pasxo >= 16){this.menuo("gajnanto")}
  if(!((this.ad[pasxo] === 1 && d) || (this.amd[pasxo] === 1 && d == false)) && this.tempo > this.lastaTempo ){
    if(sano <= 0){this.menuo("malgajnanto")}
    sano-=10
    document.getElementById("sano").style.width = sano + "vw"
  }
  this.lastaTempo = this.tempo
};
myState.dekstren = function(){
  this.k.x = lr
}
myState.jeTempiloKalkulo1s = function(){
  if(this.tempo < 17*15){
    this.tempo+=1
    if (this.tempo % 5 == 0){
      this.sxtonoj.getChildAt(0).alpha -= (1/3)
    }
    if (this.tempo % 15 == 0){
      this.amd[this.tempo / 15 - 1] = 0
      this.ad[this.tempo / 15 - 1] = 0
      this.sxtonoj.removeChildAt(0)
    }
  }
}
myState.menuo = function(stato){
  window.location = "file:///android_asset/menuo.html?stato="+stato
}
