const animatedScollObserver = new IntersectionObserver(
  (enteries) => {
    enteries.forEach((entry) => {
      if(entry.isIntersecting) { 
        entry.target.classList.add('enter')
        // entry.target.classList.remove('before-enter')
        animatedScollObserver.unobserve(entry.target)
      }
    }) 
  }
)

export default { 
  bind(el) { 
    el.classList.add('before-enter')  
    animatedScollObserver.observe(el)
  }
}