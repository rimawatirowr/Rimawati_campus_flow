# CampusFlow --- Design System & UI/UX Specification

> Dokumen acuan visual untuk meneruskan desain CampusFlow yang sudah
> ada. Dokumen ini berfokus pada UI/UX dan prototype, bukan implementasi
> backend.

## 1. Tujuan Produk

CampusFlow adalah workspace akademik personal dan multi-user untuk
mengelola aktivitas perkuliahan dari semester 1 sampai semester 8.
Sistem mendukung tiga role terpisah: Admin, Mahasiswa, dan Dosen. Admin
mengelola akun dan konfigurasi; setiap mahasiswa mengelola ruang
akademiknya sendiri; dosen mengelola kelas yang ditugaskan Admin.

Desain harus terasa seperti produk web akademik yang sudah matang:
realistis, konsisten, mudah dipahami, tidak terlalu padat, dan siap
diuji melalui prototype interaktif.

## 2. Prinsip yang Tidak Boleh Diubah

-   Nama produk tetap **CampusFlow**.
-   Tema tetap **Mocha Rose**.
-   Tiga role tetap terpisah: **Admin, Mahasiswa, Dosen**.
-   Tidak ada pendaftaran mandiri. Akun mahasiswa dan dosen dibuat oleh
    Admin.
-   Data akademik antar mahasiswa harus terisolasi.
-   Dosen hanya melihat kelas, mahasiswa, tugas, dan nilai pada kelas
    yang ditugaskan kepadanya.
-   Mahasiswa lain boleh login dan mengelola tugas, catatan, serta data
    akademiknya sendiri.
-   Dosen tambahan dapat mengelola kelas yang ditugaskan, termasuk
    materi, tugas, kehadiran, penilaian, dan feedback.
-   Arsip Dokumen Akademik tersedia untuk KRS, KHS, transkrip,
    sertifikat, surat, dan dokumen lain, tetapi diletakkan di bagian
    paling bawah navigasi mahasiswa dan tidak dipromosikan sebagai fitur
    utama.
-   Tahap ini menghasilkan desain dan prototype. Jangan membangun
    backend, database, autentikasi sungguhan, atau integrasi Google
    sungguhan.

## 3. Identitas Visual --- Mocha Rose

### 3.1 Palet warna

  -----------------------------------------------------------------------
  Token                   Hex                     Pemakaian
  ----------------------- ----------------------- -----------------------
  Rose Burgundy           `#B5546B`               Tombol utama, menu
                                                  aktif, link penting,
                                                  aksen interaksi

  Deep Mocha              `#4A1F2E`               Sidebar, header
                                                  tertentu, hero panel,
                                                  teks kontras

  Soft Rose               `#FBF3F4`               Latar halaman, area
                                                  lembut, highlight

  Muted Gold              `#D9A441`               Aksen, penanda penting,
                                                  highlight terbatas

  White                   `#FFFFFF`               Kartu, panel, modal,
                                                  permukaan utama

  Completed               `#22A06B`               Status selesai/hadir

  In Progress             `#F5A524`               Status sedang
                                                  berjalan/menunggu

  Overdue / Error         `#E5484D`               Terlambat, gagal,
                                                  peringatan kritis

  Neutral / Not Started   `#8A8A8A`               Belum dimulai, metadata
                                                  sekunder
  -----------------------------------------------------------------------

Komposisi visual: sekitar 60% putih/Soft Rose, 30% Rose Burgundy beserta
variasinya, dan 10% Muted Gold. Deep Mocha digunakan sebagai jangkar
kontras. Pastikan kontras teks memadai; jangan memakai Muted Gold untuk
teks kecil di atas putih.

### 3.2 Tipografi

-   Font utama: **Plus Jakarta Sans**.
-   Gunakan maksimal tiga weight (misalnya 400, 600, 700).
-   Hierarki: page title 24--30 px, section title 16--20 px, body 14--16
    px, label/metadata 12--13 px.
-   Gunakan line-height nyaman dan hindari paragraf terlalu rapat.

### 3.3 Ikon dan ilustrasi

-   Gunakan ikon **Lucide** secara konsisten, stroke sederhana.
-   Jangan menggunakan emoji sebagai ikon antarmuka.
-   Ilustrasi kosong/empty state boleh sederhana, bernuansa Mocha Rose,
    dan tidak mengalahkan konten.
-   Gunakan foto/avatar dummy yang netral untuk akun contoh.

