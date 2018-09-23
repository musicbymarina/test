describe('calculator', () => {
	//test numero 1:
	it('Should retain the current value of all time', () =>{
		expect(Calculator.currentVal).toBeDefined();
		expect(Calculator.currentVal).toEqual(0);
	});
	
	//test 2:
	it('Should add numbers', () =>{
		expect(Calculator.add(5)).toEqual(5);
		expect(Calculator.add(5)).toEqual(10);
	});
	
	//test 3:
	it('Should add any number of numbers', () =>{
		expect(Calculator.addAny(1,2,3)).toEqual(6);
	});
});