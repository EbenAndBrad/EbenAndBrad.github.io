console.log("\u2593\u2593\u2593  \u2593\u2593\u2593   \u2593\u2593\u2593  \u2593\u2593\u2593\u2593");
console.log("\u2593  \u2593 \u2593  \u2593 \u2593   \u2593 \u2593   \u2593");
console.log("\u2593\u2593\u2593  \u2593\u2593\u2593  \u2593\u2593\u2593\u2593\u2593 \u2593   \u2593")
console.log("\u2593  \u2593 \u2593  \u2593 \u2593   \u2593 \u2593   \u2593");
console.log("\u2593\u2593\u2593  \u2593  \u2593 \u2593   \u2593 \u2593\u2593\u2593\u2593");

document.getElementById("button").addEventListener("mousedown", function() {
	var dna = document.getElementById("dna").value;
	var mrna = '';
	var trna = '';
	
	//mRNA
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
	
	//tRNA
	for(i = 0; i < mrna.length; i++) {
		var a = mrna.substring(i, i+1);
		if(a === 'a') {
			trna += 'u';
		}else if(a === 't') {
			trna += 'a';
		}else if(a === 'c') {
			trna += 'g';
		}else if(a === 'g') {
			trna += 'c';
		}else if(a === 'u') {
			trna += 'a';
		}
	}
	document.getElementById("trna").value = trna;
});