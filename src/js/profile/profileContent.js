export class ProfileContent {
    getPage() {
        return `<div class="cnt_bd-profile">
        <div class="profile_hd">
          <img class="profile_hd--img" src="./img/pp.jpg">
          <div class="profile_hd-info">
            <div class="profile_hd-info--names">
              <span>Иванов Иван Иванович</span>
            </div>
            <div class="profile_hd-info--email">
              <span><a class="link" href="mailto:ir.yasaviev@yandex.ru">ir.yasaviev@yandex.ru</a></span>
            </div>
            <div class="profile_hd-info--nickname">
              <span>@ir_yasaviev</span>
            </div>
          </div>
        </div>
        <div class="profile_bd">
          <div class="profile-tests cnt-block">
            <div class="cnt-block_hd">
              <div class="profile-tests-title cnt-block_hd-title">
                <span>Тесты</span>
                <span class="profile-tests-title--counter">0</span>
              </div>
              <div class="profile-tests-menu">
                <input class="inp profile-tests-menu--search" type="text" placeholder="Поиск">
                <button class="btn profile-tests-menu-alphabet-sort">
                  <span class="btn--icon i-sort-alphabet"></span>
                  <span class="profile-tests-menu-alphabet-sort--txt">По алфавиту</span>
                </button>
                <button class="btn profile-tests-menu-raiting-sort">
                  <span class="btn--icon i-star"></span>
                  <span class="profile-tests-menu-raiting-sort--txt">По рейтингу</span>
                </button>
                <div class="profile-tests-menu-date date-inp_wr">
                  <span class="date-inp--icon inp--icon i-calendar"></span>
                  <input class="profile-tests-menu-date--inp inp date--inp js-date-inp" type="text"
                    placeholder="03.07.2020" title="Сортировка по дате создания теста">
                </div>
              </div>
            </div>
            <div class="profile-tests_bd cnt-block_bd">
              <span class="cnt-block_bd--mess">Пользователь не создал ещё ни одного теста.</span>
            </div>
          </div>
        </div>
      </div>`;
    }
}