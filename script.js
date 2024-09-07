"use strict";
const form = document.getElementById('resume-form');
const resumeDisplay = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const university = document.getElementById('university').value;
    const degree = document.getElementById('degree').value;
    const jobTitle = document.getElementById('job-title').value;
    const company = document.getElementById('company').value;
    const skills = document.getElementById('skills').value.split(',');
    // Create resume HTML dynamically
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
    // Display the resume in the resume container
    resumeDisplay.innerHTML = resumeHTML;
});
