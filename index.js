const detailsContent = document.getElementsByClassName('details__content')
    detailsHeader = document.querySelectorAll('.details__header')

function toggleDetails(){
    let itemClass = this.parentNode.className

    for(i = 0; i < detailsContent.length; i++){
        detailsContent[i].className = 'details__content details__close'
    }
    if(itemClass === 'details__content details__close'){
        this.parentNode.className = 'details__content details__open'
    }
}

detailsHeader.forEach((el) => {
    el.addEventListener('click', toggleDetails)
})
