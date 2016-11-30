console.log("\u2593\u2593\u2593  \u2593\u2593\u2593   \u2593\u2593\u2593  \u2593\u2593\u2593\u2593");
console.log("\u2593  \u2593 \u2593  \u2593 \u2593   \u2593 \u2593   \u2593");
console.log("\u2593\u2593\u2593  \u2593\u2593\u2593  \u2593\u2593\u2593\u2593\u2593 \u2593   \u2593")
console.log("\u2593  \u2593 \u2593  \u2593 \u2593   \u2593 \u2593   \u2593");
console.log("\u2593\u2593\u2593  \u2593  \u2593 \u2593   \u2593 \u2593\u2593\u2593\u2593");
	
document.getElementById("button").addEventListener("mousedown", function() {
	var dna = document.getElementById("dna").value;
	var mrna = '';
	var trna = '';
	var codon = '';
	var comp = '';
	
	
	//Compliment
	for(i = 0; i < dna.length; i++) {
		var a = dna.substring(i, i+1);
		if(a === 'a') {
			comp += 't';
		}else if(a === 't') {
			comp += 'a';
		}else if(a === 'c') {
			comp += 'g';
		}else if(a === 'g') {
			comp += 'c';
		}
	}
	document.getElementById("comp").value = comp;
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
	if(trna.length%3 === 0) {
		for(i = 0; i < trna.length/3; i++) {
			var s = trna.substring(i*3, (i*3)+3);
			if((i+1)*3 !== trna.length) {
				s += "|"
			}
			codon += s;
		}
		document.getElementById('hidden').style.display = "block";
		document.getElementById('text').innerHTML = codon;
	}
});