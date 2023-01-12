// react
import { React, useEffect, useState }  from 'react';

// scss
import './scss/App.scss';

// component
import Card from './components/Card';
import Loader from './components/Loader';

// json
import reports from './data.json';

// images
import profilePicture from './assets/images/image-jeremy.png';

function App() {
  const [time, setTime] = useState("weekly");
  const [isLoading, setIsLoading] = useState(false);

  const getTime = (event) => {
    const timeButtons = document.querySelectorAll('.main-card__period-time');

    timeButtons.forEach((timeButton) => {
      timeButton.classList.remove('active');
    })

    setIsLoading(true);

    event.target.classList.add('active');

    setTimeout(() => {
      setIsLoading(false);
      setTime(event.target.id);
    }, 1000);

  }

  return (
    <div className="App">
      <main className="container">
        <section className='main-card card'>
          <div className='main-card__top-section'>
            <div className='main-card__img-wrapper'>
              <img className='main-card__img' src={profilePicture} alt="jeremy photo" />
            </div>
            <div className='main-card__profile-wrapper'>
              <p className='main-card__header-text'>Report for</p>
              <h1 className='main-card__name'>Jeremy Robson</h1>
            </div>
          </div>
          <div className='main-card__bottom-section'>
            <p id='daily' className='main-card__period-time' onClick={getTime}>Daily</p>  
            <p id='weekly' className='main-card__period-time active' onClick={getTime}>Weekly</p>
            <p id='monthly' className='main-card__period-time' onClick={getTime}>Monthly</p>
          </div>
        </section>

        {
          reports && reports.map((report, index) => (
            <Card 
              key={index}
              background={report.background}
              category={report.title}
              currentTime=
                {
                  time === "daily" ? report.timeframes.daily.current : time === "weekly" ? report.timeframes.weekly.current : report.timeframes.monthly.current
                }
              lastTime=
                {
                  time === "daily" ? report.timeframes.daily.previous : time === "weekly" ? report.timeframes.weekly.previous : report.timeframes.monthly.previous
                }
                lastTimeText = {time === "daily" ? "day" : time === "weekly" ? "week" : "month"}
                loading={isLoading}
            />
          ))
        }

      {isLoading && <Loader />}
       
      </main>
  
      <footer className="footer">
        Challenge by <a className='footer__link' href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a className='footer__link' href="https://www.frontendmentor.io/profile/Alifkm" target="_blank">Alif Kahfi</a>.
      </footer>
    </div>
  );
}

export default App;
