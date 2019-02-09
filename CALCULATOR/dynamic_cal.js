
var display_text = document.querySelector(".display");
var button_input = document.getElementsByClassName("button");


for(let i=0;i<button_input.length;i++)
{
    button_input[i].addEventListener('click',function(){

        // remove shodow to make like pressing a button
        button_input[i].style.boxShadow = "none";

        // logic
        if(button_input[i].value == 'c')
        {
            display_text.value = "";
        }
        else if(button_input[i].value == '=')
        {
            display_text.value = eval(display_text.value); // i want to create my own evaluate function
        }
        else
        {
            display_text.value += button_input[i].value;
        }
    });
}




