
function categoryMenu() {
    var category = ["Doraemon",
        "One Piece",
        "Conan",
    ];
    var s = "";
    for (i = 0; i < category.length; i++) {
        var a = '<li class="category-item"> <a class="category-item__link" href="">' + category[i] + '</a></li>';
        s += a;
    }
    s = '<ul class="category-list">' + s + '</ul>';
    document.getElementById("categoryMenu").innerHTML = s;
}

function brandMenu() {
    var brand = ["NXB trẻ",
        "Amak Books",
        "NXB KIM ĐỒNG",
        "Sakura Light Novel",
        "TVM Comics",
        "Uranix",
        "SENO",
        "Nhã Nam",
        "Tsuki Light Novel",
        "Khác",
        "Time Books",
        "Sky Books",
        "AZ VIỆT NAM",
        "IPM",
        "Hàng Nhập Khẩu",
        "TABooks",
    ];
    var s = "";
    for (i = 0; i < brand.length; i++) {
        var a = '<li class="category-item category-item__link"><input type="checkbox" > ' + brand[i] + '</li>';
        s += a;
    }
    s = '<ul class="category-list">' + s + '</ul>';
    document.getElementById("brandMenu").innerHTML = s;
}
function priceMenu() {
    var price = ["Nhỏ hơn 50,000₫",
        "Từ 50,000₫ - 100,000₫",
        "Từ 100,000₫ - 200,000₫",
        "Từ 200,000₫ - 300,000₫",
        "Lớn hơn 300,000₫",
    ];
    var s = "";
    for (i = 0; i < price.length; i++) {
        var a = '<li class="category-item"> <a class="category-item__link" href=""> <input type="radio"> ' + price[i] + '</a></li>';
        s += a;
    }
    s = '<ul class="category-list">' + s + '</ul>';
    document.getElementById("priceMenu").innerHTML = s;
}

