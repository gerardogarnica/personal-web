const setHomeInfo = ({ home }) => {
  const { id, name, title } = home

  const homeInfoBegin = document.querySelector('.home-info-begin')
  const homeInfoName = document.querySelector('.home-info-name')
  const homeInfoTitle = document.querySelector('.home-info-title')

  console.log(home)
  homeInfoBegin.innerHTML = 'Hola! Soy'
  homeInfoName.innerHTML = name
  homeInfoTitle.innerHTML = title
}

export default setHomeInfo
