$(document).ready(function() {
		  $('.menu').click(function() {
		    $('ul').toggleClass('active');	
		  })
        });

        function addRow() {
        	var aDate = document.getElementById('aDate').value;
        	var aConcept = document.getElementById('aConcept').value;
        	var aFile = document.getElementById('aFile').value;

        	var table = document.getElementsByTagName('table')[0];

        	if (aDate=="" || aConcept=="" || aFile=="") {
              alert("Please Fill All Required Fields");
              return false;
            }

        	var newRow = table.insertRow(1);

        	var cell1 = newRow.insertCell(0);
        	var cell2 = newRow.insertCell(1);
        	var cell3 = newRow.insertCell(2);

        	cell1.innerHTML = aDate;
        	cell2.innerHTML = aConcept;
        	cell3.innerHTML = aFile;
        }

        function selectedRowToInput() {
            for(var i = 1; i < table.rows.length; i++) {
                table.rows[i].onclick = function() {
                    rIndex = this.rowIndex;
                    document.getElementById("aDate").value = this.cells[0].innerHTML;
                    document.getElementById("aConcept").value = this.cells[1].innerHTML;
                    document.getElementById("aFile").value = this.cells[2].innerHTML;
                };
            }
        }
        selectedRowToInput();

        function editHtmlTableSelectedRow() {
            var aDate = document.getElementById("aDate").value;
            var aConcept = document.getElementById("aConcept").value;
            var aFile = document.getElementById("aFile").value;

            table.rows[rIndex].cells[0].innerHTML = aDate;
            table.rows[rIndex].cells[1].innerHTML = aConcept;
            table.rows[rIndex].cells[2].innerHTML = aFile;
        }

        function removeSelectedRow() {
            table.deleteRow(rIndex);
        }