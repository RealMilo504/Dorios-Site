import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout
      title="About Us"
      description="Learn more about Dorios Studios and our journey"
    >
      <main style={{ padding: '2rem 0', maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Title */}
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>ABOUT US</h1>

        {/* Story Section */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2rem', marginBottom: '4rem' }}>
          {/* Logo */}
          <div style={{ flex: '0 0 280px', textAlign: 'center' }}>
            <img
              src="/img/dorios_logo.png"
              alt="Dorios Studios Logo"
              style={{ width: '100%', maxWidth: '280px', borderRadius: '12px' }}
            />
          </div>

          {/* Text */}
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2>Our Story</h2>
            <p>
              Dorios Studios was founded in <b>2020</b> by <b>Milo504</b>, originally known as <b>Drag504</b>. 
              The early days were inconsistent — we would start projects and pause them, often coming back with new ideas. 
              In <b>2021</b>, <b>WeatherVictor</b> joined and helped shape our UI and coding approach. 
              Still, it wasn’t until <b>2024</b> when we decided to go all in.
            </p>
            <p>
              With <b>JRice</b> joining as our lead designer, we launched <b>UtilityCraft 3.0</b>, 
              a milestone that gave our studio recognition in the Minecraft Bedrock community. 
              This release marked the beginning of a new era for us: consistent development, 
              polished addons, and a growing community of players who support our vision.
            </p>
            <h2>Our Mission</h2>
            <p>
              We believe in creating <b>free, high-quality addons</b> for the Minecraft community. 
              Our mission is to give players tools and experiences that go beyond the base game: 
              automation systems, RPG adventures, custom mechanics, and more. 
              Everything we build is made with passion and designed to be accessible to everyone.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Team</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2rem',
          }}
        >
          {[
            { id: 'milo504', name: 'Milo504 (Drag504)', role: 'Owner & Lead Developer', quote: 'Founder of Dorios Studios. Main developer of UtilityCraft and leader of the studio.' },
            { id: 'weathervictor', name: 'WeatherVictor', role: 'Developer & UI Designer', quote: 'Specializes in UI creation and general coding, bringing structure and usability to our projects.' },
            { id: 'jrice', name: 'JR.ice', role: 'Designer', quote: 'Lead designer behind UtilityCraft 3.0 and the studio’s visual style.' },
            { id: 'kauzin', name: 'Kauzin', role: 'Junior Developer', quote: 'A new coder starting to learn and grow with Dorios Studios, contributing with fresh ideas.' },
            { id: 'cloud', name: 'Cloud', role: 'Independent Creator', quote: 'Creator of Better Smelters and contributor to independent Minecraft projects.' },
            { id: 'sam', name: 'Sam', role: 'Animator', quote: 'Animator and creative mind working on Endless Agony and adding life to our projects.' },
            { id: 'mainmas', name: 'Mainmas', role: 'Independent Creator', quote: 'Independent contributor supporting Dorios Studios with community and project assistance.' },
            { id: 'mikey', name: 'Mikey', role: 'Builder', quote: 'Builder for Endless Agony and UtilitySky, bringing environments and structures to life.' },
            { id: 'yusou', name: 'Yusou', role: 'Independent Creator', quote: 'Independent creator collaborating with Dorios Studios while developing personal projects.' },
          ].map((member, i) => (
            <div
              key={i}
              style={{
                background: 'var(--ifm-card-background-color)',
                borderRadius: '12px',
                padding: '1rem',
                textAlign: 'center',
                boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
              }}
            >
              <img
                src={`/img/about/${member.id}.jpg`}
                alt={member.name}
                style={{ borderRadius: '50%', marginBottom: '1rem', width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <h3>{member.name}</h3>
              <p><b>{member.role}</b></p>
              <p style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>{member.quote}</p>
            </div>
          ))}
        </div>

        {/* Acknowledgements Section */}
        <h2 style={{ textAlign: 'center', margin: '4rem 0 2rem' }}>Acknowledgements</h2>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          We want to thank our amazing community and especially the dedicated testers who helped us refine our projects.  
          Their support and feedback have been essential in bringing Dorios Studios addons to life.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2rem',
          }}
        >
          {[
            { id: 'fear', name: 'Fear' },
            { id: 'fresh', name: '!FreshInk¡' },
            { id: 'roger', name: 'RogerZeew' },
            { id: 'yash', name: 'Yash' },
            { id: 'brando', name: 'Brando' }
          ].map((tester, i) => (
            <div
              key={i}
              style={{
                background: 'var(--ifm-card-background-color)',
                borderRadius: '12px',
                padding: '1rem',
                textAlign: 'center',
                boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
              }}
            >
              <img
                src={`/img/about/${tester.id}.jpg`}
                alt={tester.name}
                style={{ borderRadius: '50%', marginBottom: '1rem', width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <h3>{tester.name}</h3>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
