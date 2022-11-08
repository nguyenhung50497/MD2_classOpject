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
        let delta = (this.b * this.b) - (4 * this.a * this.c)
        return delta;
    }

    getRoot1() {
        let delta = this.getDiscriminant()
        return (-this.b - Math.sqrt(Math.abs(delta))) / (2 * this.a);
    }

    getRoot2() {
        let delta = this.getDiscriminant()
        return (-this.b + Math.sqrt(Math.abs(delta))) / (2 * this.a);
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

let a = new QuadraticEquation(1, -2, 1)

console.log(a.getDiscriminant());
console.log(a.getRoot1());
console.log(a.getRoot2());
console.log(a.solve());

