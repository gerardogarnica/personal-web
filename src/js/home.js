const setHomeInfo = ({ home }) => {
  const { id, name, title, mainDescription, secondaryDescription, cvUri } = home;

  const homeInfoBegin = document.querySelector('.home-info-begin')
  const homeInfoName = document.querySelector('.home-info-name')
  const homeInfoTitle = document.querySelector('.home-info-title')
  //const homeInfoMainDescription = document.querySelector('.home-info-main-description')
  //const homeInfoSecondaryDescription = document.querySelector('.home-info-secondary-description')
  //const homeCurriculumLink = document.getElementById('home-curriculum-link')
  //const homeCurriculumText = document.querySelector('.home-curriculum-text')

  console.log(home)
  homeInfoBegin.innerHTML = 'Hola! Soy'
  homeInfoName.innerHTML = name
  homeInfoTitle.innerHTML = title
  //homeInfoMainDescription.innerHTML = mainDescription
  //homeInfoSecondaryDescription.innerHTML = secondaryDescription
  //homeCurriculumLink.href = cvUri
  //homeCurriculumText.innerHTML = 'Descargar CV'
}

export default setHomeInfo