window.onload = function () {
    //categoryMenu();
    //brandMenu();
    priceMenu();
    //showDRM();
}
var products = [
    { link: "./details/Doraemon1.html", id:"1000", name: "ĐẠI TUYỂN TẬP - DORAEMON TRUYỆN NGẮN TẬP 1", image: "img/drm1.webp", priceOld: "145.000", priceCurrent: "130.500" },
    { link: "./details/Doraemon2.html", id:"1001", name: "ĐẠI TUYỂN TẬP - DORAEMON TRUYỆN NGẮN TẬP 2", image: "https://product.hstatic.net/1000376556/product/2_df8bf475c0d14b6aa281b25d802092a5_large.jpg", priceOld: "145.000", priceCurrent: "130.500" },
    { link: "./details/Doraemon3.html", id:"1002", name: "ĐẠI TUYỂN TẬP - DORAEMON TRUYỆN NGẮN TẬP 3", image: "https://product.hstatic.net/1000376556/product/3_e267f36e35504b7dbf40105435c3f9e1_large.jpg", priceOld: "145.000", priceCurrent: "130.500" },
    { link: "./details/Doraemon4.html", id:"1003", name: "ĐẠI TUYỂN TẬP - DORAEMON TRUYỆN NGẮN TẬP 4", image: "https://product.hstatic.net/1000376556/product/4_10a556b94e534ab79ff7319c08dca766_large.jpg", priceOld: "145.000", priceCurrent: "130.500" },
    { link: "./details/Doraemon5.html", id:"1004", name: "ĐẠI TUYỂN TẬP - DORAEMON TRUYỆN NGẮN TẬP 5", image: "https://product.hstatic.net/1000376556/product/5_25c282ab62504858a57d81905a9a57b4_large.jpg", priceOld: "145.000", priceCurrent: "130.500" },
    { link: "./details/Doraemon6.html", id:"1005", name: "ĐẠI TUYỂN TẬP - DORAEMON TRUYỆN NGẮN TẬP 6", image: "https://product.hstatic.net/1000376556/product/6_37d5581019f94b9b9125cf0904fdc591_large.jpg", priceOld: "145.000", priceCurrent: "130.500"},
    { link: "./details/Doraemon8.html", id:"1006", name: "ĐẠI TUYỂN TẬP - DORAEMON TRUYỆN NGẮN TẬP 8", image: "https://product.hstatic.net/1000376556/product/8_b349caff07464276a274a1a661dd32b8_large.jpg", priceOld: "145.000", priceCurrent: "130.500"},
    { link: "./details/Doraemon9.html", id:"1007", name: "ĐẠI TUYỂN TẬP - DORAEMON TRUYỆN NGẮN TẬP 9", image: "https://product.hstatic.net/1000376556/product/9_b586eeb053a24d0cb62e1bec0604b15b_large.jpg", priceOld: "145.000", priceCurrent: "130.500"},
    { link: "./details/Doraemon10.html", id:"1009", name: "ĐẠI TUYỂN TẬP - DORAEMON TRUYỆN NGẮN TẬP 11", image: "https://product.hstatic.net/1000376556/product/11_26626645b78b438ca0298cb6777672e0_large.jpg",priceOld: "145.000", priceCurrent: "130.500" },
    { link: "./details/Doraemon12.html", id:"1010", name: "ĐẠI TUYỂN TẬP - DORAEMON TRUYỆN NGẮN TẬP 12", image: "https://product.hstatic.net/1000376556/product/12_e2ed440deaed4b21b1d70f3d6b9dc640_large.jpg", priceOld: "145.000", priceCurrent: "130.500" },
    { link: "./details/Doraemon13.html", id:"1011", name: "ĐẠI TUYỂN TẬP - DORAEMON TRUYỆN NGẮN TẬP 13", image: "https://product.hstatic.net/1000376556/product/13_8242d1e08a7644419a1232edd34adedc_large.jpg",priceOld: "145.000", priceCurrent: "130.500" },
    { link: "./details/Doraemon15.html", id:"1012", name: "ĐẠI TUYỂN TẬP - DORAEMON TRUYỆN NGẮN TẬP 15", image: "https://product.hstatic.net/1000376556/product/15_c84c66f1d5ec4e3bae75233c0b760c15_large.jpg",priceOld: "145.000", priceCurrent: "130.500"},
    { link: "./details/Doraemon16.html", id:"1013", name: "ĐẠI TUYỂN TẬP - DORAEMON TRUYỆN NGẮN TẬP 16", image: "https://product.hstatic.net/1000376556/product/doraemon_ngan_16_b5af38f9dced4e719e95961aea71b85e_large.jpg", priceOld: "145.000", priceCurrent: "130.500" },
    { link: "./details/Doraemon17.html", id:"1014", name: "ĐẠI TUYỂN TẬP - DORAEMON TRUYỆN NGẮN TẬP 17", image: "https://product.hstatic.net/1000376556/product/do_tuyen_tap_ngan_17_85051bd457c742cd82635720d82c5b3f_large.jpg", priceOld: "145.000", priceCurrent: "130.500"},
    { link: "./details/Conan1.html", id:"1015", name: "CONAN ĐẶC BIỆT TẬP 1", image: "https://product.hstatic.net/1000376556/product/conan_db_1_ef36b88c71ac49759ae79e83b9823827_large.jpg", priceOld: "18.000", priceCurrent: "16.200" },
    { link: "./details/Conan2.html", id:"1016", name: "CONAN ĐẶC BIỆT TẬP 2", image: "https://product.hstatic.net/1000376556/product/conan_db_2_bc5206e7fc40451cb7c06f0446823619_large.jpg", priceOld: "18.000", priceCurrent: "16.200" },
    { link: "./details/Conan3.html", id:"1017", name: "CONAN ĐẶC BIỆT TẬP 3", image: "https://product.hstatic.net/1000376556/product/conan_db_3_b5ffea147dcd4622a4780116e9eb379e_large.jpg", priceOld: "18.000", priceCurrent: "16.200" },
    { link: "./details/Conan4.html", id:"1018", name: "CONAN ĐẶC BIỆT TẬP 4", image: "https://product.hstatic.net/1000376556/product/conan_db_4_400993a4379e42538222417df00fd957_large.jpg", priceOld: "18.000", priceCurrent: "16.200" },
    { link: "./details/Conan5.html", id:"1019", name: "CONAN ĐẶC BIỆT TẬP 5", image: "https://product.hstatic.net/1000376556/product/conan_db_5_ebd51cded7f2425e9d9ea6c651640a2d_large.jpg", priceOld: "18.000", priceCurrent: "16.200" },
    { link: "./details/Conan6.html", id:"1020", name: "CONAN ĐẶC BIỆT TẬP 6", image: "https://product.hstatic.net/1000376556/product/conan_db_6_9fa7c59f7c3e4eada8a49b585530c9c0_large.jpg", priceOld: "18.000", priceCurrent: "16.200" },
    { link: "./details/Conan7.html", id:"1021", name: "CONAN ĐẶC BIỆT TẬP 7", image: "https://product.hstatic.net/1000376556/product/conan_db_7_102e45a2feaa45dfbe3426341194a2e4_large.jpg", priceOld: "18.000", priceCurrent: "16.200" },
    { link: "./details/Conan8.html", id:"1022", name: "CONAN ĐẶC BIỆT TẬP 8", image: "https://product.hstatic.net/1000376556/product/conan_db_8_2ddd5445b41e4725ad76d882209d12b8_large.jpg", priceOld: "18.000", priceCurrent: "16.200" },
    { link: "./details/Conan9.html", id:"1023", name: "CONAN ĐẶC BIỆT TẬP 9", image: "https://product.hstatic.net/1000376556/product/conan_db_9_e298eccb0bce42e69fd85ba2b04873a1_large.jpg", priceOld: "18.000", priceCurrent: "16.200" },
    { link: "./details/Conan10.html", id:"1024", name: "CONAN ĐẶC BIỆT TẬP 10", image: "https://product.hstatic.net/1000376556/product/conan_db_10_83248c7a9db8466a8de5d70ce1d091d3_large.jpg", priceOld: "18.000", priceCurrent: "16.200" },
    { link: "./details/Conan11.html", id:"1025", name: "CONAN ĐẶC BIỆT TẬP 11", image: "https://product.hstatic.net/1000376556/product/conan_db_11_-_1_0b3740ee1eff4f0389cf67cdeb8fd64f_large.jpg", priceOld: "18.000", priceCurrent: "16.200" },
    { link: "./details/Conan12.html", id:"1026", name: "CONAN ĐẶC BIỆT TẬP 12", image: "https://product.hstatic.net/1000376556/product/conan_db_12_33110956f5b849649419c64d8d50bb70_large.jpg", priceOld: "18.000", priceCurrent: "16.200" },
    { link: "./details/Conan13.html", id:"1027", name: "CONAN ĐẶC BIỆT TẬP 13", image: "https://product.hstatic.net/1000376556/product/conan_db_13_d44221375bb44381a2f6827ba815757d_large.jpg", priceOld: "18.000", priceCurrent: "16.200" },
    { link: "./details/Conan14.html", id:"1028", name: "CONAN ĐẶC BIỆT TẬP 14", image: "https://product.hstatic.net/1000376556/product/conan_db_14_258b411798d945128e0db839a3cb6bcd_large.jpg", priceOld: "18.000", priceCurrent: "16.200" },
    { link: "./details/Conan15.html", id:"1029", name: "CONAN ĐẶC BIỆT TẬP 15", image: "https://product.hstatic.net/1000376556/product/conan_db_15_5926d325c46d4d449d560c3037b35f7a_large.jpg", priceOld: "18.000", priceCurrent: "16.200" },
    { link: "./details/Onepiece1.html", id:"1030", name: "ONE PIECE TẬP 1", image: "https://product.hstatic.net/1000376556/product/1_cfd6c989ded24309adb209a765442a1f_large.jpg", priceOld: "19.500₫", priceCurrent: "17.500" },
    { link: "details.html", id:"1031", name: "ONE PIECE TẬP 2", image: "https://product.hstatic.net/1000376556/product/2_cd74f8e41fb64200b21eb31acbb11253_large.jpg", priceOld: "19.500", priceCurrent: "17.500" },
    { link: "details.html", id:"1032", name: "ONE PIECE TẬP 3", image: "https://product.hstatic.net/1000376556/product/3_3bf8266fb4144dbcb8627bd5845aa2f0_large.jpg", priceOld: "19.500", priceCurrent: "17.500" },
    { link: "details.html", id:"1033", name: "ONE PIECE TẬP 4", image: "https://product.hstatic.net/1000376556/product/4_498eff279fcc47e4bc817f4b036f33c7_large.jpg", priceOld: "19.500", priceCurrent: "17.500" },
    { link: "details.html", id:"1034", name: "ONE PIECE TẬP 5", image: "https://product.hstatic.net/1000376556/product/5_29c6b57ee7e4485a8472d69ff7755175_large.jpg", priceOld: "19.500", priceCurrent: "17.500" },
    { link: "details.html", id:"1035", name: "ONE PIECE TẬP 6", image: "https://product.hstatic.net/1000376556/product/6_85df3b46e86c4263997119c54c866565_large.jpg", priceOld: "19.500", priceCurrent: "17.500" },
    { link: "details.html", id:"1036", name: "ONE PIECE TẬP 7", image: "https://product.hstatic.net/1000376556/product/7_655d52619c714ffe80749273980f6767_large.jpg", priceOld: "19.500", priceCurrent: "17.500" },
    { link: "details.html", id:"1037", name: "ONE PIECE TẬP 8", image: "https://product.hstatic.net/1000376556/product/8_6259f0189ecb4bc09443c1977fd39126_large.jpg", priceOld: "19.500", priceCurrent: "17.500" },
    { link: "details.html", id:"1038", name: "ONE PIECE TẬP 9", image: "https://product.hstatic.net/1000376556/product/9_738daf0320d74751b593e2d247c289c8_large.jpg", priceOld: "19.500", priceCurrent: "17.500" },
    { link: "details.html", id:"1039", name: "ONE PIECE TẬP 10", image: "https://product.hstatic.net/1000376556/product/10_08fcd18e131c4a46b4fb69bb97b84bdd_large.jpg", priceOld: "19.500", priceCurrent: "17.500" },
    { link: "details.html", id:"1040", name: "ONE PIECE TẬP 11", image: "https://product.hstatic.net/1000376556/product/11_2815b0323d5e4fa4861e1d78e20f1d90_large.jpg", priceOld: "19.500", priceCurrent: "17.500" },
    { link: "details.html", id:"1041", name: "ONE PIECE TẬP 12", image: "https://product.hstatic.net/1000376556/product/12_599977788ca14af395b00b9d964065f8_large.jpg", priceOld: "19.500", priceCurrent: "17.500" },
    { link: "details.html", id:"1042", name: "ONE PIECE TẬP 13", image: "https://product.hstatic.net/1000376556/product/13_0019b7ba29e742d8b26ff24e1bdefade_large.jpg", priceOld: "19.500", priceCurrent: "17.500" },
    { link: "details.html", id:"1043", name: "ONE PIECE TẬP 14", image: "https://product.hstatic.net/1000376556/product/14_b7e321c89d354e55ad58d6f86cce5d39_large.jpg", priceOld: "19.500", priceCurrent: "17.500" },
    { link: "details.html", id:"1044", name: "ONE PIECE TẬP 15", image: "https://product.hstatic.net/1000376556/product/15_4a7650f5890c45c8b0b5a4f01e0b9f6c_large.jpg", priceOld: "19.500", priceCurrent: "17.500" },
    
]
localStorage.setItem('products', JSON.stringify(products));
// Console.log(JSON.parse(localStorage.getItem('products'));


