
const $place = document.querySelector('.basic-data__place'),
    $temp = document.querySelector('.basic-data__title'),
    $button_temp_c = document.querySelector('.basic-data__button-c'),
    $button_temp_f = document.querySelector('.basic-data__button-f'),
    $buttons = document.querySelectorAll('.basic-data__button'),
    $icon = document.querySelector('.basic-data__icon'),
    $describtion = document.querySelector('.basic-data__description'),
    $lastUp = document.querySelector('.basic-data__time'),
    $feelsLike = document.querySelector('.other-details__feels-number'),
    $feelsLikeText = document.querySelector('.other-details__feels-text'),
    $wind = document.querySelector('.other-details__wind'),
    $visibility = document.querySelector('.other-details__visibility'),
    $precip = document.querySelector('.other-details__precip'),
    $humidity = document.querySelector('.other-details__humidity'),
    $pressure = document.querySelector('.other-details__pressure'),
    $input = document.querySelector('.header-body__search'),
    $daily = document.querySelector('.daily__title'),
    $day = document.querySelectorAll('.daily__day'),
    $dailyIcons = document.querySelectorAll('.daily__icon'),
    $dailyAvTemp = document.querySelectorAll('.daily__temp-temp'),
    $dailyDesc = document.querySelectorAll('.daily__desc'),
    average = document.querySelectorAll('.daily__temp-desc'),
    $form = document.querySelector('.header-body__form'),
    $addHumidity = document.querySelectorAll('.daily__humidity'),
    $addVisibility = document.querySelectorAll('.daily__vis'),
    $chanceOfRain = document.querySelectorAll('.daily__chance-of-rain'),
    $chanceOfSnow = document.querySelectorAll('.daily__chance-of-snow'),
    $maxWind = document.querySelectorAll('.daily__maxwind'),
    $dailyItems = document.querySelectorAll('.daily__item'),
    $dailyBox = document.querySelector('.daily__box'),
    $footerFrom = document.querySelector('.footer__from'),
    $backgroundVideo = document.querySelector('.background-video');




