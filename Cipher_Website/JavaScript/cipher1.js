

//************************************ FUNCTIONS USED ON PAGE CIPHER1.HTML*****************************************


// Encoding rot13 function

function ROT13() 
{
    var input_Element = document.getElementById("input11");
    var user_Input;         // variable created to store user input
    var show_Output;
    user_Input = input_Element.value;          // get user input characters and store them
    user_Input=user_Input.toUpperCase();                        // convert user input to uppercase
    var cipheredText="";                                        // variable stores ciphered text
    
    if (user_Input.trim().length == 0)
        {
                
                show_Output = document.getElementById("result");
                show_Output.style.color = "red";
                 show_Output.innerHTML ="Invalid input. \n\nPlease only enter alphabets between A-Z or a-z";
                
        }
    else{
            
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
    
            }
   
                       // input_Element.value = "";
                        show_Output = document.getElementById("result");
                        show_Output.style.color = "black";
                        show_Output.innerHTML =cipheredText;
        }
    
}





//Decoding rot13 function

function decodeRot13()
{
    var user_input = document.getElementById("decode11").value.toLocaleUpperCase();
   var show_Output;
    var originalText = "";
    
    if (user_input.trim().length == 0)
        {
            
                show_Output = document.getElementById("resultDecode");
                show_Output.style.color = "red";
                 show_Output.innerHTML ="Invalid input. \n\nPlease only enter alphabets between A-Z or a-z";
                
        }
    else{
            
       
            for(i=0; i<user_input.length; i++)
            {
                var unicode = user_input.charCodeAt(i);
                 if(unicode >=65 && unicode <=77)                    // condition to applt rot 13
                    {
                        originalText +=  String.fromCharCode(unicode+13);   //converted letter gets concatenated & stored in variable
                    }
                else if (unicode >=78 && unicode <=90)                  // condition to implement rot13 from n-z
                    {
                        originalText +=  String.fromCharCode(unicode-13);
                    }
            }
            
            show_Output = document.getElementById("resultDecode");
            show_Output.style.color = "black";
            show_Output.innerHTML = originalText;
        }
    
    
   
}


//********************************** FUNCTIONS USED ON cipher2.html  ****************************************


// Cipher 2 encoding function

function Cipher2()
{
    
    var user_input = document.getElementById("input2").value.toUpperCase();    // get user input from webpage
    var show_Output;
    var keySum = 0;                                         // cipher key number to be used
    
     if (user_input.trim().length == 0)
        {
               alert("white space");
                show_Output = document.getElementById("resultC2");
                show_Output.style.color = "red";
                show_Output.innerHTML ="Invalid input. \n\nPlease only enter alphabets between A-Z or a-z";
                
        }
    else{
                
        
                for(i=0; i<user_input.length; i++)
                {
                    keySum = keySum + user_input.charCodeAt(i);         // working out key number by iterating through all chracters
                }

                key = keySum;
                keySum = keySum % 13;                       // further operation on key value to be used for encryption

                
                var cipherText = "";
                for(i=0; i<user_input.length; i++)
                   {
                        var unico = user_input.charCodeAt(i);    // looping thoriugh every single input charcter to convert it into ciphered text

                        if(unico >=65 && unico <=90)              // only convert ciphered text if its UNICODE in specified range
                         {
                             cipherText = cipherText + String.fromCharCode(unico + keySum);         // finally encrypting input to cipher text
                         }


                   }


                    cipherText = cipherText + key;                   // this is to give hint to decrypter to decode text

                    show_Output = document.getElementById("resultC2");
                    show_Output.style.color = "black";
                    show_Output.innerHTML = cipherText.toString();              // display result
     }
       
            
}



// Cipher 2 decoding function

function Cipher2Decode()
{
    
    var user_input = document.getElementById("inputd2").value.toLocaleUpperCase();    // get user input from webpage
   
    var keySum = 0;                      // cipher key number to be used
    var stringKey = "";
    var extracted_input = "";
    var show_Output ;
   
    if (user_input.trim().length == 0)
        {
                alert("white space");
                show_Output = document.getElementById("resultd2");
                show_Output.style.color = "red";
                show_Output.innerHTML ="Invalid input. \n\nPlease only enter alphabets between A-Z or a-z";
                
        }
    else{
                for(i=0; i<user_input.length; i++)
                    {

                      var unicode = user_input[i].toString();
                      var code = unicode.charCodeAt(0);
                        if(code >=48 && code <=57)
                            {
                                stringKey +=unicode;

                            }
                        else {
                                extracted_input +=unicode;
                             }

                    }
        
                if(stringKey.length==0)
                    {
                        alert("Please also enter encryption key number in digits with plaint text.");
                    }
        
                keySum = parseInt(stringKey) ;

                keySum = keySum % 13;                       // further operation on key value to be used for encryption

                var cipherText = "";
        
                for(i=0; i<extracted_input.length; i++)
                   {
                        var unico = user_input.charCodeAt(i);   // looping thoriugh every single input charcter to convert it into ciphered text

                       cipherText += String.fromCharCode(unico - keySum);             // finally encrypting input to cipher text

                   }
   
                show_Output = document.getElementById("resultd2");
                show_Output.style.color = "black";
                show_Output.innerHTML = cipherText.toString();              // display result
                output2.innerHTML = cipherText;             // display result
    }
}








