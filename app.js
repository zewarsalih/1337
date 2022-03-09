/*Navbar Menu Btn*/
var menu = document.querySelector('#mobile-menu')
var menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

/*Start Assignment Btn*/
var getBtn = document.getElementById('get-btn');
getBtn.addEventListener('click', getFellowship);


/*Fetch Api*/
var myHeaders = new Headers();
myHeaders.append("Authorization", "api-key 14:2022-03-04:petra.lichtenecker@tretton37.com 927ba1713f47c362a1298b7376f6e0f5254ca6942514700b171ae15bd6e9a66f");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
}

function getFellowship() {
    fetch("https://api.1337co.de/v3/employees?Authorization=api-key 14:2022-03-04:petra.lichtenecker@tretton37.com", requestOptions)
        .then(response => response.json())
        .then((result) => {

            //console.log(result);

            var data = "";
            result.slice(0, 7).map((values) => {
                data += `<div class="profile">
                    <img src=${values.imagePortraitUrl} alt="img" class="images">
                    <div class="profiles">
                    <h2 class="name">${values.name}</h2>
                    <p class="office">Office: ${values.office}</p>
                    <a href="https://www.linkedin.com/${values.linkedin}" target="_blank">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.github.com/${values.gitHub}" target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://www.twitter.com/${values.twitter}" target="_blank">
                        <i class="fab fa-twitter"></i>
                    </a>
                </div>
            </div>`;
            })

            document.getElementById("profiles").innerHTML = data;
        })
        .catch(error => console.log('error', error));
}