### 3.4 Bentuk, elevasi, dan gerakan

-   Kartu dan modal menggunakan sudut membulat (umumnya 12--18 px).
-   Tombol memiliki radius konsisten (8--12 px atau pill hanya untuk
    chip tertentu).
-   Shadow lembut dan tipis; hindari bayangan berat.
-   Border netral tipis untuk memisahkan panel.
-   Gradient hanya boleh memakai dua shade dari warna yang sama.
-   Animasi singkat dan halus untuk hover, dropdown, modal, toast, dan
    transisi tab; jangan membuat gerakan dekoratif berlebihan.

## 4. Layout dan Responsive

### 4.1 Desktop / laptop

-   Sidebar kiri tetap, lebar kira-kira 240--264 px, dapat diciutkan.
-   Topbar di atas konten: breadcrumb/page title bila diperlukan,
    pencarian, notifikasi, avatar/profile menu.
-   Konten utama memakai grid fleksibel dan whitespace cukup.
-   Dashboard dapat memakai kolom utama + panel samping untuk
    agenda/deadline.
-   Tabel memakai header jelas, row height nyaman, pencarian, filter,
    pagination, dan empty state.

### 4.2 Tablet

-   Sidebar dapat menjadi compact rail atau drawer.
-   Kartu statistik berubah menjadi dua kolom.
-   Tabel lebar dapat bergeser horizontal atau berubah menjadi list
    cards jika lebih mudah dibaca.

### 4.3 Smartphone

-   Gunakan header ringkas dan navigasi bawah untuk menu utama; menu
    lainnya masuk ke drawer/More.
-   Sidebar desktop tidak boleh dipaksakan tampil penuh.
-   Kartu statistik satu atau dua kolom sesuai lebar.
-   Form satu kolom, tombol aksi utama mudah dijangkau.
-   Upload file, status tugas, deadline, dan jadwal harus tetap mudah
    ditemukan.
-   Tabel berubah menjadi card/list yang responsif.
-   Pastikan tidak ada horizontal overflow.

### 4.4 Mode warna

-   Light Mode menjadi default.
-   Dark Mode tersedia sebagai alternatif.
-   Dark Mode tetap menggunakan karakter Mocha Rose: Deep Mocha sebagai
    permukaan gelap, Rose Burgundy sebagai aksen, teks terang dengan
    kontras baik.
-   Preferensi tema disimulasikan tersimpan per akun.

## 5. Sistem Navigasi dan Role

### 5.1 Login

Satu halaman login untuk semua role. Tidak ada tombol daftar akun. Login
prototype menyediakan pilihan role/demo account untuk menguji alur,
bukan autentikasi nyata. Setelah simulasi login, arahkan pengguna ke
dashboard sesuai role.

Admin awal: - Nama: Rimawati - Username: Rimawati - NIM: 240511184 -
Role: Admin

Jangan menampilkan atau menanamkan password awal dalam desain atau data
contoh yang terlihat publik.

### 5.2 Navigasi Admin

1.  Dashboard Admin
2.  Manajemen Pengguna
3.  Manajemen Mahasiswa
4.  Manajemen Dosen
5.  Manajemen Semester
6.  Manajemen Mata Kuliah
7.  Manajemen Kelas
8.  Data Akademik
9.  Integrasi Google
10. Manajemen File
11. Notifikasi
12. Aktivitas Sistem
13. Pengaturan

Admin dapat membuat, mengedit, menonaktifkan, mengaktifkan, dan mereset
akun; mengatur role dan akses; menetapkan dosen ke kelas; serta
mengelola konfigurasi sistem.

### 5.3 Navigasi Mahasiswa

1.  Dashboard
2.  Mata Kuliah Saya
3.  Materi
4.  Tugas
5.  Kalender
6.  Kehadiran
7.  Catatan Saya
8.  Nilai
9.  Riwayat Akademik
10. Study Planner
11. Notifikasi
12. Profil
13. Pengaturan
14. Arsip Dokumen Akademik --- letakkan paling bawah, terpisah secara
    visual, tidak diberi badge promosi atau kartu hero.

Setiap mahasiswa mempunyai workspace privat. Mahasiswa hanya dapat
melihat dan mengubah data miliknya sendiri sesuai hak akses.

### 5.4 Navigasi Dosen

