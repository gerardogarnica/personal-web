const setAboutInfo = ({ about }) => {
  const { mainDescription, secondaryDescription, cvUri, skillsTitle, skills } = about

  const aboutInfoMainDescription = document.querySelector('.about-info-main-description')
  const aboutInfoSecondaryDescription = document.querySelector('.about-info-secondary-description')
  const aboutCurriculumLink = document.getElementById('about-curriculum-link')
  const aboutCurriculumText = document.querySelector('.about-curriculum-text')
  const aboutSkillsTitle = document.querySelector('.about-info-skills-title')
  const aboutSkills = document.getElementById('about-skills')

  aboutInfoMainDescription.innerHTML = mainDescription
  aboutInfoSecondaryDescription.innerHTML = secondaryDescription
  aboutCurriculumLink.href = cvUri
  aboutCurriculumText.innerHTML = 'Descargar CV'
  aboutSkillsTitle.innerHTML = skillsTitle

  aboutSkills.innerHTML = getSkillsHtml(skills)
}

const getSkillsHtml = (skills) => {
  let skillsHtml = ''

  for (let i = 0; i < skills.length; i++) {
    skillsHtml += `
      <div class="about-info-skill" title="${skills[i].title}">
        <div class="about-info-skill-img"><img src="./assets/skills/${skills[i].imageFile}" loading="lazy" alt="${skills[i].title}" /></div>
        <p>${skills[i].title}</p>
      </div>`
  }

  return skillsHtml
}

export default setAboutInfo
