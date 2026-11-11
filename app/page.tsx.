const skills = ["HTML", "CSS", "JavaScript", "Next.js"];

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="navbar" aria-label="Navigasi utama">
        <a className="brand" href="#home">Rangga<span>.</span></a>
        <div className="nav-links">
          <a href="#tentang">Tentang</a>
          <a href="#keahlian">Keahlian</a>
          <a href="#kontak">Kontak</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <p className="eyebrow">PORTOFOLIO SAYA</p>
        <h1>Halo, saya <span>Rangga.</span></h1>
        <p className="hero-copy">
          Saya sedang belajar membuat website dan mengembangkan ide menjadi
          pengalaman digital yang sederhana dan bermanfaat.
        </p>
        <a className="button" href="#tentang">Kenali saya</a>
      </section>

      <section className="content-section" id="tentang">
        <p className="eyebrow">TENTANG SAYA</p>
        <h2>Senang belajar dan berkarya.</h2>
        <p className="section-copy">
          Ini adalah tempat untuk memperkenalkan diri, menceritakan minat, dan
          menampilkan hal-hal yang sedang saya pelajari. Silakan ubah teks ini
          agar sesuai dengan ceritamu.
        </p>
      </section>

      <section className="content-section" id="keahlian">
        <p className="eyebrow">YANG SAYA PELAJARI</p>
        <h2>Keahlian</h2>
        <div className="skill-list">
          {skills.map((skill) => <span className="skill" key={skill}>{skill}</span>)}
        </div>
      </section>

      <section className="contact-card" id="kontak">
        <p className="eyebrow">MARI TERHUBUNG</p>
        <h2>Punya ide atau ingin menyapa?</h2>
        <p>Tambahkan alamat email atau tautan media sosialmu di sini.</p>
        <a className="button button-light" href="mailto:emailkamu@example.com">Hubungi saya</a>
      </section>

      <footer className="footer">© {new Date().getFullYear()} Rangga. Dibuat dengan Next.js.</footer>
    </main>
  );
}
