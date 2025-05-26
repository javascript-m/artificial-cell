// src/app/page.tsx
import Image from "next/image";
import "./styles.css";

export default function Home() {
  return (
    <div className="landing-page">
      <header className="header">
        <h1 className="title">Artificial Cell Meeting</h1>
        <p className="subtitle">15th - 18th June | Zadar | Croatia</p>
      </header>

      <div className="content-grid">
        <section className="section program-section">
          <h2 className="section-title">Program</h2>
          <div className="program">
            <h3>Monday Morning – Bot-level presentations</h3>
            <ul>
              <li>I. Mammadli and J. Pande – Update on the second paper drafting</li>
              <li>P. Shrestha – Update on the optimisation of bot flocks motions</li>
              <li>F. Novkoski – Update on the brainbot technology</li>
            </ul>

            <h3>Monday Afternoon – Cell-level presentations</h3>
            <ul>
              <li>F. Wéry – Update on the cell level experiments</li>
              <li>P. Nowakowski – Update on the cell level simulations</li>
            </ul>

            <h3>Monday Evening</h3>
            <ul>
              <li>ERC coordination – Identifying key preliminary results that should be completed</li>
            </ul>

            <h3>Tuesday Morning – Tissue-level presentations</h3>
            <ul>
              <li>F. Novkoski – Update on the jamming transition in robotic cell assemblies</li>
              <li>K. Höllring – Update on the Vertex model simulations of the rigidification transition</li>
              <li>M. Grelier and M. Milas – Update on the DPD simulations of stimulated tissue growth</li>
            </ul>

            <h3>Tuesday Afternoon</h3>
            <ul>
              <li>Blackboard Discussion – Construction of ANTs</li>
              <li>Discussion – Pathfinder challenge and other patent-based activities</li>
            </ul>

            <h3>Wednesday Morning</h3>
            <ul>
              <li>Work on the papers, joint data analysis</li>
            </ul>

            <h3>Wednesday Afternoon</h3>
            <ul>
              <li>Excursion to a local attraction and the beach</li>
            </ul>

            <h3>Wednesday Evening</h3>
            <ul>
              <li>Wine, cheese, robotics and physics</li>
            </ul>

            <h3>Thursday Morning</h3>
            <ul>
              <li>Departure</li>
            </ul>
          </div>
        </section>

        <section className="section speaker-section">
          <h2 className="section-title">Invited Speakers</h2>
          <ul className="list">
            <li>Dr. Sc. Ana Sunčana Smith</li>
            <li>Dr. Sc. Nicolas Vandewalle</li>
            <li>Prof. Jayant Pande</li>
            <li>Dr. Piotr Nowakowski</li>
            <li>Prof. Dr. Andreas Maier</li>
            <li>Fanny Wéry</li>
            <li>Filip Novkoski</li>
            <li>Isa Mammadli</li>
            <li>Kevin Höllring</li>
            <li>Maja Milas</li>
            <li>Mathis Grelier</li>
            <li>Prajol Shrestha</li>
          </ul>
        </section>
      </div>

      <footer className="footer">
        <p>© 2025 Artificial Cell Meeting.</p>
      </footer>
    </div>
  );
}
