import React from 'react'

export default function Basis() {
  return (
    <main>
        <section>
            <h3>A NEW BOX FROM SakuraTails</h3>
            <h2>Enjoy unbelievable snacks & surprises.</h2>
            <p>Experience the SakuraTails box, packed with a variety of treats to delight your senses. 
                Subscribe now to enjoy these exceptional offerings while supplies last!</p>
                <img src={require('../images/img/tea.jpg')}></img>
        </section>
        <section>
            <h3>EACH BOX IS BURSTING WITH</h3>
            <h2>Snacks, smiles, and more.</h2>
            <img  src={require('../images/icons/noodle.png')}></img>
            <h4>13+ SNACKS</h4>
            <p>Taste premium Japanese treats and amazing snacks</p>
            <img  src={require('../images/icons/book.png')}></img>
            <h4>GUIDE</h4>
            <p>Learn about your snacks with a booklet of stories, allergen info, games, and more.</p>
            <img  src={require('../images/icons/group.png')}></img>
            <h4>SakuraTails KEEPSAKES</h4>
            <p>Get new items each box, such as cups, coasters, stickers, and more.</p>
            <img  src={require('../images/icons/medal.png')}></img>
            <h4>SakuraTails EXLUSIVES</h4>
            <p>Enjoy unique treats and items crafted exclusively for SakuraTails members.</p>
        </section>
        <section>
            <h2>How it works?</h2>
            <ul>
                <li>
                <img  src={require('../images/icons/click.png')}></img>
                <h4>Subscribe</h4>
            <p>and get a box deliverd monthly filled with snakcs, tea, rewards, and more.</p>
                </li>
                <li>
                <img  src={require('../images/icons/car.png')}></img>
                <h4>Recieve</h4>
            <p>authentic treats like cakes, mochi, chips packed with care and delivered to your door.</p>
                </li>
                <li>
                <img  src={require('../images/icons/box.png')}></img>
                <h4>Exparience</h4>
            <p>new curated themes each month around festivals, prefectures, and holidays!</p>
                </li>
            </ul>
        </section>
        <section>
            <h3>MORE THAN JUST SNACKS</h3>
            <h2>Experience Asia from Home</h2>
            <p>SakuraTails offers a unique way to learn, taste, and experience Asia and its vibrant culture from your home.</p>
            <a href='#'>Gift</a>
            <img  src={require('../images/img/japanese.jpg')} alt='woman'></img>
        </section>
        <section>
            <h2>Partners</h2>
            <img  src={require('../images/partners/one.jpg')} alt='partners'></img>
            <img  src={require('../images/partners/two.jpg')} alt='partners'></img>
            <img  src={require('../images/partners/three.jpg')} alt='partners'></img>
            <img  src={require('../images/partners/four.jpg')} alt='partners'></img>
        </section>
        <section>

        </section>
        <section>
            <h3>Snack On This, Not That</h3>
            <h2>Choose your subcribtion plan</h2>
            <ul>
                <li> 
                <article>
                <h2>6 - MONTH</h2>
                <h3>RECEIVE 3 BOXES AND SAVE 30$</h3>
                <h3><span>$49.99</span> USD PER BOX</h3>
                <h4>You will be billed $149.97 every 6 months.</h4>
            </article>
            </li>
            <li>
            <article>
                <h2>1 - MONTH</h2>
                <h3>PAY PER BOX</h3>
                <h3><span>$59.99</span> USD PER BOX</h3>
                <h4>You will be billed $59.99 every 6 months.</h4>
            </article>
            </li>
            </ul>
        </section>
    </main>
  )
}