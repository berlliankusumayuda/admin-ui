# Dokumentasi Atomic Design — Finebank Admin UI

Dokumen ini merangkum seluruh component UI yang telah dibuat pada project
Finebank berdasarkan konsep **Atomic Design** (Pages → Layouts → Fragments →
Elements), untuk setiap halaman yang ada.

---

## 1. Pages

| Page | File | Keterangan |
|---|---|---|
| **SignIn** | `src/pages/SignIn.jsx` | Halaman login |
| **SignUp** | `src/pages/SignUp.jsx` | Halaman register |
| **Dashboard (Overview)** | `src/pages/dashboard.jsx` | Halaman utama/overview setelah login |
| **Balance** | `src/pages/balance.jsx` | Halaman daftar balance/akun |
| **Expenses** | `src/pages/expenses.jsx` | Halaman perbandingan pengeluaran (fetch dari API) |
| **Error** | `src/pages/error.jsx` | Halaman error/404 |

---

## 2. Layouts

| Layout | File | Digunakan pada |
|---|---|---|
| **AuthLayout** | `src/components/Layouts/AuthLayout.jsx` | SignIn, SignUp — berisi Logo, form, dan toggle dark mode |
| **MainLayout** | `src/components/Layouts/MainLayout.jsx` | Dashboard, Balance, Expenses — berisi Sidebar/Navbar, konten utama, Backdrop logout, toggle dark mode |

---

## 3. Fragments

Fragment adalah gabungan beberapa Element menjadi satu blok fungsional (biasanya spesifik untuk satu bagian halaman).

| Fragment | File | Halaman | Keterangan |
|---|---|---|---|
| **FormSignIn** | `Fragments/FormSignIn.jsx` | SignIn | Form login dengan validasi Formik + Yup |
| **FormSignUp** | `Fragments/FormSignUp.jsx` | SignUp | Form register dengan validasi Formik + Yup |
| **CardBalance** | `Fragments/CardBalance.jsx` | Dashboard | Card total balance (carousel akun) |
| **CardGoal** | `Fragments/CardGoal.jsx` | Dashboard | Card goals + loader saat fetch data |
| **CardUpcomingBill** | `Fragments/CardUpcomingBill.jsx` | Dashboard | Card upcoming bill, data dari API `/bills` + loader |
| **CardRecentTransaction** | `Fragments/CardRecentTransaction.jsx` | Dashboard | Card daftar transaksi terbaru + filter tab |
| **CardStatistic** | `Fragments/CardStatistic.jsx` | Dashboard | Card grafik statistik mingguan |
| **CardExpenseBreakdown** | `Fragments/CardExpenseBreakdown.jsx` | Dashboard | Card rincian pengeluaran per kategori (dummy data) |
| **CardExpenseComparison** | `Fragments/CardExpenseComparison.jsx` | Expenses | **Card baru** — perbandingan pengeluaran per kategori dari API `/expenses` |

---

## 4. Elements

Element adalah komponen atomic terkecil yang dapat dipakai berulang di berbagai Fragment/Layout.

| Element | File | Keterangan |
|---|---|---|
| **Logo** | `Elements/Logo.jsx` | Logo Finebank.io |
| **Button** | `Elements/Button.jsx` | Tombol primary/secondary, mendukung teks dinamis (mis. "Loading...") |
| **Input** | `Elements/Input.jsx` | Input dasar (mendukung dark mode) |
| **LabeledInput** | `Elements/LabeledInput.jsx` | Input + label |
| **CheckBox** | `Elements/CheckBox.jsx` | Checkbox + label |
| **Icon** | `Elements/Icon.jsx` | Kumpulan icon SVG (sidebar, kategori, arrow, dll) |
| **Card** | `Elements/Card.jsx` | Container generik untuk semua Card (mendukung dark mode) |
| **AppSnackbar** | `Elements/AppSnackbar.jsx` | Notifikasi sukses/error (MUI Snackbar) |
| **CompositionExample** | `Elements/CompositionExample.jsx` | Gauge chart (MUI X Charts) |
| **BarsDataset** | `Elements/BarsDataset.jsx` | Bar chart statistik (MUI X Charts) |
| **DotsMobileStepper** | `Elements/DotsMobileStepper.jsx` | Carousel/stepper untuk CardBalance |
| **DarkModeToggle** | `Elements/DarkModeToggle.jsx` | **Element baru** — toggle switch untuk dark/light mode |

---

## 5. Context (State Management)

| Context | File | Keterangan |
|---|---|---|
| **AuthContext** | `context/authContext.jsx` | Menyimpan state user login (JWT), login/logout |
| **ThemeContext** | `context/themeContext.jsx` | Menyimpan state warna tema (green/blue/purple/pink/brown) |
| **DarkModeContext** | `context/darkModeContext.jsx` | **Context baru** — menyimpan state dark/light mode |

---

## 6. Services

| Service | File | Fungsi |
|---|---|---|
| **authService** | `services/authService.jsx` | `loginService`, `registerService`, `logoutService` |
| **dataService** | `services/dataService.jsx` | `goalService`, `expensesService`, `billsService` |
