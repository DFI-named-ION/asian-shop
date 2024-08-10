import React, {useContext, useEffect, useState} from 'react';

import Header from '../component/Header';
import Footer from '../component/Footer';


function App() {
    return <Header />;
    return <Footer />;
  }

  export default function FAQ() {

    useEffect(() => {
        const faqItems = document.querySelectorAll(".faq-item");
        faqItems.forEach(function (item) {
          const question = item.querySelector(".faq-question");
          const answer = item.querySelector(".faq-answer");
    
          question.addEventListener("click", function () {
            if (answer.style.display === "block") {
              answer.style.display = "none";
            } else {
              answer.style.display = "block";
            }
          });
        });
    }, []);

    

    return (
        <body className='faq-body'>
        <><><header>
            <Header/>
          </header>
              <main>
              <div class="faq-container">
        <h1>Питання та Відповіді (FAQ)</h1>

        <div class="faq-item">
            <button class="faq-question">Як зробити замовлення на вашому сайті?</button>
            <div class="faq-answer">
                <p>Щоб зробити замовлення, виберіть продукти, які вам подобаються, додайте їх до кошика та перейдіть до оформлення замовлення. Заповніть необхідну інформацію та підтвердіть замовлення. Після цього ви отримаєте підтвердження на електронну пошту.</p>
            </div>
        </div>

        <div class="faq-item">
            <button class="faq-question">Які способи оплати ви приймаєте?</button>
            <div class="faq-answer">
                <p>Ми приймаємо оплату банківськими картками (Visa, MasterCard), електронні платіжні системи (PayPal), а також післяплатою при отриманні товару.</p>
            </div>
        </div>

        <div class="faq-item">
            <button class="faq-question">Як довго триватиме доставка?</button>
            <div class="faq-answer">
                <p>Доставка зазвичай займає від 3 до 7 робочих днів залежно від вашого місцезнаходження. Ви також можете вибрати експрес-доставку за додаткову плату, яка займе 1-3 дні.</p>
            </div>
        </div>
       
        <div class="faq-item">
            <button class="faq-question">Чи можна повернути або обміняти товар?</button>
            <div class="faq-answer">
                <p>Оскільки продукти харчування та напої, які ми куруємо, є швидкопсувними, а іноді мають короткий термін зберігання, всі товари, придбані через SakuraTails, є остаточними і не підлягають поверненню.</p>
            </div>
        </div>

        <div class="faq-item">
            <button class="faq-question">Чи є у вас фізичні магазини?</button>
            <div class="faq-answer">
                <p>Ні, ми є інтернет-магазином і здійснюємо продажі виключно онлайн. Це дозволяє нам пропонувати широкий асортимент продукції за вигідними цінами.</p>
            </div>
        </div>

        <div class="faq-item">
            <button class="faq-question">Як я можу відстежити своє замовлення?</button>
            <div class="faq-answer">
                <p>Після відправлення замовлення ви отримаєте електронного листа з трекінг-номером. Ви можете відстежувати своє замовлення на сайті транспортної компанії, використовуючи цей номер.</p>
            </div>
        </div>

        <div class="faq-item">
            <button class="faq-question">Чи можу я змінити своє замовлення після його оформлення?</button>
            <div class="faq-answer">
                <p>Якщо ваше замовлення ще не відправлено, ви можете внести зміни, зв'язавшись з нашою службою підтримки клієнтів якомога швидше. Після відправлення замовлення зміни неможливі.</p>
            </div>
        </div>

        <div class="faq-item">
            <button class="faq-question">Які країни ви обслуговуєте?</button>
            <div class="faq-answer">
                <p>На даний момент ми обслуговуємо клієнтів в Україні. Ми працюємо над розширенням нашої географії доставки.</p>
            </div>
        </div>

        <div class="faq-item">
            <button class="faq-question">Чи надаєте ви знижки на великі замовлення?</button>
            <div class="faq-answer">
                <p>Так, ми пропонуємо знижки на великі замовлення. Будь ласка, зв'яжіться з нами для отримання детальної інформації про умови знижок.</p>
            </div>
        </div>


        <div class="faq-item">
            <button class="faq-question">Як зв'язатися з вашою службою підтримки клієнтів?</button>
            <div class="faq-answer">
                <p>Ви можете зв'язатися з нами за допомогою форми зворотного зв'язку на сайті, електронної пошти або за телефоном, вказаним на сторінці контактів. Ми завжди раді допомогти вам!</p>
            </div>
        </div>

    </div>
              </main></>
    
              <footer>
               <Footer/>
              </footer></>
              </body>
    
    
      )
  }