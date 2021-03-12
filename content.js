function showMenu() {
    let footerMenues = document.getElementsByClassName('footer noselect');

    console.log(footerMenues);

    if(footerMenues.length > 0) {
        footerMenues[0].style.marginTop = '-55px';
        footerMenues[0].style.marginBottom = '60px';
    }
}

showMenu();