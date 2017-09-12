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
            params = Array.prototype.slice.call(arguments, 2),
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
            wagons.show(message);
            return false;
        },
        copy: function(message) {
            wagons.copy(message);
            return false;
        },
        share: function(title, url, img, des, channel) {
            var args = "{\"title\":\"" + title + "\",\"url\":\"" + url + "\",\"img\":" + img + "\",\"des\":" + des + "}"
            var call = "{\"method\":\"share:\",\"arg\":" + args + "}";
            console.log(call);
            wagons.share(title, url, img, des, channel);
            return false;
        },
        getApiToken: function(success, fail) {
            athene.exec(success, fail, wagons, wagons.getApiToken, []);
            return false;
        },
        reservation: function(isPlan, carId) {
            wagons.reservation(isPlan, carId);
            return false;
        },
        callPhone: function() {
            wagons.callPhone();
            return false;
        },
        showImage: function(urls, titles, index) {
            wagons.showImage(urls, titles, index);
            return false;
        },
        reload: function() {
            wagons.reload();
            return false;
        },
        close: function() {
            wagons.close();
            return false;
        },
        forward: function(urls) {
            wagons.forward(urls);
            return false;
        },
        closeAll: function() {
            wagons.closeAll();
            return false;
        },
        dontRefresh: function() {
            wagons.dontRefresh();
            return false;
        },
        callCustomPhone: function(cell) {
            wagons.callCustomPhone(cell);
            return false;
        },
        hideHeader: function() {
            wagons.hideHeader();
            return false;
        },
        goBack: function() {
            wagons.goBack();
            return false;
        },
        trusteeship: function() {
            wagons.trusteeship();
            return false;
        }

    };
    window['Wground'] = ground;
};

function ios_init(obj) {

    if (!obj.Wground) {
        obj.Wground = {}

    }
    console.log('成功初始化');
    var _WagonsJSBridge_callbackId = 0;
    var _WagonsJSBridge_callbackArray = {};
    var _WagonsJSBridge_objArray = {};
    var _WagonsBridgeId = 0;
    var _WagonsJSBridge_shakecack = 0;

    function show() {
        //alert("back2Application..");
        var call = "{\"method\":\"show\"}";
        baseCall(call);
    }
    window['Wground']['show'] = show;

    function baseCall(jsonString) {
        _WagonsJSBridge_objArray[_WagonsBridgeId] = jsonString;
        window.location.href = "http://callobjc_" + _WagonsBridgeId;
        _WagonsBridgeId++;
    }

    // function trusteeship() {
    //     var call = "{\"method\":\"trusteeship\"}";
    //     baseCall(call);
    // }
    // window['Wground']['trusteeship'] = trusteeship;

    function getArgs(bridgeId) {
        var args = _WagonsJSBridge_objArray[bridgeId];
        delete _WagonsJSBridge_objArray[bridgeId];
        return args;
    }

    window['Wground']['getArgs'] = getArgs;

    function addCallback(functionObj) {
        var cid = _WagonsJSBridge_callbackId;
        _WagonsJSBridge_callbackArray[cid] = functionObj;
        _WagonsJSBridge_callbackId++;

        return cid;
    }

    function callback(cid, msg, flag, alsoDeleteId) {
        _WagonsJSBridge_callbackArray[cid](msg);
        delete _WagonsJSBridge_callbackArray[cid];
        delete _WagonsJSBridge_callbackArray[alsoDeleteId];
    }
    window['Wground']['callback'] = callback;

    function deleteCallBack(cid) {
        delete _IfengJSBridge_callbackArray[cid];
    }
    window['Wground']['deleteCallBack'] = callback;

    function customCopy(message) {
        var args = "{\"message\":\"" + message + "\"}";
        var call = "{\"method\":\"customCopy\",\"arg\":" + args + "}";
        baseCall(call);
    }
    window['Wground']['customCopy'] = customCopy;

    function share(title, url, img, des, channel) {
        var args = "{\"title\":\"" + title + "\",\"url\":\"" + url + "\",\"img\":\"" + img + "\",\"des\":\"" + des + "\",\"channel\":\"" + channel + "\"}"
        var call = "{\"method\":\"share:\",\"arg\":" + args + "}";
        baseCall(call);
    }
    window['Wground']['share'] = share;

    function getApiToken(success, fail) {
        var successId = addCallback(success);
        var failId = addCallback(fail);
        var args = "{\"success\":\"" + successId + "\",\"fail\":\"" + failId + "\"}";
        var call = "{\"method\":\"getApiToken:\",\"arg\":" + args + "}";
        baseCall(call);
    }
    window['Wground']['getApiToken'] = getApiToken;

    function callPhone() {
        var args = "{\"num\":\"0\"}";
        var call = "{\"method\":\"callPhone:\",\"arg\":" + args + "}";
        baseCall(call);
    }
    window['Wground']['callPhone'] = callPhone;

    function callCustomPhone(cell) {
        var args = "{\"cell\":\"" + cell + "\"}";
        var call = "{\"method\":\"callCustomPhone:\",\"arg\":" + args + "}";
        baseCall(call);
    }
    window['Wground']['callCustomPhone'] = callCustomPhone;

    function showImage(urls, titles, index) {
        var args = "{\"urls\":\"" + urls + "\",\"titles\":\"" + titles + "\",\"index\":" + index + "}";
        var call = "{\"method\":\"showImage:\",\"arg\":" + args + "}";
        baseCall(call);
    }
    window['Wground']['showImage'] = showImage;

    function close() {
        var call = "{\"method\":\"close\"}";
        baseCall(call);
    }
    window['Wground']['close'] = close;

    function goBack() {
        var call = "{\"method\":\"goBack\"}";
        baseCall(call);
    }
    window['Wground']['goBack'] = goBack;

    function reload() {
        var call = "{\"method\":\"reload\"}";
        baseCall(call);
    }
    window['Wground']['reload'] = reload;

    function forward(url) {
        var args = "{\"url\":\"" + url + "\"}";
        var call = "{\"method\":\"forward:\",\"arg\":" + args + "}";
        baseCall(call);
    }
    window['Wground']['forward'] = forward;

    function dontRefresh() {
        var call = "{\"method\":\"dontRefresh\"}";
        baseCall(call);
    }
    window['Wground']['dontRefresh'] = dontRefresh;

    function hideHeader() {
        var call = "{\"method\":\"hideHeader\"}";
        baseCall(call);
    }
    window['Wground']['hideHeader'] = hideHeader;

    function reservation(isPlan, carId) {
        var args = "{\"isPlan\":\"" + isPlan + "\", \"carId\":\"" + carId + "\"}";
        var call = "{\"method\":\"reservation:\",\"arg\":" + args + "}";
        baseCall(call);
    }
    window['Wground']['reservation'] = reservation;

    function trusteeship() {
        var call = "{\"method\":\"trusteeship\"}";
        baseCall(call);
    }
    window['Wground']['trusteeship'] = trusteeship;

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