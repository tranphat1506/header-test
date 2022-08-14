const doc = document.querySelector.bind(document);
const docs = document.querySelectorAll.bind(document)
import { Logger } from "../Common/debugLogger.js";
import { Services } from "../Common/navServices.js";
Logger.info('onload large device js file');
export const main = {
    SearchNav : (e) => {
        e.preventDefault()
        doc(".search-box").style.display = "flex"
        doc('.sub-nav').style.justifyContent = 'flex-start'
        setTimeout(()=>{
            doc(".search-box").setAttribute('id',"search-input-open")
            doc(".sub-nav").style.visibility = 'visible ';
            doc('body').style.overflow = 'hidden'
        }, 100)
        //ajax_func.get_history()
        document.querySelector(".search-box .back-icon").addEventListener('click',(e)=>{
            e.preventDefault();
            setTimeout(()=>{
                doc(".search-box").style = ""
                doc(".sub-nav").style = "";
            }, 100)
            doc(".search-box").removeAttribute('id')
            doc('body').style = ""
        })
    },
    NotifyNav : (e)=>{
        e.preventDefault()
        doc(".notify-box").style.display = "flex"
        doc('.sub-nav').style.justifyContent = 'flex-end'
        setTimeout(()=>{
            doc(".notify-box").setAttribute('id',"search-input-open")
            doc(".sub-nav").style.visibility = 'visible ';
            doc('body').style.overflow = 'hidden'
        }, 100)
        
        //ajax_func.get_notify()
        document.querySelector(".notify-box .back-icon").addEventListener('click',(e)=>{
            e.preventDefault();
            setTimeout(()=>{
                doc(".notify-box").style = ""
                doc(".sub-nav").style = "";

            }, 100)
            doc(".notify-box").removeAttribute('id')
            doc('body').style = ""
        })
    },
    MessageNav : (e)=>{
        e.preventDefault()
        doc(".message-box").style.display = "flex"
        doc('.sub-nav').style.justifyContent = 'flex-end'
        setTimeout(()=>{
            doc(".message-box").setAttribute('id',"search-input-open")
            doc(".sub-nav").style.visibility = 'visible ';
            doc('body').style.overflow = 'hidden'
        }, 100)
        //ajax_func.get_list_message()
        document.querySelector(".message-box .back-icon").addEventListener('click',(e)=>{
            e.preventDefault();
            setTimeout(()=>{
                doc(".message-box").style = ""
                doc(".sub-nav").style = "";
            }, 100)
            doc(".message-box").removeAttribute('id')
            doc('body').style = ""

        })
    },
    ChatBox : (e)=>{
        e.preventDefault()
        doc('')
    }
    ,
    ChatMenu : (e)=>{
        e.preventDefault()
        let NavIsOpen = document.querySelector(".chat-box .header-menu .phone").style.display == "inline-flex"
        if (!NavIsOpen) {
            doc('.chat-box .header-menu').style.height = "17.2em"
            return document.querySelectorAll('.chat-box .header-menu i').forEach((e)=>{
            if (!e.className.includes("menu-down")) return e.style.display = "inline-flex"
        })}
        doc('.chat-box .header-menu').style.height = "4.3em"
        document.querySelectorAll('.chat-box .header-menu i').forEach((e)=>{
            if (!e.className.includes("menu-down")) return e.style.display = "none"
        })
    }
}

export const largeDevice = () => {
    const clickElement = {
        topNav : document.querySelector('.top-nav .first-app'),
        endNav : document.querySelector('.end-nav .last-app'),
        searchNav : document.querySelector(".search"),
        notifyNav : document.querySelector(".notifications"),
        messageNav : document.querySelector(".message"),
        chatMenu : document.querySelector(".chat-header .menu-down")
    }
    clickElement.searchNav.addEventListener("click", main.SearchNav)
    clickElement.notifyNav.addEventListener("click", main.NotifyNav)
    clickElement.messageNav.addEventListener("click", main.MessageNav)
    clickElement.chatMenu.addEventListener("click", main.ChatMenu)
}
