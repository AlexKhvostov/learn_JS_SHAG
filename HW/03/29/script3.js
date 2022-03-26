const loadJs = (src, success, error) => {
    const script = document.createElement('script');
    script.onload = success;
    script.onerror = error;
    script.src = src;
    document.head.append(script);
}

// код для открытия модального окна нужно выполнить после загрузке bootstrap.bundle.min.js, а bootstrap.bundle.min.js следует загрузить только после загрузки jquery.min.js
loadJs('https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js',
    () => {
        loadJs('https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js',
            () => {
                setTimeout(() => {
                    document.body.querySelector('.modal').modal('show');
                }, 1000);
            },
            () => {
                console.error('Ошибка при загрузки скриптов!');
            }
        )
    },
    () => {
        console.error('Ошибка при загрузки скриптов!');
    }
)