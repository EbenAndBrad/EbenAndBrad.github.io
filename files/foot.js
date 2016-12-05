var body = document.getElementsByTagName("body")[0];

var div = document.createElement("div");
var h3_1 = document.createElement("h3");
var h3_2 = document.createElement("h3");
var seperator = document.createElement("seperator");
div.id = "footer";
h3_1.innerHTML = "Brad Culwell";
h3_2.innerHTML = "2016";
div.appendChild(h3_1);
div.appendChild(seperator);
div.appendChild(h3_2);
document.body.appendChild(div);
/*
<div id="footer">
      <h3>Brad Culwell</h3><seperator></seperator>
      <h3>2016</h3>
    </div>
*/
