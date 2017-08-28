
   // function onSubmit(){
    //     return false;
      //   debugger;
        // event.preventDefault();
         //alert(1);
         //drawTable();
     //}
$(document).ready(function() {
    $('button[type=submit]').click(function() {
        drawTable();
        return false;
    });
});


    function drawTable(){

     $('.table-table').show();

        
    }


