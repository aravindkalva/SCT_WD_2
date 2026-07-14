// Select display and buttons

const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");


// Add click event to all buttons

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.textContent;


        // Clear display

        if(value === "C"){

            display.value = "";

        }


        // Delete last character

        else if(value === "DEL"){

            display.value = display.value.slice(0, -1);

        }


        // Calculate result

        else if(value === "="){

            calculateResult();

        }


        // Add value to display

        else{

            display.value += value;

        }

    });

});



// Function for calculation

function calculateResult(){

    try{

        if(display.value === ""){

            display.value = "0";
            return;

        }


        // Prevent invalid characters

        if(!/^[0-9+\-*/%.]+$/.test(display.value)){

            throw new Error("Invalid Input");

        }


        let result = eval(display.value);


        if(!isFinite(result)){

            throw new Error("Math Error");

        }


        display.value = result;


    }

    catch(error){

        display.value = "Error";


        setTimeout(()=>{

            display.value = "";

        },1500);

    }

}



// Keyboard input support

document.addEventListener("keydown", (event)=>{


    const key = event.key;


    if(
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." ||
        key === "%"
    ){

        display.value += key;

    }



    else if(key === "Enter"){

        calculateResult();

    }



    else if(key === "Backspace"){

        display.value =
        display.value.slice(0,-1);

    }



    else if(key === "Escape"){

        display.value = "";

    }


});