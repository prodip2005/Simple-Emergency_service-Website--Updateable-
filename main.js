
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
        return;
    }
    coinCount -= 20;
    document.getElementById(coinIn).innerText = coinCount;

}


//ALERT
function alertF(alertIName,alertINum){
    const serviceName = document.getElementById(alertIName).innerText;
    const serviceNumber = document.getElementById(alertINum).innerText;
    alert(serviceName + ": " + serviceNumber);
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


document.getElementById("call-btn").addEventListener("click", function(){
    
                         //COIN CUT
    //------------------------------------------------------------------------------
    callF("coin-count")
    //-------------------------------------------------------------------------------
                         //ALERT
    //------------------------------------------------------------------------------
    alertF("service-name","service-number")
    //----------------------------------------------------------------------------


//     const data = {
//         name: serviceName,          // এখানে serviceName নাও
//         number: serviceNumber,      // নম্বরও রাখতে পারো
//         date: new Date().toLocaleTimeString()
//     };

//     callData.push(data);

//     const callContain = document.getElementById("call-container");
//     callContain.innerText = "";

//    for (const call of callData) {
//     const div = document.createElement("div");
//     div.innerHTML = `
//     <div class="flex justify-between items-center mx-6 mt-4 mb-4">
//         <section>
//             <p class="font-semibold text-lg break-words max-w-[200px]">${call.name}</p>
//             <p class="text-[#5C5C5C] text-lg">${call.number}</p>
//         </section>
//         <p class="text-lg">${call.date}</p>
//     </div>
//     `;
//     callContain.appendChild(div);
// }

});





