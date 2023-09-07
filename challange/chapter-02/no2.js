const checkTypeNumber = (givenNumber) => {
    // Validasi tipe data parameter
    if (typeof givenNumber !== 'number') {
      return 'Error: Invalid data type';
    }
  
    // Cek apakah angka genap atau ganjil
    if (givenNumber % 2 === 0) {
      return 'GENAP';
    } else {
      return 'GANJIL';
    }
  };
  
  // Contoh penggunaan function:
  console.log(checkTypeNumber(10)); // Output: 'GENAP'
  console.log(checkTypeNumber(3)); // Output: 'GANJIL'
  console.log(checkTypeNumber('3')); // Output: 'Error: Invalid data type'
  console.log(checkTypeNumber({})); // Output: 'Error: Invalid data type'
  console.log(checkTypeNumber([])); // Output: 'Error: Invalid data type'
  console.log(checkTypeNumber()); // Output: 'Error: Invalid data type'
  