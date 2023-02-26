'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
//console.log(btnsOpenModal);

const openModal = function(){
    //sınıf listesini okumak istiyoruz sonra bu listeden remove motdu ile hidden i kaldırıyoruz
    modal.classList.remove('hidden'); //eğer istersek birden fazla classı kaldırabiliriz
    overlay.classList.remove('hidden'); //kaplamanın üzerindeki hiddenı kaldırıyoruz bu sayede arka blur oluyor
    //bir sayfada stilleri değiştirmeniz gerektiğinde onları bir sınıfa aktarın ve ardundan sınıfı kullanın
}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


for(let i =0;i<btnsOpenModal.length;i++)
    //console.log(btnsOpenModal[i].textContent);
    btnsOpenModal[i].addEventListener('click',openModal)

btnCloseModal.addEventListener('click',closeModal)

overlay.addEventListener('click',closeModal);

document.addEventListener('keydown',function(e){
    //console.log(e);

    if(e.key === 'Escape' && !modal.classList.contains('hidden'))
    {
        //console.log('Esc key pressed');
        //modal classlistesinde hidden içeriyorsa true dönecek yoksa false
        closeModal();
    }

})