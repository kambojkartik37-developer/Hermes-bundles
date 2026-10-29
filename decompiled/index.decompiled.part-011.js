case 357:
                            r0 = undefined;
                            r3 = r6.bind(r0)(r3);
                            r2['method'] = r3;
                            r3 = r1.mode;
                            if(r3) { _fun2242_ip = 383; continue _fun2242 }
case 378:
                            r3 = r2.mode;
case 383:
                            if(r3) { _fun2242_ip = 388; continue _fun2242 }
case 386:
                            r3 = null;
case 388:
                            r2['mode'] = r3;
                            r3 = r1.signal;
                            if(r3) { _fun2242_ip = 407; continue _fun2242 }
case 402:
                            r3 = r2.signal;
case 407:
                            if(r3) { _fun2242_ip = 463; continue _fun2242 }
case 410:
                            r6 = _closure2_slot1;
                            r4 = 'AbortController';
                            r6 = r4 in r6;
                            r4 = undefined;
                            if(!r6) { _fun2242_ip = 460; continue _fun2242 }
case 427:
                            r6 = global;
                            r6 = r6.AbortController;
                            r7 = r6.prototype;
                            r7 = Object.create(r7, {constructor: {value: r6}});
                            r11 = r7;
                            r6 = new r11[r6](r10);
                            r6 = r6 instanceof Object ? r6 : r7;
                            r4 = r6.signal;
case 460:
                            r3 = r4;
case 463:
                            r2['signal'] = r3;
                            r3 = null;
                            r2['referrer'] = r3;
                            r3 = r2.method;
                            r4 = 'GET';
                            if(!(r3 !== r4)) { _fun2242_ip = 503; continue _fun2242 }
case 490:
                            r6 = r2.method;
                            r3 = 'HEAD';
                            if(!(r6 === r3)) { _fun2242_ip = 509; continue _fun2242 }
case 503:
                            if(r5) { _fun2242_ip = 780; continue _fun2242 }
case 509:
                            r3 = r2._initBody;
                            r3 = r3.bind(r2)(r5);
                            r3 = r2.method;
                            if(!(r3 !== r4)) { _fun2242_ip = 545; continue _fun2242 }
case 529:
                            r4 = r2.method;
                            r3 = 'HEAD';
                            if(!(r4 === r3)) { _fun2242_ip = 778; continue _fun2242 }
case 545:
                            r4 = r1.cache;
                            r3 = 'no-store';
                            if(!(r4 !== r3)) { _fun2242_ip = 574; continue _fun2242 }
case 558:
                            r3 = r1.cache;
                            r1 = 'no-cache';
                            if(!(r3 === r1)) { _fun2242_ip = 778; continue _fun2242 }
case 574:
                            r5 = /([?&])_=[^&]*/;
                            r3 = r5.test;
                            r1 = r2.url;
                            r1 = r3.bind(r5)(r1);
                            r4 = r2.url;
                            if(r1) { _fun2242_ip = 715; continue _fun2242 }
case 612:
                            r6 = /\?/;
                            r3 = r6.test;
                            r1 = r2.url;
                            r1 = r3.bind(r6)(r1);
                            r6 = '?';
                            if(!r1) { _fun2242_ip = 653; continue _fun2242 }
case 649:
                            r6 = '&';
case 653:
                            r1 = global;
                            r1 = r1.Date;
                            r3 = r1.prototype;
                            r3 = Object.create(r3, {constructor: {value: r1}});
                            r11 = r3;
                            r1 = new r11[r1](r10);
                            r3 = r1 instanceof Object ? r1 : r3;
                            r1 = r3.getTime;
                            r3 = r1.bind(r3)();
                            r1 = '_=';
                            r1 = r6 + r1;
                            r1 = r1 + r3;
                            r1 = r4 + r1;
                            r2['url'] = r1;
                            _fun2242_ip = 778; continue _fun2242;
case 715:
                            r3 = r4.replace;
                            r1 = global;
                            r1 = r1.Date;
                            r6 = r1.prototype;
                            r6 = Object.create(r6, {constructor: {value: r1}});
                            r11 = r6;
                            r1 = new r11[r1](r10);
                            r6 = r1 instanceof Object ? r1 : r6;
                            r1 = r6.getTime;
                            r6 = r1.bind(r6)();
                            r1 = '$1_=';
                            r1 = r1 + r6;
                            r1 = r3.bind(r4)(r5, r1);
                            r2['url'] = r1;
case 778:
                            return r0;
case 780:
                            r0 = global;
                            r2 = r0.TypeError;
                            r0 = r2.prototype;
                            r1 = Object.create(r0, {constructor: {value: r2}});
                            r10 = 'Body not allowed for GET or HEAD requests';
                            r11 = r1;
                            r0 = new r11[r2](r10, r9);
                            r0 = r0 instanceof Object ? r0 : r1;
                            throw r0;