1.  Dashboard Dosen
2.  Kelas Saya
3.  Mata Kuliah
4.  Materi
5.  Tugas
6.  Pengumpulan
7.  Penilaian
8.  Kehadiran
9.  Pengumuman
10. Kalender
11. Perkembangan Mahasiswa
12. Notifikasi
13. Profil
14. Pengaturan

Dosen hanya dapat mengakses kelas dan mahasiswa yang secara eksplisit
ditugaskan Admin.

## 6. Peta Halaman dan Spesifikasi UI

### 6.1 Halaman umum

**Login** - Logo/wordmark CampusFlow dan tagline singkat. - Form
username/email dan password, toggle tampilkan password, tombol masuk. -
Pesan validasi, loading, dan error state. - Tidak ada
self-registration. - Prototype menyediakan akses demo role secara
terkontrol.

**Komponen global** - Sidebar sesuai role, topbar, breadcrumb, search,
notification menu, avatar menu. - Toast sukses/gagal, confirmation
dialog, modal form, dropdown, tabs, chips, tooltips. - Skeleton loading,
empty state, error state, disabled state.

### 6.2 Admin

**Dashboard Admin** - Ringkasan jumlah mahasiswa, dosen, kelas, mata
kuliah, akun aktif/nonaktif. - Aktivitas sistem terbaru. - Ringkasan
semester berjalan. - Aksi cepat: tambah mahasiswa, tambah dosen, buat
semester, tambah mata kuliah. - Grafik hanya jika membantu pemahaman;
hindari dashboard penuh grafik.

**Manajemen Pengguna** - Tabel semua akun dengan kolom nama, username,
role, status, terakhir aktif, aksi. - Search, filter role/status,
pagination. - Modal tambah/edit, aktivasi/nonaktifkan, reset password,
detail akun. - Password awal hanya simulasi; jangan menampilkan
credential sensitif di halaman publik.

**Manajemen Mahasiswa** - Daftar mahasiswa dengan NIM, nama, program,
angkatan, kelas, semester aktif, status. - Detail profil akademik dan
ringkasan semester. - Aksi buat/edit/nonaktifkan/reset akses.

**Manajemen Dosen** - Daftar dosen dengan identitas/NIDN, nama, email,
mata kuliah, kelas yang ditugaskan, status. - Detail dosen dan penugasan
kelas. - Modal penugasan kelas dan pengaturan akses.

**Manajemen Semester** - Daftar semester 1--8 per mahasiswa, tahun
akademik, ganjil/genap, status. - Buat/aktifkan semester, arsipkan
semester sebelumnya. - Tampilkan bahwa perpindahan semester
mempertahankan histori.

**Manajemen Mata Kuliah** - Tabel mata kuliah, kode, semester, SKS bila
tersedia, dosen, kelas, jadwal, status. - Tambah/edit/detail mata
kuliah.

**Manajemen Kelas** - Daftar kelas dan anggota. - Penetapan dosen
pengampu. - Daftar mahasiswa per kelas. - Pembatasan akses kelas
berdasarkan assignment Admin.

**Data Akademik** - Ringkasan data per mahasiswa dan semester. - Entri
mata kuliah, pertemuan, jadwal, kehadiran, tugas, dan nilai. - Filter
mahasiswa/semester/mata kuliah. - Jangan menampilkan data mahasiswa
secara tercampur tanpa konteks pemilik data.

**Integrasi Google** - Kartu Gmail, Google Calendar, Google Drive. -
Status tersambung/belum tersambung, deskripsi izin, tombol
hubungkan/putuskan (simulasi). - Tampilkan consent/permission explainer;
jangan mengklaim integrasi sungguhan aktif.

**Manajemen File** - Daftar file, pemilik, kategori, ukuran, tanggal,
lokasi/semester. - Filter dan pencarian. - Preview metadata, unduh/hapus
simulasi dengan konfirmasi. - Tampilkan batas tipe dan ukuran file
sebagai aturan UI.

**Notifikasi** - Daftar notifikasi, kategori, status baca, filter,
tandai semua dibaca.

**Aktivitas Sistem** - Timeline/log aktivitas: akun dibuat, akun diubah,
kelas ditugaskan, materi diunggah, nilai dipublikasikan. - Filter aktor,
role, kategori, tanggal.

**Pengaturan** - Identitas aplikasi, tema, preferensi, batas file,
keamanan, backup (simulasi), konfigurasi akademik dan notifikasi.

### 6.3 Mahasiswa

