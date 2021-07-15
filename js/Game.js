class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      'gameState': state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hidden()
    textSize(30)
    text("gamestart",120,100)
    Player.getPlayerInfo()
    if(allPlayers !==undefined){
      var pos=130;
      //for(var plr=0;plr<allPlayers.length;plr++)
        for(var plr in allPlayers)
        {
            if(plr==="player"+player.index)
            {
              fill("red");
            }
            else
            {
              fill("black");
            }

            pos=pos+20;
            textSize(15);
            text(allPlayers[plr].name+" : "+allPlayers[plr].distance,120,pos); 
        }
     }
     if(keyIsDown(UP_ARROW)&&player.index!==null)
     {
       player.distance+=50;
       player.update();
     }

  }
}