//******************************************** FUNCTIONS USED ON Cipher3.html *****************************************************************


// Cippher 3 encoding function

function Cipher3()
{
     var user_input = document.getElementById("input3").value.toUpperCase();    // get user input from webpage
     var show_Output;
     var key = document.getElementById("key_input3").value.toUpperCase();                                    // cipher key number to be used
     var keySum =0;
     if (user_input.trim().length == 0)
        {
               alert("white space");
                show_Output = document.getElementById("result3");
                show_Output.style.color = "red";
                show_Output.innerHTML ="Invalid input. \n\nPlease only enter alphabets between A-Z or a-z";
                
        }
    else if(key.trim().length == 0 )
        {
                show_Output = document.getElementById("result3");
                show_Output.style.color = "red";
               
                show_Output.innerHTML ="Please enter key.";
        }
    else{
                
                
                for(i=0; i<key.length; i++)
                {
                    keySum = keySum + key.charCodeAt(i);         // working out key number by iterating through all chracters
                }
              

        
                keySum = keySum % 6;                       // further operation on key value to be used for encryption

                
                var cipherText = "";
                for(i=0; i<user_input.length; i++)
                   {
                        var unico = user_input.charCodeAt(i);    // looping thoriugh every single input charcter to convert it into ciphered text

                      
                             cipherText = cipherText + String.fromCharCode(unico + keySum);         // finally encrypting input to cipher text
                       

                   }


                 

                    show_Output = document.getElementById("result3");
                    show_Output.style.color = "black";
                    show_Output.innerHTML = cipherText.toString();              // display result
     }
       
}





// Cippher 3 decoding function

function Cipher3Decode()
{
     var user_input = document.getElementById("inputC3").value.toUpperCase();    // get user input from webpage
     var show_Output;
     var key = document.getElementById("key_inputC3").value.toUpperCase();                                    // cipher key number to be used
     var keySum =0;
     if (user_input.trim().length == 0)
        {
               alert("white space");
                show_Output = document.getElementById("resultC3");
                show_Output.style.color = "red";
                show_Output.innerHTML ="Invalid input. \n\nPlease only enter alphabets between A-Z or a-z";
                
        }
    else if(key.trim().length == 0 )
        {
                show_Output = document.getElementById("resultC3");
                show_Output.style.color = "red";
               
                show_Output.innerHTML ="Please enter key.";
        }
    else{
                
                
                for(i=0; i<key.length; i++)
                {
                    keySum = keySum + key.charCodeAt(i);         // working out key number by iterating through all chracters
                }
                

        
                keySum = keySum % 6;                       // further operation on key value to be used for encryption

                
                var cipherText = "";
                for(i=0; i<user_input.length; i++)
                   {
                        var unico = user_input.charCodeAt(i);    // looping thoriugh every single input charcter to convert it into ciphered text

                     
                             cipherText = cipherText + String.fromCharCode(unico - keySum);         // finally encrypting input to cipher text
                       

                   }


                 

                    show_Output = document.getElementById("resultC3");
                    show_Output.style.color = "black";
                    show_Output.innerHTML = cipherText.toString();              // display result
     }
       
}


//****************************** FUNCTION USED TO CLEAR TEXT INPUTS and AREAA *********************************

function Clear(clear_button_id)
{
    
     if(clear_button_id.toString() == "C1b1")
     {
       
        document.getElementById("input11").value ="";
        document.getElementById("result").style.color ="black";
        document.getElementById("result").innerHTML="Result will be displayed here.";
     }
    else if(clear_button_id.toString() == "C1b2" )
    {
                document.getElementById("decode11").value="";
                document.getElementById("resultDecode").style.color ="black";
                document.getElementById("resultDecode").innerHTML = "Result will be displayed here.";
    }
     else if(clear_button_id.toString() == "C2b1" )
    {
                document.getElementById("input2").value="";
                document.getElementById("resultC2").style.color ="black";
                document.getElementById("resultC2").innerHTML = "Result will be displayed here.";
    }
     else if(clear_button_id.toString() == "C2b2" )
    {
                document.getElementById("inputd2").value="";
                document.getElementById("resultd2").style.color ="black";
                document.getElementById("resultd2").innerHTML = "Result will be displayed here.";
    }
     else if(clear_button_id.toString() == "C3b1" )
    {
                document.getElementById("input3").value="";
                document.getElementById("key_input3").value ="";
                document.getElementById("result3").style.color ="black";
                document.getElementById("result3").innerHTML = "Result will be displayed here.";
    }
      else if(clear_button_id.toString() == "C3b2" )
    {
                document.getElementById("inputC3").value="";
                document.getElementById("key_inputC3").value ="";
                document.getElementById("resultC3").style.color ="black";
                document.getElementById("resultC3").innerHTML = "Result will be displayed here.";
    }
}
