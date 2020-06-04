export class Delegation {
    router() {
        let target = event.target,
            click = target;

        // Поиск элемента с data-атрибутами
        while (target !== event.currentTarget) {

            // Если target == null, значит был удалён элемент из DOM дерева.
            // Не знаю на сколько верное решение.
            if (target !== null) {
                if (target.hasAttribute('data-controller')) {
                    let method = target.dataset.method,
                        controll = target.dataset.controller;
                    if (method === click.dataset.target) {
                        Controller(click, controll, method, target);
                    }
                    break;
                }
                target = target.parentNode;
            }
            else {
                break;
            }
        }
    }

    controller(click, controll, method, target) {
        if (method !== null && controll !== null) {
            window[controll][method](click, target);
        }
    }
}