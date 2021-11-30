Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function handleCollisionDetected(data) {
    var element1Rect = data.element1Rect, element2Rect = data.element2Rect;
    if (!element1Rect || !element2Rect)
        return;
    var isCollision = !(element1Rect.top + element1Rect.height < element2Rect.top ||
        element1Rect.top > element2Rect.top + element2Rect.height ||
        element1Rect.left + element1Rect.width < element2Rect.left ||
        element1Rect.left > element2Rect.left + element2Rect.width);
    return isCollision;
}

var CollisionWrapper = function (_a, ref) {
    var children = _a.children;
    var divRef = react.useRef(null);
    react.useImperativeHandle(ref, function () { return ({
        getBoundingClientRect: function () {
            return divRef.current.getBoundingClientRect();
        },
    }); });
    return jsxRuntime.jsx("div", __assign({ ref: divRef }, { children: children }), void 0);
};
var index = react.forwardRef(CollisionWrapper);

exports["default"] = index;
exports.handleCollisionDetected = handleCollisionDetected;
//# sourceMappingURL=react-collision-detection.cjs.production.js.map
