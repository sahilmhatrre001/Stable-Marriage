
var boy_map = {};
var girl_map = {};
var number_of_pairs;

$(document).ready(function(){
    $("#next_btn").click(function(){
        number_of_pairs = $("#txt_np").val();
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

    $("#ok_btn").click(function(){
        for(var i=0;i<number_of_pairs;i++)
        {
            boy_map[i] = $("#p"+i).val();
            girl_map[i] = $("#q"+i).val();
        }
        $("#content").empty();
        $("#content_table").empty();
        $("#content").append("<h4> Choose Priorities </h4><br>");
        for(var i=0;i<number_of_pairs;i++)
        {
            var append_row_boy = '<tr><td class ="table-success" id="boy'+i+'">'+boy_map[i]+'</td>';
            var append_row_girl = '<tr><td class ="table-info" id="girl'+i+'">'+girl_map[i]+'</td>';
            for(var j=0;j<number_of_pairs;j++)
            {
                append_row_boy += '<td id="g_b'+i+''+j+'">'+girl_map[j]+'</td>';
                append_row_girl += '<td id="b_g'+i+''+j+'">'+boy_map[j]+'</td>';
            }  
            append_row_boy += '</tr>';
            append_row_girl += '</tr>';
            $("#t_body_boy").append(append_row_boy);
            $("#t_body_girl").append(append_row_girl);
        }
        document.getElementById("priority_table").removeAttribute("hidden");
    });
});
