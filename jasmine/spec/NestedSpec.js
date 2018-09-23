describe("Nested", () => { 
   
   // Starting of first suite block  
   // First block    
	
   describe("Retaining values ",function (){
   
      //test case:1    
      it ("Should retain the current value of all time", function () { 
         expect(Nested.currentVal).toBeDefined();   
         expect(Nested.currentVal).toEqual(0);   
      });    
   }); //end of the suite block   

   //second suite block 
   describe("Adding single number ",function (){     
   
      //test case:2 
      it("should add numbers",function(){ 
         expect(Nested.add(5)).toEqual(5); 
         expect(Nested.add(5)).toEqual(10); 
      });         
   }); //end of the suite block  

   //third suite block 
   describe("Adding Different Numbers",function (){  
   
      //test case:3 
      it("Should add any number of numbers",function() {  
         expect(Nested.addAny(1,2,3)).toEqual(6);  
      });    
   }); //end of the suite block 

});