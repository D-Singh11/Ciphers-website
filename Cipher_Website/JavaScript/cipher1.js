function ROT13() 
{
    var input_Element = document.getElementById("input11");
    var user_Input;         // variable created to store user input
    
    user_Input = input_Element.value;          // get user input characters and store them
    user_Input=user_Input.toUpperCase();                        // convert user input to uppercase
    var cipheredText="";                                        // variable stores ciphered text
    
    for(i=0;i<user_Input.length; i++)           // for loop to iterate through user input
    {
        
    var unicode = user_Input.charCodeAt(i);             // variable to get unicode of current character in loop
        if(unicode >=65 && unicode <=77)                    // condition to applt rot 13
            {
                cipheredText +=  String.fromCharCode(unicode+13);   //converted letter gets concatenated & stored in variable
            }
        else if (unicode >=78 && unicode <=90)                  // condition to implement rot13 from n-z
            {
                cipheredText +=  String.fromCharCode(unicode-13);
            }
        else{
            cipheredText="";                                    // if input contain other characterrs/numbers/synbols , it show error
            cipheredText="Please only enter alphabets between A-Z or a-z";  // error message
        }
        
    
    }
   
    input_Element.value = "";
    var show_Output = document.getElementById("result");
    show_Output.innerHTML= cipheredText;
}