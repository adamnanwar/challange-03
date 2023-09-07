const dataPenjualanNovel = [
  {
    idProduct: 'BOOK002421',
    namaProduk: 'Pulang - Pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: 'BOOK002351',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  let totalModal = 0;
  let totalKeuntungan = 0;
  let terjualTerbanyak = 0;
  let produkBukuTerlaris;
  let penulisBukuTerlaris;

  const totalPenjualanPerPenulis = {};

  dataPenjualan.forEach((data) => {
    totalKeuntungan += (data.hargaJual - data.hargaBeli) * data.totalTerjual;
    totalModal += (data.totalTerjual + data.sisaStok) * data.hargaBeli;

    const penulis = data.penulis.toLowerCase();
    totalPenjualanPerPenulis[penulis] = (totalPenjualanPerPenulis[penulis] || 0) + data.totalTerjual;

    if (data.totalTerjual > terjualTerbanyak) {
      produkBukuTerlaris = data.namaProduk; // Perbaikan di sini
      terjualTerbanyak = data.totalTerjual;
    }
  });

  for (const penulis in totalPenjualanPerPenulis) {
    if (totalPenjualanPerPenulis[penulis] > (totalPenjualanPerPenulis[penulisBukuTerlaris] || 0)) {
      penulisBukuTerlaris = penulis;
    }
  }

  const persentaseKeuntungan = `${((totalKeuntungan / totalModal) * 100).toFixed(2)}%`;
  const formatTotalKeuntungan = `Rp.${totalKeuntungan.toLocaleString("id-ID")}`;
  const formatTotalModal = `Rp.${totalModal.toLocaleString("id-ID")}`;

  return {
    totalKeuntungan: formatTotalKeuntungan,
    totalModal: formatTotalModal,
    persentaseKeuntungan: persentaseKeuntungan,
    produkBukuTerlaris: produkBukuTerlaris,
    penulisBukuTerlaris: penulisBukuTerlaris,
  };
}

console.log(getInfoPenjualan(dataPenjualanNovel));