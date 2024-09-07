const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLElement;

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get values of form
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const university = (document.getElementById('university') as HTMLInputElement).value;
  const degree = (document.getElementById('degree') as HTMLInputElement).value;
  const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
  const company = (document.getElementById('company') as HTMLInputElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');


  
  const resumeHTML = `
    <h2>Personal Information</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>

    <h2>Education</h2>
    <p><strong>University:</strong> ${university}</p>
    <p><strong>Degree:</strong> ${degree}</p>

    <h2>Work Experience</h2>
    <p><strong>Job Title:</strong> ${jobTitle ? jobTitle : "N/A"}</p>
    <p><strong>Company:</strong> ${company ? company : "N/A"}</p>

    <h2>Skills</h2>
    <ul>
      ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
    </ul>
  `;

  // Display the resume 
  resumeDisplay.innerHTML = resumeHTML;
});
