import React from 'react';
import { ArrowUpRight, Heart, Sparkles, Mail, Phone, Instagram, Facebook, MessageCircle, MapPin } from 'lucide-react';

import tileKlasyczna from './images/tile-klasyczna.jpg';
import tileBoho from './images/tile-boho.jpg';
import tileRomantyczna from './images/tile-romantyczna.jpg';
import tileMinimalistyczna from './images/tile-minimalistyczna.jpg';


const config = {
  studio: {
    nazwa: 'Strona Ślubna',
    cytat: 'Wiele styli. Jedna miłość.',
  },


  kontakt: {
    naglowek: 'Skontaktuj się ze mną',
    podtytul: 'Porozmawiajmy o Waszej wymarzonej stronie ślubnej',
    opis: 'Odpowiadam zwykle w ciągu 24 godzin. Chętnie pomogę dobrać wariant idealny dla Was i odpowiem na wszystkie pytania.',
    email: 'kontakt.strona.slubna@gmail.com',
    tel: '+48 511 779 350',
    telDisplay: '511 779 350',
    tallyFormId: '',
  },

  sites: [
    {
      id: 'klasyczna',
      title: 'Klasyczna Elegancja',
      subtitle: 'Tradycyjnie • Dostojnie • Ponadczasowo',
      desc: 'Złote akcenty, kremowe tła, serifowa typografia. Dla par ceniących klasykę i elegancję.',
      url: 'https://strona1-wheat.vercel.app/',
      colors: ['#f5efe3', '#c8a96a', '#2a2a28'],
      font: "'Cormorant Garamond', serif",
      preview: tileKlasyczna,
      tag: 'Bestseller',
    },
    {
      id: 'boho',
      title: 'Boho Rustykalny',
      subtitle: 'Naturalnie • Swobodnie • Ciepło',
      desc: 'Terakota, szałwia, suszone kwiaty. Dla par zakochanych w naturze i swobodzie.',
      url: 'https://strona2-peach.vercel.app/',
      colors: ['#d4a373', '#8a9a5b', '#fefae0'],
      font: "'Great Vibes', cursive",
      preview: tileBoho,
      tag: 'Nowość',
    },
    {
      id: 'romantyczna',
      title: 'Romantyczny Pastel',
      subtitle: 'Delikatnie • Słodko • Kwiatowo',
      desc: 'Róż, lawenda, pastelowe akwarele. Dla par zakochanych w romantyzmie.',
      url: 'https://strona3-gilt.vercel.app/',
      colors: ['#fce4ec', '#e1bee7', '#ffd5c2'],
      font: "'Playfair Display', serif",
      preview: tileRomantyczna,
      tag: 'Hit',
    },
    {
      id: 'minimalistyczna',
      title: 'Minimalistyczna',
      subtitle: 'Czysto • Nowocześnie • Odważnie',
      desc: 'Czerń, biel, duża typografia. Dla par lubiących nowoczesny, galeryjny styl.',
      url: 'https://strona4.vercel.app/',
      colors: ['#ffffff', '#000000', '#eeeeee'],
      font: "'DM Serif Display', serif",
      preview: tileMinimalistyczna,
      tag: 'Premium',
    },
  ],
  oferta: [
    ['Responsywność', 'Układ i wielkość elementów dostosowują się do każdego ekranu – od smartfona po monitor.'],
    ['Wasza własna domena', 'Profesjonalny adres www z Waszymi imionami.'],
    ['Odliczanie', 'Licznik dni, godzin, minut i sekund do ślubu.'],
    ['Zaproszenie & Hero', 'Eleganckie powitanie z imionami, datą i miejscem.'],
    ['Odliczanie', 'Licznik dni, godzin, minut i sekund do ślubu.'],
    ['Plan dnia', 'Harmonogram ceremonii i przyjęcia w formie osi czasu.'],
    ['Mapy Google', 'Osadzone mapy kościoła i sali weselnej.'],
    ['RSVP (Tally)', 'Formularz potwierdzenia obecności – gotowy do podpięcia.'],
    ['Powiadomienia email', 'Automatyczne wiadomości email z potwierdzeniem obecności.'],
    ['FAQ', 'Najczęściej zadawane pytania.'],
    ['Kontakt', 'Dane kontaktowe Pary Młodej.'],
    ['Hotele', 'Rekomendowane hotele w okolicach sali weselnej.'],
    ['Masz inny pomysł?', 'Napisz do mnie – chętnie przygotuję indywidualną wycenę!'],
  ],
};

