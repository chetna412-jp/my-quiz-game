class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
     // question = new Question()
      question.display();
    }
  }

  play(){

    
    question.hide();
    background("orange");
    fill("black");
	textSize(25);
	textFont("itallic");
   strokeWeight(20)
    text("RESULT OF THE QUIZ",375,50);
    text("******************************",320,75);
    Contestant.getPlayerInfo();


    if(allContestants !== undefined){
      var display_answers = 230;
      fill("red");
      textSize(20);
      text("NOTE : Contestant who answered correct are highlighted in the green color ",130,230);
      for(var plr in allContestants){
        var correctAns = "2";
        if (correctAns === allContestants[plr].answer)
        fill ("green");
        else{
          fill("red")
        }
       

        display_answers+=30;
        textSize(15);
        text(allContestants[plr].name +":" + allContestants[plr].answer,250,display_answers)

      }
    }
  }

}
