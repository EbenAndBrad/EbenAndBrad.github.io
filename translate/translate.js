console.log("\u2593\u2593\u2593  \u2593\u2593\u2593   \u2593\u2593\u2593  \u2593\u2593\u2593\u2593");
console.log("\u2593  \u2593 \u2593  \u2593 \u2593   \u2593 \u2593   \u2593");
console.log("\u2593\u2593\u2593  \u2593\u2593\u2593  \u2593\u2593\u2593\u2593\u2593 \u2593   \u2593")
console.log("\u2593  \u2593 \u2593  \u2593 \u2593   \u2593 \u2593   \u2593");
console.log("\u2593\u2593\u2593  \u2593  \u2593 \u2593   \u2593 \u2593\u2593\u2593\u2593");

document.getElementById("button").addEventListener("mousedown", function() {
	var dna = document.getElementById("dna").value;
	var mrna = '';
	for(i = 0; i < dna.length; i++) {
		var a = dna.substring(i, i+1);
		if(a === 'a') {
			mrna += 'u';
		}else if(a === 't') {
			mrna += 'a';
		}else if(a === 'c') {
			mrna += 'g';
		}else if(a === 'g') {
			mrna += 'c';
		}
	}
	document.getElementById("mrna").value = mrna;
});