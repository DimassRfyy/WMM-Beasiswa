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
                <div className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-6">🌟 Sponsorship Program 🌟</div>
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
        <section id="about-sponsorship" className="py-20 md:py-28 bg-white lg:px-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="animate-fade-in-up js-animate">
                  <div className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">Manfaat Sponsorship</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Sebagai <span className="text-pink-600">Sponsor</span>, Anda Akan Mendapatkan
                  </h2>
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
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative">
                  <img src="assets/images/thumbnails/sponsorship.jpg" alt="Sponsorship impact" className="rounded-lg shadow-xl" />
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
            </div>
          </div>
        </section>

        {/* Sponsor Packages Section - Updated */}
        <section id="sponsor-packages" className="py-20 md:py-28 bg-pink-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
              {/* Left side - Quote */}
              <div className="md:w-1/2 text-center md:text-left">
                <div className="animate-fade-in-up js-animate">
                  <div className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-6">💫 Mari Bersponsor</div>
                  <div className="relative">
                    <blockquote className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-relaxed">"Bersama, kita bisa mengubah potensi menjadi prestasi, dan mimpi menjadi kenyataan."</blockquote>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-center md:justify-start">
                      <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">Wujudkan mimpi 1000 perempuan Indonesia</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">Bangun citra positif perusahaan Anda</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up">
                          <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
                          <polyline points="16,7 22,7 22,13" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">Dapatkan brand exposure maksimal</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right side - Sponsor Package Information */}
              <div className="md:w-1/2 text-center">
                <div className="animate-fade-in-up js-animate delay-200">
                  <div className="bg-white p-8 rounded-2xl shadow-xl border border-pink-100">
                    <div className="mb-6">
                      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={40}
                          height={40}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-award text-white"
                        >
                          <circle cx={12} cy={8} r={6} />
                          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Paket Sponsorship</h3>
                    </div>
                    <div className="text-left mb-8">
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        Tersedia <strong className="text-pink-600">Sponsor Spesial</strong> (kontribusi dana) dan <strong className="text-pink-600">In-Kind Sponsor</strong> (dukungan barang/jasa). Pilih sesuai kebutuhan Anda dan dapatkan
                        manfaat eksklusif.
                      </p>
                    </div>
                    <a href="#" className="inline-flex items-center bg-pink-600 text-white font-bold px-8 py-4 rounded-full hover:bg-pink-700 transform hover:scale-105 transition duration-300 shadow-lg w-full justify-center">
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
                        className="lucide lucide-file-text mr-2"
                      >
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        <path d="M10 9H8" />
                        <path d="M16 13H8" />
                        <path d="M16 17H8" />
                      </svg>
                      Lihat Sponsorship Lengkap
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Updated Layout */}
        <section className="py-20 md:py-28 bg-white relative overflow-hidden lg:px-16 px-2">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
              {/* Left side - Content */}
              <div className="md:w-2/3">
                <div className="animate-fade-in-up js-animate">
                  <div className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-6">🚀 Mulai Sekarang</div>
                  <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">Siap Menjadi Sponsor?</h2>
                  <p className="text-lg md:text-xl text-gray-700 mb-8">Jika tertarik menjadi sponsor, silakan isi form pendataan sponsor dan mulai berkontribusi untuk masa depan yang lebih baik.</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="flex flex-col items-center bg-pink-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                      <div className="bg-pink-600 p-4 rounded-full text-white mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-megaphone">
                          <path d="M3 11h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Z" />
                          <path d="M11 11h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Z" />
                          <path d="M21 11h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Z" />
                        </svg>
                      </div>
                      <p className="font-semibold text-gray-800 text-center">Brand Exposure Maksimal</p>
                      <p className="text-sm text-gray-600 text-center">Logo di semua materi promosi dan kegiatan</p>
                    </div>
                    <div className="flex flex-col items-center bg-pink-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                      <div className="bg-pink-600 p-4 rounded-full text-white mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </div>
                      <p className="font-semibold text-gray-800 text-center">Dampak Sosial Nyata</p>
                      <p className="text-sm text-gray-600 text-center">Berkontribusi langsung pada pemberdayaan perempuan</p>
                    </div>
                    <div className="flex flex-col items-center bg-pink-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                      <div className="bg-pink-600 p-4 rounded-full text-white mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx={9} cy={7} r={4} />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <p className="font-semibold text-gray-800 text-center">Network Berkualitas</p>
                      <p className="text-sm text-gray-600 text-center">Kesempatan networking dengan sponsor lainnya</p>
                    </div>
                  </div>
                </div>
                <div className="animate-fade-in-up js-animate delay-200">
                  <div className="flex flex-col md:flex-row gap-4 mt-2">
                    <a
                      href="https://forms.gle/wVpwXTw3FuBu73aM8"
                      className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold px-8 py-4 rounded-full hover:bg-pink-700 transform hover:scale-105 transition duration-300 text-center shadow-lg w-full md:w-auto"
                    >
                      Isi Form Sponsor &amp; Mulai Berkontribusi
                    </a>
                    <a
                      href="mailto:sponsorship@salonkita.id"
                      className="inline-flex items-center justify-center bg-white text-pink-600 font-bold px-8 py-4 rounded-full border-2 border-pink-600 hover:bg-pink-50 transition duration-300 text-center w-full md:w-auto"
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
              {/* Right side - Illustration */}
              <div className="md:w-1/3 justify-center items-center hidden lg:block">
                <div className="relative w-full h-72 md:h-96 flex justify-center items-center">
                  <div className="bg-gradient-to-br from-pink-100 to-pink-300 rounded-2xl shadow-xl w-full h-72 md:h-96 flex flex-col justify-center items-center p-8">
                    <div className="bg-white p-4 rounded-full shadow-md mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={40}
                        height={40}
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
                    <p className="text-sm text-gray-500">Sponsor Aktif</p>
                    <p className="text-2xl font-bold text-pink-600">25+</p>
                    <div className="mt-6 text-center">
                      <span className="inline-block bg-pink-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow">Bergabung Sekarang!</span>
                    </div>
                  </div>
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