let productArr = [];
let showAdd = false;


productArr = products;

let perPage = 6;
let idPage = 1;
let currentPage = 1;
let start = 0;
let end = perPage;


const totalPages = Math.ceil(products.length / perPage);

const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

function getCurrentPage(currentPage) {
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
};

function renderProduct(product) {
    s = '';
    const content = product.map((item, index) => {
        if (index >= start && index < end) {
            s += '<div class="grid__column-2-4">',
                s += '<a class="home-product-item" >', '+item.link+'
            s += '<div class="home-product-item__img">'
            s += '<img src=' + item.image + '>',
                s += '<h4 class="home-product-item__name">' + item.name,
                s += '</h4>',
                s += '<div class="home-product-item__price">',
                s += '<span class="home-product-item__price-old">' + item.priceOld + '</span>',
                s += '<span class="home-product-item__price-current">' + item.priceCurrent + '</span>',
                s += '</div>',
                s += '<div class="home-product-item__favourite">',
                s += '<i class="fas fa-check"></i>',
                s += '<span>Yêu thích</span>',
                s += '</div>',
                s += '<div class="home-product-item__sale-off">',
                s += '<span class="home-product-item__sale-off-percent">10%</span>',
                s += '</br>'
                s += '<span class="home-product-item__sale-off-label">GIẢM</span>',
                s += '</div>'
                s += '</div>',
                s += '<div class="Click">',
                s += '<button onclick="themspvaogiohang('+item.id+');" id ="testthu" class="addCart">Thêm vào giỏ hàng</button>',
                s += '<button onclick="chitietsanpham('+item.id+');" class="addDetails js__show-details">Chi tiết sản phẩm</button>',
                s += '</div>',
                s += '</a>',
                s += '</div>';
            return s;
        }
    });
    document.getElementById('product').innerHTML = s;
}

