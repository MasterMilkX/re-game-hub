// flashes a button after a certain amount of time to get the user's attention
let bct = 0;
function flashButton(btn_el,flash_countdown=120,flash_time=1,flash_color='#F47700'){
    setTimeout(function(){
        bct = 0;
        setInterval(function(){
            let cur_bg = btn_el.style.backgroundColor;
            btn_el.style.backgroundColor = (bct % 2 == 0) ? 'rgba(255, 255, 255, 0)' : flash_color;
            bct++;
        },flash_time*1000);
    },flash_countdown*1000);
}

// goes to the link specified (either in a new window or not)
function gotoLink(link,new_window=false){
    window.open(link,new_window?'_blank':'_self');
}

// set up the arrows to change the game 
function setup(){
    document.getElementById("game-genre").innerHTML = GAME_GENRE.toUpperCase();
    document.getElementById("game-letter").innerHTML = GAME_LETTER;
    
    // Game A
    if(GAME_LETTER == "A"){
        document.getElementById("game-left").innerHTML = "";
        document.getElementById("game-right").onclick = function(){
            gotoLink("B.html");
        }
    }
    // Game B
    else if(GAME_LETTER == "B"){
        document.getElementById("game-left").onclick = function(){
            gotoLink("A.html");
        }
        document.getElementById("game-right").onclick = function(){
            gotoLink("C.html");
        }
    }
    // Game C
    else if(GAME_LETTER == "C"){
        document.getElementById("game-right").innerHTML = "";
        document.getElementById("game-left").onclick = function(){
            gotoLink("B.html");
        }
    }
}