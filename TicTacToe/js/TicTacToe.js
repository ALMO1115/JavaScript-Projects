//THIS VARIABLE KEEPS TRACK OF WHOSE TURN IT IS
let activePlayer = "x";
//THIS ARRAY STORES AN ARRAY OF MOVES. WE USE THIS TO DETERMINE WIN CONDITIONS
let selectedSquares = [];
//THIS FUNCTION IS FOR PLACING AN X OR O IN A SQUARE
function placeXOrO(squareNumber) {
  //THIS CONDITION ENSURES A SQUARE HASN'T BEEN SELECTED ALREADY
  //THE .SOME() METHOD IS USED TO CHECK EACH ELEMENT OF selectedSquare ARRAY TO SEE IF IT CONTAINS THE SQUARE NUMBER CLICKED ON
  if (!selectedSquares.some((Element) => Element.includes(squareNumber))) {
    //THIS VARIABLE RETRIEVES THE HTML ELEMENT ID THAT WAS CLICKED
    let select = document.getElementById(squareNumber);
    //THIS CONDITION CHECKS WHOSE TURN IS IS
    if (activePlayer === "x") {
      //IF ACTIVEPLAYER IS EQUAL TO 'X', THE X.PNG IS PLACED IN HTML
      select.style.backgroundImage = 'url("images/dragonx.jpg")';
      //ACTIVE PLAYER MAY ONLY BE 'X' OR 'O' SO, IF NOT 'X' IT MUST BE 'O'
    } else {
      //IF ACTIVEPLAYER IS EQUAL TO 'O', THE O.PNG IS PLACED IN HTML
      select.style.backgroundImage = 'url("images/galaxyo.png")';
    }

    //SQUARE NUMBER AND ACTIVEPLAYER ARE CONCATENATED TOGETHER AND ADDED TO ARRAY
    selectedSquares.push(squareNumber + activePlayer);
    //THIS CALLS A FUNCTION TO CHECK FOR ANY WIN CONDITIONS
    checkWinConditions();
    //THIS CONDITION IS FOR CHANGING THE ACTIVE PLAYER
    if (activePlayer === "x") {
      //IF ACTIVE PLAYER IS 'X' CHANGE IT TO 'O'
      activePlayer = "o";
      //IF ACTIVE PLAYER IS ANYTHING OTHER THAN 'X'
    } else {
      //CHANGE THE ACTIVEPLAYER TO 'X'
      activePlayer = "x";
    }

    //THIS FUNCTION PLAYS PLACEMENT SOUND
    audio("./media/place2.flac");
    //THIS CONDITION CHECKS TO SEE IF IT IS COMPUTERS TURN
    if (activePlayer === "o") {
      //THIS FUNCTION DISABLES CLICKING FOR COMPUTER CHOICE
      disableClick();
      //THIS FUNCTION WAITS 1 SECOND BEFORE COMPUTER PLACES IMAGE AND ENABLES CLICK
      setTimeout(function () {
        computersTurn();
      }, 1000);
    }
    //RETURNING TRUE IS NEEDED FOR OUR COMPUTERSTURN() FUNCTION TO WORK
    return true;
  }
  //THIS FUNCTION RESULTS IN A RANDOM SQUARE BEING SELECTED
  function computersTurn() {
    //THIS BOOLEAN IS NEEDED FOR OUR WHILE LOOP
    let success = false;
    //THIS VARIABLE STORES A RANDOM NUMBER 0-8
    let pickASquare;
    //THIS CONDITION ALLOWS OUR WHILE LOOP TO KEEP TRYING IF A SQUARE IS SELECTED ALREADY
    while (!success) {
      //A RANDOM NUMBER BETWEEN 0 AND 8 IS SELECTED
      pickASquare = String(Math.floor(Math.random() * 9));
      //IF THE RANDOM NUMBER EVALUATED RETURNS TRUE, THE SQUARE HASN'T BEEN SELECTED YET
      if (placeXOrO(pickASquare)) {
        //THIS LINE CALLS THE FUNCTION
        placeXOrO(pickASquare);
        //THIS CHANGES OUR BOOLEAN AND ENDS THE LOOP
        success = true;
      }
    }
  }
}

