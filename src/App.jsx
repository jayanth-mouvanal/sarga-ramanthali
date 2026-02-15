import { useState, useEffect } from 'react'
import logo from './assets/logo.jpg'
import carousel1 from './assets/carousel1.jpg'
import carousel2 from './assets/carousel2.jpg'
import carousel3 from './assets/carousel3.jpg'
import event1 from './assets/event1.jpg'
import event2 from './assets/event2.jpg'
import event3 from './assets/event3.jpg'
import event4 from './assets/event4.jpg'
import event5 from './assets/event5.jpg'
import event6 from './assets/event6.jpg'
import event7 from './assets/event7.jpg'
import event8 from './assets/event8.jpg'
import event9 from './assets/event9.jpg'
import gallery1 from './assets/gallery1.png'
import gallery2 from './assets/gallery2.png'
import gallery3 from './assets/gallery3.png'
import gallery4 from './assets/gallery4.png'
import gallery5 from './assets/gallery5.png'
import './index.css'

function App() {
  const [activeTab, setActiveTab] = useState('Home')

  const navItems = ['Home', 'About Us', 'Events', 'Gallery', 'Membership', 'Donate', 'Contact']

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <Home setActiveTab={setActiveTab} />
      case 'About Us':
        return <About />
      case 'Events':
        return <Events />
      case 'Gallery':
        return <Gallery />
      case 'Membership':
        return <Membership />
      case 'Donate':
        return <Donate />
      case 'Contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, { threshold: 0.1 })

    const revealedItems = document.querySelectorAll('.reveal')
    revealedItems.forEach(item => observer.observe(item))

    return () => observer.disconnect()
  }, [activeTab])

  return (
    <div className="app">
      <nav>
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Sarga Ramanthali Logo" className="logo-img" />
            <span>സർഗ്ഗ രാമന്തളി</span>
          </div>
          <ul className="nav-links">
            {navItems.map(item => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setActiveTab(item)}
                  className={activeTab === item ? 'active' : ''}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main>
        {renderContent()}
      </main>

      <footer>
        <div className="container">
          <p>© 2026 സർഗ്ഗ രാമന്തളി. All rights reserved.</p>
          <p>Kallettum Kadavu Road, Ramanthali, Kerala 670308</p>
        </div>
      </footer>
    </div>
  )
}

