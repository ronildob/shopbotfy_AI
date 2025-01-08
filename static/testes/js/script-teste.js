'use strict';
const accordion = document.querySelectorAll('.accordion h3');
let mainParent;
let height;
let answer;
accordion.forEach(item => {
    item.addEventListener('click', () => {
        height = item.parentElement.nextElementSibling.firstElementChild.offsetHeight;
        answer = item.parentElement.nextElementSibling;
        mainParent = item.parentElement.parentElement;
        if (mainParent.classList.contains('active')) {
            mainParent.classList.remove('active');
            answer.style.height = `0px`;
            item.style.backgroundColor = "#505050";
            item.style.borderRadius = '15px';
            answer.style.backgroundColor = "#505050";
            answer.style.borderRadius = '0px 0px 15px 15px';
        } else {
            mainParent.classList.add('active');
            answer.style.height = `${height}px`;
            item.style.backgroundColor = "#464646";
            item.style.borderRadius = '15px 15px 0px 0px';
        }
    }
    );
}
);
