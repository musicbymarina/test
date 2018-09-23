window.Calculator = {
	currentVal: 0,
	afterEachExample: 0,
	
	add: function(num1){
		this.currentVal += num1;
		return this.currentVal;
	},
	
	addAny: function(arguments){
		const sum = this.currentVal;
		for(let argument in arguments) {
			sum += argument;
		}
		this.currentVal = sum;
		return this.currentVal;
	}
};