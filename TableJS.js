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

        var q2Text = $(".last input[type='text'][id='last']").val();
        $('.raw2 .result2').text(q2Text);

        var q3Text = $(".email input[type='email'][name='email']").val();
        $('.raw3 .result3').text(q3Text);

        var q4Drop = $(".dropdown [name='drop']:selected").val();
        $('.raw4 .result4').text(q4Drop);

        var q5Rad = $(".radio input[type='radio'][name='contact-preference']:checked").val();
        $('.raw5 .result5').text(q5Rad);

        var q6Check = $(".checkbox :checkbox[name='additional']:checked");
        var list = "";
        for (var i = 0; i < q6Check.length; i++){
            list  += q6Check[i].value + ', '
        };
        list = list.replace(/, $/, '');
        $('.raw6 .result6').text(list);

}


