import deepCopy from "deep-copy-solutions.js";

const Color = Object.create(null);

Color.noRed = (arrayOfColors) => deepCopy(arrayOfColors).filter(
    (colorArray) => colorArray[2] === 0
);

const rgbToHexReducer = function (total, currentEl) {
    const zero = "0";
    const hexValue = currentEl.toString(16);

    const hexString = (
        hexValue.length === 2
        ? hexValue
        : zero.concat(hexValue)
    );

    return total.concat(hexString);
};

Color.rgbToHexColor = (arrRGB) => deepCopy(arrRGB).reduce(rgbToHexReducer, "#");

const avgProportionOfColor = (arr) => deepCopy(arr).map((color) => color / 255);

Color.mixColors = function (arrRGB1, arrRGB2) {

    const arrProportion1 = avgProportionOfColor(arrRGB1);
    const arrProportion2 = avgProportionOfColor(arrRGB2);

    return arrProportion1.map(
        (color, i) => Math.floor((255 * (color + arrProportion2[i])) / 2)
    );
};

Color.increaseBrightness = (arrayRGB, brightnessChange) => arrayRGB.map(
    (num) => Math.min(255, num * (1 + brightnessChange))
);

export default Object.freeze(Color);