

var s = '<tr><td class="inside-left"><b>IS ANYONE ELSE LOST OR JUST ME?!</b> <br /><h1>by Cameron Diaz on Wed Jan 03, 2017 5:39pm</h1></td><td class="inside-right"><h1>25</h1></td><td class="inside-right"><h1>1343</h1></td><td class="inside-right"><h1>By Reenee K.</h1><h1>on Sat Feb 19, 2017 6:51pm</h1></td></tr>'
function addNewTopic() {
    //alert("CLICKED ME");
    var input = document.getElementById('inputForm');
    //alert(input);
    var form = '<br><form id="topicSubmit"> Topic Name:<br><input type="text" name="Topic Name" id="topicText" ><input type="button" value="Submit" onclick="submitTopic()"></form><br>';
    //alert(form);
    input.insertAdjacentHTML('afterbegin', form);
    //alert("CLICKED ME");

    //var table = document.getElementById('topicsTable');
    //table.insertAdjacentHTML('beforeend', s);
}
function submitTopic() {
    //alert("Submit clicked!");
    var topic_name = document.getElementById("topicText").value;
    //alert(topic_name);
    var newCell = '<tr><td class="inside-left"><b>'+topic_name+'</b> <br /><h1>by Cameron Diaz on Wed Jan 03, 2017 5:39pm</h1></td><td class="inside-right"><h1>25</h1></td><td class="inside-right"><h1>1343</h1></td><td class="inside-right"><h1>By Reenee K.</h1><h1>on Sat Feb 19, 2017 6:51pm</h1></td></tr>'
    var table = document.getElementById('topicsTable');
    table.insertAdjacentHTML('beforeend', newCell);
}



