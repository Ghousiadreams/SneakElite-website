let bagItemObjects;
onLoad();

function onLoad() {
    loadBagItemObjects();
    displayBagItems();
    displayBagInfo();
}

function loadBagItemObjects() {
    bagItemObjects = bagItems.map(itemId => {
        for(let i = 0; i < items.length; i++) {
            if(itemId == items[i].id) {
                return items[i];
            }
        }
    });
    console.log(bagItemObjects);
}


function displayBagItems() {
    let containerElement = document.querySelector('.itemselectedimg');
    containerElement.innerHTML = ''; 
    bagItemObjects.forEach(bagItem => {
        let itemBox = document.createElement('div');
        itemBox.classList.add('simpleimage');
        itemBox.innerHTML = `<img src="${bagItem.item_image}" alt="Sneaker Image">`;
        containerElement.appendChild(itemBox);
    });
    console.log(containerElement);
}


function displayBagInfo() {
    let containerInfo = document.querySelector('.itemselectedinfo'); 
    containerInfo.innerHTML = ''; 

    bagItemObjects.forEach(bagInfo => {
        let itemBox = document.createElement('div');
        // itemBox.classList.add('itemtext');
        itemBox.innerHTML = `
            <div  class= "itemtext">
                <span><i>${bagInfo.item_text}</i></span> <!-- Displaying item name -->
                <p>Total Price</p>
                <p>${bagInfo.item_prize}</p>
                <button class="placeorder">Place order</button>
            </div>
        `;
        console.log(itemBox);
        containerInfo.appendChild(itemBox);
    });
}
