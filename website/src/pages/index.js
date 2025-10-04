import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Dorios Studios"
      description="Official website of Dorios Studios - Free addons and community projects"
    >
      <main style={{ padding: '2rem 0' }}>
        {/* ===== Hero Section ===== */}
        <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <img
            src="/img/dorios_logo.png"        /* <- usa tu archivo en static/img/dorios_logo.png */
            alt="Dorios Studios Logo"
            style={{ width: 120, height: 'auto', marginBottom: '1rem' }}
          />
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Dorios Studios</h1>
          <p style={{ fontSize: '1.1rem', maxWidth: 750, margin: '0 auto' }}>
            We are a growing studio focused on creating completely free addons for the Minecraft community.
            Our team is active on Discord and always working to deliver fun and useful experiences.
          </p>
        </section>

        {/* ===== Addons (FTB-style: logo left, text right) ===== */}
        <section style={{ marginBottom: '4rem', maxWidth: 900, marginInline: 'auto' }}>
          {/* UtilityCraft */}
          <div className="card addon-card">
            <div className="addon-logo">
              <img src="/img/addons/utilitycraft/pack_icon.png" alt="UtilityCraft icon" />
            </div>
            <div className="addon-content">
              <h3>UtilityCraft</h3>
              <p>
                Advanced automation with machines, custom energy, ore crops, and everything you need to make
                Minecraft easier and more fun.
              </p>
              {/* <Link className="button button--primary" to="/docs/utilitycraft/intro">
                Explore UtilityCraft
              </Link> */}
            </div>
          </div>

          {/* Dorios' Trinkets */}
          <div className="card addon-card">
            <div className="addon-logo">
              <img src="/img/addons/trinkets/pack_icon.png" alt="Dorios' Trinkets icon" />
            </div>
            <div className="addon-content">
              <h3>Dorios' Trinkets</h3>
              <p>
                Over 50 unique trinkets that grant powerful passive abilities, designed to enhance combat,
                exploration, and survival.
              </p>
              {/* <Link className="button button--primary" to="/docs/trinkets/intro">
                Discover Trinkets
              </Link> */}
            </div>
          </div>

          {/* Better Smelters */}
          <div className="card addon-card">
            <div className="addon-logo">
              <img src="/img/addons/bonsais/pack_icon.png" alt="Better Smelters icon" />
            </div>
            <div className="addon-content">
              <h3>Better Smelters</h3>
              <p>
                Upgrade your furnaces with tiered smelters that process items faster and more efficiently than vanilla.
              </p>
              {/* <Link className="button button--primary" to="/docs/better-smelters/intro">
                Check Better Smelters
              </Link> */}
            </div>
          </div>

          {/* More Addons */}
          <div className="card addon-card">
            <div className="addon-logo">
              <img src="/img/addons/cobble_generators/pack_icon.png" alt="More Addons icon" />
            </div>
            <div className="addon-content">
              <h3>More Addons</h3>
              <p>
                Explore the rest of our creations and projects in development. Stay tuned for upcoming releases!
              </p>
              {/* <Link className="button button--secondary" to="/docs/addons">
                View All Addons
              </Link> */}
            </div>
          </div>
        </section>

        {/* ===== About Us ===== */}
        <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2>About Us</h2>
          <p style={{ maxWidth: 700, margin: '0 auto 1.5rem' }}>
            Meet the Dorios Studios team — the people who design, code, and build everything you see in our projects.
          </p>
          <Link className="button button--primary" to="/about">
            Learn More About Us
          </Link>
        </section>
      </main>
    </Layout>
  );
}
