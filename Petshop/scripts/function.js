async function loadPage(filename, componentId) {
    const response = await fetch(filename);
    const html = await response.text();

    document.getElementById(componentId).innerHTML = html;
}

export default  loadPage 



