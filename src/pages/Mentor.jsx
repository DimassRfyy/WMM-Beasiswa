import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Mentor() {
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
                <div className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-6">🌟 Program Mentor 🌟</div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-600 mb-6 leading-tight">
                  Jadi Mentor, <br />
                  <span className="text-gray-800">Bimbing Perjalanan</span>
                  <br />
                  <span className="text-pink-600">Menuju Sukses</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Wirausaha Muda Mandiri Foundation membuka peluang bagi siapa saja yang memiliki kepedulian dan waktu untuk berkontribusi sebagai Mentor Program 1.000 Beasiswa Beauty Artist. Tidak harus seorang psikolog profesional, namun
                  memiliki empati, komunikasi yang baik, dan komitmen untuk mendampingi secara konsisten sangat diutamakan.
                </p>
                <div className="bg-pink-50 p-6 rounded-lg mb-8 max-w-2xl mx-auto border-l-4 border-pink-600">
                  <p className="text-lg font-medium text-pink-700 italic">💬 "Satu sesi mentoring bisa membuka seribu pintu perubahan. Yuk, bantu mereka melangkah lebih jauh!"</p>
                </div>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">Sebagai mentor, Anda tidak hanya memberikan pengetahuan, tetapi juga menjadi pendamping yang menguatkan langkah para peserta menuju kemandirian.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#mentor-form" className="inline-block bg-pink-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-pink-700 transform hover:scale-105 transition duration-300 text-center shadow-lg">
                    📝 Isi Form Pendaftaran Mentor
                  </a>
                  <a href="#mentor-role" className="inline-flex items-center justify-center bg-white text-pink-600 font-semibold px-8 py-4 rounded-full border border-pink-200 hover:border-pink-600 transition duration-300 text-center">
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
        {/* Mentor Role Section */}
        <section id="mentor-role" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2088&auto=format&fit=crop" alt="Mentor guidance" className="rounded-lg shadow-xl" />
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
                        <p className="text-sm text-gray-500">Mentor Aktif</p>
                        <p className="text-xl font-bold text-pink-600">20+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="animate-fade-in-up js-animate">
                  <div className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">Peran Mentor</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Peran <span className="text-pink-600">Mentor</span> dalam Program
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Mentor berperan sebagai pendamping non-teknis yang mendukung peserta dari sisi psikologis dan emosional selama proses pelatihan berlangsung. Tugas utamanya adalah mendengarkan, memotivasi, dan membimbing peserta untuk
                    tetap semangat, percaya diri, dan mampu menghadapi tantangan pribadi.
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
                          className="lucide lucide-heart-handshake"
                        >
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                          <path d="M12 5L8 21l4-7 4 7-4-16" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-pink-600 mb-1">Memberikan Dukungan Motivasional</h3>
                        <p className="text-sm text-gray-700">Memberikan dukungan motivasional secara berkala untuk menjaga semangat dan motivasi peserta</p>
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
                          className="lucide lucide-message-circle"
                        >
                          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-pink-600 mb-1">Menjadi Tempat Cerita yang Aman</h3>
                        <p className="text-sm text-gray-700">Menjadi tempat cerita yang aman bagi peserta untuk berbagi pengalaman, kekhawatiran, dan harapan</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-pink-100">
                      <div className="bg-pink-100 p-2 rounded-full text-pink-600 mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target">
                          <circle cx={12} cy={12} r={10} />
                          <circle cx={12} cy={12} r={6} />
                          <circle cx={12} cy={12} r={2} />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-pink-600 mb-1">Membantu Menetapkan Tujuan Pribadi</h3>
                        <p className="text-sm text-gray-700">Membantu peserta menetapkan tujuan pribadi dan merayakan progres mereka selama program berlangsung</p>
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
                        <h3 className="font-semibold text-pink-600 mb-1">Memberikan Perspektif dan Dorongan Positif</h3>
                        <p className="text-sm text-gray-700">Memberikan perspektif dan dorongan positif dalam menghadapi kendala pribadi atau sosial yang dihadapi peserta</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-600">
                    <p className="text-gray-700 italic">"Sebagai mentor, Anda menjadi cahaya yang menerangi jalan mereka menuju kemandirian dan kesuksesan."</p>
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
              <div className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">Kriteria Calon Mentor</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Siapa yang Bisa <span className="text-pink-600">Menjadi Mentor?</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Kami membuka kesempatan kepada siapa saja yang memiliki kepedulian dan waktu untuk berkontribusi. Tidak harus seorang psikolog profesional, namun memiliki empati, komunikasi yang baik, dan komitmen untuk mendampingi secara
                konsisten sangat diutamakan.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
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
                      className="lucide lucide-heart text-pink-600"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Kriteria Utama</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <p className="font-medium text-gray-800">Terbuka untuk Semua Latar Belakang Profesi</p>
                      <p className="text-sm text-gray-600 mt-1">Tidak ada batasan profesi khusus, semua orang dengan kepedulian dapat berkontribusi</p>
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
                      <p className="font-medium text-gray-800">Memiliki Empati, Kesabaran, dan Kemauan Mendengarkan</p>
                      <p className="text-sm text-gray-600 mt-1">Kemampuan untuk memahami dan mendengarkan dengan penuh perhatian</p>
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
                      <p className="font-medium text-gray-800">Mampu Meluangkan Waktu Minimal 1 Kali dalam 2 Minggu</p>
                      <p className="text-sm text-gray-600 mt-1">Komitmen waktu yang konsisten selama program berlangsung</p>
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
                      <p className="font-medium text-gray-800">Bersedia Terlibat Secara Sukarela</p>
                      <p className="text-sm text-gray-600 mt-1">Berpartisipasi tanpa honorarium untuk tujuan sosial yang mulia</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-gradient-to-r from-pink-100 to-pink-50 rounded-lg border-l-4 border-pink-600">
                  <div className="flex items-center mb-3">
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
                      className="lucide lucide-info text-pink-600 mr-3"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                    <h4 className="font-semibold text-pink-700 text-lg">Yang Terpenting</h4>
                  </div>
                  <p className="text-pink-700">
                    Tidak perlu menjadi psikolog profesional. Yang dibutuhkan adalah <strong>hati yang tulus</strong>, <strong>telinga yang mau mendengar</strong>, dan <strong>komitmen untuk mendampingi</strong> perjalanan mereka menuju
                    kemandirian.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up js-animate">
              <div className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">Manfaat bagi Mentor</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Manfaat yang <span className="text-pink-600">Anda Peroleh</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">Bergabung sebagai mentor memberikan berbagai manfaat berharga untuk pengembangan diri dan kontribusi sosial Anda.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="mentor-benefit bg-white rounded-xl p-6 shadow-lg border border-pink-100 animate-fade-in-up js-animate">
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
                    className="lucide lucide-heart text-pink-600"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Pengalaman Berharga</h3>
                <p className="text-gray-700 text-center">Pengalaman berharga dalam mendampingi dan memotivasi generasi muda menuju kemandirian</p>
              </div>
              <div className="mentor-benefit bg-white rounded-xl p-6 shadow-lg border border-pink-100 animate-fade-in-up js-animate delay-100">
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
                    <path d="M11 11h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Z" />
                    <path d="M21 11h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Eksposur Media</h3>
                <p className="text-gray-700 text-center">Promosi salon gratis di semua platform media sosial yayasan selama 1 tahun penuh (Bagi Pemilik Salon)</p>
              </div>
              <div className="mentor-benefit bg-white rounded-xl p-6 shadow-lg border border-pink-100 animate-fade-in-up js-animate delay-200">
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
                <p className="text-gray-700 text-center">Free akses POS SalonKita + Marketplace selama 1 tahun senilai 4 juta rupiah (Bagi Pemilik Salon)</p>
              </div>
              <div className="mentor-benefit bg-white rounded-xl p-6 shadow-lg border border-pink-100 animate-fade-in-up js-animate delay-300">
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
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx={12} cy={10} r={3} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Free Akomodasi Yogyakarta</h3>
                <p className="text-gray-700 text-center">Free akomodasi dan experience di Yogyakarta untuk kegiatan program</p>
              </div>
              <div className="mentor-benefit bg-white rounded-xl p-6 shadow-lg border border-pink-100 animate-fade-in-up js-animate delay-400">
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
              <div className="mentor-benefit bg-white rounded-xl p-6 shadow-lg border border-pink-100 animate-fade-in-up js-animate delay-500">
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
                    className="lucide lucide-users text-pink-600"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx={9} cy={7} r={4} />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Relasi dan Jaringan</h3>
                <p className="text-gray-700 text-center">Relasi dan jaringan dengan mentor lain dan tim program untuk pengembangan diri</p>
              </div>
            </div>
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-pink-50 to-white p-8 rounded-xl border border-pink-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                      className="lucide lucide-sparkles text-pink-600"
                    >
                      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z" />
                      <path d="M20 3v4" />
                      <path d="M22 5h-4" />
                      <path d="M4 17v2" />
                      <path d="M5 18H3" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Dampak yang Tak Ternilai</h3>
                  <p className="text-lg text-gray-700">
                    Menjadi mentor bukan hanya tentang memberi, tetapi juga tentang menerima. Anda akan merasakan kepuasan batin yang luar biasa ketika melihat peserta tumbuh dan berkembang berkat dukungan Anda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section id="mentor-form" className="py-20 md:py-28 bg-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=2070&auto=format&fit=crop" alt="Beauty background" className="w-full h-full object-cover opacity-10" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="animate-fade-in-up js-animate">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Siap Menjadi Mentor?</h2>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">📝 Tertarik menjadi mentor? Isi Form Pendaftaran Mentor dan mulailah memberi dampak hari ini!</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center bg-pink-500 p-6 rounded-lg">
                    <div className="text-center">
                      <div className="bg-white p-3 rounded-full text-pink-600 mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </div>
                      <p className="font-semibold">Dukungan Emosional</p>
                      <p className="text-sm opacity-90">Pendampingan Psikologis</p>
                    </div>
                  </div>
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
                          className="lucide lucide-message-circle"
                        >
                          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                        </svg>
                      </div>
                      <p className="font-semibold">Mendengarkan</p>
                      <p className="text-sm opacity-90">Tempat Cerita Aman</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center bg-pink-500 p-6 rounded-lg">
                    <div className="text-center">
                      <div className="bg-white p-3 rounded-full text-pink-600 mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target">
                          <circle cx={12} cy={12} r={10} />
                          <circle cx={12} cy={12} r={6} />
                          <circle cx={12} cy={12} r={2} />
                        </svg>
                      </div>
                      <p className="font-semibold">Motivasi</p>
                      <p className="text-sm opacity-90">Mencapai Tujuan</p>
                    </div>
                  </div>
                </div>
                <div className="bg-pink-500 p-6 rounded-lg mb-8 max-w-2xl mx-auto">
                  <p className="text-xl font-medium text-center">"Satu sesi mentoring bisa membuka seribu pintu perubahan. Yuk, bantu mereka melangkah lebih jauh!"</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#" className="inline-block bg-white text-pink-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transform hover:scale-105 transition duration-300 text-center shadow-lg">
                    📝 Isi Form Pendaftaran Mentor
                  </a>
                  <a href="mailto:mentor@salonkita.id" className="inline-flex items-center justify-center bg-pink-500 text-white font-bold px-8 py-4 rounded-full border-2 border-white hover:bg-pink-400 transition duration-300 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail mr-2">
                      <rect width={20} height={16} x={2} y={4} rx={2} />
                      <path d="m22 7-10 5L2 7" />
                    </svg>
                    Hubungi Tim Mentor
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

export default Mentor;
