// src/App.jsx (o page.jsx en Next.js)
import React from 'react';

const SITE = {
  name: 'Manos que Acompañan',
  subtitle: 'Cuidado profesional y humano para adultos mayores',
  tagline: 'Asistencia domiciliaria, apoyo a la independencia y compañía responsable',
  phoneWhatsApp: '+5989XXXXXXX', // reemplazar
  email: 'tuemail@dominio.com',
  address: 'Montevideo, Uruguay',
  cvLink: '#', // link al CV descargable
  heroImage: 'https://github.com/my-repo-collection/asistentePersonal/blob/main/public/images/hero.jpeg?raw=true', // reemplazar
};

const SERVICES = [
  { title: 'Higiene y baño', desc: 'Aseo personal, cambio de ropa, cuidado de la piel y confort.', img: 'https://github.com/my-repo-collection/asistentePersonal/blob/main/public/images/higiene.jpeg?raw=true' },
  { title: 'Alimentación y preparación de comidas', desc: 'Apoyo en la alimentación, dietas sencillas y supervisión.', img: 'https://github.com/my-repo-collection/asistentePersonal/blob/main/public/images/alimentacion.jpeg?raw=true' },
  { title: 'Movilidad y traslado', desc: 'Asistencia para caminar, uso de ayudas técnicas y movilizaciones seguras.', img: 'https://github.com/my-repo-collection/asistentePersonal/blob/main/public/images/mobilidad.jpeg?raw=true' },
  { title: 'Apoyo en medicación', desc: 'Organización y recordatorio de medicación según indicaciones.', img: 'https://github.com/my-repo-collection/asistentePersonal/blob/main/public/images/medicacion.jpeg?raw=true' },
  { title: 'Estimulación y compañía', desc: 'Actividades recreativas y estimulación cognitiva ligera.', img: 'https://github.com/my-repo-collection/asistentePersonal/blob/main/public/images/compania.jpeg?raw=true' },
];

const TEAM = [
  { 
    name: 'Maria Mendoza', 
    role: 'Asistente certificada - INEFOP (Atención a la Dependencia)', 
    bio: 'Con experiencia en acompañamiento domiciliario.', 
    img: 'https://github.com/my-repo-collection/asistentePersonal/blob/main/public/images/avatar.jpeg?raw=true', 
    highlight: true // Este será destacado
  },
  { 
    name: 'Juan Pérez', 
    role: 'Asistente domiciliario', 
    bio: 'Especializado en movilidad y compañía de adultos mayores.', 
    img: 'https://github.com/my-repo-collection/asistentePersonal/blob/main/public/images/juan.jpeg?raw=true',
    highlight: false
  },
  { 
    name: 'Ana Rodríguez', 
    role: 'Acompañante', 
    bio: 'Apoyo en actividades diarias y estimulación cognitiva.', 
    img: 'https://github.com/my-repo-collection/asistentePersonal/blob/main/public/images/ana.jpeg?raw=true',
    highlight: true // También destacada
  },
];

{/* Equipo */}
<section className="py-8">
  <div className="max-w-6xl mx-auto px-4">
    <h3 className="text-xl font-semibold mb-6">Equipo</h3>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {TEAM.map((p) => (
        <div key={p.name} className="relative bg-white p-4 rounded-lg shadow text-center">
          {p.highlight && (
            <span className="absolute top-2 right-2 bg-rose-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
              Destacado
            </span>
          )}
          <img src={p.img} alt={p.name} className="mx-auto mb-3 w-24 h-24 rounded-full object-cover" />
          <h4 className="font-medium">{p.name}</h4>
          <p className="text-sm text-gray-600">{p.role}</p>
          <p className="mt-2 text-sm text-gray-600">{p.bio}</p>
        </div>
      ))}
    </div>
  </div>
</section>




const TESTIMONIALS = [
  { name: 'Familia Pérez', text: 'Muy agradecidos con la atención y la puntualidad. Excelente trato humano.', img: 'https://github.com/my-repo-collection/asistentePersonal/blob/main/public/images/familia.jpeg?raw=true' },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-md bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center text-white font-bold">MK</div>
            <div>
              <h1 className="text-lg font-semibold">{SITE.name}</h1>
              <p className="text-xs text-gray-500">{SITE.tagline}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href={`https://wa.me/${SITE.phoneWhatsApp.replace('+','')}`} className="inline-flex items-center gap-2 px-3 py-2 bg-green-500 text-white rounded-md shadow hover:opacity-95">WhatsApp</a>
            <a href={`mailto:${SITE.email}`} className="text-sm text-gray-600">Contacto</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Cuidado profesional y humano para quienes más quieres</h2>
            <p className="mt-4 text-gray-600">Personal cualificado con formación certificada por INEFOP (Curso Atención a la Dependencia). Servicios personalizados, horarios flexibles y acompañamiento con respeto y calidez.</p>
            <div className="mt-6 flex gap-3">
              <a href={`https://wa.me/${SITE.phoneWhatsApp.replace('+','')}`} className="px-5 py-3 bg-rose-500 text-white rounded-md shadow">Reservar hora</a>
              <a href={SITE.cvLink} className="px-5 py-3 border border-gray-300 rounded-md">Ver CV / Certificados</a>
            </div>
            <ul className="mt-6 text-sm text-gray-500 space-y-2">
              <li>✅ Prácticas presenciales supervisadas (curso 2020)</li>
              <li>✅ Enfoque en autonomía y derechos</li>
              <li>✅ Servicios por horas, por turnos o asistencia continua</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img src={SITE.heroImage} alt="Hero" className="rounded-2xl shadow-md" />
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-xl font-semibold mb-6">Servicios destacados</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="p-4 bg-white rounded-lg shadow text-center">
                <img src={s.img} alt={s.title} className="mx-auto mb-3 w-24 h-24 object-cover rounded-full" />
                <h4 className="font-medium">{s.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-xl font-semibold mb-6">Equipo</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {TEAM.map((p) => (
              <div key={p.name} className="bg-white p-4 rounded-lg shadow text-center">
                <img src={p.img} alt={p.name} className="mx-auto mb-3 w-24 h-24 rounded-full object-cover" />
                <h4 className="font-medium">{p.name}</h4>
                <p className="text-sm text-gray-600">{p.role}</p>
                <p className="mt-2 text-sm text-gray-600">{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-xl font-semibold mb-6">Testimonios</h3>
          <div className="space-y-4">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.name} className="p-4 bg-gray-50 rounded-md border-l-4 border-rose-300 flex items-center gap-4">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <p className="text-gray-700">“{t.text}” <span className="block text-sm text-gray-500 mt-1">— {t.name}</span></p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
