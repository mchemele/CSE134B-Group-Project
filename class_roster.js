var rIndex, table = document.getElementById("table");

        $(document).ready(function() {
		  $('.menu').click(function() {
		    $('ul').toggleClass('active');	
		  })
        });

        function addRow() {
        	var aID = document.getElementById('aID').value;
        	var aName = document.getElementById('aName').value;
        	var aGrade = document.getElementById('aGrade').value;
        	var aEmail = document.getElementById('aEmail').value;
        	var aParent = document.getElementById('aParent').value;

        	var table = document.getElementsByTagName('table')[0];

        	if (aID=="" || aName=="" || aGrade=="" || aEmail=="" || aParent=="") {
              alert("Please Fill All Required Fields");
              return false;
            }

        	var newRow = table.insertRow(table.rows.length);

        	var cell1 = newRow.insertCell(0);
        	var cell2 = newRow.insertCell(1);
        	var cell3 = newRow.insertCell(2);
        	var cell4 = newRow.insertCell(3);
        	var cell5 = newRow.insertCell(4);

        	cell1.innerHTML = aID;
        	cell2.innerHTML = aName;
        	cell3.innerHTML = aGrade;
        	cell4.innerHTML = aEmail;
        	cell5.innerHTML = aParent;

        	selectedRowToInput();
        }

        function selectedRowToInput() {
        	for(var i = 1; i < table.rows.length; i++) {
        		table.rows[i].onclick = function() {
        			rIndex = this.rowIndex;
        			document.getElementById("aID").value = this.cells[0].innerHTML;
        			document.getElementById("aName").value = this.cells[1].innerHTML;
        			document.getElementById("aGrade").value = this.cells[2].innerHTML;
        			document.getElementById("aEmail").value = this.cells[3].innerHTML;
        			document.getElementById("aParent").value = this.cells[4].innerHTML;
        		};
        	}
        }
        selectedRowToInput();

        function editHtmlTableSelectedRow() {
        	var aID = document.getElementById("aID").value;
        	var aName = document.getElementById("aName").value;
        	var aGrade = document.getElementById("aGrade").value;
        	var aEmail = document.getElementById("aEmail").value;
        	var aParent = document.getElementById("aParent").value;

        	table.rows[rIndex].cells[0].innerHTML = aID;
        	table.rows[rIndex].cells[1].innerHTML = aName;
        	table.rows[rIndex].cells[2].innerHTML = aGrade;
        	table.rows[rIndex].cells[3].innerHTML = aEmail;
        	table.rows[rIndex].cells[4].innerHTML = aParent;
        }

        function removeSelectedRow() {
        	table.deleteRow(rIndex);
        }