document.getElementById("genJSON").addEventListener("click", () => {

    const data = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        mascot: document.getElementById("mascotAdj").value + " " + document.getElementById("mascotAnimal").value,

        personalBackground: document.getElementById("personalBackground").value,
        professionalBackground: document.getElementById("professionalBackground").value,
        academicBackground: document.getElementById("academicBackground").value,

        statement: document.getElementById("personalStatement").value,
        funny: document.getElementById("funny").value,
        share: document.getElementById("share").value
    };

    document.body.innerHTML = `
        <h2>Introduction JSON</h2>
        <pre>${JSON.stringify(data, null, 2)}</pre>
        <a href="intro_form.html">Back</a>
    `;
});