**Dashboard Mahasiswa** - Sapaan, nama, NIM, semester aktif, tahun
akademik. - Kartu statistik: jumlah mata kuliah, tugas aktif, belum
selesai, selesai, terlambat, rata-rata nilai, persentase kehadiran. -
Jadwal hari ini. - Deadline terdekat dengan countdown. - Kalender
mini. - Progress tiap mata kuliah berdasarkan pertemuan selesai (contoh
9/16 = 56%). - Aktivitas terbaru: materi baru, tugas, pengumuman, nilai,
feedback, perubahan jadwal.

**Mata Kuliah Saya** - Grid/list mata kuliah dengan kode, dosen, kelas,
jadwal, ruang, semester, progress. - Filter semester/status dan
pencarian. - Klik kartu membuka Detail Mata Kuliah.

**Detail Mata Kuliah** - Header mata kuliah dan metadata. - Tab
Ringkasan, Pertemuan, Materi, Tugas, Nilai. - Daftar 16 pertemuan dengan
tanggal/status. - Progress hanya bertambah jika pertemuan berstatus
selesai, bukan hanya karena materi diunggah.

**Detail Pertemuan 1--16** - Informasi pertemuan, tanggal, topik, dosen,
ruang. - Materi dan file, catatan pribadi, tugas terkait, status
kehadiran. - Aksi preview/unduh file dan buka tugas.

**Materi** - Daftar materi dengan mata kuliah, pertemuan, tipe file,
uploader, tanggal. - Search dan filter mata kuliah/pertemuan/jenis
file. - Preview dan unduh simulasi.

**Tugas** - Daftar tugas dengan mata kuliah, deadline, status,
prioritas, nilai bila sudah dipublikasikan. - Filter status dan mata
kuliah. - Status: belum dimulai, dikerjakan, dikumpulkan, ditinjau,
perlu revisi, dinilai/selesai, terlambat.

**Detail Tugas** - Deskripsi, instruksi, dosen, tanggal dibuat,
deadline, format dan ukuran file. - Timeline status dan riwayat. - Area
pengumpulan dan feedback. - Bedakan status workflow Kanban pribadi
dengan status pengumpulan resmi.

**Pengumpulan Tugas** - Dropzone/select file simulasi, nama file,
ukuran, tipe, catatan untuk dosen. - Validasi format/ukuran secara
visual. - Tombol kirim, loading, sukses, dan error state. - Tampilkan
timestamp pengumpulan.

**Riwayat Pengumpulan** - Versi file, waktu, status, feedback, nilai,
revisi. - Jika revisi diizinkan, tombol kirim ulang.

**Kalender** - Tampilan hari/minggu/bulan/agenda. - Jadwal kelas,
deadline, UTS/UAS, presentasi, event akademik. - Filter jenis event dan
navigasi tanggal. - Sinkronisasi Google Calendar hanya simulasi.

**Kehadiran** - Ringkasan hadir, izin, sakit, alfa, persentase. -
Riwayat per mata kuliah/pertemuan. - Ambang peringatan default 75%,
dapat dikonfigurasi sesuai kebijakan akademik.

**Nilai** - Komponen tugas, kuis, UTS, UAS, nilai akhir, feedback,
histori. - IPS/IPK jika data contoh memadai. - Nilai yang belum
dipublikasikan tidak boleh terlihat sebagai nilai final.

**Grade Calculator** - Input bobot komponen dan target nilai. - Hitung
estimasi nilai ujian yang dibutuhkan. - Beri label jelas:
simulasi/perkiraan, bukan nilai resmi.

**Catatan Saya** - Buat/edit/hapus catatan, judul, tag, pencarian, urut
tanggal. - Catatan privat; tidak otomatis terlihat dosen.

**Study Planner** - Rencana belajar harian/mingguan. - Prioritas,
target, checklist, hubungan dengan mata kuliah dan tugas. - Ringkasan
progres.

**Kanban Task Management** - Kolom Belum, Sedang, Selesai. - Kartu tugas
berisi mata kuliah, deadline, prioritas, dan status. - Status Kanban
adalah pengelolaan pribadi, bukan bukti pengumpulan resmi.

**Pomodoro Timer** - Timer fokus/istirahat yang dapat dikonfigurasi
(contoh awal 25/5). - Hubungkan sesi dengan tugas/mata kuliah. - Riwayat
sesi dan statistik fokus. - Prototype timer dapat berjalan sebagai
simulasi frontend.

