                        r0 = r2.bind(r3)(r0, r1);
                        return r0;
                    };
                    return r0;
                };
                r0 = r0.bind(r2)();
                r4['value'] = r0;
                r0 = new Array(5);
                r0[0] = r4;
                r4 = {};
                r6 = 'componentDidUpdate';
                r4['key'] = r6;
                r6 = function(a0, a1) { // Original name: componentDidUpdate, environment: r5
                    _fun4973: for(var _fun4973_ip = 0; ; ) switch(_fun4973_ip) {
case 0:
                        r2 = this;
                        r0 = r2.props;
                        r1 = r0.enabled;
                        r0 = null;
                        r3 = r1 != r0;
                        r0 = true;
                        if(!r3) { _fun4973_ip = 27; continue _fun4973 }
case 24:
                        r0 = r1;
case 27:
                        if(!r0) { _fun4973_ip = 71; continue _fun4973 }
case 30:
                        r1 = r2._bottom;
                        r0 = a1;
                        r0 = r0.bottom;
                        if(!(r1 !== r0)) { _fun4973_ip = 71; continue _fun4973 }
case 48:
                        r1 = r2.setState;
                        r0 = {};
                        r3 = r2._bottom;
                        r0['bottom'] = r3;
                        r0 = r1.bind(r2)(r0);
case 71:
                        r0 = undefined;
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[1] = r4;
                r4 = {};
                r6 = 'componentDidMount';
                r4['key'] = r6;
                r6 = function() { // Original name: componentDidMount, environment: r5
                    _fun4974: for(var _fun4974_ip = 0; ; ) switch(_fun4974_ip) {
case 0:
                        r1 = this;
                        r2 = _closure1_slot12;
                        r3 = r2.default;
                        r2 = r3.isVisible;
                        r2 = r2.bind(r3)();
                        if(r2) { _fun4974_ip = 48; continue _fun4974 }
case 27:
                        r2 = null;
                        r1['_keyboardEvent'] = r2;
                        r3 = r1._setBottom;
                        r2 = 0;
                        r2 = r3.bind(r1)(r2);
case 48:
                        r2 = _closure1_slot9;
                        r2 = r2.default;
                        r3 = r2.OS;
                        r2 = 'ios';
                        if(!(r3 !== r2)) { _fun4974_ip = 146; continue _fun4974 }
case 70:
                        r3 = _closure1_slot12;
                        r6 = r3.default;
                        r5 = r6.addListener;
                        r4 = r1._onKeyboardChange;
                        r2 = 'keyboardDidHide';
                        r4 = r5.bind(r6)(r2, r4);
                        r2 = new Array(2);
                        r2[0] = r4;
                        r6 = r3.default;
                        r5 = r6.addListener;
                        r4 = r1._onKeyboardChange;
                        r3 = 'keyboardDidShow';
                        r3 = r5.bind(r6)(r3, r4);
                        r2[1] = r3;
                        r1['_subscriptions'] = r2;
                        _fun4974_ip = 220; continue _fun4974;
case 146:
                        r2 = _closure1_slot12;
                        r5 = r2.default;
                        r4 = r5.addListener;
                        r3 = r1._onKeyboardHide;
                        r0 = 'keyboardWillHide';
                        r3 = r4.bind(r5)(r0, r3);
                        r0 = new Array(2);
                        r0[0] = r3;
                        r5 = r2.default;
                        r4 = r5.addListener;
                        r3 = r1._onKeyboardChange;
                        r2 = 'keyboardWillShow';
                        r2 = r4.bind(r5)(r2, r3);
                        r0[1] = r2;
                        r1['_subscriptions'] = r0;
case 220:
                        r0 = undefined;
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[2] = r4;
                r4 = {};
                r6 = 'componentWillUnmount';
                r4['key'] = r6;
                r6 = function() { // Original name: componentWillUnmount, environment: r5
                    r0 = this;
                    r2 = r0._subscriptions;
                    r1 = r2.forEach;
                    r0 = function(a0) { // Environment: r0
                        r1 = a0;
                        r0 = r1.remove;
                        r0 = r0.bind(r1)();
                        r0 = undefined;
                        return r0;
                    };
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
                };
                r4['value'] = r6;
                r0[3] = r4;
                r4 = {};
                r6 = 'render';
                r4['key'] = r6;
                r5 = function() { // Original name: render, environment: r5
                    _fun4977: for(var _fun4977_ip = 0; ; ) switch(_fun4977_ip) {
case 0:
                        r0 = this;
                        r7 = r0.props;
                        r4 = r7.behavior;
                        r8 = r7.children;
                        r20 = r7.contentContainerStyle;
                        r2 = r7.enabled;
                        r6 = true;
                        r3 = undefined;
                        r1 = true;
                        if(!(r2 !== r3)) { _fun4977_ip = 43; continue _fun4977 }
case 40:
                        r1 = r2;
case 43:
                        r2 = r7.keyboardVerticalOffset;
                        r12 = r7.style;
                        r2 = r7.onLayout;
                        r2 = _closure1_slot0;
                        r5 = r2.default;
                        r2 = _closure1_slot15;
                        r7 = r5.bind(r3)(r7, r2);
                        r2 = 0;
                        r5 = 0;
                        if(!(r1 === r6)) { _fun4977_ip = 99; continue _fun4977 }
case 89:
                        r1 = r0.state;
                        r5 = r1.bottom;
case 99:
                        r1 = 'height';
                        if(!(r1 !== r4)) { _fun4977_ip = 444; continue _fun4977 }
case 110:
                        r1 = 'position';
                        if(!(r1 !== r4)) { _fun4977_ip = 313; continue _fun4977 }
case 121:
                        r1 = 'padding';
                        if(!(r1 !== r4)) { _fun4977_ip = 207; continue _fun4977 }
case 129:
                        r1 = _closure1_slot14;
                        r6 = r1.jsx;
                        r1 = _closure1_slot11;
                        r4 = r1.default;
                        r1 = global;
                        r13 = r1.Object;
                        r11 = r13.assign;
                        r10 = {};
                        r1 = r0.viewRef;
                        r10['ref'] = r1;
                        r1 = r0._onLayout;
                        r10['onLayout'] = r1;
                        r10['style'] = r12;
                        r1 = {};
                        r1['children'] = r8;
                        r1 = r11.bind(r13)(r10, r7, r1);
                        r1 = r6.bind(r3)(r4, r1);
                        return r1;
case 207:
                        r1 = _closure1_slot14;
                        r6 = r1.jsx;
                        r1 = _closure1_slot11;
                        r4 = r1.default;
                        r1 = global;
                        r13 = r1.Object;
                        r11 = r13.assign;
                        r10 = {};
                        r1 = r0.viewRef;
                        r10['ref'] = r1;
                        r1 = _closure1_slot8;
                        r15 = r1.default;
                        r14 = r15.compose;
                        r1 = {};
                        r1['paddingBottom'] = r5;
                        r1 = r14.bind(r15)(r12, r1);
                        r10['style'] = r1;
                        r1 = r0._onLayout;
                        r10['onLayout'] = r1;
                        r1 = {};
                        r1['children'] = r8;
                        r1 = r11.bind(r13)(r10, r7, r1);
                        r1 = r6.bind(r3)(r4, r1);
                        return r1;
case 313:
                        r15 = _closure1_slot14;
                        r6 = r15.jsx;
                        r14 = _closure1_slot11;
                        r4 = r14.default;
                        r1 = global;
                        r13 = r1.Object;
                        r11 = r13.assign;
                        r10 = {};
                        r1 = r0.viewRef;
                        r10['ref'] = r1;
                        r10['style'] = r12;
                        r1 = r0._onLayout;
                        r10['onLayout'] = r1;
                        r1 = {};
                        r16 = r15.jsx;
                        r15 = r14.default;
                        r14 = {};
                        r17 = _closure1_slot8;
                        r19 = r17.default;
                        r18 = r19.compose;
                        r17 = {};
                        r17['bottom'] = r5;
                        r17 = r18.bind(r19)(r20, r17);
                        r14['style'] = r17;
                        r14['children'] = r8;
                        r14 = r16.bind(r3)(r15, r14);
                        r1['children'] = r14;
                        r1 = r11.bind(r13)(r10, r7, r1);
                        r1 = r6.bind(r3)(r4, r1);
                        return r1;
case 444:
                        r4 = r0._frame;
                        r1 = null;
                        r1 = r4 != r1;
                        r11 = undefined;
                        if(!r1) { _fun4977_ip = 504; continue _fun4977 }
case 461:
                        r1 = r0.state;
                        r1 = r1.bottom;
                        r1 = r1 > r2;
                        r11 = undefined;
                        if(!r1) { _fun4977_ip = 504; continue _fun4977 }
case 480:
                        r1 = {};
                        r4 = r0._initialFrameHeight;
                        r4 = r4 - r5;
                        r1['height'] = r4;
                        r1['flex'] = r2;
                        r11 = r1;
case 504:
                        r1 = _closure1_slot14;
                        r2 = r1.jsx;
                        r1 = _closure1_slot11;
                        r1 = r1.default;
                        r4 = global;
                        r6 = r4.Object;
                        r5 = r6.assign;
                        r4 = {};
                        r10 = r0.viewRef;
                        r4['ref'] = r10;
                        r9 = _closure1_slot8;
                        r10 = r9.default;
                        r9 = r10.compose;
                        r9 = r9.bind(r10)(r12, r11);
                        r4['style'] = r9;
                        r0 = r0._onLayout;
                        r4['onLayout'] = r0;
                        r0 = {};
                        r0['children'] = r8;
                        r0 = r5.bind(r6)(r4, r7, r0);
                        r0 = r2.bind(r3)(r1, r0);
                        return r0;
                    }
                };
                r4['value'] = r5;
                r0[4] = r4;
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            };
            r1 = r1.bind(r0)(r3);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 421;
    r5 = [1, 203, 363, 12, 13, 23, 25, 28, 385, 253, 33, 21, 248, 384, 119, 251];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun4978: for(var _fun4978_ip = 0; ; ) switch(_fun4978_ip) {
case 0:
            r6 = a1;
            r2 = a5;
            r7 = a6;
            var _closure1_slot0 = r6;
            var _closure1_slot1 = r7;
            r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r5
                _fun4979: for(var _fun4979_ip = 0; ; ) switch(_fun4979_ip) {
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
                    r0 = _closure1_slot13;
                    r0 = r0.bind(r2)();
                    if(r0) { _fun4979_ip = 61; continue _fun4979 }
case 48:
                    r0 = r8.apply;
                    r0 = r0.bind(r8)(r3, r5);
                    _fun4979_ip = 107; continue _fun4979;
case 61:
                    r6 = global;
                    r7 = r6.Reflect;
                    r6 = r7.construct;
                    if(r5) { _fun4979_ip = 81; continue _fun4979 }
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
            var _closure1_slot12 = r0;
            r0 = function() { // Original name: _isNativeReflectConstruct, environment: r5
                _fun4980: for(var _fun4980_ip = 0; ; ) switch(_fun4980_ip) {
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
                    _fun4980_ip = 74; continue _fun4980;
case 72: // catch_target0
                    CatchBlockStart(arg_register=1);
case 74:
                    r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                        r0 = _closure2_slot0;
                        r0 = !r0;
                        r0 = !r0;
                        return r0;
                    };
                    _closure1_slot13 = r1;
                    r0 = undefined;
                    r0 = r1.bind(r0)();
                    return r0;
                }
            };
            var _closure1_slot13 = r0;
            r13 = 0;
            r1 = r7[r13];
            r0 = undefined;
            r9 = r6.bind(r0)(r1);
            r1 = global;
            r8 = r1.Object;
            r4 = r8.defineProperty;
            r3 = {};
            r1 = true;
            r3['value'] = r1;
            r1 = '__esModule';
            r1 = r4.bind(r8)(r2, r1, r3);
            r2['default'] = r0;
            r11 = 1;
            r1 = r7[r11];
            r1 = r6.bind(r0)(r1);
            r8 = r9.bind(r0)(r1);
            r1 = 2;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r1 = r9.bind(r0)(r1);
            var _closure1_slot2 = r1;
            r1 = 3;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r1 = r9.bind(r0)(r1);
            var _closure1_slot3 = r1;
            r1 = 4;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r1 = r9.bind(r0)(r1);
            var _closure1_slot4 = r1;
            r1 = 5;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r1 = r9.bind(r0)(r1);
            var _closure1_slot5 = r1;
            r1 = 6;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r1 = r9.bind(r0)(r1);
            var _closure1_slot6 = r1;
            r1 = 7;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r1 = r9.bind(r0)(r1);
            r1 = 8;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r3 = r9.bind(r0)(r1);
            r1 = 9;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r1 = r9.bind(r0)(r1);
            r1 = 10;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r1 = r9.bind(r0)(r1);
            var _closure1_slot7 = r1;
            r1 = 11;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r4 = r9.bind(r0)(r1);
            r1 = 12;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r1 = r9.bind(r0)(r1);
            r9 = 13;
            r9 = r7[r9];
            r9 = r6.bind(r0)(r9);
            var _closure1_slot8 = r9;
            r4 = r4.default;
            r4 = r4.VirtualizedListContextResetter;
            var _closure1_slot9 = r4;
            var _closure1_slot10 = r13;
            r1 = r1.default;
            r4 = r1.Component;
            r1 = function(a0) { // Environment: r5
                r3 = function(a0) { // Original name: Modal, environment: r5
                    r2 = a0;
                    r6 = this;
                    r0 = _closure1_slot2;
                    r0 = r0.default;
                    r5 = _closure2_slot0;
                    r3 = undefined;
                    r0 = r0.bind(r3)(r6, r5);
                    r1 = _closure1_slot12;
                    r0 = new Array(1);
                    r0[0] = r2;
                    r0 = r1.bind(r3)(r6, r5, r0);
                    r1 = _closure1_slot10;
                    r1 = parseFloat(r1);
                    r3 = r1 + 1;
                    _closure1_slot10 = r3;
                    r0['_identifier'] = r1;
                    r1 = {};
                    r3 = r2.visible;
                    r2 = true;
                    r2 = r3 === r2;
                    r1['isRendered'] = r2;
                    r0['state'] = r1;
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
                r0 = 'componentDidMount';
                r4['key'] = r0;
                r0 = function() { // Original name: componentDidMount, environment: r5
                    r0 = undefined;
                    return r0;
                };
                r4['value'] = r0;
                r0 = new Array(6);
                r0[0] = r4;
                r4 = {};
                r6 = 'componentWillUnmount';
                r4['key'] = r6;
                r6 = function() { // Original name: componentWillUnmount, environment: r5
                    _fun4986: for(var _fun4986_ip = 0; ; ) switch(_fun4986_ip) {
case 0:
                        r0 = this;
                        r1 = r0._eventSubscription;
                        if(!r1) { _fun4986_ip = 26; continue _fun4986 }
case 11:
                        r1 = r0._eventSubscription;
                        r0 = r1.remove;
                        r0 = r0.bind(r1)();
case 26:
                        r0 = undefined;
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[1] = r4;
                r4 = {};
                r6 = 'componentDidUpdate';
                r4['key'] = r6;
                r6 = function(a0) { // Original name: componentDidUpdate, environment: r5
                    _fun4987: for(var _fun4987_ip = 0; ; ) switch(_fun4987_ip) {
case 0:
                        r2 = this;
                        r0 = a0;
                        r1 = r0.visible;
                        r0 = false;
                        if(!(r1 === r0)) { _fun4987_ip = 52; continue _fun4987 }
case 17:
                        r0 = r2.props;
                        r0 = r0.visible;
                        r3 = true;
                        if(!(r0 === r3)) { _fun4987_ip = 52; continue _fun4987 }
case 34:
                        r1 = r2.setState;
                        r0 = {};
                        r0['isRendered'] = r3;
                        r0 = r1.bind(r2)(r0);
case 52:
                        r0 = undefined;
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[2] = r4;
                r4 = {};
                r6 = '_shouldShowModal';
                r4['key'] = r6;
                r6 = function() { // Original name: _shouldShowModal, environment: r5
                    r0 = this;
                    r0 = r0.props;
                    r1 = r0.visible;
                    r0 = true;
                    r0 = r1 === r0;
                    return r0;
                };
                r4['value'] = r6;
                r0[3] = r4;
                r4 = {};
                r6 = 'render';
                r4['key'] = r6;
                r6 = function() { // Original name: render, environment: r5
                    _fun4989: for(var _fun4989_ip = 0; ; ) switch(_fun4989_ip) {
case 0:
                        r0 = this;
                        r1 = r0._shouldShowModal;
                        r1 = r1.bind(r0)();
                        if(r1) { _fun4989_ip = 19; continue _fun4989 }
case 15:
                        r1 = null;
                        return r1;
case 19:
                        r15 = {};
                        r1 = r0.props;
                        r3 = r1.transparent;
                        r1 = 'transparent';
                        r2 = true;
                        if(!(r3 !== r2)) { _fun4989_ip = 72; continue _fun4989 }
case 42:
                        r3 = r0.props;
                        r4 = r3.backdropColor;
                        r3 = null;
                        r5 = r4 != r3;
                        r3 = 'white';
                        if(!r5) { _fun4989_ip = 69; continue _fun4989 }
case 66:
                        r3 = r4;
case 69:
                        r1 = r3;
case 72:
                        r15['backgroundColor'] = r1;
                        r1 = r0.props;
                        r5 = r1.animationType;
                        if(r5) { _fun4989_ip = 94; continue _fun4989 }
case 90:
                        r5 = 'none';
case 94:
                        r1 = r0.props;
                        r4 = r1.presentationStyle;
                        if(r4) { _fun4989_ip = 131; continue _fun4989 }
case 108:
                        r1 = r0.props;
                        r1 = r1.transparent;
                        r4 = 'fullScreen';
                        if(!(r1 === r2)) { _fun4989_ip = 131; continue _fun4989 }
case 127:
                        r4 = 'overFullScreen';
case 131:
                        r1 = r0.props;
                        r13 = r1.children;
                        r10 = _closure1_slot8;
                        r3 = r10.jsx;
                        r1 = _closure1_slot7;
                        r2 = r1.default;
                        r1 = {};
                        r1['animationType'] = r5;
                        r1['presentationStyle'] = r4;
                        r4 = r0.props;
                        r4 = r4.transparent;
                        r1['transparent'] = r4;
                        r4 = r0.props;
                        r4 = r4.hardwareAccelerated;
                        r1['hardwareAccelerated'] = r4;
                        r4 = r0.props;
                        r4 = r4.onRequestClose;
                        r1['onRequestClose'] = r4;
                        r4 = r0.props;
                        r4 = r4.onShow;
                        r1['onShow'] = r4;
                        r4 = function() { // Original name: onDismiss, environment: r4
                            r0 = undefined;
                            return r0;
                        };
                        r1['onDismiss'] = r4;
                        r4 = r0.props;
                        r4 = r4.visible;
                        r1['visible'] = r4;
                        r4 = r0.props;
                        r4 = r4.statusBarTranslucent;
                        r1['statusBarTranslucent'] = r4;
                        r4 = r0.props;
                        r4 = r4.navigationBarTranslucent;
                        r1['navigationBarTranslucent'] = r4;
                        r4 = r0._identifier;
                        r1['identifier'] = r4;
                        r4 = _closure1_slot11;
                        r4 = r4.modal;
                        r1['style'] = r4;
                        r4 = r0._shouldSetResponder;
                        r1['onStartShouldSetResponder'] = r4;
                        r4 = r0.props;
                        r4 = r4.supportedOrientations;
                        r1['supportedOrientations'] = r4;
                        r4 = r0.props;
                        r4 = r4.onOrientationChange;
                        r1['onOrientationChange'] = r4;
                        r0 = r0.props;
                        r0 = r0.testID;
                        r1['testID'] = r0;
                        r6 = r10.jsx;
                        r5 = _closure1_slot9;
                        r4 = {};
                        r9 = r10.jsx;
                        r11 = _closure1_slot0;
                        r16 = _closure1_slot1;
                        r0 = 14;
                        r7 = r16[r0];
                        r0 = undefined;
                        r7 = r11.bind(r0)(r7);
                        r7 = r7.default;
                        r7 = r7.Context;
                        r8 = r7.Provider;
                        r7 = {};
                        r12 = null;
                        r7['value'] = r12;
                        r12 = r10.jsx;
                        r10 = 15;
                        r10 = r16[r10];
                        r10 = r11.bind(r0)(r10);
                        r11 = r10.default;
                        r10 = {};
                        r14 = _closure1_slot11;
                        r16 = r14.container;
                        r14 = new Array(2);
                        r14[0] = r16;
                        r14[1] = r15;
                        r10['style'] = r14;
                        r14 = false;
                        r10['collapsable'] = r14;
                        r10['children'] = r13;
                        r10 = r12.bind(r0)(r11, r10);
                        r7['children'] = r10;
                        r7 = r9.bind(r0)(r8, r7);
                        r4['children'] = r7;
                        r4 = r6.bind(r0)(r5, r4);
                        r1['children'] = r4;
                        r0 = r3.bind(r0)(r2, r1);
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[4] = r4;
                r4 = {};
                r6 = '_shouldSetResponder';
                r4['key'] = r6;
                r5 = function() { // Original name: _shouldSetResponder, environment: r5
                    r0 = true;
                    return r0;
                };
                r4['value'] = r5;
                r0[5] = r4;
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            };
            r1 = r1.bind(r0)(r4);
            r4 = {'visible': true, 'hardwareAccelerated': false};
            r1['defaultProps'] = r4;
            r4 = 16;
            r4 = r7[r4];
            r4 = r6.bind(r0)(r4);
            r4 = r4.RootTagContext;
            r1['contextType'] = r4;
            r4 = 17;
            r4 = r7[r4];
            r4 = r6.bind(r0)(r4);
            r9 = r4.default;
            r4 = r9.getConstants;
            r4 = r4.bind(r9)();
            r4 = r4.isRTL;
            r14 = 'left';
            if(!r4) { _fun4978_ip = 454; continue _fun4978 }
case 450:
            r14 = 'right';
case 454:
            r4 = 18;
            r4 = r7[r4];
            r4 = r6.bind(r0)(r4);
            r7 = r4.default;
            r6 = r7.create;
            r4 = {};
            r9 = {};
            r10 = 'absolute';
            r9['position'] = r10;
            r4['modal'] = r9;
            r10 = r8.default;
            r12 = r8.default;
            r9 = r8.default;
            r8 = {};
            r9 = r9.bind(r0)(r8, r14, r13);
            r8 = 'top';
            r9 = r12.bind(r0)(r9, r8, r13);
            r8 = 'flex';
            r8 = r10.bind(r0)(r9, r8, r11);
            r4['container'] = r8;
            r4 = r6.bind(r7)(r4);
            var _closure1_slot11 = r4;
            r3 = r3.default;
            r3 = r3.unstable_Modal;
            r4 = null;
            if(!(r3 != r4)) { _fun4978_ip = 573; continue _fun4978 }
case 570:
            r1 = r3;
case 573:
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 422;
    r5 = [1, 99, 12, 13, 23, 25, 28, 191, 423, 424, 426, 345, 119, 251, 378, 248, 255, 428, 253];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r2 = a5;
        r0 = global;
        r4 = r0.Object;
        r3 = r4.defineProperty;
        r1 = {};
        r0 = true;
        r1['value'] = r0;
        r0 = '__esModule';
        r0 = r3.bind(r4)(r2, r0, r1);
        r0 = undefined;
        r2['default'] = r0;
        r1 = {};
        r3 = null;
        r1['unstable_Modal'] = r3;
        r2['default'] = r1;
        return r0;
    };
    r6 = 423;
    r5 = new Array(0);
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun4993: for(var _fun4993_ip = 0; ; ) switch(_fun4993_ip) {
case 0:
            r2 = a5;
            var _closure1_slot0 = r2;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun4994: for(var _fun4994_ip = 0; ; ) switch(_fun4994_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun4994_ip = 104; continue _fun4994 }
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
                        _fun4995: for(var _fun4995_ip = 0; ; ) switch(_fun4995_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun4995_ip = 15; continue _fun4995 }
case 9:
                            r0 = _closure2_slot0;
                            _fun4995_ip = 19; continue _fun4995;
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
            if(!r6) { _fun4993_ip = 98; continue _fun4993 }
case 84:
            r5 = r6.__esModule;
            r1 = r6;
            if(r5) { _fun4993_ip = 365; continue _fun4993 }
case 98:
            r16 = null;
            if(!(r16 !== r6)) { _fun4993_ip = 356; continue _fun4993 }
case 107:
            r7 = typeof r6;
            r5 = 'object';
            if(!(r5 !== r7)) { _fun4993_ip = 129; continue _fun4993 }
case 118:
            r5 = 'function';
            if(!(r5 === r7)) { _fun4993_ip = 356; continue _fun4993 }
case 129:
            r5 = _closure1_slot3;
            r7 = r5.bind(r0)(r0);
            if(!r7) { _fun4993_ip = 157; continue _fun4993 }
case 141:
            r5 = r7.has;
            r5 = r5.bind(r7)(r6);
            if(r5) { _fun4993_ip = 344; continue _fun4993 }
case 157:
            r5 = Object.create(r16);
            r8 = r4.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun4993_ip = 185; continue _fun4993 }
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
                if(r9 === r20) { _fun4993_ip = 202; continue _fun4993 }
case 218:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r6, r20);
                if(!r17) { _fun4993_ip = 202; continue _fun4993 }
case 239:
                r17 = null;
                if(!r15) { _fun4993_ip = 261; continue _fun4993 }
case 244:
                r19 = r4.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r6, r20);
case 261:
                if(!r17) { _fun4993_ip = 280; continue _fun4993 }
case 264:
                r18 = r17.get;
                if(r18) { _fun4993_ip = 293; continue _fun4993 }
case 272:
                r18 = r17.set;
                if(r18) { _fun4993_ip = 293; continue _fun4993 }
case 280:
                r18 = r6[r20];
                r5[r20] = r18;
                r8 = r17;
                _fun4993_ip = 202; continue _fun4993;
case 293:
                r19 = r4.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r5, r20, r17);
                r8 = r17;
                _fun4993_ip = 202; continue _fun4993;
            }
case 316:
            r5['default'] = r6;
            r1 = r5;
            if(!r7) { _fun4993_ip = 365; continue _fun4993 }
case 328:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r5);
            r1 = r5;
            _fun4993_ip = 365; continue _fun4993;
case 344:
            r5 = r7.get;
            r1 = r5.bind(r7)(r6);
            _fun4993_ip = 365; continue _fun4993;
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
                _fun4996: for(var _fun4996_ip = 0; ; ) switch(_fun4996_ip) {
case 0:
                    r4 = a0;
                    var _closure2_slot0 = r4;
                    r0 = 'default';
                    if(!(r4 !== r0)) { _fun4996_ip = 152; continue _fun4996 }
case 20:
                    r0 = '__esModule';
                    if(!(r4 !== r0)) { _fun4996_ip = 152; continue _fun4996 }
case 31:
                    r1 = global;
                    r0 = r1.Object;
                    r0 = r0.prototype;
                    r6 = r0.hasOwnProperty;
                    r3 = r6.call;
                    r2 = _closure1_slot1;
                    r2 = r3.bind(r6)(r2, r4);
                    if(r2) { _fun4996_ip = 148; continue _fun4996 }
case 70:
                    r2 = _closure1_slot0;
                    r2 = r4 in r2;
                    if(!r2) { _fun4996_ip = 101; continue _fun4996 }
case 81:
                    r2 = _closure1_slot0;
                    r3 = r2[r4];
                    r2 = _closure1_slot2;
                    r2 = r2[r4];
                    if(!(r3 !== r2)) { _fun4996_ip = 144; continue _fun4996 }
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
    r6 = 424;
    r5 = [425];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun4998: for(var _fun4998_ip = 0; ; ) switch(_fun4998_ip) {
case 0:
            r2 = a5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun4999: for(var _fun4999_ip = 0; ; ) switch(_fun4999_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun4999_ip = 104; continue _fun4999 }
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
                        _fun5000: for(var _fun5000_ip = 0; ; ) switch(_fun5000_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5000_ip = 15; continue _fun5000 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5000_ip = 19; continue _fun5000;
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
            if(!r3) { _fun4998_ip = 88; continue _fun4998 }
case 74:
            r5 = r3.__esModule;
            r4 = r3;
            if(r5) { _fun4998_ip = 355; continue _fun4998 }
case 88:
            r14 = null;
            if(!(r14 !== r3)) { _fun4998_ip = 346; continue _fun4998 }
case 97:
            r6 = typeof r3;
            r5 = 'object';
            if(!(r5 !== r6)) { _fun4998_ip = 119; continue _fun4998 }
case 108:
            r5 = 'function';
            if(!(r5 === r6)) { _fun4998_ip = 346; continue _fun4998 }
case 119:
            r1 = _closure1_slot0;
            r5 = r1.bind(r0)(r0);
            if(!r5) { _fun4998_ip = 147; continue _fun4998 }
case 131:
            r1 = r5.has;
            r1 = r1.bind(r5)(r3);
            if(r1) { _fun4998_ip = 334; continue _fun4998 }
case 147:
            r1 = Object.create(r14);
            r6 = r15.Object;
            r13 = r6.defineProperty;
            if(!r13) { _fun4998_ip = 175; continue _fun4998 }
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
                if(r7 === r19) { _fun4998_ip = 192; continue _fun4998 }
case 208:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r3, r19);
                if(!r16) { _fun4998_ip = 192; continue _fun4998 }
case 229:
                r16 = null;
                if(!r13) { _fun4998_ip = 251; continue _fun4998 }
case 234:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r3, r19);
case 251:
                if(!r16) { _fun4998_ip = 270; continue _fun4998 }
case 254:
                r17 = r16.get;
                if(r17) { _fun4998_ip = 283; continue _fun4998 }
case 262:
                r17 = r16.set;
                if(r17) { _fun4998_ip = 283; continue _fun4998 }
case 270:
                r17 = r3[r19];
                r1[r19] = r17;
                r6 = r16;
                _fun4998_ip = 192; continue _fun4998;
case 283:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r1, r19, r16);
                r6 = r16;
                _fun4998_ip = 192; continue _fun4998;
            }
case 306:
            r1['default'] = r3;
            r4 = r1;
            if(!r5) { _fun4998_ip = 355; continue _fun4998 }
case 318:
            r6 = r5.set;
            r6 = r6.bind(r5)(r3, r1);
            r4 = r1;
            _fun4998_ip = 355; continue _fun4998;
case 334:
            r1 = r5.get;
            r4 = r1.bind(r5)(r3);
            _fun4998_ip = 355; continue _fun4998;
case 346:
            r1 = {};
            r1['default'] = r3;
            r4 = r1;
case 355:
            r3 = r4.get;
            r1 = 'ModalManager';
            r1 = r3.bind(r4)(r1);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 425;
    r5 = [36];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5001: for(var _fun5001_ip = 0; ; ) switch(_fun5001_ip) {
case 0:
            r2 = a5;
            var _closure1_slot0 = r2;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun5002: for(var _fun5002_ip = 0; ; ) switch(_fun5002_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5002_ip = 104; continue _fun5002 }
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
                        _fun5003: for(var _fun5003_ip = 0; ; ) switch(_fun5003_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5003_ip = 15; continue _fun5003 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5003_ip = 19; continue _fun5003;
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
            if(!r6) { _fun5001_ip = 98; continue _fun5001 }
case 84:
            r5 = r6.__esModule;
            r1 = r6;
            if(r5) { _fun5001_ip = 365; continue _fun5001 }
case 98:
            r16 = null;
            if(!(r16 !== r6)) { _fun5001_ip = 356; continue _fun5001 }
case 107:
            r7 = typeof r6;
            r5 = 'object';
            if(!(r5 !== r7)) { _fun5001_ip = 129; continue _fun5001 }
case 118:
            r5 = 'function';
            if(!(r5 === r7)) { _fun5001_ip = 356; continue _fun5001 }
case 129:
            r5 = _closure1_slot3;
            r7 = r5.bind(r0)(r0);
            if(!r7) { _fun5001_ip = 157; continue _fun5001 }
case 141:
            r5 = r7.has;
            r5 = r5.bind(r7)(r6);
            if(r5) { _fun5001_ip = 344; continue _fun5001 }
case 157:
            r5 = Object.create(r16);
            r8 = r4.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun5001_ip = 185; continue _fun5001 }
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
                if(r9 === r20) { _fun5001_ip = 202; continue _fun5001 }
case 218:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r6, r20);
                if(!r17) { _fun5001_ip = 202; continue _fun5001 }
case 239:
                r17 = null;
                if(!r15) { _fun5001_ip = 261; continue _fun5001 }
case 244:
                r19 = r4.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r6, r20);
case 261:
                if(!r17) { _fun5001_ip = 280; continue _fun5001 }
case 264:
                r18 = r17.get;
                if(r18) { _fun5001_ip = 293; continue _fun5001 }
case 272:
                r18 = r17.set;
                if(r18) { _fun5001_ip = 293; continue _fun5001 }
case 280:
                r18 = r6[r20];
                r5[r20] = r18;
                r8 = r17;
                _fun5001_ip = 202; continue _fun5001;
case 293:
                r19 = r4.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r5, r20, r17);
                r8 = r17;
                _fun5001_ip = 202; continue _fun5001;
            }
case 316:
            r5['default'] = r6;
            r1 = r5;
            if(!r7) { _fun5001_ip = 365; continue _fun5001 }
case 328:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r5);
            r1 = r5;
            _fun5001_ip = 365; continue _fun5001;
