const select = document.querySelector(".amount-person");
const options = document.querySelectorAll(".amount-person option");
const priceText = document.querySelector(".price-for-people > span");
const supText = document.querySelector(".price-for-people > sup");
const addToCartBtn = document.querySelector(".price-for-people > p");
const skuAmount = document.querySelector(".description-detail > span");
const clearBtn = document.querySelector(".amount-person-select > span");

const descriptionTab = document.querySelector(".description_tab");
const additionalInfoTab = document.querySelector(".additional-information_tab");
const reviewTab = document.querySelector(".reviews_tab");
const descriptionTitle = document.querySelector(".description-title");
const additionalInfoTitle = document.querySelector(".additional-information-title");
const reviewTitle = document.querySelector(".reviews-title");
const titleSpans = document.querySelectorAll(".product-bottom-title-wrap > ul > li span");

const bigLeftImg = document.querySelector(".product-left-big-img img");
const smallLeftImgs = document.querySelectorAll(".product-left-small-img img");

// Xử lý khi click ảnh bé ra ảnh to
smallLeftImgs.forEach((img,index) => {
    img.onclick = () =>{
        console.log(index);
        bigLeftImg.src = img.src;
        bigLeftImg.style.height = "430px";
    }
})

// Xử lý khi chọn thẻ option thay đổi text bên trong của element khác
// Chú ý dùng sự kiện change thay vì dùng click.

select.addEventListener("change", function(e) {
    const optionSelectIndex = e.target.value;
    if(optionSelectIndex == 0){
        supText.innerText = "";
        priceText.innerText = "";
        addToCartBtn.style.opacity = '0.6';
        addToCartBtn.style.cursor = "no-drop";
        skuAmount.innerText = optionSelectIndex;
    }
    else if(optionSelectIndex == 1){
        supText.innerText = "$";
        priceText.innerText = "1,000.00";
        addToCartBtn.style.opacity = '1';
        addToCartBtn.style.cursor = "pointer";
        skuAmount.innerText = optionSelectIndex;

    }
    else if(optionSelectIndex == 2){
        supText.innerText = "$";
        priceText.innerText = "1,500.00";
        addToCartBtn.style.opacity = '1';
        addToCartBtn.style.cursor = "pointer";
        skuAmount.innerText = optionSelectIndex;

    }
    else if(optionSelectIndex == 3){
        supText.innerText = "$";
        priceText.innerText = "1,700.00";
        addToCartBtn.style.opacity = '1';
        addToCartBtn.style.cursor = "pointer";
        skuAmount.innerText = optionSelectIndex;

    }
    else if(optionSelectIndex == 4){
        supText.innerText = "$";
        priceText.innerText = "1,800.00";
        addToCartBtn.style.opacity = '1';
        addToCartBtn.style.cursor = "pointer";
        skuAmount.innerText = optionSelectIndex;

    }
    else if(optionSelectIndex == 5){
        supText.innerText = "$";
        priceText.innerText = "2,000.00";
        addToCartBtn.style.opacity = '1';
        addToCartBtn.style.cursor = "pointer";
        skuAmount.innerText = optionSelectIndex;

    }
})

// console.log(options)

clearBtn.onclick = function(){
    options[0].selected = true;
    options[1].selected = false;
    supText.innerText = "";
    priceText.innerText = "";
    addToCartBtn.style.opacity = '0.6';
    addToCartBtn.style.cursor = "no-drop";
    skuAmount.innerText = '0';
}

// Xử lý thay đổi khi click vào description,additional-information, reviews tab;

for(let i = 0; i < titleSpans.length; i++) {
    titleSpans[0].onclick = () => {
        descriptionTab.style.display = 'block';
        additionalInfoTab.style.display = 'none';
        reviewTab.style.display = 'none';
        descriptionTitle.style.borderBottom = '1px solid var(--primary-color)';
        additionalInfoTitle.style.borderBottom = 'none';
        reviewTitle.style.borderBottom = 'none';
    }
       
    titleSpans[1].onclick = () => {
        descriptionTab.style.display = 'none'  ;
        additionalInfoTab.style.display = 'block' ;
        reviewTab.style.display = 'none';

        descriptionTitle.style.borderBottom = 'none';
        additionalInfoTitle.style.borderBottom = '1px solid var(--primary-color)';
        reviewTitle.style.borderBottom = 'none';

    }
        
    titleSpans[2].onclick = () => {
        descriptionTab.style.display = 'none';
        additionalInfoTab.style.display = 'none';
        reviewTab.style.display = 'block';
        descriptionTitle.style.borderBottom = 'none';
        additionalInfoTitle.style.borderBottom = 'none';
        reviewTitle.style.borderBottom = '1px solid var(--primary-color)';

    }
}


    

