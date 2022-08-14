const doc = document.querySelector.bind(document);
const docs = document.querySelectorAll.bind(document)
const developMode = true;

import { reset, resize, resetWhenResize } from './components/Header/Common/resetHTML.js'
import { smallDevice } from './components/Header/Main/main_smallDevice.js'
import { normalDevice } from './components/Header/Main/main_normalDevice.js'
import { largeDevice } from './components/Header/Main/main_largeDevice.js'
import { Services } from "./components/Header/Common/navServices.js";
import { ajaxFunc } from './components/Header/Ajax/ajaxServices.js';
import { fakeAPI } from './components/Header/FakeAPI/getAPI.js';


const app = () => {
    let clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    if (developMode){
        fakeAPI.get_history()
        fakeAPI.get_list_message()
        fakeAPI.get_notify()
    }else{
        ajaxFunc.get_history()
        ajaxFunc.get_list_message()
        ajaxFunc.get_notify()
    }
    
    Services.resizeFullScreenNav(clientWidth)
    if (clientWidth <= 340){    
        smallDevice()
    }else if (clientWidth > 340 && clientWidth <= 700){

        normalDevice()
    }else{
        largeDevice()
    }
}
app() // start

doc('html').addEventListener("click", function(event) {
    let $t = $(event.target)
    let $linkList = $('.link-list')
    if($t == $linkList || $linkList.has($t).length){
        // nothing to do
    } else{
        reset()
    }
})
window.addEventListener("resize", function(event) {
    let clientWidth = document.querySelector("#header").clientWidth
    resetWhenResize()
    if (clientWidth > 700){
        this.setTimeout(()=>{
            resize(2)
            largeDevice()
        }, 500)
    }
    else if ( clientWidth > 340 && clientWidth <= 700) {
        this.setTimeout(()=>{
            resize(1) // remove all event listen in small device
            Services.resizeFullScreenNav()

            normalDevice()
        }, 500)
    }else{
        this.setTimeout(()=>{
            Services.resizeFullScreenNav()
            smallDevice()
        }, 500)

    }
})