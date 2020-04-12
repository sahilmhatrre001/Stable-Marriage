
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
        $("#content").append(" <div class='alert alert-info'><b>Drag and Drop names to set priorities</b></div>");
        for(var i=0;i<number_of_pairs;i++)
        {
            var append_row_boy = '<tr><td class ="tl" id="boy'+i+'">'+boy_map[i]+'</td>';
            var append_row_girl = '<tr><td class ="tl" id="girl'+i+'">'+girl_map[i]+'</td>';
            for(var j=0;j<number_of_pairs;j++)
            {
                append_row_boy += '<td id="g_b'+i+''+j+'" draggable = "true" ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)">'+girl_map[j]+'</td>';
                append_row_girl += '<td id="b_g'+i+''+j+'"  draggable = "true" ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)">'+boy_map[j]+'</td>';
            }  
            append_row_boy += '</tr>';
            append_row_girl += '</tr>';
            $("#t_body_boy").append(append_row_boy);
            $("#t_body_girl").append(append_row_girl);
        }
        document.getElementById("priority_table").removeAttribute("hidden");
    });

    $("#ok_btn2").click(function(){
        $("#content").empty();
        $("#priority_table").empty();
        $("#content").append("<h4> Result </h4><br>");
    });
});


function allowDrop(ev) {
    ev.preventDefault();
  }

function drag(ev)
{
    console.log("drag" + ev);
    ev.dataTransfer.setData("text",ev.target.id);
}

function drop(ev)
{
    console.log("drop" + ev);
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var id_1 = document.getElementById(data).id.substr(0,4);
    var id_2 = ev.target.id.substr(0,4);
    if(id_1 == id_2)
    {
        var data_preserve = document.getElementById(data).textContent;
        document.getElementById(data).textContent = ev.target.textContent;
        ev.target.textContent = data_preserve; 
    }
    // ev.target.appendChild(document.getElementById(data).textContent);
}