**Quick Search** - Akses cepat melalui Ctrl+K. - Cari mata kuliah,
materi, tugas, catatan, file, pengumuman, kalender. - Hasil
dikelompokkan berdasarkan tipe.

**Riwayat Akademik Semester 1--8** - Timeline/kartu semester. - Tahun
akademik, status aktif/arsip, daftar mata kuliah, IPS/IPK jika
tersedia. - Buka detail semester tanpa mengubah data semester lain.

**Notifikasi** - Tugas baru, deadline mendekat/terlambat, materi baru,
pengumuman, nilai, feedback, revisi, perubahan jadwal. - Filter
kategori, baca/belum dibaca, tandai semua dibaca.

**Profil** - Foto, nama, NIM, email, fakultas, program studi, kelas,
angkatan, semester aktif. - Edit field yang diizinkan.

**Pengaturan** - Light/Dark, notifikasi, kalender, Google,
password/security (visual simulasi), sesi dan logout.

**Arsip Dokumen Akademik** - Posisi paling bawah pada sidebar mahasiswa,
dipisahkan garis/divider. - Halaman sederhana berbentuk daftar/kategori:
KRS, KHS, transkrip, sertifikat, surat, dokumen lain. - Search/filter
semester dan tipe dokumen, upload/preview/unduh simulasi. - Tidak
ditampilkan sebagai kartu besar di dashboard dan tidak mengambil
perhatian dari fitur akademik utama.

### 6.4 Dosen

**Dashboard Dosen** - Jumlah kelas, mata kuliah, mahasiswa yang
diajar. - Tugas perlu dinilai, sudah dinilai, submission terlambat. -
Jadwal hari ini dan aktivitas kelas terbaru. - Aksi cepat buat tugas,
upload materi, input kehadiran.

**Kelas Saya** - Hanya kelas yang ditugaskan Admin. - Kartu kelas dengan
mata kuliah, semester, jumlah mahasiswa, jadwal. - Klik untuk Detail
Kelas.

**Mata Kuliah** - Daftar mata kuliah yang diampu. - Detail mata kuliah
dan daftar kelas terkait.

**Detail Kelas** - Ringkasan kelas, mahasiswa terdaftar, jadwal, materi,
tugas, kehadiran, nilai. - Jangan tampilkan kelas di luar penugasan
dosen.

**Materi** - Daftar materi per kelas/pertemuan. - Upload Materi dengan
judul, deskripsi, kelas, pertemuan, file, tanggal publikasi. - Preview,
edit, arsip/hapus simulasi.

**Tugas** - Daftar tugas, status, deadline, jumlah terkumpul, perlu
dinilai. - Filter per kelas dan status.

**Buat Tugas** - Judul, instruksi, mata kuliah/kelas, pertemuan, tanggal
mulai, deadline, format yang diizinkan, ukuran maksimum, opsi
revisi/perpanjangan. - Validasi form dan preview ringkasan sebelum
publikasi.

**Pengumpulan Tugas** - Daftar mahasiswa, status pengumpulan, waktu,
file, status terlambat. - Filter kelas, tugas, status.

**Detail Jawaban Mahasiswa** - Identitas mahasiswa dalam kelas yang
ditugaskan. - File yang dikumpulkan, waktu pengumpulan, riwayat versi. -
Panel nilai, feedback, dan status revisi.

**Penilaian** - Input nilai per komponen dan nilai akhir sesuai bobot. -
Simpan draft atau publikasikan. - Rekap kelas dengan filter. - Perubahan
nilai tercatat secara visual dalam aktivitas.

**Feedback dan Revisi** - Komentar dosen, status perlu revisi, batas
pengumpulan ulang. - Riwayat feedback dan versi submission.

**Kehadiran** - Daftar mahasiswa per pertemuan. - Status hadir, izin,
sakit, alfa. - Rekap dan persentase kehadiran.

**Pengumuman** - Buat/publikasi pengumuman ke kelas yang ditugaskan. -
Riwayat dan status publikasi.

**Kalender** - Jadwal mengajar, deadline tugas, agenda kelas, UTS/UAS. -
Tampilan hari/minggu/bulan/agenda.

**Perkembangan Mahasiswa** - Ringkasan progres pertemuan, submission,
nilai terpublikasi, kehadiran. - Hanya mahasiswa dari kelas yang
ditugaskan. - Hindari membandingkan atau mengekspos data mahasiswa di
luar kelas dosen.

