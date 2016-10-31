var sw = window.screen.width, sh = window.screen.height
var ll = sw / 4, lr = sw * 3 / 4
var myState = new Kiwi.State('myState');
var game = new Kiwi.Game("ludo", 'Trans', myState, { renderer: Kiwi.RENDERER_CANVAS , width:sw , height:0.9*sh});
var kk
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
  this.addImage('sxtono1', 'bildoj/sxtono1.svg');
  this.addImage('bg', 'bildoj/bg.svg');
};

myState.create = function(){
  Kiwi.State.prototype.create.call(this);
  this.game.stage.resize(sw, sh*0.9);
  console.log(this.game.stage.height)
  console.log(this.game.stage.width)

  this.bg = new Kiwi.GameObjects.StaticImage(this, this.textures['bg'], 0, 0);
  this.k = new Kiwi.GameObjects.Sprite(this, this.textures['k1'], ll, sh/3+32);
  //this.k.centerAnchorPoint()
  this.k.anchorPointX = 32
  this.k.anchorPointY = 32
  kk = this.k

  this.sxtonoj = new Kiwi.Group(this)
  for(i = 0; i < 16; i++) {
  this.sxtonoj.addChild(new Kiwi.GameObjects.Sprite(this, this.textures['sxtono1'], lr-32, -sh/3*i))
    if(hazarde(4)){
      this.sxtonoj.addChild(new Kiwi.GameObjects.Sprite(this, this.textures['sxtono1'], ll-32, -sh/3*i))
      }
  }

  this.addChild(this.bg);
  this.addChild(this.sxtonoj)
  this.addChild(this.k);
  this.leftKey = this.game.input.keyboard.addKey( Kiwi.Input.Keycodes.A );
  //this.game.input.onDown.add(this.onDown, this)
  //this.game.input.onUp.add(this.onUp, this)
  document.getElementById("dekstru").addEventListener("click", function(){kk.x = lr; kk.y -= sh/3})
  document.getElementById("maldekstru").addEventListener("click", function(){kk.x = ll; kk.y -= sh/3})
};

myState.update = function(){
  Kiwi.State.prototype.update.call(this);
  var playerOffsetX = this.k.width * 0.5;
  var playerOffsetY = this.k.height * 0.5;
  this.game.cameras.defaultCamera.transform.x = -1 * this.k.x + this.game.stage.width * 0.5 - playerOffsetX;
  this.game.cameras.defaultCamera.transform.y = -1 * this.k.y + this.game.stage.height * 0.5 - playerOffsetY;
   
  //this.onDown()
  //this.onUp()
  

   
};
myState.dekstren = function(){
  this.k.x = lr
}
myState.onDown = function(){
  console.log("-->"+this.k.x)
  //this.malsupre.to( { y: (this.k.y-sh/4) }, 500, Kiwi.Animations.Tweens.Easing.Sinusoidal.Out, true );
  
  this.game.renderer.render(this)
  this.game.cameras.defaultCamera.update()
}