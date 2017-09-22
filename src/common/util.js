/* eslint-disable */
// import $ from 'jquery'
// import MessageBox from '../components/MessageBox';
//
// var Util = {};
// (function (util) {
//
//   var ua = window && window.navigator && window.navigator.userAgent.toLowerCase();
//   var inWeChat = ua && ua.indexOf('micromessenger') > 0;
//   var inFireFox = ua && ua.indexOf('firefox') > 0;
//   var inIOS = ua && /(iphone|ipad|ipod|ios)/i.test(ua);
//
//   var toastForwardWithHistory = function(forwardURL, backURL, resultMsg) {
//     if(inIOS && !!window.sessionStorage) {
//       window.sessionStorage.setItem(CONFIG("system") +"-common-backURL", backURL);
//       showToastForward(resultMsg, forwardURL, true);
//     } else {
//       showToastForward(resultMsg, forwardURL);
//     }
//   };
//
//   var forwardWithHistory = function(forwardURL, backURL) {
//     if(inIOS && !!window.sessionStorage) {
//       window.sessionStorage.setItem(CONFIG("system") +"-common-backURL", backURL);
//       window.location.replace(forwardURL);
//     } else {
//       window.location = forwardURL;
//     }
//   };
//
//   var setHistory = function () {
//     if (inIOS && !!window.sessionStorage && !!window.sessionStorage.getItem("mobile-common-backURL")) {
//       var backURL = window.sessionStorage.getItem("mobile-common-backURL");
//       window.sessionStorage.removeItem("mobile-common-backURL");
//       window.onpopstate = function () {
//         window.location = backURL;
//       };
//
//       var state = {title: "backURL", url: backURL}
//       window.history.pushState(state, "title", "");
//     }
//   };
//
//   var clearPopForward = function(forwardURL) {
//     if (inIOS && !!window.sessionStorage) {
//       window.onpopstate = function () {
//       };
//     }
//     window.location = forwardURL;
//   };
//
//   var clearPopAction = function(functionName) {
//     if (inIOS && !!window.sessionStorage) {
//       window.onpopstate = function () {
//       };
//     }
//     if(typeof functionName == 'function') {
//       functionName()
//     }
//   };
//
//   var downloadApp = function () {
//     if (inWeChat) {
//       window.open('http://a.app.qq.com/o/simple.jsp?pkgname=com.evergrande.eif.android.hengjiaosuo', '_blank');
//     } else {
//       if (inIOS) {
//         window.open('https://itunes.apple.com/cn/app/heng-da-jin-fu/id1081299726?mt=8', '_blank');
//       } else {
//         window.open('http://download.hdfax.com/hdfax.apk', '_blank');
//       }
//     }
//   };
//
//   //提取cookie中的值
//   var getCookie = function (name) {
//     var cookieStr = document.cookie;
//     if (cookieStr.length > 0) {
//       var cookieArr = cookieStr.split("; "); //将cookie信息转换成数组
//       for (var i = 0; i < cookieArr.length; i++) {
//         var cookieVal = cookieArr[i].split("="); //将每一组cookie(cookie名和值)也转换成数组
//         if (cookieVal[0] == name) {
//           if (!!cookieVal[1]) {
//             return cookieVal[1].replace(/"/g, ""); //返回需要提取的cookie值
//           } else {
//             return "";
//           }
//         }
//       }
//     }
//   };
//
//   var setCookie = function(name, value, days) {
//     var newCookieStr;
//     if (!!days) {
//       var exp = new Date();
//       exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
//
//       newCookieStr = name + "=" + escape(value) + "; path=/; domain=.hdfax.com; expires=" + exp.toUTCString();
//     } else {
//
//       newCookieStr = name + "=" + escape(value) + "; path=/; domain=.hdfax.com";
//     }
//
//     document.cookie = newCookieStr;
//   };
//
//   var mobileWebsiteURL = function () {
//     return  window.location.origin + "/";
//   }
//
//   var showHeader = function () {
//     var inHDApp = (ua.indexOf('hengdajinfu') != -1);
//     var from = getCookie("from");
//     if (!from) {
//       from = localStorage.getItem("from");
//       if (!from) {
//         from = "";
//       }
//     }
//
//     var headerTag = document.getElementsByTagName('header');
//     if (headerTag != null && headerTag != undefined && headerTag.length > 0) {
//       if (inWeChat || inHDApp || from == "htmimi") {
//         headerTag[0].style.display = "none";
//       } else {
//         headerTag[0].style.display = "block";
//       }
//       //为了解决页面嵌套一个蒙层的情况
//       if(headerTag.length > 1) {
//         if (inWeChat || inHDApp || from == "htmimi") {
//           headerTag[1].style.display = "none";
//         } else {
//           headerTag[1].style.display = "block";
//         }
//       }
//     }
//   }
//
//   var showToastAction = function (content, action) {
//     if (content != null && content != "") {
//       $("#toastContent").html(content);
//       $("#toast").fadeIn(100);
//       setTimeout(function () {
//         $("#toast").fadeOut(100);
//         action();
//       }, 2000);
//     } else {
//       action();
//     }
//   };
//
//   var showToastForward = function (content, returnURL, replace) {
//     if (content != null && content != "") {
//       $("#toastContent").html(content);
//       $("#toast").fadeIn(100);
//       setTimeout(function () {
//         $("#toast").fadeOut(100);
//         if (!!returnURL) {
//           if(!!replace) {
//             window.location.replace(returnURL);
//           } else {
//             window.location = returnURL;
//           }
//         }
//       }, 2000);
//     }
//   };
//
//   var showToastBack = function (content) {
//     if (content != null && content != "") {
//       $("#toastContent").html(content);
//       $("#toast").fadeIn(100);
//       setTimeout(function () {
//         $("#toast").fadeOut(100);
//         window.history.go(-1);
//       }, 3000);
//     }
//   };
//
//   var showToast = function (content) {
//     if (content != null && content != "") {
//       $("#toastContent").html(content);
//       $("#toast").fadeIn(100);
//       setTimeout(function () {
//         $("#toast").fadeOut(100);
//       }, 1500);
//     }
//   };
//
//   var hideToast = function () {
//     $("#toast").fadeOut(100);
//   };
//
//    /*
//    var showLoadingToast = function () {
//    $("#loadingToast").fadeIn(100);
//    setTimeout(function () {
//    $("#loadingToast").fadeOut(100);
//    }, 9000);
//    };
//
//    var hideLoadingToast = function () {
//    $("#loadingToast").fadeOut(100);
//    };
//    */
//
//   /** 只有一个确定按钮的Dialog **/
//   var showDialog1 = function (content, locationURL) {
//     if (content != null && content != "") {
//       //这是为了解决jquery validator自身存在的缺陷。
//       //这个插件在showErrors函数中，即使没有错误信息，也会打出一段空的标签。
//       if ($(content).html() != "" && $(content).html() != undefined) {
//         $("#dialog1Content").html($(content).html());
//       } else if ($(content).html() == undefined) {
//         $("#dialog1Content").html(content);
//       } else {
//         return;
//       }
//     } else {
//       $("#dialog1Content").html("哎呀，后台调用出错了");
//     }
//     $("#dialog1").fadeIn(200).on("click", ".weui-dialog__btn", function () {
//       $("#dialog1").off("click").fadeOut(200);
//       if (!!locationURL) {
//         window.location = locationURL;
//       }
//     });
//   };
//
//   /** 有确定和取消  两个按钮的Dialog **/
//   var showDialog2 = function (content, locationURL) {
//     if (!!content) {
//       $("#dialog2Content").html(content);
//     } else {
//       $("#dialog2Content").html("哎呀，后台调用出错了");
//     }
//     $("#dialog2").fadeIn(200).on("click", ".weui-dialog__btn", function () {
//       $("#dialog2").off("click").fadeOut(200);
//       if (!!locationURL) {
//         window.location = locationURL;
//       }
//     });
//   };
//
//   /** 只有一个按钮全定制Dialog11 **/
//   var showDialog1Cust = function (content, btn1Content, function1Name) {
//     if (!!content) {
//       $("#dialog11Content").html(content);
//     } else {
//       $("#dialog11Content").html("出错啦");
//     }
//
//     if (!!btn1Content) {
//       $("#dialog11Btn1").html(btn1Content);
//     } else {
//       $("#dialog11Btn1").html("知道了");
//     }
//
//     $("#dialog11").fadeIn(200);
//
//     $("#dialog11").off("click", "#dialog11Btn1");
//     $("#dialog11").on("click", "#dialog11Btn1", function () {
//       $("#dialog11").off("click").fadeOut(200);
//     });
//     if (function1Name == null || function1Name == undefined) {
//       $("#dialog11").on("click", "#dialog11Btn1", function () {
//         $("#dialog11").off("click").fadeOut(200);
//       });
//
//     } else {
//       $("#dialog11").on("click", "#dialog11Btn1", function () {
//         $("#dialog11").off("click").fadeOut(200);
//         function1Name();
//       });
//
//     }
//   };
//
//   /** 有两个按钮全定制Dialog21 **/
//   var showDialog2Cust = function (content, btn1Content, btn2Content, function1Name, function2Name) {
//     if (!!content) {
//       $("#dialog21Content").html(content);
//     } else {
//       $("#dialog21Content").html("出错啦");
//     }
//
//     if (!!btn1Content) {
//       $("#dialog21Btn1").html(btn1Content);
//     } else {
//       $("#dialog21Btn1").html("取消");
//     }
//
//     if (!!btn2Content) {
//       $("#dialog21Btn2").html(btn2Content);
//     } else {
//       $("#dialog21Btn2").html("确认");
//     }
//
//     $("#dialog21").fadeIn(200);
//
//     $("#dialog21").off("click", "#dialog21Btn1");
//     if (function1Name == null || function1Name == undefined) {
//       $("#dialog21").on("click", "#dialog21Btn1", function () {
//         $("#dialog21").off("click").fadeOut(200);
//       });
//     } else {
//       $("#dialog21").on("click", "#dialog21Btn1", function () {
//         $("#dialog21").off("click").fadeOut(200);
//         function1Name();
//       });
//     }
//
//     $("#dialog21").off("click", "#dialog21Btn2");
//     if (function2Name == null || function2Name == undefined) {
//       $("#dialog21").on("click", "#dialog21Btn2", function () {
//         $("#dialog21").off("click").fadeOut(200);
//       });
//     } else {
//       $("#dialog21").on("click", "#dialog21Btn2", function () {
//         $("#dialog21").off("click").fadeOut(200);
//         function2Name();
//       });
//     }
//   };
//
//   var hideDialog2Cust = function () {
//     $("#dialog21Btn1").unbind();
//     $("#dialog21Btn2").unbind();
//     $("#dialog21").fadeOut(200);
//   };
//
//   var showProtocolPopup = function (protocolURL, content) {
//     if (!!protocolURL) {
//       var iframe = $("<iframe></iframe>").attr("style", "border:none;height:100%;width:100%").attr("src", protocolURL);
//       $("#protocolPopupContent").html(iframe);
//     } else if (!!content) {
//       $("#protocolPopupContent").html(content);
//     } else {
//       $("#protocolPopupContent").html("哎呀，没有查询到协议内容");
//     }
//     $("#protocolPopup").fadeIn(200).on("click", ".weui-dialog__btn", function () {
//       $("#protocolPopup").off("click").fadeOut(200);
//     });
//   };
//
//   var encode = function (value) {
//     var finalValue = null;
//     if (!!value) {
//       try {
//         finalValue = encodeURIComponent(encodeURIComponent(value));
//       } catch (e) {
//         try {
//           finalValue = encodeURIComponent(value);
//         } catch (e) {
//           finalValue = value;
//         }
//       }
//     } else {
//       finalValue = value;
//     }
//     return finalValue;
//   };
//
//   var decode = function (value) {
//     var finalValue = null;
//     if(!!value) {
//       try {
//         finalValue = decodeURIComponent(decodeURIComponent(value));
//       } catch (e) {
//         try {
//           finalValue = decodeURIComponent(value);
//         } catch (e) {
//           finalValue = value;
//         }
//       }
//     } else {
//       finalValue = value;
//     }
//
//     return finalValue;
//   };
//
//   var getURLParam = function (name) {
//     var search = window.document.location.search;
//     var pattern = new RegExp("[?&]" + name + "\=([^&]+)", "g");
//     var matcher = pattern.exec(search);
//     var items = null;
//     if (null != matcher) {
//       try {
//         items = decodeURIComponent(decodeURIComponent(matcher[1]));
//       } catch (e) {
//         try {
//           items = decodeURIComponent(matcher[1]);
//         } catch (e) {
//           items = matcher[1];
//         }
//       }
//     }
//     return items;
//   };
//
//
//   //1 从URL中搜索对应变量名的值，找到了以后存到localStorage，
//   //2 如果没找到，sessionStorage""
//   var getParamSaveSessionStorage = function (name, storageName) {
//     var value = getURLParam(name);
//     if(!storageName) {
//       storageName = name;
//     }
//     if (!!value) {
//       sessionStorage.setItem(storageName, value);
//     } else {
//       sessionStorage.removeItem(storageName);
//     }
//   };
//
//   var getParamOnlySaveSessionStorage = function (name, storageName) {
//     var value = getURLParam(name);
//     if(!storageName) {
//       storageName = name;
//     }
//     if (!!value) {
//       sessionStorage.setItem(storageName, value);
//     }
//   };
//
//   var getSessionStorage = function (name) {
//     var value = sessionStorage.getItem(name);
//     if (!value) {
//       value = "";
//     }
//     return value;
//   };
//
//   //remove items from Session Storage.
//   var removeItemsFromSS = function (keyPrefix) {
//     var storage = window.sessionStorage;
//     if (!!storage && storage.length > 0) {
//       var length = storage.length;
//       for (var i = length - 1; i >= 0; i--) {
//         var key = storage.key(i);
//         if (!!key && key.indexOf(keyPrefix) == 0) {
//           storage.removeItem(key);
//         }
//       }
//     }
//   }
//
//   //liaowenyue:对比java层类似这个代码有缺陷，因为：可能url的参数中包含了可允许的url地址。
//   // 不过暂时先这么做，后期慢慢把需要验证的跳转从js层移走。
//   var validateURL = function(url) {
//     var allowedURLArray = ["hdfax.com", "hengjs.com"];
//     var defaultURL = window.location.origin + "/assets/html/msg/invalidDirect.html";
//
//     if(!url) {
//       return defaultURL;
//     }
//
//     for(var index in allowedURLArray) {
//       if(url.indexOf(allowedURLArray[0]) != -1) {
//         return url;
//       }
//     }
//     return defaultURL;
//   }
//
//   //liaowenyue:先判断参数是否含有#!，如果有，先把#!前面的提出来，单独处理。如果没有就直接进入下面三种流程
//   //如果URL中带？，同时有一个参数名字和要加的参数名一样，则用新加的值覆盖原来的
//   //如果URL中带？，不含有新加参数同名字的参数，就直接加上去，并用&分开
//   //如果URL不带？，直接加？和对应参数和值
//   var addParamToURL = function (currentURL, name, value) {
//     var currentURLArray = currentURL.split("#!");
//
//     if (currentURLArray.length == 2) {
//       currentURL = currentURLArray[0];
//     }
//
//     if (/\?/g.test(currentURL)) {
//       var express = new RegExp("(^|)" + name + "=([^&]*)(|$)");
//       if (express.test(currentURL)) {
//         currentURL = currentURL.replace(express, name + "=" + value);
//       } else {
//         currentURL += "&" + name + "=" + value;
//       }
//     } else {
//       currentURL += "?" + name + "=" + value;
//     }
//
//     if (currentURLArray.length == 2) {
//       return currentURL + "#!" + currentURLArray[1];
//     } else {
//       return currentURL;
//     }
//   };
//
//   //liaowenyue:先判断参数是否含有#!，如果有，先把#!前面的提出来，单独处理。如果没有就直接进入下面三种流程
//   //如果URL中带？并且能够在URL中找到对应参数名字，就删除此参数
//   //删除参数后判断一下，所删参数是1第一个，2 中间的，3最后的，4当参数中只有这一个参数时，则做不同的处理
//   var removeParamFromURL = function (currentURL, name) {
//     var currentURLArray = currentURL.split("#!");
//
//     if (currentURLArray.length == 2) {
//       currentURL = currentURLArray[0];
//     }
//
//     if (/\?/g.test(currentURL)) {
//       var express = new RegExp("(^|)" + name + "=([^&]*)(|$)");
//       if (express.test(currentURL)) {
//         currentURL = currentURL.replace(express, "");
//
//         if(currentURL.indexOf("?&") > -1) {//参数在第一个的时候
//           currentURL = currentURL.replace("?&", "?");
//
//         } else if(currentURL.indexOf("&&") > -1) { //参数在中间的时候
//           currentURL = currentURL.replace("&&", "&");
//
//         } else if(currentURL.lastIndexOf("&") != -1
//           && currentURL.lastIndexOf("&") + 1 === currentURL.length) {
//           currentURL = currentURL.substring(0, currentURL.length -1);
//
//         } else if(currentURL.lastIndexOf("?") != -1
//           && currentURL.lastIndexOf("?") + 1 === currentURL.length) {
//           currentURL = currentURL.substring(0, currentURL.length -1);
//
//         }
//       }
//     }
//
//     if (currentURLArray.length == 2) {
//       return currentURL + "#!" + currentURLArray[1];
//     } else {
//       return currentURL;
//     }
//   };
//
//   var showTips = function (displayType, displayMsg) {
//     if (!!displayType) {
//       var functionName = eval(displayType);
//       functionName(displayMsg);
//     }
//   };
//
//   var isEmpty = function (elementName) {
//     return $.trim($('[name=' + elementName + ']').val()) == '';
//   };
//
//   /* param: [{value: '9527', rule: 'isMobile',  msg: '验证码不能为空'}, {value: '', msg: '密码不能为空'}] */
//   var validate = function (array) {
//     for (var key in array) {
//       var obj = array[key];
//       if ((obj.rule && !util[obj.rule](obj.value)) || !obj.value){
//         MessageBox.alert(obj.msg);
//         return false;
//       }
//     }
//     return true;
//   };
//
//   // 判断浏览器或操作系统
//   util.inFireFox = inFireFox
//   util.inWeChat = inWeChat
//   util.inIOS = inIOS
//
//   // 公共基础方法
//   util.downloadApp = downloadApp
//   util.setHistory = setHistory
//   util.downloadApp = downloadApp
//   util.showHeader = showHeader
//   util.mobileWebsiteURL = mobileWebsiteURL
//
//   // URL，本地存储,cookie相关
//   util.getParamSaveSessionStorage = getParamSaveSessionStorage
//   util.getParamOnlySaveSessionStorage = getParamOnlySaveSessionStorage
//   util.getSessionStorage = getSessionStorage
//   util.addParamToURL = addParamToURL
//   util.removeParamFromURL = removeParamFromURL
//   util.removeItemsFromSS = removeItemsFromSS
//   util.validateURL = validateURL
//   util.encode = encode
//   util.decode = decode
//   util.getURLParam = getURLParam
//   util.getCookie = getCookie
//   util.setCookie = setCookie
//
//   // 弹框相关
//   util.showToast = showToast
//   util.hideToast = hideToast
//   util.showToastAction = showToastAction
//   util.showToastForward = showToastForward
//   util.showToastBack = showToastBack
//   // util.showLoadingToast = showLoadingToast  //显示 加载中toast
//   // util.hideLoadingToast = hideLoadingToast  //隐藏 加载中toast
//   util.showDialog1 = showDialog1   //显示 一个按钮的dialog
//   util.showDialog2 = showDialog2   //显示 两个按钮的Dialog
//   util.showDialog1Cust = showDialog1Cust   //显示 可定制的，一个按钮的dialog
//   util.showDialog2Cust = showDialog2Cust   //显示 可定制的，两个按钮的dialog
//   util.hideDialog2Cust = hideDialog2Cust   //隐藏 可定制的，两个按钮的dialog
//   util.showProtocolPopup = showProtocolPopup  //显示 协议显示框
//   util.showTips = showTips
//   util.toastForwardWithHistory = toastForwardWithHistory
//   util.forwardWithHistory = forwardWithHistory
//   util.clearPopForward = clearPopForward
//   util.clearPopAction = clearPopAction
//
//   util.isEmpty = isEmpty
//   util.validate = validate
// })(Util);
//
// export default Util;
