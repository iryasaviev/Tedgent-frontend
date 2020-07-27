export class ServiceSettingsContent {

	getPage() {
		return `<div class="cnt_bd-settings js-settings-bd">
    <div class="settings_hd">
      <div class="settings_hd-menu pivot-menu">
        <button class="settings_hd-menu--btn btn pivot-menu--btn js-link-btn" data-link="/acconut/settings"
          data-link-page-num="6" data-action="goToPage" data-run-in-frame="true">Аккаунт</button>
        <button class="settings_hd-menu--btn btn pivot-menu--btn js-link-btn pivot-menu--btn-active"
          data-link="/acconut/settings" data-link-page-num="7" data-action="goToPage"
          data-run-in-frame="true">Сервис</button>
      </div>
    </div>
    <div class="settings_bd">
      <div class="cnt-block">
        <div class="cnt-block_hd">
          <div class="cnt-block_hd-title">Внешний вид</div>
        </div>
        <div class="settings-service-appearance-block_bd cnt-block_bd">
          <div class="settings-service-appearance-label">
            <span class="label-txt">Фон</span>
            <div class="settings-service-appearance-bcgds">
              <div class="settings-service-appearance-bcg"
                data-background-img-num="1" data-settings-service-action="changeBackgroundImage">
                <img class="settings-service-appearance-bcg--img js-settings-service-appearance-img"
                  src="./img/background1.jpg">
              </div>
              <div class="settings-service-appearance-bcg"
                data-background-img-num="2" data-settings-service-action="changeBackgroundImage">
                <img class="settings-service-appearance-bcg--img js-settings-service-appearance-img"
                  src="./img/background2.jpg">
              </div>
              <div class="settings-service-appearance-bcg"
                data-background-img-num="3" data-settings-service-action="changeBackgroundImage">
                <img class="settings-service-appearance-bcg--img js-settings-service-appearance-img"
                  src="./img/background3.jpg">
              </div>
              <div class="settings-service-appearance-bcg"
                data-background-img-num="4" data-settings-service-action="changeBackgroundImage">
                <img class="settings-service-appearance-bcg--img js-settings-service-appearance-img"
                  src="./img/background4.jpg">
              </div>
              <div class="settings-service-appearance-bcg"
                data-background-img-num="5" data-settings-service-action="changeBackgroundImage">
                <img class="settings-service-appearance-bcg--img js-settings-service-appearance-img"
                  src="./img/background5.jpg">
              </div>
              <div class="settings-service-appearance-bcg"
                data-background-img-num="6" data-settings-service-action="changeBackgroundImage">
                <img class="settings-service-appearance-bcg--img js-settings-service-appearance-img"
                  src="./img/background6.jpg">
              </div>
            </div>
            <label
              class="settings-service-appearance-bcg-toggle toggle js-toggle js-settings-service-appearance-img-solid-color-toggle"
              data-settings-service-action="toggleBackgroundSolidColor">
              <button class="toggle--btn js-toggle-btn" data-toggle-value="false">
                <div class="toggle--lever js-toggle-lever"></div>
              </button>
              <span class="toggle--txt js-toggle-txt">Сплошной цвет</span>
            </label>
            <label
              class="settings-service-appearance-bcg-toggle toggle js-toggle js-settings-service-appearance-img-blur-toggle"
              data-settings-service-action="toggleBackgroundBlur">
              <button class="toggle--btn js-toggle-btn" data-toggle-value="true">
                <div class="toggle--lever js-toggle-lever"></div>
              </button>
              <span class="toggle--txt js-toggle-txt">Размытие</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>`;
	}
}