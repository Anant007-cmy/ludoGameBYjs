 runLudo= () => {
    const playr1=Math.floor(Math.random()*6)+1;

    const player1Dice =`images/dice${playr1}.png`;
    
    document.getElementById('check1').setAttribute('src',player1Dice);

    const playr2=Math.floor(Math.random()*6)+1;

    const player2Dice =`images/dice${playr2}.png`;
    
    document.getElementById('check2').setAttribute('src',player2Dice);

    if(playr1>playr2){
        document.querySelector('h1').innerHTML="Player1 won :)";
    }
    else if(playr1<playr2){
        document.querySelector('h1').innerHTML="Player2 won :)";
    }
    else{
        document.querySelector('h1').innerHTML="DRAW!!! :)";
    }
    
} 