case 344:
            r5 = r7.get;
            r1 = r5.bind(r7)(r6);
            _fun5001_ip = 365; continue _fun5001;
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
                _fun5004: for(var _fun5004_ip = 0; ; ) switch(_fun5004_ip) {
case 0:
                    r4 = a0;
                    var _closure2_slot0 = r4;
                    r0 = 'default';
                    if(!(r4 !== r0)) { _fun5004_ip = 152; continue _fun5004 }
case 20:
                    r0 = '__esModule';
                    if(!(r4 !== r0)) { _fun5004_ip = 152; continue _fun5004 }
case 31:
                    r1 = global;
                    r0 = r1.Object;
                    r0 = r0.prototype;
                    r6 = r0.hasOwnProperty;
                    r3 = r6.call;
                    r2 = _closure1_slot1;
                    r2 = r3.bind(r6)(r2, r4);
                    if(r2) { _fun5004_ip = 148; continue _fun5004 }
case 70:
                    r2 = _closure1_slot0;
                    r2 = r4 in r2;
                    if(!r2) { _fun5004_ip = 101; continue _fun5004 }
case 81:
                    r2 = _closure1_slot0;
                    r3 = r2[r4];
                    r2 = _closure1_slot2;
                    r2 = r2[r4];
                    if(!(r3 !== r2)) { _fun5004_ip = 144; continue _fun5004 }
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
    r6 = 426;
    r5 = [427];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r2 = a5;
        r6 = a6;
        r0 = 0;
        r3 = r6[r0];
        r0 = undefined;
        r5 = r4.bind(r0)(r3);
        r7 = global;
        r10 = r7.Object;
        r9 = r10.defineProperty;
        r8 = {};
        r3 = true;
        r8['value'] = r3;
        r3 = '__esModule';
        r3 = r9.bind(r10)(r2, r3, r8);
        r2['__INTERNAL_VIEW_CONFIG'] = r0;
        r2['default'] = r0;
        r3 = 1;
        r3 = r6[r3];
        r3 = r4.bind(r0)(r3);
        r3 = r5.bind(r0)(r3);
        r3 = {};
        r5 = 'RCTModalHostView';
        r3['uiViewClassName'] = r5;
        r8 = {};
        r9 = {};
        r10 = 'onRequestClose';
        r9['registrationName'] = r10;
        r8['topRequestClose'] = r9;
        r9 = {};
        r10 = 'onShow';
        r9['registrationName'] = r10;
        r8['topShow'] = r9;
        r9 = {};
        r10 = 'onDismiss';
        r9['registrationName'] = r10;
        r8['topDismiss'] = r9;
        r9 = {};
        r10 = 'onOrientationChange';
        r9['registrationName'] = r10;
        r8['topOrientationChange'] = r9;
        r3['directEventTypes'] = r8;
        r10 = r7.Object;
        r9 = r10.assign;
        r7 = 2;
        r7 = r6[r7];
        r11 = r4.bind(r0)(r7);
        r8 = r11.ConditionallyIgnoredEventHandlers;
        r7 = {'onRequestClose': true, 'onShow': true, 'onDismiss': true, 'onOrientationChange': true};
        r8 = r8.bind(r11)(r7);
        r7 = {'animationType': true, 'presentationStyle': true, 'transparent': true, 'statusBarTranslucent': true, 'navigationBarTranslucent': true, 'hardwareAccelerated': true, 'visible': true, 'animated': true, 'supportedOrientations': true, 'identifier': true};
        r7 = r9.bind(r10)(r7, r8);
        r3['validAttributes'] = r7;
        r2['__INTERNAL_VIEW_CONFIG'] = r3;
        var _closure1_slot0 = r3;
        r3 = 3;
        r3 = r6[r3];
        r4 = r4.bind(r0)(r3);
        r3 = r4.get;
        r1 = function() { // Environment: r1
            r0 = _closure1_slot0;
            return r0;
        };
        r1 = r3.bind(r4)(r5, r1);
        r2['default'] = r1;
        return r0;
    };
    r6 = 427;
    r5 = [1, 279, 124, 86];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5008: for(var _fun5008_ip = 0; ; ) switch(_fun5008_ip) {
case 0:
            r5 = a1;
            r2 = a5;
            r6 = a6;
            r0 = 0;
            r1 = r6[r0];
            r0 = undefined;
            r3 = r5.bind(r0)(r1);
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
            r1 = r3.bind(r0)(r1);
            var _closure1_slot0 = r1;
            r3 = r1.default;
            if(r3) { _fun5008_ip = 103; continue _fun5008 }
case 91:
            r3 = {'isRTL': false, 'doLeftAndRightSwapInRTL': true};
            _fun5008_ip = 155; continue _fun5008;
case 103:
            r5 = r1.default;
            r1 = r5.getConstants;
            r1 = r1.bind(r5)();
            r7 = r1.isRTL;
            r6 = r1.doLeftAndRightSwapInRTL;
            r5 = r1.localeIdentifier;
            r1 = {};
            r1['isRTL'] = r7;
            r1['doLeftAndRightSwapInRTL'] = r6;
            r1['localeIdentifier'] = r5;
            r3 = r1;
case 155:
            var _closure1_slot1 = r3;
            r1 = {};
            r5 = function() { // Original name: getConstants, environment: r4
                r0 = _closure1_slot1;
                return r0;
            };
            r1['getConstants'] = r5;
            r5 = function(a0) { // Original name: allowRTL, environment: r4
                _fun5010: for(var _fun5010_ip = 0; ; ) switch(_fun5010_ip) {
case 0:
                    r1 = _closure1_slot0;
                    r1 = r1.default;
                    if(r1) { _fun5010_ip = 19; continue _fun5010 }
case 15:
                    r1 = undefined;
                    return r1;
case 19:
                    r0 = _closure1_slot0;
                    r2 = r0.default;
                    r1 = r2.allowRTL;
                    r0 = a0;
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
                }
            };
            r1['allowRTL'] = r5;
            r5 = function(a0) { // Original name: forceRTL, environment: r4
                _fun5011: for(var _fun5011_ip = 0; ; ) switch(_fun5011_ip) {
case 0:
                    r1 = _closure1_slot0;
                    r1 = r1.default;
                    if(r1) { _fun5011_ip = 19; continue _fun5011 }
case 15:
                    r1 = undefined;
                    return r1;
case 19:
                    r0 = _closure1_slot0;
                    r2 = r0.default;
                    r1 = r2.forceRTL;
                    r0 = a0;
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
                }
            };
            r1['forceRTL'] = r5;
            r4 = function(a0) { // Original name: swapLeftAndRightInRTL, environment: r4
                _fun5012: for(var _fun5012_ip = 0; ; ) switch(_fun5012_ip) {
case 0:
                    r1 = _closure1_slot0;
                    r1 = r1.default;
                    if(r1) { _fun5012_ip = 19; continue _fun5012 }
case 15:
                    r1 = undefined;
                    return r1;
case 19:
                    r0 = _closure1_slot0;
                    r2 = r0.default;
                    r1 = r2.swapLeftAndRightInRTL;
                    r0 = a0;
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
                }
            };
            r1['swapLeftAndRightInRTL'] = r4;
            r4 = r3.isRTL;
            r1['isRTL'] = r4;
            r3 = r3.doLeftAndRightSwapInRTL;
            r1['doLeftAndRightSwapInRTL'] = r3;
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 428;
    r5 = [1, 429];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5013: for(var _fun5013_ip = 0; ; ) switch(_fun5013_ip) {
case 0:
            r2 = a5;
            var _closure1_slot0 = r2;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun5014: for(var _fun5014_ip = 0; ; ) switch(_fun5014_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5014_ip = 104; continue _fun5014 }
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
                        _fun5015: for(var _fun5015_ip = 0; ; ) switch(_fun5015_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5015_ip = 15; continue _fun5015 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5015_ip = 19; continue _fun5015;
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
            if(!r6) { _fun5013_ip = 98; continue _fun5013 }
case 84:
            r5 = r6.__esModule;
            r1 = r6;
            if(r5) { _fun5013_ip = 365; continue _fun5013 }
case 98:
            r16 = null;
            if(!(r16 !== r6)) { _fun5013_ip = 356; continue _fun5013 }
case 107:
            r7 = typeof r6;
            r5 = 'object';
            if(!(r5 !== r7)) { _fun5013_ip = 129; continue _fun5013 }
case 118:
            r5 = 'function';
            if(!(r5 === r7)) { _fun5013_ip = 356; continue _fun5013 }
case 129:
            r5 = _closure1_slot3;
            r7 = r5.bind(r0)(r0);
            if(!r7) { _fun5013_ip = 157; continue _fun5013 }
case 141:
            r5 = r7.has;
            r5 = r5.bind(r7)(r6);
            if(r5) { _fun5013_ip = 344; continue _fun5013 }
case 157:
            r5 = Object.create(r16);
            r8 = r4.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun5013_ip = 185; continue _fun5013 }
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
                if(r9 === r20) { _fun5013_ip = 202; continue _fun5013 }
case 218:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r6, r20);
                if(!r17) { _fun5013_ip = 202; continue _fun5013 }
case 239:
                r17 = null;
                if(!r15) { _fun5013_ip = 261; continue _fun5013 }
case 244:
                r19 = r4.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r6, r20);
case 261:
                if(!r17) { _fun5013_ip = 280; continue _fun5013 }
case 264:
                r18 = r17.get;
                if(r18) { _fun5013_ip = 293; continue _fun5013 }
case 272:
                r18 = r17.set;
                if(r18) { _fun5013_ip = 293; continue _fun5013 }
case 280:
                r18 = r6[r20];
                r5[r20] = r18;
                r8 = r17;
                _fun5013_ip = 202; continue _fun5013;
case 293:
                r19 = r4.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r5, r20, r17);
                r8 = r17;
                _fun5013_ip = 202; continue _fun5013;
            }
case 316:
            r5['default'] = r6;
            r1 = r5;
            if(!r7) { _fun5013_ip = 365; continue _fun5013 }
case 328:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r5);
            r1 = r5;
            _fun5013_ip = 365; continue _fun5013;
case 344:
            r5 = r7.get;
            r1 = r5.bind(r7)(r6);
            _fun5013_ip = 365; continue _fun5013;
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
                _fun5016: for(var _fun5016_ip = 0; ; ) switch(_fun5016_ip) {
case 0:
                    r4 = a0;
                    var _closure2_slot0 = r4;
                    r0 = 'default';
                    if(!(r4 !== r0)) { _fun5016_ip = 152; continue _fun5016 }
case 20:
                    r0 = '__esModule';
                    if(!(r4 !== r0)) { _fun5016_ip = 152; continue _fun5016 }
case 31:
                    r1 = global;
                    r0 = r1.Object;
                    r0 = r0.prototype;
                    r6 = r0.hasOwnProperty;
                    r3 = r6.call;
                    r2 = _closure1_slot1;
                    r2 = r3.bind(r6)(r2, r4);
                    if(r2) { _fun5016_ip = 148; continue _fun5016 }
case 70:
                    r2 = _closure1_slot0;
                    r2 = r4 in r2;
                    if(!r2) { _fun5016_ip = 101; continue _fun5016 }
case 81:
                    r2 = _closure1_slot0;
                    r3 = r2[r4];
                    r2 = _closure1_slot2;
                    r2 = r2[r4];
                    if(!(r3 !== r2)) { _fun5016_ip = 144; continue _fun5016 }
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
    r6 = 429;
    r5 = [430];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5018: for(var _fun5018_ip = 0; ; ) switch(_fun5018_ip) {
case 0:
            r2 = a5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun5019: for(var _fun5019_ip = 0; ; ) switch(_fun5019_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5019_ip = 104; continue _fun5019 }
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
                        _fun5020: for(var _fun5020_ip = 0; ; ) switch(_fun5020_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5020_ip = 15; continue _fun5020 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5020_ip = 19; continue _fun5020;
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
            if(!r3) { _fun5018_ip = 88; continue _fun5018 }
case 74:
            r5 = r3.__esModule;
            r4 = r3;
            if(r5) { _fun5018_ip = 355; continue _fun5018 }
case 88:
            r14 = null;
            if(!(r14 !== r3)) { _fun5018_ip = 346; continue _fun5018 }
case 97:
            r6 = typeof r3;
            r5 = 'object';
            if(!(r5 !== r6)) { _fun5018_ip = 119; continue _fun5018 }
case 108:
            r5 = 'function';
            if(!(r5 === r6)) { _fun5018_ip = 346; continue _fun5018 }
case 119:
            r1 = _closure1_slot0;
            r5 = r1.bind(r0)(r0);
            if(!r5) { _fun5018_ip = 147; continue _fun5018 }
case 131:
            r1 = r5.has;
            r1 = r1.bind(r5)(r3);
            if(r1) { _fun5018_ip = 334; continue _fun5018 }
case 147:
            r1 = Object.create(r14);
            r6 = r15.Object;
            r13 = r6.defineProperty;
            if(!r13) { _fun5018_ip = 175; continue _fun5018 }
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
                if(r7 === r19) { _fun5018_ip = 192; continue _fun5018 }
case 208:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r3, r19);
                if(!r16) { _fun5018_ip = 192; continue _fun5018 }
case 229:
                r16 = null;
                if(!r13) { _fun5018_ip = 251; continue _fun5018 }
case 234:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r3, r19);
case 251:
                if(!r16) { _fun5018_ip = 270; continue _fun5018 }
case 254:
                r17 = r16.get;
                if(r17) { _fun5018_ip = 283; continue _fun5018 }
case 262:
                r17 = r16.set;
                if(r17) { _fun5018_ip = 283; continue _fun5018 }
case 270:
                r17 = r3[r19];
                r1[r19] = r17;
                r6 = r16;
                _fun5018_ip = 192; continue _fun5018;
case 283:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r1, r19, r16);
                r6 = r16;
                _fun5018_ip = 192; continue _fun5018;
            }
case 306:
            r1['default'] = r3;
            r4 = r1;
            if(!r5) { _fun5018_ip = 355; continue _fun5018 }
case 318:
            r6 = r5.set;
            r6 = r6.bind(r5)(r3, r1);
            r4 = r1;
            _fun5018_ip = 355; continue _fun5018;
case 334:
            r1 = r5.get;
            r4 = r1.bind(r5)(r3);
            _fun5018_ip = 355; continue _fun5018;
case 346:
            r1 = {};
            r1['default'] = r3;
            r4 = r1;
