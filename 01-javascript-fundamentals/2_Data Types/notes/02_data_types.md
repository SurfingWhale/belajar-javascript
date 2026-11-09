# 02. Data Types (Tipe Data)

## 1. Tujuan Pembelajaran

Setelah mempelajari materi ini, saya diharapkan mampu:

- Memahami konsep Data Types.
- Mengenali Number, String, dan Boolean.
- Menggunakan `typeof` untuk memeriksa tipe data.
- Memahami Type Coercion dan Type Conversion.
- Memahami bagaimana JavaScript memperlakukan tipe data berbeda dalam operasi.

## 2. Permasalahan

Dalam aplikasi seperti SalesPal, kita berhadapan dengan berbagai jenis informasi.

Contohnya:

- Nama pelanggan: `"Fauzy"`
- Nominal transaksi: `500000`
- Status pembayaran: `true`

Walaupun semuanya dapat disimpan dalam variabel, masing-masing memiliki tipe data berbeda.

JavaScript menggunakan Data Types untuk mengenali dan memperlakukan nilai tersebut.

## 3. Konsep

### 3.1 Apa itu Data Types?

Data Types adalah kategori yang menentukan jenis nilai (*value*) yang digunakan dalam program.

Pada tahap ini, kita mempelajari tiga tipe data dasar:

| Data Type | Pengertian | Contoh |
| --- | --- | --- |
| Number | Nilai angka | `500000`, `25`, `3.14` |
| String | Teks atau kumpulan karakter | `"Fauzy"`, `"Jakarta"` |
| Boolean | Nilai logika | `true`, `false` |

### 3.2 Number

Number digunakan untuk menyimpan nilai numerik, baik bilangan bulat maupun desimal.

```javascript
let transactionAmount = 500000;
let productPrice = 25000;
let discountRate = 0.15;
```

### 3.3 String

String digunakan untuk menyimpan teks atau kumpulan karakter.

