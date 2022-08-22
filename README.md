 # Привет, добро пожаловать в  **HeтFlix!**

Я создавал этот проект для того чтобы продолжать оттачивать свои навыки  **React.JS**  разработчика в связке с  **Redux**  .

Данный сервис позволяет искать фильмы, используя Kinopoisk API. Для работы с асинхронными запросами я использовал  **Redux-thunk**  и  **fetch-запросы**.

Вы можете:

-   Искать фильмы
-   Добавлять их в избранное
-   Ставить оценки
-   Писать рецензии


   ![enter image description here](https://psv4.userapi.com/c237031/u222277249/docs/d56/cfa49e10a833/gif-scene1.gif?extra=XpejErSqu9Qij2ySef6pIoTi1oQ7Fbx2qn1h6rUvYk59N5Kt-Ao3MYsZmy9PLccOOX3zrydlw_TU-CTga5jJ-GSCAp53Ks8rMesdgFPP8f1n-BoG3xSgetQcTmN09US-wmTYXhWWGdct4ie2nTv9mhecUqU)
#
Я осуществил имитацию сервера с помощью библиотеки  **Redux-Persist**, которая позволяет сохранять ваши отметки, любимые фильмы и рецензии в localStorage, чтобы они оставались с вами после обновления страницы.


![enter image description here](https://psv4.userapi.com/c237031/u222277249/docs/d21/1cc49da078a0/gif-scene2.gif?extra=3EAzTj8KHQsD7B47RdCwq8rm2Gr7oZtovnxsxYA9xA4bGf387-kTW4tTuR9yGWNNaXEqHZ9SdHDGBS-iJ0fo81CNZfoTPdHVeWyhpnxCAnoN-Mur6YaA-8767U8q_FGXFH2ZLCLvjDlP7S0ZoDmTA78_1MI)
#
Так же я реализовал кастомную динамическую **пагинацию**  по скроллу без сторонних библиотек.

![enter image description here](https://psv4.userapi.com/c237031/u222277249/docs/d5/17122daffc92/gif-scene3.gif?extra=oLF2WDGr_6B23RIOtUbASFSG-sywtRsPwgli90p_aYTKCMypxiD_e20DI81XM2FqxY2TWObmfK8aqMzh3n7RziyY-OKS3uTL9RmXz4juk5B25VF5-jbuyViNCH9zkVvc0NPupuMYudXSQKk8kkUcfSSRWsI)

#
Для анимации я изучил и использовал библиотеку  **Framer-motion и React-Slick**. Для создания стилей работал с препроцессором **SASS**  , используя практически весь его богатый функционал, так же применял методолгию **БЭМ**. **Адаптивная верстка**  реализована с помощью медиа-запросов & breakPoint’ам.

![enter image description here](https://psv4.userapi.com/c237031/u222277249/docs/d58/60a21b0eca28/gif-scene4.gif?extra=II-rmkoDbRzaDdUqSPDh2sWIW9usKfVUPZYnCyF2_nRUNXd0SY5tOsaTTo2g1HHhZEXPTAM1LnFTCY0udAVzs-xTNuyyOSQrq2jr9qiXggqNNhk7nQnEWXWGw_ACKjaR7pkpWh3WrdqmQXudIpfytn3Gfv0)
#
Все запросы к серверу создаются в конструкции  **try-catch**, и при какой либо ошибке пользователь увидит заглушку, вместо полностью упавшего UI.
![enter image description here](https://psv4.userapi.com/c237031/u222277249/docs/d23/abf115fce23e/gif-scene5.gif?extra=z2cBcNw_LRRLIR9HyKLuzhSBJPHt477LSST02y79do0pHonUNZmc2zZ_jWeRl8R2hPeasIvWOsUy3m3_NDtTspnLhQV3WesDR5VRe03Q3eMxRFJLtixujIpsgLuYHWOGTqy9oU9EU7Hwnzd2Cd-F7U1bAG8)
#
Поработал над оптимизацией(**HOC, React.Memo**), расширил и закрепил свои знания о  **хуках**  :

-   useState()
-   useEffect()
-   useMemo()
-   useCallback()
-   useSelector()
-   useDispatch()

Для контроля версий моего приложения использовал  **GitHub**  .
#
Богдан Безуглый · 2022