case 355:
            r3 = r4.get;
            r1 = 'I18nManager';
            r1 = r3.bind(r4)(r1);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 430;
    r5 = [36];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5021: for(var _fun5021_ip = 0; ; ) switch(_fun5021_ip) {
case 0:
            r5 = a1;
            r2 = a5;
            r6 = a6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun5022: for(var _fun5022_ip = 0; ; ) switch(_fun5022_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5022_ip = 104; continue _fun5022 }
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
                        _fun5023: for(var _fun5023_ip = 0; ; ) switch(_fun5023_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5023_ip = 15; continue _fun5023 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5023_ip = 19; continue _fun5023;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot9 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot9 = r0;
            r0 = function(a0) { // Original name: usePressState, environment: r1
                _fun5028: for(var _fun5028_ip = 0; ; ) switch(_fun5028_ip) {
case 0:
                    r0 = a0;
                    r2 = _closure1_slot6;
                    r3 = r2.useState;
                    r4 = undefined;
                    r2 = false;
                    r3 = r3.bind(r4)(r2);
                    r1 = _closure1_slot0;
                    r2 = r1.default;
                    r1 = 2;
                    r3 = r2.bind(r4)(r3, r1);
                    r1 = 0;
                    r2 = r3[r1];
                    r1 = 1;
                    r1 = r3[r1];
                    if(r2) { _fun5028_ip = 61; continue _fun5028 }
case 58:
                    r2 = r0;
case 61:
                    r0 = new Array(2);
                    r0[0] = r2;
                    r0[1] = r1;
                    return r0;
                }
            };
            var _closure1_slot10 = r0;
            r0 = 0;
            r3 = r6[r0];
            r0 = undefined;
            r4 = r5.bind(r0)(r3);
            r18 = global;
            r9 = r18.Object;
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
            var _closure1_slot5 = r3;
            r3 = 7;
            r3 = r6[r3];
            r7 = r5.bind(r0)(r3);
            if(!r7) { _fun5021_ip = 235; continue _fun5021 }
case 221:
            r3 = r7.__esModule;
            r4 = r7;
            if(r3) { _fun5021_ip = 502; continue _fun5021 }
case 235:
            r17 = null;
            if(!(r17 !== r7)) { _fun5021_ip = 493; continue _fun5021 }
case 244:
            r8 = typeof r7;
            r3 = 'object';
            if(!(r3 !== r8)) { _fun5021_ip = 266; continue _fun5021 }
case 255:
            r3 = 'function';
            if(!(r3 === r8)) { _fun5021_ip = 493; continue _fun5021 }
case 266:
            r3 = _closure1_slot9;
            r8 = r3.bind(r0)(r0);
            if(!r8) { _fun5021_ip = 294; continue _fun5021 }
case 278:
            r3 = r8.has;
            r3 = r3.bind(r8)(r7);
            if(r3) { _fun5021_ip = 481; continue _fun5021 }
case 294:
            r3 = Object.create(r17);
            r9 = r18.Object;
            r16 = r9.defineProperty;
            if(!r16) { _fun5021_ip = 322; continue _fun5021 }
case 311:
            r9 = r18.Object;
            r16 = r9.getOwnPropertyDescriptor;
case 322:
            r14 = r7;
            r10 = 'default';
            r9 = undefined;
            for(r11 in r14)
case 339:
            {
case 348:
                r22 = r11;
                if(r10 === r22) { _fun5021_ip = 339; continue _fun5021 }
case 355:
                r19 = {};
                r20 = r19.hasOwnProperty;
                r19 = r20.call;
                r19 = r19.bind(r20)(r7, r22);
                if(!r19) { _fun5021_ip = 339; continue _fun5021 }
case 376:
                r19 = null;
                if(!r16) { _fun5021_ip = 398; continue _fun5021 }
case 381:
                r21 = r18.Object;
                r20 = r21.getOwnPropertyDescriptor;
                r19 = r20.bind(r21)(r7, r22);
case 398:
                if(!r19) { _fun5021_ip = 417; continue _fun5021 }
case 401:
                r20 = r19.get;
                if(r20) { _fun5021_ip = 430; continue _fun5021 }
case 409:
                r20 = r19.set;
                if(r20) { _fun5021_ip = 430; continue _fun5021 }
case 417:
                r20 = r7[r22];
                r3[r22] = r20;
                r9 = r19;
                _fun5021_ip = 339; continue _fun5021;
case 430:
                r21 = r18.Object;
                r20 = r21.defineProperty;
                r20 = r20.bind(r21)(r3, r22, r19);
                r9 = r19;
                _fun5021_ip = 339; continue _fun5021;
            }
case 453:
            r3['default'] = r7;
            r4 = r3;
            if(!r8) { _fun5021_ip = 502; continue _fun5021 }
case 465:
            r9 = r8.set;
            r9 = r9.bind(r8)(r7, r3);
            r4 = r3;
            _fun5021_ip = 502; continue _fun5021;
case 481:
            r3 = r8.get;
            r4 = r3.bind(r8)(r7);
            _fun5021_ip = 502; continue _fun5021;
case 493:
            r3 = {};
            r3['default'] = r7;
            r4 = r3;
case 502:
            var _closure1_slot6 = r4;
            r3 = 8;
            r3 = r6[r3];
            r3 = r5.bind(r0)(r3);
            var _closure1_slot7 = r3;
            r3 = ['accessible', 'accessibilityState', 'aria-live', 'android_disableSound', 'android_ripple', 'aria-busy', 'aria-checked', 'aria-disabled', 'aria-expanded', 'aria-label', 'aria-selected', 'cancelable', 'children', 'delayHoverIn', 'delayHoverOut', 'delayLongPress', 'disabled', 'focusable', 'hitSlop', 'onHoverIn', 'onHoverOut', 'onLongPress', 'onPress', 'onPressIn', 'onPressOut', 'pressRetentionOffset', 'style', 'testOnly_pressed', 'unstable_pressDelay'];
            var _closure1_slot8 = r3;
            r3 = r4.memo;
            r5 = r4.forwardRef;
            r1 = function(a0, a1) { // Original name: Pressable, environment: r1
                _fun5024: for(var _fun5024_ip = 0; ; ) switch(_fun5024_ip) {
case 0:
                    r4 = a0;
                    r40 = r4.accessible;
                    r10 = r4.accessibilityState;
                    r6 = r4.aria-live;
                    r32 = r4.android_disableSound;
                    var _closure2_slot0 = r32;
                    r16 = r4.android_ripple;
                    r39 = r4.aria-busy;
                    r37 = r4.aria-checked;
                    r33 = r4.aria-disabled;
                    r8 = r4.aria-expanded;
                    r38 = r4.aria-label;
                    r5 = r4.aria-selected;
                    r30 = r4.cancelable;
                    var _closure2_slot1 = r30;
                    r11 = r4.children;
                    r29 = r4.delayHoverIn;
                    var _closure2_slot2 = r29;
                    r28 = r4.delayHoverOut;
                    var _closure2_slot3 = r28;
                    r27 = r4.delayLongPress;
                    var _closure2_slot4 = r27;
                    r26 = r4.disabled;
                    var _closure2_slot5 = r26;
                    r36 = r4.focusable;
                    r25 = r4.hitSlop;
                    var _closure2_slot6 = r25;
                    r24 = r4.onHoverIn;
                    var _closure2_slot7 = r24;
                    r23 = r4.onHoverOut;
                    var _closure2_slot8 = r23;
                    r22 = r4.onLongPress;
                    var _closure2_slot9 = r22;
                    r21 = r4.onPress;
                    var _closure2_slot10 = r21;
                    r20 = r4.onPressIn;
                    var _closure2_slot11 = r20;
                    r19 = r4.onPressOut;
                    var _closure2_slot12 = r19;
                    r18 = r4.pressRetentionOffset;
                    var _closure2_slot13 = r18;
                    r15 = r4.style;
                    r14 = r4.testOnly_pressed;
                    r7 = r4.unstable_pressDelay;
                    var _closure2_slot14 = r7;
                    r0 = _closure1_slot1;
                    r9 = r0.default;
                    r0 = _closure1_slot8;
                    r3 = undefined;
                    r35 = r9.bind(r3)(r4, r0);
                    r0 = _closure1_slot6;
                    r0 = r0.useRef;
                    r9 = null;
                    r12 = r0.bind(r3)(r9);
                    r0 = _closure1_slot3;
                    r13 = r0.default;
                    r0 = a1;
                    r13 = r13.bind(r3)(r0, r12);
                    r0 = _closure1_slot5;
                    r0 = r0.default;
                    r31 = r0.bind(r3)(r16, r12);
                    var _closure2_slot15 = r31;
                    r12 = _closure1_slot10;
                    r0 = true;
                    r0 = r14 === r0;
                    r14 = r12.bind(r3)(r0);
                    r0 = _closure1_slot0;
                    r12 = r0.default;
                    r0 = 2;
                    r14 = r12.bind(r3)(r14, r0);
                    r0 = 0;
                    r12 = r14[r0];
                    r0 = 1;
                    r17 = r14[r0];
                    var _closure2_slot16 = r17;
                    r0 = typeof r11;
                    r16 = 'function';
                    r0 = r0 === r16;
                    r14 = r0;
                    if(r14) { _fun5024_ip = 385; continue _fun5024 }
case 378:
                    r34 = typeof r15;
                    r14 = r34 === r16;
case 385:
                    var _closure2_slot17 = r14;
                    r34 = {};
                    if(!(r39 == r9)) { _fun5024_ip = 413; continue _fun5024 }
case 395:
                    r42 = r10 == r9;
                    r41 = undefined;
                    if(r42) { _fun5024_ip = 410; continue _fun5024 }
case 404:
                    r41 = r10.busy;
case 410:
                    r39 = r41;
case 413:
                    r34['busy'] = r39;
                    if(!(r37 == r9)) { _fun5024_ip = 440; continue _fun5024 }
case 422:
                    r41 = r10 == r9;
                    r39 = undefined;
                    if(r41) { _fun5024_ip = 437; continue _fun5024 }
case 431:
                    r39 = r10.checked;
case 437:
                    r37 = r39;
case 440:
                    r34['checked'] = r37;
                    if(!(r33 == r9)) { _fun5024_ip = 466; continue _fun5024 }
case 449:
                    r39 = r10 == r9;
                    r37 = undefined;
                    if(r39) { _fun5024_ip = 463; continue _fun5024 }
case 458:
                    r37 = r10.disabled;
case 463:
                    r33 = r37;
case 466:
                    r34['disabled'] = r33;
                    if(!(r8 == r9)) { _fun5024_ip = 492; continue _fun5024 }
case 474:
                    r37 = r10 == r9;
                    r33 = undefined;
                    if(r37) { _fun5024_ip = 489; continue _fun5024 }
case 483:
                    r33 = r10.expanded;
case 489:
                    r8 = r33;
case 492:
                    r34['expanded'] = r8;
                    if(!(r5 == r9)) { _fun5024_ip = 519; continue _fun5024 }
case 501:
                    r33 = r10 == r9;
                    r8 = undefined;
                    if(r33) { _fun5024_ip = 516; continue _fun5024 }
case 510:
                    r8 = r10.selected;
case 516:
                    r5 = r8;
case 519:
                    r34['selected'] = r5;
                    r37 = r34;
                    if(!(r26 != r9)) { _fun5024_ip = 559; continue _fun5024 }
case 531:
                    r5 = global;
                    r33 = r5.Object;
                    r10 = r33.assign;
                    r8 = {};
                    r8['disabled'] = r26;
                    r5 = {};
                    r37 = r10.bind(r33)(r5, r34, r8);
case 559:
                    r5 = {};
                    r8 = r4.aria-valuemax;
                    if(!(r8 == r9)) { _fun5024_ip = 594; continue _fun5024 }
case 571:
                    r33 = r4.accessibilityValue;
                    r34 = r33 == r9;
                    r10 = undefined;
                    if(r34) { _fun5024_ip = 591; continue _fun5024 }
case 586:
                    r10 = r33.max;
case 591:
                    r8 = r10;
case 594:
                    r5['max'] = r8;
                    r8 = r4.aria-valuemin;
                    if(!(r8 == r9)) { _fun5024_ip = 631; continue _fun5024 }
case 608:
                    r33 = r4.accessibilityValue;
                    r34 = r33 == r9;
                    r10 = undefined;
                    if(r34) { _fun5024_ip = 628; continue _fun5024 }
case 623:
                    r10 = r33.min;
case 628:
                    r8 = r10;
case 631:
                    r5['min'] = r8;
                    r8 = r4.aria-valuenow;
                    if(!(r8 == r9)) { _fun5024_ip = 668; continue _fun5024 }
case 645:
                    r33 = r4.accessibilityValue;
                    r34 = r33 == r9;
                    r10 = undefined;
                    if(r34) { _fun5024_ip = 665; continue _fun5024 }
case 660:
                    r10 = r33.now;
case 665:
                    r8 = r10;
case 668:
                    r5['now'] = r8;
                    r8 = r4.aria-valuetext;
                    if(!(r8 == r9)) { _fun5024_ip = 705; continue _fun5024 }
case 682:
                    r33 = r4.accessibilityValue;
                    r34 = r33 == r9;
                    r10 = undefined;
                    if(r34) { _fun5024_ip = 702; continue _fun5024 }
case 697:
                    r10 = r33.text;
case 702:
                    r8 = r10;
case 705:
                    r5['text'] = r8;
                    r39 = 'none';
                    r8 = 'off';
                    if(!(r6 !== r8)) { _fun5024_ip = 734; continue _fun5024 }
case 721:
                    if(!(r6 == r9)) { _fun5024_ip = 731; continue _fun5024 }
case 725:
                    r6 = r4.accessibilityLiveRegion;
case 731:
                    r39 = r6;
case 734:
                    if(!(r38 == r9)) { _fun5024_ip = 744; continue _fun5024 }
case 738:
                    r38 = r4.accessibilityLabel;
case 744:
                    r4 = global;
                    r34 = r4.Object;
                    r33 = r34.assign;
                    r6 = r31 == r9;
                    r8 = undefined;
                    if(r6) { _fun5024_ip = 772; continue _fun5024 }
case 766:
                    r8 = r31.viewProps;
case 772:
                    r6 = {};
                    r10 = false;
                    r40 = r40 !== r10;
                    r6['accessible'] = r40;
                    r40 = r35.aria-modal;
                    if(!(r40 == r9)) { _fun5024_ip = 801; continue _fun5024 }
case 795:
                    r40 = r35.accessibilityViewIsModal;
case 801:
                    r6['accessibilityViewIsModal'] = r40;
                    r6['accessibilityLiveRegion'] = r39;
                    r6['accessibilityLabel'] = r38;
                    r6['accessibilityState'] = r37;
                    r36 = r36 !== r10;
                    r6['focusable'] = r36;
                    r6['accessibilityValue'] = r5;
                    r6['hitSlop'] = r25;
                    r46 = {};
                    r47 = r34;
                    r45 = r35;
                    r44 = r8;
                    r43 = r6;
                    r8 = r47[r33](r46, r45, r44, r43, r42);
                    r5 = _closure1_slot6;
                    r6 = r5.useMemo;
                    r5 = new Array(18);
                    r5[0] = r32;
                    r5[1] = r31;
                    r5[2] = r30;
                    r5[3] = r29;
                    r5[4] = r28;
                    r5[5] = r27;
                    r5[6] = r26;
                    r5[7] = r25;
                    r5[8] = r24;
                    r5[9] = r23;
                    r5[10] = r22;
                    r5[11] = r21;
                    r5[12] = r20;
                    r5[13] = r19;
                    r5[14] = r18;
                    r5[15] = r17;
                    r5[16] = r14;
                    r5[17] = r7;
                    r2 = function() { // Environment: r2
                        _fun5025: for(var _fun5025_ip = 0; ; ) switch(_fun5025_ip) {
case 0:
                            r0 = {};
                            r2 = _closure2_slot1;
                            r0['cancelable'] = r2;
                            r2 = _closure2_slot5;
                            r0['disabled'] = r2;
                            r2 = _closure2_slot6;
                            r0['hitSlop'] = r2;
                            r2 = _closure2_slot13;
                            r0['pressRectOffset'] = r2;
                            r2 = _closure2_slot0;
                            r0['android_disableSound'] = r2;
                            r2 = _closure2_slot2;
                            r0['delayHoverIn'] = r2;
                            r2 = _closure2_slot3;
                            r0['delayHoverOut'] = r2;
                            r2 = _closure2_slot4;
                            r0['delayLongPress'] = r2;
                            r2 = _closure2_slot14;
                            r0['delayPressIn'] = r2;
                            r2 = _closure2_slot7;
                            r0['onHoverIn'] = r2;
                            r2 = _closure2_slot8;
                            r0['onHoverOut'] = r2;
                            r2 = _closure2_slot9;
                            r0['onLongPress'] = r2;
                            r2 = _closure2_slot10;
                            r0['onPress'] = r2;
                            r2 = function(a0) { // Original name: onPressIn, environment: r1
                                _fun5026: for(var _fun5026_ip = 0; ; ) switch(_fun5026_ip) {
case 0:
                                    r2 = a0;
                                    r1 = _closure2_slot15;
                                    r3 = null;
                                    if(!(r1 != r3)) { _fun5026_ip = 31; continue _fun5026 }
case 16:
                                    r4 = _closure2_slot15;
                                    r1 = r4.onPressIn;
                                    r1 = r1.bind(r4)(r2);
case 31:
                                    r1 = _closure2_slot17;
                                    if(!r1) { _fun5026_ip = 51; continue _fun5026 }
case 38:
                                    r5 = _closure2_slot16;
                                    r4 = undefined;
                                    r1 = true;
                                    r1 = r5.bind(r4)(r1);
case 51:
                                    r1 = _closure2_slot11;
                                    if(!(r1 != r3)) { _fun5026_ip = 70; continue _fun5026 }
case 59:
                                    r1 = _closure2_slot11;
                                    r0 = undefined;
                                    r0 = r1.bind(r0)(r2);
case 70:
                                    r0 = undefined;
                                    return r0;
                                }
                            };
                            r0['onPressIn'] = r2;
                            r4 = _closure2_slot15;
                            r2 = null;
                            r4 = r4 == r2;
                            r2 = undefined;
                            if(r4) { _fun5025_ip = 157; continue _fun5025 }
case 147:
                            r3 = _closure2_slot15;
                            r2 = r3.onPressMove;
case 157:
                            r0['onPressMove'] = r2;
                            r1 = function(a0) { // Original name: onPressOut, environment: r1
                                _fun5027: for(var _fun5027_ip = 0; ; ) switch(_fun5027_ip) {
case 0:
                                    r2 = a0;
                                    r1 = _closure2_slot15;
                                    r3 = null;
                                    if(!(r1 != r3)) { _fun5027_ip = 31; continue _fun5027 }
case 16:
                                    r4 = _closure2_slot15;
                                    r1 = r4.onPressOut;
                                    r1 = r1.bind(r4)(r2);
case 31:
                                    r1 = _closure2_slot17;
                                    if(!r1) { _fun5027_ip = 51; continue _fun5027 }
case 38:
                                    r5 = _closure2_slot16;
                                    r4 = undefined;
                                    r1 = false;
                                    r1 = r5.bind(r4)(r1);
case 51:
                                    r1 = _closure2_slot12;
                                    if(!(r1 != r3)) { _fun5027_ip = 70; continue _fun5027 }
case 59:
                                    r1 = _closure2_slot12;
                                    r0 = undefined;
                                    r0 = r1.bind(r0)(r2);
case 70:
                                    r0 = undefined;
                                    return r0;
                                }
                            };
                            r0['onPressOut'] = r1;
                            return r0;
                        }
                    };
                    r5 = r6.bind(r3)(r2, r5);
                    r2 = _closure1_slot2;
                    r2 = r2.default;
                    r7 = r2.bind(r3)(r5);
                    r2 = _closure1_slot7;
                    r2 = r2.jsxs;
                    r1 = _closure1_slot4;
                    r1 = r1.default;
                    r6 = r4.Object;
                    r5 = r6.assign;
                    r4 = {};
                    r4['ref'] = r13;
                    r14 = typeof r15;
                    r13 = r15;
                    if(!(r14 === r16)) { _fun5024_ip = 1024; continue _fun5024 }
case 1012:
                    r14 = {};
                    r14['pressed'] = r12;
                    r13 = r15.bind(r3)(r14);
case 1024:
                    r4['style'] = r13;
                    r4['collapsable'] = r10;
                    r10 = r11;
                    if(!r0) { _fun5024_ip = 1051; continue _fun5024 }
case 1039:
                    r0 = {};
                    r0['pressed'] = r12;
                    r10 = r11.bind(r3)(r0);
case 1051:
                    r0 = new Array(2);
                    r0[0] = r10;
                    r0[1] = r9;
                    r4['children'] = r0;
                    r46 = {};
                    r47 = r6;
                    r45 = r8;
                    r44 = r7;
                    r43 = r4;
                    r0 = r47[r5](r46, r45, r44, r43, r42);
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                }
            };
            r1 = r5.bind(r4)(r1);
            r1 = r3.bind(r4)(r1);
            r3 = 'Pressable';
            r1['displayName'] = r3;
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 431;
    r5 = [1, 38, 203, 287, 334, 248, 432, 119, 251];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5029: for(var _fun5029_ip = 0; ; ) switch(_fun5029_ip) {
case 0:
            r3 = a1;
            r6 = a5;
            r4 = a6;
            var _closure1_slot0 = r3;
            var _closure1_slot1 = r4;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r2
                _fun5030: for(var _fun5030_ip = 0; ; ) switch(_fun5030_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5030_ip = 104; continue _fun5030 }
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
                        _fun5031: for(var _fun5031_ip = 0; ; ) switch(_fun5031_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5031_ip = 15; continue _fun5031 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5031_ip = 19; continue _fun5031;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot6 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot6 = r0;
            r0 = 0;
            r1 = r4[r0];
            r0 = undefined;
            r5 = r3.bind(r0)(r1);
            r15 = global;
            r9 = r15.Object;
            r8 = r9.defineProperty;
            r7 = {};
            r1 = true;
            r7['value'] = r1;
            r1 = '__esModule';
            r1 = r8.bind(r9)(r6, r1, r7);
            r1 = function(a0, a1) { // Original name: useAndroidRippleForView, environment: r2
                _fun5032: for(var _fun5032_ip = 0; ; ) switch(_fun5032_ip) {
case 0:
                    r2 = a0;
                    r1 = a1;
                    var _closure2_slot0 = r1;
                    r3 = null;
                    if(!(r2 == r3)) { _fun5032_ip = 20; continue _fun5032 }
case 18:
                    r2 = {};
case 20:
                    r6 = r2.color;
                    var _closure2_slot1 = r6;
                    r7 = r2.borderless;
                    var _closure2_slot2 = r7;
                    r4 = r2.radius;
                    var _closure2_slot3 = r4;
                    r5 = r2.foreground;
                    var _closure2_slot4 = r5;
                    r2 = _closure1_slot5;
                    r3 = r2.useMemo;
                    r2 = new Array(5);
                    r2[0] = r7;
                    r2[1] = r6;
                    r2[2] = r5;
                    r2[3] = r4;
                    r2[4] = r1;
                    r1 = undefined;
                    r0 = function() { // Environment: r0
                        _fun5033: for(var _fun5033_ip = 0; ; ) switch(_fun5033_ip) {
case 0:
                            r0 = _closure1_slot3;
                            r0 = r0.default;
                            r2 = r0.OS;
                            r0 = 'android';
                            if(!(r2 === r0)) { _fun5033_ip = 56; continue _fun5033 }
case 27:
                            r0 = _closure2_slot1;
                            r3 = null;
                            if(!(r0 == r3)) { _fun5033_ip = 60; continue _fun5033 }
case 40:
                            r0 = _closure2_slot2;
                            if(!(r0 == r3)) { _fun5033_ip = 60; continue _fun5033 }
case 48:
                            r0 = _closure2_slot3;
                            if(!(r0 == r3)) { _fun5033_ip = 60; continue _fun5033 }
case 56:
                            r0 = null;
                            return r0;
case 60:
                            r0 = _closure1_slot2;
                            r5 = r0.default;
                            r0 = _closure2_slot1;
                            r6 = undefined;
                            r0 = r5.bind(r6)(r0);
                            r4 = _closure1_slot4;
                            r5 = r4.default;
                            r4 = r0 == r3;
                            if(r4) { _fun5033_ip = 107; continue _fun5033 }
case 96:
                            r7 = typeof r0;
                            r3 = 'number';
                            r4 = r7 === r3;
case 107:
                            r3 = 'Unexpected color given for Ripple color';
                            r3 = r5.bind(r6)(r4, r3);
                            r4 = {};
                            r3 = 'RippleAndroid';
                            r4['type'] = r3;
                            r4['color'] = r0;
                            r0 = _closure2_slot2;
                            r3 = true;
                            r0 = r0 === r3;
                            r4['borderless'] = r0;
                            r0 = _closure2_slot3;
                            r4['rippleRadius'] = r0;
                            r0 = {};
                            r2 = _closure2_slot4;
                            if(!(r2 !== r3)) { _fun5033_ip = 174; continue _fun5033 }
case 165:
                            r2 = {};
                            r2['nativeBackgroundAndroid'] = r4;
                            _fun5033_ip = 184; continue _fun5033;
case 174:
                            r3 = {};
                            r3['nativeForegroundAndroid'] = r4;
                            r2 = r3;
case 184:
                            r0['viewProps'] = r2;
                            r2 = function(a0) { // Original name: onPressIn, environment: r1
                                _fun5034: for(var _fun5034_ip = 0; ; ) switch(_fun5034_ip) {
case 0:
                                    r8 = a0;
                                    r0 = _closure2_slot0;
                                    r3 = r0.current;
                                    r9 = null;
                                    if(!(r3 != r9)) { _fun5034_ip = 149; continue _fun5034 }
case 24:
                                    r5 = _closure1_slot0;
                                    r1 = _closure1_slot1;
                                    r4 = 6;
                                    r1 = r1[r4];
                                    r2 = undefined;
                                    r1 = r5.bind(r2)(r1);
                                    r7 = r1.Commands;
                                    r6 = r7.hotspotUpdate;
                                    r1 = r8.nativeEvent;
                                    r10 = r1.locationX;
                                    r11 = r10 != r9;
                                    r1 = 0;
                                    if(!r11) { _fun5034_ip = 83; continue _fun5034 }
case 80:
                                    r1 = r10;
case 83:
                                    r8 = r8.nativeEvent;
                                    r8 = r8.locationY;
                                    r9 = r8 != r9;
                                    r5 = 0;
                                    if(!r9) { _fun5034_ip = 106; continue _fun5034 }
case 103:
                                    r5 = r8;
case 106:
                                    r1 = r6.bind(r7)(r3, r1, r5);
                                    r1 = _closure1_slot0;
                                    r0 = _closure1_slot1;
                                    r0 = r0[r4];
                                    r0 = r1.bind(r2)(r0);
                                    r2 = r0.Commands;
                                    r1 = r2.setPressed;
                                    r0 = true;
                                    r0 = r1.bind(r2)(r3, r0);
case 149:
                                    r0 = undefined;
                                    return r0;
                                }
                            };
                            r0['onPressIn'] = r2;
                            r2 = function(a0) { // Original name: onPressMove, environment: r1
                                _fun5035: for(var _fun5035_ip = 0; ; ) switch(_fun5035_ip) {
case 0:
                                    r5 = a0;
                                    r0 = _closure2_slot0;
                                    r4 = r0.current;
                                    r6 = null;
                                    if(!(r4 != r6)) { _fun5035_ip = 110; continue _fun5035 }
case 21:
                                    r2 = _closure1_slot0;
                                    r1 = _closure1_slot1;
                                    r0 = 6;
                                    r1 = r1[r0];
                                    r0 = undefined;
                                    r0 = r2.bind(r0)(r1);
                                    r3 = r0.Commands;
                                    r2 = r3.hotspotUpdate;
                                    r0 = r5.nativeEvent;
                                    r7 = r0.locationX;
                                    r8 = r7 != r6;
                                    r0 = 0;
                                    if(!r8) { _fun5035_ip = 80; continue _fun5035 }
case 77:
                                    r0 = r7;
case 80:
                                    r5 = r5.nativeEvent;
                                    r5 = r5.locationY;
                                    r6 = r5 != r6;
                                    r1 = 0;
                                    if(!r6) { _fun5035_ip = 103; continue _fun5035 }
case 100:
                                    r1 = r5;
case 103:
                                    r0 = r2.bind(r3)(r4, r0, r1);
case 110:
                                    r0 = undefined;
                                    return r0;
                                }
                            };
                            r0['onPressMove'] = r2;
                            r1 = function(a0) { // Original name: onPressOut, environment: r1
                                _fun5036: for(var _fun5036_ip = 0; ; ) switch(_fun5036_ip) {
case 0:
                                    r0 = _closure2_slot0;
                                    r3 = r0.current;
                                    r0 = null;
                                    if(!(r3 != r0)) { _fun5036_ip = 62; continue _fun5036 }
case 18:
                                    r2 = _closure1_slot0;
                                    r1 = _closure1_slot1;
                                    r0 = 6;
                                    r1 = r1[r0];
                                    r0 = undefined;
                                    r0 = r2.bind(r0)(r1);
                                    r2 = r0.Commands;
                                    r1 = r2.setPressed;
                                    r0 = false;
                                    r0 = r1.bind(r2)(r3, r0);
case 62:
                                    r0 = undefined;
                                    return r0;
                                }
                            };
                            r0['onPressOut'] = r1;
                            return r0;
                        }
                    };
                    r0 = r3.bind(r1)(r0, r2);
                    return r0;
                }
            };
            r6['default'] = r1;
            r1 = 1;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot2 = r1;
            r1 = 2;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot3 = r1;
            r1 = 3;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            r1 = 4;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot4 = r1;
            r1 = 5;
            r1 = r4[r1];
            r4 = r3.bind(r0)(r1);
            if(!r4) { _fun5029_ip = 193; continue _fun5029 }
case 179:
            r3 = r4.__esModule;
            r1 = r4;
            if(r3) { _fun5029_ip = 460; continue _fun5029 }
case 193:
            r14 = null;
            if(!(r14 !== r4)) { _fun5029_ip = 451; continue _fun5029 }
case 202:
            r5 = typeof r4;
            r3 = 'object';
            if(!(r3 !== r5)) { _fun5029_ip = 224; continue _fun5029 }
case 213:
            r3 = 'function';
            if(!(r3 === r5)) { _fun5029_ip = 451; continue _fun5029 }
case 224:
            r3 = _closure1_slot6;
            r5 = r3.bind(r0)(r0);
            if(!r5) { _fun5029_ip = 252; continue _fun5029 }
case 236:
            r3 = r5.has;
            r3 = r3.bind(r5)(r4);
            if(r3) { _fun5029_ip = 439; continue _fun5029 }
case 252:
            r3 = Object.create(r14);
            r6 = r15.Object;
            r13 = r6.defineProperty;
            if(!r13) { _fun5029_ip = 280; continue _fun5029 }
case 269:
            r6 = r15.Object;
            r13 = r6.getOwnPropertyDescriptor;
case 280:
            r11 = r4;
            r7 = 'default';
            r6 = undefined;
            for(r8 in r11)
case 297:
            {
case 306:
                r19 = r8;
                if(r7 === r19) { _fun5029_ip = 297; continue _fun5029 }
case 313:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r4, r19);
                if(!r16) { _fun5029_ip = 297; continue _fun5029 }
case 334:
                r16 = null;
                if(!r13) { _fun5029_ip = 356; continue _fun5029 }
case 339:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r4, r19);
case 356:
                if(!r16) { _fun5029_ip = 375; continue _fun5029 }
case 359:
                r17 = r16.get;
                if(r17) { _fun5029_ip = 388; continue _fun5029 }
case 367:
                r17 = r16.set;
                if(r17) { _fun5029_ip = 388; continue _fun5029 }
case 375:
                r17 = r4[r19];
                r3[r19] = r17;
                r6 = r16;
                _fun5029_ip = 297; continue _fun5029;
case 388:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r3, r19, r16);
                r6 = r16;
                _fun5029_ip = 297; continue _fun5029;
            }
case 411:
            r3['default'] = r4;
            r1 = r3;
            if(!r5) { _fun5029_ip = 460; continue _fun5029 }
case 423:
            r6 = r5.set;
            r6 = r6.bind(r5)(r4, r3);
            r1 = r3;
            _fun5029_ip = 460; continue _fun5029;
case 439:
            r3 = r5.get;
            r1 = r3.bind(r5)(r4);
            _fun5029_ip = 460; continue _fun5029;
case 451:
            r3 = {};
            r3['default'] = r4;
            r1 = r3;
case 460:
            var _closure1_slot5 = r1;
            return r0;
        }
    };
    r6 = 432;
    r5 = [1, 89, 33, 248, 20, 119, 250];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r2 = a5;
        r6 = a6;
        r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
            _fun5038: for(var _fun5038_ip = 0; ; ) switch(_fun5038_ip) {
case 0:
                r1 = global;
                r2 = r1.WeakMap;
                r3 = 'function';
                r2 = typeof r2;
                if(!(r3 === r2)) { _fun5038_ip = 104; continue _fun5038 }
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
                    _fun5039: for(var _fun5039_ip = 0; ; ) switch(_fun5039_ip) {
case 0:
                        r0 = a0;
                        if(r0) { _fun5039_ip = 15; continue _fun5039 }
case 9:
                        r0 = _closure2_slot0;
                        _fun5039_ip = 19; continue _fun5039;
case 15:
                        r0 = _closure2_slot1;
case 19:
                        return r0;
                    }
                };
                _closure1_slot13 = r2;
                r1 = undefined;
                r0 = a0;
                r0 = r2.bind(r1)(r0);
                return r0;
case 104:
                r0 = null;
                return r0;
            }
        };
        var _closure1_slot13 = r0;
        r4 = function(a0, a1) { // Original name: _interopRequireWildcard, environment: r1
            _fun5040: for(var _fun5040_ip = 0; ; ) switch(_fun5040_ip) {
case 0:
                r0 = a0;
                if(!r0) { _fun5040_ip = 17; continue _fun5040 }
case 6:
                r1 = r0.__esModule;
                if(r1) { _fun5040_ip = 284; continue _fun5040 }
case 17:
                r12 = null;
                if(!(r12 !== r0)) { _fun5040_ip = 276; continue _fun5040 }
case 26:
                r2 = typeof r0;
                r1 = 'object';
                if(!(r1 !== r2)) { _fun5040_ip = 48; continue _fun5040 }
case 37:
                r1 = 'function';
                if(!(r1 === r2)) { _fun5040_ip = 276; continue _fun5040 }
case 48:
                r1 = _closure1_slot13;
                r3 = undefined;
                r2 = r1.bind(r3)(r3);
                if(!r2) { _fun5040_ip = 81; continue _fun5040 }
case 65:
                r1 = r2.has;
                r1 = r1.bind(r2)(r0);
                if(r1) { _fun5040_ip = 264; continue _fun5040 }
case 81:
                r1 = Object.create(r12);
                r11 = global;
                r4 = r11.Object;
                r10 = r4.defineProperty;
                if(!r10) { _fun5040_ip = 111; continue _fun5040 }
case 100:
                r4 = r11.Object;
                r10 = r4.getOwnPropertyDescriptor;
case 111:
                r8 = r0;
                r4 = 'default';
                r3 = undefined;
                for(r5 in r8)
case 128:
                {
case 137:
                    r16 = r5;
                    if(r4 === r16) { _fun5040_ip = 128; continue _fun5040 }
case 144:
                    r13 = {};
                    r14 = r13.hasOwnProperty;
                    r13 = r14.call;
                    r13 = r13.bind(r14)(r0, r16);
                    if(!r13) { _fun5040_ip = 128; continue _fun5040 }
case 165:
                    r13 = null;
                    if(!r10) { _fun5040_ip = 187; continue _fun5040 }
case 170:
                    r15 = r11.Object;
                    r14 = r15.getOwnPropertyDescriptor;
                    r13 = r14.bind(r15)(r0, r16);
case 187:
                    if(!r13) { _fun5040_ip = 206; continue _fun5040 }
case 190:
                    r14 = r13.get;
                    if(r14) { _fun5040_ip = 219; continue _fun5040 }
case 198:
                    r14 = r13.set;
                    if(r14) { _fun5040_ip = 219; continue _fun5040 }
case 206:
                    r14 = r0[r16];
                    r1[r16] = r14;
                    r3 = r13;
                    _fun5040_ip = 128; continue _fun5040;
case 219:
                    r15 = r11.Object;
                    r14 = r15.defineProperty;
                    r14 = r14.bind(r15)(r1, r16, r13);
                    r3 = r13;
                    _fun5040_ip = 128; continue _fun5040;
                }
case 242:
                r1['default'] = r0;
                if(!r2) { _fun5040_ip = 262; continue _fun5040 }
case 251:
                r3 = r2.set;
                r3 = r3.bind(r2)(r0, r1);
case 262:
                return r1;
case 264:
                r1 = r2.get;
                r1 = r1.bind(r2)(r0);
                return r1;
case 276:
                r1 = {};
                r1['default'] = r0;
                return r1;
case 284:
                return r0;
            }
        };
        r0 = 0;
        r3 = r6[r0];
        r0 = undefined;
        r7 = r5.bind(r0)(r3);
        r3 = global;
        r10 = r3.Object;
        r9 = r10.defineProperty;
        r8 = {};
        r3 = true;
        r8['value'] = r3;
        r3 = '__esModule';
        r3 = r9.bind(r10)(r2, r3, r8);
        r2['default'] = r0;
        r3 = 1;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r7.bind(r0)(r3);
        var _closure1_slot0 = r3;
        r3 = 2;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r7.bind(r0)(r3);
        var _closure1_slot1 = r3;
        r3 = 3;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r7.bind(r0)(r3);
        var _closure1_slot2 = r3;
        r3 = 4;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r7.bind(r0)(r3);
        var _closure1_slot3 = r3;
        r3 = 5;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r7.bind(r0)(r3);
        var _closure1_slot4 = r3;
        r3 = 6;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot5 = r3;
        r3 = 7;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot6 = r3;
        r3 = 8;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r4 = r4.bind(r0)(r3);
        var _closure1_slot7 = r4;
        r3 = 9;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        var _closure1_slot8 = r3;
        r3 = ['disabled', 'ios_backgroundColor', 'onChange', 'onValueChange', 'style', 'thumbColor', 'trackColor', 'value'];
        var _closure1_slot9 = r3;
        r3 = ['onTintColor', 'tintColor'];
        var _closure1_slot10 = r3;
        r3 = function() { // Original name: returnsFalse, environment: r1
            r0 = false;
            return r0;
        };
        var _closure1_slot11 = r3;
        r3 = function() { // Original name: returnsTrue, environment: r1
            r0 = true;
            return r0;
        };
        var _closure1_slot12 = r3;
        r3 = r4.forwardRef;
        r1 = function(a0, a1) { // Original name: Switch, environment: r1
            _fun5043: for(var _fun5043_ip = 0; ; ) switch(_fun5043_ip) {
case 0:
                r12 = a0;
                r14 = r12.disabled;
                r20 = r12.ios_backgroundColor;
                r0 = r12.onChange;
                var _closure2_slot0 = r0;
                r0 = r12.onValueChange;
                var _closure2_slot1 = r0;
                r6 = r12.style;
                r5 = r12.thumbColor;
                r0 = r12.trackColor;
                r13 = r12.value;
                var _closure2_slot2 = r13;
                r1 = _closure1_slot1;
                r2 = r1.default;
                r1 = _closure1_slot9;
                r3 = undefined;
                r8 = r2.bind(r3)(r12, r1);
                r11 = null;
                r2 = r0 == r11;
                r1 = undefined;
                if(r2) { _fun5043_ip = 103; continue _fun5043 }
case 97:
                r1 = r0.false;
case 103:
                r7 = r0 == r11;
                r2 = undefined;
                if(r7) { _fun5043_ip = 118; continue _fun5043 }
case 112:
                r2 = r0.true;
case 118:
                r16 = _closure1_slot7;
                r0 = r16.useRef;
                r10 = r0.bind(r16)(r11);
                var _closure2_slot3 = r10;
                r0 = _closure1_slot4;
                r7 = r0.default;
                r0 = a1;
                r0 = r7.bind(r3)(r10, r0);
                r10 = r16.useState;
                r7 = {};
                r7['value'] = r11;
                r15 = r10.bind(r16)(r7);
                r7 = _closure1_slot0;
                r10 = r7.default;
                r7 = 2;
                r10 = r10.bind(r3)(r15, r7);
                r7 = 0;
                r17 = r10[r7];
                var _closure2_slot4 = r17;
                r7 = 1;
                r7 = r10[r7];
                var _closure2_slot5 = r7;
                r10 = function(a0) { // Original name: handleChange, environment: r4
                    _fun5044: for(var _fun5044_ip = 0; ; ) switch(_fun5044_ip) {
case 0:
                        r0 = a0;
                        r2 = _closure2_slot0;
                        r3 = null;
                        if(!(r2 != r3)) { _fun5044_ip = 27; continue _fun5044 }
case 16:
                        r4 = _closure2_slot0;
                        r2 = undefined;
                        r2 = r4.bind(r2)(r0);
case 27:
                        r2 = _closure2_slot1;
                        if(!(r2 != r3)) { _fun5044_ip = 56; continue _fun5044 }
case 35:
                        r4 = _closure2_slot1;
                        r2 = r0.nativeEvent;
                        r3 = r2.value;
                        r2 = undefined;
                        r2 = r4.bind(r2)(r3);
case 56:
                        r2 = _closure2_slot5;
                        r1 = {};
                        r0 = r0.nativeEvent;
                        r0 = r0.value;
                        r1['value'] = r0;
                        r0 = undefined;
                        r1 = r2.bind(r0)(r1);
                        return r0;
                    }
                };
                r15 = r16.useLayoutEffect;
                r7 = new Array(2);
                r7[0] = r13;
                r7[1] = r17;
                r4 = function() { // Environment: r4
                    _fun5045: for(var _fun5045_ip = 0; ; ) switch(_fun5045_ip) {
case 0:
                        r2 = _closure2_slot2;
                        r1 = true;
                        r3 = r2 === r1;
                        r1 = _closure2_slot4;
                        r1 = r1.value;
                        r2 = null;
                        r1 = r1 != r2;
                        if(!r1) { _fun5045_ip = 44; continue _fun5045 }
case 31:
                        r4 = _closure2_slot4;
                        r4 = r4.value;
                        r1 = r4 !== r3;
case 44:
                        if(!r1) { _fun5045_ip = 162; continue _fun5045 }
case 47:
                        r1 = _closure2_slot3;
                        r4 = r1.current;
                        r5 = r4 == r2;
                        r1 = undefined;
                        if(r5) { _fun5045_ip = 71; continue _fun5045 }
case 65:
                        r1 = r4.setNativeProps;
case 71:
                        if(!(r1 != r2)) { _fun5045_ip = 162; continue _fun5045 }
case 75:
                        r2 = _closure1_slot3;
                        r2 = r2.default;
                        r4 = r2.OS;
                        r2 = 'android';
                        if(!(r4 !== r2)) { _fun5045_ip = 132; continue _fun5045 }
case 100:
                        r2 = _closure1_slot6;
                        r5 = r2.Commands;
                        r4 = r5.setValue;
                        r2 = _closure2_slot3;
                        r2 = r2.current;
                        r2 = r4.bind(r5)(r2, r3);
                        _fun5045_ip = 162; continue _fun5045;
case 132:
                        r1 = _closure1_slot5;
                        r2 = r1.Commands;
                        r1 = r2.setNativeValue;
                        r0 = _closure2_slot3;
                        r0 = r0.current;
                        r0 = r1.bind(r2)(r0, r3);
case 162:
                        r0 = undefined;
                        return r0;
                    }
                };
                r4 = r15.bind(r16)(r4, r7);
                r4 = _closure1_slot3;
                r4 = r4.default;
                r7 = r4.OS;
                r4 = 'android';
                if(!(r7 !== r4)) { _fun5043_ip = 487; continue _fun5043 }
case 268:
                r19 = {};
                r19['disabled'] = r14;
                r19['onTintColor'] = r2;
                r4 = _closure1_slot2;
                r16 = r4.default;
                r15 = r16.compose;
                r17 = r4.default;
                r7 = r17.compose;
                r18 = r20 == r11;
                r4 = null;
                if(r18) { _fun5043_ip = 330; continue _fun5043 }
case 314:
                r18 = {};
                r18['backgroundColor'] = r20;
                r20 = 16;
                r18['borderRadius'] = r20;
                r4 = r18;
case 330:
                r7 = r7.bind(r17)(r6, r4);
                r4 = {'height': 31, 'width': 51};
                r4 = r15.bind(r16)(r4, r7);
                r19['style'] = r4;
                r19['thumbTintColor'] = r5;
                r19['tintColor'] = r1;
                r4 = true;
                r4 = r13 === r4;
                r19['value'] = r4;
                r4 = _closure1_slot8;
                r15 = r4.jsx;
                r4 = _closure1_slot6;
                r7 = r4.default;
                r4 = global;
                r18 = r4.Object;
                r17 = r18.assign;
                r16 = {};
                r20 = r12.accessibilityRole;
                r21 = r20 != r11;
                r4 = 'switch';
                if(!r21) { _fun5043_ip = 429; continue _fun5043 }
case 426:
                r4 = r20;
case 429:
                r16['accessibilityRole'] = r4;
                r16['onChange'] = r10;
                r4 = _closure1_slot11;
                r16['onResponderTerminationRequest'] = r4;
                r4 = _closure1_slot12;
                r16['onStartShouldSetResponder'] = r4;
                r16['ref'] = r0;
                r25 = {};
                r26 = r18;
                r24 = r8;
                r23 = r19;
                r22 = r16;
                r4 = r26[r17](r25, r24, r23, r22, r21);
                r4 = r15.bind(r3)(r7, r4);
                return r4;
case 487:
                r4 = r8.onTintColor;
                r4 = r8.tintColor;
                r4 = _closure1_slot1;
                r7 = r4.default;
                r4 = _closure1_slot10;
                r8 = r7.bind(r3)(r8, r4);
                r18 = r8.accessibilityState;
                if(!(r14 == r11)) { _fun5043_ip = 544; continue _fun5043 }
case 527:
                r7 = r18 == r11;
                r4 = undefined;
                if(r7) { _fun5043_ip = 541; continue _fun5043 }
case 536:
                r4 = r18.disabled;
case 541:
                r14 = r4;
case 544:
                r4 = r18 == r11;
                r7 = undefined;
                if(r4) { _fun5043_ip = 558; continue _fun5043 }
case 553:
                r7 = r18.disabled;
case 558:
                r4 = r18;
                if(!(r14 !== r7)) { _fun5043_ip = 593; continue _fun5043 }
case 565:
                r7 = global;
                r17 = r7.Object;
                r16 = r17.assign;
                r15 = {};
                r15['disabled'] = r14;
                r7 = {};
                r4 = r16.bind(r17)(r7, r18, r15);
case 593:
                r7 = {};
                r7['accessibilityState'] = r4;
                r4 = true;
                r14 = r14 !== r4;
                r7['enabled'] = r14;
                r4 = r13 === r4;
                r7['on'] = r4;
                r7['style'] = r6;
                r7['thumbTintColor'] = r5;
                r7['trackColorForFalse'] = r1;
                r7['trackColorForTrue'] = r2;
                if(!r4) { _fun5043_ip = 644; continue _fun5043 }
case 641:
                r1 = r2;
case 644:
                r7['trackTintColor'] = r1;
                r1 = _closure1_slot8;
                r2 = r1.jsx;
                r1 = _closure1_slot5;
                r1 = r1.default;
                r4 = global;
                r6 = r4.Object;
                r5 = r6.assign;
                r4 = {};
                r12 = r12.accessibilityRole;
                r13 = r12 != r11;
                r11 = 'switch';
                if(!r13) { _fun5043_ip = 702; continue _fun5043 }
case 699:
                r11 = r12;
case 702:
                r4['accessibilityRole'] = r11;
                r4['onChange'] = r10;
                r10 = _closure1_slot11;
                r4['onResponderTerminationRequest'] = r10;
                r9 = _closure1_slot12;
                r4['onStartShouldSetResponder'] = r9;
                r4['ref'] = r0;
                r25 = {};
                r26 = r6;
                r24 = r8;
                r23 = r7;
                r22 = r4;
                r0 = r26[r5](r25, r24, r23, r22, r21);
                r0 = r2.bind(r3)(r1, r0);
                return r0;
            }
        };
        r1 = r3.bind(r4)(r1);
        r2['default'] = r1;
        return r0;
    };
    r6 = 433;
    r5 = [1, 38, 203, 253, 33, 334, 434, 436, 119, 251];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5046: for(var _fun5046_ip = 0; ; ) switch(_fun5046_ip) {
case 0:
            r2 = a5;
            var _closure1_slot0 = r2;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun5047: for(var _fun5047_ip = 0; ; ) switch(_fun5047_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5047_ip = 104; continue _fun5047 }
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
                        _fun5048: for(var _fun5048_ip = 0; ; ) switch(_fun5048_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5048_ip = 15; continue _fun5048 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5048_ip = 19; continue _fun5048;
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
            if(!r6) { _fun5046_ip = 98; continue _fun5046 }
case 84:
            r5 = r6.__esModule;
            r1 = r6;
            if(r5) { _fun5046_ip = 365; continue _fun5046 }
case 98:
            r16 = null;
            if(!(r16 !== r6)) { _fun5046_ip = 356; continue _fun5046 }
case 107:
            r7 = typeof r6;
            r5 = 'object';
            if(!(r5 !== r7)) { _fun5046_ip = 129; continue _fun5046 }
case 118:
            r5 = 'function';
            if(!(r5 === r7)) { _fun5046_ip = 356; continue _fun5046 }
case 129:
            r5 = _closure1_slot3;
            r7 = r5.bind(r0)(r0);
            if(!r7) { _fun5046_ip = 157; continue _fun5046 }
case 141:
            r5 = r7.has;
            r5 = r5.bind(r7)(r6);
            if(r5) { _fun5046_ip = 344; continue _fun5046 }
case 157:
            r5 = Object.create(r16);
            r8 = r4.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun5046_ip = 185; continue _fun5046 }
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
                if(r9 === r20) { _fun5046_ip = 202; continue _fun5046 }
case 218:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r6, r20);
                if(!r17) { _fun5046_ip = 202; continue _fun5046 }
