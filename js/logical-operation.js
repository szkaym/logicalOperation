// 論理演算の実装
var logicalOperation = (function logicalOperationClosure() {
    function logicalOperation() {}
    logicalOperation.prototype = {
        /**
         * logical operation of AND
         * 
         * @argument params {Array} specific to array
         */
        AND: function and_(params) {
            var evaluate = true;
            params.forEach(function(val, index) {
                if(!val) {
                    evaluate = false;
                }
            });
            return evaluate;
        },

        /**
         * logical operation of OR
         * 
         * @argument params {Array} specific to array
         */
        OR: function or_(params) {
            var evaluate = false;
            params.forEach(function(val, key) {
                if(val) {
                    evaluate = true;
                }
            });
            return evaluate;
        },


        /**
         * logical operation of NAND
         * 
         * @argument params {Array} specific to array
         */
        NAND: function nand_(params) {
            return !this.AND(params);
        },

        /**
         * logical operation of NOR
         * 
         * @argument params {Array} specific to array
         */
        NOR: function nor_(params) {
            return !this.OR(params);
        },

        /**
         * logical operation of XOR
         * 
         * @argument params {Array} specific to array
         */
        XOR: function xor_(params) {
            if (this.AND(params) || this.NOR(params)) {
                return false;
            }
            return true;
        },

        /**
         * logical operation of XNOR
         * 
         * @argument params {Array} specific to array
         */
        XNOR: function xnor_(params) {
            return !this.XOR(params);
        },

        /**
         * logical operation of XAND ()
         * 
         * @argument params {Array} specific to array
         */
        XAND: function xand_(params) {
            return this.XNOR(params);
        },


    };
    return logicalOperation;
})();


// evaluteList code
var evaluteList = [];
evaluteList[0] = [0, 0, 0, 0, 0];
evaluteList[1] = [1, 0, 0, 0, 0];
evaluteList[2] = [0, 1, 0, 0, 0];
evaluteList[3] = [1, 1, 1, 1, 1];

var logicalOperation_ = new logicalOperation();

console.group('logical opelation [AND]');
evaluteList.forEach(function(v) {
    console.log(v, logicalOperation_.AND(v));
});
console.groupEnd();

console.group('logical opelation [OR]');
evaluteList.forEach(function(v) {
    console.log(v, logicalOperation_.OR(v));
});
console.groupEnd();

console.group('logical opelation [NAND]');
evaluteList.forEach(function(v) {
    console.log(v, logicalOperation_.NAND(v));
});
console.groupEnd();

console.group('logical opelation [NOR]');
evaluteList.forEach(function(v) {
    console.log(v, logicalOperation_.NOR(v));
});
console.groupEnd();

console.group('logical opelation [XOR]');
evaluteList.forEach(function(v) {
    console.log(v, logicalOperation_.XOR(v));
});
console.groupEnd();

console.group('logical opelation [XNOR]');
evaluteList.forEach(function(v) {
    console.log(v, logicalOperation_.XNOR(v));
});
console.groupEnd();

console.group('logical opelation [XAND]');
evaluteList.forEach(function(v) {
    console.log(v, logicalOperation_.XAND(v));
});
console.groupEnd();