import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Collapse} from 'react-collapse';

import Logo from '../images/logo/SakuraTails.svg';
import Basket from '../images/icons/basket.svg';
import Profile from '../images/icons/profile.svg';
import Box from '../images/icons/box.svg';
import Amex from '../images/pay/amex.png';
import Apple from '../images/pay/apple.png';
import F from '../images/pay/f.png';
import Discover from '../images/pay/discover.png';
import Google from '../images/pay/google.png';
import Mastercard from '../images/pay/mastercard.png';
import Paypal from '../images/pay/paypal.png';
import Shop from '../images/pay/shop.png';
import V from '../images/pay/v.png';
import Visa from '../images/pay/visa.png';
import Instagram from '../images/socials/instagram.svg';
import X from '../images/socials/x.svg';
import Facebook from '../images/socials/facebook.svg';
import Tiktok from '../images/socials/tiktok.svg';
import Qr from '../images/pay/qr.svg';
import WhiteWolf from '../images/logo/white-wolf.svg';
import Spread from '../images/icons/spread.svg';
import HelloEmoji from '../images/icons/hello-emoji.svg';
import AddPlus from '../images/icons/add-plus.svg';
import Exit from '../images/icons/exit.svg';
import History from '../images/icons/history.svg';
import Transfer from '../images/icons/transfer.svg';
import Like from '../images/icons/like.svg';
import Pen from '../images/icons/pen.svg';
import Wallet from '../images/icons/wallet.svg';
import Procent from '../images/icons/procent.svg';
import Case from '../images/icons/case.svg';

import { useAuth } from './providers/AuthProvider';

