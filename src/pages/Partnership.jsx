import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Partnership() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=2070&auto=format&fit=crop" alt="Beauty background" className="w-full h-full object-cover opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-white opacity-90" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="animate-fade-in-up">
                <div className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-6">✨ Partnership Program ✨</div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-600 mb-6 leading-tight">
                  Mari Bersama <br />
                  <span className="text-gray-800">Wujudkan Masa Depan</span>
                  <br />
                  <span className="text-pink-600">Perempuan Indonesia</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Ribuan perempuan di Indonesia memiliki potensi besar, namun sering terhalang oleh keterbatasan akses pendidikan dan keterampilan. Melalui Program 1.000 Beasiswa Beauty Artist, kami membekali mereka dengan pelatihan
                  kecantikan berbasis standar industri agar siap bekerja atau membangun usaha mandiri.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#partnership-form" className="inline-block bg-pink-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-pink-700 transform hover:scale-105 transition duration-300 text-center shadow-lg">
                    Mulai Berkontribusi
                  </a>
                  <a href="#about-partnership" className="inline-flex items-center justify-center bg-white text-pink-600 font-semibold px-8 py-4 rounded-full border border-pink-200 hover:border-pink-600 transition duration-300 text-center">
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
          </div>
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-20 animate-pulse" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-300 rounded-full opacity-20 animate-pulse" />
        </section>
        {/* About Partnership Section */}
        <section id="about-partnership" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071&auto=format&fit=crop" alt="Partnership collaboration" className="rounded-lg shadow-xl" />
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
                          className="lucide lucide-handshake text-pink-600"
                        >
                          <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                          <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                          <path d="m21 3 1 11h-2" />
                          <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                          <path d="M3 4h8" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Partner Terpercaya</p>
                        <p className="text-xl font-bold text-pink-600">50+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="animate-fade-in-up js-animate">
                  <div className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">Tentang Partnership</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Bersama <span className="text-pink-600">Yayasan Wirausaha Muda Mandiri</span>
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Bersama Yayasan Wirausaha Muda Mandiri, Anda dapat berkontribusi langsung dalam menciptakan masa depan yang lebih cerah bagi perempuan Indonesia melalui Program 1.000 Beasiswa Beauty Artist.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-pink-100">
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
                          className="lucide lucide-graduation-cap"
                        >
                          <path d="M22 10v6M2 10l10-5 10 5-10 5" />
                          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-pink-600 mb-1">Mendukung Pelatihan Berkualitas</h3>
                        <p className="text-sm text-gray-700">Mendukung pelatihan kecantikan berbasis standar industri untuk memastikan kualitas lulusan terbaik</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-pink-100">
                      <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up">
                          <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
                          <polyline points="16,7 22,7 22,13" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-pink-600 mb-1">Memperluas Dampak Program</h3>
                        <p className="text-sm text-gray-700">Memperluas dampak program ke lebih banyak penerima manfaat di seluruh Indonesia</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-pink-100">
                      <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-pink-600 mb-1">Membangun Citra Positif</h3>
                        <p className="text-sm text-gray-700">Membangun citra positif melalui aksi nyata pemberdayaan perempuan Indonesia</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-600">
                    <p className="text-gray-700 italic">"Bersama, kita tidak hanya mengajarkan keterampilan, tetapi juga memberikan harapan, kemandirian, dan kesempatan kedua."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Partnership Benefits Section */}
        <section className="py-20 md:py-28 bg-pink-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up js-animate">
              <div className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">Manfaat Partnership</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Sebagai <span className="text-pink-600">Partner</span>, Anda Akan Berperan Dalam
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">Bergabunglah dengan misi mulia ini dan rasakan dampak positif yang nyata bagi masyarakat Indonesia.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group animate-fade-in-up js-animate">
                <div className="h-48 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop" alt="Training Support" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                        className="lucide lucide-graduation-cap text-pink-600"
                      >
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-pink-600">Mendukung Pelatihan</h3>
                  </div>
                  <p className="text-gray-700 mb-4">Mendukung pelatihan kecantikan berbasis standar industri untuk memastikan kualitas lulusan yang siap kerja.</p>
                  <ul className="space-y-2">
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
                      <span className="text-sm">Kurikulum standar industri</span>
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
                      <span className="text-sm">Instruktur berpengalaman</span>
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
                      <span className="text-sm">Fasilitas modern</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group animate-fade-in-up js-animate delay-200">
                <div className="h-48 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop" alt="Program Impact" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                        className="lucide lucide-trending-up text-pink-600"
                      >
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
                        <polyline points="16,7 22,7 22,13" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-pink-600">Memperluas Dampak</h3>
                  </div>
                  <p className="text-gray-700 mb-4">Memperluas dampak program ke lebih banyak penerima manfaat di seluruh Indonesia.</p>
                  <ul className="space-y-2">
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
                      <span className="text-sm">Jangkauan nasional</span>
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
                      <span className="text-sm">Lebih banyak penerima manfaat</span>
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
                      <span className="text-sm">Dampak berkelanjutan</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group animate-fade-in-up js-animate delay-400">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1974&auto=format&fit=crop"
                    alt="Brand Building"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
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
                        className="lucide lucide-heart text-pink-600"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-pink-600">Membangun Citra Positif</h3>
                  </div>
                  <p className="text-gray-700 mb-4">Membangun citra positif melalui aksi nyata pemberdayaan perempuan Indonesia.</p>
                  <ul className="space-y-2">
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
                      <span className="text-sm">Corporate Social Responsibility</span>
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
                      <span className="text-sm">Brand awareness positif</span>
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
                      <span className="text-sm">Kontribusi sosial nyata</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section id="partnership-form" className="py-20 md:py-28 bg-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=2070&auto=format&fit=crop" alt="Beauty background" className="w-full h-full object-cover opacity-10" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="animate-fade-in-up js-animate">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Mulai Berkontribusi Hari Ini!</h2>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Klik tombol di bawah untuk mulai berkontribusi hari ini dan menjadi bagian dari perubahan positif bagi 1.000 perempuan Indonesia.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center bg-pink-500 p-6 rounded-lg">
                    <div className="text-center">
                      <div className="bg-white p-3 rounded-full text-pink-600 mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx={9} cy={7} r={4} />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <p className="font-semibold">1.000 Perempuan</p>
                      <p className="text-sm opacity-90">Dampak Langsung</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center bg-pink-500 p-6 rounded-lg">
                    <div className="text-center">
                      <div className="bg-white p-3 rounded-full text-pink-600 mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-handshake">
                          <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                          <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                          <path d="m21 3 1 11h-2" />
                          <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                          <path d="M3 4h8" />
                        </svg>
                      </div>
                      <p className="font-semibold">Partnership</p>
                      <p className="text-sm opacity-90">Yayasan Terpercaya</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center bg-pink-500 p-6 rounded-lg">
                    <div className="text-center">
                      <div className="bg-white p-3 rounded-full text-pink-600 mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </div>
                      <p className="font-semibold">Kontribusi Nyata</p>
                      <p className="text-sm opacity-90">Pemberdayaan Perempuan</p>
                    </div>
                  </div>
                </div>
                <div className="bg-pink-500 p-6 rounded-lg mb-8 max-w-2xl mx-auto">
                  <p className="text-xl font-medium text-center">"Kolaborasi Anda, Kesempatan Baru untuk 1.000 Perempuan Indonesia"</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="mailto:partnership@salonkita.id" className="inline-block bg-white text-pink-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transform hover:scale-105 transition duration-300 text-center shadow-lg">
                    Hubungi Kami Sekarang
                  </a>
                  <a href="tel:+6221234567" className="inline-flex items-center justify-center bg-pink-500 text-white font-bold px-8 py-4 rounded-full border-2 border-white hover:bg-pink-400 transition duration-300 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone mr-2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    Telepon Langsung
                  </a>
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

export default Partnership;
