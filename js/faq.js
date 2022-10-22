let questionBtns = document.querySelectorAll('.question-item-question > span:nth-child(1)') ;
let questionContent = document.querySelectorAll(".question-item-content");
console.log(questionBtns);
questionBtns.forEach(function(questionBtn,index){
    questionBtn.onclick = function(){
        // questionContent[index].css.display = 'block';
        console.log(index);
        console.log(questionContent[index]);
        questionContent[index].classList.toggle('active');
    }
})
