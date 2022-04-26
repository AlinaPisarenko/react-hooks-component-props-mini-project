import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const coffee = "☕️";
  const bento = "🍱";
  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • </small>
      <small>
        {minutes < 30
          ? coffee.repeat(Math.round(minutes / 5)) + minutes + "min read"
          : bento.repeat(Math.round(minutes / 10)) + minutes + "min read"}
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
