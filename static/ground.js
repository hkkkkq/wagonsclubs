// 与native交互实现
function init_native() {
    var toString = function(v) {
            return Object.prototype.toString.call(v);
        },
        isFunction = function(v) {
            return toString(v) === '[object Function]';
        },
        athene = {},
        CALLBACK_PREFIX = 'callback__',
        callbacks = {},
        callbackCount = 0,
        CallbackStatus = {
            OK: 1
        };
    athene.exec = function(success, fail, service, action, params) {
        var callbackId = CALLBACK_PREFIX + callbackCount++;
        callbacks[callbackId] = {
            success: success,
            fail: fail
        };
        params = Array.prototype.concat.call([], callbackId, params || []);
        action.apply(service, params);
    };
    athene.complete = function() {
        if (arguments.length < 2) {
            throw new Error('Missing essential arguments');
        }
        var callbackId = arguments[0],
            status = arguments[1],
            callback = callbacks[callbackId],
            params = Array.prototype.slice
            .call(arguments, 2),
            success,
            fail;
        for (var i = 0; i < params.length; i++) {
            params[i] = decodeURIComponent(params[i].replace(/\+/g, '%20'));
            //  params[i] = JSON.parse(params[i]);
            // console.log(params[i].url);
        }
        delete callbacks[callbackId];
        if (!callback) {
            return;
        }
        success = callback.success;
        fail = callback.fail;
        if (status == CallbackStatus.OK && isFunction(success)) {
            success.apply(null, params);
            //console.log('success params= '+ params[0]);
        } else if (isFunction(fail)) {
            fail.apply(null, params);
        }
    }
    window['athene'] = athene;
};

// ground 接口
function android_init() {
    init_native();
    var ground = {
        show: function(message) {
            huoqiu.show(message);
            return false;
        },
        copy: function(message) {
            huoqiu.copy(message);
            return false;
        },
        buy: function(id, productName, count) {
            var args = "{\"id\":\"" + id + "\",\"count\":\"" + count + "\"}";
            var call = "{\"method\":\"bug\",\"arg\":" + args + "}";
            console.log(call);
            huoqiu.buy(id, productName, "", "", "", "", "", count, "");
            return false;
        },
        buyKsong: function(id, productName, count, desc) {
            huoqiu.buyKsong(id, productName, count, desc);
            return false;
        },
        share: function(title, url, img, des, channel) {
            var args = "{\"title\":\"" + title + "\",\"url\":\"" + url + "\",\"img\":" + img + "\",\"des\":" + des + "}"
            var call = "{\"method\":\"share:\",\"arg\":" + args + "}";
            console.log(call);
            huoqiu.share(title, url, img, des, channel);
            return false;
        },
        getApiToken: function(success, fail) {
            athene.exec(success, fail, huoqiu, huoqiu.getApiToken, []);
            return false;
        },
        jump: function(jumpType) {
            huoqiu.jump(jumpType);
            return false;
        },
        jumpProceed: function(id) {
            huoqiu.jumpProceed(id);
            return false;
        },
        reservation: function(id) {
            huoqiu.reservation(id);
            return false;
        },
        callPhone: function() {
            huoqiu.callPhone();
            return false;
        },
        showImage: function(urls, titles, index) {
            huoqiu.showImage(urls, titles, index);
            return false;
        },
        buySunshine: function(id, productName, count, type) {
            huoqiu.buySunshine(id, productName, count, type);
            return false;
        },
        reload: function() {
            huoqiu.reload();
            return false;
        },
        close: function() {
            huoqiu.close();
            return false;
        },
        forward: function(urls) {
            huoqiu.forward(urls);
            return false;
        },
        closeAll: function() {
            huoqiu.closeAll();
            return false;
        },
        dontRefresh: function() {
            huoqiu.dontRefresh();
            return false;
        },
        callCustomPhone: function(cell) {
            huoqiu.callCustomPhone(cell);
            return false;
        },
        hideHeader: function() {
            huoqiu.hideHeader();
            return false;
        },
        goBack: function() {
            huoqiu.goBack();
            return false;
        }

    };
    window['ground'] = ground;
};

