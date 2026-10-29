                            r9 = _closure3_slot1;
                            r16 = r8;
                            r0 = r16[r7](r15, r14, r13, r12, r11, r10, r9, r8);
                            r0 = undefined;
                            return r0;
                        };
                        r0 = r1.bind(r2)(r0);
                        r0 = undefined;
                        return r0;
case 64:
                        r0 = undefined;
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[41] = r0;
                r5 = {};
                r0 = '_findItemIndexWithKey';
                r5['key'] = r0;
                r0 = function(a0, a1, a2) { // Original name: _findItemIndexWithKey, environment: r6
                    _fun4355: for(var _fun4355_ip = 0; ; ) switch(_fun4355_ip) {
case 0:
                        r7 = a0;
                        r6 = a1;
                        r0 = a2;
                        r2 = r7.getItemCount;
                        r1 = r7.data;
                        r5 = r2.bind(r7)(r1);
                        r2 = null;
                        if(!(r0 != r2)) { _fun4355_ip = 63; continue _fun4355 }
case 30:
                        r1 = 0;
                        if(!(r0 >= r1)) { _fun4355_ip = 63; continue _fun4355 }
case 36:
                        if(!(r0 < r5)) { _fun4355_ip = 63; continue _fun4355 }
case 40:
                        r3 = _closure2_slot0;
                        r1 = r3._getItemKey;
                        r1 = r1.bind(r3)(r7, r0);
                        if(!(r1 !== r6)) { _fun4355_ip = 109; continue _fun4355 }
case 63:
                        r4 = 0;
                        r1 = r4 < r5;
                        if(!r1) { _fun4355_ip = 105; continue _fun4355 }
case 75:
                        r8 = _closure2_slot0;
                        r1 = r8._getItemKey;
                        r8 = r1.bind(r8)(r7, r4);
                        r1 = r4;
                        if(!(r8 !== r6)) { _fun4355_ip = 107; continue _fun4355 }
case 98:
                        r4 = r1 + 1;
                        if(r4 < r5) { _fun4355_ip = 75; continue _fun4355 }
case 105:
                        return r2;
case 107:
                        return r1;
case 109:
                        return r0;
                    }
                };
                r5['value'] = r0;
                r0 = new Array(8);
                r0[0] = r5;
                r5 = {};
                r7 = '_getItemKey';
                r5['key'] = r7;
                r7 = function(a0, a1) { // Original name: _getItemKey, environment: r6
                    r4 = a0;
                    r3 = a1;
                    r1 = r4.getItem;
                    r0 = r4.data;
                    r2 = r1.bind(r4)(r0, r3);
                    r1 = _closure2_slot0;
                    r0 = r1._keyExtractor;
                    r0 = r0.bind(r1)(r2, r3, r4);
                    return r0;
                };
                r5['value'] = r7;
                r0[1] = r5;
                r5 = {};
                r7 = '_createRenderMask';
                r5['key'] = r7;
                r7 = function(a0, a1, a2) { // Original name: _createRenderMask, environment: r6
                    _fun4357: for(var _fun4357_ip = 0; ; ) switch(_fun4357_ip) {
case 0:
                        r6 = a0;
                        r1 = a1;
                        r10 = a2;
                        r8 = undefined;
                        r0 = undefined;
                        r3 = r6.getItemCount;
                        r2 = r6.data;
                        r5 = r3.bind(r6)(r2);
                        r2 = _closure1_slot17;
                        r11 = r2.default;
                        r2 = r1.first;
                        r4 = 0;
                        r9 = r2 >= r4;
                        if(!r9) { _fun4357_ip = 75; continue _fun4357 }
case 54:
                        r7 = r1.last;
                        r12 = r1.first;
                        r2 = 1;
                        r2 = r12 - r2;
                        r9 = r7 >= r2;
case 75:
                        if(!r9) { _fun4357_ip = 87; continue _fun4357 }
case 78:
                        r2 = r1.last;
                        r9 = r2 < r5;
case 87:
                        r20 = r1.first;
                        r18 = r1.last;
                        r2 = global;
                        r7 = r2.HermesInternal;
                        r14 = r7.concat;
                        r21 = 'Invalid cells around viewport "[';
                        r19 = ', ';
                        r17 = ']" was passed to VirtualizedList._createRenderMask';
                        r7 = r21[r14](r20, r19, r18, r17, r16);
                        r7 = r11.bind(r8)(r9, r7);
                        r9 = _closure1_slot0;
                        r11 = _closure1_slot1;
                        r7 = 25;
                        r7 = r11[r7];
                        r7 = r9.bind(r8)(r7);
                        r7 = r7.CellRenderMask;
                        r9 = r7.prototype;
                        r9 = Object.create(r9, {constructor: {value: r7}});
                        r21 = r9;
                        r20 = r5;
                        r7 = new r21[r7](r20, r19);
                        r0 = r7 instanceof Object ? r7 : r9;
                        if(!(r5 > r4)) { _fun4357_ip = 385; continue _fun4357 }
case 188:
                        r9 = new Array(1);
                        r9[0] = r1;
                        r7 = r9.concat;
                        r3 = _closure1_slot2;
                        r3 = r3.default;
                        r5 = null;
                        if(!(r10 == r5)) { _fun4357_ip = 220; continue _fun4357 }
case 216:
                        r10 = new Array(0);
case 220:
                        r3 = r3.bind(r8)(r10);
                        r9 = r7.bind(r9)(r3);
                        r3 = r9;
                        r7 = r3[Symbol.iterator];
                        r3 = r7().next;
case 236:
                        r11 = r3().value;
                        r9 = r7;
                        if(!(r9 !== r8)) { _fun4357_ip = 270; continue _fun4357 }
case 247: // try_start_0
                        r10 = r0;
                        r9 = r10.addCells;
                        r9 = r9.bind(r10)(r11);
case 261: // try_end0
                        _fun4357_ip = 236; continue _fun4357;
case 263: // catch_target0
                        CatchBlockStart(arg_register=3);
                        r7.return();
                        throw r3;
case 270:
                        r3 = r6.initialScrollIndex;
                        if(!(r3 != r5)) { _fun4357_ip = 290; continue _fun4357 }
case 280:
                        r3 = r6.initialScrollIndex;
                        if(!(r3 <= r4)) { _fun4357_ip = 322; continue _fun4357 }
case 290:
                        r4 = _closure2_slot0;
                        r3 = r4._initialRenderRegion;
                        r5 = r3.bind(r4)(r6);
                        r4 = r0;
                        r3 = r4.addCells;
                        r3 = r3.bind(r4)(r5);
case 322:
                        r4 = r2.Set;
                        r20 = r6.stickyHeaderIndices;
                        r3 = r4.prototype;
                        r3 = Object.create(r3, {constructor: {value: r4}});
                        r21 = r3;
                        r2 = new r21[r4](r20, r19);
                        r19 = r2 instanceof Object ? r2 : r3;
                        r4 = _closure2_slot0;
                        r3 = r4._ensureClosestStickyHeader;
                        r18 = r0;
                        r17 = r1.first;
                        r21 = r4;
                        r20 = r6;
                        r1 = r21[r3](r20, r19, r18, r17, r16);
case 385:
                        return r0;
                    }
                };
                r5['value'] = r7;
                r0[2] = r5;
                r5 = {};
                r7 = '_initialRenderRegion';
                r5['key'] = r7;
                r7 = function(a0) { // Original name: _initialRenderRegion, environment: r6
                    _fun4358: for(var _fun4358_ip = 0; ; ) switch(_fun4358_ip) {
case 0:
                        r0 = a0;
                        r2 = r0.getItemCount;
                        r1 = r0.data;
                        r5 = r2.bind(r0)(r1);
                        r3 = global;
                        r7 = r3.Math;
                        r6 = r7.max;
                        r10 = r3.Math;
                        r9 = r10.min;
                        r1 = 1;
                        r8 = r5 - r1;
                        r12 = r3.Math;
                        r11 = r12.floor;
                        r13 = r0.initialScrollIndex;
                        r2 = null;
                        r14 = r13 != r2;
                        r4 = 0;
                        r2 = 0;
                        if(!r14) { _fun4358_ip = 83; continue _fun4358 }
case 80:
                        r2 = r13;
case 83:
                        r2 = r11.bind(r12)(r2);
                        r2 = r9.bind(r10)(r8, r2);
                        r2 = r6.bind(r7)(r4, r2);
                        r4 = r3.Math;
                        r3 = r4.min;
                        r8 = _closure1_slot0;
                        r7 = _closure1_slot1;
                        r6 = 22;
                        r6 = r7[r6];
                        r7 = undefined;
                        r6 = r8.bind(r7)(r6);
                        r6 = r6.initialNumToRenderOrDefault;
                        r0 = r0.initialNumToRender;
                        r0 = r6.bind(r7)(r0);
                        r0 = r2 + r0;
                        r0 = r3.bind(r4)(r5, r0);
                        r1 = r0 - r1;
                        r0 = {};
                        r0['first'] = r2;
                        r0['last'] = r1;
                        return r0;
                    }
                };
                r5['value'] = r7;
                r0[3] = r5;
                r5 = {};
                r7 = '_ensureClosestStickyHeader';
                r5['key'] = r7;
                r7 = function(a0, a1, a2, a3) { // Original name: _ensureClosestStickyHeader, environment: r6
                    _fun4359: for(var _fun4359_ip = 0; ; ) switch(_fun4359_ip) {
case 0:
                        r5 = a1;
                        r2 = a2;
                        r0 = a0;
                        r0 = r0.ListHeaderComponent;
                        r4 = 0;
                        r1 = 0;
                        if(!r0) { _fun4359_ip = 25; continue _fun4359 }
case 22:
                        r1 = 1;
case 25:
                        r3 = a3;
                        r0 = 1;
                        r0 = r3 - r0;
                        if(!(r0 >= r4)) { _fun4359_ip = 89; continue _fun4359 }
case 39:
                        r6 = r5.has;
                        r3 = r0 + r1;
                        r6 = r6.bind(r5)(r3);
                        r3 = r0;
                        if(r6) { _fun4359_ip = 68; continue _fun4359 }
case 59:
                        r0 = r3 - 1;
                        if(r0 >= r4) { _fun4359_ip = 39; continue _fun4359 }
case 66:
                        _fun4359_ip = 89; continue _fun4359;
case 68:
                        r1 = r2.addCells;
                        r0 = {};
                        r0['first'] = r3;
                        r0['last'] = r3;
                        r0 = r1.bind(r2)(r0);
case 89:
                        r0 = undefined;
                        return r0;
                    }
                };
                r5['value'] = r7;
                r0[4] = r5;
                r5 = {};
                r7 = 'getDerivedStateFromProps';
                r5['key'] = r7;
                r7 = function(a0, a1) { // Original name: getDerivedStateFromProps, environment: r6
                    _fun4360: for(var _fun4360_ip = 0; ; ) switch(_fun4360_ip) {
case 0:
                        r7 = a0;
                        r0 = a1;
                        r2 = r7.getItemCount;
                        r1 = r7.data;
                        r4 = r2.bind(r7)(r1);
                        r2 = r0.renderMask;
                        r1 = r2.numCells;
                        r1 = r1.bind(r2)();
                        if(!(r4 !== r1)) { _fun4360_ip = 362; continue _fun4360 }
case 44:
                        r8 = r0.firstVisibleItemKey;
                        r3 = r7.maintainVisibleContentPosition;
                        r1 = null;
                        r5 = r3 == r1;
                        r2 = undefined;
                        if(r5) { _fun4360_ip = 73; continue _fun4360 }
case 67:
                        r2 = r3.minIndexForVisible;
case 73:
                        r3 = r2 != r1;
                        r5 = 0;
                        if(!r3) { _fun4360_ip = 85; continue _fun4360 }
case 82:
                        r5 = r2;
case 85:
                        r3 = r7.getItemCount;
                        r2 = r7.data;
                        r2 = r3.bind(r7)(r2);
                        r2 = r2 > r5;
                        r3 = null;
                        if(!r2) { _fun4360_ip = 128; continue _fun4360 }
case 109:
                        r6 = _closure2_slot0;
                        r2 = r6._getItemKey;
                        r3 = r2.bind(r6)(r7, r5);
case 128:
                        r2 = r7.maintainVisibleContentPosition;
                        r2 = r2 != r1;
                        r10 = null;
                        if(!r2) { _fun4360_ip = 227; continue _fun4360 }
case 143:
                        r2 = r8 != r1;
                        r10 = null;
                        if(!r2) { _fun4360_ip = 227; continue _fun4360 }
case 152:
                        r2 = r3 != r1;
                        r10 = null;
                        if(!r2) { _fun4360_ip = 227; continue _fun4360 }
case 161:
                        r10 = null;
                        if(!(r3 !== r8)) { _fun4360_ip = 227; continue _fun4360 }
case 167:
                        r6 = r0.renderMask;
                        r2 = r6.numCells;
                        r2 = r2.bind(r6)();
                        r2 = r4 - r2;
                        r6 = r2 + r5;
                        r4 = _closure2_slot0;
                        r2 = r4._findItemIndexWithKey;
                        r4 = r2.bind(r4)(r7, r8, r6);
                        r6 = r4 != r1;
                        r2 = null;
                        if(!r6) { _fun4360_ip = 224; continue _fun4360 }
case 220:
                        r2 = r4 - r5;
case 224:
                        r10 = r2;
case 227:
                        r6 = _closure2_slot0;
                        r5 = r6._constrainToItemCount;
                        r2 = r10 != r1;
                        r9 = r0.cellsAroundViewport;
                        if(r2) { _fun4360_ip = 258; continue _fun4360 }
case 253:
                        r1 = r9;
                        _fun4360_ip = 295; continue _fun4360;
case 258:
                        r8 = {};
                        r9 = r9.first;
                        r9 = r9 + r10;
                        r8['first'] = r9;
                        r9 = r0.cellsAroundViewport;
                        r9 = r9.last;
                        r9 = r9 + r10;
                        r8['last'] = r9;
                        r1 = r8;
case 295:
                        r6 = r5.bind(r6)(r1, r7);
                        r1 = {};
                        r1['cellsAroundViewport'] = r6;
                        r5 = _closure2_slot0;
                        r4 = r5._createRenderMask;
                        r4 = r4.bind(r5)(r7, r6);
                        r1['renderMask'] = r4;
                        r1['firstVisibleItemKey'] = r3;
                        r4 = r0.pendingScrollUpdateCount;
                        if(r2) { _fun4360_ip = 348; continue _fun4360 }
case 343:
                        r2 = r4;
                        _fun4360_ip = 355; continue _fun4360;
case 348:
                        r3 = 1;
                        r2 = r4 + r3;
case 355:
                        r1['pendingScrollUpdateCount'] = r2;
                        return r1;
case 362:
                        return r0;
                    }
                };
                r5['value'] = r7;
                r0[5] = r5;
                r5 = {};
                r7 = '_constrainToItemCount';
                r5['key'] = r7;
                r7 = function(a0, a1) { // Original name: _constrainToItemCount, environment: r6
                    r1 = a0;
                    r0 = a1;
                    r3 = r0.getItemCount;
                    r2 = r0.data;
                    r3 = r3.bind(r0)(r2);
                    r2 = 1;
                    r4 = r3 - r2;
                    r5 = _closure1_slot0;
                    r6 = _closure1_slot1;
                    r2 = 22;
                    r2 = r6[r2];
                    r8 = undefined;
                    r2 = r5.bind(r8)(r2);
                    r2 = r2.maxToRenderPerBatchOrDefault;
                    r0 = r0.maxToRenderPerBatch;
                    r0 = r2.bind(r8)(r0);
                    r2 = global;
                    r6 = r2.Math;
                    r5 = r6.max;
                    r0 = r4 - r0;
                    r7 = 0;
                    r6 = r5.bind(r6)(r7, r0);
                    r0 = {};
                    r3 = _closure1_slot10;
                    r5 = r3.default;
                    r3 = r1.first;
                    r3 = r5.bind(r8)(r7, r3, r6);
                    r0['first'] = r3;
                    r3 = r2.Math;
                    r2 = r3.min;
                    r1 = r1.last;
                    r1 = r2.bind(r3)(r4, r1);
                    r0['last'] = r1;
                    return r0;
                };
                r5['value'] = r7;
                r0[6] = r5;
                r5 = {};
                r7 = '_keyExtractor';
                r5['key'] = r7;
                r6 = function(a0, a1, a2) { // Original name: _keyExtractor, environment: r6
                    _fun4362: for(var _fun4362_ip = 0; ; ) switch(_fun4362_ip) {
case 0:
                        r3 = a0;
                        r2 = a1;
                        r1 = a2;
                        r4 = r1.keyExtractor;
                        r0 = null;
                        if(!(r4 == r0)) { _fun4362_ip = 118; continue _fun4362 }
case 21:
                        r4 = _closure1_slot0;
                        r6 = _closure1_slot1;
                        r0 = 23;
                        r0 = r6[r0];
                        r6 = undefined;
                        r0 = r4.bind(r6)(r0);
                        r0 = r0.keyExtractor;
                        r0 = r0.bind(r6)(r3, r2);
                        r4 = global;
                        r4 = r4.String;
                        r4 = r4.bind(r6)(r2);
                        if(!(r0 === r4)) { _fun4362_ip = 116; continue _fun4362 }
case 75:
                        r4 = true;
                        _closure1_slot23 = r4;
                        r4 = r3.type;
                        if(!r4) { _fun4362_ip = 116; continue _fun4362 }
case 89:
                        r4 = r3.type;
                        r4 = r4.displayName;
                        if(!r4) { _fun4362_ip = 116; continue _fun4362 }
case 102:
                        r4 = r3.type;
                        r4 = r4.displayName;
                        _closure1_slot24 = r4;
case 116:
                        return r0;
case 118:
                        r0 = r1.keyExtractor;
                        r0 = r0.bind(r1)(r3, r2);
                        return r0;
                    }
                };
                r5['value'] = r6;
                r0[7] = r5;
                r0 = r2.bind(r3)(r4, r1, r0);
                return r0;
            };
            r1 = r1.bind(r0)(r3);
            r3 = 24;
            r3 = r6[r3];
            r3 = r5.bind(r0)(r3);
            r3 = r3.VirtualizedListContext;
            r1['contextType'] = r3;
            r6 = r7.StyleSheet;
            r5 = r6.create;
            r3 = {};
            r7 = r7.Platform;
            r9 = r7.OS;
            r7 = 'android';
            if(!(r9 !== r7)) { _fun4253_ip = 937; continue _fun4253 }
case 908:
            r7 = {};
            r10 = {};
            r9 = -1;
            r10['scaleY'] = r9;
            r9 = new Array(1);
            r9[0] = r10;
            r7['transform'] = r9;
            _fun4253_ip = 966; continue _fun4253;
case 937:
            r9 = {};
            r11 = {};
            r10 = -1;
            r11['scale'] = r10;
            r10 = new Array(1);
            r10[0] = r11;
            r9['transform'] = r10;
            r7 = r9;
