var counter = 1;

function addInput(divName, template) {
    if (counter == 10) {
        document.getElementById("add_more_text").remove();
    }

	else {
        var newdiv = document.createElement('div');
		
        newdiv.innerHTML = document.getElementById(divName).innerHTML;
        newdiv.className = 'added';

        document.getElementById(template).appendChild(newdiv);
        counter++;
    }
}

function removeInput(obj) {
    var userPreference;

	if (obj.parentNode.className == 'added',(confirm("Please select 'OK' to confirm OR select 'CANCEL'") == true)) {
        obj.parentNode.parentNode.removeChild(obj.parentNode);
        counter--;
    }
}