case 814:
                            r0 = global;
                            r2 = r0.TypeError;
                            r0 = r2.prototype;
                            r1 = Object.create(r0, {constructor: {value: r2}});
                            r10 = 'Already read';
                            r11 = r1;
                            r0 = new r11[r2](r10, r9);
                            r0 = r0 instanceof Object ? r0 : r1;
                            throw r0;
                        }
                    };
                    r6 = r1;
                    var _closure2_slot19 = r1;
                    r1 = function(a0) { // Original name: decode, environment: r9
                        r3 = a0;
                        r0 = global;
                        r0 = r0.FormData;
                        r2 = r0.prototype;
                        r2 = Object.create(r2, {constructor: {value: r0}});
                        r6 = r2;
                        r0 = new r6[r0](r5);
                        r0 = r0 instanceof Object ? r0 : r2;
                        var _closure3_slot0 = r0;
                        r2 = r3.trim;
                        r4 = r2.bind(r3)();
                        r3 = r4.split;
                        r2 = '&';
                        r3 = r3.bind(r4)(r2);
                        r2 = r3.forEach;
                        r1 = function(a0) { // Environment: r1
                            _fun2244: for(var _fun2244_ip = 0; ; ) switch(_fun2244_ip) {
case 0:
                                r1 = a0;
                                if(!r1) { _fun2244_ip = 142; continue _fun2244 }
case 9:
                                r0 = r1.split;
                                r2 = '=';
                                r1 = r0.bind(r1)(r2);
                                r0 = r1.shift;
                                r5 = r0.bind(r1)();
                                r4 = r5.replace;
                                r0 = /\+/g;
                                r3 = ' ';
                                r6 = r4.bind(r5)(r0, r3);
                                r0 = r1.join;
                                r2 = r0.bind(r1)(r2);
                                r1 = r2.replace;
                                r0 = /\+/g;
                                r5 = r1.bind(r2)(r0, r3);
                                r3 = _closure3_slot0;
                                r2 = r3.append;
                                r0 = global;
                                r1 = r0.decodeURIComponent;
                                r4 = undefined;
                                r1 = r1.bind(r4)(r6);
                                r0 = r0.decodeURIComponent;
                                r0 = r0.bind(r4)(r5);
                                r0 = r2.bind(r3)(r1, r0);
case 142:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r1 = r2.bind(r3)(r1);
                        return r0;
                    };
                    var _closure2_slot20 = r1;
                    r1 = function(a0) { // Original name: parseHeaders, environment: r9
                        r5 = a0;
                        r0 = _closure2_slot11;
                        r2 = r0.prototype;
                        r2 = Object.create(r2, {constructor: {value: r0}});
                        r8 = r2;
                        r0 = new r8[r0](r7);
                        r0 = r0 instanceof Object ? r0 : r2;
                        var _closure3_slot0 = r0;
                        r4 = r5.replace;
                        r3 = /\r?\n[\t ]+/g;
                        r2 = ' ';
                        r4 = r4.bind(r5)(r3, r2);
                        r3 = r4.split;
                        r2 = '\r';
                        r4 = r3.bind(r4)(r2);
                        r3 = r4.map;
                        r2 = function(a0) { // Environment: r1
                            _fun2246: for(var _fun2246_ip = 0; ; ) switch(_fun2246_ip) {
case 0:
                                r4 = a0;
                                r1 = r4.indexOf;
                                r0 = '\n';
                                r2 = r1.bind(r4)(r0);
                                r1 = 0;
                                r0 = r4;
                                if(!(r2 === r1)) { _fun2246_ip = 46; continue _fun2246 }
case 26:
                                r3 = r4.substr;
                                r2 = r4.length;
                                r1 = 1;
                                r0 = r3.bind(r4)(r1, r2);
case 46:
                                return r0;
                            }
                        };
                        r3 = r3.bind(r4)(r2);
                        r2 = r3.forEach;
                        r1 = function(a0) { // Environment: r1
                            _fun2247: for(var _fun2247_ip = 0; ; ) switch(_fun2247_ip) {
case 0:
                                r6 = a0;
                                r0 = undefined;
                                r3 = undefined;
                                r2 = undefined;
                                r1 = undefined;
                                r4 = r6.split;
                                r5 = ':';
                                r6 = r4.bind(r6)(r5);
                                r3 = r6;
                                r4 = r6.shift;
                                r6 = r4.bind(r6)();
                                r4 = r6.trim;
                                r4 = r4.bind(r6)();
                                r2 = r4;
                                if(!r4) { _fun2247_ip = 129; continue _fun2247 }
case 53:
                                r4 = r3;
                                r3 = r4.join;
                                r4 = r3.bind(r4)(r5);
                                r3 = r4.trim;
                                r1 = r3.bind(r4)();
case 75: // try_start_0
                                r4 = _closure3_slot0;
                                r3 = r4.append;
                                r1 = r3.bind(r4)(r2, r1);
case 94: // try_end0
                                _fun2247_ip = 129; continue _fun2247;
case 96: // catch_target0
                                CatchBlockStart(arg_register=1);
                                r2 = global;
                                r3 = r2.console;
                                r2 = r3.warn;
                                r4 = r1.message;
                                r1 = 'Response ';
                                r1 = r1 + r4;
                                r1 = r2.bind(r3)(r1);
case 129:
                                return r0;
                            }
                        };
                        r1 = r2.bind(r3)(r1);
                        return r0;
                    };
                    var _closure2_slot21 = r1;
                    r1 = function(a0, a1) { // Original name: Response, environment: r9
                        _fun2248: for(var _fun2248_ip = 0; ; ) switch(_fun2248_ip) {
case 0:
                            r1 = a1;
                            r3 = this;
                            r0 = _closure2_slot22;
                            r0 = r3 instanceof r0;
                            if(r0) { _fun2248_ip = 54; continue _fun2248 }
case 20:
                            r0 = global;
                            r5 = r0.TypeError;
                            r0 = r5.prototype;
                            r2 = Object.create(r0, {constructor: {value: r5}});
                            r7 = 'Please use the "new" operator, this DOM object constructor cannot be called as a function.';
                            r8 = r2;
                            r0 = new r8[r5](r7, r6);
                            r0 = r0 instanceof Object ? r0 : r2;
                            throw r0;
case 54:
                            if(r1) { _fun2248_ip = 59; continue _fun2248 }
case 57:
                            r1 = {};
case 59:
                            r0 = 'default';
                            r3['type'] = r0;
                            r6 = r1.status;
                            r5 = 200;
                            r0 = undefined;
                            r2 = r5;
                            if(!(r6 !== r0)) { _fun2248_ip = 91; continue _fun2248 }
case 86:
                            r2 = r1.status;
case 91:
                            r3['status'] = r2;
                            r2 = r3.status;
                            if(!(!(r2 < r5))) { _fun2248_ip = 260; continue _fun2248 }
case 109:
                            r6 = r3.status;
                            r2 = 599;
                            if(!(!(r6 > r2))) { _fun2248_ip = 260; continue _fun2248 }
case 127:
                            r2 = r3.status;
                            r2 = r2 >= r5;
                            if(!r2) { _fun2248_ip = 154; continue _fun2248 }
case 139:
                            r6 = r3.status;
                            r5 = 300;
                            r2 = r6 < r5;
case 154:
                            r3['ok'] = r2;
                            r6 = r1.statusText;
                            r2 = '';
                            r5 = r2;
                            if(!(r6 !== r0)) { _fun2248_ip = 186; continue _fun2248 }
case 177:
                            r6 = r1.statusText;
                            r5 = '' + r6;
case 186:
                            r3['statusText'] = r5;
                            r6 = _closure2_slot11;
                            r7 = r1.headers;
                            r5 = r6.prototype;
                            r5 = Object.create(r5, {constructor: {value: r6}});
                            r8 = r5;
                            r4 = new r8[r6](r7, r6);
                            r4 = r4 instanceof Object ? r4 : r5;
                            r3['headers'] = r4;
                            r1 = r1.url;
                            if(r1) { _fun2248_ip = 238; continue _fun2248 }
case 235:
                            r1 = r2;
case 238:
                            r3['url'] = r1;
                            r2 = r3._initBody;
                            r1 = a0;
                            r1 = r2.bind(r3)(r1);
                            return r0;
case 260:
                            r0 = global;
                            r2 = r0.RangeError;
                            r0 = r2.prototype;
                            r1 = Object.create(r0, {constructor: {value: r2}});
                            r7 = "Failed to construct 'Response': The status provided (0) is outside the range [200, 599].";
                            r8 = r1;
                            r0 = new r8[r2](r7, r6);
                            r0 = r0 instanceof Object ? r0 : r1;
                            throw r0;
                        }
                    };
                    r4 = r1;
                    var _closure2_slot22 = r1;
                    r3 = function(a0, a1) { // Original name: fetch, environment: r9
                        r1 = a0;
                        var _closure3_slot0 = r1;
                        r1 = a1;
                        var _closure3_slot1 = r1;
                        r1 = global;
                        r2 = r1.Promise;
                        r1 = r2.prototype;
                        r1 = Object.create(r1, {constructor: {value: r2}});
                        r3 = function(a0, a1) { // Environment: r0
                            _fun2250: for(var _fun2250_ip = 0; ; ) switch(_fun2250_ip) {
case 0:
                                r2 = a1;
                                r0 = a0;
                                var _closure4_slot0 = r0;
                                var _closure4_slot1 = r2;
                                r8 = function() { // Original name: abortXhr, environment: r1
                                    r1 = _closure4_slot3;
                                    r0 = r1.abort;
                                    r0 = r0.bind(r1)();
                                    r0 = undefined;
                                    return r0;
                                };
                                var _closure4_slot5 = r8;
                                r7 = _closure2_slot19;
                                r15 = _closure3_slot0;
                                r14 = _closure3_slot1;
                                r5 = r7.prototype;
                                r5 = Object.create(r5, {constructor: {value: r7}});
                                r16 = r5;
                                r4 = new r16[r7](r15, r14, r13);
                                r5 = r4 instanceof Object ? r4 : r5;
                                var _closure4_slot2 = r5;
                                r4 = r5.signal;
                                if(!r4) { _fun2250_ip = 92; continue _fun2250 }
case 75:
                                r4 = r5.signal;
                                r4 = r4.aborted;
                                if(r4) { _fun2250_ip = 619; continue _fun2250 }
case 92:
                                r6 = global;
                                r4 = r6.XMLHttpRequest;
                                r7 = r4.prototype;
                                r7 = Object.create(r7, {constructor: {value: r4}});
                                r16 = r7;
                                r4 = new r16[r4](r15);
                                r4 = r4 instanceof Object ? r4 : r7;
                                var _closure4_slot3 = r4;
                                r7 = function() { // Environment: r1
                                    _fun2252: for(var _fun2252_ip = 0; ; ) switch(_fun2252_ip) {
case 0:
                                        r5 = {};
                                        r0 = _closure4_slot3;
                                        r0 = r0.statusText;
                                        r5['statusText'] = r0;
                                        r3 = _closure2_slot21;
                                        r2 = _closure4_slot3;
                                        r0 = r2.getAllResponseHeaders;
                                        r2 = r0.bind(r2)();
                                        if(r2) { _fun2252_ip = 50; continue _fun2252 }
case 46:
                                        r2 = '';
case 50:
                                        r0 = undefined;
                                        r2 = r3.bind(r0)(r2);
                                        r5['headers'] = r2;
                                        var _closure5_slot0 = r5;
                                        r2 = _closure4_slot2;
                                        r6 = r2.url;
                                        r3 = r6.indexOf;
                                        r2 = 'file://';
                                        r2 = r3.bind(r6)(r2);
                                        r3 = 0;
                                        if(!(r2 === r3)) { _fun2252_ip = 129; continue _fun2252 }
case 94:
                                        r2 = _closure4_slot3;
                                        r6 = r2.status;
                                        r2 = 200;
                                        if(!(!(r6 < r2))) { _fun2252_ip = 146; continue _fun2252 }
case 110:
                                        r6 = _closure4_slot3;
                                        r7 = r6.status;
                                        r6 = 599;
                                        if(!(!(r7 > r6))) { _fun2252_ip = 146; continue _fun2252 }
case 129:
                                        r6 = _closure4_slot3;
                                        r6 = r6.status;
                                        r5['status'] = r6;
                                        _fun2252_ip = 152; continue _fun2252;
case 146:
                                        r5['status'] = r2;
case 152:
                                        r6 = _closure4_slot3;
                                        r2 = 'responseURL';
                                        r2 = r2 in r6;
                                        if(r2) { _fun2252_ip = 188; continue _fun2252 }
case 167:
                                        r7 = r5.headers;
                                        r6 = r7.get;
                                        r2 = 'X-Request-URL';
                                        r2 = r6.bind(r7)(r2);
                                        _fun2252_ip = 198; continue _fun2252;
case 188:
                                        r6 = _closure4_slot3;
                                        r2 = r6.responseURL;
case 198:
                                        r5['url'] = r2;
                                        r5 = _closure4_slot3;
                                        r2 = 'response';
                                        r2 = r2 in r5;
                                        r4 = _closure4_slot3;
                                        if(r2) { _fun2252_ip = 231; continue _fun2252 }
case 223:
                                        r2 = r4.responseText;
                                        _fun2252_ip = 237; continue _fun2252;
case 231:
                                        r2 = r4.response;
case 237:
                                        var _closure5_slot1 = r2;
                                        r2 = global;
                                        r2 = r2.setTimeout;
                                        r1 = function() { // Environment: r1
                                            r2 = _closure4_slot0;
                                            r4 = _closure2_slot22;
                                            r6 = _closure5_slot1;
                                            r5 = _closure5_slot0;
                                            r1 = r4.prototype;
                                            r1 = Object.create(r1, {constructor: {value: r4}});
                                            r7 = r1;
                                            r0 = new r7[r4](r6, r5, r4);
                                            r1 = r0 instanceof Object ? r0 : r1;
                                            r0 = undefined;
                                            r1 = r2.bind(r0)(r1);
                                            return r0;
                                        };
                                        r1 = r2.bind(r0)(r1, r3);
                                        return r0;
                                    }
                                };
                                r4['onload'] = r7;
                                r7 = function() { // Environment: r1
                                    r0 = global;
                                    r3 = r0.setTimeout;
                                    r0 = undefined;
                                    r2 = function() { // Environment: r1
                                        r2 = _closure4_slot1;
                                        r0 = global;
                                        r3 = r0.TypeError;
                                        r0 = r3.prototype;
                                        r1 = Object.create(r0, {constructor: {value: r3}});
                                        r4 = 'Network request failed';
                                        r5 = r1;
                                        r0 = new r5[r3](r4, r3);
                                        r1 = r0 instanceof Object ? r0 : r1;
                                        r0 = undefined;
                                        r1 = r2.bind(r0)(r1);
                                        return r0;
                                    };
                                    r1 = 0;
                                    r1 = r3.bind(r0)(r2, r1);
                                    return r0;
                                };
                                r4['onerror'] = r7;
                                r7 = function() { // Environment: r1
                                    r0 = global;
                                    r3 = r0.setTimeout;
                                    r0 = undefined;
                                    r2 = function() { // Environment: r1
                                        r2 = _closure4_slot1;
                                        r0 = global;
                                        r3 = r0.TypeError;
                                        r0 = r3.prototype;
                                        r1 = Object.create(r0, {constructor: {value: r3}});
                                        r4 = 'Network request timed out';
                                        r5 = r1;
                                        r0 = new r5[r3](r4, r3);
                                        r1 = r0 instanceof Object ? r0 : r1;
                                        r0 = undefined;
                                        r1 = r2.bind(r0)(r1);
                                        return r0;
                                    };
                                    r1 = 0;
                                    r1 = r3.bind(r0)(r2, r1);
                                    return r0;
                                };
                                r4['ontimeout'] = r7;
                                r7 = function() { // Environment: r1
                                    r0 = global;
                                    r3 = r0.setTimeout;
                                    r0 = undefined;
                                    r2 = function() { // Environment: r1
                                        r2 = _closure4_slot1;
                                        r0 = _closure2_slot0;
                                        r4 = r0.DOMException;
                                        r0 = r4.prototype;
                                        r1 = Object.create(r0, {constructor: {value: r4}});
                                        r6 = 'Aborted';
                                        r5 = 'AbortError';
                                        r7 = r1;
                                        r0 = new r7[r4](r6, r5, r4);
                                        r1 = r0 instanceof Object ? r0 : r1;
                                        r0 = undefined;
                                        r1 = r2.bind(r0)(r1);
                                        return r0;
                                    };
                                    r1 = 0;
                                    r1 = r3.bind(r0)(r2, r1);
                                    return r0;
                                };
                                r4['onabort'] = r7;
                                r11 = r4.open;
                                r10 = r5.method;
                                r9 = r5.url;
                                r7 = r9;
case 187: // try_start_0
                                r12 = r7;
                                r9 = '';
                                if(!(r12 === r9)) { _fun2250_ip = 217; continue _fun2250 }
case 198:
                                r9 = _closure2_slot1;
                                r9 = r9.location;
                                r9 = r9.href;
                                if(r9) { _fun2250_ip = 222; continue _fun2250 }
case 217:
                                r9 = r7;
                                _fun2250_ip = 238; continue _fun2250;
case 222:
                                r12 = _closure2_slot1;
                                r12 = r12.location;
                                r9 = r12.href;
case 238: // try_end0
                                _fun2250_ip = 245; continue _fun2250;
case 240: // catch_target0
                                CatchBlockStart(arg_register=12);
                                r9 = r7;
case 245:
                                r7 = true;
                                r9 = r11.bind(r4)(r10, r9, r7);
                                r10 = r5.credentials;
                                r9 = 'include';
                                if(!(r10 !== r9)) { _fun2250_ip = 292; continue _fun2250 }
case 268:
                                r10 = r5.credentials;
                                r9 = 'omit';
                                if(!(r10 === r9)) { _fun2250_ip = 298; continue _fun2250 }
case 282:
                                r9 = false;
                                r4['withCredentials'] = r9;
                                _fun2250_ip = 298; continue _fun2250;
case 292:
                                r4['withCredentials'] = r7;
case 298:
                                r7 = 'responseType';
                                r7 = r7 in r4;
                                if(!r7) { _fun2250_ip = 357; continue _fun2250 }
case 309:
                                r7 = _closure2_slot2;
                                r7 = r7.blob;
                                if(r7) { _fun2250_ip = 347; continue _fun2250 }
case 322:
                                r7 = _closure2_slot2;
                                r7 = r7.arrayBuffer;
                                if(!r7) { _fun2250_ip = 357; continue _fun2250 }
case 335:
                                r7 = 'arraybuffer';
                                r4['responseType'] = r7;
                                _fun2250_ip = 357; continue _fun2250;
case 347:
                                r7 = 'blob';
                                r4['responseType'] = r7;
case 357:
                                r7 = _closure3_slot1;
                                if(!r7) { _fun2250_ip = 520; continue _fun2250 }
case 367:
                                r7 = _closure3_slot1;
                                r7 = r7.headers;
                                r9 = typeof r7;
                                r7 = 'object';
                                if(!(r9 === r7)) { _fun2250_ip = 520; continue _fun2250 }
case 390:
                                r7 = _closure3_slot1;
                                r9 = r7.headers;
                                r7 = _closure2_slot11;
                                r7 = r9 instanceof r7;
                                if(r7) { _fun2250_ip = 520; continue _fun2250 }
case 410:
                                r7 = _closure2_slot1;
                                r7 = r7.Headers;
                                if(!r7) { _fun2250_ip = 449; continue _fun2250 }
case 423:
                                r7 = _closure3_slot1;
                                r9 = r7.headers;
                                r7 = _closure2_slot1;
                                r7 = r7.Headers;
                                r7 = r9 instanceof r7;
                                if(r7) { _fun2250_ip = 520; continue _fun2250 }
case 449:
                                r7 = new Array(0);
                                var _closure4_slot4 = r7;
                                r7 = r6.Object;
                                r6 = r7.getOwnPropertyNames;
                                r3 = _closure3_slot1;
                                r3 = r3.headers;
                                r7 = r6.bind(r7)(r3);
                                r6 = r7.forEach;
                                r3 = function(a0) { // Environment: r1
                                    r4 = a0;
                                    r6 = _closure4_slot4;
                                    r5 = r6.push;
                                    r3 = _closure2_slot8;
                                    r0 = undefined;
                                    r3 = r3.bind(r0)(r4);
                                    r3 = r5.bind(r6)(r3);
                                    r3 = _closure4_slot3;
                                    r2 = r3.setRequestHeader;
                                    r5 = _closure2_slot9;
                                    r1 = _closure3_slot1;
                                    r1 = r1.headers;
                                    r1 = r1[r4];
                                    r1 = r5.bind(r0)(r1);
                                    r1 = r2.bind(r3)(r4, r1);
                                    return r0;
                                };
                                r3 = r6.bind(r7)(r3);
                                r7 = r5.headers;
                                r6 = r7.forEach;
                                r3 = function(a0, a1) { // Environment: r1
                                    _fun2261: for(var _fun2261_ip = 0; ; ) switch(_fun2261_ip) {
case 0:
                                        r3 = a1;
                                        r2 = _closure4_slot4;
                                        r1 = r2.indexOf;
                                        r2 = r1.bind(r2)(r3);
                                        r1 = -1;
                                        if(!(r2 === r1)) { _fun2261_ip = 49; continue _fun2261 }
case 30:
                                        r2 = _closure4_slot3;
                                        r1 = r2.setRequestHeader;
                                        r0 = a0;
                                        r0 = r1.bind(r2)(r3, r0);
case 49:
                                        r0 = undefined;
                                        return r0;
                                    }
                                };
                                r3 = r6.bind(r7)(r3);
                                _fun2250_ip = 540; continue _fun2250;
case 520:
                                r7 = r5.headers;
                                r6 = r7.forEach;
                                r3 = function(a0, a1) { // Environment: r1
                                    r3 = _closure4_slot3;
                                    r2 = r3.setRequestHeader;
                                    r1 = a1;
                                    r0 = a0;
                                    r0 = r2.bind(r3)(r1, r0);
                                    r0 = undefined;
                                    return r0;
                                };
                                r3 = r6.bind(r7)(r3);
case 540:
                                r3 = r5.signal;
                                if(!r3) { _fun2250_ip = 579; continue _fun2250 }
case 548:
                                r7 = r5.signal;
                                r6 = r7.addEventListener;
                                r3 = 'abort';
                                r3 = r6.bind(r7)(r3, r8);
                                r1 = function() { // Environment: r1
                                    _fun2263: for(var _fun2263_ip = 0; ; ) switch(_fun2263_ip) {
case 0:
                                        r1 = _closure4_slot3;
                                        r2 = r1.readyState;
                                        r1 = 4;
                                        if(!(r2 === r1)) { _fun2263_ip = 48; continue _fun2263 }
case 19:
                                        r1 = _closure4_slot2;
                                        r3 = r1.signal;
                                        r2 = r3.removeEventListener;
                                        r1 = _closure4_slot5;
                                        r0 = 'abort';
                                        r0 = r2.bind(r3)(r0, r1);
case 48:
                                        r0 = undefined;
                                        return r0;
                                    }
                                };
                                r4['onreadystatechange'] = r1;
case 579:
                                r3 = r4.send;
                                r6 = r5._bodyInit;
                                r7 = typeof r6;
                                r6 = 'undefined';
                                r1 = null;
                                if(!(r7 !== r6)) { _fun2250_ip = 610; continue _fun2250 }
case 604:
                                r1 = r5._bodyInit;
case 610:
                                r1 = r3.bind(r4)(r1);
                                r1 = undefined;
                                return r1;
case 619:
                                r0 = _closure2_slot0;
                                r4 = r0.DOMException;
                                r0 = r4.prototype;
                                r1 = Object.create(r0, {constructor: {value: r4}});
                                r15 = 'Aborted';
                                r14 = 'AbortError';
                                r16 = r1;
                                r0 = new r16[r4](r15, r14, r13);
                                r1 = r0 instanceof Object ? r0 : r1;
                                r0 = undefined;
                                r0 = r2.bind(r0)(r1);
                                return r0;
                            }
                        };
                        r4 = r1;
                        r0 = new r4[r2](r3, r2);
                        r0 = r0 instanceof Object ? r0 : r1;
                        return r0;
                    };
                    r2 = global;
                    r1 = r2.globalThis;
                    r1 = typeof r1;
                    r13 = 'undefined';
                    r12 = r1 !== r13;
                    if(!r12) { _fun2214_ip = 207; continue _fun2214 }
case 201:
                    r12 = r2.globalThis;
case 207:
                    if(r12) { _fun2214_ip = 235; continue _fun2214 }
case 210:
                    r1 = r2.self;
                    r1 = typeof r1;
                    r1 = r1 !== r13;
                    if(!r1) { _fun2214_ip = 232; continue _fun2214 }
case 226:
                    r1 = r2.self;
case 232:
                    r12 = r1;
case 235:
                    if(r12) { _fun2214_ip = 262; continue _fun2214 }
case 238:
                    r1 = _closure1_slot0;
                    r1 = typeof r1;
                    r1 = r1 !== r13;
                    if(!r1) { _fun2214_ip = 259; continue _fun2214 }
case 255:
                    r1 = _closure1_slot0;
case 259:
                    r12 = r1;
case 262:
                    if(r12) { _fun2214_ip = 267; continue _fun2214 }
case 265:
                    r12 = {};
case 267:
                    r8 = r12;
                    var _closure2_slot1 = r12;
                    r1 = {};
                    r11 = 'URLSearchParams';
                    r11 = r11 in r12;
                    r1['searchParams'] = r11;
                    r11 = 'Symbol';
                    r11 = r11 in r12;
                    if(!r11) { _fun2214_ip = 314; continue _fun2214 }
case 300:
                    r13 = r2.Symbol;
                    r12 = 'iterator';
                    r11 = r12 in r13;
case 314:
                    r1['iterable'] = r11;
                    r12 = r8;
                    r11 = 'FileReader';
                    r11 = r11 in r12;
                    if(!r11) { _fun2214_ip = 344; continue _fun2214 }
case 333:
                    r13 = r8;
                    r12 = 'Blob';
                    r11 = r12 in r13;
case 344:
                    if(!r11) { _fun2214_ip = 377; continue _fun2214 }
case 347: // try_start_0
                    r13 = r2.Blob;
                    r12 = r13.prototype;
                    r17 = Object.create(r12, {constructor: {value: r13}});
                    r12 = new r17[r13](r16);
case 366: // try_end0
                    r12 = true;
                    _fun2214_ip = 374; continue _fun2214;
case 370: // catch_target0
                    CatchBlockStart(arg_register=13);
                    r12 = false;
case 374:
                    r11 = r12;
case 377:
                    r1['blob'] = r11;
                    r12 = r8;
                    r11 = 'FormData';
                    r11 = r11 in r12;
                    r1['formData'] = r11;
                    r11 = 'ArrayBuffer';
                    r11 = r11 in r12;
                    r1['arrayBuffer'] = r11;
                    var _closure2_slot2 = r1;
                    r11 = r1.arrayBuffer;
                    if(!r11) { _fun2214_ip = 460; continue _fun2214 }
case 424:
                    r11 = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];
                    var _closure2_slot3 = r11;
                    r11 = r2.ArrayBuffer;
                    r11 = r11.isView;
                    if(r11) { _fun2214_ip = 456; continue _fun2214 }
case 451:
                    r11 = function(a0) { // Environment: r9
                        _fun2264: for(var _fun2264_ip = 0; ; ) switch(_fun2264_ip) {
case 0:
                            r5 = a0;
                            r0 = r5;
                            if(!r0) { _fun2264_ip = 64; continue _fun2264 }
case 9:
                            r3 = _closure2_slot3;
                            r2 = r3.indexOf;
                            r1 = global;
                            r1 = r1.Object;
                            r1 = r1.prototype;
                            r4 = r1.toString;
                            r1 = r4.call;
                            r1 = r1.bind(r4)(r5);
                            r2 = r2.bind(r3)(r1);
                            r1 = -1;
                            r0 = r2 > r1;
case 64:
                            return r0;
                        }
                    };
case 456:
                    var _closure2_slot4 = r11;
case 460:
                    r11 = r7;
                    r13 = r11.prototype;
                    r12 = function(a0, a1) { // Environment: r9
                        _fun2265: for(var _fun2265_ip = 0; ; ) switch(_fun2265_ip) {
case 0:
                            r1 = this;
                            r4 = _closure2_slot8;
                            r0 = undefined;
                            r3 = a0;
                            r3 = r4.bind(r0)(r3);
                            r4 = _closure2_slot9;
                            r2 = a1;
                            r5 = r4.bind(r0)(r2);
                            r2 = r1.map;
                            r6 = r2[r3];
                            r2 = r1.map;
                            r1 = r5;
                            if(!r6) { _fun2265_ip = 64; continue _fun2265 }
case 52:
                            r4 = ', ';
                            r4 = r6 + r4;
                            r1 = r4 + r5;
case 64:
                            r2[r3] = r1;
                            return r0;
                        }
                    };
                    r13['append'] = r12;
                    r13 = r11.prototype;
                    r12 = function(a0) { // Environment: r9
                        r0 = this;
                        r2 = r0.map;
                        r3 = _closure2_slot8;
                        r0 = undefined;
                        r1 = a0;
                        r1 = r3.bind(r0)(r1);
                        r1 = delete r2[r1];
                        return r0;
                    };
                    r13['delete'] = r12;
                    r13 = r11.prototype;
                    r12 = function(a0) { // Environment: r9
                        _fun2267: for(var _fun2267_ip = 0; ; ) switch(_fun2267_ip) {
case 0:
                            r1 = this;
                            r3 = _closure2_slot8;
                            r2 = undefined;
                            r0 = a0;
                            r2 = r3.bind(r2)(r0);
                            r0 = r1.has;
                            r3 = r0.bind(r1)(r2);
                            r0 = null;
                            if(!r3) { _fun2267_ip = 44; continue _fun2267 }
case 35:
                            r1 = r1.map;
                            r0 = r1[r2];
case 44:
                            return r0;
                        }
                    };
                    r13['get'] = r12;
                    r13 = r11.prototype;
                    r12 = function(a0) { // Environment: r9
                        r0 = this;
                        r2 = r0.map;
                        r1 = r2.hasOwnProperty;
                        r4 = _closure2_slot8;
                        r3 = undefined;
                        r0 = a0;
                        r0 = r4.bind(r3)(r0);
                        r0 = r1.bind(r2)(r0);
                        return r0;
                    };
                    r13['has'] = r12;
                    r13 = r11.prototype;
                    r12 = function(a0, a1) { // Environment: r9
                        r0 = this;
                        r3 = r0.map;
                        r4 = _closure2_slot8;
                        r0 = undefined;
                        r2 = a0;
                        r2 = r4.bind(r0)(r2);
                        r4 = _closure2_slot9;
                        r1 = a1;
                        r1 = r4.bind(r0)(r1);
                        r3[r2] = r1;
                        return r0;
                    };
                    r13['set'] = r12;
                    r13 = r11.prototype;
                    r12 = function(a0, a1) { // Environment: r9
                        _fun2270: for(var _fun2270_ip = 0; ; ) switch(_fun2270_ip) {
case 0:
                            r7 = a0;
                            r6 = a1;
                            r5 = this;
                            r3 = r5.map;
                            for(r0 in r3)
case 22:
                            {
case 31:
                                r10 = r0;
                                r9 = r5.map;
                                r8 = r9.hasOwnProperty;
                                r8 = r8.bind(r9)(r10);
                                if(!r8) { _fun2270_ip = 22; continue _fun2270 }
case 52:
                                r9 = r7.call;
                                r8 = r5.map;
                                r13 = r8[r10];
                                r15 = r7;
                                r14 = r6;
                                r12 = r10;
                                r11 = r5;
                                r8 = r15[r9](r14, r13, r12, r11, r10);
                                _fun2270_ip = 22; continue _fun2270;
                            }
case 84:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r13['forEach'] = r12;
                    r13 = r11.prototype;
                    r12 = function() { // Environment: r9
                        r3 = this;
                        r2 = new Array(0);
                        var _closure3_slot0 = r2;
                        r1 = r3.forEach;
                        r0 = function(a0, a1) { // Environment: r0
                            r2 = _closure3_slot0;
                            r1 = r2.push;
                            r0 = a1;
                            r0 = r1.bind(r2)(r0);
                            r0 = undefined;
                            return r0;
                        };
                        r0 = r1.bind(r3)(r0);
                        r1 = _closure2_slot10;
                        r0 = undefined;
                        r0 = r1.bind(r0)(r2);
                        return r0;
                    };
                    r13['keys'] = r12;
                    r13 = r11.prototype;
                    r12 = function() { // Environment: r9
                        r3 = this;
                        r2 = new Array(0);
                        var _closure3_slot0 = r2;
                        r1 = r3.forEach;
                        r0 = function(a0) { // Environment: r0
                            r2 = _closure3_slot0;
                            r1 = r2.push;
                            r0 = a0;
                            r0 = r1.bind(r2)(r0);
                            r0 = undefined;
                            return r0;
                        };
                        r0 = r1.bind(r3)(r0);
                        r1 = _closure2_slot10;
                        r0 = undefined;
                        r0 = r1.bind(r0)(r2);
                        return r0;
                    };
                    r13['values'] = r12;
                    r12 = r11.prototype;
                    r11 = function() { // Environment: r9
                        r3 = this;
                        r2 = new Array(0);
                        var _closure3_slot0 = r2;
                        r1 = r3.forEach;
                        r0 = function(a0, a1) { // Environment: r0
                            r2 = _closure3_slot0;
                            r1 = r2.push;
                            r0 = new Array(2);
                            r3 = a1;
                            r0[0] = r3;
                            r3 = a0;
                            r0[1] = r3;
                            r0 = r1.bind(r2)(r0);
                            r0 = undefined;
                            return r0;
                        };
                        r0 = r1.bind(r3)(r0);
                        r1 = _closure2_slot10;
                        r0 = undefined;
                        r0 = r1.bind(r0)(r2);
                        return r0;
                    };
                    r12['entries'] = r11;
                    r1 = r1.iterable;
                    if(!r1) { _fun2214_ip = 650; continue _fun2214 }
case 616:
                    r1 = r7;
                    r12 = r1.prototype;
                    r11 = r2.Symbol;
                    r11 = r11.iterator;
                    r1 = r1.prototype;
                    r1 = r1.entries;
                    r12[r11] = r1;
case 650:
                    r1 = ['CONNECT', 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT', 'TRACE'];
                    var _closure2_slot5 = r1;
                    r1 = r6;
                    r12 = r1.prototype;
                    r11 = function() { // Environment: r9
                        r3 = this;
                        r2 = _closure2_slot19;
                        r0 = {};
                        r1 = r3._bodyInit;
                        r0['body'] = r1;
                        r1 = r2.prototype;
                        r1 = Object.create(r1, {constructor: {value: r2}});
                        r6 = r1;
                        r5 = r3;
                        r4 = r0;
                        r0 = new r6[r2](r5, r4, r3);
                        r0 = r0 instanceof Object ? r0 : r1;
                        return r0;
                    };
                    r12['clone'] = r11;
                    r12 = r10;
                    r10 = r12.call;
                    r1 = r1.prototype;
                    r1 = r10.bind(r12)(r1);
                    r11 = r12.call;
                    r10 = r4;
                    r1 = r10.prototype;
                    r1 = r11.bind(r12)(r1);
                    r11 = r10.prototype;
                    r1 = function() { // Environment: r9
                        r1 = this;
                        r3 = _closure2_slot22;
                        r2 = r1._bodyInit;
                        r0 = {};
                        r5 = r1.status;
                        r0['status'] = r5;
                        r5 = r1.statusText;
                        r0['statusText'] = r5;
                        r6 = _closure2_slot11;
                        r8 = r1.headers;
                        r5 = r6.prototype;
                        r5 = Object.create(r5, {constructor: {value: r6}});
                        r9 = r5;
                        r4 = new r9[r6](r8, r7);
                        r4 = r4 instanceof Object ? r4 : r5;
                        r0['headers'] = r4;
                        r1 = r1.url;
                        r0['url'] = r1;
                        r1 = r3.prototype;
                        r1 = Object.create(r1, {constructor: {value: r3}});
                        r9 = r1;
                        r8 = r2;
                        r7 = r0;
                        r0 = new r9[r3](r8, r7, r6);
                        r0 = r0 instanceof Object ? r0 : r1;
                        return r0;
                    };
                    r11['clone'] = r1;
                    r1 = function() { // Environment: r9
                        r3 = _closure2_slot22;
                        r0 = r3.prototype;
                        r1 = Object.create(r0, {constructor: {value: r3}});
                        r5 = null;
                        r4 = {'status': 200, 'statusText': ''};
                        r6 = r1;
                        r0 = new r6[r3](r5, r4, r3);
                        r0 = r0 instanceof Object ? r0 : r1;
                        r1 = false;
                        r0['ok'] = r1;
                        r1 = 0;
                        r0['status'] = r1;
                        r1 = 'error';
                        r0['type'] = r1;
                        return r0;
                    };
                    r10['error'] = r1;
                    r1 = [301, 302, 303, 307, 308];
                    var _closure2_slot6 = r1;
                    r1 = function(a0, a1) { // Environment: r9
                        _fun2280: for(var _fun2280_ip = 0; ; ) switch(_fun2280_ip) {
case 0:
                            r0 = a1;
                            r3 = _closure2_slot6;
                            r2 = r3.indexOf;
                            r3 = r2.bind(r3)(r0);
                            r2 = -1;
                            if(!(r3 !== r2)) { _fun2280_ip = 81; continue _fun2280 }
case 30:
                            r3 = _closure2_slot22;
                            r2 = {};
                            r2['status'] = r0;
                            r0 = {};
                            r1 = a0;
                            r0['location'] = r1;
                            r2['headers'] = r0;
                            r0 = r3.prototype;
                            r1 = Object.create(r0, {constructor: {value: r3}});
                            r5 = null;
                            r6 = r1;
                            r4 = r2;
                            r0 = new r6[r3](r5, r4, r3);
                            r0 = r0 instanceof Object ? r0 : r1;
                            return r0;
case 81:
                            r0 = global;
                            r2 = r0.RangeError;
                            r0 = r2.prototype;
                            r1 = Object.create(r0, {constructor: {value: r2}});
                            r5 = 'Invalid status code';
                            r6 = r1;
                            r0 = new r6[r2](r5, r4);
                            r0 = r0 instanceof Object ? r0 : r1;
                            throw r0;
                        }
                    };
                    r10['redirect'] = r1;
                    r10 = r5;
                    r1 = r8;
                    r1 = r1.DOMException;
                    r10['DOMException'] = r1;
case 785: // try_start_1
                    r1 = r5;
                    r10 = r1.DOMException;
                    r1 = r10.prototype;
                    r17 = Object.create(r1, {constructor: {value: r10}});
                    r1 = new r17[r10](r16);
case 807: // try_end1
                    _fun2214_ip = 887; continue _fun2214;
case 809: // catch_target1
                    CatchBlockStart(arg_register=1);
                    r1 = r5;
                    r9 = function(a0, a1) { // Environment: r9
                        r3 = a0;
                        r2 = this;
                        r2['message'] = r3;
                        r0 = a1;
                        r2['name'] = r0;
                        r0 = global;
                        r1 = r0.Error;
                        r0 = undefined;
                        r1 = r1.bind(r0)(r3);
                        r1 = r1.stack;
                        r2['stack'] = r1;
                        return r0;
                    };
                    r1['DOMException'] = r9;
                    r10 = r1.DOMException;
                    r12 = r2.Object;
                    r11 = r12.create;
                    r9 = r2.Error;
                    r9 = r9.prototype;
                    r9 = r11.bind(r12)(r9);
                    r10['prototype'] = r9;
                    r9 = r1.DOMException;
                    r9 = r9.prototype;
                    r1 = r1.DOMException;
                    r9['constructor'] = r1;
case 887:
                    r9 = r3;
                    r1 = true;
                    r9['polyfill'] = r1;
                    r9 = r8;
                    r9 = r9.fetch;
                    if(r9) { _fun2214_ip = 949; continue _fun2214 }
case 910:
                    r9 = r8;
                    r8 = r3;
                    r9['fetch'] = r8;
                    r8 = r7;
                    r9['Headers'] = r8;
                    r8 = r6;
                    r9['Request'] = r8;
                    r8 = r4;
                    r9['Response'] = r8;
case 949:
                    r5['Headers'] = r7;
                    r5['Request'] = r6;
                    r5['Response'] = r4;
                    r5['fetch'] = r3;
                    r4 = r2.Object;
                    r3 = r4.defineProperty;
                    r2 = {};
                    r2['value'] = r1;
                    r1 = '__esModule';
                    r1 = r3.bind(r4)(r5, r1, r2);
                    return r0;
                }
            };
            r3 = typeof r2;
            r0 = 'object';
            if(!(r3 === r0)) { _fun2213_ip = 42; continue _fun2213 }
case 28:
            r0 = a4;
            r3 = typeof r0;
            r0 = 'undefined';
            if(!(r3 === r0)) { _fun2213_ip = 119; continue _fun2213 }
case 42:
            r0 = global;
            r3 = r0.define;
            r4 = typeof r3;
            r3 = 'function';
            if(!(r4 === r3)) { _fun2213_ip = 76; continue _fun2213 }
case 61:
            r3 = r0.define;
            r3 = r3.amd;
            if(r3) { _fun2213_ip = 95; continue _fun2213 }
case 76:
            r4 = {};
            r3 = this;
            r3['WHATWGFetch'] = r4;
            r3 = undefined;
            r3 = r1.bind(r3)(r4);
            _fun2213_ip = 126; continue _fun2213;
case 95:
            r4 = r0.define;
            r3 = undefined;
            r0 = ['exports'];
            r0 = r4.bind(r3)(r0, r1);
            _fun2213_ip = 126; continue _fun2213;
case 119:
            r0 = undefined;
            r0 = r1.bind(r0)(r2);
case 126:
            r0 = undefined;
            return r0;
        }
    };
    r6 = 200;
    r5 = new Array(0);
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun2282: for(var _fun2282_ip = 0; ; ) switch(_fun2282_ip) {
case 0:
            r6 = a0;
            r4 = a1;
            r2 = a5;
            r5 = a6;
            r0 = global;
            r7 = r0.Object;
            r3 = r7.defineProperty;
            r1 = {};
            r0 = true;
            r1['value'] = r0;
            r0 = '__esModule';
            r0 = r3.bind(r7)(r2, r0, r1);
            r0 = undefined;
            r2['default'] = r0;
            r3 = r6.RN$useBuiltInEventTarget;
            r1 = null;
            r3 = r3 == r1;
            r1 = undefined;
            if(r3) { _fun2282_ip = 79; continue _fun2282 }
case 69:
            r3 = r6.RN$useBuiltInEventTarget;
            r1 = r3.bind(r6)();
case 79:
            if(r1) { _fun2282_ip = 101; continue _fun2282 }
case 82:
            r1 = 1;
            r1 = r5[r1];
            r1 = r4.bind(r0)(r1);
            r1 = r1.default;
            _fun2282_ip = 117; continue _fun2282;
case 101:
            r3 = 0;
            r3 = r5[r3];
            r3 = r4.bind(r0)(r3);
            r1 = r3.default;
case 117:
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 201;
    r5 = [202, 209];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r10 = a1;
        r2 = a5;
        r11 = a6;
        var _closure1_slot0 = r10;
        var _closure1_slot1 = r11;
        r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
            _fun2284: for(var _fun2284_ip = 0; ; ) switch(_fun2284_ip) {
case 0:
                r3 = a0;
                r0 = _closure1_slot6;
                r1 = r0.default;
                r2 = undefined;
                r0 = a1;
                r8 = r1.bind(r2)(r0);
                r0 = _closure1_slot5;
                r1 = r0.default;
                r0 = _closure1_slot22;
                r0 = r0.bind(r2)();
                if(r0) { _fun2284_ip = 58; continue _fun2284 }
case 45:
                r0 = r8.apply;
                r0 = r0.bind(r8)(r3, r2);
                _fun2284_ip = 101; continue _fun2284;
case 58:
                r5 = global;
                r7 = r5.Reflect;
                r6 = r7.construct;
                r5 = new Array(0);
                r4 = _closure1_slot6;
                r4 = r4.default;
                r4 = r4.bind(r2)(r3);
                r4 = r4.constructor;
                r0 = r6.bind(r7)(r8, r5, r4);
case 101:
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            }
        };
        var _closure1_slot21 = r0;
        r0 = function() { // Original name: _isNativeReflectConstruct, environment: r1
            _fun2285: for(var _fun2285_ip = 0; ; ) switch(_fun2285_ip) {
case 0:
case 2: // try_start_0
                r1 = global;
                r2 = r1.Boolean;
                r2 = r2.prototype;
                r3 = r2.valueOf;
                r2 = r3.call;
                r7 = r1.Reflect;
                r6 = r7.construct;
                r5 = r1.Boolean;
                r4 = new Array(0);
                r1 = function() { // Environment: r0
                    r0 = undefined;
                    return r0;
                };
                r1 = r6.bind(r7)(r5, r4, r1);
                r1 = r2.bind(r3)(r1);
                r1 = !r1;
                var _closure2_slot0 = r1;
case 70: // try_end0
                _fun2285_ip = 74; continue _fun2285;
case 72: // catch_target0
                CatchBlockStart(arg_register=1);
case 74:
                r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                    r0 = _closure2_slot0;
                    r0 = !r0;
                    r0 = !r0;
                    return r0;
                };
                _closure1_slot22 = r1;
                r0 = undefined;
                r0 = r1.bind(r0)();
                return r0;
            }
        };
        var _closure1_slot22 = r0;
        r6 = 0;
        r3 = r11[r6];
        r0 = undefined;
        r9 = r10.bind(r0)(r3);
        r3 = global;
        r7 = r3.Object;
        r5 = r7.defineProperty;
        r4 = {};
        r3 = true;
        r4['value'] = r3;
        r3 = '__esModule';
        r3 = r5.bind(r7)(r2, r3, r4);
        r2['default'] = r0;
        r5 = 1;
        r3 = r11[r5];
        r3 = r10.bind(r0)(r3);
        r3 = r9.bind(r0)(r3);
        var _closure1_slot2 = r3;
        r4 = 2;
        r3 = r11[r4];
        r3 = r10.bind(r0)(r3);
        r3 = r9.bind(r0)(r3);
        var _closure1_slot3 = r3;
        r3 = 3;
        r7 = r11[r3];
        r7 = r10.bind(r0)(r7);
        r7 = r9.bind(r0)(r7);
        var _closure1_slot4 = r7;
        r7 = 4;
        r7 = r11[r7];
        r7 = r10.bind(r0)(r7);
        r7 = r9.bind(r0)(r7);
        var _closure1_slot5 = r7;
        r7 = 5;
        r7 = r11[r7];
        r7 = r10.bind(r0)(r7);
        r7 = r9.bind(r0)(r7);
        var _closure1_slot6 = r7;
        r7 = 6;
        r7 = r11[r7];
        r7 = r10.bind(r0)(r7);
        r7 = r9.bind(r0)(r7);
        var _closure1_slot7 = r7;
        r7 = 7;
        r7 = r11[r7];
        r7 = r10.bind(r0)(r7);
        r7 = r9.bind(r0)(r7);
        var _closure1_slot8 = r7;
        r7 = 8;
        r7 = r11[r7];
        r7 = r10.bind(r0)(r7);
        r7 = r9.bind(r0)(r7);
        r8 = 9;
        r8 = r11[r8];
        r8 = r10.bind(r0)(r8);
        r8 = r9.bind(r0)(r8);
        var _closure1_slot9 = r8;
        r8 = 10;
        r8 = r11[r8];
        r8 = r10.bind(r0)(r8);
        r8 = r9.bind(r0)(r8);
        var _closure1_slot10 = r8;
        r8 = 11;
        r8 = r11[r8];
        r8 = r10.bind(r0)(r8);
        r8 = r9.bind(r0)(r8);
        var _closure1_slot11 = r8;
        r8 = 12;
        r8 = r11[r8];
        r8 = r10.bind(r0)(r8);
        r8 = r9.bind(r0)(r8);
        var _closure1_slot12 = r8;
        r8 = 13;
        r8 = r11[r8];
        r8 = r10.bind(r0)(r8);
        r8 = r9.bind(r0)(r8);
        var _closure1_slot13 = r8;
        r8 = 14;
        r8 = r11[r8];
        r8 = r10.bind(r0)(r8);
        r8 = r9.bind(r0)(r8);
        var _closure1_slot14 = r8;
        r8 = 15;
        r8 = r11[r8];
        r8 = r10.bind(r0)(r8);
        r8 = r9.bind(r0)(r8);
        var _closure1_slot15 = r8;
        r8 = 16;
        r8 = r11[r8];
        r8 = r10.bind(r0)(r8);
        r8 = r9.bind(r0)(r8);
        var _closure1_slot16 = r8;
        r8 = 17;
        r8 = r11[r8];
        r8 = r10.bind(r0)(r8);
        r8 = r9.bind(r0)(r8);
        var _closure1_slot17 = r8;
        r8 = 18;
        r8 = r11[r8];
        r8 = r10.bind(r0)(r8);
        r8 = r9.bind(r0)(r8);
        var _closure1_slot18 = r8;
        r8 = ['headers'];
        var _closure1_slot19 = r8;
        var _closure1_slot20 = r6;
        r7 = r7.default;
        r1 = function(a0) { // Environment: r1
            r3 = function(a0, a1, a2) { // Original name: WebSocket, environment: r5
                _fun2289: for(var _fun2289_ip = 0; ; ) switch(_fun2289_ip) {
case 0:
                    r6 = a0;
                    r3 = a1;
                    r10 = a2;
                    r4 = this;
                    r0 = _closure1_slot3;
                    r0 = r0.default;
                    r1 = _closure2_slot0;
                    r9 = undefined;
                    r0 = r0.bind(r9)(r4, r1);
                    r0 = _closure1_slot21;
                    r0 = r0.bind(r9)(r4, r1);
                    r7 = 0;
                    r0['CONNECTING'] = r7;
                    r1 = 1;
                    r0['OPEN'] = r1;
                    r1 = 2;
                    r0['CLOSING'] = r1;
                    r1 = 3;
                    r0['CLOSED'] = r1;
                    r0['readyState'] = r7;
                    r0['url'] = r6;
                    r1 = typeof r3;
                    r5 = 'string';
                    r4 = r3;
                    if(!(r1 === r5)) { _fun2289_ip = 120; continue _fun2289 }
case 109:
                    r1 = new Array(1);
                    r1[0] = r3;
                    r4 = r1;
case 120:
                    if(r10) { _fun2289_ip = 125; continue _fun2289 }
case 123:
                    r10 = {};
case 125:
                    r1 = r10.headers;
                    if(!(r1 === r9)) { _fun2289_ip = 136; continue _fun2289 }
case 134:
                    r1 = {};
case 136:
                    r3 = _closure1_slot2;
                    r8 = r3.default;
                    r3 = _closure1_slot19;
                    r10 = r8.bind(r9)(r10, r3);
                    if(!r10) { _fun2289_ip = 210; continue _fun2289 }
case 158:
                    r3 = r10.origin;
                    r3 = typeof r3;
                    if(!(r3 === r5)) { _fun2289_ip = 210; continue _fun2289 }
case 171:
                    r3 = global;
                    r8 = r3.console;
                    r5 = r8.warn;
                    r3 = 'Specifying `origin` as a WebSocket connection option is deprecated. Include it under `headers` instead.';
                    r3 = r5.bind(r8)(r3);
                    r3 = r10.origin;
                    r1['origin'] = r3;
                    r3 = delete r10.origin;
case 210:
                    r3 = global;
                    r8 = r3.Object;
                    r5 = r8.keys;
                    r5 = r5.bind(r8)(r10);
                    r5 = r5.length;
                    if(!(r5 > r7)) { _fun2289_ip = 307; continue _fun2289 }
case 237:
                    r8 = r3.console;
                    r7 = r8.warn;
                    r9 = r3.Object;
                    r5 = r9.keys;
                    r10 = r5.bind(r9)(r10);
                    r9 = r10.join;
                    r5 = '`, `';
                    r9 = r9.bind(r10)(r5);
                    r5 = 'Unrecognized WebSocket connection option(s) `';
                    r9 = r5 + r9;
                    r5 = '`. ';
                    r9 = r9 + r5;
                    r5 = 'Did you mean to put these under `headers`?';
                    r5 = r9 + r5;
                    r5 = r7.bind(r8)(r5);
case 307:
                    r5 = r3.Array;
                    r3 = r5.isArray;
                    r3 = r3.bind(r5)(r4);
                    r5 = r4;
                    if(r3) { _fun2289_ip = 331; continue _fun2289 }
case 329:
                    r5 = null;
case 331:
                    r3 = _closure1_slot13;
                    r7 = r3.default;
                    r3 = _closure1_slot15;
                    r3 = r3.default;
                    r8 = r3.OS;
                    r4 = 'ios';
                    r3 = null;
                    if(!(r8 === r4)) { _fun2289_ip = 373; continue _fun2289 }
case 364:
                    r4 = _closure1_slot16;
                    r3 = r4.default;
case 373:
                    r4 = r7.prototype;
                    r4 = Object.create(r4, {constructor: {value: r7}});
                    r15 = r4;
                    r14 = r3;
                    r3 = new r15[r7](r14, r13);
                    r3 = r3 instanceof Object ? r3 : r4;
                    r0['_eventEmitter'] = r3;
                    r3 = _closure1_slot20;
                    r3 = parseFloat(r3);
                    r4 = r3 + 1;
                    _closure1_slot20 = r4;
                    r0['_socketId'] = r3;
                    r3 = r0._registerEvents;
                    r3 = r3.bind(r0)();
                    r2 = _closure1_slot16;
                    r4 = r2.default;
                    r3 = r4.connect;
                    r2 = {};
                    r2['headers'] = r1;
                    r11 = r0._socketId;
                    r15 = r4;
                    r14 = r6;
                    r13 = r5;
                    r12 = r2;
                    r1 = r15[r3](r14, r13, r12, r11, r10);
                    return r0;
                }
            };
            var _closure2_slot0 = r3;
            r1 = _closure1_slot7;
            r4 = r1.default;
            r2 = undefined;
            r1 = a0;
            r1 = r4.bind(r2)(r3, r1);
            r0 = _closure1_slot4;
            r1 = r0.default;
            r4 = {};
            r0 = 'binaryType';
            r4['key'] = r0;
            r0 = function() { // Original name: get, environment: r5
                r0 = this;
                r0 = r0._binaryType;
                return r0;
            };
            r4['get'] = r0;
            r0 = function(a0) { // Original name: set, environment: r5
                _fun2291: for(var _fun2291_ip = 0; ; ) switch(_fun2291_ip) {
case 0:
                    r1 = a0;
                    r0 = this;
                    r3 = 'blob';
                    if(!(r1 !== r3)) { _fun2291_ip = 21; continue _fun2291 }
case 13:
                    r2 = 'arraybuffer';
                    if(!(r1 === r2)) { _fun2291_ip = 140; continue _fun2291 }
case 21:
                    r2 = r0._binaryType;
                    if(!(r2 !== r3)) { _fun2291_ip = 35; continue _fun2291 }
case 31:
                    if(!(r1 === r3)) { _fun2291_ip = 130; continue _fun2291 }
case 35:
                    r4 = _closure1_slot18;
                    r7 = r4.default;
                    r4 = _closure1_slot12;
                    r4 = r4.default;
                    r6 = r4.isAvailable;
                    r5 = undefined;
                    r4 = 'Native module BlobModule is required for blob support';
                    r4 = r7.bind(r5)(r6, r4);
                    if(!(r1 !== r3)) { _fun2291_ip = 105; continue _fun2291 }
case 78:
                    r3 = _closure1_slot12;
                    r5 = r3.default;
                    r4 = r5.removeWebSocketHandler;
                    r3 = r0._socketId;
                    r3 = r4.bind(r5)(r3);
                    _fun2291_ip = 130; continue _fun2291;
case 105:
                    r2 = _closure1_slot12;
                    r4 = r2.default;
                    r3 = r4.addWebSocketHandler;
                    r2 = r0._socketId;
                    r2 = r3.bind(r4)(r2);
case 130:
                    r0['_binaryType'] = r1;
                    r0 = undefined;
                    return r0;
case 140:
                    r0 = global;
                    r2 = r0.Error;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r9 = "binaryType must be either 'blob' or 'arraybuffer'";
                    r10 = r1;
                    r0 = new r10[r2](r9, r8);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                }
            };
            r4['set'] = r0;
            r0 = new Array(11);
            r0[0] = r4;
            r4 = {};
            r6 = 'close';
            r4['key'] = r6;
            r6 = function(a0, a1) { // Original name: close, environment: r5
                _fun2292: for(var _fun2292_ip = 0; ; ) switch(_fun2292_ip) {
case 0:
                    r3 = this;
                    r1 = r3.readyState;
                    r0 = r3.CLOSING;
                    if(!(r1 !== r0)) { _fun2292_ip = 66; continue _fun2292 }
case 17:
                    r1 = r3.readyState;
                    r0 = r3.CLOSED;
                    if(!(r1 !== r0)) { _fun2292_ip = 66; continue _fun2292 }
case 32:
                    r0 = r3.CLOSING;
                    r3['readyState'] = r0;
                    r2 = r3._close;
                    r1 = a0;
                    r0 = a1;
                    r0 = r2.bind(r3)(r1, r0);
                    r0 = undefined;
                    return r0;
case 66:
                    r0 = undefined;
                    return r0;
                }
            };
            r4['value'] = r6;
            r0[1] = r4;
            r4 = {};
            r6 = 'send';
            r4['key'] = r6;
            r6 = function(a0) { // Original name: send, environment: r5
                _fun2293: for(var _fun2293_ip = 0; ; ) switch(_fun2293_ip) {
case 0:
                    r4 = a0;
                    r1 = this;
                    r2 = r1.readyState;
                    r0 = r1.CONNECTING;
                    if(!(r2 !== r0)) { _fun2293_ip = 257; continue _fun2293 }
case 23:
                    r2 = _closure1_slot11;
                    r2 = r2.default;
                    r2 = r4 instanceof r2;
                    if(r2) { _fun2293_ip = 197; continue _fun2293 }
case 45:
                    r3 = typeof r4;
                    r2 = 'string';
                    if(!(r3 !== r2)) { _fun2293_ip = 167; continue _fun2293 }
case 56:
                    r2 = global;
                    r3 = r2.ArrayBuffer;
                    r3 = r4 instanceof r3;
                    if(r3) { _fun2293_ip = 123; continue _fun2293 }
case 71:
                    r5 = r2.ArrayBuffer;
                    r3 = r5.isView;
                    r3 = r3.bind(r5)(r4);
                    if(r3) { _fun2293_ip = 123; continue _fun2293 }
case 91:
                    r5 = r2.Error;
                    r2 = r5.prototype;
                    r3 = Object.create(r2, {constructor: {value: r5}});
                    r9 = 'Unsupported data type';
                    r10 = r3;
                    r2 = new r10[r5](r9, r8);
                    r2 = r2 instanceof Object ? r2 : r3;
                    throw r2;
case 123:
                    r2 = _closure1_slot16;
                    r7 = r2.default;
                    r6 = r7.sendBinary;
                    r2 = _closure1_slot14;
                    r3 = r2.default;
                    r2 = undefined;
                    r5 = r3.bind(r2)(r4);
                    r3 = r1._socketId;
                    r3 = r6.bind(r7)(r5, r3);
                    return r2;
case 167:
                    r2 = _closure1_slot16;
                    r5 = r2.default;
                    r3 = r5.send;
                    r2 = r1._socketId;
                    r2 = r3.bind(r5)(r4, r2);
                    r2 = undefined;
                    return r2;
case 197:
                    r2 = _closure1_slot18;
                    r6 = r2.default;
                    r2 = _closure1_slot12;
                    r0 = r2.default;
                    r5 = r0.isAvailable;
                    r0 = undefined;
                    r3 = 'Native module BlobModule is required for blob support';
                    r3 = r6.bind(r0)(r5, r3);
                    r3 = r2.default;
                    r2 = r3.sendOverSocket;
                    r1 = r1._socketId;
                    r1 = r2.bind(r3)(r4, r1);
                    return r0;
case 257:
                    r0 = global;
                    r2 = r0.Error;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r9 = 'INVALID_STATE_ERR';
                    r10 = r1;
                    r0 = new r10[r2](r9, r8);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                }
            };
            r4['value'] = r6;
            r0[2] = r4;
            r4 = {};
            r6 = 'ping';
            r4['key'] = r6;
            r6 = function() { // Original name: ping, environment: r5
                _fun2294: for(var _fun2294_ip = 0; ; ) switch(_fun2294_ip) {
case 0:
                    r0 = this;
                    r2 = r0.readyState;
                    r1 = r0.CONNECTING;
                    if(!(r2 !== r1)) { _fun2294_ip = 49; continue _fun2294 }
case 17:
                    r1 = _closure1_slot16;
                    r2 = r1.default;
                    r1 = r2.ping;
                    r0 = r0._socketId;
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
case 49:
                    r0 = global;
                    r2 = r0.Error;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r3 = 'INVALID_STATE_ERR';
                    r4 = r1;
                    r0 = new r4[r2](r3, r2);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                }
            };
            r4['value'] = r6;
            r0[3] = r4;
            r4 = {};
            r6 = '_close';
            r4['key'] = r6;
            r6 = function(a0, a1) { // Original name: _close, environment: r5
                _fun2295: for(var _fun2295_ip = 0; ; ) switch(_fun2295_ip) {
case 0:
                    r2 = a0;
                    r1 = a1;
                    r0 = this;
                    r6 = 1000;
                    r4 = typeof r2;
                    r3 = 'number';
                    if(!(r4 === r3)) { _fun2295_ip = 28; continue _fun2295 }
case 25:
                    r6 = r2;
case 28:
                    r5 = '';
                    r3 = typeof r1;
                    r2 = 'string';
                    if(!(r3 === r2)) { _fun2295_ip = 46; continue _fun2295 }
case 43:
                    r5 = r1;
case 46:
                    r2 = _closure1_slot16;
                    r4 = r2.default;
                    r3 = r4.close;
                    r2 = r0._socketId;
                    r2 = r3.bind(r4)(r6, r5, r2);
                    r2 = _closure1_slot12;
                    r2 = r2.default;
                    r2 = r2.isAvailable;
                    if(!r2) { _fun2295_ip = 133; continue _fun2295 }
case 94:
                    r3 = r0._binaryType;
                    r2 = 'blob';
                    if(!(r3 === r2)) { _fun2295_ip = 133; continue _fun2295 }
case 108:
                    r1 = _closure1_slot12;
                    r2 = r1.default;
                    r1 = r2.removeWebSocketHandler;
                    r0 = r0._socketId;
                    r0 = r1.bind(r2)(r0);
case 133:
                    r0 = undefined;
                    return r0;
                }
            };
            r4['value'] = r6;
            r0[4] = r4;
            r4 = {};
            r6 = '_unregisterEvents';
            r4['key'] = r6;
            r6 = function() { // Original name: _unregisterEvents, environment: r5
                r1 = this;
                r3 = r1._subscriptions;
                r2 = r3.forEach;
                r0 = function(a0) { // Environment: r0
                    r1 = a0;
                    r0 = r1.remove;
                    r0 = r0.bind(r1)();
                    return r0;
                };
                r0 = r2.bind(r3)(r0);
                r0 = new Array(0);
                r1['_subscriptions'] = r0;
                r0 = undefined;
                return r0;
            };
            r4['value'] = r6;
            r0[5] = r4;
            r4 = {};
            r6 = '_registerEvents';
            r4['key'] = r6;
            r6 = function() { // Original name: _registerEvents, environment: r5
                r1 = this;
                var _closure3_slot0 = r1;
                r5 = r1._eventEmitter;
                r4 = r5.addListener;
                r3 = 'websocketMessage';
                r0 = function(a0) { // Environment: r2
                    _fun2299: for(var _fun2299_ip = 0; ; ) switch(_fun2299_ip) {
case 0:
                        r2 = a0;
                        r3 = r2.id;
                        r0 = _closure3_slot0;
                        r0 = r0._socketId;
                        if(!(r3 === r0)) { _fun2299_ip = 180; continue _fun2299 }
case 27:
                        r0 = r2.data;
                        r4 = r2.type;
                        r3 = 'binary';
                        if(!(r3 !== r4)) { _fun2299_ip = 83; continue _fun2299 }
case 45:
                        r3 = 'blob';
                        if(!(r3 === r4)) { _fun2299_ip = 117; continue _fun2299 }
case 53:
                        r3 = _closure1_slot12;
                        r5 = r3.default;
                        r4 = r5.createFromOptions;
                        r3 = r2.data;
                        r0 = r4.bind(r5)(r3);
                        _fun2299_ip = 117; continue _fun2299;
case 83:
                        r3 = _closure1_slot17;
                        r4 = r3.default;
                        r3 = r4.toByteArray;
                        r2 = r2.data;
                        r2 = r3.bind(r4)(r2);
                        r0 = r2.buffer;
case 117:
                        r2 = _closure3_slot0;
                        r1 = r2.dispatchEvent;
                        r3 = _closure1_slot9;
                        r5 = r3.default;
                        r4 = {};
                        r4['data'] = r0;
                        r0 = r5.prototype;
                        r3 = Object.create(r0, {constructor: {value: r5}});
                        r7 = 'message';
                        r8 = r3;
                        r6 = r4;
                        r0 = new r8[r5](r7, r6, r5);
                        r0 = r0 instanceof Object ? r0 : r3;
                        r0 = r1.bind(r2)(r0);
                        r0 = undefined;
                        return r0;
case 180:
                        r0 = undefined;
                        return r0;
                    }
                };
                r3 = r4.bind(r5)(r3, r0);
                r0 = new Array(4);
                r0[0] = r3;
                r6 = r1._eventEmitter;
                r5 = r6.addListener;
                r4 = 'websocketOpen';
                r3 = function(a0) { // Environment: r2
                    _fun2300: for(var _fun2300_ip = 0; ; ) switch(_fun2300_ip) {
case 0:
                        r0 = a0;
                        r3 = r0.id;
                        r2 = _closure3_slot0;
                        r2 = r2._socketId;
                        if(!(r3 === r2)) { _fun2300_ip = 102; continue _fun2300 }
case 24:
                        r2 = _closure3_slot0;
                        r1 = r2.OPEN;
                        r2['readyState'] = r1;
                        r0 = r0.protocol;
                        r2['protocol'] = r0;
                        r1 = r2.dispatchEvent;
                        r0 = _closure1_slot8;
                        r4 = r0.default;
                        r0 = r4.prototype;
                        r3 = Object.create(r0, {constructor: {value: r4}});
                        r5 = 'open';
                        r6 = r3;
                        r0 = new r6[r4](r5, r4);
                        r0 = r0 instanceof Object ? r0 : r3;
                        r0 = r1.bind(r2)(r0);
                        r0 = undefined;
                        return r0;
case 102:
                        r0 = undefined;
                        return r0;
                    }
                };
                r3 = r5.bind(r6)(r4, r3);
                r0[1] = r3;
                r6 = r1._eventEmitter;
                r5 = r6.addListener;
                r4 = 'websocketClosed';
                r3 = function(a0) { // Environment: r2
                    _fun2301: for(var _fun2301_ip = 0; ; ) switch(_fun2301_ip) {
case 0:
                        r0 = a0;
                        r3 = r0.id;
                        r2 = _closure3_slot0;
                        r2 = r2._socketId;
                        if(!(r3 === r2)) { _fun2301_ip = 135; continue _fun2301 }
case 24:
                        r1 = _closure3_slot0;
                        r2 = r1.CLOSED;
                        r1['readyState'] = r2;
                        r2 = r1.dispatchEvent;
                        r3 = _closure1_slot10;
                        r5 = r3.default;
                        r4 = {};
                        r3 = r0.code;
                        r4['code'] = r3;
                        r0 = r0.reason;
                        r4['reason'] = r0;
                        r0 = r5.prototype;
                        r3 = Object.create(r0, {constructor: {value: r5}});
                        r7 = 'close';
                        r8 = r3;
                        r6 = r4;
                        r0 = new r8[r5](r7, r6, r5);
                        r0 = r0 instanceof Object ? r0 : r3;
                        r0 = r2.bind(r1)(r0);
                        r0 = r1._unregisterEvents;
                        r0 = r0.bind(r1)();
                        r0 = r1.close;
                        r0 = r0.bind(r1)();
                        r0 = undefined;
                        return r0;
case 135:
                        r0 = undefined;
                        return r0;
                    }
                };
                r3 = r5.bind(r6)(r4, r3);
                r0[2] = r3;
                r5 = r1._eventEmitter;
                r4 = r5.addListener;
                r3 = 'websocketFailed';
                r2 = function(a0) { // Environment: r2
                    _fun2302: for(var _fun2302_ip = 0; ; ) switch(_fun2302_ip) {
case 0:
                        r0 = a0;
                        r3 = r0.id;
                        r2 = _closure3_slot0;
                        r2 = r2._socketId;
                        if(!(r3 === r2)) { _fun2302_ip = 181; continue _fun2302 }
case 27:
                        r1 = _closure3_slot0;
                        r2 = r1.CLOSED;
                        r1['readyState'] = r2;
                        r4 = r1.dispatchEvent;
                        r2 = _closure1_slot8;
                        r6 = r2.default;
                        r2 = r6.prototype;
                        r5 = Object.create(r2, {constructor: {value: r6}});
                        r8 = 'error';
                        r9 = r5;
                        r2 = new r9[r6](r8, r7);
                        r2 = r2 instanceof Object ? r2 : r5;
                        r2 = r4.bind(r1)(r2);
                        r2 = r1.dispatchEvent;
                        r3 = _closure1_slot10;
                        r5 = r3.default;
                        r4 = {};
                        r3 = 1006;
                        r4['code'] = r3;
                        r0 = r0.message;
                        r4['reason'] = r0;
                        r0 = r5.prototype;
                        r3 = Object.create(r0, {constructor: {value: r5}});
                        r8 = 'close';
                        r9 = r3;
                        r7 = r4;
                        r0 = new r9[r5](r8, r7, r6);
                        r0 = r0 instanceof Object ? r0 : r3;
                        r0 = r2.bind(r1)(r0);
                        r0 = r1._unregisterEvents;
                        r0 = r0.bind(r1)();
                        r0 = r1.close;
                        r0 = r0.bind(r1)();
                        r0 = undefined;
                        return r0;
case 181:
                        r0 = undefined;
                        return r0;
                    }
                };
                r2 = r4.bind(r5)(r3, r2);
                r0[3] = r2;
                r1['_subscriptions'] = r0;
                r0 = undefined;
                return r0;
            };
            r4['value'] = r6;
            r0[6] = r4;
            r4 = {};
            r6 = 'onclose';
            r4['key'] = r6;
            r6 = function() { // Original name: get, environment: r5
                r1 = _closure1_slot0;
                r2 = _closure1_slot1;
                r0 = 19;
                r0 = r2[r0];
                r3 = undefined;
                r0 = r1.bind(r3)(r0);
                r2 = r0.getEventHandlerAttribute;
                r1 = this;
                r0 = 'close';
                r0 = r2.bind(r3)(r1, r0);
                return r0;
            };
            r4['get'] = r6;
            r6 = function(a0) { // Original name: set, environment: r5
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 19;
                r1 = r1[r0];
                r0 = undefined;
                r1 = r2.bind(r0)(r1);
                r4 = r1.setEventHandlerAttribute;
                r3 = this;
                r2 = 'close';
                r1 = a0;
                r1 = r4.bind(r0)(r3, r2, r1);
                return r0;
            };
            r4['set'] = r6;
            r0[7] = r4;
            r4 = {};
            r6 = 'onerror';
            r4['key'] = r6;
            r6 = function() { // Original name: get, environment: r5
                r1 = _closure1_slot0;
                r2 = _closure1_slot1;
                r0 = 19;
                r0 = r2[r0];
                r3 = undefined;
                r0 = r1.bind(r3)(r0);
                r2 = r0.getEventHandlerAttribute;
                r1 = this;
                r0 = 'error';
                r0 = r2.bind(r3)(r1, r0);
                return r0;
            };
            r4['get'] = r6;
            r6 = function(a0) { // Original name: set, environment: r5
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 19;
                r1 = r1[r0];
                r0 = undefined;
                r1 = r2.bind(r0)(r1);
                r4 = r1.setEventHandlerAttribute;
                r3 = this;
                r2 = 'error';
                r1 = a0;
                r1 = r4.bind(r0)(r3, r2, r1);
                return r0;
            };
            r4['set'] = r6;
            r0[8] = r4;
            r4 = {};
            r6 = 'onmessage';
            r4['key'] = r6;
            r6 = function() { // Original name: get, environment: r5
                r1 = _closure1_slot0;
                r2 = _closure1_slot1;
                r0 = 19;
                r0 = r2[r0];
                r3 = undefined;
                r0 = r1.bind(r3)(r0);
                r2 = r0.getEventHandlerAttribute;
                r1 = this;
                r0 = 'message';
                r0 = r2.bind(r3)(r1, r0);
                return r0;
            };
            r4['get'] = r6;
            r6 = function(a0) { // Original name: set, environment: r5
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 19;
                r1 = r1[r0];
                r0 = undefined;
                r1 = r2.bind(r0)(r1);
                r4 = r1.setEventHandlerAttribute;
                r3 = this;
                r2 = 'message';
                r1 = a0;
                r1 = r4.bind(r0)(r3, r2, r1);
                return r0;
            };
            r4['set'] = r6;
            r0[9] = r4;
            r4 = {};
            r6 = 'onopen';
            r4['key'] = r6;
            r6 = function() { // Original name: get, environment: r5
                r1 = _closure1_slot0;
                r2 = _closure1_slot1;
                r0 = 19;
                r0 = r2[r0];
                r3 = undefined;
                r0 = r1.bind(r3)(r0);
                r2 = r0.getEventHandlerAttribute;
                r1 = this;
                r0 = 'open';
                r0 = r2.bind(r3)(r1, r0);
                return r0;
            };
            r4['get'] = r6;
            r5 = function(a0) { // Original name: set, environment: r5
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 19;
                r1 = r1[r0];
                r0 = undefined;
                r1 = r2.bind(r0)(r1);
                r4 = r1.setEventHandlerAttribute;
                r3 = this;
                r2 = 'open';
                r1 = a0;
                r1 = r4.bind(r0)(r3, r2, r1);
                return r0;
            };
            r4['set'] = r5;
            r0[10] = r4;
            r0 = r1.bind(r2)(r3, r0);
            return r0;
        };
        r1 = r1.bind(r0)(r7);
        r1['CONNECTING'] = r6;
        r1['OPEN'] = r5;
        r1['CLOSING'] = r4;
        r1['CLOSED'] = r3;
        r2['default'] = r1;
        return r0;
    };
    r6 = 202;
    r5 = [1, 203, 12, 13, 23, 25, 28, 175, 177, 205, 206, 183, 180, 191, 194, 33, 207, 189, 20, 185];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        r2 = a1;
        var _closure1_slot0 = r2;
        r2 = a6;
        var _closure1_slot1 = r2;
        r1 = function(a0, a1) { // Original name: _objectWithoutProperties, environment: r1
            _fun2312: for(var _fun2312_ip = 0; ; ) switch(_fun2312_ip) {
case 0:
                r6 = a0;
                r5 = a1;
                r0 = null;
                if(!(r0 != r6)) { _fun2312_ip = 167; continue _fun2312 }
case 15:
                r2 = _closure1_slot0;
                r0 = _closure1_slot1;
                r4 = 0;
                r0 = r0[r4];
                r1 = undefined;
                r0 = r2.bind(r1)(r0);
                r0 = r0.bind(r1)(r6, r5);
                r1 = global;
                r2 = r1.Object;
                r2 = r2.getOwnPropertySymbols;
                if(!r2) { _fun2312_ip = 165; continue _fun2312 }
case 62:
                r2 = r1.Object;
                r1 = r2.getOwnPropertySymbols;
                r3 = r1.bind(r2)(r6);
                r1 = r3.length;
                r1 = r4 < r1;
                r2 = -1;
                r4 = 0;
                if(!r1) { _fun2312_ip = 165; continue _fun2312 }
case 99:
                r8 = r3[r4];
                r1 = r5.indexOf;
                r1 = r1.bind(r5)(r8);
                r7 = r2 === r1;
                r1 = r4;
                if(!r7) { _fun2312_ip = 142; continue _fun2312 }
case 123:
                r9 = {};
                r10 = r9.propertyIsEnumerable;
                r9 = r10.call;
                r7 = r9.bind(r10)(r6, r8);
case 142:
                if(!r7) { _fun2312_ip = 153; continue _fun2312 }
case 145:
                r7 = r6[r8];
                r0[r8] = r7;
case 153:
                r4 = r1 + 1;
                r1 = r3.length;
                if(r4 < r1) { _fun2312_ip = 99; continue _fun2312 }
case 165:
                return r0;
case 167:
                r0 = {};
                return r0;
            }
        };
        r0['exports'] = r1;
        r2 = r0.exports;
        r1 = true;
        r2['__esModule'] = r1;
        r1 = r0.exports;
        r0 = r0.exports;
        r1['default'] = r0;
        r0 = undefined;
        return r0;
    };
    r6 = 203;
    r5 = [204];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        r1 = function(a0, a1) { // Original name: _objectWithoutPropertiesLoose, environment: r1
            _fun2314: for(var _fun2314_ip = 0; ; ) switch(_fun2314_ip) {
case 0:
                r8 = a0;
                r7 = a1;
                r0 = null;
                if(!(r0 != r8)) { _fun2314_ip = 90; continue _fun2314 }
case 12:
                r0 = {};
                r5 = r8;
                r1 = -1;
                for(r2 in r5)
case 31:
                {
case 40:
                    r10 = r2;
                    r9 = {};
                    r11 = r9.hasOwnProperty;
                    r9 = r11.call;
                    r9 = r9.bind(r11)(r8, r10);
                    if(!r9) { _fun2314_ip = 31; continue _fun2314 }
case 64:
                    r9 = r7.indexOf;
                    r9 = r9.bind(r7)(r10);
                    if(r1 !== r9) { _fun2314_ip = 31; continue _fun2314 }
case 78:
                    r9 = r8[r10];
                    r0[r10] = r9;
                    _fun2314_ip = 31; continue _fun2314;
                }
case 88:
                return r0;
case 90:
                r0 = {};
                return r0;
            }
        };
        r0['exports'] = r1;
        r2 = r0.exports;
        r1 = true;
        r2['__esModule'] = r1;
        r1 = r0.exports;
        r0 = r0.exports;
        r1['default'] = r0;
        r0 = undefined;
        return r0;
    };
    r6 = 204;
    r5 = new Array(0);
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r2 = a5;
        r6 = a6;
        r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
            _fun2316: for(var _fun2316_ip = 0; ; ) switch(_fun2316_ip) {
case 0:
                r3 = a0;
                r5 = a2;
                r0 = _closure1_slot3;
                r1 = r0.default;
                r2 = undefined;
                r0 = a1;
                r8 = r1.bind(r2)(r0);
                r0 = _closure1_slot2;
                r1 = r0.default;
                r0 = _closure1_slot6;
                r0 = r0.bind(r2)();
                if(r0) { _fun2316_ip = 61; continue _fun2316 }
case 48:
                r0 = r8.apply;
                r0 = r0.bind(r8)(r3, r5);
                _fun2316_ip = 107; continue _fun2316;
case 61:
                r6 = global;
                r7 = r6.Reflect;
                r6 = r7.construct;
                if(r5) { _fun2316_ip = 81; continue _fun2316 }
case 77:
                r5 = new Array(0);
case 81:
                r4 = _closure1_slot3;
                r4 = r4.default;
                r4 = r4.bind(r2)(r3);
                r4 = r4.constructor;
                r0 = r6.bind(r7)(r8, r5, r4);
case 107:
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            }
        };
        var _closure1_slot5 = r0;
        r0 = function() { // Original name: _isNativeReflectConstruct, environment: r1
            _fun2317: for(var _fun2317_ip = 0; ; ) switch(_fun2317_ip) {
case 0:
case 2: // try_start_0
                r1 = global;
                r2 = r1.Boolean;
                r2 = r2.prototype;
                r3 = r2.valueOf;
                r2 = r3.call;
                r7 = r1.Reflect;
                r6 = r7.construct;
                r5 = r1.Boolean;
                r4 = new Array(0);
                r1 = function() { // Environment: r0
                    r0 = undefined;
                    return r0;
                };
                r1 = r6.bind(r7)(r5, r4, r1);
                r1 = r2.bind(r3)(r1);
                r1 = !r1;
                var _closure2_slot0 = r1;
case 70: // try_end0
                _fun2317_ip = 74; continue _fun2317;
case 72: // catch_target0
                CatchBlockStart(arg_register=1);
case 74:
                r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                    r0 = _closure2_slot0;
                    r0 = !r0;
                    r0 = !r0;
                    return r0;
                };
                _closure1_slot6 = r1;
                r0 = undefined;
                r0 = r1.bind(r0)();
                return r0;
            }
        };
        var _closure1_slot6 = r0;
        r0 = 0;
        r3 = r6[r0];
        r0 = undefined;
        r4 = r5.bind(r0)(r3);
        r3 = global;
        r9 = r3.Object;
        r8 = r9.defineProperty;
        r7 = {};
        r3 = true;
        r7['value'] = r3;
        r3 = '__esModule';
        r3 = r8.bind(r9)(r2, r3, r7);
        r2['default'] = r0;
        r3 = 1;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot0 = r3;
        r3 = 2;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot1 = r3;
        r3 = 3;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot2 = r3;
        r3 = 4;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot3 = r3;
        r3 = 5;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot4 = r3;
        r3 = 6;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        r3 = r3.default;
        r1 = function(a0) { // Environment: r1
            r3 = function(a0, a1) { // Original name: MessageEvent, environment: r5
                _fun2321: for(var _fun2321_ip = 0; ; ) switch(_fun2321_ip) {
case 0:
                    r6 = a1;
                    r4 = this;
                    r1 = _closure1_slot0;
                    r1 = r1.default;
                    r2 = _closure2_slot0;
                    r3 = undefined;
                    r1 = r1.bind(r3)(r4, r2);
                    r1 = _closure1_slot5;
                    r0 = new Array(2);
                    r5 = a0;
                    r0[0] = r5;
                    r0[1] = r6;
                    r0 = r1.bind(r3)(r4, r2, r0);
                    r5 = null;
                    r2 = r6 == r5;
                    r1 = undefined;
                    if(r2) { _fun2321_ip = 74; continue _fun2321 }
case 69:
                    r1 = r6.data;
case 74:
                    r0['_data'] = r1;
                    r1 = global;
                    r7 = r1.String;
                    r2 = r6 == r5;
                    r8 = undefined;
                    if(r2) { _fun2321_ip = 103; continue _fun2321 }
case 97:
                    r8 = r6.origin;
case 103:
                    r9 = r8 != r5;
                    r2 = '';
                    r4 = r2;
                    if(!r9) { _fun2321_ip = 120; continue _fun2321 }
case 117:
                    r4 = r8;
case 120:
                    r4 = r7.bind(r3)(r4);
                    r0['_origin'] = r4;
                    r1 = r1.String;
                    r7 = r6 == r5;
                    r4 = undefined;
                    if(r7) { _fun2321_ip = 152; continue _fun2321 }
case 146:
                    r4 = r6.lastEventId;
case 152:
                    r5 = r4 != r5;
                    if(!r5) { _fun2321_ip = 162; continue _fun2321 }
case 159:
                    r2 = r4;
case 162:
                    r1 = r1.bind(r3)(r2);
                    r0['_lastEventId'] = r1;
                    return r0;
                }
            };
            var _closure2_slot0 = r3;
            r1 = _closure1_slot4;
            r4 = r1.default;
            r2 = undefined;
            r1 = a0;
            r1 = r4.bind(r2)(r3, r1);
            r0 = _closure1_slot1;
            r1 = r0.default;
            r4 = {};
            r0 = 'data';
            r4['key'] = r0;
            r0 = function() { // Original name: get, environment: r5
                r0 = this;
                r0 = r0._data;
                return r0;
            };
            r4['get'] = r0;
            r0 = new Array(3);
            r0[0] = r4;
            r4 = {};
            r6 = 'origin';
            r4['key'] = r6;
            r6 = function() { // Original name: get, environment: r5
                r0 = this;
                r0 = r0._origin;
                return r0;
            };
            r4['get'] = r6;
            r0[1] = r4;
            r4 = {};
            r6 = 'lastEventId';
            r4['key'] = r6;
            r5 = function() { // Original name: get, environment: r5
                r0 = this;
                r0 = r0._lastEventId;
                return r0;
            };
            r4['get'] = r5;
            r0[2] = r4;
            r0 = r1.bind(r2)(r3, r0);
            return r0;
        };
        r1 = r1.bind(r0)(r3);
        r2['default'] = r1;
        return r0;
    };
    r6 = 205;
    r5 = [1, 12, 13, 23, 25, 28, 175];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r2 = a5;
        r6 = a6;
        r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
            _fun2326: for(var _fun2326_ip = 0; ; ) switch(_fun2326_ip) {
case 0:
                r3 = a0;
                r5 = a2;
                r0 = _closure1_slot3;
                r1 = r0.default;
                r2 = undefined;
                r0 = a1;
                r8 = r1.bind(r2)(r0);
                r0 = _closure1_slot2;
                r1 = r0.default;
                r0 = _closure1_slot6;
                r0 = r0.bind(r2)();
                if(r0) { _fun2326_ip = 61; continue _fun2326 }
case 48:
                r0 = r8.apply;
                r0 = r0.bind(r8)(r3, r5);
                _fun2326_ip = 107; continue _fun2326;
case 61:
                r6 = global;
                r7 = r6.Reflect;
                r6 = r7.construct;
                if(r5) { _fun2326_ip = 81; continue _fun2326 }
case 77:
                r5 = new Array(0);
case 81:
                r4 = _closure1_slot3;
                r4 = r4.default;
                r4 = r4.bind(r2)(r3);
                r4 = r4.constructor;
                r0 = r6.bind(r7)(r8, r5, r4);
case 107:
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            }
        };
        var _closure1_slot5 = r0;
        r0 = function() { // Original name: _isNativeReflectConstruct, environment: r1
            _fun2327: for(var _fun2327_ip = 0; ; ) switch(_fun2327_ip) {
case 0:
case 2: // try_start_0
                r1 = global;
                r2 = r1.Boolean;
                r2 = r2.prototype;
                r3 = r2.valueOf;
                r2 = r3.call;
                r7 = r1.Reflect;
                r6 = r7.construct;
                r5 = r1.Boolean;
                r4 = new Array(0);
                r1 = function() { // Environment: r0
                    r0 = undefined;
                    return r0;
                };
                r1 = r6.bind(r7)(r5, r4, r1);
                r1 = r2.bind(r3)(r1);
                r1 = !r1;
                var _closure2_slot0 = r1;
case 70: // try_end0
                _fun2327_ip = 74; continue _fun2327;
case 72: // catch_target0
                CatchBlockStart(arg_register=1);
case 74:
                r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                    r0 = _closure2_slot0;
                    r0 = !r0;
                    r0 = !r0;
                    return r0;
                };
                _closure1_slot6 = r1;
                r0 = undefined;
                r0 = r1.bind(r0)();
                return r0;
            }
        };
        var _closure1_slot6 = r0;
        r0 = 0;
        r3 = r6[r0];
        r0 = undefined;
        r4 = r5.bind(r0)(r3);
        r3 = global;
        r9 = r3.Object;
        r8 = r9.defineProperty;
        r7 = {};
        r3 = true;
        r7['value'] = r3;
        r3 = '__esModule';
        r3 = r8.bind(r9)(r2, r3, r7);
        r2['default'] = r0;
        r3 = 1;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot0 = r3;
        r3 = 2;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot1 = r3;
        r3 = 3;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot2 = r3;
        r3 = 4;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot3 = r3;
        r3 = 5;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot4 = r3;
        r3 = 6;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        r3 = r3.default;
        r1 = function(a0) { // Environment: r1
            r3 = function(a0, a1) { // Original name: CloseEvent, environment: r5
                _fun2331: for(var _fun2331_ip = 0; ; ) switch(_fun2331_ip) {
case 0:
                    r2 = a1;
                    r5 = this;
                    r1 = _closure1_slot0;
                    r1 = r1.default;
                    r3 = _closure2_slot0;
                    r4 = undefined;
                    r1 = r1.bind(r4)(r5, r3);
                    r1 = _closure1_slot5;
                    r0 = new Array(2);
                    r6 = a0;
                    r0[0] = r6;
                    r0[1] = r2;
                    r0 = r1.bind(r4)(r5, r3, r0);
                    r3 = global;
                    r6 = r3.Boolean;
                    r5 = null;
                    r7 = r2 == r5;
                    r1 = undefined;
                    if(r7) { _fun2331_ip = 83; continue _fun2331 }
case 77:
                    r1 = r2.wasClean;
case 83:
                    r1 = r6.bind(r4)(r1);
                    r0['_wasClean'] = r1;
                    r6 = r3.Number;
                    r7 = r2 == r5;
                    r1 = undefined;
                    if(r7) { _fun2331_ip = 115; continue _fun2331 }
case 109:
                    r1 = r2.code;
case 115:
                    r1 = r6.bind(r4)(r1);
                    if(r1) { _fun2331_ip = 125; continue _fun2331 }
case 123:
                    r1 = 0;
case 125:
                    r0['_code'] = r1;
                    r6 = r2 == r5;
                    r1 = undefined;
                    if(r6) { _fun2331_ip = 145; continue _fun2331 }
case 140:
                    r1 = r2.reason;
case 145:
                    r5 = r1 != r5;
                    r1 = '';
                    if(!r5) { _fun2331_ip = 172; continue _fun2331 }
case 156:
                    r3 = r3.String;
                    r2 = r2.reason;
                    r1 = r3.bind(r4)(r2);
case 172:
                    r0['_reason'] = r1;
                    return r0;
                }
            };
            var _closure2_slot0 = r3;
            r1 = _closure1_slot4;
            r4 = r1.default;
            r2 = undefined;
            r1 = a0;
            r1 = r4.bind(r2)(r3, r1);
            r0 = _closure1_slot1;
            r1 = r0.default;
            r4 = {};
            r0 = 'wasClean';
            r4['key'] = r0;
            r0 = function() { // Original name: get, environment: r5
                r0 = this;
                r0 = r0._wasClean;
                return r0;
            };
            r4['get'] = r0;
            r0 = new Array(3);
            r0[0] = r4;
            r4 = {};
            r6 = 'code';
            r4['key'] = r6;
            r6 = function() { // Original name: get, environment: r5
                r0 = this;
                r0 = r0._code;
                return r0;
            };
            r4['get'] = r6;
            r0[1] = r4;
            r4 = {};
            r6 = 'reason';
            r4['key'] = r6;
            r5 = function() { // Original name: get, environment: r5
                r0 = this;
                r0 = r0._reason;
                return r0;
            };
            r4['get'] = r5;
            r0[2] = r4;
            r0 = r1.bind(r2)(r3, r0);
            return r0;
        };
        r1 = r1.bind(r0)(r3);
        r2['default'] = r1;
        return r0;
    };
    r6 = 206;
    r5 = [1, 12, 13, 23, 25, 28, 175];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun2335: for(var _fun2335_ip = 0; ; ) switch(_fun2335_ip) {
case 0:
            r2 = a5;
            var _closure1_slot0 = r2;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun2336: for(var _fun2336_ip = 0; ; ) switch(_fun2336_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun2336_ip = 104; continue _fun2336 }
case 20:
                    r2 = r1.WeakMap;
                    r3 = r2.prototype;
                    r3 = Object.create(r3, {constructor: {value: r2}});
                    r5 = r3;
                    r2 = new r5[r2](r4);
                    r2 = r2 instanceof Object ? r2 : r3;
                    var _closure2_slot0 = r2;
                    r1 = r1.WeakMap;
                    r2 = r1.prototype;
                    r2 = Object.create(r2, {constructor: {value: r1}});
                    r5 = r2;
                    r1 = new r5[r1](r4);
                    r1 = r1 instanceof Object ? r1 : r2;
                    var _closure2_slot1 = r1;
                    r2 = function(a0) { // Original name: _getRequireWildcardCache, environment: r0
                        _fun2337: for(var _fun2337_ip = 0; ; ) switch(_fun2337_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun2337_ip = 15; continue _fun2337 }
case 9:
                            r0 = _closure2_slot0;
                            _fun2337_ip = 19; continue _fun2337;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot3 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot3 = r0;
            r4 = global;
            r6 = r4.Object;
            r5 = r6.defineProperty;
            r1 = {};
            r0 = true;
            r1['value'] = r0;
            r0 = '__esModule';
            r0 = r5.bind(r6)(r2, r0, r1);
            r0 = {};
            var _closure1_slot1 = r0;
            r0 = undefined;
            r2['default'] = r0;
            r5 = a6;
            r1 = 0;
            r5 = r5[r1];
            r1 = a1;
            r6 = r1.bind(r0)(r5);
            if(!r6) { _fun2335_ip = 98; continue _fun2335 }
case 84:
            r5 = r6.__esModule;
            r1 = r6;
            if(r5) { _fun2335_ip = 365; continue _fun2335 }
case 98:
            r16 = null;
            if(!(r16 !== r6)) { _fun2335_ip = 356; continue _fun2335 }
case 107:
            r7 = typeof r6;
            r5 = 'object';
            if(!(r5 !== r7)) { _fun2335_ip = 129; continue _fun2335 }
case 118:
            r5 = 'function';
            if(!(r5 === r7)) { _fun2335_ip = 356; continue _fun2335 }
case 129:
            r5 = _closure1_slot3;
            r7 = r5.bind(r0)(r0);
            if(!r7) { _fun2335_ip = 157; continue _fun2335 }
case 141:
            r5 = r7.has;
            r5 = r5.bind(r7)(r6);
            if(r5) { _fun2335_ip = 344; continue _fun2335 }
case 157:
            r5 = Object.create(r16);
            r8 = r4.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun2335_ip = 185; continue _fun2335 }
case 174:
            r8 = r4.Object;
            r15 = r8.getOwnPropertyDescriptor;
case 185:
            r13 = r6;
            r9 = 'default';
            r8 = undefined;
            for(r10 in r13)
case 202:
            {
case 211:
                r20 = r10;
                if(r9 === r20) { _fun2335_ip = 202; continue _fun2335 }
case 218:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r6, r20);
                if(!r17) { _fun2335_ip = 202; continue _fun2335 }
case 239:
                r17 = null;
                if(!r15) { _fun2335_ip = 261; continue _fun2335 }
case 244:
                r19 = r4.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r6, r20);