function App() {
    return <Logo />;
    return <Basket />;
    return <Spread />;
    return <Profile />;
    return <WhiteWolf />;
    return <Amex />;
    return <Apple />;
    return <F />;
    return <Discover />;
    return <Google />;
    return <Mastercard />;
    return <Paypal />;
    return <Shop />;
    return <V />;
    return <Visa />;
    return <Instagram />;
    return <X />;
    return <Facebook />;
    return <Tiktok />;
    return <Qr />;
    return <HelloEmoji />;
    return <AddPlus />;
    return <Exit />;
    return <History />;
    return <Transfer />;
    return <Like />;
    return <Pen />;
    return <Wallet />;
    return <Procent />;
    return <Case />;
  }

  export default function TermsOfUse() {
    const {user} = useAuth();
    const navigate = useNavigate();
    const [isProfileModalOpen, setIsProfileModalOpen] = useState("");

    const handleHeadClick = (e) => {
      e.preventDefault();
      if (!user) {
        navigate('/authorization');
      } else {
        setIsProfileModalOpen(!isProfileModalOpen);
      }
    };

    const handleSellerProfileClick = () => {
        navigate("/seller");
    };

    const handleSettingsClick = () => {
        navigate("/profile-settings")
    };

    return (
        <body className='terms-body'>
        <><><header>
              <section className='header-section'>
                <div className='head-div'>
                    <div className='head-left-div'>
                    <div className='head-nav-div'>
                      <a className='header-link header-link-market' href='/catalog'>Каталог</a>
                      </div>
                      <div className='head-nav-div'>
                      <a className='header-link' href='https://www.figma.com/'>Подарунки</a>
                      </div>
                      </div>
                  <div className='head-logo-div'>
                  <a className='head-logo' href='/'>SakuraTails</a>
                  </div>
                  <div className='head-right-div'>
                    <div className='head-nav-div'>
                        <a className='header-link' href='https://www.figma.com/'>Про нас</a>
                    </div>
                    <div className='head-nav-div'>
                        <a className='header-link' href='https://www.figma.com/'>Коробки</a>
                    </div>
                    <div className='head-nav-div'>
                        <a href='#' className='icon-head'>
                            <img src={Basket}></img>
                        </a>
                    </div>
                    <div className='head-nav-div dropdown-header'>
                        <a href='#' className='icon-head' onClick={handleHeadClick}>
                            <img src={Profile}></img>
                        </a>
                        {user && (
                            <div className="dropdown-content-header" style={{ display: isProfileModalOpen ? "block" : "none" }}>
                                <div>
                                    <p className='head-email-dropdown'>{user.email}</p>
                                </div>
                                <div>
                                    <p className='hello-dropdown'>Вітаємо, <span className='name-dropdown'>{user.displayName}</span> <img src={HelloEmoji} alt="Hello Emoji" /></p>
                                </div>
                                <div>
                                    <button className='dropdown-border-top-button'><img src={History} alt="History" />Історія замовлень</button>
                                </div>
                                <div>
                                    <button className='dropdown-button'><img src={Transfer} alt="Transfer" />Відстеження замовлення</button>
                                </div>
                                <div>
                                    <button className='dropdown-button'><img src={Like} alt="Like" />Обране</button>
                                </div>
                                <div>
                                    <button className='dropdown-button'><img src={Pen} alt="Pen" />Мої відгуки</button>
                                </div>
                                <div>
                                    <button className='dropdown-button'><img src={Wallet} alt="Wallet" />Мій гаманець</button>
                                </div>
                                <div>
                                    <button className='dropdown-border-bottom-button'><img src={Procent} alt="Procent" />Знижки та бонуси</button>
                                </div>
                                <div>
                                    <button className='dropdown-button dropdown-button-exit'><img src={Exit} alt="Exit" />Вийти з акаунта</button>
                                </div>
                                <div>
                                    <button className='dropdown-border-left-button' onClick={handleSettingsClick}>Налаштування</button>
                                    <button className='dropdown-border-right-button'>Довідка</button>
                                </div>
                                <div onClick={handleSellerProfileClick}>
                                    <button className='dropdown-border-bottom-button'><img src={Case} alt="Case" />Кабінет продавця</button>
                                </div>
                                <div>
                                    <p className='bottom-dropdown'>
                                        <a href=''>Privacy Policy</a><span className='slash-dropdown'>/</span><a href=''> Terms of Service</a>
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                  {/* <div className='language-div'>
                    <div className='language-left-div'>
                      <a className='language-link-left language-link'>
                        <p>EN</p>
                      </a>
                    </div>
                    <div className='language-right-div'>
                    <a className='language-link-right language-link'>
                        <p>UA</p>
                      </a>
                    </div>
                  </div> */}
                  </div>
                  </div>
              </section>
          </header>
              <main>
              <div class="terms-container">
        <h1>Умови використання SakuraTails</h1>
        <h2>1. Прийняття Умов</h2>
        <div class="section-terms">
            <p>Ласкаво просимо до SakuraTails! Ці Умови використання ("Умови") є юридично обов'язковою угодою між вами ("Ви") і SakuraTailsInc. ("ми", "наш" або "SakuraTails") і регулюють використання вами тексту, даних, інформації, програмного забезпечення, графіки, фотографій, відео та інших матеріалів ("Матеріали") і послуг ("Послуги"), які ми можемо зробити доступними для вас через будь-яку частину веб-сайту https://asian-shop.vercel.app (далі - "Сайт"), а також будь-яке програмне забезпечення, яке ми надаємо для встановлення і використання на мобільних пристроях, що дозволяє вам отримувати доступ до Послуг.</p>
            <p><strong>ОТРИМУЮЧИ ДОСТУП, ПЕРЕГЛЯДАЮЧИ АБО ВИКОРИСТОВУЮЧИ ЦЕЙ САЙТ АБО МОБІЛЬНИЙ ДОДАТОК, ВИ ПІДТВЕРДЖУЄТЕ, ЩО ВИ ПРОЧИТАЛИ, ЗРОЗУМІЛИ І ПОГОДЖУЄТЕСЯ ДОТРИМУВАТИСЯ ЦИХ УМОВ. ЯКЩО ВИ НЕ ЗГОДНІ З ЦИМИ УМОВАМИ, ВИ НЕ МОЖЕТЕ ВИКОРИСТОВУВАТИ ЦЕЙ САЙТ АБО МОБІЛЬНИЙ ДОДАТОК.</strong></p>
            <p>Ваша згода з цими Умовами також означає вашу згоду з Політикою конфіденційності SakuraTails ("Політика конфіденційності"), яка включена в цей документ.</p>
        </div>
        <h3>1.1 Оновлення Умов</h3>
        <div class="section-terms">
            <p>SakuraTails залишає за собою право переглядати ці Умови в будь-який час. Ми повідомимо вас про будь-які зміни в цих Умовах, розмістивши їх на Сайті і, якщо ви зареєстрували у нас обліковий запис, описавши зміни в цих Умовах в електронному листі, який ми надішлемо на адресу електронної пошти, пов'язану з вашим обліковим записом, і попросивши вас погодитися з переглянутими умовами під час вашого наступного входу на Сайт. Ваше подальше використання Сайту після будь-яких таких змін буде означати вашу згоду з новими Умовами.</p>
        </div>
        <h3>1.2 Судові спори та арбітраж</h3>
        <div class="section-terms">
            <p>ЗВЕРНІТЬ УВАГУ: ЦІ УМОВИ МІСТЯТЬ ПОЛОЖЕННЯ, ЩО РЕГУЛЮЮТЬ ВИРІШЕННЯ СПОРІВ ТА АРБІТРАЖ, ВКЛЮЧАЮЧИ ВІДМОВУ ВІД КОЛЕКТИВНИХ ПОЗОВІВ, ЯКІ ВПЛИВАЮТЬ НА ВАШІ ПРАВА ЗА ЦИМИ УМОВАМИ ТА ЩОДО БУДЬ-ЯКИХ СПОРІВ, ЯКІ У ВАС МОЖУТЬ ВИНИКНУТИ З SAKURATAILS. Ви можете відмовитися від обов'язкового індивідуального арбітражу та відмови від колективного позову, як описано нижче.</p>
        </div>
        <h2>2. Використання Сайту та Послуг</h2>
        <h3>2.1 Право на участь</h3>
        <div class="section-terms">
            <p>Ви повинні бути не молодше 18 років, щоб отримати доступ до Сайту та Послуг або користуватися ними. Отримуючи доступ до Сайту або використовуючи його, ви заявляєте і гарантуєте, що вам виповнилося 18 років. Якщо ви отримуєте доступ до Сайту або користуєтеся ним від імені юридичної особи, ви заявляєте і гарантуєте, що ви уповноважені прийняти ці Умови від імені цієї юридичної особи, і що ця юридична особа погоджується нести відповідальність перед нами, якщо ви або ця юридична особа порушите ці Умови.</p>
        </div>
        <h3>2.2 Ліцензія на використання Сайту</h3>
        <div class="section-terms">
            <p>За умови дотримання вами цих Умов, SakuraTails надає вам обмежену, невиключну, непередавану, несубліцензійну, відкличну ліцензію на доступ і використання Сайту та Послуг виключно для вашого особистого некомерційного використання.</p>
        </div>
        <h3>2.3 Обмеження у використанні</h3>
        <div class="section-terms">
            <p>Ви погоджуєтеся не використовувати Сайт або Послуги в будь-який спосіб, що:</p>
            <ul>
                <li>Порушує будь-яке чинне законодавство або нормативно-правові акти;</li>
                <li>Порушує права інтелектуальної власності SakuraTails або будь-якої третьої сторони;</li>
                <li>є шкідливою, шахрайською, оманливою, загрозливою, образливою, наклепницькою, непристойною або неприйнятною з інших причин;</li>
                <li>Передбачає надсилання небажаної або несанкціонованої реклами чи комерційних повідомлень (наприклад, спаму);</li>
                <li>Збирає особисту інформацію інших осіб без їхнього дозволу;</li>
                <li>Втручається в роботу, порушує, ставить під загрозу цілісність або безпеку системи або іншим чином завдає шкоди Сайту або Послугам.</li>
            </ul>
        </div>
        <h3>2.4 Реєстрація та безпека облікового запису</h3>
        <div class="section-terms">
            <p>Щоб отримати доступ до певних функцій Сайту або Послуг, вам може знадобитися зареєструвати обліковий запис. При реєстрації облікового запису ви повинні надати точну і повну інформацію та постійно її оновлювати. Ви несете повну відповідальність за дії, які відбуваються у вашому обліковому записі, і ви повинні зберігати пароль вашого облікового запису в таємниці. Ви не можете використовувати обліковий запис іншого користувача без його дозволу.</p>
            <p>Ви повинні негайно повідомити SakuraTails про будь-яке порушення безпеки або несанкціоноване використання вашого облікового запису. SakuraTails не несе відповідальності за будь-які збитки, спричинені будь-яким несанкціонованим використанням вашого облікового запису.</p>
        </div>
        <h2>3. Контент та інтелектуальна власність</h2>
        <h3>3.1 Користувацький контент</h3>
        <div class="section-terms">
            <p>Сайт і Послуги можуть дозволяти вам створювати, надсилати або обмінюватися контентом, включаючи текст, фотографії та інші матеріали (далі - "Користувацький контент"). Ви зберігаєте всі права і несете повну відповідальність за створений, надісланий або наданий вами Користувацький контент.</p>
            <p>Надаючи Користувацький контент через Сайт або Послуги, ви надаєте SakuraTails всесвітню, невиключну, безоплатну, передавану ліцензію на використання, відтворення, розповсюдження, демонстрацію та виконання вашого Користувацького контенту у зв'язку з Сайтом та Послугами.</p>
        </div>
        <h3>3.2 Інтелектуальна власність SakuraTails</h3>
        <div class="section-terms">
            <p>Весь контент і матеріали на Сайті та Послугах, включаючи текст, графіку, логотипи, іконки, зображення, аудіо- та відеокліпи, компіляції даних і програмне забезпечення, є власністю SakuraTails або її постачальників контенту і захищені міжнародними законами про авторське право, товарні знаки та іншими законами про інтелектуальну власність.</p>
            <p>Ви погоджуєтеся не змінювати, не копіювати, не поширювати, не передавати, не демонструвати, не виконувати, не відтворювати, не публікувати, не ліцензувати, не створювати похідні роботи, не передавати і не продавати будь-який контент, програмне забезпечення, продукти або послуги, отримані з Сайту або Послуг або іншим чином пов'язані з ними, без попередньої письмової згоди SakuraTails.</p>
        </div>
        <h2>4. Продукти та послуги</h2>
        <h3>4.1 Описи продуктів</h3>
        <div class="section-terms">
            <p>SakuraTails намагається бути максимально точним в описах своїх товарів. Однак, SakuraTails не гарантує, що описи товарів або інший контент на Сайті є точними, повними, надійними, актуальними або безпомилковими.</p>
        </div>
        <h3>4.2 Ціноутворення</h3>
        <div class="section-terms">
            <p>Всі ціни на продукти та послуги можуть бути змінені без попереднього повідомлення. SakuraTails залишає за собою право змінювати або припиняти надання продуктів або послуг в будь-який час без попереднього повідомлення.</p>
        </div>
        <h3>4.3 Відправлення та доставка</h3>
        <div class="section-terms">
            <p>SakuraTails відправляє товари відповідно до своїх правил доставки. Будь-які надані дати доставки є лише приблизними, і SakuraTails не несе відповідальності за будь-які затримки в доставці.</p>
        </div>
        <h3>4.4 Повернення та відшкодування</h3>
        <div class="section-terms">
            <p>Політика повернення та відшкодування SakuraTails викладена на Сайті. Якщо ви не задоволені покупкою, будь ласка, зверніться до наших правил повернення та відшкодування для отримання інструкцій про те, як повернути товар і запросити відшкодування.</p>
        </div>
        <h2>5. Конфіденційність та захист даних</h2>
        <h3>5.1 Політика конфіденційності</h3>
        <div class="section-terms">
            <p>Ваша конфіденційність важлива для нас. Будь ласка, ознайомтеся з нашою Політикою конфіденційності для отримання інформації про те, як SakuraTails збирає, використовує та розкриває особисту інформацію.</p>
        </div>
        <h3>5.2 Безпека даних</h3>
        <div class="section-terms">
            <p>SakuraTails вживає розумних заходів для захисту вашої особистої інформації. Однак жодна передача даних через Інтернет не є повністю безпечною, і SakuraTails не може забезпечити або гарантувати безпеку будь-якої інформації, яку ви нам передаєте.</p>
        </div>
        <h3>5.3 Файли cookie та технології відстеження</h3>
        <div class="section-terms">
            <p>SakuraTails використовує файли cookie та подібні технології відстеження для відстеження активності на нашому Сайті та Сервісах. Ви можете налаштувати свій браузер так, щоб він відмовлявся приймати всі файли cookie або вказував, коли файл cookie надсилається. Однак, якщо ви не приймаєте файли cookie, ви не зможете користуватися деякими частинами Сайту або Послуг.</p>
        </div>
        <h2>6. Відмова від відповідальності та обмеження відповідальності</h2>
        <h3>6.1 Загальне застереження</h3>
        <div class="section-terms">
            <p>Сайт і послуги, включаючи весь контент, матеріали, продукти і послуги, що надаються на Сайті або через нього, надаються "як є" і "як доступно" без будь-яких гарантій, явних або неявних. SakuraTails відмовляється від усіх гарантій, явних або неявних, включаючи, але не обмежуючись, неявними гарантіями товарного вигляду, придатності для певної мети і непорушення прав інтелектуальної власності.</p>
        </div>
        <h3>6.2 Обмеження відповідальності</h3>
        <div class="section-terms">
            <p>У повній мірі, дозволеній чинним законодавством, SakuraTails не несе відповідальності за будь-які непрямі, випадкові, спеціальні, побічні або штрафні збитки, включаючи, але не обмежуючись цим, втрату прибутку, даних, використання, ділової репутації або інші нематеріальні збитки, що виникають в результаті або у зв'язку з використанням або неможливістю використання вами Сайту або Послуг.</p>
            <p>За жодних обставин загальна відповідальність SakuraTails перед вами за всі збитки, втрати та причини позову, що виникають внаслідок або у зв'язку з цими Умовами або вашим використанням Сайту чи Послуг, не перевищує суму, яку ви сплатили SakuraTails за останні шість (6) місяців, або п'ятдесят доларів ($50), залежно від того, яка з цих сум є більшою.</p>
        </div>
        <h3>6.3 Відмова від відповідальності за створений користувачем контент</h3>
        <div class="section-terms">
            <p>Думки, поради, заяви, пропозиції або інша інформація чи контент, розміщені на Сайті користувачами, належать їхнім авторам, а не SakuraTails, і на них не обов'язково покладатися. Такі автори несуть повну відповідальність за точність такого контенту.</p>
        </div>
        <h2>7. Відшкодування збитків</h2>
        <p>Ви погоджуєтеся відшкодовувати, захищати та убезпечувати SakuraTails, його афілійовані компанії та їхніх відповідних посадових осіб, директорів, співробітників та агентів від будь-яких претензій, зобов'язань, збитків, втрат та витрат, включаючи, але не обмежуючись, розумні гонорари адвокатів та витрати, що виникають внаслідок або будь-яким чином пов'язані з вашим доступом або використанням Сайту, Послуг або контенту; вашим порушенням цих Умов; або порушенням будь-яких прав третіх осіб, включаючи, але не обмежуючись, будь-яку інтелектуальну власність або права на недоторканність особистого життя.</p>
        <h2>8. Регулююче право та вирішення спорів</h2>
        <h3>8.1 Регулююче законодавство</h3>
        <div class="section-terms">
            <p>Ці Умови та будь-які суперечки, що виникають з них або у зв'язку з ними, регулюються і тлумачаться відповідно до законодавства [вкажіть країну/державу], без урахування його колізійних норм.</p>
        </div>
        <h3>8.2 Арбітраж</h3>
        <div class="section-terms">
            <p>Будь-який спір, що виникає з цих Умов, Сайту або Послуг або пов'язаний з ними, буде вирішуватися шляхом обов'язкового арбітражу відповідно до правил Американської арбітражної асоціації. Арбітраж буде проходити в [вкажіть місто], а рішення арбітра буде остаточним і обов'язковим до виконання.</p>
            <p><strong>ВИ ПОГОДЖУЄТЕСЯ, ЩО ВИ ТА SAKURATAILS МОЖЕТЕ ПОДАВАТИ ПОЗОВИ ОДИН ПРОТИ ОДНОГО ЛИШЕ В ІНДИВІДУАЛЬНІЙ ЯКОСТІ, А НЕ ЯК ПОЗИВАЧ АБО ЧЛЕН ГРУПИ В БУДЬ-ЯКОМУ ПЕРЕДБАЧУВАНОМУ ГРУПОВОМУ АБО ПРЕДСТАВНИЦЬКОМУ ПОЗОВІ.</strong></p>
        </div>
        <h3>8.3 Відмова від участі в арбітражі</h3>
        <div class="section-terms">
            <p>Ви можете відмовитися від арбітражного розгляду протягом тридцяти (30) днів з дати, коли ви вперше погодилися з цими Умовами, надіславши SakuraTails письмове повідомлення на адресу [Вставте адресу]. Якщо ви відмовляєтеся, ні ви, ні SakuraTails не можете вимагати від іншої сторони брати участь в арбітражному розгляді.</p>
        </div>
        <h2>9. Різне</h2>
        <h3>9.1 Угода в цілому</h3>
        <div class="section-terms">
            <p>Ці Умови складають повну угоду між вами і SakuraTails щодо використання Сайту та Послуг і замінюють будь-які попередні угоди між вами і SakuraTails, що стосуються цього питання.</p>
        </div>
        <h3>9.2 Відокремлюваність</h3>
        <div class="section-terms">
            <p>Якщо будь-яке положення цих Умов буде визнано недійсним або таким, що не підлягає виконанню, решта положень залишатимуться в повній мірі чинними.</p>
        </div>
        <h3>9.3 Відмова не допускається</h3>
        <div class="section-terms">
            <p>Нездатність SakuraTails забезпечити дотримання будь-якого права або положення цих Умов не буде вважатися відмовою від такого права або положення.</p>
        </div>
        <h3>9.4 Призначення</h3>
        <div class="section-terms">
            <p>SakuraTails може переуступати ці Умови, а також будь-які свої права та обов'язки за ними, в будь-який час без вашої згоди. Ви не можете передавати ці Умови або будь-які з ваших прав і зобов'язань за ними без попередньої письмової згоди SakuraTails.</p>
        </div>
        <h3>9.5 Контактна інформація</h3>
        <div class="section-terms">
            <p>Якщо у вас виникли запитання щодо цих Умов, будь ласка, зв'яжіться з нами за адресою hello@sakuratails.com.</p>
        </div>
    </div>
              </main></>
    
              <footer>
                <div className='footer-div'>
                  <nav>
                    <div className='top-footer-div'>
                    <div className='logo-footer-div'>
                          <img className='footer-wolf' href='/' src={WhiteWolf} alt='logo SakuraTails'></img>
                          <a className='head-logo footer-logo' href='/'>SakuraTails</a>
                      </div>
                      <div className='nav-footer-div'>
                        <div className='left-nav-div'>
                      <ul>
                          <li className='section-footer-bold'><a className='section-footer section-footer-bold'>Тільки на SakuraTails</a></li>
                          <li className='section-footer'><a className='section-footer' href='#'>Магазин</a></li>
                          <li className='section-footer'><a className='section-footer' href='https://www.figma.com/'>Подарункові коробки</a></li>
                          <li className='section-footer'><a className='section-footer' href='#subcribtion-section'>Підписка</a></li>
                      </ul>
                      </div>
                      <div className='right-nav-div'>
                      <ul>
                          <li className='section-footer-bold'><a className='section-footer section-footer-bold'>Підтримка</a></li>
                          <li className='section-footer'><a className='section-footer' href='https://www.figma.com/'>Політика конфіденційності</a></li>
                          <li className='section-footer'><a className='section-footer' href='https://www.figma.com/'>Про нас</a></li>
                          <li className='section-footer'><a className='section-footer' href='https://www.figma.com/'>Умови</a></li>
                          <li className='section-footer'><a className='section-footer' href='https://www.figma.com/'>FAQ</a></li>
                          <li className='section-footer'><a className='section-footer' href='https://www.figma.com/'>Політика доставки</a></li>
                      </ul>
                      </div>
                      </div>
                      <div className='pay-footer-div'>
                        <div className='we-accept-div'>
                      <h3 className='we-accept'>We accept</h3>
                      </div>
                        <div className='inline-pay-div'>
                      <div className='icon-pay-div'>
                      <img src={Amex}></img>
                      </div>
                      <div className='icon-pay-div'>
                      <img src={Apple}></img>
                      </div>
                      <div className='icon-pay-div'>
                      <img src={F}></img>
                      </div>
                      <div className='icon-pay-div'>
                      <img src={Discover}></img>
                      </div>
                      <div className='icon-pay-div'>
                      <img src={Google}></img>
                      </div>
                      </div>
                      <div className='inline-pay-div'>
                      <div className='icon-pay-div'>
                      <img src={Mastercard}></img>
                      </div>
                      <div className='icon-pay-div'>
                      <img src={Paypal}></img>
                      </div>
                      <div className='icon-pay-div'>
                      <img src={Shop}></img>
                      </div>
                      <div className='icon-pay-div'>
                      <img src={V}></img>
                      </div>
                      <div className='icon-pay-div'>
                      <img src={Visa}></img>
                      </div>
                      </div>
                      <div className='qr-div'>
                      <img src={Qr}></img>
                      </div>
                      </div>
                      </div>
                  </nav>
                  </div>
                  <div className='white-line'></div>
                  <div className='footer-div'>
                  <div className='bottom-footer-div'>
                  
                    <div>
                  <h3 className='sakuratails'>2024 SakuraTails</h3>
                  </div>
                      <ul>
                      <div className='social-box-div'>
                          <div className='social-div'>
                          <li><a href='https://www.instagram.com/'><img src={Instagram}></img></a></li>
                          </div>
                          <div className='social-div'>
                          <li><a href='https://twitter.com/'><img src={X}></img></a></li>
                          </div>
                          <div className='social-div'>
                          <li><a href='https://www.facebook.com/'><img src={Facebook}></img></a></li>
                          </div>
                          <div className='social-div'>
                          <li><a href='https://www.tiktok.com/'><img src={Tiktok}></img></a></li>
                          </div>
                          </div>
                      </ul>
                      </div>
                      </div>
              </footer></>
              </body>
    
    
      )
  }