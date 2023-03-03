const setAboutInfo = ({ about }) => {
  const { mainDescription, secondaryDescription, cvUri, skillsTitle } = about

  const aboutInfoMainDescription = document.querySelector('.about-info-main-description')
  const aboutInfoSecondaryDescription = document.querySelector('.about-info-secondary-description')
  const aboutCurriculumLink = document.getElementById('about-curriculum-link')
  const aboutCurriculumText = document.querySelector('.about-curriculum-text')
  const aboutSkillsTitle = document.querySelector('.about-info-skills-title')

  aboutInfoMainDescription.innerHTML = mainDescription
  aboutInfoSecondaryDescription.innerHTML = secondaryDescription
  aboutCurriculumLink.href = cvUri
  aboutCurriculumText.innerHTML = 'Descargar CV'
  aboutSkillsTitle.innerHTML = skillsTitle
}

export default setAboutInfo
