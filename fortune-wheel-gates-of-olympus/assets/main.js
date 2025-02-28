document.addEventListener("DOMContentLoaded", function () {
    window.onload = function () {
        setTimeout(() => {
            document.querySelector('.splashscreen-background').classList.add('hide');
        }, 1);

        setTimeout(() => {
            document.querySelector('.splashscreen-background').style.display = "none";
        }, 500);
    }
});




let spinNumber = 0;
let spinning = false;
document.querySelector('.wheel-button').onclick = function () {

    if (spinning)
        return;


    const wheelList = document.querySelector('.wheel__list');
    spinNumber++;
    if (spinNumber == 1) {
        spinning = true;
        console.log("spin number one");
        wheelList.classList.add('wheel__list_animation_type_first-rotation');
        wheelList.classList.add('wheel__list_first-bonus');
        document.querySelector('.counter-of-spin__text_lg').innerHTML = '1 TRY'

        setTimeout(() => {
            spinning = false;
            wheelList.classList.replace('wheel__list_animation_type_first-default-rotation', 'wheel__list_animation_type_second-default-rotation')
            wheelList.classList.remove('wheel__list_animation_type_first-rotation');

            document.querySelector('.registration-crutch').insertAdjacentHTML('afterend',
                `<div data-v-ab9da32d="" class="bonus">
          <div data-v-ab9da32d="" class="bonus__wrap">
            <div data-v-ab9da32d="" class="bonus__string"><span data-v-ab9da32d="" class="bonus__sumbol">+</span><span
                data-v-ab9da32d="" class="bonus__amount">500</span><span data-v-ab9da32d=""
                class="bonus__sumbol">%</span></div><span data-v-ab9da32d="" class="bonus__dep">TO YOUR DEPOSIT</span>
          </div>
        </div>`);
        }, 4000);
    }

    if (spinNumber == 2) {
        console.log("spin number two");

        wheelList.classList.remove('wheel__list_first-bonus');
        wheelList.classList.add('wheel__list_animation_type_second-rotation');
        wheelList.classList.add('wheel__list_second-bonus');
        document.querySelector('.counter-of-spin__text_lg').innerHTML = '0 TRIES'

        setTimeout(() => {

            wheelList.classList.replace('wheel__list_animation_type_second-default-rotation', 'wheel__list_last_position')
            wheelList.classList.remove('wheel__list_animation_type_second-rotation');

            document.querySelector('.registration-crutch').insertAdjacentHTML('afterend',
                `<div data-v-dac265dc="" class="bonus__second">
          <div data-v-dac265dc="" class="bonus__second-wrap"><span data-v-dac265dc=""
              class="bonus__second-amount">70</span><span data-v-dac265dc="" class="bonus__second-fs">FS</span></div>
        </div>`);
        }, 4000);

        setTimeout(() => {
            document.querySelector('.modal').style.display = "block";
        }, 7000)
    }
};
