const Matrix = Object.create(null);


Matrix.multiply = (matrix, n) => matrix.map(
    (row) => row.map((el) => el * n)
);

Matrix.flatten = function (matrix) {
    matrix.reduce(
        (total, el) => total.concat([el]),
        []
    );
};

Matrix.generate = function (array, numCols) {
    // array.slice() creates a copy of the array so the original array
    // is not mutated.
    return array.slice().reduce(
        (total, el, index) => (
            index % numCols === 0
            ? total.push([el]) && total
            : total[total.length - 1].push(el) && total
        ),
        []
    );
};

Matrix.flipHorizontal = (matrix) => matrix.slice().reverse();

Matrix.flipVertical = (matrix) => matrix.slice().map((row) => row.reverse());

Matrix.filterZeros = (matrix) => matrix.map(
    (row) => row.filter((el) => el !== 0)
);

Matrix.findDeterminant = function (matrix) {

};

Matrix.sumMatrices = function (matrix1, matrix2) {
    return matrix1.splice().map(
        (row, rowIndex) => row.map(
            (el, colIndex) => el + matrix2[rowIndex][colIndex]
        )
    );
};

Matrix.transpose = (matrix) => matrix[0].map(
    (ignore, row) => matrix.map((col) => col[row])
);

export default Object.freeze(Matrix);