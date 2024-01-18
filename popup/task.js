document.addEventListener("DOMContentLoaded", function() {
    const subscribeModal = document.getElementById('subscribe-modal');
    const subscribeModalClose = subscribeModal.querySelector('.modal__close');
    function setCookie (name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
    }
    function getCookie (name) {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts
        .pop()
        .split(";")
        .shift();  
    }
    }
    subscribeModalClose.addEventListener('click', () => {
    subscribeModal.classList.remove('modal_active');  
    setCookie('showSubscribeModal', '0');
    })
    window.onload = function() {
    if (getCookie('showSubscribeModal') !== '0') {
        subscribeModal.classList.add('modal_active');
    }  
    }
})