case 239:
                r17 = null;
                if(!r15) { _fun5046_ip = 261; continue _fun5046 }
case 244:
                r19 = r4.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r6, r20);
case 261:
                if(!r17) { _fun5046_ip = 280; continue _fun5046 }
case 264:
                r18 = r17.get;
                if(r18) { _fun5046_ip = 293; continue _fun5046 }
case 272:
                r18 = r17.set;
                if(r18) { _fun5046_ip = 293; continue _fun5046 }
case 280:
                r18 = r6[r20];
                r5[r20] = r18;
                r8 = r17;
                _fun5046_ip = 202; continue _fun5046;
case 293:
                r19 = r4.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r5, r20, r17);
                r8 = r17;
                _fun5046_ip = 202; continue _fun5046;
            }
case 316:
            r5['default'] = r6;
            r1 = r5;
            if(!r7) { _fun5046_ip = 365; continue _fun5046 }
case 328:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r5);
            r1 = r5;
            _fun5046_ip = 365; continue _fun5046;
case 344:
            r5 = r7.get;
            r1 = r5.bind(r7)(r6);
            _fun5046_ip = 365; continue _fun5046;
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
                _fun5049: for(var _fun5049_ip = 0; ; ) switch(_fun5049_ip) {
case 0:
                    r4 = a0;
                    var _closure2_slot0 = r4;
                    r0 = 'default';
                    if(!(r4 !== r0)) { _fun5049_ip = 152; continue _fun5049 }
case 20:
                    r0 = '__esModule';
                    if(!(r4 !== r0)) { _fun5049_ip = 152; continue _fun5049 }
case 31:
                    r1 = global;
                    r0 = r1.Object;
                    r0 = r0.prototype;
                    r6 = r0.hasOwnProperty;
                    r3 = r6.call;
                    r2 = _closure1_slot1;
                    r2 = r3.bind(r6)(r2, r4);
                    if(r2) { _fun5049_ip = 148; continue _fun5049 }
case 70:
                    r2 = _closure1_slot0;
                    r2 = r4 in r2;
                    if(!r2) { _fun5049_ip = 101; continue _fun5049 }
case 81:
                    r2 = _closure1_slot0;
                    r3 = r2[r4];
                    r2 = _closure1_slot2;
                    r2 = r2[r4];
                    if(!(r3 !== r2)) { _fun5049_ip = 144; continue _fun5049 }
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
    r6 = 434;
    r5 = [435];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5051: for(var _fun5051_ip = 0; ; ) switch(_fun5051_ip) {
case 0:
            r4 = a1;
            r2 = a5;
            r5 = a6;
            var _closure1_slot0 = r4;
            var _closure1_slot1 = r5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun5052: for(var _fun5052_ip = 0; ; ) switch(_fun5052_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5052_ip = 104; continue _fun5052 }
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
                        _fun5053: for(var _fun5053_ip = 0; ; ) switch(_fun5053_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5053_ip = 15; continue _fun5053 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5053_ip = 19; continue _fun5053;
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
            r0 = 0;
            r1 = r5[r0];
            r0 = undefined;
            r6 = r4.bind(r0)(r1);
            r7 = global;
            r10 = r7.Object;
            r9 = r10.defineProperty;
            r8 = {};
            r13 = true;
            r8['value'] = r13;
            r1 = '__esModule';
            r1 = r9.bind(r10)(r2, r1, r8);
            r2['Commands'] = r0;
            r2['__INTERNAL_VIEW_CONFIG'] = r0;
            r2['default'] = r0;
            r1 = 1;
            r1 = r5[r1];
            r1 = r4.bind(r0)(r1);
            r1 = r6.bind(r0)(r1);
            r1 = 2;
            r1 = r5[r1];
            r1 = r4.bind(r0)(r1);
            r1 = r6.bind(r0)(r1);
            r1 = 3;
            r1 = r5[r1];
            r6 = r4.bind(r0)(r1);
            if(!r6) { _fun5051_ip = 151; continue _fun5051 }
case 140:
            r1 = r6.__esModule;
            if(r1) { _fun5051_ip = 409; continue _fun5051 }
case 151:
            r18 = null;
            if(!(r18 !== r6)) { _fun5051_ip = 403; continue _fun5051 }
case 160:
            r8 = typeof r6;
            r1 = 'object';
            if(!(r1 !== r8)) { _fun5051_ip = 182; continue _fun5051 }
case 171:
            r1 = 'function';
            if(!(r1 === r8)) { _fun5051_ip = 403; continue _fun5051 }
case 182:
            r1 = _closure1_slot3;
            r8 = r1.bind(r0)(r0);
            if(!r8) { _fun5051_ip = 210; continue _fun5051 }
case 194:
            r1 = r8.has;
            r1 = r1.bind(r8)(r6);
            if(r1) { _fun5051_ip = 391; continue _fun5051 }
case 210:
            r9 = Object.create(r18);
            r1 = r7.Object;
            r17 = r1.defineProperty;
            if(!r17) { _fun5051_ip = 238; continue _fun5051 }
case 227:
            r1 = r7.Object;
            r17 = r1.getOwnPropertyDescriptor;
case 238:
            r15 = r6;
            r10 = 'default';
            r1 = undefined;
            for(r11 in r15)
case 255:
            {
case 264:
                r22 = r11;
                if(r10 === r22) { _fun5051_ip = 255; continue _fun5051 }
case 271:
                r19 = {};
                r20 = r19.hasOwnProperty;
                r19 = r20.call;
                r19 = r19.bind(r20)(r6, r22);
                if(!r19) { _fun5051_ip = 255; continue _fun5051 }
case 292:
                r19 = null;
                if(!r17) { _fun5051_ip = 314; continue _fun5051 }
case 297:
                r21 = r7.Object;
                r20 = r21.getOwnPropertyDescriptor;
                r19 = r20.bind(r21)(r6, r22);
case 314:
                if(!r19) { _fun5051_ip = 333; continue _fun5051 }
case 317:
                r20 = r19.get;
                if(r20) { _fun5051_ip = 346; continue _fun5051 }
case 325:
                r20 = r19.set;
                if(r20) { _fun5051_ip = 346; continue _fun5051 }
case 333:
                r20 = r6[r22];
                r9[r22] = r20;
                r1 = r19;
                _fun5051_ip = 255; continue _fun5051;
case 346:
                r21 = r7.Object;
                r20 = r21.defineProperty;
                r20 = r20.bind(r21)(r9, r22, r19);
                r1 = r19;
                _fun5051_ip = 255; continue _fun5051;
            }
case 369:
            r9['default'] = r6;
            if(!r8) { _fun5051_ip = 409; continue _fun5051 }
case 378:
            r1 = r8.set;
            r1 = r1.bind(r8)(r6, r9);
            _fun5051_ip = 409; continue _fun5051;
case 391:
            r1 = r8.get;
            r1 = r1.bind(r8)(r6);
            _fun5051_ip = 409; continue _fun5051;
case 403:
            r1 = {};
            r1['default'] = r6;
case 409:
            r1 = {};
            r6 = 'AndroidSwitch';
            r1['uiViewClassName'] = r6;
            r8 = {};
            r9 = {};
            r10 = {'captured': 'onChangeCapture', 'bubbled': 'onChange'};
            r9['phasedRegistrationNames'] = r10;
            r8['topChange'] = r9;
            r1['bubblingEventTypes'] = r8;
            r10 = r7.Object;
            r9 = r10.assign;
            r8 = {'disabled': true, 'enabled': true, 'thumbColor': null, 'trackColorForFalse': null, 'trackColorForTrue': null, 'value': true, 'on': true};
            r7 = {};
            r11 = 4;
            r12 = r5[r11];
            r12 = r4.bind(r0)(r12);
            r12 = r12.default;
            r7['process'] = r12;
            r8['thumbColor'] = r7;
            r7 = {};
            r12 = r5[r11];
            r12 = r4.bind(r0)(r12);
            r12 = r12.default;
            r7['process'] = r12;
            r8['trackColorForFalse'] = r7;
            r7 = {};
            r12 = r5[r11];
            r12 = r4.bind(r0)(r12);
            r12 = r12.default;
            r7['process'] = r12;
            r8['trackColorForTrue'] = r7;
            r7 = {};
            r12 = r5[r11];
            r12 = r4.bind(r0)(r12);
            r12 = r12.default;
            r7['process'] = r12;
            r8['thumbTintColor'] = r7;
            r7 = {};
            r11 = r5[r11];
            r11 = r4.bind(r0)(r11);
            r11 = r11.default;
            r7['process'] = r11;
            r8['trackTintColor'] = r7;
            r7 = 5;
            r7 = r5[r7];
            r12 = r4.bind(r0)(r7);
            r11 = r12.ConditionallyIgnoredEventHandlers;
            r7 = {};
            r7['onChange'] = r13;
            r7 = r11.bind(r12)(r7);
            r7 = r9.bind(r10)(r8, r7);
            r1['validAttributes'] = r7;
            r2['__INTERNAL_VIEW_CONFIG'] = r1;
            var _closure1_slot2 = r1;
            r1 = 6;
            r1 = r5[r1];
            r5 = r4.bind(r0)(r1);
            r4 = r5.get;
            r1 = function() { // Environment: r3
                r0 = _closure1_slot2;
                return r0;
            };
            r1 = r4.bind(r5)(r6, r1);
            r2['default'] = r1;
            r1 = {};
            r3 = function(a0, a1) { // Original name: setNativeValue, environment: r3
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 7;
                r1 = r1[r0];
                r0 = undefined;
                r5 = r2.bind(r0)(r1);
                r4 = r5.dispatchCommand;
                r3 = new Array(1);
                r1 = a1;
                r3[0] = r1;
                r2 = a0;
                r1 = 'setNativeValue';
                r1 = r4.bind(r5)(r2, r1, r3);
                return r0;
            };
            r1['setNativeValue'] = r3;
            r2['Commands'] = r1;
            return r0;
        }
    };
    r6 = 435;
    r5 = [1, 125, 279, 119, 89, 124, 86, 57];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5056: for(var _fun5056_ip = 0; ; ) switch(_fun5056_ip) {
case 0:
            r2 = a5;
            var _closure1_slot0 = r2;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun5057: for(var _fun5057_ip = 0; ; ) switch(_fun5057_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5057_ip = 104; continue _fun5057 }
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
                        _fun5058: for(var _fun5058_ip = 0; ; ) switch(_fun5058_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5058_ip = 15; continue _fun5058 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5058_ip = 19; continue _fun5058;
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
            if(!r6) { _fun5056_ip = 98; continue _fun5056 }
case 84:
            r5 = r6.__esModule;
            r1 = r6;
            if(r5) { _fun5056_ip = 365; continue _fun5056 }
case 98:
            r16 = null;
            if(!(r16 !== r6)) { _fun5056_ip = 356; continue _fun5056 }
case 107:
            r7 = typeof r6;
            r5 = 'object';
            if(!(r5 !== r7)) { _fun5056_ip = 129; continue _fun5056 }
case 118:
            r5 = 'function';
            if(!(r5 === r7)) { _fun5056_ip = 356; continue _fun5056 }
case 129:
            r5 = _closure1_slot3;
            r7 = r5.bind(r0)(r0);
            if(!r7) { _fun5056_ip = 157; continue _fun5056 }
case 141:
            r5 = r7.has;
            r5 = r5.bind(r7)(r6);
            if(r5) { _fun5056_ip = 344; continue _fun5056 }
case 157:
            r5 = Object.create(r16);
            r8 = r4.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun5056_ip = 185; continue _fun5056 }
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
                if(r9 === r20) { _fun5056_ip = 202; continue _fun5056 }
case 218:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r6, r20);
                if(!r17) { _fun5056_ip = 202; continue _fun5056 }
case 239:
                r17 = null;
                if(!r15) { _fun5056_ip = 261; continue _fun5056 }
case 244:
                r19 = r4.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r6, r20);
case 261:
                if(!r17) { _fun5056_ip = 280; continue _fun5056 }
case 264:
                r18 = r17.get;
                if(r18) { _fun5056_ip = 293; continue _fun5056 }
case 272:
                r18 = r17.set;
                if(r18) { _fun5056_ip = 293; continue _fun5056 }
case 280:
                r18 = r6[r20];
                r5[r20] = r18;
                r8 = r17;
                _fun5056_ip = 202; continue _fun5056;
case 293:
                r19 = r4.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r5, r20, r17);
                r8 = r17;
                _fun5056_ip = 202; continue _fun5056;
            }
case 316:
            r5['default'] = r6;
            r1 = r5;
            if(!r7) { _fun5056_ip = 365; continue _fun5056 }
case 328:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r5);
            r1 = r5;
            _fun5056_ip = 365; continue _fun5056;
