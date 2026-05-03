console.log("JS LOADED");

function generateIntroPage() {

    const first = document.getElementById("firstName").value;
    const last = document.getElementById("lastName").value;

    const mascotAdj = document.getElementById("mascotAdj").value;
    const mascotAnimal = document.getElementById("mascotAnimal").value;

    const personalBackground = document.getElementById("personalBackground").value;
    const professionalBackground = document.getElementById("professionalBackground").value;
    const academicBackground = document.getElementById("academicBackground").value;

    const statement = document.getElementById("personalStatement").value;

    const funny = document.getElementById("funny").value;
    const share = document.getElementById("share").value;

    document.body.innerHTML = `
        <h2>Introduction Form</h2>

        <header>
            <h1>${first} ${last} | ${mascotAdj} ${mascotAnimal}</h1>
        </header>

        <main>

            <p>${statement}</p>

            <ul>
                <li><strong>Personal Background:</strong> ${personalBackground}</li>
                <li><strong>Professional Background:</strong> ${professionalBackground}</li>
                <li><strong>Academic Background:</strong> ${academicBackground}</li>

                ${funny ? `<li><strong>Funny:</strong> ${funny}</li>` : ""}
                ${share ? `<li><strong>Share:</strong> ${share}</li>` : ""}
            </ul>

        </main>

        <footer>
            <a href="intro_form.html">Reset</a>
        </footer>
    `;
}

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    generateIntroPage();
});