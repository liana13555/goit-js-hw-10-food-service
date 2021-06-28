/*Для хранения темы используй localStorage.Если при загрузке страницы тема тёмная,
не забудь поставить свойство checked у чекбокса #theme-switch-toggle в true, 
чтобы ползунок сдвинулся в правильное положение.
Для удобства хранения списка тем используй такое перечисление. */

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const toggleSwitch = document.getElementById('theme-switch-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === Theme.DARK) {
    toggleSwitch.checked = true;
    document.body.classList.add(Theme.DARK);
    }
}

toggleSwitch.addEventListener('change', changeTheme);

function changeTheme(evt) {
    if (evt.target.checked) {
        document.body.classList.add(Theme.DARK);
        document.body.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', Theme.DARK);          
    } else {
       document.body.classList.remove(Theme.DARK);
       document.body.classList.add(Theme.LIGHT);
       localStorage.setItem('theme', Theme.LIGHT);
    }
}
