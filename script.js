let array = [];
const container = document.getElementById("array-container");

function generateArray() {
    array = [];
    container.innerHTML = "";
    for (let i = 0; i < 30; i++) {
        let value = Math.floor(Math.random() * 200) + 20;
        array.push(value);

        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = value + "px";
        container.appendChild(bar);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort() {
    let bars = document.getElementsByClassName("bar");

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {

            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "red";

            await sleep(50);

            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                bars[j].style.height = array[j] + "px";
                bars[j + 1].style.height = array[j + 1] + "px";
            }

            bars[j].style.backgroundColor = "#3498db";
            bars[j + 1].style.backgroundColor = "#3498db";
        }
    }
}

async function selectionSort() {
    let bars = document.getElementsByClassName("bar");

    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        bars[i].style.backgroundColor = "yellow";

        for (let j = i + 1; j < array.length; j++) {
            bars[j].style.backgroundColor = "red";
            await sleep(50);

            if (array[j] < array[minIndex]) {
                minIndex = j;
            }

            bars[j].style.backgroundColor = "#3498db";
        }

        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;

        bars[i].style.height = array[i] + "px";
        bars[minIndex].style.height = array[minIndex] + "px";

        bars[i].style.backgroundColor = "#3498db";
    }
}

generateArray();