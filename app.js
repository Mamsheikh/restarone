const person_btn = document.querySelectorAll('.person');

person_btn.forEach((item) => {
  item.addEventListener('click', () => {
    if (
      document.getElementById('main').className.match(/(?:^|\s)block(?!\S)/)
    ) {
      document.getElementById('main').className = document
        .getElementById('main')
        .className.replace(/(?:^|\s)flex(?!\S)/g, '');
    }
    document.getElementById('main').classList.toggle('hidden');
    if (document.getElementById('flex').className.match(/(?:^|\s)flex(?!\S)/)) {
      document.getElementById('flex').className = 'block';
    } else {
      document.getElementById('flex').className = 'flex';
    }
  });
});
