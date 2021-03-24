var buttonAdd = document.getElementById('btn-add');
var inputMessage = document.getElementById('add-message');
var buttonTrash = document.getElementsByClassName('trash');

buttonAdd.addEventListener('click', function(){
    var row = document.createElement('div');
    row.classList.add('row');

    var img = document.createElement('img');
    img.setAttribute('src', 'avatar-2.jpg');
    img.classList.add('avatar');
    row.appendChild(img);

    var wrapper = document.createElement('div');
    var title = document.createElement('h6');
    title.textContent = 'Bouchra';
    wrapper.appendChild(title);

    var p = document.createElement('p');
    p.textContent = inputMessage.value;
    wrapper.appendChild(p);

    row.appendChild(wrapper);

    var imgTrash = document.createElement('img');
    imgTrash.setAttribute('src', 'trash.png');
    imgTrash.classList.add('trash');
    row.appendChild(imgTrash);

    document.body.appendChild(row);

    inputMessage.value = '';

    // mise à jour du compteur
    majCompteurMsg('add');

    // ajout event listener click sur l'element que je viens de créer
    removeBloc();

});

removeBloc();
majCompteurMsg();

function removeBloc() {
    for(var i=0; i<buttonTrash.length; i++) {
        buttonTrash[i].addEventListener('click', function(){
            this.parentNode.remove();

            // mise à jour du compteur
            majCompteurMsg('remove');
        });
    }
}

function majCompteurMsg(param) {
    var count = document.getElementById('count');
    if(param == 'add') {
        count.textContent = parseInt(count.textContent) + 1;
    }
    else if(param == 'remove') {
        count.textContent = parseInt(count.textContent) - 1;
    }
    else {
        count.textContent = document.getElementsByClassName('row').length - 2; // - 2 car il y a 2 div au début qu'il ne faut pas compté
    }
}