
// Create table then append to targetDiv, data response from blockspring
function createTable (targetDiv, data) {
	// Check table is exist
	var tbl = targetDiv.querySelector('#list');
	if (data.length > 0) {

		if (tbl) {
			targetDiv.removeChild(tbl);
		}

		tbl = document.createElement('table');
		tbl.setAttribute('id', 'list');
	    tbl.setAttribute('class', 'table table-responsive');

	    var thead = document.createElement('thead');
	    var tr = document.createElement('tr');
	    tr.setAttribute('class', 'success');
	    var keys = Object.keys(data[0]);
	    for (var i = 0; i < keys.length; i++) {
	    	var th = document.createElement('th');
	    	th.appendChild(document.createTextNode(keys[i]));
	    	tr.appendChild(th);
	    }
	    thead.appendChild(tr);
	    var tbdy = document.createElement('tbody');
	    for (var i = 0; i < data.length; i++) {
	    	var trbd = document.createElement('tr');
	    	for (var j = 0; j < keys.length; j++) {
		    	var td = document.createElement('td');
		    	td.appendChild(document.createTextNode(data[i][keys[j]]));
		    	trbd.appendChild(td);
		    }
		    tbdy.appendChild(trbd);
	    }
	    tbl.appendChild(thead);
        tbl.appendChild(tbdy);

        targetDiv.appendChild(tbl);
	} else {
		console.log('data input is null');
	}
}