case 966:
            r3['verticallyInverted'] = r7;
            r7 = {};
            r10 = {};
            r9 = -1;
            r10['scaleX'] = r9;
            r9 = new Array(1);
            r9[0] = r10;
            r7['transform'] = r9;
            r3['horizontallyInverted'] = r7;
            r7 = {};
            r7['flex'] = r8;
            r3['debug'] = r7;
            r7 = {'position': 'absolute', 'top': 0, 'right': 0};
            r3['debugOverlayBase'] = r7;
            r7 = {'bottom': 0, 'width': 20, 'borderColor': 'blue', 'borderWidth': 1};
            r3['debugOverlay'] = r7;
            r7 = {'left': 0, 'backgroundColor': 'orange'};
            r3['debugOverlayFrame'] = r7;
            r7 = {'left': 0, 'borderColor': 'green', 'borderWidth': 2};
            r3['debugOverlayFrameLast'] = r7;
            r7 = {'left': 0, 'borderColor': 'red', 'borderWidth': 2};
            r3['debugOverlayFrameVis'] = r7;
            r3 = r5.bind(r6)(r3);
            var _closure1_slot25 = r3;
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 347;
    r5 = [1, 6, 99, 203, 12, 13, 23, 25, 28, 348, 349, 350, 351, 352, 353, 354, 355, 20, 45, 119, 2, 251, 357, 346, 356, 358];
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
        r1 = function(a0, a1, a2) { // Original name: clamp, environment: r1
            _fun4364: for(var _fun4364_ip = 0; ; ) switch(_fun4364_ip) {
case 0:
                r0 = a0;
                r2 = a1;
                r1 = a2;
                if(!(!(r2 < r0))) { _fun4364_ip = 21; continue _fun4364 }
case 13:
                if(!(!(r2 > r1))) { _fun4364_ip = 19; continue _fun4364 }
case 17:
                return r2;
case 19:
                return r1;
case 21:
                return r0;
            }
        };
        r2['default'] = r1;
        return r0;
    };
    r6 = 348;
    r5 = new Array(0);
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
        r1 = function() { // Original name: infoLog, environment: r1
            r0 = undefined;
            r1 = global;
            r3 = r1.console;
            r2 = r3.log;
            r1 = r2.apply;
            r0 = arguments;
            r0 = r1.bind(r2)(r3, r0);
            return r0;
        };
        r2['default'] = r1;
        return r0;
    };
    r6 = 349;
    r5 = new Array(0);
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
        r1 = function() { // Environment: r1
            r3 = function() { // Original name: ChildListCollection, environment: r4
                r2 = this;
                r0 = _closure1_slot0;
                r3 = r0.default;
                r1 = _closure2_slot0;
                r0 = undefined;
                r1 = r3.bind(r0)(r2, r1);
                r1 = global;
                r3 = r1.Map;
                r4 = r3.prototype;
                r4 = Object.create(r4, {constructor: {value: r3}});
                r7 = r4;
                r3 = new r7[r3](r6);
                r3 = r3 instanceof Object ? r3 : r4;
                r2['_cellKeyToChildren'] = r3;
                r1 = r1.Map;
                r3 = r1.prototype;
                r3 = Object.create(r3, {constructor: {value: r1}});
                r7 = r3;
                r1 = new r7[r1](r6);
                r1 = r1 instanceof Object ? r1 : r3;
                r2['_childrenToCellKey'] = r1;
                return r0;
            };
            var _closure2_slot0 = r3;
            r0 = _closure1_slot1;
            r2 = r0.default;
            r0 = {};
            r1 = 'add';
            r0['key'] = r1;
            r1 = function(a0, a1) { // Original name: add, environment: r4
                _fun4370: for(var _fun4370_ip = 0; ; ) switch(_fun4370_ip) {
case 0:
                    r4 = a0;
                    r3 = a1;
                    r1 = this;
                    r0 = _closure1_slot2;
                    r6 = r0.default;
                    r2 = r1._childrenToCellKey;
                    r0 = r2.has;
                    r0 = r0.bind(r2)(r4);
                    r5 = !r0;
                    r0 = undefined;
                    r2 = 'Trying to add already present child list';
                    r2 = r6.bind(r0)(r5, r2);
                    r5 = r1._cellKeyToChildren;
                    r2 = r5.get;
                    r6 = r2.bind(r5)(r3);
                    r2 = null;
                    if(!(r6 == r2)) { _fun4370_ip = 101; continue _fun4370 }
case 73:
                    r2 = global;
                    r2 = r2.Set;
                    r5 = r2.prototype;
                    r5 = Object.create(r5, {constructor: {value: r2}});
                    r9 = r5;
                    r2 = new r9[r2](r8);
                    r6 = r2 instanceof Object ? r2 : r5;
case 101:
                    r2 = r6.add;
                    r2 = r2.bind(r6)(r4);
                    r5 = r1._cellKeyToChildren;
                    r2 = r5.set;
                    r2 = r2.bind(r5)(r3, r6);
                    r2 = r1._childrenToCellKey;
                    r1 = r2.set;
                    r1 = r1.bind(r2)(r4, r3);
                    return r0;
                }
            };
            r0['value'] = r1;
            r1 = new Array(6);
            r1[0] = r0;
            r0 = {};
            r5 = 'remove';
            r0['key'] = r5;
            r5 = function(a0) { // Original name: remove, environment: r4
                _fun4371: for(var _fun4371_ip = 0; ; ) switch(_fun4371_ip) {
case 0:
                    r5 = a0;
                    r1 = this;
                    r2 = r1._childrenToCellKey;
                    r0 = r2.get;
                    r3 = r0.bind(r2)(r5);
                    r4 = _closure1_slot2;
                    r7 = r4.default;
                    r0 = null;
                    r6 = r3 != r0;
                    r0 = undefined;
                    r2 = 'Trying to remove non-present child list';
                    r2 = r7.bind(r0)(r6, r2);
                    r6 = r1._childrenToCellKey;
                    r2 = r6.delete;
                    r2 = r2.bind(r6)(r5);
                    r6 = r1._cellKeyToChildren;
                    r2 = r6.get;
                    r2 = r2.bind(r6)(r3);
                    r6 = r4.default;
                    r4 = '_cellKeyToChildren should contain cellKey';
                    r4 = r6.bind(r0)(r2, r4);
                    r4 = r2.delete;
                    r4 = r4.bind(r2)(r5);
                    r4 = r2.size;
                    r2 = 0;
                    if(!(r4 === r2)) { _fun4371_ip = 135; continue _fun4371 }
case 119:
                    r2 = r1._cellKeyToChildren;
                    r1 = r2.delete;
                    r1 = r1.bind(r2)(r3);
case 135:
                    return r0;
                }
            };
            r0['value'] = r5;
            r1[1] = r0;
            r0 = {};
            r5 = 'forEach';
            r0['key'] = r5;
            r5 = function(a0) { // Original name: forEach, environment: r4
                _fun4372: for(var _fun4372_ip = 0; ; ) switch(_fun4372_ip) {
case 0:
                    r3 = a0;
                    r0 = this;
                    r1 = r0._cellKeyToChildren;
                    r0 = r1.values;
                    r0 = r0.bind(r1)();
                    r1 = r0;
                    r2 = r1[Symbol.iterator];
                    r1 = r2().next;
                    r0 = undefined;
case 29:
                    r6 = r1().value;
                    r4 = r2;
                    if(!(r4 !== r0)) { _fun4372_ip = 83; continue _fun4372 }
case 40: // try_start_1
                    r4 = r6;
                    r5 = r4[Symbol.iterator];
                    r4 = r5().next;
case 46:
                    r7 = r4().value;
                    r6 = r5;
                    if(!(r6 !== r0)) { _fun4372_ip = 74; continue _fun4372 }
case 57: // try_start_0
                    r6 = r3;
                    r6 = r6.bind(r0)(r7);
case 65: // try_end0
                    _fun4372_ip = 46; continue _fun4372;
case 67: // catch_target0
                    CatchBlockStart(arg_register=4);
                    r5.return();
                    throw r4;
case 74: // try_end1
                    _fun4372_ip = 29; continue _fun4372;
case 76: // catch_target1
                    CatchBlockStart(arg_register=1);
                    r2.return();
                    throw r1;
case 83:
                    return r0;
                }
            };
            r0['value'] = r5;
            r1[2] = r0;
            r0 = {};
            r5 = 'forEachInCell';
            r0['key'] = r5;
            r5 = function(a0, a1) { // Original name: forEachInCell, environment: r4
                _fun4373: for(var _fun4373_ip = 0; ; ) switch(_fun4373_ip) {
case 0:
                    r3 = a1;
                    r0 = this;
                    r2 = r0._cellKeyToChildren;
                    r1 = r2.get;
                    r0 = a0;
                    r0 = r1.bind(r2)(r0);
                    r1 = null;
                    if(!(r0 == r1)) { _fun4373_ip = 34; continue _fun4373 }
case 30:
                    r0 = new Array(0);
case 34:
                    r1 = r0;
                    r2 = r1[Symbol.iterator];
                    r1 = r2().next;
                    r0 = undefined;
case 42:
                    r5 = r1().value;
                    r4 = r2;
                    if(!(r4 !== r0)) { _fun4373_ip = 70; continue _fun4373 }
case 53: // try_start_0
                    r4 = r3;
                    r4 = r4.bind(r0)(r5);
case 61: // try_end0
                    _fun4373_ip = 42; continue _fun4373;
case 63: // catch_target0
                    CatchBlockStart(arg_register=1);
                    r2.return();
                    throw r1;
case 70:
                    return r0;
                }
            };
            r0['value'] = r5;
            r1[3] = r0;
            r0 = {};
            r5 = 'anyInCell';
            r0['key'] = r5;
            r5 = function(a0, a1) { // Original name: anyInCell, environment: r4
                _fun4374: for(var _fun4374_ip = 0; ; ) switch(_fun4374_ip) {
case 0:
                    r3 = a1;
                    r0 = this;
                    r2 = r0._cellKeyToChildren;
                    r1 = r2.get;
                    r0 = a0;
                    r0 = r1.bind(r2)(r0);
                    r1 = null;
                    if(!(r0 == r1)) { _fun4374_ip = 34; continue _fun4374 }
case 30:
                    r0 = new Array(0);
case 34:
                    r2 = r0;
                    r1 = r2[Symbol.iterator];
                    r2 = r1().next;
                    r0 = undefined;
case 42:
                    r5 = r2().value;
                    r4 = r1;
                    if(!(r4 !== r0)) { _fun4374_ip = 80; continue _fun4374 }
case 53: // try_start_0
                    r4 = r3;
                    r4 = r4.bind(r0)(r5);
                    if(r4) { _fun4374_ip = 66; continue _fun4374 }
case 64: // try_end0
                    _fun4374_ip = 42; continue _fun4374;
case 66:
                    r1.return();
                    r0 = true;
                    return r0;
case 73: // catch_target0
                    CatchBlockStart(arg_register=0);
                    r1.return();
                    throw r0;
case 80:
                    r0 = false;
                    return r0;
                }
            };
            r0['value'] = r5;
            r1[4] = r0;
            r0 = {};
            r5 = 'size';
            r0['key'] = r5;
            r4 = function() { // Original name: size, environment: r4
                r0 = this;
                r0 = r0._childrenToCellKey;
                r0 = r0.size;
                return r0;
            };
            r0['value'] = r4;
            r1[5] = r0;
            r0 = undefined;
            r0 = r2.bind(r0)(r3, r1);
            return r0;
        };
        r1 = r1.bind(r0)();
        r2['default'] = r1;
        return r0;
    };
    r6 = 350;
    r5 = [1, 12, 13, 20];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r6 = a1;
        r2 = a5;
        r7 = a6;
        r0 = a0;
        var _closure1_slot0 = r0;
        r0 = 0;
        r3 = r7[r0];
        r0 = undefined;
        r5 = r6.bind(r0)(r3);
        r3 = global;
        r9 = r3.Object;
        r8 = r9.defineProperty;
        r4 = {};
        r3 = true;
        r4['value'] = r3;
        r3 = '__esModule';
        r3 = r8.bind(r9)(r2, r3, r4);
        r2['default'] = r0;
        r3 = 1;
        r3 = r7[r3];
        r3 = r6.bind(r0)(r3);
        r3 = r5.bind(r0)(r3);
        var _closure1_slot1 = r3;
        r4 = 2;
        r4 = r7[r4];
        r4 = r6.bind(r0)(r4);
        r4 = r5.bind(r0)(r4);
        var _closure1_slot2 = r4;
        r4 = 3;
        r4 = r7[r4];
        r4 = r6.bind(r0)(r4);
        r4 = r5.bind(r0)(r4);
        r4 = r3.default;
        r3 = function() { // Original name: Info, environment: r1
            r2 = this;
            r1 = _closure1_slot2;
            r3 = r1.default;
            r1 = _closure1_slot7;
            r0 = undefined;
            r1 = r3.bind(r0)(r2, r1);
            r1 = 0;
            r2['any_blank_count'] = r1;
            r2['any_blank_ms'] = r1;
            r2['any_blank_speed_sum'] = r1;
            r2['mostly_blank_count'] = r1;
            r2['mostly_blank_ms'] = r1;
            r2['pixels_blank'] = r1;
            r2['pixels_sampled'] = r1;
            r2['pixels_scrolled'] = r1;
            r2['total_time_spent'] = r1;
            r2['sample_count'] = r1;
            return r0;
        };
        var _closure1_slot7 = r3;
        r3 = r4.bind(r0)(r3);
        var _closure1_slot3 = r3;
        r3 = new Array(0);
        var _closure1_slot4 = r3;
        r3 = 10;
        var _closure1_slot5 = r3;
        r3 = null;
        var _closure1_slot6 = r3;
        r1 = function() { // Environment: r1
            r4 = function(a0) { // Original name: FillRateHelper, environment: r5
                _fun4379: for(var _fun4379_ip = 0; ; ) switch(_fun4379_ip) {
case 0:
                    r2 = this;
                    r0 = _closure1_slot2;
                    r4 = r0.default;
                    r3 = _closure2_slot0;
                    r0 = undefined;
                    r3 = r4.bind(r0)(r2, r3);
                    r3 = null;
                    r2['_anyBlankStartTime'] = r3;
                    r4 = false;
                    r2['_enabled'] = r4;
                    r4 = _closure1_slot3;
                    r5 = r4.prototype;
                    r5 = Object.create(r5, {constructor: {value: r4}});
                    r8 = r5;
                    r4 = new r8[r4](r7);
                    r4 = r4 instanceof Object ? r4 : r5;
                    r2['_info'] = r4;
                    r2['_mostlyBlankStartTime'] = r3;
                    r2['_samplesStartTime'] = r3;
                    r3 = a0;
                    r2['_listMetrics'] = r3;
                    r3 = _closure1_slot6;
                    if(r3) { _fun4379_ip = 106; continue _fun4379 }
case 104:
                    r3 = 0;
case 106:
                    r1 = global;
                    r4 = r1.Math;
                    r1 = r4.random;
                    r1 = r1.bind(r4)();
                    r1 = r3 > r1;
                    r2['_enabled'] = r1;
                    r1 = r2._resetData;
                    r1 = r1.bind(r2)();
                    return r0;
                }
            };
            var _closure2_slot0 = r4;
            r0 = _closure1_slot1;
            r3 = r0.default;
            r0 = {};
            r1 = 'activate';
            r0['key'] = r1;
            r1 = function() { // Original name: activate, environment: r5
                _fun4380: for(var _fun4380_ip = 0; ; ) switch(_fun4380_ip) {
case 0:
                    r1 = this;
                    r0 = r1._enabled;
                    if(!r0) { _fun4380_ip = 51; continue _fun4380 }
case 12:
                    r2 = r1._samplesStartTime;
                    r0 = null;
                    if(!(r2 == r0)) { _fun4380_ip = 51; continue _fun4380 }
case 24:
                    r0 = _closure1_slot0;
                    r2 = r0.performance;
                    r0 = r2.now;
                    r0 = r0.bind(r2)();
                    r1['_samplesStartTime'] = r0;
case 51:
                    r0 = undefined;
                    return r0;
                }
            };
            r0['value'] = r1;
            r2 = new Array(5);
            r2[0] = r0;
            r0 = {};
            r1 = 'deactivateAndFlush';
            r0['key'] = r1;
            r1 = function() { // Original name: deactivateAndFlush, environment: r5
                _fun4381: for(var _fun4381_ip = 0; ; ) switch(_fun4381_ip) {
case 0:
                    r1 = this;
                    r2 = r1._enabled;
                    if(r2) { _fun4381_ip = 18; continue _fun4381 }
case 14:
                    r2 = undefined;
                    return r2;
case 18:
                    r4 = r1._samplesStartTime;
                    r2 = null;
                    if(!(r4 != r2)) { _fun4381_ip = 164; continue _fun4381 }
case 33:
                    r2 = r1._info;
                    r5 = r2.sample_count;
                    r3 = _closure1_slot5;
                    if(!(!(r5 < r3))) { _fun4381_ip = 150; continue _fun4381 }
case 56:
                    r3 = _closure1_slot0;
                    r5 = r3.performance;
                    r3 = r5.now;
                    r3 = r3.bind(r5)();
                    r3 = r3 - r4;
                    r4 = global;
                    r7 = r4.Object;
                    r6 = r7.assign;
                    r5 = r1._info;
                    r4 = {};
                    r4['total_time_spent'] = r3;
                    r3 = {};
                    r3 = r6.bind(r7)(r3, r5, r4);
                    var _closure3_slot0 = r3;
                    r3 = _closure1_slot4;
                    r2 = r3.forEach;
                    r0 = function(a0) { // Environment: r0
                        r2 = _closure3_slot0;
                        r1 = a0;
                        r0 = undefined;
                        r0 = r1.bind(r0)(r2);
                        return r0;
                    };
                    r0 = r2.bind(r3)(r0);
                    r0 = r1._resetData;
                    r0 = r0.bind(r1)();
                    r0 = undefined;
                    return r0;
case 150:
                    r0 = r1._resetData;
                    r0 = r0.bind(r1)();
                    r0 = undefined;
                    return r0;
case 164:
                    r0 = undefined;
                    return r0;
                }
            };
            r0['value'] = r1;
            r2[1] = r0;
            r0 = {};
            r1 = 'computeBlankness';
            r0['key'] = r1;
            r1 = function(a0, a1, a2) { // Original name: computeBlankness, environment: r5
                _fun4383: for(var _fun4383_ip = 0; ; ) switch(_fun4383_ip) {
case 0:
                    r14 = a0;
                    r13 = a1;
                    r0 = a2;
                    r1 = this;
                    r2 = r1._enabled;
                    if(!r2) { _fun4383_ip = 962; continue _fun4383 }
case 24:
                    r3 = r14.getItemCount;
                    r2 = r14.data;
                    r2 = r3.bind(r14)(r2);
                    r4 = 0;
                    if(!(r2 !== r4)) { _fun4383_ip = 962; continue _fun4383 }
case 48:
                    r3 = r13.last;
                    r2 = r13.first;
                    if(!(!(r3 < r2))) { _fun4383_ip = 962; continue _fun4383 }
case 65:
                    r2 = r1._samplesStartTime;
                    r5 = null;
                    if(!(r2 != r5)) { _fun4383_ip = 962; continue _fun4383 }
case 80:
                    r7 = r0.dOffset;
                    r8 = r0.offset;
                    r11 = r0.velocity;
                    r0 = r0.visibleLength;
                    r3 = r1._info;
                    r2 = r3.sample_count;
                    r2 = r2 + 1;
                    r3['sample_count'] = r2;
                    r6 = r1._info;
                    r9 = r6.pixels_sampled;
                    r3 = global;
                    r10 = r3.Math;
                    r2 = r10.round;
                    r2 = r2.bind(r10)(r0);
                    r2 = r9 + r2;
                    r6['pixels_sampled'] = r2;
                    r6 = r1._info;
                    r9 = r6.pixels_scrolled;
                    r12 = r3.Math;
                    r10 = r12.round;
                    r15 = r3.Math;
                    r2 = r15.abs;
                    r2 = r2.bind(r15)(r7);
                    r2 = r10.bind(r12)(r2);
                    r2 = r9 + r2;
                    r6['pixels_scrolled'] = r2;
                    r9 = r3.Math;
                    r6 = r9.round;
                    r10 = r3.Math;
                    r2 = r10.abs;
                    r10 = r2.bind(r10)(r11);
                    r2 = 1000;
                    r2 = r10 * r2;
                    r6 = r6.bind(r9)(r2);
                    r2 = _closure1_slot0;
                    r9 = r2.performance;
                    r2 = r9.now;
                    r2 = r2.bind(r9)();
                    r9 = r1._anyBlankStartTime;
                    if(!(r9 != r5)) { _fun4383_ip = 324; continue _fun4383 }
case 292:
                    r10 = r1._info;
                    r11 = r10.any_blank_ms;
                    r9 = r1._anyBlankStartTime;
                    r9 = r2 - r9;
                    r9 = r11 + r9;
                    r10['any_blank_ms'] = r9;
case 324:
                    r1['_anyBlankStartTime'] = r5;
                    r9 = r1._mostlyBlankStartTime;
                    if(!(r9 != r5)) { _fun4383_ip = 372; continue _fun4383 }
case 340:
                    r10 = r1._info;
                    r11 = r10.mostly_blank_ms;
                    r9 = r1._mostlyBlankStartTime;
                    r9 = r2 - r9;
                    r9 = r11 + r9;
                    r10['mostly_blank_ms'] = r9;
case 372:
                    r1['_mostlyBlankStartTime'] = r5;
                    r15 = r13.first;
                    r9 = r1._listMetrics;
                    r5 = r9.getCellMetrics;
                    r12 = r5.bind(r9)(r15, r14);
                    r10 = r13.last;
                    r9 = r15;
                    r5 = r12;
                    if(!(r15 <= r10)) { _fun4383_ip = 498; continue _fun4383 }
case 415:
                    r11 = r15;
                    if(!r12) { _fun4383_ip = 439; continue _fun4383 }
case 421:
                    r10 = r12.isMounted;
                    r11 = r15;
                    r9 = r11;
                    r5 = r12;
                    if(r10) { _fun4383_ip = 498; continue _fun4383 }
case 439:
                    r12 = r1._listMetrics;
                    r10 = r12.getCellMetrics;
                    r12 = r10.bind(r12)(r11, r14);
                    r15 = r11 + 1;
                    r10 = r13.last;
                    r9 = r15;
                    r5 = r12;
                    if(!(r15 <= r10)) { _fun4383_ip = 498; continue _fun4383 }
case 474:
                    r11 = r15;
                    if(!r12) { _fun4383_ip = 439; continue _fun4383 }
case 480:
                    r10 = r12.isMounted;
                    r11 = r15;
                    r9 = r11;
                    r5 = r12;
                    if(!r10) { _fun4383_ip = 439; continue _fun4383 }
case 498:
                    r10 = 0;
                    if(!r5) { _fun4383_ip = 555; continue _fun4383 }
case 503:
                    r9 = r9 > r4;
                    r10 = 0;
                    if(!r9) { _fun4383_ip = 555; continue _fun4383 }
case 512:
                    r11 = r3.Math;
                    r9 = r11.min;
                    r15 = r3.Math;
                    r12 = r15.max;
                    r5 = r5.offset;
                    r5 = r5 - r8;
                    r5 = r12.bind(r15)(r4, r5);
                    r10 = r9.bind(r11)(r0, r5);
case 555:
                    r16 = r13.last;
                    r9 = r1._listMetrics;
                    r5 = r9.getCellMetrics;
                    r15 = r5.bind(r9)(r16, r14);
                    r5 = r13.first;
                    r12 = r16;
                    r9 = r15;
                    if(!(r16 >= r5)) { _fun4383_ip = 675; continue _fun4383 }
case 592:
                    r11 = r16;
                    if(!r15) { _fun4383_ip = 616; continue _fun4383 }
case 598:
                    r5 = r15.isMounted;
                    r11 = r16;
                    r12 = r11;
                    r9 = r15;
                    if(r5) { _fun4383_ip = 675; continue _fun4383 }
case 616:
                    r15 = r1._listMetrics;
                    r5 = r15.getCellMetrics;
                    r15 = r5.bind(r15)(r11, r14);
                    r16 = r11 - 1;
                    r5 = r13.first;
                    r12 = r16;
                    r9 = r15;
                    if(!(r16 >= r5)) { _fun4383_ip = 675; continue _fun4383 }
case 651:
                    r11 = r16;
                    if(!r15) { _fun4383_ip = 616; continue _fun4383 }
case 657:
                    r5 = r15.isMounted;
                    r11 = r16;
                    r12 = r11;
                    r9 = r15;
                    if(!r5) { _fun4383_ip = 616; continue _fun4383 }
case 675:
                    r5 = 0;
                    if(!r9) { _fun4383_ip = 767; continue _fun4383 }
case 680:
                    r13 = r14.getItemCount;
                    r11 = r14.data;
                    r13 = r13.bind(r14)(r11);
                    r11 = 1;
                    r11 = r13 - r11;
                    r11 = r12 < r11;
                    r5 = 0;
                    if(!r11) { _fun4383_ip = 767; continue _fun4383 }
case 711:
                    r11 = r9.offset;
                    r9 = r9.length;
                    r14 = r11 + r9;
                    r11 = r3.Math;
                    r9 = r11.min;
                    r13 = r3.Math;
                    r12 = r13.max;
                    r8 = r8 + r0;
                    r8 = r8 - r14;
                    r8 = r12.bind(r13)(r4, r8);
                    r5 = r9.bind(r11)(r0, r8);
case 767:
                    r9 = r3.Math;
                    r8 = r9.round;
                    r5 = r10 + r5;
                    r5 = r8.bind(r9)(r5);
                    r0 = r5 / r0;
                    if(!(!(r0 > r4))) { _fun4383_ip = 848; continue _fun4383 }
case 795:
                    r4 = 0.01;
                    if(!(!(r6 < r4))) { _fun4383_ip = 836; continue _fun4383 }
case 809:
                    r4 = r3.Math;
                    r3 = r4.abs;
                    r4 = r3.bind(r4)(r7);
                    r3 = 1;
                    if(!(r4 < r3)) { _fun4383_ip = 960; continue _fun4383 }
case 836:
                    r3 = r1.deactivateAndFlush;
                    r3 = r3.bind(r1)();
                    _fun4383_ip = 960; continue _fun4383;
case 848:
                    r1['_anyBlankStartTime'] = r2;
                    r4 = r1._info;
                    r3 = r4.any_blank_speed_sum;
                    r3 = r3 + r6;
                    r4['any_blank_speed_sum'] = r3;
                    r4 = r1._info;
                    r3 = r4.any_blank_count;
                    r3 = r3 + 1;
                    r4['any_blank_count'] = r3;
                    r4 = r1._info;
                    r3 = r4.pixels_blank;
                    r3 = r3 + r5;
                    r4['pixels_blank'] = r3;
                    r3 = 0.5;
                    if(!(r0 > r3)) { _fun4383_ip = 960; continue _fun4383 }
case 933:
                    r1['_mostlyBlankStartTime'] = r2;
                    r2 = r1._info;
                    r1 = r2.mostly_blank_count;
                    r1 = r1 + 1;
                    r2['mostly_blank_count'] = r1;
case 960:
                    return r0;
case 962:
                    r0 = 0;
                    return r0;
                }
            };
            r0['value'] = r1;
            r2[2] = r0;
            r0 = {};
            r1 = 'enabled';
            r0['key'] = r1;
            r1 = function() { // Original name: enabled, environment: r5
                r0 = this;
                r0 = r0._enabled;
                return r0;
            };
            r0['value'] = r1;
            r2[3] = r0;
            r0 = {};
            r1 = '_resetData';
            r0['key'] = r1;
            r1 = function() { // Original name: _resetData, environment: r5
                r1 = this;
                r0 = null;
                r1['_anyBlankStartTime'] = r0;
                r2 = _closure1_slot3;
                r3 = r2.prototype;
                r3 = Object.create(r3, {constructor: {value: r2}});
                r4 = r3;
                r2 = new r4[r2](r3);
                r2 = r2 instanceof Object ? r2 : r3;
                r1['_info'] = r2;
                r1['_mostlyBlankStartTime'] = r0;
                r1['_samplesStartTime'] = r0;
                r0 = undefined;
                return r0;
            };
            r0['value'] = r1;
            r2[4] = r0;
            r0 = {};
            r1 = 'addListener';
            r0['key'] = r1;
            r1 = function(a0) { // Original name: addListener, environment: r5
                _fun4386: for(var _fun4386_ip = 0; ; ) switch(_fun4386_ip) {
case 0:
                    r3 = a0;
                    var _closure3_slot0 = r3;
                    r4 = _closure1_slot6;
                    r2 = null;
                    if(!(r4 === r2)) { _fun4386_ip = 44; continue _fun4386 }
case 22:
                    r2 = global;
                    r5 = r2.console;
                    r4 = r5.warn;
                    r2 = 'Call `FillRateHelper.setSampleRate` before `addListener`.';
                    r2 = r4.bind(r5)(r2);
case 44:
                    r2 = _closure1_slot4;
                    r0 = r2.push;
                    r0 = r0.bind(r2)(r3);
                    r0 = {};
                    r1 = function() { // Original name: remove, environment: r1
                        r3 = _closure1_slot4;
                        r2 = r3.filter;
                        r0 = function(a0) { // Environment: r0
                            r1 = _closure3_slot0;
                            r0 = a0;
                            r0 = r1 !== r0;
                            return r0;
                        };
                        r0 = r2.bind(r3)(r0);
                        _closure1_slot4 = r0;
                        r0 = undefined;
                        return r0;
                    };
                    r0['remove'] = r1;
                    return r0;
                }
            };
            r0['value'] = r1;
            r1 = new Array(3);
            r1[0] = r0;
            r0 = {};
            r6 = 'setSampleRate';
            r0['key'] = r6;
            r6 = function(a0) { // Original name: setSampleRate, environment: r5
                r0 = a0;
                _closure1_slot6 = r0;
                r0 = undefined;
                return r0;
            };
            r0['value'] = r6;
            r1[1] = r0;
            r0 = {};
            r6 = 'setMinSampleCount';
            r0['key'] = r6;
            r5 = function(a0) { // Original name: setMinSampleCount, environment: r5
                r0 = a0;
                _closure1_slot5 = r0;
                r0 = undefined;
                return r0;
            };
            r0['value'] = r5;
            r1[2] = r0;
            r0 = undefined;
            r0 = r3.bind(r0)(r4, r2, r1);
            return r0;
        };
        r1 = r1.bind(r0)();
        r2['default'] = r1;
        return r0;
    };
    r6 = 351;
    r5 = [1, 13, 12, 352];
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
        r1 = function() { // Environment: r1
            r3 = function() { // Original name: ListMetricsAggregator, environment: r4
                r2 = this;
                r0 = _closure1_slot2;
                r3 = r0.default;
                r1 = _closure2_slot0;
                r0 = undefined;
                r1 = r3.bind(r0)(r2, r1);
                r1 = 0;
                r2['_averageCellLength'] = r1;
                r3 = global;
                r3 = r3.Map;
                r4 = r3.prototype;
                r4 = Object.create(r4, {constructor: {value: r3}});
                r7 = r4;
                r3 = new r7[r3](r6);
                r3 = r3 instanceof Object ? r3 : r4;
                r2['_cellMetrics'] = r3;
                r2['_highestMeasuredCellIndex'] = r1;
                r2['_measuredCellsLength'] = r1;
                r2['_measuredCellsCount'] = r1;
                r1 = {'horizontal': false, 'rtl': false};
                r2['_orientation'] = r1;
                return r0;
            };
            var _closure2_slot0 = r3;
            r0 = _closure1_slot3;
            r2 = r0.default;
            r0 = {};
            r1 = 'notifyCellLayout';
            r0['key'] = r1;
            r1 = function(a0) { // Original name: notifyCellLayout, environment: r4
                _fun4394: for(var _fun4394_ip = 0; ; ) switch(_fun4394_ip) {
case 0:
                    r0 = a0;
                    r2 = this;
                    r5 = r0.cellIndex;
                    r6 = r0.cellKey;
                    r1 = r0.orientation;
                    r3 = r0.layout;
                    r0 = r2._invalidateIfOrientationChanged;
                    r0 = r0.bind(r2)(r1);
                    r4 = {};
                    r4['index'] = r5;
                    r0 = r2._selectLength;
                    r0 = r0.bind(r2)(r3);
                    r4['length'] = r0;
                    r0 = true;
                    r4['isMounted'] = r0;
                    r1 = r2.flowRelativeOffset;
                    r1 = r1.bind(r2)(r3);
                    r4['offset'] = r1;
                    r3 = r2._cellMetrics;
                    r1 = r3.get;
                    r1 = r1.bind(r3)(r6);
                    if(!r1) { _fun4394_ip = 139; continue _fun4394 }
case 101:
                    r7 = r4.offset;
                    r3 = r1.offset;
                    if(!(r7 === r3)) { _fun4394_ip = 139; continue _fun4394 }
case 115:
                    r7 = r4.length;
                    r3 = r1.length;
                    if(!(r7 === r3)) { _fun4394_ip = 139; continue _fun4394 }
case 129:
                    r1['isMounted'] = r0;
                    r3 = false;
                    return r3;
case 139:
                    if(r1) { _fun4394_ip = 184; continue _fun4394 }
case 142:
                    r7 = r2._measuredCellsLength;
                    r3 = r4.length;
                    r3 = r7 + r3;
                    r2['_measuredCellsLength'] = r3;
                    r7 = r2._measuredCellsCount;
                    r3 = 1;
                    r3 = r7 + r3;
                    r2['_measuredCellsCount'] = r3;
                    _fun4394_ip = 214; continue _fun4394;
case 184:
                    r3 = r4.length;
                    r1 = r1.length;
                    r3 = r3 - r1;
                    r1 = r2._measuredCellsLength;
                    r1 = r1 + r3;
                    r2['_measuredCellsLength'] = r1;
case 214:
                    r3 = r2._measuredCellsLength;
                    r1 = r2._measuredCellsCount;
                    r1 = r3 / r1;
                    r2['_averageCellLength'] = r1;
                    r3 = r2._cellMetrics;
                    r1 = r3.set;
                    r1 = r1.bind(r3)(r6, r4);
                    r1 = global;
                    r4 = r1.Math;
                    r3 = r4.max;
                    r1 = r2._highestMeasuredCellIndex;
                    r1 = r3.bind(r4)(r1, r5);
                    r2['_highestMeasuredCellIndex'] = r1;
                    return r0;
                }
            };
            r0['value'] = r1;
            r1 = new Array(15);
            r1[0] = r0;
            r0 = {};
            r5 = 'notifyCellUnmounted';
            r0['key'] = r5;
            r5 = function(a0) { // Original name: notifyCellUnmounted, environment: r4
                _fun4395: for(var _fun4395_ip = 0; ; ) switch(_fun4395_ip) {
case 0:
                    r0 = this;
                    r2 = r0._cellMetrics;
                    r1 = r2.get;
                    r0 = a0;
                    r1 = r1.bind(r2)(r0);
                    if(!r1) { _fun4395_ip = 32; continue _fun4395 }
case 24:
                    r0 = false;
                    r1['isMounted'] = r0;
case 32:
                    r0 = undefined;
                    return r0;
                }
            };
            r0['value'] = r5;
            r1[1] = r0;
            r0 = {};
            r5 = 'notifyListContentLayout';
            r0['key'] = r5;
            r5 = function(a0) { // Original name: notifyListContentLayout, environment: r4
                r0 = a0;
                r1 = this;
                r3 = r0.orientation;
                r2 = r0.layout;
                r0 = r1._invalidateIfOrientationChanged;
                r0 = r0.bind(r1)(r3);
                r0 = r1._selectLength;
                r0 = r0.bind(r1)(r2);
                r1['_contentLength'] = r0;
                r0 = undefined;
                return r0;
            };
            r0['value'] = r5;
            r1[2] = r0;
            r0 = {};
            r5 = 'getAverageCellLength';
            r0['key'] = r5;
            r5 = function() { // Original name: getAverageCellLength, environment: r4
                r0 = this;
                r0 = r0._averageCellLength;
                return r0;
            };
            r0['value'] = r5;
            r1[3] = r0;
            r0 = {};
            r5 = 'getHighestMeasuredCellIndex';
            r0['key'] = r5;
            r5 = function() { // Original name: getHighestMeasuredCellIndex, environment: r4
                r0 = this;
                r0 = r0._highestMeasuredCellIndex;
                return r0;
            };
            r0['value'] = r5;
            r1[4] = r0;
            r0 = {};
            r5 = 'getCellMetricsApprox';
            r0['key'] = r5;
            r5 = function(a0, a1) { // Original name: getCellMetricsApprox, environment: r4
                _fun4399: for(var _fun4399_ip = 0; ; ) switch(_fun4399_ip) {
case 0:
                    r2 = a0;
                    r1 = a1;
                    r4 = this;
                    r0 = r4.getCellMetrics;
                    r0 = r0.bind(r4)(r2, r1);
                    if(!r0) { _fun4399_ip = 35; continue _fun4399 }
case 23:
                    r3 = r0.index;
                    if(!(r3 !== r2)) { _fun4399_ip = 211; continue _fun4399 }
case 35:
                    r3 = r4.getHighestMeasuredCellIndex;
                    r5 = r3.bind(r4)();
                    r6 = r5 < r2;
                    r7 = undefined;
                    r3 = undefined;
                    if(!r6) { _fun4399_ip = 112; continue _fun4399 }
case 56:
                    r6 = r4.getCellMetrics;
                    r6 = r6.bind(r4)(r5, r1);
                    r3 = undefined;
                    if(!r6) { _fun4399_ip = 112; continue _fun4399 }
case 73:
                    r8 = r6.offset;
                    r6 = r6.length;
                    r6 = r8 + r6;
                    r8 = r4._averageCellLength;
                    r9 = r2 - r5;
                    r5 = 1;
                    r5 = r9 - r5;
                    r5 = r8 * r5;
                    r3 = r6 + r5;
case 112:
                    r5 = null;
                    if(!(r3 == r5)) { _fun4399_ip = 128; continue _fun4399 }
case 118:
                    r5 = r4._averageCellLength;
                    r3 = r5 * r2;
case 128:
                    r8 = r1.data;
                    r1 = r1.getItemCount;
                    r5 = _closure1_slot4;
                    r6 = r5.default;
                    r5 = 0;
                    r5 = r2 >= r5;
                    if(!r5) { _fun4399_ip = 168; continue _fun4399 }
case 159:
                    r1 = r1.bind(r7)(r8);
                    r5 = r2 < r1;
case 168:
                    r1 = 'Tried to get frame for out of range index ';
                    r1 = r1 + r2;
                    r1 = r6.bind(r7)(r5, r1);
                    r1 = {};
                    r4 = r4._averageCellLength;
                    r1['length'] = r4;
                    r1['offset'] = r3;
                    r1['index'] = r2;
                    r2 = false;
                    r1['isMounted'] = r2;
                    return r1;
case 211:
                    return r0;
                }
            };
            r0['value'] = r5;
            r1[5] = r0;
            r0 = {};
            r5 = 'getCellMetrics';
            r0['key'] = r5;
            r5 = function(a0, a1) { // Original name: getCellMetrics, environment: r4
                _fun4400: for(var _fun4400_ip = 0; ; ) switch(_fun4400_ip) {
case 0:
                    r4 = a0;
                    r5 = a1;
                    r3 = r5.data;
                    r0 = r5.getItem;
                    r7 = r5.getItemCount;
                    r2 = r5.getItemLayout;
                    r1 = _closure1_slot4;
                    r9 = r1.default;
                    r1 = 0;
                    r8 = r4 >= r1;
                    if(!r8) { _fun4400_ip = 60; continue _fun4400 }
case 49:
                    r1 = undefined;
                    r1 = r7.bind(r1)(r3);
                    r8 = r4 < r1;
case 60:
                    r1 = 'Tried to get metrics for out of range cell index ';
                    r7 = r1 + r4;
                    r1 = undefined;
                    r7 = r9.bind(r1)(r8, r7);
                    r8 = r5.keyExtractor;
                    r5 = null;
                    if(!(r8 == r5)) { _fun4400_ip = 114; continue _fun4400 }
case 88:
                    r7 = _closure1_slot0;
                    r9 = _closure1_slot1;
                    r6 = 4;
                    r6 = r9[r6];
                    r6 = r7.bind(r1)(r6);
                    r8 = r6.keyExtractor;
case 114:
                    r6 = this;
                    r7 = r6._cellMetrics;
                    r6 = r7.get;
                    r0 = r0.bind(r1)(r3, r4);
                    r0 = r8.bind(r1)(r0, r4);
                    r0 = r6.bind(r7)(r0);
                    if(!r0) { _fun4400_ip = 156; continue _fun4400 }
case 147:
                    r6 = r0.index;
                    if(!(r6 !== r4)) { _fun4400_ip = 200; continue _fun4400 }
case 156:
                    if(r2) { _fun4400_ip = 161; continue _fun4400 }
case 159:
                    return r5;
case 161:
                    r1 = r2.bind(r1)(r3, r4);
                    r3 = r1.length;
                    r2 = r1.offset;
                    r1 = {};
                    r1['index'] = r4;
                    r1['length'] = r3;
                    r1['offset'] = r2;
                    r2 = true;
                    r1['isMounted'] = r2;
                    return r1;
case 200:
                    return r0;
                }
            };
            r0['value'] = r5;
            r1[6] = r0;
            r0 = {};
            r5 = 'getCellOffsetApprox';
            r0['key'] = r5;
            r5 = function(a0, a1) { // Original name: getCellOffsetApprox, environment: r4
                _fun4401: for(var _fun4401_ip = 0; ; ) switch(_fun4401_ip) {
case 0:
                    r3 = a0;
                    r2 = a1;
                    r1 = this;
                    r5 = global;
                    r4 = r5.Number;
                    r0 = r4.isInteger;
                    r4 = r0.bind(r4)(r3);
                    r0 = r1.getCellMetricsApprox;
                    if(r4) { _fun4401_ip = 100; continue _fun4401 }
case 36:
                    r6 = r5.Math;
                    r4 = r6.floor;
                    r4 = r4.bind(r6)(r3);
                    r4 = r0.bind(r1)(r4, r2);
                    r6 = r5.Math;
                    r5 = r6.floor;
                    r5 = r5.bind(r6)(r3);
                    r6 = r3 - r5;
                    r5 = r4.offset;
                    r4 = r4.length;
                    r4 = r6 * r4;
                    r4 = r5 + r4;
                    return r4;
case 100:
                    r0 = r0.bind(r1)(r3, r2);
                    r0 = r0.offset;
                    return r0;
                }
            };
            r0['value'] = r5;
            r1[7] = r0;
            r0 = {};
            r5 = 'getContentLength';
            r0['key'] = r5;
            r5 = function() { // Original name: getContentLength, environment: r4
                _fun4402: for(var _fun4402_ip = 0; ; ) switch(_fun4402_ip) {
case 0:
                    r0 = this;
                    r1 = r0._contentLength;
                    r0 = null;
                    r2 = r1 != r0;
                    r0 = 0;
                    if(!r2) { _fun4402_ip = 22; continue _fun4402 }
case 19:
                    r0 = r1;
case 22:
                    return r0;
                }
            };
            r0['value'] = r5;
            r1[8] = r0;
            r0 = {};
            r5 = 'hasContentLength';
            r0['key'] = r5;
            r5 = function() { // Original name: hasContentLength, environment: r4
                r0 = this;
                r1 = r0._contentLength;
                r0 = null;
                r0 = r1 != r0;
                return r0;
            };
            r0['value'] = r5;
            r1[9] = r0;
            r0 = {};
            r5 = 'flowRelativeOffset';
            r0['key'] = r5;
            r5 = function(a0, a1) { // Original name: flowRelativeOffset, environment: r4
                _fun4404: for(var _fun4404_ip = 0; ; ) switch(_fun4404_ip) {
case 0:
                    r4 = a0;
                    r1 = a1;
                    r3 = this;
                    r0 = r3._orientation;
                    r2 = r0.horizontal;
                    r0 = r0.rtl;
                    if(!r2) { _fun4404_ip = 31; continue _fun4404 }
case 28:
                    if(r0) { _fun4404_ip = 44; continue _fun4404 }
case 31:
                    r0 = r3._selectOffset;
                    r0 = r0.bind(r3)(r4);
                    return r0;
case 44:
                    r0 = null;
                    if(!(r1 == r0)) { _fun4404_ip = 56; continue _fun4404 }
case 50:
                    r1 = r3._contentLength;
case 56:
                    r2 = _closure1_slot4;
                    r6 = r2.default;
                    r5 = r1 != r0;
                    r2 = undefined;
                    r0 = 'ListMetricsAggregator must be notified of list content layout before resolving offsets';
                    r0 = r6.bind(r2)(r5, r0);
                    r0 = r3._selectOffset;
                    r2 = r0.bind(r3)(r4);
                    r0 = r3._selectLength;
                    r0 = r0.bind(r3)(r4);
                    r0 = r2 + r0;
                    r0 = r1 - r0;
                    return r0;
                }
            };
            r0['value'] = r5;
            r1[10] = r0;
            r0 = {};
            r5 = 'cartesianOffset';
            r0['key'] = r5;
            r5 = function(a0) { // Original name: cartesianOffset, environment: r4
                _fun4405: for(var _fun4405_ip = 0; ; ) switch(_fun4405_ip) {
case 0:
                    r1 = a0;
                    r0 = this;
                    r2 = r0._orientation;
                    r3 = r2.horizontal;
                    r2 = r2.rtl;
                    if(!r3) { _fun4405_ip = 28; continue _fun4405 }
case 25:
                    if(r2) { _fun4405_ip = 30; continue _fun4405 }
case 28:
                    return r1;
case 30:
                    r2 = _closure1_slot4;
                    r5 = r2.default;
                    r3 = r0._contentLength;
                    r2 = null;
                    r4 = r3 != r2;
                    r3 = undefined;
                    r2 = 'ListMetricsAggregator must be notified of list content layout before resolving offsets';
                    r2 = r5.bind(r3)(r4, r2);
                    r0 = r0._contentLength;
                    r0 = r0 - r1;
                    return r0;
                }
            };
            r0['value'] = r5;
            r1[11] = r0;
            r0 = {};
            r5 = '_invalidateIfOrientationChanged';
            r0['key'] = r5;
            r5 = function(a0) { // Original name: _invalidateIfOrientationChanged, environment: r4
                _fun4406: for(var _fun4406_ip = 0; ; ) switch(_fun4406_ip) {
case 0:
                    r1 = a0;
                    r0 = this;
                    r3 = r1.rtl;
                    r2 = r0._orientation;
                    r2 = r2.rtl;
                    if(!(r3 !== r2)) { _fun4406_ip = 43; continue _fun4406 }
case 27:
                    r3 = r0._cellMetrics;
                    r2 = r3.clear;
                    r2 = r2.bind(r3)();
case 43:
                    r3 = r1.horizontal;
                    r2 = r0._orientation;
                    r2 = r2.horizontal;
                    if(!(r3 !== r2)) { _fun4406_ip = 89; continue _fun4406 }
case 63:
                    r2 = 0;
                    r0['_averageCellLength'] = r2;
                    r0['_highestMeasuredCellIndex'] = r2;
                    r0['_measuredCellsLength'] = r2;
                    r0['_measuredCellsCount'] = r2;
case 89:
                    r0['_orientation'] = r1;
                    r0 = undefined;
                    return r0;
                }
            };
            r0['value'] = r5;
            r1[12] = r0;
            r0 = {};
            r5 = '_selectLength';
            r0['key'] = r5;
            r5 = function(a0) { // Original name: _selectLength, environment: r4
                _fun4407: for(var _fun4407_ip = 0; ; ) switch(_fun4407_ip) {
case 0:
                    r0 = a0;
                    r1 = r0.width;
                    r0 = r0.height;
                    r2 = this;
                    r2 = r2._orientation;
                    r2 = r2.horizontal;
                    if(!r2) { _fun4407_ip = 32; continue _fun4407 }
case 29:
                    r0 = r1;
case 32:
                    return r0;
                }
            };
            r0['value'] = r5;
            r1[13] = r0;
            r0 = {};
            r5 = '_selectOffset';
            r0['key'] = r5;
            r4 = function(a0) { // Original name: _selectOffset, environment: r4
                _fun4408: for(var _fun4408_ip = 0; ; ) switch(_fun4408_ip) {
case 0:
                    r0 = a0;
                    r1 = r0.x;
                    r0 = r0.y;
                    r2 = this;
                    r2 = r2._orientation;
                    r2 = r2.horizontal;
                    if(!r2) { _fun4408_ip = 32; continue _fun4408 }
case 29:
                    r0 = r1;
case 32:
                    return r0;
                }
            };
            r0['value'] = r4;
            r1[14] = r0;
            r0 = undefined;
            r0 = r2.bind(r0)(r3, r1);
            return r0;
        };
        r1 = r1.bind(r0)();
        r2['default'] = r1;
        return r0;
    };
    r6 = 352;
    r5 = [1, 12, 13, 20, 346];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun4409: for(var _fun4409_ip = 0; ; ) switch(_fun4409_ip) {
case 0:
            r4 = a1;
            r2 = a5;
            r5 = a6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun4410: for(var _fun4410_ip = 0; ; ) switch(_fun4410_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun4410_ip = 104; continue _fun4410 }
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
                        _fun4411: for(var _fun4411_ip = 0; ; ) switch(_fun4411_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun4411_ip = 15; continue _fun4411 }
case 9:
                            r0 = _closure2_slot0;
                            _fun4411_ip = 19; continue _fun4411;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot7 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot7 = r0;
            r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
                _fun4412: for(var _fun4412_ip = 0; ; ) switch(_fun4412_ip) {
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
                    r0 = _closure1_slot9;
                    r0 = r0.bind(r2)();
                    if(r0) { _fun4412_ip = 61; continue _fun4412 }
case 48:
                    r0 = r8.apply;
                    r0 = r0.bind(r8)(r3, r5);
                    _fun4412_ip = 107; continue _fun4412;
case 61:
                    r6 = global;
                    r7 = r6.Reflect;
                    r6 = r7.construct;
                    if(r5) { _fun4412_ip = 81; continue _fun4412 }
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
            var _closure1_slot8 = r0;
            r0 = function() { // Original name: _isNativeReflectConstruct, environment: r1
                _fun4413: for(var _fun4413_ip = 0; ; ) switch(_fun4413_ip) {
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
                    _fun4413_ip = 74; continue _fun4413;
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
            r0 = function(a0, a1, a2, a3) { // Original name: _superPropGet, environment: r1
                _fun4416: for(var _fun4416_ip = 0; ; ) switch(_fun4416_ip) {
case 0:
                    r4 = a0;
                    r6 = a2;
                    var _closure2_slot0 = r6;
                    r2 = _closure1_slot4;
                    r5 = r2.default;
                    r0 = _closure1_slot3;
                    r3 = r0.default;
                    r0 = 1;
                    r2 = 3;
                    r7 = r0 & r2;
                    r0 = r4;
                    if(!r7) { _fun4416_ip = 54; continue _fun4416 }
case 49:
                    r0 = r4.prototype;
case 54:
                    r4 = undefined;
                    r3 = r3.bind(r4)(r0);
                    r0 = 'setState';
                    r4 = r5.bind(r4)(r3, r0, r6);
                    var _closure2_slot1 = r4;
                    r0 = 2;
                    r2 = r0 & r2;
                    r0 = r4;
                    if(!r2) { _fun4416_ip = 108; continue _fun4416 }
case 89:
                    r3 = 'function';
                    r2 = typeof r4;
                    r0 = r4;
                    if(!(r3 === r2)) { _fun4416_ip = 108; continue _fun4416 }
case 103:
                    r0 = function(a0) { // Environment: r1
                        r3 = _closure2_slot1;
                        r2 = r3.apply;
                        r1 = _closure2_slot0;
                        r0 = a0;
                        r0 = r2.bind(r3)(r1, r0);
                        return r0;
                    };
case 108:
                    return r0;
                }
            };
            var _closure1_slot10 = r0;
            r0 = 0;
            r3 = r5[r0];
            r0 = undefined;
            r6 = r4.bind(r0)(r3);
            r16 = global;
            r9 = r16.Object;
            r8 = r9.defineProperty;
            r7 = {};
            r3 = true;
            r7['value'] = r3;
            r3 = '__esModule';
            r3 = r8.bind(r9)(r2, r3, r7);
            r2['default'] = r0;
            r3 = 1;
            r3 = r5[r3];
            r3 = r4.bind(r0)(r3);
            r3 = r6.bind(r0)(r3);
            var _closure1_slot0 = r3;
            r3 = 2;
            r3 = r5[r3];
            r3 = r4.bind(r0)(r3);
            r3 = r6.bind(r0)(r3);
            var _closure1_slot1 = r3;
            r3 = 3;
            r3 = r5[r3];
            r3 = r4.bind(r0)(r3);
            r3 = r6.bind(r0)(r3);
            var _closure1_slot2 = r3;
            r3 = 4;
            r3 = r5[r3];
            r3 = r4.bind(r0)(r3);
            r3 = r6.bind(r0)(r3);
            var _closure1_slot3 = r3;
            r3 = 5;
            r3 = r5[r3];
            r3 = r4.bind(r0)(r3);
            r3 = r6.bind(r0)(r3);
            var _closure1_slot4 = r3;
            r3 = 6;
            r3 = r5[r3];
            r3 = r4.bind(r0)(r3);
            r3 = r6.bind(r0)(r3);
            var _closure1_slot5 = r3;
            r3 = 7;
            r3 = r5[r3];
            r3 = r4.bind(r0)(r3);
            r3 = r6.bind(r0)(r3);
            var _closure1_slot6 = r3;
            r3 = 8;
            r3 = r5[r3];
            r5 = r4.bind(r0)(r3);
            if(!r5) { _fun4409_ip = 274; continue _fun4409 }
case 260:
            r4 = r5.__esModule;
            r3 = r5;
            if(r4) { _fun4409_ip = 541; continue _fun4409 }
case 274:
            r15 = null;
            if(!(r15 !== r5)) { _fun4409_ip = 532; continue _fun4409 }
case 283:
            r6 = typeof r5;
            r4 = 'object';
            if(!(r4 !== r6)) { _fun4409_ip = 305; continue _fun4409 }
case 294:
            r4 = 'function';
            if(!(r4 === r6)) { _fun4409_ip = 532; continue _fun4409 }
case 305:
            r4 = _closure1_slot7;
            r6 = r4.bind(r0)(r0);
            if(!r6) { _fun4409_ip = 333; continue _fun4409 }
case 317:
            r4 = r6.has;
            r4 = r4.bind(r6)(r5);
            if(r4) { _fun4409_ip = 520; continue _fun4409 }
case 333:
            r4 = Object.create(r15);
            r7 = r16.Object;
            r14 = r7.defineProperty;
            if(!r14) { _fun4409_ip = 361; continue _fun4409 }
case 350:
            r7 = r16.Object;
            r14 = r7.getOwnPropertyDescriptor;
case 361:
            r12 = r5;
            r8 = 'default';
            r7 = undefined;
            for(r9 in r12)
case 378:
            {
case 387:
                r20 = r9;
                if(r8 === r20) { _fun4409_ip = 378; continue _fun4409 }
case 394:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r5, r20);
                if(!r17) { _fun4409_ip = 378; continue _fun4409 }
case 415:
                r17 = null;
                if(!r14) { _fun4409_ip = 437; continue _fun4409 }
case 420:
                r19 = r16.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r5, r20);
case 437:
                if(!r17) { _fun4409_ip = 456; continue _fun4409 }
case 440:
                r18 = r17.get;
                if(r18) { _fun4409_ip = 469; continue _fun4409 }
case 448:
                r18 = r17.set;
                if(r18) { _fun4409_ip = 469; continue _fun4409 }
case 456:
                r18 = r5[r20];
                r4[r20] = r18;
                r7 = r17;
                _fun4409_ip = 378; continue _fun4409;
case 469:
                r19 = r16.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r4, r20, r17);
                r7 = r17;
                _fun4409_ip = 378; continue _fun4409;
            }
case 492:
            r4['default'] = r5;
            r3 = r4;
            if(!r6) { _fun4409_ip = 541; continue _fun4409 }
case 504:
            r7 = r6.set;
            r7 = r7.bind(r6)(r5, r4);
            r3 = r4;
            _fun4409_ip = 541; continue _fun4409;
case 520:
            r4 = r6.get;
            r3 = r4.bind(r6)(r5);
            _fun4409_ip = 541; continue _fun4409;
case 532:
            r4 = {};
            r4['default'] = r5;
            r3 = r4;
case 541:
            r3 = r3.PureComponent;
            r1 = function(a0) { // Environment: r1
                r3 = function(a0) { // Original name: StateSafePureComponent, environment: r5
                    r4 = this;
                    r1 = _closure1_slot0;
                    r1 = r1.default;
                    r3 = _closure2_slot0;
                    r2 = undefined;
                    r1 = r1.bind(r2)(r4, r3);
                    r1 = _closure1_slot8;
                    r0 = new Array(1);
                    r5 = a0;
                    r0[0] = r5;
                    r0 = r1.bind(r2)(r4, r3, r0);
                    r1 = false;
                    r0['_inAsyncStateUpdate'] = r1;
                    r1 = r0._installSetStateHooks;
                    r1 = r1.bind(r0)();
                    return r0;
                };
                var _closure2_slot0 = r3;
                r1 = _closure1_slot5;
                r4 = r1.default;
                r2 = undefined;
                r1 = a0;
                r1 = r4.bind(r2)(r3, r1);
                r0 = _closure1_slot1;
                r1 = r0.default;
                r4 = {};
                r0 = 'setState';
                r4['key'] = r0;
                r0 = function(a0, a1) { // Original name: setState, environment: r5
                    _fun4420: for(var _fun4420_ip = 0; ; ) switch(_fun4420_ip) {
case 0:
                        r5 = a0;
                        r3 = a1;
                        r7 = this;
                        var _closure3_slot0 = r5;
                        var _closure3_slot1 = r7;
                        r1 = typeof r5;
                        r0 = 'function';
                        if(!(r1 !== r0)) { _fun4420_ip = 80; continue _fun4420 }
case 29:
                        r8 = _closure1_slot10;
                        r12 = _closure2_slot0;
                        r2 = undefined;
                        r11 = 'setState';
                        r9 = 3;
                        r13 = undefined;
                        r10 = r7;
                        r1 = r13[r8](r12, r11, r10, r9, r8);
                        r0 = new Array(2);
                        r0[0] = r5;
                        r0[1] = r3;
                        r0 = r1.bind(r2)(r0);
                        _fun4420_ip = 134; continue _fun4420;
case 80:
                        r6 = _closure1_slot10;
                        r12 = _closure2_slot0;
                        r2 = undefined;
                        r11 = 'setState';
                        r9 = 3;
                        r13 = undefined;
                        r10 = r7;
                        r1 = r13[r6](r12, r11, r10, r9, r8);
                        r0 = new Array(2);
                        r4 = function(a0, a1) { // Environment: r4
                            _fun4421: for(var _fun4421_ip = 0; ; ) switch(_fun4421_ip) {
case 0:
                                r3 = a0;
                                r2 = a1;
                                r5 = undefined;
                                r0 = undefined;
                                r6 = _closure3_slot1;
                                r4 = true;
                                r6['_inAsyncStateUpdate'] = r4;
case 25: // try_start_0 // try_start_1
                                r4 = _closure3_slot0;
                                r0 = r4.bind(r5)(r3, r2);
case 35: // try_end0 // try_end1
                                r3 = _closure3_slot1;
                                r2 = false;
                                r3['_inAsyncStateUpdate'] = r2;
                                return r0;
case 49: // try_start_2 // catch_target0
                                CatchBlockStart(arg_register=0);
                                throw r0;
case 53: // try_end2 // catch_target1 // catch_target2
                                CatchBlockStart(arg_register=0);
                                r2 = _closure3_slot1;
                                r1 = false;
                                r2['_inAsyncStateUpdate'] = r1;
                                throw r0;
                            }
                        };
                        r0[0] = r4;
                        r0[1] = r3;
                        r0 = r1.bind(r2)(r0);
case 134:
                        r0 = undefined;
                        return r0;
                    }
                };
                r4['value'] = r0;
                r0 = new Array(2);
                r0[0] = r4;
                r4 = {};
                r6 = '_installSetStateHooks';
                r4['key'] = r6;
                r5 = function() { // Original name: _installSetStateHooks, environment: r5
                    r4 = this;
                    var _closure3_slot0 = r4;
                    r1 = r4.props;
                    var _closure3_slot1 = r1;
                    r1 = r4.state;
                    var _closure3_slot2 = r1;
                    r1 = global;
                    r6 = r1.Object;
                    r5 = r6.defineProperty;
                    r3 = {};
                    r2 = function() { // Original name: get, environment: r0
                        r0 = _closure1_slot6;
                        r4 = r0.default;
                        r1 = _closure3_slot0;
                        r1 = r1._inAsyncStateUpdate;
                        r3 = !r1;
                        r2 = undefined;
                        r1 = '"this.props" should not be accessed during state updates';
                        r1 = r4.bind(r2)(r3, r1);
                        r0 = _closure3_slot1;
                        return r0;
                    };
                    r3['get'] = r2;
                    r2 = function(a0) { // Original name: set, environment: r0
                        r0 = a0;
                        _closure3_slot1 = r0;
                        r0 = undefined;
                        return r0;
                    };
                    r3['set'] = r2;
                    r2 = 'props';
                    r2 = r5.bind(r6)(r4, r2, r3);
                    r3 = r1.Object;
                    r2 = r3.defineProperty;
                    r1 = {};
                    r5 = function() { // Original name: get, environment: r0
                        r0 = _closure1_slot6;
                        r4 = r0.default;
                        r1 = _closure3_slot0;
                        r1 = r1._inAsyncStateUpdate;
                        r3 = !r1;
                        r2 = undefined;
                        r1 = '"this.state" should not be acceessed during state updates';
                        r1 = r4.bind(r2)(r3, r1);
                        r0 = _closure3_slot2;
                        return r0;
                    };
                    r1['get'] = r5;
                    r0 = function(a0) { // Original name: set, environment: r0
                        r0 = a0;
                        _closure3_slot2 = r0;
                        r0 = undefined;
                        return r0;
                    };
                    r1['set'] = r0;
                    r0 = 'state';
                    r0 = r2.bind(r3)(r4, r0, r1);
                    r0 = undefined;
                    return r0;
                };
                r4['value'] = r5;
                r0[1] = r4;
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            };
            r1 = r1.bind(r0)(r3);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 353;
    r5 = [1, 12, 13, 23, 25, 26, 28, 20, 119];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r2 = a5;
        r6 = a6;
        var _closure1_slot0 = r5;
        var _closure1_slot1 = r6;
        r0 = function(a0, a1, a2, a3, a4, a5) { // Original name: _isViewable, environment: r1
            _fun4428: for(var _fun4428_ip = 0; ; ) switch(_fun4428_ip) {
case 0:
                r4 = a2;
                r3 = a3;
                r2 = a4;
                r5 = _closure1_slot7;
                r1 = undefined;
                r5 = r5.bind(r1)(r4, r3, r2);
                if(r5) { _fun4428_ip = 74; continue _fun4428 }
case 28:
                r0 = _closure1_slot6;
                r0 = r0.bind(r1)(r4, r3, r2);
                r1 = a0;
                if(r1) { _fun4428_ip = 54; continue _fun4428 }
case 45:
                r1 = a5;
                r1 = r0 / r1;
                _fun4428_ip = 58; continue _fun4428;
case 54:
                r1 = r0 / r2;
case 58:
                r0 = 100;
                r1 = r0 * r1;
                r0 = a1;
                r0 = r1 >= r0;
                return r0;
case 74:
                r0 = true;
                return r0;
            }
        };
        var _closure1_slot5 = r0;
        r0 = function(a0, a1, a2) { // Original name: _getPixelsVisible, environment: r1
            r0 = global;
            r4 = r0.Math;
            r3 = r4.min;
            r2 = a1;
            r1 = a2;
            r2 = r3.bind(r4)(r2, r1);
            r5 = r0.Math;
            r4 = r5.max;
            r1 = a0;
            r3 = 0;
            r1 = r4.bind(r5)(r1, r3);
            r2 = r2 - r1;
            r1 = r0.Math;
            r0 = r1.max;
            r0 = r0.bind(r1)(r3, r2);
            return r0;
        };
        var _closure1_slot6 = r0;
        r0 = function(a0, a1, a2) { // Original name: _isEntirelyVisible, environment: r1
            _fun4430: for(var _fun4430_ip = 0; ; ) switch(_fun4430_ip) {
case 0:
                r2 = a0;
                r1 = a1;
                r0 = 0;
                r0 = r2 >= r0;
                if(!r0) { _fun4430_ip = 22; continue _fun4430 }
case 15:
                r3 = a2;
                r0 = r1 <= r3;
case 22:
                if(!r0) { _fun4430_ip = 29; continue _fun4430 }
case 25:
                r0 = r1 > r2;
case 29:
                return r0;
            }
        };
        var _closure1_slot7 = r0;
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
        r1 = function() { // Environment: r1
            r3 = function() { // Original name: ViewabilityHelper, environment: r4
                _fun4432: for(var _fun4432_ip = 0; ; ) switch(_fun4432_ip) {
case 0:
                    r2 = this;
                    r0 = undefined;
                    r4 = undefined;
                    r1 = arguments.length;
                    r3 = 0;
                    if(!(r1 > r3)) { _fun4432_ip = 24; continue _fun4432 }
case 16:
                    r1 = arguments[r3];
                    if(!(r1 === r0)) { _fun4432_ip = 33; continue _fun4432 }
case 24:
                    r1 = {};
                    r1['viewAreaCoveragePercentThreshold'] = r3;
                    _fun4432_ip = 37; continue _fun4432;
case 33:
                    r1 = arguments[r3];
case 37:
                    r3 = _closure1_slot3;
                    r4 = r3.default;
                    r3 = _closure2_slot0;
                    r3 = r4.bind(r0)(r2, r3);
                    r3 = false;
                    r2['_hasInteracted'] = r3;
                    r3 = global;
                    r4 = r3.Set;
                    r5 = r4.prototype;
                    r5 = Object.create(r5, {constructor: {value: r4}});
                    r8 = r5;
                    r4 = new r8[r4](r7);
                    r4 = r4 instanceof Object ? r4 : r5;
                    r2['_timers'] = r4;
                    r4 = new Array(0);
                    r2['_viewableIndices'] = r4;
                    r3 = r3.Map;
                    r4 = r3.prototype;
                    r4 = Object.create(r4, {constructor: {value: r3}});
                    r8 = r4;
                    r3 = new r8[r3](r7);
                    r3 = r3 instanceof Object ? r3 : r4;
                    r2['_viewableItems'] = r3;
                    r2['_config'] = r1;
                    return r0;
                }
            };
            var _closure2_slot0 = r3;
            r0 = _closure1_slot4;
            r2 = r0.default;
            r0 = {};
            r1 = 'dispose';
            r0['key'] = r1;
            r1 = function() { // Original name: dispose, environment: r4
                r0 = this;
                r2 = r0._timers;
                r1 = r2.forEach;
                r0 = global;
                r0 = r0.clearTimeout;
                r0 = r1.bind(r2)(r0);
                r0 = undefined;
                return r0;
            };
            r0['value'] = r1;
            r1 = new Array(6);
            r1[0] = r0;
            r0 = {};
            r5 = 'computeViewableItems';
            r0['key'] = r5;
            r5 = function(a0, a1, a2, a3, a4) { // Original name: computeViewableItems, environment: r4
                _fun4434: for(var _fun4434_ip = 0; ; ) switch(_fun4434_ip) {
case 0:
                    r17 = a0;
                    r16 = a1;
                    r15 = a2;
                    r14 = a3;
                    r7 = a4;
                    r1 = r17.getItemCount;
                    r0 = r17.data;
                    r6 = r1.bind(r17)(r0);
                    r0 = this;
                    r0 = r0._config;
                    r3 = r0.itemVisiblePercentThreshold;
                    r4 = r0.viewAreaCoveragePercentThreshold;
                    r0 = null;
                    r13 = r4 != r0;
                    r12 = r3;
                    if(!r13) { _fun4434_ip = 65; continue _fun4434 }
case 62:
                    r12 = r4;
case 65:
                    r2 = _closure1_slot0;
                    r5 = _closure1_slot1;
                    r1 = 5;
                    r1 = r5[r1];
                    r10 = undefined;
                    r2 = r2.bind(r10)(r1);
                    r1 = r12 != r0;
                    if(!r1) { _fun4434_ip = 109; continue _fun4434 }
case 97:
                    r3 = r3 != r0;
                    r0 = r4 != r0;
                    r1 = r3 !== r0;
case 109:
                    r0 = 'Must set exactly one of itemVisiblePercentThreshold or viewAreaCoveragePercentThreshold';
                    r0 = r2.bind(r10)(r1, r0);
                    r0 = new Array(0);
                    r9 = 0;
                    if(!(r6 !== r9)) { _fun4434_ip = 448; continue _fun4434 }
case 132:
                    r1 = r7;
                    if(r1) { _fun4434_ip = 158; continue _fun4434 }
case 138:
                    r2 = {};
                    r2['first'] = r9;
                    r3 = 1;
                    r3 = r6 - r3;
                    r2['last'] = r3;
                    r1 = r2;
case 158:
                    r8 = r1.first;
                    r5 = r1.last;
                    if(!(!(r5 >= r6))) { _fun4434_ip = 387; continue _fun4434 }
case 175:
                    r18 = r8 <= r5;
                    r4 = -1;
                    r3 = global;
                    r2 = undefined;
                    r1 = undefined;
                    if(!r18) { _fun4434_ip = 385; continue _fun4434 }
case 197:
                    r18 = r14.getCellMetrics;
                    r24 = r18.bind(r14)(r8, r17);
                    r25 = r4;
                    r18 = r8;
                    r20 = r2;
                    r19 = r1;
                    r21 = r25;
                    if(!r24) { _fun4434_ip = 366; continue _fun4434 }
case 230:
                    r26 = r3.Math;
                    r23 = r26.floor;
                    r22 = r24.offset;
                    r22 = r22 - r16;
                    r23 = r23.bind(r26)(r22);
                    r27 = r3.Math;
                    r26 = r27.floor;
                    r22 = r24.length;
                    r22 = r23 + r22;
                    r22 = r26.bind(r27)(r22);
                    if(!(r23 < r15)) { _fun4434_ip = 290; continue _fun4434 }
case 286:
                    if(!(!(r22 > r9))) { _fun4434_ip = 305; continue _fun4434 }
case 290:
                    r21 = r25;
                    r20 = r23;
                    r19 = r22;
                    if(!(!(r25 >= r9))) { _fun4434_ip = 385; continue _fun4434 }
case 303:
                    _fun4434_ip = 366; continue _fun4434;
case 305:
                    r25 = _closure1_slot5;
                    r28 = r24.length;
                    r34 = undefined;
                    r33 = r13;
                    r32 = r12;
                    r31 = r23;
                    r30 = r22;
                    r29 = r15;
                    r24 = r34[r25](r33, r32, r31, r30, r29, r28, r27);
                    r21 = r18;
                    r20 = r23;
                    r19 = r22;
                    if(!r24) { _fun4434_ip = 366; continue _fun4434 }
case 347:
                    r24 = r0.push;
                    r24 = r24.bind(r0)(r18);
                    r21 = r18;
                    r20 = r23;
                    r19 = r22;
case 366:
                    r8 = r18 + 1;
                    r4 = r21;
                    r2 = r20;
                    r1 = r19;
                    if(r8 <= r5) { _fun4434_ip = 197; continue _fun4434 }
case 385:
                    return r0;
case 387:
                    r1 = global;
                    r3 = r1.console;
                    r2 = r3.warn;
                    r5 = r1.JSON;
                    r4 = r5.stringify;
                    r1 = {};
                    r1['renderRange'] = r7;
                    r1['itemCount'] = r6;
                    r4 = r4.bind(r5)(r1);
                    r1 = 'Invalid render range computing viewability ';
                    r1 = r1 + r4;
                    r1 = r2.bind(r3)(r1);
                    r1 = new Array(0);
                    return r1;
case 448:
                    return r0;
                }
            };
            r0['value'] = r5;
            r1[1] = r0;
            r0 = {};
            r5 = 'onUpdate';
            r0['key'] = r5;
            r5 = function(a0, a1, a2, a3, a4, a5, a6) { // Original name: onUpdate, environment: r4
                _fun4435: for(var _fun4435_ip = 0; ; ) switch(_fun4435_ip) {
case 0:
                    r6 = a0;
                    r10 = a3;
                    r5 = a4;
                    r4 = a5;
                    r0 = this;
                    var _closure3_slot0 = r6;
                    var _closure3_slot1 = r5;
                    var _closure3_slot2 = r4;
                    var _closure3_slot3 = r0;
                    r3 = r6.getItemCount;
                    r2 = r6.data;
                    r2 = r3.bind(r6)(r2);
                    r3 = r0._config;
                    r3 = r3.waitForInteraction;
                    if(!r3) { _fun4435_ip = 74; continue _fun4435 }
case 62:
                    r3 = r0._hasInteracted;
                    if(!r3) { _fun4435_ip = 299; continue _fun4435 }
case 74:
                    r7 = 0;
                    if(!(r2 !== r7)) { _fun4435_ip = 299; continue _fun4435 }
case 83:
                    r3 = r10.getCellMetrics;
                    r3 = r3.bind(r10)(r7, r6);
                    if(!r3) { _fun4435_ip = 299; continue _fun4435 }
case 101:
                    r3 = new Array(0);
                    var _closure3_slot4 = r3;
                    if(!r2) { _fun4435_ip = 147; continue _fun4435 }
case 112:
                    r9 = r0.computeViewableItems;
                    r14 = a1;
                    r13 = a2;
                    r11 = a6;
                    r16 = r0;
                    r15 = r6;
                    r12 = r10;
                    r2 = r16[r9](r15, r14, r13, r12, r11, r10);
                    _closure3_slot4 = r2;
                    r3 = r2;
case 147:
                    r2 = r0._viewableIndices;
                    r7 = r2.length;
                    r2 = r3.length;
                    if(!(r7 === r2)) { _fun4435_ip = 192; continue _fun4435 }
case 167:
                    r8 = r0._viewableIndices;
                    r7 = r8.every;
                    r2 = function(a0, a1) { // Environment: r1
                        r1 = _closure3_slot4;
                        r0 = a1;
                        r1 = r1[r0];
                        r0 = a0;
                        r0 = r0 === r1;
                        return r0;
                    };
                    r2 = r7.bind(r8)(r2);
                    if(r2) { _fun4435_ip = 295; continue _fun4435 }
case 192:
                    r0['_viewableIndices'] = r3;
                    r2 = r0._config;
                    r2 = r2.minimumViewTime;
                    if(r2) { _fun4435_ip = 239; continue _fun4435 }
case 212:
                    r2 = r0._onUpdateSync;
                    r16 = r0;
                    r15 = r6;
                    r14 = r3;
                    r13 = r4;
                    r12 = r5;
                    r2 = r16[r2](r15, r14, r13, r12, r11);
                    _fun4435_ip = 291; continue _fun4435;
case 239:
                    r2 = global;
                    r5 = r2.setTimeout;
                    r2 = r0._config;
                    r4 = r2.minimumViewTime;
                    r3 = undefined;
                    r2 = function() { // Environment: r1
                        r5 = _closure3_slot3;
                        r3 = r5._timers;
                        r2 = r3.delete;
                        r1 = _closure3_slot5;
                        r1 = r2.bind(r3)(r1);
                        r4 = r5._onUpdateSync;
                        r9 = _closure3_slot0;
                        r8 = _closure3_slot4;
                        r7 = _closure3_slot2;
                        r6 = _closure3_slot1;
                        r10 = r5;
                        r0 = r10[r4](r9, r8, r7, r6, r5);
                        r0 = undefined;
                        return r0;
                    };
                    r2 = r5.bind(r3)(r2, r4);
                    var _closure3_slot5 = r2;
                    r1 = r0._timers;
                    r0 = r1.add;
                    r0 = r0.bind(r1)(r2);
case 291:
                    r0 = undefined;
                    return r0;
case 295:
                    r0 = undefined;
                    return r0;
case 299:
                    r0 = undefined;
                    return r0;
                }
            };
            r0['value'] = r5;
            r1[2] = r0;
            r0 = {};
            r5 = 'resetViewableIndices';
            r0['key'] = r5;
            r5 = function() { // Original name: resetViewableIndices, environment: r4
                r1 = new Array(0);
                r0 = this;
                r0['_viewableIndices'] = r1;
                r0 = undefined;
                return r0;
            };
            r0['value'] = r5;
            r1[3] = r0;
            r0 = {};
            r5 = 'recordInteraction';
            r0['key'] = r5;
            r5 = function() { // Original name: recordInteraction, environment: r4
                r1 = true;
                r0 = this;
                r0['_hasInteracted'] = r1;
                r0 = undefined;
                return r0;
            };
            r0['value'] = r5;
            r1[4] = r0;
            r0 = {};
            r5 = '_onUpdateSync';
            r0['key'] = r5;
            r4 = function(a0, a1, a2, a3) { // Original name: _onUpdateSync, environment: r4
                _fun4440: for(var _fun4440_ip = 0; ; ) switch(_fun4440_ip) {
case 0:
                    r8 = a1;
                    r1 = this;
                    r0 = a0;
                    var _closure3_slot0 = r0;
                    r0 = a3;
                    var _closure3_slot1 = r0;
                    r0 = undefined;
                    r5 = undefined;
                    r2 = undefined;
                    r3 = undefined;
                    r13 = undefined;
                    r12 = undefined;
                    var _closure3_slot2 = r1;
                    r7 = r8.filter;
                    r4 = function(a0) { // Environment: r6
                        r0 = _closure3_slot2;
                        r2 = r0._viewableIndices;
                        r1 = r2.includes;
                        r0 = a0;
                        r0 = r1.bind(r2)(r0);
                        return r0;
                    };
                    r9 = r7.bind(r8)(r4);
                    r5 = r1._viewableItems;
                    r4 = global;
                    r8 = r4.Map;
                    r7 = r9.map;
                    r6 = function(a0) { // Environment: r6
                        r4 = _closure3_slot1;
                        r3 = _closure3_slot0;
                        r2 = undefined;
                        r1 = a0;
                        r0 = true;
                        r1 = r4.bind(r2)(r1, r0, r3);
                        r2 = r1.key;
                        r0 = new Array(2);
                        r0[0] = r2;
                        r0[1] = r1;
                        return r0;
                    };
                    r22 = r7.bind(r9)(r6);
                    r7 = r8.prototype;
                    r7 = Object.create(r7, {constructor: {value: r8}});
                    r23 = r7;
                    r6 = new r23[r8](r22, r21);
                    r6 = r6 instanceof Object ? r6 : r7;
                    r2 = r6;
                    r3 = new Array(0);
                    r7 = r6;
                    r8 = r7[Symbol.iterator];
                    r7 = r8().next;
                    r10 = 2;
                    r6 = 0;
                    r9 = 1;
case 127:
                    r15 = r7().value;
                    r14 = r8;
                    if(!(r14 !== r0)) { _fun4440_ip = 202; continue _fun4440 }
case 138: // try_start_0
                    r14 = _closure1_slot2;
                    r14 = r14.default;
                    r14 = r14.bind(r0)(r15, r10);
                    r16 = r14[r6];
                    r13 = r14[r9];
                    r15 = r5;
                    r14 = r15.has;
                    r14 = r14.bind(r15)(r16);
                    if(r14) { _fun4440_ip = 193; continue _fun4440 }
case 177:
                    r16 = r3;
                    r15 = r16.push;
                    r14 = r13;
                    r14 = r15.bind(r16)(r14);
case 193: // try_end0
                    _fun4440_ip = 127; continue _fun4440;
case 195: // catch_target0
                    CatchBlockStart(arg_register=7);
                    r8.return();
                    throw r7;
case 202:
                    r8 = r5;
                    r7 = r8[Symbol.iterator];
                    r8 = r7().next;
                    r5 = false;
case 210:
                    r14 = r8().value;
                    r13 = r7;
                    if(!(r13 !== r0)) { _fun4440_ip = 312; continue _fun4440 }
case 221: // try_start_1
                    r13 = _closure1_slot2;
                    r13 = r13.default;
                    r13 = r13.bind(r0)(r14, r10);
                    r15 = r13[r6];
                    r12 = r13[r9];
                    r14 = r2;
                    r13 = r14.has;
                    r13 = r13.bind(r14)(r15);
                    if(r13) { _fun4440_ip = 303; continue _fun4440 }
case 260:
                    r15 = r3;
                    r14 = r15.push;
                    r19 = r4.Object;
                    r18 = r19.assign;
                    r17 = r12;
                    r16 = {};
                    r16['isViewable'] = r5;
                    r13 = {};
                    r13 = r18.bind(r19)(r13, r17, r16);
                    r13 = r14.bind(r15)(r13);
case 303: // try_end1
                    _fun4440_ip = 210; continue _fun4440;
case 305: // catch_target1
                    CatchBlockStart(arg_register=5);
                    r7.return();
                    throw r5;
case 312:
                    r5 = r3;
                    r5 = r5.length;
                    if(!(r5 > r6)) { _fun4440_ip = 389; continue _fun4440 }
case 324:
                    r7 = r2;
                    r1['_viewableItems'] = r7;
                    r2 = {};
                    r6 = r4.Array;
                    r5 = r6.from;
                    r4 = r7.values;
                    r4 = r4.bind(r7)();
                    r4 = r5.bind(r6)(r4);
                    r2['viewableItems'] = r4;
                    r2['changed'] = r3;
                    r1 = r1._config;
                    r2['viewabilityConfig'] = r1;
                    r1 = a2;
                    r1 = r1.bind(r0)(r2);
case 389:
                    return r0;
                }
            };
            r0['value'] = r4;
            r1[5] = r0;
            r0 = undefined;
            r0 = r2.bind(r0)(r3, r1);
            return r0;
        };
        r1 = r1.bind(r0)();
        r2['default'] = r1;
        return r0;
    };
    r6 = 354;
    r5 = [1, 38, 12, 13, 352, 20];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun4443: for(var _fun4443_ip = 0; ; ) switch(_fun4443_ip) {
case 0:
            r6 = a1;
            r4 = a5;
            r7 = a6;
            var _closure1_slot0 = r6;
            var _closure1_slot1 = r7;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r2
                _fun4444: for(var _fun4444_ip = 0; ; ) switch(_fun4444_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun4444_ip = 104; continue _fun4444 }
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
                        _fun4445: for(var _fun4445_ip = 0; ; ) switch(_fun4445_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun4445_ip = 15; continue _fun4445 }
case 9:
                            r0 = _closure2_slot0;
                            _fun4445_ip = 19; continue _fun4445;
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
            r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r2
                _fun4446: for(var _fun4446_ip = 0; ; ) switch(_fun4446_ip) {
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
                    r0 = _closure1_slot14;
                    r0 = r0.bind(r2)();
                    if(r0) { _fun4446_ip = 61; continue _fun4446 }
case 48:
                    r0 = r8.apply;
                    r0 = r0.bind(r8)(r3, r5);
                    _fun4446_ip = 107; continue _fun4446;
case 61:
                    r6 = global;
                    r7 = r6.Reflect;
                    r6 = r7.construct;
                    if(r5) { _fun4446_ip = 81; continue _fun4446 }
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
            var _closure1_slot13 = r0;
            r0 = function() { // Original name: _isNativeReflectConstruct, environment: r2
                _fun4447: for(var _fun4447_ip = 0; ; ) switch(_fun4447_ip) {
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
                    _fun4447_ip = 74; continue _fun4447;
case 72: // catch_target0
                    CatchBlockStart(arg_register=1);
case 74:
                    r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                        r0 = _closure2_slot0;
                        r0 = !r0;
                        r0 = !r0;
                        return r0;
                    };
                    _closure1_slot14 = r1;
                    r0 = undefined;
                    r0 = r1.bind(r0)();
                    return r0;
                }
            };
            var _closure1_slot14 = r0;
            r0 = 0;
            r1 = r7[r0];
            r0 = undefined;
            r3 = r6.bind(r0)(r1);
            r18 = global;
            r9 = r18.Object;
            r8 = r9.defineProperty;
            r5 = {};
            r1 = true;
            r5['value'] = r1;
            r1 = '__esModule';
            r1 = r8.bind(r9)(r4, r1, r5);
            r4['default'] = r0;
            r1 = 1;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r1 = r3.bind(r0)(r1);
            var _closure1_slot2 = r1;
            r1 = 2;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r1 = r3.bind(r0)(r1);
            var _closure1_slot3 = r1;
            r1 = 3;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r1 = r3.bind(r0)(r1);
            var _closure1_slot4 = r1;
            r1 = 4;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r1 = r3.bind(r0)(r1);
            var _closure1_slot5 = r1;
            r1 = 5;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r1 = r3.bind(r0)(r1);
            var _closure1_slot6 = r1;
            r1 = 6;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r1 = r3.bind(r0)(r1);
            var _closure1_slot7 = r1;
            r1 = 7;
            r1 = r7[r1];
            r5 = r6.bind(r0)(r1);
            if(!r5) { _fun4443_ip = 252; continue _fun4443 }
case 238:
            r1 = r5.__esModule;
            r3 = r5;
            if(r1) { _fun4443_ip = 519; continue _fun4443 }
case 252:
            r17 = null;
            if(!(r17 !== r5)) { _fun4443_ip = 510; continue _fun4443 }
case 261:
            r8 = typeof r5;
            r1 = 'object';
            if(!(r1 !== r8)) { _fun4443_ip = 283; continue _fun4443 }
case 272:
            r1 = 'function';
            if(!(r1 === r8)) { _fun4443_ip = 510; continue _fun4443 }
case 283:
            r1 = _closure1_slot12;
            r8 = r1.bind(r0)(r0);
            if(!r8) { _fun4443_ip = 311; continue _fun4443 }
case 295:
            r1 = r8.has;
            r1 = r1.bind(r8)(r5);
            if(r1) { _fun4443_ip = 498; continue _fun4443 }
case 311:
            r1 = Object.create(r17);
            r9 = r18.Object;
            r16 = r9.defineProperty;
            if(!r16) { _fun4443_ip = 339; continue _fun4443 }
case 328:
            r9 = r18.Object;
            r16 = r9.getOwnPropertyDescriptor;
case 339:
            r14 = r5;
            r10 = 'default';
            r9 = undefined;
            for(r11 in r14)
case 356:
            {
case 365:
                r22 = r11;
                if(r10 === r22) { _fun4443_ip = 356; continue _fun4443 }
case 372:
                r19 = {};
                r20 = r19.hasOwnProperty;
                r19 = r20.call;
                r19 = r19.bind(r20)(r5, r22);
                if(!r19) { _fun4443_ip = 356; continue _fun4443 }
case 393:
                r19 = null;
                if(!r16) { _fun4443_ip = 415; continue _fun4443 }
case 398:
                r21 = r18.Object;
                r20 = r21.getOwnPropertyDescriptor;
                r19 = r20.bind(r21)(r5, r22);
case 415:
                if(!r19) { _fun4443_ip = 434; continue _fun4443 }
case 418:
                r20 = r19.get;
                if(r20) { _fun4443_ip = 447; continue _fun4443 }
case 426:
                r20 = r19.set;
                if(r20) { _fun4443_ip = 447; continue _fun4443 }
case 434:
                r20 = r5[r22];
                r1[r22] = r20;
                r9 = r19;
                _fun4443_ip = 356; continue _fun4443;
case 447:
                r21 = r18.Object;
                r20 = r21.defineProperty;
                r20 = r20.bind(r21)(r1, r22, r19);
                r9 = r19;
                _fun4443_ip = 356; continue _fun4443;
            }
case 470:
            r1['default'] = r5;
            r3 = r1;
            if(!r8) { _fun4443_ip = 519; continue _fun4443 }
case 482:
            r9 = r8.set;
            r9 = r9.bind(r8)(r5, r1);
            r3 = r1;
            _fun4443_ip = 519; continue _fun4443;
case 498:
            r1 = r8.get;
            r3 = r1.bind(r8)(r5);
            _fun4443_ip = 519; continue _fun4443;
case 510:
            r1 = {};
            r1['default'] = r5;
            r3 = r1;
case 519:
            var _closure1_slot8 = r3;
            r1 = 8;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            var _closure1_slot9 = r1;
            r5 = 9;
            r5 = r7[r5];
            r5 = r6.bind(r0)(r5);
            var _closure1_slot10 = r5;
            r5 = r3.PureComponent;
            r3 = function(a0) { // Environment: r2
                r4 = function() { // Original name: CellRenderer, environment: r0
                    _fun4451: for(var _fun4451_ip = 0; ; ) switch(_fun4451_ip) {
case 0:
                        r5 = this;
                        r4 = undefined;
                        r8 = undefined;
                        r0 = _closure1_slot2;
                        r6 = r0.default;
                        r3 = _closure2_slot0;
                        r3 = r6.bind(r4)(r5, r3);
                        r6 = arguments.length;
                        r3 = global;
                        r3 = r3.Array;
                        r7 = r3.prototype;
                        r7 = Object.create(r7, {constructor: {value: r3}});
                        r13 = r7;
                        r12 = r6;
                        r3 = new r13[r3](r12, r11);
                        r7 = r3 instanceof Object ? r3 : r7;
                        r3 = 0;
                        r9 = r3 < r6;
                        if(!r9) { _fun4451_ip = 91; continue _fun4451 }
case 76:
                        r9 = arguments[r3];
                        r7[r3] = r9;
                        r3 = r3 + 1;
                        if(r3 < r6) { _fun4451_ip = 76; continue _fun4451 }
case 91:
                        r3 = _closure1_slot13;
                        r2 = _closure2_slot0;
                        r6 = new Array(0);
                        r0 = r6.concat;
                        r0 = r0.bind(r6)(r7);
                        r0 = r3.bind(r4)(r5, r2, r0);
                        var _closure3_slot0 = r0;
                        r2 = {};
                        r3 = {};
                        r4 = false;
                        r3['highlighted'] = r4;
                        r4 = r0.props;
                        r4 = r4.item;
                        r3['leadingItem'] = r4;
                        r2['separatorProps'] = r3;
                        r0['state'] = r2;
                        r2 = {};
                        r3 = function() { // Original name: highlight, environment: r1
                            r0 = _closure3_slot0;
                            r0 = r0.props;
                            r4 = r0.cellKey;
                            r0 = r0.prevCellKey;
                            r1 = _closure3_slot0;
                            r3 = r1.props;
                            r2 = r3.onUpdateSeparators;
                            r1 = new Array(2);
                            r1[0] = r4;
                            r1[1] = r0;
                            r0 = {};
                            r4 = true;
                            r0['highlighted'] = r4;
                            r0 = r2.bind(r3)(r1, r0);
                            r0 = undefined;
                            return r0;
                        };
                        r2['highlight'] = r3;
                        r3 = function() { // Original name: unhighlight, environment: r1
                            r0 = _closure3_slot0;
                            r0 = r0.props;
                            r4 = r0.cellKey;
                            r0 = r0.prevCellKey;
                            r1 = _closure3_slot0;
                            r3 = r1.props;
                            r2 = r3.onUpdateSeparators;
                            r1 = new Array(2);
                            r1[0] = r4;
                            r1[1] = r0;
                            r0 = {};
                            r4 = false;
                            r0['highlighted'] = r4;
                            r0 = r2.bind(r3)(r1, r0);
                            r0 = undefined;
                            return r0;
                        };
                        r2['unhighlight'] = r3;
                        r3 = function(a0, a1) { // Original name: updateProps, environment: r1
                            _fun4454: for(var _fun4454_ip = 0; ; ) switch(_fun4454_ip) {
case 0:
                                r0 = _closure3_slot0;
                                r1 = r0.props;
                                r0 = r1.cellKey;
                                r1 = r1.prevCellKey;
                                r2 = _closure3_slot0;
                                r3 = r2.props;
                                r2 = r3.onUpdateSeparators;
                                r5 = a0;
                                r4 = 'leading';
                                if(!(r5 === r4)) { _fun4454_ip = 52; continue _fun4454 }
case 49:
                                r0 = r1;
case 52:
                                r1 = new Array(1);
                                r1[0] = r0;
                                r0 = a1;
                                r0 = r2.bind(r3)(r1, r0);
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r2['updateProps'] = r3;
                        r0['_separators'] = r2;
                        r2 = function(a0) { // Environment: r1
                            _fun4455: for(var _fun4455_ip = 0; ; ) switch(_fun4455_ip) {
case 0:
                                r1 = _closure3_slot0;
                                r1 = r1.props;
                                r2 = r1.onCellLayout;
                                r1 = null;
                                if(!(r2 != r1)) { _fun4455_ip = 77; continue _fun4455 }
case 24:
                                r1 = _closure3_slot0;
                                r4 = r1.props;
                                r3 = r4.onCellLayout;
                                r1 = _closure3_slot0;
                                r1 = r1.props;
                                r2 = r1.cellKey;
                                r0 = _closure3_slot0;
                                r0 = r0.props;
                                r1 = r0.index;
                                r0 = a0;
                                r0 = r3.bind(r4)(r0, r2, r1);
case 77:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['_onLayout'] = r2;
                        r1 = function(a0) { // Environment: r1
                            _fun4456: for(var _fun4456_ip = 0; ; ) switch(_fun4456_ip) {
case 0:
                                r1 = _closure3_slot0;
                                r1 = r1.props;
                                r2 = r1.onCellFocusCapture;
                                r1 = null;
                                if(!(r2 != r1)) { _fun4456_ip = 58; continue _fun4456 }
case 24:
                                r1 = _closure3_slot0;
                                r2 = r1.props;
                                r1 = r2.onCellFocusCapture;
                                r0 = _closure3_slot0;
                                r0 = r0.props;
                                r0 = r0.cellKey;
                                r0 = r1.bind(r2)(r0);
case 58:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['_onCellFocusCapture'] = r1;
                        return r0;
                    }
                };
                var _closure2_slot0 = r4;
                r2 = _closure1_slot6;
                r5 = r2.default;
                r3 = undefined;
                r2 = a0;
                r2 = r5.bind(r3)(r4, r2);
                r1 = _closure1_slot3;
                r2 = r1.default;
                r5 = {};
                r1 = 'updateSeparatorProps';
                r5['key'] = r1;
                r1 = function(a0) { // Original name: updateSeparatorProps, environment: r0
                    r2 = this;
                    r1 = a0;
                    var _closure3_slot0 = r1;
                    r1 = r2.setState;
                    r0 = function(a0) { // Environment: r0
                        r0 = {};
                        r1 = global;
                        r5 = r1.Object;
                        r4 = r5.assign;
                        r1 = a0;
                        r3 = r1.separatorProps;
                        r2 = _closure3_slot0;
                        r1 = {};
                        r1 = r4.bind(r5)(r1, r3, r2);
                        r0['separatorProps'] = r1;
                        return r0;
                    };
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
                };
                r5['value'] = r1;
                r1 = new Array(4);
                r1[0] = r5;
                r5 = {};
                r6 = 'componentWillUnmount';
                r5['key'] = r6;
                r6 = function() { // Original name: componentWillUnmount, environment: r0
                    r0 = this;
                    r2 = r0.props;
                    r1 = r2.onUnmount;
                    r0 = r0.props;
                    r0 = r0.cellKey;
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
                };
                r5['value'] = r6;
                r1[1] = r5;
                r5 = {};
                r6 = '_renderElement';
                r5['key'] = r6;
                r6 = function(a0, a1, a2, a3) { // Original name: _renderElement, environment: r0
                    _fun4460: for(var _fun4460_ip = 0; ; ) switch(_fun4460_ip) {
case 0:
                        r6 = a0;
                        r3 = a1;
                        r5 = a2;
                        r4 = a3;
                        r0 = this;
                        if(!r6) { _fun4460_ip = 42; continue _fun4460 }
case 17:
                        if(!r3) { _fun4460_ip = 42; continue _fun4460 }
case 20:
                        r1 = global;
                        r7 = r1.console;
                        r2 = r7.warn;
                        r1 = 'VirtualizedList: Both ListItemComponent and renderItem props are present. ListItemComponent will take precedence over renderItem.';
                        r1 = r2.bind(r7)(r1);
case 42:
                        if(r3) { _fun4460_ip = 107; continue _fun4460 }
case 45:
                        if(r6) { _fun4460_ip = 76; continue _fun4460 }
case 48:
                        r1 = _closure1_slot7;
                        r8 = r1.default;
                        r1 = undefined;
                        r7 = false;
                        r2 = 'VirtualizedList: Either ListItemComponent or renderItem props are required but none were found.';
                        r2 = r8.bind(r1)(r7, r2);
                        return r1;
case 76:
                        r2 = {};
                        r2['item'] = r5;
                        r2['index'] = r4;
                        r1 = r0._separators;
                        r2['separators'] = r1;
                        r1 = undefined;
                        r1 = r6.bind(r1)(r2);
                        return r1;
case 107:
                        r1 = _closure1_slot10;
                        r2 = r1.jsx;
                        r1 = {};
                        r1['item'] = r5;
                        r1['index'] = r4;
                        r0 = r0._separators;
                        r1['separators'] = r0;
                        r0 = undefined;
                        r0 = r2.bind(r0)(r3, r1);
                        return r0;
                    }
                };
                r5['value'] = r6;
                r1[2] = r5;
                r5 = {};
                r6 = 'render';
                r5['key'] = r6;
                r6 = function() { // Original name: render, environment: r0
                    _fun4461: for(var _fun4461_ip = 0; ; ) switch(_fun4461_ip) {
case 0:
                        r5 = this;
                        r0 = r5.props;
                        r6 = r0.CellRendererComponent;
                        r15 = r0.ItemSeparatorComponent;
                        r22 = r0.ListItemComponent;
                        r14 = r0.cellKey;
                        r2 = r0.horizontal;
                        r10 = r0.item;
                        r13 = r0.index;
                        r4 = r0.inversionStyle;
                        r9 = r0.onCellLayout;
                        r23 = r0.renderItem;
                        r0 = r5._renderElement;
                        r24 = r5;
                        r21 = r10;
                        r20 = r13;
                        r12 = r24[r0](r23, r22, r21, r20, r19);
                        r3 = _closure1_slot8;
                        r1 = r3.isValidElement;
                        r1 = r1.bind(r3)(r15);
                        r11 = r15;
                        if(r1) { _fun4461_ip = 165; continue _fun4461 }
case 107:
                        r1 = r15;
                        if(!r15) { _fun4461_ip = 162; continue _fun4461 }
case 113:
                        r3 = _closure1_slot10;
                        r8 = r3.jsx;
                        r3 = global;
                        r17 = r3.Object;
                        r16 = r17.assign;
                        r3 = r5.state;
                        r7 = r3.separatorProps;
                        r3 = {};
                        r7 = r16.bind(r17)(r3, r7);
                        r3 = undefined;
                        r1 = r8.bind(r3)(r15, r7);
case 162:
                        r11 = r1;
case 165:
                        if(r4) { _fun4461_ip = 201; continue _fun4461 }
case 168:
                        r1 = r4;
                        if(!r2) { _fun4461_ip = 199; continue _fun4461 }
case 174:
                        r3 = _closure1_slot11;
                        r7 = r3.row;
                        r3 = new Array(2);
                        r3[0] = r7;
                        r3[1] = r4;
                        r1 = r3;
case 199:
                        _fun4461_ip = 252; continue _fun4461;
case 201:
                        r3 = _closure1_slot11;
                        if(r2) { _fun4461_ip = 228; continue _fun4461 }
case 208:
                        r7 = r3.columnReverse;
                        r2 = new Array(2);
                        r2[0] = r7;
                        r2[1] = r4;
                        _fun4461_ip = 249; continue _fun4461;
case 228:
                        r7 = r3.rowReverse;
                        r3 = new Array(2);
                        r3[0] = r7;
                        r3[1] = r4;
                        r2 = r3;
case 249:
                        r1 = r2;
case 252:
                        r2 = _closure1_slot10;
                        r3 = r2.jsxs;
                        r2 = global;
                        if(r6) { _fun4461_ip = 359; continue _fun4461 }
case 266:
                        r4 = _closure1_slot9;
                        r8 = r4.View;
                        r17 = r2.Object;
                        r16 = r17.assign;
                        r15 = {};
                        r15['style'] = r1;
                        r4 = r5._onCellFocusCapture;
                        r15['onFocusCapture'] = r4;
                        r7 = r9;
                        if(!r9) { _fun4461_ip = 324; continue _fun4461 }
case 309:
                        r4 = {};
                        r18 = r5._onLayout;
                        r4['onLayout'] = r18;
                        r7 = r4;
case 324:
                        r4 = {};
                        r18 = new Array(2);
                        r18[0] = r12;
                        r18[1] = r11;
                        r4['children'] = r18;
                        r7 = r16.bind(r17)(r15, r7, r4);
                        r4 = undefined;
                        r4 = r3.bind(r4)(r8, r7);
                        _fun4461_ip = 451; continue _fun4461;
case 359:
                        r8 = r2.Object;
                        r7 = r8.assign;
                        r2 = {};
                        r2['cellKey'] = r14;
                        r2['index'] = r13;
                        r2['item'] = r10;
                        r2['style'] = r1;
                        r1 = r5._onCellFocusCapture;
                        r2['onFocusCapture'] = r1;
                        if(!r9) { _fun4461_ip = 418; continue _fun4461 }
case 403:
                        r1 = {};
                        r10 = r5._onLayout;
                        r1['onLayout'] = r10;
                        r9 = r1;
case 418:
                        r1 = {};
                        r10 = new Array(2);
                        r10[0] = r12;
                        r10[1] = r11;
                        r1['children'] = r10;
                        r2 = r7.bind(r8)(r2, r9, r1);
                        r1 = undefined;
                        r4 = r3.bind(r1)(r6, r2);
case 451:
                        r1 = _closure1_slot10;
                        r3 = r1.jsx;
                        r1 = _closure1_slot0;
                        r2 = _closure1_slot1;
                        r0 = 10;
                        r0 = r2[r0];
                        r2 = undefined;
                        r0 = r1.bind(r2)(r0);
                        r1 = r0.VirtualizedListCellContextProvider;
                        r0 = {};
                        r5 = r5.props;
                        r5 = r5.cellKey;
                        r0['cellKey'] = r5;
                        r0['children'] = r4;
                        r0 = r3.bind(r2)(r1, r0);
                        return r0;
                    }
                };
                r5['value'] = r6;
                r1[3] = r5;
                r5 = {};
                r6 = 'getDerivedStateFromProps';
                r5['key'] = r6;
                r0 = function(a0, a1) { // Original name: getDerivedStateFromProps, environment: r0
                    _fun4462: for(var _fun4462_ip = 0; ; ) switch(_fun4462_ip) {
case 0:
                        r1 = a0;
                        r2 = a1;
                        r3 = r1.item;
                        r0 = r2.separatorProps;
                        r0 = r0.leadingItem;
                        if(!(r3 === r0)) { _fun4462_ip = 32; continue _fun4462 }
case 28:
                        r0 = null;
                        return r0;
case 32:
                        r0 = {};
                        r3 = global;
                        r5 = r3.Object;
                        r4 = r5.assign;
                        r3 = r2.separatorProps;
                        r2 = {};
                        r1 = r1.item;
                        r2['leadingItem'] = r1;
                        r1 = {};
                        r1 = r4.bind(r5)(r1, r3, r2);
                        r0['separatorProps'] = r1;
                        return r0;
                    }
                };
                r5['value'] = r0;
                r0 = new Array(1);
                r0[0] = r5;
                r0 = r2.bind(r3)(r4, r1, r0);
                return r0;
            };
            r3 = r3.bind(r0)(r5);
            r4['default'] = r3;
            r4 = r1.StyleSheet;
            r3 = r4.create;
            r1 = {};
            r5 = {};
            r6 = 'row';
            r5['flexDirection'] = r6;
            r1['row'] = r5;
            r5 = {};
            r6 = 'row-reverse';
            r5['flexDirection'] = r6;
            r1['rowReverse'] = r5;
            r5 = {};
            r6 = 'column-reverse';
            r5['flexDirection'] = r6;
            r1['columnReverse'] = r5;
            r1 = r3.bind(r4)(r1);
            var _closure1_slot11 = r1;
            return r0;
        }
    };
    r6 = 355;
    r5 = [1, 12, 13, 23, 25, 28, 20, 119, 2, 251, 356];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun4463: for(var _fun4463_ip = 0; ; ) switch(_fun4463_ip) {
case 0:
            r4 = a1;
            r3 = a5;
            r6 = a6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r2
                _fun4464: for(var _fun4464_ip = 0; ; ) switch(_fun4464_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun4464_ip = 104; continue _fun4464 }
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
                        _fun4465: for(var _fun4465_ip = 0; ; ) switch(_fun4465_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun4465_ip = 15; continue _fun4465 }
case 9:
                            r0 = _closure2_slot0;
                            _fun4465_ip = 19; continue _fun4465;
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
            r18 = global;
            r7 = r18.Object;
            r5 = r7.defineProperty;
            r1 = {};
            r0 = true;
            r1['value'] = r0;
            r0 = '__esModule';
            r0 = r5.bind(r7)(r3, r0, r1);
            r0 = function(a0) { // Original name: VirtualizedListCellContextProvider, environment: r2
                r0 = a0;
                r6 = r0.cellKey;
                var _closure2_slot0 = r6;
                r4 = r0.children;
                r2 = _closure1_slot0;
                r5 = r2.useContext;
                r2 = _closure1_slot2;
                r3 = undefined;
                r7 = r5.bind(r3)(r2);
                var _closure2_slot1 = r7;
                r2 = _closure1_slot0;
                r5 = r2.useMemo;
                r2 = new Array(2);
                r2[0] = r7;
                r2[1] = r6;
                r1 = function() { // Environment: r1
                    _fun4470: for(var _fun4470_ip = 0; ; ) switch(_fun4470_ip) {
case 0:
                        r2 = _closure2_slot1;
                        r0 = null;
                        r2 = r2 == r0;
                        if(r2) { _fun4470_ip = 52; continue _fun4470 }
case 16:
                        r2 = global;
                        r5 = r2.Object;
                        r4 = r5.assign;
                        r3 = _closure2_slot1;
                        r2 = {};
                        r1 = _closure2_slot0;
                        r2['cellKey'] = r1;
                        r1 = {};
                        r0 = r4.bind(r5)(r1, r3, r2);
case 52:
                        return r0;
                    }
                };
                r5 = r5.bind(r3)(r1, r2);
                r1 = _closure1_slot1;
                r2 = r1.jsx;
                r0 = _closure1_slot2;
                r1 = r0.Provider;
                r0 = {};
                r0['value'] = r5;
                r0['children'] = r4;
                r0 = r2.bind(r3)(r1, r0);
                return r0;
            };
            r3['VirtualizedListCellContextProvider'] = r0;
            r0 = undefined;
            r3['VirtualizedListContext'] = r0;
            r1 = function(a0) { // Original name: VirtualizedListContextProvider, environment: r2
                r0 = a0;
                r4 = r0.children;
                r3 = r0.value;
                var _closure2_slot0 = r3;
                r2 = _closure1_slot0;
                r5 = r2.useMemo;
                r6 = r3.getScrollMetrics;
                r2 = new Array(5);
                r2[0] = r6;
                r6 = r3.horizontal;
                r2[1] = r6;
                r6 = r3.getOutermostParentListRef;
                r2[2] = r6;
                r6 = r3.registerAsNestedChild;
                r2[3] = r6;
                r3 = r3.unregisterAsNestedChild;
                r2[4] = r3;
                r3 = undefined;
                r1 = function() { // Environment: r1
                    r0 = {};
                    r1 = null;
                    r0['cellKey'] = r1;
                    r1 = _closure2_slot0;
                    r2 = r1.getScrollMetrics;
                    r0['getScrollMetrics'] = r2;
                    r2 = r1.horizontal;
                    r0['horizontal'] = r2;
                    r2 = r1.getOutermostParentListRef;
                    r0['getOutermostParentListRef'] = r2;
                    r2 = r1.registerAsNestedChild;
                    r0['registerAsNestedChild'] = r2;
                    r1 = r1.unregisterAsNestedChild;
                    r0['unregisterAsNestedChild'] = r1;
                    return r0;
                };
                r5 = r5.bind(r3)(r1, r2);
                r1 = _closure1_slot1;
                r2 = r1.jsx;
                r0 = _closure1_slot2;
                r1 = r0.Provider;
                r0 = {};
                r0['value'] = r5;
                r0['children'] = r4;
                r0 = r2.bind(r3)(r1, r0);
                return r0;
            };
            r3['VirtualizedListContextProvider'] = r1;
            r1 = function(a0) { // Original name: VirtualizedListContextResetter, environment: r2
                r0 = a0;
                r0 = r0.children;
                r2 = _closure1_slot1;
                r3 = r2.jsx;
                r1 = _closure1_slot2;
                r2 = r1.Provider;
                r1 = {};
                r4 = null;
                r1['value'] = r4;
                r1['children'] = r0;
                r0 = undefined;
                r0 = r3.bind(r0)(r2, r1);
                return r0;
            };
            r3['VirtualizedListContextResetter'] = r1;
            r1 = 0;
            r1 = r6[r1];
            r7 = r4.bind(r0)(r1);
            if(!r7) { _fun4463_ip = 121; continue _fun4463 }
case 107:
            r1 = r7.__esModule;
            r5 = r7;
            if(r1) { _fun4463_ip = 388; continue _fun4463 }
case 121:
            r17 = null;
            if(!(r17 !== r7)) { _fun4463_ip = 379; continue _fun4463 }
case 130:
            r8 = typeof r7;
            r1 = 'object';
            if(!(r1 !== r8)) { _fun4463_ip = 152; continue _fun4463 }
case 141:
            r1 = 'function';
            if(!(r1 === r8)) { _fun4463_ip = 379; continue _fun4463 }
case 152:
            r1 = _closure1_slot3;
            r8 = r1.bind(r0)(r0);
            if(!r8) { _fun4463_ip = 180; continue _fun4463 }
case 164:
            r1 = r8.has;
            r1 = r1.bind(r8)(r7);
            if(r1) { _fun4463_ip = 367; continue _fun4463 }
case 180:
            r1 = Object.create(r17);
            r9 = r18.Object;
            r16 = r9.defineProperty;
            if(!r16) { _fun4463_ip = 208; continue _fun4463 }
case 197:
            r9 = r18.Object;
            r16 = r9.getOwnPropertyDescriptor;
case 208:
            r14 = r7;
            r10 = 'default';
            r9 = undefined;
            for(r11 in r14)
case 225:
            {
case 234:
                r22 = r11;
                if(r10 === r22) { _fun4463_ip = 225; continue _fun4463 }
case 241:
                r19 = {};
                r20 = r19.hasOwnProperty;
                r19 = r20.call;
                r19 = r19.bind(r20)(r7, r22);
                if(!r19) { _fun4463_ip = 225; continue _fun4463 }
case 262:
                r19 = null;
                if(!r16) { _fun4463_ip = 284; continue _fun4463 }
case 267:
                r21 = r18.Object;
                r20 = r21.getOwnPropertyDescriptor;
                r19 = r20.bind(r21)(r7, r22);
case 284:
                if(!r19) { _fun4463_ip = 303; continue _fun4463 }
case 287:
                r20 = r19.get;
                if(r20) { _fun4463_ip = 316; continue _fun4463 }
case 295:
                r20 = r19.set;
                if(r20) { _fun4463_ip = 316; continue _fun4463 }
case 303:
                r20 = r7[r22];
                r1[r22] = r20;
                r9 = r19;
                _fun4463_ip = 225; continue _fun4463;
case 316:
                r21 = r18.Object;
                r20 = r21.defineProperty;
                r20 = r20.bind(r21)(r1, r22, r19);
                r9 = r19;
                _fun4463_ip = 225; continue _fun4463;
            }
case 339:
            r1['default'] = r7;
            r5 = r1;
            if(!r8) { _fun4463_ip = 388; continue _fun4463 }
case 351:
            r9 = r8.set;
            r9 = r9.bind(r8)(r7, r1);
            r5 = r1;
            _fun4463_ip = 388; continue _fun4463;
case 367:
            r1 = r8.get;
            r5 = r1.bind(r8)(r7);
            _fun4463_ip = 388; continue _fun4463;
case 379:
            r1 = {};
            r1['default'] = r7;
            r5 = r1;
case 388:
            var _closure1_slot0 = r5;
            r1 = 1;
            r1 = r6[r1];
            r1 = r4.bind(r0)(r1);
            var _closure1_slot1 = r1;
            r4 = r5.createContext;
            r1 = null;
            r1 = r4.bind(r5)(r1);
            r3['VirtualizedListContext'] = r1;
            var _closure1_slot2 = r1;
            return r0;
        }
    };
    r6 = 356;
    r5 = [119, 251];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun4471: for(var _fun4471_ip = 0; ; ) switch(_fun4471_ip) {
case 0:
            r2 = a5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun4472: for(var _fun4472_ip = 0; ; ) switch(_fun4472_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun4472_ip = 104; continue _fun4472 }
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
                        _fun4473: for(var _fun4473_ip = 0; ; ) switch(_fun4473_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun4473_ip = 15; continue _fun4473 }
case 9:
                            r0 = _closure2_slot0;
                            _fun4473_ip = 19; continue _fun4473;
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
            r13 = global;
            r5 = r13.Object;
            r4 = r5.defineProperty;
            r3 = {};
            r0 = true;
            r3['value'] = r0;
            r0 = '__esModule';
            r0 = r4.bind(r5)(r2, r0, r3);
            r0 = function(a0) { // Original name: horizontalOrDefault, environment: r1
                _fun4474: for(var _fun4474_ip = 0; ; ) switch(_fun4474_ip) {
case 0:
                    r1 = a0;
                    r0 = null;
                    r2 = r1 != r0;
                    r0 = false;
                    if(!r2) { _fun4474_ip = 17; continue _fun4474 }
case 14:
                    r0 = r1;
case 17:
                    return r0;
                }
            };
            r2['horizontalOrDefault'] = r0;
            r0 = function(a0) { // Original name: initialNumToRenderOrDefault, environment: r1
                _fun4475: for(var _fun4475_ip = 0; ; ) switch(_fun4475_ip) {
case 0:
                    r1 = a0;
                    r0 = null;
                    r2 = r1 != r0;
                    r0 = 10;
                    if(!r2) { _fun4475_ip = 18; continue _fun4475 }
case 15:
                    r0 = r1;
case 18:
                    return r0;
                }
            };
            r2['initialNumToRenderOrDefault'] = r0;
            r0 = function(a0) { // Original name: maxToRenderPerBatchOrDefault, environment: r1
                _fun4476: for(var _fun4476_ip = 0; ; ) switch(_fun4476_ip) {
case 0:
                    r1 = a0;
                    r0 = null;
                    r2 = r1 != r0;
                    r0 = 10;
                    if(!r2) { _fun4476_ip = 18; continue _fun4476 }
case 15:
                    r0 = r1;
case 18:
                    return r0;
                }
            };
            r2['maxToRenderPerBatchOrDefault'] = r0;
            r0 = function(a0) { // Original name: onEndReachedThresholdOrDefault, environment: r1
                _fun4478: for(var _fun4478_ip = 0; ; ) switch(_fun4478_ip) {
case 0:
                    r1 = a0;
                    r0 = null;
                    r2 = r1 != r0;
                    r0 = 2;
                    if(!r2) { _fun4478_ip = 18; continue _fun4478 }
case 15:
                    r0 = r1;
case 18:
                    return r0;
                }
            };
            r2['onEndReachedThresholdOrDefault'] = r0;
            r0 = function(a0) { // Original name: onStartReachedThresholdOrDefault, environment: r1
                _fun4477: for(var _fun4477_ip = 0; ; ) switch(_fun4477_ip) {
case 0:
                    r1 = a0;
                    r0 = null;
                    r2 = r1 != r0;
                    r0 = 2;
                    if(!r2) { _fun4477_ip = 18; continue _fun4477 }
case 15:
                    r0 = r1;
case 18:
                    return r0;
                }
            };
            r2['onStartReachedThresholdOrDefault'] = r0;
            r0 = function(a0) { // Original name: windowSizeOrDefault, environment: r1
                _fun4479: for(var _fun4479_ip = 0; ; ) switch(_fun4479_ip) {
case 0:
                    r1 = a0;
                    r0 = null;
                    r2 = r1 != r0;
                    r0 = 21;
                    if(!r2) { _fun4479_ip = 18; continue _fun4479 }
case 15:
                    r0 = r1;
case 18:
                    return r0;
                }
            };
            r2['windowSizeOrDefault'] = r0;
            r2 = a6;
            r0 = 0;
            r3 = r2[r0];
            r2 = a1;
            r0 = undefined;
            r2 = r2.bind(r0)(r3);
            if(!r2) { _fun4471_ip = 145; continue _fun4471 }
case 134:
            r3 = r2.__esModule;
            if(r3) { _fun4471_ip = 403; continue _fun4471 }
case 145:
            r12 = null;
            if(!(r12 !== r2)) { _fun4471_ip = 397; continue _fun4471 }
case 154:
            r4 = typeof r2;
            r3 = 'object';
            if(!(r3 !== r4)) { _fun4471_ip = 176; continue _fun4471 }
case 165:
            r3 = 'function';
            if(!(r3 === r4)) { _fun4471_ip = 397; continue _fun4471 }
case 176:
            r1 = _closure1_slot0;
            r3 = r1.bind(r0)(r0);
            if(!r3) { _fun4471_ip = 204; continue _fun4471 }
case 188:
            r1 = r3.has;
            r1 = r1.bind(r3)(r2);
            if(r1) { _fun4471_ip = 385; continue _fun4471 }
case 204:
            r4 = Object.create(r12);
            r1 = r13.Object;
            r11 = r1.defineProperty;
            if(!r11) { _fun4471_ip = 232; continue _fun4471 }
case 221:
            r1 = r13.Object;
            r11 = r1.getOwnPropertyDescriptor;
case 232:
            r9 = r2;
            r5 = 'default';
            r1 = undefined;
            for(r6 in r9)
case 249:
            {
case 258:
                r17 = r6;
                if(r5 === r17) { _fun4471_ip = 249; continue _fun4471 }
case 265:
                r14 = {};
                r15 = r14.hasOwnProperty;
                r14 = r15.call;
                r14 = r14.bind(r15)(r2, r17);
                if(!r14) { _fun4471_ip = 249; continue _fun4471 }
case 286:
                r14 = null;
                if(!r11) { _fun4471_ip = 308; continue _fun4471 }
case 291:
                r16 = r13.Object;
                r15 = r16.getOwnPropertyDescriptor;
                r14 = r15.bind(r16)(r2, r17);
case 308:
                if(!r14) { _fun4471_ip = 327; continue _fun4471 }
case 311:
                r15 = r14.get;
                if(r15) { _fun4471_ip = 340; continue _fun4471 }
case 319:
                r15 = r14.set;
                if(r15) { _fun4471_ip = 340; continue _fun4471 }
case 327:
                r15 = r2[r17];
                r4[r17] = r15;
                r1 = r14;
                _fun4471_ip = 249; continue _fun4471;
case 340:
                r16 = r13.Object;
                r15 = r16.defineProperty;
                r15 = r15.bind(r16)(r4, r17, r14);
                r1 = r14;
                _fun4471_ip = 249; continue _fun4471;
            }
case 363:
            r4['default'] = r2;
            if(!r3) { _fun4471_ip = 403; continue _fun4471 }
case 372:
            r1 = r3.set;
            r1 = r1.bind(r3)(r2, r4);
            _fun4471_ip = 403; continue _fun4471;
case 385:
            r1 = r3.get;
            r1 = r1.bind(r3)(r2);
            _fun4471_ip = 403; continue _fun4471;
case 397:
            r1 = {};
            r1['default'] = r2;
case 403:
            return r0;
        }
    };
    r6 = 357;
    r5 = [119];
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
        r2['CellRenderMask'] = r0;
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
        r1 = function() { // Environment: r1
            r3 = function(a0) { // Original name: CellRenderMask, environment: r4
                _fun4482: for(var _fun4482_ip = 0; ; ) switch(_fun4482_ip) {
case 0:
                    r4 = a0;
                    r2 = this;
                    r0 = _closure1_slot2;
                    r5 = r0.default;
                    r3 = _closure2_slot0;
                    r0 = undefined;
                    r3 = r5.bind(r0)(r2, r3);
                    r1 = _closure1_slot4;
                    r6 = r1.default;
                    r1 = 0;
                    r5 = r4 >= r1;
                    r3 = 'CellRenderMask must contain a non-negative number os cells';
                    r3 = r6.bind(r0)(r5, r3);
                    r2['_numCells'] = r4;
                    if(!(r4 !== r1)) { _fun4482_ip = 106; continue _fun4482 }
case 67:
                    r3 = {'first': 0, 'last': null, 'isSpacer': true};
                    r1 = 1;
                    r1 = r4 - r1;
                    r3['last'] = r1;
                    r1 = new Array(1);
                    r1[0] = r3;
                    r2['_regions'] = r1;
                    _fun4482_ip = 116; continue _fun4482;
case 106:
                    r1 = new Array(0);
                    r2['_regions'] = r1;
case 116:
                    return r0;
                }
            };
            var _closure2_slot0 = r3;
            r0 = _closure1_slot3;
            r2 = r0.default;
            r0 = {};
            r1 = 'enumerateRegions';
            r0['key'] = r1;
            r1 = function() { // Original name: enumerateRegions, environment: r4
                r0 = this;
                r0 = r0._regions;
                return r0;
            };
            r0['value'] = r1;
            r1 = new Array(5);
            r1[0] = r0;
            r0 = {};
            r5 = 'addCells';
            r0['key'] = r5;
            r5 = function(a0) { // Original name: addCells, environment: r4
                _fun4484: for(var _fun4484_ip = 0; ; ) switch(_fun4484_ip) {
case 0:
                    r14 = a0;
                    r2 = this;
                    r0 = _closure1_slot4;
                    r6 = r0.default;
                    r0 = r14.first;
                    r5 = 0;
                    r4 = r0 >= r5;
                    if(!r4) { _fun4484_ip = 46; continue _fun4484 }
case 31:
                    r3 = r14.first;
                    r0 = r2._numCells;
                    r4 = r3 < r0;
case 46:
                    if(!r4) { _fun4484_ip = 64; continue _fun4484 }
case 49:
                    r3 = r14.last;
                    r0 = -1;
                    r4 = r3 >= r0;
case 64:
                    if(!r4) { _fun4484_ip = 82; continue _fun4484 }
case 67:
                    r3 = r14.last;
                    r0 = r2._numCells;
                    r4 = r3 < r0;
case 82:
                    if(!r4) { _fun4484_ip = 106; continue _fun4484 }
case 85:
                    r3 = r14.last;
                    r7 = r14.first;
                    r0 = 1;
                    r0 = r7 - r0;
                    r4 = r3 >= r0;
case 106:
                    r0 = undefined;
                    r3 = 'CellRenderMask.addCells called with invalid cell range';
                    r3 = r6.bind(r0)(r4, r3);
                    r4 = r14.last;
                    r3 = r14.first;
                    if(!(!(r4 < r3))) { _fun4484_ip = 516; continue _fun4484 }
case 135:
                    r4 = r2._findRegion;
                    r3 = r14.first;
                    r6 = r4.bind(r2)(r3);
                    r3 = _closure1_slot1;
                    r4 = r3.default;
                    r7 = 2;
                    r6 = r4.bind(r0)(r6, r7);
                    r12 = r6[r5];
                    r4 = 1;
                    r8 = r6[r4];
                    r9 = r2._findRegion;
                    r6 = r14.last;
                    r6 = r9.bind(r2)(r6);
                    r3 = r3.default;
                    r3 = r3.bind(r0)(r6, r7);
                    r7 = r3[r5];
                    r3 = r3[r4];
                    if(!(r8 === r3)) { _fun4484_ip = 230; continue _fun4484 }
case 219:
                    r5 = r12.isSpacer;
                    if(r5) { _fun4484_ip = 230; continue _fun4484 }
case 228:
                    return r0;
case 230:
                    r10 = new Array(0);
                    r9 = new Array(0);
                    r5 = global;
                    r13 = r5.Object;
                    r11 = r13.assign;
                    r6 = {};
                    r5 = false;
                    r6['isSpacer'] = r5;
                    r5 = {};
                    r11 = r11.bind(r13)(r5, r14, r6);
                    r6 = r12.first;
                    r5 = r11.first;
                    if(!(r6 < r5)) { _fun4484_ip = 346; continue _fun4484 }
case 283:
                    r5 = r12.isSpacer;
                    if(r5) { _fun4484_ip = 305; continue _fun4484 }
case 292:
                    r5 = r12.first;
                    r11['first'] = r5;
                    _fun4484_ip = 346; continue _fun4484;
case 305:
                    r6 = r10.push;
                    r5 = {};
                    r12 = r12.first;
                    r5['first'] = r12;
                    r12 = r11.first;
                    r12 = r12 - r4;
                    r5['last'] = r12;
                    r12 = true;
                    r5['isSpacer'] = r12;
                    r5 = r6.bind(r10)(r5);
case 346:
                    r6 = r7.last;
                    r5 = r11.last;
                    if(!(r6 > r5)) { _fun4484_ip = 423; continue _fun4484 }
case 360:
                    r5 = r7.isSpacer;
                    if(r5) { _fun4484_ip = 382; continue _fun4484 }
case 369:
                    r5 = r7.last;
                    r11['last'] = r5;
                    _fun4484_ip = 423; continue _fun4484;
case 382:
                    r6 = r9.push;
                    r5 = {};
                    r12 = r11.last;
                    r12 = r12 + r4;
                    r5['first'] = r12;
                    r7 = r7.last;
                    r5['last'] = r7;
                    r7 = true;
                    r5['isSpacer'] = r7;
                    r5 = r6.bind(r9)(r5);
case 423:
                    r7 = new Array(0);
                    r6 = r7.concat;
                    r5 = new Array(1);
                    r5[0] = r11;
                    r7 = r6.bind(r7)(r10, r5, r9);
                    r3 = r3 - r8;
                    r5 = r3 + r4;
                    r4 = r2._regions;
                    r3 = r4.splice;
                    r2 = r3.apply;
                    r6 = new Array(2);
                    r6[0] = r8;
                    r6[1] = r5;
                    r5 = r6.concat;
                    r1 = _closure1_slot0;
                    r1 = r1.default;
                    r1 = r1.bind(r0)(r7);
                    r1 = r5.bind(r6)(r1);
                    r1 = r2.bind(r3)(r4, r1);
                    return r0;
case 516:
                    return r0;
                }
            };
            r0['value'] = r5;
            r1[1] = r0;
            r0 = {};
            r5 = 'numCells';
            r0['key'] = r5;
            r5 = function() { // Original name: numCells, environment: r4
                r0 = this;
                r0 = r0._numCells;
                return r0;
            };
            r0['value'] = r5;
            r1[2] = r0;
            r0 = {};
            r5 = 'equals';
            r0['key'] = r5;
            r5 = function(a0) { // Original name: equals, environment: r4
                _fun4486: for(var _fun4486_ip = 0; ; ) switch(_fun4486_ip) {
case 0:
                    r3 = a0;
                    r2 = this;
                    var _closure3_slot0 = r3;
                    r4 = r2._numCells;
                    r0 = r3._numCells;
                    r0 = r4 === r0;
                    if(!r0) { _fun4486_ip = 56; continue _fun4486 }
case 30:
                    r4 = r2._regions;
                    r4 = r4.length;
                    r3 = r3._regions;
                    r3 = r3.length;
                    r0 = r4 === r3;
case 56:
                    if(!r0) { _fun4486_ip = 81; continue _fun4486 }
case 59:
                    r3 = r2._regions;
                    r2 = r3.every;
                    r1 = function(a0, a1) { // Environment: r1
                        _fun4487: for(var _fun4487_ip = 0; ; ) switch(_fun4487_ip) {
case 0:
                            r2 = a0;
                            r3 = a1;
                            r4 = r2.first;
                            r0 = _closure3_slot0;
                            r0 = r0._regions;
                            r0 = r0[r3];
                            r0 = r0.first;
                            r0 = r4 === r0;
                            if(!r0) { _fun4487_ip = 68; continue _fun4487 }
case 40:
                            r5 = r2.last;
                            r4 = _closure3_slot0;
                            r4 = r4._regions;
                            r4 = r4[r3];
                            r4 = r4.last;
                            r0 = r5 === r4;
case 68:
                            if(!r0) { _fun4487_ip = 101; continue _fun4487 }
case 71:
                            r2 = r2.isSpacer;
                            r1 = _closure3_slot0;
                            r1 = r1._regions;
                            r1 = r1[r3];
                            r1 = r1.isSpacer;
                            r0 = r2 === r1;
case 101:
                            return r0;
                        }
                    };
                    r0 = r2.bind(r3)(r1);
case 81:
                    return r0;
                }
            };
            r0['value'] = r5;
            r1[3] = r0;
            r0 = {};
            r5 = '_findRegion';
            r0['key'] = r5;
            r4 = function(a0) { // Original name: _findRegion, environment: r4
                _fun4488: for(var _fun4488_ip = 0; ; ) switch(_fun4488_ip) {
case 0:
                    r4 = a0;
                    r8 = this;
                    r0 = r8._regions;
                    r0 = r0.length;
                    r7 = 1;
                    r6 = r0 - r7;
                    r0 = global;
                    r3 = 2;
                    r5 = 0;
                    if(!(r5 <= r6)) { _fun4488_ip = 143; continue _fun4488 }
case 34:
                    r9 = r0.Math;
                    r2 = r9.floor;
                    r1 = r5 + r6;
                    r1 = r1 / r3;
                    r1 = r2.bind(r9)(r1);
                    r2 = r8._regions;
                    r2 = r2[r1];
                    r9 = r2.first;
                    r12 = r5;
                    r11 = r6;
                    if(!(r4 >= r9)) { _fun4488_ip = 93; continue _fun4488 }
case 84:
                    r9 = r2.last;
                    if(!(!(r4 <= r9))) { _fun4488_ip = 187; continue _fun4488 }
case 93:
                    r9 = r2.first;
                    if(!(!(r4 < r9))) { _fun4488_ip = 126; continue _fun4488 }
case 102:
                    r13 = r2.last;
                    r10 = r12;
                    r9 = r11;
                    if(!(r4 > r13)) { _fun4488_ip = 133; continue _fun4488 }
case 117:
                    r10 = r1 + r7;
                    r9 = r11;
                    _fun4488_ip = 133; continue _fun4488;
case 126:
                    r9 = r1 - r7;
                    r10 = r12;
case 133:
                    r5 = r10;
                    r6 = r9;
                    if(r5 <= r6) { _fun4488_ip = 34; continue _fun4488 }
case 143:
                    r3 = _closure1_slot4;
                    r5 = r3.default;
                    r0 = r0.HermesInternal;
                    r3 = r0.concat;
                    r0 = 'A region was not found containing cellIdx ';
                    r4 = r3.bind(r0)(r4);
                    r0 = undefined;
                    r3 = false;
                    r3 = r5.bind(r0)(r3, r4);
                    return r0;
case 187:
                    r0 = new Array(2);
                    r0[0] = r2;
                    r0[1] = r1;
                    return r0;
                }
            };
            r0['value'] = r4;
            r1[4] = r0;
            r0 = undefined;
            r0 = r2.bind(r0)(r3, r1);
            return r0;
        };
        r1 = r1.bind(r0)();
        r2['CellRenderMask'] = r1;
        return r0;
    };
    r6 = 358;
    r5 = [1, 6, 38, 12, 13, 20];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun4489: for(var _fun4489_ip = 0; ; ) switch(_fun4489_ip) {
case 0:
            r5 = a1;
            r2 = a5;
            r6 = a6;
            var _closure1_slot0 = r5;
            var _closure1_slot1 = r6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun4490: for(var _fun4490_ip = 0; ; ) switch(_fun4490_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun4490_ip = 104; continue _fun4490 }
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
                        _fun4491: for(var _fun4491_ip = 0; ; ) switch(_fun4491_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun4491_ip = 15; continue _fun4491 }
case 9:
                            r0 = _closure2_slot0;
                            _fun4491_ip = 19; continue _fun4491;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot14 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot14 = r0;
            r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
                _fun4492: for(var _fun4492_ip = 0; ; ) switch(_fun4492_ip) {
case 0:
                    r3 = a0;
                    r5 = a2;
                    r0 = _closure1_slot7;
                    r1 = r0.default;
                    r2 = undefined;
                    r0 = a1;
                    r8 = r1.bind(r2)(r0);
                    r0 = _closure1_slot6;
                    r1 = r0.default;
                    r0 = _closure1_slot16;
                    r0 = r0.bind(r2)();
                    if(r0) { _fun4492_ip = 61; continue _fun4492 }
case 48:
                    r0 = r8.apply;
                    r0 = r0.bind(r8)(r3, r5);
                    _fun4492_ip = 107; continue _fun4492;
case 61:
                    r6 = global;
                    r7 = r6.Reflect;
                    r6 = r7.construct;
                    if(r5) { _fun4492_ip = 81; continue _fun4492 }
case 77:
                    r5 = new Array(0);
case 81:
                    r4 = _closure1_slot7;
                    r4 = r4.default;
                    r4 = r4.bind(r2)(r3);
                    r4 = r4.constructor;
                    r0 = r6.bind(r7)(r8, r5, r4);
case 107:
                    r0 = r1.bind(r2)(r3, r0);
                    return r0;
                }
            };
            var _closure1_slot15 = r0;
            r0 = function() { // Original name: _isNativeReflectConstruct, environment: r1
                _fun4493: for(var _fun4493_ip = 0; ; ) switch(_fun4493_ip) {
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
                    _fun4493_ip = 74; continue _fun4493;
case 72: // catch_target0
                    CatchBlockStart(arg_register=1);
case 74:
                    r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                        r0 = _closure2_slot0;
                        r0 = !r0;
                        r0 = !r0;
                        return r0;
                    };
                    _closure1_slot16 = r1;
                    r0 = undefined;
                    r0 = r1.bind(r0)();
                    return r0;
                }
            };
            var _closure1_slot16 = r0;
            r0 = function(a0) { // Original name: ItemWithSeparator, environment: r1
                _fun4496: for(var _fun4496_ip = 0; ; ) switch(_fun4496_ip) {
case 0:
                    r6 = a0;
                    r9 = r6.LeadingSeparatorComponent;
                    var _closure2_slot0 = r9;
                    r10 = r6.SeparatorComponent;
                    var _closure2_slot1 = r10;
                    r21 = r6.cellKey;
                    var _closure2_slot2 = r21;
                    r0 = r6.prevCellKey;
                    var _closure2_slot3 = r0;
                    r20 = r6.setSelfHighlightCallback;
                    var _closure2_slot4 = r20;
                    r0 = r6.updateHighlightFor;
                    var _closure2_slot5 = r0;
                    r5 = r6.setSelfUpdatePropsCallback;
                    var _closure2_slot6 = r5;
                    r0 = r6.updatePropsFor;
                    var _closure2_slot7 = r0;
                    r12 = r6.item;
                    r11 = r6.index;
                    r8 = r6.section;
                    r4 = r6.inverted;
                    r7 = _closure1_slot11;
                    r3 = r7.useState;
                    r2 = false;
                    r13 = r3.bind(r7)(r2);
                    r3 = _closure1_slot2;
                    r7 = r3.default;
                    r3 = undefined;
                    r19 = 2;
                    r7 = r7.bind(r3)(r13, r19);
                    r13 = 0;
                    r16 = r7[r13];
                    r17 = 1;
                    r7 = r7[r17];
                    var _closure2_slot8 = r7;
                    r14 = _closure1_slot11;
                    r7 = r14.useState;
                    r14 = r7.bind(r14)(r2);
                    r7 = _closure1_slot2;
                    r7 = r7.default;
                    r7 = r7.bind(r3)(r14, r19);
                    r14 = r7[r13];
                    r7 = r7[r17];
                    var _closure2_slot9 = r7;
                    r18 = _closure1_slot11;
                    r15 = r18.useState;
                    r7 = {};
                    r22 = r6.leadingItem;
                    r7['leadingItem'] = r22;
                    r22 = r6.leadingSection;
                    r7['leadingSection'] = r22;
                    r22 = r6.section;
                    r7['section'] = r22;
                    r22 = r6.item;
                    r7['trailingItem'] = r22;
                    r22 = r6.trailingSection;
                    r7['trailingSection'] = r22;
                    r15 = r15.bind(r18)(r7);
                    r7 = _closure1_slot2;
                    r7 = r7.default;
                    r7 = r7.bind(r3)(r15, r19);
                    r15 = r7[r13];
                    var _closure2_slot10 = r15;
                    r7 = r7[r17];
                    var _closure2_slot11 = r7;
                    r22 = _closure1_slot11;
                    r18 = r22.useState;
                    r7 = {};
                    r23 = r6.item;
                    r7['leadingItem'] = r23;
                    r23 = r6.leadingSection;
                    r7['leadingSection'] = r23;
                    r23 = r6.section;
                    r7['section'] = r23;
                    r23 = r6.trailingItem;
                    r7['trailingItem'] = r23;
                    r23 = r6.trailingSection;
                    r7['trailingSection'] = r23;
                    r18 = r18.bind(r22)(r7);
                    r7 = _closure1_slot2;
                    r7 = r7.default;
                    r7 = r7.bind(r3)(r18, r19);
                    r13 = r7[r13];
                    var _closure2_slot12 = r13;
                    r19 = r7[r17];
                    var _closure2_slot13 = r19;
                    r18 = _closure1_slot11;
                    r17 = r18.useEffect;
                    r7 = new Array(4);
                    r7[0] = r21;
                    r7[1] = r20;
                    r7[2] = r19;
                    r7[3] = r5;
                    r5 = function() { // Environment: r1
                        r4 = _closure2_slot4;
                        r3 = _closure2_slot2;
                        r1 = _closure2_slot9;
                        r2 = undefined;
                        r1 = r4.bind(r2)(r3, r1);
                        r1 = _closure2_slot6;
                        r0 = _closure2_slot13;
                        r0 = r1.bind(r2)(r3, r0);
                        r0 = function() { // Environment: r0
                            r4 = _closure2_slot6;
                            r3 = _closure2_slot2;
                            r0 = undefined;
                            r2 = null;
                            r4 = r4.bind(r0)(r3, r2);
                            r1 = _closure2_slot4;
                            r1 = r1.bind(r0)(r3, r2);
                            return r0;
                        };
                        return r0;
                    };
                    r5 = r17.bind(r18)(r5, r7);
                    r7 = {};
                    r5 = function() { // Original name: highlight, environment: r1
                        _fun4499: for(var _fun4499_ip = 0; ; ) switch(_fun4499_ip) {
case 0:
                            r2 = _closure2_slot8;
                            r0 = undefined;
                            r3 = true;
                            r2 = r2.bind(r0)(r3);
                            r2 = _closure2_slot9;
                            r2 = r2.bind(r0)(r3);
                            r4 = _closure2_slot3;
                            r2 = null;
                            if(!(r4 != r2)) { _fun4499_ip = 49; continue _fun4499 }
case 35:
                            r2 = _closure2_slot5;
                            r1 = _closure2_slot3;
                            r1 = r2.bind(r0)(r1, r3);
case 49:
                            return r0;
                        }
                    };
                    r7['highlight'] = r5;
                    r5 = function() { // Original name: unhighlight, environment: r1
                        _fun4500: for(var _fun4500_ip = 0; ; ) switch(_fun4500_ip) {
case 0:
                            r2 = _closure2_slot8;
                            r0 = undefined;
                            r3 = false;
                            r2 = r2.bind(r0)(r3);
                            r2 = _closure2_slot9;
                            r2 = r2.bind(r0)(r3);
                            r4 = _closure2_slot3;
                            r2 = null;
                            if(!(r4 != r2)) { _fun4500_ip = 49; continue _fun4500 }
case 35:
                            r2 = _closure2_slot5;
                            r1 = _closure2_slot3;
                            r1 = r2.bind(r0)(r1, r3);
case 49:
                            return r0;
                        }
                    };
                    r7['unhighlight'] = r5;
                    r1 = function(a0, a1) { // Original name: updateProps, environment: r1
                        _fun4501: for(var _fun4501_ip = 0; ; ) switch(_fun4501_ip) {
case 0:
                            r1 = a0;
                            r5 = a1;
                            r0 = 'leading';
                            if(!(r1 !== r0)) { _fun4501_ip = 80; continue _fun4501 }
case 14:
                            r0 = 'trailing';
                            if(!(r1 === r0)) { _fun4501_ip = 182; continue _fun4501 }
case 25:
                            r2 = _closure2_slot1;
                            r1 = null;
                            if(!(r2 != r1)) { _fun4501_ip = 182; continue _fun4501 }
case 41:
                            r2 = _closure2_slot13;
                            r1 = global;
                            r4 = r1.Object;
                            r3 = r4.assign;
                            r1 = _closure2_slot12;
                            r0 = {};
                            r1 = r3.bind(r4)(r0, r1, r5);
                            r0 = undefined;
                            r0 = r2.bind(r0)(r1);
                            _fun4501_ip = 182; continue _fun4501;
case 80:
                            r1 = _closure2_slot0;
                            r2 = null;
                            if(!(r1 == r2)) { _fun4501_ip = 145; continue _fun4501 }
case 93:
                            r1 = _closure2_slot3;
                            if(!(r1 != r2)) { _fun4501_ip = 182; continue _fun4501 }
case 101:
                            r4 = _closure2_slot7;
                            r3 = _closure2_slot3;
                            r1 = global;
                            r7 = r1.Object;
                            r6 = r7.assign;
                            r2 = _closure2_slot10;
                            r1 = {};
                            r2 = r6.bind(r7)(r1, r2, r5);
                            r1 = undefined;
                            r1 = r4.bind(r1)(r3, r2);
                            _fun4501_ip = 182; continue _fun4501;
case 145:
                            r2 = _closure2_slot11;
                            r1 = global;
                            r4 = r1.Object;
                            r3 = r4.assign;
                            r1 = _closure2_slot10;
                            r0 = {};
                            r1 = r3.bind(r4)(r0, r1, r5);
                            r0 = undefined;
                            r0 = r2.bind(r0)(r1);
case 182:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r7['updateProps'] = r1;
                    r5 = r6.renderItem;
                    r1 = {};
                    r1['item'] = r12;
                    r1['index'] = r11;
                    r1['section'] = r8;
                    r1['separators'] = r7;
                    r8 = r5.bind(r6)(r1);
                    r5 = null;
                    r6 = r9 != r5;
                    if(!r6) { _fun4496_ip = 562; continue _fun4496 }
case 521:
                    r1 = _closure1_slot12;
                    r7 = r1.jsx;
                    r1 = global;
                    r12 = r1.Object;
                    r11 = r12.assign;
                    r1 = {};
                    r1['highlighted'] = r16;
                    r1 = r11.bind(r12)(r1, r15);
                    r6 = r7.bind(r3)(r9, r1);
case 562:
                    r1 = r10 != r5;
                    if(!r1) { _fun4496_ip = 610; continue _fun4496 }
case 569:
                    r7 = _closure1_slot12;
                    r9 = r7.jsx;
                    r7 = global;
                    r12 = r7.Object;
                    r11 = r12.assign;
                    r7 = {};
                    r7['highlighted'] = r14;
                    r7 = r11.bind(r12)(r7, r13);
                    r1 = r9.bind(r3)(r10, r7);
case 610:
                    r7 = r6;
                    if(r6) { _fun4496_ip = 619; continue _fun4496 }
case 616:
                    r7 = r1;
case 619:
                    r2 = r4 === r2;
                    r4 = r1;
                    if(!r2) { _fun4496_ip = 632; continue _fun4496 }
case 629:
                    r4 = r6;
case 632:
                    if(!r2) { _fun4496_ip = 638; continue _fun4496 }
case 635:
                    r6 = r1;
case 638:
                    r1 = _closure1_slot12;
                    r2 = r1.jsxs;
                    r0 = _closure1_slot12;
                    r1 = r0.Fragment;
                    r0 = {};
                    r9 = null;
                    if(!r7) { _fun4496_ip = 667; continue _fun4496 }
case 664:
                    r9 = r4;
case 667:
                    r4 = new Array(3);
                    r4[0] = r9;
                    r4[1] = r8;
                    r5 = null;
                    if(!r7) { _fun4496_ip = 687; continue _fun4496 }
case 684:
                    r5 = r6;
case 687:
                    r4[2] = r5;
                    r0['children'] = r4;
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                }
            };
            var _closure1_slot17 = r0;
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
            var _closure1_slot7 = r3;
            r3 = 7;
            r3 = r6[r3];
            r3 = r5.bind(r0)(r3);
            r3 = r4.bind(r0)(r3);
            var _closure1_slot8 = r3;
            r3 = 8;
            r3 = r6[r3];
            r3 = r5.bind(r0)(r3);
            r3 = r4.bind(r0)(r3);
            var _closure1_slot9 = r3;
            r3 = 9;
            r3 = r6[r3];
            r3 = r5.bind(r0)(r3);
            r3 = r4.bind(r0)(r3);
            var _closure1_slot10 = r3;
            r3 = 10;
            r3 = r6[r3];
            r7 = r5.bind(r0)(r3);
            if(!r7) { _fun4489_ip = 324; continue _fun4489 }
case 310:
            r4 = r7.__esModule;
            r3 = r7;
            if(r4) { _fun4489_ip = 591; continue _fun4489 }
case 324:
            r17 = null;
            if(!(r17 !== r7)) { _fun4489_ip = 582; continue _fun4489 }
case 333:
            r8 = typeof r7;
            r4 = 'object';
            if(!(r4 !== r8)) { _fun4489_ip = 355; continue _fun4489 }
case 344:
            r4 = 'function';
            if(!(r4 === r8)) { _fun4489_ip = 582; continue _fun4489 }
case 355:
            r4 = _closure1_slot14;
            r8 = r4.bind(r0)(r0);
            if(!r8) { _fun4489_ip = 383; continue _fun4489 }
case 367:
            r4 = r8.has;
            r4 = r4.bind(r8)(r7);
            if(r4) { _fun4489_ip = 570; continue _fun4489 }
case 383:
            r4 = Object.create(r17);
            r9 = r18.Object;
            r16 = r9.defineProperty;
            if(!r16) { _fun4489_ip = 411; continue _fun4489 }
case 400:
            r9 = r18.Object;
            r16 = r9.getOwnPropertyDescriptor;
case 411:
            r14 = r7;
            r10 = 'default';
            r9 = undefined;
            for(r11 in r14)
case 428:
            {
case 437:
                r22 = r11;
                if(r10 === r22) { _fun4489_ip = 428; continue _fun4489 }
case 444:
                r19 = {};
                r20 = r19.hasOwnProperty;
                r19 = r20.call;
                r19 = r19.bind(r20)(r7, r22);
                if(!r19) { _fun4489_ip = 428; continue _fun4489 }
case 465:
                r19 = null;
                if(!r16) { _fun4489_ip = 487; continue _fun4489 }
case 470:
                r21 = r18.Object;
                r20 = r21.getOwnPropertyDescriptor;
                r19 = r20.bind(r21)(r7, r22);
case 487:
                if(!r19) { _fun4489_ip = 506; continue _fun4489 }
case 490:
                r20 = r19.get;
                if(r20) { _fun4489_ip = 519; continue _fun4489 }
case 498:
                r20 = r19.set;
                if(r20) { _fun4489_ip = 519; continue _fun4489 }
case 506:
                r20 = r7[r22];
                r4[r22] = r20;
                r9 = r19;
                _fun4489_ip = 428; continue _fun4489;
case 519:
                r21 = r18.Object;
                r20 = r21.defineProperty;
                r20 = r20.bind(r21)(r4, r22, r19);
                r9 = r19;
                _fun4489_ip = 428; continue _fun4489;
            }
case 542:
            r4['default'] = r7;
            r3 = r4;
            if(!r8) { _fun4489_ip = 591; continue _fun4489 }
case 554:
            r9 = r8.set;
            r9 = r9.bind(r8)(r7, r4);
            r3 = r4;
            _fun4489_ip = 591; continue _fun4489;
case 570:
            r4 = r8.get;
            r3 = r4.bind(r8)(r7);
            _fun4489_ip = 591; continue _fun4489;
case 582:
            r4 = {};
            r4['default'] = r7;
            r3 = r4;
case 591:
            var _closure1_slot11 = r3;
            r4 = 11;
            r4 = r6[r4];
            r4 = r5.bind(r0)(r4);
            var _closure1_slot12 = r4;
            r4 = ['ItemSeparatorComponent', 'SectionSeparatorComponent', 'renderItem', 'renderSectionFooter', 'renderSectionHeader', 'sections', 'stickySectionHeadersEnabled'];
            var _closure1_slot13 = r4;
            r3 = r3.PureComponent;
            r1 = function(a0) { // Environment: r1
                r3 = function() { // Original name: VirtualizedSectionList, environment: r5
                    _fun4503: for(var _fun4503_ip = 0; ; ) switch(_fun4503_ip) {
case 0:
                        r5 = this;
                        r4 = undefined;
                        r8 = undefined;
                        r0 = _closure1_slot4;
                        r6 = r0.default;
                        r3 = _closure2_slot0;
                        r3 = r6.bind(r4)(r5, r3);
                        r6 = arguments.length;
                        r3 = global;
                        r3 = r3.Array;
                        r7 = r3.prototype;
                        r7 = Object.create(r7, {constructor: {value: r3}});
                        r13 = r7;
                        r12 = r6;
                        r3 = new r13[r3](r12, r11);
                        r7 = r3 instanceof Object ? r3 : r7;
                        r3 = 0;
                        r9 = r3 < r6;
                        if(!r9) { _fun4503_ip = 91; continue _fun4503 }
case 76:
                        r9 = arguments[r3];
                        r7[r3] = r9;
                        r3 = r3 + 1;
                        if(r3 < r6) { _fun4503_ip = 76; continue _fun4503 }
case 91:
                        r3 = _closure1_slot15;
                        r2 = _closure2_slot0;
                        r6 = new Array(0);
                        r0 = r6.concat;
                        r0 = r0.bind(r6)(r7);
                        r0 = r3.bind(r4)(r5, r2, r0);
                        var _closure3_slot0 = r0;
                        r2 = function(a0, a1) { // Environment: r1
                            _fun4504: for(var _fun4504_ip = 0; ; ) switch(_fun4504_ip) {
case 0:
                                r3 = a1;
                                r1 = _closure3_slot0;
                                r0 = r1._subExtractor;
                                r1 = r0.bind(r1)(r3);
                                r0 = r1;
                                if(!r0) { _fun4504_ip = 32; continue _fun4504 }
case 27:
                                r0 = r1.key;
case 32:
                                if(r0) { _fun4504_ip = 50; continue _fun4504 }
case 35:
                                r1 = global;
                                r2 = r1.String;
                                r1 = undefined;
                                r0 = r2.bind(r1)(r3);
case 50:
                                return r0;
                            }
                        };
                        r0['_keyExtractor'] = r2;
                        r2 = function(a0) { // Environment: r1
                            _fun4505: for(var _fun4505_ip = 0; ; ) switch(_fun4505_ip) {
case 0:
                                r4 = a0;
                                r0 = _closure1_slot10;
                                r5 = r0.default;
                                r0 = r4.index;
                                r1 = null;
                                r3 = r0 != r1;
                                r6 = undefined;
                                r0 = 'Received a broken ViewToken';
                                r0 = r5.bind(r6)(r3, r0);
                                r7 = _closure3_slot0;
                                r3 = r7._subExtractor;
                                r0 = r4.index;
                                r0 = r3.bind(r7)(r0);
                                if(r0) { _fun4505_ip = 66; continue _fun4505 }
case 64:
                                return r1;
case 66:
                                r3 = r0.section;
                                r3 = r3.keyExtractor;
                                r5 = _closure3_slot0;
                                r5 = r5.props;
                                r5 = r5.keyExtractor;
                                if(r5) { _fun4505_ip = 122; continue _fun4505 }
case 96:
                                r7 = _closure1_slot0;
                                r8 = _closure1_slot1;
                                r2 = 12;
                                r2 = r8[r2];
                                r2 = r7.bind(r6)(r2);
                                r5 = r2.keyExtractor;
case 122:
                                if(!(r3 == r1)) { _fun4505_ip = 157; continue _fun4505 }
case 126:
                                r2 = r4.item;
                                r7 = r0.index;
                                r8 = r7 != r1;
                                r1 = 0;
                                if(!r8) { _fun4505_ip = 149; continue _fun4505 }
case 146:
                                r1 = r7;
case 149:
                                r5 = r5.bind(r6)(r2, r1);
                                _fun4505_ip = 174; continue _fun4505;
case 157:
                                r2 = r4.item;
                                r1 = r0.index;
                                r5 = r3.bind(r6)(r2, r1);
case 174:
                                r1 = global;
                                r3 = r1.Object;
                                r2 = r3.assign;
                                r1 = {};
                                r6 = r0.index;
                                r1['index'] = r6;
                                r1['key'] = r5;
                                r0 = r0.section;
                                r1['section'] = r0;
                                r0 = {};
                                r0 = r2.bind(r3)(r0, r4, r1);
                                return r0;
                            }
                        };
                        r0['_convertViewable'] = r2;
                        r2 = function(a0) { // Environment: r1
                            _fun4506: for(var _fun4506_ip = 0; ; ) switch(_fun4506_ip) {
case 0:
                                r0 = a0;
                                r7 = r0.viewableItems;
                                r6 = r0.changed;
                                r0 = _closure3_slot0;
                                r0 = r0.props;
                                r2 = r0.onViewableItemsChanged;
                                r0 = null;
                                if(!(r2 != r0)) { _fun4506_ip = 144; continue _fun4506 }
case 39:
                                r1 = {};
                                r5 = r7.map;
                                r0 = _closure3_slot0;
                                r4 = r0._convertViewable;
                                r0 = _closure3_slot0;
                                r7 = r5.bind(r7)(r4, r0);
                                r5 = r7.filter;
                                r0 = global;
                                r4 = r0.Boolean;
                                r4 = r5.bind(r7)(r4);
                                r1['viewableItems'] = r4;
                                r5 = r6.map;
                                r4 = _closure3_slot0;
                                r4 = r4._convertViewable;
                                r3 = _closure3_slot0;
                                r4 = r5.bind(r6)(r4, r3);
                                r3 = r4.filter;
                                r0 = r0.Boolean;
                                r0 = r3.bind(r4)(r0);
                                r1['changed'] = r0;
                                r0 = undefined;
                                r0 = r2.bind(r0)(r1);
case 144:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['_onViewableItemsChanged'] = r2;
                        r2 = function(a0) { // Environment: r1
                            r1 = a0;
                            var _closure4_slot0 = r1;
                            r0 = function(a0) { // Environment: r0
                                _fun4508: for(var _fun4508_ip = 0; ; ) switch(_fun4508_ip) {
case 0:
                                    r0 = a0;
                                    r8 = r0.item;
                                    r11 = r0.index;
                                    r1 = _closure3_slot0;
                                    r0 = r1._subExtractor;
                                    r3 = r0.bind(r1)(r11);
                                    r0 = null;
                                    if(r3) { _fun4508_ip = 39; continue _fun4508 }
case 37:
                                    return r0;
case 39:
                                    r9 = r3.index;
                                    if(!(r9 != r0)) { _fun4508_ip = 386; continue _fun4508 }
case 51:
                                    r1 = r3.section;
                                    r7 = r1.renderItem;
                                    if(r7) { _fun4508_ip = 81; continue _fun4508 }
case 66:
                                    r1 = _closure3_slot0;
                                    r1 = r1.props;
                                    r7 = r1.renderItem;
case 81:
                                    r5 = _closure3_slot0;
                                    r4 = r5._getSeparatorComponent;
                                    r1 = _closure4_slot0;
                                    r10 = r4.bind(r5)(r11, r3, r1);
                                    r4 = _closure1_slot10;
                                    r5 = r4.default;
                                    r6 = undefined;
                                    r4 = 'no renderItem!';
                                    r4 = r5.bind(r6)(r7, r4);
                                    r4 = _closure1_slot12;
                                    r5 = r4.jsx;
                                    r4 = _closure1_slot17;
                                    r1 = {};
                                    r1['SeparatorComponent'] = r10;
                                    r12 = 0;
                                    r10 = undefined;
                                    if(!(r9 === r12)) { _fun4508_ip = 172; continue _fun4508 }
case 157:
                                    r12 = _closure3_slot0;
                                    r12 = r12.props;
                                    r10 = r12.SectionSeparatorComponent;
case 172:
                                    r1['LeadingSeparatorComponent'] = r10;
                                    r10 = r3.key;
                                    r1['cellKey'] = r10;
                                    r1['index'] = r9;
                                    r1['item'] = r8;
                                    r8 = r3.leadingItem;
                                    r1['leadingItem'] = r8;
                                    r8 = r3.leadingSection;
                                    r1['leadingSection'] = r8;
                                    r10 = _closure3_slot0;
                                    r9 = r10._subExtractor;
                                    r8 = 1;
                                    r8 = r11 - r8;
                                    r8 = r9.bind(r10)(r8);
                                    if(r8) { _fun4508_ip = 244; continue _fun4508 }
case 242:
                                    r8 = {};
case 244:
                                    r8 = r8.key;
                                    r1['prevCellKey'] = r8;
                                    r8 = _closure3_slot0;
                                    r8 = r8._setUpdateHighlightFor;
                                    r1['setSelfHighlightCallback'] = r8;
                                    r8 = _closure3_slot0;
                                    r8 = r8._setUpdatePropsFor;
                                    r1['setSelfUpdatePropsCallback'] = r8;
                                    r8 = _closure3_slot0;
                                    r8 = r8._updateHighlightFor;
                                    r1['updateHighlightFor'] = r8;
                                    r8 = _closure3_slot0;
                                    r8 = r8._updatePropsFor;
                                    r1['updatePropsFor'] = r8;
                                    r1['renderItem'] = r7;
                                    r7 = r3.section;
                                    r1['section'] = r7;
                                    r7 = r3.trailingItem;
                                    r1['trailingItem'] = r7;
                                    r7 = r3.trailingSection;
                                    r1['trailingSection'] = r7;
                                    r7 = _closure3_slot0;
                                    r7 = r7.props;
                                    r7 = r7.inverted;
                                    r7 = !r7;
                                    r7 = !r7;
                                    r1['inverted'] = r7;
                                    r1 = r5.bind(r6)(r4, r1);
                                    return r1;
case 386:
                                    r1 = r3.section;
                                    r4 = r3.header;
                                    r3 = true;
                                    if(!(r4 !== r3)) { _fun4508_ip = 440; continue _fun4508 }
case 404:
                                    r3 = _closure3_slot0;
                                    r3 = r3.props;
                                    r6 = r3.renderSectionFooter;
                                    r3 = null;
                                    if(!r6) { _fun4508_ip = 438; continue _fun4508 }
case 424:
                                    r5 = {};
                                    r5['section'] = r1;
                                    r4 = undefined;
                                    r3 = r6.bind(r4)(r5);
case 438:
                                    return r3;
case 440:
                                    r2 = _closure3_slot0;
                                    r2 = r2.props;
                                    r3 = r2.renderSectionHeader;
                                    r0 = null;
                                    if(!r3) { _fun4508_ip = 474; continue _fun4508 }
case 460:
                                    r2 = {};
                                    r2['section'] = r1;
                                    r1 = undefined;
                                    r0 = r3.bind(r1)(r2);
case 474:
                                    return r0;
                                }
                            };
                            return r0;
                        };
                        r0['_renderItem'] = r2;
                        r2 = function(a0, a1) { // Environment: r1
                            _fun4509: for(var _fun4509_ip = 0; ; ) switch(_fun4509_ip) {
case 0:
                                r0 = _closure3_slot0;
                                r1 = r0._updatePropsMap;
                                r0 = a0;
                                r2 = r1[r0];
                                r0 = null;
                                if(!(r2 != r0)) { _fun4509_ip = 36; continue _fun4509 }
case 26:
                                r1 = undefined;
                                r0 = a1;
                                r0 = r2.bind(r1)(r0);
case 36:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['_updatePropsFor'] = r2;
                        r2 = function(a0, a1) { // Environment: r1
                            _fun4510: for(var _fun4510_ip = 0; ; ) switch(_fun4510_ip) {
case 0:
                                r0 = _closure3_slot0;
                                r1 = r0._updateHighlightMap;
                                r0 = a0;
                                r2 = r1[r0];
                                r0 = null;
                                if(!(r2 != r0)) { _fun4510_ip = 36; continue _fun4510 }
case 26:
                                r1 = undefined;
                                r0 = a1;
                                r0 = r2.bind(r1)(r0);
case 36:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['_updateHighlightFor'] = r2;
                        r2 = function(a0, a1) { // Environment: r1
                            _fun4511: for(var _fun4511_ip = 0; ; ) switch(_fun4511_ip) {
case 0:
                                r2 = a0;
                                r1 = a1;
                                r0 = null;
                                if(!(r1 == r0)) { _fun4511_ip = 31; continue _fun4511 }
case 12:
                                r0 = _closure3_slot0;
                                r0 = r0._updateHighlightFor;
                                r0 = delete r0[r2];
                                _fun4511_ip = 48; continue _fun4511;
case 31:
                                r0 = _closure3_slot0;
                                r0 = r0._updateHighlightMap;
                                r0[r2] = r1;
case 48:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['_setUpdateHighlightFor'] = r2;
                        r2 = function(a0, a1) { // Environment: r1
                            _fun4512: for(var _fun4512_ip = 0; ; ) switch(_fun4512_ip) {
case 0:
                                r2 = a0;
                                r1 = a1;
                                r0 = null;
                                if(!(r1 == r0)) { _fun4512_ip = 31; continue _fun4512 }
case 12:
                                r0 = _closure3_slot0;
                                r0 = r0._updatePropsMap;
                                r0 = delete r0[r2];
                                _fun4512_ip = 48; continue _fun4512;
case 31:
                                r0 = _closure3_slot0;
                                r0 = r0._updatePropsMap;
                                r0[r2] = r1;
case 48:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['_setUpdatePropsFor'] = r2;
                        r2 = {};
                        r0['_updateHighlightMap'] = r2;
                        r2 = {};
                        r0['_updatePropsMap'] = r2;
                        r1 = function(a0) { // Environment: r1
                            r1 = _closure3_slot0;
                            r0 = a0;
                            r1['_listRef'] = r0;
                            r0 = undefined;
                            return r0;
                        };
                        r0['_captureRef'] = r1;
                        return r0;
                    }
                };
                var _closure2_slot0 = r3;
                r1 = _closure1_slot8;
                r4 = r1.default;
                r2 = undefined;
                r1 = a0;
                r1 = r4.bind(r2)(r3, r1);
                r0 = _closure1_slot5;
                r1 = r0.default;
                r4 = {};
                r0 = 'scrollToLocation';
                r4['key'] = r0;
                r0 = function(a0) { // Original name: scrollToLocation, environment: r5
                    _fun4514: for(var _fun4514_ip = 0; ; ) switch(_fun4514_ip) {
case 0:
                        r5 = a0;
                        r0 = this;
                        r4 = r5.itemIndex;
                        r2 = r5.sectionIndex;
                        r7 = 0;
                        r2 = r7 < r2;
                        r6 = 2;
                        r3 = 0;
                        r1 = r4;
                        if(!r2) { _fun4514_ip = 93; continue _fun4514 }
case 34:
                        r9 = r0.props;
                        r8 = r9.getItemCount;
                        r2 = r0.props;
                        r2 = r2.sections;
                        r2 = r2[r3];
                        r2 = r2.data;
                        r2 = r8.bind(r9)(r2);
                        r2 = r2 + r6;
                        r4 = r4 + r2;
                        r3 = r3 + 1;
                        r2 = r5.sectionIndex;
                        r1 = r4;
                        if(r3 < r2) { _fun4514_ip = 34; continue _fun4514 }
case 93:
                        r3 = r5.viewOffset;
                        if(r3) { _fun4514_ip = 104; continue _fun4514 }
case 102:
                        r3 = 0;
case 104:
                        r4 = r0._listRef;
                        r2 = null;
                        if(!(r4 != r2)) { _fun4514_ip = 252; continue _fun4514 }
case 118:
                        r2 = r0._listRef;
                        r4 = r5.itemIndex;
                        r6 = r3;
                        if(!(r4 > r7)) { _fun4514_ip = 199; continue _fun4514 }
case 136:
                        r4 = r0.props;
                        r4 = r4.stickySectionHeadersEnabled;
                        r6 = r3;
                        if(!r4) { _fun4514_ip = 199; continue _fun4514 }
case 153:
                        r4 = r2.__getListMetrics;
                        r8 = r4.bind(r2)();
                        r7 = r8.getCellMetricsApprox;
                        r4 = r5.itemIndex;
                        r4 = r1 - r4;
                        r2 = r2.props;
                        r2 = r7.bind(r8)(r4, r2);
                        r2 = r2.length;
                        r6 = r3 + r2;
case 199:
                        r2 = global;
                        r4 = r2.Object;
                        r3 = r4.assign;
                        r2 = {};
                        r2['viewOffset'] = r6;
                        r2['index'] = r1;
                        r1 = {};
                        r2 = r3.bind(r4)(r1, r5, r2);
                        r1 = r0._listRef;
                        r0 = r1.scrollToIndex;
                        r0 = r0.bind(r1)(r2);
                        r0 = undefined;
                        return r0;
case 252:
                        r0 = undefined;
                        return r0;
                    }
                };
                r4['value'] = r0;
                r0 = new Array(6);
                r0[0] = r4;
                r4 = {};
                r6 = 'getListRef';
                r4['key'] = r6;
                r6 = function() { // Original name: getListRef, environment: r5
                    r0 = this;
                    r0 = r0._listRef;
                    return r0;
                };
                r4['value'] = r6;
                r0[1] = r4;
                r4 = {};
                r6 = 'render';
                r4['key'] = r6;
                r6 = function() { // Original name: render, environment: r5
                    _fun4516: for(var _fun4516_ip = 0; ; ) switch(_fun4516_ip) {
case 0:
                        r0 = this;
                        r3 = undefined;
                        r11 = undefined;
                        r10 = undefined;
                        r2 = undefined;
                        r12 = undefined;
                        var _closure3_slot0 = r0;
                        r6 = r0.props;
                        r1 = r6.ItemSeparatorComponent;
                        r1 = r6.SectionSeparatorComponent;
                        r1 = r6.renderItem;
                        r1 = r6.renderSectionFooter;
                        r1 = r6.renderSectionHeader;
                        r1 = r6.sections;
                        r1 = r6.stickySectionHeadersEnabled;
                        r4 = _closure1_slot3;
                        r5 = r4.default;
                        r4 = _closure1_slot13;
                        r7 = r5.bind(r3)(r6, r4);
                        r4 = r0.props;
                        r6 = r4.ListHeaderComponent;
                        r4 = 0;
                        r5 = 0;
                        if(!r6) { _fun4516_ip = 108; continue _fun4516 }
case 105:
                        r5 = 1;
case 108:
                        r11 = r5;
                        r5 = r0.props;
                        r6 = r5.stickySectionHeadersEnabled;
                        r5 = undefined;
                        if(!r6) { _fun4516_ip = 131; continue _fun4516 }
case 127:
                        r5 = new Array(0);
case 131:
                        r10 = r5;
                        r2 = 0;
                        var _closure3_slot1 = r4;
                        r4 = r0.props;
                        r4 = r4.sections;
                        r9 = r4;
                        r5 = r9[Symbol.iterator];
                        r9 = r5().next;
                        r6 = 2;
                        r4 = null;
case 162:
                        r13 = r9().value;
                        r14 = r5;
                        if(!(r14 !== r3)) { _fun4516_ip = 263; continue _fun4516 }
case 173: // try_start_0
                        r12 = r13;
                        r13 = r10;
                        if(!(r13 != r4)) { _fun4516_ip = 206; continue _fun4516 }
case 183:
                        r15 = r10;
                        r14 = r15.push;
                        r16 = r2;
                        r13 = r11;
                        r13 = r16 + r13;
                        r13 = r14.bind(r15)(r13);
case 206:
                        r13 = r2;
                        r14 = r13 + r6;
                        r2 = r14;
                        _closure3_slot1 = r14;
                        r16 = r0.props;
                        r15 = r16.getItemCount;
                        r13 = r12;
                        r13 = r13.data;
                        r13 = r15.bind(r16)(r13);
                        r13 = r14 + r13;
                        r2 = r13;
                        _closure3_slot1 = r13;
case 254: // try_end0
                        _fun4516_ip = 162; continue _fun4516;
case 256: // catch_target0
                        CatchBlockStart(arg_register=4);
                        r5.return();
                        throw r4;
case 263:
                        r4 = r0._renderItem;
                        r9 = r4.bind(r0)(r2);
                        r2 = _closure1_slot12;
                        r2 = r2.jsx;
                        r1 = _closure1_slot9;
                        r1 = r1.default;
                        r4 = global;
                        r6 = r4.Object;
                        r5 = r6.assign;
                        r4 = {};
                        r11 = r0._keyExtractor;
                        r4['keyExtractor'] = r11;
                        r4['stickyHeaderIndices'] = r10;
                        r4['renderItem'] = r9;
                        r9 = r0.props;
                        r9 = r9.sections;
                        r4['data'] = r9;
                        r9 = function(a0, a1) { // Original name: getItem, environment: r8
                            r4 = _closure3_slot0;
                            r3 = r4._getItem;
                            r2 = r4.props;
                            r1 = a0;
                            r0 = a1;
                            r0 = r3.bind(r4)(r2, r1, r0);
                            return r0;
                        };
                        r4['getItem'] = r9;
                        r8 = function() { // Original name: getItemCount, environment: r8
                            r0 = _closure3_slot1;
                            return r0;
                        };
                        r4['getItemCount'] = r8;
                        r8 = r0.props;
                        r9 = r8.onViewableItemsChanged;
                        r8 = undefined;
                        if(!r9) { _fun4516_ip = 384; continue _fun4516 }
case 378:
                        r8 = r0._onViewableItemsChanged;
case 384:
                        r4['onViewableItemsChanged'] = r8;
                        r0 = r0._captureRef;
                        r4['ref'] = r0;
                        r0 = {};
                        r0 = r5.bind(r6)(r0, r7, r4);
                        r0 = r2.bind(r3)(r1, r0);
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[2] = r4;
                r4 = {};
                r6 = '_getItem';
                r4['key'] = r6;
                r6 = function(a0, a1, a2) { // Original name: _getItem, environment: r5
                    _fun4519: for(var _fun4519_ip = 0; ; ) switch(_fun4519_ip) {
case 0:
                        r4 = a0;
                        r9 = a1;
                        if(r9) { _fun4519_ip = 13; continue _fun4519 }
case 9:
                        r0 = null;
                        return r0;
case 13:
                        r1 = a2;
                        r0 = 1;
                        r8 = r1 - r0;
                        r0 = r9.length;
                        r7 = 0;
                        r0 = r7 < r0;
                        r6 = 2;
                        r5 = -1;
                        if(!r0) { _fun4519_ip = 103; continue _fun4519 }
case 46:
                        r0 = r9[r7];
                        r3 = r0.data;
                        r1 = r4.getItemCount;
                        r10 = r1.bind(r4)(r3);
                        r2 = r8;
                        r1 = r7;
                        if(!(r2 !== r5)) { _fun4519_ip = 121; continue _fun4519 }
case 75:
                        if(!(r2 !== r10)) { _fun4519_ip = 121; continue _fun4519 }
case 79:
                        if(!(!(r2 < r10))) { _fun4519_ip = 107; continue _fun4519 }
case 83:
                        r10 = r10 + r6;
                        r8 = r2 - r10;
                        r7 = r1 + 1;
                        r1 = r9.length;
                        if(r7 < r1) { _fun4519_ip = 46; continue _fun4519 }
case 103:
                        r1 = null;
                        return r1;
case 107:
                        r1 = r4.getItem;
                        r1 = r1.bind(r4)(r3, r2);
                        return r1;
case 121:
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[3] = r4;
                r4 = {};
                r6 = '_subExtractor';
                r4['key'] = r6;
                r6 = function(a0) { // Original name: _subExtractor, environment: r5
                    _fun4520: for(var _fun4520_ip = 0; ; ) switch(_fun4520_ip) {
case 0:
                        r9 = a0;
                        r0 = this;
                        r0 = r0.props;
                        r8 = r0.getItem;
                        r7 = r0.getItemCount;
                        r6 = r0.keyExtractor;
                        r5 = r0.sections;
                        r0 = r5.length;
                        r4 = 0;
                        r1 = r4 < r0;
                        r0 = undefined;
                        r3 = 1;
                        r2 = global;
                        if(!r1) { _fun4520_ip = 399; continue _fun4520 }
case 57:
                        r13 = r5[r4];
                        r10 = r13.data;
                        r14 = r13.key;
                        r11 = r9;
                        r1 = r4;
                        if(r14) { _fun4520_ip = 91; continue _fun4520 }
case 80:
                        r12 = r2.String;
                        r14 = r12.bind(r0)(r1);
case 91:
                        r11 = r11 - r3;
                        r12 = r7.bind(r0)(r10);
                        r12 = r12 + r3;
                        if(!(!(r11 >= r12))) { _fun4520_ip = 371; continue _fun4520 }
case 111:
                        r12 = -1;
                        if(!(r11 !== r12)) { _fun4520_ip = 324; continue _fun4520 }
case 124:
                        r12 = r7.bind(r0)(r10);
                        if(!(r11 !== r12)) { _fun4520_ip = 277; continue _fun4520 }
case 136:
                        r17 = r13.keyExtractor;
                        if(r17) { _fun4520_ip = 148; continue _fun4520 }
case 145:
                        r17 = r6;
case 148:
                        if(r17) { _fun4520_ip = 180; continue _fun4520 }
case 151:
                        r15 = _closure1_slot0;
                        r16 = _closure1_slot1;
                        r12 = 12;
                        r12 = r16[r12];
                        r12 = r15.bind(r0)(r12);
                        r17 = r12.keyExtractor;
case 180:
                        r12 = {};
                        r12['section'] = r13;
                        r15 = ':';
                        r16 = r14 + r15;
                        r15 = r8.bind(r0)(r10, r11);
                        r15 = r17.bind(r0)(r15, r11);
                        r15 = r16 + r15;
                        r12['key'] = r15;
                        r12['index'] = r11;
                        r15 = r11 - r3;
                        r15 = r8.bind(r0)(r10, r15);
                        r12['leadingItem'] = r15;
                        r15 = r1 - r3;
                        r15 = r5[r15];
                        r12['leadingSection'] = r15;
                        r15 = r11 + r3;
                        r15 = r8.bind(r0)(r10, r15);
                        r12['trailingItem'] = r15;
                        r15 = r1 + r3;
                        r15 = r5[r15];
                        r12['trailingSection'] = r15;
                        return r12;
case 277:
                        r12 = {};
                        r12['section'] = r13;
                        r15 = ':footer';
                        r15 = r14 + r15;
                        r12['key'] = r15;
                        r15 = null;
                        r12['index'] = r15;
                        r15 = false;
                        r12['header'] = r15;
                        r15 = r1 + r3;
                        r15 = r5[r15];
                        r12['trailingSection'] = r15;
                        return r12;
case 324:
                        r12 = {};
                        r12['section'] = r13;
                        r13 = ':header';
                        r13 = r14 + r13;
                        r12['key'] = r13;
                        r13 = null;
                        r12['index'] = r13;
                        r13 = true;
                        r12['header'] = r13;
                        r13 = r1 + r3;
                        r13 = r5[r13];
                        r12['trailingSection'] = r13;
                        return r12;
case 371:
                        r10 = r7.bind(r0)(r10);
                        r10 = r10 + r3;
                        r9 = r11 - r10;
                        r4 = r1 + 1;
                        r1 = r5.length;
                        if(r4 < r1) { _fun4520_ip = 57; continue _fun4520 }
case 399:
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[4] = r4;
                r4 = {};
                r6 = '_getSeparatorComponent';
                r4['key'] = r6;
                r5 = function(a0, a1, a2) { // Original name: _getSeparatorComponent, environment: r5
                    _fun4521: for(var _fun4521_ip = 0; ; ) switch(_fun4521_ip) {
case 0:
                        r3 = a0;
                        r4 = a1;
                        r7 = this;
                        if(r4) { _fun4521_ip = 22; continue _fun4521 }
case 11:
                        r0 = r7._subExtractor;
                        r4 = r0.bind(r7)(r3);
case 22:
                        if(r4) { _fun4521_ip = 29; continue _fun4521 }
case 25:
                        r0 = null;
                        return r0;
case 29:
                        r0 = r4.section;
                        r1 = r0.ItemSeparatorComponent;
                        if(r1) { _fun4521_ip = 55; continue _fun4521 }
case 44:
                        r0 = r7.props;
                        r1 = r0.ItemSeparatorComponent;
case 55:
                        r0 = r7.props;
                        r0 = r0.SectionSeparatorComponent;
                        r2 = a2;
                        r6 = 1;
                        r2 = r2 - r6;
                        r5 = r4.index;
                        r8 = r7.props;
                        r7 = r8.getItemCount;
                        r4 = r4.section;
                        r4 = r4.data;
                        r4 = r7.bind(r8)(r4);
                        r4 = r4 - r6;
                        r4 = r5 === r4;
                        if(!r0) { _fun4521_ip = 121; continue _fun4521 }
case 118:
                        if(r4) { _fun4521_ip = 137; continue _fun4521 }
case 121:
                        if(!r1) { _fun4521_ip = 133; continue _fun4521 }
case 124:
                        if(r4) { _fun4521_ip = 133; continue _fun4521 }
case 127:
                        if(!(r3 !== r2)) { _fun4521_ip = 133; continue _fun4521 }
case 131:
                        return r1;
case 133:
                        r1 = null;
                        return r1;
case 137:
                        return r0;
                    }
                };
                r4['value'] = r5;
                r0[5] = r4;
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            };
            r1 = r1.bind(r0)(r3);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 359;
    r5 = [1, 38, 203, 12, 13, 23, 25, 28, 347, 20, 119, 251, 346];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun4522: for(var _fun4522_ip = 0; ; ) switch(_fun4522_ip) {
case 0:
            r1 = function(a0, a1) { // Original name: isEqual, environment: r0
                _fun4523: for(var _fun4523_ip = 0; ; ) switch(_fun4523_ip) {
case 0:
                    r4 = a0;
                    r2 = a1;
                    if(!(r4 !== r2)) { _fun4523_ip = 47; continue _fun4523 }
case 10:
                    r3 = _closure1_slot0;
                    r1 = undefined;
                    r3 = r3.bind(r1)(r4);
                    if(!r3) { _fun4523_ip = 39; continue _fun4523 }
case 27:
                    r0 = _closure1_slot0;
                    r0 = r0.bind(r1)(r2);
                    if(r0) { _fun4523_ip = 43; continue _fun4523 }
case 39:
                    r0 = false;
                    return r0;
case 43:
                    r0 = true;
                    return r0;
case 47:
                    r0 = true;
                    return r0;
                }
            };
            var _closure1_slot1 = r1;
            r1 = function(a0, a1) { // Original name: areInputsEqual, environment: r0
                _fun4524: for(var _fun4524_ip = 0; ; ) switch(_fun4524_ip) {
case 0:
                    r5 = a0;
                    r4 = a1;
                    r1 = r5.length;
                    r0 = r4.length;
                    if(!(r1 === r0)) { _fun4524_ip = 83; continue _fun4524 }
case 20:
                    r0 = r5.length;
                    r3 = 0;
                    r0 = r3 < r0;
                    r1 = undefined;
                    if(!r0) { _fun4524_ip = 79; continue _fun4524 }
case 39:
                    r7 = _closure1_slot1;
                    r6 = r5[r3];
                    r0 = r4[r3];
                    r6 = r7.bind(r1)(r6, r0);
                    r0 = r3;
                    if(r6) { _fun4524_ip = 67; continue _fun4524 }
case 63:
                    r6 = false;
                    return r6;
case 67:
                    r3 = r0 + 1;
                    r0 = r5.length;
                    if(r3 < r0) { _fun4524_ip = 39; continue _fun4524 }
case 79:
                    r0 = true;
                    return r0;
case 83:
                    r0 = false;
                    return r0;
                }
            };
            var _closure1_slot2 = r1;
            r1 = global;
            r1 = r1.Number;
            r1 = r1.isNaN;
            if(r1) { _fun4522_ip = 42; continue _fun4522 }
case 37:
            r1 = function(a0) { // Original name: ponyfill, environment: r0
                _fun4527: for(var _fun4527_ip = 0; ; ) switch(_fun4527_ip) {
case 0:
                    r1 = a0;
                    r2 = typeof r1;
                    r0 = 'number';
                    r0 = r2 === r0;
                    if(!r0) { _fun4527_ip = 21; continue _fun4527 }
case 17:
                    r0 = r1 !== r1;
case 21:
                    return r0;
                }
            };
case 42:
            var _closure1_slot0 = r1;
            r1 = function(a0, a1) { // Original name: memoizeOne, environment: r0
                _fun4525: for(var _fun4525_ip = 0; ; ) switch(_fun4525_ip) {
case 0:
                    r2 = a1;
                    r1 = a0;
                    var _closure2_slot0 = r1;
                    var _closure2_slot1 = r2;
                    r1 = undefined;
                    if(!(r2 === r1)) { _fun4525_ip = 33; continue _fun4525 }
case 22:
                    r1 = _closure1_slot2;
                    _closure2_slot1 = r1;
case 33:
                    r1 = new Array(0);
                    var _closure2_slot3 = r1;
                    r1 = false;
                    var _closure2_slot5 = r1;
                    r0 = function() { // Original name: memoized, environment: r0
                        _fun4526: for(var _fun4526_ip = 0; ; ) switch(_fun4526_ip) {
case 0:
                            r3 = this;
                            r5 = undefined;
                            r4 = undefined;
                            r2 = new Array(0);
                            r0 = arguments.length;
                            r1 = 0;
                            r0 = r1 < r0;
                            if(!r0) { _fun4526_ip = 41; continue _fun4526 }
case 23:
                            r0 = arguments[r1];
                            r2[r1] = r0;
                            r1 = r1 + 1;
                            r0 = arguments.length;
                            if(r1 < r0) { _fun4526_ip = 23; continue _fun4526 }
case 41:
                            r1 = _closure2_slot5;
                            if(!r1) { _fun4526_ip = 76; continue _fun4526 }
case 51:
                            r1 = _closure2_slot2;
                            if(!(r1 === r3)) { _fun4526_ip = 76; continue _fun4526 }
case 59:
                            r4 = _closure2_slot1;
                            r1 = _closure2_slot3;
                            r1 = r4.bind(r5)(r2, r1);
                            if(r1) { _fun4526_ip = 111; continue _fun4526 }
case 76:
                            r4 = _closure2_slot0;
                            r1 = r4.apply;
                            r1 = r1.bind(r4)(r3, r2);
                            var _closure2_slot4 = r1;
                            r4 = true;
                            _closure2_slot5 = r4;
                            var _closure2_slot2 = r3;
                            _closure2_slot3 = r2;
                            return r1;
case 111:
                            r0 = _closure2_slot4;
                            return r0;
                        }
                    };
                    return r0;
                }
            };
            r0 = a4;
            r0['exports'] = r1;
            r0 = undefined;
            return r0;
        }
    };
    r6 = 360;
    r5 = new Array(0);
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun4528: for(var _fun4528_ip = 0; ; ) switch(_fun4528_ip) {
case 0:
            r6 = a1;
            r2 = a5;
            r7 = a6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r4
                _fun4529: for(var _fun4529_ip = 0; ; ) switch(_fun4529_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun4529_ip = 104; continue _fun4529 }
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
                        _fun4530: for(var _fun4530_ip = 0; ; ) switch(_fun4530_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun4530_ip = 15; continue _fun4530 }
case 9:
                            r0 = _closure2_slot0;
                            _fun4530_ip = 19; continue _fun4530;
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
            r0 = 0;
            r1 = r7[r0];
            r0 = undefined;
            r5 = r6.bind(r0)(r1);
            r16 = global;
            r9 = r16.Object;
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
            r5 = 3;
            r5 = r7[r5];
            r5 = r6.bind(r0)(r5);
            if(!r5) { _fun4528_ip = 131; continue _fun4528 }
case 120:
            r6 = r5.__esModule;
            if(r6) { _fun4528_ip = 389; continue _fun4528 }
case 131:
            r15 = null;
            if(!(r15 !== r5)) { _fun4528_ip = 383; continue _fun4528 }
case 140:
            r7 = typeof r5;
            r6 = 'object';
            if(!(r6 !== r7)) { _fun4528_ip = 162; continue _fun4528 }
case 151:
            r6 = 'function';
            if(!(r6 === r7)) { _fun4528_ip = 383; continue _fun4528 }
case 162:
            r4 = _closure1_slot0;
            r6 = r4.bind(r0)(r0);
            if(!r6) { _fun4528_ip = 190; continue _fun4528 }
case 174:
            r4 = r6.has;
            r4 = r4.bind(r6)(r5);
            if(r4) { _fun4528_ip = 371; continue _fun4528 }
case 190:
            r7 = Object.create(r15);
            r4 = r16.Object;
            r14 = r4.defineProperty;
            if(!r14) { _fun4528_ip = 218; continue _fun4528 }
case 207:
            r4 = r16.Object;
            r14 = r4.getOwnPropertyDescriptor;
case 218:
            r12 = r5;
            r8 = 'default';
            r4 = undefined;
            for(r9 in r12)
case 235:
            {
case 244:
                r20 = r9;
                if(r8 === r20) { _fun4528_ip = 235; continue _fun4528 }
case 251:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r5, r20);
                if(!r17) { _fun4528_ip = 235; continue _fun4528 }
case 272:
                r17 = null;
                if(!r14) { _fun4528_ip = 294; continue _fun4528 }
case 277:
                r19 = r16.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r5, r20);
case 294:
                if(!r17) { _fun4528_ip = 313; continue _fun4528 }
case 297:
                r18 = r17.get;
                if(r18) { _fun4528_ip = 326; continue _fun4528 }
case 305:
                r18 = r17.set;
                if(r18) { _fun4528_ip = 326; continue _fun4528 }
case 313:
                r18 = r5[r20];
                r7[r20] = r18;
                r4 = r17;
                _fun4528_ip = 235; continue _fun4528;
case 326:
                r19 = r16.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r7, r20, r17);
                r4 = r17;
                _fun4528_ip = 235; continue _fun4528;
            }
case 349:
            r7['default'] = r5;
            if(!r6) { _fun4528_ip = 389; continue _fun4528 }
case 358:
            r4 = r6.set;
            r4 = r4.bind(r6)(r5, r7);
            _fun4528_ip = 389; continue _fun4528;
case 371:
            r4 = r6.get;
            r4 = r4.bind(r6)(r5);
            _fun4528_ip = 389; continue _fun4528;
case 383:
            r4 = {};
            r4['default'] = r5;
case 389:
            r3 = r3.default;
            r1 = r1.default;
            r1 = r3.bind(r0)(r1);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 361;
    r5 = [1, 362, 329, 119];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun4531: for(var _fun4531_ip = 0; ; ) switch(_fun4531_ip) {
case 0:
            r7 = a1;
            r2 = a5;
            r9 = a6;
            var _closure1_slot0 = r7;
            var _closure1_slot1 = r9;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r4
                _fun4532: for(var _fun4532_ip = 0; ; ) switch(_fun4532_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun4532_ip = 104; continue _fun4532 }
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
                        _fun4533: for(var _fun4533_ip = 0; ; ) switch(_fun4533_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun4533_ip = 15; continue _fun4533 }
case 9:
                            r0 = _closure2_slot0;
                            _fun4533_ip = 19; continue _fun4533;
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
            r0 = function() { // Original name: generateRequestId, environment: r4
                r0 = _closure1_slot11;
                r0 = parseFloat(r0);
                r1 = r0 + 1;
                _closure1_slot11 = r1;
                return r0;
            };
            var _closure1_slot14 = r0;
            r6 = function(a0, a1) { // Original name: prefetch, environment: r4
                _fun4542: for(var _fun4542_ip = 0; ; ) switch(_fun4542_ip) {
case 0:
                    r2 = a1;
                    r3 = _closure1_slot14;
                    r1 = undefined;
                    r3 = r3.bind(r1)();
                    if(!r2) { _fun4542_ip = 24; continue _fun4542 }
case 19:
                    r1 = r2.bind(r1)(r3);
case 24:
                    r0 = _closure1_slot7;
                    r2 = r0.default;
                    r1 = r2.prefetchImage;
                    r0 = a0;
                    r0 = r1.bind(r2)(r0, r3);
                    return r0;
                }
            };
            var _closure1_slot15 = r6;
            r0 = function() { // Original name: _queryCache, environment: r4
                r4 = undefined;
                r0 = undefined;
                r2 = _closure1_slot2;
                r3 = r2.default;
                r2 = function* (a0) { // Environment: r2
                    r0 = function* (a0) { // Original name: ?anon_0_, environment: r0
                        _fun4547: for(var _fun4547_ip = 0; ; ) switch(_fun4547_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(r1) { _fun4547_ip = 36; continue _fun4547 }
case 7:
                            r1 = _closure1_slot7;
                            r3 = r1.default;
                            r2 = r3.queryCache;
                            r1 = a0;
                            r1 = r2.bind(r3)(r1);
                            return r1;
case 36:
                            return r0;
                        }
                    };
                    return r0;
                };
                r3 = r3.bind(r4)(r2);
                _closure1_slot16 = r3;
                r2 = r3.apply;
                r0 = arguments;
                r1 = r0;
                r0 = this;
                r0 = r2.bind(r3)(r0, r1);
                return r0;
            };
            var _closure1_slot16 = r0;
            r0 = 0;
            r1 = r9[r0];
            r0 = undefined;
            r10 = r7.bind(r0)(r1);
            r22 = global;
            r8 = r22.Object;
            r5 = r8.defineProperty;
            r3 = {};
            r1 = true;
            r3['value'] = r1;
            r1 = '__esModule';
            r1 = r5.bind(r8)(r2, r1, r3);
            r2['default'] = r0;
            r1 = 1;
            r3 = r9[r1];
            r3 = r7.bind(r0)(r3);
            r3 = r10.bind(r0)(r3);
            var _closure1_slot2 = r3;
            r3 = 2;
            r3 = r9[r3];
            r3 = r7.bind(r0)(r3);
            r3 = r10.bind(r0)(r3);
            var _closure1_slot3 = r3;
            r3 = 3;
            r3 = r9[r3];
            r3 = r7.bind(r0)(r3);
            r3 = r10.bind(r0)(r3);
            r5 = 4;
            r5 = r9[r5];
            r5 = r7.bind(r0)(r5);
            r5 = r10.bind(r0)(r5);
            var _closure1_slot4 = r5;
            r5 = 5;
            r5 = r9[r5];
            r5 = r7.bind(r0)(r5);
            r5 = r10.bind(r0)(r5);
            var _closure1_slot5 = r5;
            r5 = 6;
            r5 = r9[r5];
            r5 = r7.bind(r0)(r5);
            r5 = r10.bind(r0)(r5);
            var _closure1_slot6 = r5;
            r5 = 7;
            r5 = r9[r5];
            r5 = r7.bind(r0)(r5);
            r5 = r10.bind(r0)(r5);
            var _closure1_slot7 = r5;
            r5 = 8;
            r5 = r9[r5];
            r5 = r7.bind(r0)(r5);
            r5 = r10.bind(r0)(r5);
            var _closure1_slot8 = r5;
            r8 = 9;
            r8 = r9[r8];
            r8 = r7.bind(r0)(r8);
            r8 = r10.bind(r0)(r8);
            var _closure1_slot9 = r8;
            r8 = 10;
            r8 = r9[r8];
            r11 = r7.bind(r0)(r8);
            if(!r11) { _fun4531_ip = 320; continue _fun4531 }
case 306:
            r8 = r11.__esModule;
            r10 = r11;
            if(r8) { _fun4531_ip = 587; continue _fun4531 }
case 320:
            r21 = null;
            if(!(r21 !== r11)) { _fun4531_ip = 578; continue _fun4531 }
case 329:
            r12 = typeof r11;
            r8 = 'object';
            if(!(r8 !== r12)) { _fun4531_ip = 351; continue _fun4531 }
case 340:
            r8 = 'function';
            if(!(r8 === r12)) { _fun4531_ip = 578; continue _fun4531 }
case 351:
            r8 = _closure1_slot13;
            r12 = r8.bind(r0)(r0);
            if(!r12) { _fun4531_ip = 379; continue _fun4531 }
case 363:
            r8 = r12.has;
            r8 = r8.bind(r12)(r11);
            if(r8) { _fun4531_ip = 566; continue _fun4531 }
case 379:
            r8 = Object.create(r21);
            r13 = r22.Object;
            r20 = r13.defineProperty;
            if(!r20) { _fun4531_ip = 407; continue _fun4531 }
case 396:
            r13 = r22.Object;
            r20 = r13.getOwnPropertyDescriptor;
case 407:
            r18 = r11;
            r14 = 'default';
            r13 = undefined;
            for(r15 in r18)
case 424:
            {
case 433:
                r26 = r15;
                if(r14 === r26) { _fun4531_ip = 424; continue _fun4531 }
case 440:
                r23 = {};
                r24 = r23.hasOwnProperty;
                r23 = r24.call;
                r23 = r23.bind(r24)(r11, r26);
                if(!r23) { _fun4531_ip = 424; continue _fun4531 }
case 461:
                r23 = null;
                if(!r20) { _fun4531_ip = 483; continue _fun4531 }
case 466:
                r25 = r22.Object;
                r24 = r25.getOwnPropertyDescriptor;
                r23 = r24.bind(r25)(r11, r26);
case 483:
                if(!r23) { _fun4531_ip = 502; continue _fun4531 }
case 486:
                r24 = r23.get;
                if(r24) { _fun4531_ip = 515; continue _fun4531 }
case 494:
                r24 = r23.set;
                if(r24) { _fun4531_ip = 515; continue _fun4531 }
case 502:
                r24 = r11[r26];
                r8[r26] = r24;
                r13 = r23;
                _fun4531_ip = 424; continue _fun4531;
case 515:
                r25 = r22.Object;
                r24 = r25.defineProperty;
                r24 = r24.bind(r25)(r8, r26, r23);
                r13 = r23;
                _fun4531_ip = 424; continue _fun4531;
            }
case 538:
            r8['default'] = r11;
            r10 = r8;
            if(!r12) { _fun4531_ip = 587; continue _fun4531 }
case 550:
            r13 = r12.set;
            r13 = r13.bind(r12)(r11, r8);
            r10 = r8;
            _fun4531_ip = 587; continue _fun4531;
case 566:
            r8 = r12.get;
            r10 = r8.bind(r12)(r11);
            _fun4531_ip = 587; continue _fun4531;
case 578:
            r8 = {};
            r8['default'] = r11;
            r10 = r8;
case 587:
            r8 = 11;
            r8 = r9[r8];
            r8 = r7.bind(r0)(r8);
            var _closure1_slot10 = r8;
            var _closure1_slot11 = r1;
            r8 = r10.forwardRef;
            r1 = function(a0, a1) { // Environment: r4
                _fun4548: for(var _fun4548_ip = 0; ; ) switch(_fun4548_ip) {
case 0:
                    r6 = a0;
                    r2 = _closure1_slot0;
                    r3 = _closure1_slot1;
                    r1 = 12;
                    r1 = r3[r1];
                    r3 = undefined;
                    r1 = r2.bind(r3)(r1);
                    r1 = r1.getImageSourcesFromImageProps;
                    r13 = r1.bind(r3)(r6);
                    if(r13) { _fun4548_ip = 62; continue _fun4548 }
case 44:
                    r1 = {};
                    r1['uri'] = r3;
                    r1['width'] = r3;
                    r1['height'] = r3;
                    r13 = r1;
case 62:
                    r1 = _closure1_slot8;
                    r5 = r1.default;
                    r2 = r6.defaultSource;
                    r11 = r5.bind(r3)(r2);
                    r2 = r1.default;
                    r1 = r6.loadingIndicatorSource;
                    r10 = r2.bind(r3)(r1);
                    r1 = r6.children;
                    r2 = null;
                    if(!(r1 == r2)) { _fun4548_ip = 1002; continue _fun4548 }
case 112:
                    r1 = r6.defaultSource;
                    if(!(r1 != r2)) { _fun4548_ip = 135; continue _fun4548 }
case 122:
                    r1 = r6.loadingIndicatorSource;
                    if(!(r1 == r2)) { _fun4548_ip = 968; continue _fun4548 }
case 135:
                    r7 = global;
                    r5 = r7.Array;
                    r1 = r5.isArray;
                    r1 = r1.bind(r5)(r13);
                    if(r1) { _fun4548_ip = 277; continue _fun4548 }
case 156:
                    r5 = r13.uri;
                    r1 = '';
                    if(!(r5 === r1)) { _fun4548_ip = 190; continue _fun4548 }
case 170:
                    r8 = r7.console;
                    r5 = r8.warn;
                    r1 = 'source.uri should not be an empty string';
                    r1 = r5.bind(r8)(r1);
case 190:
                    r8 = r13.width;
                    if(!(r8 == r2)) { _fun4548_ip = 204; continue _fun4548 }
case 199:
                    r8 = r6.width;
case 204:
                    r5 = r13.height;
                    if(!(r5 == r2)) { _fun4548_ip = 218; continue _fun4548 }
case 213:
                    r5 = r6.height;
case 218:
                    r1 = {};
                    r1['width'] = r8;
                    r1['height'] = r5;
                    r5 = new Array(3);
                    r5[0] = r1;
                    r1 = _closure1_slot12;
                    r1 = r1.base;
                    r5[1] = r1;
                    r1 = r6.style;
                    r5[2] = r1;
                    var _closure2_slot0 = r5;
                    r1 = new Array(1);
                    r1[0] = r13;
                    var _closure2_slot1 = r1;
                    _fun4548_ip = 318; continue _fun4548;
case 277:
                    r8 = _closure1_slot12;
                    r9 = r8.base;
                    r8 = new Array(2);
                    r8[0] = r9;
                    r9 = r6.style;
                    r8[1] = r9;
                    _closure2_slot0 = r8;
                    _closure2_slot1 = r13;
                    r5 = r8;
                    r1 = r13;
case 318:
                    r12 = r6.onLoadStart;
                    r16 = r6.onLoad;
                    r15 = r6.onLoadEnd;
                    r14 = r6.onError;
                    r9 = r7.Object;
                    r8 = r9.assign;
                    r7 = {};
                    r7['style'] = r5;
                    if(r12) { _fun4548_ip = 365; continue _fun4548 }
case 362:
                    r12 = r16;
case 365:
                    if(r12) { _fun4548_ip = 371; continue _fun4548 }
case 368:
                    r12 = r15;
case 371:
                    if(r12) { _fun4548_ip = 377; continue _fun4548 }
case 374:
                    r12 = r14;
case 377:
                    r12 = !r12;
                    r12 = !r12;
                    r7['shouldNotifyLoadEvents'] = r12;
                    r7['src'] = r1;
                    r7['source'] = r1;
                    r12 = r13 == r2;
                    r1 = undefined;
                    if(r12) { _fun4548_ip = 427; continue _fun4548 }
case 407:
                    r12 = 0;
                    r12 = r13[r12];
                    r14 = r12 == r2;
                    r1 = undefined;
                    if(r14) { _fun4548_ip = 427; continue _fun4548 }
case 422:
                    r1 = r12.headers;
case 427:
                    if(r1) { _fun4548_ip = 447; continue _fun4548 }
case 430:
                    r14 = r13 == r2;
                    r12 = undefined;
                    if(r14) { _fun4548_ip = 444; continue _fun4548 }
case 439:
                    r12 = r13.headers;
case 444:
                    r1 = r12;
case 447:
                    r7['headers'] = r1;
                    r1 = null;
                    if(!r11) { _fun4548_ip = 462; continue _fun4548 }
case 456:
                    r1 = r11.uri;
case 462:
                    r7['defaultSource'] = r1;
                    r1 = null;
                    if(!r10) { _fun4548_ip = 478; continue _fun4548 }
case 472:
                    r1 = r10.uri;
case 478:
                    r7['loadingIndicatorSrc'] = r1;
                    r1 = r6.aria-label;
                    if(!(r1 == r2)) { _fun4548_ip = 499; continue _fun4548 }
case 493:
                    r1 = r6.accessibilityLabel;
case 499:
                    if(!(r1 == r2)) { _fun4548_ip = 509; continue _fun4548 }
case 503:
                    r1 = r6.alt;
case 509:
                    r7['accessibilityLabel'] = r1;
                    r10 = r6 == r2;
                    r1 = undefined;
                    if(r10) { _fun4548_ip = 529; continue _fun4548 }
case 523:
                    r1 = r6.aria-labelledby;
case 529:
                    if(!(r1 == r2)) { _fun4548_ip = 551; continue _fun4548 }
case 533:
                    r11 = r6 == r2;
                    r10 = undefined;
                    if(r11) { _fun4548_ip = 548; continue _fun4548 }
case 542:
                    r10 = r6.accessibilityLabelledBy;
case 548:
                    r1 = r10;
case 551:
                    r7['accessibilityLabelledBy'] = r1;
                    r10 = r6.alt;
                    r1 = true;
                    if(!(r10 === r3)) { _fun4548_ip = 574; continue _fun4548 }
case 568:
                    r1 = r6.accessible;
case 574:
                    r7['accessible'] = r1;
                    r1 = {};
                    r10 = r6.aria-busy;
                    if(!(r10 == r2)) { _fun4548_ip = 614; continue _fun4548 }
case 591:
                    r12 = r6.accessibilityState;
                    r13 = r12 == r2;
                    r11 = undefined;
                    if(r13) { _fun4548_ip = 611; continue _fun4548 }
case 605:
                    r11 = r12.busy;
case 611:
                    r10 = r11;
case 614:
                    r1['busy'] = r10;
                    r10 = r6.aria-checked;
                    if(!(r10 == r2)) { _fun4548_ip = 652; continue _fun4548 }
case 629:
                    r12 = r6.accessibilityState;
                    r13 = r12 == r2;
                    r11 = undefined;
                    if(r13) { _fun4548_ip = 649; continue _fun4548 }
case 643:
                    r11 = r12.checked;
case 649:
                    r10 = r11;
case 652:
                    r1['checked'] = r10;
                    r10 = r6.aria-disabled;
                    if(!(r10 == r2)) { _fun4548_ip = 689; continue _fun4548 }
case 667:
                    r12 = r6.accessibilityState;
                    r13 = r12 == r2;
                    r11 = undefined;
                    if(r13) { _fun4548_ip = 686; continue _fun4548 }
case 681:
                    r11 = r12.disabled;
case 686:
                    r10 = r11;
case 689:
                    r1['disabled'] = r10;
                    r10 = r6.aria-expanded;
                    if(!(r10 == r2)) { _fun4548_ip = 726; continue _fun4548 }
case 703:
                    r12 = r6.accessibilityState;
                    r13 = r12 == r2;
                    r11 = undefined;
                    if(r13) { _fun4548_ip = 723; continue _fun4548 }
case 717:
                    r11 = r12.expanded;
case 723:
                    r10 = r11;
case 726:
                    r1['expanded'] = r10;
                    r10 = r6.aria-selected;
                    if(!(r10 == r2)) { _fun4548_ip = 764; continue _fun4548 }
case 741:
                    r12 = r6.accessibilityState;
                    r13 = r12 == r2;
                    r11 = undefined;
                    if(r13) { _fun4548_ip = 761; continue _fun4548 }
case 755:
                    r11 = r12.selected;
case 761:
                    r10 = r11;
case 764:
                    r1['selected'] = r10;
                    r7['accessibilityState'] = r1;
                    r1 = {};
                    r1 = r8.bind(r9)(r1, r6, r7);
                    var _closure2_slot2 = r1;
                    r1 = _closure1_slot3;
                    r1 = r1.default;
                    r5 = r1.bind(r3)(r5);
                    r7 = _closure1_slot0;
                    r8 = _closure1_slot1;
                    r1 = 13;
                    r1 = r8[r1];
                    r1 = r7.bind(r3)(r1);
                    r7 = r1.convertObjectFitToResizeMode;
                    r8 = r5 == r2;
                    r1 = undefined;
                    if(r8) { _fun4548_ip = 841; continue _fun4548 }
case 835:
                    r1 = r5.objectFit;
case 841:
                    r1 = r7.bind(r3)(r1);
                    if(r1) { _fun4548_ip = 855; continue _fun4548 }
case 849:
                    r1 = r6.resizeMode;
case 855:
                    if(r1) { _fun4548_ip = 876; continue _fun4548 }
case 858:
                    r6 = r5 == r2;
                    r2 = undefined;
                    if(r6) { _fun4548_ip = 873; continue _fun4548 }
case 867:
                    r2 = r5.resizeMode;
case 873:
                    r1 = r2;
case 876:
                    if(r1) { _fun4548_ip = 883; continue _fun4548 }
case 879:
                    r1 = 'cover';
case 883:
                    var _closure2_slot3 = r1;
                    r2 = _closure1_slot0;
                    r5 = _closure1_slot1;
                    r1 = 14;
                    r1 = r5[r1];
                    r1 = r2.bind(r3)(r1);
                    r2 = r1.useWrapRefWithImageAttachedCallbacks;
                    r1 = a1;
                    r1 = r2.bind(r3)(r1);
                    var _closure2_slot4 = r1;
                    r1 = _closure1_slot10;
                    r2 = r1.jsx;
                    r0 = _closure1_slot5;
                    r0 = r0.default;
                    r1 = r0.Consumer;
                    r0 = {};
                    r4 = function(a0) { // Original name: children, environment: r4
                        _fun4549: for(var _fun4549_ip = 0; ; ) switch(_fun4549_ip) {
case 0:
                            r2 = a0;
                            r1 = null;
                            if(!(r2 === r1)) { _fun4549_ip = 20; continue _fun4549 }
case 11:
                            r1 = _closure2_slot2;
                            _fun4549_ip = 56; continue _fun4549;
case 20:
                            r3 = global;
                            r6 = r3.Object;
                            r5 = r6.assign;
                            r4 = _closure2_slot2;
                            r3 = {};
                            r3['internal_analyticTag'] = r2;
                            r2 = {};
                            r1 = r5.bind(r6)(r2, r4, r3);
case 56:
                            var _closure3_slot0 = r1;
                            r2 = _closure1_slot10;
                            r3 = r2.jsx;
                            r1 = _closure1_slot4;
                            r1 = r1.default;
                            r2 = r1.Consumer;
                            r1 = {};
                            r0 = function(a0) { // Original name: children, environment: r0
                                _fun4550: for(var _fun4550_ip = 0; ; ) switch(_fun4550_ip) {
case 0:
                                    r1 = _closure1_slot10;
                                    r3 = r1.jsx;
                                    r1 = a0;
                                    if(r1) { _fun4550_ip = 88; continue _fun4550 }
case 18:
                                    r1 = _closure1_slot6;
                                    r4 = r1.default;
                                    r1 = global;
                                    r7 = r1.Object;
                                    r6 = r7.assign;
                                    r5 = _closure3_slot0;
                                    r2 = {};
                                    r8 = _closure2_slot3;
                                    r2['resizeMode'] = r8;
                                    r1 = _closure2_slot4;
                                    r2['ref'] = r1;
                                    r1 = {};
                                    r2 = r6.bind(r7)(r1, r5, r2);
                                    r1 = undefined;
                                    r1 = r3.bind(r1)(r4, r2);
                                    return r1;
case 88:
                                    r0 = _closure1_slot9;
                                    r2 = r0.default;
                                    r1 = {};
                                    r4 = _closure2_slot0;
                                    r1['style'] = r4;
                                    r4 = _closure2_slot3;
                                    r1['resizeMode'] = r4;
                                    r4 = _closure2_slot2;
                                    r4 = r4.headers;
                                    r1['headers'] = r4;
                                    r4 = _closure2_slot1;
                                    r1['src'] = r4;
                                    r0 = _closure2_slot4;
                                    r1['ref'] = r0;
                                    r0 = undefined;
                                    r0 = r3.bind(r0)(r2, r1);
                                    return r0;
                                }
                            };
                            r1['children'] = r0;
                            r0 = undefined;
                            r0 = r3.bind(r0)(r2, r1);
                            return r0;
                        }
                    };
                    r0['children'] = r4;
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
case 968:
                    r0 = global;
                    r2 = r0.Error;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r20 = 'The <Image> component cannot have defaultSource and loadingIndicatorSource at the same time. Please use either defaultSource or loadingIndicatorSource.';
                    r21 = r1;
                    r0 = new r21[r2](r20, r19);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
case 1002:
                    r0 = global;
                    r2 = r0.Error;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r20 = 'The <Image> component cannot contain children. If you want to render content on top of the image, consider using the <ImageBackground> component or absolute positioning.';
                    r21 = r1;
                    r0 = new r21[r2](r20, r19);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                }
            };
            r8 = r8.bind(r10)(r1);
            r1 = 14;
            r1 = r9[r1];
            r1 = r7.bind(r0)(r1);
            r1 = r1.unstable_getImageComponentDecorator;
            r7 = r1.bind(r0)();
            r9 = null;
            r1 = r8;
            if(!(r7 != r9)) { _fun4531_ip = 659; continue _fun4531 }
case 654:
            r1 = r7.bind(r0)(r8);
case 659:
            r7 = 'Image';
            r1['displayName'] = r7;
            r7 = function(a0, a1, a2) { // Original name: getSize, environment: r4
                _fun4535: for(var _fun4535_ip = 0; ; ) switch(_fun4535_ip) {
case 0:
                    r5 = a0;
                    r1 = a1;
                    r3 = a2;
                    var _closure2_slot0 = r5;
                    var _closure2_slot1 = r1;
                    r0 = _closure1_slot7;
                    r2 = r0.default;
                    r0 = r2.getSize;
                    r0 = r0.bind(r2)(r5);
                    r2 = typeof r1;
                    r1 = 'function';
                    if(!(r2 === r1)) { _fun4535_ip = 91; continue _fun4535 }
case 53:
                    r2 = r0.then;
                    r1 = function(a0) { // Environment: r4
                        r0 = a0;
                        r3 = _closure2_slot1;
                        r2 = r0.width;
                        r1 = r0.height;
                        r0 = undefined;
                        r0 = r3.bind(r0)(r2, r1);
                        return r0;
                    };
                    r2 = r2.bind(r0)(r1);
                    r1 = r2.catch;
                    if(r3) { _fun4535_ip = 82; continue _fun4535 }
case 77:
                    r3 = function() { // Environment: r4
                        r0 = global;
                        r2 = r0.console;
                        r1 = r2.warn;
                        r3 = _closure2_slot0;
                        r0 = 'Failed to get size for image: ';
                        r0 = r0 + r3;
                        r0 = r1.bind(r2)(r0);
                        r0 = undefined;
                        return r0;
                    };
case 82:
                    r1 = r1.bind(r2)(r3);
                    r1 = undefined;
                    return r1;
case 91:
                    return r0;
                }
            };
            r1['getSize'] = r7;
            r7 = function(a0, a1, a2, a3) { // Original name: getSizeWithHeaders, environment: r4
                _fun4538: for(var _fun4538_ip = 0; ; ) switch(_fun4538_ip) {
case 0:
                    r6 = a0;
                    r1 = a2;
                    r3 = a3;
                    var _closure2_slot0 = r6;
                    var _closure2_slot1 = r1;
                    r0 = _closure1_slot7;
                    r5 = r0.default;
                    r2 = r5.getSizeWithHeaders;
                    r0 = a1;
                    r0 = r2.bind(r5)(r6, r0);
                    r2 = typeof r1;
                    r1 = 'function';
                    if(!(r2 === r1)) { _fun4538_ip = 95; continue _fun4538 }
case 57:
                    r2 = r0.then;
                    r1 = function(a0) { // Environment: r4
                        r0 = a0;
                        r3 = _closure2_slot1;
                        r2 = r0.width;
                        r1 = r0.height;
                        r0 = undefined;
                        r0 = r3.bind(r0)(r2, r1);
                        return r0;
                    };
                    r2 = r2.bind(r0)(r1);
                    r1 = r2.catch;
                    if(r3) { _fun4538_ip = 86; continue _fun4538 }
case 81:
                    r3 = function() { // Environment: r4
                        r0 = global;
                        r2 = r0.console;
                        r1 = r2.warn;
                        r3 = _closure2_slot0;
                        r0 = 'Failed to get size for image: ';
                        r0 = r0 + r3;
                        r0 = r1.bind(r2)(r0);
                        r0 = undefined;
                        return r0;
                    };
case 86:
                    r1 = r1.bind(r2)(r3);
                    r1 = undefined;
                    return r1;
case 95:
                    return r0;
                }
            };
            r1['getSizeWithHeaders'] = r7;
            r1['prefetch'] = r6;
            r6 = function(a0, a1, a2, a3) { // Original name: prefetchWithMetadata, environment: r4
                r3 = _closure1_slot15;
                r2 = undefined;
                r1 = a0;
                r0 = a3;
                r0 = r3.bind(r2)(r1, r0);
                return r0;
            };
            r1['prefetchWithMetadata'] = r6;
            r6 = function(a0) { // Original name: abortPrefetch, environment: r4
                r0 = _closure1_slot7;
                r2 = r0.default;
                r1 = r2.abortRequest;
                r0 = a0;
                r0 = r1.bind(r2)(r0);
                r0 = undefined;
                return r0;
            };
            r1['abortPrefetch'] = r6;
            r6 = function(a0) { // Original name: queryCache, environment: r4
                r0 = undefined;
                r3 = _closure1_slot16;
                r2 = r3.apply;
                r0 = arguments;
                r1 = r0;
                r0 = this;
                r0 = r2.bind(r3)(r0, r1);
                return r0;
            };
            r1['queryCache'] = r6;
            r5 = r5.default;
            r1['resolveAssetSource'] = r5;
            r6 = r3.default;
            r5 = r6.create;
            r3 = {};
            r7 = {};
            r8 = 'hidden';
            r7['overflow'] = r8;
            r3['base'] = r7;
            r3 = r5.bind(r6)(r3);
            var _closure1_slot12 = r3;
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 362;
    r5 = [1, 363, 128, 253, 249, 364, 365, 366, 106, 368, 119, 251, 369, 370, 371];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        r2 = function(a0, a1, a2, a3, a4, a5, a6) { // Original name: asyncGeneratorStep, environment: r1
            _fun4552: for(var _fun4552_ip = 0; ; ) switch(_fun4552_ip) {
case 0:
                r9 = a0;
                r3 = a1;
                r0 = a2;
                r5 = a3;
                r4 = a4;
                r8 = a5;
                r7 = a6;
                r2 = undefined;
                r6 = undefined;
                r1 = undefined;
case 27: // try_start_0
                r8 = r9[r8];
                r7 = r8.bind(r9)(r7);
                r6 = r7;
                r1 = r7.value;
case 44: // try_end0
                r6 = r6.done;
                if(r6) { _fun4552_ip = 86; continue _fun4552 }
case 52:
                r6 = global;
                r8 = r6.Promise;
                r7 = r8.resolve;
                r6 = r1;
                r7 = r7.bind(r8)(r6);
                r6 = r7.then;
                r4 = r6.bind(r7)(r5, r4);
                _fun4552_ip = 91; continue _fun4552;
case 86:
                r1 = r3.bind(r2)(r1);
case 91:
                return r2;
case 93: // catch_target0
                CatchBlockStart(arg_register=1);
                r0 = r0.bind(r2)(r1);
                r0 = undefined;
                return r0;
            }
        };
        var _closure1_slot0 = r2;
        r1 = function(a0) { // Original name: _asyncToGenerator, environment: r1
            r1 = a0;
            var _closure2_slot0 = r1;
            r0 = function() { // Environment: r0
                r1 = undefined;
                r2 = this;
                var _closure3_slot0 = r2;
                r1 = arguments;
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
                    r1 = function(a0) { // Original name: _next, environment: r2
                        r8 = _closure1_slot0;
                        r15 = _closure4_slot2;
                        r14 = _closure4_slot0;
                        r13 = _closure4_slot1;
                        r12 = _closure4_slot3;
                        r11 = _closure4_slot4;
                        r0 = undefined;
                        r10 = 'next';
                        r9 = a0;
                        r16 = undefined;
                        r1 = r16[r8](r15, r14, r13, r12, r11, r10, r9, r8);
                        return r0;
                    };
                    var _closure4_slot3 = r1;
                    r0 = function(a0) { // Original name: _throw, environment: r2
                        r8 = _closure1_slot0;
                        r15 = _closure4_slot2;
                        r14 = _closure4_slot0;
                        r13 = _closure4_slot1;
                        r12 = _closure4_slot3;
                        r11 = _closure4_slot4;
                        r0 = undefined;
                        r10 = 'throw';
                        r9 = a0;
                        r16 = undefined;
                        r1 = r16[r8](r15, r14, r13, r12, r11, r10, r9, r8);
                        return r0;
                    };
                    var _closure4_slot4 = r0;
                    r5 = _closure2_slot0;
                    r4 = r5.apply;
                    r3 = _closure3_slot0;
                    r0 = _closure3_slot1;
                    r0 = r4.bind(r5)(r3, r0);
                    var _closure4_slot2 = r0;
                    r0 = undefined;
                    r1 = r1.bind(r0)(r0);
                    return r0;
                };
                r4 = r1;
                r0 = new r4[r2](r3, r2);
                r0 = r0 instanceof Object ? r0 : r1;
                return r0;
            };
            return r0;
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
    r6 = 363;
    r5 = new Array(0);
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun4558: for(var _fun4558_ip = 0; ; ) switch(_fun4558_ip) {
case 0:
            r2 = a5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun4559: for(var _fun4559_ip = 0; ; ) switch(_fun4559_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun4559_ip = 104; continue _fun4559 }
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
                        _fun4560: for(var _fun4560_ip = 0; ; ) switch(_fun4560_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun4560_ip = 15; continue _fun4560 }
case 9:
                            r0 = _closure2_slot0;
                            _fun4560_ip = 19; continue _fun4560;
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
            if(!r3) { _fun4558_ip = 88; continue _fun4558 }
case 74:
            r5 = r3.__esModule;
            r4 = r3;
            if(r5) { _fun4558_ip = 355; continue _fun4558 }
case 88:
            r14 = null;
            if(!(r14 !== r3)) { _fun4558_ip = 346; continue _fun4558 }
case 97:
            r6 = typeof r3;
            r5 = 'object';
            if(!(r5 !== r6)) { _fun4558_ip = 119; continue _fun4558 }
case 108:
            r5 = 'function';
            if(!(r5 === r6)) { _fun4558_ip = 346; continue _fun4558 }
case 119:
            r1 = _closure1_slot0;
            r5 = r1.bind(r0)(r0);
            if(!r5) { _fun4558_ip = 147; continue _fun4558 }
case 131:
            r1 = r5.has;
            r1 = r1.bind(r5)(r3);
            if(r1) { _fun4558_ip = 334; continue _fun4558 }
case 147:
            r1 = Object.create(r14);
            r6 = r15.Object;
            r13 = r6.defineProperty;
            if(!r13) { _fun4558_ip = 175; continue _fun4558 }
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
                if(r7 === r19) { _fun4558_ip = 192; continue _fun4558 }
case 208:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r3, r19);
                if(!r16) { _fun4558_ip = 192; continue _fun4558 }
case 229:
                r16 = null;
                if(!r13) { _fun4558_ip = 251; continue _fun4558 }
case 234:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r3, r19);
case 251:
                if(!r16) { _fun4558_ip = 270; continue _fun4558 }
case 254:
                r17 = r16.get;
                if(r17) { _fun4558_ip = 283; continue _fun4558 }
case 262:
                r17 = r16.set;
                if(r17) { _fun4558_ip = 283; continue _fun4558 }
case 270:
                r17 = r3[r19];
                r1[r19] = r17;
                r6 = r16;
                _fun4558_ip = 192; continue _fun4558;
case 283:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r1, r19, r16);
                r6 = r16;
                _fun4558_ip = 192; continue _fun4558;
            }
case 306:
            r1['default'] = r3;
            r4 = r1;
            if(!r5) { _fun4558_ip = 355; continue _fun4558 }
case 318:
            r6 = r5.set;
            r6 = r6.bind(r5)(r3, r1);
            r4 = r1;
            _fun4558_ip = 355; continue _fun4558;
case 334:
            r1 = r5.get;
            r4 = r1.bind(r5)(r3);
            _fun4558_ip = 355; continue _fun4558;
case 346:
            r1 = {};
            r1['default'] = r3;
            r4 = r1;
case 355:
            r3 = r4.createContext;
            r1 = null;
            r1 = r3.bind(r4)(r1);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 364;
    r5 = [119];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun4561: for(var _fun4561_ip = 0; ; ) switch(_fun4561_ip) {
case 0:
            r9 = a1;
            r2 = a5;
            r10 = a6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun4562: for(var _fun4562_ip = 0; ; ) switch(_fun4562_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun4562_ip = 104; continue _fun4562 }
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
                        _fun4563: for(var _fun4563_ip = 0; ; ) switch(_fun4563_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun4563_ip = 15; continue _fun4563 }
case 9:
                            r0 = _closure2_slot0;
                            _fun4563_ip = 19; continue _fun4563;
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
            r3 = r10[r0];
            r0 = undefined;
            r7 = r9.bind(r0)(r3);
            r4 = global;
            r8 = r4.Object;
            r6 = r8.defineProperty;
            r5 = {};
            r3 = true;
            r5['value'] = r3;
            r3 = '__esModule';
            r3 = r6.bind(r8)(r2, r3, r5);
            r2['Commands'] = r0;
            r2['__INTERNAL_VIEW_CONFIG'] = r0;
            r2['default'] = r0;
            r3 = 1;
            r3 = r10[r3];
            r6 = r9.bind(r0)(r3);
            if(!r6) { _fun4561_ip = 112; continue _fun4561 }
case 98:
            r3 = r6.__esModule;
            r5 = r6;
            if(r3) { _fun4561_ip = 379; continue _fun4561 }
case 112:
            r19 = null;
            if(!(r19 !== r6)) { _fun4561_ip = 370; continue _fun4561 }
case 121:
            r8 = typeof r6;
            r3 = 'object';
            if(!(r3 !== r8)) { _fun4561_ip = 143; continue _fun4561 }
case 132:
            r3 = 'function';
            if(!(r3 === r8)) { _fun4561_ip = 370; continue _fun4561 }
case 143:
            r3 = _closure1_slot1;
            r8 = r3.bind(r0)(r0);
            if(!r8) { _fun4561_ip = 171; continue _fun4561 }
case 155:
            r3 = r8.has;
            r3 = r3.bind(r8)(r6);
            if(r3) { _fun4561_ip = 358; continue _fun4561 }
case 171:
            r3 = Object.create(r19);
            r11 = r4.Object;
            r18 = r11.defineProperty;
            if(!r18) { _fun4561_ip = 199; continue _fun4561 }
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
                if(r12 === r23) { _fun4561_ip = 216; continue _fun4561 }
case 232:
                r20 = {};
                r21 = r20.hasOwnProperty;
                r20 = r21.call;
                r20 = r20.bind(r21)(r6, r23);
                if(!r20) { _fun4561_ip = 216; continue _fun4561 }
case 253:
                r20 = null;
                if(!r18) { _fun4561_ip = 275; continue _fun4561 }
case 258:
                r22 = r4.Object;
                r21 = r22.getOwnPropertyDescriptor;
                r20 = r21.bind(r22)(r6, r23);
case 275:
                if(!r20) { _fun4561_ip = 294; continue _fun4561 }
case 278:
                r21 = r20.get;
                if(r21) { _fun4561_ip = 307; continue _fun4561 }
case 286:
                r21 = r20.set;
                if(r21) { _fun4561_ip = 307; continue _fun4561 }
case 294:
                r21 = r6[r23];
                r3[r23] = r21;
                r11 = r20;
                _fun4561_ip = 216; continue _fun4561;
case 307:
                r22 = r4.Object;
                r21 = r22.defineProperty;
                r21 = r21.bind(r22)(r3, r23, r20);
                r11 = r20;
                _fun4561_ip = 216; continue _fun4561;
            }
case 330:
            r3['default'] = r6;
            r5 = r3;
            if(!r8) { _fun4561_ip = 379; continue _fun4561 }
case 342:
            r11 = r8.set;
            r11 = r11.bind(r8)(r6, r3);
            r5 = r3;
            _fun4561_ip = 379; continue _fun4561;
case 358:
            r3 = r8.get;
            r5 = r3.bind(r8)(r6);
            _fun4561_ip = 379; continue _fun4561;
case 370:
            r3 = {};
            r3['default'] = r6;
            r5 = r3;
case 379:
            r3 = 2;
            r3 = r10[r3];
            r3 = r9.bind(r0)(r3);
            r6 = r7.bind(r0)(r3);
            r3 = 3;
            r3 = r10[r3];
            r3 = r9.bind(r0)(r3);
            r3 = r7.bind(r0)(r3);
            r7 = r6.default;
            r6 = {};
            r8 = ['setIsVisible_EXPERIMENTAL'];
            r6['supportedCommands'] = r8;
            r6 = r7.bind(r0)(r6);
            r2['Commands'] = r6;
            r3 = r3.default;
            r6 = r3.OS;
            r3 = 'android';
            if(!(r6 !== r3)) { _fun4561_ip = 732; continue _fun4561 }
case 465:
            r3 = {};
            r6 = 'RCTImageView';
            r3['uiViewClassName'] = r6;
            r6 = {};
            r3['bubblingEventTypes'] = r6;
            r6 = {};
            r7 = {};
            r8 = 'onLoadStart';
            r7['registrationName'] = r8;
            r6['topLoadStart'] = r7;
            r7 = {};
            r8 = 'onProgress';
            r7['registrationName'] = r8;
            r6['topProgress'] = r7;
            r7 = {};
            r8 = 'onError';
            r7['registrationName'] = r8;
            r6['topError'] = r7;
            r7 = {};
            r8 = 'onPartialLoad';
            r7['registrationName'] = r8;
            r6['topPartialLoad'] = r7;
            r7 = {};
            r8 = 'onLoad';
            r7['registrationName'] = r8;
            r6['topLoad'] = r7;
            r7 = {};
            r8 = 'onLoadEnd';
            r7['registrationName'] = r8;
            r6['topLoadEnd'] = r7;
            r3['directEventTypes'] = r6;
            r8 = r4.Object;
            r7 = r8.assign;
            r6 = {'blurRadius': true, 'capInsets': null, 'defaultSource': null, 'internal_analyticTag': true, 'resizeMode': true, 'source': true};
            r4 = {};
            r11 = 5;
            r11 = r10[r11];
            r11 = r9.bind(r0)(r11);
            r11 = r11.default;
            r4['diff'] = r11;
            r6['capInsets'] = r4;
            r4 = {};
            r11 = 6;
            r11 = r10[r11];
            r11 = r9.bind(r0)(r11);
            r11 = r11.default;
            r4['process'] = r11;
            r6['defaultSource'] = r4;
            r4 = {};
            r11 = 4;
            r11 = r10[r11];
            r11 = r9.bind(r0)(r11);
            r11 = r11.default;
            r4['process'] = r11;
            r6['tintColor'] = r4;
            r4 = 7;
            r4 = r10[r4];
            r4 = r9.bind(r0)(r4);
            r11 = r4.ConditionallyIgnoredEventHandlers;
            r4 = {'onLoadStart': true, 'onLoad': true, 'onLoadEnd': true, 'onProgress': true, 'onError': true, 'onPartialLoad': true};
            r4 = r11.bind(r0)(r4);
            r4 = r7.bind(r8)(r6, r4);
            r3['validAttributes'] = r4;
            _fun4561_ip = 927; continue _fun4561;
case 732:
            r4 = {};
            r6 = 'RCTImageView';
            r4['uiViewClassName'] = r6;
            r6 = {};
            r4['bubblingEventTypes'] = r6;
            r6 = {};
            r7 = {};
            r8 = 'onLoadStart';
