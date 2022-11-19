class Calculator{
    basic_operar(num1, num2, operador){
        this.solucion = (num1+operador+num2);
        this.numPantalla = eval(this.solucion);
        return this.numPantalla;
    }


    
}

 