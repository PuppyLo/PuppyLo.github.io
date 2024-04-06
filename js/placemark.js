
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.711991, 37.678515],
            zoom: 11,
            controls: ['zoomControl']
    });


// Создание макета содержимого хинта.
    // Макет создается через фабрику макетов с помощью текстового шаблона.
        HintLayout = ymaps.templateLayoutFactory.createClass( "<div class='my-hint'>" +
            "<b>{{ properties.object }}</b><br />" +
            "{{ properties.address }}" +
            "</div>", {
                // Определяем метод getShape, который
                // будет возвращать размеры макета хинта.
                // Это необходимо для того, чтобы хинт автоматически
                // сдвигал позицию при выходе за пределы карты.
                getShape: function () {
                    var el = this.getElement(),
                        result = null;
                    if (el) {
                        var firstChild = el.firstChild;
                        result = new ymaps.shape.Rectangle(
                            new ymaps.geometry.pixel.Rectangle([
                                [0, 0],
                                [firstChild.offsetWidth, firstChild.offsetHeight]
                            ])
                        );
                    }
                    return result;
                }
            }
        );


        
    myMap.geoObjects
        .add(new ymaps.Placemark([55.727242, 37.626942], {       
            object: "Mona Tobacco на Серпуховской",
            balloonContent: 
            `<strong>Mona Tobacco</strong></br>
            <strong>Стремянный пер. 38</strong></br>
            <strong>Режим работы: </strong>понедельник - суббота 09:00 – 22:00, воскресенье 10:00 - 22:00</br>
            <a href="https://yandex.ru/maps/?rtext=~55.727242, 37.626942" target="_blank">Построить маршрут в Яндекс.Карты</a>`
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Simpleicons_Places_placeholder-tool.svg',
            iconImageSize: [35, 35],
            hintLayout: HintLayout
        }));

    myMap.geoObjects.add(new ymaps.Placemark([55.622014, 37.609883], {
            object: 'Mona Tobacco на Южной',
            balloonContent: 
            `<strong>Mona Tobacco</strong></br>
            <strong>Кировоградская улица, 9к4</strong></br>
            <strong>Режим работы: </strong>понедельник - воскресенье 10:00 - 22:00</br>
            <a href="https://yandex.ru/maps/?rtext=~55.622014, 37.609883" target="_blank">Построить маршрут в Яндекс.Карты</a>`
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Simpleicons_Places_placeholder-tool.svg',
            iconImageSize: [35, 35],
            hintLayout: HintLayout

        }));

    myMap.geoObjects.add(new ymaps.Placemark([55.668059, 37.563609], {
            object: 'Mona Tobacco на Новые Черемушки',
            balloonContent: 
            `<strong>Mona Tobacco</strong></br>
            <strong>Новочерёмушкинская улица, 58</strong></br>
            <strong>Режим работы: </strong>понедельник - воскресенье 09:00 - 22:00</br>
            <a href="https://yandex.ru/maps/?rtext=~55.668059, 37.563609" target="_blank">Построить маршрут в Яндекс.Карты</a>`
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Simpleicons_Places_placeholder-tool.svg',
            iconImageSize: [35, 35],
            hintLayout: HintLayout
        }));

myMap.geoObjects.add(new ymaps.Placemark([55.700155, 37.650224], {
    object: 'Mona Tobacco на Автозаводской',
            balloonContent: 
            `<strong>Mona Tobacco</strong></br>
            <strong>Автозаводская улица, 23Бк2</strong></br>
            <strong>Режим работы: </strong>понедельник - воскресенье 08:00 - 23:00</br>
            <a href="https://yandex.ru/maps/?rtext=~55.700155, 37.650224" target="_blank">Построить маршрут в Яндекс.Карты</a>`
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Simpleicons_Places_placeholder-tool.svg',
            iconImageSize: [35, 35],
            hintLayout: HintLayout
        }));

myMap.geoObjects.add(new ymaps.Placemark([55.720812, 37.609357], {
    object: 'Mona Tobacco на Шаболовской',
            balloonContent: 
            `<strong>Mona Tobacco</strong></br>
            <strong>улица Шаболовка, 24</strong></br>
            <strong>Режим работы: </strong>понедельник - суббота 09:00 - 21:00, воскресенье выходной</br>
            <a href="https://yandex.ru/maps/?rtext=~55.720812, 37.609357" target="_blank">Построить маршрут в Яндекс.Карты</a>`
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Simpleicons_Places_placeholder-tool.svg',
            iconImageSize: [35, 35],
            hintLayout: HintLayout
        }));

myMap.geoObjects.add(new ymaps.Placemark([55.787715, 37.616045], {
    object: 'Mona Tobacco на Достоевской',
            balloonContent: 
            `<strong>Mona Tobacco</strong></br>
            <strong>улица Советской Армии, 7</strong></br>
            <strong>Режим работы: </strong>понедельник - воскресенье 08:00 - 23:00</br>
            <a href="https://yandex.ru/maps/?rtext=~55.787715, 37.616045" target="_blank">Построить маршрут в Яндекс.Карты</a>`
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Simpleicons_Places_placeholder-tool.svg',
            iconImageSize: [35, 35],
            hintLayout: HintLayout
        }));
});