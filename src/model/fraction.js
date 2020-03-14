class Fraction {

    constructor(numerator, denominator = 1) {
        this.numerator = numerator;
        this.denominator = denominator;
        this.convertToLeastFraction();
    }

    static fromString(fractionString) {
        const parts = fractionString.split('/');
        if (parts.length === 1) {
            return new Fraction(Number(parts[0]));
        }
        const [numerator, denominator] = parts;
        return new Fraction(Number(numerator), Number(denominator));
    }

    convertToLeastFraction() {
        const minValue = Math.min(
            Math.abs(this.numerator),
            Math.abs(this.denominator)
        );
        // Divide by GCD
        for (let i = minValue; i >= 2; i--) {
            if (this.numerator % i === 0 && this.denominator % i === 0) {
                this.numerator /= i;
                this.denominator /= i;
                break;
            }
        }
        // Minus should be at nominator
        if (this.denominator < 0) {
            this.denominator *= -1;
            this.numerator *= -1;
        }
        // Denominater should be one when numerator is zero
        if (this.numerator === 0) {
            this.denominator = 1;
        }
    }

    clone() {
        return new Fraction(this.numerator, this.denominator);
    }

    negative() {
        return new Fraction(-this.numerator, this.denominator);
    }

    inverse() {
        return new Fraction(this.denominator, this.numerator);
    }

    plus(other) {
        const numerator = this.numerator*other.denominator + other.numerator*this.denominator;
        const denominator = this.denominator * other.denominator;
        return new Fraction(numerator, denominator);
    }

    minus(other) {
        return this.plus(other.negative());
    }

    multiply(other) {
        const numerator = this.numerator * other.numerator;
        const denominator = this.denominator * other.denominator;
        return new Fraction(numerator, denominator);
    }

    divideBy(other) {
        return this.multiply(other.inverse());
    }

    toString() {
        if (this.denominator === 1) {
            return `${this.numerator}`;
        }
        return `${this.numerator}/${this.denominator}`;
    }

}

export default Fraction;
