const textElement = document.querySelector('.text');
const logoElement = document.querySelector('.logo');

const link1Element = document.querySelector('.link-1');
const link2Element = document.querySelector('.link-2');
const link3Element = document.querySelector('.link-3');

const card1 = document.querySelector('.card-1');
const card2 = document.querySelector('.card-2');
const card3 = document.querySelector('.card-3');

const product1 = document.querySelector('.product-1');
const product2 = document.querySelector('.product-2');
const product3 = document.querySelector('.product-3');
const product4 = document.querySelector('.product-4');
const product5 = document.querySelector('.product-5');
const products = [product1, product2, product3, product4, product5]

product1.classList.add("hidden")
product2.classList.add("hidden")
product3.classList.add("hidden")
product4.classList.add("hidden")
product5.classList.add("hidden")

logoElement.style.animation = 'logo 1s ease-in-out forwards';

function lockScroll() {
    document.body.classList.add('no-scroll');
}

function unlockScroll() {
    document.body.classList.remove('no-scroll');
}

// lockScroll()

const delay = async (ms) => await new Promise(resolve => setTimeout(resolve, ms));

logoElement.addEventListener('animationend', () => {
  textElement.style.animation = 'text 1.5s ease forwards';

    textElement.addEventListener('animationend', () => {
        link1Element.style.opacity = 1;
        link1Element.style.animation = 'link 0.7s ease forwards';

        link1Element.addEventListener('animationend', () => {
            link2Element.style.opacity = 1;
            link2Element.style.animation = 'link 0.7s ease forwards';

            link2Element.addEventListener('animationend', () => {
                link3Element.style.opacity = 1;
                link3Element.style.animation = 'link 0.7s ease forwards';

                link3Element.addEventListener('animationend', () => {
                    link1Element.style.animation = '';
                    link2Element.style.animation = '';
                    link3Element.style.animation = '';
                    
                    product1.classList.remove("hidden")
                    product2.classList.remove("hidden")
                    product3.classList.remove("hidden")
                    product4.classList.remove("hidden")
                    product5.classList.remove("hidden")

                    product1.style.animation = 'product 1s ease 0ms';
                    product2.style.animation = 'product 1s ease 100ms';
                    product3.style.animation = 'product 1s ease 200ms';
                    product4.style.animation = 'product 1s ease 300ms';
                    product5.style.animation = 'product 1s ease 300ms';

                    product1.addEventListener('animationend', () => {
                        product1.classList.add('visible');
                    })

                    product2.addEventListener('animationend', () => {
                        product2.classList.add('visible');
                    })

                    product3.addEventListener('animationend', () => {
                        product3.classList.add('visible');
                    })

                    product4.addEventListener('animationend', () => {
                        product4.classList.add('visible');
                    })

                    product5.addEventListener('animationend', () => {
                        product1.style.animation = '';
                        product2.style.animation = '';
                        product3.style.animation = '';
                        product4.style.animation = '';
                        product5.style.animation = '';
                        product5.classList.add('visible');
                    })

                });
            });
        });
    });
});

products.forEach(product => {
    product.addEventListener('mouseenter', () => {
        product.style.opacity = 1
    });

    product.addEventListener('mouseleave', () => {
        product.style.opacity = 0.5
    });
});