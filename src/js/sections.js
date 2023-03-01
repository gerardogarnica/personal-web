const setSectionTitles = ({ sections }) => {
  const { experiences, projects, about } = sections

  const experienceTitle = document.querySelector('.experience-title')
  const projectsTitle = document.querySelector('.projects-title')
  const aboutMeTitle = document.querySelector('.about-title')

  experienceTitle.innerHTML = experiences
  projectsTitle.innerHTML = projects
  aboutMeTitle.innerHTML = about
}

export default setSectionTitles
