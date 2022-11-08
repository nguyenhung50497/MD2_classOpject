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
        let delta = this.b * this.b - 4 * this.a * this.c
        return delta;
    }

    getRoot1() {

        return -this.b/Math.sqrt(Math.abs(getDiscriminant()));
    }

    getRoot2() {

        return this.b/Math.sqrt(Math.abs(getDiscriminant()));
    }
    solve() {
        let discriminant = this.getDiscriminant();
            let root1 = this.getRoot1();
            let root2 = this.getRoot2();
        if (discriminant > 0) {
            return [root1,root2];
        } else if (discriminant === 0) {
            return root1;
        } else {
            console.log("“The equation has no roots”");
        }             
    }
}

let a = new QuadraticEquation(1, 2, 3)

console.log(a.getDiscriminant());
console.log(a.getRoot1());