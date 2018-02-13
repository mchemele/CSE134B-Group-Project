var rIndex, table = document.getElementById("table");
        
        $(document).ready(function() {
          $('.menu').click(function() {
            $('ul').toggleClass('active');  
          })
        });

         function addRow() {
            var aConcept = document.getElementById('aConcept').value;
            var aWorksheet = document.getElementById('aWorksheet').value;

            var table = document.getElementsByTagName('table')[0];

            if (aConcept=="" || aWorksheet=="") {
              alert("Please Fill All Required Fields");
              return false;
            }

            var newRow = table.insertRow(1);

            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);

            cell1.innerHTML = aWorksheet;
            cell2.innerHTML = aConcept;

            selectedRowToInput();
        }

        function selectedRowToInput() {
            for(var i = 1; i < table.rows.length; i++) {
                table.rows[i].onclick = function() {
                    rIndex = this.rowIndex;
                    document.getElementById("aConcept").value = this.cells[0].innerHTML;
                    document.getElementById("aWorksheet").value = this.cells[1].innerHTML;
                };
            }
        }
        selectedRowToInput();

        function editHtmlTableSelectedRow() {
            var aConcept = document.getElementById("aConcept").value;
            var aWorksheet = document.getElementById("aWorksheet").value;

            table.rows[rIndex].cells[0].innerHTML = aConcept;
            table.rows[rIndex].cells[1].innerHTML = aWorksheet;
        }

        function removeSelectedRow() {
            table.deleteRow(rIndex);
        }