**Notifikasi** - Submission baru/revisi, tugas menunggu penilaian,
deadline, aktivitas kelas.

**Profil dan Pengaturan** - Identitas dosen, email, foto, mata
kuliah/kelas yang diampu. - Preferensi tema, notifikasi, kalender,
keamanan, logout.

## 7. Data Contoh yang Konsisten

Gunakan akun utama Admin: - Rimawati --- username Rimawati --- NIM
240511184 --- role Admin.

Untuk menguji multi-user, buat beberapa akun mahasiswa dan dosen dummy
dengan identitas fiktif yang jelas. Jangan memakai data pribadi nyata
selain data contoh yang sudah ditetapkan.

### Jadwal contoh Rimawati --- Semester Ganjil 2026/2027

  --------------------------------------------------------------------------
  Hari           Waktu          Mata Kuliah    Kelas          Ruang
  -------------- -------------- -------------- -------------- --------------
  Senin          07:30--10:00   Manajemen      TI24D          Mahdor D 406
                                Proyek                        
                                Teknologi                     
                                Informasi                     

  Senin          10:00--12:30   Pemrograman    TI24D          Mahdor D 406
                                Berbasis                      
                                Platform                      

  Senin          13:00--15:30   Analisis dan   TI24D          Mahdor D 406
                                Design PL                     

  Selasa         09:10--11:40   Tata Tulis     TI24D          Mahdor D 406
                                Ilmiah                        
                                (Metodologi                   
                                Penelitian)                   

  Selasa         13:00--15:30   Teknologi      24K2B          Mahdor D 406
                                AR/VR                         

  Selasa         15:30--17:00   Interaksi      TI25D          Mahdor D 403
                                Manusia &                     
                                Komputer                      

  Rabu           18:00--22:00   AI Computing   24K2A          Mahdor C 303
                                Platform                      

  Kamis          10:00--11:40   AIK 4 (Islam   TI24D          Mahdor D 405
                                dan Ilmu                      
                                Pengetahuan)                  
  --------------------------------------------------------------------------

Tidak ada jadwal yang diberikan untuk Jumat--Minggu. Jangan mengarang
kelas pada hari tersebut. Jadwal IMK yang benar adalah Selasa
15:30--17:00.

### Aturan relasi data dummy

-   Semua mata kuliah, kelas, dosen, tugas, nilai, dan jadwal harus
    saling konsisten.
-   Dosen pengampu pada contoh kelas harus sama pada halaman kelas,
    tugas, materi, kalender, dan penilaian.
-   Setiap tugas terhubung ke satu mata kuliah/kelas dan deadline yang
    konsisten.
-   Nilai hanya tampil sebagai nilai resmi setelah dipublikasikan oleh
    dosen.
-   Mahasiswa A tidak boleh melihat catatan, file privat, nilai, atau
    tugas personal Mahasiswa B.
-   Dosen hanya melihat mahasiswa dalam kelas yang ditugaskan.
-   Gunakan data fiktif tambahan dan beri label sebagai data demo.

## 8. Status, Komponen, dan Pola Interaksi

### Status tugas

Belum dimulai, Dikerjakan, Dikumpulkan, Ditinjau, Perlu Revisi,
Dinilai/Selesai, Terlambat.

### Status pertemuan

Terjadwal, Materi tersedia, Selesai, Dibatalkan. Progress mata kuliah
dihitung dari pertemuan berstatus Selesai.

### Status kehadiran

Hadir, Izin, Sakit, Alfa.

### Interaksi prototype wajib

-   Semua item navigasi dapat diklik dan membuka halaman/section yang
    sesuai.
-   Simulasi login menghasilkan dashboard berbeda sesuai role.
-   Kartu statistik membuka daftar terkait.
-   Search dan filter tabel berfungsi pada data dummy.
-   Modal tambah/edit/hapus dapat dibuka dan ditutup.
-   Form menerima input dan menampilkan validasi/toast.
-   Upload file memiliki interaksi simulasi dan validasi
    nama/tipe/ukuran.
-   Kalender dapat berpindah hari/minggu/bulan/agenda dan tanggal.
-   Detail mata kuliah membuka daftar 16 pertemuan.
-   Detail tugas membuka alur pengumpulan dan riwayat.
-   Dosen dapat mensimulasikan pembuatan tugas, penilaian, feedback,
    revisi, dan kehadiran.
