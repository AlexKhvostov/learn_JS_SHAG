<button type="button" id="get-text">Получить текст с сервера</button>
<div id="result"></div>

<script>
    const request = (url, success, error) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
    xhr.status === 200 ? success(xhr.response) : error(xhr.statusText);
}
    xhr.onerror = () => error(xhr.statusText);
    xhr.send();
}
    document.querySelector('#get-text').onclick = () => {
    request('/examples/ajax/01.html', data => {
        document.querySelector('#result').innerHTML = data;
    }, error => {
        console.error(error);
    });
}
</script>