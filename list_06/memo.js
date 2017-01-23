 var pairs = 10;
 var left = pairs;
 var moves = 0;

$(document).ready(function () {
  
    //"use strict";
    
   
   $('#score2').html(left + " pairs left");
   
    var tiles = new Array( pairs * 2 );
    gameSetup(tiles);
    
    
    var isTileClicked = false;
    var currentTileId;
    var currentVal;
    
    
    
    // logika gry
    $(".tile").click(function() {   
        moves++;
        
         $('#score').html("Moves: " +moves);
        
        var clickedId  = $(this).attr("id");
        var clickedVal = $(this).attr("tileval");
        
        $(this).children().animate({opacity: 1.0},300, function(){});
        
        console.log("clicked: " + clickedId + "\t ( "+clickedVal+" )");
        
        if( isTileClicked == false) {
            isTileClicked = true;
            currentTileId = clickedId;
            currentVal    = clickedVal;
        }
        else {
            isTileClicked = false;
            
            if(currentVal == clickedVal && currentTileId != clickedId) {
                console.log("same values clicked");
                //$('#'+clickedId).css('visibility', 'hidden');
               // $('#'+currentTileId).css('visibility', 'hidden');
                $('#'+clickedId).delay(200).fadeTo(200,0);
                $('#'+currentTileId).fadeTo( 200, 0 );
               
                left--;
                $('#score2').html(left + " pairs left");
                
            }
            else {
                 $('#'+clickedId).children().delay(600).animate({opacity: 0},300, function(){});
                 $('#'+currentTileId).children().delay(600).animate({opacity: 0},150, function(){});
                console.log("tiles dont match");
            }
        }
        
        if(left == 0 ) {
            alert("The end!\nMoves: "+moves);
            location.reload();
            /*moves = 0;
            left = pairs;
         
            
            // TO DO RESTERAT
       //     var icons = chooseIcons 
            $(".tile").each( function() {
               
                $(this).remove();
            } );
            gameSetup(tiles);*/
        }
        
    });
    
});


//////////////////////////////////////////
////////    Array modifications   ////////
//////////////////////////////////////////



function chooseIcons() {
    var icons = new Array(pairs);
    for(var i=0; i<icons.length; i++)
        icons[i] = iconArray[rand()%iconArray.length];
    console.log(icons);
    return icons;
}


function gameSetup(tiles) {
 
    for(var i=0; i<pairs*2; i+=2) {
        console.log(i);
        tiles[i]=tiles[i+1] = i/2;
    }
    
    dumbPermutation(tiles);
    
    var icons = chooseIcons();
    
    for ( var i=0; i<pairs*2; i++) {
        var icon = "<i class='"+icons[tiles[i]]+"'></i>";
        
        $("#game").append("<div class='tile' id='tile_"+i+"' tileval='"+tiles[i]+"'>"+icon+"</div>");
    }
    
   // $('.fa').css("opacity", 1);
}






//////////////////////////////////////////
////////    Array modifications   ////////
//////////////////////////////////////////

function swapArrElems(arr, i, j) {
    var s = arr[i];
    arr[i] = arr[j];
    arr[j] = s;
}

function rand() {
    return Math.floor( Math.random()*100000 );
}

function dumbPermutation( arr ) {   
    for ( var i=0; i<20; i++) {
        var swap_i = rand() % arr.length;
        var swap_j = rand() % arr.length;
        swapArrElems(arr, swap_i, swap_j);
    }
    return arr;
}