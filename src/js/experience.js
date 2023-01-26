const setExperiences = ({ experiences }) => {
  const experienceSection = document.getElementById('experience-info')
  const experiencesArray = [...experiences]
  let side = 'right'

  experienceSection.innerHTML = `
    <div class="experience-timeline-line">
      <a href="#experience" class="experience-timeline-line-end" title="Volver al inicio">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/></svg>
      </a>
    </div>`

  experiencesArray.forEach((experience) => {
    const { id, company, period, details } = experience;

    if (side === 'left') {
        side = 'right'
    } else {
        side = 'left'
    }

    const detailsText = getDetailsText(details)

    experienceSection.innerHTML += `
      <section class="experience-card ${side}">
        <div class="experience-card-content">
          <div class="experience-card-content-step">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16"><path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/></svg>
        </div>
        <div class="experience-card-content-company">
          <span class="experience-card-content-company-name">${company}</span>
          <span class="experience-card-content-company-period">${period}</span>
        </div>
        <p>
          ${detailsText}
        </p>
        </section>`
  })
}

const getDetailsText = (details) => {
  let detailsText = ''

  for (let i = 0; i < details.length; i++) {
    if (details.length > 1 && i === details.length - 1) {
      detailsText += '</br></br>'
    }
    detailsText += `<b>${details[i].position}</b> ${details[i].description}`
  }

  return detailsText
}

export default setExperiences