case 261:
                if(!r17) { _fun2335_ip = 280; continue _fun2335 }
case 264:
                r18 = r17.get;
                if(r18) { _fun2335_ip = 293; continue _fun2335 }
case 272:
                r18 = r17.set;
                if(r18) { _fun2335_ip = 293; continue _fun2335 }
case 280:
                r18 = r6[r20];
                r5[r20] = r18;
                r8 = r17;
                _fun2335_ip = 202; continue _fun2335;
case 293:
                r19 = r4.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r5, r20, r17);
                r8 = r17;
                _fun2335_ip = 202; continue _fun2335;
            }
case 316:
            r5['default'] = r6;
            r1 = r5;
            if(!r7) { _fun2335_ip = 365; continue _fun2335 }
case 328:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r5);
            r1 = r5;
            _fun2335_ip = 365; continue _fun2335;
case 344:
            r5 = r7.get;
            r1 = r5.bind(r7)(r6);
            _fun2335_ip = 365; continue _fun2335;
case 356:
            r5 = {};
            r5['default'] = r6;
            r1 = r5;
case 365:
            var _closure1_slot2 = r1;
            r5 = r4.Object;
            r4 = r5.keys;
            r5 = r4.bind(r5)(r1);
            r4 = r5.forEach;
            r3 = function(a0) { // Environment: r3
                _fun2338: for(var _fun2338_ip = 0; ; ) switch(_fun2338_ip) {
case 0:
                    r4 = a0;
                    var _closure2_slot0 = r4;
                    r0 = 'default';
                    if(!(r4 !== r0)) { _fun2338_ip = 152; continue _fun2338 }
case 20:
                    r0 = '__esModule';
                    if(!(r4 !== r0)) { _fun2338_ip = 152; continue _fun2338 }
case 31:
                    r1 = global;
                    r0 = r1.Object;
                    r0 = r0.prototype;
                    r6 = r0.hasOwnProperty;
                    r3 = r6.call;
                    r2 = _closure1_slot1;
                    r2 = r3.bind(r6)(r2, r4);
                    if(r2) { _fun2338_ip = 148; continue _fun2338 }
case 70:
                    r2 = _closure1_slot0;
                    r2 = r4 in r2;
                    if(!r2) { _fun2338_ip = 101; continue _fun2338 }
case 81:
                    r2 = _closure1_slot0;
                    r3 = r2[r4];
                    r2 = _closure1_slot2;
                    r2 = r2[r4];
                    if(!(r3 !== r2)) { _fun2338_ip = 144; continue _fun2338 }
case 101:
                    r3 = r1.Object;
                    r2 = r3.defineProperty;
                    r1 = _closure1_slot0;
                    r0 = {};
                    r6 = true;
                    r0['enumerable'] = r6;
                    r5 = function() { // Original name: get, environment: r5
                        r1 = _closure1_slot2;
                        r0 = _closure2_slot0;
                        r0 = r1[r0];
                        return r0;
                    };
                    r0['get'] = r5;
                    r0 = r2.bind(r3)(r1, r4, r0);
                    r0 = undefined;
                    return r0;
case 144:
                    r0 = undefined;
                    return r0;
case 148:
                    r0 = undefined;
                    return r0;
case 152:
                    r0 = undefined;
                    return r0;
                }
            };
            r3 = r4.bind(r5)(r3);
            r1 = r1.default;
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 207;
    r5 = [208];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun2340: for(var _fun2340_ip = 0; ; ) switch(_fun2340_ip) {
case 0:
            r2 = a5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun2341: for(var _fun2341_ip = 0; ; ) switch(_fun2341_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun2341_ip = 104; continue _fun2341 }
case 20:
                    r2 = r1.WeakMap;
                    r3 = r2.prototype;
                    r3 = Object.create(r3, {constructor: {value: r2}});
                    r5 = r3;
                    r2 = new r5[r2](r4);
                    r2 = r2 instanceof Object ? r2 : r3;
                    var _closure2_slot0 = r2;
                    r1 = r1.WeakMap;
                    r2 = r1.prototype;
                    r2 = Object.create(r2, {constructor: {value: r1}});
                    r5 = r2;
                    r1 = new r5[r1](r4);
                    r1 = r1 instanceof Object ? r1 : r2;
                    var _closure2_slot1 = r1;
                    r2 = function(a0) { // Original name: _getRequireWildcardCache, environment: r0
                        _fun2342: for(var _fun2342_ip = 0; ; ) switch(_fun2342_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun2342_ip = 15; continue _fun2342 }
case 9:
                            r0 = _closure2_slot0;
                            _fun2342_ip = 19; continue _fun2342;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot0 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot0 = r0;
            r15 = global;
            r5 = r15.Object;
            r4 = r5.defineProperty;
            r3 = {};
            r0 = true;
            r3['value'] = r0;
            r0 = '__esModule';
            r0 = r4.bind(r5)(r2, r0, r3);
            r0 = undefined;
            r2['default'] = r0;
            r4 = a6;
            r3 = 0;
            r4 = r4[r3];
            r3 = a1;
            r3 = r3.bind(r0)(r4);
            if(!r3) { _fun2340_ip = 88; continue _fun2340 }
case 74:
            r5 = r3.__esModule;
            r4 = r3;
            if(r5) { _fun2340_ip = 355; continue _fun2340 }
case 88:
            r14 = null;
            if(!(r14 !== r3)) { _fun2340_ip = 346; continue _fun2340 }
case 97:
            r6 = typeof r3;
            r5 = 'object';
            if(!(r5 !== r6)) { _fun2340_ip = 119; continue _fun2340 }
case 108:
            r5 = 'function';
            if(!(r5 === r6)) { _fun2340_ip = 346; continue _fun2340 }
case 119:
            r1 = _closure1_slot0;
            r5 = r1.bind(r0)(r0);
            if(!r5) { _fun2340_ip = 147; continue _fun2340 }
case 131:
            r1 = r5.has;
            r1 = r1.bind(r5)(r3);
            if(r1) { _fun2340_ip = 334; continue _fun2340 }
case 147:
            r1 = Object.create(r14);
            r6 = r15.Object;
            r13 = r6.defineProperty;
            if(!r13) { _fun2340_ip = 175; continue _fun2340 }
case 164:
            r6 = r15.Object;
            r13 = r6.getOwnPropertyDescriptor;
case 175:
            r11 = r3;
            r7 = 'default';
            r6 = undefined;
            for(r8 in r11)
case 192:
            {
case 201:
                r19 = r8;
                if(r7 === r19) { _fun2340_ip = 192; continue _fun2340 }
case 208:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r3, r19);
                if(!r16) { _fun2340_ip = 192; continue _fun2340 }
case 229:
                r16 = null;
                if(!r13) { _fun2340_ip = 251; continue _fun2340 }
case 234:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r3, r19);
case 251:
                if(!r16) { _fun2340_ip = 270; continue _fun2340 }
case 254:
                r17 = r16.get;
                if(r17) { _fun2340_ip = 283; continue _fun2340 }
case 262:
                r17 = r16.set;
                if(r17) { _fun2340_ip = 283; continue _fun2340 }
case 270:
                r17 = r3[r19];
                r1[r19] = r17;
                r6 = r16;
                _fun2340_ip = 192; continue _fun2340;
case 283:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r1, r19, r16);
                r6 = r16;
                _fun2340_ip = 192; continue _fun2340;
            }
