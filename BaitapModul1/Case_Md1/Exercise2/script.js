const adressbtn = document.querySelector('#adress-form');
adressbtn.addEventListener('click', function () {
    document.querySelector('.adress-form').style.display = 'flex';
})
const adressctn = document.querySelector('#closeAdress');
adressctn.addEventListener('click', function () {
    document.querySelector('.adress-form').style.display = 'none';
})

//1. Tạo đối tượng User có 2 thuộc tính là username và password
//2. Tạo const accountDemo type = User
//3. Validate username từ 5 đến 30 ký tự
//4, Mk từ 6-18 ký tự
//5. Check nếu login request đúng thì đẩy qua trang home