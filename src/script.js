const summaryContainer = document.querySelector('[data-summary-container]')
const summaryCardTemplate = document.querySelector(
  '[data-summary-card-template]'
)

const fetchData = async () => {
  const response = await fetch('./data.json')
  const data = await response.json(response)
  return data
}

const fillCards = summary => {
  const card = summaryCardTemplate.content.cloneNode(true)
  const cardElement = card.querySelector('[data-card-container]')
  const cardName = card.querySelector('[data-summary-card-name]')
  const cardIcon = card.querySelector('[data-summary-card-icon]')

  cardName.innerText = summary.category
  card.querySelector('[data-summary-card-score]').innerText = summary.score

  if (summary.category == 'Reaction') {
    cardElement.classList.add('bg-transparentLightRed')
    cardName.classList.add('text-lightRed')
    cardIcon.src = summary.icon
  } else if (summary.category == 'Memory') {
    cardElement.classList.add('bg-transparentOrangeyYellow')
    cardName.classList.add('text-orangeyYellow')
    cardIcon.src = summary.icon
  } else if (summary.category == 'Verbal') {
    cardElement.classList.add('bg-transparentGreenTeal')
    cardName.classList.add('text-greenTeal')
    cardIcon.src = summary.icon
  } else {
    cardElement.classList.add('bg-transparentCobaltBlue')
    cardName.classList.add('text-cobaltBlue')
    cardIcon.src = summary.icon
  }

  summaryContainer.append(card)
}

fetchData()
  .then(summaryData => {
    summaryData.map(fillCards)
  })
  .catch(error => {
    console.log(error)
  })
