$(document).ready(function() {
    $('button[type=submit]').click(function() {
        drawTable();
        return false;
    });

});

    function drawTable(){
        $('form').hide();               //hide HTML forms
        $('.table-table').show();       // Display table

        var q1 = $(".first input[type='text'][id='first']").val();
        $('.raw1 .result1').text(q1);

        var q2 = $(".last input[type='text'][id='last']").val();
        $('.raw2 .result2').text(q2);

        var q3 = $(".email input[type='email'][name='email']").val();
        $('.raw3 .result3').text(q3);

        var q4 = $(".dropdown [name='drop']:selected").val();
        $('.raw4 .result4').text(q4);

        var q5 = $(".radio input[type='radio'][name='contact-preference']:checked").val();
        $('.raw5 .result5').text(q5);

        var q6Check = $(".checkbox :checkbox[name='additional']:checked");
        var list = "";
        for (var i = 0; i < q6Check.length; i++){
            list  += q6Check[i].value + ', '
        };
        list = list.replace(/, $/, '');
        $('.raw6 .result6').text(list);

}

