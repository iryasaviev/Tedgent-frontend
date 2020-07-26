export class TestCreateContent {
  getPage() {
    return `<div class="cnt_bd-test">
        <div class="test_hd test-create_hd">
          <div class="test_hd-info test-create_hd-info">
            <div class="test-subject-logo_wr">
              <div class="test-subject-logo subject-bcg-0 js-test-subject-logo"></div>
            </div>
            <div class="test_hd-title">
              <label class="test-create_hd-title-label first">
                <span class="label-txt">Название</span>
                <div class="inp_wr inp-limit-value-visisble js-inp-wrapper" data-characters-limit="true"
                  data-auto-hang-handler="true">
                  <input class="inp js-inp" name="title" data-characters-max-limit-value="100" type="text">
                  <span class="inp-limit--value js-inp-limit-value">100</span>
                </div>
              </label>
              <label class="test-create_hd-title-label">
                <span class="label-txt">Описание</span>
                <div class="inp_wr inp-limit-value-visisble js-inp-wrapper" data-characters-limit="true"
                  data-auto-hang-handler="true">
                  <input class="inp js-inp" name="description" data-characters-max-limit-value="120" type="text">
                  <span class="inp-limit--value js-inp-limit-value">120</span>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div class="test_bd test-create_bd">
          <div class="test_hd-row test-create_bd-subject">
            <label class="test-create_bd-label_select">
              <span class="label-txt">Предмет</span>
              <div class="test-create_bd-select select js-select js-test-create-subject-select"
                title="Основной предмет теста">
                <button class="test-create_bd-select_hd js-select-head select_hd">
                  <div class="select_hd-value js-select-value" data-select-option-value="0"></div>
                  <div class="select_hd--icon i-down-arrow"></div>
                </button>
                <input class="select_hd-value--inp js-select-value-inp" type="text" value="0">
                <div class="select_bd">
                  <button class="select_bd-option js-test-create-subject-select-option" data-select-option="1">
                    <div class="select-subject-option--square subject-bcg-1"></div>
                    <div>Математика</div>
                  </button>
                  <button class="select_bd-option js-test-create-subject-select-option" data-select-option="2">
                    <div class="select-subject-option--square subject-bcg-1-1"></div>
                    <div>Алгебра</div>
                  </button>
                  <button class="select_bd-option js-test-create-subject-select-option" data-select-option="3">
                    <div class="select-subject-option--square subject-bcg-1-2"></div>
                    <div>Геометрия</div>
                  </button>
                  <button class="select_bd-option js-test-create-subject-select-option" data-select-option="4">
                    <div class="select-subject-option--square subject-bcg-1-3"></div>
                    <div>Информатика</div>
                  </button>
                  <button class="select_bd-option js-test-create-subject-select-option" data-select-option="5">
                    <div class="select-subject-option--square subject-bcg-2"></div>
                    <div>Родной язык</div>
                  </button>
                  <button class="select_bd-option js-test-create-subject-select-option" data-select-option="6">
                    <div class="select-subject-option--square subject-bcg-2-1"></div>
                    <div>Чтение / Литература</div>
                  </button>
                  <button class="select_bd-option js-test-create-subject-select-option" data-select-option="7">
                    <div class="select-subject-option--square subject-bcg-2-2"></div>
                    <div>Иностранный язык</div>
                  </button>
                  <button class="select_bd-option js-test-create-subject-select-option" data-select-option="8">
                    <div class="select-subject-option--square subject-bcg-3"></div>
                    <div>География</div>
                  </button>
                  <button class="select_bd-option js-test-create-subject-select-option" data-select-option="9">
                    <div class="select-subject-option--square subject-bcg-3-1"></div>
                    <div>Биология</div>
                  </button>
                  <button class="select_bd-option js-test-create-subject-select-option" data-select-option="10">
                    <div class="select-subject-option--square subject-bcg-3-2"></div>
                    <div>Физика</div>
                  </button>
                  <button class="select_bd-option js-test-create-subject-select-option" data-select-option="11">
                    <div class="select-subject-option--square subject-bcg-3-3"></div>
                    <div>Химия</div>
                  </button>
                  <button class="select_bd-option js-test-create-subject-select-option" data-select-option="12">
                    <div class="select-subject-option--square subject-bcg-3-4"></div>
                    <div>Астрономия</div>
                  </button>
                  <button class="select_bd-option js-test-create-subject-select-option" data-select-option="13">
                    <div class="select-subject-option--square subject-bcg-4"></div>
                    <div>История</div>
                  </button>
                  <button class="select_bd-option js-test-create-subject-select-option" data-select-option="14">
                    <div class="select-subject-option--square subject-bcg-4-1"></div>
                    <div>Обществознание</div>
                  </button>
                  <button
                    class="select_bd-option js-test-create-subject-select-option select_bd-option js-test-create-subject-select-option-last"
                    data-select-option="0">
                    <div class="select-subject-option--square subject-bcg-0"></div>
                    <div>Другой</div>
                  </button>
                </div>
              </div>
            </label>
          </div>
          <div class="test_hd-row test-create_bd-time">
            <label class="test-create_bd-label_select">
              <span class="label-txt">Время на прохождение</span>
              <div class="test-create_bd-select select js-select">
                <button class="test-create_bd-select_hd select_hd js-select-head">
                  <div class="select_hd-value js-select-value" data-select-option-value="0">
                    <div>Нет</div>
                  </div>
                  <div class="select_hd--icon i-down-arrow"></div>
                </button>
                <input class="select_hd-value--inp js-select-value-inp" type="text" value="0">
                <div class="select_bd">
                  <button class="select_bd-option js-test-create-subject-select-option" data-select-option="1">
                    <div>5 минут</div>
                  </button>
                  <button class="select_bd-option js-test-create-subject-select-option" data-select-option="2">
                    <div>15 минут</div>
                  </button>
                  <button class="select_bd-option js-test-create-subject-select-option" data-select-option="3">
                    <div>30 минут</div>
                  </button>
                  <button class="select_bd-option js-test-create-subject-select-option" data-select-option="4">
                    <div>1 час</div>
                  </button>
                  <button class="select_bd-option js-test-create-subject-select-option" data-select-option="5">
                    <div>2 часа</div>
                  </button>
                  <button class="select_bd-option js-test-create-subject-select-option" data-select-option="6">
                    <div>Нет</div>
                  </button>
                </div>
              </div>
            </label>
          </div>
          <div class="test_hd-row test-create_bd-keywords">
            <label class="test-create_bd-keywords-label">
              <span class="label-txt">Ключевые слова</span>
              <div class="test-create_bd-keywords-label--inp inp js-test-create-kewords-inp" contenteditable="true">
              </div>
            </label>
          </div>
          <div class="test_hd-row test-attachments test-create_bd-attachments">
            <span class="label-txt">Вложения</span>
            <div class="test-create_bd-attachments-files js-test-create-attachments-files">
              <label class="test-create_bd-attachments-label btn">
                <span class="i-clip"></span>
                <span>Прикрепить</span>
                <input class="test-create_bd-attachments-label--inp js-test-create-attachments-inp inp" type="file"
                  multiple>
              </label>
            </div>
          </div>
          <div class="test_create_bd-questions test-questions js-test-questions">
            <div class="test_create_bd-question js-test-question" data-question-num="1" data-answers-type="1">
              <div class="test_create_bd-question_bd js-test-question-body">
                <div class="test_create_bd-question-col1">
                  <div class="test_create_bd-question-col1-row">
                    <button
                      class="test_create_bd-question-col1-row--btn btn i-cross js-test-create-question-del-btn"></button>
                    <div class="inp_wr js-inp-wrapper" data-characters-limit="true" data-auto-hang-handler="false">
                      <textarea class="test_create_bd-question-title--inp inp js-inp js-test-create-question-title"
                        name="question" type="text" data-characters-max-limit-value="250"
                        placeholder="Вопрос №1"></textarea>
                    </div>
                  </div>
                  <div class="test_create_bd-question-col1-row test_create_bd-question-col1-row-image">
                    <div class="test_create_bd-question-col1-image">
                      <button
                        class="test_create_bd-question-img--del-btn i-cross btn js-test-question-img-del-btn"></button>
                      <img class="test_create_bd-question--img js-test-question-img">
                    </div>
                  </div>
                  <div
                    class="test_create_bd-question-col1-row test_create_bd-question-answers js-test-question-answers">
                    <div class="test_create_bd-question-answer js-test-question-answer" data-answer-num="1">
                      <div class="test-question-answer-checkbox js-test-question-answer-choice-btn">
                        <input class="test-question-answer-checkbox--inp js-test-question-answer-choice-inp"
                          id="answer11" name="answerCheck1" type="checkbox">
                        <label class="js-test-question-answer-choice-label" for="answer11"></label>
                      </div>
                      <input class="inp test_create_bd-question-answer--inp js-test-question-answer-inp" name="answer"
                        type="text" placeholder="Ответ №1">
                      <button
                        class="test_create_bd-question-answer--btn btn i-cross js-test-create-question-answer-delete-btn" data-answer-action="deleteAnswer"></button>
                    </div>
                  </div>
                  <div class="test_create_bd-question-col1-row test_create_bd-question-col1-row-add-answer">
                    <button class="test_create_bd-question-answer-add--btn btn btn-2 js-test-create-answer-add-btn" data-answer-action="addAnswer">
                      <span class="i-plus"></span>
                      <span class="txt">Вариант</span>
                    </button>
                  </div>
                </div>
                <div class="test_create_bd-question-col2">
                  <label class="test_create_bd-question-col2--btn btn i-image">
                    <input class="test_create_bd-question-col2--inp js-test-create-question-image-inp" type="file"
                      accept="image/*">
                  </label>
                  <div class="test_create_bd-question--select select js-select js-test-create-answer-type-select">
                    <button class="test_create_bd-question--select_hd select_hd js-select-head">
                      <div class="select_hd-value js-select-value" data-select-option-value="1">
                        <div class="test_create_bd-question--select-option--icon i-checkbox"></div>
                        <div class="test_create_bd-question--select-option--txt">Множественный выбор</div>
                      </div>
                      <input class="select_hd-value--inp js-select-value-inp" type="text" value="1">
                      <div class="select_hd--icon i-down-arrow"></div>
                    </button>
                    <div class="select_bd">
                      <button class="select_bd-option" data-select-option="1">
                        <div class="test_create_bd-question--select-option--icon i-checkbox"></div>
                        <div class="test_create_bd-question--select-option--txt">Множественный выбор</div>
                      </button>
                      <button class="select_bd-option" data-select-option="2">
                        <div class="test_create_bd-question--select-option--icon i-radiobox"></div>
                        <div class="test_create_bd-question--select-option--txt">Одиночный выбор</div>
                      </button>
                      <button class="select_bd-option" data-select-option="3">
                        <div class="test_create_bd-question--select-option--icon i-text"></div>
                        <div class="test_create_bd-question--select-option--txt">Текстовый ответ</div>
                      </button>
                      <button class="select_bd-option" data-select-option="4">
                        <div class="test_create_bd-question--select-option--icon i-number"></div>
                        <div class="test_create_bd-question--select-option--txt">Числовой ответ</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="test_create_bd-question-add js-test-create-question-add">
            <div class="test_create_bd-question-add">
              <div class="test_create_bd-question-add-button more-menu js-more-menu">
                <button class="test_create_bd-question-add--btn btn btn-2 js-test-question-add-btn">
                  <span class="txt">Добавить вопрос</span>
                </button>
                <button class="test_create_bd-question-add--btn-more btn i-more js-more-menu-btn"></button>
                <div class="test_create_bd-question-add--btn-more-list more-menu-list js-test-question-add-btn-params">
                  <div class="question-add--btn-more-list-item more-menu-list--btn first">
                    <span>Вопросы:</span>
                    <input class="question-add-btn-more--inp inp js-test-question-add-btn-params-questions"
                      type="number" value="1" min="1" max="30">
                  </div>
                  <div class="question-add--btn-more-list-item more-menu-list--btn">
                    <span>Ответы:</span>
                    <input class="question-add-btn-more--inp inp js-test-question-add-btn-params-answers" type="number"
                      value="1" min="1" max="6">
                  </div>
                  <div class="question-add--btn-more-list-item more-menu-list--btn last">
                    <span>Тип ответа:</span>
                    <div class="question-add-btn-more--select select js-select" title="Сортировка по предмету">
                      <button class="question-add-btn-more--select_hd js-select-head select_hd">
                        <div class="question-add-btn-more--select-value select_hd-value js-select-value"
                          data-select-option-value="1">
                          <div class="question-add-btn-more--select-option--icon i-checkbox"></div>
                        </div>
                        <input class="select_hd-value--inp js-select-value-inp js-test-question-add-btn-params-type"
                          type="text" value="1">
                      </button>
                      <div class="select_bd">
                        <button class="question-add-btn-more--select-option select_bd-option" data-select-option="1">
                          <div class="question-add-btn-more--select-option--icon i-checkbox"></div>
                        </button>
                        <button class="question-add-btn-more--select-option select_bd-option" data-select-option="2">
                          <div class="question-add-btn-more--select-option--icon i-radiobox"></div>
                        </button>
                        <button class="question-add-btn-more--select-option select_bd-option" data-select-option="3">
                          <div class="question-add-btn-more--select-option--icon i-text"></div>
                        </button>
                        <button class="question-add-btn-more--select-option select_bd-option" data-select-option="4">
                          <div class="question-add-btn-more--select-option--icon i-number"></div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="test_ft">
          <button class="test_ft--btn btn btn-1">Начать</button>
        </div>
      </div>`;
  }
}