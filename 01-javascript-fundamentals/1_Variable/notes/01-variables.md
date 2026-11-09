# 01. Variabel (Variables)

**Modul:** JavaScript Fundamentals  
**Status:** In Progress  
**Tingkat:** Pemula

---

## 1. Tujuan Pembelajaran

Memahami bagaimana JavaScript menyimpan, mengakses, dan memperbarui nilai menggunakan variabel.

Setelah menyelesaikan materi ini, saya harus mampu:

- Memahami apa itu variabel.
- Mendeklarasikan variabel menggunakan `let` dan `const`.
- Memberikan nilai awal dan mengubah nilai variabel.
- Menjelaskan perbedaan `let` dan `const`.
- Menampilkan nilai variabel menggunakan `console.log()`.

## 2. Permasalahan

Sebuah program membutuhkan informasi untuk menjalankan berbagai proses.

Sebagai contoh, aplikasi penjualan mungkin membutuhkan informasi seperti:

- Nama pelanggan.
- Jumlah transaksi.
- Status pembayaran.

Bagaimana sebuah program menyimpan informasi tersebut agar bisa digunakan kembali?

Di sinilah variabel berperan.

## 3. Konsep

### 3.1 Apa itu variabel?

Variabel adalah nama yang digunakan untuk merujuk pada suatu nilai di dalam program.

Bayangkan kita memberikan nama pada suatu informasi agar program bisa mengakses dan menggunakannya kembali.

Contoh:

```javascript
let transactionAmount = 500000;
const customerName = "Fauzy";
```

Pada contoh tersebut:

- `transactionAmount` adalah nama variabel yang merujuk pada nilai `500000`.
- `customerName` adalah nama variabel yang merujuk pada nilai `"Fauzy"`.

Dengan menggunakan nama tersebut, kita bisa mengakses nilai yang terkait dengan variabel.

### 3.2 Bagaimana cara mendeklarasikan variabel?

JavaScript menyediakan tiga kata kunci untuk mendeklarasikan variabel:

| Kata Kunci | Penjelasan |
| --- | --- |
| `let` | Mendeklarasikan variabel yang nilainya dapat diubah. |
| `const` | Mendeklarasikan variabel yang tidak dapat diberi nilai ulang. |
| `var` | Cara lama untuk mendeklarasikan variabel. Akan dipelajari nanti. |

Untuk saat ini, kita fokus pada `let` dan `const`.

### 3.3 Memahami let

`let` digunakan untuk mendeklarasikan variabel yang nilainya boleh diubah setelah pertama kali diberikan.

Contoh:

```javascript
let transactionAmount = 500000;

transactionAmount = 750000;

console.log(transactionAmount);
```

Urutan eksekusi:

1. JavaScript mendeklarasikan `transactionAmount` dan memberikan nilai awal `500000`.
2. Nilai `transactionAmount` diubah menjadi `750000`.
3. `console.log()` menampilkan nilai variabel saat perintah tersebut dijalankan.

Hasil:

```text
750000
```

Perhatikan bahwa kita tidak perlu menuliskan `let` kembali ketika mengubah nilai variabel yang sudah dideklarasikan.

### 3.4 Memahami const

`const` digunakan untuk mendeklarasikan variabel yang tidak boleh diberi nilai ulang setelah inisialisasi.

Contoh:

```javascript
const customerName = "Fauzy";

customerName = "Budi";

console.log(customerName);
```

Kode tersebut menghasilkan error karena JavaScript tidak mengizinkan variabel `const` untuk diberi nilai ulang.

Berbeda dengan `let`, variabel `const` harus langsung diberikan nilai ketika dideklarasikan.

### 3.5 Perbedaan let dan const

| Perilaku | `let` | `const` |
| --- | --- | --- |
| Mendeklarasikan variabel | Ya | Ya |
| Memberikan nilai awal | Ya | Ya |
| Mengubah nilai setelah deklarasi | Ya | Tidak |
| Wajib memiliki nilai saat deklarasi | Tidak | Ya |

**Catatan:** `const` mencegah variabel merujuk pada nilai yang berbeda melalui penugasan ulang. Namun, jika variabel tersebut menyimpan objek atau array, isi objek atau array masih bisa diubah. Kita akan mempelajarinya nanti.

