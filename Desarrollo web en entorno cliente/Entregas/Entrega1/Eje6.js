'use strict'
function Eje6() {
    let list1 = [1,2,3,4,"2","d"];
    let list2 = [1,4,"d","a"];
    let verdad = false;
    let listf = [];

    list1.forEach(word => {
        verdad = false
        list2.forEach(colord => {
            if (colord == word) {
                verdad = true;
            }
        })
        if (!verdad) {
            listf.push(word);
        }
    })
    list2.forEach(word => {
        verdad = false
        list1.forEach(colord => {
            if (colord == word) {
                verdad = true;
            }
        })
        if (!verdad) {
            listf.push(word);
        }
    })
    console.log(listf)
}