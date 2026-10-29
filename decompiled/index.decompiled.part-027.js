                                    r3 = r3.default;
                                    r5 = r3.loadFontWithFileName;
                                    r4 = r5.apply;
                                    r3 = _closure1_slot14;
                                    r3 = r3.default;
                                    r1 = _closure1_slot0;
                                    r6 = r1.default;
                                    r7 = r8.split;
                                    r1 = '.';
                                    r1 = r7.bind(r8)(r1);
                                    r1 = r6.bind(r2)(r1);
                                    r1 = r4.bind(r5)(r3, r1);
                                    SaveGenerator(address=189);
case 187:
                                    return r1;
case 189:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                    if(r3) { _fun5596_ip = 198; continue _fun5596 }
case 195:
                                    return r2;
case 198:
                                    return r1;
case 201:
                                    return r0;
                                }
                            };
                            return r0;
                        };
                        r3 = r2.bind(r3)(r1);
                        _closure2_slot7 = r3;
                        r2 = r3.apply;
                        r0 = arguments;
                        r1 = r0;
                        r0 = this;
                        r0 = r2.bind(r3)(r0, r1);
                        return r0;
                    };
                    var _closure2_slot7 = r0;
                    r8 = r7;
                    if(!r12) { _fun5586_ip = 88; continue _fun5586 }
case 59:
                    r3 = r12.replace;
                    r2 = /\.(otf|ttf)$/;
                    r0 = '';
                    r8 = r3.bind(r12)(r2, r0);
case 88:
                    r0 = _closure1_slot10;
                    r5 = r0.Platform;
                    r4 = r5.select;
                    r3 = {};
                    r0 = global;
                    r9 = r0.HermesInternal;
                    r11 = r9.concat;
                    r10 = '/Assets/';
                    r9 = '#';
                    r9 = r11.bind(r10)(r12, r9, r7);
                    r3['windows'] = r9;
                    r3['android'] = r8;
                    r3['web'] = r8;
                    r3['default'] = r7;
                    r3 = r4.bind(r5)(r3);
                    var _closure2_slot3 = r3;
                    r3 = _closure1_slot9;
                    r4 = r3.default;
                    r3 = r4.oneOf;
                    r5 = r0.Object;
                    r0 = r5.keys;
                    r0 = r0.bind(r5)(r6);
                    r5 = r3.bind(r4)(r0);
                    r0 = _closure1_slot8;
                    r4 = r0.PureComponent;
                    r0 = function(a0) { // Environment: r1
                        r3 = function() { // Original name: Icon, environment: r0
                            r4 = this;
                            r3 = undefined;
                            r0 = undefined;
                            r2 = _closure1_slot3;
                            r5 = r2.default;
                            r2 = _closure3_slot0;
                            r5 = r5.bind(r3)(r4, r2);
                            r1 = _closure1_slot20;
                            r0 = arguments;
                            r0 = r1.bind(r3)(r4, r2, r0);
                            return r0;
                        };
                        var _closure3_slot0 = r3;
                        r2 = _closure1_slot7;
                        r5 = r2.default;
                        r2 = undefined;
                        r4 = a0;
                        r4 = r5.bind(r2)(r3, r4);
                        r1 = _closure1_slot4;
                        r1 = r1.default;
                        r4 = {};
                        r5 = 'render';
                        r4['key'] = r5;
                        r0 = function() { // Original name: render, environment: r0
                            _fun5602: for(var _fun5602_ip = 0; ; ) switch(_fun5602_ip) {
case 0:
                                r0 = this;
                                r8 = r0.props;
                                r6 = r8.name;
                                r2 = r8.size;
                                r1 = r8.color;
                                r5 = r8.style;
                                r9 = r8.children;
                                r3 = _closure1_slot2;
                                r7 = r3.default;
                                r4 = _closure1_slot16;
                                r3 = undefined;
                                r7 = r7.bind(r3)(r8, r4);
                                r8 = '';
                                if(!r6) { _fun5602_ip = 84; continue _fun5602 }
case 63:
                                r4 = _closure2_slot0;
                                r4 = r4[r6];
                                if(r4) { _fun5602_ip = 81; continue _fun5602 }
case 77:
                                r4 = '?';
case 81:
                                r8 = r4;
case 84:
                                r6 = typeof r8;
                                r4 = 'number';
                                r10 = r8;
                                if(!(r6 === r4)) { _fun5602_ip = 117; continue _fun5602 }
case 98:
                                r4 = global;
                                r6 = r4.String;
                                r4 = r6.fromCodePoint;
                                r10 = r4.bind(r6)(r8);
case 117:
                                r6 = {};
                                r6['fontSize'] = r2;
                                r6['color'] = r1;
                                r4 = {'fontFamily': null, 'fontWeight': 'normal', 'fontStyle': 'normal'};
                                r1 = _closure2_slot3;
                                r4['fontFamily'] = r1;
                                r1 = new Array(4);
                                r1[0] = r6;
                                r1[1] = r5;
                                r1[2] = r4;
                                r2 = _closure2_slot2;
                                if(r2) { _fun5602_ip = 176; continue _fun5602 }
case 174:
                                r2 = {};
case 176:
                                r1[3] = r2;
                                r7['style'] = r1;
                                r1 = _closure1_slot15;
                                r2 = r1.jsxs;
                                r0 = _closure1_slot10;
                                r1 = r0.Text;
                                r0 = global;
                                r6 = r0.Object;
                                r5 = r6.assign;
                                r4 = {};
                                r0 = false;
                                r4['selectable'] = r0;
                                r0 = {};
                                r8 = new Array(2);
                                r8[0] = r10;
                                r8[1] = r9;
                                r0['children'] = r8;
                                r0 = r5.bind(r6)(r4, r7, r0);
                                r0 = r2.bind(r3)(r1, r0);
                                return r0;
                            }
                        };
                        r4['value'] = r0;
                        r0 = new Array(1);
                        r0[0] = r4;
                        r0 = r1.bind(r2)(r3, r0);
                        return r0;
                    };
                    r3 = undefined;
                    r0 = r0.bind(r3)(r4);
                    r4 = {};
                    r6 = _closure1_slot9;
                    r6 = r6.default;
                    r6 = r6.bool;
                    r4['allowFontScaling'] = r6;
                    r4['name'] = r5;
                    r5 = _closure1_slot9;
                    r5 = r5.default;
                    r5 = r5.number;
                    r4['size'] = r5;
                    r5 = _closure1_slot9;
                    r5 = r5.default;
                    r5 = r5.any;
                    r4['color'] = r5;
                    r5 = _closure1_slot9;
                    r5 = r5.default;
                    r5 = r5.node;
                    r4['children'] = r5;
                    r5 = _closure1_slot9;
                    r5 = r5.default;
                    r5 = r5.any;
                    r4['style'] = r5;
                    r0['propTypes'] = r4;
                    r4 = {};
                    r5 = _closure1_slot17;
                    r4['size'] = r5;
                    r5 = false;
                    r4['allowFontScaling'] = r5;
                    r0['defaultProps'] = r4;
                    r4 = _closure1_slot12;
                    r4 = r4.default;
                    r4 = r4.bind(r3)();
                    var _closure2_slot4 = r4;
                    r2 = _closure1_slot13;
                    r2 = r2.default;
                    r2 = r2.bind(r3)(r0);
                    r0['Button'] = r2;
                    r2 = function(a0) { // Original name: getImageSource, environment: r1
                        r0 = undefined;
                        r3 = _closure2_slot6;
                        r2 = r3.apply;
                        r0 = arguments;
                        r1 = r0;
                        r0 = this;
                        r0 = r2.bind(r3)(r0, r1);
                        return r0;
                    };
                    r0['getImageSource'] = r2;
                    r2 = function(a0) { // Original name: getImageSourceSync, environment: r1
                        _fun5588: for(var _fun5588_ip = 0; ; ) switch(_fun5588_ip) {
case 0:
                            r8 = undefined;
                            r3 = undefined;
                            r4 = undefined;
                            r5 = undefined;
                            r2 = undefined;
                            r0 = undefined;
                            r1 = arguments.length;
                            r6 = 1;
                            if(!(r1 > r6)) { _fun5588_ip = 30; continue _fun5588 }
case 22:
                            r1 = arguments[r6];
                            if(!(r1 === r8)) { _fun5588_ip = 39; continue _fun5588 }
case 30:
                            r1 = _closure1_slot17;
                            _fun5588_ip = 43; continue _fun5588;
case 39:
                            r1 = arguments[r6];
case 43:
                            r4 = r1;
                            r6 = arguments.length;
                            r1 = 2;
                            if(!(r6 > r1)) { _fun5588_ip = 64; continue _fun5588 }
case 56:
                            r6 = arguments[r1];
                            if(!(r6 === r8)) { _fun5588_ip = 73; continue _fun5588 }
case 64:
                            r7 = _closure1_slot18;
                            _fun5588_ip = 77; continue _fun5588;
case 73:
                            r7 = arguments[r1];
case 77:
                            r1 = _closure1_slot11;
                            r1 = r1.default;
                            r1 = r1.bind(r8)();
                            r9 = _closure2_slot5;
                            r6 = a0;
                            r11 = r9.bind(r8)(r6);
                            r5 = r11;
                            r6 = _closure1_slot10;
                            r6 = r6.processColor;
                            r10 = r6.bind(r8)(r7);
                            r2 = r10;
                            r14 = r4;
                            r6 = global;
                            r6 = r6.HermesInternal;
                            r8 = r6.concat;
                            r17 = '';
                            r6 = ':';
                            r16 = r11;
                            r15 = r6;
                            r13 = r6;
                            r12 = r10;
                            r8 = r17[r8](r16, r15, r14, r13, r12, r11);
                            r0 = r8;
                            r7 = _closure2_slot4;
                            r6 = r7.has;
                            r6 = r6.bind(r7)(r8);
                            if(r6) { _fun5588_ip = 298; continue _fun5588 }
case 189: // try_start_0
                            r6 = _closure1_slot14;
                            r8 = r6.default;
                            r7 = r8.getImageForFontSync;
                            r16 = _closure2_slot3;
                            r15 = r5;
                            r14 = r4;
                            r13 = r2;
                            r17 = r8;
                            r4 = r17[r7](r16, r15, r14, r13, r12);
                            r2 = {};
                            r2['uri'] = r4;
                            r3 = _closure1_slot10;
                            r4 = r3.PixelRatio;
                            r3 = r4.get;
                            r3 = r3.bind(r4)();
                            r2['scale'] = r3;
                            r5 = _closure2_slot4;
                            r4 = r5.setValue;
                            r3 = r0;
                            r3 = r4.bind(r5)(r3, r2);
case 273: // try_end0
                            return r2;
case 275: // catch_target0
                            CatchBlockStart(arg_register=2);
                            r5 = _closure2_slot4;
                            r4 = r5.setError;
                            r3 = r0;
                            r3 = r4.bind(r5)(r3, r2);
                            throw r2;
case 298:
                            r2 = _closure2_slot4;
                            r1 = r2.get;
                            r0 = r1.bind(r2)(r0);
                            return r0;
                        }
                    };
                    r0['getImageSourceSync'] = r2;
                    r2 = function() { // Original name: loadFont, environment: r1
                        r0 = undefined;
                        r3 = _closure2_slot7;
                        r2 = r3.apply;
                        r0 = arguments;
                        r1 = r0;
                        r0 = this;
                        r0 = r2.bind(r3)(r0, r1);
                        return r0;
                    };
                    r0['loadFont'] = r2;
                    r2 = function(a0) { // Original name: hasIcon, environment: r1
                        r0 = global;
                        r0 = r0.Object;
                        r0 = r0.prototype;
                        r3 = r0.hasOwnProperty;
                        r2 = r3.call;
                        r1 = _closure2_slot0;
                        r0 = a0;
                        r0 = r2.bind(r3)(r1, r0);
                        return r0;
                    };
                    r0['hasIcon'] = r2;
                    r2 = function() { // Original name: getRawGlyphMap, environment: r1
                        r0 = _closure2_slot0;
                        return r0;
                    };
                    r0['getRawGlyphMap'] = r2;
                    r1 = function() { // Original name: getFontFamily, environment: r1
                        r0 = _closure2_slot3;
                        return r0;
                    };
                    r0['getFontFamily'] = r1;
                    return r0;
                }
            };
            r3['default'] = r1;
            r1 = 1;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot0 = r1;
            r1 = 2;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot1 = r1;
            r1 = 3;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot2 = r1;
            r1 = 4;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot3 = r1;
            r1 = 5;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot4 = r1;
            r1 = 6;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot5 = r1;
            r1 = 7;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot6 = r1;
            r1 = 8;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot7 = r1;
            r1 = 9;
            r1 = r6[r1];
            r8 = r5.bind(r0)(r1);
            if(!r8) { _fun5579_ip = 303; continue _fun5579 }
case 289:
            r4 = r8.__esModule;
            r1 = r8;
            if(r4) { _fun5579_ip = 570; continue _fun5579 }
case 303:
            r18 = null;
            if(!(r18 !== r8)) { _fun5579_ip = 561; continue _fun5579 }
case 312:
            r9 = typeof r8;
            r4 = 'object';
            if(!(r4 !== r9)) { _fun5579_ip = 334; continue _fun5579 }
case 323:
            r4 = 'function';
            if(!(r4 === r9)) { _fun5579_ip = 561; continue _fun5579 }
case 334:
            r4 = _closure1_slot19;
            r9 = r4.bind(r0)(r0);
            if(!r9) { _fun5579_ip = 362; continue _fun5579 }
case 346:
            r4 = r9.has;
            r4 = r4.bind(r9)(r8);
            if(r4) { _fun5579_ip = 549; continue _fun5579 }
case 362:
            r4 = Object.create(r18);
            r10 = r19.Object;
            r17 = r10.defineProperty;
            if(!r17) { _fun5579_ip = 390; continue _fun5579 }
case 379:
            r10 = r19.Object;
            r17 = r10.getOwnPropertyDescriptor;
case 390:
            r15 = r8;
            r11 = 'default';
            r10 = undefined;
            for(r12 in r15)
case 407:
            {
case 416:
                r23 = r12;
                if(r11 === r23) { _fun5579_ip = 407; continue _fun5579 }
case 423:
                r20 = {};
                r21 = r20.hasOwnProperty;
                r20 = r21.call;
                r20 = r20.bind(r21)(r8, r23);
                if(!r20) { _fun5579_ip = 407; continue _fun5579 }
case 444:
                r20 = null;
                if(!r17) { _fun5579_ip = 466; continue _fun5579 }
case 449:
                r22 = r19.Object;
                r21 = r22.getOwnPropertyDescriptor;
                r20 = r21.bind(r22)(r8, r23);
case 466:
                if(!r20) { _fun5579_ip = 485; continue _fun5579 }
case 469:
                r21 = r20.get;
                if(r21) { _fun5579_ip = 498; continue _fun5579 }
case 477:
                r21 = r20.set;
                if(r21) { _fun5579_ip = 498; continue _fun5579 }
case 485:
                r21 = r8[r23];
                r4[r23] = r21;
                r10 = r20;
                _fun5579_ip = 407; continue _fun5579;
case 498:
                r22 = r19.Object;
                r21 = r22.defineProperty;
                r21 = r21.bind(r22)(r4, r23, r20);
                r10 = r20;
                _fun5579_ip = 407; continue _fun5579;
            }
case 521:
            r4['default'] = r8;
            r1 = r4;
            if(!r9) { _fun5579_ip = 570; continue _fun5579 }
case 533:
            r10 = r9.set;
            r10 = r10.bind(r9)(r8, r4);
            r1 = r4;
            _fun5579_ip = 570; continue _fun5579;
case 549:
            r4 = r9.get;
            r1 = r4.bind(r9)(r8);
            _fun5579_ip = 570; continue _fun5579;
case 561:
            r4 = {};
            r4['default'] = r8;
            r1 = r4;
case 570:
            var _closure1_slot8 = r1;
            r1 = 10;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot9 = r1;
            r1 = 11;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            var _closure1_slot10 = r1;
            r1 = 12;
            r4 = r6[r1];
            r4 = r5.bind(r0)(r4);
            r4 = r7.bind(r0)(r4);
            var _closure1_slot11 = r4;
            r4 = 13;
            r4 = r6[r4];
            r4 = r5.bind(r0)(r4);
            r4 = r7.bind(r0)(r4);
            var _closure1_slot12 = r4;
            r4 = 14;
            r4 = r6[r4];
            r4 = r5.bind(r0)(r4);
            r4 = r7.bind(r0)(r4);
            var _closure1_slot13 = r4;
            r4 = 15;
            r4 = r6[r4];
            r4 = r5.bind(r0)(r4);
            r4 = r7.bind(r0)(r4);
            var _closure1_slot14 = r4;
            r4 = 16;
            r4 = r6[r4];
            r4 = r5.bind(r0)(r4);
            var _closure1_slot15 = r4;
            r4 = ['name', 'size', 'color', 'style', 'children'];
            var _closure1_slot16 = r4;
            r3['DEFAULT_ICON_SIZE'] = r1;
            var _closure1_slot17 = r1;
            r1 = 'black';
            r3['DEFAULT_ICON_COLOR'] = r1;
            var _closure1_slot18 = r1;
            return r0;
        }
    };
    r6 = 507;
    r5 = [1, 6, 363, 203, 12, 13, 23, 25, 28, 119, 508, 2, 511, 513, 514, 512, 251];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r1 = a6;
        r0 = 0;
        r2 = r1[r0];
        r1 = a1;
        r0 = undefined;
        r1 = r1.bind(r0)(r2);
        r2 = r1.bind(r0)();
        r1 = a4;
        r1['exports'] = r2;
        return r0;
    };
    r6 = 508;
    r5 = [509];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r1 = a1;
        var _closure1_slot0 = r1;
        r1 = a6;
        var _closure1_slot1 = r1;
        r2 = function() { // Original name: emptyFunction, environment: r0
            r0 = undefined;
            return r0;
        };
        var _closure1_slot2 = r2;
        r1 = function() { // Original name: emptyFunctionWithReset, environment: r0
            r0 = undefined;
            return r0;
        };
        var _closure1_slot3 = r1;
        r1['resetWarningCache'] = r2;
        r1 = function() { // Environment: r0
            r2 = function(a0, a1, a2, a3, a4, a5) { // Original name: shim, environment: r0
                _fun5608: for(var _fun5608_ip = 0; ; ) switch(_fun5608_ip) {
case 0:
                    r2 = _closure1_slot0;
                    r1 = _closure1_slot1;
                    r0 = 0;
                    r1 = r1[r0];
                    r0 = undefined;
                    r2 = r2.bind(r0)(r1);
                    r1 = a5;
                    if(!(r1 !== r2)) { _fun5608_ip = 75; continue _fun5608 }
case 31:
                    r1 = global;
                    r3 = r1.Error;
                    r1 = r3.prototype;
                    r2 = Object.create(r1, {constructor: {value: r3}});
                    r4 = 'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types';
                    r5 = r2;
                    r1 = new r5[r3](r4, r3);
                    r1 = r1 instanceof Object ? r1 : r2;
                    r2 = 'Invariant Violation';
                    r1['name'] = r2;
                    throw r1;
case 75:
                    return r0;
                }
            };
            var _closure2_slot0 = r2;
            r1 = function() { // Original name: getShim, environment: r0
                r0 = _closure2_slot0;
                return r0;
            };
            r2['isRequired'] = r2;
            r0 = {};
            r0['array'] = r2;
            r0['bigint'] = r2;
            r0['bool'] = r2;
            r0['func'] = r2;
            r0['number'] = r2;
            r0['object'] = r2;
            r0['string'] = r2;
            r0['symbol'] = r2;
            r0['any'] = r2;
            r0['arrayOf'] = r1;
            r0['element'] = r2;
            r0['elementType'] = r2;
            r0['instanceOf'] = r1;
            r0['node'] = r2;
            r0['objectOf'] = r1;
            r0['oneOf'] = r1;
            r0['oneOfType'] = r1;
            r0['shape'] = r1;
            r0['exact'] = r1;
            r2 = _closure1_slot3;
            r0['checkPropTypes'] = r2;
            r1 = _closure1_slot2;
            r0['resetWarningCache'] = r1;
            r0['PropTypes'] = r0;
            return r0;
        };
        r0 = a4;
        r0['exports'] = r1;
        r0 = undefined;
        return r0;
    };
    r6 = 509;
    r5 = [510];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
        r0 = a4;
        r0['exports'] = r1;
        r0 = undefined;
        return r0;
    };
    r6 = 510;
    r5 = new Array(0);
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r6 = a5;
        r5 = a6;
        r0 = 0;
        r1 = r5[r0];
        r0 = undefined;
        r3 = r4.bind(r0)(r1);
        r1 = global;
        r9 = r1.Object;
        r8 = r9.defineProperty;
        r7 = {};
        r1 = true;
        r7['value'] = r1;
        r1 = '__esModule';
        r1 = r8.bind(r9)(r6, r1, r7);
        r1 = function() { // Original name: ensureNativeModuleAvailable, environment: r2
            _fun5612: for(var _fun5612_ip = 0; ; ) switch(_fun5612_ip) {
case 0:
                r0 = _closure1_slot0;
                r0 = r0.default;
                if(r0) { _fun5612_ip = 49; continue _fun5612 }
case 15:
                r0 = global;
                r2 = r0.Error;
                r0 = r2.prototype;
                r1 = Object.create(r0, {constructor: {value: r2}});
                r3 = 'The native RNVectorIcons API is not available, did you properly integrate the module? Please verify your autolinking setup and recompile.';
                r4 = r1;
                r0 = new r4[r2](r3, r2);
                r0 = r0 instanceof Object ? r0 : r1;
                throw r0;
case 49:
                r0 = undefined;
                return r0;
            }
        };
        r6['default'] = r1;
        r1 = 1;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        var _closure1_slot0 = r1;
        return r0;
    };
    r6 = 511;
    r5 = [1, 512];
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
        r3 = a6;
        r1 = 0;
        r3 = r3[r1];
        r1 = a1;
        r1 = r1.bind(r0)(r3);
        r4 = r1.TurboModuleRegistry;
        r3 = r4.get;
        r1 = 'RNVectorIcons';
        r1 = r3.bind(r4)(r1);
        r2['default'] = r1;
        return r0;
    };
    r6 = 512;
    r5 = [2];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r2 = a5;
        r0 = global;
        r5 = r0.Object;
        r4 = r5.defineProperty;
        r3 = {};
        r0 = true;
        r3['value'] = r0;
        r0 = '__esModule';
        r0 = r4.bind(r5)(r2, r0, r3);
        r0 = function() { // Original name: createIconSourceCache, environment: r1
            r0 = global;
            r0 = r0.Map;
            r2 = r0.prototype;
            r2 = Object.create(r2, {constructor: {value: r0}});
            r3 = r2;
            r0 = new r3[r0](r2);
            r0 = r0 instanceof Object ? r0 : r2;
            var _closure2_slot0 = r0;
            r0 = {};
            r2 = function(a0, a1) { // Original name: setValue, environment: r1
                r3 = _closure2_slot0;
                r2 = r3.set;
                r1 = {};
                r0 = _closure1_slot0;
                r1['type'] = r0;
                r0 = a1;
                r1['data'] = r0;
                r0 = a0;
                r0 = r2.bind(r3)(r0, r1);
                return r0;
            };
            r0['setValue'] = r2;
            r2 = function(a0, a1) { // Original name: setError, environment: r1
                r3 = _closure2_slot0;
                r2 = r3.set;
                r1 = {};
                r0 = _closure1_slot1;
                r1['type'] = r0;
                r0 = a1;
                r1['data'] = r0;
                r0 = a0;
                r0 = r2.bind(r3)(r0, r1);
                return r0;
            };
            r0['setError'] = r2;
            r2 = function(a0) { // Original name: has, environment: r1
                r2 = _closure2_slot0;
                r1 = r2.has;
                r0 = a0;
                r0 = r1.bind(r2)(r0);
                return r0;
            };
            r0['has'] = r2;
            r1 = function(a0) { // Original name: get, environment: r1
                _fun5619: for(var _fun5619_ip = 0; ; ) switch(_fun5619_ip) {
case 0:
                    r2 = a0;
                    r3 = _closure2_slot0;
                    r1 = r3.has;
                    r1 = r1.bind(r3)(r2);
                    if(r1) { _fun5619_ip = 27; continue _fun5619 }
case 23:
                    r1 = undefined;
                    return r1;
case 27:
                    r1 = _closure2_slot0;
                    r0 = r1.get;
                    r0 = r0.bind(r1)(r2);
                    r2 = r0.type;
                    r0 = r0.data;
                    r1 = _closure1_slot1;
                    if(!(r2 !== r1)) { _fun5619_ip = 64; continue _fun5619 }
case 62:
                    return r0;
case 64:
                    throw r0;
                }
            };
            r0['get'] = r1;
            return r0;
        };
        r2['default'] = r0;
        r0 = 'value';
        var _closure1_slot0 = r0;
        r0 = 'error';
        var _closure1_slot1 = r0;
        r0 = undefined;
        return r0;
    };
    r6 = 513;
    r5 = new Array(0);
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5620: for(var _fun5620_ip = 0; ; ) switch(_fun5620_ip) {
case 0:
            r4 = a1;
            r6 = a5;
            r3 = a6;
            var _closure1_slot0 = r4;
            var _closure1_slot1 = r3;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r2
                _fun5621: for(var _fun5621_ip = 0; ; ) switch(_fun5621_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5621_ip = 104; continue _fun5621 }
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
                        _fun5622: for(var _fun5622_ip = 0; ; ) switch(_fun5622_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5622_ip = 15; continue _fun5622 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5622_ip = 19; continue _fun5622;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot17 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot17 = r0;
            r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r2
                _fun5623: for(var _fun5623_ip = 0; ; ) switch(_fun5623_ip) {
case 0:
                    r3 = a0;
                    r5 = a2;
                    r0 = _closure1_slot6;
                    r1 = r0.default;
                    r2 = undefined;
                    r0 = a1;
                    r8 = r1.bind(r2)(r0);
                    r0 = _closure1_slot5;
                    r1 = r0.default;
                    r0 = _closure1_slot19;
                    r0 = r0.bind(r2)();
                    if(r0) { _fun5623_ip = 61; continue _fun5623 }
case 48:
                    r0 = r8.apply;
                    r0 = r0.bind(r8)(r3, r5);
                    _fun5623_ip = 107; continue _fun5623;
case 61:
                    r6 = global;
                    r7 = r6.Reflect;
                    r6 = r7.construct;
                    if(r5) { _fun5623_ip = 81; continue _fun5623 }
case 77:
                    r5 = new Array(0);
case 81:
                    r4 = _closure1_slot6;
                    r4 = r4.default;
                    r4 = r4.bind(r2)(r3);
                    r4 = r4.constructor;
                    r0 = r6.bind(r7)(r8, r5, r4);
case 107:
                    r0 = r1.bind(r2)(r3, r0);
                    return r0;
                }
            };
            var _closure1_slot18 = r0;
            r0 = function() { // Original name: _isNativeReflectConstruct, environment: r2
                _fun5624: for(var _fun5624_ip = 0; ; ) switch(_fun5624_ip) {
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
                    _fun5624_ip = 74; continue _fun5624;
case 72: // catch_target0
                    CatchBlockStart(arg_register=1);
case 74:
                    r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                        r0 = _closure2_slot0;
                        r0 = !r0;
                        r0 = !r0;
                        return r0;
                    };
                    _closure1_slot19 = r1;
                    r0 = undefined;
                    r0 = r1.bind(r0)();
                    return r0;
                }
            };
            var _closure1_slot19 = r0;
            r0 = 0;
            r1 = r3[r0];
            r0 = undefined;
            r5 = r4.bind(r0)(r1);
            r18 = global;
            r9 = r18.Object;
            r8 = r9.defineProperty;
            r7 = {};
            r1 = true;
            r7['value'] = r1;
            r1 = '__esModule';
            r1 = r8.bind(r9)(r6, r1, r7);
            r1 = function(a0) { // Original name: createIconButtonComponent, environment: r2
                r1 = a0;
                var _closure2_slot0 = r1;
                r1 = _closure1_slot8;
                r3 = r1.PureComponent;
                r1 = function(a0) { // Environment: r0
                    r3 = function() { // Original name: IconButton, environment: r0
                        r4 = this;
                        r3 = undefined;
                        r0 = undefined;
                        r2 = _closure1_slot3;
                        r5 = r2.default;
                        r2 = _closure3_slot0;
                        r5 = r5.bind(r3)(r4, r2);
                        r1 = _closure1_slot18;
                        r0 = arguments;
                        r0 = r1.bind(r3)(r4, r2, r0);
                        return r0;
                    };
                    var _closure3_slot0 = r3;
                    r2 = _closure1_slot7;
                    r5 = r2.default;
                    r2 = undefined;
                    r4 = a0;
                    r4 = r5.bind(r2)(r3, r4);
                    r1 = _closure1_slot4;
                    r1 = r1.default;
                    r4 = {};
                    r5 = 'render';
                    r4['key'] = r5;
                    r0 = function() { // Original name: render, environment: r0
                        _fun5630: for(var _fun5630_ip = 0; ; ) switch(_fun5630_ip) {
case 0:
                            r0 = this;
                            r4 = r0.props;
                            r16 = r4.style;
                            r8 = r4.iconStyle;
                            r20 = r4.children;
                            r1 = _closure1_slot2;
                            r2 = r1.default;
                            r1 = _closure1_slot12;
                            r3 = undefined;
                            r12 = r2.bind(r3)(r4, r1);
                            r2 = _closure1_slot0;
                            r1 = _closure1_slot1;
                            r6 = 11;
                            r4 = r1[r6];
                            r4 = r2.bind(r3)(r4);
                            r11 = r4.pick;
                            r28 = _closure1_slot15;
                            r27 = 'style';
                            r26 = 'name';
                            r25 = 'size';
                            r10 = 'color';
                            r30 = undefined;
                            r29 = r12;
                            r24 = r10;
                            r23 = r30[r11](r29, r28, r27, r26, r25, r24, r23);
                            r4 = r1[r6];
                            r4 = r2.bind(r3)(r4);
                            r5 = r4.pick;
                            r4 = _closure1_slot16;
                            r7 = r5.bind(r3)(r12, r4);
                            r1 = r1[r6];
                            r1 = r2.bind(r3)(r1);
                            r11 = r1.omit;
                            r15 = global;
                            r2 = r15.Object;
                            r1 = r2.keys;
                            r28 = r1.bind(r2)(r23);
                            r2 = r15.Object;
                            r1 = r2.keys;
                            r27 = r1.bind(r2)(r7);
                            r26 = 'iconStyle';
                            r4 = 'borderRadius';
                            r2 = 'backgroundColor';
                            r30 = undefined;
                            r29 = r12;
                            r25 = r4;
                            r24 = r2;
                            r14 = r30[r11](r29, r28, r27, r26, r25, r24, r23);
                            r1 = _closure1_slot13;
                            r9 = r1.icon;
                            if(r8) { _fun5630_ip = 224; continue _fun5630 }
case 219:
                            r1 = r9;
                            _fun5630_ip = 239; continue _fun5630;
case 224:
                            r5 = new Array(2);
                            r5[0] = r9;
                            r5[1] = r8;
                            r1 = r5;
case 239:
                            r23['style'] = r1;
                            r5 = _closure1_slot0;
                            r1 = _closure1_slot1;
                            r8 = r1[r6];
                            r8 = r5.bind(r3)(r8);
                            r9 = r8.pick;
                            r8 = r0.props;
                            r22 = r9.bind(r3)(r8, r10);
                            r1 = r1[r6];
                            r1 = r5.bind(r3)(r1);
                            r1 = r1.pick;
                            r0 = r0.props;
                            r17 = r1.bind(r3)(r0, r2, r4);
                            r0 = _closure1_slot11;
                            r2 = r0.jsx;
                            r0 = _closure1_slot10;
                            r1 = r0.TouchableHighlight;
                            r6 = r15.Object;
                            r5 = r6.assign;
                            r4 = {};
                            r0 = _closure1_slot13;
                            r8 = r0.touchable;
                            r0 = new Array(2);
                            r0[0] = r8;
                            r0[1] = r17;
                            r4['style'] = r0;
                            r0 = {};
                            r8 = _closure1_slot11;
                            r10 = r8.jsxs;
                            r8 = _closure1_slot10;
                            r9 = r8.View;
                            r13 = r15.Object;
                            r12 = r13.assign;
                            r11 = {};
                            r8 = _closure1_slot13;
                            r18 = r8.container;
                            r8 = new Array(3);
                            r8[0] = r18;
                            r8[1] = r17;
                            r8[2] = r16;
                            r11['style'] = r8;
                            r8 = {};
                            r16 = _closure1_slot11;
                            r17 = r16.jsx;
                            r16 = _closure2_slot0;
                            r19 = r15.Object;
                            r18 = r19.assign;
                            r15 = {};
                            r15 = r18.bind(r19)(r15, r23);
                            r16 = r17.bind(r3)(r16, r15);
                            r15 = new Array(2);
                            r15[0] = r16;
                            r18 = typeof r20;
                            r17 = 'string';
                            r16 = r20;
                            if(!(r18 === r17)) { _fun5630_ip = 555; continue _fun5630 }
case 492:
                            r17 = _closure1_slot11;
                            r19 = r17.jsx;
                            r17 = _closure1_slot10;
                            r18 = r17.Text;
                            r17 = {};
                            r21 = _closure1_slot13;
                            r23 = r21.text;
                            r21 = new Array(2);
                            r21[0] = r23;
                            r21[1] = r22;
                            r17['style'] = r21;
                            r21 = false;
                            r17['selectable'] = r21;
                            r17['children'] = r20;
                            r16 = r19.bind(r3)(r18, r17);
case 555:
                            r15[1] = r16;
                            r8['children'] = r15;
                            r8 = r12.bind(r13)(r11, r14, r8);
                            r8 = r10.bind(r3)(r9, r8);
                            r0['children'] = r8;
                            r0 = r5.bind(r6)(r4, r7, r0);
                            r0 = r2.bind(r3)(r1, r0);
                            return r0;
                        }
                    };
                    r4['value'] = r0;
                    r0 = new Array(1);
                    r0[0] = r4;
                    r0 = r1.bind(r2)(r3, r0);
                    return r0;
                };
                r0 = undefined;
                r0 = r1.bind(r0)(r3);
                r1 = {};
                r3 = _closure1_slot9;
                r5 = r3.default;
                r4 = r5.oneOfType;
                r3 = _closure1_slot9;
                r3 = r3.default;
                r6 = r3.string;
                r3 = new Array(2);
                r3[0] = r6;
                r6 = _closure1_slot9;
                r6 = r6.default;
                r6 = r6.number;
                r3[1] = r6;
                r3 = r4.bind(r5)(r3);
                r1['backgroundColor'] = r3;
                r3 = _closure1_slot9;
                r3 = r3.default;
                r3 = r3.number;
                r1['borderRadius'] = r3;
                r3 = _closure1_slot9;
                r3 = r3.default;
                r3 = r3.any;
                r1['color'] = r3;
                r3 = _closure1_slot9;
                r3 = r3.default;
                r3 = r3.number;
                r1['size'] = r3;
                r3 = _closure1_slot9;
                r3 = r3.default;
                r3 = r3.any;
                r1['iconStyle'] = r3;
                r3 = _closure1_slot9;
                r3 = r3.default;
                r3 = r3.any;
                r1['style'] = r3;
                r3 = _closure1_slot9;
                r3 = r3.default;
                r3 = r3.node;
                r1['children'] = r3;
                r0['propTypes'] = r1;
                r1 = {'backgroundColor': null, 'borderRadius': 5, 'color': 'white', 'size': 20};
                r2 = _closure1_slot14;
                r1['backgroundColor'] = r2;
                r0['defaultProps'] = r1;
                return r0;
            };
            r6['default'] = r1;
            r1 = 1;
            r1 = r3[r1];
            r1 = r4.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot2 = r1;
            r1 = 2;
            r1 = r3[r1];
            r1 = r4.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot3 = r1;
            r1 = 3;
            r1 = r3[r1];
            r1 = r4.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot4 = r1;
            r1 = 4;
            r1 = r3[r1];
            r1 = r4.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot5 = r1;
            r1 = 5;
            r1 = r3[r1];
            r1 = r4.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot6 = r1;
            r1 = 6;
            r1 = r3[r1];
            r1 = r4.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot7 = r1;
            r1 = 7;
            r1 = r3[r1];
            r7 = r4.bind(r0)(r1);
            if(!r7) { _fun5620_ip = 257; continue _fun5620 }
