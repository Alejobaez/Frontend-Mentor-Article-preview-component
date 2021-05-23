const cardBtn = document.getElementById('card-btn'),
  imgCard = cardBtn.querySelector('img'),
  shareBtn = document.getElementById('share-btn'),
  imgShare = shareBtn.querySelector('img'),
  share = document.querySelector('.share')

console.log({ cardBtn, shareBtn, share, imgShare, imgCard })

window.addEventListener('click', (event) => {
  if (event.target === shareBtn || event.target === imgShare) {
    share.style.display = 'none'
  }
  if (event.target === cardBtn || event.target === imgCard) {
    share.style.display = 'flex'
  }
})

window.addEventListener('resize', (e) => {
  if (e.target.innerWidth === 800) {
    window.addEventListener('click', (event) => {
      if (event.target === cardBtn || event.target === imgCard) {
        share.style.visibility = 'visible'
        cardBtn.classList.add('card__profile-btn--active')
      } else {
        share.style.visibility = 'hidden'
        cardBtn.classList.remove('card__profile-btn--active')
      }
    })
  } else {
    console.log('no')
    cardBtn.classList.remove('card__profile-btn--active')
  }
})
