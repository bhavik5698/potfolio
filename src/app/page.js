
'use client'
import ContactForm from "@/components/ContactForm";
import Experience from "@/components/Experience";
import WorkSection from "@/components/WorkSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="l-main">
      <section className="home bd-grid" id="home">
        <div className="home_data">
          <h1 className="home__title">
            Hi,
            <br />
            I&apos;m <span className="home__title-color">Bhavik</span>
            <br /> Frontend Developer
          </h1>

          <a href="#contact" className="button">Contact</a>
        </div>

        <div className="home__social">
          <a
            href="https://www.linkedin.com/in/bhavik-brahmbhatt-94b259199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="home__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class='bx  bxl-linkedin-square'></i> 
          </a>
        </div>

        <div className="home__img">
          <svg
            className="home__blob"
            viewBox="0 0 479 467"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <mask id="mask0" mask-type="alpha">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
            </mask>
            <g mask="url(#mask0)">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
              {/* Use Next.js Image if you have profile image in public/assets/img/perfil.png */}
              {/* Replace below with Next Image or img tag depending on your setup */}
              <image
                className="home__blob-img"
                x="50"
                y="107"
                href="/assets/img/perfil.png"
              />
            </g>
          </svg>
        </div>
      </section>

      <section className="about section" id="about">
        <h2 className="section-title">About</h2>

        <div className="about__container bd-grid">
          <div className="about__img">
            <Image src="/assets/img/about.jpg" alt="About Bhavik" width={300} height={300} />
          </div>

          <div>
            <h2 className="about__subtitle">I&apos;m Bhavik</h2>
            <p className="about__text pb-3">
              I specialize in crafting responsive and user-friendly websites and mobile applications using React and React Native.
              I also build robust backend APIs with Node.js and MongoDB to ensure smooth data flow and excellent performance.
              Over the years, I&apos;ve worked with diverse clients across India, Canada, and the Middle East, delivering scalable and high-quality software solutions.
            </p>
            <p className="about__text">
              My approach focuses on clean, maintainable code and seamless integration between frontend and backend systems.
              I enjoy collaborating with cross-functional teams to bring ideas to life and solve complex challenges.
              When I&apos;m not coding, you&apos;ll find me exploring new technologies or improving my skills through continuous learning.
            </p>
          </div>
        </div>
      </section>
      <Experience />
      <section className="skills section" id="skills">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="text_center mb-8">
          Here&apos;s a quick glance at the technologies and tools I work with regularly.
        </p>
        <div className="skills__container bd-grid">
          <div>
            <h2 className="skills__subtitle">Frontend & Mobile</h2>

            <div className="skills_data">
              <div className="skills__names">
                <span className="skills__name">React.js</span>
              </div>
              <div className="skills__bar skills__html"></div>
              <div>
                <span className="skills__percentage">90%</span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills__names">
                <span className="skills__name">Next.js</span>
              </div>
              <div className="skills__bar skills__css"></div>
              <div>
                <span className="skills__percentage">85%</span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills__names">
                <span className="skills__name">React Native</span>
              </div>
              <div className="skills__bar skills__js"></div>
              <div>
                <span className="skills__percentage">88%</span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills__names">
                <span className="skills__name">HTML5 & CSS3</span>
              </div>
              <div className="skills__bar skills__ux"></div>
              <div>
                <span className="skills__percentage">90%</span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills__names">
                <span className="skills__name">Tailwind CSS</span>
              </div>
              <div className="skills__bar skills__ux"></div>
              <div>
                <span className="skills__percentage">80%</span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills__names">
                <span className="skills__name">Theme.js</span>
              </div>
              <div className="skills__bar skills__ux"></div>
              <div>
                <span className="skills__percentage">80%</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="skills__subtitle">APIs & Tools</h2>

            <div className="skills_data">
              <div className="skills__names">
                <span className="skills__name">REST API (Node.js)</span>
              </div>
              <div className="skills__bar skills__html"></div>
              <div>
                <span className="skills__percentage">80%</span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills__names">
                <span className="skills__name">SQLite</span>
              </div>
              <div className="skills__bar skills__css"></div>
              <div>
                <span className="skills__percentage">70%</span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills__names">
                <span className="skills__name">Postman</span>
              </div>
              <div className="skills__bar skills__js"></div>
              <div>
                <span className="skills__percentage">80%</span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills__names">
                <span className="skills__name">Razorpay, Stripe, Checkout.com, Tap</span>
              </div>
              <div className="skills__bar skills__ux"></div>
              <div>
                <span className="skills__percentage">75%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WORK ===== */}
      <WorkSection />

      {/* ===== CONTACT ===== */}
      <ContactForm />

    </main>
  );
}
