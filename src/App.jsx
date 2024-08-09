import './App.css'

function App() {
  return (
    <>
    <header>
      <Header />
    </header>

    <div className="container">
      <Cards />
      <FoodCards />
      <FamilyGathering />
      <Reservation />
    </div>
    
    <footer>
      <Footer />
    </footer>
    </>
  )
}

function Header() {
  return (
    <>
     <div className="top_image"></div>
        
        <div className="header_text">
              <img className="page_logo" src="img/header_logo.png" alt="" />
              <h1>Exquisite dining since 1989</h1>
              <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
              <a href="#">BOOK A TABLE</a>
        </div>
    </>
  )
}

function Cards() {
  return (
    <>
     <div className="cards">
            <div className="card card1">
                <img src="/img/place_image_01.png" alt="" />

                <div className="card_texts">
                    <h1>Enjoyable place for all the family</h1>
                    <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
                </div>
            </div>
    
            <div className="card card2">
                <img src="/img/place_image_02.png" alt="" />

                <div className="card_texts">
                    <h1>The most locally sourced food</h1>
                    <p>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
                </div>
            </div>    
        </div>
    </>
  )
}

function FoodCards() {
  return (
    <>
     <div className="food_cards">

<div className="food_top">
    <h1>A few highlights from our menu</h1>
    <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
</div>

<div className="food_section">
    <div className="food_card">
        <img src="/img/seared_salmon.jpg" alt="" />
        <div className="food_Card_text">
            <h2>Seared Salmon Fillet</h2>
            <p>Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
        </div>
    </div>
    <hr />
    <div className="food_card">
        <img src="/img/rosemary_filet.jpg" alt="" />
        <div className="food_Card_text">
            <h2>Rosemary Filet Mignon</h2>
            <p>Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
        </div>
    </div>
    <hr />

    <div className="food_card">
        <img src="/img/summer_fruit.jpg" alt=""/>
        <div className="food_Card_text">
            <h2>Summer Fruit Chocolate Mousse</h2>
            <p>Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
        </div>
    </div>
</div>
</div>
    </>
  )
}

function FamilyGathering() {
  return (
    <>
     <div className="family_gathering">
            <img src="/img/family_gathering.png" alt=""/>

            <div className="event_texts">
                <div className="event_item">
                    <h2>FAMILY GATHERING</h2>
                    <h2 className="special_text">SPECIAL EVENTS</h2>
                    <h2 className="special_text">SOCIAL EVENTS</h2>
                </div>
    
                <h1>Family Gathering</h1>
                <p>We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</p>
                <a href="">BOOK A TABLE</a>
            </div>
        </div>
    </>
  )
}

function Reservation() {
  return (
    <>
      <div className="reservation">
            <h1>Ready to make a reservation?</h1>
            <a href="">BOOK A TABLE</a>
      </div>
    </>
  )
}

function Footer() {
  return (
    <>
      <div className="footer_section">
            <img src="/img/header_logo.png" alt=""/>

            <div className="footer_texts">
                <h3>
                    MARTHWAİTE, SEDBERGH <br/>
                    CUMBRİA <br/>
                    +00 44 123 4567
                </h3>

                <h3>
                    OPEN TIMES <br/>
                    MON - FRI: 09:00 AM - 10:00 PM <br/>
                    SAT - SUN: 09:00 AM - 11:30 PM 
                </h3>
            </div>
        </div>
    </>
  )
}

export default App