String dapat ditulis menggunakan tanda kutip satu (`'`), tanda kutip dua (`"`), atau backtick (`` ` ``).

```javascript
let customerName = "Fauzy";
let customerCity = "Jakarta";
let transactionCode = "500000";
```

**Penting:** Angka yang ditulis di dalam tanda kutip merupakan String, bukan Number.

```javascript
let amountA = 500000;
let amountB = "500000";
```

- `amountA` memiliki tipe data Number.
- `amountB` memiliki tipe data String.

Walaupun terlihat sama, JavaScript memperlakukan keduanya secara berbeda.

### 3.4 Boolean

Boolean adalah tipe data yang hanya memiliki dua kemungkinan nilai:

- `true` = benar.
- `false` = salah.

Boolean digunakan untuk merepresentasikan kondisi atau status dalam program.

```javascript
let paymentCompleted = true;
let invoicePaid = false;
```

Contohnya, status apakah pembayaran sudah selesai atau belum.

**Catatan:** `true` dan `false` tidak menggunakan tanda kutip. Jika ditulis `"true"`, nilainya menjadi String.

### 3.5 Memeriksa Tipe Data dengan typeof

JavaScript menyediakan operator `typeof` untuk mengetahui tipe data suatu nilai.

```javascript
let transactionAmount = 500000;
let customerName = "Fauzy";
let paymentCompleted = true;

console.log(typeof transactionAmount);
console.log(typeof customerName);
console.log(typeof paymentCompleted);
```

Output:

```text
number
string
boolean
```

Perbedaan fungsi:

- `console.log()` menampilkan nilai.
- `typeof` memeriksa tipe data.

## 4. Type Coercion (Konversi Otomatis)

Type Coercion adalah proses ketika JavaScript mengubah tipe data suatu nilai secara otomatis dalam operasi tertentu.

JavaScript tidak selalu menghasilkan error ketika dua nilai memiliki tipe data berbeda. Terkadang, JavaScript melakukan konversi agar operasi dapat dijalankan.

### 4.1 Operator +

Operator `+` dapat digunakan untuk penjumlahan maupun penggabungan teks (*String Concatenation*).

```javascript
console.log(500000 + 1000);
console.log("500000" + 1000);
```

Output:

```text
501000
5000001000
```

Perbedaannya:

- Number + Number menghasilkan penjumlahan.
- String + Number menghasilkan penggabungan teks.

Dalam contoh kedua, Number `1000` dikonversi menjadi String.

### 4.2 Operator - dan *

Berbeda dengan `+`, operator `-` dan `*` digunakan untuk operasi matematika.

Jika String berisi angka digunakan dalam operasi tersebut, JavaScript mencoba mengonversinya menjadi Number.

```javascript
console.log("500000" - 1000);
console.log("500000" * 2);
```

Output:

```text
499000
1000000
```

### 4.3 NaN (Not a Number)

Tidak semua String dapat dikonversi menjadi Number yang valid.

```javascript
console.log("Fauzy" - 1000);
console.log("Fauzy" * 2);
```

Output:

```text
NaN
NaN
```

`NaN` merupakan singkatan dari *Not a Number*.

Nilai ini menunjukkan bahwa hasil operasi numerik tidak valid.

**Catatan:** `NaN` bukan error yang menghentikan program. `NaN` merupakan nilai khusus yang memiliki tipe data `number`.

## 5. Type Conversion (Konversi Manual)

Berbeda dengan Type Coercion, Type Conversion dilakukan secara sengaja menggunakan fungsi konversi.

JavaScript menyediakan beberapa fungsi:

| Fungsi | Kegunaan |
| --- | --- |
| `Number()` | Mengonversi nilai menjadi Number |
| `String()` | Mengonversi nilai menjadi String |
| `Boolean()` | Mengonversi nilai menjadi Boolean |

### 5.1 Number()

`Number()` digunakan untuk mengonversi suatu nilai menjadi Number jika memungkinkan.

```javascript
const transactionAmount = "500000";
const convertedAmount = Number(transactionAmount);

console.log(convertedAmount);
console.log(typeof convertedAmount);
```

Output:

```text
500000
number
```

Tidak semua String menghasilkan Number yang valid.

```javascript
console.log(Number("500"));    // 500
console.log(Number("Fauzy"));  // NaN
console.log(Number(""));       // 0
console.log(Number("500abc")); // NaN
```

### 5.2 String()

`String()` digunakan untuk mengonversi suatu nilai menjadi String.

```javascript
const transactionAmount = 500000;
const convertedAmount = String(transactionAmount);

console.log(convertedAmount);
console.log(typeof convertedAmount);
```

Output:

```text
500000
string
```

### 5.3 Boolean()

`Boolean()` digunakan untuk mengonversi suatu nilai menjadi Boolean (`true` atau `false`).

```javascript
console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(Boolean("Fauzy")); // true
console.log(Boolean(""));      // false
console.log(Boolean(null));   // false
```

### 5.4 Truthiness

Truthiness adalah aturan JavaScript untuk menentukan apakah suatu nilai dianggap `true` atau `false` ketika dikonversi menjadi Boolean.

| Nilai | Hasil |
| --- | --- |
| `1` | `true` |
| `0` | `false` |
| `"Fauzy"` | `true` |
| `"false"` | `true` |
| `"0"` | `true` |
| `""` | `false` |
| `null` | `false` |

JavaScript tidak membaca arti kata di dalam String. JavaScript melihat karakteristik nilainya.

Contoh:

```javascript
Boolean(false);   // false
Boolean("false"); // true
```

- `false` merupakan Boolean.
- `"false"` merupakan String yang tidak kosong.

Karena String tersebut berisi karakter, hasil konversinya adalah `true`.

## 6. Model Mental

Perhatikan contoh berikut:

```javascript
const transactionAmount = 500000;
const customerName = "Fauzy";
const paymentCompleted = true;
```

Ketiganya merupakan variabel, tetapi nilai yang disimpan memiliki tipe data berbeda.

Hubungan konsep:

- Variable adalah nama yang digunakan untuk mengakses suatu nilai.
- Data Type menentukan kategori nilai tersebut.
- Operator menentukan operasi yang dilakukan terhadap nilai.
- Type Coercion mengubah tipe data secara otomatis dalam konteks tertentu.
- Type Conversion mengubah tipe data secara sengaja menggunakan fungsi.

**Catatan penting:** Type Conversion tidak sama dengan reassignment. Mengonversi nilai tidak otomatis mengubah variabel asal.

```javascript
const amount = "500000";
const convertedAmount = Number(amount);

console.log(typeof amount);          // string
console.log(typeof convertedAmount); // number
```

Variabel `amount` tetap String. Hasil konversinya disimpan di `convertedAmount`.

## 7. Istilah Penting

| Istilah | Pengertian |
| --- | --- |
| Data Type | Kategori suatu nilai |
| Number | Tipe data angka |
| String | Tipe data teks |
| Boolean | Tipe data logika |
| `typeof` | Operator untuk memeriksa tipe data |
| Operand | Nilai yang digunakan dalam operasi |
| Operator | Simbol atau instruksi untuk melakukan operasi |
| Type Coercion | Konversi tipe data otomatis |
| Type Conversion | Konversi tipe data secara sengaja |
| String Concatenation | Proses menggabungkan teks |
| Truthiness | Aturan evaluasi nilai menjadi Boolean |
| `NaN` | Nilai khusus untuk hasil numerik yang tidak valid |

## 8. Eksperimen

Setiap eksperimen disimpan dalam file JavaScript terpisah.

1. Mengenali tipe data dengan `typeof`.
2. Membandingkan Number dan String.
3. Menguji Number dan String dengan operator `+`.
4. Menguji Number dan String dengan operator `-` dan `*`.
5. Menguji konversi numerik yang tidak valid.
6. Mengonversi String menjadi Number.
7. Mengonversi Number menjadi String.
8. Mengonversi nilai menjadi Boolean.

## 9. Pemahaman Saya

- Apa perbedaan Number, String, dan Boolean?
Number Berbentuk Angka, String itu semacem text, boolean buat true of falsa akan statement

- Mengapa `"500000"` bukan Number?
Karena dibungkus "" menjadikannya text

- Apa fungsi `typeof`?
untuk mengetahui tipe data

- Mengapa operator `+` dapat menggabungkan teks?
karena js ngelakuin concanation, berbeda dengan operasi aritmetika

- Apa perbedaan Type Coercion dan Type Conversion?
type coersion dilakukan secara otomatis dalam kondisi tertentu, kita secara eksplisit meminta javascript mengonversi suatu value

- Apa fungsi `Number()`, `String()`, dan `Boolean()`?
untuk merubah value

- Apa yang dimaksud dengan Truthiness?
Aturan untuk menentukan apakah value dianggap true atau false dalam konteks bolean

- Mengapa `Boolean("false")` menghasilkan `true`?
truthines tadi menjadikan false sebagai benar

- Apakah Type Conversion mengubah variabel asal?
tidak merubah variable awal

## 10. Hubungan dengan SalesPal

Dalam SalesPal, tipe data memengaruhi bagaimana informasi disimpan dan diproses.

```javascript
const customerName = "Fauzy";
const transactionAmount = 500000;
const paymentCompleted = true;
```

- `customerName` menyimpan nama pelanggan.
- `transactionAmount` menyimpan nominal transaksi.
- `paymentCompleted` menyimpan status pembayaran.

Jika nominal transaksi disimpan sebagai String, operasi matematika dapat menghasilkan perilaku yang berbeda dari yang diharapkan.

```javascript
const transactionAmount = "500000";

console.log(transactionAmount + 1000);
```

Output:

```text
5000001000
```

Padahal, jika tujuannya menghitung nominal transaksi, hasil yang diharapkan adalah `501000`.

Karena itu, memahami Data Types, Type Coercion, dan Type Conversion merupakan fondasi sebelum mempelajari pengolahan data dalam JavaScript dan React.
