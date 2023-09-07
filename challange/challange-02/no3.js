
const getAngkaTerbesarKedua = (dataNumbers) => {
    // Validasi tipe data parameter
    if (!Array.isArray(dataNumbers)) {
      return 'Parameter harus berupa array';
    }
  
    // Menghapus duplikat angka dan mengurutkan secara descending
    const uniqueSortedNumbers = [...new Set(dataNumbers)].sort((a, b) => b - a);
  
    // Memeriksa apakah terdapat cukup angka dalam array
    if (uniqueSortedNumbers.length < 2) {
      return 'Tidak ada cukup angka dalam array untuk mendapatkan angka terbesar kedua';
    }
    // Mengembalikan angka terbesar kedua
    return uniqueSortedNumbers[1];
  };
  
  // Contoh penggunaan function:
  const data = [9, 4, 7, 7, 4, 3, 2, 2,8];
  console.log(getAngkaTerbesarKedua(data)); 
  // Output: 8
  
  console.log(getAngkaTerbesarKedua(0)); 
  // Output: 'Tidak ada cukup angka dalam array untuk mendapatkan angka terbesar kedua'
  
  console.log(getAngkaTerbesarKedua()); 
  // Output: 'Parameter harus berupa array'