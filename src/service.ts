let gardensBtn = document.querySelector("#gardens_btn");
let lawnBtn = document.querySelector("#lawn_btn");
let plantingBtn = document.querySelector ("#planting_btn");
let item1 = document.querySelector("#item1");
let item2 = document.querySelector("#item2");
let item3 = document.querySelector("#item3");
let item4 = document.querySelector("#item4");
let item5 = document.querySelector("#item5");
let item6 = document.querySelector("#item6");

let blurItem:string = 'grid__item__blur'

let gardensItemsList = [item1, item5];
let lawnsItemsList = [item1, item3, item5];
let plantingItemsList = [item2, item4, item6];

let gridItems = [item1, item2, item3, item4, item5, item6]


// Проверять выключенные айтемы
// Выключать не нужные/включать нужные


function switchGardens():void {
    for (let index = 0; index < gridItems.length; index++) {
        let item = gridItems[index];
        gardensItemsList.includes(item)? item?.classList.remove(blurItem):item?.classList.add(blurItem);
    }
}

function switchLawns():void {
    for (let index = 0; index < gridItems.length; index++) {
        let item = gridItems[index];
        lawnsItemsList.includes(item)? item?.classList.remove(blurItem):item?.classList.add(blurItem);
    }
}

function switchPlanting():void {
    for (let index = 0; index < gridItems.length; index++) {
        let item = gridItems[index];
        plantingItemsList.includes(item)? item?.classList.remove(blurItem):item?.classList.add(blurItem);
    }
}

gardensBtn?.addEventListener('click', ()=>{
    switchGardens();
})

lawnBtn?.addEventListener('click', ()=>{
    switchLawns();
})

plantingBtn?.addEventListener('click', ()=>{
    switchPlanting();
})
























// function switchLawns():void {
//     lawnsItemsList.forEach(element => {
//         element?.classList.contains('grid_item_blur')? '' : element?.classList.add('grid__item__blur')
//     });
// }

// function switchPlanting():void {
//     plantingItemsList.forEach(element => {
//         element?.classList.contains('grid_item_blur')? '' : element?.classList.add('grid__item__blur')
//     });
// }
