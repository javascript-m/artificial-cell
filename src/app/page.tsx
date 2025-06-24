// src/app/page.tsx
import Image from "next/image";
import "./styles.css";

export default function Home() {
  return (
    <div className="landing-page">
      <header className="header">
        <h1 className="title">Artificial Cell Meeting</h1>
        <p className="subtitle">15th - 19th June | Zadar | Croatia</p>
      </header>

      <div className="content-grid">
        <section className="section program-section">
          <h2 className="section-title">Program</h2>
          <div className="program">
            <h3>Monday Morning – Bot-level presentations</h3>
            <p>Discussion coordinator: A. S. Smith, N. Vandewalle</p>
            <ul>
              <li>I. Mammadli and J. Pande – Update on the second paper drafting</li>
              <li>P. Shrestha – Update on the optimisation of bot flocks motions</li>
              <li>F. Novkoski – Update on the brainbot technology</li>
            </ul>

            <h3>Monday Afternoon – Cell-level presentations</h3>
            <p>Discussion coordinator: A. S. Smith, N. Vandewalle</p>
            <ul>
              <li>F. Wéry – Update on the cell level experiments</li>
              <li>P. Nowakowski – Update on the cell level simulations</li>
            </ul>

            <h3>Monday Evening</h3>
            <ul>
              <li>ERC coordination – Identifying key preliminary results that should be completed</li>
            </ul>

            <h3>Tuesday Morning – Tissue-level presentations</h3>
            <p>Discussion coordinator: A. S. Smith, A. Maier</p>
            <ul>
              <li>F. Novkoski – Update on the jamming transition in robotic cell assemblies</li>
              <li>K. Höllring – Update on the Vertex model simulations of the rigidification transition</li>
              <li>M. Grelier and M. Milas – Update on the DPD simulations of stimulated tissue growth</li>
            </ul>

            <h3>Tuesday Afternoon</h3>
            <ul>
              <li>A. Maier - Physics meets robotics</li>
              <li>Blackboard Discussion – Construction of ANTs</li>
              <li>Discussion – Pathfinder challenge and other patent-based activities</li>
            </ul>

            <h3>Wednesday Morning</h3>
            <ul>
              <li>Work on the papers, joint data analysis</li>
            </ul>

            <h3>Wednesday Afternoon</h3>
            <ul>
              <li>Conference excursion and informal discussions</li>
            </ul>

            <h3>Wednesday Evening</h3>
            <ul>
              <li>Conference dinner</li>
              <li>Senior PIs coordination meeting</li>
            </ul>

            <h3>Thursday Morning</h3>
            <ul>
              <li>Future tasks assignment</li>
              <li>Departure</li>
            </ul>
          </div>
        </section>

        <section className="section speaker-section">
          <img
            src="/artificial-cell.png"
            alt="Artificial cells"
            className="w-full h-auto mb-16 mx-auto rounded-xl shadow-md"
          />
          <h2 className="section-title">Invited Speakers</h2>
          <ul className="list">
            <li>Prof. Dr. Andreas Maier</li>
            <li>Prof. Dr. Jayant Pande</li>
            <li>Prof. Dr. Ana Sunčana Smith</li>
            <li>Prof. Dr. Nicolas Vandewalle</li>
            <li>Dr. Kevin Höllring</li>
            <li>Dr. Filip Novkoski</li>
            <li>Dr. Piotr Nowakowski</li>
            <li>Mathis Grelier</li>
            <li>Isa Mammadli</li>
            <li>Maja Milas</li>
            <li>Prajol Shrestha</li>
            <li>Fanny Wéry</li>
          </ul>
          
        </section>
      </div>

      <footer className="footer">
        <p>© 2025 Artificial Cell Meeting.</p>
      </footer>
    </div>
  );
}
