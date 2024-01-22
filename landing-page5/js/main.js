"use strict";

function tagManager(category, action, label){
    var addDataLayer = window.dataLayer || [];
    
    addDataLayer.push({
      'event': 'event',
      'eventCategory': category,
      'eventAction': action,
      'eventLabel': label
    })
  }

function handleRedirect(idName) {
    const elemento = document.getElementById(idName);
    if (elemento) {
        // Rola até o elemento desejado
        elemento.scrollIntoView({ behavior: 'smooth' }); // A opção 'smooth' faz a rolagem ser suave
    }
}

const nameF = document.getElementById('name-field');
const email = document.getElementById('email-field');
const phone = document.getElementById('international_PhoneNumber_countrycode');
const companyName = document.getElementById('company-name-field');
const agree = document.getElementById('Checkbox_1');
const form = document.getElementById('form');
// Adicionando um evento de envio ao formulário
if (form) {
    form.addEventListener('submit', function(event) {
        // Previnindo o comportamento padrão de envio do formulário
        event.preventDefault();

        var regexCharacter = /[!@#$%^&*()_+\=\[\]{};:"\\|,.<>\/?0-9]/;
        var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Seu código para lidar com os dados do formulário aqui
        // Por exemplo, você pode acessar os valores dos inputs assim:
        
        if (
            !!nameF.value === false ||
            !!email.value === false ||
            !!phone.value === false ||
            !!companyName.value === false
        ){

            if(!!nameF.value === false) document.getElementById('name-field').parentNode.classList.add('invalid');            
            if(!!email.value === false) document.getElementById('email-field').parentNode.classList.add('invalid');            
            if(!!phone.value === false) document.getElementById('international_PhoneNumber_countrycode').parentNode.classList.add('invalid');        
            if(!!companyName.value === false) document.getElementById('company-name-field').parentNode.classList.add('invalid');

            alert('Digite todos os campos obrigatórios');
            return false;
        }  
        
        if (!!agree.checked === false) {
            if(!!agree.checked === false) document.getElementById('Checkbox_1').parentNode.parentNode.classList.add('invalid');
            alert('Concorde com os termos de comunicação');
            return;
        }
        
        if (regexCharacter.test(nameF.value)) {
            document.getElementById('name-field').parentNode.classList.add('invalid');
            alert('Digite um nome válido');
            return false;
        }

        if (phone.value.length < 16) {
            document.getElementById('international_PhoneNumber_countrycode').parentNode.classList.add('invalid');
            alert('Digite um celular válido');
            return false;
        }
        
        if (!regexEmail.test(email.value)) {
            document.getElementById('email-field').parentNode.classList.add('invalid');
            alert('Digite um email válido');
            return false;
        }

        //generate lead
        const controller = sessionStorage.getItem('generatelead');
        if(controller) {
            const addDataLayer = window.dataLayer || [];
            addDataLayer.push({
                'event': 'event',
                'eventCategory': 'lp:12-2023',
                'eventAction': 'generate_lead',
                'eventLabel': 'form:agende-uma-conversa:falar-com-um-especialista'
            })
            sessionStorage.removeItem('generatelead');
        }
        
        form.submit();

    });
}

if (nameF && email && phone && companyName) {
    nameF.addEventListener('click', function(event) { document.getElementById('name-field').parentNode.classList.remove('invalid'); });
    nameF.addEventListener('focus', function(event) { document.getElementById('name-field').parentNode.classList.remove('invalid'); });
    email.addEventListener('click', function(event) { document.getElementById('email-field').parentNode.classList.remove('invalid'); });
    email.addEventListener('focus', function(event) { document.getElementById('email-field').parentNode.classList.remove('invalid'); });
    phone.addEventListener('click', function(event) { document.getElementById('international_PhoneNumber_countrycode').parentNode.classList.remove('invalid'); });
    phone.addEventListener('focus', function(event) { document.getElementById('international_PhoneNumber_countrycode').parentNode.classList.remove('invalid'); });
    companyName.addEventListener('click', function(event) { document.getElementById('company-name-field').parentNode.classList.remove('invalid'); });
    companyName.addEventListener('focus', function(event) { document.getElementById('company-name-field').parentNode.classList.remove('invalid'); });
    agree.addEventListener('click', function(event) { document.getElementById('Checkbox_1').parentNode.parentNode.classList.remove('invalid'); });
    agree.addEventListener('focus', function(event) { document.getElementById('Checkbox_1').parentNode.parentNode.classList.remove('invalid'); });
}

const swiper = new Swiper('.swiper-testimonials', {
    // Optional parameters
    // direction: 'vertical',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: false,
    breakpoints: {
        // when window width is >= 640px
        1060: {
          slidesPerView: 3,
        }
    },
    // If we need pagination
    pagination: {
        el: '.pagination-testmonials',
        clickable: true
    },
    // Navigation arrows
    navigation: {
        nextEl: '.button-next-testmonials',
        prevEl: '.button-prev-testmonials',
    }
});

const swiperDiscover = new Swiper('.swiper-discover-3', {
    // Optional parameters
    // direction: 'vertical',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    autoHeight: false,
    // If we need pagination
    pagination: {
        el: '.pagination-discover-3',
        clickable: true
    },
});

const swiperHowItWorks = new Swiper('.swiper-howitworks', {
    // Optional parameters
    // direction: 'vertical',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    autoHeight: false,
    breakpoints: {
        1260: {
            spaceBetween: 20,
            slidesPerView: 2,
        }
    },
    // If we need pagination
    pagination: {
        el: '.pagination-howitworks',
        clickable: true
    },
    // Navigation arrows
    navigation: {
        nextEl: '.button-next-howitworks',
        prevEl: '.button-prev-howitworks',
    }
});

const element = document.getElementById('international_PhoneNumber_countrycode');
if (element) {
    const maskOptions = {
      mask: '(00) 0 0000-0000'
    };
    const mask = new IMask(element, maskOptions);
}

function setControllersStorage() {
    sessionStorage.setItem('generatelead', 'true');
}
setControllersStorage();