case 243:
            r6 = r7.__esModule;
            r1 = r7;
            if(r6) { _fun5620_ip = 524; continue _fun5620 }
case 257:
            r17 = null;
            if(!(r17 !== r7)) { _fun5620_ip = 515; continue _fun5620 }
case 266:
            r8 = typeof r7;
            r6 = 'object';
            if(!(r6 !== r8)) { _fun5620_ip = 288; continue _fun5620 }
case 277:
            r6 = 'function';
            if(!(r6 === r8)) { _fun5620_ip = 515; continue _fun5620 }
case 288:
            r6 = _closure1_slot17;
            r8 = r6.bind(r0)(r0);
            if(!r8) { _fun5620_ip = 316; continue _fun5620 }
case 300:
            r6 = r8.has;
            r6 = r6.bind(r8)(r7);
            if(r6) { _fun5620_ip = 503; continue _fun5620 }
case 316:
            r6 = Object.create(r17);
            r9 = r18.Object;
            r16 = r9.defineProperty;
            if(!r16) { _fun5620_ip = 344; continue _fun5620 }
case 333:
            r9 = r18.Object;
            r16 = r9.getOwnPropertyDescriptor;
case 344:
            r14 = r7;
            r10 = 'default';
            r9 = undefined;
            for(r11 in r14)
case 361:
            {
case 370:
                r22 = r11;
                if(r10 === r22) { _fun5620_ip = 361; continue _fun5620 }
case 377:
                r19 = {};
                r20 = r19.hasOwnProperty;
                r19 = r20.call;
                r19 = r19.bind(r20)(r7, r22);
                if(!r19) { _fun5620_ip = 361; continue _fun5620 }
case 398:
                r19 = null;
                if(!r16) { _fun5620_ip = 420; continue _fun5620 }
case 403:
                r21 = r18.Object;
                r20 = r21.getOwnPropertyDescriptor;
                r19 = r20.bind(r21)(r7, r22);
case 420:
                if(!r19) { _fun5620_ip = 439; continue _fun5620 }
case 423:
                r20 = r19.get;
                if(r20) { _fun5620_ip = 452; continue _fun5620 }
case 431:
                r20 = r19.set;
                if(r20) { _fun5620_ip = 452; continue _fun5620 }
case 439:
                r20 = r7[r22];
                r6[r22] = r20;
                r9 = r19;
                _fun5620_ip = 361; continue _fun5620;
case 452:
                r21 = r18.Object;
                r20 = r21.defineProperty;
                r20 = r20.bind(r21)(r6, r22, r19);
                r9 = r19;
                _fun5620_ip = 361; continue _fun5620;
            }
case 475:
            r6['default'] = r7;
            r1 = r6;
            if(!r8) { _fun5620_ip = 524; continue _fun5620 }
case 487:
            r9 = r8.set;
            r9 = r9.bind(r8)(r7, r6);
            r1 = r6;
            _fun5620_ip = 524; continue _fun5620;
case 503:
            r6 = r8.get;
            r1 = r6.bind(r8)(r7);
            _fun5620_ip = 524; continue _fun5620;
case 515:
            r6 = {};
            r6['default'] = r7;
            r1 = r6;
