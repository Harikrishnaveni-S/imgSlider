const container = document.querySelector('.container')
const btns = document.querySelectorAll('.btn')
const imgList = ["bg1", "bg2", "bg3"]

let index = 0

btns.forEach((btn) => {

    btn.addEventListener('click', () => {
        if (btn.classList.contains('btn-left')) {
            index--;
            if (index < 0) {
                index = imgList.length - 1
            }
            console.log(`media/${imgList[index]}.jpg`)
            container.style.background = `url("media/${imgList[index]}.jpg") center/cover fixed no-repeat`
        }
        else {
            index++;
            if (index === imgList.length) {
                index = 0
            }
            console.log(`media/${imgList[index]}.jpg`)

            container.style.background = `url("media/${imgList[index]}.jpg") center/cover fixed no-repeat`
        }
    })
})

