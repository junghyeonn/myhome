function change() {
    var binaryInput = document.getElementById("binary").value;

    if (binaryInput !== "") {
        var decimalVal = parseInt(binaryInput, 2);
        var hexVal = decimalVal.toString(16).toUpperCase();
        document.getElementById('sixteen').value = hexVal;
    }
}

function drawing() {
    var height = parseInt(document.getElementById('triangle').value);
    var tArea = document.getElementById('tarea');

    if (!isNaN(height) && height > 0) {
        var pascalTriangle = [];
        for (var i = 0; i < height; i++) {
            pascalTriangle[i] = new Array(i + 1);
            for (var j = 0; j < i + 1; j++) {
                if (j === 0 || j === i) {
                    pascalTriangle[i][j] = 1;
                } else {
                    pascalTriangle[i][j] = pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
                }
            }
        }
        var result = '<div style="padding: 3px; color: white;">';
        for (var row = 0; row < pascalTriangle.length; row++) {
            for (var space = 0; space < (height - row - 1) * 3; space++) {
                result += ' ';
            }
            for (var col = 0; col < pascalTriangle[row].length; col++) {
                result += pascalTriangle[row][col] + '&nbsp;&nbsp;';
            }
            result += '<br>';
        }
        result += '</div>';

        tArea.innerHTML = result;

    }
}

