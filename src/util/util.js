
export function validateWordleQuery(stringQuery) {
    // return the correct word here, it could be hardcoded for now
    let wordOfDay = "TRASH";
    let wordOfDayCharacterCount = parseWordCount(wordOfDay.toUpperCase());
    let userWord = stringQuery.toUpperCase();
    for(let i = 0; i < wordOfDay.length; i++){
        if(wordOfDay[i] == userWord[i]){
            //we can replace here to change color to green for valid character
            console.log(userWord[i] + " is green");
        }else{
            //we can replace here to change color to red/yellow for invalid character
            //if word does not match, check for if this character exists in rest of word
            if(wordOfDayCharacterCount[userWord[i]]){
                console.log(wordOfDay[i] + " is yellow");
            }else{
                console.log("get fucked its red");
            }
        }
    }
    /*
    * if(wordOfDay.toUpperCase() == userWord){
    *        console.log("You win");
    *    }else{
    *        console.log("try again");
    *    }
    */
    console.log(wordOfDayCharacterCount)
}

function parseWordCount(wordOfDay){
    let correctWordCounter = {};
    for(let i = 0; i < wordOfDay.length;i++){
        if(correctWordCounter[wordOfDay[i]]){
            correctWordCounter[wordOfDay[i]]++;
        }else{
            correctWordCounter[wordOfDay[i]] = 1;
        }
    }
    return correctWordCounter;
}