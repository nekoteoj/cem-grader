import Fraction from './fraction';

class Matrix {

    constructor(numberOfRow, numberOfCol, numberOfAugCol = 0) {
        this.numberOfRow = numberOfRow;
        this.numberOfCol = numberOfCol;
        this.numberOfAugCol = numberOfAugCol;
        this.data = [];
        for (let i = 0; i < numberOfRow; i++) {
            this.data.push([]);
            for (let j = 0; j < numberOfCol + numberOfAugCol; j++) {
                this.data[i].push(new Fraction(0));
            }
        }
    }

    setEntry(row, col, value) {
        const i = row - 1;
        const j = col - 1;
        this.data[i][j] = value;
        return this;
    }

    multiplyRow(row, value) {
        const i = row - 1;
        const resultMatrix = this.clone();
        for (let j = 0; j < resultMatrix.numberOfCol + resultMatrix.numberOfAugCol; j++) {
            resultMatrix.data[i][j] = resultMatrix.data[i][j].multiply(value);
        }
        return resultMatrix;
    }

    swapRow(row1, row2) {
        const i1 = row1 - 1;
        const i2 = row2 - 1;
        const resultMatrix = this.clone();
        for (let j = 0; j < resultMatrix.numberOfCol + resultMatrix.numberOfAugCol; j++) {
            const tmp = resultMatrix.data[i1][j];
            resultMatrix.data[i1][j] = resultMatrix.data[i2][j];
            resultMatrix.data[i2][j] = tmp;
        }
        return resultMatrix;
    }

    addMultipleOfRow(k, rowFrom, rowTo) {
        const iFrom = rowFrom - 1;
        const iTo = rowTo - 1;
        const resultMatrix = this.clone();
        for (let j = 0; j < resultMatrix.numberOfCol + resultMatrix.numberOfAugCol; j++) {
            resultMatrix.data[iTo][j] = resultMatrix.data[iTo][j].plus(resultMatrix.data[iFrom][j].multiply(k));
        }
        return resultMatrix;
    }

    clone() {
        const cloneData = [];
        for (const row of this.data) {
            const cloneRow = [];
            for (const entry of row) {
                cloneRow.push(entry.clone());
            }
            cloneData.push(cloneRow);
        }
        const cloneMatrix = new Matrix(this.numberOfRow, this.numberOfRow, this.numberOfAugCol);
        cloneMatrix.data = cloneData;
        return cloneMatrix;
    }

    execute(queries) {
        const resultMatrix = this.clone();
        for (const query of queries) {
            let [operation, operandsString] = query.split(' ');
            const operands = operandsString.split(',');
            operation = operation.toUpperCase();
            if (operation === 'MUL') {
                const [k, row] = operands;
                const tmpMatrix = this.multiplyRow(Number(row), Fraction.fromString(k));
                for (let j = 0; j < this.numberOfCol + this.numberOfAugCol; j++) {
                    resultMatrix.setEntry(row, j + 1, tmpMatrix.data[row - 1][j]);
                }
            } else if (operation === 'SWP') {
                const [row1, row2] = operands.map(x => Number(x));
                const tmpMatrix = this.swapRow(row1, row2);
                for (let j = 0; j < this.numberOfCol + this.numberOfAugCol; j++) {
                    resultMatrix.setEntry(row1, j + 1, tmpMatrix.data[row1 - 1][j]);
                    resultMatrix.setEntry(row2, j + 1, tmpMatrix.data[row2 - 1][j]);
                }
            } else if (operation === 'AMR') {
                const [k, row1, row2] = operands;
                const tmpMatrix = this.addMultipleOfRow(Fraction.fromString(k), Number(row1), Number(row2));
                for (let j = 0; j < this.numberOfCol + this.numberOfAugCol; j++) {
                    resultMatrix.setEntry(row2, j + 1, tmpMatrix.data[row2 - 1][j]);
                }
            }
        }
        return resultMatrix;
    }

}

export default Matrix;
