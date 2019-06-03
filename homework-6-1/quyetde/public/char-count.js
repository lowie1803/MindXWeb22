document.querySelector('textarea').addEventListener("input", () => {
    const inputLength = document.querySelector('textarea').value.length;
    const remain = 200-inputLength;
    console.log(remain);
    document.getElementById('remain').innerText = remain;
})