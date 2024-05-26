const display=document.getElementById("display")
function appendtodis(input){
display.value += input;

}
function cleardisplay(input){
display.value=""
}
function calculate(input){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="error";

    }

}// add keyboard keys too.