function ios_init(obj) {

    if (!obj.ground) {
        obj.ground = {}

    }
    console.log('成功初始化');
    var _HuoqiuJSBridge_callbackId = 0;
    var _HuoqiuJSBridge_callbackArray = {};
    var _HuoqiuJSBridge_objArray = {};
    var _HuoqiuBridgeId = 0;
    var _HuoqiuJSBridge_shakecack = 0;

    function show() {
        //alert("back2Application..");
        var call = "{\"method\":\"show\"}";
        baseCall(call);
    }
    window['ground']['show'] = show;


    function baseCall(jsonString) {
        _HuoqiuJSBridge_objArray[_HuoqiuBridgeId] = jsonString;
        window.location.href = "http://callobjc_" + _HuoqiuBridgeId;
        _HuoqiuBridgeId++;
    }

    function getArgs(bridgeId) {
        var args = _HuoqiuJSBridge_objArray[bridgeId];
        delete _HuoqiuJSBridge_objArray[bridgeId];
        return args;
    }

    window['ground']['getArgs'] = getArgs;

    function addCallback(functionObj) {
        var cid = _HuoqiuJSBridge_callbackId;
        _HuoqiuJSBridge_callbackArray[cid] = functionObj;
        _HuoqiuJSBridge_callbackId++;

        return cid;
    }

    function callback(cid, msg, flag, alsoDeleteId) {
        _HuoqiuJSBridge_callbackArray[cid](msg);
        //    if(1==flag){
        //      _IfengJSBridge_callbackArray[cid]["success"](msg);
        //    }else if(2==flag){
        //      _IfengJSBridge_callbackArray[cid]["error"](msg);
        //    }
        delete _HuoqiuJSBridge_callbackArray[cid];
        delete _HuoqiuJSBridge_callbackArray[alsoDeleteId];
    }
    window['ground']['callback'] = callback;

    function deleteCallBack(cid) {
        delete _IfengJSBridge_callbackArray[cid];
    }
    window['ground']['deleteCallBack'] = callback;

    function copy(message) {
        //alert("back2Application..");
        var args = "{\"message\":\"" + message + "\"}";
        var call = "{\"method\":\"copy\",\"arg\":" + args + "}";
        baseCall(call);
    }
    window['ground']['copy'] = copy;

    function buy(id, productName, count) {
        //alert("back2Application..");
        var args = "{\"id\":\"" + id + "\",\"productName\":\"" + productName + "\",\"count\":" + count + "}"
        var call = "{\"method\":\"buy:\",\"arg\":" + args + "}";
        baseCall(call);
    }
    window['ground']['buy'] = buy;

    function buyKsong(id, productName, count, desc) {
        //alert("back2Application..");
        var args = "{\"id\":\"" + id + "\",\"productName\":\"" + productName + "\",\"count\":" + count + ",\"desc\":\"" + desc + "\"}";
        var call = "{\"method\":\"buyKsong:\",\"arg\":" + args + "}";
        baseCall(call);
    }
    window['ground']['buyKsong'] = buyKsong;

    function share(title, url, img, des, channel) {
        //alert("back2Application..");
        var args = "{\"title\":\"" + title + "\",\"url\":\"" + url + "\",\"img\":\"" + img + "\",\"des\":\"" + des + "\",\"channel\":\"" + channel + "\"}"
        var call = "{\"method\":\"share:\",\"arg\":" + args + "}";
        baseCall(call);
    }
    window['ground']['share'] = share;

    function getApiToken(success, fail) {
        var successId = addCallback(success);
        var failId = addCallback(fail);

        var args = "{\"success\":\"" + successId + "\",\"fail\":\"" + failId + "\"}";

        var call = "{\"method\":\"getApiToken:\",\"arg\":" + args + "}";
        baseCall(call);
    }
    window['ground']['getApiToken'] = getApiToken;

    function jump(jumpType) {
        //alert("back2Application..");
        var args = "{\"jumpType\":\"" + jumpType + "\"}"
        var call = "{\"method\":\"jump:\",\"arg\":" + args + "}";
        baseCall(call);
    }
    window['ground']['jump'] = jump;

    function jumpProceed(id) {
        //alert("back2Application..");
        var args = "{\"kaId\":\"" + id + "\"}";
        var call = "{\"method\":\"jumpProceed:\",\"arg\":" + args + "}";
        baseCall(call);
    }
    window['ground']['jumpProceed'] = jumpProceed;

    function reservation(id) {
        //alert("back2Application..");
        var args = "{\"kaId\":\"" + id + "\"}";
        var call = "{\"method\":\"reservation:\",\"arg\":" + args + "}";
        baseCall(call);
    }
    window['ground']['reservation'] = reservation;

    function callPhone() {
        //alert("back2Application..");
        var args = "{\"num\":\"0\"}";
        var call = "{\"method\":\"callPhone:\",\"arg\":" + args + "}";
        baseCall(call);
    }
    window['ground']['callPhone'] = callPhone;

    function showImage(urls, titles, index) {
        //alert("back2Application..");
        var args = "{\"urls\":\"" + urls + "\",\"titles\":\"" + titles + "\",\"index\":" + index + "}";
        var call = "{\"method\":\"showImage:\",\"arg\":" + args + "}";
        baseCall(call);
    }
    window['ground']['showImage'] = showImage;

    function buySunshine(id, productName, count, type) {
        //alert("back2Application..");
        var args = "{\"id\":\"" + id + "\",\"productName\":\"" + productName + "\",\"count\":" + count + ",\"type\":\"" + type + "\"}";
        var call = "{\"method\":\"buySunshine:\",\"arg\":" + args + "}";
        baseCall(call);
    }
    window['ground']['buySunshine'] = buySunshine;

    function close() {
        var call = "{\"method\":\"close\"}";
        baseCall(call);
    }
    window['ground']['close'] = close;

    function reload() {
        var call = "{\"method\":\"reload\"}";
        baseCall(call);
    }
    window['ground']['reload'] = reload;

    function forward(url) {
        var args = "{\"url\":\"" + url + "\"}";
        var call = "{\"method\":\"forward:\",\"arg\":" + args + "}";
        baseCall(call);
    }
    window['ground']['forward'] = forward;

    function dontRefresh() {
        var call = "{\"method\":\"dontRefresh\"}";
        baseCall(call);
    }
    window['ground']['dontRefresh'] = dontRefresh;

    function callCustomPhone(cell) {
        var args = "{\"cell\":\"" + cell + "\"}";
        var call = "{\"method\":\"callCustomPhone:\",\"arg\":" + args + "}";
        baseCall(call);
    }
    window['ground']['callCustomPhone'] = callCustomPhone;

    function hideHeader() {
        var call = "{\"method\":\"hideHeader\"}";
        baseCall(call);
    }
    window['ground']['hideHeader'] = hideHeader;

    function goBack() {
        var call = "{\"method\":\"goBack\"}";
        baseCall(call);
    }
    window['ground']['goBack'] = goBack;

    function json2str(o) {
        var arr = [];
        var fmt = function(s) {
            if (typeof s == 'object' && s != null) return json2str(s);
            return /^(string|number)$/.test(typeof s) ? "\"" + s + "\"" : s;
        }
        for (var i in o) arr.push("\"" + i + "\":" + fmt(o[i]));
        return '{' + arr.join(',') + '}';
    }
};

(function() {
    var isAndroid = (/android/gi).test(navigator.appVersion),
        isIDevice = (/iphone|ipad/gi).test(navigator.appVersion);
    if (isAndroid) {
        android_init();
    } else if (isIDevice) {
        ios_init(window);
    }
})();