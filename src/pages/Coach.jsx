import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Coach() {
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
                <div className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-6">👩‍🏫 Program Coach 👩‍🏫</div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-600 mb-6 leading-tight">
                  Jadilah Coach, <br />
                  <span className="text-gray-800">Jadilah</span>
                  <br />
                  <span className="text-pink-600">Inspirasi</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Wirausaha Muda Mandiri Foundation mengundang Anda yang memiliki keterampilan di bidang kecantikan untuk berbagi ilmu dan pengalaman sebagai Coach Program 1.000 Beasiswa Beauty Artist. Peran Anda akan membantu perempuan
                  prasejahtera membangun keterampilan profesional, meningkatkan rasa percaya diri, dan membuka peluang mereka untuk bekerja atau berwirausaha.
                </p>
                <div className="bg-pink-50 p-6 rounded-lg mb-8 max-w-2xl mx-auto border-l-4 border-pink-600">
                  <p className="text-lg font-medium text-pink-700 italic">🌟 "Latih satu, bangkitkan banyak. Bersama kita bisa membangun masa depan perempuan Indonesia."</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#coach-form" className="inline-block bg-pink-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-pink-700 transform hover:scale-105 transition duration-300 text-center shadow-lg">
                    📝 Isi Form Pendaftaran Coach
                  </a>
                  <a href="#coach-role" className="inline-flex items-center justify-center bg-white text-pink-600 font-semibold px-8 py-4 rounded-full border border-pink-200 hover:border-pink-600 transition duration-300 text-center">
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
        {/* Coach Role Section */}
        <section id="coach-role" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071&auto=format&fit=crop" alt="Coach training" className="rounded-lg shadow-xl" />
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
                          className="lucide lucide-graduation-cap text-pink-600"
                        >
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Coach Aktif</p>
                        <p className="text-xl font-bold text-pink-600">15+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="animate-fade-in-up js-animate">
                  <div className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">Peran Coach</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Peran <span className="text-pink-600">Coach</span> dalam Program
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Coach berperan sebagai pelatih keterampilan teknis yang memberikan materi pelatihan sesuai bidangnya, membimbing peserta dalam praktik langsung, serta menjadi penghubung antara dunia pelatihan dan kebutuhan industri
                    kecantikan saat ini.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-pink-100">
                      <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open">
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-pink-600 mb-1">Menyampaikan Materi Pelatihan</h3>
                        <p className="text-sm text-gray-700">Memberikan materi pelatihan secara terstruktur dan aplikatif sesuai dengan bidang keahlian</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-pink-100">
                      <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx={9} cy={7} r={4} />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-pink-600 mb-1">Membimbing Praktik Peserta</h3>
                        <p className="text-sm text-gray-700">Memberikan bimbingan praktik baik secara individu maupun kelompok untuk memastikan pemahaman yang optimal</p>
                      </div>
                    </div>
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
                          className="lucide lucide-clipboard-check"
                        >
                          <rect width={8} height={4} x={8} y={2} rx={1} ry={1} />
                          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                          <path d="m9 14 2 2 4-4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-pink-600 mb-1">Memberikan Evaluasi dan Umpan Balik</h3>
                        <p className="text-sm text-gray-700">Melakukan evaluasi berkala dan memberikan umpan balik konstruktif untuk perkembangan peserta</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-pink-100">
                      <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb">
                          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                          <path d="M9 18h6" />
                          <path d="M10 22h4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-pink-600 mb-1">Berbagi Pengalaman dan Wawasan</h3>
                        <p className="text-sm text-gray-700">Membagikan pengalaman praktis dan wawasan terkait industri kecantikan untuk memperkaya pembelajaran</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-pink-100">
                      <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-pink-600 mb-1">Mendukung Pembelajaran Inklusif</h3>
                        <p className="text-sm text-gray-700">Menciptakan lingkungan pembelajaran yang inklusif, ramah, dan memberdayakan untuk semua peserta</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Criteria Section */}
        <section className="py-20 md:py-28 bg-pink-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up js-animate">
              <div className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">Kriteria Calon Coach</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Siapa yang Bisa <span className="text-pink-600">Menjadi Coach?</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">Program ini membuka peluang bagi individu yang memiliki pengalaman dan keahlian di bidang kecantikan untuk berkontribusi sebagai coach/trainer.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Kriteria Umum */}
              <div className="bg-white rounded-xl p-8 shadow-lg animate-fade-in-up js-animate">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
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
                      className="lucide lucide-user-check text-pink-600"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx={9} cy={7} r={4} />
                      <polyline points="16,11 18,13 22,9" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Kriteria Umum</h3>
                </div>
                <div className="space-y-4">
                  <div className="criteria-card flex items-start p-4 bg-pink-50 rounded-lg">
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
                      className="lucide lucide-check text-pink-500 mr-3 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-800">Pengalaman Profesional Minimal 2 Tahun</p>
                      <p className="text-sm text-gray-600 mt-1">Di bidang kecantikan yang relevan dengan Beauty Specialist, Beauty Administration, atau Beauty Consultant</p>
                    </div>
                  </div>
                  <div className="criteria-card flex items-start p-4 bg-pink-50 rounded-lg">
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
                      className="lucide lucide-check text-pink-500 mr-3 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-800">Praktisi Berpengalaman</p>
                      <p className="text-sm text-gray-600 mt-1">Terbuka untuk praktisi kecantikan, pemilik salon, instruktur, dan profesional industri terkait</p>
                    </div>
                  </div>
                  <div className="criteria-card flex items-start p-4 bg-pink-50 rounded-lg">
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
                      className="lucide lucide-check text-pink-500 mr-3 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-800">Kemampuan Komunikasi</p>
                      <p className="text-sm text-gray-600 mt-1">Mampu menyampaikan materi secara komunikatif, sistematis, dan aplikatif</p>
                    </div>
                  </div>
                  <div className="criteria-card flex items-start p-4 bg-pink-50 rounded-lg">
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
                      className="lucide lucide-check text-pink-500 mr-3 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-800">Komitmen Waktu</p>
                      <p className="text-sm text-gray-600 mt-1">Memiliki komitmen waktu dan kesiapan untuk mengikuti koordinasi pelatihan</p>
                    </div>
                  </div>
                  <div className="criteria-card flex items-start p-4 bg-pink-50 rounded-lg">
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
                      className="lucide lucide-check text-pink-500 mr-3 mt-1 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-800">Bersedia Terlibat Sukarela</p>
                      <p className="text-sm text-gray-600 mt-1">Berpartisipasi secara sukarela (non-honorarium) untuk tujuan sosial</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Ketentuan Tambahan */}
              <div className="bg-white rounded-xl p-8 shadow-lg animate-fade-in-up js-animate delay-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
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
                      className="lucide lucide-clipboard-list text-pink-600"
                    >
                      <rect width={8} height={4} x={8} y={2} rx={1} ry={1} />
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                      <path d="M12 11h4" />
                      <path d="M12 16h4" />
                      <path d="M8 11h.01" />
                      <path d="M8 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Ketentuan Tambahan</h3>
                </div>
                <div className="space-y-4">
                  <div className="criteria-card flex items-start p-4 bg-pink-50 rounded-lg">
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
                      className="lucide lucide-info text-pink-500 mr-3 mt-1 flex-shrink-0"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-800">Spesialisasi Bidang</p>
                      <p className="text-sm text-gray-600 mt-1">Setiap coach hanya diperkenankan memberikan pelatihan pada satu bidang sesuai kompetensi utamanya</p>
                    </div>
                  </div>
                  <div className="criteria-card flex items-start p-4 bg-pink-50 rounded-lg">
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
                      className="lucide lucide-info text-pink-500 mr-3 mt-1 flex-shrink-0"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-800">Maksimal Sesi Pelatihan</p>
                      <p className="text-sm text-gray-600 mt-1">Seorang coach dapat melatih maksimal dua kali sesi pelatihan selama periode program (online/offline)</p>
                    </div>
                  </div>
                  <div className="criteria-card flex items-start p-4 bg-pink-50 rounded-lg">
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
                      className="lucide lucide-info text-pink-500 mr-3 mt-1 flex-shrink-0"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-800">Penjadwalan Fleksibel</p>
                      <p className="text-sm text-gray-600 mt-1">Pelibatan coach dalam jadwal pelatihan disesuaikan dengan kebutuhan, kurikulum, dan kesiapan peserta</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-gradient-to-r from-pink-100 to-pink-50 rounded-lg border-l-4 border-pink-600">
                  <div className="flex items-center mb-2">
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
                      className="lucide lucide-star text-pink-600 mr-2"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <h4 className="font-semibold text-pink-700">Bidang Pelatihan Tersedia</h4>
                  </div>
                  <ul className="text-sm text-pink-700 space-y-1">
                    <li>• Beauty Specialist (Therapist)</li>
                    <li>• Beauty Administration</li>
                    <li>• Beauty Consultant</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up js-animate">
              <div className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">Manfaat bagi Coach</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Manfaat yang <span className="text-pink-600">Anda Peroleh</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">Bergabung sebagai coach memberikan berbagai manfaat berharga untuk pengembangan karir dan kontribusi sosial Anda.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="coach-benefit bg-white rounded-xl p-6 shadow-lg border border-pink-100 animate-fade-in-up js-animate">
                <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center">
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
                    className="lucide lucide-graduation-cap text-pink-600"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Pengalaman Berharga</h3>
                <p className="text-gray-700 text-center">Pengalaman berharga dalam berbagi ilmu dan membentuk generasi praktisi dunia kecantikan baru</p>
              </div>
              <div className="coach-benefit bg-white rounded-xl p-6 shadow-lg border border-pink-100 animate-fade-in-up js-animate delay-100">
                <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center">
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
                    className="lucide lucide-award text-pink-600"
                  >
                    <circle cx={12} cy={8} r={6} />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Sertifikat Apresiasi</h3>
                <p className="text-gray-700 text-center">Sertifikat apresiasi sebagai bentuk penghargaan resmi atas kontribusi Anda dalam program</p>
              </div>
              <div className="coach-benefit bg-white rounded-xl p-6 shadow-lg border border-pink-100 animate-fade-in-up js-animate delay-200">
                <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center">
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
                    className="lucide lucide-megaphone text-pink-600"
                  >
                    <path d="M3 11h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Z" />
                    <path d="M11 11h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1Z" />
                    <path d="M21 11h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Publikasi Profil</h3>
                <p className="text-gray-700 text-center">Publikasi profil coach (dengan izin) di media sosial &amp; publikasi program untuk meningkatkan visibilitas</p>
              </div>
              <div className="coach-benefit bg-white rounded-xl p-6 shadow-lg border border-pink-100 animate-fade-in-up js-animate delay-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center">
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
                    className="lucide lucide-share-2 text-pink-600"
                  >
                    <circle cx={18} cy={5} r={3} />
                    <circle cx={6} cy={12} r={3} />
                    <circle cx={18} cy={19} r={3} />
                    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Eksposur Media</h3>
                <p className="text-gray-700 text-center">Promosi salon gratis di semua platform media sosial yayasan selama 1 tahun penuh</p>
              </div>
              <div className="coach-benefit bg-white rounded-xl p-6 shadow-lg border border-pink-100 animate-fade-in-up js-animate delay-400">
                <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center">
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
                    className="lucide lucide-smartphone text-pink-600"
                  >
                    <rect width={14} height={20} x={5} y={2} rx={2} ry={2} />
                    <path d="M12 18h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Free Akses POS SalonKita</h3>
                <p className="text-gray-700 text-center">Free akses POS SalonKita + Marketplace selama 1 tahun senilai 4 juta rupiah</p>
              </div>
              <div className="coach-benefit bg-white rounded-xl p-6 shadow-lg border border-pink-100 animate-fade-in-up js-animate delay-500">
                <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center">
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
                    className="lucide lucide-map-pin text-pink-600"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0Z" />
                    <circle cx={12} cy={10} r={3} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Free Akomodasi Yogyakarta</h3>
                <p className="text-gray-700 text-center">Free akomodasi dan experience di Yogyakarta untuk kegiatan program</p>
              </div>
            </div>
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-pink-50 to-white p-8 rounded-xl border border-pink-200">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mr-4">
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
                  <h3 className="text-2xl font-bold text-gray-800">Relasi dan Jaringan</h3>
                </div>
                <p className="text-lg text-gray-700 text-center">Membangun relasi dan jaringan dengan mitra industri, mentor, dan pelatih lainnya untuk pengembangan karir dan bisnis Anda</p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section id="coach-form" className="py-20 md:py-28 bg-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=2070&auto=format&fit=crop" alt="Beauty background" className="w-full h-full object-cover opacity-10" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="animate-fade-in-up js-animate">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Siap Menjadi Coach?</h2>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">📝 Tertarik menjadi coach? Isi Form Pendaftaran Coach dan mulai perjalanan menginspirasi hari ini!</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center bg-pink-500 p-6 rounded-lg">
                    <div className="text-center">
                      <div className="bg-white p-3 rounded-full text-pink-600 mx-auto mb-3 w-12 h-12 flex items-center justify-center">
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
                          className="lucide lucide-graduation-cap"
                        >
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                        </svg>
                      </div>
                      <p className="font-semibold">Berbagi Ilmu</p>
                      <p className="text-sm opacity-90">Pengalaman Berharga</p>
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
                      <p className="text-sm opacity-90">Memberdayakan Perempuan</p>
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
                      <p className="text-sm opacity-90">Relasi Industri</p>
                    </div>
                  </div>
                </div>
                <div className="bg-pink-500 p-6 rounded-lg mb-8 max-w-2xl mx-auto">
                  <p className="text-xl font-medium text-center">"Latih satu, bangkitkan banyak. Bersama kita bisa membangun masa depan perempuan Indonesia."</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#" className="inline-block bg-white text-pink-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transform hover:scale-105 transition duration-300 text-center shadow-lg">
                    📝 Isi Form Pendaftaran Coach
                  </a>
                  <a href="mailto:coach@salonkita.id" className="inline-flex items-center justify-center bg-pink-500 text-white font-bold px-8 py-4 rounded-full border-2 border-white hover:bg-pink-400 transition duration-300 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail mr-2">
                      <rect width={20} height={16} x={2} y={4} rx={2} />
                      <path d="m22 7-10 5L2 7" />
                    </svg>
                    Hubungi Tim Coach
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

export default Coach;
