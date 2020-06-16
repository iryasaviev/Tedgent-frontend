export class Select {
    constructor() {
        this.items = document.getElementsByClassName('js-select');
    }

    openOrClose(currentSelect) {
        currentSelect.classList.toggle('active');

        let btn = currentSelect.getElementsByClassName('select_hd--icon')[0];
        if (btn !== undefined) {
            btn.classList.toggle('i-down-arrow');
            btn.classList.toggle('i-up-arrow');
        }
    }

    selectItem(currentSelect, currentOption, isLoading = true) {
        let optionValue = currentOption.innerHTML;
        currentSelect.getElementsByClassName('select_hd-value')[0].innerHTML = optionValue;
        currentSelect.getElementsByClassName('select_hd-value')[0].dataset.selectOptionValue = currentOption.dataset.selectOption;

        let valueInp = currentSelect.getElementsByClassName('js-select-value-inp')[0],
            event = new Event('input');

        valueInp.value = currentOption.dataset.selectOption;
        valueInp.dispatchEvent(event);

        if (!isLoading) {
            this.openOrClose(currentSelect);
        }
    }

    setHandlers() {
        for (let item of this.items) {
            item.getElementsByClassName('js-select-head')[0].onclick = () => this.openOrClose(item);

            for (let option of item.getElementsByClassName('select_bd-option')) {
                // option.onclick = () => this.selectItem(item, option, false);
                option.addEventListener('click', () => this.selectItem(item, option, false));

                if (option.classList.contains('option-choice')) {
                    this.selectItem(item, option, true);
                }
            }
        }
    }
}