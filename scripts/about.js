const about = () => {
    showEffect('.sidebar1', 'bottom');
    setTimeout(() => {
        hideBut();
        $('.sidebar1').empty()
        $('.sidebar1').append('<div class="about-body"></div>')
        $('.about-body').append(`<h2>${Strings.about}</h2>`)
        $('.about-body').append(`<p>${Strings.aboutText}</p>`);
        Graphics.apply();
    }, 1500)
}