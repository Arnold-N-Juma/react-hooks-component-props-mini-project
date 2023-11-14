import React from 'react';

export default function Article({ title, date, about, preview}) {
  const defaultDate = 'January 1, 1970';
  const defaultAbout = "A blog about learning React";

  const minutesToRead = Math.ceil((about || defaultAbout).split(' ').length / 200);

  const renderMinutesToRead = (minutes) => {
    const coffeeCups = Math.ceil(minutes / 5);
    const bentoBoxes = Math.ceil(minutes / 10);

    const coffeeCupsEmoji = '☕️';
    const bentoBoxEmoji = '🍱';

    if (minutes < 30) {
      return coffeeCups > 0 ? coffeeCupsEmoji.repeat(coffeeCups) + ` ${minutes} min read` : '';
    } else {
      return bentoBoxes > 0 ? bentoBoxEmoji.repeat(bentoBoxes) + ` ${minutes} min read` : '';
    }
  };

  return (
    <div>
      <article data-testid="article">
        <h3>{title}</h3>
        <small>{date || defaultDate}</small>
        <p>{about || defaultAbout}</p>
        <p>{preview}</p>
        <p>{renderMinutesToRead(minutesToRead)}</p>
      </article>
    </div>
  );
}
