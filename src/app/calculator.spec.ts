
import { Calculator } from './calculator';
describe('Test for calculator', ()=>{
  let calculator;
  beforeEach(()=>{
    calculator = new Calculator();
  });
    describe('Test for multiplicacion',()=>{
      it("debe retornar nueve",()=>{
        //arranque
        //ACTUAR
        let result= calculator.multiplicacion(3,3);
        //ASSERRT
        expect(result).toEqual(9);

      });
    });

    describe('Test for resta',()=>{
        it("debe retornar tres",()=>{
        // arranque
          
          //ACTUAR
          let result= calculator.resta(6,2);
          //ASSERRT
          expect(result).toEqual(4);
        });
    });
    

    describe('Test for marchrs',()=>{
    it("test of machers",()=>{
      let name ='nicolas'
      let name2;

      expect(name).toBeDefined();
      expect(name2).toBeUndefined();
    // verdadero falso
      expect(1+2==3).toBeTruthy();
      expect(1+1==3).toBeFalsy();
      // mayor y menor
      expect(5).toBeLessThan(10);
      expect(20).toBeGreaterThan(10);
      //
      expect('12345').toMatch(/123/);
    }); 
    });

});