case 524:
            var _closure1_slot8 = r1;
            r1 = 8;
            r1 = r3[r1];
            r1 = r4.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot9 = r1;
            r1 = 9;
            r1 = r3[r1];
            r1 = r4.bind(r0)(r1);
            var _closure1_slot10 = r1;
            r6 = 10;
            r3 = r3[r6];
            r3 = r4.bind(r0)(r3);
            var _closure1_slot11 = r3;
            r3 = ['style', 'iconStyle', 'children'];
            var _closure1_slot12 = r3;
            r4 = r1.StyleSheet;
            r3 = r4.create;
            r1 = {};
            r5 = {'flexDirection': 'row', 'justifyContent': 'flex-start', 'alignItems': 'center', 'padding': 8};
            r1['container'] = r5;
            r5 = {};
            r7 = 'hidden';
            r5['overflow'] = r7;
            r1['touchable'] = r5;
            r5 = {};
            r5['marginRight'] = r6;
            r1['icon'] = r5;
            r5 = {'fontWeight': '600', 'backgroundColor': 'transparent'};
            r1['text'] = r5;
            r1 = r3.bind(r4)(r1);
            var _closure1_slot13 = r1;
            r1 = '#007AFF';
            var _closure1_slot14 = r1;
            r1 = ['ellipsizeMode', 'numberOfLines', 'textBreakStrategy', 'selectable', 'suppressHighlighting', 'allowFontScaling', 'adjustsFontSizeToFit', 'minimumFontScale'];
            var _closure1_slot15 = r1;
            r1 = ['accessible', 'accessibilityLabel', 'accessibilityHint', 'accessibilityComponentType', 'accessibilityRole', 'accessibilityStates', 'accessibilityTraits', 'onFocus', 'onBlur', 'disabled', 'onPress', 'onPressIn', 'onPressOut', 'onLayout', 'onLongPress', 'nativeID', 'testID', 'delayPressIn', 'delayPressOut', 'delayLongPress', 'activeOpacity', 'underlayColor', 'selectionColor', 'onShowUnderlay', 'onHideUnderlay', 'hasTVPreferredFocus', 'tvParallaxProperties'];
            var _closure1_slot16 = r1;
            return r0;
        }
    };
    r6 = 514;
    r5 = [1, 203, 12, 13, 23, 25, 28, 119, 508, 2, 251, 515];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r1 = {};
        r2 = function(a0) { // Original name: pick, environment: r0
            _fun5632: for(var _fun5632_ip = 0; ; ) switch(_fun5632_ip) {
case 0:
                r5 = undefined;
                r1 = a0;
                var _closure2_slot0 = r1;
                r4 = arguments.length;
                r1 = global;
                r6 = r1.Array;
                r3 = 1;
                r2 = r4 > r3;
                r1 = 0;
                if(!r2) { _fun5632_ip = 38; continue _fun5632 }
case 34:
                r1 = r4 - r3;
case 38:
                r2 = r6.prototype;
                r2 = Object.create(r2, {constructor: {value: r6}});
                r10 = r2;
                r9 = r1;
                r1 = new r10[r6](r9, r8);
                r2 = r1 instanceof Object ? r1 : r2;
                r6 = r3 < r4;
                r1 = r3;
                if(!r6) { _fun5632_ip = 90; continue _fun5632 }
case 71:
                r7 = r1 - r3;
                r6 = arguments[r1];
                r2[r7] = r6;
                r1 = r1 + 1;
                if(r1 < r4) { _fun5632_ip = 71; continue _fun5632 }
case 90:
                r1 = r2.flat;
                r3 = r1.bind(r2)();
                r2 = r3.filter;
                r1 = function(a0) { // Environment: r0
                    r0 = global;
                    r0 = r0.Object;
                    r0 = r0.prototype;
                    r3 = r0.hasOwnProperty;
                    r2 = r3.call;
                    r1 = _closure2_slot0;
                    r0 = a0;
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                };
                r3 = r2.bind(r3)(r1);
                r2 = r3.reduce;
                r1 = function(a0, a1) { // Environment: r0
                    r0 = a0;
                    r2 = a1;
                    r1 = _closure2_slot0;
                    r1 = r1[r2];
                    r0[r2] = r1;
                    return r0;
                };
                r0 = {};
                r0 = r2.bind(r3)(r1, r0);
                return r0;
            }
        };
        r1['pick'] = r2;
        r0 = function(a0) { // Original name: omit, environment: r0
            _fun5635: for(var _fun5635_ip = 0; ; ) switch(_fun5635_ip) {
case 0:
                r3 = a0;
                r7 = undefined;
                var _closure2_slot0 = r3;
                r6 = arguments.length;
                r1 = global;
                r8 = r1.Array;
                r5 = 1;
                r4 = r6 > r5;
                r2 = 0;
                if(!r4) { _fun5635_ip = 38; continue _fun5635 }
case 34:
                r2 = r6 - r5;
case 38:
                r4 = r8.prototype;
                r4 = Object.create(r4, {constructor: {value: r8}});
                r12 = r4;
                r11 = r2;
                r2 = new r12[r8](r11, r10);
                r4 = r2 instanceof Object ? r2 : r4;
                r8 = r5 < r6;
                r2 = r5;
                if(!r8) { _fun5635_ip = 90; continue _fun5635 }
case 71:
                r9 = r2 - r5;
                r8 = arguments[r2];
                r4[r9] = r8;
                r2 = r2 + 1;
                if(r2 < r6) { _fun5635_ip = 71; continue _fun5635 }
case 90:
                r5 = r1.Set;
                r2 = r4.flat;
                r11 = r2.bind(r4)();
                r4 = r5.prototype;
                r4 = Object.create(r4, {constructor: {value: r5}});
                r12 = r4;
                r2 = new r12[r5](r11, r10);
                r2 = r2 instanceof Object ? r2 : r4;
                var _closure2_slot1 = r2;
                r2 = r1.Object;
                r1 = r2.getOwnPropertyNames;
                r3 = r1.bind(r2)(r3);
                r2 = r3.filter;
                r1 = function(a0) { // Environment: r0
                    r2 = _closure2_slot1;
                    r1 = r2.has;
                    r0 = a0;
                    r0 = r1.bind(r2)(r0);
                    r0 = !r0;
                    return r0;
                };
                r3 = r2.bind(r3)(r1);
                r2 = r3.reduce;
                r1 = function(a0, a1) { // Environment: r0
                    r0 = a0;
                    r2 = a1;
                    r1 = _closure2_slot0;
                    r1 = r1[r2];
                    r0[r2] = r1;
                    return r0;
                };
                r0 = {};
                r0 = r2.bind(r3)(r1, r0);
                return r0;
            }
        };
        r1['omit'] = r0;
        r0 = a4;
        r0['exports'] = r1;
        r0 = undefined;
        return r0;
    };
    r6 = 515;
    r5 = new Array(0);
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r1 = {123: 60301, 360: 58743, '10k': 59729, '10mp': 59730, '11mp': 59731, '12mp': 59732, '13mp': 59733, '14mp': 59734, '15mp': 59735, '16mp': 59736, '17mp': 59737, '18-up-rating': 63741, '18mp': 59738, '19mp': 59739, '1k': 59740, '1k-plus': 59741, '1x-mobiledata': 61389, '20mp': 59742, '21mp': 59743, '22mp': 59744, '23mp': 59745, '24mp': 59746, '2k': 59747, '2k-plus': 59748, '2mp': 59749, '30fps': 61390, '30fps-select': 61391, '3d-rotation': 59469, '3g-mobiledata': 61392, '3k': 59750, '3k-plus': 59751, '3mp': 59752, '3p': 61393, '4g-mobiledata': 61394, '4g-plus-mobiledata': 61395, '4k': 57458, '4k-plus': 59753, '4mp': 59754, '5g': 61240, '5k': 59755, '5k-plus': 59756, '5mp': 59757, '60fps': 61396, '60fps-select': 61397, '6-ft-apart': 61982, '6k': 59758, '6k-plus': 59759, '6mp': 59760, '7k': 59761, '7k-plus': 59762, '7mp': 59763, '8k': 59764, '8k-plus': 59765, '8mp': 59766, '9k': 59767, '9k-plus': 59768, '9mp': 59769, 'abc': 60308, 'ac-unit': 60219, 'access-alarm': 57744, 'access-alarms': 57745, 'access-time': 57746, 'access-time-filled': 61398, 'accessibility': 59470, 'accessibility-new': 59692, 'accessible': 59668, 'accessible-forward': 59700, 'account-balance': 59471, 'account-balance-wallet': 59472, 'account-box': 59473, 'account-circle': 59475, 'account-tree': 59770, 'ad-units': 61241, 'adb': 58894, 'add': 57669, 'add-a-photo': 58425, 'add-alarm': 57747, 'add-alert': 57347, 'add-box': 57670, 'add-business': 59177, 'add-call': 57576, 'add-card': 60294, 'add-chart': 59771, 'add-circle': 57671, 'add-circle-outline': 57672, 'add-comment': 57958, 'add-home': 63723, 'add-home-work': 63725, 'add-ic-call': 59772, 'add-link': 57720, 'add-location': 58727, 'add-location-alt': 61242, 'add-moderator': 59773, 'add-photo-alternate': 58430, 'add-reaction': 57811, 'add-road': 61243, 'add-shopping-cart': 59476, 'add-task': 62010, 'add-to-drive': 58972, 'add-to-home-screen': 57854, 'add-to-photos': 58269, 'add-to-queue': 57436, 'addchart': 61244, 'adf-scanner': 60122, 'adjust': 58270, 'admin-panel-settings': 61245, 'adobe': 60054, 'ads-click': 59234, 'agriculture': 60025, 'air': 61400, 'airline-seat-flat': 58928, 'airline-seat-flat-angled': 58929, 'airline-seat-individual-suite': 58930, 'airline-seat-legroom-extra': 58931, 'airline-seat-legroom-normal': 58932, 'airline-seat-legroom-reduced': 58933, 'airline-seat-recline-extra': 58934, 'airline-seat-recline-normal': 58935, 'airline-stops': 59344, 'airlines': 59338, 'airplane-ticket': 61401, 'airplanemode-active': 57749, 'airplanemode-inactive': 57748, 'airplanemode-off': 57748, 'airplanemode-on': 57749, 'airplay': 57429, 'airport-shuttle': 60220, 'alarm': 59477, 'alarm-add': 59478, 'alarm-off': 59479, 'alarm-on': 59480, 'album': 57369, 'align-horizontal-center': 57359, 'align-horizontal-left': 57357, 'align-horizontal-right': 57360, 'align-vertical-bottom': 57365, 'align-vertical-center': 57361, 'align-vertical-top': 57356, 'all-inbox': 59775, 'all-inclusive': 60221, 'all-out': 59659, 'alt-route': 61828, 'alternate-email': 57574, 'amp-stories': 59923, 'analytics': 61246, 'anchor': 61901, 'android': 59481, 'animation': 59164, 'announcement': 59482, 'aod': 61402, 'apartment': 59968, 'api': 61879, 'app-blocking': 61247, 'app-registration': 61248, 'app-settings-alt': 61249, 'app-shortcut': 60132, 'apple': 60032, 'approval': 59778, 'apps': 58819, 'apps-outage': 59340, 'architecture': 59963, 'archive': 57673, 'area-chart': 59248, 'arrow-back': 58820, 'arrow-back-ios': 58848, 'arrow-back-ios-new': 58090, 'arrow-circle-down': 61825, 'arrow-circle-left': 60071, 'arrow-circle-right': 60074, 'arrow-circle-up': 61826, 'arrow-downward': 58843, 'arrow-drop-down': 58821, 'arrow-drop-down-circle': 58822, 'arrow-drop-up': 58823, 'arrow-forward': 58824, 'arrow-forward-ios': 58849, 'arrow-left': 58846, 'arrow-outward': 63694, 'arrow-right': 58847, 'arrow-right-alt': 59713, 'arrow-upward': 58840, 'art-track': 57440, 'article': 61250, 'aspect-ratio': 59483, 'assessment': 59484, 'assignment': 59485, 'assignment-add': 63560, 'assignment-ind': 59486, 'assignment-late': 59487, 'assignment-return': 59488, 'assignment-returned': 59489, 'assignment-turned-in': 59490, 'assist-walker': 63701, 'assistant': 58271, 'assistant-direction': 59784, 'assistant-navigation': 59785, 'assistant-photo': 58272, 'assured-workload': 60271, 'atm': 58739, 'attach-email': 59998, 'attach-file': 57894, 'attach-money': 57895, 'attachment': 58044, 'attractions': 59986, 'attribution': 61403, 'audio-file': 60290, 'audiotrack': 58273, 'auto-awesome': 58975, 'auto-awesome-mosaic': 58976, 'auto-awesome-motion': 58977, 'auto-delete': 59980, 'auto-fix-high': 58979, 'auto-fix-normal': 58980, 'auto-fix-off': 58981, 'auto-graph': 58619, 'auto-mode': 60448, 'auto-stories': 58982, 'autofps-select': 61404, 'autorenew': 59491, 'av-timer': 57371, 'baby-changing-station': 61851, 'back-hand': 59236, 'backpack': 61852, 'backspace': 57674, 'backup': 59492, 'backup-table': 61251, 'badge': 60007, 'bakery-dining': 59987, 'balance': 60150, 'balcony': 58767, 'ballot': 57714, 'bar-chart': 57963, 'barcode-reader': 63580, 'batch-prediction': 61685, 'bathroom': 61405, 'bathtub': 59969, 'battery-0-bar': 60380, 'battery-1-bar': 60377, 'battery-2-bar': 60384, 'battery-3-bar': 60381, 'battery-4-bar': 60386, 'battery-5-bar': 60372, 'battery-6-bar': 60370, 'battery-alert': 57756, 'battery-charging-full': 57763, 'battery-full': 57764, 'battery-saver': 61406, 'battery-std': 57765, 'battery-unknown': 57766, 'beach-access': 60222, 'bed': 61407, 'bedroom-baby': 61408, 'bedroom-child': 61409, 'bedroom-parent': 61410, 'bedtime': 61252, 'bedtime-off': 60278, 'beenhere': 58669, 'bento': 61940, 'bike-scooter': 61253, 'biotech': 59962, 'blender': 61411, 'blind': 63702, 'blinds': 57990, 'blinds-closed': 60447, 'block': 57675, 'block-flipped': 61254, 'bloodtype': 61412, 'bluetooth': 57767, 'bluetooth-audio': 58895, 'bluetooth-connected': 57768, 'bluetooth-disabled': 57769, 'bluetooth-drive': 61413, 'bluetooth-searching': 57770, 'blur-circular': 58274, 'blur-linear': 58275, 'blur-off': 58276, 'blur-on': 58277, 'bolt': 59915, 'book': 59493, 'book-online': 61975, 'bookmark': 59494, 'bookmark-add': 58776, 'bookmark-added': 58777, 'bookmark-border': 59495, 'bookmark-outline': 59495, 'bookmark-remove': 58778, 'bookmarks': 59787, 'border-all': 57896, 'border-bottom': 57897, 'border-clear': 57898, 'border-color': 57899, 'border-horizontal': 57900, 'border-inner': 57901, 'border-left': 57902, 'border-outer': 57903, 'border-right': 57904, 'border-style': 57905, 'border-top': 57906, 'border-vertical': 57907, 'boy': 60263, 'branding-watermark': 57451, 'breakfast-dining': 59988, 'brightness-1': 58278, 'brightness-2': 58279, 'brightness-3': 58280, 'brightness-4': 58281, 'brightness-5': 58282, 'brightness-6': 58283, 'brightness-7': 58284, 'brightness-auto': 57771, 'brightness-high': 57772, 'brightness-low': 57773, 'brightness-medium': 57774, 'broadcast-on-home': 63736, 'broadcast-on-personal': 63737, 'broken-image': 58285, 'browse-gallery': 60369, 'browser-not-supported': 61255, 'browser-updated': 59343, 'brunch-dining': 60019, 'brush': 58286, 'bubble-chart': 59101, 'bug-report': 59496, 'build': 59497, 'build-circle': 61256, 'bungalow': 58769, 'burst-mode': 58428, 'bus-alert': 59791, 'business': 57519, 'business-center': 60223, 'cabin': 58761, 'cable': 61414, 'cached': 59498, 'cake': 59369, 'calculate': 59999, 'calendar-month': 60364, 'calendar-today': 59701, 'calendar-view-day': 59702, 'calendar-view-month': 61415, 'calendar-view-week': 61416, 'call': 57520, 'call-end': 57521, 'call-made': 57522, 'call-merge': 57523, 'call-missed': 57524, 'call-missed-outgoing': 57572, 'call-received': 57525, 'call-split': 57526, 'call-to-action': 57452, 'camera': 58287, 'camera-alt': 58288, 'camera-enhance': 59644, 'camera-front': 58289, 'camera-indoor': 61417, 'camera-outdoor': 61418, 'camera-rear': 58290, 'camera-roll': 58291, 'cameraswitch': 61419, 'campaign': 61257, 'cancel': 58825, 'cancel-presentation': 57577, 'cancel-schedule-send': 59961, 'candlestick-chart': 60116, 'car-crash': 60402, 'car-rental': 59989, 'car-repair': 59990, 'card-giftcard': 59638, 'card-membership': 59639, 'card-travel': 59640, 'carpenter': 61944, 'cases': 59794, 'casino': 60224, 'cast': 58119, 'cast-connected': 58120, 'cast-for-education': 61420, 'castle': 60081, 'catching-pokemon': 58632, 'category': 58740, 'celebration': 60005, 'cell-tower': 60346, 'cell-wifi': 57580, 'center-focus-strong': 58292, 'center-focus-weak': 58293, 'chair': 61421, 'chair-alt': 61422, 'chalet': 58757, 'change-circle': 58087, 'change-history': 59499, 'charging-station': 61853, 'chat': 57527, 'chat-bubble': 57546, 'chat-bubble-outline': 57547, 'check': 58826, 'check-box': 59444, 'check-box-outline-blank': 59445, 'check-circle': 59500, 'check-circle-outline': 59693, 'checklist': 59057, 'checklist-rtl': 59059, 'checkroom': 61854, 'chevron-left': 58827, 'chevron-right': 58828, 'child-care': 60225, 'child-friendly': 60226, 'chrome-reader-mode': 59501, 'church': 60078, 'circle': 61258, 'circle-notifications': 59796, 'class': 59502, 'clean-hands': 61983, 'cleaning-services': 61695, 'clear': 57676, 'clear-all': 57528, 'close': 58829, 'close-fullscreen': 61903, 'closed-caption': 57372, 'closed-caption-disabled': 61916, 'closed-caption-off': 59798, 'cloud': 58045, 'cloud-circle': 58046, 'cloud-done': 58047, 'cloud-download': 58048, 'cloud-off': 58049, 'cloud-queue': 58050, 'cloud-sync': 60250, 'cloud-upload': 58051, 'cloudy-snowing': 59408, 'co2': 59312, 'co-present': 60144, 'code': 59503, 'code-off': 58611, 'coffee': 61423, 'coffee-maker': 61424, 'collections': 58294, 'collections-bookmark': 58417, 'color-lens': 58295, 'colorize': 58296, 'comment': 57529, 'comment-bank': 59982, 'comments-disabled': 59298, 'commit': 60149, 'commute': 59712, 'compare': 58297, 'compare-arrows': 59669, 'compass-calibration': 58748, 'compost': 59233, 'compress': 59725, 'computer': 58122, 'confirmation-num': 58936, 'confirmation-number': 58936, 'connect-without-contact': 61987, 'connected-tv': 59800, 'connecting-airports': 59337, 'construction': 59964, 'contact-emergency': 63697, 'contact-mail': 57552, 'contact-page': 61998, 'contact-phone': 57551, 'contact-support': 59724, 'contactless': 60017, 'contacts': 57530, 'content-copy': 57677, 'content-cut': 57678, 'content-paste': 57679, 'content-paste-go': 60046, 'content-paste-off': 58616, 'content-paste-search': 60059, 'contrast': 60215, 'control-camera': 57460, 'control-point': 58298, 'control-point-duplicate': 58299, 'conveyor-belt': 63591, 'cookie': 60076, 'copy-all': 58092, 'copyright': 59660, 'coronavirus': 61985, 'corporate-fare': 61904, 'cottage': 58759, 'countertops': 61943, 'create': 57680, 'create-new-folder': 58060, 'credit-card': 59504, 'credit-card-off': 58612, 'credit-score': 61425, 'crib': 58760, 'crisis-alert': 60393, 'crop': 58302, 'crop-16-9': 58300, 'crop-3-2': 58301, 'crop-5-4': 58303, 'crop-7-5': 58304, 'crop-din': 58305, 'crop-free': 58306, 'crop-landscape': 58307, 'crop-original': 58308, 'crop-portrait': 58309, 'crop-rotate': 58423, 'crop-square': 58310, 'cruelty-free': 59289, 'css': 60307, 'currency-bitcoin': 60357, 'currency-exchange': 60272, 'currency-franc': 60154, 'currency-lira': 60143, 'currency-pound': 60145, 'currency-ruble': 60140, 'currency-rupee': 60151, 'currency-yen': 60155, 'currency-yuan': 60153, 'curtains': 60446, 'curtains-closed': 60445, 'cyclone': 60373, 'dangerous': 59802, 'dark-mode': 58652, 'dashboard': 59505, 'dashboard-customize': 59803, 'data-array': 60113, 'data-exploration': 59247, 'data-object': 60115, 'data-saver-off': 61426, 'data-saver-on': 61427, 'data-thresholding': 60319, 'data-usage': 57775, 'dataset': 63726, 'dataset-linked': 63727, 'date-range': 59670, 'deblur': 60279, 'deck': 59970, 'dehaze': 58311, 'delete': 59506, 'delete-forever': 59691, 'delete-outline': 59694, 'delete-sweep': 57708, 'delivery-dining': 60018, 'density-large': 60329, 'density-medium': 60318, 'density-small': 60328, 'departure-board': 58742, 'description': 59507, 'deselect': 60342, 'design-services': 61706, 'desk': 63732, 'desktop-access-disabled': 59805, 'desktop-mac': 58123, 'desktop-windows': 58124, 'details': 58312, 'developer-board': 58125, 'developer-board-off': 58623, 'developer-mode': 57776, 'device-hub': 58165, 'device-thermostat': 57855, 'device-unknown': 58169, 'devices': 57777, 'devices-fold': 60382, 'devices-other': 58167, 'dew-point': 63609, 'dialer-sip': 57531, 'dialpad': 57532, 'diamond': 60117, 'difference': 60285, 'dining': 61428, 'dinner-dining': 59991, 'directions': 58670, 'directions-bike': 58671, 'directions-boat': 58674, 'directions-boat-filled': 61429, 'directions-bus': 58672, 'directions-bus-filled': 61430, 'directions-car': 58673, 'directions-car-filled': 61431, 'directions-ferry': 58674, 'directions-off': 61711, 'directions-railway': 58676, 'directions-railway-filled': 61432, 'directions-run': 58726, 'directions-subway': 58675, 'directions-subway-filled': 61433, 'directions-train': 58676, 'directions-transit': 58677, 'directions-transit-filled': 61434, 'directions-walk': 58678, 'dirty-lens': 61259, 'disabled-by-default': 62000, 'disabled-visible': 59246, 'disc-full': 58896, 'discord': 60012, 'discount': 60361, 'display-settings': 60311, 'diversity-1': 63703, 'diversity-2': 63704, 'diversity-3': 63705, 'dnd-forwardslash': 58897, 'dns': 59509, 'do-disturb': 61580, 'do-disturb-alt': 61581, 'do-disturb-off': 61582, 'do-disturb-on': 61583, 'do-not-disturb': 58898, 'do-not-disturb-alt': 58897, 'do-not-disturb-off': 58947, 'do-not-disturb-on': 58948, 'do-not-disturb-on-total-silence': 61435, 'do-not-step': 61855, 'do-not-touch': 61872, 'dock': 58126, 'document-scanner': 58874, 'domain': 59374, 'domain-add': 60258, 'domain-disabled': 57583, 'domain-verification': 61260, 'done': 59510, 'done-all': 59511, 'done-outline': 59695, 'donut-large': 59671, 'donut-small': 59672, 'door-back': 61436, 'door-front': 61437, 'door-sliding': 61438, 'doorbell': 61439, 'double-arrow': 59984, 'downhill-skiing': 58633, 'download': 61584, 'download-done': 61585, 'download-for-offline': 61440, 'downloading': 61441, 'drafts': 57681, 'drag-handle': 57949, 'drag-indicator': 59717, 'draw': 59206, 'drive-eta': 58899, 'drive-file-move': 58997, 'drive-file-move-outline': 59809, 'drive-file-move-rtl': 59245, 'drive-file-rename-outline': 59810, 'drive-folder-upload': 59811, 'dry': 61875, 'dry-cleaning': 59992, 'duo': 59813, 'dvr': 57778, 'dynamic-feed': 59924, 'dynamic-form': 61887, 'e-mobiledata': 61442, 'earbuds': 61443, 'earbuds-battery': 61444, 'east': 61919, 'eco': 59957, 'edgesensor-high': 61445, 'edgesensor-low': 61446, 'edit': 58313, 'edit-attributes': 58744, 'edit-calendar': 59202, 'edit-document': 63628, 'edit-location': 58728, 'edit-location-alt': 57797, 'edit-note': 59205, 'edit-notifications': 58661, 'edit-off': 59728, 'edit-road': 61261, 'edit-square': 63629, 'egg': 60108, 'egg-alt': 60104, 'eject': 59643, 'elderly': 61978, 'elderly-woman': 60265, 'electric-bike': 60187, 'electric-bolt': 60444, 'electric-car': 60188, 'electric-meter': 60443, 'electric-moped': 60189, 'electric-rickshaw': 60190, 'electric-scooter': 60191, 'electrical-services': 61698, 'elevator': 61856, 'email': 57534, 'emergency': 57835, 'emergency-recording': 60404, 'emergency-share': 60406, 'emoji-emotions': 59938, 'emoji-events': 59939, 'emoji-flags': 59930, 'emoji-food-beverage': 59931, 'emoji-nature': 59932, 'emoji-objects': 59940, 'emoji-people': 59933, 'emoji-symbols': 59934, 'emoji-transportation': 59935, 'energy-savings-leaf': 60442, 'engineering': 59965, 'enhance-photo-translate': 59644, 'enhanced-encryption': 58943, 'equalizer': 57373, 'error': 57344, 'error-outline': 57345, 'escalator': 61857, 'escalator-warning': 61868, 'euro': 59925, 'euro-symbol': 59686, 'ev-station': 58733, 'event': 59512, 'event-available': 58900, 'event-busy': 58901, 'event-note': 58902, 'event-repeat': 60283, 'event-seat': 59651, 'exit-to-app': 59513, 'expand': 59727, 'expand-circle-down': 59341, 'expand-less': 58830, 'expand-more': 58831, 'explicit': 57374, 'explore': 59514, 'explore-off': 59816, 'exposure': 58314, 'exposure-minus-1': 58315, 'exposure-minus-2': 58316, 'exposure-neg-1': 58315, 'exposure-neg-2': 58316, 'exposure-plus-1': 58317, 'exposure-plus-2': 58318, 'exposure-zero': 58319, 'extension': 59515, 'extension-off': 58613, 'face': 59516, 'face-2': 63706, 'face-3': 63707, 'face-4': 63708, 'face-5': 63709, 'face-6': 63710, 'face-retouching-natural': 61262, 'face-retouching-off': 61447, 'facebook': 62004, 'fact-check': 61637, 'factory': 60348, 'family-restroom': 61858, 'fast-forward': 57375, 'fast-rewind': 57376, 'fastfood': 58746, 'favorite': 59517, 'favorite-border': 59518, 'favorite-outline': 59518, 'fax': 60120, 'featured-play-list': 57453, 'featured-video': 57454, 'feed': 61449, 'feedback': 59519, 'female': 58768, 'fence': 61942, 'festival': 60008, 'fiber-dvr': 57437, 'fiber-manual-record': 57441, 'fiber-new': 57438, 'fiber-pin': 57450, 'fiber-smart-record': 57442, 'file-copy': 57715, 'file-download': 58052, 'file-download-done': 59818, 'file-download-off': 58622, 'file-open': 60147, 'file-present': 59918, 'file-upload': 58054, 'file-upload-off': 63622, 'filter': 58323, 'filter-1': 58320, 'filter-2': 58321, 'filter-3': 58322, 'filter-4': 58324, 'filter-5': 58325, 'filter-6': 58326, 'filter-7': 58327, 'filter-8': 58328, 'filter-9': 58329, 'filter-9-plus': 58330, 'filter-alt': 61263, 'filter-alt-off': 60210, 'filter-b-and-w': 58331, 'filter-center-focus': 58332, 'filter-drama': 58333, 'filter-frames': 58334, 'filter-hdr': 58335, 'filter-list': 57682, 'filter-list-alt': 59726, 'filter-list-off': 60247, 'filter-none': 58336, 'filter-tilt-shift': 58338, 'filter-vintage': 58339, 'find-in-page': 59520, 'find-replace': 59521, 'fingerprint': 59661, 'fire-extinguisher': 61912, 'fire-hydrant': 61859, 'fire-hydrant-alt': 63729, 'fire-truck': 63730, 'fireplace': 59971, 'first-page': 58844, 'fit-screen': 59920, 'fitbit': 59435, 'fitness-center': 60227, 'flag': 57683, 'flag-circle': 60152, 'flaky': 61264, 'flare': 58340, 'flash-auto': 58341, 'flash-off': 58342, 'flash-on': 58343, 'flashlight-off': 61450, 'flashlight-on': 61451, 'flatware': 61452, 'flight': 58681, 'flight-class': 59339, 'flight-land': 59652, 'flight-takeoff': 59653, 'flip': 58344, 'flip-camera-android': 59959, 'flip-camera-ios': 59960, 'flip-to-back': 59522, 'flip-to-front': 59523, 'flood': 60390, 'flourescent': 61453, 'fluorescent': 60465, 'flutter-dash': 57355, 'fmd-bad': 61454, 'fmd-good': 61455, 'foggy': 59416, 'folder': 58055, 'folder-copy': 60349, 'folder-delete': 60212, 'folder-off': 60291, 'folder-open': 58056, 'folder-shared': 58057, 'folder-special': 58903, 'folder-zip': 60204, 'follow-the-signs': 61986, 'font-download': 57703, 'font-download-off': 58617, 'food-bank': 61938, 'forest': 60057, 'fork-left': 60320, 'fork-right': 60332, 'forklift': 63592, 'format-align-center': 57908, 'format-align-justify': 57909, 'format-align-left': 57910, 'format-align-right': 57911, 'format-bold': 57912, 'format-clear': 57913, 'format-color-fill': 57914, 'format-color-reset': 57915, 'format-color-text': 57916, 'format-indent-decrease': 57917, 'format-indent-increase': 57918, 'format-italic': 57919, 'format-line-spacing': 57920, 'format-list-bulleted': 57921, 'format-list-bulleted-add': 63561, 'format-list-numbered': 57922, 'format-list-numbered-rtl': 57959, 'format-overline': 60261, 'format-paint': 57923, 'format-quote': 57924, 'format-shapes': 57950, 'format-size': 57925, 'format-strikethrough': 57926, 'format-textdirection-l-to-r': 57927, 'format-textdirection-r-to-l': 57928, 'format-underline': 57929, 'format-underlined': 57929, 'fort': 60077, 'forum': 57535, 'forward': 57684, 'forward-10': 57430, 'forward-30': 57431, 'forward-5': 57432, 'forward-to-inbox': 61831, 'foundation': 61952, 'free-breakfast': 60228, 'free-cancellation': 59208, 'front-hand': 59241, 'front-loader': 63593, 'fullscreen': 58832, 'fullscreen-exit': 58833, 'functions': 57930, 'g-mobiledata': 61456, 'g-translate': 59687, 'gamepad': 58127, 'games': 57377, 'garage': 61457, 'gas-meter': 60441, 'gavel': 59662, 'generating-tokens': 59209, 'gesture': 57685, 'get-app': 59524, 'gif': 59656, 'gif-box': 59299, 'girl': 60264, 'gite': 58763, 'goat': 1114109, 'golf-course': 60229, 'gpp-bad': 61458, 'gpp-good': 61459, 'gpp-maybe': 61460, 'gps-fixed': 57779, 'gps-not-fixed': 57780, 'gps-off': 57781, 'grade': 59525, 'gradient': 58345, 'grading': 59983, 'grain': 58346, 'graphic-eq': 57784, 'grass': 61957, 'grid-3x3': 61461, 'grid-4x4': 61462, 'grid-goldenratio': 61463, 'grid-off': 58347, 'grid-on': 58348, 'grid-view': 59824, 'group': 59375, 'group-add': 59376, 'group-off': 59207, 'group-remove': 59309, 'group-work': 59526, 'groups': 62003, 'groups-2': 63711, 'groups-3': 63712, 'h-mobiledata': 61464, 'h-plus-mobiledata': 61465, 'hail': 59825, 'handshake': 60363, 'handyman': 61707, 'hardware': 59993, 'hd': 57426, 'hdr-auto': 61466, 'hdr-auto-select': 61467, 'hdr-enhanced-select': 61265, 'hdr-off': 58349, 'hdr-off-select': 61468, 'hdr-on': 58350, 'hdr-on-select': 61469, 'hdr-plus': 61470, 'hdr-strong': 58353, 'hdr-weak': 58354, 'headphones': 61471, 'headphones-battery': 61472, 'headset': 58128, 'headset-mic': 58129, 'headset-off': 58170, 'healing': 58355, 'health-and-safety': 57813, 'hearing': 57379, 'hearing-disabled': 61700, 'heart-broken': 60098, 'heat-pump': 60440, 'height': 59926, 'help': 59527, 'help-center': 61888, 'help-outline': 59645, 'hevc': 61473, 'hexagon': 60217, 'hide-image': 61474, 'hide-source': 61475, 'high-quality': 57380, 'highlight': 57951, 'highlight-alt': 61266, 'highlight-off': 59528, 'highlight-remove': 59528, 'hiking': 58634, 'history': 59529, 'history-edu': 59966, 'history-toggle-off': 61821, 'hive': 60070, 'hls': 60298, 'hls-off': 60300, 'holiday-village': 58762, 'home': 59530, 'home-filled': 59826, 'home-max': 61476, 'home-mini': 61477, 'home-repair-service': 61696, 'home-work': 59913, 'horizontal-distribute': 57364, 'horizontal-rule': 61704, 'horizontal-split': 59719, 'hot-tub': 60230, 'hotel': 58682, 'hotel-class': 59203, 'hourglass-bottom': 59996, 'hourglass-disabled': 61267, 'hourglass-empty': 59531, 'hourglass-full': 59532, 'hourglass-top': 59995, 'house': 59972, 'house-siding': 61954, 'houseboat': 58756, 'how-to-reg': 57716, 'how-to-vote': 57717, 'html': 60286, 'http': 59650, 'https': 59533, 'hub': 59892, 'hvac': 61710, 'ice-skating': 58635, 'icecream': 60009, 'image': 58356, 'image-aspect-ratio': 58357, 'image-not-supported': 61718, 'image-search': 58431, 'imagesearch-roller': 59828, 'import-contacts': 57568, 'import-export': 57539, 'important-devices': 59666, 'inbox': 57686, 'incomplete-circle': 59291, 'indeterminate-check-box': 59657, 'info': 59534, 'info-outline': 59535, 'input': 59536, 'insert-chart': 57931, 'insert-chart-outlined': 57962, 'insert-comment': 57932, 'insert-drive-file': 57933, 'insert-emoticon': 57934, 'insert-invitation': 57935, 'insert-link': 57936, 'insert-page-break': 60106, 'insert-photo': 57937, 'insights': 61586, 'install-desktop': 60273, 'install-mobile': 60274, 'integration-instructions': 61268, 'interests': 59336, 'interpreter-mode': 59451, 'inventory': 57721, 'inventory-2': 57761, 'invert-colors': 59537, 'invert-colors-off': 57540, 'invert-colors-on': 59537, 'ios-share': 59064, 'iron': 58755, 'iso': 58358, 'javascript': 60284, 'join-full': 60139, 'join-inner': 60148, 'join-left': 60146, 'join-right': 60138, 'kayaking': 58636, 'kebab-dining': 59458, 'key': 59196, 'key-off': 60292, 'keyboard': 58130, 'keyboard-alt': 61480, 'keyboard-arrow-down': 58131, 'keyboard-arrow-left': 58132, 'keyboard-arrow-right': 58133, 'keyboard-arrow-up': 58134, 'keyboard-backspace': 58135, 'keyboard-capslock': 58136, 'keyboard-command': 60128, 'keyboard-command-key': 60135, 'keyboard-control': 58835, 'keyboard-control-key': 60134, 'keyboard-double-arrow-down': 60112, 'keyboard-double-arrow-left': 60099, 'keyboard-double-arrow-right': 60105, 'keyboard-double-arrow-up': 60111, 'keyboard-hide': 58138, 'keyboard-option': 60127, 'keyboard-option-key': 60136, 'keyboard-return': 58139, 'keyboard-tab': 58140, 'keyboard-voice': 58141, 'king-bed': 59973, 'kitchen': 60231, 'kitesurfing': 58637, 'label': 59538, 'label-important': 59703, 'label-important-outline': 59720, 'label-off': 59830, 'label-outline': 59539, 'lan': 60207, 'landscape': 58359, 'landslide': 60375, 'language': 59540, 'laptop': 58142, 'laptop-chromebook': 58143, 'laptop-mac': 58144, 'laptop-windows': 58145, 'last-page': 58845, 'launch': 59541, 'layers': 58683, 'layers-clear': 58684, 'leaderboard': 61964, 'leak-add': 58360, 'leak-remove': 58361, 'leave-bags-at-home': 61979, 'legend-toggle': 61723, 'lens': 58362, 'lens-blur': 61481, 'library-add': 57390, 'library-add-check': 59831, 'library-books': 57391, 'library-music': 57392, 'light': 61482, 'light-mode': 58648, 'lightbulb': 57584, 'lightbulb-circle': 60414, 'lightbulb-outline': 59663, 'line-axis': 60058, 'line-style': 59673, 'line-weight': 59674, 'linear-scale': 57952, 'link': 57687, 'link-off': 57711, 'linked-camera': 58424, 'liquor': 60000, 'list': 59542, 'list-alt': 57582, 'live-help': 57542, 'live-tv': 58937, 'living': 61483, 'local-activity': 58687, 'local-airport': 58685, 'local-atm': 58686, 'local-attraction': 58687, 'local-bar': 58688, 'local-cafe': 58689, 'local-car-wash': 58690, 'local-convenience-store': 58691, 'local-dining': 58710, 'local-drink': 58692, 'local-fire-department': 61269, 'local-florist': 58693, 'local-gas-station': 58694, 'local-grocery-store': 58695, 'local-hospital': 58696, 'local-hotel': 58697, 'local-laundry-service': 58698, 'local-library': 58699, 'local-mall': 58700, 'local-movies': 58701, 'local-offer': 58702, 'local-parking': 58703, 'local-pharmacy': 58704, 'local-phone': 58705, 'local-pizza': 58706, 'local-play': 58707, 'local-police': 61270, 'local-post-office': 58708, 'local-print-shop': 58709, 'local-printshop': 58709, 'local-restaurant': 58710, 'local-see': 58711, 'local-shipping': 58712, 'local-taxi': 58713, 'location-city': 59377, 'location-disabled': 57782, 'location-history': 58714, 'location-off': 57543, 'location-on': 57544, 'location-pin': 61915, 'location-searching': 57783, 'lock': 59543, 'lock-clock': 61271, 'lock-open': 59544, 'lock-outline': 59545, 'lock-person': 63731, 'lock-reset': 60126, 'login': 60023, 'logo-dev': 60118, 'logout': 59834, 'looks': 58364, 'looks-3': 58363, 'looks-4': 58365, 'looks-5': 58366, 'looks-6': 58367, 'looks-one': 58368, 'looks-two': 58369, 'loop': 57384, 'loupe': 58370, 'low-priority': 57709, 'loyalty': 59546, 'lte-mobiledata': 61484, 'lte-plus-mobiledata': 61485, 'luggage': 62005, 'lunch-dining': 60001, 'lyrics': 60427, 'macro-off': 63698, 'mail': 57688, 'mail-lock': 60426, 'mail-outline': 57569, 'male': 58766, 'man': 58603, 'man-2': 63713, 'man-3': 63714, 'man-4': 63715, 'manage-accounts': 61486, 'manage-history': 60391, 'manage-search': 61487, 'map': 58715, 'maps-home-work': 61488, 'maps-ugc': 61272, 'margin': 59835, 'mark-as-unread': 59836, 'mark-chat-read': 61835, 'mark-chat-unread': 61833, 'mark-email-read': 61836, 'mark-email-unread': 61834, 'mark-unread-chat-alt': 60317, 'markunread': 57689, 'markunread-mailbox': 59547, 'masks': 61976, 'maximize': 59696, 'media-bluetooth-off': 61489, 'media-bluetooth-on': 61490, 'mediation': 61351, 'medical-information': 60397, 'medical-services': 61705, 'medication': 61491, 'medication-liquid': 60039, 'meeting-room': 60239, 'memory': 58146, 'menu': 58834, 'menu-book': 59929, 'menu-open': 59837, 'merge': 60312, 'merge-type': 57938, 'message': 57545, 'messenger': 57546, 'messenger-outline': 57547, 'mic': 57385, 'mic-external-off': 61273, 'mic-external-on': 61274, 'mic-none': 57386, 'mic-off': 57387, 'microwave': 61956, 'military-tech': 59967, 'minimize': 59697, 'minor-crash': 60401, 'miscellaneous-services': 61708, 'missed-video-call': 57459, 'mms': 58904, 'mobile-friendly': 57856, 'mobile-off': 57857, 'mobile-screen-share': 57575, 'mobiledata-off': 61492, 'mode': 61591, 'mode-comment': 57939, 'mode-edit': 57940, 'mode-edit-outline': 61493, 'mode-fan-off': 60439, 'mode-night': 61494, 'mode-of-travel': 59342, 'mode-standby': 61495, 'model-training': 61647, 'monetization-on': 57955, 'money': 58749, 'money-off': 57948, 'money-off-csred': 61496, 'monitor': 61275, 'monitor-heart': 60066, 'monitor-weight': 61497, 'monochrome-photos': 58371, 'mood': 59378, 'mood-bad': 59379, 'moped': 60200, 'more': 58905, 'more-horiz': 58835, 'more-time': 59997, 'more-vert': 58836, 'mosque': 60082, 'motion-photos-auto': 61498, 'motion-photos-off': 59840, 'motion-photos-on': 59841, 'motion-photos-pause': 61991, 'motion-photos-paused': 59842, 'motorcycle': 59675, 'mouse': 58147, 'move-down': 60257, 'move-to-inbox': 57704, 'move-up': 60260, 'movie': 57388, 'movie-creation': 58372, 'movie-edit': 63552, 'movie-filter': 58426, 'moving': 58625, 'mp': 59843, 'multiline-chart': 59103, 'multiple-stop': 61881, 'multitrack-audio': 57784, 'museum': 59958, 'music-note': 58373, 'music-off': 58432, 'music-video': 57443, 'my-library-add': 57390, 'my-library-books': 57391, 'my-library-music': 57392, 'my-location': 58716, 'nat': 61276, 'nature': 58374, 'nature-people': 58375, 'navigate-before': 58376, 'navigate-next': 58377, 'navigation': 58717, 'near-me': 58729, 'near-me-disabled': 61935, 'nearby-error': 61499, 'nearby-off': 61500, 'nest-cam-wired-stand': 60438, 'network-cell': 57785, 'network-check': 58944, 'network-locked': 58906, 'network-ping': 60362, 'network-wifi': 57786, 'network-wifi-1-bar': 60388, 'network-wifi-2-bar': 60374, 'network-wifi-3-bar': 60385, 'new-label': 58889, 'new-releases': 57393, 'newspaper': 60289, 'next-plan': 61277, 'next-week': 57706, 'nfc': 57787, 'night-shelter': 61937, 'nightlife': 60002, 'nightlight': 61501, 'nightlight-round': 61278, 'nights-stay': 59974, 'no-accounts': 61502, 'no-adult-content': 63742, 'no-backpack': 62007, 'no-cell': 61860, 'no-crash': 60400, 'no-drinks': 61861, 'no-encryption': 58945, 'no-encryption-gmailerrorred': 61503, 'no-flash': 61862, 'no-food': 61863, 'no-luggage': 62011, 'no-meals': 61910, 'no-meals-ouline': 61993, 'no-meeting-room': 60238, 'no-photography': 61864, 'no-sim': 57548, 'no-stroller': 61871, 'no-transfer': 61909, 'noise-aware': 60396, 'noise-control-off': 60403, 'nordic-walking': 58638, 'north': 61920, 'north-east': 61921, 'north-west': 61922, 'not-accessible': 61694, 'not-interested': 57395, 'not-listed-location': 58741, 'not-started': 61649, 'note': 57455, 'note-add': 59548, 'note-alt': 61504, 'notes': 57964, 'notification-add': 58265, 'notification-important': 57348, 'notifications': 59380, 'notifications-active': 59383, 'notifications-none': 59381, 'notifications-off': 59382, 'notifications-on': 59383, 'notifications-paused': 59384, 'now-wallpaper': 57788, 'now-widgets': 57789, 'numbers': 60103, 'offline-bolt': 59698, 'offline-pin': 59658, 'offline-share': 59845, 'oil-barrel': 60437, 'on-device-training': 60413, 'ondemand-video': 58938, 'online-prediction': 61675, 'opacity': 59676, 'open-in-browser': 59549, 'open-in-full': 61902, 'open-in-new': 59550, 'open-in-new-off': 58614, 'open-with': 59551, 'other-houses': 58764, 'outbond': 61992, 'outbound': 57802, 'outbox': 61279, 'outdoor-grill': 59975, 'outgoing-mail': 61650, 'outlet': 61908, 'outlined-flag': 57710, 'output': 60350, 'padding': 59848, 'pages': 59385, 'pageview': 59552, 'paid': 61505, 'palette': 58378, 'pallet': 63594, 'pan-tool': 59685, 'pan-tool-alt': 60345, 'panorama': 58379, 'panorama-fish-eye': 58380, 'panorama-fisheye': 58380, 'panorama-horizontal': 58381, 'panorama-horizontal-select': 61280, 'panorama-photosphere': 59849, 'panorama-photosphere-select': 59850, 'panorama-vertical': 58382, 'panorama-vertical-select': 61281, 'panorama-wide-angle': 58383, 'panorama-wide-angle-select': 61282, 'paragliding': 58639, 'park': 60003, 'party-mode': 59386, 'password': 61506, 'pattern': 61507, 'pause': 57396, 'pause-circle': 57762, 'pause-circle-filled': 57397, 'pause-circle-outline': 57398, 'pause-presentation': 57578, 'payment': 59553, 'payments': 61283, 'paypal': 60045, 'pedal-bike': 60201, 'pending': 61284, 'pending-actions': 61883, 'pentagon': 60240, 'people': 59387, 'people-alt': 59937, 'people-outline': 59388, 'percent': 60248, 'perm-camera-mic': 59554, 'perm-contact-cal': 59555, 'perm-contact-calendar': 59555, 'perm-data-setting': 59556, 'perm-device-info': 59557, 'perm-device-information': 59557, 'perm-identity': 59558, 'perm-media': 59559, 'perm-phone-msg': 59560, 'perm-scan-wifi': 59561, 'person': 59389, 'person-2': 63716, 'person-3': 63717, 'person-4': 63718, 'person-add': 59390, 'person-add-alt': 59981, 'person-add-alt-1': 61285, 'person-add-disabled': 59851, 'person-off': 58640, 'person-outline': 59391, 'person-pin': 58714, 'person-pin-circle': 58730, 'person-remove': 61286, 'person-remove-alt-1': 61287, 'person-search': 61702, 'personal-injury': 59098, 'personal-video': 58939, 'pest-control': 61690, 'pest-control-rodent': 61693, 'pets': 59677, 'phishing': 60119, 'phone': 57549, 'phone-android': 58148, 'phone-bluetooth-speaker': 58907, 'phone-callback': 58953, 'phone-disabled': 59852, 'phone-enabled': 59853, 'phone-forwarded': 58908, 'phone-in-talk': 58909, 'phone-iphone': 58149, 'phone-locked': 58910, 'phone-missed': 58911, 'phone-paused': 58912, 'phonelink': 58150, 'phonelink-erase': 57563, 'phonelink-lock': 57564, 'phonelink-off': 58151, 'phonelink-ring': 57565, 'phonelink-setup': 57566, 'photo': 58384, 'photo-album': 58385, 'photo-camera': 58386, 'photo-camera-back': 61288, 'photo-camera-front': 61289, 'photo-filter': 58427, 'photo-library': 58387, 'photo-size-select-actual': 58418, 'photo-size-select-large': 58419, 'photo-size-select-small': 58420, 'php': 60303, 'piano': 58657, 'piano-off': 58656, 'picture-as-pdf': 58389, 'picture-in-picture': 59562, 'picture-in-picture-alt': 59665, 'pie-chart': 59076, 'pie-chart-outline': 61508, 'pie-chart-outlined': 59077, 'pin': 61509, 'pin-drop': 58718, 'pin-end': 59239, 'pin-invoke': 59235, 'pinch': 60216, 'pivot-table-chart': 59854, 'pix': 60067, 'place': 58719, 'plagiarism': 59994, 'play-arrow': 57399, 'play-circle': 57796, 'play-circle-fill': 57400, 'play-circle-filled': 57400, 'play-circle-outline': 57401, 'play-disabled': 61290, 'play-for-work': 59654, 'play-lesson': 61511, 'playlist-add': 57403, 'playlist-add-check': 57445, 'playlist-add-check-circle': 59366, 'playlist-add-circle': 59365, 'playlist-play': 57439, 'playlist-remove': 60288, 'plumbing': 61703, 'plus-one': 59392, 'podcasts': 61512, 'point-of-sale': 61822, 'policy': 59927, 'poll': 59393, 'polyline': 60347, 'polymer': 59563, 'pool': 60232, 'portable-wifi-off': 57550, 'portrait': 58390, 'post-add': 59936, 'power': 58940, 'power-input': 58166, 'power-off': 58950, 'power-settings-new': 59564, 'precision-manufacturing': 61513, 'pregnant-woman': 59678, 'present-to-all': 57567, 'preview': 61893, 'price-change': 61514, 'price-check': 61515, 'print': 59565, 'print-disabled': 59855, 'priority-high': 58949, 'privacy-tip': 61660, 'private-connectivity': 59204, 'production-quantity-limits': 57809, 'propane': 60436, 'propane-tank': 60435, 'psychology': 59978, 'psychology-alt': 63722, 'public': 59403, 'public-off': 61898, 'publish': 57941, 'published-with-changes': 62002, 'punch-clock': 60072, 'push-pin': 61709, 'qr-code': 61291, 'qr-code-2': 57354, 'qr-code-scanner': 61958, 'query-builder': 59566, 'query-stats': 58620, 'question-answer': 59567, 'question-mark': 60299, 'queue': 57404, 'queue-music': 57405, 'queue-play-next': 57446, 'quick-contacts-dialer': 57551, 'quick-contacts-mail': 57552, 'quickreply': 61292, 'quiz': 61516, 'quora': 60056, 'r-mobiledata': 61517, 'radar': 61518, 'radio': 57406, 'radio-button-checked': 59447, 'radio-button-off': 59446, 'radio-button-on': 59447, 'radio-button-unchecked': 59446, 'railway-alert': 59857, 'ramen-dining': 60004, 'ramp-left': 60316, 'ramp-right': 60310, 'rate-review': 58720, 'raw-off': 61519, 'raw-on': 61520, 'read-more': 61293, 'real-estate-agent': 59194, 'rebase-edit': 63558, 'receipt': 59568, 'receipt-long': 61294, 'recent-actors': 57407, 'recommend': 59858, 'record-voice-over': 59679, 'rectangle': 60244, 'recycling': 59232, 'reddit': 60064, 'redeem': 59569, 'redo': 57690, 'reduce-capacity': 61980, 'refresh': 58837, 'remember-me': 61521, 'remove': 57691, 'remove-circle': 57692, 'remove-circle-outline': 57693, 'remove-done': 59859, 'remove-from-queue': 57447, 'remove-moderator': 59860, 'remove-red-eye': 58391, 'remove-road': 60412, 'remove-shopping-cart': 59688, 'reorder': 59646, 'repartition': 63720, 'repeat': 57408, 'repeat-on': 59862, 'repeat-one': 57409, 'repeat-one-on': 59863, 'replay': 57410, 'replay-10': 57433, 'replay-30': 57434, 'replay-5': 57435, 'replay-circle-filled': 59864, 'reply': 57694, 'reply-all': 57695, 'report': 57696, 'report-gmailerrorred': 61522, 'report-off': 57712, 'report-problem': 59570, 'request-page': 61996, 'request-quote': 61878, 'reset-tv': 59865, 'restart-alt': 61523, 'restaurant': 58732, 'restaurant-menu': 58721, 'restore': 59571, 'restore-from-trash': 59704, 'restore-page': 59689, 'reviews': 61524, 'rice-bowl': 61941, 'ring-volume': 57553, 'rocket': 60325, 'rocket-launch': 60315, 'roller-shades': 60434, 'roller-shades-closed': 60433, 'roller-skating': 60365, 'roofing': 61953, 'room': 59572, 'room-preferences': 61880, 'room-service': 60233, 'rotate-90-degrees-ccw': 58392, 'rotate-90-degrees-cw': 60075, 'rotate-left': 58393, 'rotate-right': 58394, 'roundabout-left': 60313, 'roundabout-right': 60323, 'rounded-corner': 59680, 'route': 60109, 'router': 58152, 'rowing': 59681, 'rss-feed': 57573, 'rsvp': 61525, 'rtt': 59821, 'rule': 61890, 'rule-folder': 61897, 'run-circle': 61295, 'running-with-errors': 58653, 'rv-hookup': 58946, 'safety-check': 60399, 'safety-divider': 57804, 'sailing': 58626, 'sanitizer': 61981, 'satellite': 58722, 'satellite-alt': 60218, 'save': 57697, 'save-alt': 57713, 'save-as': 60256, 'saved-search': 59921, 'savings': 58091, 'scale': 60255, 'scanner': 58153, 'scatter-plot': 57960, 'schedule': 59573, 'schedule-send': 59914, 'schema': 58621, 'school': 59404, 'science': 59979, 'score': 57961, 'scoreboard': 60368, 'screen-lock-landscape': 57790, 'screen-lock-portrait': 57791, 'screen-lock-rotation': 57792, 'screen-rotation': 57793, 'screen-rotation-alt': 60398, 'screen-search-desktop': 61296, 'screen-share': 57570, 'screenshot': 61526, 'screenshot-monitor': 60424, 'scuba-diving': 60366, 'sd': 59869, 'sd-card': 58915, 'sd-card-alert': 61527, 'sd-storage': 57794, 'search': 59574, 'search-off': 60022, 'security': 58154, 'security-update': 61528, 'security-update-good': 61529, 'security-update-warning': 61530, 'segment': 59723, 'select-all': 57698, 'self-improvement': 60024, 'sell': 61531, 'send': 57699, 'send-and-archive': 59916, 'send-time-extension': 60123, 'send-to-mobile': 61532, 'sensor-door': 61877, 'sensor-occupied': 60432, 'sensor-window': 61876, 'sensors': 58654, 'sensors-off': 58655, 'sentiment-dissatisfied': 59409, 'sentiment-neutral': 59410, 'sentiment-satisfied': 59411, 'sentiment-satisfied-alt': 57581, 'sentiment-very-dissatisfied': 59412, 'sentiment-very-satisfied': 59413, 'set-meal': 61930, 'settings': 59576, 'settings-accessibility': 61533, 'settings-applications': 59577, 'settings-backup-restore': 59578, 'settings-bluetooth': 59579, 'settings-brightness': 59581, 'settings-cell': 59580, 'settings-display': 59581, 'settings-ethernet': 59582, 'settings-input-antenna': 59583, 'settings-input-component': 59584, 'settings-input-composite': 59585, 'settings-input-hdmi': 59586, 'settings-input-svideo': 59587, 'settings-overscan': 59588, 'settings-phone': 59589, 'settings-power': 59590, 'settings-remote': 59591, 'settings-suggest': 61534, 'settings-system-daydream': 57795, 'settings-voice': 59592, 'severe-cold': 60371, 'shape-line': 63699, 'share': 59405, 'share-arrival-time': 58660, 'share-location': 61535, 'shelves': 63598, 'shield': 59872, 'shield-moon': 60073, 'shop': 59593, 'shop-2': 57758, 'shop-two': 59594, 'shopify': 60061, 'shopping-bag': 61900, 'shopping-basket': 59595, 'shopping-cart': 59596, 'shopping-cart-checkout': 60296, 'short-text': 57953, 'shortcut': 61536, 'show-chart': 59105, 'shower': 61537, 'shuffle': 57411, 'shuffle-on': 59873, 'shutter-speed': 58429, 'sick': 61984, 'sign-language': 60389, 'signal-cellular-0-bar': 61608, 'signal-cellular-4-bar': 57800, 'signal-cellular-alt': 57858, 'signal-cellular-alt-1-bar': 60383, 'signal-cellular-alt-2-bar': 60387, 'signal-cellular-connected-no-internet-0-bar': 61612, 'signal-cellular-connected-no-internet-4-bar': 57805, 'signal-cellular-no-sim': 57806, 'signal-cellular-nodata': 61538, 'signal-cellular-null': 57807, 'signal-cellular-off': 57808, 'signal-wifi-0-bar': 61616, 'signal-wifi-4-bar': 57816, 'signal-wifi-4-bar-lock': 57817, 'signal-wifi-bad': 61539, 'signal-wifi-connected-no-internet-4': 61540, 'signal-wifi-off': 57818, 'signal-wifi-statusbar-4-bar': 61541, 'signal-wifi-statusbar-connected-no-internet-4': 61542, 'signal-wifi-statusbar-null': 61543, 'signpost': 60305, 'sim-card': 58155, 'sim-card-alert': 58916, 'sim-card-download': 61544, 'single-bed': 59976, 'sip': 61545, 'skateboarding': 58641, 'skip-next': 57412, 'skip-previous': 57413, 'sledding': 58642, 'slideshow': 58395, 'slow-motion-video': 57448, 'smart-button': 61889, 'smart-display': 61546, 'smart-screen': 61547, 'smart-toy': 61548, 'smartphone': 58156, 'smoke-free': 60234, 'smoking-rooms': 60235, 'sms': 58917, 'sms-failed': 58918, 'snapchat': 60014, 'snippet-folder': 61895, 'snooze': 57414, 'snowboarding': 58643, 'snowing': 59407, 'snowmobile': 58627, 'snowshoeing': 58644, 'soap': 61874, 'social-distance': 57803, 'solar-power': 60431, 'sort': 57700, 'sort-by-alpha': 57427, 'sos': 60407, 'soup-kitchen': 59347, 'source': 61892, 'south': 61923, 'south-america': 59364, 'south-east': 61924, 'south-west': 61925, 'spa': 60236, 'space-bar': 57942, 'space-dashboard': 58987, 'spatial-audio': 60395, 'spatial-audio-off': 60392, 'spatial-tracking': 60394, 'speaker': 58157, 'speaker-group': 58158, 'speaker-notes': 59597, 'speaker-notes-off': 59690, 'speaker-phone': 57554, 'speed': 59876, 'spellcheck': 59598, 'splitscreen': 61549, 'spoke': 59815, 'sports': 59952, 'sports-bar': 61939, 'sports-baseball': 59985, 'sports-basketball': 59942, 'sports-cricket': 59943, 'sports-esports': 59944, 'sports-football': 59945, 'sports-golf': 59946, 'sports-gymnastics': 60356, 'sports-handball': 59955, 'sports-hockey': 59947, 'sports-kabaddi': 59956, 'sports-martial-arts': 60137, 'sports-mma': 59948, 'sports-motorsports': 59949, 'sports-rugby': 59950, 'sports-score': 61550, 'sports-soccer': 59951, 'sports-tennis': 59954, 'sports-volleyball': 59953, 'square': 60214, 'square-foot': 59977, 'ssid-chart': 60262, 'stacked-bar-chart': 59878, 'stacked-line-chart': 61995, 'stadium': 60304, 'stairs': 61865, 'star': 59448, 'star-border': 59450, 'star-border-purple500': 61593, 'star-half': 59449, 'star-outline': 61551, 'star-purple500': 61594, 'star-rate': 61676, 'stars': 59600, 'start': 57481, 'stay-current-landscape': 57555, 'stay-current-portrait': 57556, 'stay-primary-landscape': 57557, 'stay-primary-portrait': 57558, 'sticky-note-2': 61948, 'stop': 57415, 'stop-circle': 61297, 'stop-screen-share': 57571, 'storage': 57819, 'store': 59601, 'store-mall-directory': 58723, 'storefront': 59922, 'storm': 61552, 'straight': 60309, 'straighten': 58396, 'stream': 59881, 'streetview': 58734, 'strikethrough-s': 57943, 'stroller': 61870, 'style': 58397, 'subdirectory-arrow-left': 58841, 'subdirectory-arrow-right': 58842, 'subject': 59602, 'subscript': 61713, 'subscriptions': 57444, 'subtitles': 57416, 'subtitles-off': 61298, 'subway': 58735, 'summarize': 61553, 'sunny': 59418, 'sunny-snowing': 59417, 'superscript': 61714, 'supervised-user-circle': 59705, 'supervisor-account': 59603, 'support': 61299, 'support-agent': 61666, 'surfing': 58645, 'surround-sound': 57417, 'swap-calls': 57559, 'swap-horiz': 59604, 'swap-horizontal-circle': 59699, 'swap-vert': 59605, 'swap-vert-circle': 59606, 'swap-vertical-circle': 59606, 'swipe': 59884, 'swipe-down': 60243, 'swipe-down-alt': 60208, 'swipe-left': 60249, 'swipe-left-alt': 60211, 'swipe-right': 60242, 'swipe-right-alt': 60246, 'swipe-up': 60206, 'swipe-up-alt': 60213, 'swipe-vertical': 60241, 'switch-access-shortcut': 59361, 'switch-access-shortcut-add': 59362, 'switch-account': 59885, 'switch-camera': 58398, 'switch-left': 61905, 'switch-right': 61906, 'switch-video': 58399, 'synagogue': 60080, 'sync': 58919, 'sync-alt': 59928, 'sync-disabled': 58920, 'sync-lock': 60142, 'sync-problem': 58921, 'system-security-update': 61554, 'system-security-update-good': 61555, 'system-security-update-warning': 61556, 'system-update': 58922, 'system-update-alt': 59607, 'system-update-tv': 59607, 'tab': 59608, 'tab-unselected': 59609, 'table-bar': 60114, 'table-chart': 57957, 'table-restaurant': 60102, 'table-rows': 61697, 'table-view': 61886, 'tablet': 58159, 'tablet-android': 58160, 'tablet-mac': 58161, 'tag': 59887, 'tag-faces': 58400, 'takeout-dining': 60020, 'tap-and-play': 58923, 'tapas': 61929, 'task': 61557, 'task-alt': 58086, 'taxi-alert': 61300, 'telegram': 60011, 'temple-buddhist': 60083, 'temple-hindu': 60079, 'terminal': 60302, 'terrain': 58724, 'text-decrease': 60125, 'text-fields': 57954, 'text-format': 57701, 'text-increase': 60130, 'text-rotate-up': 59706, 'text-rotate-vertical': 59707, 'text-rotation-angledown': 59708, 'text-rotation-angleup': 59709, 'text-rotation-down': 59710, 'text-rotation-none': 59711, 'text-snippet': 61894, 'textsms': 57560, 'texture': 58401, 'theater-comedy': 60006, 'theaters': 59610, 'thermostat': 61558, 'thermostat-auto': 61559, 'thumb-down': 59611, 'thumb-down-alt': 59414, 'thumb-down-off-alt': 59890, 'thumb-up': 59612, 'thumb-up-alt': 59415, 'thumb-up-off-alt': 59891, 'thumbs-up-down': 59613, 'thunderstorm': 60379, 'tiktok': 60030, 'time-to-leave': 58924, 'timelapse': 58402, 'timeline': 59682, 'timer': 58405, 'timer-10': 58403, 'timer-10-select': 61562, 'timer-3': 58404, 'timer-3-select': 61563, 'timer-off': 58406, 'tips-and-updates': 59290, 'tire-repair': 60360, 'title': 57956, 'toc': 59614, 'today': 59615, 'toggle-off': 59893, 'toggle-on': 59894, 'token': 59941, 'toll': 59616, 'tonality': 58407, 'topic': 61896, 'tornado': 57753, 'touch-app': 59667, 'tour': 61301, 'toys': 58162, 'track-changes': 59617, 'traffic': 58725, 'train': 58736, 'tram': 58737, 'transcribe': 63724, 'transfer-within-a-station': 58738, 'transform': 58408, 'transgender': 58765, 'transit-enterexit': 58745, 'translate': 59618, 'travel-explore': 58075, 'trending-down': 59619, 'trending-flat': 59620, 'trending-neutral': 59620, 'trending-up': 59621, 'trip-origin': 58747, 'trolley': 63595, 'troubleshoot': 57810, 'try': 61564, 'tsunami': 60376, 'tty': 61866, 'tune': 58409, 'tungsten': 61565, 'turn-left': 60326, 'turn-right': 60331, 'turn-sharp-left': 60327, 'turn-sharp-right': 60330, 'turn-slight-left': 60324, 'turn-slight-right': 60314, 'turned-in': 59622, 'turned-in-not': 59623, 'tv': 58163, 'tv-off': 58951, 'two-wheeler': 59897, 'type-specimen': 63728, 'u-turn-left': 60321, 'u-turn-right': 60322, 'umbrella': 61869, 'unarchive': 57705, 'undo': 57702, 'unfold-less': 58838, 'unfold-less-double': 63695, 'unfold-more': 58839, 'unfold-more-double': 63696, 'unpublished': 62006, 'unsubscribe': 57579, 'upcoming': 61566, 'update': 59683, 'update-disabled': 57461, 'upgrade': 61691, 'upload': 61595, 'upload-file': 59900, 'usb': 57824, 'usb-off': 58618, 'vaccines': 57656, 'vape-free': 60358, 'vaping-rooms': 60367, 'verified': 61302, 'verified-user': 59624, 'vertical-align-bottom': 57944, 'vertical-align-center': 57945, 'vertical-align-top': 57946, 'vertical-distribute': 57462, 'vertical-shades': 60430, 'vertical-shades-closed': 60429, 'vertical-split': 59721, 'vibration': 58925, 'video-call': 57456, 'video-camera-back': 61567, 'video-camera-front': 61568, 'video-chat': 63648, 'video-collection': 57418, 'video-file': 60295, 'video-label': 57457, 'video-library': 57418, 'video-settings': 60021, 'video-stable': 61569, 'videocam': 57419, 'videocam-off': 57420, 'videogame-asset': 58168, 'videogame-asset-off': 58624, 'view-agenda': 59625, 'view-array': 59626, 'view-carousel': 59627, 'view-column': 59628, 'view-comfortable': 58410, 'view-comfy': 58410, 'view-comfy-alt': 60275, 'view-compact': 58411, 'view-compact-alt': 60276, 'view-cozy': 60277, 'view-day': 59629, 'view-headline': 59630, 'view-in-ar': 59902, 'view-kanban': 60287, 'view-list': 59631, 'view-module': 59632, 'view-quilt': 59633, 'view-sidebar': 61716, 'view-stream': 59634, 'view-timeline': 60293, 'view-week': 59635, 'vignette': 58421, 'villa': 58758, 'visibility': 59636, 'visibility-off': 59637, 'voice-chat': 58926, 'voice-over-off': 59722, 'voicemail': 57561, 'volcano': 60378, 'volume-down': 57421, 'volume-down-alt': 59292, 'volume-mute': 57422, 'volume-off': 57423, 'volume-up': 57424, 'volunteer-activism': 60016, 'vpn-key': 57562, 'vpn-key-off': 60282, 'vpn-lock': 58927, 'vrpano': 61570, 'wallet': 63743, 'wallet-giftcard': 59638, 'wallet-membership': 59639, 'wallet-travel': 59640, 'wallpaper': 57788, 'warehouse': 60344, 'warning': 57346, 'warning-amber': 61571, 'wash': 61873, 'watch': 58164, 'watch-later': 59684, 'watch-off': 60131, 'water': 61572, 'water-damage': 61955, 'water-drop': 59288, 'waterfall-chart': 59904, 'waves': 57718, 'waving-hand': 59238, 'wb-auto': 58412, 'wb-cloudy': 58413, 'wb-incandescent': 58414, 'wb-iridescent': 58422, 'wb-shade': 59905, 'wb-sunny': 58416, 'wb-twighlight': 59906, 'wb-twilight': 57798, 'wc': 58941, 'web': 57425, 'web-asset': 57449, 'web-asset-off': 58615, 'web-stories': 58773, 'webhook': 60306, 'wechat': 60033, 'weekend': 57707, 'west': 61926, 'whatshot': 59406, 'wheelchair-pickup': 61867, 'where-to-vote': 57719, 'widgets': 57789, 'width-full': 63733, 'width-normal': 63734, 'width-wide': 63735, 'wifi': 58942, 'wifi-1-bar': 58570, 'wifi-2-bar': 58585, 'wifi-calling': 61303, 'wifi-calling-3': 61573, 'wifi-channel': 60266, 'wifi-find': 60209, 'wifi-lock': 57825, 'wifi-off': 58952, 'wifi-password': 60267, 'wifi-protected-setup': 61692, 'wifi-tethering': 57826, 'wifi-tethering-error': 60121, 'wifi-tethering-error-rounded': 61574, 'wifi-tethering-off': 61575, 'wind-power': 60428, 'window': 61576, 'wine-bar': 61928, 'woman': 57662, 'woman-2': 63719, 'woo-commerce': 60013, 'wordpress': 60063, 'work': 59641, 'work-history': 60425, 'work-off': 59714, 'work-outline': 59715, 'workspace-premium': 59311, 'workspaces': 57760, 'workspaces-filled': 59917, 'workspaces-outline': 59919, 'wrap-text': 57947, 'wrong-location': 61304, 'wysiwyg': 61891, 'yard': 61577, 'youtube-searched-for': 59642, 'zoom-in': 59647, 'zoom-in-map': 60205, 'zoom-out': 59648, 'zoom-out-map': 58731};
        r0 = a4;
        r0['exports'] = r1;
        r0 = undefined;
        return r0;
    };
    r6 = 516;
    r5 = new Array(0);
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r2 = a5;
        r5 = a6;
        var _closure1_slot0 = r4;
        var _closure1_slot1 = r5;
        r0 = 0;
        r3 = r5[r0];
        r0 = undefined;
        r3 = r4.bind(r0)(r3);
        r6 = global;
        r11 = r6.Object;
        r10 = r11.defineProperty;
        r8 = {};
        r9 = true;
        r8['value'] = r9;
        r7 = '__esModule';
        r7 = r10.bind(r11)(r2, r7, r8);
        r2['default'] = r0;
        r8 = r6.Object;
        r7 = r8.defineProperty;
        r6 = {};
        r6['enumerable'] = r9;
        r1 = function() { // Original name: get, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 1;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.useAsyncStorage;
            return r0;
        };
        r6['get'] = r1;
        r1 = 'useAsyncStorage';
        r1 = r7.bind(r8)(r2, r1, r6);
        r1 = 2;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        r1 = r1.default;
        r2['default'] = r1;
        return r0;
    };
    r6 = 517;
    r5 = [1, 518, 519];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r6 = a5;
        r5 = a6;
        r0 = 0;
        r1 = r5[r0];
        r0 = undefined;
        r3 = r4.bind(r0)(r1);
        r1 = global;
        r9 = r1.Object;
        r8 = r9.defineProperty;
        r7 = {};
        r1 = true;
        r7['value'] = r1;
        r1 = '__esModule';
        r1 = r8.bind(r9)(r6, r1, r7);
        r1 = function(a0) { // Original name: useAsyncStorage, environment: r2
            r0 = a0;
            var _closure2_slot0 = r0;
            r0 = {};
            r2 = function() { // Original name: getItem, environment: r1
                _fun5643: for(var _fun5643_ip = 0; ; ) switch(_fun5643_ip) {
case 0:
                    r2 = undefined;
                    r1 = arguments.length;
                    r0 = global;
                    r0 = r0.Array;
                    r3 = r0.prototype;
                    r3 = Object.create(r3, {constructor: {value: r0}});
                    r8 = r3;
                    r7 = r1;
                    r0 = new r8[r0](r7, r6);
                    r5 = r0 instanceof Object ? r0 : r3;
                    r0 = 0;
                    r3 = r0 < r1;
                    if(!r3) { _fun5643_ip = 60; continue _fun5643 }
case 45:
                    r3 = arguments[r0];
                    r5[r0] = r3;
                    r0 = r0 + 1;
                    if(r0 < r1) { _fun5643_ip = 45; continue _fun5643 }
case 60:
                    r1 = _closure1_slot0;
                    r1 = r1.default;
                    r3 = r1.getItem;
                    r2 = r3.apply;
                    r0 = _closure1_slot0;
                    r1 = r0.default;
                    r0 = _closure2_slot0;
                    r4 = new Array(1);
                    r4[0] = r0;
                    r0 = r4.concat;
                    r0 = r0.bind(r4)(r5);
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                }
            };
            r0['getItem'] = r2;
            r2 = function() { // Original name: setItem, environment: r1
                _fun5644: for(var _fun5644_ip = 0; ; ) switch(_fun5644_ip) {
case 0:
                    r2 = undefined;
                    r1 = arguments.length;
                    r0 = global;
                    r0 = r0.Array;
                    r3 = r0.prototype;
                    r3 = Object.create(r3, {constructor: {value: r0}});
                    r8 = r3;
                    r7 = r1;
                    r0 = new r8[r0](r7, r6);
                    r5 = r0 instanceof Object ? r0 : r3;
                    r0 = 0;
                    r3 = r0 < r1;
                    if(!r3) { _fun5644_ip = 60; continue _fun5644 }
case 45:
                    r3 = arguments[r0];
                    r5[r0] = r3;
                    r0 = r0 + 1;
                    if(r0 < r1) { _fun5644_ip = 45; continue _fun5644 }
case 60:
                    r1 = _closure1_slot0;
                    r1 = r1.default;
                    r3 = r1.setItem;
                    r2 = r3.apply;
                    r0 = _closure1_slot0;
                    r1 = r0.default;
                    r0 = _closure2_slot0;
                    r4 = new Array(1);
                    r4[0] = r0;
                    r0 = r4.concat;
                    r0 = r0.bind(r4)(r5);
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                }
            };
            r0['setItem'] = r2;
            r2 = function() { // Original name: mergeItem, environment: r1
                _fun5645: for(var _fun5645_ip = 0; ; ) switch(_fun5645_ip) {
case 0:
                    r2 = undefined;
                    r1 = arguments.length;
                    r0 = global;
                    r0 = r0.Array;
                    r3 = r0.prototype;
                    r3 = Object.create(r3, {constructor: {value: r0}});
                    r8 = r3;
                    r7 = r1;
                    r0 = new r8[r0](r7, r6);
                    r5 = r0 instanceof Object ? r0 : r3;
                    r0 = 0;
                    r3 = r0 < r1;
                    if(!r3) { _fun5645_ip = 60; continue _fun5645 }
case 45:
                    r3 = arguments[r0];
                    r5[r0] = r3;
                    r0 = r0 + 1;
                    if(r0 < r1) { _fun5645_ip = 45; continue _fun5645 }
case 60:
                    r1 = _closure1_slot0;
                    r1 = r1.default;
                    r3 = r1.mergeItem;
                    r2 = r3.apply;
                    r0 = _closure1_slot0;
                    r1 = r0.default;
                    r0 = _closure2_slot0;
                    r4 = new Array(1);
                    r4[0] = r0;
                    r0 = r4.concat;
                    r0 = r0.bind(r4)(r5);
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                }
            };
            r0['mergeItem'] = r2;
            r1 = function() { // Original name: removeItem, environment: r1
                _fun5646: for(var _fun5646_ip = 0; ; ) switch(_fun5646_ip) {
case 0:
                    r2 = undefined;
                    r1 = arguments.length;
                    r0 = global;
                    r0 = r0.Array;
                    r3 = r0.prototype;
                    r3 = Object.create(r3, {constructor: {value: r0}});
                    r8 = r3;
                    r7 = r1;
                    r0 = new r8[r0](r7, r6);
                    r5 = r0 instanceof Object ? r0 : r3;
                    r0 = 0;
                    r3 = r0 < r1;
                    if(!r3) { _fun5646_ip = 60; continue _fun5646 }
case 45:
                    r3 = arguments[r0];
                    r5[r0] = r3;
                    r0 = r0 + 1;
                    if(r0 < r1) { _fun5646_ip = 45; continue _fun5646 }
case 60:
                    r1 = _closure1_slot0;
                    r1 = r1.default;
                    r3 = r1.removeItem;
                    r2 = r3.apply;
                    r0 = _closure1_slot0;
                    r1 = r0.default;
                    r0 = _closure2_slot0;
                    r4 = new Array(1);
                    r4[0] = r0;
                    r0 = r4.concat;
                    r0 = r0.bind(r4)(r5);
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                }
            };
            r0['removeItem'] = r1;
            return r0;
        };
        r6['useAsyncStorage'] = r1;
        r1 = 1;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        var _closure1_slot0 = r1;
        return r0;
    };
    r6 = 518;
    r5 = [1, 519];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5647: for(var _fun5647_ip = 0; ; ) switch(_fun5647_ip) {
case 0:
            r6 = a1;
            r2 = a5;
            r7 = a6;
            var _closure1_slot0 = r6;
            var _closure1_slot1 = r7;
            r0 = 0;
            r1 = r7[r0];
            r0 = undefined;
            r5 = r6.bind(r0)(r1);
            r1 = global;
            r10 = r1.Object;
            r9 = r10.defineProperty;
            r8 = {};
            r4 = true;
            r8['value'] = r4;
            r4 = '__esModule';
            r4 = r9.bind(r10)(r2, r4, r8);
            r2['default'] = r0;
            r4 = 1;
            r4 = r7[r4];
            r4 = r6.bind(r0)(r4);
            r4 = r5.bind(r0)(r4);
            var _closure1_slot2 = r4;
            r4 = 2;
            r4 = r7[r4];
            r4 = r6.bind(r0)(r4);
            r4 = r5.bind(r0)(r4);
            var _closure1_slot3 = r4;
            r4 = r4.default;
            if(r4) { _fun5647_ip = 152; continue _fun5647 }
case 120:
            r5 = r1.Error;
            r1 = r5.prototype;
            r4 = Object.create(r1, {constructor: {value: r5}});
            r13 = "[@RNC/AsyncStorage]: NativeModule: AsyncStorage is null.\n\nTo fix this issue try these steps:\n\n  • Uninstall, rebuild and restart the app.\n\n  • Run the packager with `--reset-cache` flag.\n\n  • If you are using CocoaPods on iOS, run `pod install` in the `ios` directory, then rebuild and re-run the app.\n\n  • Make sure your project's `package.json` depends on `@react-native-async-storage/async-storage`, even if you only depend on it indirectly through other dependencies. CLI only autolinks native modules found in your `package.json`.\n\n  • If this happens while testing with Jest, check out how to integrate AsyncStorage here: https://react-native-async-storage.github.io/async-storage/docs/advanced/jest\n\nIf none of these fix the issue, please open an issue on the GitHub repository: https://github.com/react-native-async-storage/async-storage/issues\n";
            r14 = r4;
            r1 = new r14[r5](r13, r12);
            r1 = r1 instanceof Object ? r1 : r4;
            throw r1;
case 152:
            r1 = function() { // Environment: r3
                r0 = new Array(0);
                var _closure2_slot0 = r0;
                r0 = new Array(0);
                var _closure2_slot1 = r0;
                r0 = null;
                var _closure2_slot2 = r0;
                r0 = {};
                r2 = function(a0, a1) { // Original name: getItem, environment: r1
                    r1 = a0;
                    var _closure3_slot0 = r1;
                    r1 = a1;
                    var _closure3_slot1 = r1;
                    r1 = global;
                    r2 = r1.Promise;
                    r1 = r2.prototype;
                    r1 = Object.create(r1, {constructor: {value: r2}});
                    r3 = function(a0, a1) { // Environment: r0
                        r0 = a0;
                        var _closure4_slot0 = r0;
                        r0 = a1;
                        var _closure4_slot1 = r0;
                        r4 = _closure1_slot0;
                        r3 = _closure1_slot1;
                        r0 = 3;
                        r3 = r3[r0];
                        r0 = undefined;
                        r3 = r4.bind(r0)(r3);
                        r3 = r3.checkValidInput;
                        r5 = _closure3_slot0;
                        r3 = r3.bind(r0)(r5);
                        r2 = _closure1_slot3;
                        r4 = r2.default;
                        r3 = r4.multiGet;
                        r2 = new Array(1);
                        r2[0] = r5;
                        r1 = function(a0, a1) { // Environment: r1
                            _fun5651: for(var _fun5651_ip = 0; ; ) switch(_fun5651_ip) {
case 0:
                                r3 = a1;
                                r1 = null;
                                r0 = r3 != r1;
                                r4 = null;
                                if(!r0) { _fun5651_ip = 49; continue _fun5651 }
case 14:
                                r0 = 0;
                                r5 = r3[r0];
                                r2 = r5 != r1;
                                r4 = null;
                                if(!r2) { _fun5651_ip = 49; continue _fun5651 }
case 29:
                                r2 = 1;
                                r5 = r5[r2];
                                r4 = null;
                                if(!r5) { _fun5651_ip = 49; continue _fun5651 }
case 41:
                                r0 = r3[r0];
                                r4 = r0[r2];
case 49:
                                r3 = _closure1_slot0;
                                r2 = _closure1_slot1;
                                r0 = 3;
                                r2 = r2[r0];
                                r0 = undefined;
                                r2 = r3.bind(r0)(r2);
                                r3 = r2.convertErrors;
                                r2 = a0;
                                r3 = r3.bind(r0)(r2);
                                r5 = _closure3_slot1;
                                if(!(r5 != r1)) { _fun5651_ip = 124; continue _fun5651 }
case 99:
                                r2 = _closure3_slot1;
                                r5 = r3 == r1;
                                r1 = undefined;
                                if(r5) { _fun5651_ip = 118; continue _fun5651 }
case 112:
                                r5 = 0;
                                r1 = r3[r5];
case 118:
                                r1 = r2.bind(r0)(r1, r4);
case 124:
                                if(r3) { _fun5651_ip = 141; continue _fun5651 }
case 130:
                                r2 = _closure4_slot0;
                                r2 = r2.bind(r0)(r4);
                                _fun5651_ip = 156; continue _fun5651;
case 141:
                                r2 = _closure4_slot1;
                                r1 = 0;
                                r1 = r3[r1];
                                r1 = r2.bind(r0)(r1);
case 156:
                                return r0;
                            }
                        };
                        r1 = r3.bind(r4)(r2, r1);
                        return r0;
                    };
                    r4 = r1;
                    r0 = new r4[r2](r3, r2);
                    r0 = r0 instanceof Object ? r0 : r1;
                    return r0;
                };
                r0['getItem'] = r2;
                r2 = function(a0, a1, a2) { // Original name: setItem, environment: r1
                    r1 = a0;
                    var _closure3_slot0 = r1;
                    r1 = a1;
                    var _closure3_slot1 = r1;
                    r1 = a2;
                    var _closure3_slot2 = r1;
                    r1 = global;
                    r2 = r1.Promise;
                    r1 = r2.prototype;
                    r1 = Object.create(r1, {constructor: {value: r2}});
                    r3 = function(a0, a1) { // Environment: r0
                        r0 = a0;
                        var _closure4_slot0 = r0;
                        r0 = a1;
                        var _closure4_slot1 = r0;
                        r4 = _closure1_slot0;
                        r2 = _closure1_slot1;
                        r0 = 3;
                        r2 = r2[r0];
                        r0 = undefined;
                        r2 = r4.bind(r0)(r2);
                        r4 = r2.checkValidInput;
                        r6 = _closure3_slot0;
                        r2 = _closure3_slot1;
                        r4 = r4.bind(r0)(r6, r2);
                        r3 = _closure1_slot3;
                        r4 = r3.default;
                        r3 = r4.multiSet;
                        r5 = new Array(2);
                        r5[0] = r6;
                        r5[1] = r2;
                        r2 = new Array(1);
                        r2[0] = r5;
                        r1 = function(a0) { // Environment: r1
                            _fun5654: for(var _fun5654_ip = 0; ; ) switch(_fun5654_ip) {
case 0:
                                r2 = _closure1_slot0;
                                r1 = _closure1_slot1;
                                r0 = 3;
                                r1 = r1[r0];
                                r0 = undefined;
                                r1 = r2.bind(r0)(r1);
                                r2 = r1.convertErrors;
                                r1 = a0;
                                r3 = r2.bind(r0)(r1);
                                r4 = _closure3_slot2;
                                r1 = null;
                                if(!(r4 != r1)) { _fun5654_ip = 76; continue _fun5654 }
case 52:
                                r2 = _closure3_slot2;
                                r4 = r3 == r1;
                                r1 = undefined;
                                if(r4) { _fun5654_ip = 71; continue _fun5654 }
case 65:
                                r4 = 0;
                                r1 = r3[r4];
case 71:
                                r1 = r2.bind(r0)(r1);
case 76:
                                if(r3) { _fun5654_ip = 92; continue _fun5654 }
case 82:
                                r2 = _closure4_slot0;
                                r2 = r2.bind(r0)();
                                _fun5654_ip = 107; continue _fun5654;
case 92:
                                r2 = _closure4_slot1;
                                r1 = 0;
                                r1 = r3[r1];
                                r1 = r2.bind(r0)(r1);
case 107:
                                return r0;
                            }
                        };
                        r1 = r3.bind(r4)(r2, r1);
                        return r0;
                    };
                    r4 = r1;
                    r0 = new r4[r2](r3, r2);
                    r0 = r0 instanceof Object ? r0 : r1;
                    return r0;
                };
                r0['setItem'] = r2;
                r2 = function(a0, a1) { // Original name: removeItem, environment: r1
                    r1 = a0;
                    var _closure3_slot0 = r1;
                    r1 = a1;
                    var _closure3_slot1 = r1;
                    r1 = global;
                    r2 = r1.Promise;
                    r1 = r2.prototype;
                    r1 = Object.create(r1, {constructor: {value: r2}});
                    r3 = function(a0, a1) { // Environment: r0
                        r0 = a0;
                        var _closure4_slot0 = r0;
                        r0 = a1;
                        var _closure4_slot1 = r0;
                        r4 = _closure1_slot0;
                        r3 = _closure1_slot1;
                        r0 = 3;
                        r3 = r3[r0];
                        r0 = undefined;
                        r3 = r4.bind(r0)(r3);
                        r3 = r3.checkValidInput;
                        r5 = _closure3_slot0;
                        r3 = r3.bind(r0)(r5);
                        r2 = _closure1_slot3;
                        r4 = r2.default;
                        r3 = r4.multiRemove;
                        r2 = new Array(1);
                        r2[0] = r5;
                        r1 = function(a0) { // Environment: r1
                            _fun5657: for(var _fun5657_ip = 0; ; ) switch(_fun5657_ip) {
case 0:
                                r2 = _closure1_slot0;
                                r1 = _closure1_slot1;
                                r0 = 3;
                                r1 = r1[r0];
                                r0 = undefined;
                                r1 = r2.bind(r0)(r1);
                                r2 = r1.convertErrors;
                                r1 = a0;
                                r3 = r2.bind(r0)(r1);
                                r4 = _closure3_slot1;
                                r1 = null;
                                if(!(r4 != r1)) { _fun5657_ip = 76; continue _fun5657 }
case 52:
                                r2 = _closure3_slot1;
                                r4 = r3 == r1;
                                r1 = undefined;
                                if(r4) { _fun5657_ip = 71; continue _fun5657 }
case 65:
                                r4 = 0;
                                r1 = r3[r4];
case 71:
                                r1 = r2.bind(r0)(r1);
case 76:
                                if(r3) { _fun5657_ip = 92; continue _fun5657 }
case 82:
                                r2 = _closure4_slot0;
                                r2 = r2.bind(r0)();
                                _fun5657_ip = 107; continue _fun5657;
case 92:
                                r2 = _closure4_slot1;
                                r1 = 0;
                                r1 = r3[r1];
                                r1 = r2.bind(r0)(r1);
case 107:
                                return r0;
                            }
                        };
                        r1 = r3.bind(r4)(r2, r1);
                        return r0;
                    };
                    r4 = r1;
                    r0 = new r4[r2](r3, r2);
                    r0 = r0 instanceof Object ? r0 : r1;
                    return r0;
                };
                r0['removeItem'] = r2;
                r2 = function(a0, a1, a2) { // Original name: mergeItem, environment: r1
                    r1 = a0;
                    var _closure3_slot0 = r1;
                    r1 = a1;
                    var _closure3_slot1 = r1;
                    r1 = a2;
                    var _closure3_slot2 = r1;
                    r1 = global;
                    r2 = r1.Promise;
                    r1 = r2.prototype;
                    r1 = Object.create(r1, {constructor: {value: r2}});
                    r3 = function(a0, a1) { // Environment: r0
                        r0 = a0;
                        var _closure4_slot0 = r0;
                        r0 = a1;
                        var _closure4_slot1 = r0;
                        r4 = _closure1_slot0;
                        r2 = _closure1_slot1;
                        r0 = 3;
                        r2 = r2[r0];
                        r0 = undefined;
                        r2 = r4.bind(r0)(r2);
                        r4 = r2.checkValidInput;
                        r6 = _closure3_slot0;
                        r2 = _closure3_slot1;
                        r4 = r4.bind(r0)(r6, r2);
                        r3 = _closure1_slot3;
                        r4 = r3.default;
                        r3 = r4.multiMerge;
                        r5 = new Array(2);
                        r5[0] = r6;
                        r5[1] = r2;
                        r2 = new Array(1);
                        r2[0] = r5;
                        r1 = function(a0) { // Environment: r1
                            _fun5660: for(var _fun5660_ip = 0; ; ) switch(_fun5660_ip) {
case 0:
                                r2 = _closure1_slot0;
                                r1 = _closure1_slot1;
                                r0 = 3;
                                r1 = r1[r0];
                                r0 = undefined;
                                r1 = r2.bind(r0)(r1);
                                r2 = r1.convertErrors;
                                r1 = a0;
                                r3 = r2.bind(r0)(r1);
                                r4 = _closure3_slot2;
                                r1 = null;
                                if(!(r4 != r1)) { _fun5660_ip = 76; continue _fun5660 }
case 52:
                                r2 = _closure3_slot2;
                                r4 = r3 == r1;
                                r1 = undefined;
                                if(r4) { _fun5660_ip = 71; continue _fun5660 }
case 65:
                                r4 = 0;
                                r1 = r3[r4];
case 71:
                                r1 = r2.bind(r0)(r1);
case 76:
                                if(r3) { _fun5660_ip = 92; continue _fun5660 }
case 82:
                                r2 = _closure4_slot0;
                                r2 = r2.bind(r0)();
                                _fun5660_ip = 107; continue _fun5660;
case 92:
                                r2 = _closure4_slot1;
                                r1 = 0;
                                r1 = r3[r1];
                                r1 = r2.bind(r0)(r1);
case 107:
                                return r0;
                            }
                        };
                        r1 = r3.bind(r4)(r2, r1);
                        return r0;
                    };
                    r4 = r1;
                    r0 = new r4[r2](r3, r2);
                    r0 = r0 instanceof Object ? r0 : r1;
                    return r0;
                };
                r0['mergeItem'] = r2;
                r2 = function(a0) { // Original name: clear, environment: r1
                    r1 = a0;
                    var _closure3_slot0 = r1;
                    r1 = global;
                    r2 = r1.Promise;
                    r1 = r2.prototype;
                    r1 = Object.create(r1, {constructor: {value: r2}});
                    r3 = function(a0, a1) { // Environment: r0
                        r1 = a0;
                        var _closure4_slot0 = r1;
                        r1 = a1;
                        var _closure4_slot1 = r1;
                        r1 = _closure1_slot3;
                        r2 = r1.default;
                        r1 = r2.clear;
                        r0 = function(a0) { // Environment: r0
                            _fun5663: for(var _fun5663_ip = 0; ; ) switch(_fun5663_ip) {
case 0:
                                r2 = _closure1_slot0;
                                r1 = _closure1_slot1;
                                r0 = 3;
                                r1 = r1[r0];
                                r0 = undefined;
                                r1 = r2.bind(r0)(r1);
                                r2 = r1.convertError;
                                r1 = a0;
                                r2 = r2.bind(r0)(r1);
                                r4 = _closure3_slot0;
                                r3 = null;
                                if(!(r4 != r3)) { _fun5663_ip = 61; continue _fun5663 }
case 52:
                                r1 = _closure3_slot0;
                                r1 = r1.bind(r0)(r2);
case 61:
                                if(r2) { _fun5663_ip = 77; continue _fun5663 }
case 67:
                                r3 = _closure4_slot0;
                                r3 = r3.bind(r0)();
                                _fun5663_ip = 86; continue _fun5663;
case 77:
                                r1 = _closure4_slot1;
                                r1 = r1.bind(r0)(r2);
case 86:
                                return r0;
                            }
                        };
                        r0 = r1.bind(r2)(r0);
                        r0 = undefined;
                        return r0;
                    };
                    r4 = r1;
                    r0 = new r4[r2](r3, r2);
                    r0 = r0 instanceof Object ? r0 : r1;
                    return r0;
                };
                r0['clear'] = r2;
                r2 = function(a0) { // Original name: getAllKeys, environment: r1
                    r1 = a0;
                    var _closure3_slot0 = r1;
                    r1 = global;
                    r2 = r1.Promise;
                    r1 = r2.prototype;
                    r1 = Object.create(r1, {constructor: {value: r2}});
                    r3 = function(a0, a1) { // Environment: r0
                        r1 = a0;
                        var _closure4_slot0 = r1;
                        r1 = a1;
                        var _closure4_slot1 = r1;
                        r1 = _closure1_slot3;
                        r2 = r1.default;
                        r1 = r2.getAllKeys;
                        r0 = function(a0, a1) { // Environment: r0
                            _fun5666: for(var _fun5666_ip = 0; ; ) switch(_fun5666_ip) {
case 0:
                                r2 = a1;
                                r3 = _closure1_slot0;
                                r1 = _closure1_slot1;
                                r0 = 3;
                                r1 = r1[r0];
                                r0 = undefined;
                                r1 = r3.bind(r0)(r1);
                                r3 = r1.convertError;
                                r1 = a0;
                                r4 = r3.bind(r0)(r1);
                                r5 = _closure3_slot0;
                                r3 = null;
                                if(!(r5 != r3)) { _fun5666_ip = 65; continue _fun5666 }
case 55:
                                r1 = _closure3_slot0;
                                r1 = r1.bind(r0)(r4, r2);
case 65:
                                if(r2) { _fun5666_ip = 82; continue _fun5666 }
case 71:
                                r3 = _closure4_slot1;
                                r3 = r3.bind(r0)(r4);
                                _fun5666_ip = 91; continue _fun5666;
case 82:
                                r1 = _closure4_slot0;
                                r1 = r1.bind(r0)(r2);
case 91:
                                return r0;
                            }
                        };
                        r0 = r1.bind(r2)(r0);
                        r0 = undefined;
                        return r0;
                    };
                    r4 = r1;
                    r0 = new r4[r2](r3, r2);
                    r0 = r0 instanceof Object ? r0 : r1;
                    return r0;
                };
                r0['getAllKeys'] = r2;
                r2 = function() { // Original name: flushGetRequests, environment: r1
                    r1 = _closure2_slot0;
                    var _closure3_slot0 = r1;
                    r3 = _closure2_slot1;
                    r1 = new Array(0);
                    _closure2_slot0 = r1;
                    r1 = new Array(0);
                    _closure2_slot1 = r1;
                    r1 = _closure1_slot3;
                    r2 = r1.default;
                    r1 = r2.multiGet;
                    r0 = function(a0, a1) { // Environment: r0
                        _fun5668: for(var _fun5668_ip = 0; ; ) switch(_fun5668_ip) {
case 0:
                            r2 = a1;
                            r0 = {};
                            var _closure4_slot0 = r0;
                            r7 = null;
                            if(!(r2 != r7)) { _fun5668_ip = 32; continue _fun5668 }
case 17:
                            r1 = r2.forEach;
                            r0 = function(a0) { // Environment: r8
                                r0 = _closure1_slot2;
                                r3 = r0.default;
                                r2 = undefined;
                                r1 = a0;
                                r0 = 2;
                                r1 = r3.bind(r2)(r1, r0);
                                r0 = 0;
                                r2 = r1[r0];
                                r0 = 1;
                                r0 = r1[r0];
                                r1 = _closure4_slot0;
                                r1[r2] = r0;
                                return r0;
                            };
                            r0 = r1.bind(r2)(r0);
case 32:
                            r0 = _closure3_slot0;
                            r5 = r0.length;
                            r2 = _closure1_slot0;
                            r1 = _closure1_slot1;
                            r0 = 3;
                            r1 = r1[r0];
                            r0 = undefined;
                            r1 = r2.bind(r0)(r1);
                            r2 = r1.convertErrors;
                            r1 = a0;
                            r4 = r2.bind(r0)(r1);
                            r1 = r4 != r7;
                            r3 = null;
                            if(!r1) { _fun5668_ip = 108; continue _fun5668 }
case 92:
                            r1 = r4.length;
                            r3 = null;
                            if(!r1) { _fun5668_ip = 108; continue _fun5668 }
case 102:
                            r1 = 0;
                            r3 = r4[r1];
case 108:
                            r2 = 0;
                            r9 = r2 < r5;
                            r1 = undefined;
                            if(!r9) { _fun5668_ip = 265; continue _fun5668 }
case 122:
                            r9 = _closure3_slot0;
                            r13 = r9[r2];
                            r9 = r2;
                            r11 = r1;
                            if(r3) { _fun5668_ip = 206; continue _fun5668 }
case 139:
                            r14 = r13.keys;
                            r12 = r14.map;
                            r10 = function(a0) { // Environment: r8
                                r2 = a0;
                                r0 = new Array(2);
                                r0[0] = r2;
                                r1 = _closure4_slot0;
                                r1 = r1[r2];
                                r0[1] = r1;
                                return r0;
                            };
                            r12 = r12.bind(r14)(r10);
                            r10 = r13.callback;
                            if(!(r10 != r7)) { _fun5668_ip = 179; continue _fun5668 }
case 168:
                            r10 = r13.callback;
                            r10 = r10.bind(r13)(r7, r12);
case 179:
                            r14 = r13.resolve;
                            r10 = r12;
                            if(!(r14 != r7)) { _fun5668_ip = 252; continue _fun5668 }
case 191:
                            r14 = r13.resolve;
                            r14 = r14.bind(r13)(r12);
                            r10 = r12;
                            _fun5668_ip = 252; continue _fun5668;
case 206:
                            r12 = r13.callback;
                            if(!(r12 != r7)) { _fun5668_ip = 225; continue _fun5668 }
case 215:
                            r12 = r13.callback;
                            r12 = r12.bind(r13)(r4);
case 225:
                            r12 = r13.reject;
                            r10 = r11;
                            if(!(r12 != r7)) { _fun5668_ip = 252; continue _fun5668 }
case 238:
                            r12 = r13.reject;
                            r12 = r12.bind(r13)(r3);
                            r10 = r11;
case 252:
                            r2 = r9 + 1;
                            r1 = r10;
                            if(r2 < r5) { _fun5668_ip = 122; continue _fun5668 }
case 265:
                            return r0;
                        }
                    };
                    r0 = r1.bind(r2)(r3, r0);
                    r0 = undefined;
                    return r0;
                };
                r0['flushGetRequests'] = r2;
                r2 = function(a0, a1) { // Original name: multiGet, environment: r1
                    _fun5671: for(var _fun5671_ip = 0; ; ) switch(_fun5671_ip) {
case 0:
                        r3 = a0;
                        r0 = _closure2_slot2;
                        if(r0) { _fun5671_ip = 39; continue _fun5671 }
case 15:
                        r0 = global;
                        r5 = r0.setImmediate;
                        r4 = undefined;
                        r0 = function() { // Environment: r1
                            r0 = null;
                            _closure2_slot2 = r0;
                            r1 = _closure1_slot4;
                            r0 = r1.flushGetRequests;
                            r0 = r0.bind(r1)();
                            r0 = undefined;
                            return r0;
                        };
                        r0 = r5.bind(r4)(r0);
                        _closure2_slot2 = r0;
case 39:
                        r5 = {};
                        r5['keys'] = r3;
                        r0 = a1;
                        r5['callback'] = r0;
                        r0 = _closure2_slot1;
                        r0 = r0.length;
                        r5['keyIndex'] = r0;
                        var _closure3_slot0 = r5;
                        r0 = global;
                        r6 = r0.Promise;
                        r0 = r6.prototype;
                        r4 = Object.create(r0, {constructor: {value: r6}});
                        r7 = function(a0, a1) { // Environment: r1
                            r2 = _closure3_slot0;
                            r1 = a0;
                            r2['resolve'] = r1;
                            r1 = _closure3_slot0;
                            r0 = a1;
                            r1['reject'] = r0;
                            r0 = undefined;
                            return r0;
                        };
                        r8 = r4;
                        r0 = new r8[r6](r7, r6);
                        r0 = r0 instanceof Object ? r0 : r4;
                        r4 = _closure2_slot0;
                        r2 = r4.push;
                        r2 = r2.bind(r4)(r5);
                        r2 = r3.forEach;
                        r1 = function(a0) { // Environment: r1
                            _fun5674: for(var _fun5674_ip = 0; ; ) switch(_fun5674_ip) {
case 0:
                                r2 = a0;
                                r3 = _closure2_slot1;
                                r1 = r3.indexOf;
                                r3 = r1.bind(r3)(r2);
                                r1 = -1;
                                if(!(r3 === r1)) { _fun5674_ip = 44; continue _fun5674 }
case 30:
                                r1 = _closure2_slot1;
                                r0 = r1.push;
                                r0 = r0.bind(r1)(r2);
case 44:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r1 = r2.bind(r3)(r1);
                        return r0;
                    }
                };
                r0['multiGet'] = r2;
                r2 = function(a0, a1) { // Original name: multiSet, environment: r1
                    r4 = a0;
                    r3 = a1;
                    var _closure3_slot0 = r4;
                    var _closure3_slot1 = r3;
                    r5 = _closure1_slot0;
                    r2 = _closure1_slot1;
                    r1 = 3;
                    r1 = r2[r1];
                    r2 = undefined;
                    r1 = r5.bind(r2)(r1);
                    r1 = r1.checkValidArgs;
                    r1 = r1.bind(r2)(r4, r3);
                    r1 = global;
                    r2 = r1.Promise;
                    r1 = r2.prototype;
                    r1 = Object.create(r1, {constructor: {value: r2}});
                    r7 = function(a0, a1) { // Environment: r0
                        r1 = a0;
                        var _closure4_slot0 = r1;
                        r1 = a1;
                        var _closure4_slot1 = r1;
                        r3 = _closure3_slot0;
                        r2 = r3.forEach;
                        r1 = function(a0) { // Environment: r0
                            r0 = _closure1_slot2;
                            r4 = r0.default;
                            r0 = undefined;
                            r3 = a0;
                            r2 = 2;
                            r4 = r4.bind(r0)(r3, r2);
                            r2 = 0;
                            r3 = r4[r2];
                            r2 = 1;
                            r2 = r4[r2];
                            r4 = _closure1_slot0;
                            r5 = _closure1_slot1;
                            r1 = 3;
                            r1 = r5[r1];
                            r1 = r4.bind(r0)(r1);
                            r1 = r1.checkValidInput;
                            r1 = r1.bind(r0)(r3, r2);
                            return r0;
                        };
                        r1 = r2.bind(r3)(r1);
                        r1 = _closure1_slot3;
                        r2 = r1.default;
                        r1 = r2.multiSet;
                        r0 = function(a0) { // Environment: r0
                            _fun5678: for(var _fun5678_ip = 0; ; ) switch(_fun5678_ip) {
case 0:
                                r2 = _closure1_slot0;
                                r1 = _closure1_slot1;
                                r0 = 3;
                                r1 = r1[r0];
                                r0 = undefined;
                                r1 = r2.bind(r0)(r1);
                                r2 = r1.convertErrors;
                                r1 = a0;
                                r2 = r2.bind(r0)(r1);
                                r4 = _closure3_slot1;
                                r3 = null;
                                if(!(r4 != r3)) { _fun5678_ip = 61; continue _fun5678 }
case 52:
                                r1 = _closure3_slot1;
                                r1 = r1.bind(r0)(r2);
case 61:
                                if(r2) { _fun5678_ip = 77; continue _fun5678 }
case 67:
                                r3 = _closure4_slot0;
                                r3 = r3.bind(r0)();
                                _fun5678_ip = 86; continue _fun5678;
case 77:
                                r1 = _closure4_slot1;
                                r1 = r1.bind(r0)(r2);
case 86:
                                return r0;
                            }
                        };
                        r0 = r1.bind(r2)(r3, r0);
                        r0 = undefined;
                        return r0;
                    };
                    r8 = r1;
                    r0 = new r8[r2](r7, r6);
                    r0 = r0 instanceof Object ? r0 : r1;
                    return r0;
                };
                r0['multiSet'] = r2;
                r2 = function(a0, a1) { // Original name: multiRemove, environment: r1
                    r1 = a0;
                    var _closure3_slot0 = r1;
                    r1 = a1;
                    var _closure3_slot1 = r1;
                    r1 = global;
                    r2 = r1.Promise;
                    r1 = r2.prototype;
                    r1 = Object.create(r1, {constructor: {value: r2}});
                    r3 = function(a0, a1) { // Environment: r0
                        r1 = a0;
                        var _closure4_slot0 = r1;
                        r1 = a1;
                        var _closure4_slot1 = r1;
                        r3 = _closure3_slot0;
                        r2 = r3.forEach;
                        r1 = function(a0) { // Environment: r0
                            r1 = _closure1_slot0;
                            r2 = _closure1_slot1;
                            r0 = 3;
                            r0 = r2[r0];
                            r2 = undefined;
                            r0 = r1.bind(r2)(r0);
                            r1 = r0.checkValidInput;
                            r0 = a0;
                            r0 = r1.bind(r2)(r0);
                            return r0;
                        };
                        r1 = r2.bind(r3)(r1);
                        r1 = _closure1_slot3;
                        r2 = r1.default;
                        r1 = r2.multiRemove;
                        r0 = function(a0) { // Environment: r0
                            _fun5682: for(var _fun5682_ip = 0; ; ) switch(_fun5682_ip) {
case 0:
                                r2 = _closure1_slot0;
                                r1 = _closure1_slot1;
                                r0 = 3;
                                r1 = r1[r0];
                                r0 = undefined;
                                r1 = r2.bind(r0)(r1);
                                r2 = r1.convertErrors;
                                r1 = a0;
                                r2 = r2.bind(r0)(r1);
                                r4 = _closure3_slot1;
                                r3 = null;
                                if(!(r4 != r3)) { _fun5682_ip = 61; continue _fun5682 }
case 52:
                                r1 = _closure3_slot1;
                                r1 = r1.bind(r0)(r2);
case 61:
                                if(r2) { _fun5682_ip = 77; continue _fun5682 }
case 67:
                                r3 = _closure4_slot0;
                                r3 = r3.bind(r0)();
                                _fun5682_ip = 86; continue _fun5682;
case 77:
                                r1 = _closure4_slot1;
                                r1 = r1.bind(r0)(r2);
case 86:
                                return r0;
                            }
                        };
                        r0 = r1.bind(r2)(r3, r0);
                        r0 = undefined;
                        return r0;
                    };
                    r4 = r1;
                    r0 = new r4[r2](r3, r2);
                    r0 = r0 instanceof Object ? r0 : r1;
                    return r0;
                };
                r0['multiRemove'] = r2;
                r1 = function(a0, a1) { // Original name: multiMerge, environment: r1
                    r1 = a0;
                    var _closure3_slot0 = r1;
                    r1 = a1;
                    var _closure3_slot1 = r1;
                    r1 = global;
                    r2 = r1.Promise;
                    r1 = r2.prototype;
                    r1 = Object.create(r1, {constructor: {value: r2}});
                    r3 = function(a0, a1) { // Environment: r0
                        r1 = a0;
                        var _closure4_slot0 = r1;
                        r1 = a1;
                        var _closure4_slot1 = r1;
                        r1 = _closure1_slot3;
                        r3 = r1.default;
                        r2 = r3.multiMerge;
                        r1 = _closure3_slot0;
                        r0 = function(a0) { // Environment: r0
                            _fun5685: for(var _fun5685_ip = 0; ; ) switch(_fun5685_ip) {
case 0:
                                r2 = _closure1_slot0;
                                r1 = _closure1_slot1;
                                r0 = 3;
                                r1 = r1[r0];
                                r0 = undefined;
                                r1 = r2.bind(r0)(r1);
                                r2 = r1.convertErrors;
                                r1 = a0;
                                r2 = r2.bind(r0)(r1);
                                r4 = _closure3_slot1;
                                r3 = null;
                                if(!(r4 != r3)) { _fun5685_ip = 61; continue _fun5685 }
case 52:
                                r1 = _closure3_slot1;
                                r1 = r1.bind(r0)(r2);
case 61:
                                if(r2) { _fun5685_ip = 77; continue _fun5685 }
case 67:
                                r3 = _closure4_slot0;
                                r3 = r3.bind(r0)();
                                _fun5685_ip = 86; continue _fun5685;
case 77:
                                r1 = _closure4_slot1;
                                r1 = r1.bind(r0)(r2);
case 86:
                                return r0;
                            }
                        };
                        r0 = r2.bind(r3)(r1, r0);
                        r0 = undefined;
                        return r0;
                    };
                    r4 = r1;
                    r0 = new r4[r2](r3, r2);
                    r0 = r0 instanceof Object ? r0 : r1;
                    return r0;
                };
                r0['multiMerge'] = r1;
                return r0;
            };
            r1 = r1.bind(r0)();
            var _closure1_slot4 = r1;
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 519;
    r5 = [1, 38, 520, 522];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5686: for(var _fun5686_ip = 0; ; ) switch(_fun5686_ip) {
case 0:
            r6 = a1;
            r2 = a5;
            r7 = a6;
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
            r1 = 0;
            r1 = r7[r1];
            r4 = r6.bind(r0)(r1);
            r1 = r4.TurboModuleRegistry;
            if(r1) { _fun5686_ip = 113; continue _fun5686 }
case 69:
            r1 = r4.NativeModules;
            r5 = r1.PlatformLocalStorage;
            if(r5) { _fun5686_ip = 96; continue _fun5686 }
case 84:
            r1 = r4.NativeModules;
            r5 = r1.RNC_AsyncSQLiteDBStorage;
case 96:
            if(r5) { _fun5686_ip = 111; continue _fun5686 }
case 99:
            r1 = r4.NativeModules;
            r5 = r1.RNCAsyncStorage;
case 111:
            _fun5686_ip = 182; continue _fun5686;
case 113:
            r8 = r4.TurboModuleRegistry;
            r3 = r8.get;
            r1 = 'PlatformLocalStorage';
            r1 = r3.bind(r8)(r1);
            if(r1) { _fun5686_ip = 156; continue _fun5686 }
case 136:
            r9 = r4.TurboModuleRegistry;
            r8 = r9.get;
            r3 = 'RNC_AsyncSQLiteDBStorage';
            r1 = r8.bind(r9)(r3);
case 156:
            if(r1) { _fun5686_ip = 179; continue _fun5686 }
case 159:
            r9 = r4.TurboModuleRegistry;
            r8 = r9.get;
            r3 = 'RNCAsyncStorage';
            r1 = r8.bind(r9)(r3);
case 179:
            r5 = r1;
case 182:
            r1 = r5;
            if(r1) { _fun5686_ip = 303; continue _fun5686 }
case 188:
            r3 = 1;
            r3 = r7[r3];
            r3 = r6.bind(r0)(r3);
            r3 = r3.shouldFallbackToLegacyNativeModule;
            r3 = r3.bind(r0)();
            r1 = r5;
            if(!r3) { _fun5686_ip = 303; continue _fun5686 }
case 216:
            r3 = r4.TurboModuleRegistry;
            if(r3) { _fun5686_ip = 257; continue _fun5686 }
case 225:
            r3 = r4.NativeModules;
            r3 = r3.AsyncSQLiteDBStorage;
            if(r3) { _fun5686_ip = 252; continue _fun5686 }
case 240:
            r5 = r4.NativeModules;
            r3 = r5.AsyncLocalStorage;
case 252:
            r1 = r3;
            _fun5686_ip = 303; continue _fun5686;
case 257:
            r6 = r4.TurboModuleRegistry;
            r5 = r6.get;
            r3 = 'AsyncSQLiteDBStorage';
            r3 = r5.bind(r6)(r3);
            if(r3) { _fun5686_ip = 300; continue _fun5686 }
case 280:
            r6 = r4.TurboModuleRegistry;
            r5 = r6.get;
            r4 = 'AsyncLocalStorage';
            r3 = r5.bind(r6)(r4);
case 300:
            r1 = r3;
case 303:
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 520;
    r5 = [2, 521];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r1 = a5;
        r0 = global;
        r5 = r0.Object;
        r4 = r5.defineProperty;
        r3 = {};
        r0 = true;
        r3['value'] = r0;
        r0 = '__esModule';
        r0 = r4.bind(r5)(r1, r0, r3);
        r0 = function() { // Original name: shouldFallbackToLegacyNativeModule, environment: r2
            _fun5688: for(var _fun5688_ip = 0; ; ) switch(_fun5688_ip) {
case 0:
                r0 = _closure1_slot0;
                r0 = r0.NativeModules;
                r1 = r0.NativeUnimoduleProxy;
                r2 = null;
                r4 = r1 == r2;
                r0 = undefined;
                if(r4) { _fun5688_ip = 51; continue _fun5688 }
case 30:
                r1 = r1.modulesConstants;
                r2 = r1 == r2;
                r0 = undefined;
                if(r2) { _fun5688_ip = 51; continue _fun5688 }
case 45:
                r0 = r1.ExponentConstants;
case 51:
                if(!r0) { _fun5688_ip = 103; continue _fun5688 }
case 54:
                r1 = r0.appOwnership;
                if(!r1) { _fun5688_ip = 72; continue _fun5688 }
case 63:
                r2 = r0.executionEnvironment;
                r1 = !r2;
case 72:
                if(r1) { _fun5688_ip = 107; continue _fun5688 }
case 75:
                r2 = ['storeClient', 'standalone'];
                r1 = r2.includes;
                r0 = r0.executionEnvironment;
                r0 = r1.bind(r2)(r0);
                if(r0) { _fun5688_ip = 107; continue _fun5688 }
case 103:
                r0 = false;
                return r0;
case 107:
                r0 = true;
                return r0;
            }
        };
        r1['shouldFallbackToLegacyNativeModule'] = r0;
        r1 = a6;
        r0 = 0;
        r3 = r1[r0];
        r1 = a1;
        r0 = undefined;
        r1 = r1.bind(r0)(r3);
        var _closure1_slot0 = r1;
        return r0;
    };
    r6 = 521;
    r5 = [2];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r1 = a5;
        r2 = function(a0) { // Original name: convertError, environment: r0
            _fun5692: for(var _fun5692_ip = 0; ; ) switch(_fun5692_ip) {
case 0:
                r1 = a0;
                if(r1) { _fun5692_ip = 10; continue _fun5692 }
case 6:
                r0 = null;
                return r0;
case 10:
                r0 = global;
                r3 = r0.Error;
                r4 = r1.message;
                r2 = r3.prototype;
                r2 = Object.create(r2, {constructor: {value: r3}});
                r5 = r2;
                r0 = new r5[r3](r4, r3);
                r0 = r0 instanceof Object ? r0 : r2;
                r1 = r1.key;
                r0['key'] = r1;
                return r0;
            }
        };
        var _closure1_slot0 = r2;
        r3 = function(a0) { // Original name: ensureArray, environment: r0
            _fun5695: for(var _fun5695_ip = 0; ; ) switch(_fun5695_ip) {
case 0:
                r1 = a0;
                r0 = global;
                r2 = r0.Array;
                r0 = r2.isArray;
                r0 = r0.bind(r2)(r1);
                if(r0) { _fun5695_ip = 41; continue _fun5695 }
case 24:
                if(r1) { _fun5695_ip = 31; continue _fun5695 }
case 27:
                r0 = null;
                return r0;
case 31:
                r0 = new Array(1);
                r0[0] = r1;
                return r0;
case 41:
                r3 = r1.length;
                r2 = 0;
                r0 = null;
                if(!(r3 !== r2)) { _fun5695_ip = 57; continue _fun5695 }
case 54:
                r0 = r1;
case 57:
                return r0;
            }
        };
        var _closure1_slot1 = r3;
        r3 = global;
        r6 = r3.Object;
        r5 = r6.defineProperty;
        r4 = {};
        r3 = true;
        r4['value'] = r3;
        r3 = '__esModule';
        r3 = r5.bind(r6)(r1, r3, r4);
        r3 = function(a0, a1) { // Original name: checkValidArgs, environment: r0
            _fun5690: for(var _fun5690_ip = 0; ; ) switch(_fun5690_ip) {
case 0:
                r5 = a0;
                r3 = a1;
                r0 = global;
                r2 = r0.Array;
                r1 = r2.isArray;
                r1 = r1.bind(r2)(r5);
                if(!r1) { _fun5690_ip = 147; continue _fun5690 }
case 27:
                r2 = r5.length;
                r1 = 0;
                if(!(r2 !== r1)) { _fun5690_ip = 147; continue _fun5690 }
case 38:
                r4 = r0.Array;
                r2 = r4.isArray;
                r1 = r5[r1];
                r1 = r2.bind(r4)(r1);
                if(!r1) { _fun5690_ip = 147; continue _fun5690 }
case 61:
                if(!r3) { _fun5690_ip = 75; continue _fun5690 }
case 64:
                r2 = typeof r3;
                r1 = 'function';
                if(!(r2 === r1)) { _fun5690_ip = 79; continue _fun5690 }
case 75:
                r1 = undefined;
                return r1;
case 79:
                r2 = r0.Array;
                r1 = r2.isArray;
                r1 = r1.bind(r2)(r3);
                r3 = r0.Error;
                r2 = r3.prototype;
                r2 = Object.create(r2, {constructor: {value: r3}});
                if(r1) { _fun5690_ip = 130; continue _fun5690 }
case 113:
                r6 = '[AsyncStorage] Expected function as second argument to multiSet';
                r7 = r2;
                r1 = new r7[r3](r6, r5);
                r1 = r1 instanceof Object ? r1 : r2;
                throw r1;
case 130:
                r6 = '[AsyncStorage] Expected function as second argument to multiSet. Did you forget to wrap key-value pairs in an array for the first argument?';
                r7 = r2;
                r1 = new r7[r3](r6, r5);
                r1 = r1 instanceof Object ? r1 : r2;
                throw r1;
case 147:
                r2 = r0.Error;
                r0 = r2.prototype;
                r1 = Object.create(r0, {constructor: {value: r2}});
                r6 = '[AsyncStorage] Expected array of key-value pairs as first argument to multiSet';
                r7 = r1;
                r0 = new r7[r2](r6, r5);
                r0 = r0 instanceof Object ? r0 : r1;
                throw r0;
            }
        };
        r1['checkValidArgs'] = r3;
        r3 = function() { // Original name: checkValidInput, environment: r0
            _fun5691: for(var _fun5691_ip = 0; ; ) switch(_fun5691_ip) {
case 0:
                r1 = undefined;
                r6 = undefined;
                r5 = arguments.length;
                r0 = global;
                r2 = r0.Array;
                r3 = r2.prototype;
                r3 = Object.create(r3, {constructor: {value: r2}});
                r20 = r3;
                r19 = r5;
                r2 = new r20[r2](r19, r18);
                r2 = r2 instanceof Object ? r2 : r3;
                r3 = 0;
                r7 = r3 < r5;
                r4 = 0;
                if(!r7) { _fun5691_ip = 64; continue _fun5691 }
case 49:
                r7 = arguments[r4];
                r2[r4] = r7;
                r4 = r4 + 1;
                if(r4 < r5) { _fun5691_ip = 49; continue _fun5691 }
case 64:
                r6 = r2[r3];
                r4 = 1;
                r5 = r2[r4];
                r13 = typeof r6;
                r3 = 'string';
                if(!(r13 !== r3)) { _fun5691_ip = 135; continue _fun5691 }
case 86:
                r9 = r0.console;
                r8 = r9.warn;
                r7 = r0.HermesInternal;
                r12 = r7.concat;
                r20 = '[AsyncStorage] Using ';
                r18 = ' type for key is not supported. This can lead to unexpected behavior/errors. Use string instead.\nKey passed: ';
                r16 = '\n';
                r19 = r13;
                r17 = r6;
                r7 = r20[r12](r19, r18, r17, r16, r15);
                r7 = r8.bind(r9)(r7);
case 135:
                r2 = r2.length;
                if(!(r2 > r4)) { _fun5691_ip = 213; continue _fun5691 }
case 144:
                r2 = typeof r5;
                if(!(r2 !== r3)) { _fun5691_ip = 213; continue _fun5691 }
case 151:
                r2 = null;
                if(!(r5 != r2)) { _fun5691_ip = 215; continue _fun5691 }
case 157:
                r4 = r0.console;
                r3 = r4.warn;
                r2 = r0.HermesInternal;
                r10 = r2.concat;
                r20 = '[AsyncStorage] The value for key "';
                r18 = '" is not a string. This can lead to unexpected behavior/errors. Consider stringifying it.\nPassed value: ';
                r16 = '\nPassed key: ';
                r14 = '\n';
                r19 = r6;
                r17 = r5;
                r15 = r6;
                r2 = r20[r10](r19, r18, r17, r16, r15, r14, r13);
                r2 = r3.bind(r4)(r2);
case 213:
                return r1;
case 215:
                r2 = r0.Error;
                r0 = r0.HermesInternal;
                r4 = r0.concat;
                r20 = '[AsyncStorage] Passing null/undefined as value is not supported. If you want to remove value, Use .removeItem method instead.\nPassed value: ';
                r18 = '\nPassed key: ';
                r16 = '\n';
                r19 = r5;
                r17 = r6;
                r19 = r20[r4](r19, r18, r17, r16, r15);
                r1 = r2.prototype;
                r1 = Object.create(r1, {constructor: {value: r2}});
                r20 = r1;
                r0 = new r20[r2](r19, r18);
                r0 = r0 instanceof Object ? r0 : r1;
                throw r0;
            }
        };
        r1['checkValidInput'] = r3;
        r1['convertError'] = r2;
        r0 = function(a0) { // Original name: convertErrors, environment: r0
            _fun5693: for(var _fun5693_ip = 0; ; ) switch(_fun5693_ip) {
case 0:
                r2 = _closure1_slot1;
                r1 = undefined;
                r0 = a0;
                r3 = r2.bind(r1)(r0);
                r0 = null;
                if(!r3) { _fun5693_ip = 39; continue _fun5693 }
case 22:
                r2 = r3.map;
                r1 = function(a0) { // Environment: r1
                    r2 = _closure1_slot0;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
                };
                r0 = r2.bind(r3)(r1);
case 39:
                return r0;
            }
        };
        r1['convertErrors'] = r0;
        r0 = undefined;
        return r0;
    };
    r6 = 522;
    r5 = new Array(0);
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r7 = a1;
        r3 = a5;
        r8 = a6;
        r0 = 0;
        r2 = r8[r0];
        r0 = undefined;
        r6 = r7.bind(r0)(r2);
        r2 = global;
        r9 = r2.Object;
        r5 = r9.defineProperty;
        r4 = {};
        r2 = true;
        r4['value'] = r2;
        r2 = '__esModule';
        r2 = r5.bind(r9)(r3, r2, r4);
        r3['default'] = r0;
        r2 = 1;
        r4 = r8[r2];
        r4 = r7.bind(r0)(r4);
        r4 = r6.bind(r0)(r4);
        var _closure1_slot0 = r4;
        r4 = 2;
        r4 = r8[r4];
        r4 = r7.bind(r0)(r4);
        r4 = r6.bind(r0)(r4);
        var _closure1_slot1 = r4;
        r4 = 3;
        r4 = r8[r4];
        r4 = r7.bind(r0)(r4);
        r4 = r6.bind(r0)(r4);
        var _closure1_slot2 = r4;
        r4 = 4;
        r4 = r8[r4];
        r4 = r7.bind(r0)(r4);
        var _closure1_slot3 = r4;
        r5 = 5;
        r5 = r8[r5];
        r5 = r7.bind(r0)(r5);
        r5 = r6.bind(r0)(r5);
        var _closure1_slot4 = r5;
        r5 = r4.NativeModules;
        r6 = r5.SystemSetting;
        var _closure1_slot5 = r6;
        r4 = r4.NativeEventEmitter;
        r5 = r4.prototype;
        r5 = Object.create(r5, {constructor: {value: r4}});
        r13 = r5;
        r12 = r6;
        r4 = new r13[r4](r12, r11);
        r4 = r4 instanceof Object ? r4 : r5;
        var _closure1_slot6 = r4;
        r1 = function() { // Environment: r1
            r4 = function() { // Original name: SystemSetting, environment: r5
                r0 = _closure1_slot1;
                r3 = r0.default;
                r2 = _closure2_slot0;
                r0 = undefined;
                r1 = this;
                r1 = r3.bind(r0)(r1, r2);
                return r0;
            };
            var _closure2_slot0 = r4;
            r0 = _closure1_slot2;
            r3 = r0.default;
            r0 = {};
            r1 = 'setAppStore';
            r0['key'] = r1;
            r1 = function() { // Original name: setAppStore, environment: r5
                r0 = global;
                r2 = r0.console;
                r1 = r2.warn;
                r0 = "You don't need call setAppStore() anymore since V1.7.0";
                r0 = r1.bind(r2)(r0);
                r0 = undefined;
                return r0;
            };
            r0['value'] = r1;
            r2 = new Array(37);
            r2[0] = r0;
            r0 = {};
            r1 = 'getBrightness';
            r0['key'] = r1;
            r6 = function() { // Environment: r5
                r1 = _closure1_slot0;
                r3 = r1.default;
                r2 = undefined;
                r1 = function* () { // Environment: r0
                    r0 = function* () { // Original name: ?anon_0_, environment: r0
                        _fun5703: for(var _fun5703_ip = 0; ; ) switch(_fun5703_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(r1) { _fun5703_ip = 40; continue _fun5703 }
case 7:
                            r2 = _closure1_slot5;
                            r1 = r2.getBrightness;
                            r1 = r1.bind(r2)();
                            SaveGenerator(address=28);
case 26:
                            return r1;
case 28:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(r2) { _fun5703_ip = 37; continue _fun5703 }
case 34:
                            return r1;
case 37:
                            return r1;
case 40:
                            return r0;
                        }
                    };
                    return r0;
                };
                r1 = r3.bind(r2)(r1);
                var _closure3_slot0 = r1;
                r0 = function() { // Original name: getBrightness, environment: r0
                    r0 = undefined;
                    r3 = _closure3_slot0;
                    r2 = r3.apply;
                    r0 = arguments;
                    r1 = r0;
                    r0 = this;
                    r0 = r2.bind(r3)(r0, r1);
                    return r0;
                };
                return r0;
            };
            r1 = undefined;
            r6 = r6.bind(r1)();
            r0['value'] = r6;
            r2[1] = r0;
            r0 = {};
            r6 = 'setBrightness';
            r0['key'] = r6;
            r6 = function() { // Environment: r5
                r1 = _closure1_slot0;
                r3 = r1.default;
                r2 = undefined;
                r1 = function* (a0) { // Environment: r0
                    r0 = function* (a0) { // Original name: ?anon_0_, environment: r0
                        _fun5707: for(var _fun5707_ip = 0; ; ) switch(_fun5707_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(r2) { _fun5707_ip = 53; continue _fun5707 }
case 7:
                            r1 = a0;
case 10: // try_start_0
                            r3 = _closure1_slot5;
                            r2 = r3.setBrightness;
                            r1 = r2.bind(r3)(r1);
                            SaveGenerator(address=32);
case 30:
                            return r1;
case 32:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(r2) { _fun5707_ip = 43; continue _fun5707 }
case 38: // try_end0
                            r2 = true;
                            return r2;
case 43:
                            return r1;
case 46: // catch_target0
                            CatchBlockStart(arg_register=1);
                            r1 = false;
                            return r1;
case 53:
                            return r0;
                        }
                    };
                    return r0;
                };
                r1 = r3.bind(r2)(r1);
                var _closure3_slot0 = r1;
                r0 = function(a0) { // Original name: setBrightness, environment: r0
                    r0 = undefined;
                    r3 = _closure3_slot0;
                    r2 = r3.apply;
                    r0 = arguments;
                    r1 = r0;
                    r0 = this;
                    r0 = r2.bind(r3)(r0, r1);
                    return r0;
                };
                return r0;
            };
            r6 = r6.bind(r1)();
            r0['value'] = r6;
            r2[2] = r0;
            r0 = {};
            r6 = 'setBrightnessForce';
            r0['key'] = r6;
            r6 = function() { // Environment: r5
                r1 = _closure1_slot0;
                r3 = r1.default;
                r2 = undefined;
                r1 = function* (a0) { // Environment: r0
                    r0 = function* (a0) { // Original name: ?anon_0_, environment: r0
                        _fun5711: for(var _fun5711_ip = 0; ; ) switch(_fun5711_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(r1) { _fun5711_ip = 106; continue _fun5711 }
case 7:
                            r1 = _closure1_slot4;
                            r1 = r1.default;
                            r1 = r1.isAndroid;
                            if(!r1) { _fun5711_ip = 66; continue _fun5711 }
case 28:
                            r3 = _closure2_slot0;
                            r2 = r3.setScreenMode;
                            r1 = 0;
                            r1 = r2.bind(r3)(r1);
                            SaveGenerator(address=52);
case 50:
                            return r1;
case 52:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(r2) { _fun5711_ip = 103; continue _fun5711 }
case 58:
                            if(r1) { _fun5711_ip = 66; continue _fun5711 }
case 61:
                            r2 = false;
                            return r2;
case 66:
                            r4 = _closure2_slot0;
                            r3 = r4.setBrightness;
                            r2 = a0;
                            r2 = r3.bind(r4)(r2);
                            SaveGenerator(address=91);
case 89:
                            return r2;
case 91:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                            if(r3) { _fun5711_ip = 100; continue _fun5711 }
case 97:
                            return r2;
case 100:
                            return r2;
case 103:
                            return r1;
case 106:
                            return r0;
                        }
                    };
                    return r0;
                };
                r1 = r3.bind(r2)(r1);
                var _closure3_slot0 = r1;
                r0 = function(a0) { // Original name: setBrightnessForce, environment: r0
                    r0 = undefined;
                    r3 = _closure3_slot0;
                    r2 = r3.apply;
                    r0 = arguments;
                    r1 = r0;
                    r0 = this;
                    r0 = r2.bind(r3)(r0, r1);
                    return r0;
                };
                return r0;
            };
            r6 = r6.bind(r1)();
            r0['value'] = r6;
            r2[3] = r0;
            r0 = {};
            r6 = 'setAppBrightness';
            r0['key'] = r6;
            r6 = function(a0) { // Original name: setAppBrightness, environment: r5
                _fun5712: for(var _fun5712_ip = 0; ; ) switch(_fun5712_ip) {
case 0:
                    r2 = a0;
                    r1 = _closure1_slot4;
                    r1 = r1.default;
                    r1 = r1.isAndroid;
                    if(r1) { _fun5712_ip = 44; continue _fun5712 }
case 24:
                    r3 = _closure2_slot0;
                    r1 = r3.setBrightness;
                    r1 = r1.bind(r3)(r2);
                    _fun5712_ip = 59; continue _fun5712;
case 44:
                    r1 = _closure1_slot5;
                    r0 = r1.setAppBrightness;
                    r0 = r0.bind(r1)(r2);
case 59:
                    r0 = true;
                    return r0;
                }
            };
            r0['value'] = r6;
            r2[4] = r0;
            r0 = {};
            r6 = 'getAppBrightness';
            r0['key'] = r6;
            r6 = function() { // Environment: r5
                r1 = _closure1_slot0;
                r3 = r1.default;
                r2 = undefined;
                r1 = function* () { // Environment: r0
                    r0 = function* () { // Original name: ?anon_0_, environment: r0
                        _fun5716: for(var _fun5716_ip = 0; ; ) switch(_fun5716_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(r1) { _fun5716_ip = 65; continue _fun5716 }
case 7:
                            r2 = _closure1_slot4;
                            r2 = r2.default;
                            r2 = r2.isAndroid;
                            if(r2) { _fun5716_ip = 48; continue _fun5716 }
case 28:
                            r3 = _closure2_slot0;
                            r2 = r3.getBrightness;
                            r2 = r2.bind(r3)();
                            return r2;
case 48:
                            r2 = _closure1_slot5;
                            r1 = r2.getAppBrightness;
                            r1 = r1.bind(r2)();
                            return r1;
case 65:
                            return r0;
                        }
                    };
                    return r0;
                };
                r1 = r3.bind(r2)(r1);
                var _closure3_slot0 = r1;
                r0 = function() { // Original name: getAppBrightness, environment: r0
                    r0 = undefined;
                    r3 = _closure3_slot0;
                    r2 = r3.apply;
                    r0 = arguments;
                    r1 = r0;
                    r0 = this;
                    r0 = r2.bind(r3)(r0, r1);
                    return r0;
                };
                return r0;
            };
            r6 = r6.bind(r1)();
            r0['value'] = r6;
            r2[5] = r0;
            r0 = {};
            r6 = 'grantWriteSettingPremission';
            r0['key'] = r6;
            r6 = function() { // Original name: grantWriteSettingPremission, environment: r5
                r1 = _closure2_slot0;
                r0 = r1.grantWriteSettingPermission;
                r0 = r0.bind(r1)();
                r0 = undefined;
                return r0;
            };
            r0['value'] = r6;
            r2[6] = r0;
            r0 = {};
            r6 = 'grantWriteSettingPermission';
            r0['key'] = r6;
            r6 = function() { // Original name: grantWriteSettingPermission, environment: r5
                _fun5718: for(var _fun5718_ip = 0; ; ) switch(_fun5718_ip) {
case 0:
                    r1 = _closure1_slot4;
                    r1 = r1.default;
                    r1 = r1.isAndroid;
                    if(!r1) { _fun5718_ip = 35; continue _fun5718 }
case 21:
                    r1 = _closure1_slot5;
                    r0 = r1.openWriteSetting;
                    r0 = r0.bind(r1)();
case 35:
                    r0 = undefined;
                    return r0;
                }
            };
            r0['value'] = r6;
            r2[7] = r0;
            r0 = {};
            r6 = 'getScreenMode';
            r0['key'] = r6;
            r6 = function() { // Environment: r5
                r1 = _closure1_slot0;
                r3 = r1.default;
                r2 = undefined;
                r1 = function* () { // Environment: r0
                    r0 = function* () { // Original name: ?anon_0_, environment: r0
                        _fun5722: for(var _fun5722_ip = 0; ; ) switch(_fun5722_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(r1) { _fun5722_ip = 67; continue _fun5722 }
case 7:
                            r2 = _closure1_slot4;
                            r2 = r2.default;
                            r2 = r2.isAndroid;
                            if(r2) { _fun5722_ip = 37; continue _fun5722 }
case 28:
                            r2 = -1;
                            return r2;
case 37:
                            r2 = _closure1_slot5;
                            r1 = r2.getScreenMode;
                            r1 = r1.bind(r2)();
                            SaveGenerator(address=55);
case 53:
                            return r1;
case 55:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(r2) { _fun5722_ip = 64; continue _fun5722 }
case 61:
                            return r1;
case 64:
                            return r1;
case 67:
                            return r0;
                        }
                    };
                    return r0;
                };
                r1 = r3.bind(r2)(r1);
                var _closure3_slot0 = r1;
                r0 = function() { // Original name: getScreenMode, environment: r0
                    r0 = undefined;
                    r3 = _closure3_slot0;
                    r2 = r3.apply;
                    r0 = arguments;
                    r1 = r0;
                    r0 = this;
                    r0 = r2.bind(r3)(r0, r1);
                    return r0;
                };
                return r0;
            };
            r6 = r6.bind(r1)();
            r0['value'] = r6;
            r2[8] = r0;
            r0 = {};
            r6 = 'setScreenMode';
            r0['key'] = r6;
            r6 = function() { // Environment: r5
                r1 = _closure1_slot0;
                r3 = r1.default;
                r2 = undefined;
                r1 = function* (a0) { // Environment: r0
                    r0 = function* (a0) { // Original name: ?anon_0_, environment: r0
                        _fun5726: for(var _fun5726_ip = 0; ; ) switch(_fun5726_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(r2) { _fun5726_ip = 71; continue _fun5726 }
case 7:
                            r1 = a0;
                            r3 = _closure1_slot4;
                            r3 = r3.default;
                            r3 = r3.isAndroid;
                            if(!r3) { _fun5726_ip = 56; continue _fun5726 }
case 31: // try_start_0
                            r3 = _closure1_slot5;
                            r2 = r3.setScreenMode;
                            r1 = r2.bind(r3)(r1);
                            SaveGenerator(address=50);
case 48:
                            return r1;
case 50:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(r2) { _fun5726_ip = 61; continue _fun5726 }
case 56: // try_end0
                            r2 = true;
                            return r2;
case 61:
                            return r1;
case 64: // catch_target0
                            CatchBlockStart(arg_register=1);
                            r1 = false;
                            return r1;
case 71:
                            return r0;
                        }
                    };
                    return r0;
                };
                r1 = r3.bind(r2)(r1);
                var _closure3_slot0 = r1;
                r0 = function(a0) { // Original name: setScreenMode, environment: r0
                    r0 = undefined;
                    r3 = _closure3_slot0;
                    r2 = r3.apply;
                    r0 = arguments;
                    r1 = r0;
                    r0 = this;
                    r0 = r2.bind(r3)(r0, r1);
                    return r0;
                };
                return r0;
            };
            r6 = r6.bind(r1)();
            r0['value'] = r6;
            r2[9] = r0;
            r0 = {};
            r6 = 'saveBrightness';
            r0['key'] = r6;
            r6 = function() { // Environment: r5
                r1 = _closure1_slot0;
                r3 = r1.default;
                r2 = undefined;
                r1 = function* () { // Environment: r0
                    r0 = function* () { // Original name: ?anon_0_, environment: r0
                        _fun5730: for(var _fun5730_ip = 0; ; ) switch(_fun5730_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(r1) { _fun5730_ip = 81; continue _fun5730 }
case 7:
                            r3 = _closure2_slot0;
                            r1 = r3.getBrightness;
                            r1 = r1.bind(r3)();
                            SaveGenerator(address=28);
case 26:
                            return r1;
case 28:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(r4) { _fun5730_ip = 78; continue _fun5730 }
case 34:
                            r3['saveBrightnessVal'] = r1;
                            r3 = _closure2_slot0;
                            r2 = r3.getScreenMode;
                            r2 = r2.bind(r3)();
                            SaveGenerator(address=58);
case 56:
                            return r2;
case 58:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(r4) { _fun5730_ip = 75; continue _fun5730 }
case 64:
                            r3['saveScreenModeVal'] = r2;
                            r3 = undefined;
                            return r3;
case 75:
                            return r2;
case 78:
                            return r1;
case 81:
                            return r0;
                        }
                    };
                    return r0;
                };
                r1 = r3.bind(r2)(r1);
                var _closure3_slot0 = r1;
                r0 = function() { // Original name: saveBrightness, environment: r0
                    r0 = undefined;
                    r3 = _closure3_slot0;
                    r2 = r3.apply;
                    r0 = arguments;
                    r1 = r0;
                    r0 = this;
                    r0 = r2.bind(r3)(r0, r1);
                    return r0;
                };
                return r0;
            };
            r6 = r6.bind(r1)();
            r0['value'] = r6;
            r2[10] = r0;
            r0 = {};
            r6 = 'restoreBrightness';
            r0['key'] = r6;
            r6 = function() { // Original name: restoreBrightness, environment: r5
                _fun5731: for(var _fun5731_ip = 0; ; ) switch(_fun5731_ip) {
case 0:
                    r1 = _closure2_slot0;
                    r2 = r1.saveBrightnessVal;
                    r1 = -1;
                    if(!(r2 != r1)) { _fun5731_ip = 63; continue _fun5731 }
case 23:
                    r3 = _closure2_slot0;
                    r2 = r3.setBrightness;
                    r1 = r3.saveBrightnessVal;
                    r1 = r2.bind(r3)(r1);
                    r2 = r3.setScreenMode;
                    r1 = r3.saveScreenModeVal;
                    r1 = r2.bind(r3)(r1);
                    _fun5731_ip = 85; continue _fun5731;
case 63:
                    r1 = global;
                    r3 = r1.console;
                    r2 = r3.warn;
                    r1 = 'you should call saveBrightness() at least once';
                    r1 = r2.bind(r3)(r1);
case 85:
                    r0 = _closure2_slot0;
                    r0 = r0.saveBrightnessVal;
                    return r0;
                }
            };
            r0['value'] = r6;
            r2[11] = r0;
            r0 = {};
            r6 = 'getVolume';
            r0['key'] = r6;
            r6 = function() { // Environment: r5
                r1 = _closure1_slot0;
                r3 = r1.default;
                r2 = undefined;
                r1 = function* () { // Environment: r0
                    r0 = function* () { // Original name: ?anon_0_, environment: r0
                        _fun5735: for(var _fun5735_ip = 0; ; ) switch(_fun5735_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(r1) { _fun5735_ip = 79; continue _fun5735 }
case 7:
                            r5 = undefined;
                            r2 = undefined;
                            r3 = arguments.length;
                            r1 = 0;
                            r4 = r3 > r1;
                            r6 = 'music';
                            r3 = r6;
                            if(!r4) { _fun5735_ip = 45; continue _fun5735 }
case 30:
                            r4 = arguments[r1];
                            r3 = r6;
                            if(!(r4 !== r5)) { _fun5735_ip = 45; continue _fun5735 }
case 41:
                            r3 = arguments[r1];
case 45:
                            r2 = _closure1_slot5;
                            r1 = r2.getVolume;
                            r1 = r1.bind(r2)(r3);
                            SaveGenerator(address=67);
case 65:
                            return r1;
case 67:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(r2) { _fun5735_ip = 76; continue _fun5735 }
case 73:
                            return r1;
case 76:
                            return r1;
case 79:
                            return r0;
                        }
                    };
                    return r0;
                };
                r1 = r3.bind(r2)(r1);
                var _closure3_slot0 = r1;
                r0 = function() { // Original name: getVolume, environment: r0
                    r0 = undefined;
                    r3 = _closure3_slot0;
                    r2 = r3.apply;
                    r0 = arguments;
                    r1 = r0;
                    r0 = this;
                    r0 = r2.bind(r3)(r0, r1);
                    return r0;
                };
                return r0;
            };
            r6 = r6.bind(r1)();
            r0['value'] = r6;
            r2[12] = r0;
            r0 = {};
            r6 = 'setVolume';
            r0['key'] = r6;
            r6 = function(a0) { // Original name: setVolume, environment: r5
                _fun5736: for(var _fun5736_ip = 0; ; ) switch(_fun5736_ip) {
case 0:
                    r0 = undefined;
                    r3 = undefined;
                    r2 = arguments.length;
                    r1 = 1;
                    if(!(r2 > r1)) { _fun5736_ip = 22; continue _fun5736 }
case 14:
                    r2 = arguments[r1];
                    if(!(r2 === r0)) { _fun5736_ip = 26; continue _fun5736 }
case 22:
                    r2 = {};
                    _fun5736_ip = 30; continue _fun5736;
case 26:
                    r2 = arguments[r1];
case 30:
                    r3 = typeof r2;
                    r1 = 'string';
                    r4 = r2;
                    if(!(r3 === r1)) { _fun5736_ip = 75; continue _fun5736 }
case 44:
                    r1 = global;
                    r5 = r1.console;
                    r3 = r5.log;
                    r1 = 'setVolume(val, type) is deprecated since 1.2.2, use setVolume(val, config) instead';
                    r1 = r3.bind(r5)(r1);
                    r1 = {};
                    r1['type'] = r2;
                    r4 = r1;
case 75:
                    r1 = global;
                    r3 = r1.Object;
                    r2 = r3.assign;
                    r1 = {'playSound': false, 'type': 'music', 'showUI': false};
                    r4 = r2.bind(r3)(r1, r4);
                    r3 = _closure1_slot5;
                    r2 = r3.setVolume;
                    r1 = a0;
                    r1 = r2.bind(r3)(r1, r4);
                    return r0;
                }
            };
            r0['value'] = r6;
            r2[13] = r0;
            r0 = {};
            r6 = 'addVolumeListener';
            r0['key'] = r6;
            r6 = function(a0) { // Original name: addVolumeListener, environment: r5
                r3 = _closure1_slot6;
                r2 = r3.addListener;
                r1 = 'EventVolume';
                r0 = a0;
                r0 = r2.bind(r3)(r1, r0);
                return r0;
            };
            r0['value'] = r6;
            r2[14] = r0;
            r0 = {};
            r6 = 'removeVolumeListener';
            r0['key'] = r6;
            r6 = function(a0) { // Original name: removeVolumeListener, environment: r5
                _fun5738: for(var _fun5738_ip = 0; ; ) switch(_fun5738_ip) {
case 0:
                    r1 = a0;
                    if(!r1) { _fun5738_ip = 15; continue _fun5738 }
case 6:
                    r0 = r1.remove;
                    r0 = r0.bind(r1)();
case 15:
                    r0 = undefined;
                    return r0;
                }
            };
            r0['value'] = r6;
            r2[15] = r0;
            r0 = {};
            r6 = 'isWifiEnabled';
            r0['key'] = r6;
            r6 = function() { // Environment: r5
                r1 = _closure1_slot0;
                r3 = r1.default;
                r2 = undefined;
                r1 = function* () { // Environment: r0
                    r0 = function* () { // Original name: ?anon_0_, environment: r0
                        _fun5742: for(var _fun5742_ip = 0; ; ) switch(_fun5742_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(r1) { _fun5742_ip = 46; continue _fun5742 }
case 7:
                            r2 = _closure1_slot5;
                            r1 = r2.isWifiEnabled;
                            r1 = r1.bind(r2)();
                            SaveGenerator(address=28);
case 26:
                            return r1;
case 28:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(r2) { _fun5742_ip = 43; continue _fun5742 }
case 34:
                            r2 = 0;
                            r2 = r1 > r2;
                            return r2;
case 43:
                            return r1;
case 46:
                            return r0;
                        }
                    };
                    return r0;
                };
                r1 = r3.bind(r2)(r1);
                var _closure3_slot0 = r1;
                r0 = function() { // Original name: isWifiEnabled, environment: r0
                    r0 = undefined;
                    r3 = _closure3_slot0;
                    r2 = r3.apply;
                    r0 = arguments;
                    r1 = r0;
                    r0 = this;
                    r0 = r2.bind(r3)(r0, r1);
                    return r0;
                };
                return r0;
            };
            r6 = r6.bind(r1)();
            r0['value'] = r6;
            r2[16] = r0;
            r0 = {};
            r6 = 'switchWifiSilence';
            r0['key'] = r6;
            r6 = function(a0) { // Original name: switchWifiSilence, environment: r5
                _fun5743: for(var _fun5743_ip = 0; ; ) switch(_fun5743_ip) {
case 0:
                    r3 = a0;
                    r1 = _closure1_slot4;
                    r1 = r1.default;
                    r1 = r1.isAndroid;
                    r2 = _closure2_slot0;
                    if(r1) { _fun5743_ip = 44; continue _fun5743 }
case 31:
                    r1 = r2.switchWifi;
                    r1 = r1.bind(r2)(r3);
                    _fun5743_ip = 69; continue _fun5743;
case 44:
                    r1 = r2.listenEvent;
                    r1 = r1.bind(r2)(r3);
                    r1 = _closure1_slot5;
                    r0 = r1.switchWifiSilence;
                    r0 = r0.bind(r1)();
case 69:
                    r0 = undefined;
                    return r0;
                }
            };
            r0['value'] = r6;
            r2[17] = r0;
            r0 = {};
            r6 = 'switchWifi';
            r0['key'] = r6;
            r6 = function(a0) { // Original name: switchWifi, environment: r5
                r2 = _closure2_slot0;
                r1 = r2.listenEvent;
                r0 = a0;
                r0 = r1.bind(r2)(r0);
                r1 = _closure1_slot5;
                r0 = r1.switchWifi;
                r0 = r0.bind(r1)();
                r0 = undefined;
                return r0;
            };
            r0['value'] = r6;
            r2[18] = r0;
            r0 = {};
            r6 = 'isLocationEnabled';
            r0['key'] = r6;
            r6 = function() { // Environment: r5
                r1 = _closure1_slot0;
                r3 = r1.default;
                r2 = undefined;
                r1 = function* () { // Environment: r0
                    r0 = function* () { // Original name: ?anon_0_, environment: r0
                        _fun5748: for(var _fun5748_ip = 0; ; ) switch(_fun5748_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(r1) { _fun5748_ip = 40; continue _fun5748 }
case 7:
                            r2 = _closure1_slot5;
                            r1 = r2.isLocationEnabled;
                            r1 = r1.bind(r2)();
                            SaveGenerator(address=28);
case 26:
                            return r1;
case 28:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(r2) { _fun5748_ip = 37; continue _fun5748 }
case 34:
                            return r1;
case 37:
                            return r1;
case 40:
                            return r0;
                        }
                    };
                    return r0;
                };
                r1 = r3.bind(r2)(r1);
                var _closure3_slot0 = r1;
                r0 = function() { // Original name: isLocationEnabled, environment: r0
                    r0 = undefined;
                    r3 = _closure3_slot0;
                    r2 = r3.apply;
                    r0 = arguments;
                    r1 = r0;
                    r0 = this;
                    r0 = r2.bind(r3)(r0, r1);
                    return r0;
                };
                return r0;
            };
            r6 = r6.bind(r1)();
            r0['value'] = r6;
            r2[19] = r0;
            r0 = {};
            r6 = 'getLocationMode';
            r0['key'] = r6;
            r6 = function() { // Environment: r5
                r1 = _closure1_slot0;
                r3 = r1.default;
                r2 = undefined;
                r1 = function* () { // Environment: r0
                    r0 = function* () { // Original name: ?anon_0_, environment: r0
                        _fun5752: for(var _fun5752_ip = 0; ; ) switch(_fun5752_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(r1) { _fun5752_ip = 99; continue _fun5752 }
case 7:
                            r2 = _closure1_slot4;
                            r2 = r2.default;
                            r2 = r2.isAndroid;
                            if(r2) { _fun5752_ip = 69; continue _fun5752 }
case 28:
                            r3 = _closure2_slot0;
                            r2 = r3.isLocationEnabled;
                            r2 = r2.bind(r3)();
                            SaveGenerator(address=49);
case 47:
                            return r2;
case 49:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                            if(r3) { _fun5752_ip = 66; continue _fun5752 }
case 55:
                            r3 = 0;
                            if(!r2) { _fun5752_ip = 63; continue _fun5752 }
case 60:
                            r3 = 1;
case 63:
                            return r3;
case 66:
                            return r2;
case 69:
                            r2 = _closure1_slot5;
                            r1 = r2.getLocationMode;
                            r1 = r1.bind(r2)();
                            SaveGenerator(address=87);
case 85:
                            return r1;
case 87:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(r2) { _fun5752_ip = 96; continue _fun5752 }
case 93:
                            return r1;
case 96:
                            return r1;
case 99:
                            return r0;
                        }
                    };
                    return r0;
                };
                r1 = r3.bind(r2)(r1);
                var _closure3_slot0 = r1;
                r0 = function() { // Original name: getLocationMode, environment: r0
                    r0 = undefined;
                    r3 = _closure3_slot0;
                    r2 = r3.apply;
                    r0 = arguments;
                    r1 = r0;
                    r0 = this;
                    r0 = r2.bind(r3)(r0, r1);
                    return r0;
                };
                return r0;
            };
            r6 = r6.bind(r1)();
            r0['value'] = r6;
            r2[20] = r0;
            r0 = {};
            r6 = 'switchLocation';
            r0['key'] = r6;
            r6 = function(a0) { // Original name: switchLocation, environment: r5
                r2 = _closure2_slot0;
                r1 = r2.listenEvent;
                r0 = a0;
                r0 = r1.bind(r2)(r0);
                r1 = _closure1_slot5;
                r0 = r1.switchLocation;
                r0 = r0.bind(r1)();
                r0 = undefined;
                return r0;
            };
            r0['value'] = r6;
            r2[21] = r0;
            r0 = {};
            r6 = 'isBluetoothEnabled';
            r0['key'] = r6;
            r6 = function() { // Environment: r5
                r1 = _closure1_slot0;
                r3 = r1.default;
                r2 = undefined;
                r1 = function* () { // Environment: r0
                    r0 = function* () { // Original name: ?anon_0_, environment: r0
                        _fun5757: for(var _fun5757_ip = 0; ; ) switch(_fun5757_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(r1) { _fun5757_ip = 40; continue _fun5757 }
case 7:
                            r2 = _closure1_slot5;
                            r1 = r2.isBluetoothEnabled;
                            r1 = r1.bind(r2)();
                            SaveGenerator(address=28);
case 26:
                            return r1;
case 28:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(r2) { _fun5757_ip = 37; continue _fun5757 }
case 34:
                            return r1;
case 37:
                            return r1;
case 40:
                            return r0;
                        }
                    };
                    return r0;
                };
                r1 = r3.bind(r2)(r1);
                var _closure3_slot0 = r1;
                r0 = function() { // Original name: isBluetoothEnabled, environment: r0
                    r0 = undefined;
                    r3 = _closure3_slot0;
                    r2 = r3.apply;
                    r0 = arguments;
                    r1 = r0;
                    r0 = this;
                    r0 = r2.bind(r3)(r0, r1);
                    return r0;
                };
                return r0;
            };
            r6 = r6.bind(r1)();
            r0['value'] = r6;
            r2[22] = r0;
            r0 = {};
            r6 = 'switchBluetooth';
            r0['key'] = r6;
            r6 = function(a0) { // Original name: switchBluetooth, environment: r5
                r2 = _closure2_slot0;
                r1 = r2.listenEvent;
                r0 = a0;
                r0 = r1.bind(r2)(r0);
                r1 = _closure1_slot5;
                r0 = r1.switchBluetooth;
                r0 = r0.bind(r1)();
                r0 = undefined;
                return r0;
            };
            r0['value'] = r6;
            r2[23] = r0;
            r0 = {};
            r6 = 'switchBluetoothSilence';
            r0['key'] = r6;
            r6 = function(a0) { // Original name: switchBluetoothSilence, environment: r5
                _fun5759: for(var _fun5759_ip = 0; ; ) switch(_fun5759_ip) {
case 0:
                    r3 = a0;
                    r1 = _closure1_slot4;
                    r1 = r1.default;
                    r1 = r1.isAndroid;
                    if(r1) { _fun5759_ip = 41; continue _fun5759 }
case 24:
                    r2 = _closure1_slot5;
                    r1 = r2.switchBluetooth;
                    r1 = r1.bind(r2)(r3);
                    _fun5759_ip = 73; continue _fun5759;
case 41:
                    r2 = _closure2_slot0;
                    r1 = r2.listenEvent;
                    r1 = r1.bind(r2)(r3);
                    r1 = _closure1_slot5;
                    r0 = r1.switchBluetoothSilence;
                    r0 = r0.bind(r1)();
case 73:
                    r0 = undefined;
                    return r0;
                }
            };
            r0['value'] = r6;
            r2[24] = r0;
            r0 = {};
            r6 = 'isAirplaneEnabled';
            r0['key'] = r6;
            r6 = function() { // Environment: r5
                r1 = _closure1_slot0;
                r3 = r1.default;
                r2 = undefined;
                r1 = function* () { // Environment: r0
                    r0 = function* () { // Original name: ?anon_0_, environment: r0
                        _fun5763: for(var _fun5763_ip = 0; ; ) switch(_fun5763_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(r1) { _fun5763_ip = 40; continue _fun5763 }
case 7:
                            r2 = _closure1_slot5;
                            r1 = r2.isAirplaneEnabled;
                            r1 = r1.bind(r2)();
                            SaveGenerator(address=28);
case 26:
                            return r1;
case 28:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(r2) { _fun5763_ip = 37; continue _fun5763 }
case 34:
                            return r1;
case 37:
                            return r1;
case 40:
                            return r0;
                        }
                    };
                    return r0;
                };
                r1 = r3.bind(r2)(r1);
                var _closure3_slot0 = r1;
                r0 = function() { // Original name: isAirplaneEnabled, environment: r0
                    r0 = undefined;
                    r3 = _closure3_slot0;
                    r2 = r3.apply;
                    r0 = arguments;
                    r1 = r0;
                    r0 = this;
                    r0 = r2.bind(r3)(r0, r1);
                    return r0;
                };
                return r0;
            };
            r6 = r6.bind(r1)();
            r0['value'] = r6;
            r2[25] = r0;
            r0 = {};
            r6 = 'switchAirplane';
            r0['key'] = r6;
            r6 = function(a0) { // Original name: switchAirplane, environment: r5
                r2 = _closure2_slot0;
                r1 = r2.listenEvent;
                r0 = a0;
                r0 = r1.bind(r2)(r0);
                r1 = _closure1_slot5;
                r0 = r1.switchAirplane;
                r0 = r0.bind(r1)();
                r0 = undefined;
                return r0;
            };
            r0['value'] = r6;
            r2[26] = r0;
            r0 = {};
            r6 = 'openAppSystemSettings';
            r0['key'] = r6;
            r6 = function() { // Environment: r5
                r1 = _closure1_slot0;
                r3 = r1.default;
                r2 = undefined;
                r1 = function* () { // Environment: r0
                    r0 = function* () { // Original name: ?anon_0_, environment: r0
                        _fun5768: for(var _fun5768_ip = 0; ; ) switch(_fun5768_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(r1) { _fun5768_ip = 184; continue _fun5768 }
case 10:
                            r1 = _closure1_slot3;
                            r1 = r1.Platform;
                            r3 = r1.OS;
                            r1 = 'ios';
                            if(!(r1 !== r3)) { _fun5768_ip = 104; continue _fun5768 }
case 35:
                            r1 = 'android';
                            if(!(r1 !== r3)) { _fun5768_ip = 77; continue _fun5768 }
case 43:
                            r1 = global;
                            r4 = r1.Error;
                            r1 = r4.prototype;
                            r3 = Object.create(r1, {constructor: {value: r4}});
                            r5 = 'unknown platform';
                            r6 = r3;
                            r1 = new r6[r4](r5, r4);
                            r1 = r1 instanceof Object ? r1 : r3;
                            throw r1;
case 77:
                            r3 = _closure1_slot5;
                            r1 = r3.openAppSystemSettings;
                            r1 = r1.bind(r3)();
                            SaveGenerator(address=95);
case 93:
                            return r1;
case 95:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(!r3) { _fun5768_ip = 173; continue _fun5768 }
case 101:
                            return r1;
case 104:
                            r1 = _closure1_slot3;
                            r3 = r1.Linking;
                            r1 = r3.canOpenURL;
                            r4 = 'app-settings:';
                            r1 = r1.bind(r3)(r4);
                            SaveGenerator(address=133);
case 131:
                            return r1;
case 133:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(r3) { _fun5768_ip = 181; continue _fun5768 }
case 139:
                            if(!r1) { _fun5768_ip = 173; continue _fun5768 }
case 142:
                            r2 = _closure1_slot3;
                            r3 = r2.Linking;
                            r2 = r3.openURL;
                            r2 = r2.bind(r3)(r4);
                            SaveGenerator(address=167);
case 165:
                            return r2;
case 167:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                            if(r3) { _fun5768_ip = 178; continue _fun5768 }
case 173:
                            r3 = undefined;
                            return r3;
case 178:
                            return r2;
case 181:
                            return r1;
case 184:
                            return r0;
                        }
                    };
                    return r0;
                };
                r1 = r3.bind(r2)(r1);
                var _closure3_slot0 = r1;
                r0 = function() { // Original name: openAppSystemSettings, environment: r0
                    r0 = undefined;
                    r3 = _closure3_slot0;
                    r2 = r3.apply;
                    r0 = arguments;
                    r1 = r0;
                    r0 = this;
                    r0 = r2.bind(r3)(r0, r1);
                    return r0;
                };
                return r0;
            };
            r6 = r6.bind(r1)();
            r0['value'] = r6;
            r2[27] = r0;
            r0 = {};
            r6 = 'addBluetoothListener';
            r0['key'] = r6;
            r6 = function() { // Environment: r5
                r1 = _closure1_slot0;
                r3 = r1.default;
                r2 = undefined;
                r1 = function* (a0) { // Environment: r0
                    r0 = function* (a0) { // Original name: ?anon_0_, environment: r0
                        _fun5772: for(var _fun5772_ip = 0; ; ) switch(_fun5772_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(r1) { _fun5772_ip = 56; continue _fun5772 }
case 7:
                            r6 = _closure2_slot0;
                            r5 = r6._addListener;
                            r10 = false;
                            r9 = 'bluetooth';
                            r8 = 'EventBluetoothChange';
                            r7 = a0;
                            r11 = r6;
                            r1 = r11[r5](r10, r9, r8, r7, r6);
                            SaveGenerator(address=44);
case 42:
                            return r1;
case 44:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(r2) { _fun5772_ip = 53; continue _fun5772 }
case 50:
                            return r1;
case 53:
                            return r1;
case 56:
                            return r0;
                        }
                    };
                    return r0;
                };
                r1 = r3.bind(r2)(r1);
                var _closure3_slot0 = r1;
                r0 = function(a0) { // Original name: addBluetoothListener, environment: r0
                    r0 = undefined;
                    r3 = _closure3_slot0;
                    r2 = r3.apply;
                    r0 = arguments;
                    r1 = r0;
                    r0 = this;
                    r0 = r2.bind(r3)(r0, r1);
                    return r0;
                };
                return r0;
            };
            r6 = r6.bind(r1)();
            r0['value'] = r6;
            r2[28] = r0;
            r0 = {};
            r6 = 'addWifiListener';
            r0['key'] = r6;
            r6 = function() { // Environment: r5
                r1 = _closure1_slot0;
                r3 = r1.default;
                r2 = undefined;
                r1 = function* (a0) { // Environment: r0
                    r0 = function* (a0) { // Original name: ?anon_0_, environment: r0
                        _fun5776: for(var _fun5776_ip = 0; ; ) switch(_fun5776_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(r1) { _fun5776_ip = 56; continue _fun5776 }
case 7:
                            r6 = _closure2_slot0;
                            r5 = r6._addListener;
                            r10 = true;
                            r9 = 'wifi';
                            r8 = 'EventWifiChange';
                            r7 = a0;
                            r11 = r6;
                            r1 = r11[r5](r10, r9, r8, r7, r6);
                            SaveGenerator(address=44);
case 42:
                            return r1;
case 44:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(r2) { _fun5776_ip = 53; continue _fun5776 }
case 50:
                            return r1;
case 53:
                            return r1;
case 56:
                            return r0;
                        }
                    };
                    return r0;
                };
                r1 = r3.bind(r2)(r1);
                var _closure3_slot0 = r1;
                r0 = function(a0) { // Original name: addWifiListener, environment: r0
                    r0 = undefined;
                    r3 = _closure3_slot0;
                    r2 = r3.apply;
                    r0 = arguments;
                    r1 = r0;
                    r0 = this;
                    r0 = r2.bind(r3)(r0, r1);
                    return r0;
                };
                return r0;
            };
            r6 = r6.bind(r1)();
            r0['value'] = r6;
            r2[29] = r0;
            r0 = {};
            r6 = 'addLocationListener';
            r0['key'] = r6;
            r6 = function() { // Environment: r5
                r1 = _closure1_slot0;
                r3 = r1.default;
                r2 = undefined;
                r1 = function* (a0) { // Environment: r0
                    r0 = function* (a0) { // Original name: ?anon_0_, environment: r0
                        _fun5780: for(var _fun5780_ip = 0; ; ) switch(_fun5780_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(r1) { _fun5780_ip = 56; continue _fun5780 }
case 7:
                            r6 = _closure2_slot0;
                            r5 = r6._addListener;
                            r10 = true;
                            r9 = 'location';
                            r8 = 'EventLocationChange';
                            r7 = a0;
                            r11 = r6;
                            r1 = r11[r5](r10, r9, r8, r7, r6);
                            SaveGenerator(address=44);
case 42:
                            return r1;
case 44:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(r2) { _fun5780_ip = 53; continue _fun5780 }
case 50:
                            return r1;
case 53:
                            return r1;
case 56:
                            return r0;
                        }
                    };
                    return r0;
                };
                r1 = r3.bind(r2)(r1);
                var _closure3_slot0 = r1;
                r0 = function(a0) { // Original name: addLocationListener, environment: r0
                    r0 = undefined;
                    r3 = _closure3_slot0;
                    r2 = r3.apply;
                    r0 = arguments;
                    r1 = r0;
                    r0 = this;
                    r0 = r2.bind(r3)(r0, r1);
                    return r0;
                };
                return r0;
            };
            r6 = r6.bind(r1)();
            r0['value'] = r6;
            r2[30] = r0;
            r0 = {};
            r6 = 'addLocationModeListener';
            r0['key'] = r6;
            r6 = function() { // Environment: r5
                r1 = _closure1_slot0;
                r3 = r1.default;
                r2 = undefined;
                r1 = function* (a0) { // Environment: r0
                    r0 = function* (a0) { // Original name: ?anon_0_, environment: r0
                        _fun5784: for(var _fun5784_ip = 0; ; ) switch(_fun5784_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(r1) { _fun5784_ip = 56; continue _fun5784 }
case 7:
                            r6 = _closure2_slot0;
                            r5 = r6._addListener;
                            r10 = true;
                            r9 = 'locationMode';
                            r8 = 'EventLocationModeChange';
                            r7 = a0;
                            r11 = r6;
                            r1 = r11[r5](r10, r9, r8, r7, r6);
                            SaveGenerator(address=44);
case 42:
                            return r1;
case 44:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(r2) { _fun5784_ip = 53; continue _fun5784 }
case 50:
                            return r1;
case 53:
                            return r1;
case 56:
                            return r0;
                        }
                    };
                    return r0;
                };
                r1 = r3.bind(r2)(r1);
                var _closure3_slot0 = r1;
                r0 = function(a0) { // Original name: addLocationModeListener, environment: r0
                    r0 = undefined;
                    r3 = _closure3_slot0;
                    r2 = r3.apply;
                    r0 = arguments;
                    r1 = r0;
                    r0 = this;
                    r0 = r2.bind(r3)(r0, r1);
                    return r0;
                };
                return r0;
            };
            r6 = r6.bind(r1)();
            r0['value'] = r6;
            r2[31] = r0;
            r0 = {};
            r6 = 'addAirplaneListener';
            r0['key'] = r6;
            r6 = function() { // Environment: r5
                r1 = _closure1_slot0;
                r3 = r1.default;
                r2 = undefined;
                r1 = function* (a0) { // Environment: r0
                    r0 = function* (a0) { // Original name: ?anon_0_, environment: r0
                        _fun5788: for(var _fun5788_ip = 0; ; ) switch(_fun5788_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(r1) { _fun5788_ip = 56; continue _fun5788 }
case 7:
                            r6 = _closure2_slot0;
                            r5 = r6._addListener;
                            r10 = true;
                            r9 = 'airplane';
                            r8 = 'EventAirplaneChange';
                            r7 = a0;
                            r11 = r6;
                            r1 = r11[r5](r10, r9, r8, r7, r6);
                            SaveGenerator(address=44);
case 42:
                            return r1;
case 44:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(r2) { _fun5788_ip = 53; continue _fun5788 }
case 50:
                            return r1;
case 53:
                            return r1;
case 56:
                            return r0;
                        }
                    };
                    return r0;
                };
                r1 = r3.bind(r2)(r1);
                var _closure3_slot0 = r1;
                r0 = function(a0) { // Original name: addAirplaneListener, environment: r0
                    r0 = undefined;
                    r3 = _closure3_slot0;
                    r2 = r3.apply;
                    r0 = arguments;
                    r1 = r0;
                    r0 = this;
                    r0 = r2.bind(r3)(r0, r1);
                    return r0;
                };
                return r0;
            };
            r6 = r6.bind(r1)();
            r0['value'] = r6;
            r2[32] = r0;
            r0 = {};
            r6 = '_addListener';
            r0['key'] = r6;
            r6 = function() { // Environment: r5
                r1 = _closure1_slot0;
                r3 = r1.default;
                r2 = undefined;
                r1 = function* (a0, a1, a2, a3) { // Environment: r0
                    r0 = function* (a0, a1, a2, a3) { // Original name: ?anon_0_, environment: r0
                        _fun5792: for(var _fun5792_ip = 0; ; ) switch(_fun5792_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(r1) { _fun5792_ip = 103; continue _fun5792 }
case 7:
                            r1 = a0;
                            if(!r1) { _fun5792_ip = 34; continue _fun5792 }
case 13:
                            r1 = _closure1_slot4;
                            r1 = r1.default;
                            r1 = r1.isAndroid;
                            if(!r1) { _fun5792_ip = 68; continue _fun5792 }
case 34:
                            r3 = _closure2_slot0;
                            r2 = r3._activeListener;
                            r1 = a1;
                            r1 = r2.bind(r3)(r1);
                            SaveGenerator(address=59);
case 57:
                            return r1;
case 59:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(r2) { _fun5792_ip = 100; continue _fun5792 }
case 65:
                            if(r1) { _fun5792_ip = 73; continue _fun5792 }
case 68:
                            r2 = null;
                            return r2;
case 73:
                            r5 = _closure1_slot6;
                            r4 = r5.addListener;
                            r3 = a2;
                            r2 = a3;
                            r2 = r4.bind(r5)(r3, r2);
                            return r2;
case 100:
                            return r1;
case 103:
                            return r0;
                        }
                    };
                    return r0;
                };
                r1 = r3.bind(r2)(r1);
                var _closure3_slot0 = r1;
                r0 = function(a0, a1, a2, a3) { // Original name: _addListener, environment: r0
                    r0 = undefined;
                    r3 = _closure3_slot0;
                    r2 = r3.apply;
                    r0 = arguments;
                    r1 = r0;
                    r0 = this;
                    r0 = r2.bind(r3)(r0, r1);
                    return r0;
                };
                return r0;
            };
            r6 = r6.bind(r1)();
            r0['value'] = r6;
            r2[33] = r0;
            r0 = {};
            r6 = '_activeListener';
            r0['key'] = r6;
            r6 = function() { // Environment: r5
                r1 = _closure1_slot0;
                r3 = r1.default;
                r2 = undefined;
                r1 = function* (a0) { // Environment: r0
                    r0 = function* (a0) { // Original name: ?anon_0_, environment: r0
                        _fun5796: for(var _fun5796_ip = 0; ; ) switch(_fun5796_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(r2) { _fun5796_ip = 76; continue _fun5796 }
case 7:
                            r1 = a0;
case 10: // try_start_0
                            r3 = _closure1_slot5;
                            r2 = r3.activeListener;
                            r1 = r2.bind(r3)(r1);
                            SaveGenerator(address=32);
case 30:
                            return r1;
case 32:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(r2) { _fun5796_ip = 43; continue _fun5796 }
case 38: // try_end0
                            r2 = true;
                            return r2;
case 43:
                            return r1;
case 46: // catch_target0
                            CatchBlockStart(arg_register=1);
                            r2 = global;
                            r3 = r2.console;
                            r2 = r3.warn;
                            r1 = r1.message;
                            r1 = r2.bind(r3)(r1);
                            r1 = false;
                            return r1;
case 76:
                            return r0;
                        }
                    };
                    return r0;
                };
                r1 = r3.bind(r2)(r1);
                var _closure3_slot0 = r1;
                r0 = function(a0) { // Original name: _activeListener, environment: r0
                    r0 = undefined;
                    r3 = _closure3_slot0;
                    r2 = r3.apply;
                    r0 = arguments;
                    r1 = r0;
                    r0 = this;
                    r0 = r2.bind(r3)(r0, r1);
                    return r0;
                };
                return r0;
            };
            r6 = r6.bind(r1)();
            r0['value'] = r6;
            r2[34] = r0;
            r0 = {};
            r6 = 'removeListener';
            r0['key'] = r6;
            r6 = function(a0) { // Original name: removeListener, environment: r5
                _fun5797: for(var _fun5797_ip = 0; ; ) switch(_fun5797_ip) {
case 0:
                    r1 = a0;
                    if(!r1) { _fun5797_ip = 15; continue _fun5797 }
case 6:
                    r0 = r1.remove;
                    r0 = r0.bind(r1)();
case 15:
                    r0 = undefined;
                    return r0;
                }
            };
            r0['value'] = r6;
            r2[35] = r0;
            r0 = {};
            r6 = 'listenEvent';
            r0['key'] = r6;
            r5 = function(a0) { // Original name: listenEvent, environment: r5
                _fun5798: for(var _fun5798_ip = 0; ; ) switch(_fun5798_ip) {
case 0:
                    r0 = a0;
                    var _closure3_slot0 = r0;
                    if(r0) { _fun5798_ip = 16; continue _fun5798 }
case 12:
                    r0 = undefined;
                    return r0;
case 16:
                    r4 = _closure1_slot6;
                    r3 = r4.addListener;
                    r2 = 'EventEnterForeground';
                    r0 = function() { // Environment: r1
                        r2 = _closure3_slot1;
                        r1 = r2.remove;
                        r1 = r1.bind(r2)();
                        r1 = _closure3_slot0;
                        r0 = undefined;
                        r1 = r1.bind(r0)();
                        return r0;
                    };
                    r0 = r3.bind(r4)(r2, r0);
                    var _closure3_slot1 = r0;
                    r0 = undefined;
                    return r0;
                }
            };
            r0['value'] = r5;
            r2[36] = r0;
            r0 = null;
            r0 = r3.bind(r1)(r4, r0, r2);
            return r0;
        };
        r1 = r1.bind(r0)();
        r3['default'] = r1;
        r3 = -1;
        r1['saveBrightnessVal'] = r3;
        r1['saveScreenModeVal'] = r2;
        return r0;
    };
    r6 = 523;
    r5 = [1, 363, 12, 13, 2, 524];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r3 = a5;
        r6 = a6;
        r0 = 0;
        r1 = r6[r0];
        r0 = undefined;
        r7 = r4.bind(r0)(r1);
        r1 = global;
        r9 = r1.Object;
        r8 = r9.defineProperty;
        r2 = {};
        r1 = true;
        r2['value'] = r1;
        r1 = '__esModule';
        r1 = r8.bind(r9)(r3, r1, r2);
        r3['default'] = r0;
        r1 = 1;
        r1 = r6[r1];
        r1 = r4.bind(r0)(r1);
        r2 = r7.bind(r0)(r1);
        r1 = 2;
        r1 = r6[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r7.bind(r0)(r1);
        var _closure1_slot0 = r1;
        r1 = 3;
        r1 = r6[r1];
        r1 = r4.bind(r0)(r1);
        r4 = r2.default;
        r2 = function() { // Original name: Utils, environment: r5
            r1 = _closure1_slot0;
            r3 = r1.default;
            r2 = _closure1_slot1;
            r0 = undefined;
            r1 = this;
            r1 = r3.bind(r0)(r1, r2);
            return r0;
        };
        var _closure1_slot1 = r2;
        r2 = r4.bind(r0)(r2);
        r3['default'] = r2;
        r3 = r1.Platform;
        r4 = r3.OS;
        r3 = 'android';
        r3 = r4 === r3;
        r2['isAndroid'] = r3;
        r1 = r1.Platform;
        r3 = r1.OS;
        r1 = 'ios';
        r1 = r3 === r1;
        r2['isIOS'] = r1;
        return r0;
    };
    r6 = 524;
    r5 = [1, 13, 12, 2];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r7 = a1;
        r2 = a5;
        r8 = a6;
        var _closure1_slot0 = r7;
        var _closure1_slot1 = r2;
        var _closure1_slot2 = r8;
        r0 = 0;
        r1 = r8[r0];
        r0 = undefined;
        r5 = r7.bind(r0)(r1);
        r4 = global;
        r11 = r4.Object;
        r10 = r11.defineProperty;
        r9 = {};
        r6 = true;
        r9['value'] = r6;
        r1 = '__esModule';
        r1 = r10.bind(r11)(r2, r1, r9);
        r1 = {};
        r1['OrientationType'] = r6;
        var _closure1_slot3 = r1;
        r2['OrientationType'] = r0;
        r2['default'] = r0;
        r1 = 1;
        r1 = r8[r1];
        r1 = r7.bind(r0)(r1);
        r1 = r5.bind(r0)(r1);
        r9 = r4.Object;
        r6 = r9.keys;
        r5 = 2;
        r5 = r8[r5];
        r5 = r7.bind(r0)(r5);
        r9 = r6.bind(r9)(r5);
        r6 = r9.forEach;
        r5 = function(a0) { // Environment: r3
            _fun5803: for(var _fun5803_ip = 0; ; ) switch(_fun5803_ip) {
case 0:
                r5 = a0;
                var _closure2_slot0 = r5;
                r0 = 'default';
                if(!(r5 !== r0)) { _fun5803_ip = 168; continue _fun5803 }
case 20:
                r0 = '__esModule';
                if(!(r5 !== r0)) { _fun5803_ip = 168; continue _fun5803 }
case 31:
                r2 = global;
                r0 = r2.Object;
                r0 = r0.prototype;
                r4 = r0.hasOwnProperty;
                r3 = r4.call;
                r0 = _closure1_slot3;
                r0 = r3.bind(r4)(r0, r5);
                if(r0) { _fun5803_ip = 164; continue _fun5803 }
case 70:
                r0 = _closure1_slot1;
                r0 = r5 in r0;
                if(!r0) { _fun5803_ip = 119; continue _fun5803 }
case 81:
                r0 = _closure1_slot1;
                r4 = r0[r5];
                r7 = _closure1_slot0;
                r3 = _closure1_slot2;
                r0 = 2;
                r3 = r3[r0];
                r0 = undefined;
                r3 = r7.bind(r0)(r3);
                r3 = r3[r5];
                if(!(r4 !== r3)) { _fun5803_ip = 162; continue _fun5803 }
case 119:
                r4 = r2.Object;
                r3 = r4.defineProperty;
                r2 = _closure1_slot1;
                r1 = {};
                r7 = true;
                r1['enumerable'] = r7;
                r6 = function() { // Original name: get, environment: r6
                    r2 = _closure1_slot0;
                    r1 = _closure1_slot2;
                    r0 = 2;
                    r1 = r1[r0];
                    r0 = undefined;
                    r1 = r2.bind(r0)(r1);
                    r0 = _closure2_slot0;
                    r0 = r1[r0];
                    return r0;
                };
                r1['get'] = r6;
                r1 = r3.bind(r4)(r2, r5, r1);
                r1 = undefined;
                return r1;
case 162:
                return r0;
case 164:
                r0 = undefined;
                return r0;
case 168:
                r0 = undefined;
                return r0;
            }
        };
        r5 = r6.bind(r9)(r5);
        r6 = r4.Object;
        r5 = r6.keys;
        r4 = 3;
        r4 = r8[r4];
        r4 = r7.bind(r0)(r4);
        r5 = r5.bind(r6)(r4);
        r4 = r5.forEach;
        r3 = function(a0) { // Environment: r3
            _fun5805: for(var _fun5805_ip = 0; ; ) switch(_fun5805_ip) {
case 0:
                r5 = a0;
                var _closure2_slot0 = r5;
                r0 = 'default';
                if(!(r5 !== r0)) { _fun5805_ip = 168; continue _fun5805 }
case 20:
                r0 = '__esModule';
                if(!(r5 !== r0)) { _fun5805_ip = 168; continue _fun5805 }
case 31:
                r2 = global;
                r0 = r2.Object;
                r0 = r0.prototype;
                r4 = r0.hasOwnProperty;
                r3 = r4.call;
                r0 = _closure1_slot3;
                r0 = r3.bind(r4)(r0, r5);
                if(r0) { _fun5805_ip = 164; continue _fun5805 }
case 70:
                r0 = _closure1_slot1;
                r0 = r5 in r0;
                if(!r0) { _fun5805_ip = 119; continue _fun5805 }
case 81:
                r0 = _closure1_slot1;
                r4 = r0[r5];
                r7 = _closure1_slot0;
                r3 = _closure1_slot2;
                r0 = 3;
                r3 = r3[r0];
                r0 = undefined;
                r3 = r7.bind(r0)(r3);
                r3 = r3[r5];
                if(!(r4 !== r3)) { _fun5805_ip = 162; continue _fun5805 }
case 119:
                r4 = r2.Object;
                r3 = r4.defineProperty;
                r2 = _closure1_slot1;
                r1 = {};
                r7 = true;
                r1['enumerable'] = r7;
                r6 = function() { // Original name: get, environment: r6
                    r2 = _closure1_slot0;
                    r1 = _closure1_slot2;
                    r0 = 3;
                    r1 = r1[r0];
                    r0 = undefined;
                    r1 = r2.bind(r0)(r1);
                    r0 = _closure2_slot0;
                    r0 = r1[r0];
                    return r0;
                };
                r1['get'] = r6;
                r1 = r3.bind(r4)(r2, r5, r1);
                r1 = undefined;
                return r1;
case 162:
                return r0;
case 164:
                r0 = undefined;
                return r0;
case 168:
                r0 = undefined;
                return r0;
            }
        };
        r3 = r4.bind(r5)(r3);
        r3 = {'PORTRAIT': 'PORTRAIT', 'PORTRAIT-UPSIDEDOWN': 'PORTRAIT-UPSIDEDOWN', 'LANDSCAPE-LEFT': 'LANDSCAPE-LEFT', 'LANDSCAPE-RIGHT': 'LANDSCAPE-RIGHT', 'FACE-UP': 'FACE-UP', 'FACE-DOWN': 'FACE-DOWN', 'UNKNOWN': 'UNKNOWN'};
        r2['OrientationType'] = r3;
        r1 = r1.default;
        r2['default'] = r1;
        return r0;
    };
    r6 = 525;
    r5 = [1, 526, 527, 531];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r6 = a1;
        r3 = a5;
        r7 = a6;
        r0 = function(a0) { // Original name: getKey, environment: r1
            _fun5808: for(var _fun5808_ip = 0; ; ) switch(_fun5808_ip) {
case 0:
                r1 = a0;
                r3 = r1.hasOwnProperty;
                r2 = _closure1_slot6;
                r2 = r3.bind(r1)(r2);
                if(r2) { _fun5808_ip = 98; continue _fun5808 }
case 23:
                r2 = global;
                r4 = r2.Object;
                r3 = r4.isExtensible;
                r3 = r3.bind(r4)(r1);
                if(r3) { _fun5808_ip = 51; continue _fun5808 }
case 45:
                r3 = 'F';
                return r3;
case 51:
                r5 = r2.Object;
                r4 = r5.defineProperty;
                r3 = _closure1_slot6;
                r2 = {};
                r6 = _closure1_slot5;
                r7 = r6 + 1;
                _closure1_slot5 = r7;
                r6 = 'L';
                r6 = r6 + r7;
                r2['value'] = r6;
                r2 = r4.bind(r5)(r1, r3, r2);
case 98:
                r0 = _closure1_slot6;
                r0 = r1[r0];
                return r0;
            }
        };
        var _closure1_slot8 = r0;
        r4 = 0;
        r2 = r7[r4];
        r0 = undefined;
        r8 = r6.bind(r0)(r2);
        r2 = global;
        r10 = r2.Object;
        r9 = r10.defineProperty;
        r5 = {};
        r2 = true;
        r5['value'] = r2;
        r2 = '__esModule';
        r2 = r9.bind(r10)(r3, r2, r5);
        r3['default'] = r0;
        r2 = 1;
        r2 = r7[r2];
        r2 = r6.bind(r0)(r2);
        r2 = r8.bind(r0)(r2);
        r5 = 2;
        r5 = r7[r5];
        r5 = r6.bind(r0)(r5);
        r5 = r8.bind(r0)(r5);
        var _closure1_slot0 = r5;
        r5 = 3;
        r8 = r7[r5];
        r8 = r6.bind(r0)(r8);
        r8 = r8.NativeModules;
        r8 = r8.Orientation;
        var _closure1_slot1 = r8;
        r5 = r7[r5];
        r5 = r6.bind(r0)(r5);
        r5 = r5.NativeEventEmitter;
        var _closure1_slot2 = r5;
        r5 = {};
        var _closure1_slot4 = r5;
        var _closure1_slot5 = r4;
        r4 = '__listener_id';
        var _closure1_slot6 = r4;
        r4 = false;
        var _closure1_slot7 = r4;
        r4 = r2.default;
        r2 = function() { // Original name: Orientation, environment: r1
            r1 = _closure1_slot0;
            r3 = r1.default;
            r2 = _closure1_slot9;
            r0 = undefined;
            r1 = this;
            r1 = r3.bind(r0)(r1, r2);
            return r0;
        };
        var _closure1_slot9 = r2;
        r2 = r4.bind(r0)(r2);
        r3['default'] = r2;
        r3 = function(a0) { // Environment: r1
            r0 = undefined;
            return r0;
        };
        r2['configure'] = r3;
        r3 = function(a0) { // Environment: r1
            r1 = a0;
            var _closure2_slot0 = r1;
            r2 = _closure1_slot1;
            r1 = r2.getOrientation;
            r0 = function(a0) { // Environment: r0
                r2 = _closure2_slot0;
                r0 = undefined;
                r1 = a0;
                r1 = r2.bind(r0)(r1);
                return r0;
            };
            r0 = r1.bind(r2)(r0);
            r0 = undefined;
            return r0;
        };
        r2['getOrientation'] = r3;
        r3 = function(a0) { // Environment: r1
            r1 = a0;
            var _closure2_slot0 = r1;
            r2 = _closure1_slot1;
            r1 = r2.getDeviceOrientation;
            r0 = function(a0) { // Environment: r0
                r2 = _closure2_slot0;
                r0 = undefined;
                r1 = a0;
                r1 = r2.bind(r0)(r1);
                return r0;
            };
            r0 = r1.bind(r2)(r0);
            r0 = undefined;
            return r0;
        };
        r2['getDeviceOrientation'] = r3;
        r3 = function() { // Environment: r1
            r0 = _closure1_slot7;
            return r0;
        };
        r2['isLocked'] = r3;
        r3 = function() { // Environment: r1
            r1 = true;
            _closure1_slot7 = r1;
            r1 = _closure1_slot1;
            r0 = r1.lockToPortrait;
            r0 = r0.bind(r1)();
            r0 = undefined;
            return r0;
        };
        r2['lockToPortrait'] = r3;
        r3 = function() { // Environment: r1
            r1 = true;
            _closure1_slot7 = r1;
            r1 = _closure1_slot1;
            r0 = r1.lockToPortraitUpsideDown;
            r0 = r0.bind(r1)();
            r0 = undefined;
            return r0;
        };
        r2['lockToPortraitUpsideDown'] = r3;
        r3 = function() { // Environment: r1
            r1 = true;
            _closure1_slot7 = r1;
            r1 = _closure1_slot1;
            r0 = r1.lockToLandscape;
            r0 = r0.bind(r1)();
            r0 = undefined;
            return r0;
        };
        r2['lockToLandscape'] = r3;
        r3 = function() { // Environment: r1
            r1 = true;
            _closure1_slot7 = r1;
            r1 = _closure1_slot1;
            r0 = r1.lockToLandscapeRight;
            r0 = r0.bind(r1)();
            r0 = undefined;
            return r0;
        };
        r2['lockToLandscapeRight'] = r3;
        r3 = function() { // Environment: r1
            r1 = true;
            _closure1_slot7 = r1;
            r1 = _closure1_slot1;
            r0 = r1.lockToLandscapeLeft;
            r0 = r0.bind(r1)();
            r0 = undefined;
            return r0;
        };
        r2['lockToLandscapeLeft'] = r3;
        r3 = function() { // Environment: r1
            r0 = true;
            _closure1_slot7 = r0;
            r0 = undefined;
            return r0;
        };
        r2['lockToAllOrientationsButUpsideDown'] = r3;
        r3 = function() { // Environment: r1
            r1 = false;
            _closure1_slot7 = r1;
            r1 = _closure1_slot1;
            r0 = r1.unlockAllOrientations;
            r0 = r0.bind(r1)();
            r0 = undefined;
            return r0;
        };
        r2['unlockAllOrientations'] = r3;
        r3 = function(a0) { // Environment: r1
            _fun5823: for(var _fun5823_ip = 0; ; ) switch(_fun5823_ip) {
case 0:
                r4 = a0;
                var _closure2_slot0 = r4;
                r3 = _closure1_slot8;
                r0 = undefined;
                r3 = r3.bind(r0)(r4);
                r5 = _closure1_slot3;
                r4 = null;
                if(!(r5 == r4)) { _fun5823_ip = 63; continue _fun5823 }
case 33:
                r6 = _closure1_slot2;
                r8 = _closure1_slot1;
                r5 = r6.prototype;
                r5 = Object.create(r5, {constructor: {value: r6}});
                r9 = r5;
                r4 = new r9[r6](r8, r7);
                r6 = r4 instanceof Object ? r4 : r5;
                _fun5823_ip = 67; continue _fun5823;
case 63:
                r6 = _closure1_slot3;
case 67:
                var _closure1_slot3 = r6;
                r2 = _closure1_slot4;
                r5 = r6.addListener;
                r4 = 'orientationDidChange';
                r1 = function(a0) { // Environment: r1
                    r2 = _closure2_slot0;
                    r0 = a0;
                    r1 = r0.orientation;
                    r0 = undefined;
                    r1 = r2.bind(r0)(r1);
                    return r0;
                };
                r1 = r5.bind(r6)(r4, r1);
                r2[r3] = r1;
                return r0;
            }
        };
        r2['addOrientationListener'] = r3;
        r3 = function(a0) { // Environment: r1
            _fun5825: for(var _fun5825_ip = 0; ; ) switch(_fun5825_ip) {
case 0:
                r3 = _closure1_slot8;
                r0 = undefined;
                r2 = a0;
                r3 = r3.bind(r0)(r2);
                r2 = _closure1_slot4;
                r2 = r2[r3];
                if(r2) { _fun5825_ip = 30; continue _fun5825 }
case 28:
                return r0;
case 30:
                r2 = _closure1_slot4;
                r4 = r2[r3];
                r1 = r4.remove;
                r1 = r1.bind(r4)();
                r1 = null;
                r2[r3] = r1;
                return r0;
            }
        };
        r2['removeOrientationListener'] = r3;
        r3 = function(a0) { // Environment: r1
            _fun5826: for(var _fun5826_ip = 0; ; ) switch(_fun5826_ip) {
case 0:
                r4 = a0;
                var _closure2_slot0 = r4;
                r3 = _closure1_slot8;
                r0 = undefined;
                r3 = r3.bind(r0)(r4);
                r5 = _closure1_slot3;
                r4 = null;
                if(!(r5 == r4)) { _fun5826_ip = 63; continue _fun5826 }
case 33:
                r6 = _closure1_slot2;
                r8 = _closure1_slot1;
                r5 = r6.prototype;
                r5 = Object.create(r5, {constructor: {value: r6}});
                r9 = r5;
                r4 = new r9[r6](r8, r7);
                r6 = r4 instanceof Object ? r4 : r5;
                _fun5826_ip = 67; continue _fun5826;
case 63:
                r6 = _closure1_slot3;
case 67:
                _closure1_slot3 = r6;
                r2 = _closure1_slot4;
                r5 = r6.addListener;
                r4 = 'deviceOrientationDidChange';
                r1 = function(a0) { // Environment: r1
                    r2 = _closure2_slot0;
                    r0 = a0;
                    r1 = r0.deviceOrientation;
                    r0 = undefined;
                    r1 = r2.bind(r0)(r1);
                    return r0;
                };
                r1 = r5.bind(r6)(r4, r1);
                r2[r3] = r1;
                return r0;
            }
        };
        r2['addDeviceOrientationListener'] = r3;
        r3 = function(a0) { // Environment: r1
            _fun5828: for(var _fun5828_ip = 0; ; ) switch(_fun5828_ip) {
case 0:
                r3 = _closure1_slot8;
                r0 = undefined;
                r2 = a0;
                r3 = r3.bind(r0)(r2);
                r2 = _closure1_slot4;
                r2 = r2[r3];
                if(r2) { _fun5828_ip = 30; continue _fun5828 }
case 28:
                return r0;
case 30:
                r2 = _closure1_slot4;
                r4 = r2[r3];
                r1 = r4.remove;
                r1 = r1.bind(r4)();
                r1 = null;
                r2[r3] = r1;
                return r0;
            }
        };
        r2['removeDeviceOrientationListener'] = r3;
        r3 = function(a0) { // Environment: r1
            _fun5829: for(var _fun5829_ip = 0; ; ) switch(_fun5829_ip) {
case 0:
                r4 = a0;
                var _closure2_slot0 = r4;
                r3 = _closure1_slot8;
                r0 = undefined;
                r3 = r3.bind(r0)(r4);
                r5 = _closure1_slot3;
                r4 = null;
                if(!(r5 == r4)) { _fun5829_ip = 63; continue _fun5829 }
case 33:
                r6 = _closure1_slot2;
                r8 = _closure1_slot1;
                r5 = r6.prototype;
                r5 = Object.create(r5, {constructor: {value: r6}});
                r9 = r5;
                r4 = new r9[r6](r8, r7);
                r6 = r4 instanceof Object ? r4 : r5;
                _fun5829_ip = 67; continue _fun5829;
case 63:
                r6 = _closure1_slot3;
case 67:
                _closure1_slot3 = r6;
                r2 = _closure1_slot4;
                r5 = r6.addListener;
                r4 = 'lockDidChange';
                r1 = function(a0) { // Environment: r1
                    r2 = _closure2_slot0;
                    r0 = a0;
                    r1 = r0.orientation;
                    r0 = undefined;
                    r1 = r2.bind(r0)(r1);
                    return r0;
                };
                r1 = r5.bind(r6)(r4, r1);
                r2[r3] = r1;
                return r0;
            }
        };
        r2['addLockListener'] = r3;
        r3 = function(a0) { // Environment: r1
            _fun5831: for(var _fun5831_ip = 0; ; ) switch(_fun5831_ip) {
case 0:
                r3 = _closure1_slot8;
                r0 = undefined;
                r2 = a0;
                r3 = r3.bind(r0)(r2);
                r2 = _closure1_slot4;
                r2 = r2[r3];
                if(r2) { _fun5831_ip = 30; continue _fun5831 }
case 28:
                return r0;
case 30:
                r2 = _closure1_slot4;
                r4 = r2[r3];
                r1 = r4.remove;
                r1 = r1.bind(r4)();
                r1 = null;
                r2[r3] = r1;
                return r0;
            }
        };
        r2['removeLockListener'] = r3;
        r3 = function() { // Environment: r1
            _fun5832: for(var _fun5832_ip = 0; ; ) switch(_fun5832_ip) {
case 0:
                r5 = _closure1_slot4;
                r0 = null;
                for(r1 in r5)
case 17:
                {
case 26:
                    r8 = r1;
                    r7 = _closure1_slot4;
                    r7 = r7[r8];
                    if(!r7) { _fun5832_ip = 17; continue _fun5832 }
case 40:
                    r7 = _closure1_slot4;
                    r10 = r7[r8];
                    r9 = r10.remove;
                    r9 = r9.bind(r10)();
                    r7[r8] = r0;
                    _fun5832_ip = 17; continue _fun5832;
                }
case 63:
                r0 = undefined;
                return r0;
            }
        };
        r2['removeAllListeners'] = r3;
        r3 = function() { // Environment: r1
            r0 = _closure1_slot1;
            r0 = r0.initialOrientation;
            return r0;
        };
        r2['getInitialOrientation'] = r3;
        r1 = function(a0) { // Environment: r1
            r1 = a0;
            var _closure2_slot0 = r1;
            r2 = _closure1_slot1;
            r1 = r2.getAutoRotateState;
            r0 = function(a0) { // Environment: r0
                r2 = _closure2_slot0;
                r0 = undefined;
                r1 = a0;
                r1 = r2.bind(r0)(r1);
                return r0;
            };
            r0 = r1.bind(r2)(r0);
            r0 = undefined;
            return r0;
        };
        r2['getAutoRotateState'] = r1;
        return r0;
    };
    r6 = 526;
    r5 = [1, 13, 12, 2];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r8 = a5;
        r6 = a6;
        var _closure1_slot0 = r5;
        var _closure1_slot1 = r8;
        var _closure1_slot2 = r6;
        r2 = global;
        r7 = r2.Object;
        r4 = r7.defineProperty;
        r3 = {};
        r0 = true;
        r3['value'] = r0;
        r0 = '__esModule';
        r0 = r4.bind(r7)(r8, r0, r3);
        r7 = r2.Object;
        r4 = r7.keys;
        r0 = 0;
        r3 = r6[r0];
        r0 = undefined;
        r3 = r5.bind(r0)(r3);
        r7 = r4.bind(r7)(r3);
        r4 = r7.forEach;
        r3 = function(a0) { // Environment: r1
            _fun5837: for(var _fun5837_ip = 0; ; ) switch(_fun5837_ip) {
case 0:
                r5 = a0;
                var _closure2_slot0 = r5;
                r0 = 'default';
                if(!(r5 !== r0)) { _fun5837_ip = 123; continue _fun5837 }
case 17:
                r0 = '__esModule';
                if(!(r5 !== r0)) { _fun5837_ip = 123; continue _fun5837 }
case 25:
                r0 = _closure1_slot1;
                r0 = r5 in r0;
                if(!r0) { _fun5837_ip = 76; continue _fun5837 }
case 39:
                r0 = _closure1_slot1;
                r3 = r0[r5];
                r4 = _closure1_slot0;
                r2 = _closure1_slot2;
                r0 = 0;
                r2 = r2[r0];
                r0 = undefined;
                r2 = r4.bind(r0)(r2);
                r2 = r2[r5];
                if(!(r3 !== r2)) { _fun5837_ip = 121; continue _fun5837 }
case 76:
                r2 = global;
                r4 = r2.Object;
                r3 = r4.defineProperty;
                r2 = _closure1_slot1;
                r1 = {};
                r7 = true;
                r1['enumerable'] = r7;
                r6 = function() { // Original name: get, environment: r6
                    r2 = _closure1_slot0;
                    r1 = _closure1_slot2;
                    r0 = 0;
                    r1 = r1[r0];
                    r0 = undefined;
                    r1 = r2.bind(r0)(r1);
                    r0 = _closure2_slot0;
                    r0 = r1[r0];
                    return r0;
                };
                r1['get'] = r6;
                r1 = r3.bind(r4)(r2, r5, r1);
                r1 = undefined;
                return r1;
case 121:
                return r0;
case 123:
                r0 = undefined;
                return r0;
            }
        };
        r3 = r4.bind(r7)(r3);
        r7 = r2.Object;
        r4 = r7.keys;
        r3 = 1;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r7 = r4.bind(r7)(r3);
        r4 = r7.forEach;
        r3 = function(a0) { // Environment: r1
            _fun5839: for(var _fun5839_ip = 0; ; ) switch(_fun5839_ip) {
case 0:
                r5 = a0;
                var _closure2_slot0 = r5;
                r0 = 'default';
                if(!(r5 !== r0)) { _fun5839_ip = 124; continue _fun5839 }
case 17:
                r0 = '__esModule';
                if(!(r5 !== r0)) { _fun5839_ip = 124; continue _fun5839 }
case 25:
                r0 = _closure1_slot1;
                r0 = r5 in r0;
                if(!r0) { _fun5839_ip = 77; continue _fun5839 }
case 39:
                r0 = _closure1_slot1;
                r3 = r0[r5];
                r4 = _closure1_slot0;
                r2 = _closure1_slot2;
                r0 = 1;
                r2 = r2[r0];
                r0 = undefined;
                r2 = r4.bind(r0)(r2);
                r2 = r2[r5];
                if(!(r3 !== r2)) { _fun5839_ip = 122; continue _fun5839 }
case 77:
                r2 = global;
                r4 = r2.Object;
                r3 = r4.defineProperty;
                r2 = _closure1_slot1;
                r1 = {};
                r7 = true;
                r1['enumerable'] = r7;
                r6 = function() { // Original name: get, environment: r6
                    r2 = _closure1_slot0;
                    r1 = _closure1_slot2;
                    r0 = 1;
                    r1 = r1[r0];
                    r0 = undefined;
                    r1 = r2.bind(r0)(r1);
                    r0 = _closure2_slot0;
                    r0 = r1[r0];
                    return r0;
                };
                r1['get'] = r6;
                r1 = r3.bind(r4)(r2, r5, r1);
                r1 = undefined;
                return r1;
case 122:
                return r0;
case 124:
                r0 = undefined;
                return r0;
            }
        };
        r3 = r4.bind(r7)(r3);
        r4 = r2.Object;
        r3 = r4.keys;
        r2 = 2;
        r2 = r6[r2];
        r2 = r5.bind(r0)(r2);
        r3 = r3.bind(r4)(r2);
        r2 = r3.forEach;
        r1 = function(a0) { // Environment: r1
            _fun5841: for(var _fun5841_ip = 0; ; ) switch(_fun5841_ip) {
case 0:
                r5 = a0;
                var _closure2_slot0 = r5;
                r0 = 'default';
                if(!(r5 !== r0)) { _fun5841_ip = 124; continue _fun5841 }
case 17:
                r0 = '__esModule';
                if(!(r5 !== r0)) { _fun5841_ip = 124; continue _fun5841 }
case 25:
                r0 = _closure1_slot1;
                r0 = r5 in r0;
                if(!r0) { _fun5841_ip = 77; continue _fun5841 }
case 39:
                r0 = _closure1_slot1;
                r3 = r0[r5];
                r4 = _closure1_slot0;
                r2 = _closure1_slot2;
                r0 = 2;
                r2 = r2[r0];
                r0 = undefined;
                r2 = r4.bind(r0)(r2);
                r2 = r2[r5];
                if(!(r3 !== r2)) { _fun5841_ip = 122; continue _fun5841 }
case 77:
                r2 = global;
                r4 = r2.Object;
                r3 = r4.defineProperty;
                r2 = _closure1_slot1;
                r1 = {};
                r7 = true;
                r1['enumerable'] = r7;
                r6 = function() { // Original name: get, environment: r6
                    r2 = _closure1_slot0;
                    r1 = _closure1_slot2;
                    r0 = 2;
                    r1 = r1[r0];
                    r0 = undefined;
                    r1 = r2.bind(r0)(r1);
                    r0 = _closure2_slot0;
                    r0 = r1[r0];
                    return r0;
                };
                r1['get'] = r6;
                r1 = r3.bind(r4)(r2, r5, r1);
                r1 = undefined;
                return r1;
case 122:
                return r0;
case 124:
                r0 = undefined;
                return r0;
            }
        };
        r1 = r2.bind(r3)(r1);
        return r0;
    };
    r6 = 527;
    r5 = [528, 529, 530];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r6 = a5;
        r5 = a6;
        r0 = 0;
        r1 = r5[r0];
        r0 = undefined;
        r3 = r4.bind(r0)(r1);
        r1 = global;
        r9 = r1.Object;
        r8 = r9.defineProperty;
        r7 = {};
        r1 = true;
        r7['value'] = r1;
        r1 = '__esModule';
        r1 = r8.bind(r9)(r6, r1, r7);
        r1 = function(a0) { // Original name: useOrientationChange, environment: r2
            r3 = a0;
            var _closure2_slot0 = r3;
            r0 = _closure1_slot0;
            r4 = r0.useRef;
            r0 = undefined;
            r4 = r4.bind(r0)();
            var _closure2_slot1 = r4;
            r4 = _closure1_slot0;
            r5 = r4.useEffect;
            r4 = new Array(1);
            r4[0] = r3;
            r3 = function() { // Environment: r1
                r1 = _closure2_slot1;
                r0 = _closure2_slot0;
                r1['current'] = r0;
                r0 = undefined;
                return r0;
            };
            r3 = r5.bind(r0)(r3, r4);
            r2 = _closure1_slot0;
            r3 = r2.useEffect;
            r2 = function() { // Environment: r1
                r3 = function(a0) { // Original name: listener, environment: r0
                    r2 = _closure2_slot1;
                    r1 = r2.current;
                    r0 = a0;
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
                };
                var _closure3_slot0 = r3;
                r2 = _closure1_slot1;
                r4 = r2.default;
                r2 = r4.getInitialOrientation;
                r4 = r2.bind(r4)();
                r2 = undefined;
                r2 = r3.bind(r2)(r4);
                r1 = _closure1_slot1;
                r2 = r1.default;
                r1 = r2.addOrientationListener;
                r1 = r1.bind(r2)(r3);
                r0 = function() { // Environment: r0
                    r0 = _closure1_slot1;
                    r2 = r0.default;
                    r1 = r2.removeOrientationListener;
                    r0 = _closure3_slot0;
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
                };
                return r0;
            };
            r1 = new Array(0);
            r1 = r3.bind(r0)(r2, r1);
            return r0;
        };
        r6['useOrientationChange'] = r1;
        r1 = 1;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        var _closure1_slot0 = r1;
        r1 = 2;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        var _closure1_slot1 = r1;
        return r0;
    };
    r6 = 528;
    r5 = [1, 119, 526];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r6 = a5;
        r5 = a6;
        r0 = 0;
        r1 = r5[r0];
        r0 = undefined;
        r3 = r4.bind(r0)(r1);
        r1 = global;
        r9 = r1.Object;
        r8 = r9.defineProperty;
        r7 = {};
        r1 = true;
        r7['value'] = r1;
        r1 = '__esModule';
        r1 = r8.bind(r9)(r6, r1, r7);
        r1 = function(a0) { // Original name: useDeviceOrientationChange, environment: r2
            r3 = a0;
            var _closure2_slot0 = r3;
            r0 = _closure1_slot0;
            r4 = r0.useRef;
            r0 = undefined;
            r4 = r4.bind(r0)();
            var _closure2_slot1 = r4;
            r4 = _closure1_slot0;
            r5 = r4.useEffect;
            r4 = new Array(1);
            r4[0] = r3;
            r3 = function() { // Environment: r1
                r1 = _closure2_slot1;
                r0 = _closure2_slot0;
                r1['current'] = r0;
                r0 = undefined;
                return r0;
            };
            r3 = r5.bind(r0)(r3, r4);
            r2 = _closure1_slot0;
            r3 = r2.useEffect;
            r2 = function() { // Environment: r1
                r3 = function(a0) { // Original name: listener, environment: r0
                    r2 = _closure2_slot1;
                    r1 = r2.current;
                    r0 = a0;
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
                };
                var _closure3_slot0 = r3;
                r2 = _closure1_slot1;
                r4 = r2.default;
                r2 = r4.getInitialOrientation;
                r4 = r2.bind(r4)();
                r2 = undefined;
                r2 = r3.bind(r2)(r4);
                r1 = _closure1_slot1;
                r2 = r1.default;
                r1 = r2.addDeviceOrientationListener;
                r1 = r1.bind(r2)(r3);
                r0 = function() { // Environment: r0
                    r0 = _closure1_slot1;
                    r2 = r0.default;
                    r1 = r2.removeDeviceOrientationListener;
                    r0 = _closure3_slot0;
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
                };
                return r0;
            };
            r1 = new Array(0);
            r1 = r3.bind(r0)(r2, r1);
            return r0;
        };
        r6['useDeviceOrientationChange'] = r1;
        r1 = 1;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        var _closure1_slot0 = r1;
        r1 = 2;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        var _closure1_slot1 = r1;
        return r0;
    };
    r6 = 529;
    r5 = [1, 119, 526];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r6 = a5;
        r5 = a6;
        r0 = 0;
        r1 = r5[r0];
        r0 = undefined;
        r3 = r4.bind(r0)(r1);
        r1 = global;
        r9 = r1.Object;
        r8 = r9.defineProperty;
        r7 = {};
        r1 = true;
        r7['value'] = r1;
        r1 = '__esModule';
        r1 = r8.bind(r9)(r6, r1, r7);
        r1 = function(a0) { // Original name: useLockListener, environment: r2
            r3 = a0;
            var _closure2_slot0 = r3;
            r0 = _closure1_slot0;
            r4 = r0.useRef;
            r0 = undefined;
            r4 = r4.bind(r0)();
            var _closure2_slot1 = r4;
            r4 = _closure1_slot0;
            r5 = r4.useEffect;
            r4 = new Array(1);
            r4[0] = r3;
            r3 = function() { // Environment: r1
                r1 = _closure2_slot1;
                r0 = _closure2_slot0;
                r1['current'] = r0;
                r0 = undefined;
                return r0;
            };
            r3 = r5.bind(r0)(r3, r4);
            r2 = _closure1_slot0;
            r3 = r2.useEffect;
            r2 = function() { // Environment: r1
                r3 = function(a0) { // Original name: listener, environment: r0
                    r2 = _closure2_slot1;
                    r1 = r2.current;
                    r0 = a0;
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
                };
                var _closure3_slot0 = r3;
                r1 = _closure1_slot1;
                r2 = r1.default;
                r1 = r2.addLockListener;
                r1 = r1.bind(r2)(r3);
                r0 = function() { // Environment: r0
                    r0 = _closure1_slot1;
                    r2 = r0.default;
                    r1 = r2.removeLockListener;
                    r0 = _closure3_slot0;
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
                };
                return r0;
            };
            r1 = new Array(0);
            r1 = r3.bind(r0)(r2, r1);
            return r0;
        };
        r6['useLockListener'] = r1;
        r1 = 1;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        var _closure1_slot0 = r1;
        r1 = 2;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        var _closure1_slot1 = r1;
        return r0;
    };
    r6 = 530;
    r5 = [1, 119, 526];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r3 = a5;
        r6 = a6;
        r0 = function() { // Original name: update, environment: r2
            r1 = global;
            r4 = r1.clearImmediate;
            r3 = _closure1_slot10;
            r0 = undefined;
            r3 = r4.bind(r0)(r3);
            r3 = r1.setImmediate;
            r1 = function() { // Environment: r1
                _fun5863: for(var _fun5863_ip = 0; ; ) switch(_fun5863_ip) {
case 0:
                    r0 = _closure1_slot9;
                    r0 = r0.length;
                    r2 = parseFloat(r0);
                    r4 = r2 - 1;
                    r0 = undefined;
                    r3 = undefined;
                    if(!r2) { _fun5863_ip = 60; continue _fun5863 }
case 25:
                    r2 = _closure1_slot9;
                    r2 = r2[r4];
                    r5 = r2.orientation;
                    r2 = r4;
                    r3 = r5;
                    if(r5) { _fun5863_ip = 60; continue _fun5863 }
case 48:
                    r2 = parseFloat(r2);
                    r4 = r2 - 1;
                    r3 = r5;
                    if(r2) { _fun5863_ip = 25; continue _fun5863 }
case 60:
                    r2 = _closure1_slot2;
                    if(!(r2 !== r3)) { _fun5863_ip = 257; continue _fun5863 }
case 71:
                    r2 = _closure1_slot3;
                    if(!(r2 !== r3)) { _fun5863_ip = 236; continue _fun5863 }
case 82:
                    r2 = _closure1_slot4;
                    if(!(r2 !== r3)) { _fun5863_ip = 215; continue _fun5863 }
case 93:
                    r2 = _closure1_slot5;
                    if(!(r2 !== r3)) { _fun5863_ip = 194; continue _fun5863 }
case 101:
                    r2 = _closure1_slot6;
                    if(!(r2 !== r3)) { _fun5863_ip = 173; continue _fun5863 }
case 109:
                    r2 = _closure1_slot7;
                    if(!(r2 !== r3)) { _fun5863_ip = 152; continue _fun5863 }
case 117:
                    r2 = _closure1_slot8;
                    if(!(r2 === r3)) { _fun5863_ip = 276; continue _fun5863 }
case 128:
                    r2 = _closure1_slot1;
                    r3 = r2.default;
                    r2 = r3.lockToAllOrientationsButUpsideDown;
                    r2 = r2.bind(r3)();
                    _fun5863_ip = 276; continue _fun5863;
case 152:
                    r2 = _closure1_slot1;
                    r3 = r2.default;
                    r2 = r3.lockToPortraitUpsideDown;
                    r2 = r2.bind(r3)();
                    _fun5863_ip = 276; continue _fun5863;
case 173:
                    r2 = _closure1_slot1;
                    r3 = r2.default;
                    r2 = r3.lockToLandscapeRight;
                    r2 = r2.bind(r3)();
                    _fun5863_ip = 276; continue _fun5863;
case 194:
                    r2 = _closure1_slot1;
                    r3 = r2.default;
                    r2 = r3.lockToLandscapeLeft;
                    r2 = r2.bind(r3)();
                    _fun5863_ip = 276; continue _fun5863;
case 215:
                    r2 = _closure1_slot1;
                    r3 = r2.default;
                    r2 = r3.lockToLandscape;
                    r2 = r2.bind(r3)();
                    _fun5863_ip = 276; continue _fun5863;
case 236:
                    r2 = _closure1_slot1;
                    r3 = r2.default;
                    r2 = r3.lockToPortrait;
                    r2 = r2.bind(r3)();
                    _fun5863_ip = 276; continue _fun5863;
case 257:
                    r1 = _closure1_slot1;
                    r2 = r1.default;
                    r1 = r2.unlockAllOrientations;
                    r1 = r1.bind(r2)();
case 276:
                    return r0;
                }
            };
            r1 = r3.bind(r0)(r1);
            var _closure1_slot10 = r1;
            return r0;
        };
        var _closure1_slot11 = r0;
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
        r1 = r8.bind(r9)(r3, r1, r7);
        r3['ALL_ORIENTATIONS_BUT_UPSIDE_DOWN'] = r0;
        r3['LANDSCAPE'] = r0;
        r3['LANDSCAPE_LEFT'] = r0;
        r3['LANDSCAPE_RIGHT'] = r0;
        r1 = function(a0) { // Original name: OrientationLocker, environment: r2
            r1 = a0;
            r5 = r1.orientation;
            var _closure2_slot0 = r5;
            r2 = r1.onChange;
            var _closure2_slot1 = r2;
            r4 = r1.onDeviceChange;
            var _closure2_slot2 = r4;
            r3 = _closure1_slot0;
            r7 = r3.useRef;
            r3 = undefined;
            r6 = {};
            r6 = r7.bind(r3)(r6);
            var _closure2_slot3 = r6;
            r6 = _closure1_slot0;
            r8 = r6.useEffect;
            r7 = function() { // Environment: r0
                r1 = _closure2_slot3;
                r3 = r1.current;
                var _closure3_slot0 = r3;
                r2 = _closure1_slot9;
                r1 = r2.push;
                r1 = r1.bind(r2)(r3);
                r0 = function() { // Environment: r0
                    _fun5866: for(var _fun5866_ip = 0; ; ) switch(_fun5866_ip) {
case 0:
                        r3 = _closure1_slot9;
                        r2 = r3.indexOf;
                        r1 = _closure3_slot0;
                        r4 = r2.bind(r3)(r1);
                        r1 = -1;
                        if(!(r4 !== r1)) { _fun5866_ip = 53; continue _fun5866 }
case 34:
                        r3 = _closure1_slot9;
                        r2 = r3.splice;
                        r1 = 1;
                        r1 = r2.bind(r3)(r4, r1);
case 53:
                        r1 = _closure1_slot11;
                        r0 = undefined;
                        r1 = r1.bind(r0)();
                        return r0;
                    }
                };
                return r0;
            };
            r6 = new Array(0);
            r6 = r8.bind(r3)(r7, r6);
            r6 = _closure1_slot0;
            r7 = r6.useEffect;
            r6 = new Array(1);
            r6[0] = r5;
            r5 = function() { // Environment: r0
                r1 = _closure2_slot3;
                r1 = r1.current;
                r0 = _closure2_slot0;
                r1['orientation'] = r0;
                r1 = _closure1_slot11;
                r0 = undefined;
                r1 = r1.bind(r0)();
                return r0;
            };
            r5 = r7.bind(r3)(r5, r6);
            r5 = _closure1_slot0;
            r6 = r5.useEffect;
            r5 = new Array(1);
            r5[0] = r2;
            r2 = function() { // Environment: r0
                _fun5868: for(var _fun5868_ip = 0; ; ) switch(_fun5868_ip) {
case 0:
                    r1 = _closure2_slot1;
                    if(r1) { _fun5868_ip = 14; continue _fun5868 }
case 10:
                    r1 = undefined;
                    return r1;
case 14:
                    r1 = _closure1_slot1;
                    r2 = r1.default;
                    r1 = r2.addOrientationListener;
                    r0 = _closure2_slot1;
                    r0 = r1.bind(r2)(r0);
                    r0 = function() { // Environment: r0
                        r0 = _closure1_slot1;
                        r2 = r0.default;
                        r1 = r2.removeOrientationListener;
                        r0 = _closure2_slot1;
                        r0 = r1.bind(r2)(r0);
                        return r0;
                    };
                    return r0;
                }
            };
            r2 = r6.bind(r3)(r2, r5);
            r1 = _closure1_slot0;
            r2 = r1.useEffect;
            r1 = new Array(1);
            r1[0] = r4;
            r0 = function() { // Environment: r0
                _fun5870: for(var _fun5870_ip = 0; ; ) switch(_fun5870_ip) {
case 0:
                    r1 = _closure2_slot2;
                    if(r1) { _fun5870_ip = 14; continue _fun5870 }
case 10:
                    r1 = undefined;
                    return r1;
case 14:
                    r1 = _closure1_slot1;
                    r2 = r1.default;
                    r1 = r2.addDeviceOrientationListener;
                    r0 = _closure2_slot2;
                    r0 = r1.bind(r2)(r0);
                    r0 = function() { // Environment: r0
                        r0 = _closure1_slot1;
                        r2 = r0.default;
                        r1 = r2.removeDeviceOrientationListener;
                        r0 = _closure2_slot2;
                        r0 = r1.bind(r2)(r0);
                        return r0;
                    };
                    return r0;
                }
            };
            r0 = r2.bind(r3)(r0, r1);
            r0 = null;
            return r0;
        };
        r3['OrientationLocker'] = r1;
        r3['PORTRAIT'] = r0;
        r3['PORTRAIT_UPSIDE_DOWN'] = r0;
        r3['UNLOCK'] = r0;
        r1 = 1;
        r1 = r6[r1];
        r1 = r5.bind(r0)(r1);
        var _closure1_slot0 = r1;
        r1 = 2;
        r1 = r6[r1];
        r1 = r5.bind(r0)(r1);
        r1 = r4.bind(r0)(r1);
        var _closure1_slot1 = r1;
        r1 = 'UNLOCK';
        r3['UNLOCK'] = r1;
        var _closure1_slot2 = r1;
        r1 = 'PORTRAIT';
        r3['PORTRAIT'] = r1;
        var _closure1_slot3 = r1;
        r1 = 'LANDSCAPE';
        r3['LANDSCAPE'] = r1;
        var _closure1_slot4 = r1;
        r1 = 'LANDSCAPE_LEFT';
        r3['LANDSCAPE_LEFT'] = r1;
        var _closure1_slot5 = r1;
        r1 = 'LANDSCAPE_RIGHT';
        r3['LANDSCAPE_RIGHT'] = r1;
        var _closure1_slot6 = r1;
        r1 = 'PORTRAIT_UPSIDE_DOWN';
        r3['PORTRAIT_UPSIDE_DOWN'] = r1;
        var _closure1_slot7 = r1;
        r1 = 'ALL_ORIENTATIONS_BUT_UPSIDE_DOWN';
        r3['ALL_ORIENTATIONS_BUT_UPSIDE_DOWN'] = r1;
        var _closure1_slot8 = r1;
        r1 = new Array(0);
        var _closure1_slot9 = r1;
        return r0;
    };
    r6 = 531;
    r5 = [1, 119, 526];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r3 = a1;
        r2 = a5;
        r4 = a6;
        var _closure1_slot0 = r3;
        var _closure1_slot1 = r4;
        r1 = global;
        r9 = r1.Object;
        r8 = r9.defineProperty;
        r6 = {};
        r7 = true;
        r6['value'] = r7;
        r5 = '__esModule';
        r5 = r8.bind(r9)(r2, r5, r6);
        r6 = r1.Object;
        r5 = r6.defineProperty;
        r1 = {};
        r1['enumerable'] = r7;
        r0 = function() { // Original name: get, environment: r0
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 0;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.ReactNativeModal;
            return r0;
        };
        r1['get'] = r0;
        r0 = 'ReactNativeModal';
        r0 = r5.bind(r6)(r2, r0, r1);
        r0 = undefined;
        r2['default'] = r0;
        r1 = 0;
        r1 = r4[r1];
        r1 = r3.bind(r0)(r1);
        r1 = r1.ReactNativeModal;
        r2['default'] = r1;
        return r0;
    };
    r6 = 532;
    r5 = [533];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r2 = a5;
        r7 = a6;
        var _closure1_slot0 = r5;
        var _closure1_slot1 = r7;
        r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
            _fun5875: for(var _fun5875_ip = 0; ; ) switch(_fun5875_ip) {
case 0:
                r1 = global;
                r2 = r1.WeakMap;
                r3 = 'function';
                r2 = typeof r2;
                if(!(r3 === r2)) { _fun5875_ip = 104; continue _fun5875 }
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
                    _fun5876: for(var _fun5876_ip = 0; ; ) switch(_fun5876_ip) {
case 0:
                        r0 = a0;
                        if(r0) { _fun5876_ip = 15; continue _fun5876 }
case 9:
                        r0 = _closure2_slot0;
                        _fun5876_ip = 19; continue _fun5876;
case 15:
                        r0 = _closure2_slot1;
case 19:
                        return r0;
                    }
                };
                _closure1_slot15 = r2;
                r1 = undefined;
                r0 = a0;
                r0 = r2.bind(r1)(r0);
                return r0;