export default function App() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#0f0e0d', color: '#ece8e1', minHeight: '100vh' }}>
      <header style={{ padding: '28px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Heart size={18} style={{ color: '#c8a96a' }} />
          <span style={{ letterSpacing: 6, fontSize: 13, textTransform: 'uppercase' }}>{config.studio.nazwa}</span>
        </div>
        <nav className="pf-nav" style={{ display: 'flex', gap: 32, fontSize: 13, letterSpacing: 2, textTransform: 'uppercase' }}>
          <a href="#warianty" style={{ color: '#ece8e1', textDecoration: 'none' }}>Warianty</a>
          <a href="#oferta" style={{ color: '#ece8e1', textDecoration: 'none' }}>Oferta</a>
          <a href="#kontakt" style={{ color: '#ece8e1', textDecoration: 'none' }}>Kontakt</a>
        </nav>
      </header>

      <section style={{ padding: '90px 48px 60px', textAlign: 'center', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', gap: 8, alignItems: 'center', fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', color: '#c8a96a', marginBottom: 24 }}>
          <Sparkles size={14} /> Portfolio stron ślubnych
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 400, lineHeight: 1.05, margin: 0 }}>
          Wiele styli. <span style={{ fontStyle: 'italic', color: '#c8a96a' }}>Jedna miłość.</span>
        </h1>
        <p style={{ marginTop: 24, fontSize: 17, color: '#b7b0a3', maxWidth: 640, margin: '24px auto 0', lineHeight: 1.7 }}>
          Personalizowane strony ślubne – każda w innym, niepowtarzalnym stylu. Wybierz ten, który najlepiej opowiada Waszą historię.
        </p>
      </section>

      <section id="warianty" style={{ padding: '40px 48px 100px', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 28 }}>
          {config.sites.map((s, idx) => (
            <a key={s.id} href={s.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <article className="portfolio-tile" style={{ background: '#1a1816', border: '1px solid #2a2724', borderRadius: 18, overflow: 'hidden', position: 'relative', transition: 'transform 400ms cubic-bezier(.2,.8,.2,1), border-color 300ms', cursor: 'pointer' }}>
                <div style={{ position: 'relative', height: 280, overflow: 'hidden' }}>
                  <img src={s.preview} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 700ms ease' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)' }} />
                  <div style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(15,14,13,0.85)', color: '#c8a96a', padding: '6px 12px', borderRadius: 20, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase' }}>
                    {s.tag}
                  </div>
                  <div style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(15,14,13,0.85)', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ArrowUpRight size={18} style={{ color: '#ece8e1' }} />
                  </div>
                  <div style={{ position: 'absolute', bottom: 16, left: 16, display: 'flex', gap: 6 }}>
                    {s.colors.map((c, i) => (
                      <span key={i} style={{ width: 18, height: 18, borderRadius: '50%', background: c, border: '2px solid rgba(255,255,255,0.4)' }} />
                    ))}
                  </div>
                </div>
                <div style={{ padding: '24px 24px 28px' }}>
                  <div style={{ fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', color: '#7a7268', marginBottom: 8 }}>Wariant {String(idx + 1).padStart(2, '0')}</div>
                  <h3 style={{ fontFamily: s.font, fontSize: 30, fontWeight: 500, margin: '0 0 6px', color: '#ece8e1' }}>{s.title}</h3>
                  <div style={{ fontSize: 12, letterSpacing: 2, color: '#c8a96a', textTransform: 'uppercase', marginBottom: 14 }}>{s.subtitle}</div>
                  <p style={{ color: '#b7b0a3', fontSize: 14, lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                  <div style={{ marginTop: 20, display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#c8a96a', borderBottom: '1px solid #c8a96a', paddingBottom: 3 }}>
                    Zobacz podgląd <ArrowUpRight size={14} />
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>
      </section>

      <section id="oferta" style={{ padding: '80px 48px', background: '#15130f', borderTop: '1px solid #2a2724' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', color: '#c8a96a', marginBottom: 16 }}>Przykładowe funkcjonalności</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 400, margin: '0 0 48px' }}>
            Kompletne rozwiązanie dla Waszego <em style={{ color: '#c8a96a' }}>dnia</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24, textAlign: 'left' }}>
            {config.oferta.map(([t, d], i) => (
              <div key={i} style={{ border: '1px solid #2a2724', borderRadius: 12, padding: 20, background: '#1a1816' }}>
                <div style={{ color: '#c8a96a', fontSize: 13, fontWeight: 600, marginBottom: 8 }}>0{i + 1}</div>
                <h4 style={{ margin: '0 0 8px', fontSize: 17, color: '#ece8e1' }}>{t}</h4>
                <p style={{ margin: 0, color: '#8e867c', fontSize: 13, lineHeight: 1.6 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" style={{ padding: '100px 48px', background: '#0f0e0d', borderTop: '1px solid #2a2724' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ display: 'inline-flex', gap: 8, alignItems: 'center', fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', color: '#c8a96a', marginBottom: 16 }}>
              <Sparkles size={14} /> Zostańmy w kontakcie
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 400, margin: 0, lineHeight: 1.1 }}>
              {config.kontakt.naglowek.split(' ').slice(0, -1).join(' ')} <span style={{ fontStyle: 'italic', color: '#c8a96a' }}>{config.kontakt.naglowek.split(' ').slice(-1)}</span>
            </h2>
            <p style={{ marginTop: 18, fontSize: 17, color: '#b7b0a3', maxWidth: 620, margin: '18px auto 0', lineHeight: 1.7 }}>{config.kontakt.podtytul}</p>
            <p style={{ marginTop: 12, fontSize: 14, color: '#7a7268', maxWidth: 600, margin: '12px auto 0', lineHeight: 1.7 }}>{config.kontakt.opis}</p>
          </div>

          {/* Kafelki kontaktowe */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 40 }}>
            <a href={`mailto:${config.kontakt.email}`} className="kontakt-card" style={kontaktCardStyle}>
              <Mail size={22} style={{ color: '#c8a96a', marginBottom: 12 }} />
              <div style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#7a7268', marginBottom: 6 }}>E-mail</div>
              <div style={{ color: '#ece8e1', fontSize: 15, wordBreak: 'break-all' }}>{config.kontakt.email}</div>
            </a>
            <a href={`tel:${config.kontakt.tel.replace(/\s/g, '')}`} className="kontakt-card" style={kontaktCardStyle}>
              <Phone size={22} style={{ color: '#c8a96a', marginBottom: 12 }} />
              <div style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#7a7268', marginBottom: 6 }}>Telefon</div>
              <div style={{ color: '#ece8e1', fontSize: 15 }}>{config.kontakt.telDisplay}</div>
            </a>
          </div>

          {/* Social */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginBottom: 40 }}>
            {config.kontakt.instagram && (
              <a href={config.kontakt.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" style={socialIconStyle}>
                <Instagram size={20} />
              </a>
            )}
            {config.kontakt.facebook && (
              <a href={config.kontakt.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" style={socialIconStyle}>
                <Facebook size={20} />
              </a>
            )}
          </div>

          {/* Formularz Tally (opcjonalny) */}
          {config.kontakt.tallyFormId && (
            <div style={{ maxWidth: 700, margin: '40px auto 0', background: '#1a1816', border: '1px solid #2a2724', borderRadius: 14, padding: 18 }}>
              <iframe
                title="Formularz kontaktowy"
                src={`https://tally.so/embed/${config.kontakt.tallyFormId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
                width="100%"
                height="500"
                frameBorder="0"
                style={{ border: 0 }}
              />
            </div>
          )}

          {/* CTA - mailto button */}
          <div style={{ textAlign: 'center', marginTop: 30 }}>
            <a href={`mailto:${config.kontakt.email}?subject=${encodeURIComponent('Zapytanie - strona ślubna')}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 30px', background: '#c8a96a', color: '#0f0e0d', textDecoration: 'none', borderRadius: 30, fontSize: 13, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 600, transition: 'transform 200ms, box-shadow 200ms', boxShadow: '0 10px 28px rgba(200,169,106,0.25)' }} className="kontakt-cta">
              <Mail size={16} /> Napisz do mnie
            </a>
          </div>
        </div>
      </section>

      <footer style={{ padding: '40px 48px 30px', textAlign: 'center', borderTop: '1px solid #2a2724', background: '#0f0e0d' }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, marginBottom: 8, color: '#ece8e1' }}>{config.studio.nazwa}</div>
        <div style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#5e574d' }}>© {new Date().getFullYear()} · Strony ślubne dla par młodych · Made with <Heart size={11} style={{ display: 'inline', color: '#c8a96a', fill: '#c8a96a', verticalAlign: 'middle' }} /></div>
      </footer>

      <style>{`
        .portfolio-tile:hover { border-color: #c8a96a !important; transform: translateY(-4px); }
        .portfolio-tile:hover img { transform: scale(1.06); }
        .kontakt-card:hover { border-color: #c8a96a !important; transform: translateY(-3px); }
        .kontakt-card:hover [data-icon] { transform: scale(1.1); }
        .kontakt-cta:hover { transform: translateY(-2px); box-shadow: 0 14px 36px rgba(200,169,106,0.4) !important; }
        @media (max-width: 640px) { .pf-nav { display: none !important; } }
      `}</style>
    </div>
  );
}

const kontaktCardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  textDecoration: 'none',
  background: '#1a1816',
  border: '1px solid #2a2724',
  borderRadius: 14,
  padding: '24px 22px',
  transition: 'transform 300ms cubic-bezier(.2,.8,.2,1), border-color 300ms',
  color: 'inherit',
};

const socialIconStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 46,
  height: 46,
  borderRadius: '50%',
  background: '#1a1816',
  border: '1px solid #2a2724',
  color: '#c8a96a',
  textDecoration: 'none',
  transition: 'transform 200ms, background 200ms',
};