## 4. Sintaks

Bentuk umum deklarasi variabel:

```javascript
let namaVariabel = nilai;
const namaVariabel = nilai;
```

| Elemen | Arti |
| --- | --- |
| `let` | Mendeklarasikan variabel yang nilainya dapat diubah |
| `const` | Mendeklarasikan variabel yang tidak dapat diberi nilai ulang |
| `namaVariabel` | Nama yang digunakan untuk merujuk pada variabel |
| `=` | Operator penugasan |
| `nilai` | Data yang diberikan kepada variabel |
| `;` | Penanda akhir pernyataan (opsional dalam banyak kasus) |

## 5. Model Mental

Bayangkan variabel sebagai wadah berlabel yang membantu kita merujuk pada suatu nilai.

- `let`: nilai yang dirujuk dapat diganti dengan nilai lain.
- `const`: variabel tidak dapat diberi nilai ulang setelah inisialisasi.

Ini merupakan penyederhanaan untuk membantu memahami konsep awal. Kita akan mempelajari bagaimana JavaScript sebenarnya menangani nilai dan referensi pada materi berikutnya.

## 6. Istilah Penting

| Istilah | Arti |
| --- | --- |
| Declaration (Deklarasi) | Membuat variabel |
| Initialization (Inisialisasi) | Memberikan nilai awal pada variabel |
| Assignment (Penugasan) | Memberikan nilai kepada variabel |
| Reassignment (Penugasan ulang) | Memberikan nilai baru kepada variabel yang sudah ada |
| Value (Nilai) | Data yang diwakili oleh suatu ekspresi |
| Identifier (Pengenal) | Nama yang digunakan untuk merujuk pada variabel |

## 7. Eksperimen

### Eksperimen 01 — Deklarasi dan Penugasan

**Kode:**

```javascript
let transactionAmount = 500000;
console.log(transactionAmount);
```

**Hasil yang Diprediksi:**

`500000`

**Hasil Aktual:**

Tuliskan hasil setelah menjalankan kode.

**Pengamatan:**

Apa yang terjadi ketika JavaScript menjalankan kode tersebut?

### Eksperimen 02 — Penugasan Ulang dengan let

**Kode:**

```javascript
let transactionAmount = 500000;

transactionAmount = 750000;

console.log(transactionAmount);
```

**Hasil yang Diprediksi:**

Prediksi hasil yang akan ditampilkan sebelum menjalankan kode.

**Hasil Aktual:**

Tuliskan hasil setelah menjalankan kode.

**Pengamatan:**

Mengapa hasil yang ditampilkan berubah?

### Eksperimen 03 — Penugasan Ulang dengan const

**Kode:**

```javascript
const customerName = "Fauzy";

customerName = "Budi";

console.log(customerName);
```

**Hasil yang Diprediksi:**

Prediksi apa yang akan terjadi sebelum menjalankan kode.

**Hasil Aktual:**

Tuliskan hasil setelah menjalankan kode.

**Pengamatan:**

Mengapa JavaScript memberikan perilaku yang berbeda dibandingkan dengan `let`?

## 8. Pemahaman Saya

Jelaskan menggunakan kata-kata sendiri:

1. Apa itu variabel?
2. Apa perbedaan deklarasi dan penugasan?
3. Apa perbedaan `let` dan `const`?

## 9. Pertanyaan

Tuliskan hal-hal yang masih belum dipahami atau ingin dipelajari lebih lanjut.

## 10. Hubungan dengan SalesPal

Pikirkan bagaimana variabel digunakan di dalam SalesPal.

Contoh:

- Menyimpan nama prospek.
- Menyimpan nomor telepon prospek.
- Menyimpan tahapan pipeline saat ini.
- Menyimpan nilai transaksi.

Jelaskan bagaimana variabel membantu aplikasi mengelola dan menggunakan informasi tersebut.

---

**Prinsip Pembelajaran:** Pahami konsep terlebih dahulu, lakukan eksperimen, kemudian jelaskan kembali menggunakan kata-kata sendiri.
