export class TestResultForUserContent {
    getPage() {
        return `<div class="cnt_bd-test">
        <div class="test_hd js-test-head">
          <div class="test_hd-info">
            <div class="test-subject-logo_wr">
              <div class="test-subject-logo js-test-subject-logo"></div>
            </div>
            <div class="test_hd-title">
              <h3 class="test_hd-title--heading">
                <a class="link js-test-title" href="#"></a>
              </h3>
              <p class="test_hd-title--description js-test-description"></p>
            </div>
          </div>
          <div class="test_hd-author">
            <a class="link js-test-author" href="#"></a>
          </div>
          <div class="test_hd-dsc">
            <div class="test_hd-dsc-subject-name js-test-subject" data-test-subcject-num="1"></div>
            <div class="test_hd-dsc-time">
              <span class="test_hd-dsc-time--txt">Время на прохождение:</span>
              <span class="test_hd-dsc-time--value js-test-time"></span>
            </div>
            <div class="raiting">
              <div class="raiting-stars">
                <div class="raiting-star star-1"><span class="i-star1"></span></div>
                <div class="raiting-star star-2"><span class="i-star1"></span></div>
                <div class="raiting-star star-3"><span class="i-star1"></span></div>
                <div class="raiting-star star-4"><span class="i-star1"></span></div>
                <div class="raiting-star star-5"><span class="i-star1"></span></div>
              </div>
              <div class="raiting-star--voted js-test-raiting-voted"></div>
            </div>
          </div>
        </div>

        <div class="test_bd test-result_bd">
          <div class="test-result-short">
            <div class="test-result-short_bd">
              <div class="test-result-short-row">
                <span>Количество вопросов:</span>
                <span class="test-result-short-row--value"></span>
              </div>
              <div class="test-result-short-row">
                <span>Верно отвеченных вопросов:</span>
                <span class="test-result-short-row--value"></span>
              </div>
              <div class="test-result-short-row">
                <span>Неверно отвеченных вопросов:</span>
                <span class="test-result-short-row--value"></span>
              </div>
              <div class="test-result-short-row">
                <span>Вопросы без ответа:</span>
                <span class="test-result-short-row--value"></span>
              </div>
              <div class="test-result-short-row">
                <span>Время прохождения:</span>
                <span class="test-result-short-row--value"></span>
              </div>
            </div>
          </div>

          <div class="test-attachments test-result-attachments js-test-attachments">
            <div class="test-attachments-file js-test-attachment">
              <img class="test-attachments-file--img js-test-attachment-img"
                src="https://reshenie.club/ulp/matematika/5klass/a_merzljak_i_dr/zadanie_287_efr.png">
              <div class="test-attachments-file-info">
                <a class="link js-test-attachment-name" href="#"
                  title="image_2020-05-06_22-01-53.png">image_2020-05-06_22-01-53.png</a>
                <span class="size">27.264 KB</span>
              </div>
            </div>
            <div class="test-attachments-file js-test-attachment">
              <span class="i-file icon"></span>
              <div class="test-attachments-file-info">
                <a class="link js-test-attachment-name" href="#" title="HASP_LM_setup.zip">HASP_LM_setup.zip</a>
                <span class="size">16725.998 KB</span>
              </div>
            </div>
          </div>
          <div class="test-questions">
            <div class="test-question" data-question-num="1" data-answers-type="1">
              <div class="test-question_hd test-result-question_hd test-question-incorrect">
                <h4 class="test-question_hd--title">Найти неизвестный множитель уравнения y · 4 = 12.</h4>
              </div>
              <img class="test-question--img js-test-question-img"
                src="https://reshenie.club/ulp/matematika/5klass/a_merzljak_i_dr/zadanie_287_efr.png">
              <div class="test-question-answers">
                <div class="test-question-answer test-result-answer-correct" data-answer-num="1"
                  title="Правильный ответ">
                  <div class="test-question-answer-checkbox">
                    <input class="test-question-answer-checkbox--inp" id="answer11" name="answerCheck1" type="checkbox"
                      disabled checked>
                    <label for="answer11"></label>
                  </div>
                  <label class="test-question-answer--txt" for="answer11">3</label>
                </div>
                <div class="test-question-answer" data-answer-num="2">
                  <div class="test-question-answer-checkbox">
                    <input class="test-question-answer-checkbox--inp" id="answer12" name="answerCheck1" type="checkbox"
                      disabled>
                    <label for="answer12"></label>
                  </div>
                  <label class="test-question-answer--txt" for="answer12">16</label>
                </div>
                <div class="test-question-answer" data-answer-num="3" title="Ваш ответ">
                  <div class="test-question-answer-checkbox">
                    <input class="test-question-answer-checkbox--inp" id="answer13" name="answerCheck1" type="checkbox"
                      disabled checked>
                    <label for="answer13"></label>
                  </div>
                  <label class="test-question-answer--txt" for="answer13">8</label>
                </div>
                <div class="test-question-answer" data-answer-num="4">
                  <div class="test-question-answer-checkbox">
                    <input class="test-question-answer-checkbox--inp" id="answer14" name="answerCheck1" type="checkbox"
                      disabled>
                    <label for="answer14"></label>
                  </div>
                  <label class="test-question-answer--txt" for="answer14">10</label>
                </div>
              </div>
            </div>
            <div class="test-question" data-question-num="2" data-answers-type="2">
              <div class="test-question_hd test-result-question_hd test-question-correct">
                <h4 class="test-question_hd--title">Чтобы умножить десятичную дробь на 10, 100, 1000 и т.д., надо ...
                </h4>
              </div>
              <div class="test-question-answers">
                <div class="test-question-answer" data-answer-num="1">
                  <div class="test-question-answer-radio">
                    <input class="test-question-answer-radio--inp" id="answer21" name="answerCheck2" type="radio"
                      disabled>
                    <label for="answer21"></label>
                  </div>
                  <label class="test-question-answer--txt" for="answer21"> в этой дроби перенести запятую на столько
                    цифр вправо, сколько чисел после запятой у первого множителя.</label>
                </div>
                <div class="test-question-answer test-result-answer-correct" data-answer-num="2"
                  title="Вы ответили верно">
                  <div class="test-question-answer-radio">
                    <input class="test-question-answer-radio--inp" id="answer22" name="answerCheck2" type="radio"
                      disabled checked>
                    <label for="answer22"></label>
                  </div>
                  <label class="test-question-answer--txt" for="answer22"> в этой дроби перенести запятую на столько
                    цифр вправо, сколько нулей стоит в множителе после единицы</label>
                </div>
                <div class="test-question-answer" data-answer-num="3">
                  <div class="test-question-answer-radio">
                    <input class="test-question-answer-radio--inp" id="answer23" name="answerCheck2" type="radio"
                      disabled>
                    <label for="answer23"></label>
                  </div>
                  <label class="test-question-answer--txt" for="answer23">в этой дроби перенести запятую на столько цифр
                    влево, сколько нулей стоит в множителе после единицы</label>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>`;
    }
}