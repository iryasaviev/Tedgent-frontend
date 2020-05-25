import { Cookie } from './cookie';

export class DarkTheme {
    setOrRemoveTheme() {
        let cookie = new Cookie(),
            cookieValue = cookie.getCookie('darkTheme');

        if (cookieValue !== undefined) {
            let body = document.getElementById('body');
            if (cookieValue === 'true') {
                cookie.deleteCookie('darkTheme');
            }
            else {
                cookie.setCookie('darkTheme', 'true');
            }
            body.classList.toggle('dark-theme');
        }
        else {
            cookie.setCookie('darkTheme', 'true');
        }
    }
}