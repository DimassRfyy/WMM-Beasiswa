import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  // Refs untuk animasi scroll
  const animatedRefs = useRef([]);

  // Scroll animation
  useEffect(() => {
    const checkScroll = () => {
      animatedRefs.current.forEach((el) => {
        if (!el) return;
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.9) {
          el.classList.add("animate-fade-in-up");
        }
      });
    };
    window.addEventListener("scroll", checkScroll);
    window.addEventListener("load", checkScroll);
    checkScroll();
    return () => {
      window.removeEventListener("scroll", checkScroll);
      window.removeEventListener("load", checkScroll);
    };
  }, []);

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Terima kasih telah mendaftar! Kami akan menghubungi Anda segera.");
  };

  // Helper untuk mengisi ref animasi
  const setAnimatedRef = (el, idx) => {
    animatedRefs.current[idx] = el;
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section id="home" className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="assets/images/thumbnails/bg-nailart.avif" alt="Beauty background" className="w-full h-full object-cover opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-white opacity-90" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <div className="animate-fade-in-up js-animate" ref={(el) => setAnimatedRef(el, 0)}>
                  <div className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-6">Program Beasiswa 2025</div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-600 mb-6 leading-tight">
                    1000 Beasiswa <br />
                    <span className="text-gray-800">Beauty Artist</span>
                  </h1>
                  <p className="text-xl text-gray-700 mb-8 max-w-lg">Pelatihan menjadi Beauty Artist Sebagai Jalan Menuju Kemandirian Ekonomi Perempuan.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#apply" className="inline-block bg-pink-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-pink-700 transform hover:scale-105 transition duration-300 text-center shadow-lg">
                      Daftar Sekarang
                    </a>
                    <a href="#about" className="inline-flex items-center justify-center bg-white text-pink-600 font-semibold px-8 py-4 rounded-full border border-pink-200 hover:border-pink-600 transition duration-300 text-center">
                      Pelajari Lebih Lanjut
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-right ml-2"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="animate-scale js-animate" ref={(el) => setAnimatedRef(el, 1)}>
                  <div className="relative">
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                      <img src="assets/images/thumbnails/bg-training.avif" alt="SalonKita Scholarship Program" className="w-full h-auto" />
                    </div>
                    <div className="absolute -bottom-5 -right-5 bg-pink-600 text-white px-6 py-3 rounded-lg shadow-lg transform rotate-3">
                      <span className="font-bold">100% GRATIS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-20 animate-pulse" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-300 rounded-full opacity-20 animate-pulse" />
        </section>

        {/* Partners Section */}
        <section className="py-10 bg-white border-t border-b border-pink-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <p className="text-gray-500 text-sm uppercase tracking-wider">Bekerjasama dengan</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <img src="assets/images/logos/logo-salonkita-header.svg" alt="Partner 1" className="h-12 w-auto object-contain" />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <img src="assets/images/logos/logo-salonkita-header.svg" alt="Partner 2" className="h-12 w-auto object-contain" />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <img src="assets/images/logos/logo-salonkita-header.svg" alt="Partner 3" className="h-12 w-auto object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="relative">
                  <img src="assets/images/thumbnails/bg-makeup.avif" alt="Beauty training" className="rounded-lg shadow-xl" />
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-pink-100 p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-users text-pink-600"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx={9} cy={7} r={4} />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Peserta Beasiswa</p>
                        <p className="text-xl font-bold text-pink-600">1000+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="animate-fade-in-up js-animate">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Program Beasiswa <span className="text-pink-600">Beauty Artist</span>
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">SalonKita.id bekerjasama dengan Zoe Beauty School dan Yayasan Wirausaha Muda Mandiri, memberikan beasiswa kepada 1000 perempuan Indonesia untuk berkarir di beauty Industry.</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-pink-50 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300">
                      <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-book-open text-pink-600"
                        >
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-pink-600 mb-2">Pelatihan Intensif</h3>
                      <p className="text-gray-700 text-sm">6 bulan pelatihan intensif bersama instruktur profesional.</p>
                    </div>
                    <div className="bg-pink-50 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300">
                      <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-briefcase text-pink-600"
                        >
                          <rect width={20} height={14} x={2} y={7} rx={2} />
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-pink-600 mb-2">Program Magang</h3>
                      <p className="text-gray-700 text-sm">6 bulan magang di salon dan mitra industri kecantikan.</p>
                    </div>
                    <div className="bg-pink-50 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300">
                      <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-award text-pink-600"
                        >
                          <circle cx={12} cy={8} r={6} />
                          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-pink-600 mb-2">Jaminan Kerja</h3>
                      <p className="text-gray-700 text-sm">Jaminan penempatan kerja untuk peserta terbaik.</p>
                    </div>
                  </div>
                  <a href="#specializations" className="inline-flex items-center text-pink-600 font-medium hover:text-pink-700 transition duration-200">
                    Lihat Bidang Pelatihan
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-right ml-1"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specializations Section */}
        <section id="specializations" className="py-20 md:py-28 bg-pink-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up js-animate" ref={(el) => setAnimatedRef(el, 2)}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Bidang <span className="text-pink-600">Pelatihan</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">Kamu bisa memilih bidang pelatihan sesuai minat dan potensimu untuk memulai karir di industri kecantikan.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group animate-fade-in-up js-animate" ref={(el) => setAnimatedRef(el, 3)}>
                <div className="h-48 overflow-hidden">
                  <img src="assets/images/thumbnails/bg-beauty-specialist.avif" alt="Beauty Specialist" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-star text-pink-600"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-pink-600">Beauty Specialist</h3>
                  </div>
                  <p className="text-gray-700 mb-4">Menjadi ahli dalam perawatan kecantikan seperti facial, massage, dan body treatment.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check-circle text-pink-500 mr-2 mt-1 flex-shrink-0"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span className="text-sm">Teknik facial profesional</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check-circle text-pink-500 mr-2 mt-1 flex-shrink-0"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span className="text-sm">Massage therapy</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check-circle text-pink-500 mr-2 mt-1 flex-shrink-0"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span className="text-sm">Perawatan tubuh menyeluruh</span>
                    </li>
                  </ul>
                  <a href="#apply" className="inline-flex items-center text-pink-600 font-medium hover:text-pink-700 transition duration-200">
                    Daftar Sekarang
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-right ml-1"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group animate-fade-in-up js-animate delay-200" ref={(el) => setAnimatedRef(el, 4)}>
                <div className="h-48 overflow-hidden">
                  <img src="assets/images/thumbnails/bg-administration.avif" alt="Beauty Administration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-briefcase text-pink-600"
                      >
                        <rect width={20} height={14} x={2} y={7} rx={2} />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-pink-600">Beauty Administration</h3>
                  </div>
                  <p className="text-gray-700 mb-4">Mengelola operasional salon seperti front office, kasir, dan administrasi reservasi.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check-circle text-pink-500 mr-2 mt-1 flex-shrink-0"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span className="text-sm">Manajemen front office</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check-circle text-pink-500 mr-2 mt-1 flex-shrink-0"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span className="text-sm">Sistem kasir dan pembayaran</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check-circle text-pink-500 mr-2 mt-1 flex-shrink-0"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span className="text-sm">Pengelolaan reservasi</span>
                    </li>
                  </ul>
                  <a href="#apply" className="inline-flex items-center text-pink-600 font-medium hover:text-pink-700 transition duration-200">
                    Daftar Sekarang
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-right ml-1"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group animate-fade-in-up js-animate delay-400" ref={(el) => setAnimatedRef(el, 5)}>
                <div className="h-48 overflow-hidden">
                  <img src="assets/images/thumbnails/bg-consultant.avif" alt="Beauty Consultant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-users text-pink-600"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx={9} cy={7} r={4} />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-pink-600">Beauty Consultant</h3>
                  </div>
                  <p className="text-gray-700 mb-4">Memberikan konsultasi produk dan pelayanan pelanggan yang prima.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check-circle text-pink-500 mr-2 mt-1 flex-shrink-0"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span className="text-sm">Konsultasi produk kecantikan</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check-circle text-pink-500 mr-2 mt-1 flex-shrink-0"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span className="text-sm">Teknik pelayanan pelanggan</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check-circle text-pink-500 mr-2 mt-1 flex-shrink-0"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span className="text-sm">Strategi penjualan produk</span>
                    </li>
                  </ul>
                  <a href="#apply" className="inline-flex items-center text-pink-600 font-medium hover:text-pink-700 transition duration-200">
                    Daftar Sekarang
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-right ml-1"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 md:py-28 bg-white relative overflow-hidden">
          {/* Background element - responsive version */}
          <div className="absolute top-0 right-0 w-full md:w-1/3 h-full bg-white-50 z-0" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="animate-fade-in-up js-animate">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Manfaat <span className="text-pink-600">Program</span>
                  </h2>
                  <p className="text-lg text-gray-700 mb-8">Program beasiswa Beauty Artist menawarkan berbagai manfaat untuk membantu kamu memulai karir di industri kecantikan.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 border border-pink-100 animate-fade-in-left js-animate" ref={(el) => setAnimatedRef(el, 6)}>
                      <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award">
                          <circle cx={12} cy={8} r={6} />
                          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-pink-600 mb-1">100% GRATIS</h3>
                        <p className="text-sm text-gray-700">Tanpa biaya pendaftaran atau pelatihan</p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 border border-pink-100 animate-fade-in-left js-animate delay-100" ref={(el) => setAnimatedRef(el, 7)}>
                      <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award">
                          <circle cx={12} cy={8} r={6} />
                          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-pink-600 mb-1">Sertifikat Resmi</h3>
                        <p className="text-sm text-gray-700">Sertifikat diakui secara nasional</p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 border border-pink-100 animate-fade-in-left js-animate delay-200" ref={(el) => setAnimatedRef(el, 8)}>
                      <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx={9} cy={7} r={4} />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-pink-600 mb-1">Mentor Profesional</h3>
                        <p className="text-sm text-gray-700">Didampingi mentor berpengalaman</p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 border border-pink-100 animate-fade-in-left js-animate delay-300" ref={(el) => setAnimatedRef(el, 9)}>
                      <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase">
                          <rect width={20} height={14} x={2} y={7} rx={2} />
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-pink-600 mb-1">Magang</h3>
                        <p className="text-sm text-gray-700">Magang di tempat kerja nyata</p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 border border-pink-100 animate-fade-in-left js-animate delay-400" ref={(el) => setAnimatedRef(el, 10)}>
                      <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-pink-600 mb-1">Komunitas</h3>
                        <p className="text-sm text-gray-700">Komunitas pembelajaran &amp; dukungan karier</p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 border border-pink-100 animate-fade-in-left js-animate delay-500">
                      <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award">
                          <circle cx={12} cy={8} r={6} />
                          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-pink-600 mb-1">Jaminan Kerja</h3>
                        <p className="text-sm text-gray-700">Jaminan kerja untuk peserta terbaik</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 mt-10 md:mt-0">
                <div className="relative">
                  <img src="assets/images/thumbnails/bg-nailart.avif" alt="Beauty benefits" className="rounded-lg shadow-xl" />
                  <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-pink-100 p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-star text-pink-600"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Tingkat Kepuasan</p>
                        <p className="text-xl font-bold text-pink-600">98%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section id="requirements" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img src="assets/images/thumbnails/bg-brush.avif" alt="Beauty student 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md mt-8">
                    <img src="assets/images/thumbnails/bg-makeup.avif" alt="Beauty student 2" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img src="assets/images/thumbnails/bg-salon.avif" alt="Beauty student 3" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md mt-8">
                    <img src="assets/images/thumbnails/bg-nailart.avif" alt="Beauty student 4" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="animate-fade-in-up js-animate" ref={(el) => setAnimatedRef(el, 11)}>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Siapa yang Bisa <span className="text-pink-600">Mendaftar?</span>
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-pink-100 animate-fade-in-left js-animate">
                      <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-4 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check-circle"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <path d="m9 11 3 3L22 4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-pink-600">Perempuan usia 17–25 tahun</h3>
                        <p className="text-sm text-gray-700">Terbuka untuk perempuan muda yang ingin memulai karir di industri kecantikan</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-pink-100 animate-fade-in-left js-animate delay-100">
                      <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-4 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check-circle"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <path d="m9 11 3 3L22 4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-pink-600">Belum bekerja tetap</h3>
                        <p className="text-sm text-gray-700">Prioritas diberikan kepada yang belum memiliki pekerjaan tetap</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-pink-100 animate-fade-in-left js-animate delay-200">
                      <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-4 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check-circle"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <path d="m9 11 3 3L22 4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-pink-600">Siap mengikuti pelatihan 6 bulan + magang 6 bulan</h3>
                        <p className="text-sm text-gray-700">Berkomitmen penuh untuk mengikuti seluruh program selama 12 bulan</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-pink-100 animate-fade-in-left js-animate delay-300">
                      <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-4 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check-circle"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <path d="m9 11 3 3L22 4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-pink-600">Berdomisili di Indonesia</h3>
                        <p className="text-sm text-gray-700">Terbuka untuk seluruh perempuan Indonesia di berbagai daerah</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-pink-100 animate-fade-in-left js-animate delay-400">
                      <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-4 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check-circle"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <path d="m9 11 3 3L22 4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-pink-600">Diutamakan dari keluarga prasejahtera</h3>
                        <p className="text-sm text-gray-700">Prioritas diberikan kepada yang berasal dari keluarga prasejahtera</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-20 md:py-28 bg-pink-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up js-animate" ref={(el) => setAnimatedRef(el, 12)}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Timeline <span className="text-pink-600">Program</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">Berikut adalah jadwal pelaksanaan program beasiswa Beauty Artist:</p>
            </div>
            {/* Desktop Timeline */}
            <div className="hidden md:block max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-200" />
                {/* Timeline items */}
                <div className="relative flex flex-row-reverse items-center mb-16 gap-4">
                  <div className="flex-1 w-1/2 mb-0">
                    <div className="bg-white p-6 rounded-lg shadow-md mr-8 animate-fade-in-up js-animate">
                      <div className="flex items-center mb-3">
                        <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar">
                            <rect width={18} height={18} x={3} y={4} rx={2} ry={2} />
                            <line x1={16} x2={16} y1={2} y2={6} />
                            <line x1={8} x2={8} y1={2} y2={6} />
                            <line x1={3} x2={21} y1={10} y2={10} />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-pink-600">Pendaftaran Dibuka</h3>
                      </div>
                      <div className="bg-pink-50 text-pink-600 text-sm font-medium py-1 px-3 rounded-full inline-block mb-2">Agustus - Desember 2025</div>
                      <p className="text-gray-700">Periode pendaftaran program beasiswa</p>
                    </div>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-pink-600 rounded-full text-white shadow-md">1</div>
                  <div className="flex-1 w-1/2">{/* Empty space for alignment */}</div>
                </div>
                <div className="relative flex flex-row items-center mb-16 gap-4">
                  <div className="flex-1 w-1/2 mb-0">
                    <div className="bg-white p-6 rounded-lg shadow-md ml-8 animate-fade-in-up js-animate delay-100">
                      <div className="flex items-center mb-3">
                        <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text">
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1={16} x2={8} y1={13} y2={13} />
                            <line x1={16} x2={8} y1={17} y2={17} />
                            <line x1={10} x2={8} y1={9} y2={9} />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-pink-600">Seleksi Berkas</h3>
                      </div>
                      <div className="bg-pink-50 text-pink-600 text-sm font-medium py-1 px-3 rounded-full inline-block mb-2">Agustus 2025 - Januari 2026</div>
                      <p className="text-gray-700">Proses seleksi berkas pendaftaran</p>
                    </div>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-pink-600 rounded-full text-white shadow-md">2</div>
                  <div className="flex-1 w-1/2">{/* Empty space for alignment */}</div>
                </div>
                <div className="relative flex flex-row-reverse items-center mb-16 gap-4">
                  <div className="flex-1 w-1/2 mb-0">
                    <div className="bg-white p-6 rounded-lg shadow-md mr-8 animate-fade-in-up js-animate delay-200">
                      <div className="flex items-center mb-3">
                        <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx={9} cy={7} r={4} />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-pink-600">Wawancara Online</h3>
                      </div>
                      <div className="bg-pink-50 text-pink-600 text-sm font-medium py-1 px-3 rounded-full inline-block mb-2">Februari 2026</div>
                      <p className="text-gray-700">Proses wawancara dengan kandidat terpilih</p>
                    </div>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-pink-600 rounded-full text-white shadow-md">3</div>
                  <div className="flex-1 w-1/2">{/* Empty space for alignment */}</div>
                </div>
                <div className="relative flex flex-row items-center mb-16 gap-4">
                  <div className="flex-1 w-1/2 mb-0">
                    <div className="bg-white p-6 rounded-lg shadow-md ml-8 animate-fade-in-up js-animate delay-300">
                      <div className="flex items-center mb-3">
                        <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-check-circle"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <path d="m9 11 3 3L22 4" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-pink-600">Pengumuman Peserta</h3>
                      </div>
                      <div className="bg-pink-50 text-pink-600 text-sm font-medium py-1 px-3 rounded-full inline-block mb-2">Maret 2026</div>
                      <p className="text-gray-700">Pengumuman peserta yang lolos seleksi</p>
                    </div>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-pink-600 rounded-full text-white shadow-md">4</div>
                  <div className="flex-1 w-1/2">{/* Empty space for alignment */}</div>
                </div>
                <div className="relative flex flex-row-reverse items-center mb-16 gap-4">
                  <div className="flex-1 w-1/2 mb-0">
                    <div className="bg-white p-6 rounded-lg shadow-md mr-8 animate-fade-in-up js-animate delay-400">
                      <div className="flex items-center mb-3">
                        <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-graduation-cap"
                          >
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-pink-600">Pelatihan Dimulai</h3>
                      </div>
                      <div className="bg-pink-50 text-pink-600 text-sm font-medium py-1 px-3 rounded-full inline-block mb-2">Juni 2026</div>
                      <p className="text-gray-700">Awal program pelatihan intensif</p>
                    </div>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-pink-600 rounded-full text-white shadow-md">5</div>
                  <div className="flex-1 w-1/2">{/* Empty space for alignment */}</div>
                </div>
              </div>
            </div>
            {/* Mobile Timeline */}
            <div className="md:hidden space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in-up js-animate" ref={(el) => setAnimatedRef(el, 13)}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-pink-600 mb-2">Pendaftaran Dibuka</h3>
                    <div className="bg-pink-50 text-pink-600 text-sm font-medium py-1 px-3 rounded-full inline-block mb-2">Agustus - Desember 2025</div>
                    <p className="text-gray-700">Periode pendaftaran program beasiswa</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in-up js-animate delay-100" ref={(el) => setAnimatedRef(el, 14)}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-pink-600 mb-2">Seleksi Berkas</h3>
                    <div className="bg-pink-50 text-pink-600 text-sm font-medium py-1 px-3 rounded-full inline-block mb-2">Agustus 2025 - Januari 2026</div>
                    <p className="text-gray-700">Proses seleksi berkas pendaftaran</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in-up js-animate delay-200" ref={(el) => setAnimatedRef(el, 15)}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-pink-600 mb-2">Wawancara Online</h3>
                    <div className="bg-pink-50 text-pink-600 text-sm font-medium py-1 px-3 rounded-full inline-block mb-2">Februari 2026</div>
                    <p className="text-gray-700">Proses wawancara dengan kandidat terpilih</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in-up js-animate delay-300" ref={(el) => setAnimatedRef(el, 16)}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-semibold text-pink-600 mb-2">Pengumuman Peserta</h3>
                    <div className="bg-pink-50 text-pink-600 text-sm font-medium py-1 px-3 rounded-full inline-block mb-2">Maret 2026</div>
                    <p className="text-gray-700">Pengumuman peserta yang lolos seleksi</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in-up js-animate delay-400" ref={(el) => setAnimatedRef(el, 17)}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">5</div>
                  <div>
                    <h3 className="text-xl font-semibold text-pink-600 mb-2">Pelatihan Dimulai</h3>
                    <div className="bg-pink-50 text-pink-600 text-sm font-medium py-1 px-3 rounded-full inline-block mb-2">Juni 2026</div>
                    <p className="text-gray-700">Awal program pelatihan intensif</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="apply" className="py-20 md:py-28 bg-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=2070&auto=format&fit=crop" alt="Beauty background" className="w-full h-full object-cover opacity-10" />
          </div>
          <div className="container mx-auto px-3 sm:px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/2">
                <div className="animate-scale js-animate" ref={(el) => setAnimatedRef(el, 18)}>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Daftar Sekarang!</h2>
                  <p className="text-xl mb-8 max-w-lg">Jangan lewatkan kesempatan untuk mendapatkan beasiswa pelatihan kecantikan dan jaminan kerja. Daftar sekarang dan wujudkan karirmu di industri kecantikan!</p>
                  <div className="space-y-6 mb-8">
                    <div className="flex items-center">
                      <div className="bg-pink-500 p-2 rounded-full mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check-circle text-white"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <path d="m9 11 3 3L22 4" />
                        </svg>
                      </div>
                      <p>Pelatihan intensif selama 6 bulan</p>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-pink-500 p-2 rounded-full mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check-circle text-white"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <path d="m9 11 3 3L22 4" />
                        </svg>
                      </div>
                      <p>Magang di salon dan mitra industri kecantikan</p>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-pink-500 p-2 rounded-full mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check-circle text-white"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <path d="m9 11 3 3L22 4" />
                        </svg>
                      </div>
                      <p>Jaminan kerja untuk peserta terbaik</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-pink-500 p-4 rounded-lg mb-8">
                    <div className="bg-white p-2 rounded-full text-pink-600 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                    <p className="font-medium">Pendaftaran ditutup dalam xx hari lagi!</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="bg-white text-gray-800 p-8 rounded-xl shadow-xl animate-fade-in-up js-animate">
                  <h3 className="text-2xl font-bold text-pink-600 mb-6">Formulir Pendaftaran</h3>
                  <form id="registration-form" onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-medium mb-2">Nama Lengkap</label>
                      <input type="text" placeholder="Masukkan nama lengkap" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent" required="" />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                      <input type="email" placeholder="Masukkan email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent" required="" />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-medium mb-2">Nomor Telepon</label>
                      <input type="tel" placeholder="Masukkan nomor telepon" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent" required="" />
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-medium mb-2">Bidang Pelatihan</label>
                      <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent" required="">
                        <option value="">Pilih Bidang Pelatihan</option>
                        <option value="beauty-specialist">Beauty Specialist (Therapist)</option>
                        <option value="beauty-administration">Beauty Administration</option>
                        <option value="beauty-consultant">Beauty Consultant</option>
                      </select>
                    </div>
                    <button type="submit" className="w-full bg-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-700 transition duration-300 transform hover:scale-105 shadow-md">
                      Daftar Sekarang
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    <Footer />
    </>
  );
}

export default Home;
