const header = {
    init: function() {
        this.clickShowMenu('.humbeger', ' .list__menu', 'showMenu');
        this.clickShowMenu('.humbeger', ' .overlay', 'Meniu');
        this.clickShowMenu('.header .list__menu .item', ' .item__content', 'showList');
        this.clickShowMenu('.header .list__menu .item1', ' .item__content1', 'showList1');
        this.clickShowMenu('.header .list__menu .item2', ' .item__content2', 'showList2');
    },
    clickShowMenu: function(button, menu, ClassShowMenu) {
        var btn = document.querySelector(button);
        var NavMenu = document.querySelector(menu);
        btn.addEventListener('click', () => {
            NavMenu.classList.toggle(ClassShowMenu);
        });
    }
}
header.init();


$(window).on('load', function(event) {
    $('body').removeClass('preloading');
    // $('.load').delay(1000).fadeOut('fast');
    $('.loader').delay(1000).fadeOut('fast');
});

const keader = {
    init: function() {
        this.clickShowMenu('.overlay', '.list__menu', 'showMenu');
        this.clickShowMenu('.overlay', '.overlay', 'Meniu');
    },
    clickShowMenu: function(button, menu, ClassShowMenu) {
        var btn = document.querySelector(button);
        var NavMenu = document.querySelector(menu);
        btn.addEventListener('click', () => {
            NavMenu.classList.remove(ClassShowMenu);
        });
    }
}
keader.init()

const tabcontent = {
    init: function() {
        this.clickTab('.pofo', '.tabcontent', '.tablinks');
        this.clickTab('.pofolio', '.tabcontent', '.tablinks');
    },
    clickTab: function(wrapper, tabs, buttons) {
        let self = document.querySelector(wrapper);
        if (self === null) return false;
        else {
            let items = self.querySelectorAll(tabs);
            let btns = self.querySelectorAll(buttons);
            btns.forEach((btn, index) => {
                btn.addEventListener('click', () => {
                    btns.forEach(btn => btn.classList.remove('active'));
                    items.forEach(item => item.classList.remove('active'));
                    btns[index].classList.add('active');
                    items[index].classList.add('active');
                })
            })
        }


    }
}
tabcontent.init();
$('.banner .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$('.tabs .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    fluidSpeed: true,
    smartSpeed: 400,
    responsiveRefreshRate: 100,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

// Dữ liệu môi trường
const climateModule = {
    init: function() {
        this.setupFormHandler();
    },
    setupFormHandler: function() {
        const form = document.getElementById("climate-form");
        const resultDiv = document.getElementById("climate-result");

        if (!form) return; // Đảm bảo form tồn tại

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            // Lấy dữ liệu người dùng nhập
            const date = document.getElementById("date").value;
            const location = document.getElementById("location").value;

            // Dữ liệu giả lập (có thể thay bằng API thật)
            const climateData = {
                hanoi: {
                    temp: "26°C",
                    humidity: "78%",
                    condition: "Có mưa nhẹ",
                },
                hochiminh: {
                    temp: "30°C",
                    humidity: "70%",
                    condition: "Nắng nhẹ",
                },
                danang: {
                    temp: "28°C",
                    humidity: "75%",
                    condition: "Mây rải rác",
                },
                cantho: {
                    temp: "29°C",
                    humidity: "80%",
                    condition: "Trời nhiều mây",
                },
            };

            // Hiển thị kết quả
            if (climateData[location]) {
                const data = climateData[location];
                resultDiv.innerHTML = `
                    <h3>Kết quả ngày ${date}</h3>
                    <p>Địa điểm: ${location}</p>
                    <p>Nhiệt độ: ${data.temp}</p>
                    <p>Độ ẩm: ${data.humidity}</p>
                    <p>Tình trạng thời tiết: ${data.condition}</p>
                `;
            } else {
                resultDiv.innerHTML = `<p>Không tìm thấy thông tin khí hậu cho địa điểm này.</p>`;
            }
        });
    },
};

// Khởi chạy module climate
climateModule.init();


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 500) {
        $(".header").addClass("show");
    } else {
        $(".header").removeClass("show");
    }
});