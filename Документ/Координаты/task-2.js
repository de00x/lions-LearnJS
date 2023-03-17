{
  /* <body> */
}

// <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sint atque dolorum fuga ad incidunt voluptatum error fugiat animi amet! Odio temporibus nulla id unde quaerat dignissimos enim nisi rem provident molestias sit tempore omnis recusandae
//   esse sequi officia sapiente.</p>

// <blockquote>
//   Teacher: Why are you late?
//   Student: There was a man who lost a hundred dollar bill.
//   Teacher: That's nice. Were you helping him look for it?
//   Student: No. I was standing on it.
// </blockquote>

// <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sint atque dolorum fuga ad incidunt voluptatum error fugiat animi amet! Odio temporibus nulla id unde quaerat dignissimos enim nisi rem provident molestias sit tempore omnis recusandae
//   esse sequi officia sapiente.</p>

{
  /* <script> */
}
/**
 * @param {Node} anchor
 * @param {string} position
 * @param {Node} elem
 *
 */
const positionAt = (anchor, position, elem) => {
  let anchorCoords = anchor.getBoundingClientRect();

  switch (position) {
    case "top":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
      break;

    case "right":
      elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
      elem.style.top = anchorCoords.top + "px";
      break;

    case "bottom":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
      break;
  }
};

const showNote = (anchor, position, html) => {
  let note = document.createElement("div");
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
};

let blockquote = document.querySelector("blockquote");

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");
{
  /* </script> */
}

{
  /* </body> */
}