//This function parses the selectedSquares array to search for win conditions
//drawWinline function is called to draw line if condition is met
function checkWinConditions() {
  // X 0, 1, 2 condition.
  if (arrayIncludes("0x", "1x", "2x")) {
    drawWinline(50, 100, 558, 100);
  }
  // X 3, 4, 5 condition.
  else if (arrayIncludes("3x", "4x", "5x")) {
    drawWinLine(50, 304, 558, 304);
  }
  // X 6, 7, 8 condition.
  else if (arrayIncludes("6x", "7x", "8x")) {
    drawWinLine(50, 508, 558, 508);
  }
  // X 0, 3, 6 condition.
  else if (arrayIncludes("0x", "3x", "6x")) {
    drawWinLine(100, 50, 100, 558);
  }
  // X 1, 4, 7 condition.
  else if (arrayIncludes("1x", "4x", "7x")) {
    drawWinLine(304, 50, 304, 558);
  }
  // X 2, 5, 8 condition.
  else if (arrayIncludes("2x", "5x", "8x")) {
    drawWinLine(508, 50, 508, 558);
  }
  // X 6, 4, 2 condition.
  else if (arrayIncludes("6x", "4x", "2x")) {
    drawWinLine(100, 508, 510, 90);
  }
  // X 0, 4, 8 condition.
  else if (arrayIncludes("0x", "4x", "8x")) {
    drawWinLine(100, 100, 520, 520);
  }
  // O 0, 1, 2 condition.
  else if (arrayIncludes("0o", "1o", "2o")) {
    drawWinLine(50, 100, 558, 100);
  }
  // O 3, 4, 5 condition.
  else if (arrayIncludes("3o", "4o", "5o")) {
    drawWinLine(50, 304, 558, 304);
  } else if (arrayIncludes("60", "70", "80")) {
    drawWinLine(50, 508, 558, 508);
  }
  // O 0, 3, 6 condition.
  else if (arrayIncludes("0o", "3o", "6o")) {
    drawWinLine(100, 50, 100, 558);
  }
  // O 1, 4, 7 condition
  else if (arrayIncludes("1o", "4o", "7o")) {
    drawWinLine(304, 50, 304, 558);
  } else if (arrayIncludes("60", "40", "20")) {
    drawWinLine(100, 508, 510, 90);
  }
  // O 0, 4, 8 condition.
  else if (arrayIncludes("0o", "4o", "8o")) {
    drawWinLine(100, 100, 520, 520);
  }
  // This condition checks for tie. If none of the above conditions register and 9
  //squares are selected the code executes.
  else if (selectedSquares.length >= 9) {
    //This function playes the tie game sound.
    audio("./media/tie2.wav");
    // This function sets a .3 second timer before the resetGame is called.
    setTimeout(function () {
      resetGame();
    }, 1000);
  }

  // This function checks if an array includes 3 strings. It is used to check for
  //each win condition.
  function arrayIncludes(squareA, squareB, squareC) {
    // These 3 variables will be used to check for 3 in a row.
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    // If the 3 variables we pass are all included in our array true is
    //returned and our else if condition executes the drawWinLine function.
    if (a === true && b === true && c === true) {
      return true;
    }
  }
}

//this function makes our body element temporarily unclickable
function disableClick() {
  //this makes our body unclickable
  body.style.pointerEvents = "none";
  //this makes our body clickable again after 1 second
  setTimeout(function () {
    body.style.pointerEvents = "auto";
  }, 1000);
}

//this function takes a string parameter of the path you set earlier for placement sound (./media/place.mp3')
function audio(audioURL) {
  //we create a new audio object and we pass the path as a parameter
  let audio = new Audio(audioURL);
  //play method plays our audio sound
  audio.play();
}

//This function utilizes html canvas to draw win lines.
function drawWinLine(coordx1, coordy1, coordx2, coordy2) {
  //This line accesses our html canvas element.
  const canvas = document.getElementById("win-lines");
  //This line gives us access to methods and properties to use on canvas
  const c = canvas.getContext("2d");
  //This line indicates where the start of a lines x axis is.
  let x1 = coordx1,
    //This line indicates where the start of a lines y axis is
    y1 = coordy1,
    //This line indicates where the end of a lines x axis is.
    x2 = coordx2,
    //This line indicates where the end of a lines x axis is.
    y2 = coordy2,
    //This variable stores temporary x axis data we update in our animation loop.
    x = x1,
    //This variable stores temporary y axis data we update in our animation loop
    y = y1;

  //This function interacts with the canvas
  function animateLineDrawing() {
    //This variable creates a loop
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    //This method clears content from last loop iteration.
    c.clearRect(0, 01, 608, 608);
    //This method starts a new path
    c.beginPath();
    // This method moves us to a starting point for our line.
    c.moveTo(x1, y1);
    // This method indicates the end point in our line.
    c.lineTo(x, y);
    // This method sees she width of our line
    c.lineWidth = 10;
    //This method sets the color of our line
    c.strokeStyle = "rgba (70, 255, 33, .8)";
    //This method draws everything we laid out above.
    c.stroke();
    //This condition checks if we've reached the endpoint.
    if (x1 <= x2 && y1 <= y2) {
      //This condition adds 10 to the previous end x point
      if (x < x2) {
        x += 10;
      }
      //This condition adds 10 to the previous end y point
      if (y < y2) {
        y += 10;
      }
      //This condition cancels our animation loop
      //if we've reach the end points.
      if (x >= x2 && y >= y2) {
        cancelAnimationFrame(animationLoop);
      }
    }
    //This condition is similar to the one above.
    //Ihis is necessary for the 6, 4, 2 win condition
    if (x1 <= x2 && y1 >= y2) {
      if (x < x2) {
        x += 10;
      }
      if (y > y2) {
        y -= 10;
      }
      if (x >= x2 && y <= y2) {
        cancelAnimationFrame(animationLoop);
      }
    }
  }

  //This function clears our canvas after our win line is drawn.
  function clear() {
    //This line starts our animation loop.
    const animationLoop = requestAnimationFrame(clear);
    //This line clears our canvas
    c.clearRect(0, 0, 608, 608);
    //This line stops our animation loop.
    cancelAnimationFrame(animationLoop);
  }
  //This line disallows clicking while the win sound is playing
  disableClick();
  //This line plays the win sounds.
  audio("./media/winGame2.flac");
  //This line calls our main animation loop.
  animateLineDrawing();
  //This line waits 1 second. Then, clears canvas, resets game, and allows clicking again
  setTimeout(function () {
    clear();
    resetGame();
  }, 1000);
}

//this function resets the game in the event of a tie or a win
function resetGame() {
  //this for loop iterates trhough each HTML square element
  for (let i = 0; i < 9; i++) {
    //this variable gets the html element of 1
    let square = document.getElementById(String(i));
    //this removes our elements backgroundImage
    square.style.backgroundImage = "";
  }
  //this resets our array so it is empty and we can start over
  selectedSquares = [];
}