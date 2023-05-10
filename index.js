
function writeCards(name, event){
    let card= [];
    for (let i=0; i < name.length; i++) {
        card.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    } 
    return card;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "birthday"));

function countDown(num) {
    while (num>= 0) {
        console.log(num--);
    }
}
countDown(10);