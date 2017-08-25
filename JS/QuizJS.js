
   // function onSubmit(){
    //     return false;
      //   debugger;
        // event.preventDefault();
         //alert(1);
         //drawTable();
     //}
$(document).ready(function() {
    $('input[type=submit]').click(function() {
        drawTable();
        return false;
    });
});


    function drawTable(){

     $('.table-table').show();

        var q1Rad=$(".radio input[type='radio'][name='contact-preference']:checked").val();
        $('.raw1 .result1').text(q1Rad);

        var q2Drop=$(".dropdown [name='dropD']:selected").val();
        $('.raw2 .result2').text(q2Drop);

        var q3Check=$(".check :checkbox[name='remember']:checked");
        var list = "";
        for (var i = 0; i < q3Check.length; i++){
            list  += q3Check[i].value + ', '
        };
        list = list.replace(/, $/, '');
        $('.raw3 .result3').text(list);

        var q4Text=$(".field input[type='text'][name='hedgehog']").val();
        $('.raw4 .result4').text(q4Text); 

        var q5Text=$(".field input[type='text'][name='salmonidae']").val();
        $('.raw5 .result5').text(q5Text); 

    }