case 344:
            r5 = r7.get;
            r1 = r5.bind(r7)(r6);
            _fun5056_ip = 365; continue _fun5056;
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
                _fun5059: for(var _fun5059_ip = 0; ; ) switch(_fun5059_ip) {
case 0:
                    r4 = a0;
                    var _closure2_slot0 = r4;
                    r0 = 'default';
                    if(!(r4 !== r0)) { _fun5059_ip = 152; continue _fun5059 }
case 20:
                    r0 = '__esModule';
                    if(!(r4 !== r0)) { _fun5059_ip = 152; continue _fun5059 }
case 31:
                    r1 = global;
                    r0 = r1.Object;
                    r0 = r0.prototype;
                    r6 = r0.hasOwnProperty;
                    r3 = r6.call;
                    r2 = _closure1_slot1;
                    r2 = r3.bind(r6)(r2, r4);
                    if(r2) { _fun5059_ip = 148; continue _fun5059 }
case 70:
                    r2 = _closure1_slot0;
                    r2 = r4 in r2;
                    if(!r2) { _fun5059_ip = 101; continue _fun5059 }
case 81:
                    r2 = _closure1_slot0;
                    r3 = r2[r4];
                    r2 = _closure1_slot2;
                    r2 = r2[r4];
                    if(!(r3 !== r2)) { _fun5059_ip = 144; continue _fun5059 }
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
    r6 = 436;
    r5 = [437];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5061: for(var _fun5061_ip = 0; ; ) switch(_fun5061_ip) {
case 0:
            r4 = a1;
            r2 = a5;
            r5 = a6;
            var _closure1_slot0 = r4;
            var _closure1_slot1 = r5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun5062: for(var _fun5062_ip = 0; ; ) switch(_fun5062_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5062_ip = 104; continue _fun5062 }
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
                        _fun5063: for(var _fun5063_ip = 0; ; ) switch(_fun5063_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5063_ip = 15; continue _fun5063 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5063_ip = 19; continue _fun5063;
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
            r0 = 0;
            r1 = r5[r0];
            r0 = undefined;
            r6 = r4.bind(r0)(r1);
            r7 = global;
            r10 = r7.Object;
            r9 = r10.defineProperty;
            r8 = {};
            r13 = true;
            r8['value'] = r13;
            r1 = '__esModule';
            r1 = r9.bind(r10)(r2, r1, r8);
            r2['Commands'] = r0;
            r2['__INTERNAL_VIEW_CONFIG'] = r0;
            r2['default'] = r0;
            r1 = 1;
            r1 = r5[r1];
            r1 = r4.bind(r0)(r1);
            r1 = r6.bind(r0)(r1);
            r1 = 2;
            r1 = r5[r1];
            r1 = r4.bind(r0)(r1);
            r1 = r6.bind(r0)(r1);
            r1 = 3;
            r1 = r5[r1];
            r6 = r4.bind(r0)(r1);
            if(!r6) { _fun5061_ip = 151; continue _fun5061 }
case 140:
            r1 = r6.__esModule;
            if(r1) { _fun5061_ip = 409; continue _fun5061 }
case 151:
            r18 = null;
            if(!(r18 !== r6)) { _fun5061_ip = 403; continue _fun5061 }
case 160:
            r8 = typeof r6;
            r1 = 'object';
            if(!(r1 !== r8)) { _fun5061_ip = 182; continue _fun5061 }
case 171:
            r1 = 'function';
            if(!(r1 === r8)) { _fun5061_ip = 403; continue _fun5061 }
case 182:
            r1 = _closure1_slot3;
            r8 = r1.bind(r0)(r0);
            if(!r8) { _fun5061_ip = 210; continue _fun5061 }
case 194:
            r1 = r8.has;
            r1 = r1.bind(r8)(r6);
            if(r1) { _fun5061_ip = 391; continue _fun5061 }
case 210:
            r9 = Object.create(r18);
            r1 = r7.Object;
            r17 = r1.defineProperty;
            if(!r17) { _fun5061_ip = 238; continue _fun5061 }
case 227:
            r1 = r7.Object;
            r17 = r1.getOwnPropertyDescriptor;
case 238:
            r15 = r6;
            r10 = 'default';
            r1 = undefined;
            for(r11 in r15)
case 255:
            {
case 264:
                r22 = r11;
                if(r10 === r22) { _fun5061_ip = 255; continue _fun5061 }
case 271:
                r19 = {};
                r20 = r19.hasOwnProperty;
                r19 = r20.call;
                r19 = r19.bind(r20)(r6, r22);
                if(!r19) { _fun5061_ip = 255; continue _fun5061 }
case 292:
                r19 = null;
                if(!r17) { _fun5061_ip = 314; continue _fun5061 }
case 297:
                r21 = r7.Object;
                r20 = r21.getOwnPropertyDescriptor;
                r19 = r20.bind(r21)(r6, r22);
case 314:
                if(!r19) { _fun5061_ip = 333; continue _fun5061 }
case 317:
                r20 = r19.get;
                if(r20) { _fun5061_ip = 346; continue _fun5061 }
case 325:
                r20 = r19.set;
                if(r20) { _fun5061_ip = 346; continue _fun5061 }
case 333:
                r20 = r6[r22];
                r9[r22] = r20;
                r1 = r19;
                _fun5061_ip = 255; continue _fun5061;
case 346:
                r21 = r7.Object;
                r20 = r21.defineProperty;
                r20 = r20.bind(r21)(r9, r22, r19);
                r1 = r19;
                _fun5061_ip = 255; continue _fun5061;
            }
case 369:
            r9['default'] = r6;
            if(!r8) { _fun5061_ip = 409; continue _fun5061 }
case 378:
            r1 = r8.set;
            r1 = r1.bind(r8)(r6, r9);
            _fun5061_ip = 409; continue _fun5061;
case 391:
            r1 = r8.get;
            r1 = r1.bind(r8)(r6);
            _fun5061_ip = 409; continue _fun5061;
case 403:
            r1 = {};
            r1['default'] = r6;
case 409:
            r1 = {};
            r6 = 'RCTSwitch';
            r1['uiViewClassName'] = r6;
            r8 = {};
            r9 = {};
            r10 = {'captured': 'onChangeCapture', 'bubbled': 'onChange'};
            r9['phasedRegistrationNames'] = r10;
            r8['topChange'] = r9;
            r1['bubblingEventTypes'] = r8;
            r10 = r7.Object;
            r9 = r10.assign;
            r8 = {'disabled': true, 'value': true};
            r7 = {};
            r11 = 4;
            r12 = r5[r11];
            r12 = r4.bind(r0)(r12);
            r12 = r12.default;
            r7['process'] = r12;
            r8['tintColor'] = r7;
            r7 = {};
            r12 = r5[r11];
            r12 = r4.bind(r0)(r12);
            r12 = r12.default;
            r7['process'] = r12;
            r8['onTintColor'] = r7;
            r7 = {};
            r12 = r5[r11];
            r12 = r4.bind(r0)(r12);
            r12 = r12.default;
            r7['process'] = r12;
            r8['thumbTintColor'] = r7;
            r7 = {};
            r12 = r5[r11];
            r12 = r4.bind(r0)(r12);
            r12 = r12.default;
            r7['process'] = r12;
            r8['thumbColor'] = r7;
            r7 = {};
            r12 = r5[r11];
            r12 = r4.bind(r0)(r12);
            r12 = r12.default;
            r7['process'] = r12;
            r8['trackColorForFalse'] = r7;
            r7 = {};
            r11 = r5[r11];
            r11 = r4.bind(r0)(r11);
            r11 = r11.default;
            r7['process'] = r11;
            r8['trackColorForTrue'] = r7;
            r7 = 5;
            r7 = r5[r7];
            r12 = r4.bind(r0)(r7);
            r11 = r12.ConditionallyIgnoredEventHandlers;
            r7 = {};
            r7['onChange'] = r13;
            r7 = r11.bind(r12)(r7);
            r7 = r9.bind(r10)(r8, r7);
            r1['validAttributes'] = r7;
            r2['__INTERNAL_VIEW_CONFIG'] = r1;
            var _closure1_slot2 = r1;
            r1 = 6;
            r1 = r5[r1];
            r5 = r4.bind(r0)(r1);
            r4 = r5.get;
            r1 = function() { // Environment: r3
                r0 = _closure1_slot2;
                return r0;
            };
            r1 = r4.bind(r5)(r6, r1);
            r2['default'] = r1;
            r1 = {};
            r3 = function(a0, a1) { // Original name: setValue, environment: r3
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 7;
                r1 = r1[r0];
                r0 = undefined;
                r5 = r2.bind(r0)(r1);
                r4 = r5.dispatchCommand;
                r3 = new Array(1);
                r1 = a1;
                r3[0] = r1;
                r2 = a0;
                r1 = 'setValue';
                r1 = r4.bind(r5)(r2, r1, r3);
                return r0;
            };
            r1['setValue'] = r3;
            r2['Commands'] = r1;
            return r0;
        }
    };
    r6 = 437;
    r5 = [1, 125, 279, 119, 89, 124, 86, 57];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5066: for(var _fun5066_ip = 0; ; ) switch(_fun5066_ip) {
case 0:
            r5 = a1;
            r2 = a5;
            r10 = a6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r4
                _fun5067: for(var _fun5067_ip = 0; ; ) switch(_fun5067_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5067_ip = 104; continue _fun5067 }
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
                        _fun5068: for(var _fun5068_ip = 0; ; ) switch(_fun5068_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5068_ip = 15; continue _fun5068 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5068_ip = 19; continue _fun5068;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot32 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot32 = r0;
            r7 = function(a0, a1) { // Original name: _interopRequireWildcard, environment: r4
                _fun5069: for(var _fun5069_ip = 0; ; ) switch(_fun5069_ip) {
case 0:
                    r0 = a0;
                    if(!r0) { _fun5069_ip = 17; continue _fun5069 }
case 6:
                    r1 = r0.__esModule;
                    if(r1) { _fun5069_ip = 284; continue _fun5069 }
case 17:
                    r12 = null;
                    if(!(r12 !== r0)) { _fun5069_ip = 276; continue _fun5069 }
case 26:
                    r2 = typeof r0;
                    r1 = 'object';
                    if(!(r1 !== r2)) { _fun5069_ip = 48; continue _fun5069 }
case 37:
                    r1 = 'function';
                    if(!(r1 === r2)) { _fun5069_ip = 276; continue _fun5069 }
case 48:
                    r1 = _closure1_slot32;
                    r3 = undefined;
                    r2 = r1.bind(r3)(r3);
                    if(!r2) { _fun5069_ip = 81; continue _fun5069 }
case 65:
                    r1 = r2.has;
                    r1 = r1.bind(r2)(r0);
                    if(r1) { _fun5069_ip = 264; continue _fun5069 }
case 81:
                    r1 = Object.create(r12);
                    r11 = global;
                    r4 = r11.Object;
                    r10 = r4.defineProperty;
                    if(!r10) { _fun5069_ip = 111; continue _fun5069 }
case 100:
                    r4 = r11.Object;
                    r10 = r4.getOwnPropertyDescriptor;
case 111:
                    r8 = r0;
                    r4 = 'default';
                    r3 = undefined;
                    for(r5 in r8)
case 128:
                    {
case 137:
                        r16 = r5;
                        if(r4 === r16) { _fun5069_ip = 128; continue _fun5069 }
case 144:
                        r13 = {};
                        r14 = r13.hasOwnProperty;
                        r13 = r14.call;
                        r13 = r13.bind(r14)(r0, r16);
                        if(!r13) { _fun5069_ip = 128; continue _fun5069 }
case 165:
                        r13 = null;
                        if(!r10) { _fun5069_ip = 187; continue _fun5069 }
case 170:
                        r15 = r11.Object;
                        r14 = r15.getOwnPropertyDescriptor;
                        r13 = r14.bind(r15)(r0, r16);
case 187:
                        if(!r13) { _fun5069_ip = 206; continue _fun5069 }
case 190:
                        r14 = r13.get;
                        if(r14) { _fun5069_ip = 219; continue _fun5069 }
case 198:
                        r14 = r13.set;
                        if(r14) { _fun5069_ip = 219; continue _fun5069 }
case 206:
                        r14 = r0[r16];
                        r1[r16] = r14;
                        r3 = r13;
                        _fun5069_ip = 128; continue _fun5069;
case 219:
                        r15 = r11.Object;
                        r14 = r15.defineProperty;
                        r14 = r14.bind(r15)(r1, r16, r13);
                        r3 = r13;
                        _fun5069_ip = 128; continue _fun5069;
                    }
case 242:
                    r1['default'] = r0;
                    if(!r2) { _fun5069_ip = 262; continue _fun5069 }
case 251:
                    r3 = r2.set;
                    r3 = r3.bind(r2)(r0, r1);
case 262:
                    return r1;
case 264:
                    r1 = r2.get;
                    r1 = r1.bind(r2)(r0);
                    return r1;
case 276:
                    r1 = {};
                    r1['default'] = r0;
                    return r1;
case 284:
                    return r0;
                }
            };
            r0 = function(a0) { // Original name: useTextInputStateSynchronization_STATE, environment: r4
                r1 = a0;
                r11 = r1.props;
                var _closure2_slot0 = r11;
                r13 = r1.mostRecentEventCount;
                var _closure2_slot1 = r13;
                r9 = r1.selection;
                var _closure2_slot2 = r9;
                r12 = r1.inputRef;
                var _closure2_slot3 = r12;
                r7 = r1.text;
                var _closure2_slot4 = r7;
                r6 = r1.viewCommands;
                var _closure2_slot5 = r6;
                r1 = _closure1_slot13;
                r2 = r1.useState;
                r1 = r11.value;
                r5 = undefined;
                r2 = r2.bind(r5)(r1);
                r1 = _closure1_slot1;
                r1 = r1.default;
                r15 = 2;
                r1 = r1.bind(r5)(r2, r15);
                r4 = 0;
                r10 = r1[r4];
                var _closure2_slot6 = r10;
                r8 = 1;
                r2 = r1[r8];
                var _closure2_slot7 = r2;
                r1 = _closure1_slot13;
                r14 = r1.useState;
                r1 = {};
                r16 = {'start': 4294967295, 'end': 4294967295};
                r1['selection'] = r16;
                r1['mostRecentEventCount'] = r13;
                r14 = r14.bind(r5)(r1);
                r1 = _closure1_slot1;
                r1 = r1.default;
                r1 = r1.bind(r5)(r14, r15);
                r4 = r1[r4];
                r1 = r1[r8];
                var _closure2_slot8 = r1;
                r8 = r4.selection;
                var _closure2_slot9 = r8;
                r3 = _closure1_slot13;
                r4 = r3.useLayoutEffect;
                r3 = new Array(9);
                r3[0] = r13;
                r3[1] = r12;
                r12 = r11.value;
                r3[2] = r12;
                r11 = r11.defaultValue;
                r3[3] = r11;
                r3[4] = r10;
                r3[5] = r9;
                r3[6] = r8;
                r3[7] = r7;
                r3[8] = r6;
                r0 = function() { // Environment: r0
                    _fun5071: for(var _fun5071_ip = 0; ; ) switch(_fun5071_ip) {
case 0:
                        r2 = {};
                        r1 = _closure2_slot6;
                        r0 = _closure2_slot0;
                        r0 = r0.value;
                        if(!(r1 !== r0)) { _fun5071_ip = 73; continue _fun5071 }
case 22:
                        r0 = _closure2_slot0;
                        r0 = r0.value;
                        r1 = typeof r0;
                        r0 = 'string';
                        if(!(r1 === r0)) { _fun5071_ip = 73; continue _fun5071 }
case 42:
                        r0 = _closure2_slot0;
                        r1 = r0.value;
                        r2['text'] = r1;
                        r3 = _closure2_slot7;
                        r1 = r0.value;
                        r0 = undefined;
                        r0 = r3.bind(r0)(r1);
case 73:
                        r0 = _closure2_slot2;
                        if(!r0) { _fun5071_ip = 170; continue _fun5071 }
case 80:
                        r0 = _closure2_slot9;
                        if(!r0) { _fun5071_ip = 170; continue _fun5071 }
case 87:
                        r0 = _closure2_slot9;
                        r1 = r0.start;
                        r0 = _closure2_slot2;
                        r0 = r0.start;
                        if(!(r1 === r0)) { _fun5071_ip = 133; continue _fun5071 }
case 109:
                        r0 = _closure2_slot9;
                        r1 = r0.end;
                        r0 = _closure2_slot2;
                        r0 = r0.end;
                        if(!(r1 !== r0)) { _fun5071_ip = 170; continue _fun5071 }
case 133:
                        r0 = _closure2_slot2;
                        r2['selection'] = r0;
                        r3 = _closure2_slot8;
                        r1 = {};
                        r1['selection'] = r0;
                        r0 = _closure2_slot1;
                        r1['mostRecentEventCount'] = r0;
                        r0 = undefined;
                        r0 = r3.bind(r0)(r1);
case 170:
                        r0 = global;
                        r1 = r0.Object;
                        r0 = r1.keys;
                        r0 = r0.bind(r1)(r2);
                        r1 = r0.length;
                        r0 = 0;
                        if(!(r1 !== r0)) { _fun5071_ip = 347; continue _fun5071 }
case 202:
                        r0 = _closure2_slot3;
                        r0 = r0.current;
                        r8 = null;
                        if(!(r0 != r8)) { _fun5071_ip = 343; continue _fun5071 }
case 220:
                        r6 = _closure2_slot5;
                        r5 = r6.setTextAndSelection;
                        r0 = _closure2_slot3;
                        r4 = r0.current;
                        r3 = _closure2_slot1;
                        r2 = _closure2_slot4;
                        r0 = _closure2_slot2;
                        r0 = r0 == r8;
                        r10 = undefined;
                        if(r0) { _fun5071_ip = 269; continue _fun5071 }
case 260:
                        r0 = _closure2_slot2;
                        r10 = r0.start;
case 269:
                        r11 = r10 != r8;
                        r1 = -1;
                        r0 = r1;
                        if(!r11) { _fun5071_ip = 288; continue _fun5071 }
case 285:
                        r0 = r10;
case 288:
                        r10 = _closure2_slot2;
                        r10 = r10 == r8;
                        r7 = undefined;
                        if(r10) { _fun5071_ip = 311; continue _fun5071 }
case 301:
                        r9 = _closure2_slot2;
                        r7 = r9.end;
case 311:
                        r8 = r7 != r8;
                        if(!r8) { _fun5071_ip = 321; continue _fun5071 }
case 318:
                        r1 = r7;
case 321:
                        r17 = r6;
                        r16 = r4;
                        r15 = r3;
                        r14 = r2;
                        r13 = r0;
                        r12 = r1;
                        r0 = r17[r5](r16, r15, r14, r13, r12, r11);
case 343:
                        r0 = undefined;
                        return r0;
case 347:
                        r0 = undefined;
                        return r0;
                    }
                };
                r0 = r4.bind(r5)(r0, r3);
                r0 = {};
                r0['setLastNativeText'] = r2;
                r0['setLastNativeSelection'] = r1;
                return r0;
            };
            var _closure1_slot33 = r0;
            r0 = function(a0) { // Original name: useTextInputStateSynchronization_REFS, environment: r4
                r0 = a0;
                r7 = r0.props;
                var _closure2_slot0 = r7;
                r9 = r0.mostRecentEventCount;
                var _closure2_slot1 = r9;
                r6 = r0.selection;
                var _closure2_slot2 = r6;
                r8 = r0.inputRef;
                var _closure2_slot3 = r8;
                r5 = r0.text;
                var _closure2_slot4 = r5;
                r0 = r0.viewCommands;
                var _closure2_slot5 = r0;
                r3 = _closure1_slot13;
                r10 = r3.useRef;
                r3 = r7.value;
                r4 = undefined;
                r3 = r10.bind(r4)(r3);
                var _closure2_slot6 = r3;
                r3 = _closure1_slot13;
                r10 = r3.useRef;
                r3 = {};
                r11 = {'start': 4294967295, 'end': 4294967295};
                r3['selection'] = r11;
                r3['mostRecentEventCount'] = r9;
                r3 = r10.bind(r4)(r3);
                var _closure2_slot7 = r3;
                r2 = _closure1_slot13;
                r3 = r2.useLayoutEffect;
                r2 = new Array(7);
                r2[0] = r9;
                r2[1] = r8;
                r8 = r7.value;
                r2[2] = r8;
                r7 = r7.defaultValue;
                r2[3] = r7;
                r2[4] = r6;
                r2[5] = r5;
                r2[6] = r0;
                r0 = function() { // Environment: r1
                    _fun5073: for(var _fun5073_ip = 0; ; ) switch(_fun5073_ip) {
case 0:
                        r2 = {};
                        r0 = _closure2_slot7;
                        r0 = r0.current;
                        r0 = r0.selection;
                        r1 = _closure2_slot6;
                        r3 = r1.current;
                        r1 = _closure2_slot0;
                        r1 = r1.value;
                        if(!(r3 !== r1)) { _fun5073_ip = 92; continue _fun5073 }
case 42:
                        r1 = _closure2_slot0;
                        r1 = r1.value;
                        r3 = typeof r1;
                        r1 = 'string';
                        if(!(r3 === r1)) { _fun5073_ip = 92; continue _fun5073 }
case 62:
                        r1 = _closure2_slot0;
                        r3 = r1.value;
                        r2['text'] = r3;
                        r3 = _closure2_slot6;
                        r1 = r1.value;
                        r3['current'] = r1;
case 92:
                        r1 = _closure2_slot2;
                        if(!r1) { _fun5073_ip = 176; continue _fun5073 }
case 99:
                        if(!r0) { _fun5073_ip = 176; continue _fun5073 }
case 102:
                        r3 = r0.start;
                        r1 = _closure2_slot2;
                        r1 = r1.start;
                        if(!(r3 === r1)) { _fun5073_ip = 140; continue _fun5073 }
case 120:
                        r1 = r0.end;
                        r0 = _closure2_slot2;
                        r0 = r0.end;
                        if(!(r1 !== r0)) { _fun5073_ip = 176; continue _fun5073 }
case 140:
                        r3 = _closure2_slot2;
                        r2['selection'] = r3;
                        r1 = _closure2_slot7;
                        r0 = {};
                        r0['selection'] = r3;
                        r3 = _closure2_slot1;
                        r0['mostRecentEventCount'] = r3;
                        r1['current'] = r0;
case 176:
                        r0 = global;
                        r1 = r0.Object;
                        r0 = r1.keys;
                        r0 = r0.bind(r1)(r2);
                        r1 = r0.length;
                        r0 = 0;
                        if(!(r1 !== r0)) { _fun5073_ip = 353; continue _fun5073 }
case 208:
                        r0 = _closure2_slot3;
                        r0 = r0.current;
                        r8 = null;
                        if(!(r0 != r8)) { _fun5073_ip = 349; continue _fun5073 }
case 226:
                        r6 = _closure2_slot5;
                        r5 = r6.setTextAndSelection;
                        r0 = _closure2_slot3;
                        r4 = r0.current;
                        r3 = _closure2_slot1;
                        r2 = _closure2_slot4;
                        r0 = _closure2_slot2;
                        r0 = r0 == r8;
                        r10 = undefined;
                        if(r0) { _fun5073_ip = 275; continue _fun5073 }
case 266:
                        r0 = _closure2_slot2;
                        r10 = r0.start;
case 275:
                        r11 = r10 != r8;
                        r1 = -1;
                        r0 = r1;
                        if(!r11) { _fun5073_ip = 294; continue _fun5073 }
case 291:
                        r0 = r10;
case 294:
                        r10 = _closure2_slot2;
                        r10 = r10 == r8;
                        r7 = undefined;
                        if(r10) { _fun5073_ip = 317; continue _fun5073 }
case 307:
                        r9 = _closure2_slot2;
                        r7 = r9.end;
case 317:
                        r8 = r7 != r8;
                        if(!r8) { _fun5073_ip = 327; continue _fun5073 }
case 324:
                        r1 = r7;
case 327:
                        r17 = r6;
                        r16 = r4;
                        r15 = r3;
                        r14 = r2;
                        r13 = r0;
                        r12 = r1;
                        r0 = r17[r5](r16, r15, r14, r13, r12, r11);
case 349:
                        r0 = undefined;
                        return r0;
case 353:
                        r0 = undefined;
                        return r0;
                    }
                };
                r0 = r3.bind(r4)(r0, r2);
                r0 = {};
                r2 = function(a0) { // Original name: setLastNativeText, environment: r1
                    r1 = _closure2_slot6;
                    r0 = a0;
                    r1['current'] = r0;
                    r0 = undefined;
                    return r0;
                };
                r0['setLastNativeText'] = r2;
                r1 = function(a0) { // Original name: setLastNativeSelection, environment: r1
                    r1 = _closure2_slot7;
                    r0 = a0;
                    r1['current'] = r0;
                    r0 = undefined;
                    return r0;
                };
                r0['setLastNativeSelection'] = r1;
                return r0;
            };
            var _closure1_slot34 = r0;
            r0 = function(a0) { // Original name: InternalTextInput, environment: r4
                _fun5076: for(var _fun5076_ip = 0; ; ) switch(_fun5076_ip) {
case 0:
                    r20 = a0;
                    var _closure2_slot0 = r20;
                    r32 = r20.aria-busy;
                    r31 = r20.aria-checked;
                    r16 = r20.aria-disabled;
                    r7 = r20.aria-expanded;
                    r6 = r20.aria-selected;
                    r15 = r20.accessibilityState;
                    r23 = r20.id;
                    r26 = r20.tabIndex;
                    r9 = r20.selection;
                    r13 = r20.selectionColor;
                    r5 = r20.selectionHandleColor;
                    r2 = r20.cursorColor;
                    r1 = _closure1_slot0;
                    r8 = r1.default;
                    r1 = _closure1_slot16;
                    r3 = undefined;
                    r10 = r8.bind(r3)(r20, r1);
                    r1 = _closure1_slot13;
                    r1 = r1.useRef;
                    r12 = null;
                    r18 = r1.bind(r3)(r12);
                    var _closure2_slot1 = r18;
                    r1 = r9 == r12;
                    r14 = null;
                    if(r1) { _fun5076_ip = 166; continue _fun5076 }
case 132:
                    r1 = {};
                    r8 = r9.start;
                    r1['start'] = r8;
                    r8 = r9.end;
                    if(!(r8 == r12)) { _fun5076_ip = 158; continue _fun5076 }
case 153:
                    r8 = r9.start;
case 158:
                    r1['end'] = r8;
                    r14 = r1;
case 166:
                    r1 = r20.value;
                    r1 = typeof r1;
                    r8 = 'string';
                    if(!(r1 !== r8)) { _fun5076_ip = 203; continue _fun5076 }
case 182:
                    r1 = r20.defaultValue;
                    r1 = typeof r1;
                    r11 = undefined;
                    if(!(r1 === r8)) { _fun5076_ip = 201; continue _fun5076 }
case 196:
                    r11 = r20.defaultValue;
case 201:
                    _fun5076_ip = 208; continue _fun5076;
case 203:
                    r11 = r20.value;
case 208:
                    r1 = _closure1_slot20;
                    if(r1) { _fun5076_ip = 240; continue _fun5076 }
case 215:
                    r9 = r20.multiline;
                    r8 = true;
                    if(!(r9 !== r8)) { _fun5076_ip = 233; continue _fun5076 }
case 227:
                    r8 = _closure1_slot22;
                    _fun5076_ip = 237; continue _fun5076;
case 233:
                    r8 = _closure1_slot24;
case 237:
                    r1 = r8;
case 240:
                    var _closure2_slot2 = r1;
                    r8 = _closure1_slot13;
                    r9 = r8.useState;
                    r8 = 0;
                    r19 = r9.bind(r3)(r8);
                    r9 = _closure1_slot1;
                    r17 = r9.default;
                    r9 = 2;
                    r9 = r17.bind(r3)(r19, r9);
                    r24 = r9[r8];
                    var _closure2_slot3 = r24;
                    r8 = 1;
                    r9 = r9[r8];
                    var _closure2_slot4 = r9;
                    r17 = _closure1_slot2;
                    r9 = r17.useRefsForTextInputState;
                    r9 = r9.bind(r17)();
                    if(r9) { _fun5076_ip = 320; continue _fun5076 }
case 314:
                    r17 = _closure1_slot33;
                    _fun5076_ip = 324; continue _fun5076;
case 320:
                    r17 = _closure1_slot34;
case 324:
                    r9 = {};
                    r9['props'] = r20;
                    r9['inputRef'] = r18;
                    r9['mostRecentEventCount'] = r24;
                    r9['selection'] = r14;
                    r9['text'] = r11;
                    r9['viewCommands'] = r1;
                    r9 = r17.bind(r3)(r9);
                    r17 = r9.setLastNativeText;
                    var _closure2_slot5 = r17;
                    r9 = r9.setLastNativeSelection;
                    var _closure2_slot6 = r9;
                    r9 = _closure1_slot13;
                    r18 = r9.useLayoutEffect;
                    r17 = function() { // Environment: r4
                        _fun5077: for(var _fun5077_ip = 0; ; ) switch(_fun5077_ip) {
case 0:
                            r1 = _closure2_slot1;
                            r3 = r1.current;
                            var _closure3_slot0 = r3;
                            r1 = null;
                            if(!(r3 == r1)) { _fun5077_ip = 28; continue _fun5077 }
case 24:
                            r1 = undefined;
                            return r1;
case 28:
                            r1 = _closure1_slot10;
                            r2 = r1.default;
                            r1 = r2.registerInput;
                            r1 = r1.bind(r2)(r3);
                            r0 = function() { // Environment: r0
                                _fun5078: for(var _fun5078_ip = 0; ; ) switch(_fun5078_ip) {
case 0:
                                    r0 = _closure1_slot10;
                                    r4 = r0.default;
                                    r2 = r4.unregisterInput;
                                    r3 = _closure3_slot0;
                                    r2 = r2.bind(r4)(r3);
                                    r2 = _closure1_slot10;
                                    r4 = r2.default;
                                    r2 = r4.currentlyFocusedInput;
                                    r2 = r2.bind(r4)();
                                    if(!(r2 === r3)) { _fun5078_ip = 83; continue _fun5078 }
case 53:
                                    r1 = _closure1_slot12;
                                    r2 = r1.default;
                                    r1 = _closure3_slot0;
                                    r0 = undefined;
                                    r1 = r2.bind(r0)(r1);
                                    r0 = r1.blur;
                                    r0 = r0.bind(r1)();
case 83:
                                    r0 = undefined;
                                    return r0;
                                }
                            };
                            return r0;
                        }
                    };
                    r9 = new Array(0);
                    r9 = r18.bind(r3)(r17, r9);
                    r9 = _closure1_slot13;
                    r17 = r9.useCallback;
                    r9 = new Array(2);
                    r9[0] = r24;
                    r9[1] = r1;
                    r1 = function(a0) { // Environment: r4
                        _fun5079: for(var _fun5079_ip = 0; ; ) switch(_fun5079_ip) {
case 0:
                            r3 = a0;
                            r0 = _closure2_slot1;
                            r0['current'] = r3;
                            r0 = null;
                            if(!(r3 != r0)) { _fun5079_ip = 85; continue _fun5079 }
case 24:
                            r0 = global;
                            r2 = r0.Object;
                            r1 = r2.assign;
                            r0 = {};
                            r5 = function() { // Original name: clear, environment: r4
                                _fun5080: for(var _fun5080_ip = 0; ; ) switch(_fun5080_ip) {
case 0:
                                    r1 = _closure2_slot1;
                                    r2 = r1.current;
                                    r1 = null;
                                    if(!(r2 != r1)) { _fun5080_ip = 56; continue _fun5080 }
case 18:
                                    r5 = _closure2_slot2;
                                    r4 = r5.setTextAndSelection;
                                    r1 = _closure2_slot1;
                                    r10 = r1.current;
                                    r9 = _closure2_slot3;
                                    r8 = '';
                                    r11 = r5;
                                    r7 = 0;
                                    r6 = 0;
                                    r0 = r11[r4](r10, r9, r8, r7, r6, r5);
case 56:
                                    r0 = undefined;
                                    return r0;
                                }
                            };
                            r0['clear'] = r5;
                            r5 = function() { // Original name: isFocused, environment: r4
                                r0 = _closure1_slot10;
                                r1 = r0.default;
                                r0 = r1.currentlyFocusedInput;
                                r1 = r0.bind(r1)();
                                r0 = _closure2_slot1;
                                r0 = r0.current;
                                r0 = r1 === r0;
                                return r0;
                            };
                            r0['isFocused'] = r5;
                            r5 = function() { // Original name: getNativeRef, environment: r4
                                r0 = _closure2_slot1;
                                r0 = r0.current;
                                return r0;
                            };
                            r0['getNativeRef'] = r5;
                            r4 = function(a0, a1) { // Original name: setSelection, environment: r4
                                _fun5083: for(var _fun5083_ip = 0; ; ) switch(_fun5083_ip) {
case 0:
                                    r1 = _closure2_slot1;
                                    r1 = r1.current;
                                    r6 = null;
                                    if(!(r1 != r6)) { _fun5083_ip = 56; continue _fun5083 }
case 18:
                                    r5 = _closure2_slot2;
                                    r4 = r5.setTextAndSelection;
                                    r1 = _closure2_slot1;
                                    r11 = r1.current;
                                    r10 = _closure2_slot3;
                                    r8 = a0;
                                    r7 = a1;
                                    r12 = r5;
                                    r9 = null;
                                    r0 = r12[r4](r11, r10, r9, r8, r7, r6);
case 56:
                                    r0 = undefined;
                                    return r0;
                                }
                            };
                            r0['setSelection'] = r4;
                            r0 = r1.bind(r2)(r3, r0);
case 85:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r17 = r17.bind(r3)(r1, r9);
                    r1 = _closure1_slot9;
                    r9 = r1.default;
                    r1 = r20.forwardedRef;
                    r1 = r9.bind(r3)(r17, r1);
                    r21 = function(a0) { // Original name: _onChange, environment: r4
                        _fun5084: for(var _fun5084_ip = 0; ; ) switch(_fun5084_ip) {
case 0:
                            r1 = a0;
                            r0 = r1.nativeEvent;
                            r4 = r0.text;
                            r0 = _closure2_slot0;
                            r0 = r0.onChange;
                            if(!r0) { _fun5084_ip = 44; continue _fun5084 }
case 29:
                            r3 = _closure2_slot0;
                            r0 = r3.onChange;
                            r0 = r0.bind(r3)(r1);
case 44:
                            r0 = _closure2_slot0;
                            r0 = r0.onChangeText;
                            if(!r0) { _fun5084_ip = 72; continue _fun5084 }
case 57:
                            r3 = _closure2_slot0;
                            r0 = r3.onChangeText;
                            r0 = r0.bind(r3)(r4);
case 72:
                            r0 = _closure2_slot1;
                            r3 = r0.current;
                            r0 = null;
                            if(!(r3 != r0)) { _fun5084_ip = 120; continue _fun5084 }
case 87:
                            r3 = _closure2_slot5;
                            r0 = undefined;
                            r3 = r3.bind(r0)(r4);
                            r2 = _closure2_slot4;
                            r1 = r1.nativeEvent;
                            r1 = r1.eventCount;
                            r1 = r2.bind(r0)(r1);
                            return r0;
case 120:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r17 = function(a0) { // Original name: _onSelectionChange, environment: r4
                        _fun5085: for(var _fun5085_ip = 0; ; ) switch(_fun5085_ip) {
case 0:
                            r3 = a0;
                            r1 = _closure2_slot0;
                            r1 = r1.onSelectionChange;
                            if(!r1) { _fun5085_ip = 34; continue _fun5085 }
case 19:
                            r2 = _closure2_slot0;
                            r1 = r2.onSelectionChange;
                            r1 = r1.bind(r2)(r3);
case 34:
                            r1 = _closure2_slot1;
                            r2 = r1.current;
                            r1 = null;
                            if(!(r2 != r1)) { _fun5085_ip = 89; continue _fun5085 }
case 49:
                            r2 = _closure2_slot6;
                            r1 = {};
                            r3 = r3.nativeEvent;
                            r3 = r3.selection;
                            r1['selection'] = r3;
                            r0 = _closure2_slot3;
                            r1['mostRecentEventCount'] = r0;
                            r0 = undefined;
                            r1 = r2.bind(r0)(r1);
                            return r0;
case 89:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r19 = function(a0) { // Original name: _onFocus, environment: r4
                        _fun5086: for(var _fun5086_ip = 0; ; ) switch(_fun5086_ip) {
case 0:
                            r0 = _closure1_slot10;
                            r3 = r0.default;
                            r2 = r3.focusInput;
                            r1 = _closure2_slot1;
                            r1 = r1.current;
                            r1 = r2.bind(r3)(r1);
                            r1 = _closure2_slot0;
                            r1 = r1.onFocus;
                            if(!r1) { _fun5086_ip = 66; continue _fun5086 }
case 48:
                            r2 = _closure2_slot0;
                            r1 = r2.onFocus;
                            r0 = a0;
                            r0 = r1.bind(r2)(r0);
case 66:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r22 = function(a0) { // Original name: _onBlur, environment: r4
                        _fun5087: for(var _fun5087_ip = 0; ; ) switch(_fun5087_ip) {
case 0:
                            r0 = _closure1_slot10;
                            r3 = r0.default;
                            r2 = r3.blurInput;
                            r1 = _closure2_slot1;
                            r1 = r1.current;
                            r1 = r2.bind(r3)(r1);
                            r1 = _closure2_slot0;
                            r1 = r1.onBlur;
                            if(!r1) { _fun5087_ip = 66; continue _fun5087 }
case 48:
                            r2 = _closure2_slot0;
                            r1 = r2.onBlur;
                            r0 = a0;
                            r0 = r1.bind(r2)(r0);
case 66:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r18 = function(a0) { // Original name: _onScroll, environment: r4
                        _fun5088: for(var _fun5088_ip = 0; ; ) switch(_fun5088_ip) {
case 0:
                            r1 = _closure2_slot0;
                            r1 = r1.onScroll;
                            if(!r1) { _fun5088_ip = 34; continue _fun5088 }
case 16:
                            r2 = _closure2_slot0;
                            r1 = r2.onScroll;
                            r0 = a0;
                            r0 = r1.bind(r2)(r0);
case 34:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r27 = r20.multiline;
                    r28 = r27 != r12;
                    r25 = false;
                    r9 = false;
                    if(!r28) { _fun5076_ip = 502; continue _fun5076 }
case 499:
                    r9 = r27;
case 502:
                    r27 = r20.submitBehavior;
                    if(!(r27 == r12)) { _fun5076_ip = 551; continue _fun5076 }
case 512:
                    r29 = r20.blurOnSubmit;
                    if(r9) { _fun5076_ip = 535; continue _fun5076 }
case 521:
                    r28 = 'blurAndSubmit';
                    if(!(r29 === r25)) { _fun5076_ip = 578; continue _fun5076 }
case 529:
                    r28 = 'submit';
                    _fun5076_ip = 578; continue _fun5076;
case 535:
                    r28 = 'blurAndSubmit';
                    r27 = true;
                    if(!(r29 !== r27)) { _fun5076_ip = 578; continue _fun5076 }
case 545:
                    r28 = 'newline';
                    _fun5076_ip = 578; continue _fun5076;
case 551:
                    if(r9) { _fun5076_ip = 572; continue _fun5076 }
case 554:
                    r27 = r20.submitBehavior;
                    r28 = 'blurAndSubmit';
                    r9 = 'newline';
                    if(!(r27 !== r9)) { _fun5076_ip = 578; continue _fun5076 }
case 572:
                    r28 = r20.submitBehavior;
case 578:
                    r9 = r20.accessible;
                    r29 = r9 !== r25;
                    r9 = r20.focusable;
                    r25 = r9 !== r25;
                    r38 = r20.editable;
                    var _closure2_slot7 = r38;
                    r37 = r20.hitSlop;
                    var _closure2_slot8 = r37;
                    r36 = r20.onPress;
                    var _closure2_slot9 = r36;
                    r35 = r20.onPressIn;
                    var _closure2_slot10 = r35;
                    r34 = r20.onPressOut;
                    var _closure2_slot11 = r34;
                    r33 = r20.rejectResponderTermination;
                    var _closure2_slot12 = r33;
                    r30 = _closure1_slot14;
                    r27 = r30.useMemo;
                    r9 = new Array(6);
                    r9[0] = r38;
                    r9[1] = r37;
                    r9[2] = r36;
                    r9[3] = r35;
                    r9[4] = r34;
                    r9[5] = r33;
                    r4 = function() { // Environment: r4
                        _fun5089: for(var _fun5089_ip = 0; ; ) switch(_fun5089_ip) {
case 0:
                            r0 = {};
                            r1 = _closure2_slot8;
                            r0['hitSlop'] = r1;
                            r1 = function(a0) { // Original name: onPress, environment: r1
                                _fun5090: for(var _fun5090_ip = 0; ; ) switch(_fun5090_ip) {
case 0:
                                    r1 = _closure2_slot9;
                                    r2 = null;
                                    if(!(r1 != r2)) { _fun5090_ip = 27; continue _fun5090 }
case 13:
                                    r4 = _closure2_slot9;
                                    r3 = undefined;
                                    r1 = a0;
                                    r1 = r4.bind(r3)(r1);
case 27:
                                    r3 = _closure2_slot7;
                                    r1 = false;
                                    if(!(r3 !== r1)) { _fun5090_ip = 69; continue _fun5090 }
case 37:
                                    r1 = _closure2_slot1;
                                    r1 = r1.current;
                                    if(!(r1 != r2)) { _fun5090_ip = 69; continue _fun5090 }
case 50:
                                    r0 = _closure2_slot1;
                                    r1 = r0.current;
                                    r0 = r1.focus;
                                    r0 = r0.bind(r1)();
case 69:
                                    r0 = undefined;
                                    return r0;
                                }
                            };
                            r0['onPress'] = r1;
                            r1 = _closure2_slot10;
                            r0['onPressIn'] = r1;
                            r1 = _closure2_slot11;
                            r0['onPressOut'] = r1;
                            r1 = _closure1_slot8;
                            r1 = r1.default;
                            r4 = r1.OS;
                            r3 = 'ios';
                            r1 = null;
                            if(!(r4 === r3)) { _fun5089_ip = 77; continue _fun5089 }
case 70:
                            r2 = _closure2_slot12;
                            r1 = !r2;
case 77:
                            r0['cancelable'] = r1;
                            return r0;
                        }
                    };
                    r9 = r27.bind(r30)(r4, r9);
                    r27 = r20.caretHidden;
                    r4 = _closure1_slot8;
                    r4 = r4.default;
                    r4 = r4.isTesting;
                    if(!r4) { _fun5076_ip = 731; continue _fun5076 }
case 729:
                    r27 = true;
case 731:
                    r4 = _closure1_slot3;
                    r4 = r4.default;
                    r30 = r4.bind(r3)(r9);
                    r4 = r30.onBlur;
                    r4 = r30.onFocus;
                    r4 = _closure1_slot0;
                    r9 = r4.default;
                    r4 = _closure1_slot17;
                    r9 = r9.bind(r3)(r30, r4);
                    if(!(r15 == r12)) { _fun5076_ip = 808; continue _fun5076 }
case 780:
                    if(!(r32 == r12)) { _fun5076_ip = 808; continue _fun5076 }
case 784:
                    if(!(r31 == r12)) { _fun5076_ip = 808; continue _fun5076 }
case 788:
                    if(!(r16 == r12)) { _fun5076_ip = 808; continue _fun5076 }
case 792:
                    if(!(r7 == r12)) { _fun5076_ip = 808; continue _fun5076 }
case 796:
                    r4 = r6 != r12;
                    r30 = undefined;
                    if(!r4) { _fun5076_ip = 946; continue _fun5076 }
case 808:
                    r4 = {};
                    if(!(r32 == r12)) { _fun5076_ip = 832; continue _fun5076 }
case 814:
                    r34 = r15 == r12;
                    r33 = undefined;
                    if(r34) { _fun5076_ip = 829; continue _fun5076 }
case 823:
                    r33 = r15.busy;
case 829:
                    r32 = r33;
case 832:
                    r4['busy'] = r32;
                    if(!(r31 == r12)) { _fun5076_ip = 859; continue _fun5076 }
case 841:
                    r33 = r15 == r12;
                    r32 = undefined;
                    if(r33) { _fun5076_ip = 856; continue _fun5076 }
case 850:
                    r32 = r15.checked;
case 856:
                    r31 = r32;
case 859:
                    r4['checked'] = r31;
                    if(!(r16 == r12)) { _fun5076_ip = 885; continue _fun5076 }
case 868:
                    r32 = r15 == r12;
                    r31 = undefined;
                    if(r32) { _fun5076_ip = 882; continue _fun5076 }
case 877:
                    r31 = r15.disabled;
case 882:
                    r16 = r31;
case 885:
                    r4['disabled'] = r16;
                    if(!(r7 == r12)) { _fun5076_ip = 911; continue _fun5076 }
case 893:
                    r31 = r15 == r12;
                    r16 = undefined;
                    if(r31) { _fun5076_ip = 908; continue _fun5076 }
case 902:
                    r16 = r15.expanded;
case 908:
                    r7 = r16;
case 911:
                    r4['expanded'] = r7;
                    if(!(r6 == r12)) { _fun5076_ip = 938; continue _fun5076 }
case 920:
                    r16 = r15 == r12;
                    r7 = undefined;
                    if(r16) { _fun5076_ip = 935; continue _fun5076 }
case 929:
                    r7 = r15.selected;
case 935:
                    r6 = r7;
case 938:
                    r4['selected'] = r6;
                    r30 = r4;
case 946:
                    r16 = r20.style;
                    r4 = _closure1_slot4;
                    r6 = r4.default;
                    r4 = r20.style;
                    r7 = r6.bind(r3)(r4);
                    r15 = r16;
                    if(!(r7 != r12)) { _fun5076_ip = 1106; continue _fun5076 }
case 980:
                    r6 = r7 == r12;
                    r4 = undefined;
                    if(r6) { _fun5076_ip = 995; continue _fun5076 }
case 989:
                    r4 = r7.fontWeight;
case 995:
                    r6 = typeof r4;
                    r4 = 'number';
                    r31 = null;
                    if(!(r6 === r4)) { _fun5076_ip = 1034; continue _fun5076 }
case 1008:
                    r4 = {};
                    r32 = r7.fontWeight;
                    r6 = r32.toString;
                    r6 = r6.bind(r32)();
                    r4['fontWeight'] = r6;
                    r31 = r4;
case 1034:
                    r4 = r7.verticalAlign;
                    r6 = r31;
                    if(!(r4 != r12)) { _fun5076_ip = 1084; continue _fun5076 }
case 1047:
                    r4 = r31;
                    if(r31) { _fun5076_ip = 1055; continue _fun5076 }
case 1053:
                    r4 = {};
case 1055:
                    r32 = _closure1_slot31;
                    r31 = r7.verticalAlign;
                    r31 = r32[r31];
                    r4['textAlignVertical'] = r31;
                    r4['verticalAlign'] = r3;
                    r6 = r4;
case 1084:
                    r15 = r16;
                    if(!(r6 != r12)) { _fun5076_ip = 1106; continue _fun5076 }
case 1091:
                    r4 = new Array(2);
                    r4[0] = r16;
                    r4[1] = r6;
                    r15 = r4;
case 1106:
                    r4 = _closure1_slot8;
                    r4 = r4.default;
                    r6 = r4.OS;
                    r4 = 'ios';
                    if(!(r6 !== r4)) { _fun5076_ip = 1576; continue _fun5076 }
case 1131:
                    r4 = _closure1_slot8;
                    r4 = r4.default;
                    r16 = r4.OS;
                    r6 = 'android';
                    r4 = null;
                    if(!(r16 === r6)) { _fun5076_ip = 1895; continue _fun5076 }
case 1158:
                    r35 = r20.autoCapitalize;
                    if(r35) { _fun5076_ip = 1171; continue _fun5076 }
case 1167:
                    r35 = 'sentences';
case 1171:
                    r6 = r20 == r12;
                    r36 = undefined;
                    if(r6) { _fun5076_ip = 1186; continue _fun5076 }
case 1180:
                    r36 = r20.aria-labelledby;
case 1186:
                    if(!(r36 == r12)) { _fun5076_ip = 1208; continue _fun5076 }
case 1190:
                    r16 = r20 == r12;
                    r6 = undefined;
                    if(r16) { _fun5076_ip = 1205; continue _fun5076 }
case 1199:
                    r6 = r20.accessibilityLabelledBy;
case 1205:
                    r36 = r6;
case 1208:
                    r6 = r20.placeholder;
                    r16 = r6 != r12;
                    r33 = '';
                    if(!r16) { _fun5076_ip = 1228; continue _fun5076 }
case 1225:
                    r33 = r6;
case 1228:
                    r31 = r20.children;
                    r6 = _closure1_slot14;
                    r16 = r6.Children;
                    r6 = r16.count;
                    r6 = r6.bind(r16)(r31);
                    r16 = _closure1_slot11;
                    r34 = r16.default;
                    r16 = r20.value;
                    r16 = r16 != r12;
                    if(!r16) { _fun5076_ip = 1278; continue _fun5076 }
case 1275:
                    r16 = r6;
case 1278:
                    r32 = !r16;
                    r16 = 'Cannot specify both value and children.';
                    r16 = r34.bind(r3)(r32, r16);
                    r34 = r31;
                    if(!(r6 > r8)) { _fun5076_ip = 1328; continue _fun5076 }
case 1298:
                    r6 = _closure1_slot15;
                    r16 = r6.jsx;
                    r6 = _closure1_slot6;
                    r8 = r6.default;
                    r6 = {};
                    r6['children'] = r31;
                    r34 = r16.bind(r3)(r8, r6);
case 1328:
                    r32 = {};
                    r32['selectionColor'] = r13;
                    if(!(r5 === r3)) { _fun5076_ip = 1342; continue _fun5076 }
case 1339:
                    r5 = r13;
case 1342:
                    r32['selectionHandleColor'] = r5;
                    if(!(r2 === r3)) { _fun5076_ip = 1354; continue _fun5076 }
case 1351:
                    r2 = r13;
case 1354:
                    r32['cursorColor'] = r2;
                    r2 = _closure1_slot15;
                    r6 = r2.jsx;
                    r5 = _closure1_slot19;
                    r2 = global;
                    r31 = r2.Object;
                    r16 = r31.assign;
                    r8 = {};
                    r8['ref'] = r1;
                    r2 = {};
                    r2['accessibilityState'] = r30;
                    r2['accessibilityLabelledBy'] = r36;
                    r2['accessible'] = r29;
                    r2['autoCapitalize'] = r35;
                    r2['submitBehavior'] = r28;
                    r2['caretHidden'] = r27;
                    r2['children'] = r34;
                    r34 = r20.disableFullscreenUI;
                    r2['disableFullscreenUI'] = r34;
                    r34 = r25;
                    if(!(r26 !== r3)) { _fun5076_ip = 1447; continue _fun5076 }
case 1444:
                    r34 = !r26;
case 1447:
                    r2['focusable'] = r34;
                    r2['mostRecentEventCount'] = r24;
                    r34 = r23;
                    if(!(r23 == r12)) { _fun5076_ip = 1469; continue _fun5076 }
case 1464:
                    r34 = r20.nativeID;
case 1469:
                    r2['nativeID'] = r34;
                    r34 = r20.rows;
                    if(!(r34 == r12)) { _fun5076_ip = 1489; continue _fun5076 }
case 1483:
                    r34 = r20.numberOfLines;
case 1489:
                    r2['numberOfLines'] = r34;
                    r2['onBlur'] = r22;
                    r2['onChange'] = r21;
                    r2['onFocus'] = r19;
                    r2['onScroll'] = r18;
                    r2['onSelectionChange'] = r17;
                    r2['placeholder'] = r33;
                    r2['style'] = r15;
                    r2['text'] = r11;
                    r33 = r20.textBreakStrategy;
                    r2['textBreakStrategy'] = r33;
                    r44 = r31;
                    r43 = r8;
                    r42 = r10;
                    r41 = r32;
                    r40 = r9;
                    r39 = r2;
                    r2 = r44[r16](r43, r42, r41, r40, r39, r38);
                    r4 = r6.bind(r3)(r5, r2);
                    _fun5076_ip = 1895; continue _fun5076;
case 1576:
                    r2 = r20.multiline;
                    r6 = true;
                    if(!(r2 !== r6)) { _fun5076_ip = 1594; continue _fun5076 }
case 1588:
                    r5 = _closure1_slot21;
                    _fun5076_ip = 1598; continue _fun5076;
case 1594:
                    r5 = _closure1_slot23;
case 1598:
                    r2 = r20.multiline;
                    r16 = r2 === r6;
                    if(!r16) { _fun5076_ip = 1660; continue _fun5076 }
case 1611:
                    r2 = r7 == r12;
                    if(r2) { _fun5076_ip = 1657; continue _fun5076 }
case 1618:
                    r6 = r7.padding;
                    r6 = r6 == r12;
                    if(!r6) { _fun5076_ip = 1641; continue _fun5076 }
case 1631:
                    r8 = r7.paddingVertical;
                    r6 = r8 == r12;
case 1641:
                    if(!r6) { _fun5076_ip = 1654; continue _fun5076 }
case 1644:
                    r7 = r7.paddingTop;
                    r6 = r7 == r12;
case 1654:
                    r2 = r6;
case 1657:
                    r16 = r2;
case 1660:
                    r2 = _closure1_slot15;
                    r2 = r2.jsx;
                    r6 = global;
                    r8 = r6.Object;
                    r7 = r8.assign;
                    r6 = {};
                    r6['ref'] = r1;
                    r1 = {};
                    r1['accessibilityState'] = r30;
                    r1['accessible'] = r29;
                    r1['submitBehavior'] = r28;
                    r1['caretHidden'] = r27;
                    r27 = r20.dataDetectorTypes;
                    r1['dataDetectorTypes'] = r27;
                    if(!(r26 !== r3)) { _fun5076_ip = 1727; continue _fun5076 }
case 1724:
                    r25 = !r26;
case 1727:
                    r1['focusable'] = r25;
                    r1['mostRecentEventCount'] = r24;
                    if(!(r23 == r12)) { _fun5076_ip = 1746; continue _fun5076 }
case 1741:
                    r23 = r20.nativeID;
case 1746:
                    r1['nativeID'] = r23;
                    r23 = r20.rows;
                    if(!(r23 == r12)) { _fun5076_ip = 1766; continue _fun5076 }
case 1760:
                    r23 = r20.numberOfLines;
case 1766:
                    r1['numberOfLines'] = r23;
                    r1['onBlur'] = r22;
                    r1['onChange'] = r21;
                    r20 = r20.onContentSizeChange;
                    r1['onContentSizeChange'] = r20;
                    r1['onFocus'] = r19;
                    r1['onScroll'] = r18;
                    r1['onSelectionChange'] = r17;
                    r17 = _closure1_slot25;
                    r1['onSelectionChangeShouldSetResponder'] = r17;
                    r1['selection'] = r14;
                    r1['selectionColor'] = r13;
                    r13 = _closure1_slot5;
                    r14 = r13.default;
                    r13 = r14.compose;
                    r12 = null;
                    if(!r16) { _fun5076_ip = 1856; continue _fun5076 }
case 1846:
                    r16 = _closure1_slot30;
                    r12 = r16.multilineDefault;
case 1856:
                    r12 = r13.bind(r14)(r12, r15);
                    r1['style'] = r12;
                    r1['text'] = r11;
                    r44 = r8;
                    r43 = r6;
                    r42 = r10;
                    r41 = r9;
                    r40 = r1;
                    r1 = r44[r7](r43, r42, r41, r40, r39);
                    r4 = r2.bind(r3)(r5, r1);
case 1895:
                    r1 = _closure1_slot15;
                    r2 = r1.jsx;
                    r0 = _closure1_slot7;
                    r0 = r0.default;
                    r1 = r0.Provider;
                    r0 = {};
                    r5 = true;
                    r0['value'] = r5;
                    r0['children'] = r4;
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                }
            };
            var _closure1_slot35 = r0;
            r0 = 0;
            r1 = r10[r0];
            r0 = undefined;
            r11 = r5.bind(r0)(r1);
            r1 = global;
            r8 = r1.Object;
            r6 = r8.defineProperty;
            r3 = {};
            r1 = true;
            r3['value'] = r1;
            r1 = '__esModule';
            r1 = r6.bind(r8)(r2, r1, r3);
            r2['default'] = r0;
            r1 = 1;
            r1 = r10[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r11.bind(r0)(r1);
            var _closure1_slot0 = r1;
            r1 = 2;
            r1 = r10[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r11.bind(r0)(r1);
            var _closure1_slot1 = r1;
            r1 = 3;
            r1 = r10[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot2 = r1;
            r1 = 4;
            r1 = r10[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r11.bind(r0)(r1);
            var _closure1_slot3 = r1;
            r8 = 5;
            r1 = r10[r8];
            r1 = r5.bind(r0)(r1);
            r1 = r11.bind(r0)(r1);
            var _closure1_slot4 = r1;
            r1 = 6;
            r1 = r10[r1];
            r1 = r5.bind(r0)(r1);
            r3 = r11.bind(r0)(r1);
            var _closure1_slot5 = r3;
            r1 = 7;
            r1 = r10[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r11.bind(r0)(r1);
            var _closure1_slot6 = r1;
            r1 = 8;
            r1 = r10[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r11.bind(r0)(r1);
            var _closure1_slot7 = r1;
            r1 = 9;
            r1 = r10[r1];
            r1 = r5.bind(r0)(r1);
            r9 = r11.bind(r0)(r1);
            var _closure1_slot8 = r9;
            r1 = 10;
            r1 = r10[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r11.bind(r0)(r1);
            var _closure1_slot9 = r1;
            r1 = 11;
            r1 = r10[r1];
            r1 = r5.bind(r0)(r1);
            r6 = r11.bind(r0)(r1);
            var _closure1_slot10 = r6;
            r1 = 12;
            r1 = r10[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r11.bind(r0)(r1);
            var _closure1_slot11 = r1;
            r1 = 13;
            r1 = r10[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r11.bind(r0)(r1);
            var _closure1_slot12 = r1;
            r1 = 14;
            r1 = r10[r1];
            r1 = r5.bind(r0)(r1);
            r7 = r7.bind(r0)(r1);
            var _closure1_slot13 = r7;
            var _closure1_slot14 = r7;
            r1 = 15;
            r1 = r10[r1];
            r1 = r5.bind(r0)(r1);
            var _closure1_slot15 = r1;
            r1 = ['aria-busy', 'aria-checked', 'aria-disabled', 'aria-expanded', 'aria-selected', 'accessibilityState', 'id', 'tabIndex', 'selection', 'selectionColor', 'selectionHandleColor', 'cursorColor'];
            var _closure1_slot16 = r1;
            r1 = ['onBlur', 'onFocus'];
            var _closure1_slot17 = r1;
            r1 = ['allowFontScaling', 'rejectResponderTermination', 'underlineColorAndroid', 'autoComplete', 'textContentType', 'readOnly', 'editable', 'enterKeyHint', 'returnKeyType', 'inputMode', 'showSoftInputOnFocus', 'keyboardType'];
            var _closure1_slot18 = r1;
            r1 = r9.default;
            r11 = r1.OS;
            r1 = 'android';
            if(!(r11 !== r1)) { _fun5066_ip = 569; continue _fun5066 }
case 471:
            r1 = r9.default;
            r11 = r1.OS;
            r1 = 'ios';
            if(!(r11 === r1)) { _fun5066_ip = 608; continue _fun5066 }
case 489:
            r1 = 17;
            r11 = r10[r1];
            r11 = r5.bind(r0)(r11);
            r11 = r11.default;
            var _closure1_slot21 = r11;
            r1 = r10[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r1.Commands;
            var _closure1_slot22 = r1;
            r1 = 18;
            r11 = r10[r1];
            r11 = r5.bind(r0)(r11);
            r11 = r11.default;
            var _closure1_slot23 = r11;
            r1 = r10[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r1.Commands;
            var _closure1_slot24 = r1;
            _fun5066_ip = 608; continue _fun5066;
case 569:
            r1 = 16;
            r11 = r10[r1];
            r11 = r5.bind(r0)(r11);
            r11 = r11.default;
            var _closure1_slot19 = r11;
            r1 = r10[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r1.Commands;
            var _closure1_slot20 = r1;
case 608:
            r1 = function() { // Original name: emptyFunctionThatReturnsTrue, environment: r4
                r0 = true;
                return r0;
            };
            var _closure1_slot25 = r1;
            r5 = 'default';
            r1 = {'enter': 'default', 'done': 'done', 'go': 'go', 'next': 'next', 'previous': 'previous', 'search': 'search', 'send': 'send'};
            var _closure1_slot26 = r1;
            r1 = {'none': 'default', 'text': 'default', 'decimal': 'decimal-pad', 'numeric': 'number-pad', 'tel': 'phone-pad', 'search': null, 'email': 'email-address', 'url': 'url'};
            r9 = r9.default;
            r10 = r9.OS;
            r9 = 'ios';
            if(!(r10 === r9)) { _fun5066_ip = 667; continue _fun5066 }
case 663:
            r5 = 'web-search';
case 667:
            r1['search'] = r5;
            var _closure1_slot27 = r1;
            r1 = {'address-line1': 'postal-address-region', 'address-line2': 'postal-address-locality', 'bday': 'birthdate-full', 'bday-day': 'birthdate-day', 'bday-month': 'birthdate-month', 'bday-year': 'birthdate-year', 'cc-csc': 'cc-csc', 'cc-exp': 'cc-exp', 'cc-exp-month': 'cc-exp-month', 'cc-exp-year': 'cc-exp-year', 'cc-number': 'cc-number', 'country': 'postal-address-country', 'current-password': 'password', 'email': 'email', 'honorific-prefix': 'name-prefix', 'honorific-suffix': 'name-suffix', 'name': 'name', 'additional-name': 'name-middle', 'family-name': 'name-family', 'given-name': 'name-given', 'new-password': 'password-new', 'off': 'off', 'one-time-code': 'sms-otp', 'postal-code': 'postal-code', 'sex': 'gender', 'street-address': 'street-address', 'tel': 'tel', 'tel-country-code': 'tel-country-code', 'tel-national': 'tel-national', 'username': 'username'};
            var _closure1_slot28 = r1;
            r1 = {'address-line1': 'streetAddressLine1', 'address-line2': 'streetAddressLine2', 'bday': 'birthdate', 'bday-day': 'birthdateDay', 'bday-month': 'birthdateMonth', 'bday-year': 'birthdateYear', 'cc-csc': 'creditCardSecurityCode', 'cc-exp-month': 'creditCardExpirationMonth', 'cc-exp-year': 'creditCardExpirationYear', 'cc-exp': 'creditCardExpiration', 'cc-given-name': 'creditCardGivenName', 'cc-additional-name': 'creditCardMiddleName', 'cc-family-name': 'creditCardFamilyName', 'cc-name': 'creditCardName', 'cc-number': 'creditCardNumber', 'cc-type': 'creditCardType', 'current-password': 'password', 'country': 'countryName', 'email': 'emailAddress', 'name': 'name', 'additional-name': 'middleName', 'family-name': 'familyName', 'given-name': 'givenName', 'nickname': 'nickname', 'honorific-prefix': 'namePrefix', 'honorific-suffix': 'nameSuffix', 'new-password': 'newPassword', 'off': 'none', 'one-time-code': 'oneTimeCode', 'organization': 'organizationName', 'organization-title': 'jobTitle', 'postal-code': 'postalCode', 'street-address': 'fullStreetAddress', 'tel': 'telephoneNumber', 'url': 'URL', 'username': 'username'};
            var _closure1_slot29 = r1;
            r5 = r7.forwardRef;
            r1 = function(a0, a1) { // Original name: TextInput, environment: r4
                _fun5092: for(var _fun5092_ip = 0; ; ) switch(_fun5092_ip) {
case 0:
                    r4 = a0;
                    r0 = r4.allowFontScaling;
                    r3 = undefined;
                    r19 = true;
                    if(!(r0 !== r3)) { _fun5092_ip = 20; continue _fun5092 }
case 17:
                    r19 = r0;
case 20:
                    r0 = r4.rejectResponderTermination;
                    r18 = true;
                    if(!(r0 !== r3)) { _fun5092_ip = 35; continue _fun5092 }
case 32:
                    r18 = r0;
case 35:
                    r0 = r4.underlineColorAndroid;
                    r17 = 'transparent';
                    if(!(r0 !== r3)) { _fun5092_ip = 52; continue _fun5092 }
case 49:
                    r17 = r0;
case 52:
                    r10 = r4.autoComplete;
                    r12 = r4.textContentType;
                    r16 = r4.readOnly;
                    r14 = r4.editable;
                    r15 = r4.enterKeyHint;
                    r11 = r4.returnKeyType;
                    r13 = r4.inputMode;
                    r0 = r4.showSoftInputOnFocus;
                    r8 = r4.keyboardType;
                    r1 = _closure1_slot0;
                    r2 = r1.default;
                    r1 = _closure1_slot18;
                    r7 = r2.bind(r3)(r4, r1);
                    r1 = _closure1_slot15;
                    r2 = r1.jsx;
                    r1 = _closure1_slot35;
                    r4 = global;
                    r6 = r4.Object;
                    r5 = r6.assign;
                    r4 = {};
                    r4['allowFontScaling'] = r19;
                    r4['rejectResponderTermination'] = r18;
                    r4['underlineColorAndroid'] = r17;
                    if(!(r16 !== r3)) { _fun5092_ip = 178; continue _fun5092 }
case 175:
                    r14 = !r16;
case 178:
                    r4['editable'] = r14;
                    if(!r15) { _fun5092_ip = 194; continue _fun5092 }
case 186:
                    r14 = _closure1_slot26;
                    r11 = r14[r15];
case 194:
                    r4['returnKeyType'] = r11;
                    if(!r13) { _fun5092_ip = 210; continue _fun5092 }
case 202:
                    r11 = _closure1_slot27;
                    r8 = r11[r13];
case 210:
                    r4['keyboardType'] = r8;
                    r8 = null;
                    if(!(r13 != r8)) { _fun5092_ip = 229; continue _fun5092 }
case 221:
                    r11 = 'none';
                    r0 = r13 !== r11;
case 229:
                    r4['showSoftInputOnFocus'] = r0;
                    r0 = _closure1_slot8;
                    r0 = r0.default;
                    r13 = r0.OS;
                    r11 = 'android';
                    r0 = undefined;
                    if(!(r13 === r11)) { _fun5092_ip = 279; continue _fun5092 }
case 258:
                    r11 = _closure1_slot28;
                    r13 = r11[r10];
                    r11 = r10;
                    if(!(r13 != r8)) { _fun5092_ip = 276; continue _fun5092 }
case 273:
                    r11 = r13;
case 276:
                    r0 = r11;
case 279:
                    r4['autoComplete'] = r0;
                    r0 = r12;
                    if(!(r0 == r8)) { _fun5092_ip = 347; continue _fun5092 }
case 291:
                    r8 = _closure1_slot8;
                    r8 = r8.default;
                    r13 = r8.OS;
                    r11 = 'ios';
                    r8 = r12;
                    if(!(r13 === r11)) { _fun5092_ip = 344; continue _fun5092 }
case 316:
                    r8 = r12;
                    if(!r10) { _fun5092_ip = 344; continue _fun5092 }
case 322:
                    r11 = _closure1_slot29;
                    r11 = r10 in r11;
                    r8 = r12;
                    if(!r11) { _fun5092_ip = 344; continue _fun5092 }
case 336:
                    r9 = _closure1_slot29;
                    r8 = r9[r10];
case 344:
                    r0 = r8;
case 347:
                    r4['textContentType'] = r0;
                    r0 = {};
                    r8 = a1;
                    r0['forwardedRef'] = r8;
                    r0 = r5.bind(r6)(r4, r7, r0);
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                }
            };
            r1 = r5.bind(r7)(r1);
            r5 = 'TextInput';
            r1['displayName'] = r5;
            r5 = {};
            r7 = r6.default;
            r7 = r7.currentlyFocusedInput;
            r5['currentlyFocusedInput'] = r7;
            r7 = r6.default;
            r7 = r7.currentlyFocusedField;
            r5['currentlyFocusedField'] = r7;
            r7 = r6.default;
            r7 = r7.focusTextInput;
            r5['focusTextInput'] = r7;
            r6 = r6.default;
            r6 = r6.blurTextInput;
            r5['blurTextInput'] = r6;
            r1['State'] = r5;
            r6 = r3.default;
            r5 = r6.create;
            r3 = {};
            r7 = {};
            r7['paddingTop'] = r8;
            r3['multilineDefault'] = r7;
            r3 = r5.bind(r6)(r3);
            var _closure1_slot30 = r3;
            r3 = {'auto': 'auto', 'top': 'top', 'bottom': 'bottom', 'middle': 'center'};
            var _closure1_slot31 = r3;
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 438;
    r5 = [1, 203, 38, 73, 287, 128, 253, 285, 249, 33, 334, 84, 20, 45, 119, 251, 85, 439, 441];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5093: for(var _fun5093_ip = 0; ; ) switch(_fun5093_ip) {
case 0:
            r8 = a1;
            r2 = a5;
            r9 = a6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun5094: for(var _fun5094_ip = 0; ; ) switch(_fun5094_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5094_ip = 104; continue _fun5094 }
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
                        _fun5095: for(var _fun5095_ip = 0; ; ) switch(_fun5095_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5095_ip = 15; continue _fun5095 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5095_ip = 19; continue _fun5095;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot1 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot1 = r0;
            r0 = 0;
            r3 = r9[r0];
            r0 = undefined;
            r7 = r8.bind(r0)(r3);
            r4 = global;
            r10 = r4.Object;
            r6 = r10.defineProperty;
            r5 = {};
            r3 = true;
            r5['value'] = r3;
            r3 = '__esModule';
            r3 = r6.bind(r10)(r2, r3, r5);
            r2['Commands'] = r0;
            r2['__INTERNAL_VIEW_CONFIG'] = r0;
            r2['default'] = r0;
            r3 = 1;
            r3 = r9[r3];
            r6 = r8.bind(r0)(r3);
            if(!r6) { _fun5093_ip = 112; continue _fun5093 }
case 98:
            r3 = r6.__esModule;
            r5 = r6;
            if(r3) { _fun5093_ip = 379; continue _fun5093 }
case 112:
            r19 = null;
            if(!(r19 !== r6)) { _fun5093_ip = 370; continue _fun5093 }
case 121:
            r10 = typeof r6;
            r3 = 'object';
            if(!(r3 !== r10)) { _fun5093_ip = 143; continue _fun5093 }
case 132:
            r3 = 'function';
            if(!(r3 === r10)) { _fun5093_ip = 370; continue _fun5093 }
case 143:
            r3 = _closure1_slot1;
            r10 = r3.bind(r0)(r0);
            if(!r10) { _fun5093_ip = 171; continue _fun5093 }
case 155:
            r3 = r10.has;
            r3 = r3.bind(r10)(r6);
            if(r3) { _fun5093_ip = 358; continue _fun5093 }
case 171:
            r3 = Object.create(r19);
            r11 = r4.Object;
            r18 = r11.defineProperty;
            if(!r18) { _fun5093_ip = 199; continue _fun5093 }
case 188:
            r11 = r4.Object;
            r18 = r11.getOwnPropertyDescriptor;
case 199:
            r16 = r6;
            r12 = 'default';
            r11 = undefined;
            for(r13 in r16)
case 216:
            {
case 225:
                r23 = r13;
                if(r12 === r23) { _fun5093_ip = 216; continue _fun5093 }
case 232:
                r20 = {};
                r21 = r20.hasOwnProperty;
                r20 = r21.call;
                r20 = r20.bind(r21)(r6, r23);
                if(!r20) { _fun5093_ip = 216; continue _fun5093 }
case 253:
                r20 = null;
                if(!r18) { _fun5093_ip = 275; continue _fun5093 }
case 258:
                r22 = r4.Object;
                r21 = r22.getOwnPropertyDescriptor;
                r20 = r21.bind(r22)(r6, r23);
case 275:
                if(!r20) { _fun5093_ip = 294; continue _fun5093 }
case 278:
                r21 = r20.get;
                if(r21) { _fun5093_ip = 307; continue _fun5093 }
case 286:
                r21 = r20.set;
                if(r21) { _fun5093_ip = 307; continue _fun5093 }
case 294:
                r21 = r6[r23];
                r3[r23] = r21;
                r11 = r20;
                _fun5093_ip = 216; continue _fun5093;
case 307:
                r22 = r4.Object;
                r21 = r22.defineProperty;
                r21 = r21.bind(r22)(r3, r23, r20);
                r11 = r20;
                _fun5093_ip = 216; continue _fun5093;
            }
case 330:
            r3['default'] = r6;
            r5 = r3;
            if(!r10) { _fun5093_ip = 379; continue _fun5093 }
case 342:
            r11 = r10.set;
            r11 = r11.bind(r10)(r6, r3);
            r5 = r3;
            _fun5093_ip = 379; continue _fun5093;
case 358:
            r3 = r10.get;
            r5 = r3.bind(r10)(r6);
            _fun5093_ip = 379; continue _fun5093;
case 370:
            r3 = {};
            r3['default'] = r6;
            r5 = r3;
case 379:
            r3 = 2;
            r3 = r9[r3];
            r3 = r8.bind(r0)(r3);
            r6 = r7.bind(r0)(r3);
            r3 = 3;
            r3 = r9[r3];
            r3 = r8.bind(r0)(r3);
            r3 = r7.bind(r0)(r3);
            r7 = r6.default;
            r6 = {};
            r8 = ['focus', 'blur', 'setTextAndSelection'];
            r6['supportedCommands'] = r8;
            r6 = r7.bind(r0)(r6);
            r2['Commands'] = r6;
            r8 = r4.Object;
            r7 = r8.assign;
            r6 = {};
            r4 = 'RCTSinglelineTextInputView';
            r6['uiViewClassName'] = r4;
            r3 = r3.default;
            r3 = r7.bind(r8)(r6, r3);
            r2['__INTERNAL_VIEW_CONFIG'] = r3;
            var _closure1_slot0 = r3;
            r3 = r5.get;
            r1 = function() { // Environment: r1
                r0 = _closure1_slot0;
                return r0;
            };
            r1 = r3.bind(r5)(r4, r1);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 439;
    r5 = [1, 86, 125, 440];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r2 = a5;
        r9 = a6;
        r3 = global;
        r6 = r3.Object;
        r5 = r6.defineProperty;
        r1 = {};
        r8 = true;
        r1['value'] = r8;
        r0 = '__esModule';
        r0 = r5.bind(r6)(r2, r0, r1);
        r0 = undefined;
        r2['default'] = r0;
        r1 = {};
        r5 = {};
        r6 = {};
        r7 = {'bubbled': 'onBlur', 'captured': 'onBlurCapture'};
        r6['phasedRegistrationNames'] = r7;
        r5['topBlur'] = r6;
        r6 = {};
        r7 = {'bubbled': 'onChange', 'captured': 'onChangeCapture'};
        r6['phasedRegistrationNames'] = r7;
        r5['topChange'] = r6;
        r6 = {};
        r7 = {'bubbled': 'onEndEditing', 'captured': 'onEndEditingCapture'};
        r6['phasedRegistrationNames'] = r7;
        r5['topEndEditing'] = r6;
        r6 = {};
        r7 = {'bubbled': 'onFocus', 'captured': 'onFocusCapture'};
        r6['phasedRegistrationNames'] = r7;
        r5['topFocus'] = r6;
        r6 = {};
        r7 = {'bubbled': 'onKeyPress', 'captured': 'onKeyPressCapture'};
        r6['phasedRegistrationNames'] = r7;
        r5['topKeyPress'] = r6;
        r6 = {};
        r7 = {'bubbled': 'onSubmitEditing', 'captured': 'onSubmitEditingCapture'};
        r6['phasedRegistrationNames'] = r7;
        r5['topSubmitEditing'] = r6;
        r6 = {};
        r7 = {'bubbled': 'onTouchCancel', 'captured': 'onTouchCancelCapture'};
        r6['phasedRegistrationNames'] = r7;
        r5['topTouchCancel'] = r6;
        r6 = {};
        r7 = {'bubbled': 'onTouchEnd', 'captured': 'onTouchEndCapture'};
        r6['phasedRegistrationNames'] = r7;
        r5['topTouchEnd'] = r6;
        r6 = {};
        r7 = {'bubbled': 'onTouchMove', 'captured': 'onTouchMoveCapture'};
        r6['phasedRegistrationNames'] = r7;
        r5['topTouchMove'] = r6;
        r1['bubblingEventTypes'] = r5;
        r5 = {};
        r6 = {};
        r7 = 'onScroll';
        r6['registrationName'] = r7;
        r5['topScroll'] = r6;
        r6 = {};
        r7 = 'onSelectionChange';
        r6['registrationName'] = r7;
        r5['topSelectionChange'] = r6;
        r6 = {};
        r7 = 'onContentSizeChange';
        r6['registrationName'] = r7;
        r5['topContentSizeChange'] = r6;
        r6 = {};
        r7 = 'onChangeSync';
        r6['registrationName'] = r7;
        r5['topChangeSync'] = r6;
        r6 = {};
        r7 = 'onKeyPressSync';
        r6['registrationName'] = r7;
        r5['topKeyPressSync'] = r6;
        r1['directEventTypes'] = r5;
        r7 = r3.Object;
        r6 = r7.assign;
        r5 = {'dynamicTypeRamp': true, 'fontSize': true, 'fontWeight': true, 'fontVariant': true, 'textShadowOffset': null, 'allowFontScaling': true, 'fontStyle': true, 'textTransform': true, 'textAlign': true, 'fontFamily': true, 'lineHeight': true, 'isHighlighted': true, 'writingDirection': true, 'textDecorationLine': true, 'textShadowRadius': true, 'letterSpacing': true, 'textDecorationStyle': true, 'textDecorationColor': null, 'color': null, 'maxFontSizeMultiplier': true};
        r3 = {};
        r10 = 0;
        r10 = r9[r10];
        r10 = r4.bind(r0)(r10);
        r10 = r10.default;
        r3['diff'] = r10;
        r5['textShadowOffset'] = r3;
        r3 = {};
        r10 = 1;
        r11 = r9[r10];
        r11 = r4.bind(r0)(r11);
        r11 = r11.default;
        r3['process'] = r11;
        r5['textDecorationColor'] = r3;
        r3 = {};
        r11 = r9[r10];
        r11 = r4.bind(r0)(r11);
        r11 = r11.default;
        r3['process'] = r11;
        r5['color'] = r3;
        r3 = {};
        r11 = r9[r10];
        r11 = r4.bind(r0)(r11);
        r11 = r11.default;
        r3['process'] = r11;
        r5['textShadowColor'] = r3;
        r5['editable'] = r8;
        r5['inputAccessoryViewID'] = r8;
        r5['inputAccessoryViewButtonLabel'] = r8;
        r5['caretHidden'] = r8;
        r5['enablesReturnKeyAutomatically'] = r8;
        r3 = {};
        r11 = r9[r10];
        r11 = r4.bind(r0)(r11);
        r11 = r11.default;
        r3['process'] = r11;
        r5['placeholderTextColor'] = r3;
        r5['clearButtonMode'] = r8;
        r5['keyboardType'] = r8;
        r5['selection'] = r8;
        r5['returnKeyType'] = r8;
        r5['submitBehavior'] = r8;
        r5['mostRecentEventCount'] = r8;
        r5['scrollEnabled'] = r8;
        r3 = {};
        r10 = r9[r10];
        r10 = r4.bind(r0)(r10);
        r10 = r10.default;
        r3['process'] = r10;
        r5['selectionColor'] = r3;
        r5['contextMenuHidden'] = r8;
        r5['secureTextEntry'] = r8;
        r5['placeholder'] = r8;
        r5['autoCorrect'] = r8;
        r5['multiline'] = r8;
        r5['numberOfLines'] = r8;
        r5['textContentType'] = r8;
        r5['maxLength'] = r8;
        r5['autoCapitalize'] = r8;
        r5['keyboardAppearance'] = r8;
        r5['passwordRules'] = r8;
        r5['spellCheck'] = r8;
        r5['selectTextOnFocus'] = r8;
        r5['text'] = r8;
        r5['clearTextOnFocus'] = r8;
        r5['showSoftInputOnFocus'] = r8;
        r5['autoFocus'] = r8;
        r5['lineBreakStrategyIOS'] = r8;
        r5['lineBreakModeIOS'] = r8;
        r5['smartInsertDelete'] = r8;
        r3 = 2;
        r3 = r9[r3];
        r3 = r4.bind(r0)(r3);
        r4 = r3.ConditionallyIgnoredEventHandlers;
        r3 = {'onChange': true, 'onSelectionChange': true, 'onContentSizeChange': true, 'onScroll': true, 'onChangeSync': true, 'onKeyPressSync': true};
        r4 = r4.bind(r0)(r3);
        r3 = {};
        r3['disableKeyboardShortcuts'] = r8;
        r3 = r6.bind(r7)(r5, r4, r3);
        r1['validAttributes'] = r3;
        r2['default'] = r1;
        return r0;
    };
    r6 = 440;
    r5 = [101, 89, 124];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5098: for(var _fun5098_ip = 0; ; ) switch(_fun5098_ip) {
case 0:
            r7 = a1;
            r2 = a5;
            r8 = a6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun5099: for(var _fun5099_ip = 0; ; ) switch(_fun5099_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5099_ip = 104; continue _fun5099 }
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
                        _fun5100: for(var _fun5100_ip = 0; ; ) switch(_fun5100_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5100_ip = 15; continue _fun5100 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5100_ip = 19; continue _fun5100;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot1 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot1 = r0;
            r0 = 0;
            r3 = r8[r0];
            r0 = undefined;
            r6 = r7.bind(r0)(r3);
            r12 = global;
            r9 = r12.Object;
            r5 = r9.defineProperty;
            r4 = {};
            r10 = true;
            r4['value'] = r10;
            r3 = '__esModule';
            r3 = r5.bind(r9)(r2, r3, r4);
            r2['Commands'] = r0;
            r2['__INTERNAL_VIEW_CONFIG'] = r0;
            r2['default'] = r0;
            r3 = 1;
            r3 = r8[r3];
            r4 = r7.bind(r0)(r3);
            if(!r4) { _fun5098_ip = 112; continue _fun5098 }
case 98:
            r3 = r4.__esModule;
            r5 = r4;
            if(r3) { _fun5098_ip = 379; continue _fun5098 }
case 112:
            r20 = null;
            if(!(r20 !== r4)) { _fun5098_ip = 370; continue _fun5098 }
case 121:
            r9 = typeof r4;
            r3 = 'object';
            if(!(r3 !== r9)) { _fun5098_ip = 143; continue _fun5098 }
case 132:
            r3 = 'function';
            if(!(r3 === r9)) { _fun5098_ip = 370; continue _fun5098 }
case 143:
            r3 = _closure1_slot1;
            r9 = r3.bind(r0)(r0);
            if(!r9) { _fun5098_ip = 171; continue _fun5098 }
case 155:
            r3 = r9.has;
            r3 = r3.bind(r9)(r4);
            if(r3) { _fun5098_ip = 358; continue _fun5098 }
case 171:
            r3 = Object.create(r20);
            r11 = r12.Object;
            r19 = r11.defineProperty;
            if(!r19) { _fun5098_ip = 199; continue _fun5098 }
case 188:
            r11 = r12.Object;
            r19 = r11.getOwnPropertyDescriptor;
case 199:
            r17 = r4;
            r13 = 'default';
            r11 = undefined;
            for(r14 in r17)
case 216:
            {
case 225:
                r24 = r14;
                if(r13 === r24) { _fun5098_ip = 216; continue _fun5098 }
case 232:
                r21 = {};
                r22 = r21.hasOwnProperty;
                r21 = r22.call;
                r21 = r21.bind(r22)(r4, r24);
                if(!r21) { _fun5098_ip = 216; continue _fun5098 }
case 253:
                r21 = null;
                if(!r19) { _fun5098_ip = 275; continue _fun5098 }
case 258:
                r23 = r12.Object;
                r22 = r23.getOwnPropertyDescriptor;
                r21 = r22.bind(r23)(r4, r24);
case 275:
                if(!r21) { _fun5098_ip = 294; continue _fun5098 }
case 278:
                r22 = r21.get;
                if(r22) { _fun5098_ip = 307; continue _fun5098 }
case 286:
                r22 = r21.set;
                if(r22) { _fun5098_ip = 307; continue _fun5098 }
case 294:
                r22 = r4[r24];
                r3[r24] = r22;
                r11 = r21;
                _fun5098_ip = 216; continue _fun5098;
case 307:
                r23 = r12.Object;
                r22 = r23.defineProperty;
                r22 = r22.bind(r23)(r3, r24, r21);
                r11 = r21;
                _fun5098_ip = 216; continue _fun5098;
            }
case 330:
            r3['default'] = r4;
            r5 = r3;
            if(!r9) { _fun5098_ip = 379; continue _fun5098 }
case 342:
            r11 = r9.set;
            r11 = r11.bind(r9)(r4, r3);
            r5 = r3;
            _fun5098_ip = 379; continue _fun5098;
case 358:
            r3 = r9.get;
            r5 = r3.bind(r9)(r4);
            _fun5098_ip = 379; continue _fun5098;
case 370:
            r3 = {};
            r3['default'] = r4;
            r5 = r3;
case 379:
            r3 = 2;
            r3 = r8[r3];
            r3 = r7.bind(r0)(r3);
            r3 = r6.bind(r0)(r3);
            r4 = 3;
            r4 = r8[r4];
            r4 = r7.bind(r0)(r4);
            r11 = r6.bind(r0)(r4);
            r4 = r3.default;
            r3 = {};
            r6 = ['focus', 'blur', 'setTextAndSelection'];
            r3['supportedCommands'] = r6;
            r3 = r4.bind(r0)(r3);
            r2['Commands'] = r3;
            r9 = r12.Object;
            r8 = r9.assign;
            r7 = {};
            r4 = 'RCTMultilineTextInputView';
            r7['uiViewClassName'] = r4;
            r6 = r11.default;
            r3 = {};
            r14 = r12.Object;
            r13 = r14.assign;
            r11 = r11.default;
            r12 = r11.validAttributes;
            r11 = {};
            r11['dataDetectorTypes'] = r10;
            r10 = {};
            r10 = r13.bind(r14)(r10, r12, r11);
            r3['validAttributes'] = r10;
            r3 = r8.bind(r9)(r7, r6, r3);
            r2['__INTERNAL_VIEW_CONFIG'] = r3;
            var _closure1_slot0 = r3;
            r3 = r5.get;
            r1 = function() { // Environment: r1
                r0 = _closure1_slot0;
                return r0;
            };
            r1 = r3.bind(r5)(r4, r1);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 441;
    r5 = [1, 86, 125, 440];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5102: for(var _fun5102_ip = 0; ; ) switch(_fun5102_ip) {
case 0:
            r7 = a1;
            r2 = a5;
            r8 = a6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun5103: for(var _fun5103_ip = 0; ; ) switch(_fun5103_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5103_ip = 104; continue _fun5103 }
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
                        _fun5104: for(var _fun5104_ip = 0; ; ) switch(_fun5104_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5104_ip = 15; continue _fun5104 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5104_ip = 19; continue _fun5104;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot12 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot12 = r0;
            r0 = 0;
            r1 = r8[r0];
            r0 = undefined;
            r9 = r7.bind(r0)(r1);
            r5 = global;
            r11 = r5.Object;
            r10 = r11.defineProperty;
            r6 = {};
            r4 = true;
            r6['value'] = r4;
            r1 = '__esModule';
            r1 = r10.bind(r11)(r2, r1, r6);
            r2['default'] = r0;
            r1 = 1;
            r1 = r8[r1];
            r1 = r7.bind(r0)(r1);
            r1 = r9.bind(r0)(r1);
            r6 = 2;
            r6 = r8[r6];
            r6 = r7.bind(r0)(r6);
            r6 = r9.bind(r0)(r6);
            var _closure1_slot0 = r6;
            r6 = 3;
            r6 = r8[r6];
            r6 = r7.bind(r0)(r6);
            r6 = r9.bind(r0)(r6);
            var _closure1_slot1 = r6;
            r6 = 4;
            r6 = r8[r6];
            r6 = r7.bind(r0)(r6);
            r6 = r9.bind(r0)(r6);
            var _closure1_slot2 = r6;
            r6 = 5;
            r6 = r8[r6];
            r6 = r7.bind(r0)(r6);
            r6 = r9.bind(r0)(r6);
            var _closure1_slot3 = r6;
            r6 = 6;
            r6 = r8[r6];
            r6 = r7.bind(r0)(r6);
            r6 = r9.bind(r0)(r6);
            var _closure1_slot4 = r6;
            r6 = 7;
            r6 = r8[r6];
            r9 = r7.bind(r0)(r6);
            if(!r9) { _fun5102_ip = 219; continue _fun5102 }
case 208:
            r6 = r9.__esModule;
            if(r6) { _fun5102_ip = 477; continue _fun5102 }
case 219:
            r19 = null;
            if(!(r19 !== r9)) { _fun5102_ip = 471; continue _fun5102 }
case 228:
            r10 = typeof r9;
            r6 = 'object';
            if(!(r6 !== r10)) { _fun5102_ip = 250; continue _fun5102 }
case 239:
            r6 = 'function';
            if(!(r6 === r10)) { _fun5102_ip = 471; continue _fun5102 }
case 250:
            r6 = _closure1_slot12;
            r10 = r6.bind(r0)(r0);
            if(!r10) { _fun5102_ip = 278; continue _fun5102 }
case 262:
            r6 = r10.has;
            r6 = r6.bind(r10)(r9);
            if(r6) { _fun5102_ip = 459; continue _fun5102 }
case 278:
            r11 = Object.create(r19);
            r6 = r5.Object;
            r18 = r6.defineProperty;
            if(!r18) { _fun5102_ip = 306; continue _fun5102 }
case 295:
            r6 = r5.Object;
            r18 = r6.getOwnPropertyDescriptor;
case 306:
            r16 = r9;
            r12 = 'default';
            r6 = undefined;
            for(r13 in r16)
case 323:
            {
case 332:
                r23 = r13;
                if(r12 === r23) { _fun5102_ip = 323; continue _fun5102 }
case 339:
                r20 = {};
                r21 = r20.hasOwnProperty;
                r20 = r21.call;
                r20 = r20.bind(r21)(r9, r23);
                if(!r20) { _fun5102_ip = 323; continue _fun5102 }
case 360:
                r20 = null;
                if(!r18) { _fun5102_ip = 382; continue _fun5102 }
case 365:
                r22 = r5.Object;
                r21 = r22.getOwnPropertyDescriptor;
                r20 = r21.bind(r22)(r9, r23);
case 382:
                if(!r20) { _fun5102_ip = 401; continue _fun5102 }
case 385:
                r21 = r20.get;
                if(r21) { _fun5102_ip = 414; continue _fun5102 }
case 393:
                r21 = r20.set;
                if(r21) { _fun5102_ip = 414; continue _fun5102 }
case 401:
                r21 = r9[r23];
                r11[r23] = r21;
                r6 = r20;
                _fun5102_ip = 323; continue _fun5102;
case 414:
                r22 = r5.Object;
                r21 = r22.defineProperty;
                r21 = r21.bind(r22)(r11, r23, r20);
                r6 = r20;
                _fun5102_ip = 323; continue _fun5102;
            }
case 437:
            r11['default'] = r9;
            if(!r10) { _fun5102_ip = 477; continue _fun5102 }
case 446:
            r6 = r10.set;
            r6 = r6.bind(r10)(r9, r11);
            _fun5102_ip = 477; continue _fun5102;
case 459:
            r6 = r10.get;
            r6 = r6.bind(r10)(r9);
            _fun5102_ip = 477; continue _fun5102;
case 471:
            r6 = {};
            r6['default'] = r9;
case 477:
            r6 = 8;
            r6 = r8[r6];
            r6 = r7.bind(r0)(r6);
            r6 = function(a0) { // Original name: extractSingleTouch, environment: r3
                _fun5105: for(var _fun5105_ip = 0; ; ) switch(_fun5105_ip) {
case 0:
                    r1 = a0;
                    r3 = r1.touches;
                    r4 = r1.changedTouches;
                    r2 = r3;
                    if(!r2) { _fun5105_ip = 32; continue _fun5105 }
case 21:
                    r5 = r3.length;
                    r0 = 0;
                    r2 = r5 > r0;
case 32:
                    r0 = r4;
                    if(!r0) { _fun5105_ip = 49; continue _fun5105 }
case 38:
                    r6 = r4.length;
                    r5 = 0;
                    r0 = r6 > r5;
case 49:
                    if(r2) { _fun5105_ip = 63; continue _fun5105 }
case 52:
                    if(!r0) { _fun5105_ip = 63; continue _fun5105 }
case 55:
                    r0 = 0;
                    r0 = r4[r0];
                    _fun5105_ip = 75; continue _fun5105;
case 63:
                    if(!r2) { _fun5105_ip = 72; continue _fun5105 }
case 66:
                    r2 = 0;
                    r1 = r3[r2];
case 72:
                    r0 = r1;
case 75:
                    return r0;
                }
            };
            var _closure1_slot5 = r6;
            r6 = {'NOT_RESPONDER': 'NOT_RESPONDER', 'RESPONDER_INACTIVE_PRESS_IN': 'RESPONDER_INACTIVE_PRESS_IN', 'RESPONDER_INACTIVE_PRESS_OUT': 'RESPONDER_INACTIVE_PRESS_OUT', 'RESPONDER_ACTIVE_PRESS_IN': 'RESPONDER_ACTIVE_PRESS_IN', 'RESPONDER_ACTIVE_PRESS_OUT': 'RESPONDER_ACTIVE_PRESS_OUT', 'RESPONDER_ACTIVE_LONG_PRESS_IN': 'RESPONDER_ACTIVE_LONG_PRESS_IN', 'RESPONDER_ACTIVE_LONG_PRESS_OUT': 'RESPONDER_ACTIVE_LONG_PRESS_OUT', 'ERROR': 'ERROR'};
            var _closure1_slot6 = r6;
            r9 = {'NOT_RESPONDER': false, 'RESPONDER_INACTIVE_PRESS_IN': false, 'RESPONDER_INACTIVE_PRESS_OUT': false, 'RESPONDER_ACTIVE_PRESS_IN': false, 'RESPONDER_ACTIVE_PRESS_OUT': false, 'RESPONDER_ACTIVE_LONG_PRESS_IN': false, 'RESPONDER_ACTIVE_LONG_PRESS_OUT': false, 'ERROR': false};
            r11 = r5.Object;
            r10 = r11.assign;
            r8 = {};
            r7 = {'RESPONDER_ACTIVE_PRESS_OUT': true, 'RESPONDER_ACTIVE_PRESS_IN': true};
            r7 = r10.bind(r11)(r8, r9, r7);
            var _closure1_slot7 = r7;
            r11 = r5.Object;
            r10 = r11.assign;
            r8 = {};
            r7 = {'RESPONDER_INACTIVE_PRESS_IN': true, 'RESPONDER_ACTIVE_PRESS_IN': true, 'RESPONDER_ACTIVE_LONG_PRESS_IN': true};
            r7 = r10.bind(r11)(r8, r9, r7);
            var _closure1_slot8 = r7;
            r8 = r5.Object;
            r7 = r8.assign;
            r5 = {};
            r5['RESPONDER_ACTIVE_LONG_PRESS_IN'] = r4;
            r4 = {};
            r4 = r7.bind(r8)(r4, r9, r5);
            var _closure1_slot9 = r4;
            r4 = {'DELAY': 'DELAY', 'RESPONDER_GRANT': 'RESPONDER_GRANT', 'RESPONDER_RELEASE': 'RESPONDER_RELEASE', 'RESPONDER_TERMINATED': 'RESPONDER_TERMINATED', 'ENTER_PRESS_RECT': 'ENTER_PRESS_RECT', 'LEAVE_PRESS_RECT': 'LEAVE_PRESS_RECT', 'LONG_PRESS_DETECTED': 'LONG_PRESS_DETECTED'};
            var _closure1_slot10 = r4;
            r4 = {};
            r5 = {};
            r7 = r6.ERROR;
            r5['DELAY'] = r7;
            r7 = r6.RESPONDER_INACTIVE_PRESS_IN;
            r5['RESPONDER_GRANT'] = r7;
            r7 = r6.ERROR;
            r5['RESPONDER_RELEASE'] = r7;
            r7 = r6.ERROR;
            r5['RESPONDER_TERMINATED'] = r7;
            r7 = r6.ERROR;
            r5['ENTER_PRESS_RECT'] = r7;
            r7 = r6.ERROR;
            r5['LEAVE_PRESS_RECT'] = r7;
            r7 = r6.ERROR;
            r5['LONG_PRESS_DETECTED'] = r7;
            r4['NOT_RESPONDER'] = r5;
            r5 = {};
            r7 = r6.RESPONDER_ACTIVE_PRESS_IN;
            r5['DELAY'] = r7;
            r7 = r6.ERROR;
            r5['RESPONDER_GRANT'] = r7;
            r7 = r6.NOT_RESPONDER;
            r5['RESPONDER_RELEASE'] = r7;
            r7 = r6.NOT_RESPONDER;
            r5['RESPONDER_TERMINATED'] = r7;
            r7 = r6.RESPONDER_INACTIVE_PRESS_IN;
            r5['ENTER_PRESS_RECT'] = r7;
            r7 = r6.RESPONDER_INACTIVE_PRESS_OUT;
            r5['LEAVE_PRESS_RECT'] = r7;
            r7 = r6.ERROR;
            r5['LONG_PRESS_DETECTED'] = r7;
            r4['RESPONDER_INACTIVE_PRESS_IN'] = r5;
            r5 = {};
            r7 = r6.RESPONDER_ACTIVE_PRESS_OUT;
            r5['DELAY'] = r7;
            r7 = r6.ERROR;
            r5['RESPONDER_GRANT'] = r7;
            r7 = r6.NOT_RESPONDER;
            r5['RESPONDER_RELEASE'] = r7;
            r7 = r6.NOT_RESPONDER;
            r5['RESPONDER_TERMINATED'] = r7;
            r7 = r6.RESPONDER_INACTIVE_PRESS_IN;
            r5['ENTER_PRESS_RECT'] = r7;
            r7 = r6.RESPONDER_INACTIVE_PRESS_OUT;
            r5['LEAVE_PRESS_RECT'] = r7;
            r7 = r6.ERROR;
            r5['LONG_PRESS_DETECTED'] = r7;
            r4['RESPONDER_INACTIVE_PRESS_OUT'] = r5;
            r5 = {};
            r7 = r6.ERROR;
            r5['DELAY'] = r7;
            r7 = r6.ERROR;
            r5['RESPONDER_GRANT'] = r7;
            r7 = r6.NOT_RESPONDER;
            r5['RESPONDER_RELEASE'] = r7;
            r7 = r6.NOT_RESPONDER;
            r5['RESPONDER_TERMINATED'] = r7;
            r7 = r6.RESPONDER_ACTIVE_PRESS_IN;
            r5['ENTER_PRESS_RECT'] = r7;
            r7 = r6.RESPONDER_ACTIVE_PRESS_OUT;
            r5['LEAVE_PRESS_RECT'] = r7;
            r7 = r6.RESPONDER_ACTIVE_LONG_PRESS_IN;
            r5['LONG_PRESS_DETECTED'] = r7;
            r4['RESPONDER_ACTIVE_PRESS_IN'] = r5;
            r5 = {};
            r7 = r6.ERROR;
            r5['DELAY'] = r7;
            r7 = r6.ERROR;
            r5['RESPONDER_GRANT'] = r7;
            r7 = r6.NOT_RESPONDER;
            r5['RESPONDER_RELEASE'] = r7;
            r7 = r6.NOT_RESPONDER;
            r5['RESPONDER_TERMINATED'] = r7;
            r7 = r6.RESPONDER_ACTIVE_PRESS_IN;
            r5['ENTER_PRESS_RECT'] = r7;
            r7 = r6.RESPONDER_ACTIVE_PRESS_OUT;
            r5['LEAVE_PRESS_RECT'] = r7;
            r7 = r6.ERROR;
            r5['LONG_PRESS_DETECTED'] = r7;
            r4['RESPONDER_ACTIVE_PRESS_OUT'] = r5;
            r5 = {};
            r7 = r6.ERROR;
            r5['DELAY'] = r7;
            r7 = r6.ERROR;
            r5['RESPONDER_GRANT'] = r7;
            r7 = r6.NOT_RESPONDER;
            r5['RESPONDER_RELEASE'] = r7;
            r7 = r6.NOT_RESPONDER;
            r5['RESPONDER_TERMINATED'] = r7;
            r7 = r6.RESPONDER_ACTIVE_LONG_PRESS_IN;
            r5['ENTER_PRESS_RECT'] = r7;
            r7 = r6.RESPONDER_ACTIVE_LONG_PRESS_OUT;
            r5['LEAVE_PRESS_RECT'] = r7;
            r7 = r6.RESPONDER_ACTIVE_LONG_PRESS_IN;
            r5['LONG_PRESS_DETECTED'] = r7;
            r4['RESPONDER_ACTIVE_LONG_PRESS_IN'] = r5;
            r5 = {};
            r7 = r6.ERROR;
            r5['DELAY'] = r7;
            r7 = r6.ERROR;
            r5['RESPONDER_GRANT'] = r7;
            r7 = r6.NOT_RESPONDER;
            r5['RESPONDER_RELEASE'] = r7;
            r7 = r6.NOT_RESPONDER;
            r5['RESPONDER_TERMINATED'] = r7;
            r7 = r6.RESPONDER_ACTIVE_LONG_PRESS_IN;
            r5['ENTER_PRESS_RECT'] = r7;
            r7 = r6.RESPONDER_ACTIVE_LONG_PRESS_OUT;
            r5['LEAVE_PRESS_RECT'] = r7;
            r7 = r6.ERROR;
            r5['LONG_PRESS_DETECTED'] = r7;
            r4['RESPONDER_ACTIVE_LONG_PRESS_OUT'] = r5;
            r5 = {};
            r7 = r6.NOT_RESPONDER;
            r5['DELAY'] = r7;
            r7 = r6.RESPONDER_INACTIVE_PRESS_IN;
            r5['RESPONDER_GRANT'] = r7;
            r7 = r6.NOT_RESPONDER;
            r5['RESPONDER_RELEASE'] = r7;
            r7 = r6.NOT_RESPONDER;
            r5['RESPONDER_TERMINATED'] = r7;
            r7 = r6.NOT_RESPONDER;
            r5['ENTER_PRESS_RECT'] = r7;
            r7 = r6.NOT_RESPONDER;
            r5['LEAVE_PRESS_RECT'] = r7;
            r6 = r6.NOT_RESPONDER;
            r5['LONG_PRESS_DETECTED'] = r6;
            r4['error'] = r5;
            var _closure1_slot11 = r4;
            r4 = {};
            r5 = function() { // Original name: componentDidMount, environment: r3
                _fun5106: for(var _fun5106_ip = 0; ; ) switch(_fun5106_ip) {
case 0:
                    r0 = _closure1_slot1;
                    r0 = r0.default;
                    r1 = r0.isTV;
                    r0 = undefined;
                    if(r1) { _fun5106_ip = 25; continue _fun5106 }
case 23:
                    return r0;
case 25:
                    return r0;
                }
            };
            r4['componentDidMount'] = r5;
            r5 = function() { // Original name: componentWillUnmount, environment: r3
                _fun5107: for(var _fun5107_ip = 0; ; ) switch(_fun5107_ip) {
case 0:
                    r0 = this;
                    r1 = r0.touchableDelayTimeout;
                    if(!r1) { _fun5107_ip = 32; continue _fun5107 }
case 11:
                    r1 = global;
                    r3 = r1.clearTimeout;
                    r2 = r0.touchableDelayTimeout;
                    r1 = undefined;
                    r1 = r3.bind(r1)(r2);
case 32:
                    r1 = r0.longPressDelayTimeout;
                    if(!r1) { _fun5107_ip = 62; continue _fun5107 }
case 41:
                    r1 = global;
                    r3 = r1.clearTimeout;
                    r2 = r0.longPressDelayTimeout;
                    r1 = undefined;
                    r1 = r3.bind(r1)(r2);
case 62:
                    r1 = r0.pressOutDelayTimeout;
                    if(!r1) { _fun5107_ip = 92; continue _fun5107 }
case 71:
                    r1 = global;
                    r2 = r1.clearTimeout;
                    r1 = r0.pressOutDelayTimeout;
                    r0 = undefined;
                    r0 = r2.bind(r0)(r1);
case 92:
                    r0 = undefined;
                    return r0;
                }
            };
            r4['componentWillUnmount'] = r5;
            r5 = function() { // Original name: touchableGetInitialState, environment: r3
                r0 = {};
                r1 = {};
                r2 = undefined;
                r1['touchState'] = r2;
                r2 = null;
                r1['responderID'] = r2;
                r0['touchable'] = r1;
                return r0;
            };
            r4['touchableGetInitialState'] = r5;
            r5 = function() { // Original name: touchableHandleResponderTerminationRequest, environment: r3
                r0 = this;
                r0 = r0.props;
                r0 = r0.rejectResponderTermination;
                r0 = !r0;
                return r0;
            };
            r4['touchableHandleResponderTerminationRequest'] = r5;
            r5 = function() { // Original name: touchableHandleStartShouldSetResponder, environment: r3
                r0 = this;
                r0 = r0.props;
                r0 = r0.disabled;
                r0 = !r0;
                return r0;
            };
            r4['touchableHandleStartShouldSetResponder'] = r5;
            r5 = function() { // Original name: touchableLongPressCancelsPress, environment: r3
                r0 = true;
                return r0;
            };
            r4['touchableLongPressCancelsPress'] = r5;
            r5 = function(a0) { // Original name: touchableHandleResponderGrant, environment: r3
                _fun5112: for(var _fun5112_ip = 0; ; ) switch(_fun5112_ip) {
case 0:
                    r7 = a0;
                    r2 = this;
                    r3 = r7.currentTarget;
                    r0 = r7.persist;
                    r0 = r0.bind(r7)();
                    r0 = r2.pressOutDelayTimeout;
                    if(!r0) { _fun5112_ip = 51; continue _fun5112 }
case 30:
                    r0 = global;
                    r4 = r0.clearTimeout;
                    r1 = r2.pressOutDelayTimeout;
                    r0 = undefined;
                    r0 = r4.bind(r0)(r1);
case 51:
                    r0 = null;
                    r2['pressOutDelayTimeout'] = r0;
                    r0 = r2.state;
                    r4 = r0.touchable;
                    r1 = _closure1_slot6;
                    r1 = r1.NOT_RESPONDER;
                    r4['touchState'] = r1;
                    r1 = r2.state;
                    r1 = r1.touchable;
                    r1['responderID'] = r3;
                    r1 = r2._receiveSignal;
                    r0 = _closure1_slot10;
                    r0 = r0.RESPONDER_GRANT;
                    r0 = r1.bind(r2)(r0, r7);
                    r3 = r2.touchableGetHighlightDelayMS;
                    r1 = 130;
                    r0 = undefined;
                    r5 = r1;
                    if(!(r3 !== r0)) { _fun5112_ip = 177; continue _fun5112 }
case 146:
                    r3 = global;
                    r8 = r3.Math;
                    r6 = r8.max;
                    r3 = r2.touchableGetHighlightDelayMS;
                    r4 = r3.bind(r2)();
                    r3 = 0;
                    r5 = r6.bind(r8)(r4, r3);
case 177:
                    r3 = global;
                    r4 = r3.isNaN;
                    r4 = r4.bind(r0)(r5);
                    if(!r4) { _fun5112_ip = 196; continue _fun5112 }
case 193:
                    r5 = r1;
case 196:
                    r1 = 0;
                    if(!(r5 === r1)) { _fun5112_ip = 215; continue _fun5112 }
case 202:
                    r1 = r2._handleDelay;
                    r1 = r1.bind(r2)(r7);
                    _fun5112_ip = 250; continue _fun5112;
case 215:
                    r4 = r3.setTimeout;
                    r6 = r2._handleDelay;
                    r1 = r6.bind;
                    r1 = r1.bind(r6)(r2, r7);
                    r1 = r4.bind(r0)(r1, r5);
                    r2['touchableDelayTimeout'] = r1;
case 250:
                    r6 = r2.touchableGetLongPressDelayMS;
                    r4 = 370;
                    r1 = r4;
                    if(!(r6 !== r0)) { _fun5112_ip = 299; continue _fun5112 }
case 269:
                    r10 = r3.Math;
                    r9 = r10.max;
                    r6 = r2.touchableGetLongPressDelayMS;
                    r8 = r6.bind(r2)();
                    r6 = 10;
                    r1 = r9.bind(r10)(r8, r6);
case 299:
                    r6 = r3.isNaN;
                    r6 = r6.bind(r0)(r1);
                    if(!r6) { _fun5112_ip = 316; continue _fun5112 }
case 313:
                    r1 = r4;
case 316:
                    r4 = r3.setTimeout;
                    r6 = r2._handleLongDelay;
                    r3 = r6.bind;
                    r3 = r3.bind(r6)(r2, r7);
                    r1 = r1 + r5;
                    r1 = r4.bind(r0)(r3, r1);
                    r2['longPressDelayTimeout'] = r1;
                    return r0;
                }
            };
            r4['touchableHandleResponderGrant'] = r5;
            r5 = function(a0) { // Original name: touchableHandleResponderRelease, environment: r3
                r3 = this;
                r0 = null;
                r3['pressInLocation'] = r0;
                r2 = r3._receiveSignal;
                r0 = _closure1_slot10;
                r1 = r0.RESPONDER_RELEASE;
                r0 = a0;
                r0 = r2.bind(r3)(r1, r0);
                r0 = undefined;
                return r0;
            };
            r4['touchableHandleResponderRelease'] = r5;
            r5 = function(a0) { // Original name: touchableHandleResponderTerminate, environment: r3
                r3 = this;
                r0 = null;
                r3['pressInLocation'] = r0;
                r2 = r3._receiveSignal;
                r0 = _closure1_slot10;
                r1 = r0.RESPONDER_TERMINATED;
                r0 = a0;
                r0 = r2.bind(r3)(r1, r0);
                r0 = undefined;
                return r0;
            };
            r4['touchableHandleResponderTerminate'] = r5;
            r5 = function(a0) { // Original name: touchableHandleResponderMove, environment: r3
                _fun5115: for(var _fun5115_ip = 0; ; ) switch(_fun5115_ip) {
case 0:
                    r6 = a0;
                    r2 = this;
                    r0 = r2.state;
                    r0 = r0.touchable;
                    r0 = r0.positionOnActivate;
                    if(r0) { _fun5115_ip = 29; continue _fun5115 }
case 25:
                    r0 = undefined;
                    return r0;
case 29:
                    r0 = r2.state;
                    r0 = r0.touchable;
                    r8 = r0.positionOnActivate;
                    r0 = r2.state;
                    r0 = r0.touchable;
                    r4 = r0.dimensionsOnActivate;
                    r0 = r2.touchableGetPressRectOffset;
                    if(r0) { _fun5115_ip = 84; continue _fun5115 }
case 72:
                    r0 = {'left': 20, 'right': 20, 'top': 20, 'bottom': 20};
                    _fun5115_ip = 94; continue _fun5115;
case 84:
                    r1 = r2.touchableGetPressRectOffset;
                    r0 = r1.bind(r2)();
case 94:
                    r5 = r0.left;
                    r3 = r0.top;
                    r13 = r0.right;
                    r10 = r0.bottom;
                    r1 = r2.touchableGetHitSlop;
                    r0 = null;
                    if(!r1) { _fun5115_ip = 135; continue _fun5115 }
case 125:
                    r1 = r2.touchableGetHitSlop;
                    r0 = r1.bind(r2)();
case 135:
                    r9 = r5;
                    r12 = r3;
                    r11 = r13;
                    r7 = r10;
                    if(!r0) { _fun5115_ip = 215; continue _fun5115 }
case 150:
                    r1 = r0.left;
                    if(r1) { _fun5115_ip = 160; continue _fun5115 }
case 158:
                    r1 = 0;
case 160:
                    r5 = r5 + r1;
                    r1 = r0.top;
                    if(r1) { _fun5115_ip = 174; continue _fun5115 }
case 172:
                    r1 = 0;
case 174:
                    r3 = r3 + r1;
                    r1 = r0.right;
                    if(r1) { _fun5115_ip = 188; continue _fun5115 }
case 186:
                    r1 = 0;
case 188:
                    r1 = r13 + r1;
                    r0 = r0.bottom;
                    if(r0) { _fun5115_ip = 202; continue _fun5115 }
case 200:
                    r0 = 0;
case 202:
                    r7 = r10 + r0;
                    r9 = r5;
                    r12 = r3;
                    r11 = r1;
case 215:
                    r5 = _closure1_slot5;
                    r3 = r6.nativeEvent;
                    r0 = undefined;
                    r3 = r5.bind(r0)(r3);
                    r10 = r3;
                    if(!r3) { _fun5115_ip = 245; continue _fun5115 }
case 240:
                    r10 = r3.pageX;
case 245:
                    r5 = r3;
                    if(!r5) { _fun5115_ip = 256; continue _fun5115 }
case 251:
                    r5 = r3.pageY;
case 256:
                    r3 = r2.pressInLocation;
                    if(!r3) { _fun5115_ip = 323; continue _fun5115 }
case 265:
                    r14 = r2._getDistanceBetweenPoints;
                    r3 = r2.pressInLocation;
                    r16 = r3.pageX;
                    r3 = r2.pressInLocation;
                    r15 = r3.pageY;
                    r19 = r2;
                    r18 = r10;
                    r17 = r5;
                    r13 = r19[r14](r18, r17, r16, r15, r14);
                    r3 = 10;
                    if(!(r13 > r3)) { _fun5115_ip = 323; continue _fun5115 }
case 313:
                    r3 = r2._cancelLongPressDelayTimeout;
                    r3 = r3.bind(r2)();
case 323:
                    r3 = r8.left;
                    r3 = r3 - r9;
                    r3 = r10 > r3;
                    if(!r3) { _fun5115_ip = 352; continue _fun5115 }
case 339:
                    r9 = r8.top;
                    r9 = r9 - r12;
                    r3 = r5 > r9;
case 352:
                    if(!r3) { _fun5115_ip = 377; continue _fun5115 }
case 355:
                    r12 = r8.left;
                    r9 = r4.width;
                    r9 = r12 + r9;
                    r9 = r9 + r11;
                    r3 = r10 < r9;
case 377:
                    if(!r3) { _fun5115_ip = 402; continue _fun5115 }
case 380:
                    r8 = r8.top;
                    r4 = r4.height;
                    r4 = r8 + r4;
                    r4 = r4 + r7;
                    r3 = r5 < r4;
case 402:
                    if(r3) { _fun5115_ip = 439; continue _fun5115 }
case 405:
                    r3 = r2._cancelLongPressDelayTimeout;
                    r3 = r3.bind(r2)();
                    r4 = r2._receiveSignal;
                    r3 = _closure1_slot10;
                    r3 = r3.LEAVE_PRESS_RECT;
                    r3 = r4.bind(r2)(r3, r6);
                    _fun5115_ip = 533; continue _fun5115;
case 439:
                    r3 = r2.state;
                    r3 = r3.touchable;
                    r3 = r3.touchState;
                    r5 = r2._receiveSignal;
                    r4 = _closure1_slot10;
                    r4 = r4.ENTER_PRESS_RECT;
                    r4 = r5.bind(r2)(r4, r6);
                    r4 = r2.state;
                    r4 = r4.touchable;
                    r5 = r4.touchState;
                    r4 = _closure1_slot6;
                    r4 = r4.RESPONDER_INACTIVE_PRESS_IN;
                    if(!(r5 === r4)) { _fun5115_ip = 533; continue _fun5115 }
case 509:
                    r1 = _closure1_slot6;
                    r1 = r1.RESPONDER_INACTIVE_PRESS_IN;
                    if(!(r3 !== r1)) { _fun5115_ip = 533; continue _fun5115 }
case 523:
                    r1 = r2._cancelLongPressDelayTimeout;
                    r1 = r1.bind(r2)();
case 533:
                    return r0;
                }
            };
            r4['touchableHandleResponderMove'] = r5;
            r5 = function(a0) { // Original name: touchableHandleFocus, environment: r3
                _fun5116: for(var _fun5116_ip = 0; ; ) switch(_fun5116_ip) {
case 0:
                    r0 = this;
                    r1 = r0.props;
                    r1 = r1.onFocus;
                    if(!r1) { _fun5116_ip = 35; continue _fun5116 }
case 16:
                    r2 = r0.props;
                    r1 = r2.onFocus;
                    r0 = a0;
                    r0 = r1.bind(r2)(r0);
case 35:
                    r0 = undefined;
                    return r0;
                }
            };
            r4['touchableHandleFocus'] = r5;
            r5 = function(a0) { // Original name: touchableHandleBlur, environment: r3
                _fun5117: for(var _fun5117_ip = 0; ; ) switch(_fun5117_ip) {
case 0:
                    r0 = this;
                    r1 = r0.props;
                    r1 = r1.onBlur;
                    if(!r1) { _fun5117_ip = 35; continue _fun5117 }
case 16:
                    r2 = r0.props;
                    r1 = r2.onBlur;
                    r0 = a0;
                    r0 = r1.bind(r2)(r0);
case 35:
                    r0 = undefined;
                    return r0;
                }
            };
            r4['touchableHandleBlur'] = r5;
            r5 = function() { // Original name: _remeasureMetricsOnActivation, environment: r3
                _fun5118: for(var _fun5118_ip = 0; ; ) switch(_fun5118_ip) {
case 0:
                    r0 = this;
                    r1 = r0.state;
                    r1 = r1.touchable;
                    r3 = r1.responderID;
                    r1 = null;
                    if(!(r3 != r1)) { _fun5118_ip = 89; continue _fun5118 }
case 25:
                    r2 = typeof r3;
                    r1 = 'number';
                    if(!(r2 !== r1)) { _fun5118_ip = 55; continue _fun5118 }
case 36:
                    r2 = r3.measure;
                    r1 = r0._handleQueryLayout;
                    r1 = r2.bind(r3)(r1);
                    _fun5118_ip = 85; continue _fun5118;
case 55:
                    r1 = _closure1_slot0;
                    r2 = r1.default;
                    r1 = r2.measure;
                    r0 = r0._handleQueryLayout;
                    r0 = r1.bind(r2)(r3, r0);
case 85:
                    r0 = undefined;
                    return r0;
case 89:
                    r0 = undefined;
                    return r0;
                }
            };
            r4['_remeasureMetricsOnActivation'] = r5;
            r5 = function(a0, a1, a2, a3, a4, a5) { // Original name: _handleQueryLayout, environment: r3
                _fun5119: for(var _fun5119_ip = 0; ; ) switch(_fun5119_ip) {
case 0:
                    r4 = a2;
                    r3 = a3;
                    r8 = a4;
                    r7 = a5;
                    r1 = this;
                    r0 = a0;
                    if(r0) { _fun5119_ip = 42; continue _fun5119 }
case 20:
                    r0 = a1;
                    if(r0) { _fun5119_ip = 42; continue _fun5119 }
case 26:
                    if(r4) { _fun5119_ip = 42; continue _fun5119 }
case 29:
                    if(r3) { _fun5119_ip = 42; continue _fun5119 }
case 32:
                    if(r8) { _fun5119_ip = 42; continue _fun5119 }
case 35:
                    if(r7) { _fun5119_ip = 42; continue _fun5119 }
case 38:
                    r0 = undefined;
                    return r0;
case 42:
                    r0 = r1.state;
                    r0 = r0.touchable;
                    r0 = r0.positionOnActivate;
                    if(!r0) { _fun5119_ip = 102; continue _fun5119 }
case 62:
                    r0 = _closure1_slot4;
                    r5 = r0.default;
                    r2 = r5.release;
                    r0 = r1.state;
                    r0 = r0.touchable;
                    r0 = r0.positionOnActivate;
                    r0 = r2.bind(r5)(r0);
case 102:
                    r0 = r1.state;
                    r0 = r0.touchable;
                    r0 = r0.dimensionsOnActivate;
                    if(!r0) { _fun5119_ip = 162; continue _fun5119 }
case 122:
                    r0 = _closure1_slot3;
                    r5 = r0.default;
                    r2 = r5.release;
                    r0 = r1.state;
                    r0 = r0.touchable;
                    r0 = r0.dimensionsOnActivate;
                    r0 = r2.bind(r5)(r0);
case 162:
                    r0 = r1.state;
                    r5 = r0.touchable;
                    r2 = _closure1_slot4;
                    r6 = r2.default;
                    r2 = r6.getPooled;
                    r2 = r2.bind(r6)(r8, r7);
                    r5['positionOnActivate'] = r2;
                    r1 = r1.state;
                    r1 = r1.touchable;
                    r0 = _closure1_slot3;
                    r2 = r0.default;
                    r0 = r2.getPooled;
                    r0 = r0.bind(r2)(r4, r3);
                    r1['dimensionsOnActivate'] = r0;
                    r0 = undefined;
                    return r0;
                }
            };
            r4['_handleQueryLayout'] = r5;
            r5 = function(a0) { // Original name: _handleDelay, environment: r3
                r3 = this;
                r0 = null;
                r3['touchableDelayTimeout'] = r0;
                r2 = r3._receiveSignal;
                r0 = _closure1_slot10;
                r1 = r0.DELAY;
                r0 = a0;
                r0 = r2.bind(r3)(r1, r0);
                r0 = undefined;
                return r0;
            };
            r4['_handleDelay'] = r5;
            r5 = function(a0) { // Original name: _handleLongDelay, environment: r3
                _fun5121: for(var _fun5121_ip = 0; ; ) switch(_fun5121_ip) {
case 0:
                    r3 = this;
                    r0 = null;
                    r3['longPressDelayTimeout'] = r0;
                    r0 = r3.state;
                    r0 = r0.touchable;
                    r2 = r0.touchState;
                    r1 = _closure1_slot6;
                    r1 = r1.RESPONDER_ACTIVE_PRESS_IN;
                    if(!(r2 !== r1)) { _fun5121_ip = 58; continue _fun5121 }
case 44:
                    r1 = _closure1_slot6;
                    r1 = r1.RESPONDER_ACTIVE_LONG_PRESS_IN;
                    if(!(r2 === r1)) { _fun5121_ip = 83; continue _fun5121 }
case 58:
                    r2 = r3._receiveSignal;
                    r0 = _closure1_slot10;
                    r1 = r0.LONG_PRESS_DETECTED;
                    r0 = a0;
                    r0 = r2.bind(r3)(r1, r0);
case 83:
                    r0 = undefined;
                    return r0;
                }
            };
            r4['_handleLongDelay'] = r5;
            r5 = function(a0, a1) { // Original name: _receiveSignal, environment: r3
                _fun5122: for(var _fun5122_ip = 0; ; ) switch(_fun5122_ip) {
case 0:
                    r3 = a0;
                    r1 = this;
                    r0 = r1.state;
                    r0 = r0.touchable;
                    r5 = r0.responderID;
                    r0 = r1.state;
                    r0 = r0.touchable;
                    r4 = r0.touchState;
                    r2 = _closure1_slot11;
                    r2 = r2[r4];
                    if(!r2) { _fun5122_ip = 65; continue _fun5122 }
case 53:
                    r6 = _closure1_slot11;
                    r6 = r6[r4];
                    r2 = r6[r3];
case 65:
                    if(r5) { _fun5122_ip = 86; continue _fun5122 }
case 68:
                    r5 = _closure1_slot10;
                    r5 = r5.RESPONDER_RELEASE;
                    if(!(r3 === r5)) { _fun5122_ip = 86; continue _fun5122 }
case 82:
                    r5 = undefined;
                    return r5;
case 86:
                    if(r2) { _fun5122_ip = 203; continue _fun5122 }
case 89:
                    r5 = global;
                    r7 = r5.Error;
                    r5 = 'Unrecognized signal `';
                    r6 = r5 + r3;
                    r5 = '` or state `';
                    r5 = r6 + r5;
                    r9 = r5 + r4;
                    r5 = r1.state;
                    r5 = r5.touchable;
                    r6 = r5.responderID;
                    r5 = 'host component`';
                    r8 = '` for Touchable responder `';
                    r8 = r9 + r8;
                    r6 = typeof r6;
                    r8 = r8 + r6;
                    r6 = 'number';
                    if(!(r8 === r6)) { _fun5122_ip = 178; continue _fun5122 }
case 161:
                    r6 = r1.state;
                    r6 = r6.touchable;
                    r5 = r6.responderID;
case 178:
                    r6 = r7.prototype;
                    r6 = Object.create(r6, {constructor: {value: r7}});
                    r14 = r6;
                    r13 = r5;
                    r5 = new r14[r7](r13, r12);
                    r5 = r5 instanceof Object ? r5 : r6;
                    throw r5;
case 203:
                    r0 = _closure1_slot6;
                    r0 = r0.ERROR;
                    if(!(r2 !== r0)) { _fun5122_ip = 267; continue _fun5122 }
case 217:
                    if(!(r4 !== r2)) { _fun5122_ip = 263; continue _fun5122 }
case 221:
                    r5 = r1._performSideEffectsForTransition;
                    r10 = a1;
                    r14 = r1;
                    r13 = r4;
                    r12 = r2;
                    r11 = r3;
                    r0 = r14[r5](r13, r12, r11, r10, r9);
                    r0 = r1.state;
                    r0 = r0.touchable;
                    r0['touchState'] = r2;
case 263:
                    r0 = undefined;
                    return r0;
case 267:
                    r0 = global;
                    r2 = r0.Error;
                    r0 = 'Touchable cannot transition from `';
                    r4 = r0 + r4;
                    r0 = '` to `';
                    r0 = r4 + r0;
                    r5 = r0 + r3;
                    r0 = r1.state;
                    r0 = r0.touchable;
                    r3 = r0.responderID;
                    r0 = '<<host component>>`';
                    r4 = '` for responder `';
                    r4 = r5 + r4;
                    r3 = typeof r3;
                    r4 = r4 + r3;
                    r3 = 'number';
                    if(!(r4 === r3)) { _fun5122_ip = 356; continue _fun5122 }
case 339:
                    r1 = r1.state;
                    r1 = r1.touchable;
                    r0 = r1.responderID;
case 356:
                    r1 = r2.prototype;
                    r1 = Object.create(r1, {constructor: {value: r2}});
                    r14 = r1;
                    r13 = r0;
                    r0 = new r14[r2](r13, r12);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                }
            };
            r4['_receiveSignal'] = r5;
            r5 = function() { // Original name: _cancelLongPressDelayTimeout, environment: r3
                _fun5123: for(var _fun5123_ip = 0; ; ) switch(_fun5123_ip) {
case 0:
                    r1 = this;
                    r0 = r1.longPressDelayTimeout;
                    if(!r0) { _fun5123_ip = 32; continue _fun5123 }
case 11:
                    r0 = global;
                    r3 = r0.clearTimeout;
                    r2 = r1.longPressDelayTimeout;
                    r0 = undefined;
                    r0 = r3.bind(r0)(r2);
case 32:
                    r0 = null;
                    r1['longPressDelayTimeout'] = r0;
                    r0 = undefined;
                    return r0;
                }
            };
            r4['_cancelLongPressDelayTimeout'] = r5;
            r5 = function(a0) { // Original name: _isHighlight, environment: r3
                _fun5124: for(var _fun5124_ip = 0; ; ) switch(_fun5124_ip) {
case 0:
                    r2 = a0;
                    r0 = _closure1_slot6;
                    r0 = r0.RESPONDER_ACTIVE_PRESS_IN;
                    r0 = r2 === r0;
                    if(r0) { _fun5124_ip = 37; continue _fun5124 }
case 23:
                    r1 = _closure1_slot6;
                    r1 = r1.RESPONDER_ACTIVE_LONG_PRESS_IN;
                    r0 = r2 === r1;
case 37:
                    return r0;
                }
            };
            r4['_isHighlight'] = r5;
            r5 = function(a0) { // Original name: _savePressInLocation, environment: r3
                _fun5125: for(var _fun5125_ip = 0; ; ) switch(_fun5125_ip) {
case 0:
                    r2 = _closure1_slot5;
                    r0 = a0;
                    r1 = r0.nativeEvent;
                    r0 = undefined;
                    r2 = r2.bind(r0)(r1);
                    r5 = r2;
                    if(!r2) { _fun5125_ip = 33; continue _fun5125 }
case 28:
                    r5 = r2.pageX;
case 33:
                    r4 = r2;
                    if(!r2) { _fun5125_ip = 44; continue _fun5125 }
case 39:
                    r4 = r2.pageY;
case 44:
                    r3 = r2;
                    if(!r2) { _fun5125_ip = 56; continue _fun5125 }
case 50:
                    r3 = r2.locationX;
case 56:
                    r1 = r2;
                    if(!r1) { _fun5125_ip = 68; continue _fun5125 }
case 62:
                    r1 = r2.locationY;
case 68:
                    r2 = {};
                    r2['pageX'] = r5;
                    r2['pageY'] = r4;
                    r2['locationX'] = r3;
                    r2['locationY'] = r1;
                    r1 = this;
                    r1['pressInLocation'] = r2;
                    return r0;
                }
            };
            r4['_savePressInLocation'] = r5;
            r5 = function(a0, a1, a2, a3) { // Original name: _getDistanceBetweenPoints, environment: r3
                r1 = a0;
                r0 = a2;
                r3 = r1 - r0;
                r1 = a1;
                r0 = a3;
                r0 = r1 - r0;
                r1 = global;
                r2 = r1.Math;
                r1 = r2.sqrt;
                r3 = r3 * r3;
                r0 = r0 * r0;
                r0 = r3 + r0;
                r0 = r1.bind(r2)(r0);
                return r0;
            };
            r4['_getDistanceBetweenPoints'] = r5;
            r5 = function(a0, a1, a2, a3) { // Original name: _performSideEffectsForTransition, environment: r3
                _fun5127: for(var _fun5127_ip = 0; ; ) switch(_fun5127_ip) {
case 0:
                    r7 = a0;
                    r10 = a1;
                    r6 = a2;
                    r2 = a3;
                    r1 = this;
                    r0 = r1._isHighlight;
                    r3 = r0.bind(r1)(r7);
                    r0 = r1._isHighlight;
                    r4 = r0.bind(r1)(r10);
                    r5 = _closure1_slot10;
                    r5 = r5.RESPONDER_TERMINATED;
                    r5 = r6 === r5;
                    if(r5) { _fun5127_ip = 70; continue _fun5127 }
case 56:
                    r8 = _closure1_slot10;
                    r8 = r8.RESPONDER_RELEASE;
                    r5 = r6 === r8;
case 70:
                    if(!r5) { _fun5127_ip = 83; continue _fun5127 }
case 73:
                    r5 = r1._cancelLongPressDelayTimeout;
                    r5 = r5.bind(r1)();
case 83:
                    r5 = _closure1_slot6;
                    r5 = r5.NOT_RESPONDER;
                    r8 = r7 === r5;
                    if(!r8) { _fun5127_ip = 114; continue _fun5127 }
case 100:
                    r5 = _closure1_slot6;
                    r5 = r5.RESPONDER_INACTIVE_PRESS_IN;
                    r8 = r10 === r5;
case 114:
                    r5 = _closure1_slot7;
                    r5 = r5[r7];
                    r5 = !r5;
                    if(!r5) { _fun5127_ip = 136; continue _fun5127 }
case 128:
                    r9 = _closure1_slot7;
                    r5 = r9[r10];
case 136:
                    if(r8) { _fun5127_ip = 142; continue _fun5127 }
case 139:
                    if(!r5) { _fun5127_ip = 152; continue _fun5127 }
case 142:
                    r5 = r1._remeasureMetricsOnActivation;
                    r5 = r5.bind(r1)();
case 152:
                    r5 = _closure1_slot8;
                    r5 = r5[r7];
                    if(!r5) { _fun5127_ip = 197; continue _fun5127 }
case 163:
                    r5 = _closure1_slot10;
                    r5 = r5.LONG_PRESS_DETECTED;
                    if(!(r6 === r5)) { _fun5127_ip = 197; continue _fun5127 }
case 177:
                    r5 = r1.touchableHandleLongPress;
                    if(!r5) { _fun5127_ip = 197; continue _fun5127 }
case 186:
                    r5 = r1.touchableHandleLongPress;
                    r5 = r5.bind(r1)(r2);
case 197:
                    if(!r4) { _fun5127_ip = 216; continue _fun5127 }
case 200:
                    if(r3) { _fun5127_ip = 216; continue _fun5127 }
case 203:
                    r5 = r1._startHighlight;
                    r5 = r5.bind(r1)(r2);
                    _fun5127_ip = 233; continue _fun5127;
case 216:
                    if(r4) { _fun5127_ip = 233; continue _fun5127 }
case 219:
                    if(!r3) { _fun5127_ip = 233; continue _fun5127 }
case 222:
                    r5 = r1._endHighlight;
                    r5 = r5.bind(r1)(r2);
case 233:
                    r5 = _closure1_slot8;
                    r5 = r5[r7];
                    if(!r5) { _fun5127_ip = 437; continue _fun5127 }
case 247:
                    r5 = _closure1_slot10;
                    r5 = r5.RESPONDER_RELEASE;
                    if(!(r6 === r5)) { _fun5127_ip = 437; continue _fun5127 }
case 264:
                    r5 = r1.props;
                    r5 = r5.onLongPress;
                    r8 = !r5;
                    r5 = _closure1_slot9;
