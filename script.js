function compare(){
    let machine = document.getElementById("machine")
    let user = document.getElementById("userChoice")

    let asdw = document.getElementById("message")
    asdw.className = "p-2 visible"
}

function choiceRandom(){
    let machineChoice = Math.floor(Math.random() * 3);
    alert (machineChoice)
    if (machineChoice == 0){
        let Img = document.getElementById("machine")
        Img.src = "flower-nobg.png"
    }else if(machineChoice == 1){
        let Img = document.getElementById("machine")
        Img.src = "water-nobg.png"
    }else if(machineChoice == 2){
        let Img = document.getElementById("machine")
        Img.src = "soil-nobg.png"
    }
}

function choiceFlower(){
    let Img = document.getElementById("userChoice")
    Img.src = "flower-nobg.png"
    let ImgM = document.getElementById("machine")
    ImgM.src = ""
    let asdw = document.getElementById("message")
    asdw.className = "p-2 invisible"
}

function choiceWater(){
    let Img = document.getElementById("userChoice")
    Img.src = "water-nobg.png"
    let ImgM = document.getElementById("machine")
    ImgM.src = ""
    let asdw = document.getElementById("message")
    asdw.className = "p-2 invisible"
}

function choiceSoil(){
    let Img = document.getElementById("userChoice")
    Img.src = "soil-nobg.png"
    let ImgM = document.getElementById("machine")
    ImgM.src = ""
    let asdw = document.getElementById("message")
    asdw.className = "p-2 invisible"
}