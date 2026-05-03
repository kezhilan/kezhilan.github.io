document.getElementById("genHTML").addEventListener("click", () => {

    const first = document.getElementById("firstName").value;
    const last = document.getElementById("lastName").value;

    const mascotAdj = document.getElementById("mascotAdj").value;
    const mascotAnimal = document.getElementById("mascotAnimal").value;

    const personalBackground = document.getElementById("personalBackground").value;
    const professionalBackground = document.getElementById("professionalBackground").value;
    const academicBackground = document.getElementById("academicBackground").value;

    const statement = document.getElementById("personalStatement").value;

    document.body.innerHTML = `
        <h2>Introduction HTML</h2>

        <pre><code>
&lt;h1&gt;${first} ${last} | ${mascotAdj} ${mascotAnimal}&lt;/h1&gt;

&lt;ul&gt;
  &lt;li&gt;Personal Background: ${personalBackground}&lt;/li&gt;
  &lt;li&gt;Professional Background: ${professionalBackground}&lt;/li&gt;
  &lt;li&gt;Academic Background: ${academicBackground}&lt;/li&gt;
&lt;/ul&gt;

&lt;p&gt;${statement}&lt;/p&gt;
        </code></pre>

        <a href="intro_form.html">Back</a>
    `;
});