const Home = ({ setActiveTab }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      image: carousel1,
      title: "സർഗ്ഗ രാമന്തളി",
      subtitle: "ഉദ്ഘാടന ചടങ്ങ് - നവംബർ 2019"
    },
    {
      image: carousel2,
      title: "ഞങ്ങളുടെ ടീം",
      subtitle: "സർഗ്ഗ രാമന്തളിയുടെ കരുത്തായ പ്രവർത്തകർ"
    },
    {
      image: carousel3,
      title: "ഓണക്കിറ്റ് വിതരണം",
      subtitle: "സാമൂഹിക സേവന രംഗത്ത് സർഗ്ഗ രാമന്തളി"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <>
      <div className="hero-carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})` }}
          >
            <div className="container">
              <div className="hero-content">
                <h1>{slide.title}</h1>
                <p className="malayalam">{slide.subtitle}</p>
                <p className="motto">"സ്വപ്നങ്ങൾക്കായി ഉറങ്ങുക... ലക്ഷ്യങ്ങൾക്കായി ഉണരുക..."</p>
                <div style={{ marginTop: '2rem' }}>
                  <button
                    onClick={() => setActiveTab('About Us')}
                    className="btn btn-hero"
                  >
                    കൂടുതൽ അറിയുക
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      <section id="highlights" className="reveal">
        <div className="container">
          <h2 className="section-title">പ്രധാന പ്രവർത്തനങ്ങൾ</h2>
          <div className="card-grid">
            <div className="card">
              <div className="card-icon">🎁</div>
              <h3>ഓണക്കിറ്റ് വിതരണം</h3>
              <p>സർഗ്ഗ രാമന്തളിയുടെ നേതൃത്വത്തിൽ നടന്ന ഓണക്കിറ്റ് വിതരണം. നൂറുകണക്കിന് കുടുംബങ്ങൾക്ക് ആശ്വാസമായി ഈ പദ്ധതി മാറി.</p>
            </div>
            <div className="card">
              <div className="card-icon">📚</div>
              <h3>വിദ്യാഭ്യാസ സഹായം</h3>
              <p>പ്രാദേശിക സ്കൂളുകളിലെ കുട്ടികൾക്ക് പഠനോപകരണങ്ങളും കായിക സാമഗ്രികളും വിതരണം ചെയ്യുന്നു.</p>
            </div>
            <div className="card">
              <div className="card-icon">🛠️</div>
              <h3>സാമൂഹിക സേവനം</h3>
              <p>പ്രകൃതി ദുരന്തങ്ങൾ ഉണ്ടാകുമ്പോൾ റോഡുകൾ വൃത്തിയാക്കാനും മറ്റും ഞങ്ങളുടെ ടീം സജീവമായി പ്രവർത്തിക്കുന്നു.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const About = () => {
  const tiers = [
    {
      level: "tier-1",
      members: [
        { role: "പ്രസിഡന്റ്", name: "രാജ് ശേഖരൻ" },
        { role: "സെക്രട്ടറി", name: "സജിത്ത് കാട്ടൂർ" },
        { role: "ട്രഷറർ", name: "രതീഷ് എൻ" }
      ]
    },
    {
      level: "tier-2",
      members: [
        { role: "വൈസ് പ്രസിഡന്റ്", name: "ബാബു വി" },
        { role: "വൈസ് പ്രസിഡന്റ്", name: "രമേശ് എം" },
        { role: "ജോയിന്റ് സെക്രട്ടറി", name: "ഷാജി കെ വി" },
        { role: "ജോയിന്റ് സെക്രട്ടറി", name: "സുരേഷ് കെ" }
      ]
    },
    {
      level: "tier-3",
      members: [
        { role: "രക്ഷാധികാരി", name: "സജീവ് കെ" },
        { role: "രക്ഷാധികാരി", name: "പ്രമോദ് ആർ" },
        { role: "പ്രോഗ്രാം കമ്മിറ്റി", name: "വിജയൻ ടി" },
        { role: "പ്രോഗ്രാം കമ്മിറ്റി", name: "സുമേഷ് പി" },
        { role: "പ്രോഗ്രാം കമ്മിറ്റി", name: "രാജേഷ് കുമാർ" }
      ]
    }
  ]

  const otherMembers = [
    "രാഘവൻ ഉത്തമൻ", "അനിൽ കുമാർ", "സന്തോഷ് മെയിൻ", "ലിതീഷ് കെ", "അജീഷ് സി", "നിതിൻ കെ", "പ്രഭുൽ ആർ"
  ]

  return (
    <section id="about" className="about-section reveal">
      <div className="container">
        <div className="about-intro">
          <h2 className="section-title">ഞങ്ങളെക്കുറിച്ച്</h2>
          <p className="about-description">
            രാമന്തളിയിലെ സാംസ്കാരികവും സാമൂഹികവുമായ ഉന്നമനം ലക്ഷ്യമാക്കി പ്രവർത്തിക്കുന്ന ഒരു കൂട്ടായ്മയാണ് സർഗ്ഗ രാമന്തളി (Sarga Ramanthali).
            ഗ്രാമത്തിലെ ജനങ്ങളുടെ ക്ഷേമത്തിനായും യുവജനങ്ങളുടെ കലാ-കായിക കഴിവുകൾ പ്രോത്സാഹിപ്പിക്കുന്നതിനായും ഞങ്ങൾ നിലകൊള്ളുന്നു.
          </p>
        </div>

        <div className="members-section">
          <h2 className="section-title">ഭരണസമിതി</h2>

          <div className="tiered-members">
            {tiers.map((tier, tIdx) => (
              <div key={tIdx} className="tier-wrapper">
                <h3 className="tier-title">
                  {tier.level === 'tier-1' ? 'ഭാരവാഹികൾ' : tier.level === 'tier-2' ? 'സമിതിയംഗങ്ങൾ' : 'ഉപദേശക സമിതി'}
                </h3>
                <div className={`member-tier ${tier.level}`}>
                  {tier.members.map((member, mIdx) => (
                    <div key={mIdx} className="member-card-new">
                      <div className="member-img-box">
                        <div className="member-placeholder-big"></div>
                        <div className="member-card-overlay">
                          <div className="member-role-badge">{member.role}</div>
                          <div className="member-name-new">{member.name}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title" style={{ marginTop: '6rem' }}>മറ്റ് അംഗങ്ങൾ</h2>
          <div className="members-list-wrapper">
            <div className="members-grid-flexible">
              {otherMembers.map((name, idx) => (
                <div key={idx} className="simple-member-card">
                  <span className="member-dot"></span>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Events = () => {
  const [visibleEvents, setVisibleEvents] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleEvents(prev => new Set([...prev, entry.target.dataset.index]))
        }
      })
    }, { threshold: 0.5 })

    const items = document.querySelectorAll('.timeline-item')
    items.forEach(item => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  const events = [
    {
      "title": "ഓണക്കിറ്റു വിതരണം",
      "date": "സെപ്റ്റംബർ 10, 2019",
      "description": "കുടുംബങ്ങൾക്കായി ഓണക്കിറ്റുകൾ വിതരണം ചെയ്യുന്നു.",
      "imgUrl": event1
    },
    {
      "title": "ശുചീകരണ പ്രവർത്തനം",
      "date": "ഓഗസ്റ്റ് 15, 2019",
      "description": "സ്വാതന്ത്ര്യദിനത്തിൽ നടന്ന ശുചീകരണ യജ്ഞം.",
      "imgUrl": event2
    },
    {
      "title": "ഒന്നാം വാർഷിക ആഘോഷം",
      "date": "ഓഗസ്റ്റ് 10, 2019",
      "description": "സർഗ്ഗ രാമന്തളിയുടെ ഒന്നാം വാർഷികം ആഘോഷിച്ചു.",
      "imgUrl": event3
    },
    {
      "title": "ജേർസി വിതരണം",
      "date": "ജൂൺ 18, 2019",
      "description": "ക്ലബ്ബ് അംഗങ്ങൾക്ക് ജേർസികൾ വിതരണം ചെയ്തു.",
      "imgUrl": event4
    },
    {
      "title": "മഴക്കാല രോഗ ശുചീകരണ പ്രവർത്തനം",
      "date": "ജൂൺ 3, 2019",
      "description": "മഴക്കാല രോഗങ്ങൾ തടയുന്നതിനുള്ള ശുചീകരണ പ്രവർത്തനങ്ങൾ.",
      "imgUrl": event5
    },
    {
      "title": "അനുമോദനം",
      "date": "മേയ് 23, 2019",
      "description": "വിവിധ മേഖലകളിൽ കഴിവ് തെളിയിച്ചവരെ അനുമോദിച്ചു.",
      "imgUrl": event6
    },
    {
      "title": "വാട്ടർ പ്യൂരിഫയർ സമർപ്പണം",
      "date": "ഏപ്രിൽ 11, 2019",
      "description": "പൊതുജനങ്ങൾക്ക് കുടിവെള്ളം ലഭ്യമാക്കാൻ വാട്ടർ പ്യൂരിഫയർ സ്ഥാപിച്ചു.",
      "imgUrl": event7
    },
    {
      "title": "കുടിവെള്ള വിതരണം",
      "date": "ഏപ്രിൽ 8, 2019",
      "description": "വേനൽക്കാലത്ത് കുടിവെള്ള വിതരണ പദ്ധതി സജീവമാക്കി.",
      "imgUrl": event8
    },
    {
      "title": "സർഗ്ഗ ക്ലബ്ബ് ഉദ്ഘാടനം",
      "date": "സെപ്റ്റംബർ 4, 2018",
      "description": "സർഗ്ഗ രാമന്തളി കമ്യൂണിറ്റി ക്ലബ്ബിന്റെ ഔദ്യോഗിക ഉദ്ഘാടനം.",
      "imgUrl": event9
    }
  ]

  return (
    <section id="events" className="events-timeline-section reveal">
      <div className="container">
        <h2 className="section-title">കർമ്മപഥങ്ങൾ (Timeline)</h2>
        <div className="timeline">
          {events.map((event, index) => (
            <div
              key={index}
              data-index={index}
              className={`timeline-item ${visibleEvents.has(index.toString()) ? 'in-view' : ''}`}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-date">{event.date}</div>
              <div className="timeline-content">
                {event.imgUrl && <img src={event.imgUrl} alt={event.title} className="timeline-img" />}
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Gallery = () => {
  const galleryImages = [
    { src: gallery1, alt: "ഓണക്കിറ്റ് വിതരണം" },
    { src: gallery2, alt: "സന്നദ്ധ സേവനം" },
    { src: gallery3, alt: "ഓണാഘോഷം" },
    { src: gallery4, alt: "സ്കൂൾ കായിക സാമഗ്രി വിതരണം" },
    { src: gallery5, alt: "കായിക മേള" }
  ]

  return (
    <section id="gallery" className="gallery-section reveal">
      <div className="container">
        <h2 className="section-title">ചിത്രശാല</h2>
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img.src} alt={img.alt} />
              <div className="gallery-overlay">
                <span>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Membership = () => (
  <section id="membership" className="reveal">
    <div className="container">
      <h2 className="section-title">അംഗത്വം</h2>
      <div className="card" style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
        <h3>സർഗ്ഗ രാമന്തളി കുടുംബത്തിൽ അംഗമാകൂ</h3>
        <p style={{ color: '#666', marginBottom: '1.5rem' }}>
          ഗ്രാമത്തിന്റെ സാംസ്കാരിക പുരോഗതിയിൽ പങ്കാളികളാകാൻ നിങ്ങൾക്കും സാധിക്കും. താഴെ പറയുന്ന വിവരങ്ങൾ വഴി ഞങ്ങളെ ബന്ധപ്പെടുക.
        </p>
        <div style={{ background: 'var(--bg)', padding: '2rem', borderRadius: 'var(--radius)', border: '1px dashed var(--primary)' }}>
          <p className="malayalam" style={{ fontSize: '1.1rem', color: 'var(--primary)' }}>
            അംഗത്വ ഫോം ഉടൻ ഈ പേജിൽ ലഭ്യമാകും. അതുവരെ കൂടുതൽ വിവരങ്ങൾക്കായി താഴെയുള്ള ബട്ടൺ വഴി ബന്ധപ്പെടുക.
          </p>
          <a href="#contact" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block', textDecoration: 'none' }}>ബന്ധപ്പെടുക</a>
        </div>
      </div>
    </div>
  </section >
)

const Donate = () => (
  <section id="donate" className="reveal">
    <div className="container">
      <h2 className="section-title">സംഭാവന</h2>
      <p style={{ textAlign: 'center' }}>ഞങ്ങളുടെ സാമൂഹിക പ്രവർത്തനങ്ങളെ പിന്തുണയ്ക്കാൻ നിങ്ങൾക്കും പങ്കുചേരാം.</p>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button className="btn-donate">ഇപ്പോൾ സംഭാവന ചെയ്യുക</button>
      </div>
    </div>
  </section>
)

const Contact = () => (
  <section id="contact" className="contact-section reveal">
    <div className="container">
      <h2 className="section-title">ബന്ധപ്പെടുക</h2>
      <div className="contact-wrapper">
        <div className="contact-info">
          <div className="contact-card-v2">
            <div className="contact-icon">📍</div>
            <div className="contact-text">
              <h3>വിലാസം</h3>
              <p>സർഗ്ഗ രാമന്തളി, കല്ലേറ്റും കടവ് റോഡ്, രാമന്തളി, കേരളം 670308</p>
            </div>
          </div>
          <div className="contact-card-v2">
            <div className="contact-icon">📞</div>
            <div className="contact-text">
              <h3>ഫോൺ</h3>
              <p>+91 8078701522</p>
            </div>
          </div>
          <div className="contact-card-v2">
            <div className="contact-icon">✉️</div>
            <div className="contact-text">
              <h3>ഇമെയിൽ</h3>
              <p>sargaramanthali@gmail.com</p>
            </div>
          </div>
          <div className="contact-card-v2">
            <div className="contact-icon">🌐</div>
            <div className="contact-text">
              <h3>സോഷ്യൽ മീഡിയ</h3>
              <div className="social-links-v2">
                <a href="https://www.facebook.com/sargaramanthali/" target="_blank" rel="noreferrer">Facebook</a>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>പേര്</label>
              <input type="text" placeholder="നിങ്ങളുടെ പേര്" />
            </div>
            <div className="form-group">
              <label>ഇമെയിൽ</label>
              <input type="email" placeholder="നിങ്ങളുടെ ഇമെയിൽ" />
            </div>
            <div className="form-group">
              <label>വിഷയം</label>
              <input type="text" placeholder="വിഷയം" />
            </div>
            <div className="form-group">
              <label>സന്ദേശം</label>
              <textarea placeholder="നിങ്ങളുടെ സന്ദേശം" rows="4"></textarea>
            </div>
            <button type="submit" className="btn-hero" style={{ width: '100%', marginTop: '1rem' }}>
              സന്ദേശം അയക്കുക
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
)

export default App
