var convertTime = (time)=>{
    let cvt2S = (Date.now()/1000 - time/1000);
    let cvt2M = cvt2S / 60;
    let cvt2H = cvt2M / 60;
    let cvt2D = cvt2H / 24;
    let cvt2W = cvt2D / 7
    if (cvt2W >= 1) return `${Math.round(cvt2W)}w`
    else if (cvt2D >=1) return `${Math.round(cvt2D)}d`
    else if (cvt2H >=1) return `${Math.round(cvt2H)}h`
    else if (cvt2M >=1) return `${Math.round(cvt2M)}m`
    else return `${Math.round(cvt2S)}s`
}
var APIS = {
    history: {
      1: {
        isUser: false,
        href: "default",
        text_display: "Dmm quangg",
        redict: "#"
      },
      2: {
        isUser: true,
        href: "https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-meo-con-khung-long-500x500.jpg",
        text_display: "Minh Anh",
        redict: "#"
      },
      3: {
        isUser: false,
        href: "default",
        text_display: "dmm a hải lon",
        redict: "#"
      },
      4: {
        isUser: true,
        href: "https://1.bp.blogspot.com/-x_9zfdIlDYg/YGLZgYMNSwI/AAAAAAAArEg/X2ZNWEwAZ-Y8l3tVU3Bt00ekTpk8Ke1dwCNcBGAsYHQ/s0/dd6d73eeb3561aee7c50dedeab910b32.jpeg",
        text_display: "Quang đẹp trai",
        redict: "#"
      },
      5: {
        isUser: false,
        href: "default",
        text_display: "Game hay",
        redict: "#"
      },
      6: {
        isUser: false,
        href: "default",
        text_display: "Dmm quangg",
        redict: "#"
      },
      7: {
        isUser: true,
        href: "https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-meo-con-khung-long-500x500.jpg",
        text_display: "Minh Anh",
        redict: "#"
      },
      8: {
        isUser: false,
        href: "default",
        text_display: "dmm a hải lon",
        redict: "#"
      },
      9: {
        isUser: true,
        href: "https://1.bp.blogspot.com/-x_9zfdIlDYg/YGLZgYMNSwI/AAAAAAAArEg/X2ZNWEwAZ-Y8l3tVU3Bt00ekTpk8Ke1dwCNcBGAsYHQ/s0/dd6d73eeb3561aee7c50dedeab910b32.jpeg",
        text_display: "Quang đẹp trai",
        redict: "#"
      },
      10: {
        isUser: false,
        href: "default",
        text_display: "Game hay",
        redict: "#"
      }
    },
    notifications: {
      1: {
        info: {
          type: "comment",
          in_what: "post"
        },
        first_object: {
          isClient: false,
          avt_href: "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg",
          name_display: "Trần Phát"
        },
        second_object: {
          isClient: true,
          avt_href: "https://media.travelmag.vn/files/content/2021/07/02/tai-sao-nen-nuoi-meo6-14235392.jpg",
          name_display: "Minh Anh"
        },
        time_display: "1 minutes ago",
        redict: "#"
      },
      2: {
        info: {
          type: "comment",
          in_what: "post"
        },
        first_object: {
          isClient: false,
          avt_href: "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg",
          name_display: "Trần Phát"
        },
        second_object: {
          isClient: true,
          avt_href: "https://media.travelmag.vn/files/content/2021/07/02/tai-sao-nen-nuoi-meo6-14235392.jpg",
          name_display: "Minh Anh"
        },
        time_display: "1 minutes ago",
        redict: "#"
      },
      3: {
        info: {
          type: "comment",
          in_what: "post"
        },
        first_object: {
          isClient: false,
          avt_href: "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg",
          name_display: "Trần Phát"
        },
        second_object: {
          isClient: true,
          avt_href: "https://media.travelmag.vn/files/content/2021/07/02/tai-sao-nen-nuoi-meo6-14235392.jpg",
          name_display: "Minh Anh"
        },
        time_display: "1 minutes ago",
        redict: "#"
      },
      4: {
        info: {
          type: "comment",
          in_what: "post"
        },
        first_object: {
          isClient: false,
          avt_href: "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg",
          name_display: "Trần Phát"
        },
        second_object: {
          isClient: true,
          avt_href: "https://media.travelmag.vn/files/content/2021/07/02/tai-sao-nen-nuoi-meo6-14235392.jpg",
          name_display: "Minh Anh"
        },
        time_display: "1 minutes ago",
        redict: "#"
      },
      5: {
        info: {
          type: "comment",
          in_what: "post"
        },
        first_object: {
          isClient: false,
          avt_href: "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg",
          name_display: "Trần Phát"
        },
        second_object: {
          isClient: true,
          avt_href: "https://media.travelmag.vn/files/content/2021/07/02/tai-sao-nen-nuoi-meo6-14235392.jpg",
          name_display: "Minh Anh"
        },
        time_display: "1 minutes ago",
        redict: "#"
      },
      6: {
        info: {
          type: "comment",
          in_what: "post"
        },
        first_object: {
          isClient: false,
          avt_href: "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg",
          name_display: "Trần Phát"
        },
        second_object: {
          isClient: true,
          avt_href: "https://media.travelmag.vn/files/content/2021/07/02/tai-sao-nen-nuoi-meo6-14235392.jpg",
          name_display: "Minh Anh"
        },
        time_display: "1 minutes ago",
        redict: "#"
      },
      7: {
        info: {
          type: "comment",
          in_what: "post"
        },
        first_object: {
          isClient: false,
          avt_href: "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg",
          name_display: "Trần Phát"
        },
        second_object: {
          isClient: true,
          avt_href: "https://media.travelmag.vn/files/content/2021/07/02/tai-sao-nen-nuoi-meo6-14235392.jpg",
          name_display: "Minh Anh"
        },
        time_display: "1 minutes ago",
        redict: "#"
      },
      8: {
        info: {
          type: "comment",
          in_what: "post"
        },
        first_object: {
          isClient: false,
          avt_href: "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg",
          name_display: "Trần Phát"
        },
        second_object: {
          isClient: true,
          avt_href: "https://media.travelmag.vn/files/content/2021/07/02/tai-sao-nen-nuoi-meo6-14235392.jpg",
          name_display: "Minh Anh"
        },
        time_display: "1 minutes ago",
        redict: "#"
      },
      9: {
        info: {
          type: "comment",
          in_what: "post"
        },
        first_object: {
          isClient: false,
          avt_href: "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg",
          name_display: "Trần Phát"
        },
        second_object: {
          isClient: true,
          avt_href: "https://media.travelmag.vn/files/content/2021/07/02/tai-sao-nen-nuoi-meo6-14235392.jpg",
          name_display: "Minh Anh"
        },
        time_display: "1 minutes ago",
        redict: "#"
      },
      10: {
        info: {
          type: "comment",
          in_what: "post"
        },
        first_object: {
          isClient: false,
          avt_href: "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg",
          name_display: "Trần Phát"
        },
        second_object: {
          isClient: true,
          avt_href: "https://media.travelmag.vn/files/content/2021/07/02/tai-sao-nen-nuoi-meo6-14235392.jpg",
          name_display: "Minh Anh"
        },
        time_display: "1 minutes ago",
        redict: "#"
      },
      11: {
        info: {
          type: "comment",
          in_what: "post"
        },
        first_object: {
          isClient: false,
          avt_href: "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg",
          name_display: "Trần Phát"
        },
        second_object: {
          isClient: true,
          avt_href: "https://media.travelmag.vn/files/content/2021/07/02/tai-sao-nen-nuoi-meo6-14235392.jpg",
          name_display: "Minh Anh"
        },
        time_display: "1 minutes ago",
        redict: "#"
      },
      12: {
        info: {
          type: "comment",
          in_what: "post"
        },
        first_object: {
          isClient: false,
          avt_href: "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg",
          name_display: "Trần Phát"
        },
        second_object: {
          isClient: true,
          avt_href: "https://media.travelmag.vn/files/content/2021/07/02/tai-sao-nen-nuoi-meo6-14235392.jpg",
          name_display: "Minh Anh"
        },
        time_display: "1 minutes ago",
        redict: "#"
      },
      13: {
        info: {
          type: "comment",
          in_what: "post"
        },
        first_object: {
          isClient: false,
          avt_href: "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg",
          name_display: "Trần Phát"
        },
        second_object: {
          isClient: true,
          avt_href: "https://media.travelmag.vn/files/content/2021/07/02/tai-sao-nen-nuoi-meo6-14235392.jpg",
          name_display: "Minh Anh"
        },
        time_display: "1 minutes ago",
        redict: "#"
      }
    },
    get_list_messages: {
      1: {
        info: {
          user_name: "Minh Anh",
          user_id: "123456789",
          user_profile_href: "/profile/123456789",
          user_avatar_href: "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg",
          active_status: {
            status: true,
            last_active_time: "none"
          }
        },
        data: {
          time: "1659318874000",
          type: "text",
          last_message: "Hello ông!",
          status_message: "offline"
        }
      },
      2: {
        info: {
          user_name: "Minh Anh",
          user_id: "123456789",
          user_profile_href: "/profile/123456789",
          user_avatar_href: "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg",
          active_status: {
            status: true,
            last_active_time: "none"
          }
        },
        data: {
          time: "1659318874000",
          type: "text",
          last_message: "Hello ông!",
          status_message: "offline"
        }
      },
      3: {
        info: {
          user_name: "Minh Anh",
          user_id: "123456789",
          user_profile_href: "/profile/123456789",
          user_avatar_href: "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg",
          active_status: {
            status: true,
            last_active_time: "none"
          }
        },
        data: {
          time: "1659318874000",
          type: "text",
          last_message: "Hello ông!",
          status_message: "offline"
        }
      },
      4: {
        info: {
          user_name: "Minh Anh",
          user_id: "123456789",
          user_profile_href: "/profile/123456789",
          user_avatar_href: "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg",
          active_status: {
            status: true,
            last_active_time: "none"
          }
        },
        data: {
          time: "1659318874000",
          type: "text",
          last_message: "Hello ông!",
          status_message: "offline"
        }
      },
      5: {
        info: {
          user_name: "Minh Anh",
          user_id: "123456789",
          user_profile_href: "/profile/123456789",
          user_avatar_href: "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg",
          active_status: {
            status: true,
            last_active_time: "none"
          }
        },
        data: {
          time: "1659318874000",
          type: "text",
          last_message: "Hello ông!",
          status_message: "offline"
        }
      },
      6: {
        info: {
          user_name: "Minh Anh",
          user_id: "123456789",
          user_profile_href: "/profile/123456789",
          user_avatar_href: "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg",
          active_status: {
            status: true,
            last_active_time: "none"
          }
        },
        data: {
          time: "1659318874000",
          type: "text",
          last_message: "Hello ông!",
          status_message: "offline"
        }
      },
      7: {
        info: {
          user_name: "Minh Anh",
          user_id: "123456789",
          user_profile_href: "/profile/123456789",
          user_avatar_href: "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg",
          active_status: {
            status: true,
            last_active_time: "none"
          }
        },
        data: {
          time: "1659318874000",
          type: "text",
          last_message: "Hello ông!",
          status_message: "offline"
        }
      },
      8: {
        info: {
          user_name: "Minh Anh",
          user_id: "123456789",
          user_profile_href: "/profile/123456789",
          user_avatar_href: "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg",
          active_status: {
            status: true,
            last_active_time: "none"
          }
        },
        data: {
          time: "1659318874000",
          type: "text",
          last_message: "Hello ông!",
          status_message: "offline"
        }
      },
      9: {
        info: {
          user_name: "Minh Anh",
          user_id: "123456789",
          user_profile_href: "/profile/123456789",
          user_avatar_href: "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg",
          active_status: {
            status: true,
            last_active_time: "none"
          }
        },
        data: {
          time: "1659318874000",
          type: "text",
          last_message: "Hello ông!",
          status_message: "offline"
        }
      },
      10: {
        info: {
          user_name: "Minh Anh",
          user_id: "123456789",
          user_profile_href: "/profile/123456789",
          user_avatar_href: "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg",
          active_status: {
            status: true,
            last_active_time: "none"
          }
        },
        data: {
          time: "1659318874000",
          type: "text",
          last_message: "Hello ông!",
          status_message: "offline"
        }
      },
      11: {
        info: {
          user_name: "Minh Anh",
          user_id: "123456789",
          user_profile_href: "/profile/123456789",
          user_avatar_href: "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg",
          active_status: {
            status: true,
            last_active_time: "none"
          }
        },
        data: {
          time: "1659318874000",
          type: "text",
          last_message: "Hello ông!",
          status_message: "offline"
        }
      },
      12: {
        info: {
          user_name: "Minh Anh",
          user_id: "123456789",
          user_profile_href: "/profile/123456789",
          user_avatar_href: "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg",
          active_status: {
            status: true,
            last_active_time: "none"
          }
        },
        data: {
          time: "1659318874000",
          type: "text",
          last_message: "Hello ông!",
          status_message: "offline"
        }
      },
      13: {
        info: {
          user_name: "Minh Anh",
          user_id: "123456789",
          user_profile_href: "/profile/123456789",
          user_avatar_href: "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg",
          active_status: {
            status: true,
            last_active_time: "none"
          }
        },
        data: {
          time: "1659318874000",
          type: "text",
          last_message: "Hello ông!",
          status_message: "offline"
        }
      }
    }
}
export var fakeAPI = {
    get_history : ()=>{
        const result = APIS['history']
        document.querySelectorAll('.search-history').forEach(e => {
            e.remove()
        });
        const searchHistory = document.createElement('div')
        searchHistory.className = 'search-history'
        document.querySelector('.search-box .container-data').appendChild(searchHistory)
        for (const post in result) {
            let isUser = result[post].isUser ? `<span class="user-avatar avatar-history" style="background-image: url(${result[post].href});"></span>` : 
            `
            <div class="default-avatar avatar-history">
                <i class="fa-regular fa-clock-rotate-left"></i>
            </div>
            `;
            $('.search-box .search-history').append(`
                <div class="history-model">
                    <a href="#" class="container">
                        ${isUser}
                        <div class="history-content">
                            <span class="history-value">${result[post].text_display}</span>
                        </div>
                    </a>
                    <i class="fa-solid fa-xmark remove-tool-history" ></i>
                </div>
            `)
        }
    },
    /*  */
    get_notify : () =>{
        const result = APIS['notifications']

        document.querySelectorAll('.notify-list').forEach(e => {
            e.remove()
        });
        const notifyList = document.createElement('div')
        notifyList.className = 'notify-list'
        document.querySelector('.notify-box .container-data').appendChild(notifyList)
        for (const post in result) {
            let noti = result[post]
            let info = noti.info
            const in_what = info.in_what;
            let f_obj = noti.first_object 
            let s_obj = noti.second_object
            var vi_VN = {
                you : "bạn",
                comment_display : "đã bình luận",
                react_display : "đã thả cảm xúc",
                in_post : "bài viết",
                in_story : "story",
                on_mention : "đã gán",
                of : "của",
                in : "vào",

            }
            var language = vi_VN
            let text_display = () =>{
                if (info.type == "comment"){
                    return `<b>${f_obj.isClient ? language.you : f_obj.name_display}</b>
                        ${language.comment_display} ${language.in} ${in_what} ${language.of} <b>${s_obj.isClient ? language.you : s_obj.name_display}</b>`
                }else if (type.type == "react"){
                    const react = info.react;
                    console.log(react);
                    return `
                    <b>${f_obj.isClient ? language.you : f_obj.name_display}</b>
                        ${language.react_display} ${language.in} ${in_what} ${language.of} <b>${s_obj.isClient ? language.you : s_obj.name_display}</b>
                        `
                }
            }
            $('.notify-list').append(`
                <div class="notify-model">
                    <a href="#" class="container">
                        <span class="user-avatar avatar-notify" style="background-image: url(${s_obj.avt_href});"></span>
                        <div class="notify-content">
                            <span class="notify-value">${text_display()}</span>
                        </div>
                    </a>
                </div>
            `)
        }
    },
    get_list_message : ()=>{
        const result = APIS['get_list_messages']

        document.querySelectorAll('.message-list .message-model').forEach(e => {
            e.remove()
        });
        const notifyList = document.createElement('div')
        notifyList.className = 'message-list'
        document.querySelector('.message-box .container-data').appendChild(notifyList)
        for (let data in result) {
            data = result[data]
            const user_name = data.info.user_name;
            const user_ava_href = data.info.user_avatar_href;
            const user_id = data.info.user_id;
            const user_profile_href = data.info.user_profile_href;
            const last_active_time = data.info.active_status.status ? convertTime(data.info.active_status.last_active_time) : false;
            const active_status = data.info.active_status.status ? `<i class="fa-solid fa-circle online-status"></i>`
                    : `<span class="offline-status">${last_active_time}</span>`;
            const type_message = data.data.type;
            const message = data.data.last_message;
            const time_message = convertTime(data.data.time);
            const status_message  = data.data.status_message == "seen" ? `<span class="user-avatar" style="background-image : url(${user_ava_href});"></span>` 
                : (data.data.status_message == "offline" ? `<i class="fa-light fa-circle-check"></i>` : `<i class="fa-solid fa-circle-check"></i>`); 
                //unseen offline seen
            $('.message-list').append(`
            <div class="message-model">
                <a href="#" class="container">
                    <div class="first-container">
                        <span class="user-avatar avatar-message" style="background-image: url(${user_ava_href});"></span>
                        ${active_status}
                        <div class="message-content">
                            <span class="message-username">${user_name}</span>
                            <span class="message-value">${message+"."+" "}
                                <span class="time-last-mess">${time_message}</span>
                            </span>
                        </div>
                    </div>
                    <div class="status-message">
                        ${status_message}
                    </div>
                </a>
            </div>`)
        }
    }
}