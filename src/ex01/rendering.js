export function renderTitle(title) {
    document.body.insertAdjacentHTML(
        "beforeend",
        `<h1>${title}</h1>`
    );
}