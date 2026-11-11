export default function Home() {
  return (
    <main className="container">
      <header className="header">
        <a className="brand" href="/">Rangga</a>
        <a href="#kontak">Kontak</a>
      </header>

      <section className="hero">
        <p className="eyebrow">PORTOFOLIO SISWA TKJ</p>
        <h1>Halo, saya Rangga.</h1>
        <p className="intro">
          Saya sedang belajar jaringan komputer dan pengembangan website.
          Ini adalah tempat untuk memperkenalkan diri dan menampilkan proyek saya.
        </p>
        <a className="button" href="#proyek">Lihat proyek</a>
      </section>

      <section id="proyek" className="section">
        <h2>Proyek</h2>
        <article className="card">
          <h3>Proyek pertama</h3>
          <p>Ganti bagian ini dengan deskripsi proyek yang benar-benar kamu buat.</p>
        </article>
      </section>

      <section id="kontak" className="section">
        <h2>Kontak</h2>
        <p>
          Email: <a href="mailto:emailkamu@example.com">emailkamu@example.com</a>
        </p>
      </section>

      <footer className="footer">© {new Date().getFullYear()} Rangga</footer>
    </main>
  );
}
