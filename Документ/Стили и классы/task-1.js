{
  /* <body> */
}

// <h2>Уведомление находится справа</h2>

// <p>
//   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum aspernatur quam ex eaque inventore quod voluptatem adipisci omnis nemo nulla fugit iste numquam ducimus cumque minima porro ea quidem maxime necessitatibus beatae labore soluta voluptatum
//   magnam consequatur sit laboriosam velit excepturi laborum sequi eos placeat et quia deleniti? Corrupti velit impedit autem et obcaecati fuga debitis nemo ratione iste veniam amet dicta hic ipsam unde cupiditate incidunt aut iure ipsum officiis soluta
//   temporibus. Tempore dicta ullam delectus numquam consectetur quisquam explicabo culpa excepturi placeat quo sequi molestias reprehenderit hic at nemo cumque voluptates quidem repellendus maiores unde earum molestiae ad.
// </p>

{
  /* <script> */
}
function showNotification({ top = 0, right = 0, className, html }) {
  let notification = document.createElement("div");
  notification.className = "notification";
  if (className) {
    notification.classList.add(className);
  }

  notification.style.top = top + "px";
  notification.style.right = right + "px";

  notification.innerHTML = html;
  document.body.append(notification);

  setTimeout(() => notification.remove(), 1500);
}

// test it
let i = 1;
setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: "Hello " + i++,
    className: "welcome",
  });
}, 2000);
{
  /* </script> */
}

{
  /* </body> */
}
