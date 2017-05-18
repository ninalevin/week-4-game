
  $( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+12)
    console.log(Random)
    $('#number').text(Random);


  var GeneratedNumbers = []
  var total= 0; 
  var wins= 0;
  var losses = 0;
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);    



function fourRandomNumbers(){
  for (var i = 0; i < 4; i++) {
    var num = Math.floor(Math.random()*11+1);
    GeneratedNumbers.push(num);
  }
  console.log(GeneratedNumbers) 
}

fourRandomNumbers();



function reset(){
        Random=Math.floor(Math.random()*101+12);
        console.log(Random)
        $('#number').text(Random);
        GeneratedNumbers = [];
        fourRandomNumbers();
        total= 0;
        $('#Combined').text(total);
        } 


function yay(){
  alert("You're a winner!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
}

//adds the losses to the total
function loser(){
  alert ("Sorry, loser :(");
    losses++;
    $('#numberLosses').text(losses);
    reset();
}



//sets up click for jewels
    $('#one').on ('click', function(){
      total = total + GeneratedNumbers[0];
      console.log("New total= " + total);
      $('#Combined').text(total); 

            //sets win/lose conditions
          if (total == Random){
            yay();
          }
          else if ( total > Random){
            loser();
          }   
    })  

    $('#two').on ('click', function(){
      total = total + GeneratedNumbers[1];
      console.log("New total= " + total);
      $('#Combined').text(total); 

          if (total == Random){
            yay();
          }
          else if ( total > Random){
            loser();
          } 
    })  

    $('#three').on ('click', function(){
      total = total + GeneratedNumbers[2];
      console.log("New total= " + total);
      $('#Combined').text(total);

            if (total == Random){
            yay();
          }
          else if ( total > Random){
            loser();
          } 
    })  

    $('#four').on ('click', function(){
      total = total + GeneratedNumbers[3];
      console.log("New total= " + total);
      $('#Combined').text(total); 

        
            if (total == Random){
            yay();
          }
          else if ( total > Random){
            loser();
          }
    });   

}); 