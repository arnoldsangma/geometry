function calculateTriangleArea(){
    // get the triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    // console.log(base);

    // get the triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    // console.log(height);
    
    const areaTriangle = 0.5 * base * height;
    // console.log(area);

    // show Tirangle-Area:
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = areaTriangle;
}

function calculateRectangleArea(){
    // get Rectangle Width:
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    // console.log(width);

    // get Rectangle Length:
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    // console.log(length);

    const area = width * length;

    // show Rectangle Area:
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}

// Creating reuseable Function::: to reduce duplicate code.

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base')
    // console.log(base);

    const height = getInputValue('parallelogram-height')
    console.log(height);

    const area = base * height;
    setElementInnerText('parallelogram-area', area);
}
// : to reduce duplicate code.


function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// re-usable set span,p,div,etc text::

function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius ; 
    setElementInnerText('ellipse-area', area);
}