case 104:
                r0 = null;
                return r0;
            }
        };
        var _closure1_slot15 = r0;
        r9 = function(a0, a1) { // Original name: _interopRequireWildcard, environment: r1
            _fun5877: for(var _fun5877_ip = 0; ; ) switch(_fun5877_ip) {
case 0:
                r0 = a0;
                if(!r0) { _fun5877_ip = 17; continue _fun5877 }
case 6:
                r1 = r0.__esModule;
                if(r1) { _fun5877_ip = 284; continue _fun5877 }
case 17:
                r12 = null;
                if(!(r12 !== r0)) { _fun5877_ip = 276; continue _fun5877 }
case 26:
                r2 = typeof r0;
                r1 = 'object';
                if(!(r1 !== r2)) { _fun5877_ip = 48; continue _fun5877 }
case 37:
                r1 = 'function';
                if(!(r1 === r2)) { _fun5877_ip = 276; continue _fun5877 }
case 48:
                r1 = _closure1_slot15;
                r3 = undefined;
                r2 = r1.bind(r3)(r3);
                if(!r2) { _fun5877_ip = 81; continue _fun5877 }
case 65:
                r1 = r2.has;
                r1 = r1.bind(r2)(r0);
                if(r1) { _fun5877_ip = 264; continue _fun5877 }
case 81:
                r1 = Object.create(r12);
                r11 = global;
                r4 = r11.Object;
                r10 = r4.defineProperty;
                if(!r10) { _fun5877_ip = 111; continue _fun5877 }
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
                    if(r4 === r16) { _fun5877_ip = 128; continue _fun5877 }
case 144:
                    r13 = {};
                    r14 = r13.hasOwnProperty;
                    r13 = r14.call;
                    r13 = r13.bind(r14)(r0, r16);
                    if(!r13) { _fun5877_ip = 128; continue _fun5877 }
case 165:
                    r13 = null;
                    if(!r10) { _fun5877_ip = 187; continue _fun5877 }
case 170:
                    r15 = r11.Object;
                    r14 = r15.getOwnPropertyDescriptor;
                    r13 = r14.bind(r15)(r0, r16);
case 187:
                    if(!r13) { _fun5877_ip = 206; continue _fun5877 }
case 190:
                    r14 = r13.get;
                    if(r14) { _fun5877_ip = 219; continue _fun5877 }
case 198:
                    r14 = r13.set;
                    if(r14) { _fun5877_ip = 219; continue _fun5877 }
case 206:
                    r14 = r0[r16];
                    r1[r16] = r14;
                    r3 = r13;
                    _fun5877_ip = 128; continue _fun5877;
case 219:
                    r15 = r11.Object;
                    r14 = r15.defineProperty;
                    r14 = r14.bind(r15)(r1, r16, r13);
                    r3 = r13;
                    _fun5877_ip = 128; continue _fun5877;
                }
case 242:
                r1['default'] = r0;
                if(!r2) { _fun5877_ip = 262; continue _fun5877 }
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
        r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
            _fun5878: for(var _fun5878_ip = 0; ; ) switch(_fun5878_ip) {
case 0:
                r3 = a0;
                r5 = a2;
                r0 = _closure1_slot6;
                r1 = r0.default;
                r2 = undefined;
                r0 = a1;
                r8 = r1.bind(r2)(r0);
                r0 = _closure1_slot5;
                r1 = r0.default;
                r0 = _closure1_slot17;
                r0 = r0.bind(r2)();
                if(r0) { _fun5878_ip = 61; continue _fun5878 }
case 48:
                r0 = r8.apply;
                r0 = r0.bind(r8)(r3, r5);
                _fun5878_ip = 107; continue _fun5878;
case 61:
                r6 = global;
                r7 = r6.Reflect;
                r6 = r7.construct;
                if(r5) { _fun5878_ip = 81; continue _fun5878 }
case 77:
                r5 = new Array(0);
case 81:
                r4 = _closure1_slot6;
                r4 = r4.default;
                r4 = r4.bind(r2)(r3);
                r4 = r4.constructor;
                r0 = r6.bind(r7)(r8, r5, r4);
case 107:
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            }
        };
        var _closure1_slot16 = r0;
        r0 = function() { // Original name: _isNativeReflectConstruct, environment: r1
            _fun5879: for(var _fun5879_ip = 0; ; ) switch(_fun5879_ip) {
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
                _fun5879_ip = 74; continue _fun5879;
case 72: // catch_target0
                CatchBlockStart(arg_register=1);
case 74:
                r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                    r0 = _closure2_slot0;
                    r0 = !r0;
                    r0 = !r0;
                    return r0;
                };
                _closure1_slot17 = r1;
                r0 = undefined;
                r0 = r1.bind(r0)();
                return r0;
            }
        };
        var _closure1_slot17 = r0;
        r6 = 0;
        r3 = r7[r6];
        r0 = undefined;
        r8 = r5.bind(r0)(r3);
        r3 = global;
        r11 = r3.Object;
        r10 = r11.defineProperty;
        r4 = {};
        r3 = true;
        r4['value'] = r3;
        r3 = '__esModule';
        r3 = r10.bind(r11)(r2, r3, r4);
        r2['ReactNativeModal'] = r0;
        r2['default'] = r0;
        r3 = 1;
        r3 = r7[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r8.bind(r0)(r3);
        var _closure1_slot2 = r3;
        r3 = 2;
        r3 = r7[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r8.bind(r0)(r3);
        var _closure1_slot3 = r3;
        r3 = 3;
        r3 = r7[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r8.bind(r0)(r3);
        var _closure1_slot4 = r3;
        r3 = 4;
        r3 = r7[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r8.bind(r0)(r3);
        var _closure1_slot5 = r3;
        r3 = 5;
        r3 = r7[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r8.bind(r0)(r3);
        var _closure1_slot6 = r3;
        r3 = 6;
        r3 = r7[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r8.bind(r0)(r3);
        var _closure1_slot7 = r3;
        r3 = 7;
        r3 = r7[r3];
        r3 = r5.bind(r0)(r3);
        r4 = r9.bind(r0)(r3);
        var _closure1_slot8 = r4;
        r3 = 8;
        r3 = r7[r3];
        r3 = r5.bind(r0)(r3);
        var _closure1_slot9 = r3;
        r3 = 9;
        r3 = r7[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r9.bind(r0)(r3);
        var _closure1_slot10 = r3;
        r3 = 10;
        r3 = r7[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r8.bind(r0)(r3);
        var _closure1_slot11 = r3;
        r3 = ['animationIn', 'animationInTiming', 'animationOut', 'animationOutTiming', 'avoidKeyboard', 'coverScreen', 'hasBackdrop', 'backdropColor', 'backdropOpacity', 'backdropTransitionInTiming', 'backdropTransitionOutTiming', 'customBackdrop', 'children', 'isVisible', 'onModalShow', 'onBackButtonPress', 'useNativeDriver', 'propagateSwipe', 'style'];
        var _closure1_slot12 = r3;
        r3 = ['testID'];
        var _closure1_slot13 = r3;
        r3 = 11;
        r3 = r7[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r3.initializeAnimations;
        r3 = r3.bind(r0)();
        r3 = {'animationIn': 'slideInUp', 'animationInTiming': 300, 'animationOut': 'slideOutDown', 'animationOutTiming': 300, 'avoidKeyboard': false, 'coverScreen': true, 'hasBackdrop': true, 'backdropColor': 'black', 'backdropOpacity': 0.7, 'backdropTransitionInTiming': 300, 'backdropTransitionOutTiming': 300, 'customBackdrop': null, 'useNativeDriver': false, 'deviceHeight': null, 'deviceWidth': null, 'hideModalContentWhileAnimating': false, 'propagateSwipe': false, 'isVisible': false, 'panResponderThreshold': 4, 'swipeThreshold': 100};
        r5 = false;
        r7 = null;
        r8 = function() { // Original name: onModalShow, environment: r1
            r0 = null;
            return r0;
        };
        r3['onModalShow'] = r8;
        r8 = function() { // Original name: onModalWillShow, environment: r1
            r0 = null;
            return r0;
        };
        r3['onModalWillShow'] = r8;
        r8 = function() { // Original name: onModalHide, environment: r1
            r0 = null;
            return r0;
        };
        r3['onModalHide'] = r8;
        r8 = function() { // Original name: onModalWillHide, environment: r1
            r0 = null;
            return r0;
        };
        r3['onModalWillHide'] = r8;
        r8 = function() { // Original name: onBackdropPress, environment: r1
            r0 = null;
            return r0;
        };
        r3['onBackdropPress'] = r8;
        r8 = function() { // Original name: onBackButtonPress, environment: r1
            r0 = null;
            return r0;
        };
        r3['onBackButtonPress'] = r8;
        r3['scrollTo'] = r7;
        r3['scrollOffset'] = r6;
        r3['scrollOffsetMax'] = r6;
        r3['scrollHorizontal'] = r5;
        r3['statusBarTranslucent'] = r5;
        r5 = ['portrait', 'landscape'];
        r3['supportedOrientations'] = r5;
        r5 = function(a0) { // Original name: extractAnimationFromProps, environment: r1
            r1 = a0;
            r0 = {};
            r2 = r1.animationIn;
            r0['animationIn'] = r2;
            r1 = r1.animationOut;
            r0['animationOut'] = r1;
            return r0;
        };
        var _closure1_slot14 = r5;
        r4 = r4.Component;
        r1 = function(a0) { // Environment: r1
            r4 = function(a0) { // Original name: ReactNativeModal, environment: r0
                _fun5890: for(var _fun5890_ip = 0; ; ) switch(_fun5890_ip) {
case 0:
                    r1 = a0;
                    r7 = this;
                    r0 = _closure1_slot3;
                    r0 = r0.default;
                    r6 = _closure2_slot0;
                    r5 = undefined;
                    r0 = r0.bind(r5)(r7, r6);
                    r4 = _closure1_slot16;
                    r0 = new Array(1);
                    r0[0] = r1;
                    r0 = r4.bind(r5)(r7, r6, r0);
                    var _closure3_slot0 = r0;
                    r4 = null;
                    r0['backHandler'] = r4;
                    r7 = {'showContent': true, 'isVisible': false};
                    r6 = false;
                    r8 = _closure1_slot9;
                    r11 = r8.Dimensions;
                    r9 = r11.get;
                    r10 = 'window';
                    r9 = r9.bind(r11)(r10);
                    r9 = r9.width;
                    r7['deviceWidth'] = r9;
                    r9 = r8.Dimensions;
                    r8 = r9.get;
                    r8 = r8.bind(r9)(r10);
                    r8 = r8.height;
                    r7['deviceHeight'] = r8;
                    r8 = r0.props;
                    r8 = r8.swipeDirection;
                    r8 = !r8;
                    r8 = !r8;
                    r7['isSwipeable'] = r8;
                    r7['pan'] = r4;
                    r0['state'] = r7;
                    r0['isTransitioning'] = r6;
                    r0['inSwipeClosingState'] = r6;
                    r0['currentSwipingDirection'] = r4;
                    r0['panResponder'] = r4;
                    r0['didUpdateDimensionsEmitter'] = r4;
                    r0['interactionHandle'] = r4;
                    r4 = function() { // Environment: r3
                        _fun5891: for(var _fun5891_ip = 0; ; ) switch(_fun5891_ip) {
case 0:
                            r0 = _closure3_slot0;
                            r0 = r0.props;
                            r0 = r0.deviceHeight;
                            if(r0) { _fun5891_ip = 36; continue _fun5891 }
case 21:
                            r1 = _closure3_slot0;
                            r1 = r1.state;
                            r0 = r1.deviceHeight;
case 36:
                            return r0;
                        }
                    };
                    r0['getDeviceHeight'] = r4;
                    r4 = function() { // Environment: r3
                        _fun5892: for(var _fun5892_ip = 0; ; ) switch(_fun5892_ip) {
case 0:
                            r0 = _closure3_slot0;
                            r0 = r0.props;
                            r0 = r0.deviceWidth;
                            if(r0) { _fun5892_ip = 36; continue _fun5892 }
case 21:
                            r1 = _closure3_slot0;
                            r1 = r1.state;
                            r0 = r1.deviceWidth;
case 36:
                            return r0;
                        }
                    };
                    r0['getDeviceWidth'] = r4;
                    r4 = function() { // Environment: r3
                        _fun5893: for(var _fun5893_ip = 0; ; ) switch(_fun5893_ip) {
case 0:
                            r1 = _closure3_slot0;
                            r1 = r1.props;
                            r1 = r1.onBackButtonPress;
                            if(!r1) { _fun5893_ip = 39; continue _fun5893 }
case 21:
                            r1 = _closure3_slot0;
