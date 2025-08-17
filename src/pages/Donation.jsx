import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Donation() {
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
                <div className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-6">💖 Program Donasi 💖</div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-600 mb-6 leading-tight">
                  Satu Donasi, <br />
                  <span className="text-gray-800">Seribu Harapan</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Banyak perempuan berhenti sekolah terlalu dini, bukan karena mereka tidak mampu, tetapi karena kesempatan yang hilang. Melalui Program 1.000 Beasiswa Beauty Artist, kami memberikan mereka keterampilan, keyakinan diri, dan
                  peluang untuk membangun masa depan yang lebih baik.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#donation-form" className="inline-block bg-pink-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-pink-700 transform hover:scale-105 transition duration-300 text-center shadow-lg">
                    Donasi Sekarang
                  </a>
                  <a href="#about-donation" className="inline-flex items-center justify-center bg-white text-pink-600 font-semibold px-8 py-4 rounded-full border border-pink-200 hover:border-pink-600 transition duration-300 text-center">
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
        {/* About Donation Section */}
        <section id="about-donation" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071&auto=format&fit=crop" alt="Donation impact" className="rounded-lg shadow-xl" />
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
                          className="lucide lucide-heart text-pink-600"
                        >
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Total Donasi</p>
                        <p className="text-xl font-bold text-pink-600">Rp 2.5M+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="animate-fade-in-up js-animate">
                  <div className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">Dampak Donasi Anda</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Dengan Berdonasi, <span className="text-pink-600">Anda Membantu</span>
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">Setiap rupiah yang Anda donasikan akan langsung berdampak pada kehidupan perempuan Indonesia yang membutuhkan kesempatan kedua.</p>
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
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-pink-600 mb-1">Membiayai Pelatihan Kecantikan Profesional</h3>
                        <p className="text-sm text-gray-700">Memberikan akses pelatihan berkualitas tinggi dengan standar industri internasional</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-pink-100">
                      <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package">
                          <line x1="16.5" x2="7.5" y1="9.4" y2="4.21" />
                          <path d="m21 16-4 2-4-2-4 2-4-2v-6l4-2 4 2 4-2 4 2z" />
                          <polyline points="7.5,4.21 7.5,14.3 16.5,9.4 16.5,19.79" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-pink-600 mb-1">Menyediakan Peralatan Praktik</h3>
                        <p className="text-sm text-gray-700">Memastikan setiap peserta memiliki akses ke peralatan dan produk kecantikan terbaik</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-pink-100">
                      <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase">
                          <rect width={20} height={14} x={2} y={7} rx={2} ry={2} />
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-pink-600 mb-1">Membuka Akses Kerja atau Usaha Mandiri</h3>
                        <p className="text-sm text-gray-700">Menghubungkan lulusan dengan peluang kerja dan mendukung mereka memulai usaha sendiri</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-600">
                    <div className="flex items-center mb-2">
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
                        className="lucide lucide-lightbulb text-pink-600 mr-2"
                      >
                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                        <path d="M9 18h6" />
                        <path d="M10 22h4" />
                      </svg>
                      <h4 className="font-semibold text-pink-600">Tahukah Anda?</h4>
                    </div>
                    <p className="text-gray-700">
                      <strong>Setiap Rp100.000</strong> yang Anda berikan dapat mengubah hidup seseorang dan memberikan mereka kesempatan untuk mandiri secara ekonomi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Impact Statistics Section */}
        <section className="py-20 md:py-28 bg-pink-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up js-animate">
              <div className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">Dampak Nyata</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Bersama Kita Telah <span className="text-pink-600">Mengubah Hidup</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">Lihat dampak nyata dari donasi yang telah terkumpul dan bagaimana hal itu mengubah kehidupan perempuan Indonesia.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center animate-fade-in-up js-animate">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
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
                <h3 className="text-3xl font-bold text-pink-600 mb-2">250+</h3>
                <p className="text-gray-700 font-medium">Perempuan Terbantu</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center animate-fade-in-up js-animate delay-100">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-heart text-pink-600"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-pink-600 mb-2">500+</h3>
                <p className="text-gray-700 font-medium">Donatur Peduli</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center animate-fade-in-up js-animate delay-200">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-briefcase text-pink-600"
                  >
                    <rect width={20} height={14} x={2} y={7} rx={2} ry={2} />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-pink-600 mb-2">180+</h3>
                <p className="text-gray-700 font-medium">Lulusan Bekerja</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center animate-fade-in-up js-animate delay-300">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-store text-pink-600"
                  >
                    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                    <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                    <path d="M2 7h20" />
                    <path d="M22 7v3a2 2 0 0 1-2 2v0a2.18 2.18 0 0 1-2-2v0a2.18 2.18 0 0 1-2 2v0a2.18 2.18 0 0 1-2-2v0a2.18 2.18 0 0 1-2 2v0a2.18 2.18 0 0 1-2-2v0a2.18 2.18 0 0 1-2 2v0a2 2 0 0 1-2-2V7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-pink-600 mb-2">45+</h3>
                <p className="text-gray-700 font-medium">Usaha Mandiri</p>
              </div>
            </div>
          </div>
        </section>


        {/* Donation CTA Section Sort*/}
        <section className="py-6 bg-gradient-to-r from-pink-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Illustration */}
                <div className="md:w-1/2">
                  <div className="animate-scale">
                    <img src="assets/images/thumbnails/donation.png" alt="Ilustrasi Donasi" className="w-full h-auto max-w-xs mx-auto" />
                  </div>
                </div>
                {/* Content */}
                <div className="md:w-1/2 text-center md:text-left">
                  <div className="animate-fade-in-up">
                    <h3 className="text-2xl md:text-3xl font-bold text-pink-600 mb-4">Donasi Anda, Harapan Mereka</h3>
                    <p className="text-gray-700 mb-6 text-lg">Setiap kontribusi Anda membantu mewujudkan mimpi perempuan Indonesia untuk berkarir di industri kecantikan.</p>
                    <a href="/donation" className="inline-block bg-pink-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-pink-700 transform hover:scale-105 transition duration-300 shadow-lg">
                      Donasi Sekarang
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
                        className="lucide lucide-heart inline ml-2"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Donation CTA Section */}
        <section id="donation-form" className="py-20 md:py-28 bg-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=2070&auto=format&fit=crop" alt="Beauty background" className="w-full h-full object-cover opacity-10" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="animate-fade-in-up js-animate">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Ubah Hidup Seseorang Hari Ini</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">Scan QRIS di bawah ini untuk berdonasi dengan mudah. Setiap kontribusi akan langsung disalurkan untuk program beasiswa.</p>
              </div>
            </div>
            {/* QRIS Section */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* QRIS Image - Left Side */}
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-2xl p-8 shadow-2xl">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Scan QRIS untuk Donasi</h3>
                    {/* QRIS Image Placeholder */}
                    <div className="bg-gray-100 w-64 h-64 mx-auto rounded-xl flex items-center justify-center mb-6">
                      <div className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={80}
                          height={80}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-qr-code text-gray-400 mx-auto mb-4"
                        >
                          <rect width={5} height={5} x={3} y={3} rx={1} />
                          <rect width={5} height={5} x={16} y={3} rx={1} />
                          <rect width={5} height={5} x={3} y={16} rx={1} />
                          <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
                          <path d="M21 21v.01" />
                          <path d="M12 7v3a2 2 0 0 1-2 2H7" />
                          <path d="M3 12h.01" />
                          <path d="M12 3h.01" />
                          <path d="M12 16v.01" />
                          <path d="M16 12h1" />
                          <path d="M21 12v.01" />
                          <path d="M12 21v-1" />
                        </svg>
                        <p className="text-gray-500 text-sm">QRIS Code</p>
                        <p className="text-gray-400 text-xs">Scan dengan aplikasi e-wallet</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Button Section - Right Side */}
                <div className="lg:w-1/2 text-center lg:text-left">
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold mb-4">Sudah Transfer?</h3>
                    <p className="text-lg opacity-90 mb-6">Kirim bukti transfer Anda melalui WhatsApp untuk konfirmasi donasi</p>
                    <div className="bg-white/20 rounded-lg p-4 mb-6">
                      <div className="flex items-center justify-center lg:justify-start mb-2">
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
                          className="lucide lucide-check-circle mr-2"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22,4 12,14.01 9,11.01" />
                        </svg>
                        <span className="font-semibold">Proses Cepat &amp; Mudah</span>
                      </div>
                      <p className="text-sm opacity-75">Tim kami akan segera memverifikasi donasi Anda dalam 1x24 jam</p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/6281234567890?text=Halo,%20saya%20sudah%20melakukan%20donasi%20untuk%20Program%201000%20Beasiswa%20Beauty%20Artist.%20Berikut%20bukti%20transfernya:"
                    target="_blank"
                    className="inline-flex items-center justify-center bg-green-500 text-white font-bold px-8 py-4 rounded-full hover:bg-green-600 transform hover:scale-105 transition duration-300 text-lg shadow-lg w-full lg:w-auto"
                  >
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
                      className="lucide lucide-message-circle mr-3"
                    >
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                    </svg>
                    Kirim Bukti Donasi
                  </a>
                  <p className="mt-4 text-sm opacity-75">Klik tombol di atas untuk mengirim bukti transfer via WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonial Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up js-animate">
              <div className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">Testimoni Penerima Manfaat</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Mereka yang <span className="text-pink-600">Terbantu</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">Dengarkan cerita dari mereka yang telah merasakan dampak langsung dari donasi Anda.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-pink-50 p-6 rounded-xl animate-fade-in-up js-animate">
                <div className="flex items-center mb-4">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" alt="Testimonial 1" className="w-14 h-14 rounded-full object-cover mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Sari Wulandari</h4>
                    <p className="text-sm text-pink-600">Penerima Beasiswa 2024</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"Terima kasih kepada para donatur yang telah memberikan saya kesempatan kedua. Sekarang saya bisa bekerja di salon ternama dan menghidupi keluarga."</p>
                <div className="flex text-pink-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              </div>
              <div className="bg-pink-50 p-6 rounded-xl animate-fade-in-up js-animate delay-200">
                <div className="flex items-center mb-4">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" alt="Testimonial 2" className="w-14 h-14 rounded-full object-cover mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Maya Sari</h4>
                    <p className="text-sm text-pink-600">Penerima Beasiswa 2024</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"Dari tidak punya keterampilan apapun, sekarang saya bisa membuka salon kecil di rumah. Donasi kalian benar-benar mengubah hidup saya!"</p>
                <div className="flex text-pink-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg xmlns="http://www.w3.svg" width={16} height={16} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
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

export default Donation;
