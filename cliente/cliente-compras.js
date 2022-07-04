const purchaseContent = document.getElementsByClassName('purchase__content')
    purchaseHeader = document.querySelectorAll('.purchase__header')

function togglePurchase(){
    let itemClass = this.parentNode.className

    for(i = 0; i < purchaseContent.length; i++){
        purchaseContent[i].className = 'purchase__content purchase__close'
    }
    if(itemClass === 'purchase__content purchase__close'){
        this.parentNode.className = 'purchase__content purchase__open'
    }
}

purchaseHeader.forEach((el) => {
    el.addEventListener('click', togglePurchase)
})

