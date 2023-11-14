import React from 'react';

export default function About(props) {
  return (
    <div>
      <aside>
        <img
          src={props.image || "https://via.placeholder.com/215"}
          alt="blog logo"
        />
        <p>{props.about}</p>
      </aside>
    </div>
  );
}