case 306:
            r1['default'] = r3;
            r4 = r1;
            if(!r5) { _fun2340_ip = 355; continue _fun2340 }
case 318:
            r6 = r5.set;
            r6 = r6.bind(r5)(r3, r1);
            r4 = r1;
            _fun2340_ip = 355; continue _fun2340;
case 334:
            r1 = r5.get;
            r4 = r1.bind(r5)(r3);
            _fun2340_ip = 355; continue _fun2340;
case 346:
            r1 = {};
            r1['default'] = r3;
            r4 = r1;
case 355:
            r3 = r4.getEnforcing;
            r1 = 'WebSocketModule';
            r1 = r3.bind(r4)(r1);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 208;
    r5 = [36];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r10 = a1;
        r2 = a5;
        r11 = a6;
        r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
            _fun2344: for(var _fun2344_ip = 0; ; ) switch(_fun2344_ip) {
case 0:
                r3 = a0;
                r0 = _closure1_slot4;
                r1 = r0.default;
                r2 = undefined;
                r0 = a1;
                r8 = r1.bind(r2)(r0);
                r0 = _closure1_slot3;
                r1 = r0.default;
                r0 = _closure1_slot18;
                r0 = r0.bind(r2)();
                if(r0) { _fun2344_ip = 58; continue _fun2344 }
case 45:
                r0 = r8.apply;
                r0 = r0.bind(r8)(r3, r2);
                _fun2344_ip = 101; continue _fun2344;
case 58:
                r5 = global;
                r7 = r5.Reflect;
                r6 = r7.construct;
                r5 = new Array(0);
                r4 = _closure1_slot4;
                r4 = r4.default;
                r4 = r4.bind(r2)(r3);
                r4 = r4.constructor;
                r0 = r6.bind(r7)(r8, r5, r4);
case 101:
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            }
        };
        var _closure1_slot17 = r0;
        r0 = function() { // Original name: _isNativeReflectConstruct, environment: r1
            _fun2345: for(var _fun2345_ip = 0; ; ) switch(_fun2345_ip) {
case 0:
case 2: // try_start_0
                r1 = global;
                r2 = r1.Boolean;
                r2 = r2.prototype;
                r3 = r2.valueOf;
                r2 = r3.call;
                r7 = r1.Reflect;
                r6 = r7.construct;
                r5 = r1.Boolean;
                r4 = new Array(0);
                r1 = function() { // Environment: r0
                    r0 = undefined;
                    return r0;
                };
                r1 = r6.bind(r7)(r5, r4, r1);
                r1 = r2.bind(r3)(r1);
                r1 = !r1;
                var _closure2_slot0 = r1;
case 70: // try_end0
                _fun2345_ip = 74; continue _fun2345;
case 72: // catch_target0
                CatchBlockStart(arg_register=1);
case 74:
                r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                    r0 = _closure2_slot0;
                    r0 = !r0;
                    r0 = !r0;
                    return r0;
                };
                _closure1_slot18 = r1;
                r0 = undefined;
                r0 = r1.bind(r0)();
                return r0;
            }
        };
        var _closure1_slot18 = r0;
        r6 = 0;
        r3 = r11[r6];
        r0 = undefined;
        r9 = r10.bind(r0)(r3);
        r3 = global;
        r7 = r3.Object;
        r5 = r7.defineProperty;
        r4 = {};
        r3 = true;
        r4['value'] = r3;
        r3 = '__esModule';
        r3 = r5.bind(r7)(r2, r3, r4);
        r2['default'] = r0;
        r5 = 1;
        r3 = r11[r5];
        r3 = r10.bind(r0)(r3);
        r3 = r9.bind(r0)(r3);
        var _closure1_slot0 = r3;
        r4 = 2;
        r3 = r11[r4];
        r3 = r10.bind(r0)(r3);
        r3 = r9.bind(r0)(r3);
        var _closure1_slot1 = r3;
        r3 = 3;
        r7 = r11[r3];
        r7 = r10.bind(r0)(r7);
        r7 = r9.bind(r0)(r7);
        var _closure1_slot2 = r7;
        r7 = 4;
        r7 = r11[r7];
        r7 = r10.bind(r0)(r7);
        r7 = r9.bind(r0)(r7);
        var _closure1_slot3 = r7;
        r7 = 5;
        r7 = r11[r7];
        r7 = r10.bind(r0)(r7);
        r7 = r9.bind(r0)(r7);
        var _closure1_slot4 = r7;
        r7 = 6;
        r7 = r11[r7];
        r7 = r10.bind(r0)(r7);
        r7 = r9.bind(r0)(r7);
        var _closure1_slot5 = r7;
        r7 = 7;
        r7 = r11[r7];
        r7 = r10.bind(r0)(r7);
        r7 = r9.bind(r0)(r7);
        var _closure1_slot6 = r7;
        r7 = 8;
        r7 = r11[r7];
        r7 = r10.bind(r0)(r7);
        r7 = r9.bind(r0)(r7);
        var _closure1_slot7 = r7;
        r7 = 9;
        r7 = r11[r7];
        r7 = r10.bind(r0)(r7);
        r7 = r9.bind(r0)(r7);
        var _closure1_slot8 = r7;
        r7 = 10;
        r7 = r11[r7];
        r7 = r10.bind(r0)(r7);
        r7 = r9.bind(r0)(r7);
        var _closure1_slot9 = r7;
        r7 = 11;
        r7 = r11[r7];
        r7 = r10.bind(r0)(r7);
        r7 = r9.bind(r0)(r7);
        var _closure1_slot10 = r7;
        r7 = 12;
        r7 = r11[r7];
        r7 = r10.bind(r0)(r7);
        r7 = r9.bind(r0)(r7);
        var _closure1_slot11 = r7;
        r7 = 13;
        r7 = r11[r7];
        r7 = r10.bind(r0)(r7);
        r7 = r9.bind(r0)(r7);
        var _closure1_slot12 = r7;
        r7 = 14;
        r7 = r11[r7];
        r7 = r10.bind(r0)(r7);
        r7 = r9.bind(r0)(r7);
        var _closure1_slot13 = r7;
        r7 = 15;
        r7 = r11[r7];
        r7 = r10.bind(r0)(r7);
        r7 = r9.bind(r0)(r7);
        r8 = 16;
        r8 = r11[r8];
        r8 = r10.bind(r0)(r8);
        r8 = r9.bind(r0)(r8);
        var _closure1_slot14 = r8;
        r8 = ['headers'];
        var _closure1_slot15 = r8;
        var _closure1_slot16 = r6;
        r9 = r7.default;
        r8 = r9.apply;
        r7 = ['close', 'error', 'message', 'open'];
        r7 = r8.bind(r9)(r0, r7);
        r1 = function(a0) { // Environment: r1
            r3 = function(a0, a1, a2) { // Original name: WebSocket, environment: r5
                _fun2349: for(var _fun2349_ip = 0; ; ) switch(_fun2349_ip) {
case 0:
                    r6 = a0;
                    r3 = a1;
                    r10 = a2;
                    r4 = this;
                    r0 = _closure1_slot1;
                    r0 = r0.default;
                    r1 = _closure2_slot0;
                    r9 = undefined;
                    r0 = r0.bind(r9)(r4, r1);
                    r0 = _closure1_slot17;
                    r0 = r0.bind(r9)(r4, r1);
                    r7 = 0;
                    r0['CONNECTING'] = r7;
                    r1 = 1;
                    r0['OPEN'] = r1;
                    r1 = 2;
                    r0['CLOSING'] = r1;
                    r1 = 3;
                    r0['CLOSED'] = r1;
                    r0['readyState'] = r7;
                    r0['url'] = r6;
                    r1 = typeof r3;
                    r5 = 'string';
                    r4 = r3;
                    if(!(r1 === r5)) { _fun2349_ip = 120; continue _fun2349 }
case 109:
                    r1 = new Array(1);
                    r1[0] = r3;
                    r4 = r1;
case 120:
                    if(r10) { _fun2349_ip = 125; continue _fun2349 }
case 123:
                    r10 = {};
case 125:
                    r1 = r10.headers;
                    if(!(r1 === r9)) { _fun2349_ip = 136; continue _fun2349 }
case 134:
                    r1 = {};
case 136:
                    r3 = _closure1_slot0;
                    r8 = r3.default;
                    r3 = _closure1_slot15;
                    r10 = r8.bind(r9)(r10, r3);
                    if(!r10) { _fun2349_ip = 210; continue _fun2349 }
case 158:
                    r3 = r10.origin;
                    r3 = typeof r3;
                    if(!(r3 === r5)) { _fun2349_ip = 210; continue _fun2349 }
case 171:
                    r3 = global;
                    r8 = r3.console;
                    r5 = r8.warn;
                    r3 = 'Specifying `origin` as a WebSocket connection option is deprecated. Include it under `headers` instead.';
                    r3 = r5.bind(r8)(r3);
                    r3 = r10.origin;
                    r1['origin'] = r3;
                    r3 = delete r10.origin;
case 210:
                    r3 = global;
                    r8 = r3.Object;
                    r5 = r8.keys;
                    r5 = r5.bind(r8)(r10);
                    r5 = r5.length;
                    if(!(r5 > r7)) { _fun2349_ip = 307; continue _fun2349 }
case 237:
                    r8 = r3.console;
                    r7 = r8.warn;
                    r9 = r3.Object;
                    r5 = r9.keys;
                    r10 = r5.bind(r9)(r10);
                    r9 = r10.join;
                    r5 = '`, `';
                    r9 = r9.bind(r10)(r5);
                    r5 = 'Unrecognized WebSocket connection option(s) `';
                    r9 = r5 + r9;
                    r5 = '`. ';
                    r9 = r9 + r5;
                    r5 = 'Did you mean to put these under `headers`?';
                    r5 = r9 + r5;
                    r5 = r7.bind(r8)(r5);
case 307:
                    r5 = r3.Array;
                    r3 = r5.isArray;
                    r3 = r3.bind(r5)(r4);
                    r5 = r4;
                    if(r3) { _fun2349_ip = 331; continue _fun2349 }
case 329:
                    r5 = null;
case 331:
                    r3 = _closure1_slot8;
                    r7 = r3.default;
                    r3 = _closure1_slot10;
                    r3 = r3.default;
                    r8 = r3.OS;
                    r4 = 'ios';
                    r3 = null;
                    if(!(r8 === r4)) { _fun2349_ip = 373; continue _fun2349 }
case 364:
                    r4 = _closure1_slot11;
                    r3 = r4.default;
case 373:
                    r4 = r7.prototype;
                    r4 = Object.create(r4, {constructor: {value: r7}});
                    r15 = r4;
                    r14 = r3;
                    r3 = new r15[r7](r14, r13);
                    r3 = r3 instanceof Object ? r3 : r4;
                    r0['_eventEmitter'] = r3;
                    r3 = _closure1_slot16;
                    r3 = parseFloat(r3);
                    r4 = r3 + 1;
                    _closure1_slot16 = r4;
                    r0['_socketId'] = r3;
                    r3 = r0._registerEvents;
                    r3 = r3.bind(r0)();
                    r2 = _closure1_slot11;
                    r4 = r2.default;
                    r3 = r4.connect;
                    r2 = {};
                    r2['headers'] = r1;
                    r11 = r0._socketId;
                    r15 = r4;
                    r14 = r6;
                    r13 = r5;
                    r12 = r2;
                    r1 = r15[r3](r14, r13, r12, r11, r10);
                    return r0;
                }
            };
            var _closure2_slot0 = r3;
            r1 = _closure1_slot5;
            r4 = r1.default;
            r2 = undefined;
            r1 = a0;
            r1 = r4.bind(r2)(r3, r1);
            r0 = _closure1_slot2;
            r1 = r0.default;
            r4 = {};
            r0 = 'binaryType';
            r4['key'] = r0;
            r0 = function() { // Original name: get, environment: r5
                r0 = this;
                r0 = r0._binaryType;
                return r0;
            };
            r4['get'] = r0;
            r0 = function(a0) { // Original name: set, environment: r5
                _fun2351: for(var _fun2351_ip = 0; ; ) switch(_fun2351_ip) {
case 0:
                    r1 = a0;
                    r0 = this;
                    r3 = 'blob';
                    if(!(r1 !== r3)) { _fun2351_ip = 21; continue _fun2351 }
case 13:
                    r2 = 'arraybuffer';
                    if(!(r1 === r2)) { _fun2351_ip = 140; continue _fun2351 }
case 21:
                    r2 = r0._binaryType;
                    if(!(r2 !== r3)) { _fun2351_ip = 35; continue _fun2351 }
case 31:
                    if(!(r1 === r3)) { _fun2351_ip = 130; continue _fun2351 }
case 35:
                    r4 = _closure1_slot14;
                    r7 = r4.default;
                    r4 = _closure1_slot7;
                    r4 = r4.default;
                    r6 = r4.isAvailable;
                    r5 = undefined;
                    r4 = 'Native module BlobModule is required for blob support';
                    r4 = r7.bind(r5)(r6, r4);
                    if(!(r1 !== r3)) { _fun2351_ip = 105; continue _fun2351 }
case 78:
                    r3 = _closure1_slot7;
                    r5 = r3.default;
                    r4 = r5.removeWebSocketHandler;
                    r3 = r0._socketId;
                    r3 = r4.bind(r5)(r3);
                    _fun2351_ip = 130; continue _fun2351;
case 105:
                    r2 = _closure1_slot7;
                    r4 = r2.default;
                    r3 = r4.addWebSocketHandler;
                    r2 = r0._socketId;
                    r2 = r3.bind(r4)(r2);
case 130:
                    r0['_binaryType'] = r1;
                    r0 = undefined;
                    return r0;
case 140:
                    r0 = global;
                    r2 = r0.Error;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r9 = "binaryType must be either 'blob' or 'arraybuffer'";
                    r10 = r1;
                    r0 = new r10[r2](r9, r8);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                }
            };
            r4['set'] = r0;
            r0 = new Array(7);
            r0[0] = r4;
            r4 = {};
            r6 = 'close';
            r4['key'] = r6;
            r6 = function(a0, a1) { // Original name: close, environment: r5
                _fun2352: for(var _fun2352_ip = 0; ; ) switch(_fun2352_ip) {
case 0:
                    r3 = this;
                    r1 = r3.readyState;
                    r0 = r3.CLOSING;
                    if(!(r1 !== r0)) { _fun2352_ip = 66; continue _fun2352 }
case 17:
                    r1 = r3.readyState;
                    r0 = r3.CLOSED;
                    if(!(r1 !== r0)) { _fun2352_ip = 66; continue _fun2352 }
case 32:
                    r0 = r3.CLOSING;
                    r3['readyState'] = r0;
                    r2 = r3._close;
                    r1 = a0;
                    r0 = a1;
                    r0 = r2.bind(r3)(r1, r0);
                    r0 = undefined;
                    return r0;
case 66:
                    r0 = undefined;
                    return r0;
                }
            };
            r4['value'] = r6;
            r0[1] = r4;
            r4 = {};
            r6 = 'send';
            r4['key'] = r6;
            r6 = function(a0) { // Original name: send, environment: r5
                _fun2353: for(var _fun2353_ip = 0; ; ) switch(_fun2353_ip) {
case 0:
                    r4 = a0;
                    r1 = this;
                    r2 = r1.readyState;
                    r0 = r1.CONNECTING;
                    if(!(r2 !== r0)) { _fun2353_ip = 257; continue _fun2353 }
case 23:
                    r2 = _closure1_slot6;
                    r2 = r2.default;
                    r2 = r4 instanceof r2;
                    if(r2) { _fun2353_ip = 197; continue _fun2353 }
case 45:
                    r3 = typeof r4;
                    r2 = 'string';
                    if(!(r3 !== r2)) { _fun2353_ip = 167; continue _fun2353 }
case 56:
                    r2 = global;
                    r3 = r2.ArrayBuffer;
                    r3 = r4 instanceof r3;
                    if(r3) { _fun2353_ip = 123; continue _fun2353 }
case 71:
                    r5 = r2.ArrayBuffer;
                    r3 = r5.isView;
                    r3 = r3.bind(r5)(r4);
                    if(r3) { _fun2353_ip = 123; continue _fun2353 }
case 91:
                    r5 = r2.Error;
                    r2 = r5.prototype;
                    r3 = Object.create(r2, {constructor: {value: r5}});
                    r9 = 'Unsupported data type';
                    r10 = r3;
                    r2 = new r10[r5](r9, r8);
                    r2 = r2 instanceof Object ? r2 : r3;
                    throw r2;
case 123:
                    r2 = _closure1_slot11;
                    r7 = r2.default;
                    r6 = r7.sendBinary;
                    r2 = _closure1_slot9;
                    r3 = r2.default;
                    r2 = undefined;
                    r5 = r3.bind(r2)(r4);
                    r3 = r1._socketId;
                    r3 = r6.bind(r7)(r5, r3);
                    return r2;
case 167:
                    r2 = _closure1_slot11;
                    r5 = r2.default;
                    r3 = r5.send;
                    r2 = r1._socketId;
                    r2 = r3.bind(r5)(r4, r2);
                    r2 = undefined;
                    return r2;
case 197:
                    r2 = _closure1_slot14;
                    r6 = r2.default;
                    r2 = _closure1_slot7;
                    r0 = r2.default;
                    r5 = r0.isAvailable;
                    r0 = undefined;
                    r3 = 'Native module BlobModule is required for blob support';
                    r3 = r6.bind(r0)(r5, r3);
                    r3 = r2.default;
                    r2 = r3.sendOverSocket;
                    r1 = r1._socketId;
                    r1 = r2.bind(r3)(r4, r1);
                    return r0;
case 257:
                    r0 = global;
                    r2 = r0.Error;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r9 = 'INVALID_STATE_ERR';
                    r10 = r1;
                    r0 = new r10[r2](r9, r8);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                }
            };
            r4['value'] = r6;
            r0[2] = r4;
            r4 = {};
            r6 = 'ping';
            r4['key'] = r6;
            r6 = function() { // Original name: ping, environment: r5
                _fun2354: for(var _fun2354_ip = 0; ; ) switch(_fun2354_ip) {
case 0:
                    r0 = this;
                    r2 = r0.readyState;
                    r1 = r0.CONNECTING;
                    if(!(r2 !== r1)) { _fun2354_ip = 49; continue _fun2354 }
case 17:
                    r1 = _closure1_slot11;
                    r2 = r1.default;
                    r1 = r2.ping;
                    r0 = r0._socketId;
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
case 49:
                    r0 = global;
                    r2 = r0.Error;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r3 = 'INVALID_STATE_ERR';
                    r4 = r1;
                    r0 = new r4[r2](r3, r2);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                }
            };
            r4['value'] = r6;
            r0[3] = r4;
            r4 = {};
            r6 = '_close';
            r4['key'] = r6;
            r6 = function(a0, a1) { // Original name: _close, environment: r5
                _fun2355: for(var _fun2355_ip = 0; ; ) switch(_fun2355_ip) {
case 0:
                    r2 = a0;
                    r1 = a1;
                    r0 = this;
                    r6 = 1000;
                    r4 = typeof r2;
                    r3 = 'number';
                    if(!(r4 === r3)) { _fun2355_ip = 28; continue _fun2355 }
case 25:
                    r6 = r2;
case 28:
                    r5 = '';
                    r3 = typeof r1;
                    r2 = 'string';
                    if(!(r3 === r2)) { _fun2355_ip = 46; continue _fun2355 }
case 43:
                    r5 = r1;
case 46:
                    r2 = _closure1_slot11;
                    r4 = r2.default;
                    r3 = r4.close;
                    r2 = r0._socketId;
                    r2 = r3.bind(r4)(r6, r5, r2);
                    r2 = _closure1_slot7;
                    r2 = r2.default;
                    r2 = r2.isAvailable;
                    if(!r2) { _fun2355_ip = 133; continue _fun2355 }
case 94:
                    r3 = r0._binaryType;
                    r2 = 'blob';
                    if(!(r3 === r2)) { _fun2355_ip = 133; continue _fun2355 }
case 108:
                    r1 = _closure1_slot7;
                    r2 = r1.default;
                    r1 = r2.removeWebSocketHandler;
                    r0 = r0._socketId;
                    r0 = r1.bind(r2)(r0);
case 133:
                    r0 = undefined;
                    return r0;
                }
            };
            r4['value'] = r6;
            r0[4] = r4;
            r4 = {};
            r6 = '_unregisterEvents';
            r4['key'] = r6;
            r6 = function() { // Original name: _unregisterEvents, environment: r5
                r1 = this;
                r3 = r1._subscriptions;
                r2 = r3.forEach;
                r0 = function(a0) { // Environment: r0
                    r1 = a0;
                    r0 = r1.remove;
                    r0 = r0.bind(r1)();
                    return r0;
                };
                r0 = r2.bind(r3)(r0);
                r0 = new Array(0);
                r1['_subscriptions'] = r0;
                r0 = undefined;
                return r0;
            };
            r4['value'] = r6;
            r0[5] = r4;
            r4 = {};
            r6 = '_registerEvents';
            r4['key'] = r6;
            r5 = function() { // Original name: _registerEvents, environment: r5
                r1 = this;
                var _closure3_slot0 = r1;
                r5 = r1._eventEmitter;
                r4 = r5.addListener;
                r3 = 'websocketMessage';
                r0 = function(a0) { // Environment: r2
                    _fun2359: for(var _fun2359_ip = 0; ; ) switch(_fun2359_ip) {
case 0:
                        r2 = a0;
                        r3 = r2.id;
                        r0 = _closure3_slot0;
                        r0 = r0._socketId;
                        if(!(r3 === r0)) { _fun2359_ip = 180; continue _fun2359 }
case 27:
                        r0 = r2.data;
                        r4 = r2.type;
                        r3 = 'binary';
                        if(!(r3 !== r4)) { _fun2359_ip = 83; continue _fun2359 }
case 45:
                        r3 = 'blob';
                        if(!(r3 === r4)) { _fun2359_ip = 117; continue _fun2359 }
case 53:
                        r3 = _closure1_slot7;
                        r5 = r3.default;
                        r4 = r5.createFromOptions;
                        r3 = r2.data;
                        r0 = r4.bind(r5)(r3);
                        _fun2359_ip = 117; continue _fun2359;
case 83:
                        r3 = _closure1_slot13;
                        r4 = r3.default;
                        r3 = r4.toByteArray;
                        r2 = r2.data;
                        r2 = r3.bind(r4)(r2);
                        r0 = r2.buffer;
case 117:
                        r2 = _closure3_slot0;
                        r1 = r2.dispatchEvent;
                        r3 = _closure1_slot12;
                        r5 = r3.default;
                        r4 = {};
                        r4['data'] = r0;
                        r0 = r5.prototype;
                        r3 = Object.create(r0, {constructor: {value: r5}});
                        r7 = 'message';
                        r8 = r3;
                        r6 = r4;
                        r0 = new r8[r5](r7, r6, r5);
                        r0 = r0 instanceof Object ? r0 : r3;
                        r0 = r1.bind(r2)(r0);
                        r0 = undefined;
                        return r0;
case 180:
                        r0 = undefined;
                        return r0;
                    }
                };
                r3 = r4.bind(r5)(r3, r0);
                r0 = new Array(4);
                r0[0] = r3;
                r6 = r1._eventEmitter;
                r5 = r6.addListener;
                r4 = 'websocketOpen';
                r3 = function(a0) { // Environment: r2
                    _fun2360: for(var _fun2360_ip = 0; ; ) switch(_fun2360_ip) {
case 0:
                        r0 = a0;
                        r3 = r0.id;
                        r2 = _closure3_slot0;
                        r2 = r2._socketId;
                        if(!(r3 === r2)) { _fun2360_ip = 102; continue _fun2360 }
case 24:
                        r2 = _closure3_slot0;
                        r1 = r2.OPEN;
                        r2['readyState'] = r1;
                        r0 = r0.protocol;
                        r2['protocol'] = r0;
                        r1 = r2.dispatchEvent;
                        r0 = _closure1_slot12;
                        r4 = r0.default;
                        r0 = r4.prototype;
                        r3 = Object.create(r0, {constructor: {value: r4}});
                        r5 = 'open';
                        r6 = r3;
                        r0 = new r6[r4](r5, r4);
                        r0 = r0 instanceof Object ? r0 : r3;
                        r0 = r1.bind(r2)(r0);
                        r0 = undefined;
                        return r0;
case 102:
                        r0 = undefined;
                        return r0;
                    }
                };
                r3 = r5.bind(r6)(r4, r3);
                r0[1] = r3;
                r6 = r1._eventEmitter;
                r5 = r6.addListener;
                r4 = 'websocketClosed';
                r3 = function(a0) { // Environment: r2
                    _fun2361: for(var _fun2361_ip = 0; ; ) switch(_fun2361_ip) {
case 0:
                        r0 = a0;
                        r3 = r0.id;
                        r2 = _closure3_slot0;
                        r2 = r2._socketId;
                        if(!(r3 === r2)) { _fun2361_ip = 135; continue _fun2361 }
case 24:
                        r1 = _closure3_slot0;
                        r2 = r1.CLOSED;
                        r1['readyState'] = r2;
                        r2 = r1.dispatchEvent;
                        r3 = _closure1_slot12;
                        r5 = r3.default;
                        r4 = {};
                        r3 = r0.code;
                        r4['code'] = r3;
                        r0 = r0.reason;
                        r4['reason'] = r0;
                        r0 = r5.prototype;
                        r3 = Object.create(r0, {constructor: {value: r5}});
                        r7 = 'close';
                        r8 = r3;
                        r6 = r4;
                        r0 = new r8[r5](r7, r6, r5);
                        r0 = r0 instanceof Object ? r0 : r3;
                        r0 = r2.bind(r1)(r0);
                        r0 = r1._unregisterEvents;
                        r0 = r0.bind(r1)();
                        r0 = r1.close;
                        r0 = r0.bind(r1)();
                        r0 = undefined;
                        return r0;
case 135:
                        r0 = undefined;
                        return r0;
                    }
                };
                r3 = r5.bind(r6)(r4, r3);
                r0[2] = r3;
                r5 = r1._eventEmitter;
                r4 = r5.addListener;
                r3 = 'websocketFailed';
                r2 = function(a0) { // Environment: r2
                    _fun2362: for(var _fun2362_ip = 0; ; ) switch(_fun2362_ip) {
case 0:
                        r0 = a0;
                        r3 = r0.id;
                        r2 = _closure3_slot0;
                        r2 = r2._socketId;
                        if(!(r3 === r2)) { _fun2362_ip = 191; continue _fun2362 }
case 27:
                        r1 = _closure3_slot0;
                        r2 = r1.CLOSED;
                        r1['readyState'] = r2;
                        r4 = r1.dispatchEvent;
                        r3 = _closure1_slot12;
                        r7 = r3.default;
                        r6 = {};
                        r2 = r0.message;
                        r6['message'] = r2;
                        r2 = r7.prototype;
                        r5 = Object.create(r2, {constructor: {value: r7}});
                        r9 = 'error';
                        r10 = r5;
                        r8 = r6;
                        r2 = new r10[r7](r9, r8, r7);
                        r2 = r2 instanceof Object ? r2 : r5;
                        r2 = r4.bind(r1)(r2);
                        r2 = r1.dispatchEvent;
                        r5 = r3.default;
                        r4 = {};
                        r3 = 1006;
                        r4['code'] = r3;
                        r0 = r0.message;
                        r4['reason'] = r0;
                        r0 = r5.prototype;
                        r3 = Object.create(r0, {constructor: {value: r5}});
                        r9 = 'close';
                        r10 = r3;
                        r8 = r4;
                        r0 = new r10[r5](r9, r8, r7);
                        r0 = r0 instanceof Object ? r0 : r3;
                        r0 = r2.bind(r1)(r0);
                        r0 = r1._unregisterEvents;
                        r0 = r0.bind(r1)();
                        r0 = r1.close;
                        r0 = r0.bind(r1)();
                        r0 = undefined;
                        return r0;
case 191:
                        r0 = undefined;
                        return r0;
                    }
                };
                r2 = r4.bind(r5)(r3, r2);
                r0[3] = r2;
                r1['_subscriptions'] = r0;
                r0 = undefined;
                return r0;
            };
            r4['value'] = r5;
            r0[6] = r4;
            r0 = r1.bind(r2)(r3, r0);
            return r0;
        };
        r1 = r1.bind(r0)(r7);
        r1['CONNECTING'] = r6;
        r1['OPEN'] = r5;
        r1['CLOSING'] = r4;
        r1['CLOSED'] = r3;
        r2['default'] = r1;
        return r0;
    };
    r6 = 209;
    r5 = [1, 203, 12, 13, 23, 25, 28, 183, 180, 191, 194, 33, 207, 210, 189, 198, 20];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r6 = a1;
        r2 = a5;
        r7 = a6;
        r0 = 0;
        r1 = r7[r0];
        r0 = undefined;
        r5 = r6.bind(r0)(r1);
        r1 = global;
        r9 = r1.Object;
        r8 = r9.defineProperty;
        r3 = {};
        r1 = true;
        r3['value'] = r1;
        r1 = '__esModule';
        r1 = r8.bind(r9)(r2, r1, r3);
        r2['default'] = r0;
        r1 = 1;
        r1 = r7[r1];
        r1 = r6.bind(r0)(r1);
        r1 = r5.bind(r0)(r1);
        r3 = 2;
        r3 = r7[r3];
        r3 = r6.bind(r0)(r3);
        r3 = r5.bind(r0)(r3);
        var _closure1_slot0 = r3;
        r3 = r1.default;
        r1 = function(a0, a1) { // Original name: WebSocketEvent, environment: r4
            r2 = a0;
            r4 = this;
            r1 = _closure1_slot0;
            r3 = r1.default;
            r1 = _closure1_slot1;
            r0 = undefined;
            r1 = r3.bind(r0)(r4, r1);
            r1 = r2.toString;
            r1 = r1.bind(r2)();
            r4['type'] = r1;
            r1 = global;
            r3 = r1.Object;
            r2 = r3.assign;
            r1 = a1;
            r1 = r2.bind(r3)(r4, r1);
            return r0;
        };
        var _closure1_slot1 = r1;
        r1 = r3.bind(r0)(r1);
        r2['default'] = r1;
        return r0;
    };
    r6 = 210;
    r5 = [1, 13, 12];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r2 = a5;
        r6 = a6;
        var _closure1_slot0 = r5;
        var _closure1_slot1 = r6;
        r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
            _fun2366: for(var _fun2366_ip = 0; ; ) switch(_fun2366_ip) {
case 0:
                r3 = a0;
                r5 = a2;
                r0 = _closure1_slot5;
                r1 = r0.default;
                r2 = undefined;
                r0 = a1;
                r8 = r1.bind(r2)(r0);
                r0 = _closure1_slot4;
                r1 = r0.default;
                r0 = _closure1_slot8;
                r0 = r0.bind(r2)();
                if(r0) { _fun2366_ip = 61; continue _fun2366 }
case 48:
                r0 = r8.apply;
                r0 = r0.bind(r8)(r3, r5);
                _fun2366_ip = 107; continue _fun2366;
case 61:
                r6 = global;
                r7 = r6.Reflect;
                r6 = r7.construct;
                if(r5) { _fun2366_ip = 81; continue _fun2366 }
case 77:
                r5 = new Array(0);
case 81:
                r4 = _closure1_slot5;
                r4 = r4.default;
                r4 = r4.bind(r2)(r3);
                r4 = r4.constructor;
                r0 = r6.bind(r7)(r8, r5, r4);
case 107:
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            }
        };
        var _closure1_slot7 = r0;
        r0 = function() { // Original name: _isNativeReflectConstruct, environment: r1
            _fun2367: for(var _fun2367_ip = 0; ; ) switch(_fun2367_ip) {
case 0:
case 2: // try_start_0
                r1 = global;
                r2 = r1.Boolean;
                r2 = r2.prototype;
                r3 = r2.valueOf;
                r2 = r3.call;
                r7 = r1.Reflect;
                r6 = r7.construct;
                r5 = r1.Boolean;
                r4 = new Array(0);
                r1 = function() { // Environment: r0
                    r0 = undefined;
                    return r0;
                };
                r1 = r6.bind(r7)(r5, r4, r1);
                r1 = r2.bind(r3)(r1);
                r1 = !r1;
                var _closure2_slot0 = r1;
case 70: // try_end0
                _fun2367_ip = 74; continue _fun2367;
case 72: // catch_target0
                CatchBlockStart(arg_register=1);
case 74:
                r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                    r0 = _closure2_slot0;
                    r0 = !r0;
                    r0 = !r0;
                    return r0;
                };
                _closure1_slot8 = r1;
                r0 = undefined;
                r0 = r1.bind(r0)();
                return r0;
            }
        };
        var _closure1_slot8 = r0;
        r0 = 0;
        r3 = r6[r0];
        r0 = undefined;
        r4 = r5.bind(r0)(r3);
        r3 = global;
        r9 = r3.Object;
        r8 = r9.defineProperty;
        r7 = {};
        r3 = true;
        r7['value'] = r3;
        r3 = '__esModule';
        r3 = r8.bind(r9)(r2, r3, r7);
        r2['default'] = r0;
        r3 = 1;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot2 = r3;
        r3 = 2;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot3 = r3;
        r3 = 3;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot4 = r3;
        r3 = 4;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot5 = r3;
        r3 = 5;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot6 = r3;
        r3 = 6;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        r3 = r3.default;
        r1 = function(a0) { // Environment: r1
            r3 = function(a0, a1, a2) { // Original name: File, environment: r5
                _fun2371: for(var _fun2371_ip = 0; ; ) switch(_fun2371_ip) {
case 0:
                    r6 = a0;
                    r2 = a1;
                    r5 = this;
                    r0 = _closure1_slot2;
                    r7 = r0.default;
                    r3 = _closure2_slot0;
                    r4 = undefined;
                    r3 = r7.bind(r4)(r5, r3);
                    r7 = _closure1_slot0;
                    r8 = _closure1_slot1;
                    r3 = 7;
                    r3 = r8[r3];
                    r8 = r7.bind(r4)(r3);
                    r3 = null;
                    r7 = r6 != r3;
                    if(!r7) { _fun2371_ip = 69; continue _fun2371 }
case 65:
                    r7 = r2 != r3;
case 69:
                    r3 = 'Failed to construct `File`: Must pass both `parts` and `name` arguments.';
                    r3 = r8.bind(r4)(r7, r3);
                    r3 = _closure1_slot7;
                    r1 = _closure2_slot0;
                    r0 = new Array(2);
                    r0[0] = r6;
                    r6 = a2;
                    r0[1] = r6;
                    r0 = r3.bind(r4)(r5, r1, r0);
                    r1 = r0.data;
                    r1['name'] = r2;
                    return r0;
                }
            };
            var _closure2_slot0 = r3;
            r1 = _closure1_slot6;
            r4 = r1.default;
            r2 = undefined;
            r1 = a0;
            r1 = r4.bind(r2)(r3, r1);
            r0 = _closure1_slot3;
            r1 = r0.default;
            r4 = {};
            r0 = 'name';
            r4['key'] = r0;
            r0 = function() { // Original name: get, environment: r5
                r0 = this;
                r2 = _closure1_slot0;
                r3 = _closure1_slot1;
                r1 = 7;
                r1 = r3[r1];
                r4 = undefined;
                r3 = r2.bind(r4)(r1);
                r1 = r0.data;
                r2 = r1.name;
                r1 = null;
                r2 = r2 != r1;
                r1 = 'Files must have a name set.';
                r1 = r3.bind(r4)(r2, r1);
                r0 = r0.data;
                r0 = r0.name;
                return r0;
            };
            r4['get'] = r0;
            r0 = new Array(2);
            r0[0] = r4;
            r4 = {};
            r6 = 'lastModified';
            r4['key'] = r6;
            r5 = function() { // Original name: get, environment: r5
                _fun2373: for(var _fun2373_ip = 0; ; ) switch(_fun2373_ip) {
case 0:
                    r0 = this;
                    r0 = r0.data;
                    r0 = r0.lastModified;
                    if(r0) { _fun2373_ip = 19; continue _fun2373 }
case 17:
                    r0 = 0;
case 19:
                    return r0;
                }
            };
            r4['get'] = r5;
            r0[1] = r4;
            r0 = r1.bind(r2)(r3, r0);
            return r0;
        };
        r1 = r1.bind(r0)(r3);
        r2['default'] = r1;
        return r0;
    };
    r6 = 211;
    r5 = [1, 12, 13, 23, 25, 28, 183, 20];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun2374: for(var _fun2374_ip = 0; ; ) switch(_fun2374_ip) {
case 0:
            r6 = a0;
            r4 = a1;
            r2 = a5;
            r5 = a6;
            r0 = global;
            r7 = r0.Object;
            r3 = r7.defineProperty;
            r1 = {};
            r0 = true;
            r1['value'] = r0;
            r0 = '__esModule';
            r0 = r3.bind(r7)(r2, r0, r1);
            r0 = undefined;
            r2['default'] = r0;
            r3 = r6.RN$useBuiltInEventTarget;
            r1 = null;
            r3 = r3 == r1;
            r1 = undefined;
            if(r3) { _fun2374_ip = 79; continue _fun2374 }
case 69:
            r3 = r6.RN$useBuiltInEventTarget;
            r1 = r3.bind(r6)();
case 79:
            if(r1) { _fun2374_ip = 101; continue _fun2374 }
case 82:
            r1 = 1;
            r1 = r5[r1];
            r1 = r4.bind(r0)(r1);
            r1 = r1.default;
            _fun2374_ip = 117; continue _fun2374;
case 101:
            r3 = 0;
            r3 = r5[r3];
            r3 = r4.bind(r0)(r3);
            r1 = r3.default;
case 117:
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 212;
    r5 = [213, 216];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r9 = a1;
        r2 = a5;
        r10 = a6;
        var _closure1_slot0 = r9;
        var _closure1_slot1 = r10;
        r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
            _fun2376: for(var _fun2376_ip = 0; ; ) switch(_fun2376_ip) {
case 0:
                r3 = a0;
                r0 = _closure1_slot5;
                r1 = r0.default;
                r2 = undefined;
                r0 = a1;
                r8 = r1.bind(r2)(r0);
                r0 = _closure1_slot4;
                r1 = r0.default;
                r0 = _closure1_slot10;
                r0 = r0.bind(r2)();
                if(r0) { _fun2376_ip = 58; continue _fun2376 }
case 45:
                r0 = r8.apply;
                r0 = r0.bind(r8)(r3, r2);
                _fun2376_ip = 101; continue _fun2376;
case 58:
                r5 = global;
                r7 = r5.Reflect;
                r6 = r7.construct;
                r5 = new Array(0);
                r4 = _closure1_slot5;
                r4 = r4.default;
                r4 = r4.bind(r2)(r3);
                r4 = r4.constructor;
                r0 = r6.bind(r7)(r8, r5, r4);
case 101:
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            }
        };
        var _closure1_slot9 = r0;
        r0 = function() { // Original name: _isNativeReflectConstruct, environment: r1
            _fun2377: for(var _fun2377_ip = 0; ; ) switch(_fun2377_ip) {
case 0:
case 2: // try_start_0
                r1 = global;
                r2 = r1.Boolean;
                r2 = r2.prototype;
                r3 = r2.valueOf;
                r2 = r3.call;
                r7 = r1.Reflect;
                r6 = r7.construct;
                r5 = r1.Boolean;
                r4 = new Array(0);
                r1 = function() { // Environment: r0
                    r0 = undefined;
                    return r0;
                };
                r1 = r6.bind(r7)(r5, r4, r1);
                r1 = r2.bind(r3)(r1);
                r1 = !r1;
                var _closure2_slot0 = r1;
case 70: // try_end0
                _fun2377_ip = 74; continue _fun2377;
case 72: // catch_target0
                CatchBlockStart(arg_register=1);
case 74:
                r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                    r0 = _closure2_slot0;
                    r0 = !r0;
                    r0 = !r0;
                    return r0;
                };
                _closure1_slot10 = r1;
                r0 = undefined;
                r0 = r1.bind(r0)();
                return r0;
            }
        };
        var _closure1_slot10 = r0;
        r5 = 0;
        r3 = r10[r5];
        r0 = undefined;
        r8 = r9.bind(r0)(r3);
        r3 = global;
        r7 = r3.Object;
        r6 = r7.defineProperty;
        r4 = {};
        r3 = true;
        r4['value'] = r3;
        r3 = '__esModule';
        r3 = r6.bind(r7)(r2, r3, r4);
        r2['default'] = r0;
        r4 = 1;
        r3 = r10[r4];
        r3 = r9.bind(r0)(r3);
        r3 = r8.bind(r0)(r3);
        var _closure1_slot2 = r3;
        r3 = 2;
        r6 = r10[r3];
        r6 = r9.bind(r0)(r6);
        r6 = r8.bind(r0)(r6);
        var _closure1_slot3 = r6;
        r6 = 3;
        r6 = r10[r6];
        r6 = r9.bind(r0)(r6);
        r6 = r8.bind(r0)(r6);
        var _closure1_slot4 = r6;
        r6 = 4;
        r6 = r10[r6];
        r6 = r9.bind(r0)(r6);
        r6 = r8.bind(r0)(r6);
        var _closure1_slot5 = r6;
        r6 = 5;
        r6 = r10[r6];
        r6 = r9.bind(r0)(r6);
        r6 = r8.bind(r0)(r6);
        var _closure1_slot6 = r6;
        r6 = 6;
        r6 = r10[r6];
        r6 = r9.bind(r0)(r6);
        r6 = r8.bind(r0)(r6);
        var _closure1_slot7 = r6;
        r6 = 7;
        r6 = r10[r6];
        r6 = r9.bind(r0)(r6);
        r6 = r8.bind(r0)(r6);
        r7 = 8;
        r7 = r10[r7];
        r7 = r9.bind(r0)(r7);
        r7 = r8.bind(r0)(r7);
        var _closure1_slot8 = r7;
        r6 = r6.default;
        r1 = function(a0) { // Environment: r1
            r3 = function() { // Original name: FileReader, environment: r5
                r3 = this;
                r1 = _closure1_slot2;
                r4 = r1.default;
                r2 = _closure2_slot0;
                r1 = undefined;
                r4 = r4.bind(r1)(r3, r2);
                r0 = _closure1_slot9;
                r0 = r0.bind(r1)(r3, r2);
                r1 = 0;
                r0['EMPTY'] = r1;
                r1 = 1;
                r0['LOADING'] = r1;
                r1 = 2;
                r0['DONE'] = r1;
                r1 = false;
                r0['_aborted'] = r1;
                r1 = r0._reset;
                r1 = r1.bind(r0)();
                return r0;
            };
            var _closure2_slot0 = r3;
            r1 = _closure1_slot6;
            r4 = r1.default;
            r2 = undefined;
            r1 = a0;
            r1 = r4.bind(r2)(r3, r1);
            r0 = _closure1_slot3;
            r1 = r0.default;
            r4 = {};
            r0 = '_reset';
            r4['key'] = r0;
            r0 = function() { // Original name: _reset, environment: r5
                r1 = this;
                r0 = 0;
                r1['_readyState'] = r0;
                r0 = null;
                r1['_error'] = r0;
                r1['_result'] = r0;
                r0 = undefined;
                return r0;
            };
            r4['value'] = r0;
            r0 = new Array(15);
            r0[0] = r4;
            r4 = {};
            r6 = '_setReadyState';
            r4['key'] = r6;
            r6 = function(a0) { // Original name: _setReadyState, environment: r5
                _fun2383: for(var _fun2383_ip = 0; ; ) switch(_fun2383_ip) {
case 0:
                    r3 = a0;
                    r2 = this;
                    r2['_readyState'] = r3;
                    r4 = r2.dispatchEvent;
                    r1 = _closure1_slot7;
                    r6 = r1.default;
                    r1 = r6.prototype;
                    r5 = Object.create(r1, {constructor: {value: r6}});
                    r7 = 'readystatechange';
                    r8 = r5;
                    r1 = new r8[r6](r7, r6);
                    r1 = r1 instanceof Object ? r1 : r5;
                    r1 = r4.bind(r2)(r1);
                    r1 = 2;
                    if(!(r3 === r1)) { _fun2383_ip = 237; continue _fun2383 }
case 67:
                    r1 = r2._aborted;
                    if(r1) { _fun2383_ip = 151; continue _fun2383 }
case 75:
                    r1 = r2._error;
                    r3 = r2.dispatchEvent;
                    r4 = _closure1_slot7;
                    r5 = r4.default;
                    r4 = r5.prototype;
                    r4 = Object.create(r4, {constructor: {value: r5}});
                    if(r1) { _fun2383_ip = 129; continue _fun2383 }
case 107:
                    r7 = 'load';
                    r8 = r4;
                    r1 = new r8[r5](r7, r6);
                    r1 = r1 instanceof Object ? r1 : r4;
                    r1 = r3.bind(r2)(r1);
                    _fun2383_ip = 194; continue _fun2383;
case 129:
                    r7 = 'error';
                    r8 = r4;
                    r1 = new r8[r5](r7, r6);
                    r1 = r1 instanceof Object ? r1 : r4;
                    r1 = r3.bind(r2)(r1);
                    _fun2383_ip = 194; continue _fun2383;
case 151:
                    r3 = r2.dispatchEvent;
                    r1 = _closure1_slot7;
                    r5 = r1.default;
                    r1 = r5.prototype;
                    r4 = Object.create(r1, {constructor: {value: r5}});
                    r7 = 'abort';
                    r8 = r4;
                    r1 = new r8[r5](r7, r6);
                    r1 = r1 instanceof Object ? r1 : r4;
                    r1 = r3.bind(r2)(r1);
case 194:
                    r1 = r2.dispatchEvent;
                    r0 = _closure1_slot7;
                    r4 = r0.default;
                    r0 = r4.prototype;
                    r3 = Object.create(r0, {constructor: {value: r4}});
                    r7 = 'loadend';
                    r8 = r3;
                    r0 = new r8[r4](r7, r6);
                    r0 = r0 instanceof Object ? r0 : r3;
                    r0 = r1.bind(r2)(r0);
case 237:
                    r0 = undefined;
                    return r0;
                }
            };
            r4['value'] = r6;
            r0[1] = r4;
            r4 = {};
            r6 = 'readAsArrayBuffer';
            r4['key'] = r6;
            r6 = function(a0) { // Original name: readAsArrayBuffer, environment: r5
                _fun2384: for(var _fun2384_ip = 0; ; ) switch(_fun2384_ip) {
case 0:
                    r1 = a0;
                    r3 = this;
                    var _closure3_slot0 = r3;
                    r2 = false;
                    r3['_aborted'] = r2;
                    r2 = null;
                    if(!(r1 != r2)) { _fun2384_ip = 78; continue _fun2384 }
case 25:
                    r2 = _closure1_slot8;
                    r3 = r2.default;
                    r2 = r3.readAsDataURL;
                    r1 = r1.data;
                    r3 = r2.bind(r3)(r1);
                    r2 = r3.then;
                    r1 = function(a0) { // Environment: r0
                        _fun2385: for(var _fun2385_ip = 0; ; ) switch(_fun2385_ip) {
case 0:
                            r3 = a0;
                            r0 = _closure3_slot0;
                            r0 = r0._aborted;
                            if(r0) { _fun2385_ip = 107; continue _fun2385 }
case 18:
                            r1 = r3.split;
                            r0 = ',';
                            r1 = r1.bind(r3)(r0);
                            r0 = 1;
                            r3 = r1[r0];
                            r4 = _closure1_slot0;
                            r1 = _closure1_slot1;
                            r0 = 9;
                            r1 = r1[r0];
                            r0 = undefined;
                            r1 = r4.bind(r0)(r1);
                            r1 = r1.toByteArray;
                            r1 = r1.bind(r0)(r3);
                            r3 = _closure3_slot0;
                            r1 = r1.buffer;
                            r3['_result'] = r1;
                            r2 = r3._setReadyState;
                            r1 = 2;
                            r1 = r2.bind(r3)(r1);
                            return r0;
case 107:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r0 = function(a0) { // Environment: r0
                        _fun2386: for(var _fun2386_ip = 0; ; ) switch(_fun2386_ip) {
case 0:
                            r1 = _closure3_slot0;
                            r1 = r1._aborted;
                            if(r1) { _fun2386_ip = 46; continue _fun2386 }
case 15:
                            r2 = _closure3_slot0;
                            r0 = a0;
                            r2['_error'] = r0;
                            r1 = r2._setReadyState;
                            r0 = 2;
                            r0 = r1.bind(r2)(r0);
                            r0 = undefined;
                            return r0;
case 46:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r0 = r2.bind(r3)(r1, r0);
                    r0 = undefined;
                    return r0;
case 78:
                    r0 = global;
                    r2 = r0.TypeError;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r5 = "Failed to execute 'readAsArrayBuffer' on 'FileReader': parameter 1 is not of type 'Blob'";
                    r6 = r1;
                    r0 = new r6[r2](r5, r4);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                }
            };
            r4['value'] = r6;
            r0[2] = r4;
            r4 = {};
            r6 = 'readAsDataURL';
            r4['key'] = r6;
            r6 = function(a0) { // Original name: readAsDataURL, environment: r5
                _fun2387: for(var _fun2387_ip = 0; ; ) switch(_fun2387_ip) {
case 0:
                    r1 = a0;
                    r3 = this;
                    var _closure3_slot0 = r3;
                    r2 = false;
                    r3['_aborted'] = r2;
                    r2 = null;
                    if(!(r1 != r2)) { _fun2387_ip = 78; continue _fun2387 }
case 25:
                    r2 = _closure1_slot8;
                    r3 = r2.default;
                    r2 = r3.readAsDataURL;
                    r1 = r1.data;
                    r3 = r2.bind(r3)(r1);
                    r2 = r3.then;
                    r1 = function(a0) { // Environment: r0
                        _fun2388: for(var _fun2388_ip = 0; ; ) switch(_fun2388_ip) {
case 0:
                            r1 = _closure3_slot0;
                            r1 = r1._aborted;
                            if(r1) { _fun2388_ip = 46; continue _fun2388 }
case 15:
                            r2 = _closure3_slot0;
                            r0 = a0;
                            r2['_result'] = r0;
                            r1 = r2._setReadyState;
                            r0 = 2;
                            r0 = r1.bind(r2)(r0);
                            r0 = undefined;
                            return r0;
case 46:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r0 = function(a0) { // Environment: r0
                        _fun2389: for(var _fun2389_ip = 0; ; ) switch(_fun2389_ip) {
case 0:
                            r1 = _closure3_slot0;
                            r1 = r1._aborted;
                            if(r1) { _fun2389_ip = 46; continue _fun2389 }
case 15:
                            r2 = _closure3_slot0;
                            r0 = a0;
                            r2['_error'] = r0;
                            r1 = r2._setReadyState;
                            r0 = 2;
                            r0 = r1.bind(r2)(r0);
                            r0 = undefined;
                            return r0;
case 46:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r0 = r2.bind(r3)(r1, r0);
                    r0 = undefined;
                    return r0;
case 78:
                    r0 = global;
                    r2 = r0.TypeError;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r5 = "Failed to execute 'readAsDataURL' on 'FileReader': parameter 1 is not of type 'Blob'";
                    r6 = r1;
                    r0 = new r6[r2](r5, r4);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                }
            };
            r4['value'] = r6;
            r0[3] = r4;
            r4 = {};
            r6 = 'readAsText';
            r4['key'] = r6;
            r6 = function(a0) { // Original name: readAsText, environment: r5
                _fun2390: for(var _fun2390_ip = 0; ; ) switch(_fun2390_ip) {
case 0:
                    r2 = a0;
                    r4 = this;
                    r0 = undefined;
                    r6 = undefined;
                    var _closure3_slot0 = r4;
                    r5 = arguments.length;
                    r3 = 1;
                    r7 = r5 > r3;
                    r8 = 'UTF-8';
                    r5 = r8;
                    if(!r7) { _fun2390_ip = 50; continue _fun2390 }
case 35:
                    r7 = arguments[r3];
                    r5 = r8;
                    if(!(r7 !== r0)) { _fun2390_ip = 50; continue _fun2390 }
case 46:
                    r5 = arguments[r3];
case 50:
                    r3 = false;
                    r4['_aborted'] = r3;
                    r3 = null;
                    if(!(r2 != r3)) { _fun2390_ip = 116; continue _fun2390 }
case 64:
                    r3 = _closure1_slot8;
                    r4 = r3.default;
                    r3 = r4.readAsText;
                    r2 = r2.data;
                    r4 = r3.bind(r4)(r2, r5);
                    r3 = r4.then;
                    r2 = function(a0) { // Environment: r1
                        _fun2391: for(var _fun2391_ip = 0; ; ) switch(_fun2391_ip) {
case 0:
                            r1 = _closure3_slot0;
                            r1 = r1._aborted;
                            if(r1) { _fun2391_ip = 46; continue _fun2391 }
case 15:
                            r2 = _closure3_slot0;
                            r0 = a0;
                            r2['_result'] = r0;
                            r1 = r2._setReadyState;
                            r0 = 2;
                            r0 = r1.bind(r2)(r0);
                            r0 = undefined;
                            return r0;
case 46:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r1 = function(a0) { // Environment: r1
                        _fun2392: for(var _fun2392_ip = 0; ; ) switch(_fun2392_ip) {
case 0:
                            r1 = _closure3_slot0;
                            r1 = r1._aborted;
                            if(r1) { _fun2392_ip = 46; continue _fun2392 }
case 15:
                            r2 = _closure3_slot0;
                            r0 = a0;
                            r2['_error'] = r0;
                            r1 = r2._setReadyState;
                            r0 = 2;
                            r0 = r1.bind(r2)(r0);
                            r0 = undefined;
                            return r0;
case 46:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r1 = r3.bind(r4)(r2, r1);
                    return r0;
case 116:
                    r0 = global;
                    r2 = r0.TypeError;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r10 = "Failed to execute 'readAsText' on 'FileReader': parameter 1 is not of type 'Blob'";
                    r11 = r1;
                    r0 = new r11[r2](r10, r9);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                }
            };
            r4['value'] = r6;
            r0[4] = r4;
            r4 = {};
            r6 = 'abort';
            r4['key'] = r6;
            r6 = function() { // Original name: abort, environment: r5
                _fun2393: for(var _fun2393_ip = 0; ; ) switch(_fun2393_ip) {
case 0:
                    r1 = this;
                    r0 = true;
                    r1['_aborted'] = r0;
                    r2 = r1._readyState;
                    r0 = 0;
                    if(!(r2 !== r0)) { _fun2393_ip = 56; continue _fun2393 }
case 22:
                    r0 = r1._readyState;
                    r2 = 2;
                    if(!(r0 !== r2)) { _fun2393_ip = 56; continue _fun2393 }
case 35:
                    r0 = r1._reset;
                    r0 = r0.bind(r1)();
                    r0 = r1._setReadyState;
                    r0 = r0.bind(r1)(r2);
case 56:
                    r0 = r1._reset;
                    r0 = r0.bind(r1)();
                    r0 = undefined;
                    return r0;
                }
            };
            r4['value'] = r6;
            r0[5] = r4;
            r4 = {};
            r6 = 'readyState';
            r4['key'] = r6;
            r6 = function() { // Original name: get, environment: r5
                r0 = this;
                r0 = r0._readyState;
                return r0;
            };
            r4['get'] = r6;
            r0[6] = r4;
            r4 = {};
            r6 = 'error';
            r4['key'] = r6;
            r6 = function() { // Original name: get, environment: r5
                r0 = this;
                r0 = r0._error;
                return r0;
            };
            r4['get'] = r6;
            r0[7] = r4;
            r4 = {};
            r6 = 'result';
            r4['key'] = r6;
            r6 = function() { // Original name: get, environment: r5
                r0 = this;
                r0 = r0._result;
                return r0;
            };
            r4['get'] = r6;
            r0[8] = r4;
            r4 = {};
            r6 = 'onabort';
            r4['key'] = r6;
            r6 = function() { // Original name: get, environment: r5
                r1 = _closure1_slot0;
                r2 = _closure1_slot1;
                r0 = 10;
                r0 = r2[r0];
                r3 = undefined;
                r0 = r1.bind(r3)(r0);
                r2 = r0.getEventHandlerAttribute;
                r1 = this;
                r0 = 'abort';
                r0 = r2.bind(r3)(r1, r0);
                return r0;
            };
            r4['get'] = r6;
            r6 = function(a0) { // Original name: set, environment: r5
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 10;
                r1 = r1[r0];
                r0 = undefined;
                r1 = r2.bind(r0)(r1);
                r4 = r1.setEventHandlerAttribute;
                r3 = this;
                r2 = 'abort';
                r1 = a0;
                r1 = r4.bind(r0)(r3, r2, r1);
                return r0;
            };
            r4['set'] = r6;
            r0[9] = r4;
            r4 = {};
            r6 = 'onerror';
            r4['key'] = r6;
            r6 = function() { // Original name: get, environment: r5
                r1 = _closure1_slot0;
                r2 = _closure1_slot1;
                r0 = 10;
                r0 = r2[r0];
                r3 = undefined;
                r0 = r1.bind(r3)(r0);
                r2 = r0.getEventHandlerAttribute;
                r1 = this;
                r0 = 'error';
                r0 = r2.bind(r3)(r1, r0);
                return r0;
            };
            r4['get'] = r6;
            r6 = function(a0) { // Original name: set, environment: r5
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 10;
                r1 = r1[r0];
                r0 = undefined;
                r1 = r2.bind(r0)(r1);
                r4 = r1.setEventHandlerAttribute;
                r3 = this;
                r2 = 'error';
                r1 = a0;
                r1 = r4.bind(r0)(r3, r2, r1);
                return r0;
            };
            r4['set'] = r6;
            r0[10] = r4;
            r4 = {};
            r6 = 'onload';
            r4['key'] = r6;
            r6 = function() { // Original name: get, environment: r5
                r1 = _closure1_slot0;
                r2 = _closure1_slot1;
                r0 = 10;
                r0 = r2[r0];
                r3 = undefined;
                r0 = r1.bind(r3)(r0);
                r2 = r0.getEventHandlerAttribute;
                r1 = this;
                r0 = 'load';
                r0 = r2.bind(r3)(r1, r0);
                return r0;
            };
            r4['get'] = r6;
            r6 = function(a0) { // Original name: set, environment: r5
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 10;
                r1 = r1[r0];
                r0 = undefined;
                r1 = r2.bind(r0)(r1);
                r4 = r1.setEventHandlerAttribute;
                r3 = this;
                r2 = 'load';
                r1 = a0;
                r1 = r4.bind(r0)(r3, r2, r1);
                return r0;
            };
            r4['set'] = r6;
            r0[11] = r4;
            r4 = {};
            r6 = 'onloadstart';
            r4['key'] = r6;
            r6 = function() { // Original name: get, environment: r5
                r1 = _closure1_slot0;
                r2 = _closure1_slot1;
                r0 = 10;
                r0 = r2[r0];
                r3 = undefined;
                r0 = r1.bind(r3)(r0);
                r2 = r0.getEventHandlerAttribute;
                r1 = this;
                r0 = 'loadstart';
                r0 = r2.bind(r3)(r1, r0);
                return r0;
            };
            r4['get'] = r6;
            r6 = function(a0) { // Original name: set, environment: r5
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 10;
                r1 = r1[r0];
                r0 = undefined;
                r1 = r2.bind(r0)(r1);
                r4 = r1.setEventHandlerAttribute;
                r3 = this;
                r2 = 'loadstart';
                r1 = a0;
                r1 = r4.bind(r0)(r3, r2, r1);
                return r0;
            };
            r4['set'] = r6;
            r0[12] = r4;
            r4 = {};
            r6 = 'onloadend';
            r4['key'] = r6;
            r6 = function() { // Original name: get, environment: r5
                r1 = _closure1_slot0;
                r2 = _closure1_slot1;
                r0 = 10;
                r0 = r2[r0];
                r3 = undefined;
                r0 = r1.bind(r3)(r0);
                r2 = r0.getEventHandlerAttribute;
                r1 = this;
                r0 = 'loadend';
                r0 = r2.bind(r3)(r1, r0);
                return r0;
            };
            r4['get'] = r6;
            r6 = function(a0) { // Original name: set, environment: r5
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 10;
                r1 = r1[r0];
                r0 = undefined;
                r1 = r2.bind(r0)(r1);
                r4 = r1.setEventHandlerAttribute;
                r3 = this;
                r2 = 'loadend';
                r1 = a0;
                r1 = r4.bind(r0)(r3, r2, r1);
                return r0;
            };
            r4['set'] = r6;
            r0[13] = r4;
            r4 = {};
            r6 = 'onprogress';
            r4['key'] = r6;
            r6 = function() { // Original name: get, environment: r5
                r1 = _closure1_slot0;
                r2 = _closure1_slot1;
                r0 = 10;
                r0 = r2[r0];
                r3 = undefined;
                r0 = r1.bind(r3)(r0);
                r2 = r0.getEventHandlerAttribute;
                r1 = this;
                r0 = 'progress';
                r0 = r2.bind(r3)(r1, r0);
                return r0;
            };
            r4['get'] = r6;
            r5 = function(a0) { // Original name: set, environment: r5
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 10;
                r1 = r1[r0];
                r0 = undefined;
                r1 = r2.bind(r0)(r1);
                r4 = r1.setEventHandlerAttribute;
                r3 = this;
                r2 = 'progress';
                r1 = a0;
                r1 = r4.bind(r0)(r3, r2, r1);
                return r0;
            };
            r4['set'] = r5;
            r0[14] = r4;
            r0 = r1.bind(r2)(r3, r0);
            return r0;
        };
        r1 = r1.bind(r0)(r6);
        r1['EMPTY'] = r5;
        r1['LOADING'] = r4;
        r1['DONE'] = r3;
        r2['default'] = r1;
        return r0;
    };
    r6 = 213;
    r5 = [1, 12, 13, 23, 25, 28, 175, 177, 214, 189, 185];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun2409: for(var _fun2409_ip = 0; ; ) switch(_fun2409_ip) {
case 0:
            r2 = a5;
            var _closure1_slot0 = r2;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun2410: for(var _fun2410_ip = 0; ; ) switch(_fun2410_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun2410_ip = 104; continue _fun2410 }
case 20:
                    r2 = r1.WeakMap;
                    r3 = r2.prototype;
                    r3 = Object.create(r3, {constructor: {value: r2}});
                    r5 = r3;
                    r2 = new r5[r2](r4);
                    r2 = r2 instanceof Object ? r2 : r3;
                    var _closure2_slot0 = r2;
                    r1 = r1.WeakMap;
                    r2 = r1.prototype;
                    r2 = Object.create(r2, {constructor: {value: r1}});
                    r5 = r2;
                    r1 = new r5[r1](r4);
                    r1 = r1 instanceof Object ? r1 : r2;
                    var _closure2_slot1 = r1;
                    r2 = function(a0) { // Original name: _getRequireWildcardCache, environment: r0
                        _fun2411: for(var _fun2411_ip = 0; ; ) switch(_fun2411_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun2411_ip = 15; continue _fun2411 }
case 9:
                            r0 = _closure2_slot0;
                            _fun2411_ip = 19; continue _fun2411;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot3 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot3 = r0;
            r4 = global;
            r6 = r4.Object;
            r5 = r6.defineProperty;
            r1 = {};
            r0 = true;
            r1['value'] = r0;
            r0 = '__esModule';
            r0 = r5.bind(r6)(r2, r0, r1);
            r0 = {};
            var _closure1_slot1 = r0;
            r0 = undefined;
            r2['default'] = r0;
            r5 = a6;
            r1 = 0;
            r5 = r5[r1];
            r1 = a1;
            r6 = r1.bind(r0)(r5);
            if(!r6) { _fun2409_ip = 98; continue _fun2409 }
case 84:
            r5 = r6.__esModule;
            r1 = r6;
            if(r5) { _fun2409_ip = 365; continue _fun2409 }
case 98:
            r16 = null;
            if(!(r16 !== r6)) { _fun2409_ip = 356; continue _fun2409 }
case 107:
            r7 = typeof r6;
            r5 = 'object';
            if(!(r5 !== r7)) { _fun2409_ip = 129; continue _fun2409 }
case 118:
            r5 = 'function';
            if(!(r5 === r7)) { _fun2409_ip = 356; continue _fun2409 }
case 129:
            r5 = _closure1_slot3;
            r7 = r5.bind(r0)(r0);
            if(!r7) { _fun2409_ip = 157; continue _fun2409 }
case 141:
            r5 = r7.has;
            r5 = r5.bind(r7)(r6);
            if(r5) { _fun2409_ip = 344; continue _fun2409 }
case 157:
            r5 = Object.create(r16);
            r8 = r4.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun2409_ip = 185; continue _fun2409 }
case 174:
            r8 = r4.Object;
            r15 = r8.getOwnPropertyDescriptor;
case 185:
            r13 = r6;
            r9 = 'default';
            r8 = undefined;
            for(r10 in r13)
case 202:
            {
case 211:
                r20 = r10;
                if(r9 === r20) { _fun2409_ip = 202; continue _fun2409 }
case 218:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r6, r20);
                if(!r17) { _fun2409_ip = 202; continue _fun2409 }
case 239:
                r17 = null;
                if(!r15) { _fun2409_ip = 261; continue _fun2409 }
case 244:
                r19 = r4.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r6, r20);
case 261:
                if(!r17) { _fun2409_ip = 280; continue _fun2409 }
case 264:
                r18 = r17.get;
                if(r18) { _fun2409_ip = 293; continue _fun2409 }
case 272:
                r18 = r17.set;
                if(r18) { _fun2409_ip = 293; continue _fun2409 }
case 280:
                r18 = r6[r20];
                r5[r20] = r18;
                r8 = r17;
                _fun2409_ip = 202; continue _fun2409;
case 293:
                r19 = r4.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r5, r20, r17);
                r8 = r17;
                _fun2409_ip = 202; continue _fun2409;
            }
case 316:
            r5['default'] = r6;
            r1 = r5;
            if(!r7) { _fun2409_ip = 365; continue _fun2409 }
case 328:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r5);
            r1 = r5;
            _fun2409_ip = 365; continue _fun2409;
case 344:
            r5 = r7.get;
            r1 = r5.bind(r7)(r6);
            _fun2409_ip = 365; continue _fun2409;
case 356:
            r5 = {};
            r5['default'] = r6;
            r1 = r5;
case 365:
            var _closure1_slot2 = r1;
            r5 = r4.Object;
            r4 = r5.keys;
            r5 = r4.bind(r5)(r1);
            r4 = r5.forEach;
            r3 = function(a0) { // Environment: r3
                _fun2412: for(var _fun2412_ip = 0; ; ) switch(_fun2412_ip) {
case 0:
                    r4 = a0;
                    var _closure2_slot0 = r4;
                    r0 = 'default';
                    if(!(r4 !== r0)) { _fun2412_ip = 152; continue _fun2412 }
case 20:
                    r0 = '__esModule';
                    if(!(r4 !== r0)) { _fun2412_ip = 152; continue _fun2412 }
case 31:
                    r1 = global;
                    r0 = r1.Object;
                    r0 = r0.prototype;
                    r6 = r0.hasOwnProperty;
                    r3 = r6.call;
                    r2 = _closure1_slot1;
                    r2 = r3.bind(r6)(r2, r4);
                    if(r2) { _fun2412_ip = 148; continue _fun2412 }
case 70:
                    r2 = _closure1_slot0;
                    r2 = r4 in r2;
                    if(!r2) { _fun2412_ip = 101; continue _fun2412 }
case 81:
                    r2 = _closure1_slot0;
                    r3 = r2[r4];
                    r2 = _closure1_slot2;
                    r2 = r2[r4];
                    if(!(r3 !== r2)) { _fun2412_ip = 144; continue _fun2412 }
case 101:
                    r3 = r1.Object;
                    r2 = r3.defineProperty;
                    r1 = _closure1_slot0;
                    r0 = {};
                    r6 = true;
                    r0['enumerable'] = r6;
                    r5 = function() { // Original name: get, environment: r5
                        r1 = _closure1_slot2;
                        r0 = _closure2_slot0;
                        r0 = r1[r0];
                        return r0;
                    };
                    r0['get'] = r5;
                    r0 = r2.bind(r3)(r1, r4, r0);
                    r0 = undefined;
                    return r0;
case 144:
                    r0 = undefined;
                    return r0;
case 148:
                    r0 = undefined;
                    return r0;
case 152:
                    r0 = undefined;
                    return r0;
                }
            };
            r3 = r4.bind(r5)(r3);
            r1 = r1.default;
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 214;
    r5 = [215];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun2414: for(var _fun2414_ip = 0; ; ) switch(_fun2414_ip) {
case 0:
            r2 = a5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun2415: for(var _fun2415_ip = 0; ; ) switch(_fun2415_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun2415_ip = 104; continue _fun2415 }
case 20:
                    r2 = r1.WeakMap;
                    r3 = r2.prototype;
                    r3 = Object.create(r3, {constructor: {value: r2}});
                    r5 = r3;
                    r2 = new r5[r2](r4);
                    r2 = r2 instanceof Object ? r2 : r3;
                    var _closure2_slot0 = r2;
                    r1 = r1.WeakMap;
                    r2 = r1.prototype;
                    r2 = Object.create(r2, {constructor: {value: r1}});
                    r5 = r2;
                    r1 = new r5[r1](r4);
                    r1 = r1 instanceof Object ? r1 : r2;
                    var _closure2_slot1 = r1;
                    r2 = function(a0) { // Original name: _getRequireWildcardCache, environment: r0
                        _fun2416: for(var _fun2416_ip = 0; ; ) switch(_fun2416_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun2416_ip = 15; continue _fun2416 }
case 9:
                            r0 = _closure2_slot0;
                            _fun2416_ip = 19; continue _fun2416;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot0 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot0 = r0;
            r15 = global;
            r5 = r15.Object;
            r4 = r5.defineProperty;
            r3 = {};
            r0 = true;
            r3['value'] = r0;
            r0 = '__esModule';
            r0 = r4.bind(r5)(r2, r0, r3);
            r0 = undefined;
            r2['default'] = r0;
            r4 = a6;
            r3 = 0;
            r4 = r4[r3];
            r3 = a1;
            r3 = r3.bind(r0)(r4);
            if(!r3) { _fun2414_ip = 88; continue _fun2414 }
case 74:
            r5 = r3.__esModule;
            r4 = r3;
            if(r5) { _fun2414_ip = 355; continue _fun2414 }
case 88:
            r14 = null;
            if(!(r14 !== r3)) { _fun2414_ip = 346; continue _fun2414 }
case 97:
            r6 = typeof r3;
            r5 = 'object';
            if(!(r5 !== r6)) { _fun2414_ip = 119; continue _fun2414 }
case 108:
            r5 = 'function';
            if(!(r5 === r6)) { _fun2414_ip = 346; continue _fun2414 }
case 119:
            r1 = _closure1_slot0;
            r5 = r1.bind(r0)(r0);
            if(!r5) { _fun2414_ip = 147; continue _fun2414 }
case 131:
            r1 = r5.has;
            r1 = r1.bind(r5)(r3);
            if(r1) { _fun2414_ip = 334; continue _fun2414 }
case 147:
            r1 = Object.create(r14);
            r6 = r15.Object;
            r13 = r6.defineProperty;
            if(!r13) { _fun2414_ip = 175; continue _fun2414 }
case 164:
            r6 = r15.Object;
            r13 = r6.getOwnPropertyDescriptor;
case 175:
            r11 = r3;
            r7 = 'default';
            r6 = undefined;
            for(r8 in r11)
case 192:
            {
case 201:
                r19 = r8;
                if(r7 === r19) { _fun2414_ip = 192; continue _fun2414 }
case 208:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r3, r19);
                if(!r16) { _fun2414_ip = 192; continue _fun2414 }
case 229:
                r16 = null;
                if(!r13) { _fun2414_ip = 251; continue _fun2414 }
case 234:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r3, r19);
case 251:
                if(!r16) { _fun2414_ip = 270; continue _fun2414 }
case 254:
                r17 = r16.get;
                if(r17) { _fun2414_ip = 283; continue _fun2414 }
case 262:
                r17 = r16.set;
                if(r17) { _fun2414_ip = 283; continue _fun2414 }
case 270:
                r17 = r3[r19];
                r1[r19] = r17;
                r6 = r16;
                _fun2414_ip = 192; continue _fun2414;
case 283:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r1, r19, r16);
                r6 = r16;
                _fun2414_ip = 192; continue _fun2414;
            }
case 306:
            r1['default'] = r3;
            r4 = r1;
            if(!r5) { _fun2414_ip = 355; continue _fun2414 }
case 318:
            r6 = r5.set;
            r6 = r6.bind(r5)(r3, r1);
            r4 = r1;
            _fun2414_ip = 355; continue _fun2414;
case 334:
            r1 = r5.get;
            r4 = r1.bind(r5)(r3);
            _fun2414_ip = 355; continue _fun2414;
case 346:
            r1 = {};
            r1['default'] = r3;
            r4 = r1;
case 355:
            r3 = r4.getEnforcing;
            r1 = 'FileReaderModule';
            r1 = r3.bind(r4)(r1);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 215;
    r5 = [36];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r8 = a1;
        r2 = a5;
        r9 = a6;
        var _closure1_slot0 = r8;
        var _closure1_slot1 = r9;
        r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
            _fun2418: for(var _fun2418_ip = 0; ; ) switch(_fun2418_ip) {
case 0:
                r3 = a0;
                r0 = _closure1_slot5;
                r1 = r0.default;
                r2 = undefined;
                r0 = a1;
                r8 = r1.bind(r2)(r0);
                r0 = _closure1_slot4;
                r1 = r0.default;
                r0 = _closure1_slot9;
                r0 = r0.bind(r2)();
                if(r0) { _fun2418_ip = 58; continue _fun2418 }
case 45:
                r0 = r8.apply;
                r0 = r0.bind(r8)(r3, r2);
                _fun2418_ip = 101; continue _fun2418;
case 58:
                r5 = global;
                r7 = r5.Reflect;
                r6 = r7.construct;
                r5 = new Array(0);
                r4 = _closure1_slot5;
                r4 = r4.default;
                r4 = r4.bind(r2)(r3);
                r4 = r4.constructor;
                r0 = r6.bind(r7)(r8, r5, r4);
case 101:
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            }
        };
        var _closure1_slot8 = r0;
        r0 = function() { // Original name: _isNativeReflectConstruct, environment: r1
            _fun2419: for(var _fun2419_ip = 0; ; ) switch(_fun2419_ip) {
case 0:
case 2: // try_start_0
                r1 = global;
                r2 = r1.Boolean;
                r2 = r2.prototype;
                r3 = r2.valueOf;
                r2 = r3.call;
                r7 = r1.Reflect;
                r6 = r7.construct;
                r5 = r1.Boolean;
                r4 = new Array(0);
                r1 = function() { // Environment: r0
                    r0 = undefined;
                    return r0;
                };
                r1 = r6.bind(r7)(r5, r4, r1);
                r1 = r2.bind(r3)(r1);
                r1 = !r1;
                var _closure2_slot0 = r1;
case 70: // try_end0
                _fun2419_ip = 74; continue _fun2419;
case 72: // catch_target0
                CatchBlockStart(arg_register=1);
case 74:
                r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                    r0 = _closure2_slot0;
                    r0 = !r0;
                    r0 = !r0;
                    return r0;
                };
                _closure1_slot9 = r1;
                r0 = undefined;
                r0 = r1.bind(r0)();
                return r0;
            }
        };
        var _closure1_slot9 = r0;
        r5 = 0;
        r3 = r9[r5];
        r0 = undefined;
        r7 = r8.bind(r0)(r3);
        r3 = global;
        r10 = r3.Object;
        r6 = r10.defineProperty;
        r4 = {};
        r3 = true;
        r4['value'] = r3;
        r3 = '__esModule';
        r3 = r6.bind(r10)(r2, r3, r4);
        r2['default'] = r0;
        r4 = 1;
        r3 = r9[r4];
        r3 = r8.bind(r0)(r3);
        r3 = r7.bind(r0)(r3);
        var _closure1_slot2 = r3;
        r3 = 2;
        r6 = r9[r3];
        r6 = r8.bind(r0)(r6);
        r6 = r7.bind(r0)(r6);
        var _closure1_slot3 = r6;
        r6 = 3;
        r6 = r9[r6];
        r6 = r8.bind(r0)(r6);
        r6 = r7.bind(r0)(r6);
        var _closure1_slot4 = r6;
        r6 = 4;
        r6 = r9[r6];
        r6 = r8.bind(r0)(r6);
        r6 = r7.bind(r0)(r6);
        var _closure1_slot5 = r6;
        r6 = 5;
        r6 = r9[r6];
        r6 = r8.bind(r0)(r6);
        r6 = r7.bind(r0)(r6);
        var _closure1_slot6 = r6;
        r6 = 6;
        r6 = r9[r6];
        r6 = r8.bind(r0)(r6);
        r6 = r7.bind(r0)(r6);
        var _closure1_slot7 = r6;
        r6 = 7;
        r6 = r9[r6];
        r6 = r8.bind(r0)(r6);
        r6 = r7.bind(r0)(r6);
        r8 = r6.default;
        r7 = r8.apply;
        r6 = ['abort', 'error', 'load', 'loadstart', 'loadend', 'progress'];
        r6 = r7.bind(r8)(r0, r6);
        r1 = function(a0) { // Environment: r1
            r3 = function() { // Original name: FileReader, environment: r5
                r3 = this;
                r1 = _closure1_slot2;
                r4 = r1.default;
                r2 = _closure2_slot0;
                r1 = undefined;
                r4 = r4.bind(r1)(r3, r2);
                r0 = _closure1_slot8;
                r0 = r0.bind(r1)(r3, r2);
                r1 = 0;
                r0['EMPTY'] = r1;
                r1 = 1;
                r0['LOADING'] = r1;
                r1 = 2;
                r0['DONE'] = r1;
                r1 = false;
                r0['_aborted'] = r1;
                r1 = r0._reset;
                r1 = r1.bind(r0)();
                return r0;
            };
            var _closure2_slot0 = r3;
            r1 = _closure1_slot6;
            r4 = r1.default;
            r2 = undefined;
            r1 = a0;
            r1 = r4.bind(r2)(r3, r1);
            r0 = _closure1_slot3;
            r1 = r0.default;
            r4 = {};
            r0 = '_reset';
            r4['key'] = r0;
            r0 = function() { // Original name: _reset, environment: r5
                r1 = this;
                r0 = 0;
                r1['_readyState'] = r0;
                r0 = null;
                r1['_error'] = r0;
                r1['_result'] = r0;
                r0 = undefined;
                return r0;
            };
            r4['value'] = r0;
            r0 = new Array(9);
            r0[0] = r4;
            r4 = {};
            r6 = '_setReadyState';
            r4['key'] = r6;
            r6 = function(a0) { // Original name: _setReadyState, environment: r5
                _fun2425: for(var _fun2425_ip = 0; ; ) switch(_fun2425_ip) {
case 0:
                    r1 = a0;
                    r2 = this;
                    r2['_readyState'] = r1;
                    r3 = r2.dispatchEvent;
                    r0 = {};
                    r4 = 'readystatechange';
                    r0['type'] = r4;
                    r0 = r3.bind(r2)(r0);
                    r0 = 2;
                    if(!(r1 === r0)) { _fun2425_ip = 132; continue _fun2425 }
case 38:
                    r0 = r2._aborted;
                    if(r0) { _fun2425_ip = 92; continue _fun2425 }
case 46:
                    r3 = r2._error;
                    r1 = r2.dispatchEvent;
                    r0 = {};
                    if(r3) { _fun2425_ip = 77; continue _fun2425 }
case 62:
                    r3 = 'load';
                    r0['type'] = r3;
                    r3 = r1.bind(r2)(r0);
                    _fun2425_ip = 112; continue _fun2425;
case 77:
                    r3 = 'error';
                    r0['type'] = r3;
                    r0 = r1.bind(r2)(r0);
                    _fun2425_ip = 112; continue _fun2425;
case 92:
                    r1 = r2.dispatchEvent;
                    r0 = {};
                    r3 = 'abort';
                    r0['type'] = r3;
                    r0 = r1.bind(r2)(r0);
case 112:
                    r1 = r2.dispatchEvent;
                    r0 = {};
                    r3 = 'loadend';
                    r0['type'] = r3;
                    r0 = r1.bind(r2)(r0);
case 132:
                    r0 = undefined;
                    return r0;
                }
            };
            r4['value'] = r6;
            r0[1] = r4;
            r4 = {};
            r6 = 'readAsArrayBuffer';
            r4['key'] = r6;
            r6 = function(a0) { // Original name: readAsArrayBuffer, environment: r5
                _fun2426: for(var _fun2426_ip = 0; ; ) switch(_fun2426_ip) {
case 0:
                    r1 = a0;
                    r3 = this;
                    var _closure3_slot0 = r3;
                    r2 = false;
                    r3['_aborted'] = r2;
                    r2 = null;
                    if(!(r1 != r2)) { _fun2426_ip = 78; continue _fun2426 }
case 25:
                    r2 = _closure1_slot7;
                    r3 = r2.default;
                    r2 = r3.readAsDataURL;
                    r1 = r1.data;
                    r3 = r2.bind(r3)(r1);
                    r2 = r3.then;
                    r1 = function(a0) { // Environment: r0
                        _fun2427: for(var _fun2427_ip = 0; ; ) switch(_fun2427_ip) {
case 0:
                            r3 = a0;
                            r0 = _closure3_slot0;
                            r0 = r0._aborted;
                            if(r0) { _fun2427_ip = 107; continue _fun2427 }
case 18:
                            r1 = r3.split;
                            r0 = ',';
                            r1 = r1.bind(r3)(r0);
                            r0 = 1;
                            r3 = r1[r0];
                            r4 = _closure1_slot0;
                            r1 = _closure1_slot1;
                            r0 = 8;
                            r1 = r1[r0];
                            r0 = undefined;
                            r1 = r4.bind(r0)(r1);
                            r1 = r1.toByteArray;
                            r1 = r1.bind(r0)(r3);
                            r3 = _closure3_slot0;
                            r1 = r1.buffer;
                            r3['_result'] = r1;
                            r2 = r3._setReadyState;
                            r1 = 2;
                            r1 = r2.bind(r3)(r1);
                            return r0;
case 107:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r0 = function(a0) { // Environment: r0
                        _fun2428: for(var _fun2428_ip = 0; ; ) switch(_fun2428_ip) {
case 0:
                            r1 = _closure3_slot0;
                            r1 = r1._aborted;
                            if(r1) { _fun2428_ip = 46; continue _fun2428 }
case 15:
                            r2 = _closure3_slot0;
                            r0 = a0;
                            r2['_error'] = r0;
                            r1 = r2._setReadyState;
                            r0 = 2;
                            r0 = r1.bind(r2)(r0);
                            r0 = undefined;
                            return r0;
case 46:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r0 = r2.bind(r3)(r1, r0);
                    r0 = undefined;
                    return r0;
case 78:
                    r0 = global;
                    r2 = r0.TypeError;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r5 = "Failed to execute 'readAsArrayBuffer' on 'FileReader': parameter 1 is not of type 'Blob'";
                    r6 = r1;
                    r0 = new r6[r2](r5, r4);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                }
            };
            r4['value'] = r6;
            r0[2] = r4;
            r4 = {};
            r6 = 'readAsDataURL';
            r4['key'] = r6;
            r6 = function(a0) { // Original name: readAsDataURL, environment: r5
                _fun2429: for(var _fun2429_ip = 0; ; ) switch(_fun2429_ip) {
case 0:
                    r1 = a0;
                    r3 = this;
                    var _closure3_slot0 = r3;
                    r2 = false;
                    r3['_aborted'] = r2;
                    r2 = null;
                    if(!(r1 != r2)) { _fun2429_ip = 78; continue _fun2429 }
case 25:
                    r2 = _closure1_slot7;
                    r3 = r2.default;
                    r2 = r3.readAsDataURL;
                    r1 = r1.data;
                    r3 = r2.bind(r3)(r1);
                    r2 = r3.then;
                    r1 = function(a0) { // Environment: r0
                        _fun2430: for(var _fun2430_ip = 0; ; ) switch(_fun2430_ip) {
case 0:
                            r1 = _closure3_slot0;
                            r1 = r1._aborted;
                            if(r1) { _fun2430_ip = 46; continue _fun2430 }
case 15:
                            r2 = _closure3_slot0;
                            r0 = a0;
                            r2['_result'] = r0;
                            r1 = r2._setReadyState;
                            r0 = 2;
                            r0 = r1.bind(r2)(r0);
                            r0 = undefined;
                            return r0;
case 46:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r0 = function(a0) { // Environment: r0
                        _fun2431: for(var _fun2431_ip = 0; ; ) switch(_fun2431_ip) {
case 0:
                            r1 = _closure3_slot0;
                            r1 = r1._aborted;
                            if(r1) { _fun2431_ip = 46; continue _fun2431 }
case 15:
                            r2 = _closure3_slot0;
                            r0 = a0;
                            r2['_error'] = r0;
                            r1 = r2._setReadyState;
                            r0 = 2;
                            r0 = r1.bind(r2)(r0);
                            r0 = undefined;
                            return r0;
case 46:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r0 = r2.bind(r3)(r1, r0);
                    r0 = undefined;
                    return r0;
case 78:
                    r0 = global;
                    r2 = r0.TypeError;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r5 = "Failed to execute 'readAsDataURL' on 'FileReader': parameter 1 is not of type 'Blob'";
                    r6 = r1;
                    r0 = new r6[r2](r5, r4);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                }
            };
            r4['value'] = r6;
            r0[3] = r4;
            r4 = {};
            r6 = 'readAsText';
            r4['key'] = r6;
            r6 = function(a0) { // Original name: readAsText, environment: r5
                _fun2432: for(var _fun2432_ip = 0; ; ) switch(_fun2432_ip) {
case 0:
                    r2 = a0;
                    r4 = this;
                    r0 = undefined;
                    r6 = undefined;
                    var _closure3_slot0 = r4;
                    r5 = arguments.length;
                    r3 = 1;
                    r7 = r5 > r3;
                    r8 = 'UTF-8';
                    r5 = r8;
                    if(!r7) { _fun2432_ip = 50; continue _fun2432 }
case 35:
                    r7 = arguments[r3];
                    r5 = r8;
                    if(!(r7 !== r0)) { _fun2432_ip = 50; continue _fun2432 }
case 46:
                    r5 = arguments[r3];
case 50:
                    r3 = false;
                    r4['_aborted'] = r3;
                    r3 = null;
                    if(!(r2 != r3)) { _fun2432_ip = 116; continue _fun2432 }
case 64:
                    r3 = _closure1_slot7;
                    r4 = r3.default;
                    r3 = r4.readAsText;
                    r2 = r2.data;
                    r4 = r3.bind(r4)(r2, r5);
                    r3 = r4.then;
                    r2 = function(a0) { // Environment: r1
                        _fun2433: for(var _fun2433_ip = 0; ; ) switch(_fun2433_ip) {
case 0:
                            r1 = _closure3_slot0;
                            r1 = r1._aborted;
                            if(r1) { _fun2433_ip = 46; continue _fun2433 }
case 15:
                            r2 = _closure3_slot0;
                            r0 = a0;
                            r2['_result'] = r0;
                            r1 = r2._setReadyState;
                            r0 = 2;
                            r0 = r1.bind(r2)(r0);
                            r0 = undefined;
                            return r0;
case 46:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r1 = function(a0) { // Environment: r1
                        _fun2434: for(var _fun2434_ip = 0; ; ) switch(_fun2434_ip) {
case 0:
                            r1 = _closure3_slot0;
                            r1 = r1._aborted;
                            if(r1) { _fun2434_ip = 46; continue _fun2434 }
case 15:
                            r2 = _closure3_slot0;
                            r0 = a0;
                            r2['_error'] = r0;
                            r1 = r2._setReadyState;
                            r0 = 2;
                            r0 = r1.bind(r2)(r0);
                            r0 = undefined;
                            return r0;
case 46:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r1 = r3.bind(r4)(r2, r1);
                    return r0;
case 116:
                    r0 = global;
                    r2 = r0.TypeError;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r10 = "Failed to execute 'readAsText' on 'FileReader': parameter 1 is not of type 'Blob'";
                    r11 = r1;
                    r0 = new r11[r2](r10, r9);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                }
            };
            r4['value'] = r6;
            r0[4] = r4;
            r4 = {};
            r6 = 'abort';
            r4['key'] = r6;
            r6 = function() { // Original name: abort, environment: r5
                _fun2435: for(var _fun2435_ip = 0; ; ) switch(_fun2435_ip) {
case 0:
                    r1 = this;
                    r0 = true;
                    r1['_aborted'] = r0;
                    r2 = r1._readyState;
                    r0 = 0;
                    if(!(r2 !== r0)) { _fun2435_ip = 56; continue _fun2435 }
case 22:
                    r0 = r1._readyState;
                    r2 = 2;
                    if(!(r0 !== r2)) { _fun2435_ip = 56; continue _fun2435 }
case 35:
                    r0 = r1._reset;
                    r0 = r0.bind(r1)();
                    r0 = r1._setReadyState;
                    r0 = r0.bind(r1)(r2);
case 56:
                    r0 = r1._reset;
                    r0 = r0.bind(r1)();
                    r0 = undefined;
                    return r0;
                }
            };
            r4['value'] = r6;
            r0[5] = r4;
            r4 = {};
            r6 = 'readyState';
            r4['key'] = r6;
            r6 = function() { // Original name: get, environment: r5
                r0 = this;
                r0 = r0._readyState;
                return r0;
            };
            r4['get'] = r6;
            r0[6] = r4;
            r4 = {};
            r6 = 'error';
            r4['key'] = r6;
            r6 = function() { // Original name: get, environment: r5
                r0 = this;
                r0 = r0._error;
                return r0;
            };
            r4['get'] = r6;
            r0[7] = r4;
            r4 = {};
            r6 = 'result';
            r4['key'] = r6;
            r5 = function() { // Original name: get, environment: r5
                r0 = this;
                r0 = r0._result;
                return r0;
            };
            r4['get'] = r5;
            r0[8] = r4;
            r0 = r1.bind(r2)(r3, r0);
            return r0;
        };
        r1 = r1.bind(r0)(r6);
        r1['EMPTY'] = r5;
        r1['LOADING'] = r4;
        r1['DONE'] = r3;
        r2['default'] = r1;
        return r0;
    };
    r6 = 216;
    r5 = [1, 12, 13, 23, 25, 28, 214, 198, 189];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun2439: for(var _fun2439_ip = 0; ; ) switch(_fun2439_ip) {
case 0:
            r6 = a1;
            r2 = a5;
            r7 = a6;
            var _closure1_slot0 = r6;
            var _closure1_slot1 = r7;
            r0 = function(a0) { // Original name: validateBaseUrl, environment: r1
                r2 = /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)*(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/;
                r1 = r2.test;
                r0 = a0;
                r0 = r1.bind(r2)(r0);
                return r0;
            };
            var _closure1_slot5 = r0;
            r0 = 0;
            r3 = r7[r0];
            r0 = undefined;
            r5 = r6.bind(r0)(r3);
            r3 = global;
            r11 = r3.Object;
            r10 = r11.defineProperty;
            r9 = {};
            r4 = true;
            r9['value'] = r4;
            r8 = '__esModule';
            r8 = r10.bind(r11)(r2, r8, r9);
            r2['URL'] = r0;
            r10 = r3.Object;
            r9 = r10.defineProperty;
            r8 = {};
            r8['enumerable'] = r4;
            r4 = function() { // Original name: get, environment: r1
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 1;
                r1 = r1[r0];
                r0 = undefined;
                r0 = r2.bind(r0)(r1);
                r0 = r0.URLSearchParams;
                return r0;
            };
            r8['get'] = r4;
            r4 = 'URLSearchParams';
            r4 = r9.bind(r10)(r2, r4, r8);
            r4 = 2;
            r4 = r7[r4];
            r4 = r6.bind(r0)(r4);
            r4 = r5.bind(r0)(r4);
            var _closure1_slot2 = r4;
            r4 = 3;
            r4 = r7[r4];
            r4 = r6.bind(r0)(r4);
            r4 = r5.bind(r0)(r4);
            var _closure1_slot3 = r4;
            r4 = 4;
            r4 = r7[r4];
            r4 = r6.bind(r0)(r4);
            r4 = r5.bind(r0)(r4);
            r5 = null;
            var _closure1_slot4 = r5;
            r5 = r4.default;
            if(!r5) { _fun2439_ip = 304; continue _fun2439 }
case 189:
            r6 = r4.default;
            r5 = r6.getConstants;
            r5 = r5.bind(r6)();
            r5 = r5.BLOB_URI_SCHEME;
            r5 = typeof r5;
            r7 = 'string';
            if(!(r5 === r7)) { _fun2439_ip = 304; continue _fun2439 }
case 220:
            r5 = r4.default;
            r4 = r5.getConstants;
            r5 = r4.bind(r5)();
            r6 = r5.BLOB_URI_SCHEME;
            r4 = ':';
            r4 = r6 + r4;
            _closure1_slot4 = r4;
            r6 = r5.BLOB_URI_HOST;
            r6 = typeof r6;
            if(!(r6 === r7)) { _fun2439_ip = 304; continue _fun2439 }
case 265:
            r7 = r5.BLOB_URI_HOST;
            r3 = r3.HermesInternal;
            r6 = r3.concat;
            r5 = '//';
            r3 = '/';
            r3 = r6.bind(r5)(r7, r3);
            r3 = r4 + r3;
            _closure1_slot4 = r3;
case 304:
            r1 = function() { // Environment: r1
                r4 = function(a0, a1) { // Original name: URL, environment: r5
                    _fun2443: for(var _fun2443_ip = 0; ; ) switch(_fun2443_ip) {
case 0:
                        r1 = a0;
                        r7 = a1;
                        r2 = this;
                        r0 = _closure1_slot2;
                        r5 = r0.default;
                        r4 = _closure2_slot0;
                        r0 = undefined;
                        r4 = r5.bind(r0)(r2, r4);
                        r4 = null;
                        r2['_searchParamsInstance'] = r4;
                        if(!r7) { _fun2443_ip = 287; continue _fun2443 }
case 49:
                        r4 = _closure1_slot5;
                        r4 = r4.bind(r0)(r1);
                        if(r4) { _fun2443_ip = 287; continue _fun2443 }
case 64:
                        r5 = typeof r7;
                        r4 = 'string';
                        if(!(r5 !== r4)) { _fun2443_ip = 86; continue _fun2443 }
case 75:
                        r4 = r7.toString;
                        r4 = r4.bind(r7)();
                        _fun2443_ip = 151; continue _fun2443;
case 86:
                        r3 = _closure1_slot5;
                        r3 = r3.bind(r0)(r7);
                        r4 = r7;
                        if(r3) { _fun2443_ip = 151; continue _fun2443 }
case 101:
                        r3 = global;
                        r6 = r3.TypeError;
                        r3 = r3.HermesInternal;
                        r5 = r3.concat;
                        r3 = 'Invalid base URL: ';
                        r10 = r5.bind(r3)(r7);
                        r5 = r6.prototype;
                        r5 = Object.create(r5, {constructor: {value: r6}});
                        r11 = r5;
                        r3 = new r11[r6](r10, r9);
                        r3 = r3 instanceof Object ? r3 : r5;
                        throw r3;
case 151:
                        r3 = r4.endsWith;
                        r5 = '/';
                        r3 = r3.bind(r4)(r5);
                        r8 = r4;
                        r6 = r8;
                        if(!r3) { _fun2443_ip = 200; continue _fun2443 }
case 175:
                        r7 = r8.slice;
                        r4 = r8.length;
                        r3 = 1;
                        r4 = r4 - r3;
                        r3 = 0;
                        r6 = r7.bind(r8)(r3, r4);
case 200:
                        r3 = r1.startsWith;
                        r3 = r3.bind(r1)(r5);
                        r4 = r1;
                        if(r3) { _fun2443_ip = 235; continue _fun2443 }
case 217:
                        r3 = global;
                        r3 = r3.HermesInternal;
                        r3 = r3.concat;
                        r4 = r3.bind(r5)(r1);
case 235:
                        r3 = r6.endsWith;
                        r3 = r3.bind(r6)(r4);
                        r5 = r4;
                        if(!r3) { _fun2443_ip = 256; continue _fun2443 }
case 252:
                        r5 = '';
case 256:
                        r3 = global;
                        r3 = r3.HermesInternal;
                        r4 = r3.concat;
                        r3 = '';
                        r3 = r4.bind(r3)(r6, r5);
                        r2['_url'] = r3;
                        _fun2443_ip = 333; continue _fun2443;
case 287:
                        r2['_url'] = r1;
                        r4 = r2._url;
                        r1 = r4.endsWith;
                        r3 = '/';
                        r1 = r1.bind(r4)(r3);
                        if(r1) { _fun2443_ip = 333; continue _fun2443 }
case 317:
                        r1 = r2._url;
                        r1 = r1 + r3;
                        r2['_url'] = r1;
case 333:
                        return r0;
                    }
                };
                var _closure2_slot0 = r4;
                r0 = _closure1_slot3;
                r3 = r0.default;
                r0 = {};
                r1 = 'hash';
                r0['key'] = r1;
                r1 = function() { // Original name: get, environment: r5
                    r0 = global;
                    r2 = r0.Error;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r3 = 'URL.hash is not implemented';
                    r4 = r1;
                    r0 = new r4[r2](r3, r2);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                };
                r0['get'] = r1;
                r2 = new Array(14);
                r2[0] = r0;
                r0 = {};
                r1 = 'host';
                r0['key'] = r1;
                r1 = function() { // Original name: get, environment: r5
                    r0 = global;
                    r2 = r0.Error;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r3 = 'URL.host is not implemented';
                    r4 = r1;
                    r0 = new r4[r2](r3, r2);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                };
                r0['get'] = r1;
                r2[1] = r0;
                r0 = {};
                r1 = 'hostname';
                r0['key'] = r1;
                r1 = function() { // Original name: get, environment: r5
                    r0 = global;
                    r2 = r0.Error;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r3 = 'URL.hostname is not implemented';
                    r4 = r1;
                    r0 = new r4[r2](r3, r2);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                };
                r0['get'] = r1;
                r2[2] = r0;
                r0 = {};
                r1 = 'href';
                r0['key'] = r1;
                r1 = function() { // Original name: get, environment: r5
                    r1 = this;
                    r0 = r1.toString;
                    r0 = r0.bind(r1)();
                    return r0;
                };
                r0['get'] = r1;
                r2[3] = r0;
                r0 = {};
                r1 = 'origin';
                r0['key'] = r1;
                r1 = function() { // Original name: get, environment: r5
                    r0 = global;
                    r2 = r0.Error;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r3 = 'URL.origin is not implemented';
                    r4 = r1;
                    r0 = new r4[r2](r3, r2);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                };
                r0['get'] = r1;
                r2[4] = r0;
                r0 = {};
                r1 = 'password';
                r0['key'] = r1;
                r1 = function() { // Original name: get, environment: r5
                    r0 = global;
                    r2 = r0.Error;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r3 = 'URL.password is not implemented';
                    r4 = r1;
                    r0 = new r4[r2](r3, r2);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                };
                r0['get'] = r1;
                r2[5] = r0;
                r0 = {};
                r1 = 'pathname';
                r0['key'] = r1;
                r1 = function() { // Original name: get, environment: r5
                    r0 = global;
                    r2 = r0.Error;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r3 = 'URL.pathname not implemented';
                    r4 = r1;
                    r0 = new r4[r2](r3, r2);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                };
                r0['get'] = r1;
                r2[6] = r0;
                r0 = {};
                r1 = 'port';
                r0['key'] = r1;
                r1 = function() { // Original name: get, environment: r5
                    r0 = global;
                    r2 = r0.Error;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r3 = 'URL.port is not implemented';
                    r4 = r1;
                    r0 = new r4[r2](r3, r2);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                };
                r0['get'] = r1;
                r2[7] = r0;
                r0 = {};
                r1 = 'protocol';
                r0['key'] = r1;
                r1 = function() { // Original name: get, environment: r5
                    r0 = global;
                    r2 = r0.Error;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r3 = 'URL.protocol is not implemented';
                    r4 = r1;
                    r0 = new r4[r2](r3, r2);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                };
                r0['get'] = r1;
                r2[8] = r0;
                r0 = {};
                r1 = 'search';
                r0['key'] = r1;
                r1 = function() { // Original name: get, environment: r5
                    r0 = global;
                    r2 = r0.Error;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r3 = 'URL.search is not implemented';
                    r4 = r1;
                    r0 = new r4[r2](r3, r2);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                };
                r0['get'] = r1;
                r2[9] = r0;
                r0 = {};
                r1 = 'searchParams';
                r0['key'] = r1;
                r1 = function() { // Original name: get, environment: r5
                    _fun2454: for(var _fun2454_ip = 0; ; ) switch(_fun2454_ip) {
case 0:
                        r0 = this;
                        r2 = r0._searchParamsInstance;
                        r1 = null;
                        if(!(r2 == r1)) { _fun2454_ip = 48; continue _fun2454 }
case 14:
                        r1 = global;
                        r1 = r1.URLSearchParams;
                        r2 = r1.prototype;
                        r2 = Object.create(r2, {constructor: {value: r1}});
                        r3 = r2;
                        r1 = new r3[r1](r2);
                        r1 = r1 instanceof Object ? r1 : r2;
                        r0['_searchParamsInstance'] = r1;
case 48:
                        r0 = r0._searchParamsInstance;
                        return r0;
                    }
                };
                r0['get'] = r1;
                r2[10] = r0;
                r0 = {};
                r1 = 'toJSON';
                r0['key'] = r1;
                r1 = function() { // Original name: toJSON, environment: r5
                    r1 = this;
                    r0 = r1.toString;
                    r0 = r0.bind(r1)();
                    return r0;
                };
                r0['value'] = r1;
                r2[11] = r0;
                r0 = {};
                r1 = 'toString';
                r0['key'] = r1;
                r1 = function() { // Original name: toString, environment: r5
                    _fun2456: for(var _fun2456_ip = 0; ; ) switch(_fun2456_ip) {
case 0:
                        r0 = this;
                        r2 = r0._searchParamsInstance;
                        r1 = null;
                        if(!(r2 !== r1)) { _fun2456_ip = 82; continue _fun2456 }
case 14:
                        r2 = r0._searchParamsInstance;
                        r1 = r2.toString;
                        r2 = r1.bind(r2)();
                        r4 = r0._url;
                        r1 = r4.indexOf;
                        r3 = '?';
                        r4 = r1.bind(r4)(r3);
                        r1 = -1;
                        r1 = r4 > r1;
                        if(!r1) { _fun2456_ip = 66; continue _fun2456 }
case 62:
                        r3 = '&';
case 66:
                        r1 = r0._url;
                        r1 = r1 + r3;
                        r1 = r1 + r2;
                        return r1;
case 82:
                        r0 = r0._url;
                        return r0;
                    }
                };
                r0['value'] = r1;
                r2[12] = r0;
                r0 = {};
                r1 = 'username';
                r0['key'] = r1;
                r1 = function() { // Original name: get, environment: r5
                    r0 = global;
                    r2 = r0.Error;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r3 = 'URL.username is not implemented';
                    r4 = r1;
                    r0 = new r4[r2](r3, r2);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                };
                r0['get'] = r1;
                r2[13] = r0;
                r0 = {};
                r1 = 'createObjectURL';
                r0['key'] = r1;
                r1 = function(a0) { // Original name: createObjectURL, environment: r5
                    _fun2458: for(var _fun2458_ip = 0; ; ) switch(_fun2458_ip) {
case 0:
                        r0 = a0;
                        r3 = _closure1_slot4;
                        r2 = null;
                        if(!(r3 !== r2)) { _fun2458_ip = 77; continue _fun2458 }
case 16:
                        r13 = _closure1_slot4;
                        r1 = r0.data;
                        r12 = r1.blobId;
                        r1 = r0.data;
                        r10 = r1.offset;
                        r8 = r0.size;
                        r0 = global;
                        r0 = r0.HermesInternal;
                        r3 = r0.concat;
                        r14 = '';
                        r11 = '?offset=';
                        r9 = '&size=';
                        r0 = r14[r3](r13, r12, r11, r10, r9, r8, r7);
                        return r0;
case 77:
                        r0 = global;
                        r2 = r0.Error;
                        r0 = r2.prototype;
                        r1 = Object.create(r0, {constructor: {value: r2}});
                        r13 = 'Cannot create URL for blob!';
                        r14 = r1;
                        r0 = new r14[r2](r13, r12);
                        r0 = r0 instanceof Object ? r0 : r1;
                        throw r0;
                    }
                };
                r0['value'] = r1;
                r1 = new Array(2);
                r1[0] = r0;
                r0 = {};
                r6 = 'revokeObjectURL';
                r0['key'] = r6;
                r5 = function(a0) { // Original name: revokeObjectURL, environment: r5
                    r0 = undefined;
                    return r0;
                };
                r0['value'] = r5;
                r1[1] = r0;
                r0 = undefined;
                r0 = r3.bind(r0)(r4, r2, r1);
                return r0;
            };
            r1 = r1.bind(r0)();
            r2['URL'] = r1;
            return r0;
        }
    };
    r6 = 217;
    r5 = [1, 218, 12, 13, 181];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r2 = a5;
        r6 = a6;
        r0 = 0;
        r3 = r6[r0];
        r0 = undefined;
        r4 = r5.bind(r0)(r3);
        r3 = global;
        r9 = r3.Object;
        r8 = r9.defineProperty;
        r7 = {};
        r3 = true;
        r7['value'] = r3;
        r3 = '__esModule';
        r3 = r8.bind(r9)(r2, r3, r7);
        r2['URLSearchParams'] = r0;
        r3 = 1;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot0 = r3;
        r3 = 2;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot1 = r3;
        r1 = function() { // Environment: r1
            r3 = function(a0) { // Original name: URLSearchParams, environment: r4
                _fun2462: for(var _fun2462_ip = 0; ; ) switch(_fun2462_ip) {
case 0:
                    r4 = a0;
                    r3 = this;
                    var _closure3_slot0 = r4;
                    var _closure3_slot1 = r3;
                    r0 = _closure1_slot0;
                    r5 = r0.default;
                    r2 = _closure2_slot0;
                    r0 = undefined;
                    r2 = r5.bind(r0)(r3, r2);
                    r2 = new Array(0);
                    r3['_searchParams'] = r2;
                    r3 = typeof r4;
                    r2 = 'object';
                    if(!(r3 === r2)) { _fun2462_ip = 96; continue _fun2462 }
case 63:
                    r2 = global;
                    r3 = r2.Object;
                    r2 = r3.keys;
                    r3 = r2.bind(r3)(r4);
                    r2 = r3.forEach;
                    r1 = function(a0) { // Environment: r1
                        r3 = a0;
                        r2 = _closure3_slot1;
                        r1 = r2.append;
                        r0 = _closure3_slot0;
                        r0 = r0[r3];
                        r0 = r1.bind(r2)(r3, r0);
                        return r0;
                    };
                    r1 = r2.bind(r3)(r1);
case 96:
                    return r0;
                }
            };
            var _closure2_slot0 = r3;
            r0 = _closure1_slot1;
            r2 = r0.default;
            r0 = {};
            r1 = 'append';
            r0['key'] = r1;
            r1 = function(a0, a1) { // Original name: append, environment: r4
                r0 = this;
                r2 = r0._searchParams;
                r1 = r2.push;
                r0 = new Array(2);
                r3 = a0;
                r0[0] = r3;
                r3 = a1;
                r0[1] = r3;
                r0 = r1.bind(r2)(r0);
                r0 = undefined;
                return r0;
            };
            r0['value'] = r1;
            r1 = new Array(9);
            r1[0] = r0;
            r0 = {};
            r5 = 'delete';
            r0['key'] = r5;
            r5 = function(a0) { // Original name: _delete, environment: r4
                r0 = global;
                r2 = r0.Error;
                r0 = r2.prototype;
                r1 = Object.create(r0, {constructor: {value: r2}});
                r3 = 'URLSearchParams.delete is not implemented';
                r4 = r1;
                r0 = new r4[r2](r3, r2);
                r0 = r0 instanceof Object ? r0 : r1;
                throw r0;
            };
            r0['value'] = r5;
            r1[1] = r0;
            r0 = {};
            r5 = 'get';
            r0['key'] = r5;
            r5 = function(a0) { // Original name: get, environment: r4
                r0 = global;
                r2 = r0.Error;
                r0 = r2.prototype;
                r1 = Object.create(r0, {constructor: {value: r2}});
                r3 = 'URLSearchParams.get is not implemented';
                r4 = r1;
                r0 = new r4[r2](r3, r2);
                r0 = r0 instanceof Object ? r0 : r1;
                throw r0;
            };
            r0['value'] = r5;
            r1[2] = r0;
            r0 = {};
            r5 = 'getAll';
            r0['key'] = r5;
            r5 = function(a0) { // Original name: getAll, environment: r4
                r0 = global;
                r2 = r0.Error;
                r0 = r2.prototype;
                r1 = Object.create(r0, {constructor: {value: r2}});
                r3 = 'URLSearchParams.getAll is not implemented';
                r4 = r1;
                r0 = new r4[r2](r3, r2);
                r0 = r0 instanceof Object ? r0 : r1;
                throw r0;
            };
            r0['value'] = r5;
            r1[3] = r0;
            r0 = {};
            r5 = 'has';
            r0['key'] = r5;
            r5 = function(a0) { // Original name: has, environment: r4
                r0 = global;
                r2 = r0.Error;
                r0 = r2.prototype;
                r1 = Object.create(r0, {constructor: {value: r2}});
                r3 = 'URLSearchParams.has is not implemented';
                r4 = r1;
                r0 = new r4[r2](r3, r2);
                r0 = r0 instanceof Object ? r0 : r1;
                throw r0;
            };
            r0['value'] = r5;
            r1[4] = r0;
            r0 = {};
            r5 = 'set';
            r0['key'] = r5;
            r5 = function(a0, a1) { // Original name: set, environment: r4
                r0 = global;
                r2 = r0.Error;
                r0 = r2.prototype;
                r1 = Object.create(r0, {constructor: {value: r2}});
                r3 = 'URLSearchParams.set is not implemented';
                r4 = r1;
                r0 = new r4[r2](r3, r2);
                r0 = r0 instanceof Object ? r0 : r1;
                throw r0;
            };
            r0['value'] = r5;
            r1[5] = r0;
            r0 = {};
            r5 = 'sort';
            r0['key'] = r5;
            r5 = function() { // Original name: sort, environment: r4
                r0 = global;
                r2 = r0.Error;
                r0 = r2.prototype;
                r1 = Object.create(r0, {constructor: {value: r2}});
                r3 = 'URLSearchParams.sort is not implemented';
                r4 = r1;
                r0 = new r4[r2](r3, r2);
                r0 = r0 instanceof Object ? r0 : r1;
                throw r0;
            };
            r0['value'] = r5;
            r1[6] = r0;
            r0 = {};
            r5 = global;
            r5 = r5.Symbol;
            r5 = r5.iterator;
            r0['key'] = r5;
            r5 = function() { // Original name: value, environment: r4
                r0 = this;
                r1 = r0._searchParams;
                r0 = global;
                r0 = r0.Symbol;
                r0 = r0.iterator;
                r0 = r1[r0];
                r0 = r0.bind(r1)();
                return r0;
            };
            r0['value'] = r5;
            r1[7] = r0;
            r0 = {};
            r5 = 'toString';
            r0['key'] = r5;
            r4 = function() { // Original name: toString, environment: r4
                _fun2472: for(var _fun2472_ip = 0; ; ) switch(_fun2472_ip) {
case 0:
                    r1 = this;
                    r2 = r1._searchParams;
                    r3 = r2.length;
                    r2 = 0;
                    if(!(r3 !== r2)) { _fun2472_ip = 72; continue _fun2472 }
case 21:
                    r2 = r1._searchParams;
                    r3 = r2.length;
                    r2 = 1;
                    r2 = r3 - r2;
                    var _closure3_slot0 = r2;
                    r3 = r1._searchParams;
                    r2 = r3.reduce;
                    r1 = function(a0, a1, a2) { // Environment: r0
                        _fun2473: for(var _fun2473_ip = 0; ; ) switch(_fun2473_ip) {
case 0:
                            r4 = a1;
                            r0 = global;
                            r2 = r0.encodeURIComponent;
                            r1 = 0;
                            r1 = r4[r1];
                            r3 = undefined;
                            r2 = r2.bind(r3)(r1);
                            r1 = a0;
                            r2 = r1 + r2;
                            r1 = r0.encodeURIComponent;
                            r0 = 1;
                            r0 = r4[r0];
                            r1 = r1.bind(r3)(r0);
                            r0 = '=';
                            r0 = r2 + r0;
                            r1 = r0 + r1;
                            r3 = _closure3_slot0;
                            r0 = '&';
                            r2 = a2;
                            if(!(r2 === r3)) { _fun2473_ip = 83; continue _fun2473 }
case 79:
                            r0 = '';
case 83:
                            r0 = r1 + r0;
                            return r0;
                        }
                    };
                    r0 = '';
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
case 72:
                    r0 = '';
                    return r0;
                }
            };
            r0['value'] = r4;
            r1[8] = r0;
            r0 = undefined;
            r0 = r2.bind(r0)(r3, r1);
            return r0;
        };
        r1 = r1.bind(r0)();
        r2['URLSearchParams'] = r1;
        return r0;
    };
    r6 = 218;
    r5 = [1, 12, 13];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun2474: for(var _fun2474_ip = 0; ; ) switch(_fun2474_ip) {
case 0:
            r6 = a1;
            r1 = a4;
            r3 = a5;
            r7 = a6;
            var _closure1_slot0 = r6;
            var _closure1_slot1 = r7;
            r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r8
                _fun2475: for(var _fun2475_ip = 0; ; ) switch(_fun2475_ip) {
case 0:
                    r3 = a0;
                    r1 = _closure1_slot5;
                    r2 = undefined;
                    r0 = a1;
                    r8 = r1.bind(r2)(r0);
                    r1 = _closure1_slot4;
                    r0 = _closure1_slot11;
                    r0 = r0.bind(r2)();
                    if(r0) { _fun2475_ip = 48; continue _fun2475 }
case 35:
                    r0 = r8.apply;
                    r0 = r0.bind(r8)(r3, r2);
                    _fun2475_ip = 86; continue _fun2475;
case 48:
                    r5 = global;
                    r7 = r5.Reflect;
                    r6 = r7.construct;
                    r5 = new Array(0);
                    r4 = _closure1_slot5;
                    r4 = r4.bind(r2)(r3);
                    r4 = r4.constructor;
                    r0 = r6.bind(r7)(r8, r5, r4);
case 86:
                    r0 = r1.bind(r2)(r3, r0);
                    return r0;
                }
            };
            var _closure1_slot10 = r0;
            r0 = function() { // Original name: _isNativeReflectConstruct, environment: r8
                _fun2476: for(var _fun2476_ip = 0; ; ) switch(_fun2476_ip) {
case 0:
case 2: // try_start_0
                    r1 = global;
                    r2 = r1.Boolean;
                    r2 = r2.prototype;
                    r3 = r2.valueOf;
                    r2 = r3.call;
                    r7 = r1.Reflect;
                    r6 = r7.construct;
                    r5 = r1.Boolean;
                    r4 = new Array(0);
                    r1 = function() { // Environment: r0
                        r0 = undefined;
                        return r0;
                    };
                    r1 = r6.bind(r7)(r5, r4, r1);
                    r1 = r2.bind(r3)(r1);
                    r1 = !r1;
                    var _closure2_slot0 = r1;
case 70: // try_end0
                    _fun2476_ip = 74; continue _fun2476;
case 72: // catch_target0
                    CatchBlockStart(arg_register=1);
case 74:
                    r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                        r0 = _closure2_slot0;
                        r0 = !r0;
                        r0 = !r0;
                        return r0;
                    };
                    _closure1_slot11 = r1;
                    r0 = undefined;
                    r0 = r1.bind(r0)();
                    return r0;
                }
            };
            var _closure1_slot11 = r0;
            r0 = function() { // Original name: createAbortSignal, environment: r8
                r0 = global;
                r3 = r0.Object;
                r2 = r3.create;
                r0 = _closure1_slot7;
                r0 = r0.prototype;
                r0 = r2.bind(r3)(r0);
                r4 = _closure1_slot0;
                r3 = _closure1_slot1;
                r2 = 5;
                r3 = r3[r2];
                r2 = undefined;
                r2 = r4.bind(r2)(r3);
                r3 = r2.EventTarget;
                r2 = r3.call;
                r2 = r2.bind(r3)(r0);
                r3 = _closure1_slot8;
                r2 = r3.set;
                r1 = false;
                r1 = r2.bind(r3)(r0, r1);
                return r0;
            };
            var _closure1_slot12 = r0;
            r0 = function(a0) { // Original name: abortSignal, environment: r8
                _fun2480: for(var _fun2480_ip = 0; ; ) switch(_fun2480_ip) {
case 0:
                    r2 = a0;
                    r3 = _closure1_slot8;
                    r1 = r3.get;
                    r3 = r1.bind(r3)(r2);
                    r1 = false;
                    if(!(r3 === r1)) { _fun2480_ip = 67; continue _fun2480 }
case 26:
                    r3 = _closure1_slot8;
                    r1 = r3.set;
                    r0 = true;
                    r0 = r1.bind(r3)(r2, r0);
                    r1 = r2.dispatchEvent;
                    r0 = {};
                    r3 = 'abort';
                    r0['type'] = r3;
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
case 67:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot13 = r0;
            r0 = function(a0) { // Original name: getSignal, environment: r8
                _fun2481: for(var _fun2481_ip = 0; ; ) switch(_fun2481_ip) {
case 0:
                    r1 = a0;
                    r2 = _closure1_slot9;
                    r0 = r2.get;
                    r0 = r0.bind(r2)(r1);
                    r4 = null;
                    if(!(r0 != r4)) { _fun2481_ip = 28; continue _fun2481 }
case 26:
                    return r0;
case 28:
                    r0 = global;
                    r2 = r0.TypeError;
                    r3 = 'null';
                    if(!(r1 !== r4)) { _fun2481_ip = 47; continue _fun2481 }
case 44:
                    r3 = typeof r1;
case 47:
                    r0 = r0.HermesInternal;
                    r1 = r0.concat;
                    r0 = "Expected 'this' to be an 'AbortController' object, but got ";
                    r5 = r1.bind(r0)(r3);
                    r1 = r2.prototype;
                    r1 = Object.create(r1, {constructor: {value: r2}});
                    r6 = r1;
                    r0 = new r6[r2](r5, r4);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                }
            };
            var _closure1_slot14 = r0;
            r0 = 0;
            r2 = r7[r0];
            r0 = undefined;
            r2 = r6.bind(r0)(r2);
            var _closure1_slot2 = r2;
            r2 = 1;
            r2 = r7[r2];
            r2 = r6.bind(r0)(r2);
            var _closure1_slot3 = r2;
            r2 = 2;
            r2 = r7[r2];
            r2 = r6.bind(r0)(r2);
            var _closure1_slot4 = r2;
            r2 = 3;
            r2 = r7[r2];
            r2 = r6.bind(r0)(r2);
            var _closure1_slot5 = r2;
            r2 = 4;
            r2 = r7[r2];
            r2 = r6.bind(r0)(r2);
            var _closure1_slot6 = r2;
            r5 = global;
            r10 = r5.Object;
            r9 = r10.defineProperty;
            r4 = {};
            r12 = true;
            r4['value'] = r12;
            r2 = '__esModule';
            r2 = r9.bind(r10)(r3, r2, r4);
            r4 = 5;
            r2 = r7[r4];
            r2 = r6.bind(r0)(r2);
            r9 = r2.EventTarget;
            r2 = function(a0) { // Environment: r8
                r3 = function() { // Original name: AbortSignal, environment: r0
                    r3 = this;
                    r4 = _closure1_slot2;
                    r2 = _closure2_slot0;
                    r1 = undefined;
                    r4 = r4.bind(r1)(r3, r2);
                    r0 = _closure1_slot10;
                    r0 = r0.bind(r1)(r3, r2);
                    r0 = global;
                    r2 = r0.TypeError;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r6 = 'AbortSignal cannot be constructed directly';
                    r7 = r1;
                    r0 = new r7[r2](r6, r5);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                };
                var _closure2_slot0 = r3;
                r5 = _closure1_slot6;
                r2 = undefined;
                r4 = a0;
                r4 = r5.bind(r2)(r3, r4);
                r1 = _closure1_slot3;
                r4 = {};
                r5 = 'aborted';
                r4['key'] = r5;
                r0 = function() { // Original name: get, environment: r0
                    _fun2484: for(var _fun2484_ip = 0; ; ) switch(_fun2484_ip) {
case 0:
                        r1 = this;
                        r2 = _closure1_slot8;
                        r0 = r2.get;
                        r0 = r0.bind(r2)(r1);
                        r3 = typeof r0;
                        r2 = 'boolean';
                        if(!(r3 === r2)) { _fun2484_ip = 33; continue _fun2484 }
case 31:
                        return r0;
case 33:
                        r0 = global;
                        r2 = r0.TypeError;
                        r3 = 'null';
                        r4 = null;
                        if(!(r1 !== r4)) { _fun2484_ip = 54; continue _fun2484 }
case 51:
                        r3 = typeof r1;
case 54:
                        r0 = r0.HermesInternal;
                        r1 = r0.concat;
                        r0 = "Expected 'this' to be an 'AbortSignal' object, but got ";
                        r5 = r1.bind(r0)(r3);
                        r1 = r2.prototype;
                        r1 = Object.create(r1, {constructor: {value: r2}});
                        r6 = r1;
                        r0 = new r6[r2](r5, r4);
                        r0 = r0 instanceof Object ? r0 : r1;
                        throw r0;
                    }
                };
                r4['get'] = r0;
                r0 = new Array(1);
                r0[0] = r4;
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            };
            r2 = r2.bind(r0)(r9);
            var _closure1_slot7 = r2;
            r4 = r7[r4];
            r9 = r6.bind(r0)(r4);
            r7 = r9.defineEventAttribute;
            r6 = r2.prototype;
            r4 = 'abort';
            r4 = r7.bind(r9)(r6, r4);
            r4 = r5.WeakMap;
            r6 = r4.prototype;
            r6 = Object.create(r6, {constructor: {value: r4}});
            r17 = r6;
            r4 = new r17[r4](r16);
            r4 = r4 instanceof Object ? r4 : r6;
            var _closure1_slot8 = r4;
            r9 = r5.Object;
            r7 = r9.defineProperties;
            r6 = r2.prototype;
            r4 = {};
            r10 = {};
            r10['enumerable'] = r12;
            r4['aborted'] = r10;
            r4 = r7.bind(r9)(r6, r4);
            r4 = r5.Symbol;
            r4 = typeof r4;
            r7 = 'function';
            if(!(r4 === r7)) { _fun2474_ip = 392; continue _fun2474 }
case 324:
            r4 = r5.Symbol;
            r4 = r4.toStringTag;
            r6 = typeof r4;
            r4 = 'symbol';
            if(!(r6 === r4)) { _fun2474_ip = 392; continue _fun2474 }
case 347:
            r11 = r5.Object;
            r10 = r11.defineProperty;
            r9 = r2.prototype;
            r4 = r5.Symbol;
            r6 = r4.toStringTag;
            r4 = {'configurable': true, 'value': 'AbortSignal'};
            r4 = r10.bind(r11)(r9, r6, r4);
case 392:
            r4 = function() { // Environment: r8
                r3 = function() { // Original name: AbortController, environment: r4
                    r4 = this;
                    r3 = _closure1_slot2;
                    r2 = _closure2_slot0;
                    r0 = undefined;
                    r2 = r3.bind(r0)(r4, r2);
                    r3 = _closure1_slot9;
                    r2 = r3.set;
                    r1 = _closure1_slot12;
                    r1 = r1.bind(r0)();
                    r1 = r2.bind(r3)(r4, r1);
                    return r0;
                };
                var _closure2_slot0 = r3;
                r2 = _closure1_slot3;
                r0 = {};
                r1 = 'signal';
                r0['key'] = r1;
                r1 = function() { // Original name: get, environment: r4
                    r2 = _closure1_slot14;
                    r1 = undefined;
                    r0 = this;
                    r0 = r2.bind(r1)(r0);
                    return r0;
                };
                r0['get'] = r1;
                r1 = new Array(2);
                r1[0] = r0;
                r0 = {};
                r5 = 'abort';
                r0['key'] = r5;
                r4 = function() { // Original name: abort, environment: r4
                    r2 = _closure1_slot13;
                    r3 = _closure1_slot14;
                    r0 = undefined;
                    r1 = this;
                    r1 = r3.bind(r0)(r1);
                    r1 = r2.bind(r0)(r1);
                    return r0;
                };
                r0['value'] = r4;
                r1[1] = r0;
                r0 = undefined;
                r0 = r2.bind(r0)(r3, r1);
                return r0;
            };
            r4 = r4.bind(r0)();
            r6 = r5.WeakMap;
            r9 = r6.prototype;
            r9 = Object.create(r9, {constructor: {value: r6}});
            r17 = r9;
            r6 = new r17[r6](r16);
            r6 = r6 instanceof Object ? r6 : r9;
            var _closure1_slot9 = r6;
            r10 = r5.Object;
            r9 = r10.defineProperties;
            r8 = r4.prototype;
            r6 = {};
            r11 = {};
            r11['enumerable'] = r12;
            r6['signal'] = r11;
            r11 = {};
            r11['enumerable'] = r12;
            r6['abort'] = r11;
            r6 = r9.bind(r10)(r8, r6);
            r6 = r5.Symbol;
            r6 = typeof r6;
            if(!(r6 === r7)) { _fun2474_ip = 557; continue _fun2474 }
case 489:
            r6 = r5.Symbol;
            r6 = r6.toStringTag;
            r7 = typeof r6;
            r6 = 'symbol';
            if(!(r7 === r6)) { _fun2474_ip = 557; continue _fun2474 }
case 512:
            r9 = r5.Object;
            r8 = r9.defineProperty;
            r7 = r4.prototype;
            r5 = r5.Symbol;
            r6 = r5.toStringTag;
            r5 = {'configurable': true, 'value': 'AbortController'};
            r5 = r8.bind(r9)(r7, r6, r5);
case 557:
            r3['AbortController'] = r4;
            r3['AbortSignal'] = r2;
            r3['default'] = r4;
            r1['exports'] = r4;
            r3 = r1.exports;
            r5 = r1.exports;
            r5['default'] = r4;
            r3['AbortController'] = r4;
            r1 = r1.exports;
            r1['AbortSignal'] = r2;
            return r0;
        }
    };
    r6 = 219;
    r5 = [12, 13, 23, 25, 28, 198];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun2489: for(var _fun2489_ip = 0; ; ) switch(_fun2489_ip) {
case 0:
            r1 = a0;
            r2 = a1;
            var _closure1_slot0 = r2;
            r2 = a6;
            var _closure1_slot1 = r2;
            r2 = r1.alert;
            if(r2) { _fun2489_ip = 39; continue _fun2489 }
case 28:
            r0 = function(a0) { // Environment: r0
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 0;
                r1 = r1[r0];
                r0 = undefined;
                r1 = r2.bind(r0)(r1);
                r4 = r1.default;
                r3 = r4.alert;
                r1 = a0;
                r2 = '' + r1;
                r1 = 'Alert';
                r1 = r3.bind(r4)(r1, r2);
                return r0;
            };
            r1['alert'] = r0;
case 39:
            r0 = undefined;
            return r0;
        }
    };
    r6 = 220;
    r5 = [221];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r2 = a5;
        r6 = a6;
        var _closure1_slot0 = r5;
        var _closure1_slot1 = r6;
        r0 = 0;
        r3 = r6[r0];
        r0 = undefined;
        r4 = r5.bind(r0)(r3);
        r3 = global;
        r9 = r3.Object;
        r8 = r9.defineProperty;
        r7 = {};
        r3 = true;
        r7['value'] = r3;
        r3 = '__esModule';
        r3 = r8.bind(r9)(r2, r3, r7);
        r2['default'] = r0;
        r3 = 1;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot2 = r3;
        r3 = 2;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot3 = r3;
        r3 = 3;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot4 = r3;
        r3 = 4;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot5 = r3;
        r1 = function() { // Environment: r1
            r4 = function() { // Original name: Alert, environment: r1
                r0 = _closure1_slot2;
                r3 = r0.default;
                r2 = _closure2_slot0;
                r0 = undefined;
                r1 = this;
                r1 = r3.bind(r0)(r1, r2);
                return r0;
            };
            var _closure2_slot0 = r4;
            r0 = _closure1_slot3;
            r3 = r0.default;
            r0 = {};
            r2 = 'alert';
            r0['key'] = r2;
            r2 = function(a0, a1, a2, a3) { // Original name: alert, environment: r1
                _fun2494: for(var _fun2494_ip = 0; ; ) switch(_fun2494_ip) {
case 0:
                    r7 = a0;
                    r6 = a1;
                    r5 = a2;
                    r4 = a3;
                    var _closure3_slot0 = r4;
                    r2 = _closure1_slot4;
                    r2 = r2.default;
                    r3 = r2.OS;
                    r2 = 'ios';
                    if(!(r3 !== r2)) { _fun2494_ip = 347; continue _fun2494 }
case 46:
                    r2 = _closure1_slot4;
                    r2 = r2.default;
                    r3 = r2.OS;
                    r2 = 'android';
                    if(!(r3 === r2)) { _fun2494_ip = 387; continue _fun2494 }
case 71:
                    r3 = _closure1_slot0;
                    r2 = _closure1_slot1;
                    r1 = 5;
                    r2 = r2[r1];
                    r1 = undefined;
                    r2 = r3.bind(r1)(r2);
                    r8 = r2.default;
                    if(r8) { _fun2494_ip = 103; continue _fun2494 }
case 101:
                    return r1;
case 103:
                    r1 = r8.getConstants;
                    r1 = r1.bind(r8)();
                    var _closure3_slot1 = r1;
                    r3 = {};
                    r1 = r7;
                    if(r1) { _fun2494_ip = 128; continue _fun2494 }
case 124:
                    r1 = '';
case 128:
                    r3['title'] = r1;
                    r1 = r6;
                    if(r1) { _fun2494_ip = 143; continue _fun2494 }
case 139:
                    r1 = '';
case 143:
                    r3['message'] = r1;
                    r1 = false;
                    r3['cancelable'] = r1;
                    if(!r4) { _fun2494_ip = 178; continue _fun2494 }
case 157:
                    r1 = r4.cancelable;
                    if(!r1) { _fun2494_ip = 178; continue _fun2494 }
case 166:
                    r1 = r4.cancelable;
                    r3['cancelable'] = r1;
case 178:
                    if(r5) { _fun2494_ip = 201; continue _fun2494 }
case 181:
                    r1 = {};
                    r2 = 'OK';
                    r1['text'] = r2;
                    r10 = new Array(1);
                    r10[0] = r1;
                    _fun2494_ip = 217; continue _fun2494;
case 201:
                    r9 = r5.slice;
                    r2 = 0;
                    r1 = 3;
                    r10 = r9.bind(r5)(r2, r1);
case 217:
                    r1 = r10.pop;
                    r1 = r1.bind(r10)();
                    var _closure3_slot2 = r1;
                    r2 = r10.pop;
                    r2 = r2.bind(r10)();
                    var _closure3_slot3 = r2;
                    r9 = r10.pop;
                    r9 = r9.bind(r10)();
                    var _closure3_slot4 = r9;
                    if(!r9) { _fun2494_ip = 280; continue _fun2494 }
case 262:
                    r9 = r9.text;
                    if(r9) { _fun2494_ip = 274; continue _fun2494 }
case 270:
                    r9 = '';
case 274:
                    r3['buttonNeutral'] = r9;
case 280:
                    if(!r2) { _fun2494_ip = 301; continue _fun2494 }
case 283:
                    r2 = r2.text;
                    if(r2) { _fun2494_ip = 295; continue _fun2494 }
case 291:
                    r2 = '';
case 295:
                    r3['buttonNegative'] = r2;
case 301:
                    if(!r1) { _fun2494_ip = 322; continue _fun2494 }
case 304:
                    r1 = r1.text;
                    if(r1) { _fun2494_ip = 316; continue _fun2494 }
case 312:
                    r1 = 'OK';
case 316:
                    r3['buttonPositive'] = r1;
case 322:
                    r2 = r8.showAlert;
                    r1 = function(a0) { // Original name: onError, environment: r0
                        r0 = global;
                        r2 = r0.console;
                        r1 = r2.warn;
                        r0 = a0;
                        r0 = r1.bind(r2)(r0);
                        return r0;
                    };
                    r0 = function(a0, a1) { // Original name: onAction, environment: r0
                        _fun2495: for(var _fun2495_ip = 0; ; ) switch(_fun2495_ip) {
case 0:
                            r3 = a0;
                            r2 = a1;
                            r1 = _closure3_slot1;
                            r1 = r1.buttonClicked;
                            if(!(r3 !== r1)) { _fun2495_ip = 79; continue _fun2495 }
case 23:
                            r1 = _closure3_slot1;
                            r1 = r1.dismissed;
                            if(!(r3 === r1)) { _fun2495_ip = 200; continue _fun2495 }
case 40:
                            r1 = _closure3_slot0;
                            if(!r1) { _fun2495_ip = 57; continue _fun2495 }
case 47:
                            r3 = _closure3_slot0;
                            r1 = r3.onDismiss;
case 57:
                            if(!r1) { _fun2495_ip = 200; continue _fun2495 }
case 63:
                            r3 = _closure3_slot0;
                            r1 = r3.onDismiss;
                            r1 = r1.bind(r3)();
                            _fun2495_ip = 200; continue _fun2495;
case 79:
                            r1 = _closure3_slot1;
                            r1 = r1.buttonNeutral;
                            if(!(r2 !== r1)) { _fun2495_ip = 175; continue _fun2495 }
case 93:
                            r1 = _closure3_slot1;
                            r1 = r1.buttonNegative;
                            if(!(r2 !== r1)) { _fun2495_ip = 148; continue _fun2495 }
case 107:
                            r1 = _closure3_slot1;
                            r1 = r1.buttonPositive;
                            if(!(r2 === r1)) { _fun2495_ip = 200; continue _fun2495 }
case 121:
                            r1 = _closure3_slot2;
                            r1 = r1.onPress;
                            if(!r1) { _fun2495_ip = 200; continue _fun2495 }
case 133:
                            r2 = _closure3_slot2;
                            r1 = r2.onPress;
                            r1 = r1.bind(r2)();
                            _fun2495_ip = 200; continue _fun2495;
case 148:
                            r1 = _closure3_slot3;
                            r1 = r1.onPress;
                            if(!r1) { _fun2495_ip = 200; continue _fun2495 }
case 160:
                            r2 = _closure3_slot3;
                            r1 = r2.onPress;
                            r1 = r1.bind(r2)();
                            _fun2495_ip = 200; continue _fun2495;
case 175:
                            r1 = _closure3_slot4;
                            r1 = r1.onPress;
                            if(!r1) { _fun2495_ip = 200; continue _fun2495 }
case 187:
                            r1 = _closure3_slot4;
                            r0 = r1.onPress;
                            r0 = r0.bind(r1)();
case 200:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r0 = r2.bind(r8)(r3, r1, r0);
                    _fun2494_ip = 387; continue _fun2494;
case 347:
                    r3 = _closure2_slot0;
                    r2 = r3.prompt;
                    r14 = 'default';
                    r18 = r3;
                    r17 = r7;
                    r16 = r6;
                    r15 = r5;
                    r13 = undefined;
                    r12 = undefined;
                    r11 = r4;
                    r0 = r18[r2](r17, r16, r15, r14, r13, r12, r11, r10);
case 387:
                    r0 = undefined;
                    return r0;
                }
            };
            r0['value'] = r2;
            r2 = new Array(2);
            r2[0] = r0;
            r0 = {};
            r5 = 'prompt';
            r0['key'] = r5;
            r1 = function(a0, a1, a2) { // Original name: prompt, environment: r1
                _fun2497: for(var _fun2497_ip = 0; ; ) switch(_fun2497_ip) {
case 0:
                    r11 = a0;
                    r10 = a1;
                    r4 = a2;
                    r0 = undefined;
                    r3 = undefined;
                    var _closure3_slot0 = r4;
                    r5 = arguments.length;
                    r2 = 3;
                    r5 = r5 > r2;
                    r6 = 'plain-text';
                    r8 = r6;
                    if(!r5) { _fun2497_ip = 54; continue _fun2497 }
case 39:
                    r5 = arguments[r2];
                    r8 = r6;
                    if(!(r5 !== r0)) { _fun2497_ip = 54; continue _fun2497 }
case 50:
                    r8 = arguments[r2];
case 54:
                    r5 = arguments.length;
                    r2 = 4;
                    r5 = r5 > r2;
                    r7 = undefined;
                    if(!r5) { _fun2497_ip = 73; continue _fun2497 }
case 69:
                    r7 = arguments[r2];
case 73:
                    r5 = arguments.length;
                    r2 = 5;
                    r6 = r5 > r2;
                    r5 = undefined;
                    if(!r6) { _fun2497_ip = 92; continue _fun2497 }
case 88:
                    r5 = arguments[r2];
case 92:
                    r6 = arguments.length;
                    r2 = 6;
                    r9 = r6 > r2;
                    r6 = undefined;
                    if(!r9) { _fun2497_ip = 111; continue _fun2497 }
case 107:
                    r6 = arguments[r2];
case 111:
                    r3 = _closure1_slot4;
                    r3 = r3.default;
                    r9 = r3.OS;
                    r3 = 'ios';
                    if(!(r9 === r3)) { _fun2497_ip = 342; continue _fun2497 }
case 139:
                    r3 = new Array(0);
                    var _closure3_slot1 = r3;
                    r9 = new Array(0);
                    var _closure3_slot2 = r9;
                    r12 = typeof r4;
                    r3 = 'function';
                    if(!(r12 !== r3)) { _fun2497_ip = 204; continue _fun2497 }
case 166:
                    r3 = global;
                    r12 = r3.Array;
                    r3 = r12.isArray;
                    r3 = r3.bind(r12)(r4);
                    if(!r3) { _fun2497_ip = 216; continue _fun2497 }
case 187:
                    r12 = r4.forEach;
                    r3 = function(a0, a1) { // Environment: r1
                        _fun2498: for(var _fun2498_ip = 0; ; ) switch(_fun2498_ip) {
case 0:
                            r1 = a0;
                            r3 = a1;
                            r4 = _closure3_slot1;
                            r2 = r1.onPress;
                            r4[r3] = r2;
                            r4 = r1.style;
                            r2 = 'cancel';
                            if(!(r4 !== r2)) { _fun2498_ip = 69; continue _fun2498 }
case 35:
                            r4 = r1.style;
                            r2 = 'destructive';
                            if(!(r4 === r2)) { _fun2498_ip = 88; continue _fun2498 }
case 48:
                            r2 = global;
                            r4 = r2.String;
                            r2 = undefined;
                            r2 = r4.bind(r2)(r3);
                            var _closure3_slot4 = r2;
                            _fun2498_ip = 88; continue _fun2498;
case 69:
                            r2 = global;
                            r4 = r2.String;
                            r2 = undefined;
                            r2 = r4.bind(r2)(r3);
                            var _closure3_slot3 = r2;
case 88:
                            r2 = r1.isPreferred;
                            if(!r2) { _fun2498_ip = 116; continue _fun2498 }
case 97:
                            r2 = global;
                            r4 = r2.String;
                            r2 = undefined;
                            r2 = r4.bind(r2)(r3);
                            var _closure3_slot5 = r2;
case 116:
                            r2 = r1.text;
                            if(r2) { _fun2498_ip = 151; continue _fun2498 }
case 124:
                            r2 = _closure3_slot0;
                            if(r2) { _fun2498_ip = 135; continue _fun2498 }
case 131:
                            r2 = new Array(0);
case 135:
                            r4 = r2.length;
                            r2 = 1;
                            r2 = r4 - r2;
                            if(!(r3 < r2)) { _fun2498_ip = 183; continue _fun2498 }
case 151:
                            r2 = {};
                            r1 = r1.text;
                            if(r1) { _fun2498_ip = 165; continue _fun2498 }
case 161:
                            r1 = '';
case 165:
                            r2[r3] = r1;
                            r1 = _closure3_slot2;
                            r0 = r1.push;
                            r0 = r0.bind(r1)(r2);
case 183:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r3 = r12.bind(r4)(r3);
                    _fun2497_ip = 216; continue _fun2497;
case 204:
                    r3 = new Array(1);
                    r3[0] = r4;
                    _closure3_slot1 = r3;
case 216:
                    r2 = _closure1_slot5;
                    r4 = r2.default;
                    r3 = r4.alertWithArgs;
                    r2 = {};
                    if(r11) { _fun2497_ip = 240; continue _fun2497 }
case 236:
                    r11 = '';
case 240:
                    r2['title'] = r11;
                    if(r10) { _fun2497_ip = 250; continue _fun2497 }
case 248:
                    r10 = undefined;
case 250:
                    r2['message'] = r10;
                    r2['buttons'] = r9;
                    if(r8) { _fun2497_ip = 264; continue _fun2497 }
case 262:
                    r8 = undefined;
case 264:
                    r2['type'] = r8;
                    r2['defaultValue'] = r7;
                    r7 = _closure3_slot3;
                    r2['cancelButtonKey'] = r7;
                    r7 = _closure3_slot4;
                    r2['destructiveButtonKey'] = r7;
                    r7 = _closure3_slot5;
                    r2['preferredButtonKey'] = r7;
                    r2['keyboardType'] = r5;
                    r5 = null;
                    r7 = r6 == r5;
                    r5 = undefined;
                    if(r7) { _fun2497_ip = 321; continue _fun2497 }
case 315:
                    r5 = r6.userInterfaceStyle;
case 321:
                    if(r5) { _fun2497_ip = 326; continue _fun2497 }
case 324:
                    r5 = undefined;
case 326:
                    r2['userInterfaceStyle'] = r5;
                    r1 = function(a0, a1) { // Environment: r1
                        _fun2499: for(var _fun2499_ip = 0; ; ) switch(_fun2499_ip) {
case 0:
                            r1 = _closure3_slot1;
                            r0 = a0;
                            r2 = r1[r0];
                            if(!r2) { _fun2499_ip = 27; continue _fun2499 }
case 17:
                            r1 = undefined;
                            r0 = a1;
                            r0 = r2.bind(r1)(r0);
case 27:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r1 = r3.bind(r4)(r2, r1);
case 342:
                    return r0;
                }
            };
            r0['value'] = r1;
            r2[1] = r0;
            r1 = undefined;
            r0 = null;
            r0 = r3.bind(r1)(r4, r0, r2);
            return r0;
        };
        r1 = r1.bind(r0)();
        r2['default'] = r1;
        return r0;
    };
    r6 = 221;
    r5 = [1, 12, 13, 33, 222, 223];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r2 = a5;
        r6 = a6;
        r0 = function() { // Original name: emptyCallback, environment: r3
            r0 = undefined;
            return r0;
        };
        var _closure1_slot1 = r0;
        r0 = 0;
        r1 = r6[r0];
        r0 = undefined;
        r4 = r5.bind(r0)(r1);
        r1 = global;
        r9 = r1.Object;
        r8 = r9.defineProperty;
        r7 = {};
        r1 = true;
        r7['value'] = r1;
        r1 = '__esModule';
        r1 = r8.bind(r9)(r2, r1, r7);
        r2['default'] = r0;
        r1 = 1;
        r1 = r6[r1];
        r1 = r5.bind(r0)(r1);
        r1 = r4.bind(r0)(r1);
        var _closure1_slot0 = r1;
        r1 = {};
        r3 = function(a0, a1) { // Original name: alertWithArgs, environment: r3
            _fun2502: for(var _fun2502_ip = 0; ; ) switch(_fun2502_ip) {
case 0:
                r4 = a1;
                r1 = _closure1_slot0;
                r1 = r1.default;
                if(r1) { _fun2502_ip = 22; continue _fun2502 }
case 18:
                r1 = undefined;
                return r1;
case 22:
                r1 = _closure1_slot0;
                r3 = r1.default;
                r2 = r3.showAlert;
                r1 = _closure1_slot1;
                if(r4) { _fun2502_ip = 48; continue _fun2502 }
case 44:
                r4 = _closure1_slot1;
case 48:
                r0 = a0;
                r0 = r2.bind(r3)(r0, r1, r4);
                r0 = undefined;
                return r0;
            }
        };
        r1['alertWithArgs'] = r3;
        r2['default'] = r1;
        return r0;
    };
    r6 = 222;
    r5 = [1, 223];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun2503: for(var _fun2503_ip = 0; ; ) switch(_fun2503_ip) {
case 0:
            r2 = a5;
            var _closure1_slot0 = r2;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun2504: for(var _fun2504_ip = 0; ; ) switch(_fun2504_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun2504_ip = 104; continue _fun2504 }
case 20:
                    r2 = r1.WeakMap;
                    r3 = r2.prototype;
                    r3 = Object.create(r3, {constructor: {value: r2}});
                    r5 = r3;
                    r2 = new r5[r2](r4);
                    r2 = r2 instanceof Object ? r2 : r3;
                    var _closure2_slot0 = r2;
                    r1 = r1.WeakMap;
                    r2 = r1.prototype;
                    r2 = Object.create(r2, {constructor: {value: r1}});
                    r5 = r2;
                    r1 = new r5[r1](r4);
                    r1 = r1 instanceof Object ? r1 : r2;
                    var _closure2_slot1 = r1;
                    r2 = function(a0) { // Original name: _getRequireWildcardCache, environment: r0
                        _fun2505: for(var _fun2505_ip = 0; ; ) switch(_fun2505_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun2505_ip = 15; continue _fun2505 }
case 9:
                            r0 = _closure2_slot0;
                            _fun2505_ip = 19; continue _fun2505;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot3 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot3 = r0;
            r4 = global;
            r6 = r4.Object;
            r5 = r6.defineProperty;
            r1 = {};
            r0 = true;
            r1['value'] = r0;
            r0 = '__esModule';
            r0 = r5.bind(r6)(r2, r0, r1);
            r0 = {};
            var _closure1_slot1 = r0;
            r0 = undefined;
            r2['default'] = r0;
            r5 = a6;
            r1 = 0;
            r5 = r5[r1];
            r1 = a1;
            r6 = r1.bind(r0)(r5);
            if(!r6) { _fun2503_ip = 98; continue _fun2503 }
case 84:
            r5 = r6.__esModule;
            r1 = r6;
            if(r5) { _fun2503_ip = 365; continue _fun2503 }
case 98:
            r16 = null;
            if(!(r16 !== r6)) { _fun2503_ip = 356; continue _fun2503 }
case 107:
            r7 = typeof r6;
            r5 = 'object';
            if(!(r5 !== r7)) { _fun2503_ip = 129; continue _fun2503 }
case 118:
            r5 = 'function';
            if(!(r5 === r7)) { _fun2503_ip = 356; continue _fun2503 }
case 129:
            r5 = _closure1_slot3;
            r7 = r5.bind(r0)(r0);
            if(!r7) { _fun2503_ip = 157; continue _fun2503 }
case 141:
            r5 = r7.has;
            r5 = r5.bind(r7)(r6);
            if(r5) { _fun2503_ip = 344; continue _fun2503 }
case 157:
            r5 = Object.create(r16);
            r8 = r4.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun2503_ip = 185; continue _fun2503 }
case 174:
            r8 = r4.Object;
            r15 = r8.getOwnPropertyDescriptor;
case 185:
            r13 = r6;
            r9 = 'default';
            r8 = undefined;
            for(r10 in r13)
case 202:
            {
case 211:
                r20 = r10;
                if(r9 === r20) { _fun2503_ip = 202; continue _fun2503 }
case 218:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r6, r20);
                if(!r17) { _fun2503_ip = 202; continue _fun2503 }
case 239:
                r17 = null;
                if(!r15) { _fun2503_ip = 261; continue _fun2503 }
case 244:
                r19 = r4.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r6, r20);
case 261:
                if(!r17) { _fun2503_ip = 280; continue _fun2503 }
case 264:
                r18 = r17.get;
                if(r18) { _fun2503_ip = 293; continue _fun2503 }
case 272:
                r18 = r17.set;
                if(r18) { _fun2503_ip = 293; continue _fun2503 }
case 280:
                r18 = r6[r20];
                r5[r20] = r18;
                r8 = r17;
                _fun2503_ip = 202; continue _fun2503;
case 293:
                r19 = r4.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r5, r20, r17);
                r8 = r17;
                _fun2503_ip = 202; continue _fun2503;
            }
case 316:
            r5['default'] = r6;
            r1 = r5;
            if(!r7) { _fun2503_ip = 365; continue _fun2503 }
case 328:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r5);
            r1 = r5;
            _fun2503_ip = 365; continue _fun2503;
case 344:
            r5 = r7.get;
            r1 = r5.bind(r7)(r6);
            _fun2503_ip = 365; continue _fun2503;
case 356:
            r5 = {};
            r5['default'] = r6;
            r1 = r5;
case 365:
            var _closure1_slot2 = r1;
            r5 = r4.Object;
            r4 = r5.keys;
            r5 = r4.bind(r5)(r1);
            r4 = r5.forEach;
            r3 = function(a0) { // Environment: r3
                _fun2506: for(var _fun2506_ip = 0; ; ) switch(_fun2506_ip) {
case 0:
