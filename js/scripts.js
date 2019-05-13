
    $("#click").click(function(){
        $("#row").slideToggle();
    });

    $("#ru").click(function(){
        $("#rules").slideToggle();
    });
var roll, hold1, hold2, display1, display2;
  hold1 = 0;
  hold2 = 0;
  display1 = 0;
  dispaly2 = 0;


    $("#roll1").click(function(){
     var randomNo = Math.floor(Math.random() * 6)+1;
        if(randomNo === 1){
        alert("You rolled a 1");
        hold1 = 0;
        display1 += hold1;
        $("#show").text(display1);
        $(".play").hide();
    }
         else {
             $(".rolled").text(randomNo);
             hold1 += randomNo;
             $(".no").text(hold1);
         }

    });
    
    $("#hold").click(function(){
        display1 += hold1;
        $("#show1").text(display1);
        $(".play").hide();
        hold1 = 0;
    });

    $("#roll2").click(function(){
        var randomNo = Math.floor(Math.random() * 6)+1;
           if(randomNo === 1){
           alert("You rolled a 1");
           hold2 = 0;
           display2 += hold2;
           $("#show").text(display2);
           $(".play").hide();
       }
            else {
                $(".rolled1").text(randomNo);
                hold2 += randomNo;
                $(".no1").text(hold2);
            }
   
       });
       
       $("#hold1").click(function(){
           display2 += hold2;
           $("#show2").text(display1);
           $(".play1").hide();
           hold2 = 0;
       });
   
       