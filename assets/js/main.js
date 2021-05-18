const rockImg = '<img src="./assets/img/rock.png" alt="Rock" id="rockImg" class="gameImg computerImg" data-value="rock">';
const paperImg = '<img src="./assets/img/paper.png" alt="Paper" id="paperImg" class="gameImg computerImg" data-value="paper">';
const scissorImg = '<img src="./assets/img/scissor.png" alt="Scissor" id="scissorImg" class="gameImg computerImg" data-value="scissor">';
const ImgTable = [rockImg, paperImg, scissorImg];

const winMessage = '<p class="result-msg">Victoire</p>';
const drawMessage = '<p class="result-msg">Egalite</p>';
const looseMessage = '<p class="result-msg">Defaite</p>';
const finalMessage = '<p class="result-msg">Fatality</p>';

const music = new Audio("assets/sounds/game-music.mp3");
const fatalitySound = new Audio("assets/sounds/end-sound.mp3");
music.volume = 0.1;
fatalitySound.volume = 0.5;

var playerScore = 0;
var computerScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

$('button:lt(3)').prop('disabled', true);
$('button:gt(3)').prop('disabled', true);

$('#startBtn').on('click', function() {

    music.play();

    $('button:lt(3)').prop('disabled', false);
    $('#startBtn').prop('disabled', true);

    $('button:eq(0)').on('click', function() {
        $('.playerImg').remove();
        $('.computerImg').remove();
        $('.result-msg').remove();

        $("#playerSide").append('<img src="./assets/img/rock.png" alt="Rock" id="rockImg" class="gameImg playerImg" data-value="rock">');
        $("#computerSide").append(ImgTable[getRandomInt(3)]);
    
        switch ($('.computerImg').data('value')) {
            case "rock":
                $('#result').append(drawMessage);
                break;
            
            case "paper":
                computerScore++;
                $('#result').append(looseMessage);
                break;
    
            case "scissor":
                playerScore++;
                $('#result').append(winMessage);
                break;
        
            default:
                console.log("Switch error");
                break;
        }

        $('.playerScore').remove();
        $('.computerScore').remove();
        $('#scoreContainer').prepend('<p class="playerScore score">Scoprion : <span id="playerScore">' + playerScore + '</span></p>');
        $('#scoreContainer').append('<p class="computerScore score">Sub-Zero : <span id="computerScore">' + computerScore + '</span></p>');

        if (playerScore == 3 || computerScore == 3) {
            
            $('button:eq(4)').prop('disabled', false);
            $('button:lt(4)').prop('disabled', true);

            setTimeout( function() {
                $('.playerImg').remove();
                $('.computerImg').remove();
                $('.result-msg').remove();

                music.pause();
                $('#result').append(finalMessage);
                fatalitySound.play();
                
                if (playerScore == 3) {
                    $('#scorpion').attr({src: "./assets/img/scorpion-win.gif"});
                    $('#subzero').attr({src: "./assets/img/subzero-loose.gif"});
                } else {
                    $('#scorpion').attr({src: "./assets/img/scorpion-loose.gif"});
                    $('#subzero').attr({src: "./assets/img/subzero-win.gif"});
                }
            }, 3000);
        }
    });
    
    $('button:eq(1)').on('click', function() {
        $('.playerImg').remove();
        $('.computerImg').remove();
        $('.result-msg').remove();

        $("#playerSide").append('<img src="./assets/img/paper.png" alt="Paper" id="paperImg" class="gameImg playerImg" data-value="paper">');
        $("#computerSide").append(ImgTable[getRandomInt(3)]);
    
        switch ($('.computerImg').data('value')) {
            case "rock":
                playerScore++;
                $('#result').append(winMessage);
                break;
            
            case "paper":
                $('#result').append(drawMessage);
                break;
    
            case "scissor":
                computerScore++;
                $('#result').append(looseMessage);
                break;
        
            default:
                console.log("Switch error");
                break;
        }

        $('.playerScore').remove();
        $('.computerScore').remove();
        $('#scoreContainer').prepend('<p class="playerScore score">Scoprion : <span id="playerScore">' + playerScore + '</span></p>');
        $('#scoreContainer').append('<p class="computerScore score">Sub-Zero : <span id="computerScore">' + computerScore + '</span></p>');

        if (playerScore == 3 || computerScore == 3) {
            
            $('button:eq(4)').prop('disabled', false);
            $('button:lt(4)').prop('disabled', true);

            setTimeout( function() {
                $('.playerImg').remove();
                $('.computerImg').remove();
                $('.result-msg').remove();

                music.pause();
                $('#result').append(finalMessage);
                fatalitySound.play();
                
                if (playerScore == 3) {
                    $('#scorpion').attr({src: "./assets/img/scorpion-win.gif"});
                    $('#subzero').attr({src: "./assets/img/subzero-loose.gif"});
                } else {
                    $('#scorpion').attr({src: "./assets/img/scorpion-loose.gif"});
                    $('#subzero').attr({src: "./assets/img/subzero-win.gif"});
                }
            }, 3000);
        }
    });
    
    $('button:eq(2)').on('click', function() {
        $('.playerImg').remove();
        $('.computerImg').remove();
        $('.result-msg').remove();

        $("#playerSide").append('<img src="./assets/img/scissor.png" alt="Scissor" id="scissorImg" class="gameImg playerImg" data-value="scissor">');
        $("#computerSide").append(ImgTable[getRandomInt(3)]);
    
        switch ($('.computerImg').data('value')) {
            case "rock":
                computerScore++;
                $('#result').append(looseMessage);
                break;
            
            case "paper":
                playerScore++;
                $('#result').append(winMessage);
                break;
    
            case "scissor":
                $('#result').append(drawMessage);
                break;
        
            default:
                console.log("Switch error");
                break;
        }

        $('.playerScore').remove();
        $('.computerScore').remove();
        $('#scoreContainer').prepend('<p class="playerScore score">Scoprion : <span id="playerScore">' + playerScore + '</span></p>');
        $('#scoreContainer').append('<p class="computerScore score">Sub-Zero : <span id="computerScore">' + computerScore + '</span></p>');

        if (playerScore == 3 || computerScore == 3) {
            
            $('button:eq(4)').prop('disabled', false);
            $('button:lt(4)').prop('disabled', true);

            setTimeout( function() {
                $('.playerImg').remove();
                $('.computerImg').remove();
                $('.result-msg').remove();

                music.pause();
                $('#result').append(finalMessage);
                fatalitySound.play();
                
                if (playerScore == 3) {
                    $('#scorpion').attr({src: "./assets/img/scorpion-win.gif"});
                    $('#subzero').attr({src: "./assets/img/subzero-loose.gif"});
                } else {
                    $('#scorpion').attr({src: "./assets/img/scorpion-loose.gif"});
                    $('#subzero').attr({src: "./assets/img/subzero-win.gif"});
                }
            }, 3000);
        }
    });
});

$("#restartBtn").on("click", function() {
    location.reload();
});