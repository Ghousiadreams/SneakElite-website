
let bagItems;
onLoad();

function onLoad(){
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayHomePage();
    displayBagIcon();
}




function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon(){
    let bagItemCount = document.querySelector(".bag-item-count");
    if(bagItems.length > 0) {
        bagItemCount.style.visibility = 'visible';
        bagItemCount.innerText = bagItems.length;
    } else {
        bagItemCount.style.visibility = 'hidden';
    }
    
}

function displayHomePage() {
    
    let itemsContainerElement = document.querySelector('.collections');
    if(!itemsContainerElement) {
        return;
    }
        let innerHTML = '';
        items.forEach(item => {
            innerHTML += `
                        <div class="card" id = "card-${item.id}">
                            <div class="image">
                                <img src="${item.item_image}" alt="Sneaker Image" class="img-product">
                            </div>
                            <div class="text">
                                <span>${item.item_text}</span>
                                <p>$${item.item_prize}</p>
                            </div>
                            <button class="addtocart" onclick="addToBag(${item.id})">
                                ADD TO CART 
                            </button>
                        </div> `
    });
        itemsContainerElement.innerHTML = innerHTML;
    }

