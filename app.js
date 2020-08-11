function check(){
    var score=0;
    var q1_answer1=document.getElementById('q1a1');
    var q1_answer2=document.getElementById('q1a2');
    var q1_answer3=document.getElementById('q1a3');
    var q1_answer4=document.getElementById('q1a4');

    if (q1_answer3.checked == true){
        score++
        alert('Q1 answer right')
    }

    else{
        alert('Q1 answer wrong')
    }



    var q2_answer1=document.getElementById('q2a1');
    var q2_answer2=document.getElementById('q2a2');
    var q2_answer3=document.getElementById('q2a3');
    var q2_answer4=document.getElementById('q2a4');

    if (q2_answer2.checked == true){
        score++
        alert('Q2 answer right')
    }

    else{
        alert('Q2 answer wrong')
    }


    var q3_answer1=document.getElementById('q3a1');
    var q3_answer2=document.getElementById('q3a2');
    var q3_answer3=document.getElementById('q3a3');
    var q3_answer4=document.getElementById('q3a4');

    if (q3_answer3.checked == true){
        score++
        alert('Q3 answer right')
    }

    else{
        alert('Q3 answer wrong')
    }
alert("YOUR SCORE IS  "+ score++ + "/3")
}
