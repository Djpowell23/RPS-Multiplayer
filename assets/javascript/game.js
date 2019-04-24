// Declare global variables
var playerOne = '';
var playerTwo = '';
var playerOneChoice = '';
var playerTwoChoice = '';
var playerOneWins = 0;
var playerTwoWins = 0;
var ties = 0;
// Initialize Firebase
var config = {
    apiKey: "AIzaSyChvreZyyt_znb1vR3TF1fFoT_IB3ncTQw",
    authDomain: "rps-multiplayer-b9067.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-b9067.firebaseio.com",
    projectId: "rps-multiplayer-b9067",
    storageBucket: "rps-multiplayer-b9067.appspot.com",
    messagingSenderId: "774435033887"
};
firebase.initializeApp(config);
// Link to data
var database = firebase.database();

// Function to start game once players have joined - generate buttons
// function gameStart() {
    // if (playerOne !== '' && playerTwo !== '') {
        // Create a button for 'Rock'
        var rockButton = $('<button>');
            // Adding class
            rockButton.addClass('btn-primary');
            // Add value to button
            rockButton.attr('name','Rock');
            // Add text to Rock Button
            rockButton.text('Rock'); 
        // Create a button for 'Paper'
        var paperButton = $('<button>');
            // Adding class
            paperButton.addClass('btn-primary');
            // Add value to button
            paperButton.attr('name','Paper');
            // Add text
            paperButton.text('Paper');
        // Create a button for 'Scissors'
        var scissorsButton = $('<button>');
            // Add class
            scissorsButton.addClass('btn-primary');
            // Add value to button
            scissorsButton.attr('name','Scissors');
            // Add Text
            scissorsButton.text('Scissors');

        // Append to HTML
        $('#buttons').append(rockButton);  
        $('#buttons').append(paperButton);        
        $('#buttons').append(scissorsButton);              
    // }

// Connect to Game

// Function for Game Logic
function checkRound() {
    if (playerOneChoice === 'Rock' && playerTwoChoice === 'Scissors' || 
    playerOneChoice === 'Paper' && playerTwoChoice === 'Rock' || 
    playerOneChoice === 'Scissors' && playerTwoChoice === 'Paper') {
        // Add a Win to Player One
        playerOneWins++;
        // Update HTML Win Counter
        $('#player-one-wins').html(playerOneWins);
    } else if (playerOneChoice === playerTwoChoice) {
        ties++;
        // Append Tie count to HTML
        $('#ties').html(ties);
    } else {
        // Add a win to Player Two
        playerTwoWins++;
        // Append Wins to HTML
        $('#player-two-wins').html(playerTwoWins);
    }
    // Reset Choice Fields in HTML
    $('#player-one-choice').empty();
    $('#player-two-choice').empty();
    // Clear variables
    playerOneChoice = '';
    playerTwoChoice = '';
    
}

// Player selecting a choice
$('body').on('click','.btn-primary', function() {
    // If player one has not yet chosen
    if (playerOneChoice === '') {
        $('#player-one-choice').text($(this).attr('name'));
        playerOneChoice = ($(this).attr('name'));
        // If player one has chosen and player two has not yet chosen
    } else if (playerOneChoice !== '' && playerTwoChoice === '') {
        $('#player-two-choice').text($(this).attr('name'));
        playerTwoChoice = $(this).attr('name');
        checkRound();
        // One they have both picked
    } else {
        // checkRound function
        checkRound();
    }
    console.log('P1 Choice: ', playerOneChoice);
    console.log('P2 Choice: ', playerTwoChoice);
})

