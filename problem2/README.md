
## Main logic :
 If I click on  1 box will change in red color after that I use async timer to call the computers turn.

- I have 4 checks:
  
  - 1: if the button is already with red or green color,

  - 2: if its users turn because if I start to click fast and those half second timers wont work so I disable the option where user can click on the button.(userTurn= false)
    
  - 3: check if the option that computer has selected is already selected then if its selected recall the function again.

  - 4: if all of the cells are already selected then wont allow to click on the button.

## Time complexity:
    initializeGame: O(n) because we set eventListeners for each cell  calling computerTurn is O(1)

    cellClicked: O(n) 2x if statements O(1) and setting background color is O(1) and setting userTurn to false is O(1) and calling computerTurn is O(1)
    getElementsByCellIndex is O(n) because use forEach loop
    setTimeout is O(1) because its called only once does not block the main thread because its async

    computerTurn: recursive function O(n) random index is O(1) setting background color is O(1) and setting userTurn to true is O(1)

    checkIfAllCellsAreFilled: O(n) if statement there is O(1) and for loop O(n)