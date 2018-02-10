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



// CIpher 2 

var previous = 0;
function Cipher2()
{
    
    var input2 = document.getElementById("input2").value.toUpperCase();    // get user input from webpage
   
    var keySum = 0;                                         // cipher key number to be used
    
    
    
    for(i=0; i<input2.length; i++)
        {
            keySum = keySum + input2.charCodeAt(i);         // working out key number by iterating through all chracters
        }
   
   
    var key = keySum;                               // key value used to aapplu cipher algoritham
    
        if(keySum == previous)
         {
                keySum += 1;
                key = keySum;
         }
    
    previous = keySum;
    keySum = keySum % 13;                       // further operation on key value to be used for encryption
    
    
    var cipherText = "";
    for(i=0; i<input2.length; i++)
       {
            var unico = input2.charCodeAt(i);       // looping thoriugh every single input charcter to convert it into ciphered text
            
            if(unico >=65 && unico <=90)              // only convert ciphered text if its UNICODE in specified range
             {
                 cipherText = cipherText + String.fromCharCode(unico + keySum);             // finally encrypting input to cipher text
             }
        
           
       }
    
    
    cipherText = cipherText.concat(key);                   // this is to give hint to decrypter to decode text
    
    var output2 = document.getElementById("result2");
    output2.innerHTML = cipherText.toString();              // display result
}