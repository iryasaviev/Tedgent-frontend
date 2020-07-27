export class AccountSettingsContent {

  getPage() {
    return `<div class="cnt_bd-settings">
        <div class="settings_hd">
          <div class="settings_hd-menu pivot-menu">
            <button class="settings_hd-menu--btn btn pivot-menu--btn pivot-menu--btn-active js-link-btn"
              data-link="/acconut/settings" data-link-page-num="6" data-action="goToPage" data-run-in-frame="true">Аккаунт</button>
            <button class="settings_hd-menu--btn btn pivot-menu--btn js-link-btn" data-link="/acconut/settings"
              data-link-page-num="7" data-action="goToPage" data-run-in-frame="true">Сервис</button>
          </div>
        </div>
        <div class="settings_bd">
          <div class="cnt-block">
            <div class="cnt-block_hd">
              <div class="cnt-block_hd-title">Публичные данные</div>
            </div>
            <div class="settings-acc-info-block_bd cnt-block_bd">
              <label class="settings-acc-info-label">
                <span class="label-txt">Фамилия</span>
                <div class="inp_wr inp-limit-value-visisble js-inp-wrapper" data-characters-limit="true"
                  data-auto-hang-handler="true">
                  <input class="inp js-inp" name="firstName" data-characters-max-limit-value="50" type="text">
                  <span class="inp-limit--value js-inp-limit-value">50</span>
                </div>
              </label>
              <label class="settings-acc-info-label">
                <span class="label-txt">Имя</span>
                <div class="inp_wr inp-limit-value-visisble js-inp-wrapper" data-characters-limit="true"
                  data-auto-hang-handler="true">
                  <input class="inp js-inp" name="lastName" data-characters-max-limit-value="50" type="text">
                  <span class="inp-limit--value js-inp-limit-value">50</span>
                </div>
              </label>
              <label class="settings-acc-info-label">
                <span class="label-txt">Отчество</span>
                <div class="inp_wr inp-limit-value-visisble js-inp-wrapper" data-characters-limit="true"
                  data-auto-hang-handler="true">
                  <input class="inp js-inp" name="patronymic" data-characters-max-limit-value="50" type="text">
                  <span class="inp-limit--value js-inp-limit-value">50</span>
                </div>
              </label>
              <label class="settings-acc-info-label">
                <span class="label-txt">Дата рождения</span>
                <div class="date-inp_wr">
                  <span class="date-inp--icon inp--icon i-calendar"></span>
                  <input class="inp date--inp js-date-inp" type="text" placeholder="03.07.2020">
                </div>
              </label>
              <label class="settings-acc-info-label">
                <span class="label-txt">Имя пользователя</span>
                <div class="inp_wr inp-limit-value-visisble js-inp-wrapper" data-characters-limit="true"
                  data-auto-hang-handler="true">
                  <input class="inp js-inp" name="userName" data-characters-max-limit-value="30" type="text">
                  <span class="inp-limit--value js-inp-limit-value">30</span>
                </div>
                <span class="label-dsc">Имя пользователя позволяет найти Ваш профиль не зная Вашего личного
                  идентификатора.</span>
                <span class="label-dsc">Можно использовать латиницу (a-z), цифры (0-9) и тире. Минимальная длина — 5
                  символов.</span>
                <span class="label-dsc">Ваш профиль будет доступен по ссылке <a
                    class="link js-settings-account-info-username-link"
                    href="https://tedgent.org/ir-yasaviev">https://tedgent.org/ir-yasaviev</a></span>
              </label>
            </div>
            <div class="settings-acc-info-block_ft cnt-block_ft">
              <button class="btn btn-1 settings-save--btn">Сохранить</button>
            </div>
          </div>
          <div class="cnt-block">
            <div class="cnt-block_hd">
              <div class="cnt-block_hd-title">Безопасность</div>
            </div>
            <div class="settings-acc-security-block_bd cnt-block_bd">
              <label class="settings-acc-security-label">
                <span class="label-txt">Старый пароль</span>
                <div class="inp_wr js-inp-wrapper" data-characters-limit="true" data-auto-hang-handler="true">
                  <input class="inp js-inp" name="oldPassword" data-characters-max-limit-value="30" type="password">
                </div>
              </label>
              <label class="settings-acc-security-label">
                <span class="label-txt">Новый пароль</span>
                <div class="inp_wr js-inp-wrapper" data-characters-limit="true" data-auto-hang-handler="true">
                  <input class="inp js-inp" name="newPassword" data-characters-max-limit-value="30" type="password">
                </div>
                <span class="label-dsc">Пароль должен быть на латинице (a-z), содержать цифры (0-9), один знак в верхнем
                  регистре (A) и один в нижнем (a).</span>
              </label>
              <label class="settings-acc-security-label">
                <span class="label-txt">Повторите новый пароль</span>
                <div class="inp_wr js-inp-wrapper" data-characters-limit="true" data-auto-hang-handler="true">
                  <input class="inp js-inp" name="newPassword" data-characters-max-limit-value="30" type="password">
                </div>
              </label>
            </div>
            <div class="settings-acc-security-block_ft cnt-block_ft">
              <button class="btn btn-1 settings-save--btn">Сохранить</button>
            </div>
          </div>
        </div>
      </div>`;
  }
}