function makeRequest(weatherURL) {
    fetch(weatherURL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for (let i = 0; i < data.forecast.forecastday.length; i++) {
                $dailyIcons[i].setAttribute('src', `http:${data.forecast.forecastday[i].day.condition.icon}`);
                $dailyAvTemp[i].innerHTML = data.forecast.forecastday[i].day.avgtemp_c;
                if (/[\u0400-\u04FF]/.test(data.location.country)) {
                    switch (data.forecast.forecastday[i].day.condition.code) {
                        case 1003:
                            $dailyDesc[i].innerHTML = 'Частично облачно';
                            break;
                        case 1000:
                            $dailyDesc[i].innerHTML = 'Ясно';
                            break;
                        case 1006:
                            $dailyDesc[i].innerHTML = 'Облачно';
                            break;
                        case 1183:
                            $dailyDesc[i].innerHTML = 'Лёгкий дождь';
                            break;
                        case 1207:
                            $dailyDesc[i].innerHTML = 'Умеренный или сильный снегопад';
                            break;
                        case 1210:
                            $dailyDesc[i].innerHTML = 'Неравномерный легкий снег';
                            break;
                        case 1009:
                            $dailyDesc[i].innerHTML = 'Пасмурно';
                            break;
                        case 1240:
                            $dailyDesc[i].innerHTML = 'Лёгкий дождь';
                            break;
                        case 1222:
                            $dailyDesc[i].innerHTML = 'Местами сильный снег';
                            break
                        case 1063:
                            $dailyDesc[i].innerHTML = 'Возможен кратковременный дождь';
                            break
                        case 1189:
                            $dailyDesc[i].innerHTML = 'Умеренный дождь';
                            break
                        case 1135:
                            $dailyDesc[i].innerHTML = 'Туман';
                            break
                        case 1030:
                            $dailyDesc[i].innerHTML = 'Туман';
                            break
                        case 1066:
                            $dailyDesc[i].innerHTML = 'Возможен кратковременный снег';
                            break;
                        case 1069:
                            $dailyDesc[i].innerHTML = 'Возможен мелкий снег';
                            break;
                        case 1072:
                            $dailyDesc[i].innerHTML = 'Возможны небольшие моросящие осадки';
                            break
                        case 1087:
                            $dailyDesc[i].innerHTML = 'Возможны вспышки грозы';
                            break
                        case 1114:
                            $dailyDesc[i].innerHTML = 'Метель';
                            break
                        case 1117:
                            $dailyDesc[i].innerHTML = 'Метель';
                            break
                        case 1147:
                            $dailyDesc[i].innerHTML = 'Ледяной туман';
                            break
                        case 1150:
                            $dailyDesc[i].innerHTML = 'Неравномерный легкий моросящий дождь';
                            break;
                        case 1153:
                            $dailyDesc[i].innerHTML = 'Легкий моросящий дождь';
                            break;
                        case 1168:
                            $dailyDesc[i].innerHTML = 'Моросящий дождь';
                            break
                        case 1171:
                            $dailyDesc[i].innerHTML = 'Сильный моросящий дождь';
                            break
                        case 1180:
                            $dailyDesc[i].innerHTML = 'Местами небольшой дождь';
                            break
                        case 1186:
                            $dailyDesc[i].innerHTML = 'Временами небольшой дождь';
                            break
                        case 1192:
                            $dailyDesc[i].innerHTML = 'Временами проливной дождь';
                            break;
                        case 1195:
                            $dailyDesc[i].innerHTML = 'Ливень';
                            break;
                        case 1198:
                            $dailyDesc[i].innerHTML = 'Лёгкий ледяной дождь';
                            break
                        case 1201:
                            $dailyDesc[i].innerHTML = 'Умеренный или сильный ледяной дождь';
                            break
                        case 1204:
                            $dailyDesc[i].innerHTML = 'Небольшой мокрый снег';
                            break
                        case 1207:
                            $dailyDesc[i].innerHTML = 'Умеренный или сильный мокрый снег';
                            break
                        case 1213:
                            $dailyDesc[i].innerHTML = 'Лёгкий снег';
                            break;
                        case 1216:
                            $dailyDesc[i].innerHTML = 'Местами умеренный снег';
                            break;
                        case 1219:
                            $dailyDesc[i].innerHTML = 'Умеренный снегопад';
                            break
                        case 1225:
                            $dailyDesc[i].innerHTML = 'Сильный снегопад';
                            break
                        case 1237:
                            $dailyDesc[i].innerHTML = 'Ледяные гранулы';
                            break
                        case 1243:
                            $dailyDesc[i].innerHTML = 'Умеренный или сильный ливень';
                            break;
                        case 1246:
                            $dailyDesc[i].innerHTML = 'Проливной дождь';
                            break;
                        case 1249:
                            $dailyDesc[i].innerHTML = 'Небольшой дождь с мокрым снегом';
                            break
                        case 1252:
                            $dailyDesc[i].innerHTML = 'Умеренный или сильный дождь с мокрым снегом';
                            break
                        case 1255:
                            $dailyDesc[i].innerHTML = 'Небольшой снежный дождь';
                            break
                        case 1258:
                            $dailyDesc[i].innerHTML = 'Умеренный или сильный снегопад';
                            break
                        case 1261:
                            $dailyDesc[i].innerHTML = 'Лёгкий дождь из ледяных гранул';
                            break;
                        case 1264:
                            $dailyDesc[i].innerHTML = 'Умеренный или сильный дождь из ледяных гранул';
                            break;
                        case 1273:
                            $dailyDesc[i].innerHTML = 'Местами небольшой дождь с громом';
                            break
                        case 1276:
                            $dailyDesc[i].innerHTML = 'Умеренный или сильный дождь с грозой';
                            break
                        case 1279:
                            $dailyDesc[i].innerHTML = 'Местами небольшой снег с грозой';
                            break
                        case 1282:
                            $dailyDesc[i].innerHTML = 'Умеренный или сильный снегопад с грозой';
                            break
                    }
                    average[i].innerHTML = 'в среднем';
                    $addHumidity[i].innerHTML
                        = `<p>средняя влажность</p><p>${data.forecast.forecastday[i].day.avghumidity}%</p>`;
                    $addVisibility[i].innerHTML
                        = `<p>средняя видимость</p><p>${data.forecast.forecastday[i].day.avgvis_km} км</p>`;
                    $chanceOfRain[i].innerHTML
                        = `<p>вероятность дождя</p><p>${data.forecast.forecastday[i].day.daily_chance_of_rain}%</p>`;
                    $chanceOfSnow[i].innerHTML
                        = `<p>вероятность снега</p><p>${data.forecast.forecastday[i].day.daily_chance_of_snow}%</p>`;
                    $maxWind[i].innerHTML
                        = `<p>максимальная скорость ветра</p><p>${data.forecast.forecastday[i].day.maxwind_kph} км/ч</p>`;
                } else {
                    $dailyDesc[i].innerHTML = data.forecast.forecastday[i].day.condition.text;
                    average[i].innerHTML = 'in average';
                    $addHumidity[i].innerHTML
                        = `<p>average humidity</p><p>${data.forecast.forecastday[i].day.avghumidity}%</p>`;
                    $addVisibility[i].innerHTML
                        = `<p>average visibility</p><p>${data.forecast.forecastday[i].day.avgvis_km} km</p>`;
                    $chanceOfRain[i].innerHTML
                        = `<p>chance of rain</p><p>${data.forecast.forecastday[i].day.daily_chance_of_rain}%</p>`;
                    $chanceOfSnow[i].innerHTML
                        = `<p>chance of snow</p><p>${data.forecast.forecastday[i].day.daily_chance_of_snow}%</p>`;
                    $maxWind[i].innerHTML
                        = `<p>maximum wind speed</p><p>${data.forecast.forecastday[i].day.maxwind_kph} kph</p>`;
                }
            }
            if (/[\u0400-\u04FF]/.test(data.location.country)) {
                $lastUp.innerHTML = `последнее обновление ${data.current.last_updated}`;
                $wind.innerHTML = `Ветер ${data.current.wind_kph} км/ч`;
                $visibility.innerHTML = `Видимость ${data.current.vis_km} км`;
                $precip.innerHTML = `Осадков ${data.current.precip_mm} мм`;
                $humidity.innerHTML = `Влажность ${data.current.humidity}%`;
                $pressure.innerHTML = `Давление ${data.current.pressure_mb} мб`;
                $daily.innerHTML = 'По дням';
                $day[0].innerHTML = 'Сегодня';
                $day[1].innerHTML = 'Завтра';
                $feelsLikeText.innerHTML = 'Чувствуется как';
                $footerFrom.innerHTML = 'данные взяты с';
                switch (data.current.condition.code) {
                    case 1003:
                        $describtion.innerHTML = 'Частично облачно';
                        break;
                    case 1000:
                        $describtion.innerHTML = 'Ясно';
                        break;
                    case 1006:
                        $describtion.innerHTML = 'Облачно';
                        break;
                    case 1183:
                        $describtion.innerHTML = 'Лёгкий дождь';
                        break;
                    case 1240:
                        $describtion.innerHTML = 'Лёгкий дождь';
                        break;
                    case 1207:
                        $describtion.innerHTML = 'Умеренный или сильный снегопад';
                        break;
                    case 1210:
                        $describtion.innerHTML = 'Неравномерный легкий снег';
                        break;
                    case 1009:
                        $describtion.innerHTML = 'Пасмурно';
                        break;
                    case 1222:
                        $describtion.innerHTML = 'Местами сильный снег';
                        break
                    case 1063:
                        $describtion.innerHTML = 'Возможен кратковременный дождь';
                        break;
                    case 1189:
                        $describtion.innerHTML = 'Умеренный дождь';
                        break;
                    case 1135:
                        $describtion.innerHTML = 'Туман';
                        break;
                    case 1030:
                        $describtion.innerHTML = 'Туман';
                        break;
                    case 1066:
                        $describtion.innerHTML = 'Возможен кратковременный снег';
                        break;
                    case 1069:
                        $describtion.innerHTML = 'Возможен мелкий снег';
                        break;
                    case 1072:
                        $describtion.innerHTML = 'Возможны небольшие моросящие осадки';
                        break
                    case 1087:
                        $describtion.innerHTML = 'Возможны вспышки грозы';
                        break
                    case 1114:
                        $describtion.innerHTML = 'Метель';
                        break;
                    case 1117:
                        $describtion.innerHTML = 'Метель';
                        break;
                    case 1147:
                        $describtion.innerHTML = 'Ледяной туман';
                        break
                    case 1150:
                        $describtion.innerHTML = 'Неравномерный легкий моросящий дождь';
                        break;
                    case 1153:
                        $describtion.innerHTML = 'Легкий моросящий дождь';
                        break;
                    case 1168:
                        $describtion.innerHTML = 'Моросящий дождь';
                        break
                    case 1171:
                        $describtion.innerHTML = 'Сильный моросящий дождь';
                        break
                    case 1180:
                        $describtion.innerHTML = 'Местами небольшой дождь';
                        break
                    case 1186:
                        $describtion.innerHTML = 'Временами небольшой дождь';
                        break
                    case 1192:
                        $describtion.innerHTML = 'Временами проливной дождь';
                        break;
                    case 1195:
                        $describtion.innerHTML = 'Ливень';
                        break;
                    case 1198:
                        $describtion.innerHTML = 'Лёгкий ледяной дождь';
                        break
                    case 1201:
                        $describtion.innerHTML = 'Умеренный или сильный ледяной дождь';
                        break
                    case 1204:
                        $describtion.innerHTML = 'Небольшой дождь со снегом';
                        break
                    case 1207:
                        $describtion.innerHTML = 'Умеренный или сильный дождь со снегом';
                        break
                    case 1213:
                        $describtion.innerHTML = 'Лёгкий снег';
                        break;
                    case 1216:
                        $describtion.innerHTML = 'Местами умеренный снег';
                        break;
                    case 1219:
                        $describtion.innerHTML = 'Умеренный снегопад';
                        break
                    case 1225:
                        $describtion.innerHTML = 'Сильный снегопад';
                        break
                    case 1237:
                        $describtion.innerHTML = 'Ледяные гранулы';
                        break
                    case 1243:
                        $describtion.innerHTML = 'Умеренный или сильный ливень';
                        break;
                    case 1246:
                        $describtion.innerHTML = 'Проливной дождь';
                        break;
                    case 1249:
                        $describtion.innerHTML = 'Небольшой дождь с мокрым снегом';
                        break
                    case 1252:
                        $describtion.innerHTML = 'Умеренный или сильный дождь с мокрым снегом';
                        break
                    case 1255:
                        $describtion.innerHTML = 'Небольшой снежный дождь';
                        break
                    case 1258:
                        $describtion.innerHTML = 'Умеренный или сильный снегопад';
                        break
                    case 1261:
                        $describtion.innerHTML = 'Лёгкий ледяной дождь';
                        break;
                    case 1264:
                        $describtion.innerHTML = 'Умеренный или сильный ледяной дождь';
                        break;
                    case 1273:
                        $describtion.innerHTML = 'Местами небольшой дождь с грозой';
                        break
                    case 1276:
                        $describtion.innerHTML = 'Умеренный или сильный дождь с грозой';
                        break
                    case 1279:
                        $describtion.innerHTML = 'Местами небольшой снег с грозой';
                        break
                    case 1282:
                        $describtion.innerHTML = 'Умеренный или сильный снегопад с грозой';
                        break
                }
            } else {
                $feelsLikeText.innerHTML = 'Feels like';
                $lastUp.innerHTML = `last updated ${data.current.last_updated}`;
                $wind.innerHTML = `Wind ${data.current.wind_kph} kph`;
                $visibility.innerHTML = `Visibility ${data.current.vis_km} km`;
                $precip.innerHTML = `Precip ${data.current.precip_mm} mm`;
                $humidity.innerHTML = `Humidity ${data.current.humidity}%`;
                $pressure.innerHTML = `Pressure ${data.current.pressure_mb} mb`;
                $describtion.innerHTML = data.current.condition.text;
                $day[0].innerHTML = 'Today';
                $day[1].innerHTML = 'Tomorrow';
                $daily.innerHTML = 'Daily';
                $footerFrom.innerHTML = 'data taken from';
            }
            switch (data.current.condition.code) {
                case 1003:
                    $backgroundVideo.setAttribute('src', 'files/Pexels Videos 2573.mp4');
                    break;
                case 1006:
                    $backgroundVideo.setAttribute('src', 'files/Pexels Videos 2573.mp4');
                    break;
                case 1000:
                    $backgroundVideo.setAttribute('src', 'files/Pexels Videos 2573.mp4');
                    break;
                case 1183:
                    $backgroundVideo.setAttribute('src', 'files/Raindrops_Videvo.mp4');
                    break;
                case 1240:
                    $backgroundVideo.setAttribute('src', 'files/Raindrops_Videvo.mp4');
                    break;
                case 1189:
                    $backgroundVideo.setAttribute('src', 'files/Raindrops_Videvo.mp4');
                    break;
                case 1063:
                    $backgroundVideo.setAttribute('src', 'files/Raindrops_Videvo.mp4');
                    break;
                case 1072:
                    $backgroundVideo.setAttribute('src', 'files/Raindrops_Videvo.mp4');
                    break;
                case 1150:
                    $backgroundVideo.setAttribute('src', 'files/Raindrops_Videvo.mp4');
                    break;
                case 1153:
                    $backgroundVideo.setAttribute('src', 'files/Raindrops_Videvo.mp4');
                    break;
                case 1168:
                    $backgroundVideo.setAttribute('src', 'files/Raindrops_Videvo.mp4');
                    break;
                case 1171:
                    $backgroundVideo.setAttribute('src', 'files/Raindrops_Videvo.mp4');
                    break;
                case 1180:
                    $backgroundVideo.setAttribute('src', 'files/Raindrops_Videvo.mp4');
                    break;
                case 1186:
                    $backgroundVideo.setAttribute('src', 'files/Raindrops_Videvo.mp4');
                    break;
                case 1192:
                    $backgroundVideo.setAttribute('src', 'files/Raindrops_Videvo.mp4');
                    break;
                case 1195:
                    $backgroundVideo.setAttribute('src', 'files/Raindrops_Videvo.mp4');
                    break;
                case 1198:
                    $backgroundVideo.setAttribute('src', 'files/Raindrops_Videvo.mp4');
                    break;
                case 1201:
                    $backgroundVideo.setAttribute('src', 'files/Raindrops_Videvo.mp4');
                    break;
                case 1243:
                    $backgroundVideo.setAttribute('src', 'files/Raindrops_Videvo.mp4');
                    break;
                case 1246:
                    $backgroundVideo.setAttribute('src', 'files/Raindrops_Videvo.mp4');
                    break;
                case 1249:
                    $backgroundVideo.setAttribute('src', 'files/Raindrops_Videvo.mp4');
                    break;
                case 1252:
                    $backgroundVideo.setAttribute('src', 'files/Raindrops_Videvo.mp4');
                    break;
                case 1255:
                    $backgroundVideo.setAttribute('src', 'files/Raindrops_Videvo.mp4');
                    break;
                case 1261:
                    $backgroundVideo.setAttribute('src', 'files/Raindrops_Videvo.mp4');
                    break;
                case 1264:
                    $backgroundVideo.setAttribute('src', 'files/Raindrops_Videvo.mp4');
                    break;
                case 1273:
                    $backgroundVideo.setAttribute('src', 'files/Raindrops_Videvo.mp4');
                    break;
                case 1276:
                    $backgroundVideo.setAttribute('src', 'files/Raindrops_Videvo.mp4');
                    break;
                case 1204:
                    $backgroundVideo.setAttribute('src', 'files/Raindrops_Videvo.mp4');
                    break;
                case 1207:
                    $backgroundVideo.setAttribute('src', 'files/Raindrops_Videvo.mp4');
                    break;
                case 1009:
                    $backgroundVideo.setAttribute('src', 'files/SilverLining.mp4');
                    break;
                case 1087:
                    $backgroundVideo.setAttribute('src', 'files/thundershtorm.mp4');
                    break;
                case 1135:
                    $backgroundVideo.setAttribute('src', 'files/fog.mp4');
                    break;
                case 1030:
                    $backgroundVideo.setAttribute('src', 'files/fog.mp4');
                    break;
                case 1207:
                    $backgroundVideo.setAttribute('src', 'files/snowfall.mp4');
                    break;
                case 1210:
                    $backgroundVideo.setAttribute('src', 'files/snowfall.mp4');
                    break;
                case 1222:
                    $backgroundVideo.setAttribute('src', 'files/snowfall.mp4');
                    break;
                case 1066:
                    $backgroundVideo.setAttribute('src', 'files/snowfall.mp4');
                    break;
                case 1147:
                    $backgroundVideo.setAttribute('src', 'files/fog.mp4');
                    break;
                case 1069:
                    $backgroundVideo.setAttribute('src', 'files/snowfall.mp4');
                    break;
                case 1213:
                    $backgroundVideo.setAttribute('src', 'files/snowfall.mp4');
                    break;
                case 1114:
                    $backgroundVideo.setAttribute('src', 'files/snowfall.mp4');
                    break;
                case 1117:
                    $backgroundVideo.setAttribute('src', 'files/snowfall.mp4');
                    break;
                case 1216:
                    $backgroundVideo.setAttribute('src', 'files/snowfall.mp4');
                    break;
                case 1219:
                    $backgroundVideo.setAttribute('src', 'files/snowfall.mp4');
                    break;
                case 1225:
                    $backgroundVideo.setAttribute('src', 'files/snowfall.mp4');
                    break;
                case 1258:
                    $backgroundVideo.setAttribute('src', 'files/snowfall.mp4');
                    break;
                case 1279:
                    $backgroundVideo.setAttribute('src', 'files/snowfall.mp4');
                    break;
                case 1282:
                    $backgroundVideo.setAttribute('src', 'files/snowfall.mp4');
                    break;

            }
            $feelsLike.innerHTML = data.current.feelslike_c;
            $place.innerHTML = `${data.location.name}, ${data.location.country}`;
            $temp.innerHTML = `<span class="circle main-circle">${data.current.temp_c}</span>`;
            $icon.setAttribute('src', `http:${data.current.condition.icon}`);
            $day[2].innerHTML = data.forecast.forecastday[2].date.slice(5);
            $buttons.forEach(i => {
                i.addEventListener('click', (e) => {
                    if (i === $button_temp_c) {
                        $temp.innerHTML = `<span class="circle main-circle">${data.current.temp_c}</span>`
                        $button_temp_f.classList.remove('active')
                        i.classList.add('active')
                        $feelsLike.innerHTML = data.current.feelslike_c;
                        for (let i = 0; i < data.forecast.forecastday.length; i++) {
                            $dailyAvTemp[i].innerHTML = data.forecast.forecastday[i].day.avgtemp_c;
                        }
                    } else if (i === $button_temp_f) {
                        $temp.innerHTML
                            = `<span class="circle main-circle">${Math.round(data.current.temp_f)}</span>`
                        $button_temp_c.classList.remove('active')
                        i.classList.add('active')
                        $feelsLike.innerHTML = data.current.feelslike_f;
                        for (let i = 0; i < data.forecast.forecastday.length; i++) {
                            $dailyAvTemp[i].innerHTML = data.forecast.forecastday[i].day.avgtemp_f;
                        }
                    }

                })
            })

            localStorage.setItem('url', weatherURL);
        });
}


$form.addEventListener('submit', (e) => {
    const myURL = `https://api.weatherapi.com/v1/forecast.json?key=6081ec43a3104e0a85f214237232103&q=${$input.value}&days=3`;
    makeRequest(myURL)

})


async function position() {
    const pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    const positionRequest
        = `https://api.weatherapi.com/v1/forecast.json?key=6081ec43a3104e0a85f214237232103&q=${pos.coords.latitude},${pos.coords.longitude}&days=3`;
    makeRequest(positionRequest)
}

makeRequest(localStorage.getItem('url')
    || `https://api.weatherapi.com/v1/forecast.json?&key=6081ec43a3104e0a85f214237232103&days=3&q=Gent`);

if (!localStorage.getItem('url')) {
    position().catch((err) => console.error(err))
}


$input.addEventListener('focus', e => {
    $form.classList.add('active')
})
$input.addEventListener('blur', e => {
    $form.classList.remove('active')
})

$dailyItems.forEach(i => {
    i.addEventListener('click', e => {
        $dailyItems.forEach(it => {
            it.classList.remove('active');
        })
        i.classList.add('active');
        $dailyBox.classList.add('active')
    })
})










