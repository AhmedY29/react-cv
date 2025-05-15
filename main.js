// let element = React.createElement("p", {
//   children: "Ahmed Yaqoub",
//   className: "text",
// });

let root = document.getElementById("root");
root.style.display = "flex";
root.style.justifyContent = "center";
let app = (
  <div className="container">
    <div className="section about-me">
      <h2>Ahmed Yaqoub Alsaleh</h2>
      <p>SOFTWARE ENGINEER</p>
    </div>

    <div className="section">
      <h2 className="subtitle">OBJECTIVE</h2>
      <p>
        Innovative Software Engineer specializing in web development, with a
        strong foundation in problem-solving, team collaboration, and effective
        communication. Knowledge in building scalable applications using
        React.js, Node.js, and MongoDB, I thrive in dynamic environments that
        demand adaptability, time management, and attention to detail. Eager to
        contribute my technical skills and collaborative mindset to a
        forward-thinking team, delivering high-impact solutions that align with
        business goals.
      </p>
    </div>
    <div className="section">
      <h2 className="subtitle">EXPERIENCE</h2>
      <div className="exp">
        <div className="title-exp">
          <h4>Full-Stack Developer – Tuwaiq Bootcamp </h4>
          <h4>Apr 2025 – Present</h4>
        </div>
        <p>
          - Acquired in-depth knowledge of JavaScript, React, and Express for
          building modern web applications.
        </p>
        <p>
          - Developed advanced websites and apps with a focus on user experience
          (UX) and industry best practices.
        </p>
      </div>

      <div className="exp">
        <div className="title-exp">
          <h4>IT Specialist – Coop Labor office</h4>
          <h4> Jan 2022 – May 2022</h4>
        </div>
        <p>
          - Automated routine office tasks using Microsoft Office tools (Excel,
          Word), reducing manual work.
        </p>
        <p>
          - Developed a Windows Forms application to streamline office tasks,
          using C# .
        </p>
        <p>- Completing administrative office tasks.</p>
      </div>
    </div>
    <div className="section">
      <h2 className="subtitle">EDUCATION</h2>
      <div className="exp">
        <div className="title-exp">
          <h4>
            Bachelor of Applied Programming and Web Development Engineering
          </h4>
          <h4>2022 - 2025</h4>
        </div>
        <p>
          Buraidah College of Technology <strong>GPA 4.74 </strong>
        </p>
      </div>

      <div className="exp">
        <div className="title-exp">
          <h4>Diploma of Computer Programming</h4>
          <h4>2019 - 2022</h4>
        </div>
        <p>
          Al-Ahsa College of Technology <strong> GPA 4.6</strong>
        </p>
      </div>
    </div>
    <div className="section">
      <h2 className="subtitle">CERTIFICATES</h2>
      <div className="exp">
        <p>
          <strong> - Udemy:</strong> React js - Hooks - Redux - State - Router:{" "}
          <a href="ude.my/UC-012deb23-910b-4902-a2f7-f8b732e43435">
            ude.my/UC-012deb23-910b-4902-a2f7-f8b732e43435
          </a>
        </p>
      </div>
    </div>
    <div className="section">
      <h2 className="subtitle">TECHNICAL SKILLS</h2>
      <ul>
        <li>
          <strong>Programming Languages:</strong> JavaScript, Python, Java,
          Dart, C#
        </li>
        <li>
          <strong>Frontend:</strong> React.js, HTML, CSS, Material-UI (MUI),
          Bootstrap, Responsive Design, Redux , Zustand
        </li>
        <li>
          <strong>Backend:</strong> Node.js, Express.js, RESTful APIs, JWT (JSON
          Web Tokens), Bcrypt
        </li>
        <li>
          <strong>Databases:</strong> MongoDB(NoSql), MySQL, Database Management
        </li>
        <li>
          <strong>Tools:</strong> Git, GitHub, Postman, Agile Methodology, Scrum
        </li>
      </ul>
    </div>
    <div className="section">
      <h2 className="subtitle">PROJECTS</h2>
      <table>
        <tr>
          <td>
            <strong>Real Estate “ MASKN “:</strong>
            <strong> Technologies:</strong> React.js, MUI, Express.js, MongoDB,
            Node.js, Zustand, JWT, Bcrypt, Leaflet, Mailtrap A platform for
            buying and renting properties, enabling marketers to showcase their
            listings professionally. The platform offers users a seamless
            browsing experience and an advanced search feature to find
            properties efficiently.{" "}
            <a href="https://maskn.site/">https://maskn.site/</a>
          </td>
        </tr>
        <tr>
          <td>
            Portfolio: Technologies: React.js, CSS, GSAP Portfolio website
            highlighting my projects and tech stack.
            https://ahmed-alsaleh.netlify.app/
          </td>
        </tr>
      </table>
    </div>
  </div>
);

ReactDOM.render(app, root);
