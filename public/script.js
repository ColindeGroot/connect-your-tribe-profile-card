document.querySelector('.card-container').addEventListener('click', function () {
    const card = document.querySelector('.card');
    if (card.style.transform === 'rotateX(180deg)') {
      card.style.transform = 'rotateX(0deg)';
    } else {
      card.style.transform = 'rotateX(180deg)';
    }
  
    document.querySelectorAll('.theme-select').forEach(button => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        const section = button.getAttribute('data-section');
        showContent(section);
      });
    });
  });
  
  function showContent(section) {
    document.querySelector('.back h2').style.display = 'none';
    document.querySelector('.button-list').style.display = 'none';
  
    document.querySelectorAll('.section-content').forEach(content => {
      content.style.display = 'none';
    });
  
    document.getElementById(section).style.display = 'block';
    document.querySelector('.content').classList.add('visible');
  
  
    document.querySelectorAll('.back-button').forEach(button => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        hideContent();
      });
    });
  }
  
  function hideContent() {
    document.querySelector('.content').classList.remove('visible');
    document.querySelectorAll('.section-content').forEach(content => {
      content.style.display = 'none';
    });
  
    document.querySelector('.back h2').style.display = 'block';
    document.querySelector('.button-list').style.display = 'block';
  }
  
  