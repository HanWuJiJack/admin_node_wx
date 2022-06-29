import stroage from '@/utils/stroage';

export default {
    beforeMount(el, binding) {
        // console.log(666)
        const btnList = stroage.getItem('btnList')
        if (!btnList.includes(binding.value)) {
            // 解决进入页面按钮会闪一下再消失问题
            el.style.display = 'none'
            setTimeout(function () {
                el.parentNode.removeChild(el)
            }, 0)
        }
    }
}