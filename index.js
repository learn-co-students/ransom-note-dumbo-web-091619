function buildHistogram(magazine){
    let histogram = {}
    for(let letter of magazine){
        letter in histogram ? histogram[letter] += 1 : histogram[letter] = 1
    }  
    return histogram
}

function canBuildNote(magazine, note){
    let boolean = false
    if (magazine.length >= note.length){
        let magazineHistogram = buildHistogram(magazine)
        let noteHistogram = buildHistogram(note)
        for(let letter in noteHistogram){
            if (magazineHistogram[letter] && magazineHistogram[letter] >= noteHistogram[letter]){
                boolean = true
            }else{
                boolean = false 
                break
            }
        }
    }
    return boolean
}

// let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m","e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t"]
// let note = "hereisat"
// let test = ["a", "b", "c"]
// canBuildNote(magazine, note)
// canBuildNote(test, note)