-   Kanban dapat memindahkan kartu antar kolom.
-   Pomodoro dapat start/pause/reset.
-   Theme toggle mengganti Light/Dark.
-   Quick Search dapat dibuka dengan Ctrl+K dan tombol pencarian.
-   Tombol yang belum terhubung ke aksi nyata harus diberi perilaku demo
    yang masuk akal, bukan dibiarkan mati.

## 9. Integrasi dan Batasan Simulasi

Tampilkan Gmail, Google Calendar, dan Google Drive sebagai integrasi
yang dapat dikonfigurasi. Pada prototype, gunakan status demo dan modal
penjelasan izin. Jangan meminta kredensial Google, jangan mengklaim
OAuth berjalan, dan jangan melakukan sinkronisasi sungguhan.

PWA, backup, keamanan, sesi, dan batas ukuran file dapat ditampilkan
sebagai UI konfigurasi atau simulasi. Jangan mengimplementasikan backend
atau penyimpanan persisten pada tahap desain.

## 10. Aksesibilitas dan Kualitas

-   Kontras teks dan status harus memadai.
-   Jangan mengandalkan warna saja; sertakan label status.
-   Semua tombol memiliki label yang jelas.
-   Fokus keyboard terlihat.
-   Form memiliki label dan pesan validasi.
-   Layout dapat digunakan pada desktop, tablet, dan ponsel.
-   Hindari teks terlalu kecil, tabel terlalu padat, dan terlalu banyak
    kartu dalam satu layar.

## 11. Kriteria Penerimaan Desain

Desain dapat dianggap siap ditinjau jika: 1. Semua halaman dalam peta
halaman sudah memiliki rancangan. 2. Ketiga role memiliki sidebar,
dashboard, dan hak akses visual berbeda. 3. Tema Mocha Rose diterapkan
konsisten. 4. Arsip Dokumen Akademik berada di bagian paling bawah
navigasi mahasiswa. 5. Data demo konsisten dengan jadwal Rimawati dan
relasi kelas/dosen/tugas. 6. Seluruh alur utama dapat dicoba melalui
prototype. 7. Layout desktop dan mobile telah diperiksa. 8. Tidak ada
halaman yang menampilkan data di luar hak akses role. 9. Tidak ada
backend/database atau integrasi sungguhan yang dibangun pada tahap ini.
10. Hasil siap diperiksa dan direvisi sebelum tahap coding produk
sebenarnya.

## 12. TAMBAHAN DATA AKADEMIK — JADWAL, RIWAYAT PERTEMUAN, DAN KEHADIRAN

Gunakan data berikut sebagai acuan terbaru untuk mengisi jadwal dan riwayat akademik mahasiswa pada Semester Ganjil Tahun Akademik 2026/2027.

**PENTING:**

- Data ini menggantikan jadwal sebelumnya apabila terdapat perbedaan.
- Bedakan jadwal rutin kuliah dengan riwayat pertemuan yang benar-benar sudah tercatat.
- Setiap mata kuliah dapat memiliki maksimal 16 pertemuan dalam satu semester, tetapi jangan membuat 16 pertemuan seolah-olah semuanya sudah terlaksana.
- Hanya masukkan pertemuan yang sudah memiliki informasi.
- Pertemuan yang belum tercatat harus ditampilkan sebagai belum ada riwayat, bukan dianggap sudah berlangsung.
- Jangan mengarang tanggal, materi, presensi, maupun informasi dosen.

### A. DATA JADWAL MATA KULIAH

| Mata Kuliah                               | Kelas | Dosen              | SKS | Hari dan Waktu      | Ruangan         |
| ----------------------------------------- | ----- | ------------------ | --- | ------------------- | --------------- |
| Analisis dan Desain Perangkat Lunak       | TI24D | Dyan Novianti      | 3   | Senin, 12.00–16.30  | G. Mahdior D406 |
| Pemrograman Berbasis Platform             | TI24D | Sugianto           | 3   | Senin, 08.00–12.30  | G. Mahdior D406 |
| Tata Tulis Ilmiah (Metodologi Penelitian) | TI24D | Hay Gunawan        | 2   | Selasa, 08.00–14.00 | G. Mahdior D406 |
| Manajemen Proyek Teknologi Informasi      | TI24D | Gunaly Dwi Hantoro | 3   | Senin, 07.30–10.00  | G. Mahdior D406 |
| AIK 4 (Islam dan Ilmu Pengetahuan)        | TI24D | Mas'ud Mustaqwa    | 2   | Kamis, 10.00–14.00  | G. Mahdior D405 |
| AI Computing Platform                     | 24K2A | Fredo Wicaksono    | 3   | Belum tersedia      | Belum tersedia  |
| Teknologi AR/VR                           | 24K2B | Muhamad Imam       | 3   | Selasa, 12.00–15.30 | G. Mahdior D406 |
| Interaksi Manusia dan Komputer (IMK)      | TI25D | Muhamad Imam       | 3   | Selasa, 15.30 WIB   | G. Mahdior D403 |

