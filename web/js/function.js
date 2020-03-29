$(document).ready(function(){
    $("#next_btn").click(function(){
        var number_of_pairs = $("#txt_np").val();
        if($.isNumeric(number_of_pairs))
        {
            $("#content").empty();
            $("#content").append("<h4> Paris to Calculate :"+number_of_pairs+ "</h4><br>");
            for(var i=0;i<number_of_pairs;i++)
            {
                $("#t_body").append("<tr><td><input type='text' id='p"+i+"'></td><td><input type='text' id='q"+i+"'></td></tr>");
            }
            document.getElementById("content_table").removeAttribute("hidden");
        }
        else{
            alert("please enter number");
        }
    });
});