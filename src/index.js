document.getElementById('myBtnReset').addEventListener('click', () => {
  document.getElementById('phrase').innerHTML = '';
});

document.getElementById('myBtn').addEventListener('click', () => {
  document.getElementById('phrase').innerHTML = '';
  document.getElementById('loader').style.display = 'block';
  document.getElementById('loader1').style.display = 'block';

  setTimeout(() => {
    let prevu;
    if ((Math.floor(Math.random() * 10) + 1) === 0) {
      prevu = "pas pour l'instant";
    } else if ((Math.floor(Math.random() * 10) + 1) === 1) {
      prevu = 'Bientôt';
    } else if ((Math.floor(Math.random() * 10) + 1) === 2) {
      prevu = "c'est possible, mais n'espérez pas trop";
    } else if ((Math.floor(Math.random() * 10) + 1) === 3) {
      prevu = "L'année prochaine";
    } else if ((Math.floor(Math.random() * 10) + 1) === 4) {
      prevu = "c'est certain !";
    } else if ((Math.floor(Math.random() * 10) + 1) === 5) {
      prevu = 'Laisse tomber, impossible';
    } else if ((Math.floor(Math.random() * 10) + 1) === 6) {
      prevu = "N'espère pas trop";
    } else if ((Math.floor(Math.random() * 10) + 1) === 7) {
      prevu = "L'année prochaine";
    } else if ((Math.floor(Math.random() * 10) + 1) === 8) {
      prevu = 'Presque, occasion ratée';
    } else if ((Math.floor(Math.random() * 10) + 1) === 9) {
      prevu = 'Un peu de patience';
    } else if ((Math.floor(Math.random() * 10) + 1) === 10) {
      prevu = 'Demande à un autre voyant';
    } else {
      prevu = 'Fort probable ... ou pas, c\'était une blague';
    }
    document.getElementById('loader').style.display = 'none';
    document.getElementById('loader1').style.display = 'none';
    document.getElementById('phrase').innerHTML = prevu;
  }, 2000);
});
