class QuadraticEquation {
    a
    b
    c
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getA() { 
        return this.a; 
    }
    getB() { 
        return this.b; 
    }
    getC() { 
        return this.c; 
    }
    setA(a) { 
        this.a = a; 
    }
    setB(b) { 
        this.b = b; 
    }
    setC(c) { 
        this.c = c; 
    }

    getDiscriminant() { 
        return delta = b*b - 4*a*c
    }

    getRoot1() {
        if (delta > 0) {
            return -b/Math.sqrt(delta);
        }
        else {
        return console.log“The equation has no roots”;
        }
    }

    getRoot2() {
        if (delta > 0) {
            return -b/Math.sqrt(delta);
        }
        else {
            return “The equation has no roots”;
        }
    }
}