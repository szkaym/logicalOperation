// implement logical operation
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
