import React, { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import ResultsBox from '../components/ResultsBox';

function Home({ setProgress }) {
  const [results, setResults] = useState([]);
  const [alarm, setAlarm] = useState(false);

  useEffect(() => {
    if (alarm) {
      const audio = new Audio('/path/to/deal_alert_sound.mp3');
      audio.play();
    }
  }, [alarm]);

  const handleSearch = (query) => {
    setProgress(30);
    fetch(`/scrape/${query}`)
      .then(response => response.json())
      .then(data => {
        const enrichedData = data.map(item => {
          item.deal_alert = item.total_price < (item.avg_price * 0.7);
          if (item.deal_alert) setAlarm(true);
          return item;
        });
        setResults(enrichedData);
        setProgress(100);
      });
  };

  return (
    <div className="home">
      <h1>eBay Scraper</h1>
      <SearchBox onSearch={handleSearch} />
      <ResultsBox results={results} />
    </div>
  );
}

export default Home;
