const textElement = document.querySelector('.text');
const logoElement = document.querySelector('.logo');

const link1Element = document.querySelector('.link-1');
const link2Element = document.querySelector('.link-2');
const link3Element = document.querySelector('.link-3');

logoElement.style.animation = 'logo 1s ease-in-out forwards';

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
                });
            });
        });
    });
});