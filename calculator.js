var currentVariable = []
var storeVariable = ""

//x = [1, "+" , 1]
//console.log (eval(x.join("")))
//use when equal button is run




function showPartAnswer(letter) {

    storeVariable = storeVariable + letter
    document.getElementById("answer").value = storeVariable
    //takes the letter and adds it to storeVariable only if it is a number


}



function showAnswer(x){
    if (typeof x == "number"){
        document.getElementById("answer").value = x
        showPartAnswer(x)
    }

    else{
        document.getElementById("answer").value = null
        storeVariable =""
        //can change this to at the top of the button if storeVariable[-1] is not [1-9] then delete it

    }
    //if typeof does not number clear the storeVariable
    currentVariable.push(x)
    console.log(currentVariable)
    console.log(storeVariable)
    
    
    return
    //console.log(storeVariable)
    //store this value in array
}

function equals(){
    
    answer = eval(currentVariable.join(""))
    if (typeof answer == "number"){
        document.getElementById("answer").value = answer
    }


    storeVariable =""
    currentVariable = []


    console.log(currentVariable)
    console.log(storeVariable)
    
    return
    
    

}

function showNon(){

    document.getElementById("answer").value = null
    storeVariable =""
    currentVariable = []

    console.log(currentVariable)
    console.log(storeVariable)


}




