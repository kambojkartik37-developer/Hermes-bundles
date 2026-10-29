                            r1 = r1.props;
                            r1 = r1.isVisible;
                            if(r1) { _fun5893_ip = 43; continue _fun5893 }
case 39:
                            r1 = false;
                            return r1;
case 43:
                            r0 = _closure3_slot0;
                            r1 = r0.props;
                            r0 = r1.onBackButtonPress;
                            r0 = r0.bind(r1)();
                            r0 = true;
                            return r0;
                        }
                    };
                    r0['onBackButtonPress'] = r4;
                    r4 = function(a0, a1) { // Environment: r3
                        _fun5894: for(var _fun5894_ip = 0; ; ) switch(_fun5894_ip) {
case 0:
                            r0 = _closure3_slot0;
                            r0 = r0.props;
                            r0 = r0.propagateSwipe;
                            r2 = typeof r0;
                            r0 = 'function';
                            if(!(r2 !== r0)) { _fun5894_ip = 46; continue _fun5894 }
case 29:
                            r0 = _closure3_slot0;
                            r0 = r0.props;
                            r0 = r0.propagateSwipe;
                            _fun5894_ip = 73; continue _fun5894;
case 46:
                            r1 = _closure3_slot0;
                            r4 = r1.props;
                            r3 = r4.propagateSwipe;
                            r2 = a0;
                            r1 = a1;
                            r0 = r3.bind(r4)(r2, r1);
case 73:
                            return r0;
                        }
                    };
                    r0['shouldPropagateSwipe'] = r4;
                    r4 = function() { // Environment: r3
                        r0 = null;
                        var _closure4_slot0 = r0;
                        r1 = _closure3_slot0;
                        r0 = _closure1_slot9;
                        r3 = r0.PanResponder;
                        r2 = r3.create;
                        r0 = {};
                        r5 = function(a0, a1) { // Original name: onMoveShouldSetPanResponder, environment: r4
                            _fun5896: for(var _fun5896_ip = 0; ; ) switch(_fun5896_ip) {
case 0:
                                r3 = a1;
                                r4 = _closure3_slot0;
                                r2 = r4.shouldPropagateSwipe;
                                r0 = a0;
                                r0 = r2.bind(r4)(r0, r3);
                                if(r0) { _fun5896_ip = 201; continue _fun5896 }
case 31:
                                r2 = global;
                                r5 = r2.Math;
                                r4 = r5.abs;
                                r0 = r3.dx;
                                r4 = r4.bind(r5)(r0);
                                r0 = _closure3_slot0;
                                r0 = r0.props;
                                r0 = r0.panResponderThreshold;
                                r0 = r4 >= r0;
                                if(r0) { _fun5896_ip = 120; continue _fun5896 }
case 78:
                                r5 = r2.Math;
                                r4 = r5.abs;
                                r2 = r3.dy;
                                r4 = r4.bind(r5)(r2);
                                r2 = _closure3_slot0;
                                r2 = r2.props;
                                r2 = r2.panResponderThreshold;
                                r0 = r4 >= r2;
case 120:
                                if(!r0) { _fun5896_ip = 161; continue _fun5896 }
case 123:
                                r2 = _closure3_slot0;
                                r2 = r2.props;
                                r2 = r2.onSwipeStart;
                                if(!r2) { _fun5896_ip = 161; continue _fun5896 }
case 141:
                                r2 = _closure3_slot0;
                                r4 = r2.props;
                                r2 = r4.onSwipeStart;
                                r2 = r2.bind(r4)(r3);
case 161:
                                r2 = _closure3_slot0;
                                r1 = r2.getSwipingDirection;
                                r1 = r1.bind(r2)(r3);
                                r2['currentSwipingDirection'] = r1;
                                r1 = r2.createAnimationEventForSwipe;
                                r2 = r1.bind(r2)();
                                _closure4_slot0 = r2;
                                return r0;
case 201:
                                r0 = false;
                                return r0;
                            }
                        };
                        r0['onMoveShouldSetPanResponder'] = r5;
                        r5 = function(a0, a1) { // Original name: onStartShouldSetPanResponder, environment: r4
                            _fun5897: for(var _fun5897_ip = 0; ; ) switch(_fun5897_ip) {
case 0:
                                r4 = a0;
                                r3 = a1;
                                r0 = r4._dispatchInstances;
                                if(!r0) { _fun5897_ip = 37; continue _fun5897 }
case 14:
                                r5 = r4._dispatchInstances;
                                r2 = r5.some;
                                r1 = function(a0) { // Environment: r1
                                    r2 = /scrollview|flatlist/i;
                                    r1 = r2.test;
                                    r0 = a0;
                                    r0 = r0.type;
                                    r0 = r1.bind(r2)(r0);
                                    return r0;
                                };
                                r0 = r2.bind(r5)(r1);
case 37:
                                if(!r0) { _fun5897_ip = 101; continue _fun5897 }
case 40:
                                r2 = _closure3_slot0;
                                r1 = r2.shouldPropagateSwipe;
                                r1 = r1.bind(r2)(r4, r3);
                                if(!r1) { _fun5897_ip = 101; continue _fun5897 }
case 62:
                                r1 = _closure3_slot0;
                                r1 = r1.props;
                                r1 = r1.scrollTo;
                                if(!r1) { _fun5897_ip = 101; continue _fun5897 }
case 80:
                                r0 = _closure3_slot0;
                                r0 = r0.props;
                                r1 = r0.scrollOffset;
                                r0 = 0;
                                if(!(!(r1 > r0))) { _fun5897_ip = 158; continue _fun5897 }
case 101:
                                r1 = _closure3_slot0;
                                r1 = r1.props;
                                r1 = r1.onSwipeStart;
                                if(!r1) { _fun5897_ip = 142; continue _fun5897 }
case 122:
                                r1 = _closure3_slot0;
                                r2 = r1.props;
                                r1 = r2.onSwipeStart;
                                r1 = r1.bind(r2)(r3);
case 142:
                                r1 = _closure3_slot0;
                                r0 = null;
                                r1['currentSwipingDirection'] = r0;
                                r0 = true;
                                return r0;
case 158:
                                r0 = false;
                                return r0;
                            }
                        };
                        r0['onStartShouldSetPanResponder'] = r5;
                        r5 = function(a0, a1) { // Original name: onPanResponderMove, environment: r4
                            _fun5899: for(var _fun5899_ip = 0; ; ) switch(_fun5899_ip) {
case 0:
                                r3 = a1;
                                r1 = _closure3_slot0;
                                r1 = r1.currentSwipingDirection;
                                if(r1) { _fun5899_ip = 85; continue _fun5899 }
case 19:
                                r1 = r3.dx;
                                r2 = 0;
                                if(!(r1 === r2)) { _fun5899_ip = 41; continue _fun5899 }
case 31:
                                r1 = r3.dy;
                                if(!(r1 !== r2)) { _fun5899_ip = 81; continue _fun5899 }
case 41:
                                r2 = _closure3_slot0;
                                r1 = r2.getSwipingDirection;
                                r1 = r1.bind(r2)(r3);
                                r2['currentSwipingDirection'] = r1;
                                r1 = r2.createAnimationEventForSwipe;
                                r2 = r1.bind(r2)();
                                _closure4_slot0 = r2;
                                _fun5899_ip = 85; continue _fun5899;
case 81:
                                r1 = undefined;
                                return r1;
case 85:
                                r2 = _closure3_slot0;
                                r1 = r2.isSwipeDirectionAllowed;
                                r2 = r1.bind(r2)(r3);
                                r1 = _closure3_slot0;
                                if(r2) { _fun5899_ip = 343; continue _fun5899 }
case 110:
                                r2 = r1.props;
                                r2 = r2.scrollTo;
                                if(!r2) { _fun5899_ip = 469; continue _fun5899 }
case 127:
                                r2 = _closure3_slot0;
                                r2 = r2.props;
                                r2 = r2.scrollHorizontal;
                                if(r2) { _fun5899_ip = 244; continue _fun5899 }
case 145:
                                r2 = r3.dy;
                                r4 = -r2;
                                r2 = _closure3_slot0;
                                r2 = r2.props;
                                r2 = r2.scrollOffsetMax;
                                r6 = r4;
                                if(!(r6 > r2)) { _fun5899_ip = 206; continue _fun5899 }
case 176:
                                r2 = _closure3_slot0;
                                r2 = r2.props;
                                r2 = r2.scrollOffsetMax;
                                r5 = r4 - r2;
                                r2 = 2;
                                r2 = r5 / r2;
                                r6 = r4 - r2;
case 206:
                                r2 = _closure3_slot0;
                                r5 = r2.props;
                                r4 = r5.scrollTo;
                                r2 = {};
                                r2['y'] = r6;
                                r6 = false;
                                r2['animated'] = r6;
                                r2 = r4.bind(r5)(r2);
                                _fun5899_ip = 469; continue _fun5899;
case 244:
                                r2 = r3.dx;
                                r4 = -r2;
                                r2 = _closure3_slot0;
                                r2 = r2.props;
                                r2 = r2.scrollOffsetMax;
                                r6 = r4;
                                if(!(r6 > r2)) { _fun5899_ip = 305; continue _fun5899 }
case 275:
                                r2 = _closure3_slot0;
                                r2 = r2.props;
                                r2 = r2.scrollOffsetMax;
                                r5 = r4 - r2;
                                r2 = 2;
                                r2 = r5 / r2;
                                r6 = r4 - r2;
case 305:
                                r2 = _closure3_slot0;
                                r5 = r2.props;
                                r4 = r5.scrollTo;
                                r2 = {};
                                r2['x'] = r6;
                                r6 = false;
                                r2['animated'] = r6;
                                r2 = r4.bind(r5)(r2);
                                _fun5899_ip = 469; continue _fun5899;
case 343:
                                r2 = r1.calcDistancePercentage;
                                r4 = r2.bind(r1)(r3);
                                r2 = 1;
                                r2 = r2 - r4;
                                r1 = r1.backdropRef;
                                if(!r1) { _fun5899_ip = 412; continue _fun5899 }
case 370:
                                r6 = _closure3_slot0;
                                r5 = r6.backdropRef;
                                r4 = r5.transitionTo;
                                r1 = {};
                                r6 = r6.props;
                                r6 = r6.backdropOpacity;
                                r6 = r6 * r2;
                                r1['opacity'] = r6;
                                r1 = r4.bind(r5)(r1);
case 412:
                                r5 = _closure4_slot0;
                                r4 = undefined;
                                r1 = a0;
                                r1 = r5.bind(r4)(r1, r3);
                                r1 = _closure3_slot0;
                                r1 = r1.props;
                                r1 = r1.onSwipeMove;
                                if(!r1) { _fun5899_ip = 469; continue _fun5899 }
case 448:
                                r0 = _closure3_slot0;
                                r1 = r0.props;
                                r0 = r1.onSwipeMove;
                                r0 = r0.bind(r1)(r2, r3);
case 469:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['onPanResponderMove'] = r5;
                        r4 = function(a0, a1) { // Original name: onPanResponderRelease, environment: r4
                            _fun5900: for(var _fun5900_ip = 0; ; ) switch(_fun5900_ip) {
case 0:
                                r3 = a1;
                                r1 = _closure3_slot0;
                                r2 = r1.getAccDistancePerDirection;
                                r2 = r2.bind(r1)(r3);
                                r1 = r1.props;
                                r1 = r1.swipeThreshold;
                                if(!(r2 > r1)) { _fun5900_ip = 96; continue _fun5900 }
case 36:
                                r2 = _closure3_slot0;
                                r1 = r2.isSwipeDirectionAllowed;
                                r1 = r1.bind(r2)(r3);
                                if(!r1) { _fun5900_ip = 96; continue _fun5900 }
case 54:
                                r1 = _closure3_slot0;
                                r1 = r1.props;
                                r1 = r1.onSwipeComplete;
                                r5 = _closure3_slot0;
                                if(r1) { _fun5900_ip = 382; continue _fun5900 }
case 79:
                                r1 = r5.props;
                                r1 = r1.onSwipe;
                                if(r1) { _fun5900_ip = 351; continue _fun5900 }
case 96:
                                r1 = _closure3_slot0;
                                r1 = r1.props;
                                r1 = r1.onSwipeCancel;
                                if(!r1) { _fun5900_ip = 134; continue _fun5900 }
case 114:
                                r1 = _closure3_slot0;
                                r2 = r1.props;
                                r1 = r2.onSwipeCancel;
                                r1 = r1.bind(r2)(r3);
case 134:
                                r1 = _closure3_slot0;
                                r1 = r1.backdropRef;
                                if(!r1) { _fun5900_ip = 185; continue _fun5900 }
case 147:
                                r6 = _closure3_slot0;
                                r4 = r6.backdropRef;
                                r2 = r4.transitionTo;
                                r1 = {};
                                r6 = r6.props;
                                r6 = r6.backdropOpacity;
                                r1['opacity'] = r6;
                                r1 = r2.bind(r4)(r1);
case 185:
                                r1 = _closure1_slot9;
                                r7 = r1.Animated;
                                r6 = r7.spring;
                                r1 = _closure3_slot0;
                                r2 = r1.state;
                                r4 = r2.pan;
                                r2 = {'toValue': null, 'bounciness': 0, 'useNativeDriver': false};
                                r8 = {'x': 0, 'y': 0};
                                r2['toValue'] = r8;
                                r4 = r6.bind(r7)(r4, r2);
                                r2 = r4.start;
                                r2 = r2.bind(r4)();
                                r1 = r1.props;
                                r1 = r1.scrollTo;
                                if(!r1) { _fun5900_ip = 347; continue _fun5900 }
case 273:
                                r1 = _closure3_slot0;
                                r2 = r1.props;
                                r2 = r2.scrollOffset;
                                r1 = r1.props;
                                r1 = r1.scrollOffsetMax;
                                if(!(r2 > r1)) { _fun5900_ip = 347; continue _fun5900 }
case 303:
                                r6 = _closure3_slot0;
                                r4 = r6.props;
                                r2 = r4.scrollTo;
                                r1 = {};
                                r6 = r6.props;
                                r6 = r6.scrollOffsetMax;
                                r1['y'] = r6;
                                r6 = true;
                                r1['animated'] = r6;
                                r1 = r2.bind(r4)(r1);
case 347:
                                r1 = undefined;
                                return r1;
case 351:
                                r0 = _closure3_slot0;
                                r1 = true;
                                r0['inSwipeClosingState'] = r1;
                                r1 = r0.props;
                                r0 = r1.onSwipe;
                                r0 = r0.bind(r1)();
                                r0 = undefined;
                                return r0;
case 382:
                                r0 = true;
                                r5['inSwipeClosingState'] = r0;
                                r2 = r5.props;
                                r1 = r2.onSwipeComplete;
                                r0 = {};
                                r4 = r5.getSwipingDirection;
                                r4 = r4.bind(r5)(r3);
                                r0['swipingDirection'] = r4;
                                r0 = r1.bind(r2)(r0, r3);
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['onPanResponderRelease'] = r4;
                        r0 = r2.bind(r3)(r0);
                        r1['panResponder'] = r0;
                        r0 = undefined;
                        return r0;
                    };
                    r0['buildPanResponder'] = r4;
                    r4 = function(a0) { // Environment: r3
                        _fun5901: for(var _fun5901_ip = 0; ; ) switch(_fun5901_ip) {
case 0:
                            r0 = a0;
                            r1 = _closure3_slot0;
                            r2 = r1.currentSwipingDirection;
                            r1 = 'up';
                            if(!(r1 !== r2)) { _fun5901_ip = 79; continue _fun5901 }
case 24:
                            r1 = 'down';
                            if(!(r1 !== r2)) { _fun5901_ip = 71; continue _fun5901 }
case 32:
                            r1 = 'right';
                            if(!(r1 !== r2)) { _fun5901_ip = 63; continue _fun5901 }
case 40:
                            r1 = 'left';
                            if(!(r1 !== r2)) { _fun5901_ip = 52; continue _fun5901 }
case 48:
                            r1 = 0;
                            return r1;
case 52:
                            r1 = r0.dx;
                            r1 = -r1;
                            return r1;
case 63:
                            r1 = r0.dx;
                            return r1;
case 71:
                            r1 = r0.dy;
                            return r1;
case 79:
                            r0 = r0.dy;
                            r0 = -r0;
                            return r0;
                        }
                    };
                    r0['getAccDistancePerDirection'] = r4;
                    r4 = function(a0) { // Environment: r3
                        _fun5902: for(var _fun5902_ip = 0; ; ) switch(_fun5902_ip) {
case 0:
                            r0 = a0;
                            r1 = global;
                            r4 = r1.Math;
                            r3 = r4.abs;
                            r2 = r0.dx;
                            r2 = r3.bind(r4)(r2);
                            r4 = r1.Math;
                            r3 = r4.abs;
                            r1 = r0.dy;
                            r1 = r3.bind(r4)(r1);
                            if(!(!(r2 > r1))) { _fun5902_ip = 80; continue _fun5902 }
case 55:
                            r2 = r0.dy;
                            r1 = 0;
                            r2 = r2 > r1;
                            r1 = 'up';
                            if(!r2) { _fun5902_ip = 78; continue _fun5902 }
case 74:
                            r1 = 'down';
case 78:
                            return r1;
case 80:
                            r1 = r0.dx;
                            r0 = 0;
                            r1 = r1 > r0;
                            r0 = 'left';
                            if(!r1) { _fun5902_ip = 103; continue _fun5902 }
case 99:
                            r0 = 'right';
case 103:
                            return r0;
                        }
                    };
                    r0['getSwipingDirection'] = r4;
                    r4 = function(a0) { // Environment: r3
                        _fun5903: for(var _fun5903_ip = 0; ; ) switch(_fun5903_ip) {
case 0:
                            r0 = a0;
                            r1 = _closure3_slot0;
                            r2 = r1.currentSwipingDirection;
                            r1 = 'down';
                            if(!(r1 !== r2)) { _fun5903_ip = 231; continue _fun5903 }
case 27:
                            r1 = 'up';
                            if(!(r1 !== r2)) { _fun5903_ip = 177; continue _fun5903 }
case 38:
                            r1 = 'left';
                            if(!(r1 !== r2)) { _fun5903_ip = 123; continue _fun5903 }
case 46:
                            r1 = 'right';
                            if(!(r1 !== r2)) { _fun5903_ip = 58; continue _fun5903 }
case 54:
                            r1 = 0;
                            return r1;
case 58:
                            r2 = r0.moveX;
                            r1 = r0.x0;
                            r2 = r2 - r1;
                            r1 = _closure3_slot0;
                            r1 = r1.props;
                            r4 = r1.deviceWidth;
                            if(r4) { _fun5903_ip = 107; continue _fun5903 }
case 92:
                            r1 = _closure3_slot0;
                            r1 = r1.state;
                            r4 = r1.deviceWidth;
case 107:
                            r1 = r0.x0;
                            r1 = r4 - r1;
                            r1 = r2 / r1;
                            return r1;
case 123:
                            r2 = _closure1_slot0;
                            r4 = _closure1_slot1;
                            r1 = 11;
                            r1 = r4[r1];
                            r4 = undefined;
                            r1 = r2.bind(r4)(r1);
                            r2 = r1.reversePercentage;
                            r5 = r0.moveX;
                            r1 = r0.x0;
                            r1 = r5 / r1;
                            r1 = r2.bind(r4)(r1);
                            return r1;
case 177:
                            r2 = _closure1_slot0;
                            r4 = _closure1_slot1;
                            r1 = 11;
                            r1 = r4[r1];
                            r4 = undefined;
                            r1 = r2.bind(r4)(r1);
                            r2 = r1.reversePercentage;
                            r5 = r0.moveY;
                            r1 = r0.y0;
                            r1 = r5 / r1;
                            r1 = r2.bind(r4)(r1);
                            return r1;
case 231:
                            r2 = r0.moveY;
                            r1 = r0.y0;
                            r1 = r2 - r1;
                            r2 = _closure3_slot0;
                            r2 = r2.props;
                            r2 = r2.deviceHeight;
                            if(r2) { _fun5903_ip = 280; continue _fun5903 }
case 265:
                            r3 = _closure3_slot0;
                            r3 = r3.state;
                            r2 = r3.deviceHeight;
case 280:
                            r0 = r0.y0;
                            r0 = r2 - r0;
                            r0 = r1 / r0;
                            return r0;
                        }
                    };
                    r0['calcDistancePercentage'] = r4;
                    r4 = function() { // Environment: r3
                        _fun5904: for(var _fun5904_ip = 0; ; ) switch(_fun5904_ip) {
case 0:
                            r0 = _closure3_slot0;
                            r2 = r0.currentSwipingDirection;
                            r0 = 'right';
                            if(!(r2 !== r0)) { _fun5904_ip = 111; continue _fun5904 }
case 21:
                            r0 = _closure3_slot0;
                            r2 = r0.currentSwipingDirection;
                            r0 = 'left';
                            if(!(r2 !== r0)) { _fun5904_ip = 111; continue _fun5904 }
case 39:
                            r0 = _closure1_slot9;
                            r4 = r0.Animated;
                            r3 = r4.event;
                            r0 = {};
                            r2 = _closure3_slot0;
                            r2 = r2.state;
                            r2 = r2.pan;
                            r2 = r2.y;
                            r0['dy'] = r2;
                            r2 = [null];
                            r2[1] = r0;
                            r0 = {};
                            r5 = false;
                            r0['useNativeDriver'] = r5;
                            r0 = r3.bind(r4)(r2, r0);
                            return r0;
case 111:
                            r0 = _closure1_slot9;
                            r3 = r0.Animated;
                            r2 = r3.event;
                            r0 = {};
                            r1 = _closure3_slot0;
                            r1 = r1.state;
                            r1 = r1.pan;
                            r1 = r1.x;
                            r0['dx'] = r1;
                            r1 = [null];
                            r1[1] = r0;
                            r0 = {};
                            r4 = false;
                            r0['useNativeDriver'] = r4;
                            r0 = r2.bind(r3)(r1, r0);
                            return r0;
                        }
                    };
                    r0['createAnimationEventForSwipe'] = r4;
                    r4 = function(a0) { // Environment: r3
                        _fun5905: for(var _fun5905_ip = 0; ; ) switch(_fun5905_ip) {
case 0:
                            r3 = a0;
                            r0 = global;
                            r4 = r0.Array;
                            r2 = r4.isArray;
                            r0 = _closure3_slot0;
                            r0 = r0.props;
                            r0 = r0.swipeDirection;
                            r0 = r2.bind(r4)(r0);
                            r1 = _closure3_slot0;
                            r1 = r1.props;
                            r2 = r1.swipeDirection;
                            if(r0) { _fun5905_ip = 63; continue _fun5905 }
case 57:
                            r0 = r2 === r3;
                            _fun5905_ip = 74; continue _fun5905;
case 63:
                            r1 = r2.includes;
                            r0 = r1.bind(r2)(r3);
case 74:
                            return r0;
                        }
                    };
                    r0['isDirectionIncluded'] = r4;
                    r4 = function(a0) { // Environment: r3
                        _fun5906: for(var _fun5906_ip = 0; ; ) switch(_fun5906_ip) {
case 0:
                            r1 = a0;
                            r0 = r1.dy;
                            r2 = r1.dx;
                            r1 = 0;
                            r3 = r0 > r1;
                            r4 = r0 < r1;
                            r0 = r2 < r1;
                            r2 = r2 > r1;
                            r5 = _closure3_slot0;
                            r5 = r5.currentSwipingDirection;
                            r7 = 'up';
                            if(!(r5 === r7)) { _fun5906_ip = 78; continue _fun5906 }
case 54:
                            r6 = _closure3_slot0;
                            r5 = r6.isDirectionIncluded;
                            r5 = r5.bind(r6)(r7);
                            if(!r5) { _fun5906_ip = 78; continue _fun5906 }
case 72:
                            if(r4) { _fun5906_ip = 211; continue _fun5906 }
case 78:
                            r4 = _closure3_slot0;
                            r4 = r4.currentSwipingDirection;
                            r6 = 'down';
                            if(!(r4 === r6)) { _fun5906_ip = 117; continue _fun5906 }
case 96:
                            r5 = _closure3_slot0;
                            r4 = r5.isDirectionIncluded;
                            r4 = r4.bind(r5)(r6);
                            if(!r4) { _fun5906_ip = 117; continue _fun5906 }
case 114:
                            if(r3) { _fun5906_ip = 207; continue _fun5906 }
case 117:
                            r3 = _closure3_slot0;
                            r3 = r3.currentSwipingDirection;
                            r5 = 'right';
                            if(!(r3 === r5)) { _fun5906_ip = 156; continue _fun5906 }
case 135:
                            r4 = _closure3_slot0;
                            r3 = r4.isDirectionIncluded;
                            r3 = r3.bind(r4)(r5);
                            if(!r3) { _fun5906_ip = 156; continue _fun5906 }
case 153:
                            if(r2) { _fun5906_ip = 203; continue _fun5906 }
case 156:
                            r2 = _closure3_slot0;
                            r2 = r2.currentSwipingDirection;
                            r3 = 'left';
                            if(!(r2 === r3)) { _fun5906_ip = 195; continue _fun5906 }
case 174:
                            r2 = _closure3_slot0;
                            r1 = r2.isDirectionIncluded;
                            r1 = r1.bind(r2)(r3);
                            if(!r1) { _fun5906_ip = 195; continue _fun5906 }
case 192:
                            if(r0) { _fun5906_ip = 199; continue _fun5906 }
case 195:
                            r0 = false;
                            return r0;
case 199:
                            r0 = true;
                            return r0;
case 203:
                            r0 = true;
                            return r0;
case 207:
                            r0 = true;
                            return r0;
case 211:
                            r0 = true;
                            return r0;
                        }
                    };
                    r0['isSwipeDirectionAllowed'] = r4;
                    r4 = function() { // Environment: r3
                        _fun5907: for(var _fun5907_ip = 0; ; ) switch(_fun5907_ip) {
case 0:
                            r1 = _closure3_slot0;
                            r1 = r1.props;
                            r1 = r1.deviceHeight;
                            if(r1) { _fun5907_ip = 160; continue _fun5907 }
case 24:
                            r1 = _closure3_slot0;
                            r1 = r1.props;
                            r1 = r1.deviceWidth;
                            if(r1) { _fun5907_ip = 160; continue _fun5907 }
case 42:
                            r1 = _closure1_slot9;
                            r4 = r1.Dimensions;
                            r2 = r4.get;
                            r3 = 'window';
                            r2 = r2.bind(r4)(r3);
                            r4 = r2.width;
                            r2 = r1.Dimensions;
                            r1 = r2.get;
                            r1 = r1.bind(r2)(r3);
                            r3 = r1.height;
                            r1 = _closure3_slot0;
                            r1 = r1.state;
                            r1 = r1.deviceWidth;
                            if(!(r4 === r1)) { _fun5907_ip = 133; continue _fun5907 }
case 114:
                            r1 = _closure3_slot0;
                            r1 = r1.state;
                            r1 = r1.deviceHeight;
                            if(!(r3 !== r1)) { _fun5907_ip = 160; continue _fun5907 }
case 133:
                            r2 = _closure3_slot0;
                            r1 = r2.setState;
                            r0 = {};
                            r0['deviceWidth'] = r4;
                            r0['deviceHeight'] = r3;
                            r0 = r1.bind(r2)(r0);
case 160:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r0['handleDimensionsUpdate'] = r4;
                    r4 = function() { // Environment: r3
                        _fun5908: for(var _fun5908_ip = 0; ; ) switch(_fun5908_ip) {
case 0:
                            r1 = _closure3_slot0;
                            r1 = r1.isTransitioning;
                            if(r1) { _fun5908_ip = 306; continue _fun5908 }
case 19:
                            r1 = _closure3_slot0;
                            r2 = true;
                            r1['isTransitioning'] = r2;
                            r1 = r1.backdropRef;
                            if(!r1) { _fun5908_ip = 90; continue _fun5908 }
case 40:
                            r1 = _closure3_slot0;
                            r4 = r1.backdropRef;
                            r3 = r4.transitionTo;
                            r2 = {};
                            r5 = r1.props;
                            r5 = r5.backdropOpacity;
                            r2['opacity'] = r5;
                            r1 = r1.props;
                            r1 = r1.backdropTransitionInTiming;
                            r1 = r3.bind(r4)(r2, r1);
case 90:
                            r1 = _closure3_slot0;
                            r1 = r1.state;
                            r1 = r1.isSwipeable;
                            if(!r1) { _fun5908_ip = 144; continue _fun5908 }
case 108:
                            r1 = _closure3_slot0;
                            r1 = r1.state;
                            r3 = r1.pan;
                            r2 = r3.setValue;
                            r1 = {'x': 0, 'y': 0};
                            r1 = r2.bind(r3)(r1);
case 144:
                            r1 = _closure3_slot0;
                            r1 = r1.contentRef;
                            if(!r1) { _fun5908_ip = 302; continue _fun5908 }
case 160:
                            r1 = _closure3_slot0;
                            r1 = r1.props;
                            r1 = r1.onModalWillShow;
                            if(!r1) { _fun5908_ip = 197; continue _fun5908 }
case 178:
                            r1 = _closure3_slot0;
                            r2 = r1.props;
                            r1 = r2.onModalWillShow;
                            r1 = r1.bind(r2)();
case 197:
                            r1 = _closure3_slot0;
                            r2 = r1.interactionHandle;
                            r1 = null;
                            if(!(r2 == r1)) { _fun5908_ip = 246; continue _fun5908 }
case 213:
                            r2 = _closure3_slot0;
                            r1 = _closure1_slot9;
                            r3 = r1.InteractionManager;
                            r1 = r3.createInteractionHandle;
                            r1 = r1.bind(r3)();
                            r2['interactionHandle'] = r1;
case 246:
                            r0 = _closure3_slot0;
                            r3 = r0.contentRef;
                            r2 = r3.animate;
                            r1 = r0.animationIn;
                            r0 = r0.props;
                            r0 = r0.animationInTiming;
                            r2 = r2.bind(r3)(r1, r0);
                            r1 = r2.then;
                            r0 = function() { // Environment: r0
                                _fun5909: for(var _fun5909_ip = 0; ; ) switch(_fun5909_ip) {
case 0:
                                    r1 = _closure3_slot0;
                                    r2 = false;
                                    r1['isTransitioning'] = r2;
                                    r1 = r1.interactionHandle;
                                    if(!r1) { _fun5909_ip = 66; continue _fun5909 }
case 24:
                                    r1 = _closure1_slot9;
                                    r4 = r1.InteractionManager;
                                    r3 = r4.clearInteractionHandle;
                                    r2 = _closure3_slot0;
                                    r1 = r2.interactionHandle;
                                    r1 = r3.bind(r4)(r1);
                                    r1 = null;
                                    r2['interactionHandle'] = r1;
case 66:
                                    r1 = _closure3_slot0;
                                    r1 = r1.props;
                                    r1 = r1.isVisible;
                                    r0 = _closure3_slot0;
                                    if(r1) { _fun5909_ip = 100; continue _fun5909 }
case 88:
                                    r1 = r0.close;
                                    r1 = r1.bind(r0)();
                                    _fun5909_ip = 115; continue _fun5909;
case 100:
                                    r1 = r0.props;
                                    r0 = r1.onModalShow;
                                    r0 = r0.bind(r1)();
case 115:
                                    r0 = undefined;
                                    return r0;
                                }
                            };
                            r0 = r1.bind(r2)(r0);
case 302:
                            r0 = undefined;
                            return r0;
case 306:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r0['open'] = r4;
                    r4 = function() { // Environment: r3
                        _fun5910: for(var _fun5910_ip = 0; ; ) switch(_fun5910_ip) {
case 0:
                            r1 = _closure3_slot0;
                            r1 = r1.isTransitioning;
                            if(r1) { _fun5910_ip = 358; continue _fun5910 }
case 19:
                            r1 = _closure3_slot0;
                            r2 = true;
                            r1['isTransitioning'] = r2;
                            r1 = r1.backdropRef;
                            if(!r1) { _fun5910_ip = 81; continue _fun5910 }
case 40:
                            r1 = _closure3_slot0;
                            r4 = r1.backdropRef;
                            r3 = r4.transitionTo;
                            r2 = {};
                            r5 = 0;
                            r2['opacity'] = r5;
                            r1 = r1.props;
                            r1 = r1.backdropTransitionOutTiming;
                            r1 = r3.bind(r4)(r2, r1);
case 81:
                            r1 = _closure3_slot0;
                            r4 = r1.animationOut;
                            r1 = r1.inSwipeClosingState;
                            r3 = r4;
                            if(!r1) { _fun5910_ip = 202; continue _fun5910 }
case 103:
                            r1 = _closure3_slot0;
                            r2 = false;
                            r1['inSwipeClosingState'] = r2;
                            r2 = r1.currentSwipingDirection;
                            r3 = 'slideOutUp';
                            r1 = 'up';
                            if(!(r2 !== r1)) { _fun5910_ip = 202; continue _fun5910 }
case 133:
                            r1 = _closure3_slot0;
                            r2 = r1.currentSwipingDirection;
                            r3 = 'slideOutDown';
                            r1 = 'down';
                            if(!(r2 !== r1)) { _fun5910_ip = 202; continue _fun5910 }
case 155:
                            r1 = _closure3_slot0;
                            r2 = r1.currentSwipingDirection;
                            r3 = 'slideOutRight';
                            r1 = 'right';
                            if(!(r2 !== r1)) { _fun5910_ip = 202; continue _fun5910 }
case 177:
                            r1 = _closure3_slot0;
                            r2 = r1.currentSwipingDirection;
                            r1 = 'left';
                            r3 = r4;
                            if(!(r2 === r1)) { _fun5910_ip = 202; continue _fun5910 }
case 198:
                            r3 = 'slideOutLeft';
case 202:
                            r1 = _closure3_slot0;
                            r1 = r1.contentRef;
                            if(!r1) { _fun5910_ip = 354; continue _fun5910 }
case 218:
                            r1 = _closure3_slot0;
                            r1 = r1.props;
                            r1 = r1.onModalWillHide;
                            if(!r1) { _fun5910_ip = 255; continue _fun5910 }
case 236:
                            r1 = _closure3_slot0;
                            r2 = r1.props;
                            r1 = r2.onModalWillHide;
                            r1 = r1.bind(r2)();
case 255:
                            r1 = _closure3_slot0;
                            r2 = r1.interactionHandle;
                            r1 = null;
                            if(!(r2 == r1)) { _fun5910_ip = 304; continue _fun5910 }
case 271:
                            r2 = _closure3_slot0;
                            r1 = _closure1_slot9;
                            r4 = r1.InteractionManager;
                            r1 = r4.createInteractionHandle;
                            r1 = r1.bind(r4)();
                            r2['interactionHandle'] = r1;
case 304:
                            r0 = _closure3_slot0;
                            r2 = r0.contentRef;
                            r1 = r2.animate;
                            r0 = r0.props;
                            r0 = r0.animationOutTiming;
                            r2 = r1.bind(r2)(r3, r0);
                            r1 = r2.then;
                            r0 = function() { // Environment: r0
                                _fun5911: for(var _fun5911_ip = 0; ; ) switch(_fun5911_ip) {
case 0:
                                    r2 = _closure3_slot0;
                                    r0 = false;
                                    r2['isTransitioning'] = r0;
                                    r2 = r2.interactionHandle;
                                    if(!r2) { _fun5911_ip = 66; continue _fun5911 }
case 24:
                                    r2 = _closure1_slot9;
                                    r5 = r2.InteractionManager;
                                    r4 = r5.clearInteractionHandle;
                                    r3 = _closure3_slot0;
                                    r2 = r3.interactionHandle;
                                    r2 = r4.bind(r5)(r2);
                                    r2 = null;
                                    r3['interactionHandle'] = r2;
case 66:
                                    r2 = _closure3_slot0;
                                    r2 = r2.props;
                                    r2 = r2.isVisible;
                                    r1 = _closure3_slot0;
                                    if(r2) { _fun5911_ip = 116; continue _fun5911 }
case 88:
                                    r3 = r1.setState;
                                    r2 = {};
                                    r2['showContent'] = r0;
                                    r0 = function() { // Environment: r0
                                        r3 = _closure3_slot0;
                                        r2 = r3.setState;
                                        r1 = {};
                                        r0 = false;
                                        r1['isVisible'] = r0;
                                        r0 = function() { // Environment: r0
                                            r0 = _closure3_slot0;
                                            r1 = r0.props;
                                            r0 = r1.onModalHide;
                                            r0 = r0.bind(r1)();
                                            r0 = undefined;
                                            return r0;
                                        };
                                        r0 = r2.bind(r3)(r1, r0);
                                        r0 = undefined;
                                        return r0;
                                    };
                                    r0 = r3.bind(r1)(r2, r0);
                                    _fun5911_ip = 126; continue _fun5911;
case 116:
                                    r0 = r1.open;
                                    r0 = r0.bind(r1)();
case 126:
                                    r0 = undefined;
                                    return r0;
                                }
                            };
                            r0 = r1.bind(r2)(r0);
case 354:
                            r0 = undefined;
                            return r0;
case 358:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r0['close'] = r4;
                    r3 = function() { // Environment: r3
                        _fun5914: for(var _fun5914_ip = 0; ; ) switch(_fun5914_ip) {
case 0:
                            r1 = _closure3_slot0;
                            r1 = r1.props;
                            r1 = r1.hasBackdrop;
                            if(r1) { _fun5914_ip = 25; continue _fun5914 }
case 21:
                            r1 = null;
                            return r1;
case 25:
                            r1 = _closure3_slot0;
                            r1 = r1.props;
                            r1 = r1.customBackdrop;
                            if(!r1) { _fun5914_ip = 101; continue _fun5914 }
case 43:
                            r3 = _closure1_slot8;
                            r2 = r3.isValidElement;
                            r1 = _closure3_slot0;
                            r1 = r1.props;
                            r1 = r1.customBackdrop;
                            r1 = r2.bind(r3)(r1);
                            if(r1) { _fun5914_ip = 101; continue _fun5914 }
case 79:
                            r1 = global;
                            r3 = r1.console;
                            r2 = r3.warn;
                            r1 = 'Invalid customBackdrop element passed to Modal. You must provide a valid React element.';
                            r1 = r2.bind(r3)(r1);
case 101:
                            r2 = _closure3_slot0;
                            r0 = r2.props;
                            r8 = r0.customBackdrop;
                            r3 = r0.backdropColor;
                            r9 = r0.useNativeDriver;
                            r11 = r0.useNativeDriverForBackdrop;
                            r5 = r0.onBackdropPress;
                            r0 = r2.props;
                            r0 = r0.customBackdrop;
                            r1 = !r0;
                            r7 = !r1;
                            r0 = {};
                            r4 = r2.getDeviceWidth;
                            r4 = r4.bind(r2)();
                            r0['width'] = r4;
                            r4 = r2.getDeviceHeight;
                            r4 = r4.bind(r2)();
                            r0['height'] = r4;
                            r2 = r2.state;
                            r6 = r2.showContent;
                            r4 = 'transparent';
                            r2 = r4;
                            if(!r6) { _fun5914_ip = 216; continue _fun5914 }
case 207:
                            r2 = r4;
                            if(!r1) { _fun5914_ip = 216; continue _fun5914 }
case 213:
                            r2 = r3;
case 216:
                            r0['backgroundColor'] = r2;
                            r10 = new Array(1);
                            r10[0] = r0;
                            r6 = _closure1_slot8;
                            r4 = r6.createElement;
                            r2 = _closure1_slot10;
                            r3 = r2.View;
                            r2 = {};
                            r12 = function(a0) { // Original name: ref, environment: r12
                                r0 = a0;
                                r1 = _closure3_slot0;
                                r1['backdropRef'] = r0;
                                return r0;
                            };
                            r2['ref'] = r12;
                            r12 = undefined;
                            if(!(r11 !== r12)) { _fun5914_ip = 272; continue _fun5914 }
case 269:
                            r9 = r11;
case 272:
                            r2['useNativeDriver'] = r9;
                            r9 = _closure1_slot11;
                            r9 = r9.default;
                            r11 = r9.backdrop;
                            r9 = new Array(2);
                            r9[0] = r11;
                            r9[1] = r10;
                            r2['style'] = r9;
                            if(r1) { _fun5914_ip = 313; continue _fun5914 }
case 310:
                            r7 = r8;
case 313:
                            r4 = r4.bind(r6)(r3, r2, r7);
                            if(r1) { _fun5914_ip = 325; continue _fun5914 }
case 323:
                            return r4;
case 325:
                            r3 = _closure1_slot8;
                            r2 = r3.createElement;
                            r0 = _closure1_slot9;
                            r1 = r0.TouchableWithoutFeedback;
                            r0 = {};
                            r0['onPress'] = r5;
                            r0 = r2.bind(r3)(r1, r0, r4);
                            return r0;
                        }
                    };
                    r0['makeBackdrop'] = r3;
                    r4 = _closure1_slot0;
                    r6 = _closure1_slot1;
                    r3 = 11;
                    r3 = r6[r3];
                    r3 = r4.bind(r5)(r3);
                    r4 = r3.buildAnimations;
                    r3 = _closure1_slot14;
                    r3 = r3.bind(r5)(r1);
                    r3 = r4.bind(r5)(r3);
                    r4 = r3.animationIn;
                    r3 = r3.animationOut;
                    r0['animationIn'] = r4;
                    r0['animationOut'] = r3;
                    r3 = r0.state;
                    r3 = r3.isSwipeable;
                    if(!r3) { _fun5890_ip = 534; continue _fun5890 }
case 449:
                    r3 = global;
                    r6 = r3.Object;
                    r5 = r6.assign;
                    r4 = r0.state;
                    r3 = {};
                    r2 = _closure1_slot9;
                    r2 = r2.Animated;
                    r2 = r2.ValueXY;
                    r7 = r2.prototype;
                    r7 = Object.create(r7, {constructor: {value: r2}});
                    r15 = r7;
                    r2 = new r15[r2](r14);
                    r2 = r2 instanceof Object ? r2 : r7;
                    r3['pan'] = r2;
                    r2 = {};
                    r2 = r5.bind(r6)(r2, r4, r3);
                    r0['state'] = r2;
                    r2 = r0.buildPanResponder;
                    r2 = r2.bind(r0)();
case 534:
                    r1 = r1.isVisible;
                    if(!r1) { _fun5890_ip = 586; continue _fun5890 }
case 543:
                    r1 = global;
                    r5 = r1.Object;
                    r4 = r5.assign;
                    r3 = r0.state;
                    r2 = {};
                    r1 = {'isVisible': true, 'showContent': true};
                    r1 = r4.bind(r5)(r2, r3, r1);
                    r0['state'] = r1;
case 586:
                    return r0;
                }
            };
            var _closure2_slot0 = r4;
            r2 = _closure1_slot7;
            r5 = r2.default;
            r3 = undefined;
            r2 = a0;
            r2 = r5.bind(r3)(r4, r2);
            r1 = _closure1_slot4;
            r2 = r1.default;
            r5 = {};
            r1 = 'componentDidMount';
            r5['key'] = r1;
            r1 = function() { // Original name: componentDidMount, environment: r0
                _fun5916: for(var _fun5916_ip = 0; ; ) switch(_fun5916_ip) {
case 0:
                    r2 = this;
                    r0 = r2.props;
                    r0 = r0.onSwipe;
                    if(!r0) { _fun5916_ip = 38; continue _fun5916 }
case 16:
                    r0 = global;
                    r3 = r0.console;
                    r1 = r3.warn;
                    r0 = '`<Modal onSwipe="..." />` is deprecated and will be removed starting from 13.0.0. Use `<Modal onSwipeComplete="..." />` instead.';
                    r0 = r1.bind(r3)(r0);
case 38:
                    r1 = _closure1_slot9;
                    r5 = r1.DeviceEventEmitter;
                    r4 = r5.addListener;
                    r3 = r2.handleDimensionsUpdate;
                    r1 = 'didUpdateDimensions';
                    r1 = r4.bind(r5)(r1, r3);
                    r2['didUpdateDimensionsEmitter'] = r1;
                    r1 = r2.state;
                    r1 = r1.isVisible;
                    if(!r1) { _fun5916_ip = 102; continue _fun5916 }
case 92:
                    r1 = r2.open;
                    r1 = r1.bind(r2)();
case 102:
                    r3 = _closure1_slot0;
                    r1 = _closure1_slot1;
                    r0 = 12;
                    r1 = r1[r0];
                    r0 = undefined;
                    r1 = r3.bind(r0)(r1);
                    r5 = r1.BackHandler;
                    r4 = r5.addEventListener;
                    r3 = r2.onBackButtonPress;
                    r1 = 'hardwareBackPress';
                    r1 = r4.bind(r5)(r1, r3);
                    r2['backHandler'] = r1;
                    return r0;
                }
            };
            r5['value'] = r1;
            r1 = new Array(4);
            r1[0] = r5;
            r5 = {};
            r6 = 'componentWillUnmount';
            r5['key'] = r6;
            r6 = function() { // Original name: componentWillUnmount, environment: r0
                _fun5917: for(var _fun5917_ip = 0; ; ) switch(_fun5917_ip) {
case 0:
                    r1 = this;
                    r0 = r1.backHandler;
                    if(!r0) { _fun5917_ip = 34; continue _fun5917 }
case 11:
                    r2 = r1.backHandler;
                    r0 = r2.remove;
                    r0 = r0.bind(r2)();
                    r0 = null;
                    r1['backHandler'] = r0;
case 34:
                    r0 = r1.didUpdateDimensionsEmitter;
                    if(!r0) { _fun5917_ip = 58; continue _fun5917 }
case 43:
                    r2 = r1.didUpdateDimensionsEmitter;
                    r0 = r2.remove;
                    r0 = r0.bind(r2)();
case 58:
                    r0 = r1.interactionHandle;
                    if(!r0) { _fun5917_ip = 105; continue _fun5917 }
case 67:
                    r0 = _closure1_slot9;
                    r3 = r0.InteractionManager;
                    r2 = r3.clearInteractionHandle;
                    r0 = r1.interactionHandle;
                    r0 = r2.bind(r3)(r0);
                    r0 = null;
                    r1['interactionHandle'] = r0;
case 105:
                    r0 = undefined;
                    return r0;
                }
            };
            r5['value'] = r6;
            r1[1] = r5;
            r5 = {};
            r6 = 'componentDidUpdate';
            r5['key'] = r6;
            r6 = function(a0) { // Original name: componentDidUpdate, environment: r0
                _fun5918: for(var _fun5918_ip = 0; ; ) switch(_fun5918_ip) {
case 0:
                    r0 = a0;
                    r1 = this;
                    r2 = r1.props;
                    r3 = r2.animationIn;
                    r2 = r0.animationIn;
                    if(!(r3 === r2)) { _fun5918_ip = 47; continue _fun5918 }
case 26:
                    r2 = r1.props;
                    r3 = r2.animationOut;
                    r2 = r0.animationOut;
                    if(!(r3 !== r2)) { _fun5918_ip = 121; continue _fun5918 }
case 47:
                    r5 = _closure1_slot0;
                    r4 = _closure1_slot1;
                    r3 = 11;
                    r3 = r4[r3];
                    r4 = undefined;
                    r3 = r5.bind(r4)(r3);
                    r3 = r3.buildAnimations;
                    r5 = _closure1_slot14;
                    r2 = r1.props;
                    r2 = r5.bind(r4)(r2);
                    r2 = r3.bind(r4)(r2);
                    r3 = r2.animationIn;
                    r2 = r2.animationOut;
                    r1['animationIn'] = r3;
                    r1['animationOut'] = r2;
case 121:
                    r2 = r1.props;
                    r3 = r2.backdropOpacity;
                    r2 = r0.backdropOpacity;
                    if(!(r3 !== r2)) { _fun5918_ip = 197; continue _fun5918 }
case 142:
                    r2 = r1.backdropRef;
                    if(!r2) { _fun5918_ip = 197; continue _fun5918 }
case 151:
                    r5 = r1.backdropRef;
                    r4 = r5.transitionTo;
                    r3 = {};
                    r2 = r1.props;
                    r2 = r2.backdropOpacity;
                    r3['opacity'] = r2;
                    r2 = r1.props;
                    r2 = r2.backdropTransitionInTiming;
                    r2 = r4.bind(r5)(r3, r2);
case 197:
                    r2 = r1.props;
                    r2 = r2.isVisible;
                    if(!r2) { _fun5918_ip = 232; continue _fun5918 }
case 211:
                    r2 = r0.isVisible;
                    if(r2) { _fun5918_ip = 232; continue _fun5918 }
case 220:
                    r2 = r1.open;
                    r2 = r2.bind(r1)();
                    _fun5918_ip = 265; continue _fun5918;
case 232:
                    r2 = r1.props;
                    r2 = r2.isVisible;
                    if(r2) { _fun5918_ip = 265; continue _fun5918 }
case 246:
                    r0 = r0.isVisible;
                    if(!r0) { _fun5918_ip = 265; continue _fun5918 }
case 255:
                    r0 = r1.close;
                    r0 = r0.bind(r1)();
case 265:
                    r0 = undefined;
                    return r0;
                }
            };
            r5['value'] = r6;
            r1[2] = r5;
            r5 = {};
            r6 = 'render';
            r5['key'] = r6;
            r6 = function() { // Original name: render, environment: r0
                _fun5919: for(var _fun5919_ip = 0; ; ) switch(_fun5919_ip) {
case 0:
                    r1 = this;
                    var _closure3_slot0 = r1;
                    r10 = r1.props;
                    r0 = r10.animationIn;
                    r0 = r10.animationInTiming;
                    r0 = r10.animationOut;
                    r0 = r10.animationOutTiming;
                    r7 = r10.avoidKeyboard;
                    r2 = r10.coverScreen;
                    r0 = r10.hasBackdrop;
                    r0 = r10.backdropColor;
                    r0 = r10.backdropOpacity;
                    r0 = r10.backdropTransitionInTiming;
                    r0 = r10.backdropTransitionOutTiming;
                    r0 = r10.customBackdrop;
                    r4 = r10.children;
                    r0 = r10.isVisible;
                    r0 = r10.onModalShow;
                    r15 = r10.onBackButtonPress;
                    r3 = r10.useNativeDriver;
                    r0 = r10.propagateSwipe;
                    r0 = r10.style;
                    r5 = _closure1_slot2;
                    r9 = r5.default;
                    r8 = _closure1_slot12;
                    r14 = undefined;
                    r9 = r9.bind(r14)(r10, r8);
                    r8 = r9.testID;
                    r8 = r5.default;
                    r5 = _closure1_slot13;
                    r20 = r8.bind(r14)(r9, r5);
                    r5 = {};
                    r8 = r1.getDeviceWidth;
                    r10 = r8.bind(r1)();
                    r8 = 0.05;
                    r8 = r10 * r8;
                    r5['margin'] = r8;
                    r10 = {};
                    r11 = 0;
                    r10['translateY'] = r11;
                    r8 = new Array(1);
                    r8[0] = r10;
                    r5['transform'] = r8;
                    r13 = new Array(3);
                    r13[0] = r5;
                    r5 = _closure1_slot11;
                    r5 = r5.default;
                    r5 = r5.content;
                    r13[1] = r5;
                    r13[2] = r0;
                    r19 = {};
                    r21 = {};
                    r0 = r1.state;
                    r0 = r0.isSwipeable;
                    if(!r0) { _fun5919_ip = 353; continue _fun5919 }
case 269:
                    r0 = global;
                    r10 = r0.Object;
                    r8 = r10.assign;
                    r0 = r1.panResponder;
                    r5 = r0.panHandlers;
                    r0 = {};
                    r5 = r8.bind(r10)(r0, r5);
                    r0 = r1.state;
                    r10 = r0.pan;
                    if(r3) { _fun5919_ip = 331; continue _fun5919 }
case 316:
                    r0 = r10.getLayout;
                    r21 = r0.bind(r10)();
                    r19 = r5;
                    _fun5919_ip = 353; continue _fun5919;
case 331:
                    r0 = {};
                    r8 = r10.getTranslateTransform;
                    r8 = r8.bind(r10)();
                    r0['transform'] = r8;
                    r19 = r5;
                    r21 = r0;
case 353:
                    r0 = r1.props;
                    r0 = r0.hideModalContentWhileAnimating;
                    r10 = r4;
                    if(!r0) { _fun5919_ip = 430; continue _fun5919 }
case 370:
                    r0 = r1.props;
                    r0 = r0.useNativeDriver;
                    r10 = r4;
                    if(!r0) { _fun5919_ip = 430; continue _fun5919 }
case 386:
                    r0 = r1.state;
                    r0 = r0.showContent;
                    r10 = r4;
                    if(r0) { _fun5919_ip = 430; continue _fun5919 }
case 403:
                    r8 = _closure1_slot8;
                    r5 = r8.createElement;
                    r0 = _closure1_slot10;
                    r4 = r0.View;
                    r0 = null;
                    r10 = r5.bind(r8)(r4, r0);
case 430:
                    r8 = _closure1_slot8;
                    r5 = r8.createElement;
                    r0 = _closure1_slot10;
                    r4 = r0.View;
                    r0 = global;
                    r18 = r0.Object;
                    r17 = r18.assign;
                    r16 = {};
                    r12 = function(a0) { // Original name: ref, environment: r12
                        r0 = a0;
                        r1 = _closure3_slot0;
                        r1['contentRef'] = r0;
                        return r0;
                    };
                    r16['ref'] = r12;
                    r12 = new Array(2);
                    r12[0] = r21;
                    r12[1] = r13;
                    r16['style'] = r12;
                    r12 = 'box-none';
                    r16['pointerEvents'] = r12;
                    r16['useNativeDriver'] = r3;
                    r25 = {};
                    r26 = r18;
                    r24 = r19;
                    r23 = r16;
                    r22 = r20;
                    r3 = r26[r17](r25, r24, r23, r22, r21);
                    r10 = r5.bind(r8)(r4, r3, r10);
                    if(r2) { _fun5919_ip = 637; continue _fun5919 }
case 530:
                    r2 = r1.state;
                    r2 = r2.isVisible;
                    if(!r2) { _fun5919_ip = 637; continue _fun5919 }
case 544:
                    r8 = _closure1_slot8;
                    r5 = r8.createElement;
                    r2 = _closure1_slot9;
                    r25 = r2.View;
                    r3 = {};
                    r3['pointerEvents'] = r12;
                    r16 = _closure1_slot11;
                    r2 = r16.default;
                    r17 = r2.backdrop;
                    r2 = new Array(2);
                    r2[0] = r17;
                    r16 = r16.default;
                    r16 = r16.containerBox;
                    r2[1] = r16;
                    r3['style'] = r2;
                    r2 = r1.makeBackdrop;
                    r23 = r2.bind(r1)();
                    r26 = r8;
                    r24 = r3;
                    r22 = r10;
                    r2 = r26[r5](r25, r24, r23, r22, r21);
                    return r2;
case 637:
                    r5 = _closure1_slot8;
                    r4 = r5.createElement;
                    r2 = _closure1_slot9;
                    r3 = r2.Modal;
                    r8 = r0.Object;
                    r2 = r8.assign;
                    r0 = {'transparent': true, 'animationType': 'none'};
                    r16 = r1.state;
                    r16 = r16.isVisible;
                    r0['visible'] = r16;
                    r0['onRequestClose'] = r15;
                    r2 = r2.bind(r8)(r0, r9);
                    r0 = r1.makeBackdrop;
                    r1 = r0.bind(r1)();
                    r0 = r10;
                    if(!r7) { _fun5919_ip = 813; continue _fun5919 }
case 721:
                    r9 = _closure1_slot8;
                    r8 = r9.createElement;
                    r15 = _closure1_slot9;
                    r7 = r15.KeyboardAvoidingView;
                    r6 = {};
                    r15 = r15.Platform;
                    r16 = r15.OS;
                    r15 = 'ios';
                    r14 = undefined;
                    if(!(r16 === r15)) { _fun5919_ip = 767; continue _fun5919 }
case 763:
                    r14 = 'padding';
case 767:
                    r6['behavior'] = r14;
                    r6['pointerEvents'] = r12;
                    r12 = r13.concat;
                    r14 = {};
                    r14['margin'] = r11;
                    r11 = new Array(1);
                    r11[0] = r14;
                    r11 = r12.bind(r13)(r11);
                    r6['style'] = r11;
                    r0 = r8.bind(r9)(r7, r6, r10);
case 813:
                    r26 = r5;
                    r25 = r3;
                    r24 = r2;
                    r23 = r1;
                    r22 = r0;
                    r0 = r26[r4](r25, r24, r23, r22, r21);
                    return r0;
                }
            };
            r5['value'] = r6;
            r1[3] = r5;
            r5 = {};
            r6 = 'getDerivedStateFromProps';
            r5['key'] = r6;
            r0 = function(a0, a1) { // Original name: getDerivedStateFromProps, environment: r0
                _fun5921: for(var _fun5921_ip = 0; ; ) switch(_fun5921_ip) {
case 0:
                    r0 = a1;
                    r0 = r0.isVisible;
                    if(r0) { _fun5921_ip = 36; continue _fun5921 }
case 12:
                    r0 = a0;
                    r0 = r0.isVisible;
                    if(!r0) { _fun5921_ip = 36; continue _fun5921 }
case 24:
                    r0 = {'isVisible': true, 'showContent': true};
                    return r0;
case 36:
                    r0 = null;
                    return r0;
                }
            };
            r5['value'] = r0;
            r0 = new Array(1);
            r0[0] = r5;
            r0 = r2.bind(r3)(r4, r1, r0);
            return r0;
        };
        r1 = r1.bind(r0)(r4);
        r2['ReactNativeModal'] = r1;
        r1['defaultProps'] = r3;
        r2['default'] = r1;
        return r0;
    };
    r6 = 533;
    r5 = [1, 203, 12, 13, 23, 25, 28, 119, 2, 534, 555, 556, 557];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5922: for(var _fun5922_ip = 0; ; ) switch(_fun5922_ip) {
case 0:
            r6 = a1;
            r2 = a5;
            r7 = a6;
            var _closure1_slot0 = r6;
            var _closure1_slot1 = r7;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r8
                _fun5923: for(var _fun5923_ip = 0; ; ) switch(_fun5923_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5923_ip = 104; continue _fun5923 }
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
                        _fun5924: for(var _fun5924_ip = 0; ; ) switch(_fun5924_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5924_ip = 15; continue _fun5924 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5924_ip = 19; continue _fun5924;
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
            r1 = r7[r0];
            r0 = undefined;
            r9 = r6.bind(r0)(r1);
            r21 = global;
            r10 = r21.Object;
            r5 = r10.defineProperty;
            r4 = {};
            r1 = true;
            r4['value'] = r1;
            r3 = '__esModule';
            r3 = r5.bind(r10)(r2, r3, r4);
            r2['Image'] = r0;
            r2['Text'] = r0;
            r2['View'] = r0;
            r2['createAnimatableComponent'] = r0;
            r10 = r21.Object;
            r5 = r10.defineProperty;
            r4 = {};
            r4['enumerable'] = r1;
            r3 = function() { // Original name: get, environment: r8
                r0 = _closure1_slot2;
                r0 = r0.default;
                return r0;
            };
            r4['get'] = r3;
            r3 = 'createAnimation';
            r3 = r5.bind(r10)(r2, r3, r4);
            r10 = r21.Object;
            r5 = r10.defineProperty;
            r4 = {};
            r4['enumerable'] = r1;
            r3 = function() { // Original name: get, environment: r8
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 1;
                r1 = r1[r0];
                r0 = undefined;
                r0 = r2.bind(r0)(r1);
                r0 = r0.initializeRegistryWithDefinitions;
                return r0;
            };
            r4['get'] = r3;
            r3 = 'initializeRegistryWithDefinitions';
            r3 = r5.bind(r10)(r2, r3, r4);
            r5 = r21.Object;
            r4 = r5.defineProperty;
            r3 = {};
            r3['enumerable'] = r1;
            r1 = function() { // Original name: get, environment: r8
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 1;
                r1 = r1[r0];
                r0 = undefined;
                r0 = r2.bind(r0)(r1);
                r0 = r0.registerAnimation;
                return r0;
            };
            r3['get'] = r1;
            r1 = 'registerAnimation';
            r1 = r4.bind(r5)(r2, r1, r3);
            r1 = 2;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r3 = 3;
            r3 = r7[r3];
            r3 = r6.bind(r0)(r3);
            r3 = r9.bind(r0)(r3);
            r4 = 4;
            r4 = r7[r4];
            r10 = r6.bind(r0)(r4);
            if(!r10) { _fun5922_ip = 266; continue _fun5922 }
case 252:
            r4 = r10.__esModule;
            r5 = r10;
            if(r4) { _fun5922_ip = 533; continue _fun5922 }
case 266:
            r20 = null;
            if(!(r20 !== r10)) { _fun5922_ip = 524; continue _fun5922 }
case 275:
            r11 = typeof r10;
            r4 = 'object';
            if(!(r4 !== r11)) { _fun5922_ip = 297; continue _fun5922 }
case 286:
            r4 = 'function';
            if(!(r4 === r11)) { _fun5922_ip = 524; continue _fun5922 }
case 297:
            r4 = _closure1_slot3;
            r11 = r4.bind(r0)(r0);
            if(!r11) { _fun5922_ip = 325; continue _fun5922 }
case 309:
            r4 = r11.has;
            r4 = r4.bind(r11)(r10);
            if(r4) { _fun5922_ip = 512; continue _fun5922 }
case 325:
            r4 = Object.create(r20);
            r12 = r21.Object;
            r19 = r12.defineProperty;
            if(!r19) { _fun5922_ip = 353; continue _fun5922 }
case 342:
            r12 = r21.Object;
            r19 = r12.getOwnPropertyDescriptor;
case 353:
            r17 = r10;
            r13 = 'default';
            r12 = undefined;
            for(r14 in r17)
case 370:
            {
case 379:
                r25 = r14;
                if(r13 === r25) { _fun5922_ip = 370; continue _fun5922 }
case 386:
                r22 = {};
                r23 = r22.hasOwnProperty;
                r22 = r23.call;
                r22 = r22.bind(r23)(r10, r25);
                if(!r22) { _fun5922_ip = 370; continue _fun5922 }
case 407:
                r22 = null;
                if(!r19) { _fun5922_ip = 429; continue _fun5922 }
case 412:
                r24 = r21.Object;
                r23 = r24.getOwnPropertyDescriptor;
                r22 = r23.bind(r24)(r10, r25);
case 429:
                if(!r22) { _fun5922_ip = 448; continue _fun5922 }
case 432:
                r23 = r22.get;
                if(r23) { _fun5922_ip = 461; continue _fun5922 }
case 440:
                r23 = r22.set;
                if(r23) { _fun5922_ip = 461; continue _fun5922 }
case 448:
                r23 = r10[r25];
                r4[r25] = r23;
                r12 = r22;
                _fun5922_ip = 370; continue _fun5922;
case 461:
                r24 = r21.Object;
                r23 = r24.defineProperty;
                r23 = r23.bind(r24)(r4, r25, r22);
                r12 = r22;
                _fun5922_ip = 370; continue _fun5922;
            }
case 484:
            r4['default'] = r10;
            r5 = r4;
            if(!r11) { _fun5922_ip = 533; continue _fun5922 }
case 496:
            r12 = r11.set;
            r12 = r12.bind(r11)(r10, r4);
            r5 = r4;
            _fun5922_ip = 533; continue _fun5922;
case 512:
            r4 = r11.get;
            r5 = r4.bind(r11)(r10);
            _fun5922_ip = 533; continue _fun5922;
case 524:
            r4 = {};
            r4['default'] = r10;
            r5 = r4;
case 533:
            r4 = 5;
            r4 = r7[r4];
            r4 = r6.bind(r0)(r4);
            r4 = r9.bind(r0)(r4);
            var _closure1_slot2 = r4;
            r4 = 1;
            r4 = r7[r4];
            r4 = r6.bind(r0)(r4);
            r4 = r4.initializeRegistryWithDefinitions;
            r4 = r4.bind(r0)(r5);
            r4 = r3.default;
            r2['createAnimatableComponent'] = r4;
            r5 = r3.default;
            r4 = r1.View;
            r4 = r5.bind(r0)(r4);
            r2['View'] = r4;
            r5 = r3.default;
            r4 = r1.Text;
            r4 = r5.bind(r0)(r4);
            r2['Text'] = r4;
            r3 = r3.default;
            r1 = r1.Image;
            r1 = r3.bind(r0)(r1);
            r2['Image'] = r1;
            return r0;
        }
    };
    r6 = 534;
    r5 = [1, 535, 2, 538, 543, 536];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r6 = a5;
        r5 = a6;
        r1 = function(a0, a1) { // Original name: registerAnimation, environment: r2
            r2 = _closure1_slot1;
            r1 = a1;
            r0 = a0;
            r2[r0] = r1;
            r0 = undefined;
            return r0;
        };
        var _closure1_slot2 = r1;
        r0 = 0;
        r3 = r5[r0];
        r0 = undefined;
        r3 = r4.bind(r0)(r3);
        r7 = global;
        r10 = r7.Object;
        r9 = r10.defineProperty;
        r8 = {};
        r7 = true;
        r8['value'] = r7;
        r7 = '__esModule';
        r7 = r9.bind(r10)(r6, r7, r8);
        r7 = function(a0) { // Original name: getAnimationByName, environment: r2
            r1 = _closure1_slot1;
            r0 = a0;
            r0 = r1[r0];
            return r0;
        };
        r6['getAnimationByName'] = r7;
        r7 = function() { // Original name: getAnimationNames, environment: r2
            r0 = global;
            r2 = r0.Object;
            r1 = r2.keys;
            r0 = _closure1_slot1;
            r0 = r1.bind(r2)(r0);
            return r0;
        };
        r6['getAnimationNames'] = r7;
        r7 = function(a0) { // Original name: initializeRegistryWithDefinitions, environment: r2
            r3 = a0;
            var _closure2_slot0 = r3;
            r1 = global;
            r2 = r1.Object;
            r1 = r2.keys;
            r2 = r1.bind(r2)(r3);
            r1 = r2.forEach;
            r0 = function(a0) { // Environment: r0
                r3 = a0;
                r2 = _closure1_slot2;
                r0 = _closure1_slot0;
                r4 = r0.default;
                r0 = _closure2_slot0;
                r1 = r0[r3];
                r0 = undefined;
                r1 = r4.bind(r0)(r1);
                r1 = r2.bind(r0)(r3, r1);
                return r0;
            };
            r0 = r1.bind(r2)(r0);
            r0 = undefined;
            return r0;
        };
        r6['initializeRegistryWithDefinitions'] = r7;
        r6['registerAnimation'] = r1;
        r1 = 1;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        var _closure1_slot0 = r1;
        r1 = {};
        var _closure1_slot1 = r1;
        return r0;
    };
    r6 = 535;
    r5 = [1, 536];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r6 = a5;
        r5 = a6;
        r0 = function(a0, a1) { // Original name: compareNumbers, environment: r2
            r1 = a0;
            r0 = a1;
            r0 = r1 - r0;
            return r0;
        };
        var _closure1_slot2 = r0;
        r0 = function(a0) { // Original name: notNull, environment: r2
            r1 = a0;
            r0 = null;
            r0 = r1 !== r0;
            return r0;
        };
        var _closure1_slot3 = r0;
        r0 = function(a0) { // Original name: parsePosition, environment: r2
            _fun5937: for(var _fun5937_ip = 0; ; ) switch(_fun5937_ip) {
case 0:
                r4 = a0;
                r0 = 'from';
                if(!(r4 !== r0)) { _fun5937_ip = 82; continue _fun5937 }
case 11:
                r0 = 'to';
                if(!(r4 !== r0)) { _fun5937_ip = 77; continue _fun5937 }
case 19:
                r1 = global;
                r3 = r1.parseFloat;
                r2 = undefined;
                r0 = 10;
                r0 = r3.bind(r2)(r4, r0);
                r2 = r1.Number;
                r1 = r2.isNaN;
                r1 = r1.bind(r2)(r0);
                if(r1) { _fun5937_ip = 73; continue _fun5937 }
case 58:
                r1 = 0;
                if(!(!(r0 < r1))) { _fun5937_ip = 73; continue _fun5937 }
case 64:
                r1 = 1;
                if(!(!(r0 > r1))) { _fun5937_ip = 73; continue _fun5937 }
case 71:
                return r0;
case 73:
                r0 = null;
                return r0;
case 77:
                r0 = 1;
                return r0;
case 82:
                r0 = 0;
                return r0;
            }
        };
        var _closure1_slot4 = r0;
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
        r1 = function(a0) { // Original name: createAnimation, environment: r2
            _fun5938: for(var _fun5938_ip = 0; ; ) switch(_fun5938_ip) {
case 0:
                r4 = a0;
                var _closure2_slot0 = r4;
                r2 = global;
                r1 = r2.JSON;
                r0 = r1.stringify;
                r1 = r0.bind(r1)(r4);
                r3 = _closure1_slot1;
                r3 = r3[r1];
                if(r3) { _fun5938_ip = 259; continue _fun5938 }
case 45:
                r5 = r2.Object;
                r3 = r5.keys;
                r6 = r3.bind(r5)(r4);
                r5 = r6.map;
                r3 = _closure1_slot4;
                r6 = r5.bind(r6)(r3);
                r5 = r6.filter;
                r3 = _closure1_slot3;
                r9 = r5.bind(r6)(r3);
                var _closure2_slot1 = r9;
                r5 = r9.sort;
                r3 = _closure1_slot2;
                r3 = r5.bind(r9)(r3);
                r5 = r9.length;
                r3 = 2;
                if(!(!(r5 < r3))) { _fun5938_ip = 227; continue _fun5938 }
case 121:
                r3 = {};
                var _closure2_slot2 = r3;
                r5 = r4.easing;
                if(!r5) { _fun5938_ip = 146; continue _fun5938 }
case 135:
                r5 = r4.easing;
                r3['easing'] = r5;
case 146:
                r5 = r4.style;
                if(!r5) { _fun5938_ip = 165; continue _fun5938 }
case 154:
                r4 = r4.style;
                r3['style'] = r4;
case 165:
                r8 = function() { // Original name: _loop, environment: r10
                    _fun5939: for(var _fun5939_ip = 0; ; ) switch(_fun5939_ip) {
case 0:
                        r3 = _closure2_slot1;
                        r2 = _closure2_slot3;
                        r4 = r3[r2];
                        var _closure3_slot0 = r4;
                        r2 = _closure2_slot0;
                        r5 = r2[r4];
                        var _closure3_slot1 = r5;
                        r3 = r5;
                        if(r3) { _fun5939_ip = 90; continue _fun5939 }
case 39:
                        r2 = 0;
                        if(!(r4 !== r2)) { _fun5939_ip = 74; continue _fun5939 }
case 45:
                        r2 = 1;
                        r3 = r5;
                        if(!(r4 === r2)) { _fun5939_ip = 90; continue _fun5939 }
case 55:
                        r2 = _closure2_slot0;
                        r2 = r2.to;
                        _closure3_slot1 = r2;
                        r3 = r2;
                        _fun5939_ip = 90; continue _fun5939;
case 74:
                        r0 = _closure2_slot0;
                        r0 = r0.from;
                        _closure3_slot1 = r0;
                        r3 = r0;
case 90:
                        if(r3) { _fun5939_ip = 127; continue _fun5939 }
case 93:
                        r0 = global;
                        r4 = r0.Error;
                        r0 = r4.prototype;
                        r2 = Object.create(r0, {constructor: {value: r4}});
                        r6 = 'Missing animation keyframe, this should not happen';
                        r7 = r2;
                        r0 = new r7[r4](r6, r5);
                        r0 = r0 instanceof Object ? r0 : r2;
                        throw r0;
case 127:
                        r0 = _closure1_slot0;
                        r2 = r0.default;
                        r0 = undefined;
                        r4 = r2.bind(r0)(r3);
                        _closure3_slot1 = r4;
                        r2 = global;
                        r3 = r2.Object;
                        r2 = r3.keys;
                        r3 = r2.bind(r3)(r4);
                        r2 = r3.forEach;
                        r1 = function(a0) { // Environment: r1
                            _fun5940: for(var _fun5940_ip = 0; ; ) switch(_fun5940_ip) {
case 0:
                                r3 = a0;
                                r0 = _closure2_slot2;
                                r0 = r3 in r0;
                                if(r0) { _fun5940_ip = 43; continue _fun5940 }
case 17:
                                r2 = _closure2_slot2;
                                r0 = {};
                                r4 = new Array(0);
                                r0['inputRange'] = r4;
                                r4 = new Array(0);
                                r0['outputRange'] = r4;
                                r2[r3] = r0;
case 43:
                                r0 = _closure2_slot2;
                                r0 = r0[r3];
                                r5 = r0.inputRange;
                                r4 = r5.push;
                                r2 = _closure3_slot0;
                                r2 = r4.bind(r5)(r2);
                                r1 = _closure2_slot2;
                                r1 = r1[r3];
                                r2 = r1.outputRange;
                                r1 = r2.push;
                                r0 = _closure3_slot1;
                                r0 = r0[r3];
                                r0 = r1.bind(r2)(r0);
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r1 = r2.bind(r3)(r1);
                        return r0;
                    }
                };
                r7 = 0;
                var _closure2_slot3 = r7;
                r4 = r9.length;
                r4 = r7 < r4;
                r6 = undefined;
                r5 = 1;
                if(!r4) { _fun5938_ip = 217; continue _fun5938 }
case 193:
                r4 = r8.bind(r6)();
                r11 = r7 + r5;
                _closure2_slot3 = r11;
                r4 = r9.length;
                r7 = r11;
                if(r7 < r4) { _fun5938_ip = 193; continue _fun5938 }
case 217:
                r4 = _closure1_slot1;
                r4[r1] = r3;
                return r3;
case 227:
                r4 = r2.Error;
                r2 = r4.prototype;
                r3 = Object.create(r2, {constructor: {value: r4}});
                r12 = 'Animation definitions must have at least two values.';
                r13 = r3;
                r2 = new r13[r4](r12, r11);
                r2 = r2 instanceof Object ? r2 : r3;
                throw r2;
case 259:
                r0 = _closure1_slot1;
                r0 = r0[r1];
                return r0;
            }
        };
        r6['default'] = r1;
        r1 = 1;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        var _closure1_slot0 = r1;
        r1 = {};
        var _closure1_slot1 = r1;
        return r0;
    };
    r6 = 536;
    r5 = [1, 537];
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
        r0 = function(a0) { // Original name: flattenStyle, environment: r2
            _fun5942: for(var _fun5942_ip = 0; ; ) switch(_fun5942_ip) {
case 0:
                r0 = global;
                r4 = r0.Object;
                r3 = r4.assign;
                r0 = _closure1_slot0;
                r5 = r0.StyleSheet;
                r2 = r5.flatten;
                r0 = a0;
                r2 = r2.bind(r5)(r0);
                r0 = {};
                r0 = r3.bind(r4)(r0, r2);
                var _closure2_slot0 = r0;
                r2 = r0.transform;
                if(!r2) { _fun5942_ip = 87; continue _fun5942 }
case 62:
                r3 = r0.transform;
                r2 = r3.forEach;
                r1 = function(a0) { // Environment: r1
                    r0 = a0;
                    r1 = global;
                    r2 = r1.Object;
                    r1 = r2.keys;
                    r2 = r1.bind(r2)(r0);
                    r1 = 0;
                    r2 = r2[r1];
                    r1 = _closure2_slot0;
                    r0 = r0[r2];
                    r1[r2] = r0;
                    r0 = undefined;
                    return r0;
                };
                r1 = r2.bind(r3)(r1);
                r1 = delete r0.transform;
case 87:
                return r0;
            }
        };
        r1['default'] = r0;
        r1 = a6;
        r0 = 0;
        r3 = r1[r0];
        r1 = a1;
        r0 = undefined;
        r1 = r1.bind(r0)(r3);
        var _closure1_slot0 = r1;
        return r0;
    };
    r6 = 537;
    r5 = [2];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5944: for(var _fun5944_ip = 0; ; ) switch(_fun5944_ip) {
case 0:
            r3 = a1;
            r6 = a5;
            r4 = a6;
            var _closure1_slot0 = r3;
            var _closure1_slot1 = r4;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r2
                _fun5945: for(var _fun5945_ip = 0; ; ) switch(_fun5945_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5945_ip = 104; continue _fun5945 }
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
                        _fun5946: for(var _fun5946_ip = 0; ; ) switch(_fun5946_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5946_ip = 15; continue _fun5946 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5946_ip = 19; continue _fun5946;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot18 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot18 = r0;
            r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r2
                _fun5947: for(var _fun5947_ip = 0; ; ) switch(_fun5947_ip) {
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
                    r0 = _closure1_slot20;
                    r0 = r0.bind(r2)();
                    if(r0) { _fun5947_ip = 61; continue _fun5947 }
case 48:
                    r0 = r8.apply;
                    r0 = r0.bind(r8)(r3, r5);
                    _fun5947_ip = 107; continue _fun5947;
case 61:
                    r6 = global;
                    r7 = r6.Reflect;
                    r6 = r7.construct;
                    if(r5) { _fun5947_ip = 81; continue _fun5947 }
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
            var _closure1_slot19 = r0;
            r0 = function() { // Original name: _isNativeReflectConstruct, environment: r2
                _fun5948: for(var _fun5948_ip = 0; ; ) switch(_fun5948_ip) {
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
                    _fun5948_ip = 74; continue _fun5948;
case 72: // catch_target0
                    CatchBlockStart(arg_register=1);
case 74:
                    r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                        r0 = _closure2_slot0;
                        r0 = !r0;
                        r0 = !r0;
                        return r0;
                    };
                    _closure1_slot20 = r1;
                    r0 = undefined;
                    r0 = r1.bind(r0)();
                    return r0;
                }
            };
            var _closure1_slot20 = r0;
            r0 = function(a0, a1) { // Original name: omit, environment: r2
                r4 = a1;
                r0 = a0;
                var _closure2_slot0 = r0;
                var _closure2_slot1 = r4;
                r0 = {};
                var _closure2_slot2 = r0;
                r2 = global;
                r3 = r2.Object;
                r2 = r3.keys;
                r3 = r2.bind(r3)(r4);
                r2 = r3.forEach;
                r1 = function(a0) { // Environment: r1
                    _fun5952: for(var _fun5952_ip = 0; ; ) switch(_fun5952_ip) {
case 0:
                        r2 = a0;
                        r3 = _closure2_slot0;
                        r1 = r3.indexOf;
                        r3 = r1.bind(r3)(r2);
                        r1 = -1;
                        if(!(r3 === r1)) { _fun5952_ip = 46; continue _fun5952 }
case 30:
                        r1 = _closure2_slot2;
                        r0 = _closure2_slot1;
                        r0 = r0[r2];
                        r1[r2] = r0;
case 46:
                        r0 = undefined;
                        return r0;
                    }
                };
                r1 = r2.bind(r3)(r1);
                return r0;
            };
            var _closure1_slot21 = r0;
            r0 = function(a0, a1) { // Original name: deepEquals, environment: r2
                _fun5953: for(var _fun5953_ip = 0; ; ) switch(_fun5953_ip) {
case 0:
                    r5 = a0;
                    r4 = a1;
                    r0 = r5 === r4;
                    if(r0) { _fun5953_ip = 53; continue _fun5953 }
case 13:
                    r1 = global;
                    r3 = r1.JSON;
                    r2 = r3.stringify;
                    r2 = r2.bind(r3)(r5);
                    r3 = r1.JSON;
                    r1 = r3.stringify;
                    r1 = r1.bind(r3)(r4);
                    r0 = r2 === r1;
case 53:
                    return r0;
                }
            };
            var _closure1_slot22 = r0;
            r0 = function(a0, a1) { // Original name: getAnimationTarget, environment: r2
                _fun5954: for(var _fun5954_ip = 0; ; ) switch(_fun5954_ip) {
case 0:
                    r1 = a0;
                    r2 = a1;
                    r0 = 'reverse';
                    if(!(r0 !== r2)) { _fun5954_ip = 77; continue _fun5954 }
case 14:
                    r0 = 'alternate';
                    if(!(r0 !== r2)) { _fun5954_ip = 60; continue _fun5954 }
case 22:
                    r0 = 'alternate-reverse';
                    if(!(r0 !== r2)) { _fun5954_ip = 43; continue _fun5954 }
case 30:
                    r0 = 'normal';
                    if(!(r0 === r2)) { _fun5954_ip = 38; continue _fun5954 }
case 38:
                    r0 = 1;
                    return r0;
case 43:
                    r0 = 2;
                    r2 = r1 % r0;
                    r0 = 0;
                    if(!r2) { _fun5954_ip = 58; continue _fun5954 }
case 55:
                    r0 = 1;
case 58:
                    return r0;
case 60:
                    r0 = 2;
                    r1 = r1 % r0;
                    r0 = 1;
                    if(!r1) { _fun5954_ip = 75; continue _fun5954 }
case 73:
                    r0 = 0;
case 75:
                    return r0;
case 77:
                    r0 = 0;
                    return r0;
                }
            };
            var _closure1_slot23 = r0;
            r0 = function(a0, a1) { // Original name: getAnimationOrigin, environment: r2
                _fun5955: for(var _fun5955_ip = 0; ; ) switch(_fun5955_ip) {
case 0:
                    r3 = _closure1_slot23;
                    r2 = undefined;
                    r1 = a0;
                    r0 = a1;
                    r1 = r3.bind(r2)(r1, r0);
                    r0 = 1;
                    if(!r1) { _fun5955_ip = 29; continue _fun5955 }
case 27:
                    r0 = 0;
case 29:
                    return r0;
                }
            };
            var _closure1_slot24 = r0;
            r0 = function(a0) { // Original name: getCompiledAnimation, environment: r2
                _fun5956: for(var _fun5956_ip = 0; ; ) switch(_fun5956_ip) {
case 0:
                    r4 = a0;
                    r1 = typeof r4;
                    r0 = 'string';
                    if(!(r1 !== r0)) { _fun5956_ip = 35; continue _fun5956 }
case 14:
                    r0 = _closure1_slot13;
                    r1 = r0.default;
                    r0 = undefined;
                    r0 = r1.bind(r0)(r4);
                    return r0;
case 35:
                    r2 = _closure1_slot0;
                    r1 = _closure1_slot1;
                    r0 = 15;
                    r0 = r1[r0];
                    r1 = undefined;
                    r0 = r2.bind(r1)(r0);
                    r0 = r0.getAnimationByName;
                    r0 = r0.bind(r1)(r4);
                    if(r0) { _fun5956_ip = 124; continue _fun5956 }
case 74:
                    r1 = global;
                    r3 = r1.Error;
                    r1 = r1.HermesInternal;
                    r2 = r1.concat;
                    r1 = 'No animation registred by the name of ';
                    r5 = r2.bind(r1)(r4);
                    r2 = r3.prototype;
                    r2 = Object.create(r2, {constructor: {value: r3}});
                    r6 = r2;
                    r1 = new r6[r3](r5, r4);
                    r1 = r1 instanceof Object ? r1 : r2;
                    throw r1;
case 124:
                    return r0;
                }
            };
            var _closure1_slot25 = r0;
            r0 = function(a0, a1) { // Original name: makeInterpolatedStyle, environment: r2
                r4 = a0;
                var _closure2_slot0 = r4;
                r1 = a1;
                var _closure2_slot1 = r1;
                r2 = {};
                var _closure2_slot2 = r2;
                r1 = global;
                r3 = r1.Object;
                r1 = r3.keys;
                r3 = r1.bind(r3)(r4);
                r1 = r3.forEach;
                r0 = function(a0) { // Environment: r0
                    _fun5958: for(var _fun5958_ip = 0; ; ) switch(_fun5958_ip) {
case 0:
                        r2 = a0;
                        r0 = 'style';
                        if(!(r2 !== r0)) { _fun5958_ip = 54; continue _fun5958 }
case 11:
                        r0 = 'easing';
                        if(!(r2 !== r0)) { _fun5958_ip = 89; continue _fun5958 }
case 19:
                        r1 = _closure2_slot2;
                        r4 = _closure2_slot1;
                        r3 = r4.interpolate;
                        r0 = _closure2_slot0;
                        r0 = r0[r2];
                        r0 = r3.bind(r4)(r0);
                        r1[r2] = r0;
                        _fun5958_ip = 89; continue _fun5958;
case 54:
                        r0 = global;
                        r3 = r0.Object;
                        r2 = r3.assign;
                        r1 = _closure2_slot2;
                        r0 = _closure2_slot0;
                        r0 = r0.style;
                        r0 = r2.bind(r3)(r1, r0);
case 89:
                        r0 = undefined;
                        return r0;
                    }
                };
                r0 = r1.bind(r3)(r0);
                r0 = _closure1_slot10;
                r1 = r0.default;
                r0 = undefined;
                r0 = r1.bind(r0)(r2);
                return r0;
            };
            var _closure1_slot26 = r0;
            r0 = function(a0, a1, a2, a3, a4) { // Original name: transitionToValue, environment: r2
                _fun5959: for(var _fun5959_ip = 0; ; ) switch(_fun5959_ip) {
case 0:
                    r7 = a1;
                    r11 = a2;
                    r9 = a3;
                    r12 = a4;
                    r0 = undefined;
                    r4 = undefined;
                    r2 = a0;
                    var _closure2_slot0 = r2;
                    r3 = arguments.length;
                    r2 = 5;
                    r3 = r3 > r2;
                    r8 = false;
                    if(!r3) { _fun5959_ip = 54; continue _fun5959 }
case 40:
                    r3 = arguments[r2];
                    r8 = false;
                    if(!(r3 !== r0)) { _fun5959_ip = 54; continue _fun5959 }
case 50:
                    r8 = arguments[r2];
case 54:
                    r3 = arguments.length;
                    r2 = 6;
                    r3 = r3 > r2;
                    r5 = undefined;
                    if(!r3) { _fun5959_ip = 73; continue _fun5959 }
case 69:
                    r5 = arguments[r2];
case 73:
                    r2 = arguments.length;
                    r3 = 7;
                    r6 = r2 > r3;
                    r2 = undefined;
                    if(!r6) { _fun5959_ip = 92; continue _fun5959 }
case 88:
                    r2 = arguments[r3];
case 92:
                    var _closure2_slot1 = r2;
                    r2 = arguments.length;
                    r3 = 8;
                    r6 = r2 > r3;
                    r2 = undefined;
                    if(!r6) { _fun5959_ip = 115; continue _fun5959 }
case 111:
                    r2 = arguments[r3];
case 115:
                    var _closure2_slot2 = r2;
                    if(r9) { _fun5959_ip = 164; continue _fun5959 }
case 122:
                    if(r12) { _fun5959_ip = 164; continue _fun5959 }
case 125:
                    if(r5) { _fun5959_ip = 164; continue _fun5959 }
case 128:
                    r2 = _closure1_slot9;
                    r4 = r2.Animated;
                    r3 = r4.spring;
                    r2 = {};
                    r2['toValue'] = r11;
                    r2['useNativeDriver'] = r8;
                    r3 = r3.bind(r4)(r7, r2);
                    _fun5959_ip = 257; continue _fun5959;
case 164:
                    r2 = _closure1_slot9;
                    r6 = r2.Animated;
                    r4 = r6.timing;
                    r2 = {};
                    r2['toValue'] = r11;
                    r2['delay'] = r5;
                    if(r9) { _fun5959_ip = 202; continue _fun5959 }
case 196:
                    r9 = 1000;
case 202:
                    r2['duration'] = r9;
                    r13 = typeof r12;
                    r11 = 'function';
                    r9 = r12;
                    if(!(r13 !== r11)) { _fun5959_ip = 243; continue _fun5959 }
case 220:
                    r10 = _closure1_slot14;
                    r11 = r10.default;
                    r10 = r12;
                    if(r12) { _fun5959_ip = 239; continue _fun5959 }
case 235:
                    r10 = 'ease';
case 239:
                    r9 = r11[r10];
case 243:
                    r2['easing'] = r9;
                    r2['useNativeDriver'] = r8;
                    r3 = r4.bind(r6)(r7, r2);
case 257:
                    r2 = global;
                    r4 = r2.setTimeout;
                    r2 = function() { // Environment: r1
                        r2 = _closure2_slot1;
                        r1 = _closure2_slot0;
                        r0 = undefined;
                        r0 = r2.bind(r0)(r1);
                        return r0;
                    };
                    r2 = r4.bind(r0)(r2, r5);
                    r2 = r3.start;
                    r1 = function() { // Environment: r1
                        r2 = _closure2_slot2;
                        r1 = _closure2_slot0;
                        r0 = undefined;
                        r0 = r2.bind(r0)(r1);
                        return r0;
                    };
                    r1 = r2.bind(r3)(r1);
                    return r0;
                }
            };
            var _closure1_slot27 = r0;
            r0 = 0;
            r1 = r4[r0];
            r0 = undefined;
            r5 = r3.bind(r0)(r1);
            r18 = global;
            r9 = r18.Object;
            r8 = r9.defineProperty;
            r7 = {};
            r1 = true;
            r7['value'] = r1;
            r1 = '__esModule';
            r1 = r8.bind(r9)(r6, r1, r7);
            r1 = function(a0) { // Original name: createAnimatableComponent, environment: r2
                _fun5962: for(var _fun5962_ip = 0; ; ) switch(_fun5962_ip) {
case 0:
                    r2 = a0;
                    r8 = r2.displayName;
                    if(r8) { _fun5962_ip = 18; continue _fun5962 }
case 13:
                    r8 = r2.name;
case 18:
                    if(r8) { _fun5962_ip = 25; continue _fun5962 }
case 21:
                    r8 = 'Component';
case 25:
                    r0 = _closure1_slot9;
                    r1 = r0.Animated;
                    r0 = r1.createAnimatedComponent;
                    r0 = r0.bind(r1)(r2);
                    var _closure2_slot0 = r0;
                    r0 = _closure1_slot7;
                    r1 = r0.Component;
                    r0 = function(a0) { // Environment: r3
                        r3 = function(a0) { // Original name: AnimatableComponent, environment: r5
                            _fun5964: for(var _fun5964_ip = 0; ; ) switch(_fun5964_ip) {
case 0:
                                r5 = a0;
                                r7 = this;
                                r0 = _closure1_slot2;
                                r0 = r0.default;
                                r6 = _closure3_slot0;
                                r3 = undefined;
                                r0 = r0.bind(r3)(r7, r6);
                                r4 = _closure1_slot19;
                                r0 = new Array(1);
                                r0[0] = r5;
                                r0 = r4.bind(r3)(r7, r6, r0);
                                var _closure4_slot0 = r0;
                                r4 = null;
                                r0['ref'] = r4;
                                r6 = function(a0) { // Environment: r1
                                    r1 = _closure4_slot0;
                                    r0 = a0;
                                    r1['ref'] = r0;
                                    r0 = undefined;
                                    return r0;
                                };
                                r0['handleRef'] = r6;
                                r6 = _closure1_slot9;
                                r6 = r6.Animated;
                                r8 = r6.Value;
                                r9 = _closure1_slot24;
                                r6 = r0.props;
                                r7 = r6.direction;
                                r6 = 0;
                                r13 = r9.bind(r3)(r6, r7);
                                r7 = r8.prototype;
                                r7 = Object.create(r7, {constructor: {value: r8}});
                                r14 = r7;
                                r6 = new r14[r8](r13, r12);
                                r9 = r6 instanceof Object ? r6 : r7;
                                r8 = {};
                                r7 = {};
                                r6 = r5.animation;
                                if(!r6) { _fun5964_ip = 175; continue _fun5964 }
case 147:
                                r10 = _closure1_slot25;
                                r6 = r5.animation;
                                r6 = r10.bind(r3)(r6);
                                r10 = _closure1_slot26;
                                r8 = r10.bind(r3)(r6, r9);
                                r7 = r6;
case 175:
                                r6 = {};
                                r6['animationValue'] = r9;
                                r6['animationStyle'] = r8;
                                r6['compiledAnimation'] = r7;
                                r7 = {};
                                r6['transitionStyle'] = r7;
                                r7 = {};
                                r6['transitionValues'] = r7;
                                r7 = {};
                                r6['currentTransitionValues'] = r7;
                                r0['state'] = r6;
                                r6 = r5.transition;
                                if(!r6) { _fun5964_ip = 278; continue _fun5964 }
case 228:
                                r6 = global;
                                r9 = r6.Object;
                                r8 = r9.assign;
                                r7 = r0.state;
                                r6 = r0.initializeTransitionState;
                                r5 = r5.transition;
                                r6 = r6.bind(r0)(r5);
                                r5 = {};
                                r5 = r8.bind(r9)(r5, r7, r6);
                                r0['state'] = r5;
case 278:
                                r0['delayTimer'] = r4;
                                r4 = _closure1_slot0;
                                r5 = _closure1_slot1;
                                r2 = 15;
                                r2 = r5[r2];
                                r2 = r4.bind(r3)(r2);
                                r2 = r2.getAnimationNames;
                                r3 = r2.bind(r3)();
                                r2 = r3.forEach;
                                r1 = function(a0) { // Environment: r1
                                    _fun5966: for(var _fun5966_ip = 0; ; ) switch(_fun5966_ip) {
case 0:
                                        r2 = a0;
                                        r1 = _closure4_slot0;
                                        r1 = r2 in r1;
                                        if(r1) { _fun5966_ip = 42; continue _fun5966 }
case 17:
                                        r1 = _closure4_slot0;
                                        r3 = r1.animate;
                                        r0 = r3.bind;
                                        r0 = r0.bind(r3)(r1, r2);
                                        r1[r2] = r0;
case 42:
                                        r0 = undefined;
                                        return r0;
                                    }
                                };
                                r1 = r2.bind(r3)(r1);
                                return r0;
                            }
                        };
                        var _closure3_slot0 = r3;
                        r1 = _closure1_slot6;
                        r4 = r1.default;
                        r2 = undefined;
                        r1 = a0;
                        r1 = r4.bind(r2)(r3, r1);
                        r0 = _closure1_slot3;
                        r1 = r0.default;
                        r4 = {};
                        r0 = 'initializeTransitionState';
                        r4['key'] = r0;
                        r0 = function(a0) { // Original name: initializeTransitionState, environment: r5
                            r1 = {};
                            var _closure4_slot0 = r1;
                            r2 = {};
                            var _closure4_slot1 = r2;
                            r3 = _closure1_slot11;
                            r6 = r3.default;
                            r3 = this;
                            r3 = r3.props;
                            r5 = r3.style;
                            r4 = undefined;
                            r3 = a0;
                            r3 = r6.bind(r4)(r3, r5);
                            var _closure4_slot2 = r3;
                            r4 = global;
                            r5 = r4.Object;
                            r4 = r5.keys;
                            r5 = r4.bind(r5)(r3);
                            r4 = r5.forEach;
                            r0 = function(a0) { // Environment: r0
                                _fun5968: for(var _fun5968_ip = 0; ; ) switch(_fun5968_ip) {
case 0:
                                    r2 = a0;
                                    r1 = _closure4_slot2;
                                    r1 = r1[r2];
                                    r5 = _closure1_slot16;
                                    r4 = r5.indexOf;
                                    r5 = r4.bind(r5)(r2);
                                    r4 = -1;
                                    if(!(r5 === r4)) { _fun5968_ip = 108; continue _fun5968 }
case 41:
                                    r5 = typeof r1;
                                    r4 = 'number';
                                    if(!(r5 === r4)) { _fun5968_ip = 108; continue _fun5968 }
case 52:
                                    r4 = _closure1_slot9;
                                    r4 = r4.Animated;
                                    r4 = r4.Value;
                                    r5 = r4.prototype;
                                    r5 = Object.create(r5, {constructor: {value: r4}});
                                    r8 = r5;
                                    r7 = r1;
                                    r4 = new r8[r4](r7, r6);
                                    r5 = r4 instanceof Object ? r4 : r5;
                                    r4 = _closure4_slot0;
                                    r4[r2] = r5;
                                    r4 = _closure4_slot1;
                                    r4[r2] = r5;
                                    _fun5968_ip = 161; continue _fun5968;
case 108:
                                    r4 = _closure4_slot0;
                                    r3 = _closure1_slot9;
                                    r3 = r3.Animated;
                                    r6 = r3.Value;
                                    r3 = r6.prototype;
                                    r5 = Object.create(r3, {constructor: {value: r6}});
                                    r7 = 0;
                                    r8 = r5;
                                    r3 = new r8[r6](r7, r6);
                                    r3 = r3 instanceof Object ? r3 : r5;
                                    r4[r2] = r3;
                                    r0 = _closure4_slot1;
                                    r0[r2] = r1;
case 161:
                                    r0 = undefined;
                                    return r0;
                                }
                            };
                            r0 = r4.bind(r5)(r0);
                            r0 = {};
                            r0['currentTransitionValues'] = r3;
                            r0['transitionStyle'] = r2;
                            r0['transitionValues'] = r1;
                            return r0;
                        };
                        r4['value'] = r0;
                        r0 = new Array(14);
                        r0[0] = r4;
                        r4 = {};
                        r6 = 'getTransitionState';
                        r4['key'] = r6;
                        r6 = function(a0) { // Original name: getTransitionState, environment: r5
                            _fun5969: for(var _fun5969_ip = 0; ; ) switch(_fun5969_ip) {
case 0:
                                r3 = a0;
                                r5 = this;
                                var _closure4_slot0 = r5;
                                r4 = typeof r3;
                                r1 = 'string';
                                r2 = r3;
                                if(!(r4 === r1)) { _fun5969_ip = 36; continue _fun5969 }
case 25:
                                r1 = new Array(1);
                                r1[0] = r3;
                                r2 = r1;
case 36:
                                r1 = r5.state;
                                r10 = r1.transitionValues;
                                r11 = r1.currentTransitionValues;
                                r9 = r1.transitionStyle;
                                r1 = r2.filter;
                                r0 = function(a0) { // Environment: r0
                                    r0 = _closure4_slot0;
                                    r0 = r0.state;
                                    r1 = r0.transitionValues;
                                    r0 = a0;
                                    r0 = r1[r0];
                                    r0 = !r0;
                                    return r0;
                                };
                                r4 = r1.bind(r2)(r0);
                                r0 = r4.length;
                                r3 = r10;
                                r2 = r11;
                                r1 = r9;
                                if(!r0) { _fun5969_ip = 183; continue _fun5969 }
case 92:
                                r0 = r5.initializeTransitionState;
                                r0 = r0.bind(r5)(r4);
                                r6 = global;
                                r8 = r6.Object;
                                r7 = r8.assign;
                                r5 = r0.transitionValues;
                                r4 = {};
                                r3 = r7.bind(r8)(r4, r10, r5);
                                r10 = r6.Object;
                                r8 = r10.assign;
                                r7 = r0.currentTransitionValues;
                                r4 = {};
                                r2 = r8.bind(r10)(r4, r11, r7);
                                r8 = r6.Object;
                                r7 = r8.assign;
                                r6 = r0.transitionStyle;
                                r0 = {};
                                r1 = r7.bind(r8)(r0, r9, r6);
case 183:
                                r0 = {};
                                r0['transitionValues'] = r3;
                                r0['currentTransitionValues'] = r2;
                                r0['transitionStyle'] = r1;
                                return r0;
                            }
                        };
                        r4['value'] = r6;
                        r0[1] = r4;
                        r4 = {};
                        r6 = 'setNativeProps';
                        r4['key'] = r6;
                        r6 = function(a0) { // Original name: setNativeProps, environment: r5
                            _fun5971: for(var _fun5971_ip = 0; ; ) switch(_fun5971_ip) {
case 0:
                                r0 = this;
                                r1 = r0.ref;
                                if(!r1) { _fun5971_ip = 29; continue _fun5971 }
case 10:
                                r2 = r0.ref;
                                r1 = r2.setNativeProps;
                                r0 = a0;
                                r0 = r1.bind(r2)(r0);
case 29:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r4['value'] = r6;
                        r0[2] = r4;
                        r4 = {};
                        r6 = 'componentDidMount';
                        r4['key'] = r6;
                        r6 = function() { // Original name: componentDidMount, environment: r5
                            _fun5972: for(var _fun5972_ip = 0; ; ) switch(_fun5972_ip) {
case 0:
                                r1 = this;
                                var _closure4_slot0 = r1;
                                r3 = r1.props;
                                r2 = r3.animation;
                                r4 = r3.duration;
                                var _closure4_slot1 = r4;
                                r4 = r3.delay;
                                r5 = r3.onAnimationBegin;
                                var _closure4_slot2 = r5;
                                r3 = r3.iterationDelay;
                                var _closure4_slot3 = r3;
                                if(!r2) { _fun5972_ip = 93; continue _fun5972 }
case 57:
                                r3 = function() { // Original name: startAnimation, environment: r0
                                    r2 = _closure4_slot2;
                                    r0 = undefined;
                                    r2 = r2.bind(r0)();
                                    r2 = _closure4_slot0;
                                    r6 = r2.startAnimation;
                                    r10 = _closure4_slot1;
                                    r8 = _closure4_slot3;
                                    r9 = 0;
                                    r7 = function(a0) { // Environment: r1
                                        r0 = _closure4_slot0;
                                        r2 = r0.props;
                                        r1 = r2.onAnimationEnd;
                                        r0 = a0;
                                        r0 = r1.bind(r2)(r0);
                                        return r0;
                                    };
                                    r11 = r2;
                                    r1 = r11[r6](r10, r9, r8, r7, r6);
                                    r1 = null;
                                    r2['delayTimer'] = r1;
                                    return r0;
                                };
                                r2 = undefined;
                                if(r4) { _fun5972_ip = 73; continue _fun5972 }
case 67:
                                r0 = r3.bind(r2)();
                                _fun5972_ip = 93; continue _fun5972;
case 73:
                                r0 = global;
                                r0 = r0.setTimeout;
                                r0 = r0.bind(r2)(r3, r4);
                                r1['delayTimer'] = r0;
case 93:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r4['value'] = r6;
                        r0[3] = r4;
                        r4 = {};
                        r6 = 'UNSAFE_componentWillReceiveProps';
                        r4['key'] = r6;
                        r6 = function(a0) { // Original name: UNSAFE_componentWillReceiveProps, environment: r5
                            _fun5975: for(var _fun5975_ip = 0; ; ) switch(_fun5975_ip) {
case 0:
                                r0 = a0;
                                r5 = this;
                                var _closure4_slot0 = r5;
                                r8 = r0.animation;
                                r4 = r0.delay;
                                r3 = r0.duration;
                                r2 = r0.easing;
                                r10 = r0.iterationDelay;
                                r7 = r0.transition;
                                r11 = r0.onAnimationBegin;
                                if(r7) { _fun5975_ip = 154; continue _fun5975 }
case 57:
                                r13 = _closure1_slot22;
                                r9 = r5.props;
                                r12 = r9.animation;
                                r9 = undefined;
                                r12 = r13.bind(r9)(r8, r12);
                                if(r12) { _fun5975_ip = 198; continue _fun5975 }
case 83:
                                if(r8) { _fun5975_ip = 98; continue _fun5975 }
case 86:
                                r12 = r5.stopAnimation;
                                r12 = r12.bind(r5)();
                                _fun5975_ip = 198; continue _fun5975;
case 98:
                                r12 = r5.delayTimer;
                                if(r12) { _fun5975_ip = 141; continue _fun5975 }
case 107:
                                r9 = r11.bind(r9)();
                                r9 = r5.animate;
                                r10 = r9.bind(r5)(r8, r3, r10);
                                r9 = r10.then;
                                r6 = function(a0) { // Environment: r6
                                    r0 = _closure4_slot0;
                                    r2 = r0.props;
                                    r1 = r2.onAnimationEnd;
                                    r0 = a0;
                                    r0 = r1.bind(r2)(r0);
                                    return r0;
                                };
                                r6 = r9.bind(r10)(r6);
                                _fun5975_ip = 198; continue _fun5975;
case 141:
                                r6 = r5.setAnimation;
                                r6 = r6.bind(r5)(r8);
                                _fun5975_ip = 198; continue _fun5975;
case 154:
                                r1 = _closure1_slot11;
                                r6 = r1.default;
                                r1 = r0.style;
                                r0 = undefined;
                                r17 = r6.bind(r0)(r7, r1);
                                r0 = r5.transitionTo;
                                r18 = r5;
                                r16 = r3;
                                r15 = r2;
                                r14 = r4;
                                r0 = r18[r0](r17, r16, r15, r14, r13);
case 198:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r4['value'] = r6;
                        r0[4] = r4;
                        r4 = {};
                        r6 = 'componentWillUnmount';
                        r4['key'] = r6;
                        r6 = function() { // Original name: componentWillUnmount, environment: r5
                            _fun5977: for(var _fun5977_ip = 0; ; ) switch(_fun5977_ip) {
case 0:
                                r0 = this;
                                r1 = r0.delayTimer;
                                if(!r1) { _fun5977_ip = 32; continue _fun5977 }
case 11:
                                r1 = global;
                                r2 = r1.clearTimeout;
                                r1 = r0.delayTimer;
                                r0 = undefined;
                                r0 = r2.bind(r0)(r1);
case 32:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r4['value'] = r6;
                        r0[5] = r4;
                        r4 = {};
                        r6 = 'setAnimation';
                        r4['key'] = r6;
                        r6 = function(a0, a1) { // Original name: setAnimation, environment: r5
                            r4 = this;
                            r3 = _closure1_slot25;
                            r0 = undefined;
                            r2 = a0;
                            r2 = r3.bind(r0)(r2);
                            var _closure4_slot0 = r2;
                            r3 = r4.setState;
                            r2 = function(a0) { // Environment: r1
                                r0 = {};
                                r4 = _closure1_slot26;
                                r1 = _closure4_slot0;
                                r2 = a0;
                                r3 = r2.animationValue;
                                r2 = undefined;
                                r2 = r4.bind(r2)(r1, r3);
                                r0['animationStyle'] = r2;
                                r0['compiledAnimation'] = r1;
                                return r0;
                            };
                            r1 = a1;
                            r1 = r3.bind(r4)(r2, r1);
                            return r0;
                        };
                        r4['value'] = r6;
                        r0[6] = r4;
                        r4 = {};
                        r6 = 'animate';
                        r4['key'] = r6;
                        r6 = function(a0, a1, a2) { // Original name: animate, environment: r5
                            r1 = a0;
                            var _closure4_slot0 = r1;
                            r1 = a1;
                            var _closure4_slot1 = r1;
                            r1 = a2;
                            var _closure4_slot2 = r1;
                            r1 = this;
                            var _closure4_slot3 = r1;
                            r1 = global;
                            r2 = r1.Promise;
                            r1 = r2.prototype;
                            r1 = Object.create(r1, {constructor: {value: r2}});
                            r3 = function(a0) { // Environment: r0
                                r1 = a0;
                                var _closure5_slot0 = r1;
                                r3 = _closure4_slot3;
                                r2 = r3.setAnimation;
                                r1 = _closure4_slot0;
                                r0 = function() { // Environment: r0
                                    r5 = _closure4_slot3;
                                    r4 = r5.startAnimation;
                                    r9 = _closure4_slot1;
                                    r7 = _closure4_slot2;
                                    r6 = _closure5_slot0;
                                    r8 = 0;
                                    r10 = r5;
                                    r0 = r10[r4](r9, r8, r7, r6, r5);
                                    r0 = undefined;
                                    return r0;
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
                        r4['value'] = r6;
                        r0[7] = r4;
                        r4 = {};
                        r6 = 'stopAnimation';
                        r4['key'] = r6;
                        r6 = function() { // Original name: stopAnimation, environment: r5
                            _fun5983: for(var _fun5983_ip = 0; ; ) switch(_fun5983_ip) {
case 0:
                                r1 = this;
                                r2 = r1.setState;
                                r0 = {};
                                r3 = false;
                                r0['scheduledAnimation'] = r3;
                                r3 = {};
                                r0['animationStyle'] = r3;
                                r0 = r2.bind(r1)(r0);
                                r0 = r1.state;
                                r2 = r0.animationValue;
                                r0 = r2.stopAnimation;
                                r0 = r0.bind(r2)();
                                r0 = r1.delayTimer;
                                if(!r0) { _fun5983_ip = 88; continue _fun5983 }
case 59:
                                r0 = global;
                                r3 = r0.clearTimeout;
                                r2 = r1.delayTimer;
                                r0 = undefined;
                                r0 = r3.bind(r0)(r2);
                                r0 = null;
                                r1['delayTimer'] = r0;
case 88:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r4['value'] = r6;
                        r0[8] = r4;
                        r4 = {};
                        r6 = 'startAnimation';
                        r4['key'] = r6;
                        r6 = function(a0, a1, a2, a3) { // Original name: startAnimation, environment: r5
                            _fun5984: for(var _fun5984_ip = 0; ; ) switch(_fun5984_ip) {
case 0:
                                r7 = a0;
                                r12 = a1;
                                r6 = a2;
                                r8 = this;
                                var _closure4_slot0 = r7;
                                var _closure4_slot1 = r6;
                                r0 = a3;
                                var _closure4_slot2 = r0;
                                var _closure4_slot3 = r8;
                                r0 = r8.state;
                                r5 = r0.animationValue;
                                r0 = r0.compiledAnimation;
                                r2 = r8.props;
                                r13 = r2.direction;
                                r11 = r2.iterationCount;
                                var _closure4_slot4 = r11;
                                r3 = r2.useNativeDriver;
                                r9 = r2.isInteraction;
                                r2 = r8.props;
                                r10 = r2.easing;
                                if(r10) { _fun5984_ip = 99; continue _fun5984 }
case 94:
                                r10 = r0.easing;
case 99:
                                if(r10) { _fun5984_ip = 106; continue _fun5984 }
case 102:
                                r10 = 'ease';
case 106:
                                if(r12) { _fun5984_ip = 111; continue _fun5984 }
case 109:
                                r12 = 0;
case 111:
                                var _closure4_slot5 = r12;
                                r4 = _closure1_slot24;
                                r0 = undefined;
                                r14 = r4.bind(r0)(r12, r13);
                                r12 = _closure1_slot23;
                                r4 = _closure4_slot5;
                                r12 = r12.bind(r0)(r4, r13);
                                r4 = r5.setValue;
                                r4 = r4.bind(r5)(r14);
                                r15 = typeof r10;
                                r4 = 'string';
                                r14 = r10;
                                if(!(r15 === r4)) { _fun5984_ip = 182; continue _fun5984 }
case 169:
                                r4 = _closure1_slot14;
                                r4 = r4.default;
                                r14 = r4[r10];
case 182:
                                r4 = 'reverse';
                                r4 = r13 === r4;
                                if(r4) { _fun5984_ip = 210; continue _fun5984 }
case 193:
                                r10 = 'alternate';
                                r10 = r13 === r10;
                                if(!r10) { _fun5984_ip = 207; continue _fun5984 }
case 204:
                                r10 = !r12;
case 207:
                                r4 = r10;
case 210:
                                if(r4) { _fun5984_ip = 230; continue _fun5984 }
case 213:
                                r10 = 'alternate-reverse';
                                r10 = r13 === r10;
                                if(!r10) { _fun5984_ip = 227; continue _fun5984 }
case 224:
                                r10 = !r12;
case 227:
                                r4 = r10;
case 230:
                                r10 = r14;
                                if(!r4) { _fun5984_ip = 256; continue _fun5984 }
case 236:
                                r4 = _closure1_slot9;
                                r13 = r4.Easing;
                                r4 = r13.out;
                                r10 = r4.bind(r13)(r14);
case 256:
                                r4 = {};
                                r4['toValue'] = r12;
                                r4['easing'] = r10;
                                r12 = typeof r9;
                                r10 = 'undefined';
                                if(!(r12 === r10)) { _fun5984_ip = 284; continue _fun5984 }
case 277:
                                r10 = 1;
                                r9 = r11 <= r10;
case 284:
                                r4['isInteraction'] = r9;
                                if(r7) { _fun5984_ip = 302; continue _fun5984 }
case 292:
                                r8 = r8.props;
                                r7 = r8.duration;
case 302:
                                if(r7) { _fun5984_ip = 311; continue _fun5984 }
case 305:
                                r7 = 1000;
case 311:
                                r4['duration'] = r7;
                                r4['useNativeDriver'] = r3;
                                r8 = 0;
                                r3 = 0;
                                if(!r6) { _fun5984_ip = 342; continue _fun5984 }
case 326:
                                r7 = _closure4_slot5;
                                r7 = r7 > r8;
                                r3 = 0;
                                if(!r7) { _fun5984_ip = 342; continue _fun5984 }
case 339:
                                r3 = r6;
case 342:
                                r4['delay'] = r3;
                                r2 = _closure1_slot9;
                                r3 = r2.Animated;
                                r2 = r3.timing;
                                r3 = r2.bind(r3)(r5, r4);
                                r2 = r3.start;
                                r1 = function(a0) { // Environment: r1
                                    _fun5985: for(var _fun5985_ip = 0; ; ) switch(_fun5985_ip) {
case 0:
                                        r3 = a0;
                                        r2 = _closure4_slot5;
                                        r1 = 1;
                                        r1 = r2 + r1;
                                        _closure4_slot5 = r1;
                                        r1 = r3.finished;
                                        if(!r1) { _fun5985_ip = 72; continue _fun5985 }
case 30:
                                        r1 = _closure4_slot3;
                                        r1 = r1.props;
                                        r1 = r1.animation;
                                        if(!r1) { _fun5985_ip = 72; continue _fun5985 }
case 48:
                                        r2 = _closure4_slot4;
                                        r1 = 'infinite';
                                        if(!(r2 !== r1)) { _fun5985_ip = 92; continue _fun5985 }
case 60:
                                        r2 = _closure4_slot5;
                                        r1 = _closure4_slot4;
                                        if(!(!(r2 < r1))) { _fun5985_ip = 92; continue _fun5985 }
case 72:
                                        r1 = _closure4_slot2;
                                        if(!r1) { _fun5985_ip = 125; continue _fun5985 }
case 79:
                                        r2 = _closure4_slot2;
                                        r1 = undefined;
                                        r1 = r2.bind(r1)(r3);
                                        _fun5985_ip = 125; continue _fun5985;
case 92:
                                        r5 = _closure4_slot3;
                                        r4 = r5.startAnimation;
                                        r9 = _closure4_slot0;
                                        r8 = _closure4_slot5;
                                        r7 = _closure4_slot1;
                                        r6 = _closure4_slot2;
                                        r10 = r5;
                                        r0 = r10[r4](r9, r8, r7, r6, r5);
case 125:
                                        r0 = undefined;
                                        return r0;
                                    }
                                };
                                r1 = r2.bind(r3)(r1);
                                return r0;
                            }
                        };
                        r4['value'] = r6;
                        r0[9] = r4;
                        r4 = {};
                        r6 = 'transition';
                        r4['key'] = r6;
                        r6 = function(a0, a1, a2, a3) { // Original name: transition, environment: r5
                            r4 = this;
                            r0 = a2;
                            var _closure4_slot0 = r0;
                            r0 = a3;
                            var _closure4_slot1 = r0;
                            var _closure4_slot2 = r4;
                            r0 = _closure1_slot12;
                            r5 = r0.default;
                            r0 = undefined;
                            r3 = a0;
                            r3 = r5.bind(r0)(r3);
                            var _closure4_slot3 = r3;
                            r2 = _closure1_slot12;
                            r3 = r2.default;
                            r2 = a1;
                            r5 = r3.bind(r0)(r2);
                            var _closure4_slot4 = r5;
                            r2 = global;
                            r3 = r2.Object;
                            r2 = r3.keys;
                            r8 = r2.bind(r3)(r5);
                            r2 = r4.getTransitionState;
                            r2 = r2.bind(r4)(r8);
                            r7 = r2.transitionValues;
                            var _closure4_slot5 = r7;
                            r5 = r2.currentTransitionValues;
                            var _closure4_slot6 = r5;
                            r6 = r2.transitionStyle;
                            var _closure4_slot7 = r6;
                            r3 = r8.forEach;
                            r2 = function(a0) { // Environment: r1
                                _fun5987: for(var _fun5987_ip = 0; ; ) switch(_fun5987_ip) {
case 0:
                                    r2 = a0;
                                    r1 = _closure4_slot3;
                                    r8 = r1[r2];
                                    r1 = _closure4_slot4;
                                    r3 = r1[r2];
                                    r1 = _closure4_slot5;
                                    r6 = r1[r2];
                                    if(r6) { _fun5987_ip = 73; continue _fun5987 }
case 33:
                                    r1 = _closure1_slot9;
                                    r1 = r1.Animated;
                                    r5 = r1.Value;
                                    r1 = r5.prototype;
                                    r4 = Object.create(r1, {constructor: {value: r5}});
                                    r10 = 0;
                                    r11 = r4;
                                    r1 = new r11[r5](r10, r9);
                                    r6 = r1 instanceof Object ? r1 : r4;
case 73:
                                    r5 = _closure1_slot16;
                                    r4 = r5.indexOf;
                                    r5 = r4.bind(r5)(r2);
                                    r4 = -1;
                                    r5 = r5 !== r4;
                                    if(r5) { _fun5987_ip = 121; continue _fun5987 }
case 103:
                                    r7 = global;
                                    r7 = r7.value;
                                    r9 = typeof r7;
                                    r7 = 'number';
                                    r5 = r9 !== r7;
case 121:
                                    r7 = _closure1_slot17;
                                    r1 = r7.indexOf;
                                    r1 = r1.bind(r7)(r2);
                                    if(r5) { _fun5987_ip = 226; continue _fun5987 }
case 138:
                                    if(!(r1 === r4)) { _fun5987_ip = 152; continue _fun5987 }
case 142:
                                    r1 = _closure4_slot7;
                                    r1[r2] = r6;
                                    _fun5987_ip = 213; continue _fun5987;
case 152:
                                    r4 = _closure4_slot7;
                                    r5 = r6.interpolate;
                                    r1 = {};
                                    r7 = [0, 1];
                                    r1['inputRange'] = r7;
                                    r7 = [0, 1];
                                    r1['outputRange'] = r7;
                                    r7 = 'clamp';
                                    r1['extrapolateLeft'] = r7;
                                    r1 = r5.bind(r6)(r1);
                                    r4[r2] = r1;
                                    r1 = _closure4_slot6;
                                    r1[r2] = r3;
case 213:
                                    r1 = r6.setValue;
                                    r1 = r1.bind(r6)(r8);
                                    _fun5987_ip = 306; continue _fun5987;
case 226:
                                    r4 = r6.setValue;
                                    r1 = 0;
                                    r1 = r4.bind(r6)(r1);
                                    r4 = _closure4_slot7;
                                    r5 = r6.interpolate;
                                    r1 = {};
                                    r7 = [0, 1];
                                    r1['inputRange'] = r7;
                                    r7 = new Array(2);
                                    r7[0] = r8;
                                    r7[1] = r3;
                                    r1['outputRange'] = r7;
                                    r1 = r5.bind(r6)(r1);
                                    r4[r2] = r1;
                                    r1 = _closure4_slot6;
                                    r1[r2] = r3;
                                    r1 = _closure4_slot4;
                                    r0 = 1;
                                    r1[r2] = r0;
case 306:
                                    r0 = undefined;
                                    return r0;
                                }
                            };
                            r2 = r3.bind(r8)(r2);
                            r3 = r4.setState;
                            r2 = {};
                            r2['transitionValues'] = r7;
                            r2['transitionStyle'] = r6;
                            r2['currentTransitionValues'] = r5;
                            r1 = function() { // Environment: r1
                                _fun5988: for(var _fun5988_ip = 0; ; ) switch(_fun5988_ip) {
case 0:
                                    r5 = _closure4_slot2;
                                    r4 = r5.transitionToValues;
                                    r3 = _closure4_slot4;
                                    r2 = _closure4_slot0;
                                    if(r2) { _fun5988_ip = 38; continue _fun5988 }
case 24:
                                    r1 = _closure4_slot2;
                                    r1 = r1.props;
                                    r2 = r1.duration;
case 38:
                                    r7 = _closure4_slot1;
                                    r0 = _closure4_slot2;
                                    r0 = r0.props;
                                    r6 = r0.delay;
                                    r10 = r5;
                                    r9 = r3;
                                    r8 = r2;
                                    r0 = r10[r4](r9, r8, r7, r6, r5);
                                    r0 = undefined;
                                    return r0;
                                }
                            };
                            r1 = r3.bind(r4)(r2, r1);
                            return r0;
                        };
                        r4['value'] = r6;
                        r0[10] = r4;
                        r4 = {};
                        r6 = 'transitionTo';
                        r4['key'] = r6;
                        r6 = function(a0, a1, a2, a3) { // Original name: transitionTo, environment: r5
                            _fun5989: for(var _fun5989_ip = 0; ; ) switch(_fun5989_ip) {
case 0:
                                r6 = a1;
                                r5 = a2;
                                r4 = this;
                                var _closure4_slot0 = r6;
                                var _closure4_slot1 = r5;
                                r0 = a3;
                                var _closure4_slot2 = r0;
                                var _closure4_slot3 = r4;
                                r0 = r4.state;
                                r0 = r0.currentTransitionValues;
                                var _closure4_slot4 = r0;
                                r0 = _closure1_slot12;
                                r2 = r0.default;
                                r0 = undefined;
                                r1 = a0;
                                r9 = r2.bind(r0)(r1);
                                var _closure4_slot5 = r9;
                                r1 = {};
                                r2 = {};
                                r1['from'] = r2;
                                r2 = {};
                                r1['to'] = r2;
                                var _closure4_slot6 = r1;
                                r2 = global;
                                r8 = r2.Object;
                                r7 = r8.keys;
                                r8 = r7.bind(r8)(r9);
                                r7 = r8.forEach;
                                r3 = function(a0) { // Environment: r3
                                    _fun5990: for(var _fun5990_ip = 0; ; ) switch(_fun5990_ip) {
case 0:
                                        r2 = a0;
                                        r1 = _closure4_slot5;
                                        r1 = r1[r2];
                                        r6 = _closure1_slot16;
                                        r5 = r6.indexOf;
                                        r5 = r5.bind(r6)(r2);
                                        r7 = -1;
                                        r8 = r5 !== r7;
                                        if(r8) { _fun5990_ip = 64; continue _fun5990 }
case 46:
                                        r5 = global;
                                        r5 = r5.value;
                                        r6 = typeof r5;
                                        r5 = 'number';
                                        r8 = r6 !== r5;
case 64:
                                        r6 = _closure1_slot17;
                                        r5 = r6.indexOf;
                                        r6 = r5.bind(r6)(r2);
                                        r9 = _closure4_slot3;
                                        r5 = r9.state;
                                        r5 = r5.transitionStyle;
                                        r5 = r5[r2];
                                        r9 = r9.state;
                                        r9 = r9.transitionValues;
                                        r12 = r9[r2];
                                        if(r8) { _fun5990_ip = 183; continue _fun5990 }
case 115:
                                        if(!(r6 === r7)) { _fun5990_ip = 183; continue _fun5990 }
case 119:
                                        if(!r5) { _fun5990_ip = 183; continue _fun5990 }
case 122:
                                        if(!(r5 === r12)) { _fun5990_ip = 183; continue _fun5990 }
case 126:
                                        r11 = _closure1_slot27;
                                        r18 = _closure4_slot0;
                                        r17 = _closure4_slot1;
                                        r5 = _closure4_slot3;
                                        r5 = r5.props;
                                        r16 = r5.useNativeDriver;
                                        r15 = _closure4_slot2;
                                        r22 = undefined;
                                        r14 = function(a0) { // Environment: r4
                                            r0 = _closure4_slot3;
                                            r2 = r0.props;
                                            r1 = r2.onTransitionBegin;
                                            r0 = a0;
                                            r0 = r1.bind(r2)(r0);
                                            return r0;
                                        };
                                        r13 = function(a0) { // Environment: r4
                                            r0 = _closure4_slot3;
                                            r2 = r0.props;
                                            r1 = r2.onTransitionEnd;
                                            r0 = a0;
                                            r0 = r1.bind(r2)(r0);
                                            return r0;
                                        };
                                        r21 = r2;
                                        r20 = r12;
                                        r19 = r1;
                                        r4 = r22[r11](r21, r20, r19, r18, r17, r16, r15, r14, r13, r12);
                                        _fun5990_ip = 283; continue _fun5990;
case 183:
                                        r4 = _closure4_slot4;
                                        r6 = r4[r2];
                                        r7 = typeof r6;
                                        r5 = 'undefined';
                                        r4 = r6;
                                        if(!(r7 === r5)) { _fun5990_ip = 260; continue _fun5990 }
case 205:
                                        r5 = _closure4_slot3;
                                        r5 = r5.props;
                                        r5 = r5.style;
                                        r4 = r6;
                                        if(!r5) { _fun5990_ip = 260; continue _fun5990 }
case 225:
                                        r3 = _closure1_slot11;
                                        r6 = r3.default;
                                        r3 = _closure4_slot3;
                                        r3 = r3.props;
                                        r5 = r3.style;
                                        r3 = undefined;
                                        r3 = r6.bind(r3)(r2, r5);
                                        r4 = r3[r2];
case 260:
                                        r0 = _closure4_slot6;
                                        r3 = r0.from;
                                        r3[r2] = r4;
                                        r0 = r0.to;
                                        r0[r2] = r1;
case 283:
                                        r0 = undefined;
                                        return r0;
                                    }
                                };
                                r3 = r7.bind(r8)(r3);
                                r7 = r2.Object;
                                r3 = r7.keys;
                                r2 = r1.from;
                                r2 = r3.bind(r7)(r2);
                                r2 = r2.length;
                                if(!r2) { _fun5989_ip = 181; continue _fun5989 }
case 151:
                                r3 = r4.transition;
                                r13 = r1.from;
                                r12 = r1.to;
                                r14 = r4;
                                r11 = r6;
                                r10 = r5;
                                r1 = r14[r3](r13, r12, r11, r10, r9);
case 181:
                                return r0;
                            }
                        };
                        r4['value'] = r6;
                        r0[11] = r4;
                        r4 = {};
                        r6 = 'transitionToValues';
                        r4['key'] = r6;
                        r6 = function(a0, a1, a2, a3) { // Original name: transitionToValues, environment: r5
                            r3 = a0;
                            var _closure4_slot0 = r3;
                            r1 = a1;
                            var _closure4_slot1 = r1;
                            r1 = a2;
                            var _closure4_slot2 = r1;
                            r1 = a3;
                            var _closure4_slot3 = r1;
                            r1 = this;
                            var _closure4_slot4 = r1;
                            r1 = global;
                            r2 = r1.Object;
                            r1 = r2.keys;
                            r2 = r1.bind(r2)(r3);
                            r1 = r2.forEach;
                            r0 = function(a0) { // Environment: r0
                                r10 = a0;
                                r2 = _closure4_slot4;
                                r3 = r2.state;
                                r3 = r3.transitionValues;
                                r18 = r3[r10];
                                r3 = _closure4_slot0;
                                r17 = r3[r10];
                                r7 = _closure1_slot27;
                                r16 = _closure4_slot1;
                                r15 = _closure4_slot2;
                                r2 = r2.props;
                                r14 = r2.useNativeDriver;
                                r13 = _closure4_slot3;
                                r0 = undefined;
                                r12 = function(a0) { // Environment: r1
                                    r0 = _closure4_slot4;
                                    r2 = r0.props;
                                    r1 = r2.onTransitionBegin;
                                    r0 = a0;
                                    r0 = r1.bind(r2)(r0);
                                    return r0;
                                };
                                r11 = function(a0) { // Environment: r1
                                    r0 = _closure4_slot4;
                                    r2 = r0.props;
                                    r1 = r2.onTransitionEnd;
                                    r0 = a0;
                                    r0 = r1.bind(r2)(r0);
                                    return r0;
                                };
                                r20 = undefined;
                                r19 = r10;
                                r1 = r20[r7](r19, r18, r17, r16, r15, r14, r13, r12, r11, r10);
                                return r0;
                            };
                            r0 = r1.bind(r2)(r0);
                            r0 = undefined;
                            return r0;
                        };
                        r4['value'] = r6;
                        r0[12] = r4;
                        r4 = {};
                        r6 = 'render';
                        r4['key'] = r6;
                        r5 = function() { // Original name: render, environment: r5
                            _fun5997: for(var _fun5997_ip = 0; ; ) switch(_fun5997_ip) {
case 0:
                                r8 = this;
                                r0 = r8.props;
                                r10 = r0.style;
                                r1 = r0.animation;
                                r0 = r0.transition;
                                if(!r1) { _fun5997_ip = 33; continue _fun5997 }
case 27:
                                if(r0) { _fun5997_ip = 172; continue _fun5997 }
case 33:
                                r2 = _closure1_slot21;
                                r1 = r8.props;
                                r3 = undefined;
                                r0 = ['animation', 'duration', 'direction', 'delay', 'easing', 'iterationCount', 'iterationDelay', 'onAnimationBegin', 'onAnimationEnd', 'onTransitionBegin', 'onTransitionEnd', 'style', 'transition', 'useNativeDriver', 'isInteraction'];
                                r6 = r2.bind(r3)(r0, r1);
                                r0 = _closure1_slot15;
                                r2 = r0.jsx;
                                r1 = _closure2_slot0;
                                r0 = global;
                                r5 = r0.Object;
                                r4 = r5.assign;
                                r0 = {};
                                r7 = r8.handleRef;
                                r0['ref'] = r7;
                                r7 = new Array(3);
                                r7[0] = r10;
                                r10 = r8.state;
                                r10 = r10.animationStyle;
                                r7[1] = r10;
                                r9 = _closure1_slot10;
                                r9 = r9.default;
                                r8 = r8.state;
                                r8 = r8.transitionStyle;
                                r8 = r9.bind(r3)(r8);
                                r7[2] = r8;
                                r0['style'] = r7;
                                r0 = r4.bind(r5)(r0, r6);
                                r0 = r2.bind(r3)(r1, r0);
                                return r0;
case 172:
                                r0 = global;
                                r2 = r0.Error;
                                r0 = r2.prototype;
                                r1 = Object.create(r0, {constructor: {value: r2}});
                                r12 = 'You cannot combine animation and transition props';
                                r13 = r1;
                                r0 = new r13[r2](r12, r11);
                                r0 = r0 instanceof Object ? r0 : r1;
                                throw r0;
                            }
                        };
                        r4['value'] = r5;
                        r0[13] = r4;
                        r0 = r1.bind(r2)(r3, r0);
                        return r0;
                    };
                    r2 = undefined;
                    r0 = r0.bind(r2)(r1);
                    r5 = global;
                    r1 = r5.HermesInternal;
                    r7 = r1.concat;
                    r6 = 'withAnimatable(';
                    r1 = ')';
                    r1 = r7.bind(r6)(r8, r1);
                    r0['displayName'] = r1;
                    r1 = {};
                    r6 = _closure1_slot8;
                    r8 = r6.default;
                    r7 = r8.oneOfType;
                    r6 = _closure1_slot8;
                    r6 = r6.default;
                    r9 = r6.string;
                    r6 = new Array(2);
                    r6[0] = r9;
                    r9 = _closure1_slot8;
                    r9 = r9.default;
                    r9 = r9.object;
                    r6[1] = r9;
                    r6 = r7.bind(r8)(r6);
                    r1['animation'] = r6;
                    r6 = _closure1_slot8;
                    r6 = r6.default;
                    r6 = r6.number;
                    r1['duration'] = r6;
                    r6 = _closure1_slot8;
                    r8 = r6.default;
                    r7 = r8.oneOf;
                    r6 = ['normal', 'reverse', 'alternate', 'alternate-reverse'];
                    r6 = r7.bind(r8)(r6);
                    r1['direction'] = r6;
                    r6 = _closure1_slot8;
                    r6 = r6.default;
                    r6 = r6.number;
                    r1['delay'] = r6;
                    r6 = _closure1_slot8;
                    r7 = r6.default;
                    r6 = r7.oneOfType;
                    r8 = _closure1_slot8;
                    r9 = r8.default;
                    r8 = r9.oneOf;
                    r11 = r5.Object;
                    r10 = r11.keys;
                    r5 = _closure1_slot14;
                    r5 = r5.default;
                    r5 = r10.bind(r11)(r5);
                    r8 = r8.bind(r9)(r5);
                    r5 = new Array(2);
                    r5[0] = r8;
                    r8 = _closure1_slot8;
                    r8 = r8.default;
                    r8 = r8.func;
                    r5[1] = r8;
                    r5 = r6.bind(r7)(r5);
                    r1['easing'] = r5;
                    r5 = function(a0, a1) { // Original name: iterationCount, environment: r3
                        _fun5998: for(var _fun5998_ip = 0; ; ) switch(_fun5998_ip) {
case 0:
                            r1 = a0;
                            r0 = a1;
                            r1 = r1[r0];
                            r0 = 'infinite';
                            if(!(r1 !== r0)) { _fun5998_ip = 70; continue _fun5998 }
case 18:
                            r2 = typeof r1;
                            r0 = 'number';
                            if(!(r2 === r0)) { _fun5998_ip = 36; continue _fun5998 }
case 29:
                            r0 = 1;
                            if(!(!(r1 >= r0))) { _fun5998_ip = 70; continue _fun5998 }
case 36:
                            r0 = global;
                            r2 = r0.Error;
                            r0 = r2.prototype;
                            r1 = Object.create(r0, {constructor: {value: r2}});
                            r3 = 'iterationCount must be a positive number or "infinite"';
                            r4 = r1;
                            r0 = new r4[r2](r3, r2);
                            r0 = r0 instanceof Object ? r0 : r1;
                            return r0;
case 70:
                            r0 = null;
                            return r0;
                        }
                    };
                    r1['iterationCount'] = r5;
                    r5 = _closure1_slot8;
                    r5 = r5.default;
                    r5 = r5.number;
                    r1['iterationDelay'] = r5;
                    r5 = _closure1_slot8;
                    r5 = r5.default;
                    r5 = r5.func;
                    r1['onAnimationBegin'] = r5;
                    r5 = _closure1_slot8;
                    r5 = r5.default;
                    r5 = r5.func;
                    r1['onAnimationEnd'] = r5;
                    r5 = _closure1_slot8;
                    r5 = r5.default;
                    r5 = r5.func;
                    r1['onTransitionBegin'] = r5;
                    r5 = _closure1_slot8;
                    r5 = r5.default;
                    r5 = r5.func;
                    r1['onTransitionEnd'] = r5;
                    r5 = _closure1_slot8;
                    r7 = r5.default;
                    r6 = r7.oneOfType;
                    r5 = _closure1_slot8;
                    r5 = r5.default;
                    r8 = r5.number;
                    r5 = new Array(3);
                    r5[0] = r8;
                    r8 = _closure1_slot8;
                    r8 = r8.default;
                    r8 = r8.array;
                    r5[1] = r8;
                    r8 = _closure1_slot8;
                    r8 = r8.default;
                    r8 = r8.object;
                    r5[2] = r8;
                    r5 = r6.bind(r7)(r5);
                    r1['style'] = r5;
                    r5 = _closure1_slot8;
                    r7 = r5.default;
                    r6 = r7.oneOfType;
                    r5 = _closure1_slot8;
                    r5 = r5.default;
                    r8 = r5.string;
                    r5 = new Array(2);
                    r5[0] = r8;
                    r8 = _closure1_slot8;
                    r10 = r8.default;
                    r9 = r10.arrayOf;
                    r8 = _closure1_slot8;
                    r8 = r8.default;
                    r8 = r8.string;
                    r8 = r9.bind(r10)(r8);
                    r5[1] = r8;
                    r5 = r6.bind(r7)(r5);
                    r1['transition'] = r5;
                    r5 = _closure1_slot8;
                    r5 = r5.default;
                    r5 = r5.bool;
                    r1['useNativeDriver'] = r5;
                    r4 = _closure1_slot8;
                    r4 = r4.default;
                    r4 = r4.bool;
                    r1['isInteraction'] = r4;
                    r0['propTypes'] = r1;
                    r1 = {'animation': null, 'delay': 0, 'direction': 'normal', 'duration': null, 'easing': null, 'iterationCount': 1, 'iterationDelay': 0};
                    r1['animation'] = r2;
                    r1['duration'] = r2;
                    r1['easing'] = r2;
                    r4 = function() { // Original name: onAnimationBegin, environment: r3
                        r0 = undefined;
                        return r0;
                    };
                    r1['onAnimationBegin'] = r4;
                    r4 = function() { // Original name: onAnimationEnd, environment: r3
                        r0 = undefined;
                        return r0;
                    };
                    r1['onAnimationEnd'] = r4;
                    r4 = function() { // Original name: onTransitionBegin, environment: r3
                        r0 = undefined;
                        return r0;
                    };
                    r1['onTransitionBegin'] = r4;
                    r3 = function() { // Original name: onTransitionEnd, environment: r3
                        r0 = undefined;
                        return r0;
                    };
                    r1['onTransitionEnd'] = r3;
                    r1['style'] = r2;
                    r1['transition'] = r2;
                    r3 = false;
                    r1['useNativeDriver'] = r3;
                    r1['isInteraction'] = r2;
                    r0['defaultProps'] = r1;
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
            var _closure1_slot4 = r1;
            r1 = 4;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot5 = r1;
            r1 = 5;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot6 = r1;
            r1 = 6;
            r1 = r4[r1];
            r7 = r3.bind(r0)(r1);
            if(!r7) { _fun5944_ip = 299; continue _fun5944 }
case 285:
            r6 = r7.__esModule;
            r1 = r7;
            if(r6) { _fun5944_ip = 566; continue _fun5944 }
case 299:
            r17 = null;
            if(!(r17 !== r7)) { _fun5944_ip = 557; continue _fun5944 }
case 308:
            r8 = typeof r7;
            r6 = 'object';
            if(!(r6 !== r8)) { _fun5944_ip = 330; continue _fun5944 }
case 319:
            r6 = 'function';
            if(!(r6 === r8)) { _fun5944_ip = 557; continue _fun5944 }
case 330:
            r6 = _closure1_slot18;
            r8 = r6.bind(r0)(r0);
            if(!r8) { _fun5944_ip = 358; continue _fun5944 }
case 342:
            r6 = r8.has;
            r6 = r6.bind(r8)(r7);
            if(r6) { _fun5944_ip = 545; continue _fun5944 }
case 358:
            r6 = Object.create(r17);
            r9 = r18.Object;
            r16 = r9.defineProperty;
            if(!r16) { _fun5944_ip = 386; continue _fun5944 }
case 375:
            r9 = r18.Object;
            r16 = r9.getOwnPropertyDescriptor;
case 386:
            r14 = r7;
            r10 = 'default';
            r9 = undefined;
            for(r11 in r14)
case 403:
            {
case 412:
                r22 = r11;
                if(r10 === r22) { _fun5944_ip = 403; continue _fun5944 }
case 419:
                r19 = {};
                r20 = r19.hasOwnProperty;
                r19 = r20.call;
                r19 = r19.bind(r20)(r7, r22);
                if(!r19) { _fun5944_ip = 403; continue _fun5944 }
case 440:
                r19 = null;
                if(!r16) { _fun5944_ip = 462; continue _fun5944 }
case 445:
                r21 = r18.Object;
                r20 = r21.getOwnPropertyDescriptor;
                r19 = r20.bind(r21)(r7, r22);
case 462:
                if(!r19) { _fun5944_ip = 481; continue _fun5944 }
case 465:
                r20 = r19.get;
                if(r20) { _fun5944_ip = 494; continue _fun5944 }
case 473:
                r20 = r19.set;
                if(r20) { _fun5944_ip = 494; continue _fun5944 }
case 481:
                r20 = r7[r22];
                r6[r22] = r20;
                r9 = r19;
                _fun5944_ip = 403; continue _fun5944;
case 494:
                r21 = r18.Object;
                r20 = r21.defineProperty;
                r20 = r20.bind(r21)(r6, r22, r19);
                r9 = r19;
                _fun5944_ip = 403; continue _fun5944;
            }
case 517:
            r6['default'] = r7;
            r1 = r6;
            if(!r8) { _fun5944_ip = 566; continue _fun5944 }
case 529:
            r9 = r8.set;
            r9 = r9.bind(r8)(r7, r6);
            r1 = r6;
            _fun5944_ip = 566; continue _fun5944;
case 545:
            r6 = r8.get;
            r1 = r6.bind(r8)(r7);
            _fun5944_ip = 566; continue _fun5944;
case 557:
            r6 = {};
            r6['default'] = r7;
            r1 = r6;
case 566:
            var _closure1_slot7 = r1;
            r1 = 7;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot8 = r1;
            r1 = 8;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            var _closure1_slot9 = r1;
            r1 = 9;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot10 = r1;
            r1 = 10;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot11 = r1;
            r1 = 11;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot12 = r1;
            r1 = 12;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot13 = r1;
            r1 = 13;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot14 = r1;
            r1 = 14;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            var _closure1_slot15 = r1;
            r1 = ['rotate', 'rotateX', 'rotateY', 'rotateZ', 'skewX', 'skewY', 'transformMatrix', 'backgroundColor', 'borderColor', 'borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor', 'shadowColor', 'color', 'textDecorationColor', 'tintColor'];
            var _closure1_slot16 = r1;
            r1 = ['width', 'height'];
            var _closure1_slot17 = r1;
            return r0;
        }
    };
    r6 = 538;
    r5 = [1, 12, 13, 23, 25, 28, 119, 508, 2, 539, 540, 537, 536, 542, 251, 535];
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
        r1 = function(a0) { // Original name: wrapStyleTransforms, environment: r2
            r4 = a0;
            var _closure2_slot0 = r4;
            r0 = {};
            var _closure2_slot1 = r0;
            r2 = global;
            r3 = r2.Object;
            r2 = r3.keys;
            r3 = r2.bind(r3)(r4);
            r2 = r3.forEach;
            r1 = function(a0) { // Environment: r1
                _fun6005: for(var _fun6005_ip = 0; ; ) switch(_fun6005_ip) {
case 0:
                    r6 = a0;
                    r1 = _closure1_slot1;
                    r0 = r1.indexOf;
                    r1 = r0.bind(r1)(r6);
                    r0 = -1;
                    if(!(r1 === r0)) { _fun6005_ip = 51; continue _fun6005 }
case 30:
                    r1 = _closure2_slot1;
                    r0 = _closure2_slot0;
                    r0 = r0[r6];
                    r1[r6] = r0;
                    _fun6005_ip = 127; continue _fun6005;
case 51:
                    r1 = _closure2_slot1;
                    r1 = r1.transform;
                    if(r1) { _fun6005_ip = 80; continue _fun6005 }
case 66:
                    r2 = _closure2_slot1;
                    r1 = new Array(0);
                    r2['transform'] = r1;
case 80:
                    r1 = _closure2_slot1;
                    r2 = r1.transform;
                    r1 = r2.push;
                    r3 = _closure1_slot0;
                    r5 = r3.default;
                    r0 = _closure2_slot0;
                    r4 = r0[r6];
                    r3 = undefined;
                    r0 = {};
                    r0 = r5.bind(r3)(r0, r6, r4);
                    r0 = r1.bind(r2)(r0);
case 127:
                    r0 = undefined;
                    return r0;
                }
            };
            r1 = r2.bind(r3)(r1);
            return r0;
        };
        r6['default'] = r1;
        r1 = 1;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        var _closure1_slot0 = r1;
        r1 = ['perspective', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'skewX', 'skewY', 'translateX', 'translateY'];
        var _closure1_slot1 = r1;
        return r0;
    };
    r6 = 539;
    r5 = [1, 99];
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
        r1 = function(a0, a1) { // Original name: getStyleValues, environment: r2
            _fun6007: for(var _fun6007_ip = 0; ; ) switch(_fun6007_ip) {
case 0:
                r4 = a0;
                r0 = {};
                var _closure2_slot0 = r0;
                r2 = _closure1_slot0;
                r5 = r2.default;
                r3 = undefined;
                r2 = a1;
                r2 = r5.bind(r3)(r2);
                var _closure2_slot1 = r2;
                r5 = typeof r4;
                r2 = 'string';
                r3 = r4;
                if(!(r5 === r2)) { _fun6007_ip = 62; continue _fun6007 }
case 51:
                r2 = new Array(1);
                r2[0] = r4;
                r3 = r2;
case 62:
                r2 = r3.forEach;
                r1 = function(a0) { // Environment: r1
                    _fun6008: for(var _fun6008_ip = 0; ; ) switch(_fun6008_ip) {
case 0:
                        r2 = a0;
                        r1 = _closure2_slot0;
                        r0 = _closure2_slot1;
                        r0 = r2 in r0;
                        if(r0) { _fun6008_ip = 47; continue _fun6008 }
case 21:
                        r0 = _closure1_slot1;
                        r5 = r0.default;
                        r4 = _closure2_slot1;
                        r0 = undefined;
                        r0 = r5.bind(r0)(r2, r4);
                        _fun6008_ip = 55; continue _fun6008;
case 47:
                        r3 = _closure2_slot1;
                        r0 = r3[r2];
case 55:
                        r1[r2] = r0;
                        r0 = undefined;
                        return r0;
                    }
                };
                r1 = r2.bind(r3)(r1);
                return r0;
            }
        };
        r6['default'] = r1;
        r1 = 1;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        var _closure1_slot0 = r1;
        r1 = 2;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        var _closure1_slot1 = r1;
        return r0;
    };
    r6 = 540;
    r5 = [1, 537, 541];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r3 = a5;
        r0 = global;
        r6 = r0.Object;
        r5 = r6.defineProperty;
        r4 = {};
        r2 = true;
        r4['value'] = r2;
        r2 = '__esModule';
        r2 = r5.bind(r6)(r3, r2, r4);
        r2 = function(a0, a1) { // Original name: getDefaultStyleValue, environment: r1
            _fun6010: for(var _fun6010_ip = 0; ; ) switch(_fun6010_ip) {
case 0:
                r6 = a0;
                r1 = a1;
                r0 = 'backgroundColor';
                if(!(r6 !== r0)) { _fun6010_ip = 365; continue _fun6010 }
case 17:
                r0 = 'color';
                if(!(r6 !== r0)) { _fun6010_ip = 359; continue _fun6010 }
case 28:
                r2 = r6.indexOf;
                r0 = 'Color';
                r2 = r2.bind(r6)(r0);
                r0 = -1;
                if(!(r2 === r0)) { _fun6010_ip = 359; continue _fun6010 }
case 55:
                r2 = r6.indexOf;
                r0 = 'rotate';
                r0 = r2.bind(r6)(r0);
                r2 = 0;
                if(!(r0 !== r2)) { _fun6010_ip = 353; continue _fun6010 }
case 78:
                r3 = r6.indexOf;
                r0 = 'skew';
                r0 = r3.bind(r6)(r0);
                if(!(r0 !== r2)) { _fun6010_ip = 353; continue _fun6010 }
case 99:
                r0 = 'opacity';
                if(!(r6 !== r0)) { _fun6010_ip = 348; continue _fun6010 }
case 110:
                r3 = r6.indexOf;
                r0 = 'scale';
                r0 = r3.bind(r6)(r0);
                if(!(r0 !== r2)) { _fun6010_ip = 348; continue _fun6010 }
case 131:
                r0 = 'fontSize';
                if(!(r6 !== r0)) { _fun6010_ip = 343; continue _fun6010 }
case 142:
                r3 = r6.indexOf;
                r0 = 'margin';
                r0 = r3.bind(r6)(r0);
                if(!(r0 !== r2)) { _fun6010_ip = 181; continue _fun6010 }
case 160:
                r3 = r6.indexOf;
                r0 = 'padding';
                r0 = r3.bind(r6)(r0);
                if(!(r0 === r2)) { _fun6010_ip = 335; continue _fun6010 }
case 181:
                r3 = _closure1_slot1;
                r3 = r3.length;
                r3 = r2 < r3;
                r5 = 0;
                if(!r3) { _fun6010_ip = 335; continue _fun6010 }
case 205:
                r3 = _closure1_slot1;
                r3 = r3[r5];
                r7 = r6.substr;
                r4 = r3.length;
                r4 = -r4;
                r7 = r7.bind(r6)(r4);
                r4 = r5;
                if(!(r7 !== r3)) { _fun6010_ip = 257; continue _fun6010 }
case 239:
                r5 = r4 + 1;
                r4 = _closure1_slot1;
                r4 = r4.length;
                if(r5 < r4) { _fun6010_ip = 205; continue _fun6010 }
case 255:
                _fun6010_ip = 335; continue _fun6010;
case 257:
                r5 = r6.substr;
                r7 = r6.length;
                r4 = r3.length;
                r4 = r7 - r4;
                r6 = r5.bind(r6)(r2, r4);
                r0 = _closure1_slot0;
                r5 = r0[r3];
                r0 = r5.length;
                r0 = r2 < r0;
                r4 = 0;
                if(!r0) { _fun6010_ip = 335; continue _fun6010 }
case 305:
                r0 = r5[r4];
                r0 = r6 + r0;
                r7 = r0 in r1;
                r3 = r4;
                if(r7) { _fun6010_ip = 337; continue _fun6010 }
case 323:
                r4 = r3 + 1;
                r3 = r5.length;
                if(r4 < r3) { _fun6010_ip = 305; continue _fun6010 }
case 335:
                return r2;
case 337:
                r0 = r1[r0];
                return r0;
case 343:
                r0 = 14;
                return r0;
case 348:
                r0 = 1;
                return r0;
case 353:
                r0 = '0deg';
                return r0;
case 359:
                r0 = 'rgba(0,0,0,1)';
                return r0;
case 365:
                r0 = 'rgba(0,0,0,0)';
                return r0;
            }
        };
        r3['default'] = r2;
        r3 = {};
        r2 = ['Vertical', ''];
        r3['Top'] = r2;
        r2 = ['Vertical', ''];
        r3['Bottom'] = r2;
        r2 = [''];
        r3['Vertical'] = r2;
        r2 = ['Horizontal', ''];
        r3['Left'] = r2;
        r2 = ['Horizontal', ''];
        r3['Right'] = r2;
        r2 = [''];
        r3['Horizontal'] = r2;
        var _closure1_slot0 = r3;
        r2 = r0.Object;
        r0 = r2.keys;
        r0 = r0.bind(r2)(r3);
        var _closure1_slot1 = r0;
        r0 = undefined;
        return r0;
    };
    r6 = 541;
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
        r1 = a6;
        r18 = 0;
        r3 = r1[r18];
        r1 = a1;
        r3 = r1.bind(r0)(r3);
        r1 = {};
        r4 = r3.Easing;
        r4 = r4.linear;
        r1['linear'] = r4;
        r6 = r3.Easing;
        r5 = r6.bezier;
        r20 = 0.25;
        r23 = 0.1;
        r17 = 1;
        r25 = r6;
        r24 = r20;
        r22 = r20;
        r21 = r17;
        r4 = r25[r5](r24, r23, r22, r21, r20);
        r1['ease'] = r4;
        r5 = r3.Easing;
        r4 = r5.bezier;
        r7 = 0.42;
        r25 = r5;
        r24 = r7;
        r23 = 0;
        r22 = r17;
        r4 = r25[r4](r24, r23, r22, r21, r20);
        r1['ease-in'] = r4;
        r5 = r3.Easing;
        r4 = r5.bezier;
        r6 = 0.58;
        r25 = r5;
        r24 = 0;
        r22 = r6;
        r4 = r25[r4](r24, r23, r22, r21, r20);
        r1['ease-out'] = r4;
        r5 = r3.Easing;
        r4 = r5.bezier;
        r25 = r5;
        r24 = r7;
        r4 = r25[r4](r24, r23, r22, r21, r20);
        r1['ease-in-out'] = r4;
        r8 = r3.Easing;
        r7 = r8.bezier;
        r14 = 0.55;
        r23 = 0.055;
        r22 = 0.675;
        r6 = 0.19;
        r25 = r8;
        r24 = r14;
        r21 = r6;
        r4 = r25[r7](r24, r23, r22, r21, r20);
        r1['ease-in-cubic'] = r4;
        r9 = r3.Easing;
        r7 = r9.bezier;
        r24 = 0.215;
        r23 = 0.61;
        r8 = 0.355;
        r25 = r9;
        r22 = r8;
        r21 = r17;
        r4 = r25[r7](r24, r23, r22, r21, r20);
        r1['ease-out-cubic'] = r4;
        r7 = r3.Easing;
        r5 = r7.bezier;
        r24 = 0.645;
        r12 = 0.045;
        r25 = r7;
        r23 = r12;
        r4 = r25[r5](r24, r23, r22, r21, r20);
        r1['ease-in-out-cubic'] = r4;
        r9 = r3.Easing;
        r8 = r9.bezier;
        r11 = 0.6;
        r23 = 0.04;
        r22 = 0.98;
        r21 = 0.335;
        r25 = r9;
        r24 = r11;
        r4 = r25[r8](r24, r23, r22, r21, r20);
        r1['ease-in-circ'] = r4;
        r8 = r3.Easing;
        r7 = r8.bezier;
        r24 = 0.075;
        r23 = 0.82;
        r10 = 0.165;
        r25 = r8;
        r22 = r10;
        r21 = r17;
        r4 = r25[r7](r24, r23, r22, r21, r20);
        r1['ease-out-circ'] = r4;
        r9 = r3.Easing;
        r8 = r9.bezier;
        r24 = 0.785;
        r23 = 0.135;
        r22 = 0.15;
        r15 = 0.86;
        r25 = r9;
        r21 = r15;
        r4 = r25[r8](r24, r23, r22, r21, r20);
        r1['ease-in-out-circ'] = r4;
        r9 = r3.Easing;
        r8 = r9.bezier;
        r13 = 0.95;
        r7 = 0.05;
        r22 = 0.795;
        r21 = 0.035;
        r25 = r9;
        r24 = r13;
        r23 = r7;
        r4 = r25[r8](r24, r23, r22, r21, r20);
        r1['ease-in-expo'] = r4;
        r5 = r3.Easing;
        r4 = r5.bezier;
        r19 = 0.22;
        r25 = r5;
        r24 = r6;
        r23 = r17;
        r22 = r19;
        r21 = r17;
        r4 = r25[r4](r24, r23, r22, r21, r20);
        r1['ease-out-expo'] = r4;
        r5 = r3.Easing;
        r4 = r5.bezier;
        r25 = r5;
        r24 = r17;
        r23 = 0;
        r22 = 0;
        r4 = r25[r4](r24, r23, r22, r21, r20);
        r1['ease-in-out-expo'] = r4;
        r9 = r3.Easing;
        r6 = r9.bezier;
        r23 = 0.085;
        r8 = 0.68;
        r21 = 0.53;
        r25 = r9;
        r24 = r14;
        r22 = r8;
        r4 = r25[r6](r24, r23, r22, r21, r20);
        r1['ease-in-quad'] = r4;
        r16 = r3.Easing;
        r9 = r16.bezier;
        r23 = 0.46;
        r22 = 0.45;
        r21 = 0.94;
        r25 = r16;
        r24 = r20;
        r4 = r25[r9](r24, r23, r22, r21, r20);
        r1['ease-out-quad'] = r4;
        r20 = r3.Easing;
        r9 = r20.bezier;
        r24 = 0.455;
        r16 = 0.03;
        r22 = 0.515;
        r21 = 0.955;
        r25 = r20;
        r23 = r16;
        r4 = r25[r9](r24, r23, r22, r21, r20);
        r1['ease-in-out-quad'] = r4;
        r9 = r3.Easing;
        r6 = r9.bezier;
        r24 = 0.895;
        r22 = 0.685;
        r25 = r9;
        r21 = r19;
        r4 = r25[r6](r24, r23, r22, r21, r20);
        r1['ease-in-quart'] = r4;
        r9 = r3.Easing;
        r6 = r9.bezier;
        r23 = 0.84;
        r22 = 0.44;
        r25 = r9;
        r24 = r10;
        r21 = r17;
        r4 = r25[r6](r24, r23, r22, r21, r20);
        r1['ease-out-quart'] = r4;
        r6 = r3.Easing;
        r5 = r6.bezier;
        r24 = 0.77;
        r10 = 0.175;
        r25 = r6;
        r23 = 0;
        r22 = r10;
        r4 = r25[r5](r24, r23, r22, r21, r20);
        r1['ease-in-out-quart'] = r4;
        r16 = r3.Easing;
        r9 = r16.bezier;
        r24 = 0.755;
        r22 = 0.855;
        r21 = 0.06;
        r25 = r16;
        r23 = r7;
        r4 = r25[r9](r24, r23, r22, r21, r20);
        r1['ease-in-quint'] = r4;
        r6 = r3.Easing;
        r5 = r6.bezier;
        r24 = 0.23;
        r9 = 0.32;
        r25 = r6;
        r23 = r17;
        r22 = r9;
        r21 = r17;
        r4 = r25[r5](r24, r23, r22, r21, r20);
        r1['ease-out-quint'] = r4;
        r6 = r3.Easing;
        r5 = r6.bezier;
        r22 = 0.07;
        r25 = r6;
        r24 = r15;
        r23 = 0;
        r4 = r25[r5](r24, r23, r22, r21, r20);
        r1['ease-in-out-quint'] = r4;
        r16 = r3.Easing;
        r15 = r16.bezier;
        r24 = 0.47;
        r22 = 0.745;
        r21 = 0.715;
        r25 = r16;
        r4 = r25[r15](r24, r23, r22, r21, r20);
        r1['ease-in-sine'] = r4;
        r16 = r3.Easing;
        r15 = r16.bezier;
        r24 = 0.39;
        r23 = 0.575;
        r22 = 0.565;
        r25 = r16;
        r21 = r17;
        r4 = r25[r15](r24, r23, r22, r21, r20);
        r1['ease-out-sine'] = r4;
        r6 = r3.Easing;
        r5 = r6.bezier;
        r24 = 0.445;
        r25 = r6;
        r23 = r7;
        r22 = r14;
        r21 = r13;
        r4 = r25[r5](r24, r23, r22, r21, r20);
        r1['ease-in-out-sine'] = r4;
        r7 = r3.Easing;
        r6 = r7.bezier;
        r23 = -0.28;
        r22 = 0.735;
        r25 = r7;
        r24 = r11;
        r21 = r12;
        r4 = r25[r6](r24, r23, r22, r21, r20);
        r1['ease-in-back'] = r4;
        r7 = r3.Easing;
        r6 = r7.bezier;
        r23 = 0.885;
        r21 = 1.275;
        r25 = r7;
        r24 = r10;
        r22 = r9;
        r4 = r25[r6](r24, r23, r22, r21, r20);
        r1['ease-out-back'] = r4;
        r7 = r3.Easing;
        r6 = r7.bezier;
        r23 = -0.55;
        r22 = 0.265;
        r21 = 1.55;
        r25 = r7;
        r24 = r8;
        r3 = r25[r6](r24, r23, r22, r21, r20);
        r1['ease-in-out-back'] = r3;
        r2['default'] = r1;
        return r0;
    };
    r6 = 542;
    r5 = [2];
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
            _fun6013: for(var _fun6013_ip = 0; ; ) switch(_fun6013_ip) {
case 0:
                r5 = a0;
                var _closure2_slot0 = r5;
                r0 = 'default';
                if(!(r5 !== r0)) { _fun6013_ip = 123; continue _fun6013 }
case 17:
                r0 = '__esModule';
                if(!(r5 !== r0)) { _fun6013_ip = 123; continue _fun6013 }
case 25:
                r0 = _closure1_slot1;
                r0 = r5 in r0;
                if(!r0) { _fun6013_ip = 76; continue _fun6013 }
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
                if(!(r3 !== r2)) { _fun6013_ip = 121; continue _fun6013 }
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
            _fun6015: for(var _fun6015_ip = 0; ; ) switch(_fun6015_ip) {
case 0:
                r5 = a0;
                var _closure2_slot0 = r5;
                r0 = 'default';
                if(!(r5 !== r0)) { _fun6015_ip = 124; continue _fun6015 }
case 17:
                r0 = '__esModule';
                if(!(r5 !== r0)) { _fun6015_ip = 124; continue _fun6015 }
case 25:
                r0 = _closure1_slot1;
                r0 = r5 in r0;
                if(!r0) { _fun6015_ip = 77; continue _fun6015 }
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
                if(!(r3 !== r2)) { _fun6015_ip = 122; continue _fun6015 }
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
        r7 = r2.Object;
        r4 = r7.keys;
        r3 = 2;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r7 = r4.bind(r7)(r3);
        r4 = r7.forEach;
        r3 = function(a0) { // Environment: r1
            _fun6017: for(var _fun6017_ip = 0; ; ) switch(_fun6017_ip) {
case 0:
                r5 = a0;
                var _closure2_slot0 = r5;
                r0 = 'default';
                if(!(r5 !== r0)) { _fun6017_ip = 124; continue _fun6017 }
case 17:
                r0 = '__esModule';
                if(!(r5 !== r0)) { _fun6017_ip = 124; continue _fun6017 }
case 25:
                r0 = _closure1_slot1;
                r0 = r5 in r0;
                if(!r0) { _fun6017_ip = 77; continue _fun6017 }
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
                if(!(r3 !== r2)) { _fun6017_ip = 122; continue _fun6017 }
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
        r3 = r4.bind(r7)(r3);
        r7 = r2.Object;
        r4 = r7.keys;
        r3 = 3;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r7 = r4.bind(r7)(r3);
        r4 = r7.forEach;
        r3 = function(a0) { // Environment: r1
            _fun6019: for(var _fun6019_ip = 0; ; ) switch(_fun6019_ip) {
case 0:
                r5 = a0;
                var _closure2_slot0 = r5;
                r0 = 'default';
                if(!(r5 !== r0)) { _fun6019_ip = 124; continue _fun6019 }
case 17:
                r0 = '__esModule';
                if(!(r5 !== r0)) { _fun6019_ip = 124; continue _fun6019 }
case 25:
                r0 = _closure1_slot1;
                r0 = r5 in r0;
                if(!r0) { _fun6019_ip = 77; continue _fun6019 }
case 39:
                r0 = _closure1_slot1;
                r3 = r0[r5];
                r4 = _closure1_slot0;
                r2 = _closure1_slot2;
                r0 = 3;
                r2 = r2[r0];
                r0 = undefined;
                r2 = r4.bind(r0)(r2);
                r2 = r2[r5];
                if(!(r3 !== r2)) { _fun6019_ip = 122; continue _fun6019 }
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
case 122:
                return r0;
case 124:
                r0 = undefined;
                return r0;
            }
        };
        r3 = r4.bind(r7)(r3);
        r7 = r2.Object;
        r4 = r7.keys;
        r3 = 4;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r7 = r4.bind(r7)(r3);
        r4 = r7.forEach;
        r3 = function(a0) { // Environment: r1
            _fun6021: for(var _fun6021_ip = 0; ; ) switch(_fun6021_ip) {
case 0:
                r5 = a0;
                var _closure2_slot0 = r5;
                r0 = 'default';
                if(!(r5 !== r0)) { _fun6021_ip = 124; continue _fun6021 }
case 17:
                r0 = '__esModule';
                if(!(r5 !== r0)) { _fun6021_ip = 124; continue _fun6021 }
case 25:
                r0 = _closure1_slot1;
                r0 = r5 in r0;
                if(!r0) { _fun6021_ip = 77; continue _fun6021 }
case 39:
                r0 = _closure1_slot1;
                r3 = r0[r5];
                r4 = _closure1_slot0;
                r2 = _closure1_slot2;
                r0 = 4;
                r2 = r2[r0];
                r0 = undefined;
                r2 = r4.bind(r0)(r2);
                r2 = r2[r5];
                if(!(r3 !== r2)) { _fun6021_ip = 122; continue _fun6021 }
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
                    r0 = 4;
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
        r7 = r2.Object;
        r4 = r7.keys;
        r3 = 5;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r7 = r4.bind(r7)(r3);
        r4 = r7.forEach;
        r3 = function(a0) { // Environment: r1
            _fun6023: for(var _fun6023_ip = 0; ; ) switch(_fun6023_ip) {
case 0:
                r5 = a0;
                var _closure2_slot0 = r5;
                r0 = 'default';
                if(!(r5 !== r0)) { _fun6023_ip = 124; continue _fun6023 }
case 17:
                r0 = '__esModule';
                if(!(r5 !== r0)) { _fun6023_ip = 124; continue _fun6023 }
case 25:
                r0 = _closure1_slot1;
                r0 = r5 in r0;
                if(!r0) { _fun6023_ip = 77; continue _fun6023 }
case 39:
                r0 = _closure1_slot1;
                r3 = r0[r5];
                r4 = _closure1_slot0;
                r2 = _closure1_slot2;
                r0 = 5;
                r2 = r2[r0];
                r0 = undefined;
                r2 = r4.bind(r0)(r2);
                r2 = r2[r5];
                if(!(r3 !== r2)) { _fun6023_ip = 122; continue _fun6023 }
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
                    r0 = 5;
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
        r7 = r2.Object;
        r4 = r7.keys;
        r3 = 6;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r7 = r4.bind(r7)(r3);
        r4 = r7.forEach;
        r3 = function(a0) { // Environment: r1
            _fun6025: for(var _fun6025_ip = 0; ; ) switch(_fun6025_ip) {
case 0:
                r5 = a0;
                var _closure2_slot0 = r5;
                r0 = 'default';
                if(!(r5 !== r0)) { _fun6025_ip = 124; continue _fun6025 }
case 17:
                r0 = '__esModule';
                if(!(r5 !== r0)) { _fun6025_ip = 124; continue _fun6025 }
case 25:
                r0 = _closure1_slot1;
                r0 = r5 in r0;
                if(!r0) { _fun6025_ip = 77; continue _fun6025 }
case 39:
                r0 = _closure1_slot1;
                r3 = r0[r5];
                r4 = _closure1_slot0;
                r2 = _closure1_slot2;
                r0 = 6;
                r2 = r2[r0];
                r0 = undefined;
                r2 = r4.bind(r0)(r2);
                r2 = r2[r5];
                if(!(r3 !== r2)) { _fun6025_ip = 122; continue _fun6025 }
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
                    r0 = 6;
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
        r7 = r2.Object;
        r4 = r7.keys;
        r3 = 7;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r7 = r4.bind(r7)(r3);
        r4 = r7.forEach;
        r3 = function(a0) { // Environment: r1
            _fun6027: for(var _fun6027_ip = 0; ; ) switch(_fun6027_ip) {
case 0:
                r5 = a0;
                var _closure2_slot0 = r5;
                r0 = 'default';
                if(!(r5 !== r0)) { _fun6027_ip = 124; continue _fun6027 }
case 17:
                r0 = '__esModule';
                if(!(r5 !== r0)) { _fun6027_ip = 124; continue _fun6027 }
case 25:
                r0 = _closure1_slot1;
                r0 = r5 in r0;
                if(!r0) { _fun6027_ip = 77; continue _fun6027 }
case 39:
                r0 = _closure1_slot1;
                r3 = r0[r5];
                r4 = _closure1_slot0;
                r2 = _closure1_slot2;
                r0 = 7;
                r2 = r2[r0];
                r0 = undefined;
                r2 = r4.bind(r0)(r2);
                r2 = r2[r5];
                if(!(r3 !== r2)) { _fun6027_ip = 122; continue _fun6027 }
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
                    r0 = 7;
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
        r7 = r2.Object;
        r4 = r7.keys;
        r3 = 8;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r7 = r4.bind(r7)(r3);
        r4 = r7.forEach;
        r3 = function(a0) { // Environment: r1
            _fun6029: for(var _fun6029_ip = 0; ; ) switch(_fun6029_ip) {
case 0:
                r5 = a0;
                var _closure2_slot0 = r5;
                r0 = 'default';
                if(!(r5 !== r0)) { _fun6029_ip = 124; continue _fun6029 }
case 17:
                r0 = '__esModule';
                if(!(r5 !== r0)) { _fun6029_ip = 124; continue _fun6029 }
case 25:
                r0 = _closure1_slot1;
                r0 = r5 in r0;
                if(!r0) { _fun6029_ip = 77; continue _fun6029 }
case 39:
                r0 = _closure1_slot1;
                r3 = r0[r5];
                r4 = _closure1_slot0;
                r2 = _closure1_slot2;
                r0 = 8;
                r2 = r2[r0];
                r0 = undefined;
                r2 = r4.bind(r0)(r2);
                r2 = r2[r5];
                if(!(r3 !== r2)) { _fun6029_ip = 122; continue _fun6029 }
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
                    r0 = 8;
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
        r7 = r2.Object;
        r4 = r7.keys;
        r3 = 9;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r7 = r4.bind(r7)(r3);
        r4 = r7.forEach;
        r3 = function(a0) { // Environment: r1
            _fun6031: for(var _fun6031_ip = 0; ; ) switch(_fun6031_ip) {
case 0:
                r5 = a0;
                var _closure2_slot0 = r5;
                r0 = 'default';
                if(!(r5 !== r0)) { _fun6031_ip = 124; continue _fun6031 }
case 17:
                r0 = '__esModule';
                if(!(r5 !== r0)) { _fun6031_ip = 124; continue _fun6031 }
case 25:
                r0 = _closure1_slot1;
                r0 = r5 in r0;
                if(!r0) { _fun6031_ip = 77; continue _fun6031 }
case 39:
                r0 = _closure1_slot1;
                r3 = r0[r5];
                r4 = _closure1_slot0;
                r2 = _closure1_slot2;
                r0 = 9;
                r2 = r2[r0];
                r0 = undefined;
                r2 = r4.bind(r0)(r2);
                r2 = r2[r5];
                if(!(r3 !== r2)) { _fun6031_ip = 122; continue _fun6031 }
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
                    r0 = 9;
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
        r2 = 10;
        r2 = r6[r2];
        r2 = r5.bind(r0)(r2);
        r3 = r3.bind(r4)(r2);
        r2 = r3.forEach;
        r1 = function(a0) { // Environment: r1
            _fun6033: for(var _fun6033_ip = 0; ; ) switch(_fun6033_ip) {
case 0:
                r5 = a0;
                var _closure2_slot0 = r5;
                r0 = 'default';
                if(!(r5 !== r0)) { _fun6033_ip = 124; continue _fun6033 }
case 17:
                r0 = '__esModule';
                if(!(r5 !== r0)) { _fun6033_ip = 124; continue _fun6033 }
case 25:
                r0 = _closure1_slot1;
                r0 = r5 in r0;
                if(!r0) { _fun6033_ip = 77; continue _fun6033 }
case 39:
                r0 = _closure1_slot1;
                r3 = r0[r5];
                r4 = _closure1_slot0;
                r2 = _closure1_slot2;
                r0 = 10;
                r2 = r2[r0];
                r0 = undefined;
                r2 = r4.bind(r0)(r2);
                r2 = r2[r5];
                if(!(r3 !== r2)) { _fun6033_ip = 122; continue _fun6033 }
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
                    r0 = 10;
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
    r6 = 543;
    r5 = [544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554];
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
        r2['bounce'] = r0;
        r2['flash'] = r0;
        r2['jello'] = r0;
        r2['pulse'] = r0;
        r2['rotate'] = r0;
        r2['rubberBand'] = r0;
        r2['shake'] = r0;
        r2['swing'] = r0;
        r2['tada'] = r0;
        r2['wobble'] = r0;
        r1 = {};
        r3 = {};
        r5 = 0;
        r3['translateY'] = r5;
        r1[0] = r3;
        r3 = {};
        r3['translateY'] = r5;
        r1['0.2'] = r3;
        r3 = {};
        r4 = -30;
        r3['translateY'] = r4;
        r1['0.4'] = r3;
        r3 = {};
        r3['translateY'] = r4;
        r1['0.43'] = r3;
        r3 = {};
        r3['translateY'] = r5;
        r1['0.53'] = r3;
        r3 = {};
        r4 = -15;
        r3['translateY'] = r4;
        r1['0.7'] = r3;
        r3 = {};
        r3['translateY'] = r5;
        r1['0.8'] = r3;
        r3 = {};
        r4 = -4;
        r3['translateY'] = r4;
        r1['0.9'] = r3;
        r3 = {};
        r3['translateY'] = r5;
        r1[1] = r3;
        r2['bounce'] = r1;
        r1 = {};
        r3 = {};
        r6 = 1;
        r3['opacity'] = r6;
        r1[0] = r3;
        r3 = {};
        r3['opacity'] = r5;
        r1['0.25'] = r3;
        r3 = {};
        r3['opacity'] = r6;
        r1['0.5'] = r3;
        r3 = {};
        r3['opacity'] = r5;
        r1['0.75'] = r3;
        r3 = {};
        r3['opacity'] = r6;
        r1[1] = r3;
        r2['flash'] = r1;
        r1 = {};
        r4 = '0deg';
        r3 = {'skewX': '0deg', 'skewY': '0deg'};
        r1[0] = r3;
        r3 = {'skewX': '0deg', 'skewY': '0deg'};
        r1['0.111'] = r3;
        r3 = {'skewX': '-12.5deg', 'skewY': '-12.5deg'};
        r1['0.222'] = r3;
        r3 = {'skewX': '6.25deg', 'skewY': '6.25deg'};
        r1['0.333'] = r3;
        r3 = {'skewX': '-3.125deg', 'skewY': '-3.125deg'};
        r1['0.444'] = r3;
        r3 = {'skewX': '1.5625deg', 'skewY': '1.5625deg'};
        r1['0.555'] = r3;
        r3 = {'skewX': '-0.78125deg', 'skewY': '-0.78125deg'};
        r1['0.666'] = r3;
        r3 = {'skewX': '0.390625deg', 'skewY': '0.390625deg'};
        r1['0.777'] = r3;
        r3 = {'skewX': '-0.1953125deg', 'skewY': '-0.1953125deg'};
        r1['0.888'] = r3;
        r3 = {'skewX': '0deg', 'skewY': '0deg'};
        r1[1] = r3;
        r2['jello'] = r1;
        r1 = {};
        r3 = {};
        r3['scale'] = r6;
        r1[0] = r3;
        r3 = {};
        r7 = 1.05;
        r3['scale'] = r7;
        r1['0.5'] = r3;
        r3 = {};
        r3['scale'] = r6;
        r1[1] = r3;
        r2['pulse'] = r1;
        r1 = {};
        r3 = {};
        r3['rotate'] = r4;
        r1[0] = r3;
        r3 = {};
        r6 = '90deg';
        r3['rotate'] = r6;
        r1['0.25'] = r3;
        r3 = {};
        r6 = '180deg';
        r3['rotate'] = r6;
        r1['0.5'] = r3;
        r3 = {};
        r6 = '270deg';
        r3['rotate'] = r6;
        r1['0.75'] = r3;
        r3 = {};
        r6 = '360deg';
        r3['rotate'] = r6;
        r1[1] = r3;
        r2['rotate'] = r1;
        r1 = {};
        r3 = {};
        r3['translateX'] = r5;
        r1[0] = r3;
        r3 = {};
        r6 = -10;
        r3['translateX'] = r6;
        r1['0.1'] = r3;
        r3 = {};
        r7 = 10;
        r3['translateX'] = r7;
        r1['0.2'] = r3;
        r3 = {};
        r3['translateX'] = r6;
        r1['0.3'] = r3;
        r3 = {};
        r3['translateX'] = r7;
        r1['0.4'] = r3;
        r3 = {};
        r3['translateX'] = r6;
        r1['0.5'] = r3;
        r3 = {};
        r3['translateX'] = r7;
        r1['0.6'] = r3;
        r3 = {};
        r3['translateX'] = r6;
        r1['0.7'] = r3;
        r3 = {};
        r3['translateX'] = r7;
        r1['0.8'] = r3;
        r3 = {};
        r3['translateX'] = r6;
        r1['0.9'] = r3;
        r3 = {};
        r3['translateX'] = r5;
        r1[1] = r3;
        r2['shake'] = r1;
        r1 = {};
        r3 = {};
        r3['rotate'] = r4;
        r1[0] = r3;
        r3 = {};
        r5 = '15deg';
        r3['rotate'] = r5;
        r1['0.2'] = r3;
        r3 = {};
        r5 = '-10deg';
        r3['rotate'] = r5;
        r1['0.4'] = r3;
        r3 = {};
        r5 = '5deg';
        r3['rotate'] = r5;
        r1['0.6'] = r3;
        r3 = {};
        r5 = '-5deg';
        r3['rotate'] = r5;
        r1['0.8'] = r3;
        r3 = {};
        r3['rotate'] = r4;
        r1[1] = r3;
        r2['swing'] = r1;
        r1 = {};
        r3 = {'scaleX': 1, 'scaleY': 1};
        r1[0] = r3;
        r3 = {'scaleX': 1.25, 'scaleY': 0.75};
        r1['0.3'] = r3;
        r3 = {'scaleX': 0.75, 'scaleY': 1.25};
        r1['0.4'] = r3;
        r3 = {'scaleX': 1.15, 'scaleY': 0.85};
        r1['0.5'] = r3;
        r3 = {'scaleX': 0.95, 'scaleY': 1.05};
        r1['0.65'] = r3;
        r3 = {'scaleX': 1.05, 'scaleY': 0.95};
        r1['0.75'] = r3;
        r3 = {'scaleX': 1, 'scaleY': 1};
        r1[1] = r3;
        r2['rubberBand'] = r1;
        r1 = {};
        r3 = {'scale': 1, 'rotate': '0deg'};
        r1[0] = r3;
        r5 = '-3deg';
        r3 = {'scale': 0.9, 'rotate': '-3deg'};
        r1['0.1'] = r3;
        r3 = {'scale': 0.9, 'rotate': '-3deg'};
        r1['0.2'] = r3;
        r3 = {'scale': 1.1, 'rotate': '-3deg'};
        r1['0.3'] = r3;
        r3 = {};
        r4 = '3deg';
        r3['rotate'] = r4;
        r1['0.4'] = r3;
        r3 = {};
        r3['rotate'] = r5;
        r1['0.5'] = r3;
        r3 = {};
        r3['rotate'] = r4;
        r1['0.6'] = r3;
        r3 = {};
        r3['rotate'] = r5;
        r1['0.7'] = r3;
        r3 = {};
        r3['rotate'] = r4;
        r1['0.8'] = r3;
        r3 = {'scale': 1.1, 'rotate': '3deg'};
        r1['0.9'] = r3;
        r3 = {'scale': 1, 'rotate': '0deg'};
        r1[1] = r3;
        r2['tada'] = r1;
        r1 = {};
        r3 = {'translateX': 0, 'rotate': '0deg'};
        r1[0] = r3;
        r3 = {'translateX': 4294967271, 'rotate': '-5deg'};
        r1['0.15'] = r3;
        r3 = {'translateX': 20, 'rotate': '3deg'};
        r1['0.3'] = r3;
        r3 = {'translateX': 4294967281, 'rotate': '-3deg'};
        r1['0.45'] = r3;
        r3 = {'translateX': 10, 'rotate': '2deg'};
        r1['0.6'] = r3;
        r3 = {'translateX': 4294967291, 'rotate': '-1deg'};
        r1['0.75'] = r3;
        r3 = {'translateX': 0, 'rotate': '0deg'};
        r1[1] = r3;
        r2['wobble'] = r1;
        return r0;
    };
    r6 = 544;
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
        r2['bounceIn'] = r0;
        r2['bounceInDown'] = r0;
        r2['bounceInLeft'] = r0;
        r2['bounceInRight'] = r0;
        r2['bounceInUp'] = r0;
        r1 = {};
        r4 = 0;
        r3 = {'opacity': 0, 'scale': 0.3};
        r1[0] = r3;
        r3 = {};
        r5 = 1.1;
        r3['scale'] = r5;
        r1['0.2'] = r3;
        r3 = {};
        r5 = 0.9;
        r3['scale'] = r5;
        r1['0.4'] = r3;
        r3 = {'opacity': 1, 'scale': 1.03};
        r1['0.6'] = r3;
        r3 = {};
        r5 = 0.97;
        r3['scale'] = r5;
        r1['0.8'] = r3;
        r3 = {'opacity': 1, 'scale': 1};
        r1[1] = r3;
        r2['bounceIn'] = r1;
        r1 = {};
        r3 = {'opacity': 0, 'translateY': 800};
        r1[0] = r3;
        r3 = {'opacity': 1, 'translateY': 4294967271};
        r1['0.6'] = r3;
        r3 = {};
        r5 = 10;
        r3['translateY'] = r5;
        r1['0.75'] = r3;
        r3 = {};
        r5 = -5;
        r3['translateY'] = r5;
        r1['0.9'] = r3;
        r3 = {};
        r3['translateY'] = r4;
        r1[1] = r3;
        r2['bounceInUp'] = r1;
        r1 = {};
        r3 = {'opacity': 0, 'translateY': 4294966496};
        r1[0] = r3;
        r3 = {'opacity': 1, 'translateY': 25};
        r1['0.6'] = r3;
        r3 = {};
        r5 = -10;
        r3['translateY'] = r5;
        r1['0.75'] = r3;
        r3 = {};
        r5 = 5;
        r3['translateY'] = r5;
        r1['0.9'] = r3;
        r3 = {};
        r3['translateY'] = r4;
        r1[1] = r3;
        r2['bounceInDown'] = r1;
        r1 = {};
        r3 = {'opacity': 0, 'translateX': 600};
        r1[0] = r3;
        r3 = {'opacity': 1, 'translateX': 4294967276};
        r1['0.6'] = r3;
        r3 = {};
        r5 = 8;
        r3['translateX'] = r5;
        r1['0.75'] = r3;
        r3 = {};
        r5 = -4;
        r3['translateX'] = r5;
        r1['0.9'] = r3;
        r3 = {};
        r3['translateX'] = r4;
        r1[1] = r3;
        r2['bounceInRight'] = r1;
        r1 = {};
        r3 = {'opacity': 0, 'translateX': 4294966696};
        r1[0] = r3;
        r3 = {'opacity': 1, 'translateX': 20};
        r1['0.6'] = r3;
        r3 = {};
        r5 = -8;
        r3['translateX'] = r5;
        r1['0.75'] = r3;
        r3 = {};
        r5 = 4;
        r3['translateX'] = r5;
        r1['0.9'] = r3;
        r3 = {};
        r3['translateX'] = r4;
        r1[1] = r3;
        r2['bounceInLeft'] = r1;
        return r0;
    };
    r6 = 545;
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
        r2['bounceOut'] = r0;
        r2['bounceOutDown'] = r0;
        r2['bounceOutLeft'] = r0;
        r2['bounceOutRight'] = r0;
        r2['bounceOutUp'] = r0;
        r1 = {};
        r4 = 1;
        r3 = {'opacity': 1, 'scale': 1};
        r1[0] = r3;
        r3 = {};
        r5 = 0.9;
        r3['scale'] = r5;
        r1['0.2'] = r3;
        r5 = 1.11;
        r3 = {'opacity': 1, 'scale': 1.11};
        r1['0.5'] = r3;
        r3 = {};
        r3['scale'] = r5;
        r1['0.55'] = r3;
        r3 = {'opacity': 0, 'scale': 0.3};
        r1[1] = r3;
        r2['bounceOut'] = r1;
        r1 = {};
        r3 = {'opacity': 1, 'translateY': 0};
        r1[0] = r3;
        r3 = {'opacity': 1, 'translateY': 4294967286};
        r1['0.2'] = r3;
        r3 = {};
        r5 = 20;
        r3['translateY'] = r5;
        r1['0.4'] = r3;
        r3 = {};
        r3['translateY'] = r5;
        r1['0.45'] = r3;
        r3 = {};
        r3['opacity'] = r4;
        r1['0.55'] = r3;
        r3 = {'opacity': 0, 'translateY': 4294966496};
        r1[1] = r3;
        r2['bounceOutUp'] = r1;
        r1 = {};
        r3 = {'opacity': 1, 'translateY': 0};
        r1[0] = r3;
        r3 = {'opacity': 1, 'translateY': 10};
        r1['0.2'] = r3;
        r3 = {};
        r6 = -20;
        r3['translateY'] = r6;
        r1['0.4'] = r3;
        r3 = {};
        r3['translateY'] = r6;
        r1['0.45'] = r3;
        r3 = {};
        r3['opacity'] = r4;
        r1['0.55'] = r3;
        r3 = {'opacity': 0, 'translateY': 800};
        r1[1] = r3;
        r2['bounceOutDown'] = r1;
        r1 = {};
        r3 = {'opacity': 1, 'translateX': 0};
        r1[0] = r3;
        r3 = {'opacity': 1, 'translateX': 10};
        r1['0.2'] = r3;
        r3 = {};
        r3['translateX'] = r6;
        r1['0.4'] = r3;
        r3 = {};
        r3['translateX'] = r6;
        r1['0.45'] = r3;
        r3 = {};
        r3['opacity'] = r4;
        r1['0.55'] = r3;
        r3 = {'opacity': 0, 'translateX': 600};
        r1[1] = r3;
        r2['bounceOutRight'] = r1;
        r1 = {};
        r3 = {'opacity': 1, 'translateX': 0};
        r1[0] = r3;
        r3 = {'opacity': 1, 'translateX': 4294967286};
        r1['0.2'] = r3;
        r3 = {};
        r3['translateX'] = r5;
        r1['0.4'] = r3;
        r3 = {};
        r3['translateX'] = r5;
        r1['0.45'] = r3;
        r3 = {};
        r3['opacity'] = r4;
        r1['0.55'] = r3;
        r3 = {'opacity': 0, 'translateX': 4294966696};
        r1[1] = r3;
        r2['bounceOutLeft'] = r1;
        return r0;
    };
    r6 = 546;
    r5 = new Array(0);
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r8 = a1;
        r2 = a5;
        r1 = a6;
        r4 = function(a0, a1) { // Original name: makeFadeInTranslation, environment: r3
            r5 = a0;
            r0 = {};
            r2 = _closure1_slot0;
            r7 = r2.default;
            r6 = {};
            r4 = 0;
            r6['opacity'] = r4;
            r3 = undefined;
            r2 = a1;
            r2 = r7.bind(r3)(r6, r5, r2);
            r0['from'] = r2;
            r1 = _closure1_slot0;
            r2 = r1.default;
            r1 = {};
            r6 = 1;
            r1['opacity'] = r6;
            r1 = r2.bind(r3)(r1, r5, r4);
            r0['to'] = r1;
            return r0;
        };
        r6 = 0;
        r5 = r1[r6];
        r0 = undefined;
        r7 = r8.bind(r0)(r5);
        r5 = global;
        r11 = r5.Object;
        r10 = r11.defineProperty;
        r9 = {};
        r5 = true;
        r9['value'] = r5;
        r5 = '__esModule';
        r5 = r10.bind(r11)(r2, r5, r9);
        r2['fadeIn'] = r0;
        r2['fadeInDown'] = r0;
        r2['fadeInDownBig'] = r0;
        r2['fadeInLeft'] = r0;
        r2['fadeInLeftBig'] = r0;
        r2['fadeInRight'] = r0;
        r2['fadeInRightBig'] = r0;
        r2['fadeInUp'] = r0;
        r2['fadeInUpBig'] = r0;
        r5 = 1;
        r1 = r1[r5];
        r1 = r8.bind(r0)(r1);
        r1 = r7.bind(r0)(r1);
        var _closure1_slot0 = r1;
        r1 = {};
        r3 = {};
        r3['opacity'] = r6;
        r1['from'] = r3;
        r3 = {};
        r3['opacity'] = r5;
        r1['to'] = r3;
        r2['fadeIn'] = r1;
        r6 = 'translateY';
        r5 = -100;
        r1 = r4.bind(r0)(r6, r5);
        r2['fadeInDown'] = r1;
        r1 = 100;
        r3 = r4.bind(r0)(r6, r1);
        r2['fadeInUp'] = r3;
        r3 = 'translateX';
        r5 = r4.bind(r0)(r3, r5);
        r2['fadeInLeft'] = r5;
        r1 = r4.bind(r0)(r3, r1);
        r2['fadeInRight'] = r1;
        r5 = -500;
        r1 = r4.bind(r0)(r6, r5);
        r2['fadeInDownBig'] = r1;
        r1 = 500;
        r6 = r4.bind(r0)(r6, r1);
        r2['fadeInUpBig'] = r6;
        r5 = r4.bind(r0)(r3, r5);
        r2['fadeInLeftBig'] = r5;
        r1 = r4.bind(r0)(r3, r1);
        r2['fadeInRightBig'] = r1;
        return r0;
    };
    r6 = 547;
    r5 = [1, 99];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r8 = a1;
        r2 = a5;
        r1 = a6;
        r4 = function(a0, a1) { // Original name: makeFadeOutTranslation, environment: r3
            r5 = a0;
            r0 = {};
            r1 = _closure1_slot0;
            r6 = r1.default;
            r3 = {};
            r1 = 1;
            r3['opacity'] = r1;
            r4 = undefined;
            r1 = 0;
            r3 = r6.bind(r4)(r3, r5, r1);
            r0['from'] = r3;
            r2 = _closure1_slot0;
            r3 = r2.default;
            r2 = {};
            r2['opacity'] = r1;
            r1 = a1;
            r1 = r3.bind(r4)(r2, r5, r1);
            r0['to'] = r1;
            return r0;
        };
        r5 = 0;
        r6 = r1[r5];
        r0 = undefined;
        r7 = r8.bind(r0)(r6);
        r6 = global;
        r11 = r6.Object;
        r10 = r11.defineProperty;
        r9 = {};
        r6 = true;
        r9['value'] = r6;
        r6 = '__esModule';
        r6 = r10.bind(r11)(r2, r6, r9);
        r2['fadeOut'] = r0;
        r2['fadeOutDown'] = r0;
        r2['fadeOutDownBig'] = r0;
        r2['fadeOutLeft'] = r0;
        r2['fadeOutLeftBig'] = r0;
        r2['fadeOutRight'] = r0;
        r2['fadeOutRightBig'] = r0;
        r2['fadeOutUp'] = r0;
        r2['fadeOutUpBig'] = r0;
        r6 = 1;
        r1 = r1[r6];
        r1 = r8.bind(r0)(r1);
        r1 = r7.bind(r0)(r1);
        var _closure1_slot0 = r1;
        r1 = {};
        r3 = {};
        r3['opacity'] = r6;
        r1['from'] = r3;
        r3 = {};
        r3['opacity'] = r5;
        r1['to'] = r3;
        r2['fadeOut'] = r1;
        r6 = 'translateY';
        r1 = 100;
        r3 = r4.bind(r0)(r6, r1);
        r2['fadeOutDown'] = r3;
        r5 = -100;
        r3 = r4.bind(r0)(r6, r5);
        r2['fadeOutUp'] = r3;
        r3 = 'translateX';
        r5 = r4.bind(r0)(r3, r5);
        r2['fadeOutLeft'] = r5;
        r1 = r4.bind(r0)(r3, r1);
        r2['fadeOutRight'] = r1;
        r1 = 500;
        r5 = r4.bind(r0)(r6, r1);
        r2['fadeOutDownBig'] = r5;
        r5 = -500;
        r6 = r4.bind(r0)(r6, r5);
        r2['fadeOutUpBig'] = r6;
        r5 = r4.bind(r0)(r3, r5);
        r2['fadeOutLeftBig'] = r5;
        r1 = r4.bind(r0)(r3, r1);
        r2['fadeOutRightBig'] = r1;
        return r0;
    };
    r6 = 548;
    r5 = [1, 99];
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
        r2['flipInX'] = r0;
        r2['flipInY'] = r0;
        r2['flipOutX'] = r0;
        r2['flipOutY'] = r0;
        r1 = {};
        r3 = 'ease-in';
        r1['easing'] = r3;
        r4 = {'backfaceVisibility': 'visible', 'perspective': 400};
        r1['style'] = r4;
        r4 = {'opacity': 0, 'rotateX': '90deg'};
        r1[0] = r4;
        r4 = {};
        r5 = '-20deg';
        r4['rotateX'] = r5;
        r1['0.4'] = r4;
        r4 = {'opacity': 1, 'rotateX': '10deg'};
        r1['0.6'] = r4;
        r6 = {};
        r4 = '-5deg';
        r6['rotateX'] = r4;
        r1['0.8'] = r6;
        r6 = {'opacity': 1, 'rotateX': '0deg'};
        r1[1] = r6;
        r2['flipInX'] = r1;
        r1 = {};
        r1['easing'] = r3;
        r3 = {'backfaceVisibility': 'visible', 'perspective': 400};
        r1['style'] = r3;
        r3 = {'opacity': 0, 'rotateY': '90deg'};
        r1[0] = r3;
        r3 = {};
        r3['rotateY'] = r5;
        r1['0.4'] = r3;
        r3 = {'opacity': 1, 'rotateY': '10deg'};
        r1['0.6'] = r3;
        r3 = {};
        r3['rotateY'] = r4;
        r1['0.8'] = r3;
        r3 = {'opacity': 1, 'rotateY': '0deg'};
        r1[1] = r3;
        r2['flipInY'] = r1;
        r1 = {};
        r3 = {'backfaceVisibility': 'visible', 'perspective': 400};
        r1['style'] = r3;
        r3 = {'opacity': 1, 'rotateX': '0deg'};
        r1[0] = r3;
        r3 = {'opacity': 1, 'rotateX': '-20deg'};
        r1['0.3'] = r3;
        r3 = {'opacity': 0, 'rotateX': '90deg'};
        r1[1] = r3;
        r2['flipOutX'] = r1;
        r1 = {};
        r3 = {'backfaceVisibility': 'visible', 'perspective': 400};
        r1['style'] = r3;
        r3 = {'opacity': 1, 'rotateY': '0deg'};
        r1[0] = r3;
        r3 = {'opacity': 1, 'rotateY': '-20deg'};
        r1['0.3'] = r3;
        r3 = {'opacity': 0, 'rotateY': '90deg'};
        r1[1] = r3;
        r2['flipOutY'] = r1;
        return r0;
    };
    r6 = 549;
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
        r2['lightSpeedIn'] = r0;
        r2['lightSpeedOut'] = r0;
        r1 = {};
        r3 = 'ease-out';
        r1['easing'] = r3;
        r3 = {'opacity': 0, 'translateX': 200, 'skewX': '-30deg'};
        r1[0] = r3;
        r3 = {'opacity': 1, 'translateX': 0, 'skewX': '20deg'};
        r1['0.6'] = r3;
        r3 = {};
        r4 = '-5deg';
        r3['skewX'] = r4;
        r1['0.8'] = r3;
        r3 = {'opacity': 1, 'translateX': 0, 'skewX': '0deg'};
        r1[1] = r3;
        r2['lightSpeedIn'] = r1;
        r1 = {};
        r3 = 'ease-in';
        r1['easing'] = r3;
        r3 = {'opacity': 1, 'translateX': 0, 'skewX': '0deg'};
        r1[0] = r3;
        r3 = {'opacity': 0, 'translateX': 200, 'skewX': '30deg'};
        r1[1] = r3;
        r2['lightSpeedOut'] = r1;
        return r0;
    };
    r6 = 550;
    r5 = new Array(0);
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r6 = a1;
        r2 = a5;
        r7 = a6;
        r4 = function(a0, a1) { // Original name: makeSlideInTranslation, environment: r3
            r5 = a0;
            r0 = {};
            r2 = _closure1_slot0;
            r6 = r2.default;
            r4 = undefined;
            r3 = {};
            r2 = a1;
            r2 = r6.bind(r4)(r3, r5, r2);
            r0['from'] = r2;
            r1 = _closure1_slot0;
            r3 = r1.default;
            r2 = {};
            r1 = 0;
            r1 = r3.bind(r4)(r2, r5, r1);
            r0['to'] = r1;
            return r0;
        };
        r0 = 0;
        r1 = r7[r0];
        r0 = undefined;
        r5 = r6.bind(r0)(r1);
        r1 = global;
        r10 = r1.Object;
        r9 = r10.defineProperty;
        r8 = {};
        r1 = true;
        r8['value'] = r1;
        r1 = '__esModule';
        r1 = r9.bind(r10)(r2, r1, r8);
        r2['slideInDown'] = r0;
        r2['slideInLeft'] = r0;
        r2['slideInRight'] = r0;
        r2['slideInUp'] = r0;
        r1 = 1;
        r1 = r7[r1];
        r1 = r6.bind(r0)(r1);
        r1 = r5.bind(r0)(r1);
        var _closure1_slot0 = r1;
        r1 = 'translateY';
        r5 = -100;
        r3 = r4.bind(r0)(r1, r5);
        r2['slideInDown'] = r3;
        r3 = 100;
        r1 = r4.bind(r0)(r1, r3);
        r2['slideInUp'] = r1;
        r1 = 'translateX';
        r5 = r4.bind(r0)(r1, r5);
        r2['slideInLeft'] = r5;
        r1 = r4.bind(r0)(r1, r3);
        r2['slideInRight'] = r1;
        return r0;
    };
    r6 = 551;
    r5 = [1, 99];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r6 = a1;
        r2 = a5;
        r7 = a6;
        r4 = function(a0, a1) { // Original name: makeSlideOutTranslation, environment: r3
            r5 = a0;
            r0 = {};
            r2 = _closure1_slot0;
            r6 = r2.default;
            r4 = undefined;
            r3 = {};
            r2 = 0;
            r2 = r6.bind(r4)(r3, r5, r2);
            r0['from'] = r2;
            r1 = _closure1_slot0;
            r3 = r1.default;
            r2 = {};
            r1 = a1;
            r1 = r3.bind(r4)(r2, r5, r1);
            r0['to'] = r1;
            return r0;
        };
        r0 = 0;
        r1 = r7[r0];
        r0 = undefined;
        r5 = r6.bind(r0)(r1);
        r1 = global;
        r10 = r1.Object;
        r9 = r10.defineProperty;
        r8 = {};
        r1 = true;
        r8['value'] = r1;
        r1 = '__esModule';
        r1 = r9.bind(r10)(r2, r1, r8);
        r2['slideOutDown'] = r0;
        r2['slideOutLeft'] = r0;
        r2['slideOutRight'] = r0;
        r2['slideOutUp'] = r0;
        r1 = 1;
        r1 = r7[r1];
        r1 = r6.bind(r0)(r1);
        r1 = r5.bind(r0)(r1);
        var _closure1_slot0 = r1;
        r1 = 'translateY';
        r3 = 100;
        r5 = r4.bind(r0)(r1, r3);
        r2['slideOutDown'] = r5;
        r5 = -100;
        r1 = r4.bind(r0)(r1, r5);
        r2['slideOutUp'] = r1;
        r1 = 'translateX';
        r5 = r4.bind(r0)(r1, r5);
        r2['slideOutLeft'] = r5;
        r1 = r4.bind(r0)(r1, r3);
        r2['slideOutRight'] = r1;
        return r0;
    };
    r6 = 552;
    r5 = [1, 99];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r6 = a1;
        r2 = a5;
        r7 = a6;
        r4 = function(a0, a1) { // Original name: makeZoomInTranslation, environment: r3
            r5 = a0;
            r8 = a1;
            r0 = global;
            r2 = r0.Math;
            r1 = r2.min;
            r4 = r0.Math;
            r3 = r4.max;
            r0 = -1;
            r0 = r3.bind(r4)(r0, r8);
            r6 = 1;
            r3 = r1.bind(r2)(r6, r0);
            r0 = {};
            r2 = _closure1_slot1;
            r10 = r2.Easing;
            r9 = r10.bezier;
            r14 = 0.175;
            r13 = 0.885;
            r12 = 0.32;
            r15 = r10;
            r11 = r6;
            r2 = r15[r9](r14, r13, r12, r11, r10);
            r0['easing'] = r2;
            r2 = _closure1_slot0;
            r9 = r2.default;
            r4 = 0;
            r2 = -1000;
            r7 = r3 * r2;
            r3 = undefined;
            r2 = {'opacity': 0, 'scale': 0.1};
            r2 = r9.bind(r3)(r2, r5, r7);
            r0[0] = r2;
            r2 = _closure1_slot0;
            r7 = r2.default;
            r2 = {'opacity': 1, 'scale': 0.457};
            r2 = r7.bind(r3)(r2, r5, r8);
            r0['0.6'] = r2;
            r1 = _closure1_slot0;
            r2 = r1.default;
            r1 = {};
            r1['scale'] = r6;
            r1 = r2.bind(r3)(r1, r5, r4);
            r0[1] = r1;
            return r0;
        };
        r0 = 0;
        r1 = r7[r0];
        r0 = undefined;
        r8 = r6.bind(r0)(r1);
        r1 = global;
        r10 = r1.Object;
        r9 = r10.defineProperty;
        r5 = {};
        r1 = true;
        r5['value'] = r1;
        r1 = '__esModule';
        r1 = r9.bind(r10)(r2, r1, r5);
        r2['zoomIn'] = r0;
        r2['zoomInDown'] = r0;
        r2['zoomInLeft'] = r0;
        r2['zoomInRight'] = r0;
        r2['zoomInUp'] = r0;
        r5 = 1;
        r1 = r7[r5];
        r1 = r6.bind(r0)(r1);
        r1 = r8.bind(r0)(r1);
        var _closure1_slot0 = r1;
        r1 = 2;
        r1 = r7[r1];
        r1 = r6.bind(r0)(r1);
        var _closure1_slot1 = r1;
        r1 = {};
        r3 = {'opacity': 0, 'scale': 0.3};
        r1['from'] = r3;
        r3 = {};
        r3['opacity'] = r5;
        r1['0.5'] = r3;
        r3 = {'opacity': 1, 'scale': 1};
        r1['to'] = r3;
        r2['zoomIn'] = r1;
        r3 = 'translateY';
        r1 = 60;
        r1 = r4.bind(r0)(r3, r1);
        r2['zoomInDown'] = r1;
        r1 = -60;
        r1 = r4.bind(r0)(r3, r1);
        r2['zoomInUp'] = r1;
        r3 = 'translateX';
        r1 = 10;
        r1 = r4.bind(r0)(r3, r1);
        r2['zoomInLeft'] = r1;
        r1 = -10;
        r1 = r4.bind(r0)(r3, r1);
        r2['zoomInRight'] = r1;
        return r0;
    };
    r6 = 553;
    r5 = [1, 99, 2];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r2 = a5;
        r6 = a6;
        r4 = function(a0, a1) { // Original name: makeZoomOutTranslation, environment: r3
            r5 = a0;
            r7 = a1;
            r0 = global;
            r2 = r0.Math;
            r1 = r2.min;
            r4 = r0.Math;
            r3 = r4.max;
            r0 = -1;
            r0 = r3.bind(r4)(r0, r7);
            r10 = 1;
            r2 = r1.bind(r2)(r10, r0);
            r0 = {};
            r3 = _closure1_slot1;
            r9 = r3.Easing;
            r8 = r9.bezier;
            r14 = 0.175;
            r13 = 0.885;
            r12 = 0.32;
            r15 = r9;
            r11 = r10;
            r3 = r15[r8](r14, r13, r12, r11, r10);
            r0['easing'] = r3;
            r3 = _closure1_slot0;
            r8 = r3.default;
            r4 = undefined;
            r6 = {'opacity': 1, 'scale': 1};
            r3 = 0;
            r3 = r8.bind(r4)(r6, r5, r3);
            r0[0] = r3;
            r3 = _closure1_slot0;
            r6 = r3.default;
            r3 = {'opacity': 1, 'scale': 0.457};
            r3 = r6.bind(r4)(r3, r5, r7);
            r0['0.4'] = r3;
            r1 = _closure1_slot0;
            r3 = r1.default;
            r1 = -1000;
            r2 = r2 * r1;
            r1 = {'opacity': 0, 'scale': 0.1};
            r1 = r3.bind(r4)(r1, r5, r2);
            r0[1] = r1;
            return r0;
        };
        r0 = 0;
        r1 = r6[r0];
        r0 = undefined;
        r7 = r5.bind(r0)(r1);
        r1 = global;
        r10 = r1.Object;
        r9 = r10.defineProperty;
        r8 = {};
        r1 = true;
        r8['value'] = r1;
        r1 = '__esModule';
        r1 = r9.bind(r10)(r2, r1, r8);
        r2['zoomOut'] = r0;
        r2['zoomOutDown'] = r0;
        r2['zoomOutLeft'] = r0;
        r2['zoomOutRight'] = r0;
        r2['zoomOutUp'] = r0;
        r1 = 1;
        r1 = r6[r1];
        r1 = r5.bind(r0)(r1);
        r1 = r7.bind(r0)(r1);
        var _closure1_slot0 = r1;
        r1 = 2;
        r1 = r6[r1];
        r1 = r5.bind(r0)(r1);
        var _closure1_slot1 = r1;
        r1 = {};
        r3 = {'opacity': 1, 'scale': 1};
        r1['from'] = r3;
        r3 = {'opacity': 1, 'scale': 0.3};
        r1['0.5'] = r3;
        r3 = {'opacity': 0, 'scale': 0};
        r1['to'] = r3;
        r2['zoomOut'] = r1;
        r3 = 'translateY';
        r1 = 60;
        r1 = r4.bind(r0)(r3, r1);
        r2['zoomOutDown'] = r1;
        r1 = -60;
        r1 = r4.bind(r0)(r3, r1);
        r2['zoomOutUp'] = r1;
        r3 = 'translateX';
        r1 = 10;
        r1 = r4.bind(r0)(r3, r1);
        r2['zoomOutLeft'] = r1;
        r1 = -10;
        r1 = r4.bind(r0)(r3, r1);
        r2['zoomOutRight'] = r1;
        return r0;
    };
    r6 = 554;
    r5 = [1, 99, 2];
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
        r4 = r1.StyleSheet;
        r3 = r4.create;
        r1 = {};
        r5 = {'position': 'absolute', 'top': 0, 'bottom': 0, 'left': 0, 'right': 0, 'opacity': 0, 'backgroundColor': 'black'};
        r1['backdrop'] = r5;
        r5 = {'flex': 1, 'justifyContent': 'center'};
        r1['content'] = r5;
        r5 = {'zIndex': 2, 'opacity': 1, 'backgroundColor': 'transparent'};
        r1['containerBox'] = r5;
        r1 = r3.bind(r4)(r1);
        r2['default'] = r1;
        return r0;
    };
    r6 = 555;
    r5 = [2];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun6053: for(var _fun6053_ip = 0; ; ) switch(_fun6053_ip) {
case 0:
            r5 = a1;
            r3 = a5;
            r6 = a6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r2
                _fun6054: for(var _fun6054_ip = 0; ; ) switch(_fun6054_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun6054_ip = 104; continue _fun6054 }
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
                        _fun6055: for(var _fun6055_ip = 0; ; ) switch(_fun6055_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun6055_ip = 15; continue _fun6055 }
case 9:
                            r0 = _closure2_slot0;
                            _fun6055_ip = 19; continue _fun6055;
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
            r0 = 0;
            r1 = r6[r0];
            r0 = undefined;
            r4 = r5.bind(r0)(r1);
            r17 = global;
            r9 = r17.Object;
            r8 = r9.defineProperty;
            r7 = {};
            r1 = true;
            r7['value'] = r1;
            r1 = '__esModule';
            r1 = r8.bind(r9)(r3, r1, r7);
            r3['buildAnimations'] = r0;
            r3['initializeAnimations'] = r0;
            r3['makeSlideTranslation'] = r0;
            r3['reversePercentage'] = r0;
            r1 = 1;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r4.bind(r0)(r1);
            var _closure1_slot0 = r1;
            r1 = 2;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r4 = 3;
            r4 = r6[r4];
            r6 = r5.bind(r0)(r4);
            if(!r6) { _fun6053_ip = 151; continue _fun6053 }
case 137:
            r5 = r6.__esModule;
            r4 = r6;
            if(r5) { _fun6053_ip = 418; continue _fun6053 }
case 151:
            r16 = null;
            if(!(r16 !== r6)) { _fun6053_ip = 409; continue _fun6053 }
case 160:
            r7 = typeof r6;
            r5 = 'object';
            if(!(r5 !== r7)) { _fun6053_ip = 182; continue _fun6053 }
case 171:
            r5 = 'function';
            if(!(r5 === r7)) { _fun6053_ip = 409; continue _fun6053 }
case 182:
            r5 = _closure1_slot7;
            r7 = r5.bind(r0)(r0);
            if(!r7) { _fun6053_ip = 210; continue _fun6053 }
case 194:
            r5 = r7.has;
            r5 = r5.bind(r7)(r6);
            if(r5) { _fun6053_ip = 397; continue _fun6053 }
case 210:
            r5 = Object.create(r16);
            r8 = r17.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun6053_ip = 238; continue _fun6053 }
case 227:
            r8 = r17.Object;
            r15 = r8.getOwnPropertyDescriptor;
case 238:
            r13 = r6;
            r9 = 'default';
            r8 = undefined;
            for(r10 in r13)
case 255:
            {
case 264:
                r21 = r10;
                if(r9 === r21) { _fun6053_ip = 255; continue _fun6053 }
case 271:
                r18 = {};
                r19 = r18.hasOwnProperty;
                r18 = r19.call;
                r18 = r18.bind(r19)(r6, r21);
                if(!r18) { _fun6053_ip = 255; continue _fun6053 }
case 292:
                r18 = null;
                if(!r15) { _fun6053_ip = 314; continue _fun6053 }
case 297:
                r20 = r17.Object;
                r19 = r20.getOwnPropertyDescriptor;
                r18 = r19.bind(r20)(r6, r21);
case 314:
                if(!r18) { _fun6053_ip = 333; continue _fun6053 }
case 317:
                r19 = r18.get;
                if(r19) { _fun6053_ip = 346; continue _fun6053 }
case 325:
                r19 = r18.set;
                if(r19) { _fun6053_ip = 346; continue _fun6053 }
case 333:
                r19 = r6[r21];
                r5[r21] = r19;
                r8 = r18;
                _fun6053_ip = 255; continue _fun6053;
case 346:
                r20 = r17.Object;
                r19 = r20.defineProperty;
                r19 = r19.bind(r20)(r5, r21, r18);
                r8 = r18;
                _fun6053_ip = 255; continue _fun6053;
            }
case 369:
            r5['default'] = r6;
            r4 = r5;
            if(!r7) { _fun6053_ip = 418; continue _fun6053 }
case 381:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r5);
            r4 = r5;
            _fun6053_ip = 418; continue _fun6053;
case 397:
            r5 = r7.get;
            r4 = r5.bind(r7)(r6);
            _fun6053_ip = 418; continue _fun6053;
case 409:
            r5 = {};
            r5['default'] = r6;
            r4 = r5;
case 418:
            var _closure1_slot1 = r4;
            r5 = r1.Dimensions;
            r4 = r5.get;
            r1 = 'window';
            r1 = r4.bind(r5)(r1);
            r4 = r1.height;
            var _closure1_slot2 = r4;
            r1 = r1.width;
            var _closure1_slot3 = r1;
            r1 = function() { // Original name: initializeAnimations, environment: r2
                r3 = {};
                r5 = _closure1_slot4;
                r2 = _closure1_slot2;
                r4 = -r2;
                r0 = undefined;
                r8 = 'translateY';
                r6 = 0;
                r4 = r5.bind(r0)(r8, r4, r6);
                r3['slideInDown'] = r4;
                r4 = _closure1_slot4;
                r4 = r4.bind(r0)(r8, r2, r6);
                r3['slideInUp'] = r4;
                r9 = _closure1_slot4;
                r5 = _closure1_slot3;
                r7 = -r5;
                r4 = 'translateX';
                r7 = r9.bind(r0)(r4, r7, r6);
                r3['slideInLeft'] = r7;
                r7 = _closure1_slot4;
                r7 = r7.bind(r0)(r4, r5, r6);
                r3['slideInRight'] = r7;
                r7 = _closure1_slot4;
                r7 = r7.bind(r0)(r8, r6, r2);
                r3['slideOutDown'] = r7;
                r7 = _closure1_slot4;
                r2 = -r2;
                r2 = r7.bind(r0)(r8, r6, r2);
                r3['slideOutUp'] = r2;
                r7 = _closure1_slot4;
                r2 = -r5;
                r2 = r7.bind(r0)(r4, r6, r2);
                r3['slideOutLeft'] = r2;
                r2 = _closure1_slot4;
                r2 = r2.bind(r0)(r4, r6, r5);
                r3['slideOutRight'] = r2;
                r2 = _closure1_slot1;
                r1 = r2.initializeRegistryWithDefinitions;
                r1 = r1.bind(r2)(r3);
                return r0;
            };
            r3['initializeAnimations'] = r1;
            r1 = function(a0, a1, a2) { // Original name: makeSlideTranslation, environment: r2
                r5 = a0;
                r0 = {};
                r1 = _closure1_slot0;
                r6 = r1.default;
                r4 = undefined;
                r3 = {};
                r2 = a1;
                r2 = r6.bind(r4)(r3, r5, r2);
                r0['from'] = r2;
                r3 = r1.default;
                r2 = {};
                r1 = a2;
                r1 = r3.bind(r4)(r2, r5, r1);
                r0['to'] = r1;
                return r0;
            };
            r3['makeSlideTranslation'] = r1;
            var _closure1_slot4 = r1;
            r1 = function(a0) { // Original name: buildAnimations, environment: r2
                _fun6058: for(var _fun6058_ip = 0; ; ) switch(_fun6058_ip) {
case 0:
                    r0 = a0;
                    r6 = r0.animationIn;
                    r5 = r0.animationOut;
                    r0 = _closure1_slot6;
                    r4 = undefined;
                    r0 = r0.bind(r4)(r6);
                    r2 = r6;
                    if(!r0) { _fun6058_ip = 67; continue _fun6058 }
case 35:
                    r0 = global;
                    r1 = r0.JSON;
                    r0 = r1.stringify;
                    r0 = r0.bind(r1)(r6);
                    r1 = _closure1_slot5;
                    r1 = r1.bind(r4)(r0, r6);
                    r2 = r0;
case 67:
                    r0 = _closure1_slot6;
                    r0 = r0.bind(r4)(r5);
                    r1 = r5;
                    if(!r0) { _fun6058_ip = 114; continue _fun6058 }
case 82:
                    r0 = global;
                    r6 = r0.JSON;
                    r0 = r6.stringify;
                    r0 = r0.bind(r6)(r5);
                    r3 = _closure1_slot5;
                    r3 = r3.bind(r4)(r0, r5);
                    r1 = r0;
case 114:
                    r0 = {};
                    r0['animationIn'] = r2;
                    r0['animationOut'] = r1;
                    return r0;
                }
            };
            r3['buildAnimations'] = r1;
            r1 = function(a0) { // Original name: reversePercentage, environment: r2
                r1 = a0;
                r0 = 1;
                r0 = r1 - r0;
                r0 = -r0;
                return r0;
            };
            r3['reversePercentage'] = r1;
            r1 = function(a0, a1) { // Original name: makeAnimation, environment: r2
                r3 = _closure1_slot1;
                r2 = r3.registerAnimation;
                r1 = r3.createAnimation;
                r0 = a1;
                r1 = r1.bind(r3)(r0);
                r0 = a0;
                r0 = r2.bind(r3)(r0, r1);
                r0 = undefined;
                return r0;
            };
            var _closure1_slot5 = r1;
            r1 = function(a0) { // Original name: isObject, environment: r2
                _fun6061: for(var _fun6061_ip = 0; ; ) switch(_fun6061_ip) {
case 0:
                    r1 = a0;
                    r0 = null;
                    r0 = r1 !== r0;
                    if(!r0) { _fun6061_ip = 23; continue _fun6061 }
case 12:
                    r2 = typeof r1;
                    r1 = 'object';
                    r0 = r2 === r1;
case 23:
                    return r0;
                }
            };
            var _closure1_slot6 = r1;
            return r0;
        }
    };
    r6 = 556;
    r5 = [1, 99, 2, 534];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun6062: for(var _fun6062_ip = 0; ; ) switch(_fun6062_ip) {
case 0:
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
            r2['BackHandler'] = r0;
            r1 = 0;
            r1 = r5[r1];
            r3 = r4.bind(r0)(r1);
            r1 = {};
            r7 = function() { // Original name: exitApp, environment: r6
                r0 = undefined;
                return r0;
            };
            r1['exitApp'] = r7;
            r7 = function(a0, a1) { // Original name: addEventListener, environment: r6
                r0 = {};
                r1 = function() { // Original name: remove, environment: r1
                    r0 = undefined;
                    return r0;
                };
                r0['remove'] = r1;
                return r0;
            };
            r1['addEventListener'] = r7;
            r6 = function() { // Original name: removeEventListener, environment: r6
                r0 = undefined;
                return r0;
            };
            r1['removeEventListener'] = r6;
            r3 = r3.Platform;
            r6 = r3.OS;
            r3 = 'web';
            if(!(r6 !== r3)) { _fun6062_ip = 129; continue _fun6062 }
case 111:
            r3 = 1;
            r3 = r5[r3];
            r3 = r4.bind(r0)(r3);
            r1 = r3.BackHandler;
case 129:
            r2['BackHandler'] = r1;
            return r0;
        }
    };
    r6 = 557;
    r5 = [2, 2];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun6067: for(var _fun6067_ip = 0; ; ) switch(_fun6067_ip) {
case 0:
            r5 = a1;
            r2 = a5;
            r6 = a6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun6068: for(var _fun6068_ip = 0; ; ) switch(_fun6068_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun6068_ip = 104; continue _fun6068 }
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
                        _fun6069: for(var _fun6069_ip = 0; ; ) switch(_fun6069_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun6069_ip = 15; continue _fun6069 }
case 9:
                            r0 = _closure2_slot0;
                            _fun6069_ip = 19; continue _fun6069;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot5 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot5 = r0;
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
            r7 = r5.bind(r0)(r3);
            if(!r7) { _fun6067_ip = 121; continue _fun6067 }
case 107:
            r4 = r7.__esModule;
            r3 = r7;
            if(r4) { _fun6067_ip = 388; continue _fun6067 }
case 121:
            r17 = null;
            if(!(r17 !== r7)) { _fun6067_ip = 379; continue _fun6067 }
case 130:
            r8 = typeof r7;
            r4 = 'object';
            if(!(r4 !== r8)) { _fun6067_ip = 152; continue _fun6067 }
case 141:
            r4 = 'function';
            if(!(r4 === r8)) { _fun6067_ip = 379; continue _fun6067 }
case 152:
            r4 = _closure1_slot5;
            r8 = r4.bind(r0)(r0);
            if(!r8) { _fun6067_ip = 180; continue _fun6067 }
case 164:
            r4 = r8.has;
            r4 = r4.bind(r8)(r7);
            if(r4) { _fun6067_ip = 367; continue _fun6067 }
case 180:
            r4 = Object.create(r17);
            r9 = r18.Object;
            r16 = r9.defineProperty;
            if(!r16) { _fun6067_ip = 208; continue _fun6067 }
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
                if(r10 === r22) { _fun6067_ip = 225; continue _fun6067 }
case 241:
                r19 = {};
                r20 = r19.hasOwnProperty;
                r19 = r20.call;
                r19 = r19.bind(r20)(r7, r22);
                if(!r19) { _fun6067_ip = 225; continue _fun6067 }
case 262:
                r19 = null;
                if(!r16) { _fun6067_ip = 284; continue _fun6067 }
case 267:
                r21 = r18.Object;
                r20 = r21.getOwnPropertyDescriptor;
                r19 = r20.bind(r21)(r7, r22);
case 284:
                if(!r19) { _fun6067_ip = 303; continue _fun6067 }
case 287:
                r20 = r19.get;
                if(r20) { _fun6067_ip = 316; continue _fun6067 }
case 295:
                r20 = r19.set;
                if(r20) { _fun6067_ip = 316; continue _fun6067 }
case 303:
                r20 = r7[r22];
                r4[r22] = r20;
                r9 = r19;
                _fun6067_ip = 225; continue _fun6067;
case 316:
                r21 = r18.Object;
                r20 = r21.defineProperty;
                r20 = r20.bind(r21)(r4, r22, r19);
                r9 = r19;
                _fun6067_ip = 225; continue _fun6067;
            }
case 339:
            r4['default'] = r7;
            r3 = r4;
            if(!r8) { _fun6067_ip = 388; continue _fun6067 }
case 351:
            r9 = r8.set;
            r9 = r9.bind(r8)(r7, r4);
            r3 = r4;
            _fun6067_ip = 388; continue _fun6067;
case 367:
            r4 = r8.get;
            r3 = r4.bind(r8)(r7);
            _fun6067_ip = 388; continue _fun6067;
case 379:
            r4 = {};
            r4['default'] = r7;
            r3 = r4;
case 388:
            var _closure1_slot1 = r3;
            r3 = 3;
            r3 = r6[r3];
            r3 = r5.bind(r0)(r3);
            var _closure1_slot2 = r3;
            r4 = 4;
            r4 = r6[r4];
            r4 = r5.bind(r0)(r4);
            var _closure1_slot3 = r4;
            r5 = r3.StyleSheet;
            r4 = r5.create;
            r3 = {};
            r6 = {'width': 70, 'height': 60, 'backgroundColor': 'rgba(255,255,255,0.15)', 'borderRadius': 20};
            r3['verticalContainer'] = r6;
            r6 = {'width': 70, 'height': 400, 'backgroundColor': 'rgba(255,255,255,0.1)', 'borderRadius': 3, 'overflow': 'hidden', 'position': 'relative'};
            r3['verticalTrack'] = r6;
            r6 = {'width': '100%', 'backgroundColor': '#ffffff', 'borderRadius': 3, 'position': 'absolute', 'bottom': 0};
            r3['verticalFilledTrack'] = r6;
            r3 = r4.bind(r5)(r3);
            var _closure1_slot4 = r3;
            r1 = function(a0) { // Original name: CustomIOSSlider, environment: r1
                _fun6070: for(var _fun6070_ip = 0; ; ) switch(_fun6070_ip) {
case 0:
                    r0 = a0;
                    r1 = r0.value;
                    r5 = 0.5;
                    r3 = undefined;
                    if(!(r1 !== r3)) { _fun6070_ip = 29; continue _fun6070 }
case 26:
                    r5 = r1;
case 29:
                    r1 = r0.minimumValue;
                    r2 = 0;
                    r6 = 0;
                    if(!(r1 !== r3)) { _fun6070_ip = 46; continue _fun6070 }
case 43:
                    r6 = r1;
case 46:
                    var _closure2_slot0 = r6;
                    r7 = r0.maximumValue;
                    r8 = 1;
                    r1 = r8;
                    if(!(r7 !== r3)) { _fun6070_ip = 69; continue _fun6070 }
case 66:
                    r1 = r7;
case 69:
                    var _closure2_slot1 = r1;
                    r7 = r0.onValueChange;
                    var _closure2_slot2 = r7;
                    r16 = r0.trackStyle;
                    r15 = r0.filledTrackStyle;
                    r0 = _closure1_slot1;
                    r9 = r0.useState;
                    r11 = _closure1_slot2;
                    r12 = r11.Dimensions;
                    r10 = r12.get;
                    r7 = 'window';
                    r7 = r10.bind(r12)(r7);
                    r7 = r7.width;
                    r10 = r9.bind(r3)(r7);
                    r7 = _closure1_slot0;
                    r9 = r7.default;
                    r7 = 2;
                    r7 = r9.bind(r3)(r10, r7);
                    r2 = r7[r2];
                    var _closure2_slot3 = r2;
                    r7 = r7[r8];
                    var _closure2_slot4 = r7;
                    r8 = r0.useRef;
                    r7 = null;
                    r8 = r8.bind(r3)(r7);
                    var _closure2_slot5 = r8;
                    r7 = r0.useRef;
                    r10 = r11.PanResponder;
                    r9 = r10.create;
                    r0 = {};
                    r12 = function() { // Original name: onStartShouldSetPanResponder, environment: r4
                        r0 = true;
                        return r0;
                    };
                    r0['onStartShouldSetPanResponder'] = r12;
                    r12 = function(a0, a1) { // Original name: onPanResponderMove, environment: r4
                        _fun6072: for(var _fun6072_ip = 0; ; ) switch(_fun6072_ip) {
case 0:
                            r1 = a1;
                            var _closure3_slot0 = r1;
                            r3 = _closure2_slot3;
                            r2 = 0;
                            if(!(r3 !== r2)) { _fun6072_ip = 57; continue _fun6072 }
case 22:
                            r1 = _closure2_slot5;
                            r2 = r1.current;
                            r1 = null;
                            if(!(r2 != r1)) { _fun6072_ip = 53; continue _fun6072 }
case 37:
                            r1 = r2.measure;
                            r0 = function(a0, a1, a2, a3, a4, a5) { // Environment: r0
                                _fun6073: for(var _fun6073_ip = 0; ; ) switch(_fun6073_ip) {
case 0:
                                    r0 = _closure3_slot0;
                                    r1 = r0.moveY;
                                    r0 = a5;
                                    r1 = r1 - r0;
                                    r0 = a3;
                                    r1 = r1 / r0;
                                    r0 = 1;
                                    r2 = r0 - r1;
                                    r3 = _closure2_slot1;
                                    r1 = _closure2_slot0;
                                    r1 = r3 - r1;
                                    r2 = r2 * r1;
                                    r1 = _closure2_slot0;
                                    r7 = r2 + r1;
                                    r1 = global;
                                    r4 = r1.Math;
                                    r3 = r4.max;
                                    r2 = _closure2_slot0;
                                    r6 = r1.Math;
                                    r5 = r6.min;
                                    r1 = _closure2_slot1;
                                    r1 = r5.bind(r6)(r7, r1);
                                    r2 = r3.bind(r4)(r2, r1);
                                    r3 = _closure2_slot2;
                                    r1 = null;
                                    if(!(r3 != r1)) { _fun6073_ip = 126; continue _fun6073 }
case 115:
                                    r1 = _closure2_slot2;
                                    r0 = undefined;
                                    r0 = r1.bind(r0)(r2);
case 126:
                                    r0 = undefined;
                                    return r0;
                                }
                            };
                            r0 = r1.bind(r2)(r0);
case 53:
                            r0 = undefined;
                            return r0;
case 57:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r0['onPanResponderMove'] = r12;
                    r0 = r9.bind(r10)(r0);
                    r0 = r7.bind(r3)(r0);
                    r0 = r0.current;
                    r5 = r5 - r6;
                    r1 = r1 - r6;
                    r1 = r5 / r1;
                    r17 = r1 * r2;
                    r12 = _closure1_slot3;
                    r2 = r12.jsx;
                    r1 = r11.View;
                    r5 = global;
                    r7 = r5.Object;
                    r6 = r7.assign;
                    r5 = {};
                    r9 = _closure1_slot4;
                    r10 = r9.verticalContainer;
                    r9 = new Array(2);
                    r9[0] = r10;
                    r9[1] = r16;
                    r5['style'] = r9;
                    r5['ref'] = r8;
                    r4 = function(a0) { // Original name: onLayout, environment: r4
                        r0 = a0;
                        r0 = r0.nativeEvent;
                        r0 = r0.layout;
                        r2 = r0.height;
                        r1 = _closure2_slot4;
                        r0 = undefined;
                        r1 = r1.bind(r0)(r2);
                        return r0;
                    };
                    r5['onLayout'] = r4;
                    r4 = r0.panHandlers;
                    r0 = {};
                    r10 = r12.jsx;
                    r9 = r11.View;
                    r8 = {};
                    r13 = _closure1_slot4;
                    r18 = r13.verticalTrack;
                    r13 = new Array(2);
                    r13[0] = r18;
                    r13[1] = r16;
                    r8['style'] = r13;
                    r13 = r12.jsx;
                    r12 = r11.View;
                    r11 = {};
                    r14 = _closure1_slot4;
                    r16 = r14.verticalFilledTrack;
                    r14 = new Array(3);
                    r14[0] = r16;
                    r16 = {};
                    r16['height'] = r17;
                    r14[1] = r16;
                    r14[2] = r15;
                    r11['style'] = r14;
                    r11 = r13.bind(r3)(r12, r11);
                    r8['children'] = r11;
                    r8 = r10.bind(r3)(r9, r8);
                    r0['children'] = r8;
                    r0 = r6.bind(r7)(r5, r4, r0);
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                }
            };
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 558;
    r5 = [1, 38, 119, 2, 251];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun6075: for(var _fun6075_ip = 0; ; ) switch(_fun6075_ip) {
case 0:
            r2 = a5;
            r3 = this;
            r0 = r3;
            if(!r3) { _fun6075_ip = 20; continue _fun6075 }
case 14:
            r0 = r3.__awaiter;
case 20:
            if(r0) { _fun6075_ip = 28; continue _fun6075 }
case 23:
            r0 = function(a0, a1, a2, a3) { // Environment: r1
                _fun6076: for(var _fun6076_ip = 0; ; ) switch(_fun6076_ip) {
case 0:
                    r2 = a2;
                    r1 = a0;
                    var _closure2_slot0 = r1;
                    r1 = a1;
                    var _closure2_slot1 = r1;
                    var _closure2_slot2 = r2;
                    r1 = a3;
                    var _closure2_slot3 = r1;
                    r1 = function(a0) { // Original name: adopt, environment: r0
                        _fun6077: for(var _fun6077_ip = 0; ; ) switch(_fun6077_ip) {
case 0:
                            r0 = a0;
                            var _closure3_slot0 = r0;
                            r3 = _closure2_slot2;
                            r3 = r0 instanceof r3;
                            if(r3) { _fun6077_ip = 52; continue _fun6077 }
case 23:
                            r3 = _closure2_slot2;
                            r2 = r3.prototype;
                            r2 = Object.create(r2, {constructor: {value: r3}});
                            r4 = function(a0) { // Environment: r1
                                r2 = _closure3_slot0;
                                r1 = a0;
                                r0 = undefined;
                                r1 = r1.bind(r0)(r2);
                                return r0;
                            };
                            r5 = r2;
                            r1 = new r5[r3](r4, r3);
                            r0 = r1 instanceof Object ? r1 : r2;
case 52:
                            return r0;
                        }
                    };
                    var _closure2_slot4 = r1;
                    if(r2) { _fun6076_ip = 57; continue _fun6076 }
case 42:
                    r1 = global;
                    r1 = r1.Promise;
                    _closure2_slot2 = r1;
                    r2 = r1;
case 57:
                    r1 = r2.prototype;
                    r1 = Object.create(r1, {constructor: {value: r2}});
                    r4 = function(a0, a1) { // Environment: r0
                        _fun6079: for(var _fun6079_ip = 0; ; ) switch(_fun6079_ip) {
case 0:
                            r1 = a0;
                            var _closure3_slot0 = r1;
                            r1 = a1;
                            var _closure3_slot1 = r1;
                            r1 = function(a0) { // Original name: fulfilled, environment: r0
                                _fun6080: for(var _fun6080_ip = 0; ; ) switch(_fun6080_ip) {
case 0:
                                    r0 = a0;
case 3: // try_start_0
                                    r2 = _closure3_slot4;
                                    r3 = _closure2_slot3;
                                    r1 = r3.next;
                                    r1 = r1.bind(r3)(r0);
                                    r0 = undefined;
                                    r0 = r2.bind(r0)(r1);
case 34: // try_end0
                                    _fun6080_ip = 52; continue _fun6080;
case 36: // catch_target0
                                    CatchBlockStart(arg_register=2);
                                    r1 = _closure3_slot1;
                                    r0 = undefined;
                                    r0 = r1.bind(r0)(r2);
case 52:
                                    r0 = undefined;
                                    return r0;
                                }
                            };
                            var _closure3_slot2 = r1;
                            r1 = function(a0) { // Original name: rejected, environment: r0
                                _fun6081: for(var _fun6081_ip = 0; ; ) switch(_fun6081_ip) {
case 0:
                                    r0 = a0;
case 3: // try_start_0
                                    r2 = _closure3_slot4;
                                    r3 = _closure2_slot3;
                                    r1 = r3.throw;
                                    r1 = r1.bind(r3)(r0);
                                    r0 = undefined;
                                    r0 = r2.bind(r0)(r1);
case 35: // try_end0
                                    _fun6081_ip = 53; continue _fun6081;
case 37: // catch_target0
                                    CatchBlockStart(arg_register=2);
                                    r1 = _closure3_slot1;
                                    r0 = undefined;
                                    r0 = r1.bind(r0)(r2);
case 53:
                                    r0 = undefined;
                                    return r0;
                                }
                            };
                            var _closure3_slot3 = r1;
                            r2 = function(a0) { // Original name: step, environment: r0
                                _fun6082: for(var _fun6082_ip = 0; ; ) switch(_fun6082_ip) {
case 0:
                                    r0 = a0;
                                    r1 = r0.done;
                                    if(r1) { _fun6082_ip = 54; continue _fun6082 }
case 11:
                                    r3 = _closure2_slot4;
                                    r2 = r0.value;
                                    r1 = undefined;
                                    r4 = r3.bind(r1)(r2);
                                    r3 = r4.then;
                                    r2 = _closure3_slot2;
                                    r1 = _closure3_slot3;
                                    r1 = r3.bind(r4)(r2, r1);
                                    _fun6082_ip = 73; continue _fun6082;
case 54:
                                    r2 = _closure3_slot0;
                                    r1 = r0.value;
                                    r0 = undefined;
                                    r0 = r2.bind(r0)(r1);
case 73:
                                    r0 = undefined;
                                    return r0;
                                }
                            };
                            var _closure3_slot4 = r2;
                            r5 = _closure2_slot3;
                            r4 = r5.apply;
                            r3 = _closure2_slot0;
                            r1 = _closure2_slot1;
                            if(r1) { _fun6079_ip = 70; continue _fun6079 }
case 66:
                            r1 = new Array(0);
case 70:
                            r1 = r4.bind(r5)(r3, r1);
                            _closure2_slot3 = r1;
                            r0 = r1.next;
                            r1 = r0.bind(r1)();
                            r0 = undefined;
                            r1 = r2.bind(r0)(r1);
                            return r0;
                        }
                    };
                    r5 = r1;
                    r0 = new r5[r2](r4, r3);
                    r0 = r0 instanceof Object ? r0 : r1;
                    return r0;
                }
            };
case 28:
            var _closure1_slot0 = r0;
            r0 = r3;
            if(!r0) { _fun6075_ip = 44; continue _fun6075 }
case 38:
            r0 = r3.__generator;
case 44:
            if(r0) { _fun6075_ip = 52; continue _fun6075 }
case 47:
            r0 = function(a0, a1) { // Environment: r1
                _fun6083: for(var _fun6083_ip = 0; ; ) switch(_fun6083_ip) {
case 0:
                    r1 = a0;
                    var _closure2_slot0 = r1;
                    r1 = a1;
                    var _closure2_slot1 = r1;
                    r4 = function(a0) { // Original name: verb, environment: r0
                        r1 = a0;
                        var _closure3_slot0 = r1;
                        r0 = function(a0) { // Environment: r0
                            r2 = _closure2_slot7;
                            r0 = _closure3_slot0;
                            r1 = new Array(2);
                            r1[0] = r0;
                            r0 = a0;
                            r1[1] = r0;
                            r0 = undefined;
                            r0 = r2.bind(r0)(r1);
                            return r0;
                        };
                        return r0;
                    };
                    r1 = function(a0) { // Original name: step, environment: r0
                        _fun6086: for(var _fun6086_ip = 0; ; ) switch(_fun6086_ip) {
case 0:
                            r6 = a0;
                            r0 = _closure2_slot3;
                            if(r0) { _fun6086_ip = 1022; continue _fun6086 }
case 16:
                            r0 = _closure2_slot6;
                            if(!r0) { _fun6086_ip = 43; continue _fun6086 }
case 23:
                            r0 = 0;
                            _closure2_slot6 = r0;
                            r1 = r6;
                            r1 = r1[r0];
                            if(!r1) { _fun6086_ip = 43; continue _fun6086 }
case 39:
                            _closure2_slot2 = r0;
case 43:
                            r0 = _closure2_slot2;
                            r1 = 0;
                            r3 = 1;
                            r10 = 2;
                            r9 = 6;
                            r8 = 3;
                            r7 = 7;
                            r4 = 5;
                            r5 = 4;
                            if(!r0) { _fun6086_ip = 960; continue _fun6086 }
case 76: // try_start_0 // try_start_7
                            var _closure2_slot3 = r3;
                            r0 = _closure2_slot4;
                            if(!r0) { _fun6086_ip = 246; continue _fun6086 }
case 90:
                            r0 = r6;
                            r0 = r0[r1];
                            r0 = r0 & r10;
                            if(r0) { _fun6086_ip = 178; continue _fun6086 }
case 104:
                            r0 = r6;
                            r0 = r0[r1];
                            r12 = _closure2_slot4;
                            if(r0) { _fun6086_ip = 125; continue _fun6086 }
case 118:
                            r0 = r12.next;
                            _fun6086_ip = 176; continue _fun6086;
case 125:
                            r12 = r12.throw;
                            r11 = r12;
                            if(r12) { _fun6086_ip = 173; continue _fun6086 }
case 137:
                            r12 = _closure2_slot4;
                            r12 = r12.return;
                            var _closure2_slot5 = r12;
                            if(!r12) { _fun6086_ip = 171; continue _fun6086 }
case 153:
                            r14 = _closure2_slot5;
                            r13 = r14.call;
                            r12 = _closure2_slot4;
                            r12 = r13.bind(r14)(r12);
case 171:
                            r11 = 0;
case 173:
                            r0 = r11;
case 176:
                            _fun6086_ip = 187; continue _fun6086;
case 178:
                            r11 = _closure2_slot4;
                            r0 = r11.return;
case 187:
                            _closure2_slot5 = r0;
                            if(!r0) { _fun6086_ip = 246; continue _fun6086 }
case 194:
                            r13 = _closure2_slot5;
                            r12 = r13.call;
                            r11 = _closure2_slot4;
                            r0 = r6;
                            r0 = r0[r3];
                            r0 = r12.bind(r13)(r11, r0);
                            _closure2_slot5 = r0;
                            r0 = r0.done;
                            if(r0) { _fun6086_ip = 246; continue _fun6086 }
case 232:
                            r0 = _closure2_slot5;
case 236: // try_end0 // try_end7
                            _closure2_slot5 = r1;
                            _closure2_slot3 = r1;
                            return r0;
case 246: // try_start_1 // try_start_8
                            var _closure2_slot4 = r1;
                            r0 = _closure2_slot5;
                            if(!r0) { _fun6086_ip = 292; continue _fun6086 }
case 257:
                            r0 = r6;
                            r0 = r0[r1];
                            r11 = r0 & r10;
                            r0 = new Array(2);
                            r0[0] = r11;
                            r11 = _closure2_slot5;
                            r11 = r11.value;
                            r0[1] = r11;
                            r6 = r0;
case 292:
                            r0 = r6;
                            r0 = r0[r1];
                            if(!(r1 !== r0)) { _fun6086_ip = 864; continue _fun6086 }
case 306:
                            if(!(r3 !== r0)) { _fun6086_ip = 864; continue _fun6086 }
case 313:
                            if(!(r5 !== r0)) { _fun6086_ip = 816; continue _fun6086 }
case 320:
                            if(!(r4 !== r0)) { _fun6086_ip = 768; continue _fun6086 }
case 327:
                            if(!(r7 !== r0)) { _fun6086_ip = 715; continue _fun6086 }
case 334:
                            r0 = _closure2_slot2;
                            r11 = r0.trys;
                            _closure2_slot5 = r11;
                            r11 = r11.length;
                            r11 = r11 > r1;
                            r0 = r11;
                            if(!r11) { _fun6086_ip = 380; continue _fun6086 }
case 363:
                            r12 = _closure2_slot5;
                            r11 = r12.length;
                            r11 = r11 - r3;
                            r0 = r12[r11];
case 380:
                            _closure2_slot5 = r0;
                            if(r0) { _fun6086_ip = 426; continue _fun6086 }
case 387:
                            r0 = r6;
                            r0 = r0[r1];
                            if(!(r0 !== r9)) { _fun6086_ip = 409; continue _fun6086 }
case 398:
                            r0 = r6;
                            r0 = r0[r1];
                            if(!(r0 === r10)) { _fun6086_ip = 426; continue _fun6086 }
case 409:
                            _closure2_slot2 = r1;
case 413: // try_end1 // try_end8
                            _closure2_slot5 = r1;
                            _closure2_slot3 = r1;
                            _fun6086_ip = 925; continue _fun6086;
case 426: // try_start_2 // try_start_9
                            r0 = r6;
                            r0 = r0[r1];
                            if(!(r0 === r8)) { _fun6086_ip = 488; continue _fun6086 }
case 437:
                            r0 = _closure2_slot5;
                            if(!r0) { _fun6086_ip = 693; continue _fun6086 }
case 447:
                            r0 = r6;
                            r11 = r0[r3];
                            r0 = _closure2_slot5;
                            r0 = r0[r1];
                            if(!(r11 > r0)) { _fun6086_ip = 488; continue _fun6086 }
case 466:
                            r0 = r6;
                            r11 = r0[r3];
                            r0 = _closure2_slot5;
                            r0 = r0[r8];
                            if(!(!(r11 < r0))) { _fun6086_ip = 693; continue _fun6086 }
case 488:
                            r0 = r6;
                            r0 = r0[r1];
                            if(!(r0 === r9)) { _fun6086_ip = 524; continue _fun6086 }
case 499:
                            r0 = _closure2_slot2;
                            r11 = r0.label;
                            r0 = _closure2_slot5;
                            r0 = r0[r3];
                            if(!(!(r11 < r0))) { _fun6086_ip = 663; continue _fun6086 }
case 524:
                            r0 = _closure2_slot5;
                            if(!r0) { _fun6086_ip = 553; continue _fun6086 }
case 531:
                            r0 = _closure2_slot2;
                            r11 = r0.label;
                            r0 = _closure2_slot5;
                            r0 = r0[r10];
                            if(!(!(r11 < r0))) { _fun6086_ip = 617; continue _fun6086 }
case 553:
                            r0 = _closure2_slot5;
                            r0 = r0[r10];
                            if(!r0) { _fun6086_ip = 584; continue _fun6086 }
case 564:
                            r0 = _closure2_slot2;
                            r11 = r0.ops;
                            r0 = r11.pop;
                            r0 = r0.bind(r11)();
case 584:
                            r0 = _closure2_slot2;
                            r11 = r0.trys;
                            r0 = r11.pop;
                            r0 = r0.bind(r11)();
case 604: // try_end2 // try_end9
                            _closure2_slot5 = r1;
                            _closure2_slot3 = r1;
                            _fun6086_ip = 925; continue _fun6086;
case 617: // try_start_3 // try_start_10
                            r11 = _closure2_slot2;
                            r0 = _closure2_slot5;
                            r0 = r0[r10];
                            r11['label'] = r0;
                            r0 = _closure2_slot2;
                            r12 = r0.ops;
                            r11 = r12.push;
                            r0 = r6;
                            r0 = r11.bind(r12)(r0);
                            _fun6086_ip = 871; continue _fun6086;
case 663:
                            r11 = _closure2_slot2;
                            r0 = _closure2_slot5;
                            r0 = r0[r3];
                            r11['label'] = r0;
                            r0 = r6;
                            _closure2_slot5 = r0;
                            _fun6086_ip = 871; continue _fun6086;
case 693:
                            r11 = _closure2_slot2;
                            r0 = r6;
                            r0 = r0[r3];
                            r11['label'] = r0;
                            _fun6086_ip = 871; continue _fun6086;
case 715:
                            r0 = _closure2_slot2;
                            r11 = r0.ops;
                            r0 = r11.pop;
                            r6 = r0.bind(r11)();
                            r0 = _closure2_slot2;
                            r11 = r0.trys;
                            r0 = r11.pop;
                            r0 = r0.bind(r11)();
case 755: // try_end3 // try_end10
                            _closure2_slot5 = r1;
                            _closure2_slot3 = r1;
                            _fun6086_ip = 925; continue _fun6086;
case 768: // try_start_4 // try_start_11
                            r11 = _closure2_slot2;
                            r0 = r11.label;
                            r0 = r0 + 1;
                            r11['label'] = r0;
                            r0 = r6;
                            r0 = r0[r3];
                            _closure2_slot4 = r0;
                            r6 = [0];
case 806: // try_end4 // try_end11
                            _closure2_slot5 = r1;
                            _closure2_slot3 = r1;
                            _fun6086_ip = 925; continue _fun6086;
case 816: // try_start_5 // try_start_12
