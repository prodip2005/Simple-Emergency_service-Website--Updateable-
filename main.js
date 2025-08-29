
const callData=[];

/*-------------------------------------------------------------------------------- 
                                     FUNCTONS
----------------------------------------------------------------------------------*/
// HEART COUNT
function heartF(IN){
    let heartNumber=parseInt(document.getElementById(IN).innerText)
    heartNumber+=1;
    
    document.getElementById(IN).innerText=heartNumber;
}


//COIN COUNT
function callF(coinIn){
let coinCount = parseInt(document.getElementById(coinIn).innerText);
    if (coinCount < 20) {
        alert("Can not make a call")
        return 0;
    }
    
        coinCount -= 20;
    document.getElementById(coinIn).innerText = coinCount;
    return 1;
    

}


//ALERT
function alertF(alertIName,alertINum,callContainer){
    const serviceName = document.getElementById(alertIName).innerText;
    const serviceNumber = document.getElementById(alertINum).innerText;
    alert(serviceName + ": " + serviceNumber);

    //History

    const data = {
        name: serviceName,          
        number: serviceNumber,     
        date: new Date().toLocaleTimeString()
    };

    callData.push(data);

    const callContain = document.getElementById(callContainer);
    callContain.innerText = "";

   for (const call of callData) {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="flex justify-between items-center mx-1 mt-4 mb-4 p-4 rounded-lg bg-[#fafafa] ">
        <section>
            <p class="font-semibold text-lg break-words max-w-[200px]">${call.name}</p>
            <p class="text-[#5C5C5C] text-lg">${call.number}</p>
        </section>
        <p class="text-lg">${call.date}</p>
    </div>
    `;
    callContain.appendChild(div);
}
}




/*-------------------------------------------------------------------------------- 
                             INCREASE OF HEART NUMBER
----------------------------------------------------------------------------------*/
document.getElementById("heart-click-btn1").addEventListener("click",function(){
    
    heartF("heart-number");
    
})


document.getElementById("heart-click-btn2").addEventListener("click",function(){
    
    heartF("heart-number");
    
})


document.getElementById("heart-click-btn3").addEventListener("click",function(){
    
    heartF("heart-number");
    
})



document.getElementById("heart-click-btn4").addEventListener("click",function(){
    
    heartF("heart-number");
    
})


document.getElementById("heart-click-btn5").addEventListener("click",function(){
    
    heartF("heart-number");
    
})


document.getElementById("heart-click-btn6").addEventListener("click",function(){
    
    heartF("heart-number");
    
})


document.getElementById("heart-click-btn7").addEventListener("click",function(){
    
    heartF("heart-number");
    
})


document.getElementById("heart-click-btn8").addEventListener("click",function(){
    
    heartF("heart-number");
    
})

document.getElementById("heart-click-btn9").addEventListener("click",function(){
    
    heartF("heart-number");
    
})












/*-------------------------------------------------------------------------------- 
                                     CALL BUTTON
----------------------------------------------------------------------------------*/


document.getElementById("call-btn1").addEventListener("click", function(){
    
                         //COIN CUT AND CALLER HISTORY
    //------------------------------------------------------------------------------
         
    
         if(callF("coin-count") === 1){  // coin যথেষ্ট হলে
        alertF("service-name1","service-number1","call-container")
    }
    //----------------------------------------------------------------------------


});

document.getElementById("call-btn2").addEventListener("click", function(){
    
                         //COIN CUT AND CALLER HISTORY
    //------------------------------------------------------------------------------
            if(callF("coin-count") === 1){
            alertF("service-name2","service-number2","call-container")
    }
    //----------------------------------------------------------------------------


});


document.getElementById("call-btn3").addEventListener("click", function(){
    
                         //COIN CUT AND CALLER HISTORY
    //------------------------------------------------------------------------------
    if(callF("coin-count") === 1){
            alertF("service-name3","service-number3","call-container")
    }
    //----------------------------------------------------------------------------


});


document.getElementById("call-btn4").addEventListener("click", function(){
    
                         //COIN CUT AND CALLER HISTORY
    //------------------------------------------------------------------------------
    if(callF("coin-count") === 1){
            alertF("service-name4","service-number4","call-container")
    }
    //----------------------------------------------------------------------------


});


document.getElementById("call-btn5").addEventListener("click", function(){
    
                         //COIN CUT AND CALLER HISTORY
    //------------------------------------------------------------------------------
    if(callF("coin-count") === 1){
            alertF("service-name5","service-number5","call-container")
    }
    //----------------------------------------------------------------------------


});


document.getElementById("call-btn6").addEventListener("click", function(){
    
                         //COIN CUT AND CALLER HISTORY
    //------------------------------------------------------------------------------
    if(callF("coin-count") === 1){
            alertF("service-name6","service-number6","call-container")
    }
    //----------------------------------------------------------------------------


});


document.getElementById("call-btn7").addEventListener("click", function(){
    
                         //COIN CUT AND CALLER HISTORY
    //------------------------------------------------------------------------------
    if(callF("coin-count") === 1){
            alertF("service-name7","service-number7","call-container")
    }
    //----------------------------------------------------------------------------


});



document.getElementById("call-btn8").addEventListener("click", function(){
    
                         //COIN CUT AND CALLER HISTORY
    //------------------------------------------------------------------------------
    if(callF("coin-count") === 1){
            alertF("service-name8","service-number8","call-container")
    }
    //----------------------------------------------------------------------------


});




document.getElementById("call-btn9").addEventListener("click", function(){
    
                         //COIN CUT AND CALLER HISTORY
    //------------------------------------------------------------------------------
    if(callF("coin-count") === 1){
            alertF("service-name9","service-number9","call-container")
    }
    //----------------------------------------------------------------------------


});




/*-------------------------------------------------------------------------------- 
                                     CLEAR BUTTON
----------------------------------------------------------------------------------*/


document.getElementById("clr-btn").addEventListener("click",function(){
    callData.length=0;
    document.getElementById("call-container").innerHTML="";
})




/*-------------------------------------------------------------------------------- 
                                     COPY BUTTON
----------------------------------------------------------------------------------*/

document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
        
        const card = button.closest('.bg-white');
        
        const serviceNumberEl = card.querySelector('h1[id^="service-number"]');
        const serviceNumber = serviceNumberEl ? serviceNumberEl.innerText.trim() : '';

        if (!serviceNumber) {
            alert("No number found to copy!");
            return;
        }

        
        navigator.clipboard.writeText(serviceNumber)
            .then(() => {
                alert(`Copied: ${serviceNumber}`);
            })
            .catch(err => {
                console.error("Failed to copy", err);
            });
    });
});
