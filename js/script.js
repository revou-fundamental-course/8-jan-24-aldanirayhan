document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('calcForm');
    const resultContainer = document.getElementById('resultContainer');
    const areaResult = document.getElementById('areaValue');
    const result = document.getElementById('perimeterValue');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Menghentikan pengiriman formulir

        // Ambil nilai sisi dari input
        const sideLength = parseFloat(document.getElementById('sideLength').value);

        // Validasi input
        if (isNaN(sideLength) || sideLength <= 0) {
            alert('Masukkan nilai sisi yang valid!');
            return;
        }

        // Hitung luas & keliling
        const area = sideLength * sideLength;
        const perimeter = 4 * sideLength;

        // Tampilkan hasil
        areaResult.textContent = area;
        result.textContent = perimeter;
        resultContainer.style.display = 'block';
    });

        resetButton.addEventListener('click', function () {
        // Reset input dan hasil
        form.reset();
        resultContainer.style.display = 'none';
    });
});