renderProduct(productArr);

function showOP() {
    s = '';
    for ( var i =0; i<products.length; i++){
        if (products[i].id >='1030'){
        s += '<div class="grid__column-2-4">',
            s += '<a class="home-product-item" >',
        s += '<div class="home-product-item__img">'
        s += '<img src=' + products[i].image + '>',
            s += '<h4 class="home-product-item__name">' + products[i].name,
            s += '</h4>',
            s += '<div class="home-product-item__price">',
            s += '<span class="home-product-item__price-old">' + products[i].priceOld + '</span>',
            s += '<span class="home-product-item__price-current">' + products[i].priceCurrent + '</span>',
            s += '</div>',
            s += '<div class="home-product-item__favourite">',
            s += '<i class="fas fa-check"></i>',
            s += '<span>Yêu thích</span>',
            s += '</div>',
            s += '<div class="home-product-item__sale-off">',
            s += '<span class="home-product-item__sale-off-percent">10%</span>',
            s += '</br>'
        s += '<span class="home-product-item__sale-off-label">GIẢM</span>',
            s += '</div>'
        s += '</div>',
            s += '<div class="Click">',
            s += '<button class="addCart">Thêm vào giỏ hàng</button>',
            s += '<button class="addDetails js__show-details">Chi tiết sản phẩm</button>',
            s += '</div>',
            s += '</a>',
            s += '</div>';
        }
    };
    document.getElementById('DRM').innerHTML = s;
}
function showDRM() {
    s = '';
    for ( var i =0; i<products.length; i++){
        if (products[i].id <='1014'){
        s += '<div class="grid__column-2-4">',
            s += '<a class="home-product-item" >',
        s += '<div class="home-product-item__img">'
        s += '<img src=' + products[i].image + '>',
            s += '<h4 class="home-product-item__name">' + products[i].name,
            s += '</h4>',
            s += '<div class="home-product-item__price">',
            s += '<span class="home-product-item__price-old">' + products[i].priceOld + '</span>',
            s += '<span class="home-product-item__price-current">' + products[i].priceCurrent + '</span>',
            s += '</div>',
            s += '<div class="home-product-item__favourite">',
            s += '<i class="fas fa-check"></i>',
            s += '<span>Yêu thích</span>',
            s += '</div>',
            s += '<div class="home-product-item__sale-off">',
            s += '<span class="home-product-item__sale-off-percent">10%</span>',
            s += '</br>'
        s += '<span class="home-product-item__sale-off-label">GIẢM</span>',
            s += '</div>'
        s += '</div>',
            s += '<div class="Click">',
            s += '<button class="addCart">Thêm vào giỏ hàng</button>',
            s += '<button class="addDetails js__show-details">Chi tiết sản phẩm</button>',
            s += '</div>',
            s += '</a>',
            s += '</div>';
        }
    };
    document.getElementById('DRM').innerHTML = s;
}
function showCN() {
    s = '';
    for ( var i =0; i<products.length; i++){
        if (products[i].id <'1030' && products[i].id >='1015'){
        s += '<div class="grid__column-2-4">',
            s += '<a class="home-product-item" >',
        s += '<div class="home-product-item__img">'
        s += '<img src=' + products[i].image + '>',
            s += '<h4 class="home-product-item__name">' + products[i].name,
            s += '</h4>',
            s += '<div class="home-product-item__price">',
            s += '<span class="home-product-item__price-old">' + products[i].priceOld + '</span>',
            s += '<span class="home-product-item__price-current">' + products[i].priceCurrent + '</span>',
            s += '</div>',
            s += '<div class="home-product-item__favourite">',
            s += '<i class="fas fa-check"></i>',
            s += '<span>Yêu thích</span>',
            s += '</div>',
            s += '<div class="home-product-item__sale-off">',
            s += '<span class="home-product-item__sale-off-percent">10%</span>',
            s += '</br>'
        s += '<span class="home-product-item__sale-off-label">GIẢM</span>',
            s += '</div>'
        s += '</div>',
            s += '<div class="Click">',
            s += '<button class="addCart">Thêm vào giỏ hàng</button>',
            s += '<button class="addDetails js__show-details">Chi tiết sản phẩm</button>',
            s += '</div>',
            s += '</a>',
            s += '</div>';
        }
    };
    document.getElementById('DRM').innerHTML = s;
}
btnNext.addEventListener('click', () => {
    currentPage++;
    if (currentPage > totalPages) {
        currentPage = totalPages;
    }
    if (currentPage === totalPages) {
        $('.btn-next').addClass('btn-active');
    }
    $('.btn-prev').removeClass('btn-active');
    $('.number-page li').removeClass('active');
    $(`.number-page li:eq(${currentPage - 1})`).addClass('active');
    getCurrentPage(currentPage);
    renderProduct(productArr);
})
btnPrev.addEventListener('click', () => {
    currentPage--;
    if (currentPage <= 1) {
        currentPage = 1;
    }
    if (currentPage === 1) {
        $('.btn-prev').addClass('btn-active');
    }
    $('.btn-next').removeClass('btn-active');
    $('.number-page li').removeClass('active');
    $(`.number-page li:eq(${currentPage - 1})`).addClass('active');
    getCurrentPage(currentPage);
    renderProduct(productArr);
})

function renderListPage(totalPages) {
    let html = '';
    html += `<li class="current-page active"><a>${1}</a></li>`;
    for (let i = 2; i <= totalPages; i++) {
        html += `<li><a>${i}</a></li>`;
    }
    if (totalPages === 0) {
        html = ''
    }
    document.getElementById('number-page').innerHTML = html;
}
renderListPage(totalPages);

function changePage() {
    const currentPages = document.querySelectorAll('.number-page li');
    console.log(currentPage);
    for (let i = 0; i <= currentPages.length; i++) {
        currentPages[i].addEventListener('click', () => {
            const value = i + 1;
            currentPage = value;
            $('.number-page li').removeClass('active');
            currentPages[i].classList.add('active');
            if (currentPage > 1 && currentPage < totalPages) {
                $('.btn-prev').removeClass('btn-active');
                $('.btn-next').removeClass('btn-active');
            }
            if (currentPage === 1) {
                $('.btn-prev').addClass('btn-active');
            }
            if (currentPage === totalPages) {
                $('.btn-next').addClass('btn-active');
            }
            getCurrentPage(currentPage);
            renderProduct(productArr);
        })
    }
}
changePage();