*(Total Beban SKS Semester 5 = **22 SKS** dari 8 Mata Kuliah)*

**Catatan khusus jadwal IMK:**

Jadwal yang tercantum pada sistem E-Class masih menunjukkan hari Senin. Namun, berdasarkan kesepakatan dengan dosen pengampu, perkuliahan sebenarnya dilaksanakan pada hari Selasa pukul 15.30 WIB di G. Mahdior D403.

Untuk kalender dan jadwal aktif CampusFlow, gunakan jadwal Selasa pukul 15.30 WIB. Simpan informasi jadwal Senin sebagai catatan jadwal sistem, bukan sebagai jadwal aktual.

Apabila terdapat jadwal yang saling bertumpukan, jangan mengubah jam secara otomatis. Pertahankan data yang diberikan dan tampilkan indikator konflik jadwal agar dapat diperiksa.

### B. RIWAYAT PERTEMUAN YANG SUDAH TERCATAT

**1. Analisis dan Desain Perangkat Lunak**
- Pertemuan 1 — 19 Oktober 2026 — Kuliah.
- Pertemuan 2 — 26 Oktober 2026 — Kuliah; Presentasi Project Website (BAB 2).

**2. Pemrograman Berbasis Platform**
- Pertemuan 1 — 19 Oktober 2026 — Kuliah; Pengenalan Mata Kuliah dan Kontrak Belajar.
- Pertemuan 2 — 26 Oktober 2026 — Kuliah; Arsitektur dan Karakteristik Platform Web, Desktop, Mobile.

**3. Tata Tulis Ilmiah**
- Pertemuan 1 — 27 Oktober 2026 — Kuliah.

**4. Manajemen Proyek Teknologi Informasi**
- Belum ada pertemuan yang tercatat.

**5. AIK 4**
- Pertemuan 1 — 20 Oktober 2026 — Kuliah; Kontrak Belajar, Penjelasan Project, dan Komponen Penilaian.
- Pertemuan 2 — 29 Oktober 2026 — Kuliah; Hakikat Ilmu dan Teologi Ilmu.

**6. AI Computing Platform**
- Pertemuan 1 — Tercatat melalui poster AI Computing Platform.
- Pertemuan 2 — Tercatat melalui dokumentasi pertemuan daring; materi Text to Image.
- Tanggal pertemuan belum tersedia, sehingga jangan mengarang tanggal.

**7. Teknologi AR/VR**
- Pertemuan 1 — 27 Oktober 2026 — Kuliah; Pendahuluan dan Kontrak Kuliah.

**8. Interaksi Manusia dan Komputer**
- Pertemuan 1 — 26 Oktober 2026 — Kuliah.
- Catatan: tanggal tersebut mengikuti catatan sistem yang tersedia. Jadwal aktual perkuliahan berikutnya mengikuti kesepakatan Selasa pukul 15.30 WIB.

### C. ATURAN PENCATATAN KEHADIRAN

Berdasarkan konfirmasi mahasiswa, seluruh pertemuan yang sudah diikuti dinyatakan **Hadir**.

1. Catat status Hadir pada pertemuan yang sudah dikonfirmasi.
2. Jangan membuat presensi untuk pertemuan yang belum tercatat atau belum berlangsung.
3. Manajemen Proyek TI belum memiliki riwayat pertemuan maupun data absensi yang dapat dihitung.
4. Pertemuan AI Computing Platform tetap dicatat meskipun tanggalnya belum tersedia.
5. Persentase kehadiran dihitung berdasarkan data absensi pertemuan yang tersedia, bukan berdasarkan 16 pertemuan yang direncanakan.
6. Jika data absensi belum tersedia, tampilkan "Belum ada data absensi", bukan otomatis 0% atau 100%.
7. Berikan keterangan bahwa data kehadiran ini berdasarkan konfirmasi mahasiswa dan belum diverifikasi langsung dengan E-Class.