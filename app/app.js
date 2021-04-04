
/**
 * A function for a dark mode / light mode button
 * using a default theme when page is loded
 * The is the button for tooglr betwwen dark/light mode
 * <button onclick="myFunction()"> dark mode</button>
 */
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  } 

  /**
   * function for a notepad area when cliked displays the nav-side-bar and text area
   * making  the slidebar work with all the buttons 
   * Saving all the notes in array and will be visible in side bar
   * Default notepad area displayed when page loads
   */
   function myFunction2() {
    var slide_outmenu = document.getElementById("hj-menu");
    if (slide_outmenu.style.display === "none") {
      slide_outmenu.style.display = "block";
    } else {
      slide_outmenu.style.display = "none";
    }
  }

  /**
   * funtion for jumping into creating note area with save and delete button
   * listing all the notes saved in the side bar in a list
   */function myFunction3(){

   }