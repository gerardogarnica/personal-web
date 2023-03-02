const setAboutInfo = ({ about }) => {
  const { mainDescription, secondaryDescription, cvUri } = about

  const aboutInfoMainDescription = document.querySelector('.about-info-main-description')
  const aboutInfoSecondaryDescription = document.querySelector('.about-info-secondary-description')
  //const aboutCurriculumLink = document.getElementById('about-curriculum-link')
  //const aboutCurriculumText = document.querySelector('.about-curriculum-text')

  aboutInfoMainDescription.innerHTML = mainDescription
  aboutInfoSecondaryDescription.innerHTML = secondaryDescription
  //homeCurriculumLink.href = cvUri
  //homeCurriculumText.innerHTML = 'Descargar CV'
}

export default setAboutInfo
