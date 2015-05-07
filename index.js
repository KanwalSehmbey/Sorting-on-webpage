
    customers.sort(columnsAscSorting("revenue"));
    displayData();
    
    /* This code will sort the headers being clicked in acending or desceding order */ 
    for(var headerX=0; headerX<document.getElementsByTagName("th").length; headerX++)
    {
        document.getElementsByTagName("th").item(headerX).onclick = function(action)
        {
            var classname = action.target.className;
            for(var headerY=0; headerY<document.getElementsByTagName("th").length; headerY++)
            {
                document.getElementsByTagName("th").item(headerY).setAttribute('class','');
            }
            if( classname === '' || classname === 'desc')
            {
                document.getElementById(action.target.id).className = 'asc';
                customers.sort(columnsAscSorting(action.target.id));
            }
            else
            {
                customers.sort(columnsDescSorting(action.target.id));
                document.getElementById(action.target.id).className = 'desc';
            }
            
            document.getElementsByTagName("tbody").item(0).innerHTML='';
            displayData();
        };
    }
    var selectIndustry = document.getElementById("industrySel");
    selectIndustry.onchange = function() 
            {
                for (var industryData = 0; industryData < document.getElementsByTagName("th").length; industryData++) 
                {
                    document.getElementsByTagName("th").item(industryData).setAttribute('class', '');
                }
        document.getElementsByTagName("tbody").item(0).innerHTML='';
        displayData();
    };
    /* This code will fill the drop down with available industries values */
    for(var list=0; list<industries.length; list++)
    {
        var industryList = document.createElement("option");
        var industryListData = document.createTextNode(industries[list]);
        industryList.appendChild(industryListData);
        industryList.setAttribute("id",industries[list]);
        document.getElementById("industrySel").appendChild(industryList);
    }

/* This columnsAscSorting function will sort the data in Ascending Order */  
function columnsAscSorting(colName) 
{
    return function(attr1, attr2) 
    {
            if (attr1[colName] < attr2[colName]) 
            {
                return -1;
            } 
            else if (attr1[colName] > attr2[colName]) 
            {
                return 1;
            } 
            else 
            {
                return 0;
            }
        };
}
 /* This columnsDescSorting function will sort the data in Descending Order */  
function columnsDescSorting(colName) 
{
        return function(attr1, attr2) 
        {
          if (attr1[colName] > attr2[colName]) 
          {
              return -1;
          } 
          else if (attr1[colName] < attr2[colName]) 
          {
              return 1;
          } 
          else 
          {
              return 0;
          }
      };  
    }
/* This displayData funciton will display the table from customers array */ 
function displayData()
{
    var tbdy = document.getElementsByTagName("tbody");
    var industrySelection = document.getElementById("industrySel");
    var industrySelText = industrySelection.options[industrySelection.selectedIndex].text;
            
    for (var k = 0; k < customers.length; k++) 
    {
        var customer = customers[k];
        if(industrySelText == 'All' || industrySelText == customer.industry)
        {
            var tableRow = document.createElement("tr");
            var td = document.createElement("td");
            var txtNode = document.createTextNode(customer.name);
            td.appendChild(txtNode);
            tableRow.appendChild(td);
            td = document.createElement("td");
            txtNode = document.createTextNode(customer.industry);
            td.appendChild(txtNode);
            tableRow.appendChild(td);
            td = document.createElement("td");
            txtNode = document.createTextNode(customer.state);
            td.appendChild(txtNode);
            tableRow.appendChild(td);
            td = document.createElement("td");
            txtNode = document.createTextNode(customer.revenue);
            td.appendChild(txtNode);
            tableRow.appendChild(td);
            tbdy.item(0).appendChild(tableRow);
        }
    }
}

