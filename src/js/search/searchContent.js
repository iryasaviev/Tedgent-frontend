export class SearchContent {
    getPage() {
        return `<div class="cnt_bd-search">
        <div class="search_hd">
          <div class="search_hd-inp_wr inp_wr js-inp-wrapper" data-characters-limit="true"
            data-auto-hang-handler="true">
            <input class="search_hd--inp inp js-inp" name="search" data-characters-max-limit-value="100" type="text"
              placeholder="Поиск">
            <button class="search_hd-inp--btn btn btn-1">
              <span class="i-search"></span>
            </button>
            <span class="inp-limit--value js-inp-limit-value">100</span>
          </div>
          <div class="search_hd-filter">
            <button class="search_hd-filter--discard btn btn-2 js-search-filter-discard">Сбросить</button>
            <div class="search_hd-filter-subject select js-select js-search-filter-subject" title="Предмет теста">
              <button class="test-create_bd-select_hd js-select-head select_hd">
                <div class="select_hd-value js-select-value" data-select-option-value="0"></div>
                <div class="select_hd--icon i-down-arrow"></div>
              </button>
              <input class="select_hd-value--inp js-select-value-inp" type="text" value="0">
              <div class="select_bd">
                <button class="select_bd-option" data-select-option="1">
                  <div class="select-subject-option--square subject-bcg-1"></div>
                  <div>Математика</div>
                </button>
                <button class="select_bd-option" data-select-option="2">
                  <div class="select-subject-option--square subject-bcg-1-1"></div>
                  <div>Алгебра</div>
                </button>
                <button class="select_bd-option" data-select-option="3">
                  <div class="select-subject-option--square subject-bcg-1-2"></div>
                  <div>Геометрия</div>
                </button>
                <button class="select_bd-option" data-select-option="4">
                  <div class="select-subject-option--square subject-bcg-1-3"></div>
                  <div>Информатика</div>
                </button>
                <button class="select_bd-option" data-select-option="5">
                  <div class="select-subject-option--square subject-bcg-2"></div>
                  <div>Родной язык</div>
                </button>
                <button class="select_bd-option" data-select-option="6">
                  <div class="select-subject-option--square subject-bcg-2-1"></div>
                  <div>Чтение / Литература</div>
                </button>
                <button class="select_bd-option" data-select-option="7">
                  <div class="select-subject-option--square subject-bcg-2-2"></div>
                  <div>Иностранный язык</div>
                </button>
                <button class="select_bd-option" data-select-option="8">
                  <div class="select-subject-option--square subject-bcg-3"></div>
                  <div>География</div>
                </button>
                <button class="select_bd-option" data-select-option="9">
                  <div class="select-subject-option--square subject-bcg-3-1"></div>
                  <div>Биология</div>
                </button>
                <button class="select_bd-option" data-select-option="10">
                  <div class="select-subject-option--square subject-bcg-3-2"></div>
                  <div>Физика</div>
                </button>
                <button class="select_bd-option" data-select-option="11">
                  <div class="select-subject-option--square subject-bcg-3-3"></div>
                  <div>Химия</div>
                </button>
                <button class="select_bd-option" data-select-option="12">
                  <div class="select-subject-option--square subject-bcg-3-4"></div>
                  <div>Астрономия</div>
                </button>
                <button class="select_bd-option" data-select-option="13">
                  <div class="select-subject-option--square subject-bcg-4"></div>
                  <div>История</div>
                </button>
                <button class="select_bd-option" data-select-option="14">
                  <div class="select-subject-option--square subject-bcg-4-1"></div>
                  <div>Обществознание</div>
                </button>
                <button class="select_bd-option select_bd-option-last" data-select-option="0">
                  <div class="select-subject-option--square subject-bcg-0"></div>
                  <div>Другой</div>
                </button>
              </div>
            </div>
            <div class="search_hd-filter-date date-inp_wr">
              <span class="date-inp--icon inp--icon i-calendar"></span>
              <input class="inp date--inp js-date-inp js-search-filter-date" type="text" placeholder="03.07.2020"
                title="Дата создания теста">
            </div>
          </div>
        </div>
        <div class="search_bd">
          <div class="cnt-block">
            <div class="cnt-block_hd">
              <div class="cnt-block_hd-title">Результаты поиска</div>
            </div>
            <div class="cnt-block_bd search-result_bd">
              <span class="cnt-block_bd--mess">Ничего не найдено.</span>
              <div class="search-result-users"></div>
              <div class="search-result-tests"></div>
            </div>
          </div>
        </div>
      </div>`;
    }
}