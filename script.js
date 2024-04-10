let choices= ["rock","paper","scissors"]
let computerChoice= () => {
    return Math.floor(Math.random()*3);
};
function clear (){
    document.querySelector(".winner").innerText="Winner"
}
function clicked (userChoice){
    let index=computerChoice();
    let computer_choice=choices[index];
    if(userChoice === "rock" && computer_choice==="scissor" ||
    userChoice === "paper" && computer_choice==="rock" ||
    userChoice === "scissor" && computer_choice==="paper")
    {
        document.querySelector(".winner").innerText="User Wins!"
        let userSc=document.querySelector(".userScore")
        userSc.innerText=Number(userSc.innerText) + 1;
    }
    else if(userChoice === computer_choice )
    {
        document.querySelector(".winner").innerText="Its a Draw!"       
    }
    else{
        document.querySelector(".winner").innerText="Computer Wins!"
        let compSc=document.querySelector(".computerScore")
        compSc.innerText=Number(compSc.innerText) + 1;
    }
setTimeout(clear,500)
}