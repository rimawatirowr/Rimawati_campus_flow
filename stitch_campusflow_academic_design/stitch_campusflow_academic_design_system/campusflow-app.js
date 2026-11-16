/**
 * CampusFlow Academic Design System — Interactive Prototype Runtime
 * Connects all 23 screens, role-based navigation (Mahasiswa, Dosen, Admin),
 * Mocha Rose Dark Mode, Ctrl+K Command Palette, Notifications, Modals,
 * and the Unified Academic Ground-Truth Database (Jadwal, Riwayat Pertemuan, & Kehadiran).
 */
(function () {
  'use strict';

  // ============================================================================
  // 0. UNIFIED ACADEMIC DATABASE (GROUND TRUTH — SEMESTER GANJIL 2026/2027)
  // ============================================================================
  const ACADEMIC_DB = {
    semester: 'Semester Ganjil 2026/2027',
    currentDate: 'Senin, 2 November 2026',
    currentWeek: 'Minggu ke-3',
    student: {
      name: 'Rimawati',
      nim: '240511184',
      prodi: 'S1 Teknik Informatika',
      defaultClass: 'TI24D'
    },
    verificationDisclaimer:
      'Data kehadiran ini berdasarkan konfirmasi mahasiswa dan belum diverifikasi langsung dengan E-Class. Persentase dihitung dari pertemuan yang sudah tercatat, bukan dari 16 pertemuan yang direncanakan.',
    courses: [
      {
        id: 'adpl',
        code: 'IF3102',
        name: 'Analisis dan Desain Perangkat Lunak',
        shortName: 'Analisis & Desain PL',
        kelas: 'TI24D',
        lecturer: 'Dyan Novianti',
        sks: 3,
        day: 'Senin',
        time: '12.00–16.30',
        scheduleText: 'Senin, 12.00–16.30 WIB',
        room: 'G. Mahdior D406',
        conflictWith: 'Bertumpukan pukul 12.00–12.30 WIB dengan Pemrograman Berbasis Platform (Senin, 08.00–12.30) di G. Mahdior D406.',
        scheduleNote: null,
        recordedSessions: [
          {
            number: 1,
            date: '19 Oktober 2026',
            topic: 'Kuliah',
            detail: 'Pelaksanaan perkuliahan tatap muka Pertemuan 1.',
            status: 'Terlaksana',
            attendance: 'Hadir'
          },
          {
            number: 2,
            date: '26 Oktober 2026',
            topic: 'Kuliah; Presentasi Project Website (BAB 2)',
            detail: 'Kuliah tatap muka dan presentasi progres Project Website (BAB 2).',
            status: 'Terlaksana',
            attendance: 'Hadir'
          }
        ]
      },
      {
        id: 'pbp',
        code: 'IF3204',
        name: 'Pemrograman Berbasis Platform',
        shortName: 'Pemrograman Platform',
        kelas: 'TI24D',
        lecturer: 'Sugianto',
        sks: 3,
        day: 'Senin',
        time: '08.00–12.30',
        scheduleText: 'Senin, 08.00–12.30 WIB',
        room: 'G. Mahdior D406',
        conflictWith:
          'Bertumpukan pukul 08.00–10.00 WIB dengan Manajemen Proyek TI (07.30–10.00) dan pukul 12.00–12.30 WIB dengan Analisis & Desain PL (12.00–16.30).',
        scheduleNote: null,
        recordedSessions: [
          {
            number: 1,
            date: '19 Oktober 2026',
            topic: 'Kuliah; Pengenalan Mata Kuliah dan Kontrak Belajar',
            detail: 'Pengenalan ruang lingkup mata kuliah dan kesepakatan kontrak belajar satu semester.',
            status: 'Terlaksana',
            attendance: 'Hadir'
          },
          {
            number: 2,
            date: '26 Oktober 2026',
            topic: 'Kuliah; Arsitektur dan Karakteristik Platform Web, Desktop, Mobile',
            detail: 'Pembahasan arsitektur serta karakteristik pengembangan aplikasi lintas platform (Web, Desktop, Mobile).',
            status: 'Terlaksana',
            attendance: 'Hadir'
          }
        ]
      },
      {
        id: 'tti',
        code: 'IF3401',
        name: 'Tata Tulis Ilmiah (Metodologi Penelitian)',
        shortName: 'Tata Tulis Ilmiah',
        kelas: 'TI24D',
        lecturer: 'Hay Gunawan',
        sks: 2,
        day: 'Selasa',
        time: '08.00–14.00',
        scheduleText: 'Selasa, 08.00–14.00 WIB',
        room: 'G. Mahdior D406',
        conflictWith: 'Bertumpukan pukul 12.00–14.00 WIB dengan Teknologi AR/VR (Selasa, 12.00–15.30) di G. Mahdior D406.',
        scheduleNote: null,
        recordedSessions: [
          {
            number: 1,
            date: '27 Oktober 2026',
            topic: 'Kuliah',
            detail: 'Pelaksanaan perkuliahan tatap muka Pertemuan 1.',
            status: 'Terlaksana',
            attendance: 'Hadir'
          }
        ]
      },
      {
        id: 'mpti',
        code: 'IF3308',
        name: 'Manajemen Proyek Teknologi Informasi',
        shortName: 'Manajemen Proyek TI',
        kelas: 'TI24D',
        lecturer: 'Gunaly Dwi Hantoro',
        sks: 3,
        day: 'Senin',
        time: '07.30–10.00',
        scheduleText: 'Senin, 07.30–10.00 WIB',
        room: 'G. Mahdior D406',
        conflictWith: 'Bertumpukan pukul 08.00–10.00 WIB dengan Pemrograman Berbasis Platform (Senin, 08.00–12.30) di G. Mahdior D406.',
        scheduleNote: 'Belum ada pertemuan yang tercatat maupun data absensi yang dapat dihitung.',
        recordedSessions: []
      },
      {
        id: 'aik4',
        code: 'UN1104',
        name: 'AIK 4 (Islam dan Ilmu Pengetahuan)',
        shortName: 'AIK 4',
        kelas: 'TI24D',
        lecturer: "Mas'ud Mustaqwa",
        sks: 2,
        day: 'Kamis',
        time: '10.00–14.00',
        scheduleText: 'Kamis, 10.00–14.00 WIB',
        room: 'G. Mahdior D405',
        conflictWith: null,
        scheduleNote: null,
        recordedSessions: [
          {
            number: 1,
            date: '20 Oktober 2026',
            topic: 'Kuliah; Kontrak Belajar, Penjelasan Project, dan Komponen Penilaian',
            detail: 'Penjelasan kontrak perkuliahan, skema project semester, dan bobot komponen penilaian.',
            status: 'Terlaksana',
            attendance: 'Hadir'
          },
          {
            number: 2,
            date: '29 Oktober 2026',
            topic: 'Kuliah; Hakikat Ilmu dan Teologi Ilmu',
            detail: 'Kajian mengenai hakikat ilmu pengetahuan dan landasan teologi ilmu dalam perspektif Islam.',
            status: 'Terlaksana',
            attendance: 'Hadir'
          }
        ]
      },
      {
        id: 'aicp',
        code: 'IF3602',
        name: 'AI Computing Platform',
        shortName: 'AI Computing Platform',
        kelas: '24K2A',
        lecturer: 'Fredo Wicaksono',
        sks: 3,
        day: 'Belum tersedia',
        time: 'Belum tersedia',
        scheduleText: 'Belum tersedia',
        room: 'Belum tersedia',
        conflictWith: null,
        scheduleNote: 'Jadwal rutin & ruangan belum tersedia di sistem. Tanggal pertemuan 1 & 2 belum tersedia.',
        recordedSessions: [
          {
            number: 1,
            date: 'Tanggal belum tersedia',
            topic: 'Tercatat melalui poster AI Computing Platform',
            detail: 'Pertemuan 1 tercatat berdasarkan informasi poster resmi AI Computing Platform (tanggal belum tersedia).',
            status: 'Terlaksana',
            attendance: 'Hadir'
          },
          {
            number: 2,
            date: 'Tanggal belum tersedia',
            topic: 'Tercatat melalui dokumentasi pertemuan daring; materi Text to Image',
            detail: 'Pertemuan 2 dilaksanakan secara daring membahas materi Text to Image (tanggal belum tersedia).',
            status: 'Terlaksana',
            attendance: 'Hadir'
          }
        ]
      },
      {
        id: 'arvr',
        code: 'IF3510',
        name: 'Teknologi AR/VR',
        shortName: 'Teknologi AR/VR',
        kelas: '24K2B',
        lecturer: 'Muhamad Imam',
        sks: 3,
        day: 'Selasa',
        time: '12.00–15.30',
        scheduleText: 'Selasa, 12.00–15.30 WIB',
        room: 'G. Mahdior D406',
        conflictWith: 'Bertumpukan pukul 12.00–14.00 WIB dengan Tata Tulis Ilmiah (Selasa, 08.00–14.00) di G. Mahdior D406.',
        scheduleNote: null,
        recordedSessions: [
          {
            number: 1,
            date: '27 Oktober 2026',
            topic: 'Kuliah; Pendahuluan dan Kontrak Kuliah',
            detail: 'Pengenalan teknologi Augmented Reality / Virtual Reality serta kontrak perkuliahan.',
            status: 'Terlaksana',
            attendance: 'Hadir'
          }
        ]
      },
      {
        id: 'imk',
        code: 'IF3208',
        name: 'Interaksi Manusia dan Komputer (IMK)',
        shortName: 'Interaksi Manusia & Komputer',
        kelas: 'TI25D',
        lecturer: 'Muhamad Imam',
        sks: 3,
        day: 'Selasa',
        time: '15.30 WIB',
        scheduleText: 'Selasa, 15.30 WIB',
        room: 'G. Mahdior D403',
        conflictWith: null,
        eclassSystemSchedule: 'Hari Senin (Catatan jadwal pada sistem E-Class)',
        scheduleNote:
          'Jadwal di sistem E-Class masih tercantum hari Senin. Berdasarkan kesepakatan dengan dosen pengampu, perkuliahan aktual dilaksanakan hari Selasa pukul 15.30 WIB di G. Mahdior D403.',
        recordedSessions: [
          {
            number: 1,
            date: '26 Oktober 2026',
            topic: 'Kuliah',
            detail:
              'Catatan: tanggal 26 Oktober 2026 mengikuti catatan sistem yang tersedia. Jadwal aktual perkuliahan berikutnya mengikuti kesepakatan Selasa pukul 15.30 WIB.',
            status: 'Terlaksana',
            attendance: 'Hadir'
          }
        ]
      }
    ]
  };

  // Helper to compute course attendance & session stats accurately
  function getCourseStats(course) {
    const totalPlanned = 16;
    const recordedCount = course.recordedSessions.length;
    const hadirCount = course.recordedSessions.filter((s) => s.attendance === 'Hadir').length;
    const izinCount = course.recordedSessions.filter((s) => s.attendance === 'Izin').length;
    const sakitCount = course.recordedSessions.filter((s) => s.attendance === 'Sakit').length;
    const alpaCount = course.recordedSessions.filter((s) => s.attendance === 'Alpa').length;
    const hasAttendanceData = recordedCount > 0;
    const attendancePct = hasAttendanceData ? Math.round((hadirCount / recordedCount) * 100) : null;
    const attendanceText = hasAttendanceData ? `${attendancePct}% (${hadirCount}/${recordedCount} Hadir)` : 'Belum ada data absensi';

    return {
      totalPlanned,
      recordedCount,
      unrecordedCount: totalPlanned - recordedCount,
      hadirCount,
      izinCount,
      sakitCount,
      alpaCount,
      hasAttendanceData,
      attendancePct,
      attendanceText
    };
  }

  function getGlobalAcademicStats() {
    let totalSks = 0;
    let totalRecordedSessions = 0;
    let totalHadir = 0;
    let coursesWithAttendance = 0;

    ACADEMIC_DB.courses.forEach((c) => {
      totalSks += c.sks;
      const st = getCourseStats(c);
      totalRecordedSessions += st.recordedCount;
      totalHadir += st.hadirCount;
      if (st.hasAttendanceData) coursesWithAttendance++;
    });

    const overallPct = totalRecordedSessions > 0 ? Math.round((totalHadir / totalRecordedSessions) * 100) : 0;
    return {
      totalCourses: ACADEMIC_DB.courses.length,
      totalSks,
      totalPlannedSessions: ACADEMIC_DB.courses.length * 16,
      totalRecordedSessions,
      totalHadir,
      coursesWithAttendance,
      overallPct
    };
  }

  window.CF_ACADEMIC_DB = ACADEMIC_DB;

  // ============================================================================
  // 1. SCREEN & ROLE REGISTRY (23 Screens)
  // ============================================================================
  const SCREENS = {
    login_campusflow_1: { id: 'login_campusflow_1', title: 'Login Portal (Klasik)', role: 'auth', icon: 'login', category: 'Autentikasi' },
    login_campusflow_2: { id: 'login_campusflow_2', title: 'Login CampusFlow', role: 'auth', icon: 'lock_open', category: 'Autentikasi' },

    dashboard_mahasiswa: { id: 'dashboard_mahasiswa', title: 'Dashboard', role: 'mahasiswa', icon: 'space_dashboard', category: 'Menu Utama' },
    mata_kuliah_saya_mahasiswa: { id: 'mata_kuliah_saya_mahasiswa', title: 'Mata Kuliah Saya', role: 'mahasiswa', icon: 'menu_book', category: 'Akademik' },
    detail_mata_kuliah_manajemen_proyek_ti: { id: 'detail_mata_kuliah_manajemen_proyek_ti', title: 'Detail Mata Kuliah', role: 'mahasiswa', icon: 'school', category: 'Akademik' },
    kalender_akademik_jadwal_kuliah_mahasiswa: { id: 'kalender_akademik_jadwal_kuliah_mahasiswa', title: 'Jadwal & Kalender', role: 'mahasiswa', icon: 'calendar_month', category: 'Akademik' },
    kehadiran_presensi_akademik_mahasiswa: { id: 'kehadiran_presensi_akademik_mahasiswa', title: 'Kehadiran & Presensi', role: 'mahasiswa', icon: 'fact_check', category: 'Akademik' },
    detail_tugas_pengumpulan_mahasiswa: { id: 'detail_tugas_pengumpulan_mahasiswa', title: 'Tugas & Submission', role: 'mahasiswa', icon: 'assignment_turned_in', category: 'Akademik' },
    nilai_grade_calculator_mahasiswa: { id: 'nilai_grade_calculator_mahasiswa', title: 'Nilai & Grade Calculator', role: 'mahasiswa', icon: 'calculate', category: 'Evaluasi & Studi' },
    riwayat_akademik_semester_1_8_mahasiswa: { id: 'riwayat_akademik_semester_1_8_mahasiswa', title: 'Riwayat Akademik (Sem 1–8)', role: 'mahasiswa', icon: 'history_edu', category: 'Evaluasi & Studi' },
    study_planner_kanban_pomodoro_timer_mahasiswa: { id: 'study_planner_kanban_pomodoro_timer_mahasiswa', title: 'Study Planner & Pomodoro', role: 'mahasiswa', icon: 'view_kanban', category: 'Produktivitas' },
    arsip_dokumen_akademik_mahasiswa: { id: 'arsip_dokumen_akademik_mahasiswa', title: 'Arsip Dokumen Akademik', role: 'mahasiswa', icon: 'folder_special', category: 'BottomAnchor' },

    dashboard_dosen: { id: 'dashboard_dosen', title: 'Dashboard Dosen', role: 'dosen', icon: 'dashboard', category: 'Portal Dosen' },
    materi_perkuliahan_distribusi_modul_dosen: { id: 'materi_perkuliahan_distribusi_modul_dosen', title: 'Materi & Distribusi Modul', role: 'dosen', icon: 'library_books', category: 'Pengajaran' },
    penilaian_feedback_submission_dosen: { id: 'penilaian_feedback_submission_dosen', title: 'Penilaian & Evaluasi Tugas', role: 'dosen', icon: 'grading', category: 'Pengajaran' },
    perkembangan_mahasiswa_dosen: { id: 'perkembangan_mahasiswa_dosen', title: 'Perkembangan & Presensi Mhs', role: 'dosen', icon: 'monitoring', category: 'Pengajaran' },

    dashboard_admin: { id: 'dashboard_admin', title: 'Dashboard Admin', role: 'admin', icon: 'admin_panel_settings', category: 'Tata Kelola' },
    manajemen_pengguna_admin: { id: 'manajemen_pengguna_admin', title: 'Manajemen Pengguna', role: 'admin', icon: 'manage_accounts', category: 'Data Induk' },
    manajemen_mahasiswa_data_induk_admin: { id: 'manajemen_mahasiswa_data_induk_admin', title: 'Manajemen Mahasiswa', role: 'admin', icon: 'groups', category: 'Data Induk' },
    manajemen_dosen_penugasan_kelas_admin: { id: 'manajemen_dosen_penugasan_kelas_admin', title: 'Manajemen Dosen & Kelas', role: 'admin', icon: 'badge', category: 'Data Induk' },
    manajemen_semester_kurikulum_admin: { id: 'manajemen_semester_kurikulum_admin', title: 'Semester & Kurikulum', role: 'admin', icon: 'account_tree', category: 'Kurikulum & Sistem' },
    manajemen_kelas_anggota_admin: { id: 'manajemen_kelas_anggota_admin', title: 'Manajemen Kelas & Anggota', role: 'admin', icon: 'meeting_room', category: 'Kurikulum & Sistem' },
    integrasi_google_pengaturan_sistem_admin: { id: 'integrasi_google_pengaturan_sistem_admin', title: 'Integrasi Google & Sistem', role: 'admin', icon: 'cloud_sync', category: 'Kurikulum & Sistem' }
  };

  const ROLE_PROFILES = {
    mahasiswa: {
      roleLabel: 'Mahasiswa',
      badgeText: 'Mahasiswa',
      name: 'Rimawati',
      sub: 'NIM: 240511184 • Kelas TI24D',
      email: 'rimawati@student.campusflow.ac.id',
      home: 'dashboard_mahasiswa'
    },
    dosen: {
      roleLabel: 'Dosen Pengampu',
      badgeText: 'Dosen',
      name: 'Gunaly Dwi Hantoro',
      sub: 'Dosen Pengampu • Kelas TI24D',
      email: 'gunaly.hantoro@lecturer.campusflow.ac.id',
      home: 'dashboard_dosen'
    },
    admin: {
      roleLabel: 'Administrator SIAKAD',
      badgeText: 'Admin',
      name: 'Admin Akademik',
      sub: 'NIP: 19880412201504 • BAAK Pusat',
      email: 'admin@campusflow.ac.id',
      home: 'dashboard_admin'
    }
  };

  function getCurrentScreenId() {
    const parts = window.location.pathname.replace(/\\/g, '/').split('/').filter(Boolean);
    for (let i = parts.length - 1; i >= 0; i--) {
      if (SCREENS[parts[i]]) return parts[i];
    }
    return 'login_campusflow_2';
  }

  function getScreenUrl(screenId, query = '') {
    if (!SCREENS[screenId]) return '#';
    const path = window.location.pathname.replace(/\\/g, '/');
    let base = `../${screenId}/code.html`;
    if (path.endsWith('/stitch_campusflow_academic_design_system/') || path.endsWith('/stitch_campusflow_academic_design_system/index.html')) {
      base = `./${screenId}/code.html`;
    }
    return query ? `${base}?${query}` : base;
  }

  const currentScreenId = getCurrentScreenId();
  const currentScreen = SCREENS[currentScreenId] || SCREENS.dashboard_mahasiswa;

  let activeRole = localStorage.getItem('cf_role') || (currentScreen.role !== 'auth' ? currentScreen.role : 'mahasiswa');
  if (currentScreen.role !== 'auth') {
    activeRole = currentScreen.role;
    localStorage.setItem('cf_role', activeRole);
  }

  // ============================================================================
  // 2. GLOBAL STYLES, RESPONSIVE LAYOUT FIXES & MOCHA ROSE THEME
  // ============================================================================
  function injectGlobalStyles() {
    const style = document.createElement('style');
    style.id = 'campusflow-global-styles';
    style.textContent = `
      /* Smooth transitions */
      body, aside, header, main, div, section, table, tr, td, th, button, a, input, select, textarea {
        transition: background-color 0.18s ease, color 0.18s ease, border-color 0.18s ease;
      }

      /* Fix vertical scrolling & prevent page-level horizontal overflow */
      html, body {
        overflow-x: hidden !important;
        overflow-y: auto !important;
        overscroll-behavior: auto !important;
        min-height: 100vh;
      }

      /* Restore visible, clean scrollbars so users can easily scroll */
      ::-webkit-scrollbar {
        display: block !important;
        width: 8px;
        height: 8px;
      }
      ::-webkit-scrollbar-track {
        background: rgba(245, 232, 235, 0.5);
      }
      ::-webkit-scrollbar-thumb {
        background: rgba(181, 84, 107, 0.42);
        border-radius: 9999px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(181, 84, 107, 0.72);
      }
      html.dark ::-webkit-scrollbar-track {
        background: rgba(33, 26, 29, 0.7);
      }

      /* Ensure flex/grid children do not clip or force horizontal overflow at 70%, 100%, 125% zoom */
      main, main > div, .grid > div, .grid > section, .grid > aside, .grid > main {
        min-width: 0;
        max-width: 100%;
      }
      table {
        border-collapse: collapse;
      }

      /* Mocha Rose Dark Mode */
      html.dark body,
      html.dark main,
      html.dark .bg-background {
        background-color: #161113 !important;
        color: #F5ECEE !important;
      }
      html.dark header {
        background-color: rgba(28, 21, 24, 0.92) !important;
        border-color: #382B30 !important;
      }
      html.dark .bg-surface-white,
      html.dark .bg-surface-container-lowest,
      html.dark .bg-surface,
      html.dark .bg-surface-bright,
      html.dark .bg-white {
        background-color: #211A1D !important;
        color: #F5ECEE !important;
      }
      html.dark .bg-surface-container-low,
      html.dark .bg-surface-container,
      html.dark .bg-surface-container-high,
      html.dark .bg-surface-container-highest,
      html.dark .bg-surface-variant {
        background-color: #2C2226 !important;
        color: #E8DADF !important;
      }
      html.dark .bg-soft-rose {
        background-color: rgba(181, 84, 107, 0.2) !important;
      }
      html.dark .text-on-surface,
      html.dark .text-on-background,
      html.dark .text-on-primary-fixed {
        color: #F5ECEE !important;
      }
      html.dark .text-on-surface-variant,
      html.dark .text-outline {
        color: #C7B2B8 !important;
      }
      html.dark .border-outline-rose,
      html.dark .border-outline-subtle,
      html.dark .border-surface-container,
      html.dark .border-surface-container-high {
        border-color: #3A2C31 !important;
      }
      html.dark input:not([type="checkbox"]):not([type="radio"]):not([type="range"]),
      html.dark select,
      html.dark textarea {
        background-color: #2A2024 !important;
        color: #F5ECEE !important;
        border-color: #46353B !important;
      }

      /* Animations */
      @keyframes cfFadeIn {
        from { opacity: 0; transform: translateY(6px) scale(0.99); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
      .cf-animate-in {
        animation: cfFadeIn 0.18s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      /* Desktop Collapsible Sidebar (lg and up: >=1024px) */
      @media (min-width: 1024px) {
        aside.cf-sidebar {
          width: 16rem !important;
          transition: width 0.22s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        body.cf-sidebar-collapsed aside.cf-sidebar {
          width: 4.5rem !important;
        }
        body.cf-sidebar-collapsed aside.cf-sidebar .cf-nav-text,
        body.cf-sidebar-collapsed aside.cf-sidebar .cf-group-label,
        body.cf-sidebar-collapsed aside.cf-sidebar .cf-brand-text,
        body.cf-sidebar-collapsed aside.cf-sidebar .cf-role-badge,
        body.cf-sidebar-collapsed aside.cf-sidebar .cf-role-switcher-box,
        body.cf-sidebar-collapsed aside.cf-sidebar .cf-user-meta,
        body.cf-sidebar-collapsed aside.cf-sidebar .cf-count-badge {
          display: none !important;
        }
        body.cf-sidebar-collapsed aside.cf-sidebar .cf-nav-link {
          justify-content: center !important;
          padding-left: 0.5rem !important;
          padding-right: 0.5rem !important;
        }
        body.cf-sidebar-collapsed aside.cf-sidebar .cf-sidebar-header {
          justify-content: center !important;
          padding-left: 0.5rem !important;
          padding-right: 0.5rem !important;
        }
        body.cf-sidebar-collapsed aside.cf-sidebar .cf-user-footer {
          justify-content: center !important;
          flex-direction: column !important;
          gap: 0.5rem !important;
        }
        body.cf-sidebar-collapsed div.pl-64,
        body.cf-sidebar-collapsed main.ml-64 {
          padding-left: 4.5rem !important;
          margin-left: 0 !important;
        }
        body.cf-sidebar-collapsed header.left-64 {
          left: 4.5rem !important;
        }
      }

      /* Tablet Compact Sidebar (768px to 1023px) */
      @media (min-width: 768px) and (max-width: 1023px) {
        aside.cf-sidebar {
          width: 4.5rem !important;
          transform: translateX(0) !important;
          transition: width 0.22s ease !important;
        }
        aside.cf-sidebar:not(.cf-sidebar-open) .cf-nav-text,
        aside.cf-sidebar:not(.cf-sidebar-open) .cf-group-label,
        aside.cf-sidebar:not(.cf-sidebar-open) .cf-brand-text,
        aside.cf-sidebar:not(.cf-sidebar-open) .cf-role-badge,
        aside.cf-sidebar:not(.cf-sidebar-open) .cf-role-switcher-box,
        aside.cf-sidebar:not(.cf-sidebar-open) .cf-user-meta,
        aside.cf-sidebar:not(.cf-sidebar-open) .cf-count-badge {
          display: none !important;
        }
        aside.cf-sidebar:not(.cf-sidebar-open) .cf-nav-link {
          justify-content: center !important;
          padding-left: 0.5rem !important;
          padding-right: 0.5rem !important;
        }
        aside.cf-sidebar:not(.cf-sidebar-open) .cf-sidebar-header {
          justify-content: center !important;
        }
        aside.cf-sidebar.cf-sidebar-open {
          width: 16rem !important;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35) !important;
        }
        div.pl-64, main.ml-64 {
          padding-left: 4.5rem !important;
          margin-left: 0 !important;
        }
        header.left-64 {
          left: 4.5rem !important;
        }
      }

      /* Smartphone Drawer Navigation (<768px) */
      @media (max-width: 767px) {
        aside.cf-sidebar {
          width: 16.5rem !important;
          transform: translateX(-100%);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        aside.cf-sidebar.cf-sidebar-open {
          transform: translateX(0);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.45) !important;
        }
        div.pl-64, main.ml-64 {
          padding-left: 0 !important;
          margin-left: 0 !important;
        }
        header.left-64 {
          left: 0 !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Light Mode is default; only enable dark if explicitly saved as dark
    if (localStorage.getItem('cf_theme') === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    if (localStorage.getItem('cf_sidebar_collapsed') === 'true') {
      document.body.classList.add('cf-sidebar-collapsed');
    }
  }

  // ============================================================================
  // 3. TOAST & MODAL ENGINE
  // ============================================================================
  function showToast(title, message, type = 'success') {
    let container = document.getElementById('cf-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'cf-toast-container';
      container.className = 'fixed bottom-5 right-5 z-[9999] flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4 sm:px-0';
      document.body.appendChild(container);
    }

    const iconMap = {
      success: { icon: 'check_circle', bg: 'bg-[#22A06B]', text: 'text-white' },
      info: { icon: 'info', bg: 'bg-[#B5546B]', text: 'text-white' },
      warning: { icon: 'warning', bg: 'bg-[#D9A441]', text: 'text-white' },
      error: { icon: 'error', bg: 'bg-[#E5484D]', text: 'text-white' }
    };
    const cfg = iconMap[type] || iconMap.info;

    const toast = document.createElement('div');
    toast.className = 'cf-animate-in pointer-events-auto flex items-start gap-3 p-4 rounded-2xl bg-[#4A1F2E] text-white shadow-2xl border border-[#B5546B]/40 backdrop-blur-xl';
    toast.innerHTML = `
      <div class="w-8 h-8 rounded-xl ${cfg.bg} ${cfg.text} flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
        <span class="material-symbols-outlined text-[18px]">${cfg.icon}</span>
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-[13px] font-bold tracking-tight text-white">${title}</p>
        ${message ? `<p class="text-[12px] text-[#FBF3F4]/90 mt-0.5 leading-snug">${message}</p>` : ''}
      </div>
      <button type="button" class="text-[#FBF3F4]/60 hover:text-white p-1 rounded-lg transition-colors">
        <span class="material-symbols-outlined text-[16px]">close</span>
      </button>
    `;

    toast.querySelector('button').addEventListener('click', () => toast.remove());
    container.appendChild(toast);
    setTimeout(() => {
      if (toast.parentNode) {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(8px)';
        setTimeout(() => toast.remove(), 200);
      }
    }, 3600);
  }
  window.cfToast = showToast;

  function openModal({ title, subtitle, icon = 'auto_awesome', bodyHtml, confirmText = 'Simpan Perubahan', cancelText = 'Batal', onConfirm, size = 'max-w-lg' }) {
    const existing = document.getElementById('cf-universal-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'cf-universal-modal';
    overlay.className = 'fixed inset-0 z-[9990] bg-black/55 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto';
    overlay.innerHTML = `
      <div class="cf-animate-in bg-surface-white dark:bg-[#211A1D] text-on-surface rounded-2xl shadow-2xl border border-outline-rose/40 w-full ${size} max-w-[calc(100vw-1.5rem)] overflow-hidden my-auto max-h-[92vh] flex flex-col">
        <div class="px-5 py-4 bg-gradient-to-r from-[#4A1F2E] to-[#683848] text-white flex items-center justify-between shrink-0">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[20px] text-[#ffd9df]">${icon}</span>
            </div>
            <div class="min-w-0">
              <h3 class="text-[15px] sm:text-[16px] font-bold leading-tight text-white truncate">${title}</h3>
              ${subtitle ? `<p class="text-[12px] text-[#ffd9df]/85 mt-0.5 truncate">${subtitle}</p>` : ''}
            </div>
          </div>
          <button type="button" id="cf-modal-close" class="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors shrink-0">
            <span class="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
        <div class="p-5 overflow-y-auto cf-scroll text-[14px] flex-1" id="cf-modal-body">
          ${bodyHtml}
        </div>
        <div class="px-5 py-3.5 bg-surface-container-low flex items-center justify-end gap-2.5 border-t border-outline-rose/30 shrink-0">
          ${cancelText ? `<button type="button" id="cf-modal-cancel" class="px-4 py-2 rounded-xl bg-surface-white hover:bg-surface-container text-on-surface text-[13px] font-semibold border border-outline-rose/50 transition-colors">${cancelText}</button>` : ''}
          ${confirmText ? `<button type="button" id="cf-modal-confirm" class="px-5 py-2 rounded-xl bg-[#B5546B] hover:bg-[#963c53] text-white text-[13px] font-semibold shadow-sm transition-colors flex items-center gap-1.5"><span class="material-symbols-outlined text-[16px]">check</span><span>${confirmText}</span></button>` : ''}
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    const close = () => overlay.remove();
    overlay.querySelector('#cf-modal-close')?.addEventListener('click', close);
    overlay.querySelector('#cf-modal-cancel')?.addEventListener('click', close);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close();
    });

    const confirmBtn = overlay.querySelector('#cf-modal-confirm');
    if (confirmBtn) {
      confirmBtn.addEventListener('click', () => {
        if (typeof onConfirm === 'function') {
          const shouldClose = onConfirm(overlay);
          if (shouldClose !== false) close();
        } else {
          close();
        }
      });
    }
    return overlay;
  }
  window.cfModal = openModal;

  // ============================================================================
  // 4. ROLE-BASED SIDEBAR (COLLAPSIBLE DESKTOP, COMPACT TABLET, MOBILE DRAWER)
  // ============================================================================
  function toggleSidebarCollapse() {
    if (window.innerWidth >= 1024) {
      const collapsed = document.body.classList.toggle('cf-sidebar-collapsed');
      localStorage.setItem('cf_sidebar_collapsed', collapsed ? 'true' : 'false');
      const iconEl = document.getElementById('cf-collapse-icon');
      if (iconEl) iconEl.textContent = collapsed ? 'keyboard_double_arrow_right' : 'keyboard_double_arrow_left';
    } else {
      const aside = document.querySelector('body > aside') || document.querySelector('aside.fixed');
      const backdrop = document.getElementById('cf-mobile-backdrop');
      const isOpen = aside?.classList.toggle('cf-sidebar-open');
      if (backdrop) backdrop.classList.toggle('hidden', !isOpen);
    }
  }

  function buildRoleSidebar() {
    if (currentScreen.role === 'auth') return;
    const aside = document.querySelector('body > aside') || document.querySelector('aside.fixed');
    if (!aside) return;

    aside.classList.add('cf-sidebar');
    aside.style.backgroundColor = '#4A1F2E';
    const profile = ROLE_PROFILES[activeRole] || ROLE_PROFILES.mahasiswa;

    // Mobile backdrop for smartphone/tablet drawer
    if (!document.getElementById('cf-mobile-backdrop')) {
      const backdrop = document.createElement('div');
      backdrop.id = 'cf-mobile-backdrop';
      backdrop.className = 'fixed inset-0 bg-black/50 backdrop-blur-xs z-40 hidden lg:hidden';
      backdrop.addEventListener('click', () => {
        aside.classList.remove('cf-sidebar-open');
        backdrop.classList.add('hidden');
      });
      document.body.appendChild(backdrop);
    }

    const navGroups = {
      mahasiswa: [
        {
          label: 'Menu Utama Akademik',
          items: [
            'dashboard_mahasiswa',
            'mata_kuliah_saya_mahasiswa',
            'detail_mata_kuliah_manajemen_proyek_ti',
            'kalender_akademik_jadwal_kuliah_mahasiswa',
            'kehadiran_presensi_akademik_mahasiswa',
            'detail_tugas_pengumpulan_mahasiswa'
          ]
        },
        {
          label: 'Evaluasi & Produktivitas',
          items: [
            'nilai_grade_calculator_mahasiswa',
            'riwayat_akademik_semester_1_8_mahasiswa',
            'study_planner_kanban_pomodoro_timer_mahasiswa'
          ]
        }
      ],
      dosen: [
        {
          label: 'Portal Pengajaran Dosen',
          items: [
            'dashboard_dosen',
            'penilaian_feedback_submission_dosen',
            'materi_perkuliahan_distribusi_modul_dosen',
            'perkembangan_mahasiswa_dosen'
          ]
        },
        {
          label: 'Tautan Kelas Aktif (TI24D)',
          items: [
            'detail_mata_kuliah_manajemen_proyek_ti',
            'kalender_akademik_jadwal_kuliah_mahasiswa'
          ]
        }
      ],
      admin: [
        {
          label: 'Tata Kelola & Data Induk',
          items: [
            'dashboard_admin',
            'manajemen_pengguna_admin',
            'manajemen_mahasiswa_data_induk_admin',
            'manajemen_dosen_penugasan_kelas_admin'
          ]
        },
        {
          label: 'Kurikulum & Integrasi',
          items: [
            'manajemen_semester_kurikulum_admin',
            'manajemen_kelas_anggota_admin',
            'integrasi_google_pengaturan_sistem_admin'
          ]
        }
      ]
    };

    const groups = navGroups[activeRole] || navGroups.mahasiswa;

    const groupsHtml = groups
      .map(
        (group) => `
      <div class="cf-group-label px-3 pt-4 pb-1.5 first:pt-1">
        <span class="text-[10.5px] uppercase tracking-wider text-[#dac0c4]/80 font-bold">${group.label}</span>
      </div>
      <nav class="space-y-1">
        ${group.items
          .map((screenKey) => {
            const item = SCREENS[screenKey];
            const isActive = screenKey === currentScreenId;
            const activeClass = isActive
              ? 'bg-[#B5546B] text-white font-semibold shadow-sm'
              : 'text-[#FBF3F4]/85 hover:bg-white/10 hover:text-white font-medium';
            return `
            <a href="${getScreenUrl(screenKey)}" title="${item.title}" class="cf-nav-link flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] transition-all ${activeClass}">
              <span class="material-symbols-outlined text-[19px] shrink-0">${item.icon}</span>
              <span class="cf-nav-text truncate">${item.title}</span>
            </a>
          `;
          })
          .join('')}
      </nav>
    `
      )
      .join('');

    const bottomAnchorHtml =
      activeRole === 'mahasiswa'
        ? `
      <div class="px-2.5 pt-2 pb-2 border-t border-white/10">
        <a href="${getScreenUrl('arsip_dokumen_akademik_mahasiswa')}" title="Arsip Dokumen Akademik" class="cf-nav-link flex items-center justify-between px-3 py-2 rounded-xl text-[13px] transition-all ${
          currentScreenId === 'arsip_dokumen_akademik_mahasiswa'
            ? 'bg-[#B5546B] text-white font-semibold shadow-sm'
            : 'bg-black/20 text-[#FBF3F4] hover:bg-white/10 hover:text-white font-medium'
        }">
          <div class="flex items-center gap-2.5 min-w-0">
            <span class="material-symbols-outlined text-[19px] text-[#ffb1c0] shrink-0">folder_special</span>
            <span class="cf-nav-text truncate">Arsip Dokumen</span>
          </div>
          <span class="cf-count-badge text-[10px] px-1.5 py-0.5 rounded bg-white/15 text-white font-semibold">24</span>
        </a>
      </div>
    `
        : '';

    const isCollapsed = document.body.classList.contains('cf-sidebar-collapsed');

    aside.innerHTML = `
      <div class="flex flex-col flex-1 min-h-0">
        <div class="cf-sidebar-header h-16 px-3.5 flex items-center justify-between border-b border-white/10 shrink-0 gap-1">
          <a href="${getScreenUrl(profile.home)}" class="flex items-center gap-2.5 min-w-0 group" title="CampusFlow — Academic Hub">
            <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-[#B5546B] to-[#963c53] flex items-center justify-center shadow-sm shrink-0">
              <span class="material-symbols-outlined text-white text-[19px]">school</span>
            </div>
            <div class="cf-brand-text flex flex-col min-w-0">
              <span class="text-[15px] font-bold text-white tracking-tight leading-none truncate">CampusFlow</span>
              <span class="text-[11px] text-[#dac0c4] mt-0.5 truncate">Academic Hub</span>
            </div>
          </a>
          <div class="flex items-center gap-1 shrink-0">
            <span class="cf-role-badge px-2 py-0.5 rounded-full bg-[#B5546B] text-white text-[10px] font-bold uppercase tracking-wider">${profile.badgeText}</span>
            <button type="button" id="cf-sidebar-collapse-btn" title="Ciutkan / Perluas Sidebar" class="hidden lg:flex w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white items-center justify-center transition-colors">
              <span id="cf-collapse-icon" class="material-symbols-outlined text-[17px]">${isCollapsed ? 'keyboard_double_arrow_right' : 'keyboard_double_arrow_left'}</span>
            </button>
          </div>
        </div>
        <div class="flex-1 overflow-y-auto cf-scroll px-2.5 py-3">
          ${groupsHtml}
        </div>
      </div>
      <div class="shrink-0 bg-black/20">
        ${bottomAnchorHtml}
        <div class="cf-role-switcher-box px-3 py-2 border-t border-white/10">
          <div class="flex items-center justify-between mb-1">
            <span class="text-[10px] uppercase tracking-wider text-[#dac0c4]/80 font-bold">Mode Peran</span>
            <a href="${getScreenUrl('login_campusflow_2')}" class="text-[10px] text-[#ffb1c0] hover:underline flex items-center gap-0.5">
              <span class="material-symbols-outlined text-[12px]">login</span> Login
            </a>
          </div>
          <div class="grid grid-cols-3 gap-1 bg-black/25 p-1 rounded-xl text-[11px]">
            <button type="button" data-switch-role="mahasiswa" class="py-1 rounded-lg font-semibold transition-all ${
              activeRole === 'mahasiswa' ? 'bg-[#B5546B] text-white shadow-xs' : 'text-[#ffd9df]/75 hover:text-white'
            }">Mhs</button>
            <button type="button" data-switch-role="dosen" class="py-1 rounded-lg font-semibold transition-all ${
              activeRole === 'dosen' ? 'bg-[#B5546B] text-white shadow-xs' : 'text-[#ffd9df]/75 hover:text-white'
            }">Dosen</button>
            <button type="button" data-switch-role="admin" class="py-1 rounded-lg font-semibold transition-all ${
              activeRole === 'admin' ? 'bg-[#B5546B] text-white shadow-xs' : 'text-[#ffd9df]/75 hover:text-white'
            }">Admin</button>
          </div>
        </div>
        <div class="cf-user-footer p-3 border-t border-white/10 flex items-center justify-between gap-2">
          <div class="flex items-center gap-2.5 min-w-0">
            <div class="w-8 h-8 rounded-full bg-[#B5546B] text-white flex items-center justify-center font-bold text-[12px] shrink-0 ring-2 ring-[#ffb1c0]/30" title="${profile.name}">
              ${profile.name.slice(0, 2).toUpperCase()}
            </div>
            <div class="cf-user-meta flex flex-col min-w-0">
              <span class="text-[12.5px] font-semibold text-white truncate">${profile.name}</span>
              <span class="text-[10.5px] text-[#dac0c4] truncate">${profile.roleLabel}</span>
            </div>
          </div>
          <a href="${getScreenUrl('login_campusflow_2')}" title="Keluar / Logout" class="p-1.5 rounded-lg text-[#ffd9df]/75 hover:text-white hover:bg-white/10 transition-colors shrink-0">
            <span class="material-symbols-outlined text-[18px]">logout</span>
          </a>
        </div>
      </div>
    `;

    aside.querySelector('#cf-sidebar-collapse-btn')?.addEventListener('click', toggleSidebarCollapse);

    aside.querySelectorAll('[data-switch-role]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetRole = btn.getAttribute('data-switch-role');
        localStorage.setItem('cf_role', targetRole);
        window.location.href = getScreenUrl(ROLE_PROFILES[targetRole].home);
      });
    });
  }

  function enhanceTopbar() {
    if (currentScreen.role === 'auth') return;
    const header = document.querySelector('header');
    if (!header) return;

    const profile = ROLE_PROFILES[activeRole] || ROLE_PROFILES.mahasiswa;

    const leftGroup = header.firstElementChild;
    if (leftGroup && !document.getElementById('cf-mobile-menu-btn')) {
      const mobileBtn = document.createElement('button');
      mobileBtn.id = 'cf-mobile-menu-btn';
      mobileBtn.type = 'button';
      mobileBtn.title = 'Menu Navigasi / Ciutkan Sidebar';
      mobileBtn.className = 'p-2 rounded-xl bg-surface-container-low text-on-surface hover:text-primary mr-1.5 flex items-center justify-center transition-colors';
      mobileBtn.innerHTML = '<span class="material-symbols-outlined text-[20px]">menu</span>';
      mobileBtn.addEventListener('click', toggleSidebarCollapse);
      leftGroup.prepend(mobileBtn);
    }

    const rightGroup = header.lastElementChild;
    if (rightGroup) {
      const profileSpans = rightGroup.querySelectorAll('div.flex-col span');
      if (profileSpans.length >= 2) {
        profileSpans[0].textContent = profile.name;
        profileSpans[1].textContent = profile.sub;
      }
      const profileContainer = rightGroup.lastElementChild;
      if (profileContainer) {
        profileContainer.classList.add('cursor-pointer', 'hover:opacity-90', 'relative');
        profileContainer.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleProfilePopover();
        });
      }
    }

    header.querySelectorAll('button, input').forEach((el) => {
      const text = (el.textContent || el.placeholder || '').toLowerCase();
      if (text.includes('cari') || text.includes('ctrl+k')) {
        if (el.tagName === 'BUTTON') {
          el.addEventListener('click', (e) => {
            e.preventDefault();
            openQuickSearchModal();
          });
        } else if (el.tagName === 'INPUT') {
          el.addEventListener('focus', () => openQuickSearchModal());
        }
      }
    });

    let themeBtn = Array.from(header.querySelectorAll('button')).find((b) => {
      const t = b.textContent.trim();
      return t === 'light_mode' || t === 'dark_mode' || b.title === 'Ganti Tema';
    });
    if (!themeBtn && rightGroup) {
      themeBtn = document.createElement('button');
      themeBtn.type = 'button';
      themeBtn.title = 'Ganti Tema (Terang / Gelap)';
      themeBtn.className = 'w-9 h-9 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-soft-rose hover:text-primary transition-colors';
      themeBtn.innerHTML = '<span class="material-symbols-outlined text-[20px]">light_mode</span>';
      rightGroup.prepend(themeBtn);
    }
    if (themeBtn) {
      const updateThemeIcon = () => {
        const isDark = document.documentElement.classList.contains('dark');
        const iconSpan = themeBtn.querySelector('.material-symbols-outlined');
        if (iconSpan) iconSpan.textContent = isDark ? 'dark_mode' : 'light_mode';
      };
      updateThemeIcon();
      themeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('cf_theme', isDark ? 'dark' : 'light');
        updateThemeIcon();
        showToast(isDark ? 'Mode Gelap (Mocha Night) Aktif' : 'Mode Terang (Default) Aktif', '', 'info');
      });
    }

    const notifBtn = Array.from(header.querySelectorAll('button')).find((b) => b.textContent.includes('notifications'));
    if (notifBtn) {
      if (localStorage.getItem('cf_notif_read') === 'true') {
        const dot = notifBtn.querySelector('span.rounded-full');
        if (dot) dot.style.display = 'none';
      }
      notifBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleNotificationsPopover(notifBtn);
      });
    }
  }

  function toggleNotificationsPopover(anchorBtn) {
    const existing = document.getElementById('cf-notif-popover');
    if (existing) {
      existing.remove();
      return;
    }
    document.getElementById('cf-profile-popover')?.remove();

    const items = [
      {
        title: 'Peringatan Konflik Jadwal Kuliah (Senin & Selasa)',
        desc: 'Terdapat jadwal bertumpukan pada Senin (MPTI, PBP, ADPL) & Selasa (TTI, AR/VR). Periksa di Kalender.',
        time: 'Penting',
        icon: 'warning',
        target: 'kalender_akademik_jadwal_kuliah_mahasiswa',
        unread: true
      },
      {
        title: 'Catatan Jadwal Aktual IMK (TI25D)',
        desc: 'Jadwal E-Class tercantum Senin, namun perkuliahan aktual dilaksanakan Selasa 15.30 WIB di G. Mahdior D403.',
        time: 'Info Akademik',
        icon: 'event_note',
        target: 'detail_mata_kuliah_manajemen_proyek_ti?course=imk',
        unread: true
      },
      {
        title: '11 Pertemuan Telah Dikonfirmasi Hadir',
        desc: 'Manajemen Proyek TI belum memiliki riwayat pertemuan tercatat.',
        time: 'Rekap Presensi',
        icon: 'fact_check',
        target: 'kehadiran_presensi_akademik_mahasiswa',
        unread: false
      }
    ];
    const isAllRead = localStorage.getItem('cf_notif_read') === 'true';

    const pop = document.createElement('div');
    pop.id = 'cf-notif-popover';
    pop.className = 'cf-animate-in fixed top-16 right-6 z-[9980] w-96 max-w-[calc(100vw-2rem)] bg-surface-white dark:bg-[#211A1D] rounded-2xl shadow-2xl border border-outline-rose/50 overflow-hidden';
    pop.innerHTML = `
      <div class="px-4 py-3 bg-[#3f0016] text-white flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-[18px] text-[#ffb1c0]">notifications_active</span>
          <span class="text-[13.5px] font-bold">Notifikasi Akademik</span>
        </div>
        <button type="button" id="cf-mark-all-read" class="text-[11.5px] text-[#ffd9df] hover:text-white underline font-medium">
          Tandai semua dibaca
        </button>
      </div>
      <div class="divide-y divide-outline-rose/30 max-h-80 overflow-y-auto cf-scroll">
        ${items
          .map((n) => {
            const [scr, q] = n.target.split('?');
            return `
          <a href="${getScreenUrl(scr, q)}" class="flex items-start gap-3 p-3.5 hover:bg-soft-rose/50 transition-colors">
            <div class="w-8 h-8 rounded-xl ${
              !isAllRead && n.unread ? 'bg-[#963c53] text-white' : 'bg-surface-container text-on-surface-variant'
            } flex items-center justify-center shrink-0 mt-0.5">
              <span class="material-symbols-outlined text-[17px]">${n.icon}</span>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-[12.5px] font-bold text-on-surface">${n.title}</p>
              <p class="text-[11.5px] text-on-surface-variant mt-0.5 leading-snug">${n.desc}</p>
              <span class="text-[10.5px] text-primary font-semibold mt-1 block">${n.time}</span>
            </div>
          </a>`;
          })
          .join('')}
      </div>
    `;
    document.body.appendChild(pop);

    pop.querySelector('#cf-mark-all-read')?.addEventListener('click', () => {
      localStorage.setItem('cf_notif_read', 'true');
      const dot = anchorBtn.querySelector('span.rounded-full');
      if (dot) dot.style.display = 'none';
      pop.remove();
      showToast('Notifikasi Diperbarui', 'Semua notifikasi ditandai telah dibaca.', 'success');
    });
  }

  function toggleProfilePopover() {
    const existing = document.getElementById('cf-profile-popover');
    if (existing) {
      existing.remove();
      return;
    }
    document.getElementById('cf-notif-popover')?.remove();

    const profile = ROLE_PROFILES[activeRole] || ROLE_PROFILES.mahasiswa;
    const pop = document.createElement('div');
    pop.id = 'cf-profile-popover';
    pop.className = 'cf-animate-in fixed top-16 right-6 z-[9980] w-72 bg-surface-white dark:bg-[#211A1D] rounded-2xl shadow-2xl border border-outline-rose/50 overflow-hidden';
    pop.innerHTML = `
      <div class="p-4 bg-gradient-to-br from-[#3f0016] to-[#683848] text-white">
        <p class="text-[14px] font-bold">${profile.name}</p>
        <p class="text-[11.5px] text-[#ffd9df]/90 mt-0.5">${profile.sub}</p>
        <p class="text-[11px] text-[#ffd9df]/70 mt-0.5 truncate">${profile.email}</p>
      </div>
      <div class="p-2 space-y-1 text-[13px]">
        <div class="px-2.5 py-1 text-[10.5px] uppercase tracking-wider text-outline font-bold">Pindah Peran Cepat</div>
        <button type="button" data-role-jump="mahasiswa" class="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-soft-rose text-left transition-colors ${
          activeRole === 'mahasiswa' ? 'bg-soft-rose text-primary font-bold' : 'text-on-surface'
        }">
          <span>Mahasiswa (Rimawati)</span>
          ${activeRole === 'mahasiswa' ? '<span class="material-symbols-outlined text-[16px]">check</span>' : ''}
        </button>
        <button type="button" data-role-jump="dosen" class="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-soft-rose text-left transition-colors ${
          activeRole === 'dosen' ? 'bg-soft-rose text-primary font-bold' : 'text-on-surface'
        }">
          <span>Dosen Pengampu</span>
          ${activeRole === 'dosen' ? '<span class="material-symbols-outlined text-[16px]">check</span>' : ''}
        </button>
        <button type="button" data-role-jump="admin" class="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-soft-rose text-left transition-colors ${
          activeRole === 'admin' ? 'bg-soft-rose text-primary font-bold' : 'text-on-surface'
        }">
          <span>Admin SIAKAD</span>
          ${activeRole === 'admin' ? '<span class="material-symbols-outlined text-[16px]">check</span>' : ''}
        </button>
      </div>
      <div class="p-2 border-t border-outline-rose/30">
        <a href="${getScreenUrl('login_campusflow_2')}" class="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-[#ba1a1a] hover:bg-[#ffdad6]/40 text-[13px] font-semibold transition-colors">
          <span class="material-symbols-outlined text-[18px]">logout</span>
          <span>Keluar dari Sesi (Logout)</span>
        </a>
      </div>
    `;
    document.body.appendChild(pop);
    pop.querySelectorAll('[data-role-jump]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const r = btn.getAttribute('data-role-jump');
        localStorage.setItem('cf_role', r);
        window.location.href = getScreenUrl(ROLE_PROFILES[r].home);
      });
    });
  }

  document.addEventListener('click', (e) => {
    const notifPop = document.getElementById('cf-notif-popover');
    if (notifPop && !notifPop.contains(e.target)) notifPop.remove();
    const profPop = document.getElementById('cf-profile-popover');
    if (profPop && !profPop.contains(e.target)) profPop.remove();
  });

  // ============================================================================
  // 5. QUICK SEARCH COMMAND PALETTE (Ctrl+K) WITH ALL 8 COURSES
  // ============================================================================
  function openQuickSearchModal() {
    const existing = document.getElementById('cf-command-palette');
    if (existing) {
      existing.querySelector('input')?.focus();
      return;
    }

    const searchItems = [
      ...ACADEMIC_DB.courses.map((c) => {
        const st = getCourseStats(c);
        return {
          title: `${c.name} (${c.kelas})`,
          subtitle: `Dosen: ${c.lecturer} • ${c.sks} SKS • ${c.scheduleText} • ${c.room} • ${st.recordedCount}/16 Sesi Tercatat`,
          icon: 'school',
          url: getScreenUrl('detail_mata_kuliah_manajemen_proyek_ti', `course=${c.id}`),
          badge: c.kelas
        };
      }),
      ...Object.values(SCREENS).map((s) => ({
        title: s.title,
        subtitle: `Halaman ${s.role.toUpperCase()} • ${s.category}`,
        icon: s.icon,
        url: getScreenUrl(s.id),
        badge: s.role.toUpperCase()
      }))
    ];

    const overlay = document.createElement('div');
    overlay.id = 'cf-command-palette';
    overlay.className = 'fixed inset-0 z-[9995] bg-black/55 backdrop-blur-sm flex items-start justify-center pt-16 px-4';
    overlay.innerHTML = `
      <div class="cf-animate-in bg-surface-white dark:bg-[#211A1D] text-on-surface rounded-2xl shadow-2xl border border-outline-rose/50 w-full max-w-xl overflow-hidden">
        <div class="p-3.5 border-b border-outline-rose/40 flex items-center gap-3">
          <span class="material-symbols-outlined text-primary text-[22px]">search</span>
          <input type="text" id="cf-search-input" class="w-full bg-transparent text-[14.5px] text-on-surface placeholder-outline focus:outline-none" placeholder="Cari mata kuliah, dosen (Dyan, Sugianto, Gunaly, Imam...), jadwal, halaman..." autocomplete="off" />
          <kbd class="px-2 py-0.5 rounded bg-surface-container text-[11px] text-outline font-mono">ESC</kbd>
        </div>
        <div id="cf-search-results" class="max-h-96 overflow-y-auto cf-scroll divide-y divide-outline-rose/20 p-2"></div>
        <div class="px-4 py-2.5 bg-surface-container-low text-[11.5px] text-outline flex items-center justify-between">
          <span>Database Akademik Terpadu • Semester Ganjil 2026/2027</span>
          <span><strong>8</strong> MK & <strong>23</strong> Layar</span>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    const input = overlay.querySelector('#cf-search-input');
    const resultsContainer = overlay.querySelector('#cf-search-results');

    function renderResults(query) {
      const q = query.trim().toLowerCase();
      const filtered = searchItems
        .filter((item) => !q || item.title.toLowerCase().includes(q) || item.subtitle.toLowerCase().includes(q) || item.badge.toLowerCase().includes(q))
        .slice(0, 15);

      if (filtered.length === 0) {
        resultsContainer.innerHTML = `<div class="p-8 text-center text-outline text-[13px]">Tidak ditemukan hasil untuk "<strong>${query}</strong>"</div>`;
        return;
      }

      resultsContainer.innerHTML = filtered
        .map(
          (item) => `
        <a href="${item.url}" class="flex items-center justify-between gap-3 p-2.5 rounded-xl hover:bg-soft-rose transition-colors group">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-9 h-9 rounded-xl bg-soft-rose text-primary flex items-center justify-center shrink-0 group-hover:bg-[#963c53] group-hover:text-white transition-colors">
              <span class="material-symbols-outlined text-[19px]">${item.icon}</span>
            </div>
            <div class="min-w-0">
              <p class="text-[13.5px] font-bold text-on-surface truncate group-hover:text-primary">${item.title}</p>
              <p class="text-[11.5px] text-on-surface-variant truncate">${item.subtitle}</p>
            </div>
          </div>
          <span class="px-2 py-0.5 rounded-md bg-surface-container text-[10px] font-bold text-on-surface-variant shrink-0">${item.badge}</span>
        </a>
      `
        )
        .join('');
    }

    renderResults('');
    input.focus();
    input.addEventListener('input', () => renderResults(input.value));
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.remove();
    });
  }

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openQuickSearchModal();
    } else if (e.altKey && e.key.toLowerCase() === 't') {
      e.preventDefault();
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('cf_theme', isDark ? 'dark' : 'light');
      showToast(isDark ? 'Mode Gelap Aktif' : 'Mode Terang Aktif', '', 'info');
    } else if (e.key === 'Escape') {
      document.getElementById('cf-command-palette')?.remove();
      document.getElementById('cf-universal-modal')?.remove();
      document.getElementById('cf-notif-popover')?.remove();
      document.getElementById('cf-profile-popover')?.remove();
    }
  });

  // ============================================================================
  // 6. GROUND-TRUTH RENDERERS FOR CORE ACADEMIC SCREENS
  // ============================================================================

  // A. MATA KULIAH SAYA (mata_kuliah_saya_mahasiswa)
  function syncMataKuliahSayaPage() {
    if (currentScreenId !== 'mata_kuliah_saya_mahasiswa') return;

    const gStats = getGlobalAcademicStats();
    const grid = document.getElementById('coursesGrid');
    if (!grid) return;

    // 1. Update Top Banner KPI Metrics (Total SKS = 19, Terdaftar = 8, Kehadiran Tercatat = 100%, Pertemuan Tercatat = 11)
    const metricBoxes = document.querySelectorAll('main > div > div:first-child .grid > div');
    if (metricBoxes.length >= 4) {
      metricBoxes[0].innerHTML = `
        <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">Total SKS Aktif</span>
        <div class="flex items-baseline gap-1 mt-0.5">
          <span class="font-page-title-mobile text-page-title-mobile text-primary font-bold">${gStats.totalSks}</span>
          <span class="font-label-sm text-label-sm text-on-surface-variant">SKS (8 MK)</span>
        </div>
      `;
      metricBoxes[1].innerHTML = `
        <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">Pertemuan Tercatat</span>
        <div class="flex items-baseline gap-1 mt-0.5">
          <span class="font-page-title-mobile text-page-title-mobile text-on-surface font-bold">${gStats.totalRecordedSessions}</span>
          <span class="font-label-sm text-label-sm text-on-surface-variant">Sesi Terlaksana</span>
        </div>
      `;
      metricBoxes[2].innerHTML = `
        <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">Presensi Tercatat</span>
        <div class="flex items-baseline gap-1 mt-0.5">
          <span class="font-page-title-mobile text-page-title-mobile text-status-completed font-bold">${gStats.overallPct}%</span>
          <span class="font-label-sm text-label-sm text-status-completed font-semibold">(${gStats.totalHadir}/${gStats.totalRecordedSessions} Hadir)</span>
        </div>
      `;
      metricBoxes[3].innerHTML = `
        <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">Konflik Jadwal</span>
        <div class="flex items-baseline gap-1 mt-0.5">
          <span class="font-page-title-mobile text-page-title-mobile text-status-overdue font-bold">3</span>
          <span class="font-label-sm text-label-sm text-status-overdue font-medium">Irisan Jam</span>
        </div>
      `;
    }

    // 2. Insert Ground-Truth Alert Banner above Course Grid
    const alertBanner = document.createElement('div');
    alertBanner.className = 'rounded-2xl bg-surface-white p-4 shadow-sm border-l-4 border-[#963c53] flex flex-col md:flex-row md:items-center justify-between gap-3';
    alertBanner.innerHTML = `
      <div class="space-y-1">
        <div class="flex flex-wrap items-center gap-2">
          <span class="px-2.5 py-0.5 rounded-full bg-soft-rose text-primary text-xs font-bold">Hari Ini: Senin, 2 November 2026 (Minggu ke-3)</span>
          <span class="px-2.5 py-0.5 rounded-full bg-status-in-progress/15 text-status-in-progress text-xs font-bold flex items-center gap-1">
            <span class="material-symbols-outlined text-[14px]">info</span>
            Konfirmasi Mahasiswa (Belum Diverifikasi E-Class)
          </span>
        </div>
        <p class="text-[13px] text-on-surface-variant leading-relaxed">
          Menampilkan <strong>8 mata kuliah (${gStats.totalSks} SKS)</strong> sesuai jadwal sebenarnya. Pertemuan yang belum berlangsung/tercatat ditampilkan apa adanya (tidak dianggap sudah selesai 16 sesi). Terdapat <strong>indikator konflik jadwal</strong> pada hari Senin dan Selasa serta <strong>catatan jadwal aktual IMK</strong>.
        </p>
      </div>
      <a href="${getScreenUrl('kalender_akademik_jadwal_kuliah_mahasiswa')}" class="shrink-0 px-3.5 py-2 rounded-xl bg-soft-rose hover:bg-primary text-primary hover:text-white text-xs font-bold transition-colors flex items-center gap-1.5">
        <span class="material-symbols-outlined text-[16px]">calendar_month</span>
        <span>Cek Jadwal & Konflik</span>
      </a>
    `;
    grid.parentElement.insertBefore(alertBanner, grid);

    // 3. Render all 8 Course Cards accurately from ACADEMIC_DB
    function renderCourseCards(filterDay = 'ALL', query = '') {
      const q = query.trim().toLowerCase();
      const filtered = ACADEMIC_DB.courses.filter((c) => {
        const matchDay = filterDay === 'ALL' || c.day.toLowerCase() === filterDay.toLowerCase();
        const matchQuery =
          !q ||
          c.name.toLowerCase().includes(q) ||
          c.lecturer.toLowerCase().includes(q) ||
          c.room.toLowerCase().includes(q) ||
          c.kelas.toLowerCase().includes(q) ||
          c.day.toLowerCase().includes(q);
        return matchDay && matchQuery;
      });

      grid.innerHTML = filtered
        .map((c) => {
          const st = getCourseStats(c);
          const pctBar = Math.round((st.recordedCount / 16) * 100);
          const lastSession = st.recordedCount > 0 ? c.recordedSessions[st.recordedCount - 1] : null;

          return `
          <div class="course-card flex flex-col justify-between rounded-2xl bg-surface-white p-5 shadow-sm hover:shadow-md transition-all group border ${
            c.conflictWith ? 'border-status-overdue/40' : 'border-outline-rose/40'
          }" data-day="${c.day}" data-lecturer="${c.lecturer}" data-title="${c.name}">
            <div class="space-y-3">
              <!-- Badges Row -->
              <div class="flex items-start justify-between gap-2">
                <div class="flex flex-wrap items-center gap-1.5">
                  <span class="px-2.5 py-0.5 rounded-full bg-soft-rose text-primary text-xs font-bold">${c.kelas}</span>
                  <span class="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant text-xs font-semibold">${c.sks} SKS</span>
                </div>
                ${
                  st.hasAttendanceData
                    ? `<span class="px-2.5 py-0.5 rounded-full bg-status-completed/10 text-status-completed text-xs font-bold flex items-center gap-1">
                        <span class="w-1.5 h-1.5 rounded-full bg-status-completed"></span> ${st.hadirCount}/${st.recordedCount} Hadir
                       </span>`
                    : `<span class="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-semibold">
                        Belum Ada Absensi
                       </span>`
                }
              </div>

              <!-- Title & Lecturer -->
              <div>
                <h2 class="text-[16px] font-bold text-on-surface group-hover:text-primary transition-colors leading-snug">${c.name}</h2>
                <div class="flex items-center gap-1.5 text-on-surface-variant mt-1 text-[13px]">
                  <span class="material-symbols-outlined text-[16px] text-primary">person</span>
                  <span class="font-medium text-on-surface">${c.lecturer}</span>
                </div>
              </div>

              <!-- Schedule & Room Box -->
              <div class="rounded-xl bg-surface-container-low p-3 space-y-1.5 text-[12px]">
                <div class="flex items-center justify-between gap-2">
                  <span class="flex items-center gap-1 text-on-surface font-semibold">
                    <span class="material-symbols-outlined text-[15px] text-primary">schedule</span>
                    ${c.scheduleText}
                  </span>
                  <span class="px-2 py-0.5 rounded bg-surface-white text-on-surface font-bold text-[11px] shadow-2xs">${c.room}</span>
                </div>
                ${
                  c.conflictWith
                    ? `<div class="pt-1 border-t border-outline-rose/40 flex items-start gap-1 text-[11px] text-status-overdue font-semibold">
                        <span class="material-symbols-outlined text-[14px] shrink-0 mt-0.5">warning</span>
                        <span>Konflik Jadwal: ${c.conflictWith}</span>
                       </div>`
                    : ''
                }
                ${
                  c.eclassSystemSchedule
                    ? `<div class="pt-1 border-t border-outline-rose/40 flex items-start gap-1 text-[11px] text-tertiary font-semibold">
                        <span class="material-symbols-outlined text-[14px] shrink-0 mt-0.5">swap_horiz</span>
                        <span>Catatan E-Class: Senin • Aktual: Selasa 15.30 WIB</span>
                       </div>`
                    : ''
                }
              </div>

              <!-- Recorded Meetings Progress (Out of max 16) -->
              <div class="space-y-1.5 pt-1">
                <div class="flex justify-between text-[12px]">
                  <span class="text-on-surface-variant font-medium">
                    ${st.recordedCount > 0 ? `${st.recordedCount} Pertemuan Tercatat (dari maks. 16)` : 'Belum ada pertemuan yang tercatat'}
                  </span>
                  <span class="font-bold text-primary">${st.recordedCount}/16</span>
                </div>
                <div class="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
                  <div class="h-full ${st.recordedCount > 0 ? 'bg-primary' : 'bg-outline-variant'} rounded-full transition-all" style="width: ${pctBar}%"></div>
                </div>
                <p class="text-[11.5px] text-on-surface-variant line-clamp-2">
                  ${
                    lastSession
                      ? `<strong>Pertemuan ${lastSession.number} (${lastSession.date}):</strong> ${lastSession.topic}`
                      : 'Pertemuan 1–16 masih kosong / belum tercatat.'
                  }
                </p>
              </div>
            </div>

            <!-- Card Footer Actions -->
            <div class="pt-4 mt-4 border-t border-outline-rose/30 space-y-2">
              <a href="${getScreenUrl('detail_mata_kuliah_manajemen_proyek_ti', `course=${c.id}`)}" class="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-primary hover:bg-[#7d283f] text-white text-[13px] font-semibold transition-all shadow-sm">
                <span>Buka Detail & Riwayat Pertemuan</span>
                <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
        `;
        })
        .join('');
    }

    renderCourseCards('ALL', '');

    // Wire search input on Mata Kuliah Saya
    const searchInput = document.getElementById('courseSearch');
    if (searchInput) {
      searchInput.oninput = null;
      searchInput.addEventListener('input', () => {
        renderCourseCards('ALL', searchInput.value);
      });
    }
  }

  // B. DETAIL MATA KULIAH (detail_mata_kuliah_manajemen_proyek_ti)
  function syncDetailMataKuliahPage() {
    if (currentScreenId !== 'detail_mata_kuliah_manajemen_proyek_ti') return;

    const params = new URLSearchParams(window.location.search);
    const initialCourseId = params.get('course') || 'adpl';
    const mainContainer = document.querySelector('main > div');
    if (!mainContainer) return;

    function renderSelectedCourse(courseId, filterMode = 'all') {
      const course = ACADEMIC_DB.courses.find((c) => c.id === courseId) || ACADEMIC_DB.courses[0];
      const st = getCourseStats(course);

      // Build all 16 slots: only recordedSessions are 'Terlaksana', remaining are 'Belum Tercatat'
      const slots = [];
      for (let i = 1; i <= 16; i++) {
        const recorded = course.recordedSessions.find((s) => s.number === i);
        if (recorded) {
          slots.push({
            number: i,
            recorded: true,
            date: recorded.date,
            topic: recorded.topic,
            detail: recorded.detail,
            status: 'Terlaksana',
            attendance: recorded.attendance
          });
        } else {
          slots.push({
            number: i,
            recorded: false,
            date: 'Belum tercatat',
            topic: 'Belum ada riwayat pertemuan',
            detail: 'Pertemuan ini belum berlangsung atau belum tercatat di dalam riwayat perkuliahan.',
            status: 'Belum Tercatat',
            attendance: null
          });
        }
      }

      const filteredSlots = slots.filter((s) => {
        if (filterMode === 'recorded') return s.recorded;
        if (filterMode === 'unrecorded') return !s.recorded;
        return true;
      });

      mainContainer.innerHTML = `
        <!-- Breadcrumb & Course Switcher Bar -->
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-5">
          <nav class="flex items-center gap-1.5 text-[13px] text-on-surface-variant flex-wrap">
            <a href="${getScreenUrl('dashboard_mahasiswa')}" class="hover:text-primary flex items-center gap-1">
              <span class="material-symbols-outlined text-[17px]">home</span> Beranda
            </a>
            <span class="material-symbols-outlined text-sm text-outline">chevron_right</span>
            <a href="${getScreenUrl('mata_kuliah_saya_mahasiswa')}" class="hover:text-primary">Mata Kuliah Saya</a>
            <span class="material-symbols-outlined text-sm text-outline">chevron_right</span>
            <span class="text-primary font-bold">${course.name} (${course.kelas})</span>
          </nav>

          <!-- Interactive Course Switcher (8 Mata Kuliah) -->
          <div class="flex items-center gap-2">
            <label for="cf-detail-course-select" class="text-xs font-bold uppercase text-outline whitespace-nowrap">Pilih Mata Kuliah:</label>
            <select id="cf-detail-course-select" class="px-3.5 py-2 rounded-xl bg-surface-white border border-outline-rose text-[13px] font-semibold text-on-surface shadow-xs focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer">
              ${ACADEMIC_DB.courses
                .map(
                  (c) => `
                <option value="${c.id}" ${c.id === course.id ? 'selected' : ''}>
                  ${c.name} (${c.kelas} • ${c.recordedSessions.length}/16 Tercatat)
                </option>
              `
                )
                .join('')}
            </select>
          </div>
        </div>

        <!-- Course Quick Pills Bar -->
        <div class="flex items-center gap-1.5 overflow-x-auto pb-2 mb-4 cf-scroll">
          ${ACADEMIC_DB.courses
            .map(
              (c) => `
            <button type="button" data-course-pill="${c.id}" class="px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              c.id === course.id
                ? 'bg-primary text-white shadow-sm'
                : 'bg-surface-white text-on-surface-variant hover:bg-soft-rose hover:text-primary'
            }">
              ${c.shortName} <span class="opacity-75">(${c.recordedSessions.length})</span>
            </button>
          `
            )
            .join('')}
        </div>

        <!-- Course Hero Header -->
        <section class="relative overflow-hidden rounded-2xl bg-[#340d1c] text-white p-6 shadow-md mb-6">
          <div class="relative z-10 flex flex-col xl:flex-row justify-between gap-6">
            <div class="flex-1 space-y-4">
              <div class="flex flex-wrap items-center gap-2">
                <span class="px-3 py-0.5 rounded-full bg-[#b5546b] text-white text-xs font-bold">Kelas ${course.kelas}</span>
                <span class="px-3 py-0.5 rounded-full bg-white/15 text-[#ffd9df] text-xs font-semibold">${course.sks} SKS</span>
                <span class="px-3 py-0.5 rounded-full bg-white/10 text-[#ffd9df] text-xs">${ACADEMIC_DB.semester}</span>
                <span class="px-3 py-0.5 rounded-full bg-[#F5A524]/20 text-[#ffdeaa] text-xs font-semibold">
                  Konfirmasi Mahasiswa (Belum Diverifikasi E-Class)
                </span>
              </div>

              <div>
                <h1 class="text-2xl md:text-3xl font-bold text-white tracking-tight">${course.name}</h1>
                <div class="flex flex-wrap items-center gap-x-5 gap-y-2 text-[#ffd9df] text-[13.5px] mt-2">
                  <span class="flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-[18px] text-[#f5bd58]">person</span>
                    Dosen Pengampu: <strong class="text-white">${course.lecturer}</strong>
                  </span>
                  <span class="flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-[18px] text-[#f5bd58]">schedule</span>
                    Jadwal: <strong class="text-white">${course.scheduleText}</strong>
                  </span>
                  <span class="flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-[18px] text-[#f5bd58]">meeting_room</span>
                    Ruangan: <strong class="text-white">${course.room}</strong>
                  </span>
                </div>
              </div>

              ${
                course.conflictWith
                  ? `<div class="p-3 rounded-xl bg-[#E5484D]/25 border border-[#ffb1c0]/40 text-white text-xs flex items-start gap-2">
                      <span class="material-symbols-outlined text-[18px] text-[#ffdad6] shrink-0">warning</span>
                      <div>
                        <strong class="block text-[#ffdad6]">Indikator Konflik Jadwal Terdeteksi:</strong>
                        <span>${course.conflictWith} (Jam asli dipertahankan sesuai data akademik).</span>
                      </div>
                     </div>`
                  : ''
              }

              ${
                course.scheduleNote
                  ? `<div class="p-3 rounded-xl bg-white/10 border border-white/20 text-[#ffd9df] text-xs flex items-start gap-2">
                      <span class="material-symbols-outlined text-[18px] text-[#f5bd58] shrink-0">info</span>
                      <div>
                        <strong class="block text-white">Catatan Jadwal & Perkuliahan:</strong>
                        <span>${course.scheduleNote}</span>
                      </div>
                     </div>`
                  : ''
              }
            </div>

            <!-- Right Summary Box -->
            <div class="w-full xl:w-80 bg-white/10 backdrop-blur-md rounded-2xl p-4 flex flex-col justify-between border border-white/15">
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-xs uppercase tracking-wider text-[#ffd9df] font-bold">Riwayat Pertemuan</span>
                  <span class="text-lg font-extrabold text-white">${st.recordedCount} / 16 Sesi</span>
                </div>
                <div class="w-full h-2 rounded-full bg-black/30 overflow-hidden">
                  <div class="h-full bg-[#f5bd58] rounded-full" style="width: ${Math.round((st.recordedCount / 16) * 100)}%"></div>
                </div>
                <div class="grid grid-cols-2 gap-2 pt-1">
                  <div class="bg-black/25 p-2.5 rounded-xl">
                    <span class="text-[11px] text-[#ffd9df] block">Status Kehadiran</span>
                    <span class="text-sm font-bold text-white mt-0.5 block">
                      ${st.hasAttendanceData ? `${st.attendancePct}% (${st.hadirCount}/${st.recordedCount} Hadir)` : 'Belum ada data absensi'}
                    </span>
                  </div>
                  <div class="bg-black/25 p-2.5 rounded-xl">
                    <span class="text-[11px] text-[#ffd9df] block">Belum Tercatat</span>
                    <span class="text-sm font-bold text-[#ffd9df] mt-0.5 block">${st.unrecordedCount} Pertemuan</span>
                  </div>
                </div>
              </div>
              <div class="pt-3 mt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-[#ffd9df]">
                <span>Mahasiswa: Rimawati (240511184)</span>
                <a href="${getScreenUrl('kehadiran_presensi_akademik_mahasiswa')}" class="underline hover:text-white font-semibold">Rekap Presensi →</a>
              </div>
            </div>
          </div>
        </section>

        <!-- Main Grid: Recorded Meetings & 16-Session Structure -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <!-- Left 8 Cols: Daftar Pertemuan 1 s.d. 16 -->
          <div class="lg:col-span-8 space-y-4">
            <!-- Filter Bar -->
            <div class="bg-surface-white rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div class="flex items-center gap-2 flex-wrap">
                <button type="button" data-slot-filter="all" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                  filterMode === 'all' ? 'bg-primary text-white' : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface'
                }">
                  Semua Slot (16)
                </button>
                <button type="button" data-slot-filter="recorded" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                  filterMode === 'recorded' ? 'bg-primary text-white' : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface'
                }">
                  Sudah Tercatat (${st.recordedCount})
                </button>
                <button type="button" data-slot-filter="unrecorded" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                  filterMode === 'unrecorded' ? 'bg-primary text-white' : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface'
                }">
                  Belum Tercatat (${st.unrecordedCount})
                </button>
              </div>
              <span class="text-xs text-outline font-medium">
                Hanya pertemuan yang sudah terlaksana yang memiliki catatan materi & presensi
              </span>
            </div>

            ${
              st.recordedCount === 0
                ? `<div class="bg-surface-white rounded-2xl p-6 shadow-sm border border-outline-rose/60 text-center space-y-2">
                    <div class="w-12 h-12 rounded-2xl bg-soft-rose text-primary flex items-center justify-center mx-auto">
                      <span class="material-symbols-outlined text-[26px]">event_busy</span>
                    </div>
                    <h3 class="text-base font-bold text-on-surface">Belum Ada Pertemuan yang Tercatat untuk ${course.name}</h3>
                    <p class="text-xs text-on-surface-variant max-w-lg mx-auto leading-relaxed">
                      Mata kuliah ini terjadwal rutin pada <strong>${course.scheduleText}</strong> di <strong>${course.room}</strong> bersama <strong>${course.lecturer}</strong>, namun saat ini belum memiliki riwayat pertemuan maupun data absensi yang dapat dihitung. Seluruh 16 slot pertemuan di bawah masih berstatus <strong>Belum Tercatat</strong>.
                    </p>
                   </div>`
                : ''
            }

            <!-- Session Cards List -->
            <div class="space-y-3">
              ${filteredSlots
                .map((slot) => {
                  if (slot.recorded) {
                    return `
                    <div class="bg-surface-white rounded-2xl p-5 shadow-sm border-l-4 border-[#22A06B] flex flex-col gap-3">
                      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div class="flex items-center gap-2.5 flex-wrap">
                          <span class="w-8 h-8 rounded-xl bg-primary text-white font-bold text-xs flex items-center justify-center">
                            P${slot.number}
                          </span>
                          <span class="px-2.5 py-0.5 rounded-full bg-status-completed/10 text-status-completed text-xs font-bold flex items-center gap-1">
                            <span class="material-symbols-outlined text-[14px]">check_circle</span>
                            Terlaksana
                          </span>
                          <span class="px-2.5 py-0.5 rounded-full bg-soft-rose text-primary text-xs font-bold">
                            Kehadiran: ${slot.attendance} (Konfirmasi Mahasiswa)
                          </span>
                        </div>
                        <span class="px-3 py-1 rounded-lg bg-surface-container-low text-on-surface text-xs font-bold flex items-center gap-1">
                          <span class="material-symbols-outlined text-[15px] text-primary">calendar_today</span>
                          ${slot.date}
                        </span>
                      </div>
                      <div class="pl-0 sm:pl-10">
                        <h3 class="text-[15px] font-bold text-on-surface">${slot.topic}</h3>
                        <p class="text-[13px] text-on-surface-variant mt-1 leading-relaxed">${slot.detail}</p>
                      </div>
                    </div>
                  `;
                  } else {
                    return `
                    <div class="bg-surface-white/70 rounded-xl p-3.5 border border-dashed border-outline-rose flex items-center justify-between gap-3 opacity-75">
                      <div class="flex items-center gap-3 min-w-0">
                        <span class="w-8 h-8 rounded-lg bg-surface-container text-outline font-bold text-xs flex items-center justify-center shrink-0">
                          P${slot.number}
                        </span>
                        <div class="min-w-0">
                          <span class="text-[13.5px] font-semibold text-on-surface-variant block truncate">
                            Pertemuan ${slot.number} — Belum ada riwayat pertemuan
                          </span>
                          <span class="text-[11.5px] text-outline block">
                            Tanggal, materi, dan presensi belum tercatat (tidak diisi otomatis)
                          </span>
                        </div>
                      </div>
                      <span class="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-semibold shrink-0">
                        Belum Tercatat
                      </span>
                    </div>
                  `;
                  }
                })
                .join('')}
            </div>
          </div>

          <!-- Right 4 Cols: Metadata & Aturan Pencatatan -->
          <div class="lg:col-span-4 space-y-4">
            <div class="bg-surface-white rounded-2xl p-5 shadow-sm space-y-3">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary">fact_check</span>
                <h3 class="text-[15px] font-bold text-on-surface">Ringkasan Kehadiran Mata Kuliah</h3>
              </div>
              <div class="p-3.5 rounded-xl bg-surface-container-low space-y-2 text-[13px]">
                <div class="flex justify-between">
                  <span class="text-on-surface-variant">Pertemuan Tercatat:</span>
                  <strong class="text-on-surface">${st.recordedCount} dari 16 Pertemuan</strong>
                </div>
                <div class="flex justify-between">
                  <span class="text-on-surface-variant">Status Hadir:</span>
                  <strong class="text-status-completed">${st.hadirCount} Pertemuan</strong>
                </div>
                <div class="flex justify-between">
                  <span class="text-on-surface-variant">Izin / Sakit / Alpa:</span>
                  <strong class="text-on-surface">0 / 0 / 0</strong>
                </div>
                <div class="pt-2 border-t border-outline-rose/40 flex justify-between items-center">
                  <span class="text-on-surface-variant font-semibold">Persentase Aktual:</span>
                  <span class="px-2.5 py-0.5 rounded-full ${
                    st.hasAttendanceData ? 'bg-status-completed/10 text-status-completed' : 'bg-surface-container-high text-on-surface-variant'
                  } font-bold text-xs">
                    ${st.attendanceText}
                  </span>
                </div>
              </div>
              <p class="text-[11.5px] text-on-surface-variant leading-relaxed bg-soft-rose/60 p-3 rounded-xl">
                <strong>Catatan Verifikasi:</strong> ${ACADEMIC_DB.verificationDisclaimer}
              </p>
            </div>

            <div class="bg-surface-white rounded-2xl p-5 shadow-sm space-y-3">
              <h3 class="text-[15px] font-bold text-on-surface">Daftar 8 Mata Kuliah Semester Ini</h3>
              <div class="space-y-1.5">
                ${ACADEMIC_DB.courses
                  .map((c) => {
                    const cst = getCourseStats(c);
                    return `
                    <button type="button" data-course-pill="${c.id}" class="w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs transition-colors ${
                      c.id === course.id ? 'bg-soft-rose text-primary font-bold' : 'hover:bg-surface-container-low text-on-surface'
                    }">
                      <div class="truncate pr-2">
                        <span class="block truncate font-semibold">${c.name}</span>
                        <span class="text-[11px] text-outline">${c.lecturer} • ${c.scheduleText}</span>
                      </div>
                      <span class="px-2 py-0.5 rounded bg-surface-container text-[11px] font-bold shrink-0">
                        ${cst.recordedCount}/16
                      </span>
                    </button>
                  `;
                  })
                  .join('')}
              </div>
            </div>
          </div>
        </div>
      `;

      // Bind Course Select dropdown & pills
      const selectEl = mainContainer.querySelector('#cf-detail-course-select');
      selectEl?.addEventListener('change', () => {
        const newId = selectEl.value;
        window.history.replaceState({}, '', `?course=${newId}`);
        renderSelectedCourse(newId, 'all');
      });

      mainContainer.querySelectorAll('[data-course-pill]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const newId = btn.getAttribute('data-course-pill');
          window.history.replaceState({}, '', `?course=${newId}`);
          renderSelectedCourse(newId, 'all');
        });
      });

      mainContainer.querySelectorAll('[data-slot-filter]').forEach((btn) => {
        btn.addEventListener('click', () => {
          renderSelectedCourse(course.id, btn.getAttribute('data-slot-filter'));
        });
      });
    }

    renderSelectedCourse(initialCourseId, 'all');
  }

  // ============================================================================
  // 6B. UNIFIED ASSIGNMENTS & SUBMISSIONS ENGINE (MAHASISWA <-> DOSEN <-> KALENDER)
  // ============================================================================
  const ASSIGNMENTS_STORAGE_KEY = 'cf_assignments_v5';

  // Simulated base reference date: Senin, 2 November 2026 pukul 10:15 WIB, plus live elapsed seconds
  const SESSION_START_REAL_MS = Date.now();
  const BASE_SIMULATED_MS = new Date('2026-11-02T10:15:00+07:00').getTime();

  function getActualSystemTimeMs() {
    // Uses real elapsed system time anchored to the active academic semester week (2 Nov 2026)
    // If a deadline is set in the future of real wall-clock or simulated clock, we support both seamlessly
    return BASE_SIMULATED_MS + (Date.now() - SESSION_START_REAL_MS);
  }

  function formatWibDateTime(isoStr) {
    if (!isoStr) return '-';
    const d = new Date(isoStr);
    if (isNaN(d.getTime())) return isoStr;
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const dayName = days[d.getDay()];
    const dateNum = d.getDate();
    const monthName = months[d.getMonth()];
    const year = d.getFullYear();
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    return {
      full: `${dayName}, ${dateNum} ${monthName} ${year} • ${hh}:${mm} WIB`,
      dateOnly: `${dateNum} ${monthName} ${year}`,
      dayDate: `${dayName}, ${dateNum} ${monthName} ${year}`,
      timeOnly: `${hh}:${mm} WIB`,
      inputDate: `${year}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(dateNum).padStart(2, '0')}`,
      inputTime: `${hh}:${mm}`
    };
  }

  function createCleanStudentSubmission() {
    return {
      nim: '240511184',
      studentName: 'Rimawati',
      status: 'Belum Dikerjakan',
      submissionId: null,
      fileName: null,
      fileFormat: null,
      fileSize: null,
      submittedDate: null,
      submittedTime: null,
      submittedIso: null,
      notes: '',
      optionalLink: '',
      grade: null,
      feedback: null,
      lecturerDecision: null,
      revisionParts: null,
      revisionRequestedDate: null,
      revisionDeadline: null,
      revisionDraftFile: null,
      revisionDraftNotes: '',
      revisionHistory: []
    };
  }

  const DEFAULT_ASSIGNMENTS = [
    {
      id: 'tugas-adpl-bab2',
      courseId: 'adpl',
      courseName: 'Analisis dan Desain Perangkat Lunak',
      lecturer: 'Dyan Novianti',
      kelas: 'TI24D',
      meeting: 'Pertemuan 2',
      title: 'Laporan Analisis & Spesifikasi Kebutuhan Perangkat Lunak (SRS BAB 2)',
      description:
        'Susun dokumen tindak lanjut hasil Presentasi Project Website (BAB 2) yang mencakup analisis kebutuhan fungsional, non-fungsional, Use Case Diagram, dan skenario aktivitas utama sistem.',
      instructions: [
        'Gunakan template dokumen SRS BAB 2 yang telah disediakan oleh dosen pengampu.',
        'Pastikan seluruh diagram Use Case dan Activity memiliki penjelasan alur utama dan alternatif.',
        'Unggah dokumen dalam format yang diizinkan sebelum batas waktu berakhir.'
      ],
      givenDate: '26 Oktober 2026',
      deadlineIso: '2026-11-05T23:59:00+07:00',
      timezone: 'WIB',
      allowedFormats: ['PDF', 'DOC', 'DOCX', 'PPT', 'PPTX'],
      maxSizeMb: 20,
      maxFiles: 1,
      allowResubmit: true,
      allowLate: true,
      template: {
        fileName: 'Template_SRS_BAB2_ADPL_TI24D.docx',
        docType: 'Microsoft Word (.DOCX)',
        fileSize: '1.4 MB',
        previewText:
          'STRUKTUR DOKUMEN SRS BAB 2 — ANALISIS & DESAIN PERANGKAT LUNAK (TI24D)\n\n2.1 Deskripsi Umum Sistem Website\n2.2 Karakteristik Pengguna (User Persona & Role)\n2.3 Analisis Kebutuhan Fungsional (FR-01 s.d. FR-10)\n2.4 Analisis Kebutuhan Non-Fungsional (Keamanan, Responsivitas, Performa)\n2.5 Pemodelan Use Case Diagram & Spesifikasi Use Case\n2.6 Activity Diagram Alur Utama'
      },
      studentSubmission: createCleanStudentSubmission(),
      otherSubmissions: [
        {
          nim: '240511102',
          studentName: 'Budi Santoso',
          status: 'Terkumpul',
          submissionId: 'CF-SUB-20261101-4102',
          fileName: 'SRS_BAB2_BudiSantoso_240511102.pdf',
          fileFormat: 'PDF',
          fileSize: '2.3 MB',
          submittedDate: '1 November 2026',
          submittedTime: '19:40 WIB',
          grade: null,
          feedback: null,
          revisionHistory: []
        },
        {
          nim: '240511118',
          studentName: 'Siti Aminah',
          status: 'Dinilai',
          submissionId: 'CF-SUB-20261031-3091',
          fileName: 'SRS_BAB2_SitiAminah_240511118.pdf',
          fileFormat: 'PDF',
          fileSize: '3.1 MB',
          submittedDate: '31 Oktober 2026',
          submittedTime: '14:20 WIB',
          grade: 92,
          feedback: 'Pemodelan Use Case dan spesifikasi kebutuhan fungsional sangat rapi dan sesuai standar IEEE.',
          revisionHistory: []
        },
        {
          nim: '240511145',
          studentName: 'Dimas Anggara',
          status: 'Perlu Revisi',
          submissionId: 'CF-SUB-20261101-5120',
          fileName: 'Draft_SRS_Dimas_240511145.docx',
          fileFormat: 'DOCX',
          fileSize: '1.8 MB',
          submittedDate: '1 November 2026',
          submittedTime: '21:05 WIB',
          grade: 72,
          feedback: 'Mohon lengkapi skenario alternatif pada Use Case Pengumpulan Tugas dan perbaiki notasi include/extend.',
          revisionParts: 'BAB 2.5 Use Case Diagram & Tabel Skenario Alternatif',
          revisionRequestedDate: '2 November 2026 • 08:30 WIB',
          revisionDeadline: '4 November 2026 • 23:59 WIB',
          revisionHistory: []
        }
      ]
    },
    {
      id: 'tugas-pbp-arsitektur',
      courseId: 'pbp',
      courseName: 'Pemrograman Berbasis Platform',
      lecturer: 'Sugianto',
      kelas: 'TI24D',
      meeting: 'Pertemuan 2',
      title: 'Studi Komparasi Arsitektur & Karakteristik Platform Web, Desktop, dan Mobile',
      description:
        'Buat matriks analisis perbandingan arsitektur aplikasi lintas platform (Web, Desktop, Mobile) beserta studi kasus implementasi nyata.',
      instructions: [
        'Bandingkan aspek rendering, manajemen state, akses hardware, dan pola distribusi aplikasi.',
        'Format file dapat berupa PDF, DOCX, PPTX, atau XLSX.',
        'Perhatikan batas waktu pengumpulan.'
      ],
      givenDate: '26 Oktober 2026',
      deadlineIso: '2026-11-03T18:00:00+07:00',
      timezone: 'WIB',
      allowedFormats: ['PDF', 'DOC', 'DOCX', 'PPT', 'PPTX', 'XLS', 'XLSX', 'JPG', 'JPEG', 'PNG'],
      maxSizeMb: 20,
      maxFiles: 1,
      allowResubmit: true,
      allowLate: true,
      template: {
        fileName: 'Template_Matriks_Platform_PBP_TI24D.pdf',
        docType: 'Dokumen PDF (.PDF)',
        fileSize: '860 KB',
        previewText:
          'TEMPLATE MATRIKS KOMPARASI PLATFORM — PEMROGRAMAN BERBASIS PLATFORM\n\n1. Tabel Perbandingan Arsitektur (Web vs Desktop vs Mobile)\n2. Karakteristik Eksekusi & Runtime Environment\n3. Studi Kasus Aplikasi Multi-Platform\n4. Kesimpulan & Rekomendasi Pemilihan Platform'
      },
      studentSubmission: createCleanStudentSubmission(),
      otherSubmissions: [
        {
          nim: '240511102',
          studentName: 'Budi Santoso',
          status: 'Dinilai',
          submissionId: 'CF-SUB-20261030-7104',
          fileName: 'Matriks_PBP_BudiSantoso.pdf',
          fileFormat: 'PDF',
          fileSize: '1.9 MB',
          submittedDate: '30 Oktober 2026',
          submittedTime: '20:10 WIB',
          grade: 88,
          feedback: 'Matriks komparasi lengkap dan terstruktur.',
          revisionHistory: []
        }
      ]
    },
    {
      id: 'tugas-tti-metopen',
      courseId: 'tti',
      courseName: 'Tata Tulis Ilmiah (Metodologi Penelitian)',
      lecturer: 'Hay Gunawan',
      kelas: 'TI24D',
      meeting: 'Pertemuan 1',
      title: 'Perumusan Masalah, Latar Belakang, & State of the Art Penelitian (BAB 1)',
      description:
        'Susun draf BAB 1 penelitian ilmiah bidang Informatika yang memuat latar belakang masalah, rumusan masalah, batasan masalah, tujuan penelitian, serta matriks telaah pustaka minimal 5 jurnal terkini.',
      instructions: [
        'Gunakan template penulisan karya ilmiah sesuai pedoman Program Studi Teknik Informatika.',
        'Sertakan tabel State of the Art minimal 5 artikel jurnal 5 tahun terakhir.',
        'Unggah dokumen dalam format PDF, DOC, atau DOCX (Maks. 20 MB).'
      ],
      givenDate: '27 Oktober 2026',
      deadlineIso: '2026-11-06T21:00:00+07:00',
      timezone: 'WIB',
      allowedFormats: ['PDF', 'DOC', 'DOCX', 'PPT', 'PPTX', 'XLS', 'XLSX', 'JPG', 'PNG'],
      maxSizeMb: 20,
      maxFiles: 1,
      allowResubmit: true,
      allowLate: true,
      template: {
        fileName: 'Template_BAB1_Metodologi_Penelitian_TI24D.docx',
        docType: 'Microsoft Word (.DOCX)',
        fileSize: '980 KB',
        previewText:
          'TEMPLATE BAB 1 — TATA TULIS ILMIAH (METODOLOGI PENELITIAN)\nDosen Pengampu: Hay Gunawan • Kelas TI24D\n\n1.1 Latar Belakang Masalah\n1.2 Identifikasi & Rumusan Masalah\n1.3 Batasan Masalah\n1.4 Tujuan & Manfaat Penelitian\n1.5 Tabel Matriks State of the Art (Minimal 5 Jurnal)'
      },
      studentSubmission: createCleanStudentSubmission(),
      otherSubmissions: []
    },
    {
      id: 'tugas-mpti-charter',
      courseId: 'mpti',
      courseName: 'Manajemen Proyek Teknologi Informasi',
      lecturer: 'Gunaly Dwi Hantoro',
      kelas: 'TI24D',
      meeting: 'Pertemuan 1',
      title: 'Penyusunan Dokumen Project Charter & Work Breakdown Structure (WBS)',
      description:
        'Buat dokumen inisiasi proyek sistem informasi (Project Charter) lengkap dengan estimasi ruang lingkup, pemangku kepentingan (stakeholder), dan struktur rincian kerja (WBS Level 1–3).',
      instructions: [
        'Lengkapi bagian Business Case, Project Objectives, dan Stakeholder Register.',
        'Sertakan diagram atau tabel WBS serta estimasi durasi awal.',
        'Format file yang diterima: PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX, JPG, PNG.'
      ],
      givenDate: '26 Oktober 2026',
      deadlineIso: '2026-11-01T23:59:00+07:00',
      timezone: 'WIB',
      allowedFormats: ['PDF', 'DOC', 'DOCX', 'PPT', 'PPTX', 'XLS', 'XLSX', 'JPG', 'PNG'],
      maxSizeMb: 20,
      maxFiles: 1,
      allowResubmit: true,
      allowLate: true,
      template: {
        fileName: 'Template_Project_Charter_WBS_MPTI_TI24D.docx',
        docType: 'Microsoft Word (.DOCX)',
        fileSize: '1.3 MB',
        previewText:
          'TEMPLATE PROJECT CHARTER & WBS — MANAJEMEN PROYEK TI (TI24D)\nDosen Pengampu: Gunaly Dwi Hantoro\n\n1. Identitas Proyek & Manajer Proyek\n2. Business Case & Tujuan Proyek (SMART Goals)\n3. Ruang Lingkup (In-Scope & Out-of-Scope)\n4. Work Breakdown Structure (WBS)\n5. Daftar Risiko Awal & Milestone'
      },
      studentSubmission: createCleanStudentSubmission(),
      otherSubmissions: []
    },
    {
      id: 'tugas-aik4-teologi',
      courseId: 'aik4',
      courseName: 'AIK 4 (Islam dan Ilmu Pengetahuan)',
      lecturer: "Mas'ud Mustaqwa",
      kelas: 'TI24D',
      meeting: 'Pertemuan 2',
      title: 'Resume Reflektif: Hakikat Ilmu dan Teologi Ilmu dalam Perspektif Islam',
      description:
        'Susun resume reflektif dari materi Pertemuan 2 mengenai integrasi nilai keislaman dalam pengembangan ilmu pengetahuan dan teknologi informasi.',
      instructions: [
        'Panjang resume 2–4 halaman A4.',
        'Sertakan minimal 3 rujukan ayat/hadis atau literatur ilmiah pendukung.'
      ],
      givenDate: '29 Oktober 2026',
      deadlineIso: '2026-11-04T23:59:00+07:00',
      timezone: 'WIB',
      allowedFormats: ['PDF', 'DOC', 'DOCX'],
      maxSizeMb: 15,
      maxFiles: 1,
      allowResubmit: true,
      allowLate: true,
      template: {
        fileName: 'Format_Resume_AIK4_Pertemuan2.docx',
        docType: 'Microsoft Word (.DOCX)',
        fileSize: '640 KB',
        previewText:
          'FORMAT RESUME AIK 4 (ISLAM DAN ILMU PENGETAHUAN)\n\nIdentitas Mahasiswa: Nama, NIM, Kelas TI24D\nBagian A: Ringkasan Hakikat Ilmu & Teologi Ilmu\nBagian B: Integrasi Ilmu Pengetahuan & Etika Rekayasa Perangkat Lunak\nBagian C: Daftar Referensi'
      },
      studentSubmission: createCleanStudentSubmission(),
      otherSubmissions: []
    },
    {
      id: 'tugas-aicp-text2img',
      courseId: 'aicp',
      courseName: 'AI Computing Platform',
      lecturer: 'Fredo Wicaksono',
      kelas: '24K2A',
      meeting: 'Pertemuan 2',
      title: 'Dokumentasi Eksperimen Prompting & Evaluasi Model Text to Image',
      description:
        'Kumpulkan laporan hasil eksperimen materi Pertemuan 2 (Text to Image) beserta tangkapan layar parameter generasi citra.',
      instructions: [
        'Sertakan minimal 3 variasi prompt beserta hasil gambar yang dihasilkan.',
        'Dapat diunggah dalam bentuk PDF, DOCX, PPTX, atau gambar JPG/PNG.'
      ],
      givenDate: '28 Oktober 2026',
      deadlineIso: '2026-11-04T21:00:00+07:00',
      timezone: 'WIB',
      allowedFormats: ['PDF', 'DOC', 'DOCX', 'PPT', 'PPTX', 'JPG', 'JPEG', 'PNG'],
      maxSizeMb: 20,
      maxFiles: 1,
      allowResubmit: true,
      allowLate: true,
      template: {
        fileName: 'Panduan_Laporan_TextToImage_24K2A.pdf',
        docType: 'Dokumen PDF (.PDF)',
        fileSize: '1.1 MB',
        previewText:
          'PANDUAN LAPORAN EKSPERIMEN TEXT TO IMAGE (24K2A)\n\n1. Spesifikasi Model & Platform AI yang Digunakan\n2. Tabel Eksperimen Prompt (Positive Prompt, Negative Prompt, Steps, Guidance Scale)\n3. Lampiran Hasil Citra & Analisis Kualitas Visual'
      },
      studentSubmission: createCleanStudentSubmission(),
      otherSubmissions: []
    },
    {
      id: 'tugas-arvr-konsep',
      courseId: 'arvr',
      courseName: 'Teknologi AR/VR',
      lecturer: 'Muhamad Imam',
      kelas: '24K2B',
      meeting: 'Pertemuan 1',
      title: 'Eksplorasi Konsep Spatial Computing, Milgram Continuum, & Studi Kasus AR/VR',
      description:
        'Susun ringkasan analisis perbedaan Augmented Reality (AR), Mixed Reality (MR), dan Virtual Reality (VR) berdasarkan Reality-Virtuality Continuum beserta rancangan ide aplikasi interaktif.',
      instructions: [
        'Jelaskan posisi studi kasus pada spektrum Milgram Reality-Virtuality Continuum.',
        'Sertakan spesifikasi perangkat keras (HMD / Mobile AR) dan SDK yang direkomendasikan.',
        'Unggah dalam format PDF, DOCX, atau slide presentasi PPTX.'
      ],
      givenDate: '27 Oktober 2026',
      deadlineIso: '2026-11-07T23:59:00+07:00',
      timezone: 'WIB',
      allowedFormats: ['PDF', 'DOC', 'DOCX', 'PPT', 'PPTX', 'JPG', 'PNG'],
      maxSizeMb: 20,
      maxFiles: 1,
      allowResubmit: true,
      allowLate: true,
      template: {
        fileName: 'Template_Studi_Kasus_ARVR_24K2B.pptx',
        docType: 'Microsoft PowerPoint (.PPTX)',
        fileSize: '1.9 MB',
        previewText:
          'TEMPLATE STUDI KASUS TEKNOLOGI AR/VR (KELAS 24K2B)\nDosen Pengampu: Muhamad Imam\n\nSlide 1: Judul & Konsep Aplikasi Imersif\nSlide 2: Posisi pada Reality-Virtuality Continuum\nSlide 3: Kebutuhan Sensor, Tracking, & Perangkat Keras\nSlide 4: Sketsa Interaksi Pengguna (3D UI)'
      },
      studentSubmission: createCleanStudentSubmission(),
      otherSubmissions: []
    },
    {
      id: 'tugas-imk-observasi',
      courseId: 'imk',
      courseName: 'Interaksi Manusia dan Komputer (IMK)',
      lecturer: 'Muhamad Imam',
      kelas: 'TI25D',
      meeting: 'Pertemuan 1',
      title: 'Evaluasi Heuristik Antarmuka Aplikasi Akademik (Nielsen 10 Heuristics)',
      description:
        'Lakukan evaluasi kemudahan penggunaan (usability) pada salah satu fitur aplikasi akademik menggunakan prinsip 10 Heuristik Usability Jakob Nielsen.',
      instructions: [
        'Identifikasi minimal 3 temuan masalah UI/UX beserta rekomendasi penyederhanaan desain.',
        'Unggah laporan dalam format PDF, DOCX, atau PPTX.'
      ],
      givenDate: '26 Oktober 2026',
      deadlineIso: '2026-11-06T23:59:00+07:00',
      timezone: 'WIB',
      allowedFormats: ['PDF', 'DOC', 'DOCX', 'PPT', 'PPTX', 'JPG', 'JPEG', 'PNG'],
      maxSizeMb: 20,
      maxFiles: 1,
      allowResubmit: true,
      allowLate: true,
      template: {
        fileName: 'Worksheet_Evaluasi_Heuristik_IMK_TI25D.pptx',
        docType: 'Microsoft PowerPoint (.PPTX)',
        fileSize: '2.2 MB',
        previewText:
          'WORKSHEET EVALUASI HEURISTIK IMK (KELAS TI25D)\n\nSlide 1: Profil Aplikasi yang Dievaluasi\nSlide 2: Temuan #1 — Visibility of System Status & Penyederhanaan Layout\nSlide 3: Temuan #2 — Error Prevention & Validasi Upload File\nSlide 4: Usulan Perbaikan Desain (Before vs After)'
      },
      studentSubmission: createCleanStudentSubmission(),
      otherSubmissions: []
    }
  ];

  function normalizeAssignmentStatus(rawStatus) {
    const s = (rawStatus || 'Belum Dikerjakan').trim().toLowerCase();
    if (s === 'draft') return 'Draft';
    if (s === 'terkumpul') return 'Terkumpul';
    if (s === 'sedang dinilai') return 'Sedang Dinilai';
    if (s === 'dinilai') return 'Dinilai';
    if (s === 'perlu revisi') return 'Perlu Revisi';
    if (s === 'revisi terkumpul') return 'Revisi Terkumpul';
    if (s === 'terlambat') return 'Terlambat';
    return 'Belum Dikerjakan';
  }

  function loadAssignments() {
    try {
      const raw = localStorage.getItem(ASSIGNMENTS_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn('Failed to parse assignments from localStorage', e);
    }
    localStorage.setItem(ASSIGNMENTS_STORAGE_KEY, JSON.stringify(DEFAULT_ASSIGNMENTS));
    return JSON.parse(JSON.stringify(DEFAULT_ASSIGNMENTS));
  }

  function saveAssignments(list) {
    localStorage.setItem(ASSIGNMENTS_STORAGE_KEY, JSON.stringify(list));
  }

  function computeDeadlineInfo(task) {
    const nowMs = getActualSystemTimeMs();
    const deadlineMs = new Date(task.deadlineIso).getTime();
    const diffMs = deadlineMs - nowMs;
    const isPast = diffMs <= 0;

    const absSec = Math.floor(Math.abs(diffMs) / 1000);
    const days = Math.floor(absSec / 86400);
    const hours = Math.floor((absSec % 86400) / 3600);
    const minutes = Math.floor((absSec % 3600) / 60);
    const seconds = absSec % 60;

    let countdownText = '';
    if (isPast) {
      if (days > 0) countdownText = `Melewati batas waktu ${days} hari ${hours} jam ${minutes} mnt`;
      else countdownText = `Melewati batas waktu ${hours} jam ${minutes} mnt ${seconds} dtk`;
    } else {
      if (days > 0) countdownText = `${days} hari ${hours} jam ${minutes} mnt ${seconds} dtk tersisa`;
      else countdownText = `${hours} jam ${minutes} mnt ${seconds} dtk tersisa`;
    }

    const isApproaching = !isPast && diffMs <= 48 * 3600 * 1000; // <= 48 hours

    // Compute effective status with real-time deadline check
    let effectiveStatus = normalizeAssignmentStatus(task.studentSubmission?.status);
    const hasSubmittedBefore = Boolean(task.studentSubmission?.submissionId);
    if (isPast && !hasSubmittedBefore && (effectiveStatus === 'Belum Dikerjakan' || effectiveStatus === 'Draft')) {
      effectiveStatus = 'Terlambat';
    }

    return {
      isPast,
      isApproaching,
      diffMs,
      days,
      hours,
      minutes,
      seconds,
      countdownText,
      effectiveStatus,
      formattedDeadline: formatWibDateTime(task.deadlineIso)
    };
  }

  function getStatusBadgeHtml(status, size = 'sm') {
    const norm = normalizeAssignmentStatus(status);
    const map = {
      'Belum Dikerjakan': {
        bg: 'bg-surface-container-high text-on-surface-variant border border-outline-rose',
        icon: 'pending_actions'
      },
      Draft: {
        bg: 'bg-[#D9A441]/15 text-[#795400] dark:text-[#f5bd58] border border-[#D9A441]/40',
        icon: 'edit_document'
      },
      Terkumpul: {
        bg: 'bg-[#22A06B]/15 text-[#22A06B] border border-[#22A06B]/30',
        icon: 'task_alt'
      },
      'Sedang Dinilai': {
        bg: 'bg-sky-500/15 text-sky-700 dark:text-sky-300 border border-sky-500/35',
        icon: 'hourglass_top'
      },
      Dinilai: {
        bg: 'bg-[#B5546B]/15 text-[#B5546B] dark:text-[#ffb1c0] border border-[#B5546B]/40',
        icon: 'workspace_premium'
      },
      'Perlu Revisi': {
        bg: 'bg-[#D9A441]/22 text-[#805600] dark:text-[#ffdeaa] border border-[#D9A441]/55',
        icon: 'rate_review'
      },
      'Revisi Terkumpul': {
        bg: 'bg-teal-600/15 text-teal-700 dark:text-teal-300 border border-teal-600/35',
        icon: 'published_with_changes'
      },
      Terlambat: {
        bg: 'bg-[#E5484D]/15 text-[#E5484D] border border-[#E5484D]/30',
        icon: 'assignment_late'
      }
    };
    const cfg = map[norm] || map['Belum Dikerjakan'];
    const pad = size === 'lg' ? 'px-3.5 py-1.5 text-xs' : 'px-2.5 py-0.5 text-[11.5px]';
    return `<span class="inline-flex items-center gap-1 rounded-full font-bold ${pad} ${cfg.bg}">
      <span class="material-symbols-outlined text-[14px]">${cfg.icon}</span>
      <span>${norm}</span>
    </span>`;
  }

  function triggerSimulatedFileDownload(fileName, contentTitle, detailsObj) {
    const lines = [
      '====================================================================',
      'CAMPUSFLOW — ACADEMIC HUB (DOKUMEN AKADEMIK TERVERIFIKASI)',
      '====================================================================',
      `Judul Dokumen : ${contentTitle}`,
      `Nama Berkas   : ${fileName}`,
      `Waktu Unduh   : ${new Date().toLocaleString('id-ID')}`,
      '--------------------------------------------------------------------',
      ...Object.entries(detailsObj || {}).map(([k, v]) => `${k.padEnd(18, ' ')}: ${v}`),
      '===================================================================='
    ];
    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 300);
    showToast('Mengunduh Berkas', `Berkas "${fileName}" berhasil diunduh ke perangkat Anda.`, 'success');
  }

  // ============================================================================
  // C. JADWAL & KALENDER AKADEMIK — DISEDERHANAKAN & FOKUS KALENDER (Section 3)
  // ============================================================================
  function syncKalenderPage() {
    if (currentScreenId !== 'kalender_akademik_jadwal_kuliah_mahasiswa') return;

    const root = document.getElementById('cf-calendar-root') || document.querySelector('main > div');
    if (!root) return;

    let activeView = 'mingguan'; // 'mingguan' | 'bulanan' | 'harian' | 'agenda'
    let activeFilter = 'all'; // 'all' | 'courses' | 'deadlines' | 'conflicts'
    let selectedDay = 'Senin'; // For 'harian' view
    let googleSyncedAt = 'Baru saja (Otomatis)';

    function renderCalendar() {
      const assignments = loadAssignments();
      const seninCourses = ACADEMIC_DB.courses.filter((c) => c.day === 'Senin');
      const selasaCourses = ACADEMIC_DB.courses.filter((c) => c.day === 'Selasa');
      const kamisCourses = ACADEMIC_DB.courses.filter((c) => c.day === 'Kamis');
      const unscheduledCourses = ACADEMIC_DB.courses.filter((c) => c.day === 'Belum tersedia');

      // Build main calendar area based on activeView & activeFilter
      let mainCalendarHtml = '';

      if (activeView === 'mingguan') {
        const showCourses = activeFilter === 'all' || activeFilter === 'courses' || activeFilter === 'conflicts';
        const showDeadlines = activeFilter === 'all' || activeFilter === 'deadlines';

        const filterCourseList = (list) =>
          activeFilter === 'conflicts' ? list.filter((c) => Boolean(c.conflictWith)) : list;

        const renderDayCard = (dayTitle, dateSub, badgeText, badgeClass, coursesList, dayTasks) => `
          <div class="bg-surface-white rounded-2xl p-4 sm:p-5 shadow-sm border border-outline-rose/50 flex flex-col justify-between space-y-3">
            <div class="space-y-3">
              <div class="flex items-center justify-between pb-2.5 border-b border-outline-rose/40 gap-2">
                <div>
                  <h3 class="text-[15px] font-bold text-on-surface">${dayTitle}</h3>
                  <p class="text-[11.5px] text-on-surface-variant">${dateSub}</p>
                </div>
                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold shrink-0 ${badgeClass}">${badgeText}</span>
              </div>

              <div class="space-y-2.5">
                ${
                  showCourses
                    ? filterCourseList(coursesList)
                        .map(
                          (c) => `
                  <a href="${getScreenUrl('detail_mata_kuliah_manajemen_proyek_ti', `course=${c.id}`)}" class="block p-3 rounded-xl bg-surface-container-low hover:bg-soft-rose/70 transition-all border-l-4 ${
                            c.conflictWith ? 'border-status-overdue' : 'border-[#B5546B]'
                          }">
                    <div class="flex items-center justify-between text-[11.5px] mb-1 gap-2">
                      <span class="font-bold text-primary">${c.time}${c.time.includes('WIB') || c.time === 'Belum tersedia' ? '' : ' WIB'}</span>
                      <span class="px-2 py-0.5 rounded bg-surface-white text-on-surface font-semibold text-[11px]">${c.kelas} • ${c.sks} SKS</span>
                    </div>
                    <h4 class="text-[13.5px] font-bold text-on-surface leading-snug">${c.name}</h4>
                    <div class="flex items-center justify-between text-[11.5px] text-on-surface-variant mt-1">
                      <span class="truncate pr-2">${c.lecturer}</span>
                      <span class="shrink-0 font-medium text-on-surface">${c.room}</span>
                    </div>
                    ${
                      c.conflictWith
                        ? `<div class="mt-1.5 pt-1.5 border-t border-outline-rose/40 text-[11px] text-status-overdue font-semibold flex items-center gap-1">
                            <span class="material-symbols-outlined text-[13px]">warning</span>
                            <span class="truncate">Bentrok jadwal (${c.room})</span>
                           </div>`
                        : ''
                    }
                    ${
                      c.eclassSystemSchedule
                        ? `<div class="mt-1.5 pt-1.5 border-t border-outline-rose/40 text-[11px] text-primary font-semibold">
                            📌 Aktual Selasa 15.30 WIB (E-Class: Senin)
                           </div>`
                        : ''
                    }
                  </a>`
                        )
                        .join('')
                    : ''
                }

                ${
                  showDeadlines && dayTasks.length > 0
                    ? dayTasks
                        .map((t) => {
                          const dl = computeDeadlineInfo(t);
                          return `
                    <a href="${getScreenUrl('detail_tugas_pengumpulan_mahasiswa', `task=${t.id}`)}" class="block p-3 rounded-xl bg-[#E5484D]/8 hover:bg-[#E5484D]/15 transition-all border-l-4 border-status-overdue">
                      <div class="flex items-center justify-between text-[11px] mb-1">
                        <span class="font-bold text-status-overdue flex items-center gap-1">
                          <span class="material-symbols-outlined text-[13px]">alarm</span> DEADLINE TUGAS
                        </span>
                        <span class="font-bold text-status-overdue">${dl.formattedDeadline.timeOnly}</span>
                      </div>
                      <h4 class="text-[13px] font-bold text-on-surface leading-snug">${t.title}</h4>
                      <div class="flex items-center justify-between text-[11px] text-on-surface-variant mt-1">
                        <span class="truncate pr-2">${t.courseName}</span>
                        ${getStatusBadgeHtml(dl.effectiveStatus)}
                      </div>
                    </a>`;
                        })
                        .join('')
                    : ''
                }
              </div>
            </div>
          </div>
        `;

        const tasksByDate = (dateStr) =>
          assignments.filter((t) => formatWibDateTime(t.deadlineIso).inputDate === dateStr);

        mainCalendarHtml = `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${renderDayCard(
              'Senin (Hari Ini)',
              '2 November 2026 • G. Mahdior D406',
              '3 Kuliah • Bentrok Jam',
              'bg-status-overdue/12 text-status-overdue',
              seninCourses,
              tasksByDate('2026-11-02')
            )}
            ${renderDayCard(
              'Selasa',
              '3 November 2026 • D406 & D403',
              '3 Kuliah + 1 Deadline',
              'bg-soft-rose text-primary',
              selasaCourses,
              tasksByDate('2026-11-03')
            )}
            ${renderDayCard(
              'Rabu & Kamis',
              '4–5 November 2026 • G. Mahdior D405',
              '1 Kuliah + 2 Deadline',
              'bg-[#22A06B]/12 text-[#22A06B]',
              kamisCourses,
              [...tasksByDate('2026-11-04'), ...tasksByDate('2026-11-05')]
            )}
            ${renderDayCard(
              'Jumat & Jadwal Belum Tersedia',
              '6 November 2026 & AI Computing Platform',
              '1 MK + 1 Deadline',
              'bg-surface-container text-on-surface-variant',
              unscheduledCourses,
              tasksByDate('2026-11-06')
            )}
          </div>
        `;
      } else if (activeView === 'bulanan') {
        // November 2026 starts on Sunday (1 Nov 2026) and has 30 days
        const cells = [];
        for (let d = 1; d <= 30; d++) {
          const dateIsoPrefix = `2026-11-${String(d).padStart(2, '0')}`;
          const dow = new Date(`${dateIsoPrefix}T12:00:00+07:00`).getDay(); // 0 Sun, 1 Mon, 2 Tue, 4 Thu
          let dayCourses = [];
          if (dow === 1) dayCourses = seninCourses;
          if (dow === 2) dayCourses = selasaCourses;
          if (dow === 4) dayCourses = kamisCourses;

          if (activeFilter === 'conflicts') {
            dayCourses = dayCourses.filter((c) => Boolean(c.conflictWith));
          } else if (activeFilter === 'deadlines') {
            dayCourses = [];
          }

          const dayDeadlines =
            activeFilter === 'courses' || activeFilter === 'conflicts'
              ? []
              : assignments.filter((t) => formatWibDateTime(t.deadlineIso).inputDate === dateIsoPrefix);

          const isToday = d === 2;
          cells.push(`
            <div class="min-h-[104px] p-2 rounded-xl border ${
              isToday ? 'border-[#B5546B] bg-soft-rose/50 ring-1 ring-[#B5546B]' : 'border-outline-rose/40 bg-surface-white'
            } flex flex-col justify-between gap-1">
              <div class="flex items-center justify-between">
                <span class="w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center ${
                  isToday ? 'bg-[#B5546B] text-white' : 'text-on-surface'
                }">${d}</span>
                ${isToday ? '<span class="text-[10px] font-bold text-primary">Hari Ini</span>' : ''}
              </div>
              <div class="space-y-1 overflow-hidden">
                ${dayCourses
                  .slice(0, 2)
                  .map(
                    (c) => `
                  <a href="${getScreenUrl('detail_mata_kuliah_manajemen_proyek_ti', `course=${c.id}`)}" class="block px-1.5 py-0.5 rounded text-[10px] font-semibold truncate ${
                      c.conflictWith ? 'bg-status-overdue/15 text-status-overdue' : 'bg-soft-rose text-primary'
                    }" title="${c.name} (${c.scheduleText})">
                    ${c.shortName}
                  </a>`
                  )
                  .join('')}
                ${
                  dayCourses.length > 2
                    ? `<span class="block text-[10px] text-outline font-semibold pl-1">+${dayCourses.length - 2} kuliah lainnya</span>`
                    : ''
                }
                ${dayDeadlines
                  .map(
                    (t) => `
                  <a href="${getScreenUrl('detail_tugas_pengumpulan_mahasiswa', `task=${t.id}`)}" class="block px-1.5 py-0.5 rounded bg-status-overdue text-white text-[10px] font-bold truncate" title="Deadline: ${t.title}">
                    ⏰ ${t.title}
                  </a>`
                  )
                  .join('')}
              </div>
            </div>
          `);
        }

        mainCalendarHtml = `
          <div class="bg-surface-white rounded-2xl p-4 sm:p-5 shadow-sm border border-outline-rose/50 space-y-3">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <div>
                <h3 class="text-base font-bold text-on-surface">Kalender Bulanan — November 2026</h3>
                <p class="text-xs text-on-surface-variant">Klik mata kuliah atau penanda deadline untuk membuka rinciannya</p>
              </div>
              <div class="flex items-center gap-3 text-xs">
                <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-[#B5546B]"></span> Kuliah Rutin</span>
                <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-status-overdue"></span> Bentrok / Deadline</span>
              </div>
            </div>
            <div class="overflow-x-auto cf-scroll">
              <div class="min-w-[640px] space-y-2">
                <div class="grid grid-cols-7 gap-2 text-center text-xs font-bold text-on-surface-variant py-1.5 bg-surface-container-low rounded-xl">
                  <span>Minggu</span><span>Senin</span><span>Selasa</span><span>Rabu</span><span>Kamis</span><span>Jumat</span><span>Sabtu</span>
                </div>
                <div class="grid grid-cols-7 gap-2">
                  ${cells.join('')}
                </div>
              </div>
            </div>
          </div>
        `;
      } else if (activeView === 'harian') {
        const dayOptions = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Belum tersedia'];
        const coursesForDay = ACADEMIC_DB.courses.filter((c) => c.day === selectedDay);

        mainCalendarHtml = `
          <div class="bg-surface-white rounded-2xl p-5 shadow-sm border border-outline-rose/50 space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-outline-rose/40">
              <div>
                <h3 class="text-base font-bold text-on-surface">Tampilan Harian Fokus — ${selectedDay}</h3>
                <p class="text-xs text-on-surface-variant">Pilih hari untuk memeriksa rincian jam kuliah, ruangan, dan catatan jadwal</p>
              </div>
              <div class="flex items-center gap-1.5 flex-wrap">
                ${dayOptions
                  .map(
                    (d) => `
                  <button type="button" data-select-day="${d}" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      selectedDay === d
                        ? 'bg-[#B5546B] text-white shadow-xs'
                        : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface'
                    }">${d}</button>`
                  )
                  .join('')}
              </div>
            </div>

            ${
              coursesForDay.length === 0
                ? `<div class="p-8 text-center rounded-xl bg-surface-container-low space-y-1">
                    <span class="material-symbols-outlined text-primary text-[28px]">self_improvement</span>
                    <p class="text-sm font-bold text-on-surface">Tidak Ada Perkuliahan Tatap Muka Terjadwal pada Hari ${selectedDay}</p>
                    <p class="text-xs text-on-surface-variant">Gunakan waktu ini untuk pengerjaan tugas mandiri atau persiapan materi.</p>
                   </div>`
                : `<div class="space-y-3">
                    ${coursesForDay
                      .map((c) => {
                        const st = getCourseStats(c);
                        return `
                        <div class="p-4 rounded-xl bg-surface-container-low border-l-4 ${
                          c.conflictWith ? 'border-status-overdue' : 'border-[#B5546B]'
                        } flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div class="space-y-1">
                            <div class="flex items-center gap-2 flex-wrap">
                              <span class="px-2.5 py-0.5 rounded-lg bg-[#B5546B] text-white text-xs font-bold">${c.scheduleText}</span>
                              <span class="px-2.5 py-0.5 rounded-lg bg-surface-white text-on-surface text-xs font-semibold">${c.kelas} • ${c.sks} SKS</span>
                              <span class="text-xs text-on-surface-variant font-medium">📍 ${c.room}</span>
                            </div>
                            <h4 class="text-base font-bold text-on-surface">${c.name}</h4>
                            <p class="text-xs text-on-surface-variant">Dosen Pengampu: <strong>${c.lecturer}</strong> • Riwayat: <strong>${st.recordedCount}/16 Pertemuan Tercatat</strong></p>
                            ${
                              c.conflictWith
                                ? `<p class="text-xs text-status-overdue font-semibold">⚠️ ${c.conflictWith}</p>`
                                : ''
                            }
                            ${
                              c.scheduleNote
                                ? `<p class="text-xs text-primary font-semibold">ℹ️ ${c.scheduleNote}</p>`
                                : ''
                            }
                          </div>
                          <a href="${getScreenUrl('detail_mata_kuliah_manajemen_proyek_ti', `course=${c.id}`)}" class="shrink-0 px-3.5 py-2 rounded-xl bg-surface-white hover:bg-[#B5546B] text-primary hover:text-white text-xs font-bold transition-colors border border-outline-rose">
                            Detail & Riwayat →
                          </a>
                        </div>`;
                      })
                      .join('')}
                   </div>`
            }
          </div>
        `;
      } else {
        // 'agenda' view: combined chronological stream of courses + assignment deadlines
        mainCalendarHtml = `
          <div class="bg-surface-white rounded-2xl p-5 shadow-sm border border-outline-rose/50 space-y-4">
            <div class="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-outline-rose/40">
              <div>
                <h3 class="text-base font-bold text-on-surface">Daftar Agenda Kuliah & Deadline Tugas</h3>
                <p class="text-xs text-on-surface-variant">Ringkasan terpadu seluruh agenda perkuliahan aktif dan tenggat pengumpulan tugas</p>
              </div>
              <a href="${getScreenUrl('detail_mata_kuliah_manajemen_proyek_ti')}" class="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                <span>Buka Tabel Riwayat Pertemuan di Detail MK</span>
                <span class="material-symbols-outlined text-[15px]">open_in_new</span>
              </a>
            </div>

            <div class="space-y-2.5">
              ${assignments
                .map((t) => {
                  const dl = computeDeadlineInfo(t);
                  return `
                  <div class="p-3.5 rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-l-4 border-status-overdue">
                    <div class="space-y-1">
                      <div class="flex items-center gap-2 flex-wrap">
                        <span class="px-2 py-0.5 rounded bg-status-overdue text-white text-[11px] font-bold">DEADLINE TUGAS</span>
                        <span class="text-xs font-bold text-on-surface">${dl.formattedDeadline.full}</span>
                        ${getStatusBadgeHtml(dl.effectiveStatus)}
                      </div>
                      <h4 class="text-sm font-bold text-on-surface">${t.title}</h4>
                      <p class="text-xs text-on-surface-variant">${t.courseName} (${t.kelas}) • Dosen: ${t.lecturer} • <span class="text-primary font-semibold">${dl.countdownText}</span></p>
                    </div>
                    <a href="${getScreenUrl('detail_tugas_pengumpulan_mahasiswa', `task=${t.id}`)}" class="shrink-0 px-3.5 py-2 rounded-xl bg-[#B5546B] hover:bg-[#963c53] text-white text-xs font-bold transition-colors">
                      Buka Tugas →
                    </a>
                  </div>`;
                })
                .join('')}
            </div>
          </div>
        `;
      }

      // Upcoming deadlines sorted by deadlineIso
      const sortedTasks = [...assignments].sort(
        (a, b) => new Date(a.deadlineIso).getTime() - new Date(b.deadlineIso).getTime()
      );

      root.innerHTML = `
        <!-- Top Page Header & View Switcher -->
        <div class="bg-surface-white rounded-2xl p-4 sm:p-5 shadow-sm border border-outline-rose/50 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="px-2.5 py-0.5 rounded-full bg-soft-rose text-primary text-xs font-bold">Minggu ke-3 • Senin, 2 November 2026</span>
              <span class="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant text-xs font-semibold">8 Mata Kuliah • 22 SKS</span>
            </div>
            <h1 class="text-xl sm:text-2xl font-bold text-on-surface tracking-tight">Jadwal Kuliah & Kalender Akademik</h1>
          </div>

          <!-- View Switcher: Mingguan, Bulanan, Harian, Agenda -->
          <div class="flex flex-wrap items-center gap-2">
            <div class="inline-flex p-1 rounded-xl bg-surface-container-low border border-outline-rose/40">
              ${[
                { id: 'mingguan', label: 'Mingguan', icon: 'view_week' },
                { id: 'bulanan', label: 'Bulanan', icon: 'calendar_month' },
                { id: 'harian', label: 'Harian', icon: 'today' },
                { id: 'agenda', label: 'Agenda & Deadline', icon: 'event_list' }
              ]
                .map(
                  (v) => `
                <button type="button" data-cal-view="${v.id}" class="px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                    activeView === v.id
                      ? 'bg-[#B5546B] text-white shadow-xs'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }">
                  <span class="material-symbols-outlined text-[16px]">${v.icon}</span>
                  <span>${v.label}</span>
                </button>`
                )
                .join('')}
            </div>
          </div>
        </div>

        <!-- Compact Filter Bar + Conflict Summary Banner -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-surface-white rounded-2xl px-4 py-3 shadow-sm border border-outline-rose/40">
          <div class="flex items-center gap-1.5 flex-wrap">
            ${[
              { id: 'all', label: 'Semua Jadwal' },
              { id: 'courses', label: 'Mata Kuliah (8)' },
              { id: 'deadlines', label: `Deadline Tugas (${assignments.length})` },
              { id: 'conflicts', label: 'Bentrok Jadwal (4 MK)' }
            ]
              .map(
                (f) => `
              <button type="button" data-cal-filter="${f.id}" class="px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === f.id
                    ? 'bg-[#4A1F2E] text-white'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-soft-rose hover:text-primary'
                }">${f.label}</button>`
              )
              .join('')}
          </div>

          <a href="${getScreenUrl('detail_mata_kuliah_manajemen_proyek_ti')}" class="text-xs font-bold text-primary hover:underline flex items-center gap-1 shrink-0">
            <span class="material-symbols-outlined text-[16px]">history_edu</span>
            <span>Lihat Tabel Riwayat 16 Pertemuan di Detail Mata Kuliah →</span>
          </a>
        </div>

        <!-- Primary Layout: Calendar Focus (8 Cols) + Single Compact Agenda & Sync Panel (4 Cols) -->
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start">
          <!-- Main Calendar Area (8 Cols) -->
          <div class="xl:col-span-8 space-y-4">
            <!-- Compact Conflict & IMK Schedule Info Box -->
            <div class="rounded-2xl bg-soft-rose/80 p-4 border border-outline-rose flex flex-col sm:flex-row sm:items-start justify-between gap-3 text-xs">
              <div class="space-y-1">
                <div class="font-bold text-on-primary-fixed flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-[17px] text-status-overdue">warning</span>
                  <span>Informasi Bentrok Jadwal & Kesepakatan Hari Perkuliahan:</span>
                </div>
                <p class="text-on-surface-variant leading-relaxed">
                  • <strong>Senin (D406):</strong> <em>Manajemen Proyek TI</em> (07.30–10.00), <em>Pemrograman Platform</em> (08.00–12.30), & <em>Analisis Desain PL</em> (12.00–16.30) saling beririsan.<br/>
                  • <strong>Selasa (D406):</strong> <em>Tata Tulis Ilmiah</em> (08.00–14.00) beririsan dengan <em>Teknologi AR/VR</em> (12.00–15.30).<br/>
                  • <strong>IMK (TI25D — Muhamad Imam):</strong> Jadwal aktual <strong>Selasa, 15.30 WIB di D403</strong> (Catatan E-Class: Senin).
                </p>
              </div>
            </div>

            ${mainCalendarHtml}
          </div>

          <!-- Single Compact Right Panel (4 Cols): Agenda Terdekat, Deadline Tugas, & Google Calendar Sync -->
          <aside class="xl:col-span-4 space-y-4">
            <div class="bg-surface-white rounded-2xl p-5 shadow-sm border border-outline-rose/50 space-y-4">
              <!-- Panel Header -->
              <div class="flex items-center justify-between pb-3 border-b border-outline-rose/40">
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary text-[20px]">upcoming</span>
                  <h2 class="text-[15px] font-bold text-on-surface">Agenda & Deadline Terdekat</h2>
                </div>
                <a href="${getScreenUrl('detail_tugas_pengumpulan_mahasiswa')}" class="text-xs font-bold text-primary hover:underline">Semua Tugas →</a>
              </div>

              <!-- Nearest Deadlines List -->
              <div class="space-y-2.5">
                ${sortedTasks
                  .slice(0, 4)
                  .map((t) => {
                    const dl = computeDeadlineInfo(t);
                    return `
                    <a href="${getScreenUrl('detail_tugas_pengumpulan_mahasiswa', `task=${t.id}`)}" class="block p-3 rounded-xl bg-surface-container-low hover:bg-soft-rose/60 transition-colors space-y-1 border border-outline-rose/30">
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[11px] font-bold ${dl.isPast ? 'text-status-overdue' : 'text-primary'}">${dl.formattedDeadline.dayDate} • ${dl.formattedDeadline.timeOnly}</span>
                        ${getStatusBadgeHtml(dl.effectiveStatus)}
                      </div>
                      <h4 class="text-[13px] font-bold text-on-surface leading-snug">${t.title}</h4>
                      <div class="flex items-center justify-between text-[11px] text-on-surface-variant">
                        <span class="truncate">${t.courseName}</span>
                        <span class="font-semibold ${dl.isPast ? 'text-status-overdue' : 'text-on-surface'}">${dl.countdownText}</span>
                      </div>
                    </a>`;
                  })
                  .join('')}
              </div>

              <!-- Secondary Info: Gedung & Google Calendar Sync inside the same compact panel -->
              <div class="pt-3 border-t border-outline-rose/40 space-y-2.5 text-xs">
                <div class="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low">
                  <div class="flex items-center gap-2 min-w-0">
                    <span class="material-symbols-outlined text-primary text-[18px]">location_on</span>
                    <div class="truncate">
                      <span class="font-bold text-on-surface block">Lokasi Gedung Perkuliahan</span>
                      <span class="text-[11px] text-on-surface-variant">G. Mahdior D406, D405, & D403</span>
                    </div>
                  </div>
                  <span class="px-2 py-0.5 rounded bg-surface-white text-[10.5px] font-semibold text-on-surface-variant shrink-0">Lantai 4</span>
                </div>

                <div class="p-3 rounded-xl bg-soft-rose/60 border border-outline-rose flex items-center justify-between gap-2">
                  <div class="flex items-center gap-2 min-w-0">
                    <span class="material-symbols-outlined text-[#22A06B] text-[19px]">cloud_done</span>
                    <div class="min-w-0">
                      <span class="font-bold text-on-surface block truncate">Google Calendar Terhubung</span>
                      <span class="text-[11px] text-on-surface-variant block truncate">Sinkron: ${googleSyncedAt}</span>
                    </div>
                  </div>
                  <button type="button" id="cf-sync-gcal-btn" class="px-2.5 py-1.5 rounded-lg bg-surface-white hover:bg-[#B5546B] text-primary hover:text-white font-bold text-[11px] border border-outline-rose transition-colors shrink-0 flex items-center gap-1">
                    <span class="material-symbols-outlined text-[14px]">sync</span>
                    <span>Sinkron</span>
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      `;

      // Bind view switcher
      root.querySelectorAll('[data-cal-view]').forEach((btn) => {
        btn.addEventListener('click', () => {
          activeView = btn.getAttribute('data-cal-view');
          renderCalendar();
        });
      });

      // Bind filter chips
      root.querySelectorAll('[data-cal-filter]').forEach((btn) => {
        btn.addEventListener('click', () => {
          activeFilter = btn.getAttribute('data-cal-filter');
          renderCalendar();
        });
      });

      // Bind day selector in daily view
      root.querySelectorAll('[data-select-day]').forEach((btn) => {
        btn.addEventListener('click', () => {
          selectedDay = btn.getAttribute('data-select-day');
          renderCalendar();
        });
      });

      // Bind Google Calendar sync
      root.querySelector('#cf-sync-gcal-btn')?.addEventListener('click', () => {
        googleSyncedAt = 'Baru saja (' + new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB)';
        renderCalendar();
        showToast('Sinkronisasi Google Calendar Berhasil', 'Jadwal kuliah dan deadline tugas telah disinkronkan ke kalender Anda.', 'success');
      });
    }

    renderCalendar();
  }

  // D. KEHADIRAN & PRESENSI AKADEMIK (kehadiran_presensi_akademik_mahasiswa)
  function syncKehadiranPage() {
    if (currentScreenId !== 'kehadiran_presensi_akademik_mahasiswa') return;

    const gStats = getGlobalAcademicStats();

    // 1. Update Top 4 KPI Cards
    const kpiCards = document.querySelectorAll('main > div > div.grid:nth-of-type(2) > div');
    if (kpiCards.length >= 4) {
      kpiCards[0].innerHTML = `
        <div class="flex items-center justify-between">
          <span class="font-label-md text-label-md text-on-surface-variant tracking-wider uppercase">Persentase Kehadiran Aktual</span>
          <span class="w-8 h-8 rounded-xl bg-soft-rose flex items-center justify-center text-primary">
            <span class="material-symbols-outlined text-[20px]">percent</span>
          </span>
        </div>
        <div class="mt-4 flex items-baseline gap-2">
          <span class="font-page-title-lg text-page-title-lg text-on-primary-fixed">${gStats.overallPct}%</span>
          <span class="font-label-sm text-label-sm text-status-completed font-semibold">(${gStats.totalHadir}/${gStats.totalRecordedSessions} Pertemuan Tercatat)</span>
        </div>
        <p class="font-label-sm text-label-sm text-on-surface-variant mt-3">
          Dihitung dari pertemuan yang sudah tercatat, bukan dari 16 sesi penuh.
        </p>
      `;

      kpiCards[1].innerHTML = `
        <div class="flex items-center justify-between">
          <span class="font-label-md text-label-md text-on-surface-variant tracking-wider uppercase">Pertemuan Sudah Tercatat</span>
          <span class="w-8 h-8 rounded-xl bg-soft-rose flex items-center justify-center text-primary">
            <span class="material-symbols-outlined text-[20px]">event_available</span>
          </span>
        </div>
        <div class="mt-4 flex items-baseline gap-2">
          <span class="font-page-title-lg text-page-title-lg text-on-primary-fixed">${gStats.totalRecordedSessions}</span>
          <span class="font-body-base text-body-base text-on-surface-variant">Pertemuan Dikonfirmasi Hadir</span>
        </div>
        <p class="font-label-sm text-label-sm text-on-surface-variant mt-3">
          7 MK memiliki riwayat • 1 MK (Manajemen Proyek TI) belum ada data absensi.
        </p>
      `;

      kpiCards[2].innerHTML = `
        <div class="flex items-center justify-between">
          <span class="font-label-md text-label-md text-on-surface-variant tracking-wider uppercase">Izin / Sakit / Alpa</span>
          <span class="w-8 h-8 rounded-xl bg-surface-container-low flex items-center justify-center text-on-surface-variant">
            <span class="material-symbols-outlined text-[20px]">rule_folder</span>
          </span>
        </div>
        <div class="mt-4 flex items-center gap-6">
          <div>
            <span class="font-page-title-lg text-page-title-lg text-on-surface">0</span>
            <span class="font-label-sm text-label-sm text-on-surface-variant block">Izin & Sakit</span>
          </div>
          <div class="h-8 w-px bg-surface-container-highest"></div>
          <div>
            <span class="font-page-title-lg text-page-title-lg text-status-completed">0</span>
            <span class="font-label-sm text-label-sm text-on-surface-variant block">Alpa</span>
          </div>
        </div>
        <p class="font-label-sm text-label-sm text-on-surface-variant mt-3">
          Pertemuan yang belum berlangsung tidak dibuatkan presensi otomatis.
        </p>
      `;

      kpiCards[3].innerHTML = `
        <div class="flex items-center justify-between">
          <span class="font-label-md text-label-md text-on-surface-variant tracking-wider uppercase">Status Sumber Data</span>
          <span class="w-8 h-8 rounded-xl bg-soft-rose flex items-center justify-center text-primary">
            <span class="material-symbols-outlined text-[20px]">info</span>
          </span>
        </div>
        <div class="mt-3">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-status-in-progress/15 text-status-in-progress text-xs font-bold">
            Konfirmasi Mahasiswa
          </span>
        </div>
        <p class="font-label-sm text-label-sm text-on-surface-variant mt-2 leading-snug">
          Belum diverifikasi langsung dengan sistem E-Class.
        </p>
      `;
    }

    // 2. Update Performa Presensi Bars (8 Courses)
    const barsContainer = document.querySelector('div.min-w-\\[540px\\]');
    if (barsContainer) {
      barsContainer.innerHTML = ACADEMIC_DB.courses
        .map((c) => {
          const st = getCourseStats(c);
          return `
          <div>
            <div class="flex justify-between items-center text-xs mb-1">
              <a href="${getScreenUrl('detail_mata_kuliah_manajemen_proyek_ti', `course=${c.id}`)}" class="font-bold text-on-surface hover:text-primary">
                ${c.name} (${c.kelas}) — <span class="font-normal text-on-surface-variant">${c.lecturer}</span>
              </a>
              <span class="${st.hasAttendanceData ? 'text-status-completed font-bold' : 'text-outline italic font-semibold'}">
                ${st.hasAttendanceData ? `${st.attendancePct}% (${st.hadirCount}/${st.recordedCount} Pertemuan Tercatat Hadir)` : 'Belum ada data absensi (0 Pertemuan Tercatat)'}
              </span>
            </div>
            <div class="w-full bg-surface-container-low h-2.5 rounded-full overflow-hidden flex">
              <div class="${st.hasAttendanceData ? 'bg-primary' : 'bg-outline-variant/40'} h-full rounded-full" style="width: ${st.hasAttendanceData ? st.attendancePct : 0}%;"></div>
            </div>
          </div>
        `;
        })
        .join('');
    }

    // 3. Update Main Attendance Table (Rekapitulasi Presensi 8 Mata Kuliah)
    const table = document.querySelector('main table');
    if (table) {
      table.innerHTML = `
        <thead>
          <tr class="bg-surface-container-low text-on-surface-variant text-xs uppercase tracking-wider">
            <th class="py-3 px-4 rounded-l-xl">Mata Kuliah & Kelas</th>
            <th class="py-3 px-2 text-center">SKS</th>
            <th class="py-3 px-3">Dosen Pengampu</th>
            <th class="py-3 px-3">Jadwal & Ruangan</th>
            <th class="py-3 px-2 text-center">Pertemuan Tercatat</th>
            <th class="py-3 px-2 text-center">Hadir</th>
            <th class="py-3 px-2 text-center">Izin</th>
            <th class="py-3 px-2 text-center">Sakit</th>
            <th class="py-3 px-2 text-center">Alpa</th>
            <th class="py-3 px-4 text-right rounded-r-xl">Persentase / Status Absensi</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-outline-rose/30 text-[13px]">
          ${ACADEMIC_DB.courses
            .map((c) => {
              const st = getCourseStats(c);
              return `
              <tr class="hover:bg-soft-rose/40 transition-colors cursor-pointer" onclick="window.location.href='${getScreenUrl('detail_mata_kuliah_manajemen_proyek_ti', `course=${c.id}`)}'">
                <td class="py-3.5 px-4 font-bold text-on-surface">
                  ${c.name}
                  <span class="block text-xs text-primary font-semibold">${c.kelas}</span>
                </td>
                <td class="py-3.5 px-2 text-center font-semibold">${c.sks}</td>
                <td class="py-3.5 px-3 text-on-surface">${c.lecturer}</td>
                <td class="py-3.5 px-3 text-xs text-on-surface-variant">
                  <span class="block font-semibold text-on-surface">${c.scheduleText}</span>
                  <span>${c.room}</span>
                </td>
                <td class="py-3.5 px-2 text-center font-bold">${st.recordedCount} / 16</td>
                <td class="py-3.5 px-2 text-center font-bold ${st.hasAttendanceData ? 'text-status-completed' : 'text-outline'}">${st.hadirCount}</td>
                <td class="py-3.5 px-2 text-center text-on-surface-variant">${st.izinCount}</td>
                <td class="py-3.5 px-2 text-center text-on-surface-variant">${st.sakitCount}</td>
                <td class="py-3.5 px-2 text-center text-on-surface-variant">${st.alpaCount}</td>
                <td class="py-3.5 px-4 text-right">
                  ${
                    st.hasAttendanceData
                      ? `<span class="px-2.5 py-1 rounded-full bg-status-completed/10 text-status-completed text-xs font-bold">
                          100% (${st.hadirCount}/${st.recordedCount} Hadir)
                         </span>`
                      : `<span class="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-semibold">
                          Belum ada data absensi
                         </span>`
                  }
                </td>
              </tr>
            `;
            })
            .join('')}
        </tbody>
      `;
    }

    // 4. Update Log Riwayat Pertemuan yang Sudah Tercatat (All 11 Recorded Meetings)
    const logHeading = Array.from(document.querySelectorAll('h2')).find((h) => h.textContent.includes('Log Riwayat Presensi'));
    if (logHeading) {
      logHeading.textContent = 'Riwayat Pertemuan & Kehadiran yang Sudah Tercatat (11 Pertemuan)';
      const subP = logHeading.nextElementSibling;
      if (subP) subP.textContent = 'Berdasarkan konfirmasi mahasiswa (belum diverifikasi langsung dengan E-Class)';
      const listContainer = logHeading.parentElement?.parentElement?.nextElementSibling;
      if (listContainer) {
        const allRecorded = [];
        ACADEMIC_DB.courses.forEach((c) => {
          c.recordedSessions.forEach((s) => {
            allRecorded.push({ course: c, session: s });
          });
        });

        listContainer.innerHTML = allRecorded
          .map(
            ({ course, session }) => `
          <div class="p-3.5 bg-surface-container-low/70 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-soft-rose/50 transition-colors">
            <div class="flex items-start gap-3">
              <div class="w-9 h-9 rounded-xl bg-status-completed/10 text-status-completed flex items-center justify-center shrink-0 font-bold text-xs">
                P${session.number}
              </div>
              <div>
                <div class="flex flex-wrap items-center gap-2">
                  <a href="${getScreenUrl('detail_mata_kuliah_manajemen_proyek_ti', `course=${course.id}`)}" class="font-bold text-on-surface hover:text-primary text-[13.5px]">
                    ${course.name} (${course.kelas}) — Pertemuan ${session.number}
                  </a>
                  <span class="px-2 py-0.5 rounded-full bg-status-completed/10 text-status-completed text-[11px] font-bold">
                    ${session.attendance}
                  </span>
                </div>
                <p class="text-xs text-on-surface font-medium mt-0.5">${session.topic}</p>
                <p class="text-[11.5px] text-on-surface-variant mt-0.5">
                  Tanggal: <strong>${session.date}</strong> • Dosen: ${course.lecturer} • Ruang: ${course.room}
                </p>
              </div>
            </div>
            <span class="text-[11px] px-2.5 py-1 rounded-lg bg-surface-white text-on-surface-variant font-semibold shrink-0 self-start sm:self-center">
              Konfirmasi Mahasiswa
            </span>
          </div>
        `
          )
          .join('');
      }
    }
  }

  // E. DASHBOARD MAHASISWA (dashboard_mahasiswa)
  function syncDashboardMahasiswa() {
    if (currentScreenId !== 'dashboard_mahasiswa') return;

    const gStats = getGlobalAcademicStats();

    // Update SKS & Attendance summary in 5-column metric grid
    const statCards = document.querySelectorAll('main > div > div.grid:nth-of-type(2) > div');
    if (statCards.length >= 5) {
      // Stat 1: 8 Mata Kuliah, 19 SKS
      const sksStrong = statCards[0].querySelector('strong');
      if (sksStrong) sksStrong.textContent = `${gStats.totalSks} SKS`;

      // Stat 5: Kehadiran (100% dari pertemuan tercatat)
      statCards[4].innerHTML = `
        <div class="flex items-center justify-between">
          <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Kehadiran Tercatat</span>
          <div class="w-8 h-8 rounded-lg bg-status-completed/10 text-status-completed flex items-center justify-center">
            <span class="material-symbols-outlined text-[18px]">how_to_reg</span>
          </div>
        </div>
        <div class="mt-space-md">
          <div class="flex items-baseline gap-1.5">
            <span class="font-page-title text-page-title text-status-completed">${gStats.overallPct}%</span>
            <span class="font-label-sm text-label-sm text-on-surface-variant">(${gStats.totalHadir}/${gStats.totalRecordedSessions} Hadir)</span>
          </div>
          <p class="font-label-sm text-label-sm text-on-surface-variant mt-1">Konfirmasi Mahasiswa</p>
        </div>
      `;
    }

    // Update "Jadwal Kuliah Hari Ini" & "Progres Pertemuan Semester" on Dashboard Mahasiswa
    const leftCol = document.querySelector('main div.lg\\:col-span-8');
    if (leftCol && leftCol.children.length >= 2) {
      const seninList = ACADEMIC_DB.courses.filter((c) => c.day === 'Senin');
      leftCol.children[0].innerHTML = `
        <div class="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div class="flex items-center gap-2">
            <div class="w-2.5 h-6 rounded-full bg-primary"></div>
            <h2 class="font-section-title-lg text-section-title-lg text-on-surface">Jadwal Kuliah Hari Ini — Senin, 2 November 2026</h2>
          </div>
          <span class="px-3 py-1 rounded-full bg-status-overdue/10 text-status-overdue text-xs font-bold">
            3 MK Senin (Terdapat Irisan Jam)
          </span>
        </div>
        <div class="space-y-3">
          ${seninList
            .map((c) => {
              const st = getCourseStats(c);
              return `
              <div class="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-surface-container-low hover:bg-soft-rose/60 transition-colors gap-3 border-l-4 ${
                c.conflictWith ? 'border-status-overdue' : 'border-primary'
              }">
                <div class="space-y-1">
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="px-2 py-0.5 rounded bg-primary text-white text-xs font-bold">${c.time} WIB</span>
                    <h3 class="font-section-title text-section-title text-on-surface">${c.name}</h3>
                    <span class="px-2 py-0.5 rounded-full bg-surface-white text-xs font-semibold">${c.kelas} • ${c.sks} SKS</span>
                  </div>
                  <p class="text-xs text-on-surface-variant">
                    Dosen: <strong>${c.lecturer}</strong> • Ruangan: <strong>${c.room}</strong>
                  </p>
                  ${
                    c.conflictWith
                      ? `<p class="text-[11.5px] text-status-overdue font-semibold flex items-center gap-1">
                          <span class="material-symbols-outlined text-[14px]">warning</span> ${c.conflictWith}
                         </p>`
                      : ''
                  }
                </div>
                <a href="${getScreenUrl('detail_mata_kuliah_manajemen_proyek_ti', `course=${c.id}`)}" class="shrink-0 px-3 py-1.5 rounded-xl bg-surface-white hover:bg-primary text-primary hover:text-white text-xs font-bold transition-colors self-start sm:self-center">
                  ${st.recordedCount > 0 ? `${st.recordedCount} Sesi Tercatat →` : 'Belum Ada Riwayat →'}
                </a>
              </div>
            `;
            })
            .join('')}
          <div class="p-3 rounded-xl bg-soft-rose/80 flex items-center justify-between text-xs text-on-surface-variant">
            <span><strong>Catatan IMK (TI25D — Muhamad Imam):</strong> Jadwal aktual <strong>Selasa, 15.30 WIB</strong> di G. Mahdior D403 (Catatan E-Class: Senin).</span>
            <a href="${getScreenUrl('kalender_akademik_jadwal_kuliah_mahasiswa')}" class="text-primary font-bold hover:underline shrink-0 ml-2">Lihat Semua Jadwal →</a>
          </div>
        </div>
      `;

      leftCol.children[1].innerHTML = `
        <div class="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div class="flex items-center gap-2">
            <div class="w-2.5 h-6 rounded-full bg-secondary"></div>
            <h2 class="font-section-title-lg text-section-title-lg text-on-surface">Riwayat Pertemuan & Kehadiran yang Sudah Tercatat</h2>
          </div>
          <span class="text-xs text-on-surface-variant font-semibold">Total ${gStats.totalRecordedSessions} Pertemuan Dikonfirmasi Hadir</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          ${ACADEMIC_DB.courses
            .map((c) => {
              const st = getCourseStats(c);
              const pct = Math.round((st.recordedCount / 16) * 100);
              return `
              <a href="${getScreenUrl('detail_mata_kuliah_manajemen_proyek_ti', `course=${c.id}`)}" class="p-3.5 rounded-xl bg-surface-container-low hover:bg-soft-rose/60 transition-colors space-y-2 block">
                <div class="flex items-center justify-between gap-2">
                  <span class="font-bold text-on-surface text-sm truncate">${c.name}</span>
                  <span class="text-xs font-bold text-primary shrink-0">${st.recordedCount}/16 Tercatat</span>
                </div>
                <div class="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                  <div class="${st.recordedCount > 0 ? 'bg-primary' : 'bg-outline-variant'} h-full rounded-full" style="width: ${pct}%"></div>
                </div>
                <div class="flex items-center justify-between text-[11.5px] text-on-surface-variant">
                  <span>Dosen: ${c.lecturer}</span>
                  <span class="${st.hasAttendanceData ? 'text-status-completed font-bold' : 'text-outline italic'}">
                    ${st.hasAttendanceData ? `${st.hadirCount}/${st.recordedCount} Hadir (100%)` : 'Belum ada data absensi'}
                  </span>
                </div>
              </a>
            `;
            })
            .join('')}
        </div>
      `;
    }
  }

  // ============================================================================
  // F. HALAMAN TUGAS & PENGUMPULAN MAHASISWA (REVISI UI/UX — 8 MATA KULIAH)
  // ============================================================================
  function syncTugasMahasiswaPage() {
    if (currentScreenId !== 'detail_tugas_pengumpulan_mahasiswa') return;

    const root = document.getElementById('cf-student-tasks-root') || document.querySelector('main > div');
    if (!root) return;

    // Exact 8 Courses from Halaman Mata Kuliah (in authoritative order)
    const EXACT_8_COURSES = [
      { id: 'adpl', name: 'Analisis dan Desain Perangkat Lunak' },
      { id: 'pbp', name: 'Pemrograman Berbasis Platform' },
      { id: 'tti', name: 'Tata Tulis Ilmiah (Metodologi Penelitian)' },
      { id: 'mpti', name: 'Manajemen Proyek Teknologi Informasi' },
      { id: 'aik4', name: 'AIK 4 (Islam dan Ilmu Pengetahuan)' },
      { id: 'aicp', name: 'AI Computing Platform' },
      { id: 'arvr', name: 'Teknologi AR/VR' },
      { id: 'imk', name: 'Interaksi Manusia dan Komputer (IMK)' }
    ];

    const STATUS_FILTERS = [
      { id: 'ALL', label: 'Semua', dot: 'bg-[#B5546B]' },
      { id: 'Belum dikerjakan', label: 'Belum Dikerjakan', dot: 'bg-slate-400' },
      { id: 'Draft', label: 'Draft', dot: 'bg-[#D9A441]' },
      { id: 'Terkumpul', label: 'Terkumpul', dot: 'bg-[#22A06B]' },
      { id: 'Terlambat', label: 'Terlambat', dot: 'bg-[#E5484D]' },
      { id: 'Dinilai', label: 'Dinilai', dot: 'bg-[#B5546B]' },
      { id: 'Perlu Revisi', label: 'Perlu Revisi', dot: 'bg-amber-600' }
    ];

    const params = new URLSearchParams(window.location.search);
    let selectedCourseName = params.get('courseName') || 'ALL'; // 'ALL' or exact course name
    let selectedStatusFilter = 'ALL';
    let assignments = loadAssignments();
    let activeDetailTaskId = params.get('task') || assignments[0]?.id || 'tugas-adpl-bab2';

    // Temporary staged file before saving draft or final submit
    let stagedFile = null; // { name, format, sizeBytes, sizeFormatted }
    let uploadProgress = 0;
    let isUploading = false;
    let countdownInterval = null;

    function formatBytes(bytes) {
      if (bytes < 1024) return bytes + ' B';
      if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
      return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    }

    function getStatusVisualStyle(status) {
      const normalized = (status || 'Belum dikerjakan').toLowerCase();
      if (normalized === 'terkumpul') {
        return {
          label: 'Terkumpul',
          badgeBg: 'bg-[#22A06B]/12 text-[#1b8457] border border-[#22A06B]/30',
          borderLeft: 'border-l-[#22A06B]',
          dot: 'bg-[#22A06B]',
          lucide: 'check-circle-2'
        };
      }
      if (normalized === 'dinilai') {
        return {
          label: 'Dinilai',
          badgeBg: 'bg-[#B5546B]/15 text-[#4A1F2E] dark:text-[#ffb1c0] border border-[#B5546B]/40',
          borderLeft: 'border-l-[#B5546B]',
          dot: 'bg-[#B5546B]',
          lucide: 'award'
        };
      }
      if (normalized === 'perlu revisi') {
        return {
          label: 'Perlu Revisi',
          badgeBg: 'bg-[#D9A441]/22 text-[#805600] dark:text-[#ffdeaa] border border-[#D9A441]/50',
          borderLeft: 'border-l-[#D9A441]',
          dot: 'bg-[#D9A441]',
          lucide: 'refresh-cw'
        };
      }
      if (normalized === 'draft') {
        return {
          label: 'Draft',
          badgeBg: 'bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/40',
          borderLeft: 'border-l-amber-500',
          dot: 'bg-amber-500',
          lucide: 'file-edit'
        };
      }
      if (normalized === 'terlambat') {
        return {
          label: 'Terlambat',
          badgeBg: 'bg-[#E5484D]/15 text-[#c82329] border border-[#E5484D]/35',
          borderLeft: 'border-l-[#E5484D]',
          dot: 'bg-[#E5484D]',
          lucide: 'alert-triangle'
        };
      }
      return {
        label: 'Belum Dikerjakan',
        badgeBg: 'bg-slate-200/80 dark:bg-white/10 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-white/20',
        borderLeft: 'border-l-slate-400',
        dot: 'bg-slate-400',
        lucide: 'clock'
      };
    }

    function renderStatusPill(status, size = 'sm') {
      const st = getStatusVisualStyle(status);
      const pad = size === 'lg' ? 'px-3.5 py-1.5 text-xs' : 'px-2.5 py-1 text-[11.5px]';
      return `<span class="inline-flex items-center gap-1.5 rounded-full font-bold ${pad} ${st.badgeBg}">
        <span class="w-2 h-2 rounded-full ${st.dot}"></span>
        <span>${st.label}</span>
      </span>`;
    }

    function renderStudentTasks() {
      if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
      }

      assignments = loadAssignments();

      // Filter assignments by selectedCourseName & selectedStatusFilter
      const filteredAssignments = assignments.filter((t) => {
        const dl = computeDeadlineInfo(t);
        const matchCourse =
          selectedCourseName === 'ALL' ||
          t.courseName.toLowerCase() === selectedCourseName.toLowerCase();
        const matchStatus =
          selectedStatusFilter === 'ALL' ||
          dl.effectiveStatus.toLowerCase() === selectedStatusFilter.toLowerCase();
        return matchCourse && matchStatus;
      });

      // Ensure activeDetailTaskId points to a valid task (prefer one in filtered list if current is outside course filter)
      let detailTask =
        assignments.find((t) => t.id === activeDetailTaskId) ||
        filteredAssignments[0] ||
        assignments[0];

      if (
        selectedCourseName !== 'ALL' &&
        detailTask &&
        detailTask.courseName.toLowerCase() !== selectedCourseName.toLowerCase() &&
        filteredAssignments.length > 0
      ) {
        detailTask = filteredAssignments[0];
        activeDetailTaskId = detailTask.id;
      }

      const detailDl = detailTask ? computeDeadlineInfo(detailTask) : null;
      const detailSub = detailTask?.studentSubmission || {
        nim: '240511184',
        studentName: 'Rimawati',
        status: 'Belum dikerjakan',
        revisionHistory: []
      };

      // Build current file display in detail upload area
      const currentFileToShow = stagedFile
        ? {
            name: stagedFile.name,
            format: stagedFile.format,
            size: stagedFile.sizeFormatted,
            isStaged: true
          }
        : detailSub.fileName
        ? {
            name: detailSub.fileName,
            format: detailSub.fileFormat || detailSub.fileName.split('.').pop().toUpperCase(),
            size: detailSub.fileSize || '1.8 MB',
            isStaged: false
          }
        : null;

      const isAlreadySubmitted =
        ['Terkumpul', 'Dinilai', 'Perlu Revisi'].includes(detailSub.status) ||
        (detailSub.status === 'Terlambat' && Boolean(detailSub.submissionId));

      // Submitted history items (Section 5: Riwayat Pengumpulan)
      const submittedHistoryTasks = assignments.filter(
        (t) =>
          Boolean(t.studentSubmission?.submissionId) ||
          ['Terkumpul', 'Dinilai', 'Perlu Revisi'].includes(t.studentSubmission?.status)
      );

      const acceptAttr = '.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.jpg,.jpeg,.png';

      root.innerHTML = `
        <!-- 1. JUDUL HALAMAN & DESKRIPSI SINGKAT -->
        <section class="bg-surface-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(74,31,46,0.05)] border border-outline-rose/60 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div class="space-y-1.5">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-3 py-1 rounded-full bg-[#FBF3F4] text-[#B5546B] text-xs font-bold border border-[#B5546B]/20">
                Semester Ganjil 2026/2027 • 8 Mata Kuliah Terdaftar
              </span>
              <span class="px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant text-xs font-semibold">
                Mahasiswa: Rimawati (NIM 240511184)
              </span>
            </div>
            <h1 class="text-2xl sm:text-[26px] font-extrabold text-[#4A1F2E] dark:text-white tracking-tight">
              Tugas &amp; Pengumpulan Mahasiswa
            </h1>
            <p class="text-xs sm:text-sm text-on-surface-variant max-w-3xl leading-relaxed">
              Pilih mata kuliah untuk memeriksa daftar tugas, melihat instruksi serta batas waktu pengumpulan (deadline), mengunggah berkas tugas, menyimpan draft, dan memantau riwayat penilaian dosen.
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-2.5 shrink-0">
            <a href="#cf-section-riwayat" class="px-4 py-2.5 rounded-xl bg-[#FBF3F4] hover:bg-[#B5546B] text-[#B5546B] hover:text-white text-xs font-bold border border-[#B5546B]/30 transition-all flex items-center gap-2">
              <i data-lucide="history" class="w-4 h-4"></i>
              <span>Riwayat Pengumpulan (${submittedHistoryTasks.length})</span>
            </a>
            <a href="${getScreenUrl('kalender_akademik_jadwal_kuliah_mahasiswa')}" class="px-4 py-2.5 rounded-xl bg-[#4A1F2E] hover:bg-[#340d1c] text-white text-xs font-bold shadow-xs transition-all flex items-center gap-2">
              <i data-lucide="calendar-clock" class="w-4 h-4 text-[#D9A441]"></i>
              <span>Lihat Deadline di Kalender</span>
            </a>
          </div>
        </section>

        <!-- 2. BAGIAN PEMILIHAN MATA KULIAH (8 MATA KULIAH PERSIS — TEPAT DI BAWAH JUDUL) -->
        <section class="bg-surface-white rounded-2xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(74,31,46,0.05)] border border-outline-rose/60 space-y-4">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="space-y-1">
              <label for="cf-course-dropdown" class="text-xs font-extrabold uppercase tracking-wider text-[#B5546B] flex items-center gap-1.5">
                <i data-lucide="book-open-check" class="w-4 h-4"></i>
                <span>Pilih Mata Kuliah (Terhubung dengan 8 Mata Kuliah Akademik)</span>
              </label>
              <p class="text-xs text-on-surface-variant">
                Menampilkan tugas untuk: <strong class="text-on-surface">${selectedCourseName === 'ALL' ? 'Semua Mata Kuliah (8 MK)' : selectedCourseName}</strong>
              </p>
            </div>

            <!-- Dropdown Pemilihan 8 Mata Kuliah -->
            <div class="w-full md:w-[430px]">
              <div class="relative">
                <select id="cf-course-dropdown" class="w-full appearance-none rounded-xl bg-[#FBF3F4] dark:bg-[#2A2024] border-2 border-[#B5546B]/40 focus:border-[#B5546B] px-4 py-3 pr-10 text-xs sm:text-sm font-bold text-[#4A1F2E] dark:text-white shadow-xs focus:outline-none cursor-pointer transition-all">
                  <option value="ALL" ${selectedCourseName === 'ALL' ? 'selected' : ''}>Semua Mata Kuliah (8 MK)</option>
                  ${EXACT_8_COURSES.map(
                    (c, idx) => `
                    <option value="${c.name}" ${selectedCourseName === c.name ? 'selected' : ''}>
                      ${idx + 1}. ${c.name}
                    </option>`
                  ).join('')}
                </select>
                <span class="pointer-events-none absolute inset-y-0 right-3.5 flex items-center text-[#B5546B]">
                  <span class="material-symbols-outlined text-[20px]">expand_more</span>
                </span>
              </div>
            </div>
          </div>

          <!-- Pilihan Cepat 8 Mata Kuliah (Pills) -->
          <div class="flex items-center gap-2 overflow-x-auto cf-scroll pb-1 pt-1">
            <button type="button" data-course-quick="ALL" class="px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCourseName === 'ALL'
                ? 'bg-[#4A1F2E] text-white shadow-xs'
                : 'bg-surface-container-low text-on-surface-variant hover:bg-[#FBF3F4] hover:text-[#B5546B]'
            }">
              Semua Mata Kuliah (8 MK)
            </button>
            ${EXACT_8_COURSES.map((c) => {
              const isSelected = selectedCourseName === c.name;
              return `
              <button type="button" data-course-quick="${c.name}" class="px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-[#B5546B] text-white font-bold shadow-xs'
                  : 'bg-surface-container-low text-on-surface-variant hover:bg-[#FBF3F4] hover:text-[#B5546B]'
              }">
                ${c.name}
              </button>`;
            }).join('')}
          </div>
        </section>

        <!-- 3. FILTER STATUS & DAFTAR TUGAS DALAM BENTUK KARTU -->
        <section class="space-y-4">
          <!-- Bar Filter Status Tugas -->
          <div class="bg-surface-white rounded-2xl p-4 sm:px-6 shadow-[0_4px_20px_rgba(74,31,46,0.04)] border border-outline-rose/60 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-xs font-bold uppercase tracking-wider text-outline mr-1">Filter Status:</span>
              ${STATUS_FILTERS.map((sf) => {
                const count = assignments.filter((t) => {
                  const dl = computeDeadlineInfo(t);
                  const courseMatch =
                    selectedCourseName === 'ALL' ||
                    t.courseName.toLowerCase() === selectedCourseName.toLowerCase();
                  const statusMatch =
                    sf.id === 'ALL' || dl.effectiveStatus.toLowerCase() === sf.id.toLowerCase();
                  return courseMatch && statusMatch;
                }).length;
                const isActive = selectedStatusFilter === sf.id;
                return `
                <button type="button" data-status-chip="${sf.id}" class="px-3.5 py-1.5 rounded-full text-xs font-bold transition-all inline-flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#B5546B] text-white shadow-xs'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-[#FBF3F4] hover:text-[#B5546B]'
                }">
                  <span class="w-2 h-2 rounded-full ${isActive ? 'bg-white' : sf.dot}"></span>
                  <span>${sf.label}</span>
                  <span class="px-1.5 py-0.2 rounded-full text-[10.5px] ${
                    isActive ? 'bg-white/20 text-white' : 'bg-surface-white text-on-surface-variant'
                  }">${count}</span>
                </button>`;
              }).join('')}
            </div>

            <span class="text-xs font-semibold text-on-surface-variant shrink-0">
              Menampilkan <strong>${filteredAssignments.length}</strong> tugas
            </span>
          </div>

          <!-- Grid Kartu Tugas -->
          ${
            filteredAssignments.length === 0
              ? `
              <div class="bg-surface-white rounded-2xl p-10 text-center shadow-sm border border-outline-rose/50 space-y-3">
                <div class="w-12 h-12 rounded-2xl bg-[#FBF3F4] text-[#B5546B] flex items-center justify-center mx-auto">
                  <span class="material-symbols-outlined text-[26px]">assignment_late</span>
                </div>
                <h3 class="text-base font-bold text-on-surface">Tidak Ada Tugas dengan Filter Ini</h3>
                <p class="text-xs text-on-surface-variant max-w-md mx-auto">
                  Tidak ditemukan tugas untuk mata kuliah <strong>${selectedCourseName === 'ALL' ? 'Semua Mata Kuliah' : selectedCourseName}</strong> dengan status <strong>${selectedStatusFilter}</strong>.
                </p>
                <button type="button" id="cf-reset-filters-btn" class="px-4 py-2 rounded-xl bg-[#B5546B] text-white text-xs font-bold hover:bg-[#963c53] transition-colors">
                  Tampilkan Semua Tugas
                </button>
              </div>
            `
              : `
              <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                ${filteredAssignments
                  .map((t) => {
                    const tDl = computeDeadlineInfo(t);
                    const stStyle = getStatusVisualStyle(tDl.effectiveStatus);
                    const isFocused = detailTask && detailTask.id === t.id;
                    return `
                    <article class="bg-surface-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(74,31,46,0.05)] hover:shadow-md transition-all border border-outline-rose/60 border-l-4 ${
                      stStyle.borderLeft
                    } flex flex-col justify-between gap-4 ${
                      isFocused ? 'ring-2 ring-[#B5546B]' : ''
                    }">
                      <div class="space-y-3">
                        <!-- Top Row: Nomor Pertemuan & Status Pengerjaan -->
                        <div class="flex items-start justify-between gap-2">
                          <span class="px-2.5 py-1 rounded-lg bg-[#FBF3F4] text-[#B5546B] text-xs font-bold border border-[#B5546B]/20">
                            ${t.meeting} • Kelas ${t.kelas}
                          </span>
                          ${renderStatusPill(tDl.effectiveStatus)}
                        </div>

                        <!-- Nama Mata Kuliah & Judul Tugas -->
                        <div class="space-y-1">
                          <p class="text-xs font-extrabold uppercase tracking-wide text-[#B5546B]">
                            ${t.courseName}
                          </p>
                          <h3 class="text-[15px] font-bold text-on-surface leading-snug">
                            ${t.title}
                          </h3>
                        </div>

                        <!-- Metadata: Nama Dosen, Tanggal Pemberian, Deadline Pengumpulan beserta Jam -->
                        <div class="rounded-xl bg-surface-container-low p-3.5 space-y-2 text-xs">
                          <div class="flex items-center justify-between gap-2">
                            <span class="text-on-surface-variant flex items-center gap-1.5">
                              <span class="material-symbols-outlined text-[15px] text-[#B5546B]">person</span>
                              Dosen:
                            </span>
                            <strong class="text-on-surface text-right">${t.lecturer}</strong>
                          </div>
                          <div class="flex items-center justify-between gap-2">
                            <span class="text-on-surface-variant flex items-center gap-1.5">
                              <span class="material-symbols-outlined text-[15px] text-[#B5546B]">calendar_today</span>
                              Diberikan:
                            </span>
                            <span class="font-semibold text-on-surface">${t.givenDate}</span>
                          </div>
                          <div class="pt-1.5 border-t border-outline-rose/40 flex items-center justify-between gap-2">
                            <span class="text-on-surface-variant flex items-center gap-1.5">
                              <span class="material-symbols-outlined text-[15px] ${
                                tDl.isPast ? 'text-[#E5484D]' : 'text-[#B5546B]'
                              }">alarm</span>
                              Deadline:
                            </span>
                            <strong class="${
                              tDl.isPast ? 'text-[#E5484D]' : 'text-[#4A1F2E] dark:text-[#ffb1c0]'
                            } text-right">${tDl.formattedDeadline.dateOnly}, ${tDl.formattedDeadline.timeOnly}</strong>
                          </div>
                        </div>
                      </div>

                      <!-- Card Footer: Tombol Lihat Detail & Upload -->
                      <div class="pt-2 border-t border-outline-rose/30 flex items-center justify-between gap-2">
                        <span class="text-[11px] font-semibold ${
                          tDl.isPast ? 'text-[#E5484D]' : 'text-on-surface-variant'
                        } truncate">
                          ${tDl.countdownText}
                        </span>
                        <button type="button" data-open-detail="${t.id}" class="shrink-0 px-4 py-2 rounded-xl ${
                      isFocused
                        ? 'bg-[#4A1F2E] text-white'
                        : 'bg-[#B5546B] hover:bg-[#963c53] text-white'
                    } text-xs font-bold transition-all shadow-xs flex items-center gap-1.5">
                          <span>Lihat Detail &amp; Upload</span>
                          <span class="material-symbols-outlined text-[15px]">arrow_downward</span>
                        </button>
                      </div>
                    </article>`;
                  })
                  .join('')}
              </div>
            `
          }
        </section>

        <!-- 4. PANEL DETAIL TUGAS DAN PENGUMPULAN (Dibuka saat klik Lihat Detail & Upload) -->
        ${
          detailTask
            ? `
          <section id="cf-detail-upload-section" class="bg-surface-white rounded-2xl p-6 sm:p-7 shadow-[0_8px_30px_rgba(74,31,46,0.07)] border-2 border-[#B5546B]/35 space-y-6 scroll-mt-20">
            <!-- Header Detail Tugas -->
            <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-outline-rose/60">
              <div class="space-y-1.5">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="px-3 py-1 rounded-lg bg-[#4A1F2E] text-white text-xs font-bold">
                    Detail Tugas &amp; Area Pengumpulan
                  </span>
                  <span class="px-3 py-1 rounded-lg bg-[#FBF3F4] text-[#B5546B] text-xs font-bold border border-[#B5546B]/25">
                    ${detailTask.courseName}
                  </span>
                  <span class="px-3 py-1 rounded-lg bg-surface-container-low text-on-surface text-xs font-semibold">
                    ${detailTask.meeting} • Kelas ${detailTask.kelas}
                  </span>
                </div>
                <h2 class="text-xl sm:text-2xl font-extrabold text-on-surface leading-snug pt-1">
                  ${detailTask.title}
                </h2>
              </div>

              <div class="flex items-center gap-3 self-start lg:self-center">
                ${renderStatusPill(detailDl.effectiveStatus, 'lg')}
              </div>
            </div>

            <!-- Grid Detail: Kiri (Informasi, Instruksi, Template, & Upload) + Kanan (Bukti Pengumpulan & Feedback) -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <!-- Kolom Kiri (7 Cols): Informasi Lengkap, Template, & Area Upload -->
              <div class="lg:col-span-7 space-y-5">
                <!-- Kotak Metadata: Dosen, Tanggal Pemberian, Deadline, & Hitung Mundur -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div class="p-4 rounded-xl bg-surface-container-low border border-outline-rose/40 space-y-1">
                    <span class="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant block">Dosen Pengampu &amp; Tanggal Diberikan</span>
                    <p class="text-sm font-bold text-on-surface">${detailTask.lecturer}</p>
                    <p class="text-xs text-on-surface-variant">Diberikan pada: <strong>${detailTask.givenDate}</strong></p>
                  </div>

                  <div class="p-4 rounded-xl ${
                    detailDl.isPast
                      ? 'bg-[#E5484D]/10 border border-[#E5484D]/30'
                      : 'bg-[#FBF3F4] border border-[#B5546B]/30'
                  } space-y-1">
                    <span class="text-[11px] font-bold uppercase tracking-wider ${
                      detailDl.isPast ? 'text-[#E5484D]' : 'text-[#B5546B]'
                    } block">Deadline Pengumpulan (WIB)</span>
                    <p class="text-sm font-extrabold text-on-surface">${detailDl.formattedDeadline.full}</p>
                    <div class="flex items-center gap-1.5 text-xs font-bold ${
                      detailDl.isPast ? 'text-[#E5484D]' : 'text-[#22A06B]'
                    }">
                      <span class="w-2 h-2 rounded-full ${
                        detailDl.isPast ? 'bg-[#E5484D]' : 'bg-[#22A06B] animate-ping'
                      }"></span>
                      <span id="cf-live-countdown">${detailDl.countdownText}</span>
                    </div>
                  </div>
                </div>

                <!-- Instruksi Pengerjaan -->
                <div class="p-5 rounded-2xl bg-surface-container-low/70 border border-outline-rose/40 space-y-2.5">
                  <h3 class="text-xs font-extrabold uppercase tracking-wider text-[#4A1F2E] dark:text-[#ffb1c0] flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-[17px] text-[#B5546B]">assignment</span>
                    <span>Instruksi Pengerjaan Tugas</span>
                  </h3>
                  <p class="text-sm text-on-surface leading-relaxed">${detailTask.description}</p>
                  ${
                    Array.isArray(detailTask.instructions) && detailTask.instructions.length > 0
                      ? `<ul class="list-disc pl-5 space-y-1 text-xs sm:text-[13px] text-on-surface-variant pt-1">
                          ${detailTask.instructions.map((inst) => `<li>${inst}</li>`).join('')}
                         </ul>`
                      : ''
                  }
                </div>

                <!-- File Materi atau Template dari Dosen -->
                <div class="p-4 rounded-2xl bg-[#FBF3F4]/70 border border-outline-rose flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div class="flex items-center gap-3 min-w-0">
                    <div class="w-10 h-10 rounded-xl bg-surface-white text-[#B5546B] shadow-2xs flex items-center justify-center shrink-0">
                      <span class="material-symbols-outlined text-[22px]">description</span>
                    </div>
                    <div class="min-w-0">
                      <span class="text-[11px] font-bold uppercase tracking-wider text-[#B5546B] block">File Materi / Template dari Dosen</span>
                      <p class="text-sm font-bold text-on-surface truncate" title="${detailTask.template?.fileName || 'Template_Tugas.docx'}">
                        ${detailTask.template?.fileName || 'Template_Tugas.docx'}
                      </p>
                      <p class="text-xs text-on-surface-variant">
                        ${detailTask.template?.docType || 'Dokumen Word (.DOCX)'} • Ukuran: <strong>${detailTask.template?.fileSize || '1.2 MB'}</strong>
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 shrink-0">
                    <button type="button" id="cf-preview-template-btn" class="px-3 py-2 rounded-xl bg-surface-white hover:bg-surface-container text-on-surface text-xs font-bold border border-outline-rose transition-colors flex items-center gap-1">
                      <span class="material-symbols-outlined text-[15px]">visibility</span>
                      <span>Preview</span>
                    </button>
                    <button type="button" id="cf-download-template-btn" class="px-3.5 py-2 rounded-xl bg-[#4A1F2E] hover:bg-[#340d1c] text-white text-xs font-bold transition-colors flex items-center gap-1.5">
                      <span class="material-symbols-outlined text-[15px]">download</span>
                      <span>Unduh Template</span>
                    </button>
                  </div>
                </div>

                <!-- Area Upload Sederhana -->
                <div class="p-5 rounded-2xl bg-surface-white border-2 border-outline-rose/80 space-y-4">
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 class="text-base font-bold text-on-surface">Upload File Tugas</h3>
                      <p class="text-xs text-on-surface-variant">
                        Format diterima: <strong>PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX, JPG, dan PNG</strong> • Maksimal <strong>${detailTask.maxSizeMb || 20} MB</strong>
                      </p>
                    </div>
                  </div>

                  <!-- Hidden File Input -->
                  <input type="file" id="cf-native-file-input" class="hidden" accept="${acceptAttr}" />

                  <!-- Box Pilih File / Dropzone -->
                  <div id="cf-upload-dropzone" class="rounded-2xl border-2 border-dashed border-[#B5546B]/45 hover:border-[#B5546B] bg-[#FBF3F4]/50 p-6 text-center transition-all space-y-3">
                    <div class="w-12 h-12 rounded-2xl bg-surface-white text-[#B5546B] shadow-xs flex items-center justify-center mx-auto">
                      <span class="material-symbols-outlined text-[26px]">cloud_upload</span>
                    </div>
                    <div class="space-y-1">
                      <p class="text-sm font-bold text-on-surface">
                        Pilih berkas tugas dari perangkat Anda atau gunakan simulasi file prototype
                      </p>
                      <p class="text-xs text-on-surface-variant">
                        Format: PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX, JPG, PNG • Batas ukuran: ${detailTask.maxSizeMb || 20} MB
                      </p>
                    </div>
                    <div class="flex flex-wrap items-center justify-center gap-2.5 pt-1">
                      <button type="button" id="cf-btn-pilih-file" class="px-5 py-2.5 rounded-xl bg-[#B5546B] hover:bg-[#963c53] text-white text-xs sm:text-sm font-bold shadow-sm transition-all inline-flex items-center gap-2">
                        <span class="material-symbols-outlined text-[18px]">folder_open</span>
                        <span>Pilih File dari Perangkat</span>
                      </button>
                      <button type="button" id="cf-btn-simulasi-file" class="px-4 py-2.5 rounded-xl bg-surface-white hover:bg-[#FBF3F4] text-[#4A1F2E] text-xs font-bold border border-[#B5546B]/40 transition-all inline-flex items-center gap-1.5">
                        <span class="material-symbols-outlined text-[17px] text-[#B5546B]">bolt</span>
                        <span>Simulasi Pilih File (.PDF)</span>
                      </button>
                    </div>
                  </div>

                  <!-- Kotak Peringatan Validasi Format/Ukuran -->
                  <div id="cf-upload-error" class="hidden p-3.5 rounded-xl bg-[#E5484D]/12 border border-[#E5484D]/40 text-[#c82329] text-xs font-semibold flex items-center gap-2">
                    <span class="material-symbols-outlined text-[18px]">error</span>
                    <span id="cf-upload-error-text"></span>
                  </div>

                  <!-- Informasi File yang Dipilih (Nama, Ukuran, Ganti, Hapus) -->
                  ${
                    currentFileToShow
                      ? `
                      <div class="p-4 rounded-xl bg-surface-container-low border border-outline-rose space-y-3">
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div class="flex items-center gap-3 min-w-0">
                            <div class="w-10 h-10 rounded-xl bg-[#22A06B]/15 text-[#1b8457] flex items-center justify-center shrink-0 font-extrabold text-xs">
                              ${currentFileToShow.format}
                            </div>
                            <div class="min-w-0">
                              <div class="flex items-center gap-2 flex-wrap">
                                <p class="text-sm font-bold text-on-surface truncate" title="${currentFileToShow.name}">
                                  ${currentFileToShow.name}
                                </p>
                                <span class="px-2 py-0.5 rounded bg-surface-white text-[10.5px] font-bold text-[#B5546B] border border-outline-rose">
                                  ${currentFileToShow.isStaged ? 'Belum Dikumpulkan (Siap)' : detailSub.status}
                                </span>
                              </div>
                              <p class="text-xs text-on-surface-variant mt-0.5">
                                Format: <strong>${currentFileToShow.format}</strong> • Ukuran File: <strong>${currentFileToShow.size}</strong>
                              </p>
                            </div>
                          </div>

                          <div class="flex items-center gap-2 shrink-0">
                            <button type="button" id="cf-btn-ganti-file" class="px-3 py-1.5 rounded-xl bg-surface-white hover:bg-[#FBF3F4] text-on-surface hover:text-[#B5546B] text-xs font-bold border border-outline-rose transition-colors flex items-center gap-1">
                              <span class="material-symbols-outlined text-[15px]">swap_horiz</span>
                              <span>Ganti File</span>
                            </button>
                            <button type="button" id="cf-btn-hapus-file" class="px-3 py-1.5 rounded-xl bg-surface-white hover:bg-[#E5484D]/15 text-[#c82329] text-xs font-bold border border-outline-rose transition-colors flex items-center gap-1">
                              <span class="material-symbols-outlined text-[15px]">delete</span>
                              <span>Hapus File</span>
                            </button>
                          </div>
                        </div>

                        <div class="space-y-1">
                          <div class="flex justify-between text-[11px] font-semibold">
                            <span class="text-on-surface-variant">
                              ${isUploading ? 'Memeriksa format & ukuran file...' : 'Validasi format & ukuran selesai (Siap dikumpulkan)'}
                            </span>
                            <span class="text-[#22A06B] font-bold" id="cf-progress-pct">${isUploading ? uploadProgress + '%' : '100%'}</span>
                          </div>
                          <div class="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
                            <div id="cf-progress-bar" class="h-full bg-[#22A06B] rounded-full transition-all duration-200" style="width: ${isUploading ? uploadProgress : 100}%"></div>
                          </div>
                        </div>
                      </div>
                    `
                      : ''
                  }

                  <!-- Catatan untuk Dosen -->
                  <div>
                    <label for="cf-optional-notes" class="block text-xs font-bold text-on-surface mb-1.5">
                      Catatan untuk Dosen <span class="font-normal text-on-surface-variant">(Opsional)</span>
                    </label>
                    <textarea id="cf-optional-notes" rows="2" class="w-full rounded-xl border border-outline-rose bg-surface-container-low/50 p-3 text-xs text-on-surface focus:outline-none focus:ring-2 focus:ring-[#B5546B]" placeholder="Tambahkan keterangan singkat untuk dosen pengampu bila diperlukan...">${detailSub.notes || ''}</textarea>
                  </div>

                  <!-- Tombol Aksi: Simpan sebagai Draft & Kumpulkan Tugas -->
                  <div class="pt-3 border-t border-outline-rose/50 flex flex-wrap items-center justify-between gap-3">
                    <button type="button" id="cf-action-simpan-draft" class="px-4 py-2.5 rounded-xl bg-surface-container-low hover:bg-[#FBF3F4] text-on-surface hover:text-[#B5546B] text-xs sm:text-sm font-bold border border-outline-rose transition-all flex items-center gap-1.5">
                      <span class="material-symbols-outlined text-[18px]">save</span>
                      <span>Simpan sebagai Draft</span>
                    </button>

                    <button type="button" id="cf-action-kumpulkan" class="px-6 py-2.5 rounded-xl bg-[#B5546B] hover:bg-[#963c53] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2">
                      <span class="material-symbols-outlined text-[18px]">send</span>
                      <span>${
                        detailSub.status === 'Perlu Revisi'
                          ? 'Kumpulkan Revisi Tugas'
                          : isAlreadySubmitted
                          ? 'Kumpulkan Ulang Tugas'
                          : 'Kumpulkan Tugas'
                      }</span>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Kolom Kanan (5 Cols): Bukti Pengumpulan & Status Evaluasi Dosen -->
              <div class="lg:col-span-5 space-y-4">
                <!-- Kartu Bukti Pengumpulan -->
                <div class="p-5 rounded-2xl bg-[#FBF3F4]/70 dark:bg-[#2A2024] border border-outline-rose space-y-4">
                  <div class="flex items-center justify-between pb-3 border-b border-outline-rose/60">
                    <div class="flex items-center gap-2">
                      <span class="material-symbols-outlined text-[#B5546B] text-[21px]">verified</span>
                      <h3 class="text-base font-bold text-on-surface">Bukti Pengumpulan Tugas</h3>
                    </div>
                    ${renderStatusPill(detailDl.effectiveStatus)}
                  </div>

                  ${
                    detailSub.submissionId || ['Terkumpul', 'Dinilai', 'Perlu Revisi'].includes(detailSub.status)
                      ? `
                      <div class="p-4 rounded-xl bg-surface-white border border-outline-rose space-y-2.5 text-xs shadow-2xs">
                        <div class="flex items-center justify-between gap-2">
                          <span class="text-on-surface-variant">ID Bukti:</span>
                          <span class="font-mono font-bold text-[#B5546B] bg-[#FBF3F4] px-2 py-0.5 rounded">${detailSub.submissionId || 'CF-SUB-20261102'}</span>
                        </div>
                        <div class="flex items-start justify-between gap-2">
                          <span class="text-on-surface-variant shrink-0">Mata Kuliah:</span>
                          <span class="font-bold text-on-surface text-right">${detailTask.courseName}</span>
                        </div>
                        <div class="flex items-start justify-between gap-2">
                          <span class="text-on-surface-variant shrink-0">Nama File:</span>
                          <span class="font-bold text-[#B5546B] text-right break-all">${detailSub.fileName}</span>
                        </div>
                        <div class="flex items-center justify-between gap-2">
                          <span class="text-on-surface-variant">Waktu Pengumpulan:</span>
                          <span class="font-semibold text-on-surface">${detailSub.submittedDate} • ${detailSub.submittedTime}</span>
                        </div>
                        <div class="flex items-center justify-between gap-2">
                          <span class="text-on-surface-variant">Status Pengumpulan:</span>
                          <span class="font-bold text-on-surface">${detailDl.effectiveStatus}</span>
                        </div>

                        <div class="pt-2 border-t border-outline-rose/40">
                          <button type="button" id="cf-download-submitted-btn" class="w-full py-2 px-3 rounded-xl bg-[#FBF3F4] hover:bg-[#B5546B] text-[#B5546B] hover:text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5">
                            <span class="material-symbols-outlined text-[16px]">download_done</span>
                            <span>Unduh Berkas yang Dikumpulkan</span>
                          </button>
                        </div>
                      </div>
                    `
                      : `
                      <div class="p-6 rounded-xl bg-surface-white border border-dashed border-outline-rose text-center space-y-2">
                        <span class="material-symbols-outlined text-outline text-[30px]">receipt_long</span>
                        <p class="text-xs font-bold text-on-surface">Belum Ada Bukti Pengumpulan Final</p>
                        <p class="text-[11.5px] text-on-surface-variant leading-relaxed">
                          ${
                            detailSub.status === 'Draft'
                              ? `File <strong>${detailSub.fileName}</strong> saat ini tersimpan sebagai <strong>Draft</strong> (${detailSub.submittedDate} • ${detailSub.submittedTime}). Tekan <strong>Kumpulkan Tugas</strong> untuk mengirimkannya.`
                              : 'Pilih file tugas Anda lalu tekan tombol "Kumpulkan Tugas" untuk menampilkan bukti pengumpulan.'
                          }
                        </p>
                      </div>
                    `
                  }

                  <!-- Catatan Simulasi Prototype (Sesuai Bagian 8) -->
                  <div class="p-3 rounded-xl bg-surface-white/80 border border-outline-rose/50 text-[11px] text-on-surface-variant leading-relaxed flex items-start gap-2">
                    <span class="material-symbols-outlined text-[15px] text-[#D9A441] shrink-0 mt-0.5">info</span>
                    <span>
                      <strong>Mode Simulasi Prototype UI/UX:</strong> Berkas yang dipilih dan dikumpulkan disimulasikan secara interaktif pada sesi browser ini untuk keperluan pengujian alur pengguna.
                    </span>
                  </div>
                </div>

                <!-- Kartu Status Penilaian, Feedback Dosen, & Permintaan Revisi -->
                <div class="p-5 rounded-2xl bg-surface-white border border-outline-rose/60 space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-extrabold uppercase tracking-wider text-on-surface-variant">Penilaian &amp; Feedback Dosen</span>
                    ${
                      detailSub.grade !== null && detailSub.grade !== undefined
                        ? `<span class="px-3 py-1 rounded-lg bg-[#22A06B]/15 text-[#1b8457] text-xs font-extrabold">Nilai: ${detailSub.grade} / 100</span>`
                        : `<span class="text-xs text-outline font-semibold">Menunggu Penilaian</span>`
                    }
                  </div>

                  ${
                    detailSub.feedback
                      ? `<div class="p-3.5 rounded-xl bg-surface-container-low border-l-4 ${
                          detailSub.status === 'Perlu Revisi' ? 'border-[#D9A441]' : 'border-[#22A06B]'
                        } text-xs space-y-1">
                          <p class="font-bold text-on-surface">${detailTask.lecturer}:</p>
                          <p class="text-on-surface-variant leading-relaxed">"${detailSub.feedback}"</p>
                         </div>`
                      : `<p class="text-xs text-on-surface-variant italic">Belum ada catatan feedback atau permintaan revisi dari dosen pengampu.</p>`
                  }
                </div>
              </div>
            </div>
          </section>
        `
            : ''
        }

        <!-- 5. BAGIAN RIWAYAT PENGUMPULAN MAHASISWA -->
        <section id="cf-section-riwayat" class="bg-surface-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(74,31,46,0.05)] border border-outline-rose/60 space-y-4 scroll-mt-20">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-outline-rose/50">
            <div>
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-[#B5546B] text-[22px]">history_edu</span>
                <h2 class="text-lg font-extrabold text-on-surface">Riwayat Pengumpulan Tugas Mahasiswa</h2>
              </div>
              <p class="text-xs text-on-surface-variant mt-0.5">
                Daftar tugas yang sudah dikumpulkan atau disimpan oleh Rimawati (240511184) beserta waktu pengumpulan, file, status penilaian, feedback dosen, dan permintaan revisi.
              </p>
            </div>
            <span class="px-3 py-1 rounded-full bg-[#FBF3F4] text-[#B5546B] text-xs font-bold self-start sm:self-center">
              ${submittedHistoryTasks.length} Tugas Tercatat di Riwayat
            </span>
          </div>

          <div class="overflow-x-auto cf-scroll">
            <table class="w-full text-left text-xs min-w-[820px]">
              <thead>
                <tr class="bg-surface-container-low text-on-surface-variant uppercase tracking-wider">
                  <th class="py-3 px-3.5 rounded-l-xl">Mata Kuliah &amp; Tugas</th>
                  <th class="py-3 px-3">Tanggal &amp; Jam Pengumpulan</th>
                  <th class="py-3 px-3">File yang Dikumpulkan</th>
                  <th class="py-3 px-3">Status Penilaian</th>
                  <th class="py-3 px-3.5">Feedback Dosen &amp; Permintaan Revisi</th>
                  <th class="py-3 px-3.5 text-right rounded-r-xl">Aksi</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-outline-rose/30 text-[13px]">
                ${assignments
                  .filter(
                    (t) =>
                      Boolean(t.studentSubmission?.fileName) ||
                      ['Terkumpul', 'Dinilai', 'Perlu Revisi', 'Draft'].includes(t.studentSubmission?.status)
                  )
                  .map((t) => {
                    const tDl = computeDeadlineInfo(t);
                    const s = t.studentSubmission || {};
                    return `
                    <tr class="hover:bg-[#FBF3F4]/60 transition-colors">
                      <td class="py-3.5 px-3.5">
                        <span class="text-[11px] font-extrabold uppercase text-[#B5546B] block">${t.courseName}</span>
                        <span class="font-bold text-on-surface block">${t.title}</span>
                        <span class="text-[11px] text-on-surface-variant">${t.meeting} • Dosen: ${t.lecturer}</span>
                      </td>
                      <td class="py-3.5 px-3">
                        <span class="font-semibold text-on-surface block">${s.submittedDate || '-'}</span>
                        <span class="text-[11px] text-on-surface-variant">${s.submittedTime || ''}</span>
                      </td>
                      <td class="py-3.5 px-3">
                        ${
                          s.fileName
                            ? `<button type="button" data-download-history="${t.id}" class="text-[#B5546B] hover:underline font-bold flex items-center gap-1 max-w-[200px] truncate" title="Unduh ${s.fileName}">
                                <span class="material-symbols-outlined text-[15px] shrink-0">attach_file</span>
                                <span class="truncate">${s.fileName}</span>
                               </button>
                               <span class="text-[11px] text-on-surface-variant block">${s.fileFormat || ''} • ${s.fileSize || ''}</span>`
                            : `<span class="text-outline italic">-</span>`
                        }
                      </td>
                      <td class="py-3.5 px-3">
                        <div class="space-y-1">
                          ${renderStatusPill(tDl.effectiveStatus)}
                          ${
                            s.grade !== null && s.grade !== undefined
                              ? `<span class="block text-xs font-extrabold text-[#1b8457]">Nilai: ${s.grade}/100</span>`
                              : ''
                          }
                        </div>
                      </td>
                      <td class="py-3.5 px-3.5 max-w-[260px]">
                        ${
                          s.feedback
                            ? `<p class="text-xs text-on-surface leading-snug">"${s.feedback}"</p>`
                            : `<span class="text-xs text-outline italic">Belum ada catatan feedback dosen</span>`
                        }
                        ${
                          s.status === 'Perlu Revisi'
                            ? `<span class="inline-block mt-1 px-2 py-0.5 rounded bg-[#D9A441]/20 text-[#805600] text-[10.5px] font-bold">
                                ⚠️ Dosen meminta revisi file
                               </span>`
                            : ''
                        }
                      </td>
                      <td class="py-3.5 px-3.5 text-right">
                        <button type="button" data-open-detail="${t.id}" class="px-3 py-1.5 rounded-xl bg-[#B5546B] hover:bg-[#963c53] text-white text-xs font-bold transition-colors">
                          ${s.status === 'Perlu Revisi' ? 'Upload Revisi' : 'Buka Detail'}
                        </button>
                      </td>
                    </tr>`;
                  })
                  .join('')}
              </tbody>
            </table>
          </div>
        </section>
      `;

      // Initialize Lucide icons if loaded
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }

      // Start live countdown timer for active detail task
      if (detailTask) {
        countdownInterval = setInterval(() => {
          const countdownEl = document.getElementById('cf-live-countdown');
          if (!countdownEl) {
            clearInterval(countdownInterval);
            return;
          }
          const liveDl = computeDeadlineInfo(detailTask);
          countdownEl.textContent = liveDl.countdownText;
        }, 1000);
      }

      // 1. Bind Course Dropdown (8 Mata Kuliah)
      const courseSelect = root.querySelector('#cf-course-dropdown');
      courseSelect?.addEventListener('change', () => {
        selectedCourseName = courseSelect.value;
        stagedFile = null;
        renderStudentTasks();
      });

      // Bind Course Quick Pills
      root.querySelectorAll('[data-course-quick]').forEach((btn) => {
        btn.addEventListener('click', () => {
          selectedCourseName = btn.getAttribute('data-course-quick');
          stagedFile = null;
          renderStudentTasks();
        });
      });

      // 2. Bind Status Filter Chips
      root.querySelectorAll('[data-status-chip]').forEach((btn) => {
        btn.addEventListener('click', () => {
          selectedStatusFilter = btn.getAttribute('data-status-chip');
          renderStudentTasks();
        });
      });

      root.querySelector('#cf-reset-filters-btn')?.addEventListener('click', () => {
        selectedCourseName = 'ALL';
        selectedStatusFilter = 'ALL';
        renderStudentTasks();
      });

      // 3. Bind "Lihat Detail & Upload" on Task Cards & History Rows
      root.querySelectorAll('[data-open-detail]').forEach((btn) => {
        btn.addEventListener('click', () => {
          activeDetailTaskId = btn.getAttribute('data-open-detail');
          stagedFile = null;
          renderStudentTasks();
          const detailSec = document.getElementById('cf-detail-upload-section');
          detailSec?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });

      // 4. Bind Template Preview & Download
      if (detailTask) {
        root.querySelector('#cf-preview-template-btn')?.addEventListener('click', () => {
          openModal({
            title: `Preview Materi / Template — ${detailTask.template?.fileName || 'Dokumen Tugas'}`,
            subtitle: `${detailTask.courseName} (${detailTask.kelas}) • Dosen: ${detailTask.lecturer}`,
            icon: 'visibility',
            confirmText: 'Unduh Template',
            cancelText: 'Tutup',
            bodyHtml: `
              <div class="space-y-3">
                <div class="flex items-center justify-between p-3 rounded-xl bg-[#FBF3F4] text-xs">
                  <span>Jenis Dokumen: <strong>${detailTask.template?.docType}</strong></span>
                  <span>Ukuran: <strong>${detailTask.template?.fileSize}</strong></span>
                </div>
                <pre class="p-4 rounded-xl bg-surface-container-low border border-outline-rose text-xs font-mono whitespace-pre-wrap text-on-surface leading-relaxed">${
                  detailTask.template?.previewText || 'Pratinjau dokumen siap diunduh.'
                }</pre>
              </div>
            `,
            onConfirm: () => {
              triggerSimulatedFileDownload(detailTask.template?.fileName || 'Template_Tugas.docx', detailTask.title, {
                'Mata Kuliah': detailTask.courseName,
                'Dosen Pengampu': detailTask.lecturer,
                Kelas: detailTask.kelas,
                Isi: detailTask.template?.previewText || ''
              });
            }
          });
        });

        root.querySelector('#cf-download-template-btn')?.addEventListener('click', () => {
          triggerSimulatedFileDownload(detailTask.template?.fileName || 'Template_Tugas.docx', detailTask.title, {
            'Mata Kuliah': detailTask.courseName,
            'Dosen Pengampu': detailTask.lecturer,
            Kelas: detailTask.kelas,
            Pertemuan: detailTask.meeting
          });
        });

        // 5. Bind File Selection (Real File Explorer + Quick Prototype Simulation)
        const fileInput = root.querySelector('#cf-native-file-input');
        const openFileExplorer = () => {
          if (fileInput) {
            fileInput.value = '';
            fileInput.click();
          }
        };

        root.querySelector('#cf-btn-pilih-file')?.addEventListener('click', openFileExplorer);
        root.querySelector('#cf-btn-ganti-file')?.addEventListener('click', openFileExplorer);

        const stageAndAnimateFile = (fileName, ext, sizeBytes) => {
          stagedFile = {
            name: fileName,
            format: ext,
            sizeBytes,
            sizeFormatted: formatBytes(sizeBytes)
          };
          isUploading = true;
          uploadProgress = 35;
          renderStudentTasks();

          setTimeout(() => {
            isUploading = false;
            uploadProgress = 100;
            renderStudentTasks();
            showToast('File Berhasil Dipilih', `${stagedFile.name} (${stagedFile.sizeFormatted}) siap disimpan sebagai draft atau dikumpulkan.`, 'success');
          }, 320);
        };

        // Quick Prototype Simulation File Picker
        root.querySelector('#cf-btn-simulasi-file')?.addEventListener('click', () => {
          const cleanCourseSlug = detailTask.courseName.replace(/[^a-zA-Z0-9]/g, '_').replace(/_+/g, '_');
          const simFileName = `Tugas_${detailTask.meeting.replace(/\s+/g, '')}_${cleanCourseSlug}_Rimawati_240511184.pdf`;
          stageAndAnimateFile(simFileName, 'PDF', 2450000);
        });

        const handleChosenFile = (file) => {
          if (!file) return;
          const errBox = root.querySelector('#cf-upload-error');
          const errText = root.querySelector('#cf-upload-error-text');

          const ext = (file.name.split('.').pop() || '').toUpperCase();
          const allowed = ['PDF', 'DOC', 'DOCX', 'PPT', 'PPTX', 'XLS', 'XLSX', 'JPG', 'JPEG', 'PNG'];
          const maxBytes = (detailTask.maxSizeMb || 20) * 1024 * 1024;

          if (!allowed.includes(ext)) {
            if (errBox && errText) {
              errBox.classList.remove('hidden');
              errText.textContent = `Format file .${ext} tidak didukung. Gunakan format: PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX, JPG, atau PNG.`;
            }
            showToast('Format File Tidak Didukung', 'Gunakan PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX, JPG, atau PNG.', 'error');
            return;
          }

          if (file.size > maxBytes) {
            if (errBox && errText) {
              errBox.classList.remove('hidden');
              errText.textContent = `Ukuran file (${formatBytes(file.size)}) melebihi batas maksimal ${detailTask.maxSizeMb || 20} MB.`;
            }
            showToast('Ukuran File Melebihi Batas', `Maksimal ukuran file adalah ${detailTask.maxSizeMb || 20} MB.`, 'error');
            return;
          }

          stageAndAnimateFile(file.name, ext, file.size);
        };

        fileInput?.addEventListener('change', (e) => {
          const f = e.target.files?.[0];
          if (f) handleChosenFile(f);
        });

        // Drag & drop support
        const dropzone = root.querySelector('#cf-upload-dropzone');
        if (dropzone) {
          dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropzone.classList.add('border-[#B5546B]', 'bg-[#FBF3F4]');
          });
          dropzone.addEventListener('dragleave', () => {
            dropzone.classList.remove('border-[#B5546B]', 'bg-[#FBF3F4]');
          });
          dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.classList.remove('border-[#B5546B]', 'bg-[#FBF3F4]');
            const f = e.dataTransfer?.files?.[0];
            if (f) handleChosenFile(f);
          });
        }

        // 6. Bind Hapus File Sebelum Dikumpulkan
        root.querySelector('#cf-btn-hapus-file')?.addEventListener('click', () => {
          stagedFile = null;
          const all = loadAssignments();
          const idx = all.findIndex((t) => t.id === detailTask.id);
          if (idx !== -1 && all[idx].studentSubmission) {
            all[idx].studentSubmission.fileName = null;
            all[idx].studentSubmission.fileFormat = null;
            all[idx].studentSubmission.fileSize = null;
            all[idx].studentSubmission.submissionId = null;
            all[idx].studentSubmission.status = 'Belum dikerjakan';
            saveAssignments(all);
          }
          renderStudentTasks();
          showToast('File Dihapus', 'Berkas telah dihapus dari area upload.', 'info');
        });

        // 7. Bind Simpan sebagai Draft
        root.querySelector('#cf-action-simpan-draft')?.addEventListener('click', () => {
          const fileToDraft =
            stagedFile ||
            (detailSub.fileName
              ? { name: detailSub.fileName, format: detailSub.fileFormat, sizeFormatted: detailSub.fileSize }
              : null);
          if (!fileToDraft) {
            showToast('Pilih File Terlebih Dahulu', 'Silakan pilih file dari perangkat atau klik "Simulasi Pilih File" sebelum menyimpan draft.', 'warning');
            return;
          }
          const notesVal = root.querySelector('#cf-optional-notes')?.value || '';
          const nowTimeStr = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }).replace('.', ':') + ' WIB (Draft)';

          const all = loadAssignments();
          const idx = all.findIndex((t) => t.id === detailTask.id);
          if (idx !== -1) {
            all[idx].studentSubmission = {
              ...all[idx].studentSubmission,
              nim: '240511184',
              studentName: 'Rimawati',
              status: 'Draft',
              fileName: fileToDraft.name,
              fileFormat: fileToDraft.format,
              fileSize: fileToDraft.sizeFormatted,
              submittedDate: '2 November 2026',
              submittedTime: nowTimeStr,
              notes: notesVal
            };
            saveAssignments(all);
            stagedFile = null;
            renderStudentTasks();
            showToast('Disimpan sebagai Draft', `File "${fileToDraft.name}" tersimpan sebagai Draft.`, 'success');
          }
        });

        // 8. Bind Kumpulkan Tugas (Menampilkan Dialog Konfirmasi terlebih dahulu)
        root.querySelector('#cf-action-kumpulkan')?.addEventListener('click', () => {
          const fileToSubmit =
            stagedFile ||
            (detailSub.fileName
              ? {
                  name: detailSub.fileName,
                  format: detailSub.fileFormat || detailSub.fileName.split('.').pop().toUpperCase(),
                  sizeFormatted: detailSub.fileSize || '2.0 MB'
                }
              : null);

          if (!fileToSubmit) {
            showToast('Pilih File Terlebih Dahulu', 'Silakan pilih file tugas atau klik "Simulasi Pilih File" sebelum mengumpulkan tugas.', 'warning');
            return;
          }

          const liveDl = computeDeadlineInfo(detailTask);
          const notesVal = root.querySelector('#cf-optional-notes')?.value || '';

          openModal({
            title: 'Konfirmasi Pengumpulan Tugas',
            subtitle: `${detailTask.courseName} • ${detailTask.meeting}`,
            icon: 'task_alt',
            confirmText: 'Ya, Kumpulkan Tugas',
            cancelText: 'Batal / Periksa Lagi',
            bodyHtml: `
              <div class="space-y-3 text-xs sm:text-sm">
                <p class="text-on-surface-variant">
                  Pastikan file yang akan Anda kirimkan sudah benar:
                </p>
                <div class="p-4 rounded-xl bg-[#FBF3F4] border border-outline-rose space-y-2 text-xs">
                  <div class="flex justify-between gap-2">
                    <span class="text-on-surface-variant">Mata Kuliah:</span>
                    <strong class="text-on-surface text-right">${detailTask.courseName}</strong>
                  </div>
                  <div class="flex justify-between gap-2">
                    <span class="text-on-surface-variant">Judul Tugas:</span>
                    <strong class="text-on-surface text-right">${detailTask.title}</strong>
                  </div>
                  <div class="flex justify-between gap-2">
                    <span class="text-on-surface-variant">Nama File:</span>
                    <strong class="text-[#B5546B] text-right break-all">${fileToSubmit.name}</strong>
                  </div>
                  <div class="flex justify-between gap-2">
                    <span class="text-on-surface-variant">Ukuran &amp; Format:</span>
                    <strong class="text-on-surface">${fileToSubmit.format} • ${fileToSubmit.sizeFormatted}</strong>
                  </div>
                  ${
                    notesVal
                      ? `<div class="flex justify-between gap-2">
                          <span class="text-on-surface-variant">Catatan Dosen:</span>
                          <span class="text-on-surface text-right italic">"${notesVal}"</span>
                         </div>`
                      : ''
                  }
                </div>
              </div>
            `,
            onConfirm: () => {
              const all = loadAssignments();
              const idx = all.findIndex((t) => t.id === detailTask.id);
              if (idx !== -1) {
                const nowTimeStr = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }).replace('.', ':') + ' WIB';
                const newSubId = 'CF-SUB-20261102-' + Math.floor(1000 + Math.random() * 9000);
                const finalStatus = liveDl.isPast ? 'Terlambat' : 'Terkumpul';
                const prevHistory = Array.isArray(all[idx].studentSubmission?.revisionHistory)
                  ? all[idx].studentSubmission.revisionHistory
                  : [];

                all[idx].studentSubmission = {
                  ...all[idx].studentSubmission,
                  nim: '240511184',
                  studentName: 'Rimawati',
                  status: finalStatus,
                  submissionId: newSubId,
                  fileName: fileToSubmit.name,
                  fileFormat: fileToSubmit.format,
                  fileSize: fileToSubmit.sizeFormatted,
                  submittedDate: '2 November 2026',
                  submittedTime: nowTimeStr,
                  submittedIso: new Date().toISOString(),
                  notes: notesVal,
                  revisionHistory: [
                    ...prevHistory,
                    {
                      version: prevHistory.length + 1,
                      submissionId: newSubId,
                      fileName: fileToSubmit.name,
                      fileSize: fileToSubmit.sizeFormatted,
                      date: `2 November 2026 • ${nowTimeStr}`,
                      status: finalStatus,
                      feedback: 'Berhasil dikumpulkan oleh mahasiswa.'
                    }
                  ]
                };

                saveAssignments(all);
                stagedFile = null;
                renderStudentTasks();
                showToast('Tugas Berhasil Dikumpulkan!', `Bukti Pengumpulan: ${fileToSubmit.name} (${detailTask.courseName})`, 'success');
              }
            }
          });
        });

        // 9. Bind Download Submitted File
        root.querySelector('#cf-download-submitted-btn')?.addEventListener('click', () => {
          if (!detailSub.fileName) return;
          triggerSimulatedFileDownload(detailSub.fileName, `Bukti Pengumpulan Tugas — ${detailTask.title}`, {
            'Nomor Bukti': detailSub.submissionId || '-',
            Mahasiswa: 'Rimawati (240511184)',
            'Mata Kuliah': `${detailTask.courseName} (${detailTask.kelas})`,
            'Dosen Pengampu': detailTask.lecturer,
            'Waktu Pengumpulan': `${detailSub.submittedDate} • ${detailSub.submittedTime}`,
            Status: detailDl.effectiveStatus
          });
        });
      }

      // Bind download buttons in Riwayat table
      root.querySelectorAll('[data-download-history]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const tId = btn.getAttribute('data-download-history');
          const tObj = assignments.find((x) => x.id === tId);
          const sObj = tObj?.studentSubmission;
          if (tObj && sObj?.fileName) {
            triggerSimulatedFileDownload(sObj.fileName, `Berkas Riwayat Pengumpulan — ${tObj.title}`, {
              Mahasiswa: 'Rimawati (240511184)',
              'Mata Kuliah': tObj.courseName,
              'Waktu Pengumpulan': `${sObj.submittedDate} • ${sObj.submittedTime}`,
              Status: sObj.status
            });
          }
        });
      });
    }

    renderStudentTasks();
  }

  // ============================================================================
  // G. HALAMAN TUGAS & PENILAIAN DOSEN TERHUBUNG DENGAN MAHASISWA (Sections 5, 6, 9, 10)
  // ============================================================================
  function syncTugasDosenPage() {
    if (currentScreenId !== 'penilaian_feedback_submission_dosen') return;

    const root = document.getElementById('cf-lecturer-tasks-root') || document.querySelector('main > div');
    if (!root) return;

    const params = new URLSearchParams(window.location.search);
    let assignments = loadAssignments();
    let selectedTaskId = params.get('task') || assignments[0]?.id || 'tugas-adpl-bab2';
    let statusFilter = 'ALL';
    let selectedStudentNim = '240511184'; // Default focus on Rimawati (240511184)

    const CLASS_ROSTER = [
      { nim: '240511184', name: 'Rimawati' },
      { nim: '240511102', name: 'Budi Santoso' },
      { nim: '240511118', name: 'Siti Aminah' },
      { nim: '240511145', name: 'Dimas Anggara' },
      { nim: '240511160', name: 'Nadia Putri' }
    ];

    function buildCombinedRosterSubmissions(task) {
      const dl = computeDeadlineInfo(task);
      const list = [];

      // 1. Rimawati (240511184) — synced directly from task.studentSubmission
      const rimaSub = task.studentSubmission || {
        nim: '240511184',
        studentName: 'Rimawati',
        status: 'Belum dikerjakan',
        revisionHistory: []
      };
      let rimaEffective = rimaSub.status || 'Belum dikerjakan';
      if (dl.isPast && (rimaEffective === 'Belum dikerjakan' || rimaEffective === 'Draft')) {
        rimaEffective = 'Terlambat';
      }
      list.push({
        ...rimaSub,
        nim: '240511184',
        studentName: 'Rimawati',
        effectiveStatus: rimaEffective,
        isPrimaryStudent: true
      });

      // 2. Other students in roster
      CLASS_ROSTER.slice(1).forEach((stu) => {
        const existing = (task.otherSubmissions || []).find((o) => o.nim === stu.nim);
        if (existing) {
          let eff = existing.status || 'Belum dikerjakan';
          if (dl.isPast && (eff === 'Belum dikerjakan' || eff === 'Draft')) eff = 'Terlambat';
          list.push({
            ...existing,
            nim: stu.nim,
            studentName: stu.name,
            effectiveStatus: eff,
            isPrimaryStudent: false
          });
        } else {
          list.push({
            nim: stu.nim,
            studentName: stu.name,
            status: 'Belum dikerjakan',
            effectiveStatus: dl.isPast ? 'Terlambat' : 'Belum dikerjakan',
            submissionId: null,
            fileName: null,
            fileFormat: null,
            fileSize: null,
            submittedDate: null,
            submittedTime: null,
            grade: null,
            feedback: null,
            revisionHistory: [],
            isPrimaryStudent: false
          });
        }
      });

      return list;
    }

    function openCreateOrEditAssignmentModal(existingTask = null) {
      const isEdit = Boolean(existingTask);
      const defaultCourse = existingTask
        ? ACADEMIC_DB.courses.find((c) => c.id === existingTask.courseId) || ACADEMIC_DB.courses[0]
        : ACADEMIC_DB.courses[0];

      const dlFormatted = existingTask
        ? formatWibDateTime(existingTask.deadlineIso)
        : { inputDate: '2026-11-08', inputTime: '23:59' };

      const allFormats = ['PDF', 'DOC', 'DOCX', 'PPT', 'PPTX', 'XLS', 'XLSX', 'JPG', 'JPEG', 'PNG'];
      const selectedFormats = existingTask?.allowedFormats || ['PDF', 'DOC', 'DOCX', 'PPT', 'PPTX'];

      openModal({
        title: isEdit ? 'Pengaturan Tugas & Sistem Deadline' : 'Buat Tugas Baru untuk Mahasiswa',
        subtitle: 'Tersinkronisasi langsung dengan halaman Tugas Mahasiswa & Kalender Akademik',
        icon: isEdit ? 'tune' : 'add_task',
        confirmText: isEdit ? 'Simpan Pengaturan Tugas' : 'Terbitkan Tugas Baru',
        cancelText: 'Batal',
        size: 'max-w-2xl',
        bodyHtml: `
          <div class="space-y-4 text-xs sm:text-[13px]">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block font-bold text-on-surface mb-1">Mata Kuliah & Kelas</label>
                <select id="cf-form-course" class="w-full rounded-xl border border-outline-rose bg-surface-white px-3 py-2 font-semibold text-on-surface">
                  ${ACADEMIC_DB.courses
                    .map(
                      (c) => `
                    <option value="${c.id}" ${c.id === defaultCourse.id ? 'selected' : ''}>
                      ${c.name} (Kelas ${c.kelas} • ${c.lecturer})
                    </option>`
                    )
                    .join('')}
                </select>
              </div>
              <div>
                <label class="block font-bold text-on-surface mb-1">Pertemuan Ke-</label>
                <input type="text" id="cf-form-meeting" value="${existingTask?.meeting || 'Pertemuan 3'}" class="w-full rounded-xl border border-outline-rose bg-surface-white px-3 py-2 font-semibold text-on-surface" placeholder="Contoh: Pertemuan 3" />
              </div>
            </div>

            <div>
              <label class="block font-bold text-on-surface mb-1">Judul Tugas</label>
              <input type="text" id="cf-form-title" value="${existingTask?.title || ''}" class="w-full rounded-xl border border-outline-rose bg-surface-white px-3 py-2 font-semibold text-on-surface" placeholder="Contoh: Perancangan Class Diagram & Sequence Diagram" />
            </div>

            <div>
              <label class="block font-bold text-on-surface mb-1">Deskripsi & Instruksi Tugas</label>
              <textarea id="cf-form-desc" rows="3" class="w-full rounded-xl border border-outline-rose bg-surface-white p-2.5 text-on-surface" placeholder="Tuliskan deskripsi dan instruksi pengerjaan tugas...">${existingTask?.description || ''}</textarea>
            </div>

            <div class="p-3.5 rounded-xl bg-soft-rose/70 border border-outline-rose space-y-3">
              <div class="font-bold text-primary flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[17px]">schedule</span>
                <span>Pengaturan Sistem Deadline (Zona Waktu WIB)</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label class="block text-[11.5px] font-semibold text-on-surface-variant mb-1">Tanggal Diberikan</label>
                  <input type="text" id="cf-form-given" value="${existingTask?.givenDate || '2 November 2026'}" class="w-full rounded-xl border border-outline-rose bg-surface-white px-3 py-1.5 font-semibold" />
                </div>
                <div>
                  <label class="block text-[11.5px] font-semibold text-on-surface-variant mb-1">Tanggal Deadline</label>
                  <input type="date" id="cf-form-deadline-date" value="${dlFormatted.inputDate}" class="w-full rounded-xl border border-outline-rose bg-surface-white px-3 py-1.5 font-semibold" />
                </div>
                <div>
                  <label class="block text-[11.5px] font-semibold text-on-surface-variant mb-1">Jam Deadline (WIB)</label>
                  <input type="time" id="cf-form-deadline-time" value="${dlFormatted.inputTime}" class="w-full rounded-xl border border-outline-rose bg-surface-white px-3 py-1.5 font-semibold" />
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div class="sm:col-span-2">
                <label class="block font-bold text-on-surface mb-1">Nama File Template / Modul Pendukung</label>
                <input type="text" id="cf-form-template-name" value="${existingTask?.template?.fileName || 'Template_Tugas_Mahasiswa.docx'}" class="w-full rounded-xl border border-outline-rose bg-surface-white px-3 py-2" />
              </div>
              <div>
                <label class="block font-bold text-on-surface mb-1">Batas Ukuran File (MB)</label>
                <input type="number" id="cf-form-maxsize" min="1" max="100" value="${existingTask?.maxSizeMb || 20}" class="w-full rounded-xl border border-outline-rose bg-surface-white px-3 py-2 font-bold" />
              </div>
            </div>

            <div>
              <label class="block font-bold text-on-surface mb-1.5">Format File yang Diizinkan</label>
              <div class="flex flex-wrap gap-2">
                ${allFormats
                  .map(
                    (fmt) => `
                  <label class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container-low border border-outline-rose/60 cursor-pointer">
                    <input type="checkbox" name="cf-fmt-check" value="${fmt}" ${selectedFormats.includes(fmt) ? 'checked' : ''} class="accent-[#B5546B]" />
                    <span class="font-bold text-xs">${fmt}</span>
                  </label>`
                  )
                  .join('')}
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <label class="flex items-center gap-2 p-2.5 rounded-xl bg-surface-container-low cursor-pointer">
                <input type="checkbox" id="cf-form-resubmit" ${existingTask ? (existingTask.allowResubmit ? 'checked' : '') : 'checked'} class="accent-[#B5546B] w-4 h-4" />
                <span class="font-semibold text-xs">Izinkan Pengumpulan Ulang / Revisi</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 rounded-xl bg-surface-container-low cursor-pointer">
                <input type="checkbox" id="cf-form-late" ${existingTask ? (existingTask.allowLate ? 'checked' : '') : 'checked'} class="accent-[#B5546B] w-4 h-4" />
                <span class="font-semibold text-xs">Izinkan Pengumpulan Terlambat</span>
              </label>
            </div>
          </div>
        `,
        onConfirm: (modalEl) => {
          const courseId = modalEl.querySelector('#cf-form-course')?.value || 'adpl';
          const courseObj = ACADEMIC_DB.courses.find((c) => c.id === courseId) || ACADEMIC_DB.courses[0];
          const meeting = (modalEl.querySelector('#cf-form-meeting')?.value || 'Pertemuan 3').trim();
          const title = (modalEl.querySelector('#cf-form-title')?.value || '').trim();
          if (!title) {
            showToast('Judul Tugas Wajib Diisi', 'Mohon isi judul tugas terlebih dahulu.', 'warning');
            return false;
          }
          const desc = (modalEl.querySelector('#cf-form-desc')?.value || 'Kerjakan sesuai instruksi dan template terlampir.').trim();
          const givenDate = (modalEl.querySelector('#cf-form-given')?.value || '2 November 2026').trim();
          const dDate = modalEl.querySelector('#cf-form-deadline-date')?.value || '2026-11-08';
          const dTime = modalEl.querySelector('#cf-form-deadline-time')?.value || '23:59';
          const deadlineIso = `${dDate}T${dTime}:00+07:00`;
          const templateName = (modalEl.querySelector('#cf-form-template-name')?.value || 'Template_Tugas.docx').trim();
          const maxSizeMb = parseInt(modalEl.querySelector('#cf-form-maxsize')?.value || '20', 10) || 20;
          const allowResubmit = Boolean(modalEl.querySelector('#cf-form-resubmit')?.checked);
          const allowLate = Boolean(modalEl.querySelector('#cf-form-late')?.checked);

          const checkedFormats = Array.from(modalEl.querySelectorAll('input[name="cf-fmt-check"]:checked')).map((el) => el.value);
          const allowedFormats = checkedFormats.length > 0 ? checkedFormats : ['PDF', 'DOCX'];

          const all = loadAssignments();
          if (isEdit) {
            const idx = all.findIndex((t) => t.id === existingTask.id);
            if (idx !== -1) {
              all[idx] = {
                ...all[idx],
                courseId: courseObj.id,
                courseName: courseObj.name,
                lecturer: courseObj.lecturer,
                kelas: courseObj.kelas,
                meeting,
                title,
                description: desc,
                givenDate,
                deadlineIso,
                allowedFormats,
                maxSizeMb,
                allowResubmit,
                allowLate,
                template: {
                  ...all[idx].template,
                  fileName: templateName
                }
              };
            }
          } else {
            const newId = 'tugas-' + courseObj.id + '-' + Date.now().toString().slice(-4);
            all.unshift({
              id: newId,
              courseId: courseObj.id,
              courseName: courseObj.name,
              lecturer: courseObj.lecturer,
              kelas: courseObj.kelas,
              meeting,
              title,
              description: desc,
              instructions: [
                'Unduh dan pelajari berkas template yang telah disediakan.',
                `Unggah file dalam format: ${allowedFormats.join(', ')} (Maks. ${maxSizeMb} MB).`
              ],
              givenDate,
              deadlineIso,
              timezone: 'WIB',
              allowedFormats,
              maxSizeMb,
              maxFiles: 1,
              allowResubmit,
              allowLate,
              template: {
                fileName: templateName,
                docType: templateName.toLowerCase().endsWith('.pdf') ? 'Dokumen PDF (.PDF)' : 'Microsoft Word (.DOCX)',
                fileSize: '1.2 MB',
                previewText: `TEMPLATE TUGAS — ${courseObj.name.toUpperCase()} (${courseObj.kelas})\nJudul: ${title}\nDosen: ${courseObj.lecturer}\n\n1. Pendahuluan & Analisis\n2. Pembahasan & Hasil Pengerjaan\n3. Kesimpulan`
              },
              studentSubmission: {
                nim: '240511184',
                studentName: 'Rimawati',
                status: 'Belum dikerjakan',
                submissionId: null,
                fileName: null,
                fileFormat: null,
                fileSize: null,
                submittedDate: null,
                submittedTime: null,
                submittedIso: null,
                notes: '',
                optionalLink: '',
                grade: null,
                feedback: null,
                revisionHistory: []
              },
              otherSubmissions: []
            });
            selectedTaskId = newId;
          }

          saveAssignments(all);
          renderLecturerPage();
          showToast(
            isEdit ? 'Pengaturan Tugas Diperbarui' : 'Tugas Baru Diterbitkan!',
            `Tugas "${title}" langsung muncul di halaman Tugas & Kalender Mahasiswa.`,
            'success'
          );
        }
      });
    }

    function renderLecturerPage() {
      assignments = loadAssignments();
      const task = assignments.find((t) => t.id === selectedTaskId) || assignments[0];
      if (!task) return;
      selectedTaskId = task.id;

      const dl = computeDeadlineInfo(task);
      const rosterSubs = buildCombinedRosterSubmissions(task);

      const filteredSubs = rosterSubs.filter((s) => {
        if (statusFilter === 'ALL') return true;
        return s.effectiveStatus === statusFilter;
      });

      const activeStudentSub =
        rosterSubs.find((s) => s.nim === selectedStudentNim) || rosterSubs[0];

      const submittedTotal = rosterSubs.filter((s) =>
        ['Terkumpul', 'Dinilai', 'Perlu Revisi'].includes(s.effectiveStatus)
      ).length;
      const gradedTotal = rosterSubs.filter((s) => s.effectiveStatus === 'Dinilai').length;
      const revisionTotal = rosterSubs.filter((s) => s.effectiveStatus === 'Perlu Revisi').length;

      root.innerHTML = `
        <!-- Top Header & Action Bar -->
        <div class="bg-surface-white rounded-2xl p-4 sm:p-5 shadow-sm border border-outline-rose/50 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2 flex-wrap mb-1">
              <span class="px-2.5 py-0.5 rounded-full bg-soft-rose text-primary text-xs font-bold">Portal Dosen Pengampu</span>
              <span class="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant text-xs font-semibold">Sinkronisasi Langsung dengan Mahasiswa</span>
            </div>
            <h1 class="text-xl sm:text-2xl font-bold text-on-surface tracking-tight">Manajemen Tugas, Pengumpulan & Penilaian</h1>
            <p class="text-xs text-on-surface-variant mt-0.5">Kelola tugas kuliah, atur sistem deadline WIB, unduh berkas mahasiswa, dan berikan nilai atau instruksi revisi.</p>
          </div>

          <div class="flex flex-wrap items-center gap-2.5">
            <a href="${getScreenUrl('detail_tugas_pengumpulan_mahasiswa', `task=${task.id}`)}" class="px-3.5 py-2.5 rounded-xl bg-soft-rose hover:bg-surface-container text-primary text-xs font-bold border border-outline-rose transition-colors flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px]">visibility</span>
              <span>Lihat di Halaman Mahasiswa</span>
            </a>
            <button type="button" id="cf-btn-edit-task" class="px-3.5 py-2.5 rounded-xl bg-surface-white hover:bg-soft-rose text-on-surface hover:text-primary text-xs font-bold border border-outline-rose transition-colors flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px]">tune</span>
              <span>Atur Deadline & Format</span>
            </button>
            <button type="button" id="cf-btn-create-task" class="px-4 py-2.5 rounded-xl bg-[#B5546B] hover:bg-[#963c53] text-white text-xs sm:text-sm font-bold shadow-sm transition-all flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[18px]">add_circle</span>
              <span>Buat Tugas Baru</span>
            </button>
          </div>
        </div>

        <!-- Assignment Selector Bar -->
        <div class="bg-surface-white rounded-2xl p-3.5 shadow-sm border border-outline-rose/40 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div class="flex items-center gap-2 overflow-x-auto cf-scroll pb-1 md:pb-0">
            <span class="text-xs font-bold text-outline uppercase tracking-wider shrink-0 pl-1">Pilih Tugas Aktif:</span>
            ${assignments
              .map((t) => {
                const isActive = t.id === task.id;
                return `
                <button type="button" data-lecturer-task="${t.id}" class="px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#4A1F2E] text-white shadow-xs'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-soft-rose hover:text-primary'
                }">
                  <span>${t.courseName.split(' ')[0]} (${t.kelas}) — ${t.meeting}</span>
                </button>`;
              })
              .join('')}
          </div>
          <span class="text-xs text-on-surface-variant shrink-0">
            Dosen: <strong class="text-on-surface">${task.lecturer}</strong> • Deadline: <strong class="text-primary">${dl.formattedDeadline.full}</strong>
          </span>
        </div>

        <!-- Summary KPI Row -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
          <div class="bg-surface-white rounded-2xl p-4 shadow-sm border border-outline-rose/40">
            <span class="text-[11px] uppercase tracking-wider font-bold text-on-surface-variant">Total Mahasiswa</span>
            <div class="flex items-baseline gap-2 mt-1">
              <span class="text-2xl font-extrabold text-on-surface">${rosterSubs.length}</span>
              <span class="text-xs text-on-surface-variant">Kelas ${task.kelas}</span>
            </div>
          </div>
          <div class="bg-surface-white rounded-2xl p-4 shadow-sm border border-outline-rose/40">
            <span class="text-[11px] uppercase tracking-wider font-bold text-on-surface-variant">Sudah Mengumpulkan</span>
            <div class="flex items-baseline gap-2 mt-1">
              <span class="text-2xl font-extrabold text-[#22A06B]">${submittedTotal}</span>
              <span class="text-xs text-on-surface-variant">dari ${rosterSubs.length} Mahasiswa</span>
            </div>
          </div>
          <div class="bg-surface-white rounded-2xl p-4 shadow-sm border border-outline-rose/40">
            <span class="text-[11px] uppercase tracking-wider font-bold text-on-surface-variant">Sudah Dinilai</span>
            <div class="flex items-baseline gap-2 mt-1">
              <span class="text-2xl font-extrabold text-primary">${gradedTotal}</span>
              <span class="text-xs text-on-surface-variant">Telah diberi feedback</span>
            </div>
          </div>
          <div class="bg-surface-white rounded-2xl p-4 shadow-sm border border-outline-rose/40">
            <span class="text-[11px] uppercase tracking-wider font-bold text-on-surface-variant">Perlu Revisi</span>
            <div class="flex items-baseline gap-2 mt-1">
              <span class="text-2xl font-extrabold text-[#D9A441]">${revisionTotal}</span>
              <span class="text-xs text-on-surface-variant">Menunggu perbaikan</span>
            </div>
          </div>
        </div>

        <!-- Main Responsive Grid: Left (8 Cols: Tabel Pengumpulan Mahasiswa) + Right (4 Cols: Panel Evaluasi, Nilai, & Feedback) -->
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start">
          <!-- Left 8 Cols: Tabel Pengumpulan Mahasiswa (Section 6) -->
          <section class="xl:col-span-8 bg-surface-white rounded-2xl p-4 sm:p-5 shadow-sm border border-outline-rose/50 space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-outline-rose/40">
              <div>
                <h2 class="text-base font-bold text-on-surface">${task.title}</h2>
                <p class="text-xs text-on-surface-variant mt-0.5">
                  Format diizinkan: <strong>${(task.allowedFormats || []).join(', ')}</strong> • Maks. <strong>${task.maxSizeMb} MB</strong> • ${dl.countdownText}
                </p>
              </div>
            </div>

            <!-- Status Filter Pills -->
            <div class="flex items-center gap-1.5 flex-wrap">
              ${[
                { id: 'ALL', label: `Semua (${rosterSubs.length})` },
                { id: 'Terkumpul', label: 'Terkumpul' },
                { id: 'Belum dikerjakan', label: 'Belum Dikerjakan' },
                { id: 'Draft', label: 'Draft' },
                { id: 'Terlambat', label: 'Terlambat' },
                { id: 'Perlu Revisi', label: 'Perlu Revisi' },
                { id: 'Dinilai', label: 'Dinilai' }
              ]
                .map(
                  (f) => `
                <button type="button" data-status-filter="${f.id}" class="px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    statusFilter === f.id
                      ? 'bg-[#B5546B] text-white'
                      : 'bg-surface-container-low text-on-surface-variant hover:bg-soft-rose hover:text-primary'
                  }">${f.label}</button>`
                )
                .join('')}
            </div>

            <!-- Tabel Pengumpulan Mahasiswa (Exact Columns: Nama Mahasiswa, NIM, Status, Tanggal Pengumpulan, File, Nilai, Aksi) -->
            <div class="overflow-x-auto cf-scroll">
              <table class="w-full text-left text-xs min-w-[740px]">
                <thead>
                  <tr class="bg-surface-container-low text-on-surface-variant uppercase tracking-wider">
                    <th class="py-3 px-3 rounded-l-xl">Nama Mahasiswa</th>
                    <th class="py-3 px-2.5">NIM</th>
                    <th class="py-3 px-2.5">Status</th>
                    <th class="py-3 px-3">Tanggal Pengumpulan</th>
                    <th class="py-3 px-3">File</th>
                    <th class="py-3 px-2.5 text-center">Nilai</th>
                    <th class="py-3 px-3 text-right rounded-r-xl">Aksi</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-outline-rose/30 text-[13px]">
                  ${filteredSubs
                    .map((s) => {
                      const isSelected = s.nim === activeStudentSub?.nim;
                      return `
                      <tr class="${
                        isSelected ? 'bg-soft-rose/80' : 'hover:bg-soft-rose/40'
                      } transition-colors cursor-pointer" data-student-row="${s.nim}">
                        <td class="py-3.5 px-3 font-bold text-on-surface">
                          <div class="flex items-center gap-2">
                            <span>${s.studentName}</span>
                            ${
                              s.isPrimaryStudent
                                ? `<span class="px-1.5 py-0.5 rounded bg-[#B5546B] text-white text-[10px] font-bold">Mhs Aktif</span>`
                                : ''
                            }
                          </div>
                        </td>
                        <td class="py-3.5 px-2.5 font-mono text-xs text-on-surface-variant">${s.nim}</td>
                        <td class="py-3.5 px-2.5">${getStatusBadgeHtml(s.effectiveStatus)}</td>
                        <td class="py-3.5 px-3 text-xs">
                          ${
                            s.submittedDate
                              ? `<span class="font-semibold text-on-surface block">${s.submittedDate}</span>
                                 <span class="text-[11px] text-on-surface-variant">${s.submittedTime || ''}</span>`
                              : `<span class="text-outline italic">Belum mengumpulkan</span>`
                          }
                        </td>
                        <td class="py-3.5 px-3 text-xs">
                          ${
                            s.fileName
                              ? `<button type="button" data-download-stu="${s.nim}" class="text-primary hover:underline font-semibold flex items-center gap-1 max-w-[170px] truncate" title="Unduh ${s.fileName}">
                                  <span class="material-symbols-outlined text-[15px] shrink-0">download</span>
                                  <span class="truncate">${s.fileName}</span>
                                 </button>`
                              : `<span class="text-outline">—</span>`
                          }
                        </td>
                        <td class="py-3.5 px-2.5 text-center font-extrabold">
                          ${
                            s.grade !== null && s.grade !== undefined
                              ? `<span class="px-2 py-0.5 rounded-lg bg-soft-rose text-primary">${s.grade}</span>`
                              : `<span class="text-outline">—</span>`
                          }
                        </td>
                        <td class="py-3.5 px-3 text-right">
                          <button type="button" data-evaluate-stu="${s.nim}" class="px-3 py-1.5 rounded-xl ${
                        isSelected
                          ? 'bg-[#4A1F2E] text-white'
                          : 'bg-[#B5546B] hover:bg-[#963c53] text-white'
                      } text-xs font-bold transition-colors">
                            Nilai & Feedback
                          </button>
                        </td>
                      </tr>`;
                    })
                    .join('')}
                </tbody>
              </table>
            </div>
          </section>

          <!-- Right 4 Cols: Panel Evaluasi, Nilai, Feedback, & Minta Revisi -->
          <aside class="xl:col-span-4 space-y-4">
            <section class="bg-surface-white rounded-2xl p-5 shadow-sm border border-outline-rose/50 space-y-4">
              <div class="flex items-center justify-between pb-3 border-b border-outline-rose/40">
                <div>
                  <span class="text-[11px] uppercase tracking-wider font-bold text-primary block">Panel Penilaian & Feedback</span>
                  <h3 class="text-base font-bold text-on-surface">${activeStudentSub.studentName} (${activeStudentSub.nim})</h3>
                </div>
                ${getStatusBadgeHtml(activeStudentSub.effectiveStatus)}
              </div>

              <!-- Submitted File Box -->
              ${
                activeStudentSub.fileName
                  ? `
                  <div class="p-3.5 rounded-xl bg-soft-rose/70 border border-outline-rose space-y-2 text-xs">
                    <div class="flex items-center justify-between">
                      <span class="text-on-surface-variant font-semibold">Berkas Dikumpulkan:</span>
                      <span class="font-mono text-[11px] text-primary font-bold">${activeStudentSub.submissionId || 'Draft'}</span>
                    </div>
                    <p class="font-bold text-on-surface break-all">📎 ${activeStudentSub.fileName}</p>
                    <p class="text-on-surface-variant">Waktu: <strong>${activeStudentSub.submittedDate} • ${activeStudentSub.submittedTime || ''}</strong></p>
                    ${
                      activeStudentSub.notes
                        ? `<p class="p-2 rounded-lg bg-surface-white text-on-surface-variant italic">"${activeStudentSub.notes}"</p>`
                        : ''
                    }
                    <button type="button" id="cf-panel-download-btn" class="w-full py-2 px-3 rounded-xl bg-surface-white hover:bg-[#B5546B] text-primary hover:text-white font-bold text-xs border border-outline-rose transition-colors flex items-center justify-center gap-1.5">
                      <span class="material-symbols-outlined text-[16px]">download</span>
                      <span>Unduh File Mahasiswa</span>
                    </button>
                  </div>
                `
                  : `
                  <div class="p-4 rounded-xl bg-surface-container-low text-center text-xs text-on-surface-variant">
                    Mahasiswa ini belum mengunggah berkas tugas. Anda tetap dapat memberikan catatan pengingat atau penilaian.
                  </div>
                `
              }

              <!-- Grading & Feedback Form -->
              <div class="space-y-3 text-xs">
                <div>
                  <label class="block font-bold text-on-surface mb-1">Nilai Tugas (Skala 0 – 100)</label>
                  <input type="number" id="cf-lecturer-grade-input" min="0" max="100" value="${
                    activeStudentSub.grade !== null && activeStudentSub.grade !== undefined ? activeStudentSub.grade : 88
                  }" class="w-full rounded-xl border border-outline-rose bg-surface-white px-3.5 py-2 text-base font-extrabold text-primary focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>

                <div>
                  <label class="block font-bold text-on-surface mb-1">Catatan Feedback Dosen untuk Mahasiswa</label>
                  <textarea id="cf-lecturer-feedback-input" rows="3" class="w-full rounded-xl border border-outline-rose bg-surface-white p-3 text-xs text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Berikan masukan konstruktif atau instruksi bagian yang perlu direvisi...">${
                    activeStudentSub.feedback || ''
                  }</textarea>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <button type="button" id="cf-btn-request-revision" class="py-2.5 px-3 rounded-xl bg-[#D9A441]/20 hover:bg-[#D9A441] text-[#795400] hover:text-white font-bold text-xs border border-[#D9A441]/50 transition-all flex items-center justify-center gap-1.5">
                    <span class="material-symbols-outlined text-[16px]">rate_review</span>
                    <span>Minta Revisi</span>
                  </button>
                  <button type="button" id="cf-btn-save-grade" class="py-2.5 px-3 rounded-xl bg-[#22A06B] hover:bg-[#1b8457] text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5">
                    <span class="material-symbols-outlined text-[16px]">check_circle</span>
                    <span>Simpan Nilai (Dinilai)</span>
                  </button>
                </div>
              </div>
            </section>
          </aside>
        </div>
      `;

      // Bind task switcher
      root.querySelectorAll('[data-lecturer-task]').forEach((btn) => {
        btn.addEventListener('click', () => {
          selectedTaskId = btn.getAttribute('data-lecturer-task');
          window.history.replaceState({}, '', `?task=${selectedTaskId}`);
          renderLecturerPage();
        });
      });

      // Bind status filter
      root.querySelectorAll('[data-status-filter]').forEach((btn) => {
        btn.addEventListener('click', () => {
          statusFilter = btn.getAttribute('data-status-filter');
          renderLecturerPage();
        });
      });

      // Bind create & edit task buttons
      root.querySelector('#cf-btn-create-task')?.addEventListener('click', () => openCreateOrEditAssignmentModal(null));
      root.querySelector('#cf-btn-edit-task')?.addEventListener('click', () => openCreateOrEditAssignmentModal(task));

      // Bind student row selection
      root.querySelectorAll('[data-student-row], [data-evaluate-stu]').forEach((el) => {
        el.addEventListener('click', (e) => {
          if (e.target.closest('[data-download-stu]')) return;
          selectedStudentNim = el.getAttribute('data-student-row') || el.getAttribute('data-evaluate-stu');
          renderLecturerPage();
        });
      });

      // Bind download file buttons
      root.querySelectorAll('[data-download-stu]').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const nim = btn.getAttribute('data-download-stu');
          const targetSub = rosterSubs.find((s) => s.nim === nim);
          if (targetSub?.fileName) {
            triggerSimulatedFileDownload(targetSub.fileName, `Submission Mahasiswa — ${targetSub.studentName}`, {
              Mahasiswa: `${targetSub.studentName} (${targetSub.nim})`,
              'Mata Kuliah': `${task.courseName} (${task.kelas})`,
              Tugas: task.title,
              'Waktu Submit': `${targetSub.submittedDate} • ${targetSub.submittedTime || ''}`
            });
          }
        });
      });

      root.querySelector('#cf-panel-download-btn')?.addEventListener('click', () => {
        if (activeStudentSub?.fileName) {
          triggerSimulatedFileDownload(activeStudentSub.fileName, `Submission Mahasiswa — ${activeStudentSub.studentName}`, {
            Mahasiswa: `${activeStudentSub.studentName} (${activeStudentSub.nim})`,
            'Mata Kuliah': `${task.courseName} (${task.kelas})`,
            Tugas: task.title
          });
        }
      });

      // Helper to save grade/feedback or request revision
      const updateEvaluation = (newStatus) => {
        const gradeVal = parseInt(root.querySelector('#cf-lecturer-grade-input')?.value || '0', 10);
        const feedbackVal = (root.querySelector('#cf-lecturer-feedback-input')?.value || '').trim();

        const all = loadAssignments();
        const idx = all.findIndex((t) => t.id === task.id);
        if (idx === -1) return;

        if (activeStudentSub.nim === '240511184') {
          const prevHist = Array.isArray(all[idx].studentSubmission?.revisionHistory)
            ? all[idx].studentSubmission.revisionHistory
            : [];
          all[idx].studentSubmission = {
            ...all[idx].studentSubmission,
            nim: '240511184',
            studentName: 'Rimawati',
            status: newStatus,
            grade: isNaN(gradeVal) ? null : gradeVal,
            feedback:
              feedbackVal ||
              (newStatus === 'Perlu Revisi'
                ? 'Mohon perbaiki dokumen sesuai catatan dosen dan unggah kembali berkas revisi.'
                : 'Tugas telah diperiksa dan dinilai oleh dosen pengampu.'),
            revisionHistory: prevHist
          };
        } else {
          const otherList = Array.isArray(all[idx].otherSubmissions) ? all[idx].otherSubmissions : [];
          const oIdx = otherList.findIndex((o) => o.nim === activeStudentSub.nim);
          const updatedEntry = {
            ...(oIdx !== -1 ? otherList[oIdx] : activeStudentSub),
            status: newStatus,
            grade: isNaN(gradeVal) ? null : gradeVal,
            feedback:
              feedbackVal ||
              (newStatus === 'Perlu Revisi'
                ? 'Mohon perbaiki dokumen sesuai catatan dosen.'
                : 'Tugas telah dinilai.')
          };
          if (oIdx !== -1) otherList[oIdx] = updatedEntry;
          else otherList.push(updatedEntry);
          all[idx].otherSubmissions = otherList;
        }

        saveAssignments(all);
        renderLecturerPage();
        showToast(
          newStatus === 'Perlu Revisi' ? 'Permintaan Revisi Dikirim' : 'Nilai & Feedback Disimpan',
          `Status tugas ${activeStudentSub.studentName} diperbarui menjadi "${newStatus}" (Nilai: ${gradeVal}).`,
          newStatus === 'Perlu Revisi' ? 'warning' : 'success'
        );
      };

      root.querySelector('#cf-btn-save-grade')?.addEventListener('click', () => updateEvaluation('Dinilai'));
      root.querySelector('#cf-btn-request-revision')?.addEventListener('click', () => updateEvaluation('Perlu Revisi'));
    }

    renderLecturerPage();
  }
  function initLoginScreens() {
    if (currentScreen.role !== 'auth') return;

    let selectedRole = 'mahasiswa';
    const form = document.getElementById('login-form') || document.querySelector('form');
    const idInput = document.getElementById('identifier') || document.querySelector('input[type="text"], input[type="email"]');
    const passInput = document.getElementById('password') || document.querySelector('input[type="password"]');

    const demoCreds = {
      mahasiswa: { id: '240511184', pass: 'campusflow2026', target: 'dashboard_mahasiswa', label: 'Mahasiswa (Rimawati)' },
      dosen: { id: '0412087501', pass: 'campusflow2026', target: 'dashboard_dosen', label: 'Dosen Pengampu' },
      admin: { id: 'admin@campusflow.ac.id', pass: 'campusflow2026', target: 'dashboard_admin', label: 'Administrator SIAKAD' }
    };

    document.querySelectorAll('.role-tab, [data-role]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const r = (btn.getAttribute('data-role') || btn.textContent || '').trim().toLowerCase();
        if (r.includes('dosen')) selectedRole = 'dosen';
        else if (r.includes('admin')) selectedRole = 'admin';
        else selectedRole = 'mahasiswa';
        const cred = demoCreds[selectedRole];
        if (idInput) idInput.value = cred.id;
        if (passInput && !passInput.value) passInput.value = cred.pass;
      });
    });

    if (idInput && !idInput.value) idInput.value = demoCreds.mahasiswa.id;
    if (passInput && !passInput.value) passInput.value = demoCreds.mahasiswa.pass;

    if (form) {
      form.addEventListener(
        'submit',
        (e) => {
          e.preventDefault();
          e.stopImmediatePropagation();
          const val = (idInput?.value || '').trim().toLowerCase();
          if (val.includes('admin')) selectedRole = 'admin';
          else if (val.includes('0412') || val.includes('dosen')) selectedRole = 'dosen';
          const cred = demoCreds[selectedRole] || demoCreds.mahasiswa;
          localStorage.setItem('cf_role', selectedRole);
          showToast(`Autentikasi Berhasil — ${cred.label}`, 'Mengalihkan ke dashboard...', 'success');
          setTimeout(() => {
            window.location.href = getScreenUrl(cred.target);
          }, 500);
        },
        true
      );
    }
  }

  function wireSmartLinksAndButtons() {
    if (currentScreen.role === 'auth') return;

    const routeTextMap = [
      { match: ['buka arsip dokumen', 'arsip dokumen akademik', 'lihat arsip'], target: 'arsip_dokumen_akademik_mahasiswa' },
      { match: ['simulasi target ipk', 'grade calculator', 'kalkulator nilai'], target: 'nilai_grade_calculator_mahasiswa' },
      { match: ['transkrip kumulatif', 'riwayat akademik', 'semester 1–8'], target: 'riwayat_akademik_semester_1_8_mahasiswa' },
      { match: ['study planner', 'kanban', 'pomodoro'], target: 'study_planner_kanban_pomodoro_timer_mahasiswa' },
      { match: ['jadwal lengkap', 'kalender akademik', 'jadwal kuliah'], target: 'kalender_akademik_jadwal_kuliah_mahasiswa' },
      { match: ['rekap presensi', 'kehadiran & presensi', 'detail presensi'], target: 'kehadiran_presensi_akademik_mahasiswa' },
      { match: ['kumpulkan tugas', 'detail tugas', 'pengumpulan tugas', 'unggah submission'], target: 'detail_tugas_pengumpulan_mahasiswa' },
      { match: ['buka detail mata kuliah', 'detail mata kuliah'], target: 'detail_mata_kuliah_manajemen_proyek_ti' },
      { match: ['semua mata kuliah', 'mata kuliah saya'], target: 'mata_kuliah_saya_mahasiswa' },
      { match: ['antrean grading', 'evaluasi submission', 'nilai & feedback'], target: 'penilaian_feedback_submission_dosen' },
      { match: ['distribusi modul', 'materi perkuliahan'], target: 'materi_perkuliahan_distribusi_modul_dosen' },
      { match: ['perkembangan mahasiswa', 'monitoring mahasiswa'], target: 'perkembangan_mahasiswa_dosen' }
    ];

    document.querySelectorAll('main a[href="#"]').forEach((a) => {
      const text = (a.textContent || '').trim().toLowerCase();
      for (const rule of routeTextMap) {
        if (rule.match.some((m) => text.includes(m)) && rule.target !== currentScreenId) {
          a.href = getScreenUrl(rule.target);
          return;
        }
      }
      if (text === 'beranda' || text === 'dashboard') {
        a.href = getScreenUrl(ROLE_PROFILES[activeRole].home);
      }
    });
  }

  function wireRemainingButtons() {
    if (currentScreen.role === 'auth') return;
    document.querySelectorAll('main button').forEach((btn) => {
      if (btn.dataset.cfBound === 'true' || btn.onclick || btn.id || btn.hasAttribute('data-course-pill') || btn.hasAttribute('data-slot-filter')) return;
      btn.dataset.cfBound = 'true';
      btn.addEventListener('click', () => {
        const label = (btn.textContent || btn.title || '').replace(/\s+/g, ' ').trim();
        if (label.length > 1) {
          showToast(label, 'Aksi interaktif berhasil dijalankan pada CampusFlow.', 'info');
        }
      });
    });
  }

  // ============================================================================
  // 8. BOOTSTRAP
  // ============================================================================
  function boot() {
    injectGlobalStyles();
    buildRoleSidebar();
    enhanceTopbar();
    initLoginScreens();
    syncDashboardMahasiswa();
    syncMataKuliahSayaPage();
    syncDetailMataKuliahPage();
    syncKalenderPage();
    syncKehadiranPage();
    syncTugasMahasiswaPage();
    syncTugasDosenPage();
    wireSmartLinksAndButtons();
    wireRemainingButtons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
