class QuadraticEquation {
    a
    b
    c
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.delta = delta;
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
            return -b/Math.sqrt(Math.abs(delta));
    }

    getRoot2() {
            return b/Math.sqrt(Math.abs(delta));
    }
    solve() {
        if (delta > 0) {
            let discriminant = this.getDiscriminant();
            let root1 = this.getRoot1();
            let root2 = this.getRoot2();
            if (discriminant > 0) {
                return [root1,root2];
            } else if (discriminant )
            }               
    }
}