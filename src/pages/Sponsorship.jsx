import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Sponsorship() {
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
                <div className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-6">🌟 Program Sponsorship 🌟</div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-600 mb-6 leading-tight">
                  Dukung Pemberdayaan <br />
                  <span className="text-gray-800">Perempuan Lewat</span>
                  <br />
                  <span className="text-pink-600">Sponsorship</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Yayasan Wirausaha Muda Mandiri mengundang Anda untuk menjadi Sponsor Program 1.000 Beasiswa Beauty Artist yang merupakan sebuah inisiatif yang membekali perempuan prasejahtera dengan keterampilan kecantikan berbasis
                  standar industri, membuka peluang kerja, dan menciptakan wirausaha baru.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#sponsor-packages" className="inline-block bg-pink-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-pink-700 transform hover:scale-105 transition duration-300 text-center shadow-lg">
                    Lihat Paket Sponsorship
                  </a>
                  <a href="#about-sponsorship" className="inline-flex items-center justify-center bg-white text-pink-600 font-semibold px-8 py-4 rounded-full border border-pink-200 hover:border-pink-600 transition duration-300 text-center">
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
                      <path d="m9 18 6-6-6-6 1.523-9.11" />
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
        {/* About Sponsorship Section */}
        <section id="about-sponsorship" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071&auto=format&fit=crop" alt="Sponsorship impact" className="rounded-lg shadow-xl" />
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
                          className="lucide lucide-award text-pink-600"
                        >
                          <circle cx={12} cy={8} r={6} />
                          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Sponsor Aktif</p>
                        <p className="text-xl font-bold text-pink-600">25+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="animate-fade-in-up js-animate">
                  <div className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">Manfaat Sponsorship</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Sebagai <span className="text-pink-600">Sponsor</span>, Anda Akan Mendapatkan
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">Bergabunglah dengan perusahaan dan individu terkemuka yang telah mempercayai program ini untuk meningkatkan brand awareness dan kontribusi sosial.</p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-pink-100">
                      <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-megaphone">
                          <path d="M3 11h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Z" />
                          <path d="M11 11h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Z" />
                          <path d="M21 11h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Z" />
                          <path d="M7 21v-4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4" />
                          <path d="M7 8V7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-pink-600 mb-1">Brand Exposure di Berbagai Kanal</h3>
                        <p className="text-sm text-gray-700">Logo dan brand Anda akan ditampilkan di website, media sosial, materi promosi, dan seluruh kegiatan program</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-pink-100">
                      <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-handshake">
                          <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                          <path d="m14 14 2.5 2.5a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519L20.69 18.25a1 1 0 0 1-.973.75H4.283a1 1 0 0 1-.973-.75L2.019 6.019a.5.5 0 0 1 .798-.519l4.277 3.664a1 1 0 0 0 1.516-.294z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-pink-600 mb-1">Keterlibatan Langsung dalam Aksi Sosial</h3>
                        <p className="text-sm text-gray-700">Berpartisipasi aktif dalam kegiatan program dan melihat dampak nyata dari kontribusi Anda</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-pink-100">
                      <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-pink-600 mb-1">Citra Positif Perusahaan/Individu</h3>
                        <p className="text-sm text-gray-700">Membangun reputasi sebagai organisasi yang peduli pada pemberdayaan perempuan dan tanggung jawab sosial</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-600">
                    <p className="text-gray-700 italic">"Bersama, kita bisa mengubah potensi menjadi prestasi, dan mimpi menjadi kenyataan."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Sponsor Packages Section */}
        <section id="sponsor-packages" className="py-20 md:py-28 bg-pink-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up js-animate">
              <div className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">Paket Sponsorship</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Pilih <span className="text-pink-600">Paket Sponsorship</span> Anda
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">Kami menyediakan berbagai paket sponsorship yang dapat disesuaikan dengan kebutuhan dan kemampuan Anda.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Bronze Package */}
              <div className="sponsor-package bg-white rounded-xl p-8 shadow-lg text-center animate-fade-in-up js-animate">
                <div className="w-16 h-16 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
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
                    className="lucide lucide-award text-orange-600"
                  >
                    <circle cx={12} cy={8} r={6} />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Bronze Sponsor</h3>
                <p className="text-4xl font-bold text-orange-600 mb-6">Rp 5 Juta</p>
                <ul className="text-left space-y-3 mb-8">
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
                      className="lucide lucide-check text-pink-500 mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-sm">Logo di website program</span>
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
                      className="lucide lucide-check text-pink-500 mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-sm">Mention di media sosial</span>
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
                      className="lucide lucide-check text-pink-500 mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-sm">Sertifikat apresiasi</span>
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
                      className="lucide lucide-check text-pink-500 mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-sm">Laporan dampak program</span>
                  </li>
                </ul>
                <button className="w-full bg-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-700 transition duration-300">Pilih Bronze</button>
              </div>
              {/* Silver Package */}
              <div className="sponsor-package featured bg-white rounded-xl p-8 shadow-lg text-center animate-fade-in-up js-animate delay-200">
                <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
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
                    className="lucide lucide-award text-gray-600"
                  >
                    <circle cx={12} cy={8} r={6} />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Silver Sponsor</h3>
                <p className="text-4xl font-bold text-gray-600 mb-6">Rp 15 Juta</p>
                <ul className="text-left space-y-3 mb-8">
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
                      className="lucide lucide-check text-pink-500 mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-sm">Semua benefit Bronze</span>
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
                      className="lucide lucide-check text-pink-500 mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-sm">Logo di materi promosi</span>
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
                      className="lucide lucide-check text-pink-500 mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-sm">Undangan acara khusus</span>
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
                      className="lucide lucide-check text-pink-500 mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-sm">Press release mention</span>
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
                      className="lucide lucide-check text-pink-500 mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-sm">Networking opportunity</span>
                  </li>
                </ul>
                <button className="w-full bg-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-700 transition duration-300">Pilih Silver</button>
              </div>
              {/* Gold Package */}
              <div className="sponsor-package bg-white rounded-xl p-8 shadow-lg text-center animate-fade-in-up js-animate delay-400">
                <div className="w-16 h-16 mx-auto mb-6 bg-yellow-100 rounded-full flex items-center justify-center">
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
                    className="lucide lucide-crown text-yellow-600"
                  >
                    <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519L20.69 18.25a1 1 0 0 1-.973.75H4.283a1 1 0 0 1-.973-.75L2.019 6.019a.5.5 0 0 1 .798-.519l4.277 3.664a1 1 0 0 0 1.516-.294z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Gold Sponsor</h3>
                <p className="text-4xl font-bold text-yellow-600 mb-6">Rp 30 Juta</p>
                <ul className="text-left space-y-3 mb-8">
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
                      className="lucide lucide-check text-pink-500 mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-sm">Semua benefit Silver</span>
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
                      className="lucide lucide-check text-pink-500 mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-sm">Logo utama di semua materi</span>
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
                      className="lucide lucide-check text-pink-500 mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-sm">Speaking opportunity</span>
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
                      className="lucide lucide-check text-pink-500 mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-sm">Dedicated social media post</span>
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
                      className="lucide lucide-check text-pink-500 mr-2 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-sm">Custom collaboration opportunity</span>
                  </li>
                </ul>
                <button className="w-full bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-700 transition duration-300">Pilih Gold</button>
              </div>
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">📄 Informasi lengkap mengenai paket sponsorship dapat Anda lihat di proposal kami</p>
              <a href="#" className="inline-flex items-center bg-white text-pink-600 font-semibold px-8 py-3 rounded-full border border-pink-200 hover:border-pink-600 transition duration-300 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text mr-2">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M10 9H8" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                </svg>
                Lihat Paket Sponsorship Lengkap
              </a>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=2070&auto=format&fit=crop" alt="Beauty background" className="w-full h-full object-cover opacity-10" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="animate-fade-in-up js-animate">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Siap Menjadi Sponsor?</h2>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">📝 Jika tertarik menjadi sponsor, silakan isi form pendataan sponsor dan mulai berkontribusi untuk masa depan yang lebih baik.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center bg-pink-500 p-6 rounded-lg">
                    <div className="text-center">
                      <div className="bg-white p-3 rounded-full text-pink-600 mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-megaphone">
                          <path d="M3 11h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Z" />
                          <path d="M11 11h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Z" />
                          <path d="M21 11h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Z" />
                        </svg>
                      </div>
                      <p className="font-semibold">Brand Exposure</p>
                      <p className="text-sm opacity-90">Maksimal</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center bg-pink-500 p-6 rounded-lg">
                    <div className="text-center">
                      <div className="bg-white p-3 rounded-full text-pink-600 mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </div>
                      <p className="font-semibold">Dampak Sosial</p>
                      <p className="text-sm opacity-90">Nyata &amp; Terukur</p>
                    </div>
                  </div>
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
                      <p className="font-semibold">Network</p>
                      <p className="text-sm opacity-90">Berkualitas</p>
                    </div>
                  </div>
                </div>
                <div className="bg-pink-500 p-6 rounded-lg mb-8 max-w-2xl mx-auto">
                  <p className="text-xl font-medium text-center">"Bersama, kita bisa mengubah potensi menjadi prestasi, dan mimpi menjadi kenyataan."</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#" className="inline-block bg-white text-pink-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transform hover:scale-105 transition duration-300 text-center shadow-lg">
                    Isi Form Sponsor &amp; Mulai Berkontribusi
                  </a>
                  <a
                    href="mailto:sponsorship@salonkita.id"
                    className="inline-flex items-center justify-center bg-pink-500 text-white font-bold px-8 py-4 rounded-full border-2 border-white hover:bg-pink-400 transition duration-300 text-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail mr-2">
                      <rect width={20} height={16} x={2} y={4} rx={2} />
                      <path d="m22 7-10 5L2 7" />
                    </svg>
                    Hubungi Tim Sponsorship
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Success Stories Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up js-animate">
              <div className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">Success Stories</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Sponsor <span className="text-pink-600">Terpercaya</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">Bergabunglah dengan perusahaan dan individu terkemuka yang telah mempercayai program ini.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-pink-50 p-6 rounded-xl animate-fade-in-up js-animate">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-4">PT</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">PT Beauty Indonesia</h4>
                    <p className="text-sm text-pink-600">Gold Sponsor 2024</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"Menjadi sponsor program ini memberikan kami kesempatan untuk berkontribusi langsung pada pemberdayaan perempuan Indonesia. Brand exposure yang kami dapatkan juga sangat memuaskan."</p>
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
                  <div className="w-14 h-14 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-4">CV</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">CV Kosmetik Nusantara</h4>
                    <p className="text-sm text-pink-600">Silver Sponsor 2024</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"Program ini sejalan dengan visi kami untuk mendukung industri kecantikan Indonesia. Networking yang kami dapatkan sangat berharga untuk pengembangan bisnis."</p>
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Sponsorship;
