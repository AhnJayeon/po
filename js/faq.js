var question = document.querySelectorAll('#question');

for(var i=0; i < question.length; i++){
    question[i].addEventListener('click', function(){
        for(var x=0; x < question.length; x++){
            question[x].classList.remove('active');
        }
        this.classList.add('active');
})
}
