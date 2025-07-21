/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 153:
/*!*******************************************!*\
  !*** ./asset/scss/menu_notification.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./asset/js/menu_notification.js ***!
  \***************************************/
__webpack_require__(/*! ../scss/menu_notification.scss */ 153);

(function () {

    const HTMLHelper    = PRHelper.getHTML(),
          TypeHelper    = PRHelper.getType(),
          HookHelper    = PRHelper.getHook(),
          SettingHelper = PRHelper.getSetting(),
          RequestHelper = PRHelper.getRequest();

    const lastIDsOnLoad = {
        all: 0,
        important: 0
    };

    function fetchNewNotifications() {

        const onSuccess = (data, type) => {

            const listElement = HTMLHelper.getElement(`#pr-notification-tab-content-${type} > .pr-notification-list`);

            if (!TypeHelper.isEmpty(data.count)) {
                const countElement = HTMLHelper.getElement(`#pr-notification-tab-${type} .pr-count`)
                HTMLHelper.setText(countElement, data.count);
            }

            if (type === 'all') {

                const menuItem = HTMLHelper.getElement('.pr-notification-system-menu');

                if (!TypeHelper.isEmpty(data.unread)) {
                    const unreadElement = HTMLHelper.getElement('.ab-label', menuItem);
                    if (!HTMLHelper.isElement(unreadElement)) {
                        HTMLHelper.append(
                            `<span class="ab-label">${data.unread}</span>`,
                            HTMLHelper.getElement('.ab-item', menuItem)
                        );
                    } else {
                        HTMLHelper.setText(unreadElement, data.unread);
                    }
                }

                const bellIcon = HTMLHelper.getElement('.ab-icon', menuItem);

                HTMLHelper.addClass(bellIcon, 'bell-shake');
                setTimeout(() => {
                    HTMLHelper.removeClass(bellIcon, 'bell-shake');
                }, 1000);
            }

            TypeHelper.each(data.list, (html, id, loop) => {
                HTMLHelper.prepend(html, listElement);
                if (loop.last) {
                    lastIDsOnLoad[type] = id;
                }
            });
        };

        const onError = (error) => {
            console.warn(error);
        };

        const action = SettingHelper.getOption('ajax.get_notifications');

        RequestHelper.ajax(action)
                     .addNonce()
                     .onSuccess((response) => onSuccess(response, 'all'))
                     .onError(onError)
                     .send({
                         last_id: lastIDsOnLoad.all,
                         important: 0
                     });

        RequestHelper.ajax(action)
                     .addNonce()
                     .onSuccess((response) => onSuccess(response, 'important'))
                     .onError(onError)
                     .send({
                         last_id: lastIDsOnLoad.important,
                         important: 1
                     });
    }

    HookHelper.on('load', () => {

        TypeHelper.each(lastIDsOnLoad, (id, tab) => {
            const firstChild = HTMLHelper.getElement(`#pr-notification-tab-content-${tab} .pr-notification-item:first-child`);
            if (HTMLHelper.isElement(firstChild)) {
                lastIDsOnLoad[tab] = HTMLHelper.getData(firstChild, 'id');
            }
        })

        HookHelper.on('click', (event, element) => {

            HTMLHelper.setElementActivity(element, false, false);
            RequestHelper.ajax(SettingHelper.getOption('ajax.mark_all_as_read'))
                         .addNonce()
                         .onSuccess((response) => {
                             PRBackendHelper.getHTML().toast({
                                 text: response,
                             });
                             HTMLHelper.addClass('.pr-notification-item', 'read');
                             HTMLHelper.getElement('.pr-notification-system-menu .ab-label').remove();
                         })
                         .onError((error) => {
                             PRBackendHelper.getHTML().toast({
                                 text: error,
                                 type: 'warning'
                             })
                             HTMLHelper.setElementActivity(element, true, false);
                         })
                         .send();

        }, '.pr-notification-action.pr-read-all')

        // setInterval(fetchNewNotifications, 30000);
    });

})();

})();

/******/ })()
;