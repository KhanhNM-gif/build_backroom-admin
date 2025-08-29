(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./node_modules/luxon/build/cjs-browser/luxon.js":
/*!*******************************************************!*\
  !*** ./node_modules/luxon/build/cjs-browser/luxon.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o) {
  var i = 0;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  i = o[Symbol.iterator]();
  return i.next.bind(i);
}

// these aren't really private, but nor are they really useful to document

/**
 * @private
 */
var LuxonError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(LuxonError, _Error);

  function LuxonError() {
    return _Error.apply(this, arguments) || this;
  }

  return LuxonError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * @private
 */


var InvalidDateTimeError = /*#__PURE__*/function (_LuxonError) {
  _inheritsLoose(InvalidDateTimeError, _LuxonError);

  function InvalidDateTimeError(reason) {
    return _LuxonError.call(this, "Invalid DateTime: " + reason.toMessage()) || this;
  }

  return InvalidDateTimeError;
}(LuxonError);
/**
 * @private
 */

var InvalidIntervalError = /*#__PURE__*/function (_LuxonError2) {
  _inheritsLoose(InvalidIntervalError, _LuxonError2);

  function InvalidIntervalError(reason) {
    return _LuxonError2.call(this, "Invalid Interval: " + reason.toMessage()) || this;
  }

  return InvalidIntervalError;
}(LuxonError);
/**
 * @private
 */

var InvalidDurationError = /*#__PURE__*/function (_LuxonError3) {
  _inheritsLoose(InvalidDurationError, _LuxonError3);

  function InvalidDurationError(reason) {
    return _LuxonError3.call(this, "Invalid Duration: " + reason.toMessage()) || this;
  }

  return InvalidDurationError;
}(LuxonError);
/**
 * @private
 */

var ConflictingSpecificationError = /*#__PURE__*/function (_LuxonError4) {
  _inheritsLoose(ConflictingSpecificationError, _LuxonError4);

  function ConflictingSpecificationError() {
    return _LuxonError4.apply(this, arguments) || this;
  }

  return ConflictingSpecificationError;
}(LuxonError);
/**
 * @private
 */

var InvalidUnitError = /*#__PURE__*/function (_LuxonError5) {
  _inheritsLoose(InvalidUnitError, _LuxonError5);

  function InvalidUnitError(unit) {
    return _LuxonError5.call(this, "Invalid unit " + unit) || this;
  }

  return InvalidUnitError;
}(LuxonError);
/**
 * @private
 */

var InvalidArgumentError = /*#__PURE__*/function (_LuxonError6) {
  _inheritsLoose(InvalidArgumentError, _LuxonError6);

  function InvalidArgumentError() {
    return _LuxonError6.apply(this, arguments) || this;
  }

  return InvalidArgumentError;
}(LuxonError);
/**
 * @private
 */

var ZoneIsAbstractError = /*#__PURE__*/function (_LuxonError7) {
  _inheritsLoose(ZoneIsAbstractError, _LuxonError7);

  function ZoneIsAbstractError() {
    return _LuxonError7.call(this, "Zone is an abstract class") || this;
  }

  return ZoneIsAbstractError;
}(LuxonError);

/**
 * @private
 */
var n = "numeric",
    s = "short",
    l = "long";
var DATE_SHORT = {
  year: n,
  month: n,
  day: n
};
var DATE_MED = {
  year: n,
  month: s,
  day: n
};
var DATE_FULL = {
  year: n,
  month: l,
  day: n
};
var DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l
};
var TIME_SIMPLE = {
  hour: n,
  minute: n
};
var TIME_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n
};
var TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};
var TIME_24_SIMPLE = {
  hour: n,
  minute: n,
  hour12: false
};
/**
 * {@link toLocaleString}; format like '09:30:23', always 24-hour.
 */

var TIME_24_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
  hour12: false
};
/**
 * {@link toLocaleString}; format like '09:30:23 EDT', always 24-hour.
 */

var TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hour12: false,
  timeZoneName: s
};
/**
 * {@link toLocaleString}; format like '09:30:23 Eastern Daylight Time', always 24-hour.
 */

var TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hour12: false,
  timeZoneName: l
};
/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
 */

var DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n
};
/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
 */

var DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n
};
var DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
  hour: n,
  minute: n
};
var DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s
};
var DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  timeZoneName: l
};
var DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};

/*
  This is just a junk drawer, containing anything used across multiple classes.
  Because Luxon is small(ish), this should stay small and we won't worry about splitting
  it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
*/
/**
 * @private
 */
// TYPES

function isUndefined(o) {
  return typeof o === "undefined";
}
function isNumber(o) {
  return typeof o === "number";
}
function isInteger(o) {
  return typeof o === "number" && o % 1 === 0;
}
function isString(o) {
  return typeof o === "string";
}
function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
} // CAPABILITIES

function hasIntl() {
  try {
    return typeof Intl !== "undefined" && Intl.DateTimeFormat;
  } catch (e) {
    return false;
  }
}
function hasFormatToParts() {
  return !isUndefined(Intl.DateTimeFormat.prototype.formatToParts);
}
function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
} // OBJECTS AND ARRAYS

function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}
function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return undefined;
  }

  return arr.reduce(function (best, next) {
    var pair = [by(next), next];

    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}
function pick(obj, keys) {
  return keys.reduce(function (a, k) {
    a[k] = obj[k];
    return a;
  }, {});
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
} // NUMBERS AND STRINGS

function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
} // x % n but takes the sign of n instead of x

function floorMod(x, n) {
  return x - n * Math.floor(x / n);
}
function padStart(input, n) {
  if (n === void 0) {
    n = 2;
  }

  if (input.toString().length < n) {
    return ("0".repeat(n) + input).slice(-n);
  } else {
    return input.toString();
  }
}
function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseInt(string, 10);
  }
}
function parseMillis(fraction) {
  // Return undefined (instead of 0) in these cases, where fraction is not set
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return undefined;
  } else {
    var f = parseFloat("0." + fraction) * 1000;
    return Math.floor(f);
  }
}
function roundTo(number, digits, towardZero) {
  if (towardZero === void 0) {
    towardZero = false;
  }

  var factor = Math.pow(10, digits),
      rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
} // DATE BASICS

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
function daysInMonth(year, month) {
  var modMonth = floorMod(month - 1, 12) + 1,
      modYear = year + (month - modMonth) / 12;

  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
} // covert a calendar object to a local timestamp (epoch, but with the offset baked in)

function objToLocalTS(obj) {
  var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond); // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that

  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }

  return +d;
}
function weeksInWeekYear(weekYear) {
  var p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7,
      last = weekYear - 1,
      p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}
function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else return year > 60 ? 1900 + year : 2000 + year;
} // PARSING

function parseZoneInfo(ts, offsetFormat, locale, timeZone) {
  if (timeZone === void 0) {
    timeZone = null;
  }

  var date = new Date(ts),
      intlOpts = {
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };

  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }

  var modified = Object.assign({
    timeZoneName: offsetFormat
  }, intlOpts),
      intl = hasIntl();

  if (intl && hasFormatToParts()) {
    var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function (m) {
      return m.type.toLowerCase() === "timezonename";
    });
    return parsed ? parsed.value : null;
  } else if (intl) {
    // this probably doesn't work for all locales
    var without = new Intl.DateTimeFormat(locale, intlOpts).format(date),
        included = new Intl.DateTimeFormat(locale, modified).format(date),
        diffed = included.substring(without.length),
        trimmed = diffed.replace(/^[, \u200e]+/, "");
    return trimmed;
  } else {
    return null;
  }
} // signedOffset('-5', '30') -> -330

function signedOffset(offHourStr, offMinuteStr) {
  var offHour = parseInt(offHourStr, 10); // don't || this because we want to preserve -0

  if (Number.isNaN(offHour)) {
    offHour = 0;
  }

  var offMin = parseInt(offMinuteStr, 10) || 0,
      offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
} // COERCION

function asNumber(value) {
  var numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue)) throw new InvalidArgumentError("Invalid unit value " + value);
  return numericValue;
}
function normalizeObject(obj, normalizer, nonUnitKeys) {
  var normalized = {};

  for (var u in obj) {
    if (hasOwnProperty(obj, u)) {
      if (nonUnitKeys.indexOf(u) >= 0) continue;
      var v = obj[u];
      if (v === undefined || v === null) continue;
      normalized[normalizer(u)] = asNumber(v);
    }
  }

  return normalized;
}
function formatOffset(offset, format) {
  var hours = Math.trunc(offset / 60),
      minutes = Math.abs(offset % 60),
      sign = hours >= 0 && !Object.is(hours, -0) ? "+" : "-",
      base = "" + sign + Math.abs(hours);

  switch (format) {
    case "short":
      return "" + sign + padStart(Math.abs(hours), 2) + ":" + padStart(minutes, 2);

    case "narrow":
      return minutes > 0 ? base + ":" + minutes : base;

    case "techie":
      return "" + sign + padStart(Math.abs(hours), 2) + padStart(minutes, 2);

    default:
      throw new RangeError("Value format " + format + " is out of range for property format");
  }
}
function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}
var ianaRegex = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;

function stringify(obj) {
  return JSON.stringify(obj, Object.keys(obj).sort());
}
/**
 * @private
 */


var monthsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function months(length) {
  switch (length) {
    case "narrow":
      return monthsNarrow;

    case "short":
      return monthsShort;

    case "long":
      return monthsLong;

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

    default:
      return null;
  }
}
var weekdaysLong = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
function weekdays(length) {
  switch (length) {
    case "narrow":
      return weekdaysNarrow;

    case "short":
      return weekdaysShort;

    case "long":
      return weekdaysLong;

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];

    default:
      return null;
  }
}
var meridiems = ["AM", "PM"];
var erasLong = ["Before Christ", "Anno Domini"];
var erasShort = ["BC", "AD"];
var erasNarrow = ["B", "A"];
function eras(length) {
  switch (length) {
    case "narrow":
      return erasNarrow;

    case "short":
      return erasShort;

    case "long":
      return erasLong;

    default:
      return null;
  }
}
function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}
function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}
function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}
function formatRelativeTime(unit, count, numeric, narrow) {
  if (numeric === void 0) {
    numeric = "always";
  }

  if (narrow === void 0) {
    narrow = false;
  }

  var units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  };
  var lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;

  if (numeric === "auto" && lastable) {
    var isDay = unit === "days";

    switch (count) {
      case 1:
        return isDay ? "tomorrow" : "next " + units[unit][0];

      case -1:
        return isDay ? "yesterday" : "last " + units[unit][0];

      case 0:
        return isDay ? "today" : "this " + units[unit][0];

    }
  }

  var isInPast = Object.is(count, -0) || count < 0,
      fmtValue = Math.abs(count),
      singular = fmtValue === 1,
      lilUnits = units[unit],
      fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
  return isInPast ? fmtValue + " " + fmtUnit + " ago" : "in " + fmtValue + " " + fmtUnit;
}
function formatString(knownFormat) {
  // these all have the offsets removed because we don't have access to them
  // without all the intl stuff this is backfilling
  var filtered = pick(knownFormat, ["weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hour12"]),
      key = stringify(filtered),
      dateTimeHuge = "EEEE, LLLL d, yyyy, h:mm a";

  switch (key) {
    case stringify(DATE_SHORT):
      return "M/d/yyyy";

    case stringify(DATE_MED):
      return "LLL d, yyyy";

    case stringify(DATE_FULL):
      return "LLLL d, yyyy";

    case stringify(DATE_HUGE):
      return "EEEE, LLLL d, yyyy";

    case stringify(TIME_SIMPLE):
      return "h:mm a";

    case stringify(TIME_WITH_SECONDS):
      return "h:mm:ss a";

    case stringify(TIME_WITH_SHORT_OFFSET):
      return "h:mm a";

    case stringify(TIME_WITH_LONG_OFFSET):
      return "h:mm a";

    case stringify(TIME_24_SIMPLE):
      return "HH:mm";

    case stringify(TIME_24_WITH_SECONDS):
      return "HH:mm:ss";

    case stringify(TIME_24_WITH_SHORT_OFFSET):
      return "HH:mm";

    case stringify(TIME_24_WITH_LONG_OFFSET):
      return "HH:mm";

    case stringify(DATETIME_SHORT):
      return "M/d/yyyy, h:mm a";

    case stringify(DATETIME_MED):
      return "LLL d, yyyy, h:mm a";

    case stringify(DATETIME_FULL):
      return "LLLL d, yyyy, h:mm a";

    case stringify(DATETIME_HUGE):
      return dateTimeHuge;

    case stringify(DATETIME_SHORT_WITH_SECONDS):
      return "M/d/yyyy, h:mm:ss a";

    case stringify(DATETIME_MED_WITH_SECONDS):
      return "LLL d, yyyy, h:mm:ss a";

    case stringify(DATETIME_MED_WITH_WEEKDAY):
      return "EEE, d LLL yyyy, h:mm a";

    case stringify(DATETIME_FULL_WITH_SECONDS):
      return "LLLL d, yyyy, h:mm:ss a";

    case stringify(DATETIME_HUGE_WITH_SECONDS):
      return "EEEE, LLLL d, yyyy, h:mm:ss a";

    default:
      return dateTimeHuge;
  }
}

function stringifyTokens(splits, tokenToString) {
  var s = "";

  for (var _iterator = _createForOfIteratorHelperLoose(splits), _step; !(_step = _iterator()).done;) {
    var token = _step.value;

    if (token.literal) {
      s += token.val;
    } else {
      s += tokenToString(token.val);
    }
  }

  return s;
}

var _macroTokenToFormatOpts = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS
};
/**
 * @private
 */

var Formatter = /*#__PURE__*/function () {
  Formatter.create = function create(locale, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return new Formatter(locale, opts);
  };

  Formatter.parseFormat = function parseFormat(fmt) {
    var current = null,
        currentFull = "",
        bracketed = false;
    var splits = [];

    for (var i = 0; i < fmt.length; i++) {
      var c = fmt.charAt(i);

      if (c === "'") {
        if (currentFull.length > 0) {
          splits.push({
            literal: bracketed,
            val: currentFull
          });
        }

        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({
            literal: false,
            val: currentFull
          });
        }

        currentFull = c;
        current = c;
      }
    }

    if (currentFull.length > 0) {
      splits.push({
        literal: bracketed,
        val: currentFull
      });
    }

    return splits;
  };

  Formatter.macroTokenToFormatOpts = function macroTokenToFormatOpts(token) {
    return _macroTokenToFormatOpts[token];
  };

  function Formatter(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }

  var _proto = Formatter.prototype;

  _proto.formatWithSystemDefault = function formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }

    var df = this.systemLoc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.format();
  };

  _proto.formatDateTime = function formatDateTime(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.format();
  };

  _proto.formatDateTimeParts = function formatDateTimeParts(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.formatToParts();
  };

  _proto.resolvedOptions = function resolvedOptions(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.resolvedOptions();
  };

  _proto.num = function num(n, p) {
    if (p === void 0) {
      p = 0;
    }

    // we get some perf out of doing this here, annoyingly
    if (this.opts.forceSimple) {
      return padStart(n, p);
    }

    var opts = Object.assign({}, this.opts);

    if (p > 0) {
      opts.padTo = p;
    }

    return this.loc.numberFormatter(opts).format(n);
  };

  _proto.formatDateTimeFromString = function formatDateTimeFromString(dt, fmt) {
    var _this = this;

    var knownEnglish = this.loc.listingMode() === "en",
        useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory" && hasFormatToParts(),
        string = function string(opts, extract) {
      return _this.loc.extract(dt, opts, extract);
    },
        formatOffset = function formatOffset(opts) {
      if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
        return "Z";
      }

      return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
    },
        meridiem = function meridiem() {
      return knownEnglish ? meridiemForDateTime(dt) : string({
        hour: "numeric",
        hour12: true
      }, "dayperiod");
    },
        month = function month(length, standalone) {
      return knownEnglish ? monthForDateTime(dt, length) : string(standalone ? {
        month: length
      } : {
        month: length,
        day: "numeric"
      }, "month");
    },
        weekday = function weekday(length, standalone) {
      return knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? {
        weekday: length
      } : {
        weekday: length,
        month: "long",
        day: "numeric"
      }, "weekday");
    },
        maybeMacro = function maybeMacro(token) {
      var formatOpts = Formatter.macroTokenToFormatOpts(token);

      if (formatOpts) {
        return _this.formatWithSystemDefault(dt, formatOpts);
      } else {
        return token;
      }
    },
        era = function era(length) {
      return knownEnglish ? eraForDateTime(dt, length) : string({
        era: length
      }, "era");
    },
        tokenToString = function tokenToString(token) {
      // Where possible: http://cldr.unicode.org/translation/date-time#TOC-Stand-Alone-vs.-Format-Styles
      switch (token) {
        // ms
        case "S":
          return _this.num(dt.millisecond);

        case "u": // falls through

        case "SSS":
          return _this.num(dt.millisecond, 3);
        // seconds

        case "s":
          return _this.num(dt.second);

        case "ss":
          return _this.num(dt.second, 2);
        // minutes

        case "m":
          return _this.num(dt.minute);

        case "mm":
          return _this.num(dt.minute, 2);
        // hours

        case "h":
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);

        case "hh":
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);

        case "H":
          return _this.num(dt.hour);

        case "HH":
          return _this.num(dt.hour, 2);
        // offset

        case "Z":
          // like +6
          return formatOffset({
            format: "narrow",
            allowZ: _this.opts.allowZ
          });

        case "ZZ":
          // like +06:00
          return formatOffset({
            format: "short",
            allowZ: _this.opts.allowZ
          });

        case "ZZZ":
          // like +0600
          return formatOffset({
            format: "techie",
            allowZ: _this.opts.allowZ
          });

        case "ZZZZ":
          // like EST
          console.log(dt.zone);
          return dt.zone.offsetName(dt.ts, {
            format: "short",
            locale: _this.loc.locale
          });

        case "ZZZZZ":
          // like Eastern Standard Time
          return dt.zone.offsetName(dt.ts, {
            format: "long",
            locale: _this.loc.locale
          });
        // zone

        case "z":
          // like America/New_York
          return dt.zoneName;
        // meridiems

        case "a":
          return meridiem();
        // dates

        case "d":
          return useDateTimeFormatter ? string({
            day: "numeric"
          }, "day") : _this.num(dt.day);

        case "dd":
          return useDateTimeFormatter ? string({
            day: "2-digit"
          }, "day") : _this.num(dt.day, 2);
        // weekdays - standalone

        case "c":
          // like 1
          return _this.num(dt.weekday);

        case "ccc":
          // like 'Tues'
          return weekday("short", true);

        case "cccc":
          // like 'Tuesday'
          return weekday("long", true);

        case "ccccc":
          // like 'T'
          return weekday("narrow", true);
        // weekdays - format

        case "E":
          // like 1
          return _this.num(dt.weekday);

        case "EEE":
          // like 'Tues'
          return weekday("short", false);

        case "EEEE":
          // like 'Tuesday'
          return weekday("long", false);

        case "EEEEE":
          // like 'T'
          return weekday("narrow", false);
        // months - standalone

        case "L":
          // like 1
          return useDateTimeFormatter ? string({
            month: "numeric",
            day: "numeric"
          }, "month") : _this.num(dt.month);

        case "LL":
          // like 01, doesn't seem to work
          return useDateTimeFormatter ? string({
            month: "2-digit",
            day: "numeric"
          }, "month") : _this.num(dt.month, 2);

        case "LLL":
          // like Jan
          return month("short", true);

        case "LLLL":
          // like January
          return month("long", true);

        case "LLLLL":
          // like J
          return month("narrow", true);
        // months - format

        case "M":
          // like 1
          return useDateTimeFormatter ? string({
            month: "numeric"
          }, "month") : _this.num(dt.month);

        case "MM":
          // like 01
          return useDateTimeFormatter ? string({
            month: "2-digit"
          }, "month") : _this.num(dt.month, 2);

        case "MMM":
          // like Jan
          return month("short", false);

        case "MMMM":
          // like January
          return month("long", false);

        case "MMMMM":
          // like J
          return month("narrow", false);
        // years

        case "y":
          // like 2014
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year);

        case "yy":
          // like 14
          return useDateTimeFormatter ? string({
            year: "2-digit"
          }, "year") : _this.num(dt.year.toString().slice(-2), 2);

        case "yyyy":
          // like 0012
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year, 4);

        case "yyyyyy":
          // like 000012
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year, 6);
        // eras

        case "G":
          // like AD
          return era("short");

        case "GG":
          // like Anno Domini
          return era("long");

        case "GGGGG":
          return era("narrow");

        case "kk":
          return _this.num(dt.weekYear.toString().slice(-2), 2);

        case "kkkk":
          return _this.num(dt.weekYear, 4);

        case "W":
          return _this.num(dt.weekNumber);

        case "WW":
          return _this.num(dt.weekNumber, 2);

        case "o":
          return _this.num(dt.ordinal);

        case "ooo":
          return _this.num(dt.ordinal, 3);

        case "q":
          // like 1
          return _this.num(dt.quarter);

        case "qq":
          // like 01
          return _this.num(dt.quarter, 2);

        case "X":
          return _this.num(Math.floor(dt.ts / 1000));

        case "x":
          return _this.num(dt.ts);

        default:
          return maybeMacro(token);
      }
    };

    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  };

  _proto.formatDurationFromString = function formatDurationFromString(dur, fmt) {
    var _this2 = this;

    var tokenToField = function tokenToField(token) {
      switch (token[0]) {
        case "S":
          return "millisecond";

        case "s":
          return "second";

        case "m":
          return "minute";

        case "h":
          return "hour";

        case "d":
          return "day";

        case "M":
          return "month";

        case "y":
          return "year";

        default:
          return null;
      }
    },
        tokenToString = function tokenToString(lildur) {
      return function (token) {
        var mapped = tokenToField(token);

        if (mapped) {
          return _this2.num(lildur.get(mapped), token.length);
        } else {
          return token;
        }
      };
    },
        tokens = Formatter.parseFormat(fmt),
        realTokens = tokens.reduce(function (found, _ref) {
      var literal = _ref.literal,
          val = _ref.val;
      return literal ? found : found.concat(val);
    }, []),
        collapsed = dur.shiftTo.apply(dur, realTokens.map(tokenToField).filter(function (t) {
      return t;
    }));

    return stringifyTokens(tokens, tokenToString(collapsed));
  };

  return Formatter;
}();

var Invalid = /*#__PURE__*/function () {
  function Invalid(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }

  var _proto = Invalid.prototype;

  _proto.toMessage = function toMessage() {
    if (this.explanation) {
      return this.reason + ": " + this.explanation;
    } else {
      return this.reason;
    }
  };

  return Invalid;
}();

/**
 * @interface
 */

var Zone = /*#__PURE__*/function () {
  function Zone() {}

  var _proto = Zone.prototype;

  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  _proto.offsetName = function offsetName(ts, opts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  ;

  _proto.formatOffset = function formatOffset(ts, format) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  ;

  _proto.offset = function offset(ts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(otherZone) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  ;

  _createClass(Zone, [{
    key: "type",

    /**
     * The type of zone
     * @abstract
     * @type {string}
     */
    get: function get() {
      throw new ZoneIsAbstractError();
    }
    /**
     * The name of this zone.
     * @abstract
     * @type {string}
     */

  }, {
    key: "name",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year.
     * @abstract
     * @type {boolean}
     */

  }, {
    key: "universal",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }, {
    key: "isValid",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }]);

  return Zone;
}();

var singleton = null;
/**
 * Represents the local zone for this Javascript environment.
 * @implements {Zone}
 */

var LocalZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(LocalZone, _Zone);

  function LocalZone() {
    return _Zone.apply(this, arguments) || this;
  }

  var _proto = LocalZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
        locale = _ref.locale;
    return parseZoneInfo(ts, format, locale);
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  ;

  _proto.offset = function offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "local";
  }
  /** @override **/
  ;

  _createClass(LocalZone, [{
    key: "type",

    /** @override **/
    get: function get() {
      return "local";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      if (hasIntl()) {
        return new Intl.DateTimeFormat().resolvedOptions().timeZone;
      } else return "local";
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }], [{
    key: "instance",

    /**
     * Get a singleton instance of the local zone
     * @return {LocalZone}
     */
    get: function get() {
      if (singleton === null) {
        singleton = new LocalZone();
      }

      return singleton;
    }
  }]);

  return LocalZone;
}(Zone);

var matchingRegex = RegExp("^" + ianaRegex.source + "$");
var dtfCache = {};

function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }

  return dtfCache[zone];
}

var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};

function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, ""),
      parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted),
      fMonth = parsed[1],
      fDay = parsed[2],
      fYear = parsed[3],
      fHour = parsed[4],
      fMinute = parsed[5],
      fSecond = parsed[6];
  return [fYear, fMonth, fDay, fHour, fMinute, fSecond];
}

function partsOffset(dtf, date) {
  var formatted = dtf.formatToParts(date),
      filled = [];

  for (var i = 0; i < formatted.length; i++) {
    var _formatted$i = formatted[i],
        type = _formatted$i.type,
        value = _formatted$i.value,
        pos = typeToPos[type];

    if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }

  return filled;
}

var ianaZoneCache = {};
/**
 * A zone identified by an IANA identifier, like America/New_York
 * @implements {Zone}
 */

var IANAZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(IANAZone, _Zone);

  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  IANAZone.create = function create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }

    return ianaZoneCache[name];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  ;

  IANAZone.resetCache = function resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Fantasia/Castle") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @return {boolean}
   */
  ;

  IANAZone.isValidSpecifier = function isValidSpecifier(s) {
    return !!(s && s.match(matchingRegex));
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  ;

  IANAZone.isValidZone = function isValidZone(zone) {
    try {
      new Intl.DateTimeFormat("en-US", {
        timeZone: zone
      }).format();
      return true;
    } catch (e) {
      return false;
    }
  } // Etc/GMT+8 -> -480

  /** @ignore */
  ;

  IANAZone.parseGMTOffset = function parseGMTOffset(specifier) {
    if (specifier) {
      var match = specifier.match(/^Etc\/GMT([+-]\d{1,2})$/i);

      if (match) {
        return -60 * parseInt(match[1]);
      }
    }

    return null;
  };

  function IANAZone(name) {
    var _this;

    _this = _Zone.call(this) || this;
    /** @private **/

    _this.zoneName = name;
    /** @private **/

    _this.valid = IANAZone.isValidZone(name);
    return _this;
  }
  /** @override **/


  var _proto = IANAZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
        locale = _ref.locale;
    return parseZoneInfo(ts, format, locale, this.name);
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  ;

  _proto.offset = function offset(ts) {
    var date = new Date(ts),
        dtf = makeDTF(this.name),
        _ref2 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date),
        year = _ref2[0],
        month = _ref2[1],
        day = _ref2[2],
        hour = _ref2[3],
        minute = _ref2[4],
        second = _ref2[5],
        adjustedHour = hour === 24 ? 0 : hour;

    var asUTC = objToLocalTS({
      year: year,
      month: month,
      day: day,
      hour: adjustedHour,
      minute: minute,
      second: second,
      millisecond: 0
    });
    var asTS = +date;
    var over = asTS % 1000;
    asTS -= over >= 0 ? over : 1000 + over;
    return (asUTC - asTS) / (60 * 1000);
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "iana" && otherZone.name === this.name;
  }
  /** @override **/
  ;

  _createClass(IANAZone, [{
    key: "type",
    get: function get() {
      return "iana";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return this.valid;
    }
  }]);

  return IANAZone;
}(Zone);

var singleton$1 = null;
/**
 * A zone with a fixed offset (meaning no DST)
 * @implements {Zone}
 */

var FixedOffsetZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(FixedOffsetZone, _Zone);

  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  FixedOffsetZone.instance = function instance(offset) {
    return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  ;

  FixedOffsetZone.parseSpecifier = function parseSpecifier(s) {
    if (s) {
      var r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);

      if (r) {
        return new FixedOffsetZone(signedOffset(r[1], r[2]));
      }
    }

    return null;
  };

  _createClass(FixedOffsetZone, null, [{
    key: "utcInstance",

    /**
     * Get a singleton instance of UTC
     * @return {FixedOffsetZone}
     */
    get: function get() {
      if (singleton$1 === null) {
        singleton$1 = new FixedOffsetZone(0);
      }

      return singleton$1;
    }
  }]);

  function FixedOffsetZone(offset) {
    var _this;

    _this = _Zone.call(this) || this;
    /** @private **/

    _this.fixed = offset;
    return _this;
  }
  /** @override **/


  var _proto = FixedOffsetZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName() {
    return this.name;
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.fixed, format);
  }
  /** @override **/
  ;

  /** @override **/
  _proto.offset = function offset() {
    return this.fixed;
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  }
  /** @override **/
  ;

  _createClass(FixedOffsetZone, [{
    key: "type",
    get: function get() {
      return "fixed";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.fixed === 0 ? "UTC" : "UTC" + formatOffset(this.fixed, "narrow");
    }
  }, {
    key: "universal",
    get: function get() {
      return true;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }]);

  return FixedOffsetZone;
}(Zone);

/**
 * A zone that failed to parse. You should never need to instantiate this.
 * @implements {Zone}
 */

var InvalidZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(InvalidZone, _Zone);

  function InvalidZone(zoneName) {
    var _this;

    _this = _Zone.call(this) || this;
    /**  @private */

    _this.zoneName = zoneName;
    return _this;
  }
  /** @override **/


  var _proto = InvalidZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName() {
    return null;
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset() {
    return "";
  }
  /** @override **/
  ;

  _proto.offset = function offset() {
    return NaN;
  }
  /** @override **/
  ;

  _proto.equals = function equals() {
    return false;
  }
  /** @override **/
  ;

  _createClass(InvalidZone, [{
    key: "type",
    get: function get() {
      return "invalid";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return false;
    }
  }]);

  return InvalidZone;
}(Zone);

/**
 * @private
 */
function normalizeZone(input, defaultZone) {
  var offset;

  if (isUndefined(input) || input === null) {
    return defaultZone;
  } else if (input instanceof Zone) {
    return input;
  } else if (isString(input)) {
    var lowered = input.toLowerCase();
    if (lowered === "local") return defaultZone;else if (lowered === "utc" || lowered === "gmt") return FixedOffsetZone.utcInstance;else if ((offset = IANAZone.parseGMTOffset(input)) != null) {
      // handle Etc/GMT-4, which V8 chokes on
      return FixedOffsetZone.instance(offset);
    } else if (IANAZone.isValidSpecifier(lowered)) return IANAZone.create(input);else return FixedOffsetZone.parseSpecifier(lowered) || new InvalidZone(input);
  } else if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
    // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
  } else {
    return new InvalidZone(input);
  }
}

var now = function now() {
  return Date.now();
},
    defaultZone = null,
    // not setting this directly to LocalZone.instance bc loading order issues
defaultLocale = null,
    defaultNumberingSystem = null,
    defaultOutputCalendar = null,
    throwOnInvalid = false;
/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */


var Settings = /*#__PURE__*/function () {
  function Settings() {}

  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  Settings.resetCaches = function resetCaches() {
    Locale.resetCache();
    IANAZone.resetCache();
  };

  _createClass(Settings, null, [{
    key: "now",

    /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */
    get: function get() {
      return now;
    }
    /**
     * Set the callback for returning the current timestamp.
     * The function should return a number, which will be interpreted as an Epoch millisecond count
     * @type {function}
     * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
     * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
     */
    ,
    set: function set(n) {
      now = n;
    }
    /**
     * Get the default time zone to create DateTimes in.
     * @type {string}
     */

  }, {
    key: "defaultZoneName",
    get: function get() {
      return Settings.defaultZone.name;
    }
    /**
     * Set the default time zone to create DateTimes in. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(z) {
      if (!z) {
        defaultZone = null;
      } else {
        defaultZone = normalizeZone(z);
      }
    }
    /**
     * Get the default time zone object to create DateTimes in. Does not affect existing instances.
     * @type {Zone}
     */

  }, {
    key: "defaultZone",
    get: function get() {
      return defaultZone || LocalZone.instance;
    }
    /**
     * Get the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultLocale",
    get: function get() {
      return defaultLocale;
    }
    /**
     * Set the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(locale) {
      defaultLocale = locale;
    }
    /**
     * Get the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultNumberingSystem",
    get: function get() {
      return defaultNumberingSystem;
    }
    /**
     * Set the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(numberingSystem) {
      defaultNumberingSystem = numberingSystem;
    }
    /**
     * Get the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultOutputCalendar",
    get: function get() {
      return defaultOutputCalendar;
    }
    /**
     * Set the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(outputCalendar) {
      defaultOutputCalendar = outputCalendar;
    }
    /**
     * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */

  }, {
    key: "throwOnInvalid",
    get: function get() {
      return throwOnInvalid;
    }
    /**
     * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
    ,
    set: function set(t) {
      throwOnInvalid = t;
    }
  }]);

  return Settings;
}();

var intlDTCache = {};

function getCachedDTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var dtf = intlDTCache[key];

  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }

  return dtf;
}

var intlNumCache = {};

function getCachedINF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var inf = intlNumCache[key];

  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }

  return inf;
}

var intlRelCache = {};

function getCachedRTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var _opts = opts,
      base = _opts.base,
      cacheKeyOpts = _objectWithoutPropertiesLoose(_opts, ["base"]); // exclude `base` from the options


  var key = JSON.stringify([locString, cacheKeyOpts]);
  var inf = intlRelCache[key];

  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }

  return inf;
}

var sysLocaleCache = null;

function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else if (hasIntl()) {
    var computedSys = new Intl.DateTimeFormat().resolvedOptions().locale; // node sometimes defaults to "und". Override that because that is dumb

    sysLocaleCache = !computedSys || computedSys === "und" ? "en-US" : computedSys;
    return sysLocaleCache;
  } else {
    sysLocaleCache = "en-US";
    return sysLocaleCache;
  }
}

function parseLocaleString(localeStr) {
  // I really want to avoid writing a BCP 47 parser
  // see, e.g. https://github.com/wooorm/bcp-47
  // Instead, we'll do this:
  // a) if the string has no -u extensions, just leave it alone
  // b) if it does, use Intl to resolve everything
  // c) if Intl fails, try again without the -u
  var uIndex = localeStr.indexOf("-u-");

  if (uIndex === -1) {
    return [localeStr];
  } else {
    var options;
    var smaller = localeStr.substring(0, uIndex);

    try {
      options = getCachedDTF(localeStr).resolvedOptions();
    } catch (e) {
      options = getCachedDTF(smaller).resolvedOptions();
    }

    var _options = options,
        numberingSystem = _options.numberingSystem,
        calendar = _options.calendar; // return the smaller one so that we can append the calendar and numbering overrides to it

    return [smaller, numberingSystem, calendar];
  }
}

function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (hasIntl()) {
    if (outputCalendar || numberingSystem) {
      localeStr += "-u";

      if (outputCalendar) {
        localeStr += "-ca-" + outputCalendar;
      }

      if (numberingSystem) {
        localeStr += "-nu-" + numberingSystem;
      }

      return localeStr;
    } else {
      return localeStr;
    }
  } else {
    return [];
  }
}

function mapMonths(f) {
  var ms = [];

  for (var i = 1; i <= 12; i++) {
    var dt = DateTime.utc(2016, i, 1);
    ms.push(f(dt));
  }

  return ms;
}

function mapWeekdays(f) {
  var ms = [];

  for (var i = 1; i <= 7; i++) {
    var dt = DateTime.utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }

  return ms;
}

function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  var mode = loc.listingMode(defaultOK);

  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}

function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || hasIntl() && new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
  }
}
/**
 * @private
 */


var PolyNumberFormatter = /*#__PURE__*/function () {
  function PolyNumberFormatter(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;

    if (!forceSimple && hasIntl()) {
      var intlOpts = {
        useGrouping: false
      };
      if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }

  var _proto = PolyNumberFormatter.prototype;

  _proto.format = function format(i) {
    if (this.inf) {
      var fixed = this.floor ? Math.floor(i) : i;
      return this.inf.format(fixed);
    } else {
      // to match the browser's numberformatter defaults
      var _fixed = this.floor ? Math.floor(i) : roundTo(i, 3);

      return padStart(_fixed, this.padTo);
    }
  };

  return PolyNumberFormatter;
}();
/**
 * @private
 */


var PolyDateFormatter = /*#__PURE__*/function () {
  function PolyDateFormatter(dt, intl, opts) {
    this.opts = opts;
    this.hasIntl = hasIntl();
    var z;

    if (dt.zone.universal && this.hasIntl) {
      // Chromium doesn't support fixed-offset zones like Etc/GMT+8 in its formatter,
      // See https://bugs.chromium.org/p/chromium/issues/detail?id=364374.
      // So we have to make do. Two cases:
      // 1. The format options tell us to show the zone. We can't do that, so the best
      // we can do is format the date in UTC.
      // 2. The format options don't tell us to show the zone. Then we can adjust them
      // the time and tell the formatter to show it to us in UTC, so that the time is right
      // and the bad zone doesn't show up.
      // We can clean all this up when Chrome fixes this.
      z = "UTC";

      if (opts.timeZoneName) {
        this.dt = dt;
      } else {
        this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1000);
      }
    } else if (dt.zone.type === "local") {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }

    if (this.hasIntl) {
      var intlOpts = Object.assign({}, this.opts);

      if (z) {
        intlOpts.timeZone = z;
      }

      this.dtf = getCachedDTF(intl, intlOpts);
    }
  }

  var _proto2 = PolyDateFormatter.prototype;

  _proto2.format = function format() {
    if (this.hasIntl) {
      return this.dtf.format(this.dt.toJSDate());
    } else {
      var tokenFormat = formatString(this.opts),
          loc = Locale.create("en-US");
      return Formatter.create(loc).formatDateTimeFromString(this.dt, tokenFormat);
    }
  };

  _proto2.formatToParts = function formatToParts() {
    if (this.hasIntl && hasFormatToParts()) {
      return this.dtf.formatToParts(this.dt.toJSDate());
    } else {
      // This is kind of a cop out. We actually could do this for English. However, we couldn't do it for intl strings
      // and IMO it's too weird to have an uncanny valley like that
      return [];
    }
  };

  _proto2.resolvedOptions = function resolvedOptions() {
    if (this.hasIntl) {
      return this.dtf.resolvedOptions();
    } else {
      return {
        locale: "en-US",
        numberingSystem: "latn",
        outputCalendar: "gregory"
      };
    }
  };

  return PolyDateFormatter;
}();
/**
 * @private
 */


var PolyRelFormatter = /*#__PURE__*/function () {
  function PolyRelFormatter(intl, isEnglish, opts) {
    this.opts = Object.assign({
      style: "long"
    }, opts);

    if (!isEnglish && hasRelative()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }

  var _proto3 = PolyRelFormatter.prototype;

  _proto3.format = function format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    } else {
      return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    }
  };

  _proto3.formatToParts = function formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    } else {
      return [];
    }
  };

  return PolyRelFormatter;
}();
/**
 * @private
 */


var Locale = /*#__PURE__*/function () {
  Locale.fromOpts = function fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  };

  Locale.create = function create(locale, numberingSystem, outputCalendar, defaultToEN) {
    if (defaultToEN === void 0) {
      defaultToEN = false;
    }

    var specifiedLocale = locale || Settings.defaultLocale,
        // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
    localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale()),
        numberingSystemR = numberingSystem || Settings.defaultNumberingSystem,
        outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  };

  Locale.resetCache = function resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  };

  Locale.fromObject = function fromObject(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        locale = _ref.locale,
        numberingSystem = _ref.numberingSystem,
        outputCalendar = _ref.outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar);
  };

  function Locale(locale, numbering, outputCalendar, specifiedLocale) {
    var _parseLocaleString = parseLocaleString(locale),
        parsedLocale = _parseLocaleString[0],
        parsedNumberingSystem = _parseLocaleString[1],
        parsedOutputCalendar = _parseLocaleString[2];

    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
    this.weekdaysCache = {
      format: {},
      standalone: {}
    };
    this.monthsCache = {
      format: {},
      standalone: {}
    };
    this.meridiemCache = null;
    this.eraCache = {};
    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }

  var _proto4 = Locale.prototype;

  _proto4.listingMode = function listingMode(defaultOK) {
    if (defaultOK === void 0) {
      defaultOK = true;
    }

    var intl = hasIntl(),
        hasFTP = intl && hasFormatToParts(),
        isActuallyEn = this.isEnglish(),
        hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");

    if (!hasFTP && !(isActuallyEn && hasNoWeirdness) && !defaultOK) {
      return "error";
    } else if (!hasFTP || isActuallyEn && hasNoWeirdness) {
      return "en";
    } else {
      return "intl";
    }
  };

  _proto4.clone = function clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
    }
  };

  _proto4.redefaultToEN = function redefaultToEN(alts) {
    if (alts === void 0) {
      alts = {};
    }

    return this.clone(Object.assign({}, alts, {
      defaultToEN: true
    }));
  };

  _proto4.redefaultToSystem = function redefaultToSystem(alts) {
    if (alts === void 0) {
      alts = {};
    }

    return this.clone(Object.assign({}, alts, {
      defaultToEN: false
    }));
  };

  _proto4.months = function months$1(length, format, defaultOK) {
    var _this = this;

    if (format === void 0) {
      format = false;
    }

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, months, function () {
      var intl = format ? {
        month: length,
        day: "numeric"
      } : {
        month: length
      },
          formatStr = format ? "format" : "standalone";

      if (!_this.monthsCache[formatStr][length]) {
        _this.monthsCache[formatStr][length] = mapMonths(function (dt) {
          return _this.extract(dt, intl, "month");
        });
      }

      return _this.monthsCache[formatStr][length];
    });
  };

  _proto4.weekdays = function weekdays$1(length, format, defaultOK) {
    var _this2 = this;

    if (format === void 0) {
      format = false;
    }

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, weekdays, function () {
      var intl = format ? {
        weekday: length,
        year: "numeric",
        month: "long",
        day: "numeric"
      } : {
        weekday: length
      },
          formatStr = format ? "format" : "standalone";

      if (!_this2.weekdaysCache[formatStr][length]) {
        _this2.weekdaysCache[formatStr][length] = mapWeekdays(function (dt) {
          return _this2.extract(dt, intl, "weekday");
        });
      }

      return _this2.weekdaysCache[formatStr][length];
    });
  };

  _proto4.meridiems = function meridiems$1(defaultOK) {
    var _this3 = this;

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, undefined, defaultOK, function () {
      return meridiems;
    }, function () {
      // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
      // for AM and PM. This is probably wrong, but it's makes parsing way easier.
      if (!_this3.meridiemCache) {
        var intl = {
          hour: "numeric",
          hour12: true
        };
        _this3.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(function (dt) {
          return _this3.extract(dt, intl, "dayperiod");
        });
      }

      return _this3.meridiemCache;
    });
  };

  _proto4.eras = function eras$1(length, defaultOK) {
    var _this4 = this;

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, eras, function () {
      var intl = {
        era: length
      }; // This is utter bullshit. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
      // to definitely enumerate them.

      if (!_this4.eraCache[length]) {
        _this4.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map(function (dt) {
          return _this4.extract(dt, intl, "era");
        });
      }

      return _this4.eraCache[length];
    });
  };

  _proto4.extract = function extract(dt, intlOpts, field) {
    var df = this.dtFormatter(dt, intlOpts),
        results = df.formatToParts(),
        matching = results.find(function (m) {
      return m.type.toLowerCase() === field;
    });
    return matching ? matching.value : null;
  };

  _proto4.numberFormatter = function numberFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }

    // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
    // (in contrast, the rest of the condition is used heavily)
    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  };

  _proto4.dtFormatter = function dtFormatter(dt, intlOpts) {
    if (intlOpts === void 0) {
      intlOpts = {};
    }

    return new PolyDateFormatter(dt, this.intl, intlOpts);
  };

  _proto4.relFormatter = function relFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  };

  _proto4.isEnglish = function isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || hasIntl() && new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  };

  _proto4.equals = function equals(other) {
    return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
  };

  _createClass(Locale, [{
    key: "fastNumbers",
    get: function get() {
      if (this.fastNumbersCached == null) {
        this.fastNumbersCached = supportsFastNumbers(this);
      }

      return this.fastNumbersCached;
    }
  }]);

  return Locale;
}();

/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */

function combineRegexes() {
  for (var _len = arguments.length, regexes = new Array(_len), _key = 0; _key < _len; _key++) {
    regexes[_key] = arguments[_key];
  }

  var full = regexes.reduce(function (f, r) {
    return f + r.source;
  }, "");
  return RegExp("^" + full + "$");
}

function combineExtractors() {
  for (var _len2 = arguments.length, extractors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    extractors[_key2] = arguments[_key2];
  }

  return function (m) {
    return extractors.reduce(function (_ref, ex) {
      var mergedVals = _ref[0],
          mergedZone = _ref[1],
          cursor = _ref[2];

      var _ex = ex(m, cursor),
          val = _ex[0],
          zone = _ex[1],
          next = _ex[2];

      return [Object.assign(mergedVals, val), mergedZone || zone, next];
    }, [{}, null, 1]).slice(0, 2);
  };
}

function parse(s) {
  if (s == null) {
    return [null, null];
  }

  for (var _len3 = arguments.length, patterns = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    patterns[_key3 - 1] = arguments[_key3];
  }

  for (var _i = 0, _patterns = patterns; _i < _patterns.length; _i++) {
    var _patterns$_i = _patterns[_i],
        regex = _patterns$_i[0],
        extractor = _patterns$_i[1];
    var m = regex.exec(s);

    if (m) {
      return extractor(m);
    }
  }

  return [null, null];
}

function simpleParse() {
  for (var _len4 = arguments.length, keys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    keys[_key4] = arguments[_key4];
  }

  return function (match, cursor) {
    var ret = {};
    var i;

    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = parseInteger(match[cursor + i]);
    }

    return [ret, null, cursor + i];
  };
} // ISO and SQL parsing


var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
    isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,9}))?)?)?/,
    isoTimeRegex = RegExp("" + isoTimeBaseRegex.source + offsetRegex.source + "?"),
    isoTimeExtensionRegex = RegExp("(?:T" + isoTimeRegex.source + ")?"),
    isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
    isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/,
    isoOrdinalRegex = /(\d{4})-?(\d{3})/,
    extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay"),
    extractISOOrdinalData = simpleParse("year", "ordinal"),
    sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/,
    // dumbed-down version of the ISO one
sqlTimeRegex = RegExp(isoTimeBaseRegex.source + " ?(?:" + offsetRegex.source + "|(" + ianaRegex.source + "))?"),
    sqlTimeExtensionRegex = RegExp("(?: " + sqlTimeRegex.source + ")?");

function int(match, pos, fallback) {
  var m = match[pos];
  return isUndefined(m) ? fallback : parseInteger(m);
}

function extractISOYmd(match, cursor) {
  var item = {
    year: int(match, cursor),
    month: int(match, cursor + 1, 1),
    day: int(match, cursor + 2, 1)
  };
  return [item, null, cursor + 3];
}

function extractISOTime(match, cursor) {
  var item = {
    hour: int(match, cursor, 0),
    minute: int(match, cursor + 1, 0),
    second: int(match, cursor + 2, 0),
    millisecond: parseMillis(match[cursor + 3])
  };
  return [item, null, cursor + 4];
}

function extractISOOffset(match, cursor) {
  var local = !match[cursor] && !match[cursor + 1],
      fullOffset = signedOffset(match[cursor + 1], match[cursor + 2]),
      zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}

function extractIANAZone(match, cursor) {
  var zone = match[cursor] ? IANAZone.create(match[cursor]) : null;
  return [{}, zone, cursor + 1];
} // ISO duration parsing


var isoDuration = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})(?:[.,](-?\d{1,9}))?S)?)?)$/;

function extractISODuration(match) {
  var s = match[0],
      yearStr = match[1],
      monthStr = match[2],
      weekStr = match[3],
      dayStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      millisecondsStr = match[8];
  var hasNegativePrefix = s[0] === "-";

  var maybeNegate = function maybeNegate(num) {
    return num && hasNegativePrefix ? -num : num;
  };

  return [{
    years: maybeNegate(parseInteger(yearStr)),
    months: maybeNegate(parseInteger(monthStr)),
    weeks: maybeNegate(parseInteger(weekStr)),
    days: maybeNegate(parseInteger(dayStr)),
    hours: maybeNegate(parseInteger(hourStr)),
    minutes: maybeNegate(parseInteger(minuteStr)),
    seconds: maybeNegate(parseInteger(secondStr)),
    milliseconds: maybeNegate(parseMillis(millisecondsStr))
  }];
} // These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that


var obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};

function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  var result = {
    year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
    month: monthsShort.indexOf(monthStr) + 1,
    day: parseInteger(dayStr),
    hour: parseInteger(hourStr),
    minute: parseInteger(minuteStr)
  };
  if (secondStr) result.second = parseInteger(secondStr);

  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
  }

  return result;
} // RFC 2822/5322


var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function extractRFC2822(match) {
  var weekdayStr = match[1],
      dayStr = match[2],
      monthStr = match[3],
      yearStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      obsOffset = match[8],
      milOffset = match[9],
      offHourStr = match[10],
      offMinuteStr = match[11],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  var offset;

  if (obsOffset) {
    offset = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset = 0;
  } else {
    offset = signedOffset(offHourStr, offMinuteStr);
  }

  return [result, new FixedOffsetZone(offset)];
}

function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
} // http date


var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
    rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
    ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function extractRFC1123Or850(match) {
  var weekdayStr = match[1],
      dayStr = match[2],
      monthStr = match[3],
      yearStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

function extractASCII(match) {
  var weekdayStr = match[1],
      monthStr = match[2],
      dayStr = match[3],
      hourStr = match[4],
      minuteStr = match[5],
      secondStr = match[6],
      yearStr = match[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
var extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset);
var extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset);
var extractISOOrdinalDataAndTime = combineExtractors(extractISOOrdinalData, extractISOTime);
var extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset);
/**
 * @private
 */

function parseISODate(s) {
  return parse(s, [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset], [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDataAndTime], [isoTimeCombinedRegex, extractISOTimeAndOffset]);
}
function parseRFC2822Date(s) {
  return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
}
function parseHTTPDate(s) {
  return parse(s, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
}
function parseISODuration(s) {
  return parse(s, [isoDuration, extractISODuration]);
}
var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
var extractISOYmdTimeOffsetAndIANAZone = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
function parseSQL(s) {
  return parse(s, [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeOffsetAndIANAZone], [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]);
}

var INVALID = "Invalid Duration"; // unit conversion constants

var lowOrderMatrix = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1000
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1000
  },
  hours: {
    minutes: 60,
    seconds: 60 * 60,
    milliseconds: 60 * 60 * 1000
  },
  minutes: {
    seconds: 60,
    milliseconds: 60 * 1000
  },
  seconds: {
    milliseconds: 1000
  }
},
    casualMatrix = Object.assign({
  years: {
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1000
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix),
    daysInYearAccurate = 146097.0 / 400,
    daysInMonthAccurate = 146097.0 / 4800,
    accurateMatrix = Object.assign({
  years: {
    months: 12,
    weeks: daysInYearAccurate / 7,
    days: daysInYearAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: daysInYearAccurate / 28,
    days: daysInYearAccurate / 4,
    hours: daysInYearAccurate * 24 / 4,
    minutes: daysInYearAccurate * 24 * 60 / 4,
    seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000 / 4
  },
  months: {
    weeks: daysInMonthAccurate / 7,
    days: daysInMonthAccurate,
    hours: daysInMonthAccurate * 24,
    minutes: daysInMonthAccurate * 24 * 60,
    seconds: daysInMonthAccurate * 24 * 60 * 60,
    milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix); // units ordered by size

var orderedUnits = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"];
var reverseUnits = orderedUnits.slice(0).reverse(); // clone really means "create another instance just like this one, but with these changes"

function clone(dur, alts, clear) {
  if (clear === void 0) {
    clear = false;
  }

  // deep merge for vals
  var conf = {
    values: clear ? alts.values : Object.assign({}, dur.values, alts.values || {}),
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
  };
  return new Duration(conf);
}

function antiTrunc(n) {
  return n < 0 ? Math.floor(n) : Math.ceil(n);
} // NB: mutates parameters


function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  var conv = matrix[toUnit][fromUnit],
      raw = fromMap[fromUnit] / conv,
      sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]),
      // ok, so this is wild, but see the matrix in the tests
  added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
} // NB: mutates parameters


function normalizeValues(matrix, vals) {
  reverseUnits.reduce(function (previous, current) {
    if (!isUndefined(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }

      return current;
    } else {
      return previous;
    }
  }, null);
}
/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime.plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link Duration.years}, {@link Duration.months}, {@link Duration.weeks}, {@link Duration.days}, {@link Duration.hours}, {@link Duration.minutes}, {@link Duration.seconds}, {@link Duration.milliseconds} accessors.
 * * **Configuration** See  {@link Duration.locale} and {@link Duration.numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration.plus}, {@link Duration.minus}, {@link Duration.normalize}, {@link Duration.set}, {@link Duration.reconfigure}, {@link Duration.shiftTo}, and {@link Duration.negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration.as}, {@link Duration.toISO}, {@link Duration.toFormat}, and {@link Duration.toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */


var Duration = /*#__PURE__*/function () {
  /**
   * @private
   */
  function Duration(config) {
    var accurate = config.conversionAccuracy === "longterm" || false;
    /**
     * @access private
     */

    this.values = config.values;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.conversionAccuracy = accurate ? "longterm" : "casual";
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.matrix = accurate ? accurateMatrix : casualMatrix;
    /**
     * @access private
     */

    this.isLuxonDuration = true;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */


  Duration.fromMillis = function fromMillis(count, opts) {
    return Duration.fromObject(Object.assign({
      milliseconds: count
    }, opts));
  }
  /**
   * Create a Duration from a Javascript object with keys like 'years' and 'hours.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {string} [obj.locale='en-US'] - the locale to use
   * @param {string} obj.numberingSystem - the numbering system to use
   * @param {string} [obj.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  ;

  Duration.fromObject = function fromObject(obj) {
    if (obj == null || typeof obj !== "object") {
      throw new InvalidArgumentError("Duration.fromObject: argument expected to be an object, got " + (obj === null ? "null" : typeof obj));
    }

    return new Duration({
      values: normalizeObject(obj, Duration.normalizeUnit, ["locale", "numberingSystem", "conversionAccuracy", "zone" // a bit of debt; it's super inconvenient internally not to be able to blindly pass this
      ]),
      loc: Locale.fromObject(obj),
      conversionAccuracy: obj.conversionAccuracy
    });
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  ;

  Duration.fromISO = function fromISO(text, opts) {
    var _parseISODuration = parseISODuration(text),
        parsed = _parseISODuration[0];

    if (parsed) {
      var obj = Object.assign(parsed, opts);
      return Duration.fromObject(obj);
    } else {
      return Duration.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
    }
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  ;

  Duration.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDurationError(invalid);
    } else {
      return new Duration({
        invalid: invalid
      });
    }
  }
  /**
   * @private
   */
  ;

  Duration.normalizeUnit = function normalizeUnit(unit) {
    var normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[unit ? unit.toLowerCase() : unit];
    if (!normalized) throw new InvalidUnitError(unit);
    return normalized;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  Duration.isDuration = function isDuration(o) {
    return o && o.isLuxonDuration || false;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  ;

  var _proto = Duration.prototype;

  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * The duration will be converted to the set of units in the format string using {@link Duration.shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    // reverse-compat since 1.2; we always round down now, never up, and we do it by default
    var fmtOpts = Object.assign({}, opts, {
      floor: opts.round !== false && opts.floor !== false
    });
    return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID;
  }
  /**
   * Returns a Javascript object with this Duration's values.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  ;

  _proto.toObject = function toObject(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return {};
    var base = Object.assign({}, this.values);

    if (opts.includeConfig) {
      base.conversionAccuracy = this.conversionAccuracy;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }

    return base;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  ;

  _proto.toISO = function toISO() {
    // we could use the formatter, but this is an easier way to get the minimum string
    if (!this.isValid) return null;
    var s = "P";
    if (this.years !== 0) s += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
    if (this.weeks !== 0) s += this.weeks + "W";
    if (this.days !== 0) s += this.days + "D";
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) s += "T";
    if (this.hours !== 0) s += this.hours + "H";
    if (this.minutes !== 0) s += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0) // this will handle "floating point madness" by removing extra decimal places
      // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
      s += roundTo(this.seconds + this.milliseconds / 1000, 3) + "S";
    if (s === "P") s += "T0S";
    return s;
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  ;

  _proto.toJSON = function toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    return this.toISO();
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  ;

  _proto.valueOf = function valueOf() {
    return this.as("milliseconds");
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  ;

  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration),
        result = {};

    for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits), _step; !(_step = _iterator()).done;) {
      var k = _step.value;

      if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }

    return clone(this, {
      values: result
    }, true);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  ;

  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration);
    return this.plus(dur.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnit(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnit((x, u) => u === "hour" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  ;

  _proto.mapUnits = function mapUnits(fn) {
    if (!this.isValid) return this;
    var result = {};

    for (var _i = 0, _Object$keys = Object.keys(this.values); _i < _Object$keys.length; _i++) {
      var k = _Object$keys[_i];
      result[k] = asNumber(fn(this.values[k], k));
    }

    return clone(this, {
      values: result
    }, true);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).years //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).months //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).days //=> 3
   * @return {number}
   */
  ;

  _proto.get = function get(unit) {
    return this[Duration.normalizeUnit(unit)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  ;

  _proto.set = function set(values) {
    if (!this.isValid) return this;
    var mixed = Object.assign(this.values, normalizeObject(values, Duration.normalizeUnit, []));
    return clone(this, {
      values: mixed
    });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  ;

  _proto.reconfigure = function reconfigure(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        locale = _ref.locale,
        numberingSystem = _ref.numberingSystem,
        conversionAccuracy = _ref.conversionAccuracy;

    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem
    }),
        opts = {
      loc: loc
    };

    if (conversionAccuracy) {
      opts.conversionAccuracy = conversionAccuracy;
    }

    return clone(this, opts);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  ;

  _proto.as = function as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */
  ;

  _proto.normalize = function normalize() {
    if (!this.isValid) return this;
    var vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone(this, {
      values: vals
    }, true);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  ;

  _proto.shiftTo = function shiftTo() {
    for (var _len = arguments.length, units = new Array(_len), _key = 0; _key < _len; _key++) {
      units[_key] = arguments[_key];
    }

    if (!this.isValid) return this;

    if (units.length === 0) {
      return this;
    }

    units = units.map(function (u) {
      return Duration.normalizeUnit(u);
    });
    var built = {},
        accumulated = {},
        vals = this.toObject();
    var lastUnit;
    normalizeValues(this.matrix, vals);

    for (var _iterator2 = _createForOfIteratorHelperLoose(orderedUnits), _step2; !(_step2 = _iterator2()).done;) {
      var k = _step2.value;

      if (units.indexOf(k) >= 0) {
        lastUnit = k;
        var own = 0; // anything we haven't boiled down yet should get boiled to this unit

        for (var ak in accumulated) {
          own += this.matrix[ak][k] * accumulated[ak];
          accumulated[ak] = 0;
        } // plus anything that's already in this unit


        if (isNumber(vals[k])) {
          own += vals[k];
        }

        var i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = own - i; // we'd like to absorb these fractions in another unit
        // plus anything further down the chain that should be rolled up in to this

        for (var down in vals) {
          if (orderedUnits.indexOf(down) > orderedUnits.indexOf(k)) {
            convert(this.matrix, vals, down, built, k);
          }
        } // otherwise, keep it in the wings to boil it later

      } else if (isNumber(vals[k])) {
        accumulated[k] = vals[k];
      }
    } // anything leftover becomes the decimal for the last unit
    // lastUnit must be defined since units is not empty


    for (var key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }

    return clone(this, {
      values: built
    }, true).normalize();
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  ;

  _proto.negate = function negate() {
    if (!this.isValid) return this;
    var negated = {};

    for (var _i2 = 0, _Object$keys2 = Object.keys(this.values); _i2 < _Object$keys2.length; _i2++) {
      var k = _Object$keys2[_i2];
      negated[k] = -this.values[k];
    }

    return clone(this, {
      values: negated
    }, true);
  }
  /**
   * Get the years.
   * @type {number}
   */
  ;

  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    if (!this.loc.equals(other.loc)) {
      return false;
    }

    for (var _iterator3 = _createForOfIteratorHelperLoose(orderedUnits), _step3; !(_step3 = _iterator3()).done;) {
      var u = _step3.value;

      if (this.values[u] !== other.values[u]) {
        return false;
      }
    }

    return true;
  };

  _createClass(Duration, [{
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
     *
     * @type {string}
     */

  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
  }, {
    key: "years",
    get: function get() {
      return this.isValid ? this.values.years || 0 : NaN;
    }
    /**
     * Get the quarters.
     * @type {number}
     */

  }, {
    key: "quarters",
    get: function get() {
      return this.isValid ? this.values.quarters || 0 : NaN;
    }
    /**
     * Get the months.
     * @type {number}
     */

  }, {
    key: "months",
    get: function get() {
      return this.isValid ? this.values.months || 0 : NaN;
    }
    /**
     * Get the weeks
     * @type {number}
     */

  }, {
    key: "weeks",
    get: function get() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }
    /**
     * Get the days.
     * @type {number}
     */

  }, {
    key: "days",
    get: function get() {
      return this.isValid ? this.values.days || 0 : NaN;
    }
    /**
     * Get the hours.
     * @type {number}
     */

  }, {
    key: "hours",
    get: function get() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }
    /**
     * Get the minutes.
     * @type {number}
     */

  }, {
    key: "minutes",
    get: function get() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }
    /**
     * Get the seconds.
     * @return {number}
     */

  }, {
    key: "seconds",
    get: function get() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }
    /**
     * Get the milliseconds.
     * @return {number}
     */

  }, {
    key: "milliseconds",
    get: function get() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
    /**
     * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
     * on invalid DateTimes or Intervals.
     * @return {boolean}
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this Duration became invalid, or null if the Duration is valid
     * @return {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]);

  return Duration;
}();
function friendlyDuration(durationish) {
  if (isNumber(durationish)) {
    return Duration.fromMillis(durationish);
  } else if (Duration.isDuration(durationish)) {
    return durationish;
  } else if (typeof durationish === "object") {
    return Duration.fromObject(durationish);
  } else {
    throw new InvalidArgumentError("Unknown duration argument " + durationish + " of type " + typeof durationish);
  }
}

var INVALID$1 = "Invalid Interval"; // checks if the start is equal to or before the end

function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return Interval.invalid("missing or invalid end");
  } else if (end < start) {
    return Interval.invalid("end before start", "The end of an interval must be after its start, but you had start=" + start.toISO() + " and end=" + end.toISO());
  } else {
    return null;
  }
}
/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link fromDateTimes}, {@link after}, {@link before}, or {@link fromISO}.
 * * **Accessors** Use {@link start} and {@link end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link count}, {@link length}, {@link hasSame}, {@link contains}, {@link isAfter}, or {@link isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link set}, {@link splitAt}, {@link splitBy}, {@link divideEqually}, {@link merge}, {@link xor}, {@link union}, {@link intersection}, or {@link difference}.
 * * **Comparison** To compare this Interval to another one, use {@link equals}, {@link overlaps}, {@link abutsStart}, {@link abutsEnd}, {@link engulfs}
 * * **Output** To convert the Interval into other representations, see {@link toString}, {@link toISO}, {@link toISODate}, {@link toISOTime}, {@link toFormat}, and {@link toDuration}.
 */


var Interval = /*#__PURE__*/function () {
  /**
   * @private
   */
  function Interval(config) {
    /**
     * @access private
     */
    this.s = config.start;
    /**
     * @access private
     */

    this.e = config.end;
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.isLuxonInterval = true;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */


  Interval.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidIntervalError(invalid);
    } else {
      return new Interval({
        invalid: invalid
      });
    }
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  ;

  Interval.fromDateTimes = function fromDateTimes(start, end) {
    var builtStart = friendlyDateTime(start),
        builtEnd = friendlyDateTime(end);
    var validateError = validateStartEnd(builtStart, builtEnd);

    if (validateError == null) {
      return new Interval({
        start: builtStart,
        end: builtEnd
      });
    } else {
      return validateError;
    }
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  ;

  Interval.after = function after(start, duration) {
    var dur = friendlyDuration(duration),
        dt = friendlyDateTime(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  ;

  Interval.before = function before(end, duration) {
    var dur = friendlyDuration(duration),
        dt = friendlyDateTime(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime.fromISO} and optionally {@link Duration.fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  ;

  Interval.fromISO = function fromISO(text, opts) {
    var _split = (text || "").split("/", 2),
        s = _split[0],
        e = _split[1];

    if (s && e) {
      var start = DateTime.fromISO(s, opts),
          end = DateTime.fromISO(e, opts);

      if (start.isValid && end.isValid) {
        return Interval.fromDateTimes(start, end);
      }

      if (start.isValid) {
        var dur = Duration.fromISO(e, opts);

        if (dur.isValid) {
          return Interval.after(start, dur);
        }
      } else if (end.isValid) {
        var _dur = Duration.fromISO(s, opts);

        if (_dur.isValid) {
          return Interval.before(end, _dur);
        }
      }
    }

    return Interval.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  Interval.isInterval = function isInterval(o) {
    return o && o.isLuxonInterval || false;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  ;

  var _proto = Interval.prototype;

  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  _proto.length = function length(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    return this.isValid ? this.toDuration.apply(this, [unit]).get(unit) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */
  ;

  _proto.count = function count(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (!this.isValid) return NaN;
    var start = this.start.startOf(unit),
        end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + 1;
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  ;

  _proto.hasSame = function hasSame(unit) {
    return this.isValid ? this.e.minus(1).hasSame(this.s, unit) : false;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  ;

  _proto.isEmpty = function isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.isAfter = function isAfter(dateTime) {
    if (!this.isValid) return false;
    return this.s > dateTime;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.isBefore = function isBefore(dateTime) {
    if (!this.isValid) return false;
    return this.e <= dateTime;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.contains = function contains(dateTime) {
    if (!this.isValid) return false;
    return this.s <= dateTime && this.e > dateTime;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  ;

  _proto.set = function set(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        start = _ref.start,
        end = _ref.end;

    if (!this.isValid) return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...[DateTime]} dateTimes - the unit of time to count.
   * @return {[Interval]}
   */
  ;

  _proto.splitAt = function splitAt() {
    var _this = this;

    if (!this.isValid) return [];

    for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }

    var sorted = dateTimes.map(friendlyDateTime).filter(function (d) {
      return _this.contains(d);
    }).sort(),
        results = [];
    var s = this.s,
        i = 0;

    while (s < this.e) {
      var added = sorted[i] || this.e,
          next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      i += 1;
    }

    return results;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {[Interval]}
   */
  ;

  _proto.splitBy = function splitBy(duration) {
    var dur = friendlyDuration(duration);

    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }

    var s = this.s,
        added,
        next;
    var results = [];

    while (s < this.e) {
      added = s.plus(dur);
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
    }

    return results;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {[Interval]}
   */
  ;

  _proto.divideEqually = function divideEqually(numberOfParts) {
    if (!this.isValid) return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.overlaps = function overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.abutsStart = function abutsStart(other) {
    if (!this.isValid) return false;
    return +this.e === +other.s;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.abutsEnd = function abutsEnd(other) {
    if (!this.isValid) return false;
    return +other.e === +this.s;
  }
  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.engulfs = function engulfs(other) {
    if (!this.isValid) return false;
    return this.s <= other.s && this.e >= other.e;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    return this.s.equals(other.s) && this.e.equals(other.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  ;

  _proto.intersection = function intersection(other) {
    if (!this.isValid) return this;
    var s = this.s > other.s ? this.s : other.s,
        e = this.e < other.e ? this.e : other.e;

    if (s > e) {
      return null;
    } else {
      return Interval.fromDateTimes(s, e);
    }
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  ;

  _proto.union = function union(other) {
    if (!this.isValid) return this;
    var s = this.s < other.s ? this.s : other.s,
        e = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s, e);
  }
  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {[Interval]} intervals
   * @return {[Interval]}
   */
  ;

  Interval.merge = function merge(intervals) {
    var _intervals$sort$reduc = intervals.sort(function (a, b) {
      return a.s - b.s;
    }).reduce(function (_ref2, item) {
      var sofar = _ref2[0],
          current = _ref2[1];

      if (!current) {
        return [sofar, item];
      } else if (current.overlaps(item) || current.abutsStart(item)) {
        return [sofar, current.union(item)];
      } else {
        return [sofar.concat([current]), item];
      }
    }, [[], null]),
        found = _intervals$sort$reduc[0],
        final = _intervals$sort$reduc[1];

    if (final) {
      found.push(final);
    }

    return found;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {[Interval]} intervals
   * @return {[Interval]}
   */
  ;

  Interval.xor = function xor(intervals) {
    var _Array$prototype;

    var start = null,
        currentCount = 0;

    var results = [],
        ends = intervals.map(function (i) {
      return [{
        time: i.s,
        type: "s"
      }, {
        time: i.e,
        type: "e"
      }];
    }),
        flattened = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, ends),
        arr = flattened.sort(function (a, b) {
      return a.time - b.time;
    });

    for (var _iterator = _createForOfIteratorHelperLoose(arr), _step; !(_step = _iterator()).done;) {
      var i = _step.value;
      currentCount += i.type === "s" ? 1 : -1;

      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(Interval.fromDateTimes(start, i.time));
        }

        start = null;
      }
    }

    return Interval.merge(results);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {[Interval]}
   */
  ;

  _proto.difference = function difference() {
    var _this2 = this;

    for (var _len2 = arguments.length, intervals = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      intervals[_key2] = arguments[_key2];
    }

    return Interval.xor([this].concat(intervals)).map(function (i) {
      return _this2.intersection(i);
    }).filter(function (i) {
      return i && !i.isEmpty();
    });
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    if (!this.isValid) return INVALID$1;
    return "[" + this.s.toISO() + " \u2013 " + this.e.toISO() + ")";
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime.toISO}
   * @return {string}
   */
  ;

  _proto.toISO = function toISO(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISO(opts) + "/" + this.e.toISO(opts);
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  ;

  _proto.toISODate = function toISODate() {
    if (!this.isValid) return INVALID$1;
    return this.s.toISODate() + "/" + this.e.toISODate();
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime.toISO}
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISOTime(opts) + "/" + this.e.toISOTime(opts);
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format string.
   * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime.toFormat} for details.
   * @param {Object} opts - options
   * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
   * @return {string}
   */
  ;

  _proto.toFormat = function toFormat(dateFormat, _temp2) {
    var _ref3 = _temp2 === void 0 ? {} : _temp2,
        _ref3$separator = _ref3.separator,
        separator = _ref3$separator === void 0 ? " – " : _ref3$separator;

    if (!this.isValid) return INVALID$1;
    return "" + this.s.toFormat(dateFormat) + separator + this.e.toFormat(dateFormat);
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  ;

  _proto.toDuration = function toDuration(unit, opts) {
    if (!this.isValid) {
      return Duration.invalid(this.invalidReason);
    }

    return this.e.diff(this.s, unit, opts);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  ;

  _proto.mapEndpoints = function mapEndpoints(mapFn) {
    return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  };

  _createClass(Interval, [{
    key: "start",
    get: function get() {
      return this.isValid ? this.s : null;
    }
    /**
     * Returns the end of the Interval
     * @type {DateTime}
     */

  }, {
    key: "end",
    get: function get() {
      return this.isValid ? this.e : null;
    }
    /**
     * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
     * @type {boolean}
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalidReason === null;
    }
    /**
     * Returns an error code if this Interval is invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]);

  return Interval;
}();

/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */

var Info = /*#__PURE__*/function () {
  function Info() {}

  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  Info.hasDST = function hasDST(zone) {
    if (zone === void 0) {
      zone = Settings.defaultZone;
    }

    var proto = DateTime.local().setZone(zone).set({
      month: 12
    });
    return !zone.universal && proto.offset !== proto.set({
      month: 6
    }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  ;

  Info.isValidIANAZone = function isValidIANAZone(zone) {
    return IANAZone.isValidSpecifier(zone) && IANAZone.isValidZone(zone);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone.isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  ;

  Info.normalizeZone = function normalizeZone$1(input) {
    return normalizeZone(input, Settings.defaultZone);
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {[string]}
   */
  ;

  Info.months = function months(length, _temp) {
    if (length === void 0) {
      length = "long";
    }

    var _ref = _temp === void 0 ? {} : _temp,
        _ref$locale = _ref.locale,
        locale = _ref$locale === void 0 ? null : _ref$locale,
        _ref$numberingSystem = _ref.numberingSystem,
        numberingSystem = _ref$numberingSystem === void 0 ? null : _ref$numberingSystem,
        _ref$outputCalendar = _ref.outputCalendar,
        outputCalendar = _ref$outputCalendar === void 0 ? "gregory" : _ref$outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar).months(length);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {[string]}
   */
  ;

  Info.monthsFormat = function monthsFormat(length, _temp2) {
    if (length === void 0) {
      length = "long";
    }

    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$locale = _ref2.locale,
        locale = _ref2$locale === void 0 ? null : _ref2$locale,
        _ref2$numberingSystem = _ref2.numberingSystem,
        numberingSystem = _ref2$numberingSystem === void 0 ? null : _ref2$numberingSystem,
        _ref2$outputCalendar = _ref2.outputCalendar,
        outputCalendar = _ref2$outputCalendar === void 0 ? "gregory" : _ref2$outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar).months(length, true);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {[string]}
   */
  ;

  Info.weekdays = function weekdays(length, _temp3) {
    if (length === void 0) {
      length = "long";
    }

    var _ref3 = _temp3 === void 0 ? {} : _temp3,
        _ref3$locale = _ref3.locale,
        locale = _ref3$locale === void 0 ? null : _ref3$locale,
        _ref3$numberingSystem = _ref3.numberingSystem,
        numberingSystem = _ref3$numberingSystem === void 0 ? null : _ref3$numberingSystem;

    return Locale.create(locale, numberingSystem, null).weekdays(length);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @return {[string]}
   */
  ;

  Info.weekdaysFormat = function weekdaysFormat(length, _temp4) {
    if (length === void 0) {
      length = "long";
    }

    var _ref4 = _temp4 === void 0 ? {} : _temp4,
        _ref4$locale = _ref4.locale,
        locale = _ref4$locale === void 0 ? null : _ref4$locale,
        _ref4$numberingSystem = _ref4.numberingSystem,
        numberingSystem = _ref4$numberingSystem === void 0 ? null : _ref4$numberingSystem;

    return Locale.create(locale, numberingSystem, null).weekdays(length, true);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {[string]}
   */
  ;

  Info.meridiems = function meridiems(_temp5) {
    var _ref5 = _temp5 === void 0 ? {} : _temp5,
        _ref5$locale = _ref5.locale,
        locale = _ref5$locale === void 0 ? null : _ref5$locale;

    return Locale.create(locale).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {[string]}
   */
  ;

  Info.eras = function eras(length, _temp6) {
    if (length === void 0) {
      length = "short";
    }

    var _ref6 = _temp6 === void 0 ? {} : _temp6,
        _ref6$locale = _ref6.locale,
        locale = _ref6$locale === void 0 ? null : _ref6$locale;

    return Locale.create(locale, null, "gregory").eras(length);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, timezone support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `zones`: whether this environment supports IANA timezones
   * * `intlTokens`: whether this environment supports internationalized token-based formatting/parsing
   * * `intl`: whether this environment supports general internationalization
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { intl: true, intlTokens: false, zones: true, relative: false }
   * @return {Object}
   */
  ;

  Info.features = function features() {
    var intl = false,
        intlTokens = false,
        zones = false,
        relative = false;

    if (hasIntl()) {
      intl = true;
      intlTokens = hasFormatToParts();
      relative = hasRelative();

      try {
        zones = new Intl.DateTimeFormat("en", {
          timeZone: "America/New_York"
        }).resolvedOptions().timeZone === "America/New_York";
      } catch (e) {
        zones = false;
      }
    }

    return {
      intl: intl,
      intlTokens: intlTokens,
      zones: zones,
      relative: relative
    };
  };

  return Info;
}();

function dayDiff(earlier, later) {
  var utcDayStart = function utcDayStart(dt) {
    return dt.toUTC(0, {
      keepLocalTime: true
    }).startOf("day").valueOf();
  },
      ms = utcDayStart(later) - utcDayStart(earlier);

  return Math.floor(Duration.fromMillis(ms).as("days"));
}

function highOrderDiffs(cursor, later, units) {
  var differs = [["years", function (a, b) {
    return b.year - a.year;
  }], ["months", function (a, b) {
    return b.month - a.month + (b.year - a.year) * 12;
  }], ["weeks", function (a, b) {
    var days = dayDiff(a, b);
    return (days - days % 7) / 7;
  }], ["days", dayDiff]];
  var results = {};
  var lowestOrder, highWater;

  for (var _i = 0, _differs = differs; _i < _differs.length; _i++) {
    var _differs$_i = _differs[_i],
        unit = _differs$_i[0],
        differ = _differs$_i[1];

    if (units.indexOf(unit) >= 0) {
      var _cursor$plus;

      lowestOrder = unit;
      var delta = differ(cursor, later);
      highWater = cursor.plus((_cursor$plus = {}, _cursor$plus[unit] = delta, _cursor$plus));

      if (highWater > later) {
        var _cursor$plus2;

        cursor = cursor.plus((_cursor$plus2 = {}, _cursor$plus2[unit] = delta - 1, _cursor$plus2));
        delta -= 1;
      } else {
        cursor = highWater;
      }

      results[unit] = delta;
    }
  }

  return [cursor, results, highWater, lowestOrder];
}

function _diff (earlier, later, units, opts) {
  var _highOrderDiffs = highOrderDiffs(earlier, later, units),
      cursor = _highOrderDiffs[0],
      results = _highOrderDiffs[1],
      highWater = _highOrderDiffs[2],
      lowestOrder = _highOrderDiffs[3];

  var remainingMillis = later - cursor;
  var lowerOrderUnits = units.filter(function (u) {
    return ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0;
  });

  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      var _cursor$plus3;

      highWater = cursor.plus((_cursor$plus3 = {}, _cursor$plus3[lowestOrder] = 1, _cursor$plus3));
    }

    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }

  var duration = Duration.fromObject(Object.assign(results, opts));

  if (lowerOrderUnits.length > 0) {
    var _Duration$fromMillis;

    return (_Duration$fromMillis = Duration.fromMillis(remainingMillis, opts)).shiftTo.apply(_Duration$fromMillis, lowerOrderUnits).plus(duration);
  } else {
    return duration;
  }
}

var numberingSystems = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d"
};
var numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}; // eslint-disable-next-line

var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
function parseDigits(str) {
  var value = parseInt(str, 10);

  if (isNaN(value)) {
    value = "";

    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i);

      if (str[i].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i]);
      } else {
        for (var key in numberingSystemsUTF16) {
          var _numberingSystemsUTF = numberingSystemsUTF16[key],
              min = _numberingSystemsUTF[0],
              max = _numberingSystemsUTF[1];

          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }

    return parseInt(value, 10);
  } else {
    return value;
  }
}
function digitRegex(_ref, append) {
  var numberingSystem = _ref.numberingSystem;

  if (append === void 0) {
    append = "";
  }

  return new RegExp("" + numberingSystems[numberingSystem || "latn"] + append);
}

var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";

function intUnit(regex, post) {
  if (post === void 0) {
    post = function post(i) {
      return i;
    };
  }

  return {
    regex: regex,
    deser: function deser(_ref) {
      var s = _ref[0];
      return post(parseDigits(s));
    }
  };
}

function fixListRegex(s) {
  // make dots optional and also make them literal
  return s.replace(/\./, "\\.?");
}

function stripInsensitivities(s) {
  return s.replace(/\./, "").toLowerCase();
}

function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: function deser(_ref2) {
        var s = _ref2[0];
        return strings.findIndex(function (i) {
          return stripInsensitivities(s) === stripInsensitivities(i);
        }) + startIndex;
      }
    };
  }
}

function offset(regex, groups) {
  return {
    regex: regex,
    deser: function deser(_ref3) {
      var h = _ref3[1],
          m = _ref3[2];
      return signedOffset(h, m);
    },
    groups: groups
  };
}

function simple(regex) {
  return {
    regex: regex,
    deser: function deser(_ref4) {
      var s = _ref4[0];
      return s;
    }
  };
}

function escapeToken(value) {
  // eslint-disable-next-line no-useless-escape
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}

function unitForToken(token, loc) {
  var one = digitRegex(loc),
      two = digitRegex(loc, "{2}"),
      three = digitRegex(loc, "{3}"),
      four = digitRegex(loc, "{4}"),
      six = digitRegex(loc, "{6}"),
      oneOrTwo = digitRegex(loc, "{1,2}"),
      oneToThree = digitRegex(loc, "{1,3}"),
      oneToSix = digitRegex(loc, "{1,6}"),
      oneToNine = digitRegex(loc, "{1,9}"),
      twoToFour = digitRegex(loc, "{2,4}"),
      fourToSix = digitRegex(loc, "{4,6}"),
      literal = function literal(t) {
    return {
      regex: RegExp(escapeToken(t.val)),
      deser: function deser(_ref5) {
        var s = _ref5[0];
        return s;
      },
      literal: true
    };
  },
      unitate = function unitate(t) {
    if (token.literal) {
      return literal(t);
    }

    switch (t.val) {
      // era
      case "G":
        return oneOf(loc.eras("short", false), 0);

      case "GG":
        return oneOf(loc.eras("long", false), 0);
      // years

      case "y":
        return intUnit(oneToSix);

      case "yy":
        return intUnit(twoToFour, untruncateYear);

      case "yyyy":
        return intUnit(four);

      case "yyyyy":
        return intUnit(fourToSix);

      case "yyyyyy":
        return intUnit(six);
      // months

      case "M":
        return intUnit(oneOrTwo);

      case "MM":
        return intUnit(two);

      case "MMM":
        return oneOf(loc.months("short", true, false), 1);

      case "MMMM":
        return oneOf(loc.months("long", true, false), 1);

      case "L":
        return intUnit(oneOrTwo);

      case "LL":
        return intUnit(two);

      case "LLL":
        return oneOf(loc.months("short", false, false), 1);

      case "LLLL":
        return oneOf(loc.months("long", false, false), 1);
      // dates

      case "d":
        return intUnit(oneOrTwo);

      case "dd":
        return intUnit(two);
      // ordinals

      case "o":
        return intUnit(oneToThree);

      case "ooo":
        return intUnit(three);
      // time

      case "HH":
        return intUnit(two);

      case "H":
        return intUnit(oneOrTwo);

      case "hh":
        return intUnit(two);

      case "h":
        return intUnit(oneOrTwo);

      case "mm":
        return intUnit(two);

      case "m":
        return intUnit(oneOrTwo);

      case "q":
        return intUnit(oneOrTwo);

      case "qq":
        return intUnit(two);

      case "s":
        return intUnit(oneOrTwo);

      case "ss":
        return intUnit(two);

      case "S":
        return intUnit(oneToThree);

      case "SSS":
        return intUnit(three);

      case "u":
        return simple(oneToNine);
      // meridiem

      case "a":
        return oneOf(loc.meridiems(), 0);
      // weekYear (k)

      case "kkkk":
        return intUnit(four);

      case "kk":
        return intUnit(twoToFour, untruncateYear);
      // weekNumber (W)

      case "W":
        return intUnit(oneOrTwo);

      case "WW":
        return intUnit(two);
      // weekdays

      case "E":
      case "c":
        return intUnit(one);

      case "EEE":
        return oneOf(loc.weekdays("short", false, false), 1);

      case "EEEE":
        return oneOf(loc.weekdays("long", false, false), 1);

      case "ccc":
        return oneOf(loc.weekdays("short", true, false), 1);

      case "cccc":
        return oneOf(loc.weekdays("long", true, false), 1);
      // offset/zone

      case "Z":
      case "ZZ":
        return offset(new RegExp("([+-]" + oneOrTwo.source + ")(?::(" + two.source + "))?"), 2);

      case "ZZZ":
        return offset(new RegExp("([+-]" + oneOrTwo.source + ")(" + two.source + ")?"), 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are

      case "z":
        return simple(/[a-z_+-/]{1,256}?/i);

      default:
        return literal(t);
    }
  };

  var unit = unitate(token) || {
    invalidReason: MISSING_FTP
  };
  unit.token = token;
  return unit;
}

var partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  }
};

function tokenForPart(part, locale, formatOpts) {
  var type = part.type,
      value = part.value;

  if (type === "literal") {
    return {
      literal: true,
      val: value
    };
  }

  var style = formatOpts[type];
  var val = partTypeStyleToTokenVal[type];

  if (typeof val === "object") {
    val = val[style];
  }

  if (val) {
    return {
      literal: false,
      val: val
    };
  }

  return undefined;
}

function buildRegex(units) {
  var re = units.map(function (u) {
    return u.regex;
  }).reduce(function (f, r) {
    return f + "(" + r.source + ")";
  }, "");
  return ["^" + re + "$", units];
}

function match(input, regex, handlers) {
  var matches = input.match(regex);

  if (matches) {
    var all = {};
    var matchIndex = 1;

    for (var i in handlers) {
      if (hasOwnProperty(handlers, i)) {
        var h = handlers[i],
            groups = h.groups ? h.groups + 1 : 1;

        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }

        matchIndex += groups;
      }
    }

    return [matches, all];
  } else {
    return [matches, {}];
  }
}

function dateTimeFromMatches(matches) {
  var toField = function toField(token) {
    switch (token) {
      case "S":
        return "millisecond";

      case "s":
        return "second";

      case "m":
        return "minute";

      case "h":
      case "H":
        return "hour";

      case "d":
        return "day";

      case "o":
        return "ordinal";

      case "L":
      case "M":
        return "month";

      case "y":
        return "year";

      case "E":
      case "c":
        return "weekday";

      case "W":
        return "weekNumber";

      case "k":
        return "weekYear";

      case "q":
        return "quarter";

      default:
        return null;
    }
  };

  var zone;

  if (!isUndefined(matches.Z)) {
    zone = new FixedOffsetZone(matches.Z);
  } else if (!isUndefined(matches.z)) {
    zone = IANAZone.create(matches.z);
  } else {
    zone = null;
  }

  if (!isUndefined(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }

  if (!isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }

  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }

  if (!isUndefined(matches.u)) {
    matches.S = parseMillis(matches.u);
  }

  var vals = Object.keys(matches).reduce(function (r, k) {
    var f = toField(k);

    if (f) {
      r[f] = matches[k];
    }

    return r;
  }, {});
  return [vals, zone];
}

var dummyDateTimeCache = null;

function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = DateTime.fromMillis(1555555555555);
  }

  return dummyDateTimeCache;
}

function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }

  var formatOpts = Formatter.macroTokenToFormatOpts(token.val);

  if (!formatOpts) {
    return token;
  }

  var formatter = Formatter.create(locale, formatOpts);
  var parts = formatter.formatDateTimeParts(getDummyDateTime());
  var tokens = parts.map(function (p) {
    return tokenForPart(p, locale, formatOpts);
  });

  if (tokens.includes(undefined)) {
    return token;
  }

  return tokens;
}

function expandMacroTokens(tokens, locale) {
  var _Array$prototype;

  return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, tokens.map(function (t) {
    return maybeExpandMacroToken(t, locale);
  }));
}
/**
 * @private
 */


function explainFromTokens(locale, input, format) {
  var tokens = expandMacroTokens(Formatter.parseFormat(format), locale),
      units = tokens.map(function (t) {
    return unitForToken(t, locale);
  }),
      disqualifyingUnit = units.find(function (t) {
    return t.invalidReason;
  });

  if (disqualifyingUnit) {
    return {
      input: input,
      tokens: tokens,
      invalidReason: disqualifyingUnit.invalidReason
    };
  } else {
    var _buildRegex = buildRegex(units),
        regexString = _buildRegex[0],
        handlers = _buildRegex[1],
        regex = RegExp(regexString, "i"),
        _match = match(input, regex, handlers),
        rawMatches = _match[0],
        matches = _match[1],
        _ref6 = matches ? dateTimeFromMatches(matches) : [null, null],
        result = _ref6[0],
        zone = _ref6[1];

    if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
      throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
    }

    return {
      input: input,
      tokens: tokens,
      regex: regex,
      rawMatches: rawMatches,
      matches: matches,
      result: result,
      zone: zone
    };
  }
}
function parseFromTokens(locale, input, format) {
  var _explainFromTokens = explainFromTokens(locale, input, format),
      result = _explainFromTokens.result,
      zone = _explainFromTokens.zone,
      invalidReason = _explainFromTokens.invalidReason;

  return [result, zone, invalidReason];
}

var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function unitOutOfRange(unit, value) {
  return new Invalid("unit out of range", "you specified " + value + " (of type " + typeof value + ") as a " + unit + ", which is invalid");
}

function dayOfWeek(year, month, day) {
  var js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return js === 0 ? 7 : js;
}

function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}

function uncomputeOrdinal(year, ordinal) {
  var table = isLeapYear(year) ? leapLadder : nonLeapLadder,
      month0 = table.findIndex(function (i) {
    return i < ordinal;
  }),
      day = ordinal - table[month0];
  return {
    month: month0 + 1,
    day: day
  };
}
/**
 * @private
 */


function gregorianToWeek(gregObj) {
  var year = gregObj.year,
      month = gregObj.month,
      day = gregObj.day,
      ordinal = computeOrdinal(year, month, day),
      weekday = dayOfWeek(year, month, day);
  var weekNumber = Math.floor((ordinal - weekday + 10) / 7),
      weekYear;

  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = weeksInWeekYear(weekYear);
  } else if (weekNumber > weeksInWeekYear(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }

  return Object.assign({
    weekYear: weekYear,
    weekNumber: weekNumber,
    weekday: weekday
  }, timeObject(gregObj));
}
function weekToGregorian(weekData) {
  var weekYear = weekData.weekYear,
      weekNumber = weekData.weekNumber,
      weekday = weekData.weekday,
      weekdayOfJan4 = dayOfWeek(weekYear, 1, 4),
      yearInDays = daysInYear(weekYear);
  var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3,
      year;

  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(weekYear);
  } else {
    year = weekYear;
  }

  var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal.month,
      day = _uncomputeOrdinal.day;

  return Object.assign({
    year: year,
    month: month,
    day: day
  }, timeObject(weekData));
}
function gregorianToOrdinal(gregData) {
  var year = gregData.year,
      month = gregData.month,
      day = gregData.day,
      ordinal = computeOrdinal(year, month, day);
  return Object.assign({
    year: year,
    ordinal: ordinal
  }, timeObject(gregData));
}
function ordinalToGregorian(ordinalData) {
  var year = ordinalData.year,
      ordinal = ordinalData.ordinal,
      _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal2.month,
      day = _uncomputeOrdinal2.day;

  return Object.assign({
    year: year,
    month: month,
    day: day
  }, timeObject(ordinalData));
}
function hasInvalidWeekData(obj) {
  var validYear = isInteger(obj.weekYear),
      validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)),
      validWeekday = integerBetween(obj.weekday, 1, 7);

  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else return false;
}
function hasInvalidOrdinalData(obj) {
  var validYear = isInteger(obj.year),
      validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else return false;
}
function hasInvalidGregorianData(obj) {
  var validYear = isInteger(obj.year),
      validMonth = integerBetween(obj.month, 1, 12),
      validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else return false;
}
function hasInvalidTimeData(obj) {
  var hour = obj.hour,
      minute = obj.minute,
      second = obj.second,
      millisecond = obj.millisecond;
  var validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0,
      validMinute = integerBetween(minute, 0, 59),
      validSecond = integerBetween(second, 0, 59),
      validMillisecond = integerBetween(millisecond, 0, 999);

  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else return false;
}

var INVALID$2 = "Invalid DateTime";
var MAX_DATE = 8.64e15;

function unsupportedZone(zone) {
  return new Invalid("unsupported zone", "the zone \"" + zone.name + "\" is not supported");
} // we cache week data on the DT object and this intermediates the cache


function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }

  return dt.weekData;
} // clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties


function clone$1(inst, alts) {
  var current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid
  };
  return new DateTime(Object.assign({}, current, alts, {
    old: current
  }));
} // find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)


function fixOffset(localTS, o, tz) {
  // Our UTC time is just a guess because our offset is just a guess
  var utcGuess = localTS - o * 60 * 1000; // Test whether the zone matches the offset for this ts

  var o2 = tz.offset(utcGuess); // If so, offset didn't change and we're done

  if (o === o2) {
    return [utcGuess, o];
  } // If not, change the ts by the difference in the offset


  utcGuess -= (o2 - o) * 60 * 1000; // If that gives us the local time we want, we're done

  var o3 = tz.offset(utcGuess);

  if (o2 === o3) {
    return [utcGuess, o2];
  } // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time


  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
} // convert an epoch timestamp into a calendar object with the given offset


function tsToObj(ts, offset) {
  ts += offset * 60 * 1000;
  var d = new Date(ts);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds()
  };
} // convert a calendar object to a epoch timestamp


function objToTS(obj, offset, zone) {
  return fixOffset(objToLocalTS(obj), offset, zone);
} // create a new DT instance by adding a duration, adjusting for DSTs


function adjustTime(inst, dur) {
  var _dur;

  var keys = Object.keys(dur.values);

  if (keys.indexOf("milliseconds") === -1) {
    keys.push("milliseconds");
  }

  dur = (_dur = dur).shiftTo.apply(_dur, keys);
  var oPre = inst.o,
      year = inst.c.year + dur.years,
      month = inst.c.month + dur.months + dur.quarters * 3,
      c = Object.assign({}, inst.c, {
    year: year,
    month: month,
    day: Math.min(inst.c.day, daysInMonth(year, month)) + dur.days + dur.weeks * 7
  }),
      millisToAdd = Duration.fromObject({
    hours: dur.hours,
    minutes: dur.minutes,
    seconds: dur.seconds,
    milliseconds: dur.milliseconds
  }).as("milliseconds"),
      localTS = objToLocalTS(c);

  var _fixOffset = fixOffset(localTS, oPre, inst.zone),
      ts = _fixOffset[0],
      o = _fixOffset[1];

  if (millisToAdd !== 0) {
    ts += millisToAdd; // that could have changed the offset by going over a DST, but we want to keep the ts the same

    o = inst.zone.offset(ts);
  }

  return {
    ts: ts,
    o: o
  };
} // helper useful in turning the results of parsing into real dates
// by handling the zone options


function parseDataToDateTime(parsed, parsedZone, opts, format, text) {
  var setZone = opts.setZone,
      zone = opts.zone;

  if (parsed && Object.keys(parsed).length !== 0) {
    var interpretationZone = parsedZone || zone,
        inst = DateTime.fromObject(Object.assign(parsed, opts, {
      zone: interpretationZone,
      // setZone is a valid option in the calling methods, but not in fromObject
      setZone: undefined
    }));
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(new Invalid("unparsable", "the input \"" + text + "\" can't be parsed as " + format));
  }
} // if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details


function toTechFormat(dt, format, allowZ) {
  if (allowZ === void 0) {
    allowZ = true;
  }

  return dt.isValid ? Formatter.create(Locale.create("en-US"), {
    allowZ: allowZ,
    forceSimple: true
  }).formatDateTimeFromString(dt, format) : null;
} // technical time formats (e.g. the time part of ISO 8601), take some options
// and this commonizes their handling


function toTechTimeFormat(dt, _ref) {
  var _ref$suppressSeconds = _ref.suppressSeconds,
      suppressSeconds = _ref$suppressSeconds === void 0 ? false : _ref$suppressSeconds,
      _ref$suppressMillisec = _ref.suppressMilliseconds,
      suppressMilliseconds = _ref$suppressMillisec === void 0 ? false : _ref$suppressMillisec,
      includeOffset = _ref.includeOffset,
      _ref$includeZone = _ref.includeZone,
      includeZone = _ref$includeZone === void 0 ? false : _ref$includeZone,
      _ref$spaceZone = _ref.spaceZone,
      spaceZone = _ref$spaceZone === void 0 ? false : _ref$spaceZone,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? "extended" : _ref$format;
  var fmt = format === "basic" ? "HHmm" : "HH:mm";

  if (!suppressSeconds || dt.second !== 0 || dt.millisecond !== 0) {
    fmt += format === "basic" ? "ss" : ":ss";

    if (!suppressMilliseconds || dt.millisecond !== 0) {
      fmt += ".SSS";
    }
  }

  if ((includeZone || includeOffset) && spaceZone) {
    fmt += " ";
  }

  if (includeZone) {
    fmt += "z";
  } else if (includeOffset) {
    fmt += format === "basic" ? "ZZZ" : "ZZ";
  }

  return toTechFormat(dt, fmt);
} // defaults for unspecified units in the supported calendars


var defaultUnitValues = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultWeekUnitValues = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultOrdinalUnitValues = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}; // Units in the supported calendars, sorted by bigness

var orderedUnits$1 = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
    orderedWeekUnits = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"],
    orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"]; // standardize case and plurality in units

function normalizeUnit(unit) {
  var normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[unit.toLowerCase()];
  if (!normalized) throw new InvalidUnitError(unit);
  return normalized;
} // this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.


function quickDT(obj, zone) {
  // assume we have the higher-order units
  for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits$1), _step; !(_step = _iterator()).done;) {
    var u = _step.value;

    if (isUndefined(obj[u])) {
      obj[u] = defaultUnitValues[u];
    }
  }

  var invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);

  if (invalid) {
    return DateTime.invalid(invalid);
  }

  var tsNow = Settings.now(),
      offsetProvis = zone.offset(tsNow),
      _objToTS = objToTS(obj, offsetProvis, zone),
      ts = _objToTS[0],
      o = _objToTS[1];

  return new DateTime({
    ts: ts,
    zone: zone,
    o: o
  });
}

function diffRelative(start, end, opts) {
  var round = isUndefined(opts.round) ? true : opts.round,
      format = function format(c, unit) {
    c = roundTo(c, round || opts.calendary ? 0 : 2, true);
    var formatter = end.loc.clone(opts).relFormatter(opts);
    return formatter.format(c, unit);
  },
      differ = function differ(unit) {
    if (opts.calendary) {
      if (!end.hasSame(start, unit)) {
        return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
      } else return 0;
    } else {
      return end.diff(start, unit).get(unit);
    }
  };

  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }

  for (var _iterator2 = _createForOfIteratorHelperLoose(opts.units), _step2; !(_step2 = _iterator2()).done;) {
    var unit = _step2.value;
    var count = differ(unit);

    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }

  return format(0, opts.units[opts.units.length - 1]);
}
/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link local}, {@link utc}, and (most flexibly) {@link fromObject}. To create one from a standard string format, use {@link fromISO}, {@link fromHTTP}, and {@link fromRFC2822}. To create one from a custom string format, use {@link fromFormat}. To create one from a native JS date, use {@link fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link toObject}), use the {@link year}, {@link month},
 * {@link day}, {@link hour}, {@link minute}, {@link second}, {@link millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link weekYear}, {@link weekNumber}, and {@link weekday} accessors.
 * * **Configuration** See the {@link locale} and {@link numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link set}, {@link reconfigure}, {@link setZone}, {@link setLocale}, {@link plus}, {@link minus}, {@link endOf}, {@link startOf}, {@link toUTC}, and {@link toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link toRelative}, {@link toRelativeCalendar}, {@link toJSON}, {@link toISO}, {@link toHTTP}, {@link toObject}, {@link toRFC2822}, {@link toString}, {@link toLocaleString}, {@link toFormat}, {@link toMillis} and {@link toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */


var DateTime = /*#__PURE__*/function () {
  /**
   * @access private
   */
  function DateTime(config) {
    var zone = config.zone || Settings.defaultZone;
    var invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
    /**
     * @access private
     */

    this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
    var c = null,
        o = null;

    if (!invalid) {
      var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);

      if (unchanged) {
        var _ref2 = [config.old.c, config.old.o];
        c = _ref2[0];
        o = _ref2[1];
      } else {
        var ot = zone.offset(this.ts);
        c = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
        c = invalid ? null : c;
        o = invalid ? null : ot;
      }
    }
    /**
     * @access private
     */


    this._zone = zone;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.invalid = invalid;
    /**
     * @access private
     */

    this.weekData = null;
    /**
     * @access private
     */

    this.c = c;
    /**
     * @access private
     */

    this.o = o;
    /**
     * @access private
     */

    this.isLuxonDateTime = true;
  } // CONSTRUCT

  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                            //~> now
   * @example DateTime.local(2017)                        //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                     //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12)                 //~> 2017-03-12T00:00:00
   * @example DateTime.local(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */


  DateTime.local = function local(year, month, day, hour, minute, second, millisecond) {
    if (isUndefined(year)) {
      return new DateTime({
        ts: Settings.now()
      });
    } else {
      return quickDT({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      }, Settings.defaultZone);
    }
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.utc()                            //~> now
   * @example DateTime.utc(2017)                        //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                     //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                 //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765Z
   * @return {DateTime}
   */
  ;

  DateTime.utc = function utc(year, month, day, hour, minute, second, millisecond) {
    if (isUndefined(year)) {
      return new DateTime({
        ts: Settings.now(),
        zone: FixedOffsetZone.utcInstance
      });
    } else {
      return quickDT({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      }, FixedOffsetZone.utcInstance);
    }
  }
  /**
   * Create a DateTime from a Javascript Date object. Uses the default zone.
   * @param {Date} date - a Javascript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  ;

  DateTime.fromJSDate = function fromJSDate(date, options) {
    if (options === void 0) {
      options = {};
    }

    var ts = isDate(date) ? date.valueOf() : NaN;

    if (Number.isNaN(ts)) {
      return DateTime.invalid("invalid input");
    }

    var zoneToUse = normalizeZone(options.zone, Settings.defaultZone);

    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    return new DateTime({
      ts: ts,
      zone: zoneToUse,
      loc: Locale.fromObject(options)
    });
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromMillis = function fromMillis(milliseconds, options) {
    if (options === void 0) {
      options = {};
    }

    if (!isNumber(milliseconds)) {
      throw new InvalidArgumentError("fromMillis requires a numerical input, but received a " + typeof milliseconds + " with value " + milliseconds);
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
      return DateTime.invalid("Timestamp out of range");
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromSeconds = function fromSeconds(seconds, options) {
    if (options === void 0) {
      options = {};
    }

    if (!isNumber(seconds)) {
      throw new InvalidArgumentError("fromSeconds requires a numerical input");
    } else {
      return new DateTime({
        ts: seconds * 1000,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a Javascript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {string|Zone} [obj.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [obj.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} obj.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} obj.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */
  ;

  DateTime.fromObject = function fromObject(obj) {
    var zoneToUse = normalizeZone(obj.zone, Settings.defaultZone);

    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    var tsNow = Settings.now(),
        offsetProvis = zoneToUse.offset(tsNow),
        normalized = normalizeObject(obj, normalizeUnit, ["zone", "locale", "outputCalendar", "numberingSystem"]),
        containsOrdinal = !isUndefined(normalized.ordinal),
        containsGregorYear = !isUndefined(normalized.year),
        containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day),
        containsGregor = containsGregorYear || containsGregorMD,
        definiteWeekDef = normalized.weekYear || normalized.weekNumber,
        loc = Locale.fromObject(obj); // cases:
    // just a weekday -> this week's instance of that weekday, no worries
    // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
    // (gregorian month or day) + ordinal -> error
    // otherwise just use weeks or ordinals or gregorian, depending on what's specified

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }

    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor; // configure ourselves to deal with gregorian dates or week stuff

    var units,
        defaultValues,
        objNow = tsToObj(tsNow, offsetProvis);

    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = gregorianToWeek(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = gregorianToOrdinal(objNow);
    } else {
      units = orderedUnits$1;
      defaultValues = defaultUnitValues;
    } // set default values for missing stuff


    var foundFirst = false;

    for (var _iterator3 = _createForOfIteratorHelperLoose(units), _step3; !(_step3 = _iterator3()).done;) {
      var u = _step3.value;
      var v = normalized[u];

      if (!isUndefined(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    } // make sure the values we have are in range


    var higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized),
        invalid = higherOrderInvalid || hasInvalidTimeData(normalized);

    if (invalid) {
      return DateTime.invalid(invalid);
    } // compute the actual time


    var gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized,
        _objToTS2 = objToTS(gregorian, offsetProvis, zoneToUse),
        tsFinal = _objToTS2[0],
        offsetFinal = _objToTS2[1],
        inst = new DateTime({
      ts: tsFinal,
      zone: zoneToUse,
      o: offsetFinal,
      loc: loc
    }); // gregorian data + weekday serves only to validate


    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid("mismatched weekday", "you can't specify both a weekday of " + normalized.weekday + " and a date of " + inst.toISO());
    }

    return inst;
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  ;

  DateTime.fromISO = function fromISO(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseISODate = parseISODate(text),
        vals = _parseISODate[0],
        parsedZone = _parseISODate[1];

    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  ;

  DateTime.fromRFC2822 = function fromRFC2822(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseRFC2822Date = parseRFC2822Date(text),
        vals = _parseRFC2822Date[0],
        parsedZone = _parseRFC2822Date[1];

    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  ;

  DateTime.fromHTTP = function fromHTTP(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseHTTPDate = parseHTTPDate(text),
        vals = _parseHTTPDate[0],
        parsedZone = _parseHTTPDate[1];

    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @see https://moment.github.io/luxon/docs/manual/parsing.html#table-of-tokens
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromFormat = function fromFormat(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (isUndefined(text) || isUndefined(fmt)) {
      throw new InvalidArgumentError("fromFormat requires an input string and a format");
    }

    var _opts = opts,
        _opts$locale = _opts.locale,
        locale = _opts$locale === void 0 ? null : _opts$locale,
        _opts$numberingSystem = _opts.numberingSystem,
        numberingSystem = _opts$numberingSystem === void 0 ? null : _opts$numberingSystem,
        localeToUse = Locale.fromOpts({
      locale: locale,
      numberingSystem: numberingSystem,
      defaultToEN: true
    }),
        _parseFromTokens = parseFromTokens(localeToUse, text, fmt),
        vals = _parseFromTokens[0],
        parsedZone = _parseFromTokens[1],
        invalid = _parseFromTokens[2];

    if (invalid) {
      return DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(vals, parsedZone, opts, "format " + fmt, text);
    }
  }
  /**
   * @deprecated use fromFormat instead
   */
  ;

  DateTime.fromString = function fromString(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return DateTime.fromFormat(text, fmt, opts);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  ;

  DateTime.fromSQL = function fromSQL(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseSQL = parseSQL(text),
        vals = _parseSQL[0],
        parsedZone = _parseSQL[1];

    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  ;

  DateTime.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDateTimeError(invalid);
    } else {
      return new DateTime({
        invalid: invalid
      });
    }
  }
  /**
   * Check if an object is a DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  DateTime.isDateTime = function isDateTime(o) {
    return o && o.isLuxonDateTime || false;
  } // INFO

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  ;

  var _proto = DateTime.prototype;

  _proto.get = function get(unit) {
    return this[unit];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  ;

  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  _proto.resolvedLocaleOpts = function resolvedLocaleOpts(opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _Formatter$create$res = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this),
        locale = _Formatter$create$res.locale,
        numberingSystem = _Formatter$create$res.numberingSystem,
        calendar = _Formatter$create$res.calendar;

    return {
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: calendar
    };
  } // TRANSFORM

  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  ;

  _proto.toUTC = function toUTC(offset, opts) {
    if (offset === void 0) {
      offset = 0;
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.setZone(FixedOffsetZone.instance(offset), opts);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  ;

  _proto.toLocal = function toLocal() {
    return this.setZone(Settings.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link plus}. You may wish to use {@link toLocal} and {@link toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  ;

  _proto.setZone = function setZone(zone, _temp) {
    var _ref3 = _temp === void 0 ? {} : _temp,
        _ref3$keepLocalTime = _ref3.keepLocalTime,
        keepLocalTime = _ref3$keepLocalTime === void 0 ? false : _ref3$keepLocalTime,
        _ref3$keepCalendarTim = _ref3.keepCalendarTime,
        keepCalendarTime = _ref3$keepCalendarTim === void 0 ? false : _ref3$keepCalendarTim;

    zone = normalizeZone(zone, Settings.defaultZone);

    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    } else {
      var newTS = this.ts;

      if (keepLocalTime || keepCalendarTime) {
        var offsetGuess = zone.offset(this.ts);
        var asObj = this.toObject();

        var _objToTS3 = objToTS(asObj, offsetGuess, zone);

        newTS = _objToTS3[0];
      }

      return clone$1(this, {
        ts: newTS,
        zone: zone
      });
    }
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  ;

  _proto.reconfigure = function reconfigure(_temp2) {
    var _ref4 = _temp2 === void 0 ? {} : _temp2,
        locale = _ref4.locale,
        numberingSystem = _ref4.numberingSystem,
        outputCalendar = _ref4.outputCalendar;

    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: outputCalendar
    });
    return clone$1(this, {
      loc: loc
    });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  ;

  _proto.setLocale = function setLocale(locale) {
    return this.reconfigure({
      locale: locale
    });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link reconfigure} and {@link setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  ;

  _proto.set = function set(values) {
    if (!this.isValid) return this;
    var normalized = normalizeObject(values, normalizeUnit, []),
        settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday);
    var mixed;

    if (settingWeekStuff) {
      mixed = weekToGregorian(Object.assign(gregorianToWeek(this.c), normalized));
    } else if (!isUndefined(normalized.ordinal)) {
      mixed = ordinalToGregorian(Object.assign(gregorianToOrdinal(this.c), normalized));
    } else {
      mixed = Object.assign(this.toObject(), normalized); // if we didn't set the day but we ended up on an overflow date,
      // use the last day of the right month

      if (isUndefined(normalized.day)) {
        mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
      }
    }

    var _objToTS4 = objToTS(mixed, this.o, this.zone),
        ts = _objToTS4[0],
        o = _objToTS4[1];

    return clone$1(this, {
      ts: ts,
      o: o
    });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.local().plus(123) //~> in 123 milliseconds
   * @example DateTime.local().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.local().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.local().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.local().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.local().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  ;

  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration);
    return clone$1(this, adjustTime(this, dur));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
  */
  ;

  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration).negate();
    return clone$1(this, adjustTime(this, dur));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  ;

  _proto.startOf = function startOf(unit) {
    if (!this.isValid) return this;
    var o = {},
        normalizedUnit = Duration.normalizeUnit(unit);

    switch (normalizedUnit) {
      case "years":
        o.month = 1;
      // falls through

      case "quarters":
      case "months":
        o.day = 1;
      // falls through

      case "weeks":
      case "days":
        o.hour = 0;
      // falls through

      case "hours":
        o.minute = 0;
      // falls through

      case "minutes":
        o.second = 0;
      // falls through

      case "seconds":
        o.millisecond = 0;
        break;
      // no default, invalid units throw in normalizeUnit()
    }

    if (normalizedUnit === "weeks") {
      o.weekday = 1;
    }

    if (normalizedUnit === "quarters") {
      var q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }

    return this.set(o);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'month', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  ;

  _proto.endOf = function endOf(unit) {
    var _this$plus;

    return this.isValid ? this.plus((_this$plus = {}, _this$plus[unit] = 1, _this$plus)).startOf(unit).minus(1) : this;
  } // OUTPUT

  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @see https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options
   * @example DateTime.local().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.local().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.local().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.local().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  ;

  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID$2;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param opts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @example DateTime.local().toLocaleString(); //=> 4/20/2017
   * @example DateTime.local().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.local().toLocaleString({ locale: 'en-gb' }); //=> '20/04/2017'
   * @example DateTime.local().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.local().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.local().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.local().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.local().toLocaleString({ hour: '2-digit', minute: '2-digit', hour12: false }); //=> '11:32'
   * @return {string}
   */
  ;

  _proto.toLocaleString = function toLocaleString(opts) {
    if (opts === void 0) {
      opts = DATE_SHORT;
    }

    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTime(this) : INVALID$2;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.local().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  ;

  _proto.toLocaleParts = function toLocaleParts(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.local().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.local().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.local().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  ;

  _proto.toISO = function toISO(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) {
      return null;
    }

    return this.toISODate(opts) + "T" + this.toISOTime(opts);
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  ;

  _proto.toISODate = function toISODate(_temp3) {
    var _ref5 = _temp3 === void 0 ? {} : _temp3,
        _ref5$format = _ref5.format,
        format = _ref5$format === void 0 ? "extended" : _ref5$format;

    var fmt = format === "basic" ? "yyyyMMdd" : "yyyy-MM-dd";

    if (this.year > 9999) {
      fmt = "+" + fmt;
    }

    return toTechFormat(this, fmt);
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  ;

  _proto.toISOWeekDate = function toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(_temp4) {
    var _ref6 = _temp4 === void 0 ? {} : _temp4,
        _ref6$suppressMillise = _ref6.suppressMilliseconds,
        suppressMilliseconds = _ref6$suppressMillise === void 0 ? false : _ref6$suppressMillise,
        _ref6$suppressSeconds = _ref6.suppressSeconds,
        suppressSeconds = _ref6$suppressSeconds === void 0 ? false : _ref6$suppressSeconds,
        _ref6$includeOffset = _ref6.includeOffset,
        includeOffset = _ref6$includeOffset === void 0 ? true : _ref6$includeOffset,
        _ref6$format = _ref6.format,
        format = _ref6$format === void 0 ? "extended" : _ref6$format;

    return toTechTimeFormat(this, {
      suppressSeconds: suppressSeconds,
      suppressMilliseconds: suppressMilliseconds,
      includeOffset: includeOffset,
      format: format
    });
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime, always in UTC
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  ;

  _proto.toRFC2822 = function toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  ;

  _proto.toHTTP = function toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  ;

  _proto.toSQLDate = function toSQLDate() {
    return toTechFormat(this, "yyyy-MM-dd");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.local().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.local().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.local().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  ;

  _proto.toSQLTime = function toSQLTime(_temp5) {
    var _ref7 = _temp5 === void 0 ? {} : _temp5,
        _ref7$includeOffset = _ref7.includeOffset,
        includeOffset = _ref7$includeOffset === void 0 ? true : _ref7$includeOffset,
        _ref7$includeZone = _ref7.includeZone,
        includeZone = _ref7$includeZone === void 0 ? false : _ref7$includeZone;

    return toTechTimeFormat(this, {
      includeOffset: includeOffset,
      includeZone: includeZone,
      spaceZone: true
    });
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  ;

  _proto.toSQL = function toSQL(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) {
      return null;
    }

    return this.toSQLDate() + " " + this.toSQLTime(opts);
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    return this.isValid ? this.toISO() : INVALID$2;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link toMillis}
   * @return {number}
   */
  ;

  _proto.valueOf = function valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  ;

  _proto.toMillis = function toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  ;

  _proto.toSeconds = function toSeconds() {
    return this.isValid ? this.ts / 1000 : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  ;

  _proto.toJSON = function toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  ;

  _proto.toBSON = function toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a Javascript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.local().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  ;

  _proto.toObject = function toObject(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return {};
    var base = Object.assign({}, this.c);

    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }

    return base;
  }
  /**
   * Returns a Javascript Date equivalent to this DateTime.
   * @return {Date}
   */
  ;

  _proto.toJSDate = function toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  } // COMPARE

  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  ;

  _proto.diff = function diff(otherDateTime, unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid || !otherDateTime.isValid) {
      return Duration.invalid(this.invalid || otherDateTime.invalid, "created by diffing an invalid DateTime");
    }

    var durOpts = Object.assign({
      locale: this.locale,
      numberingSystem: this.numberingSystem
    }, opts);

    var units = maybeArray(unit).map(Duration.normalizeUnit),
        otherIsLater = otherDateTime.valueOf() > this.valueOf(),
        earlier = otherIsLater ? this : otherDateTime,
        later = otherIsLater ? otherDateTime : this,
        diffed = _diff(earlier, later, units, durOpts);

    return otherIsLater ? diffed.negate() : diffed;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  ;

  _proto.diffNow = function diffNow(unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.diff(DateTime.local(), unit, opts);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  ;

  _proto.until = function until(otherDateTime) {
    return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.local().hasSame(otherDT, 'day'); //~> true if both the same calendar day
   * @return {boolean}
   */
  ;

  _proto.hasSame = function hasSame(otherDateTime, unit) {
    if (!this.isValid) return false;

    if (unit === "millisecond") {
      return this.valueOf() === otherDateTime.valueOf();
    } else {
      var inputMs = otherDateTime.valueOf();
      return this.startOf(unit) <= inputMs && inputMs <= this.endOf(unit);
    }
  }
  /**
   * Equality check
   * Two DateTimes are equal iff they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(other) {
    return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.local()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {boolean} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.local().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.local().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.local().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.local().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.local().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.local().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  ;

  _proto.toRelative = function toRelative(options) {
    if (options === void 0) {
      options = {};
    }

    if (!this.isValid) return null;
    var base = options.base || DateTime.fromObject({
      zone: this.zone
    }),
        padding = options.padding ? this < base ? -options.padding : options.padding : 0;
    return diffRelative(base, this.plus(padding), Object.assign(options, {
      numeric: "always",
      units: ["years", "months", "days", "hours", "minutes", "seconds"]
    }));
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.local()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.local().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.local().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.local().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.local().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  ;

  _proto.toRelativeCalendar = function toRelativeCalendar(options) {
    if (options === void 0) {
      options = {};
    }

    if (!this.isValid) return null;
    return diffRelative(options.base || DateTime.fromObject({
      zone: this.zone
    }), this, Object.assign(options, {
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: true
    }));
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  ;

  DateTime.min = function min() {
    for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }

    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("min requires all arguments be DateTimes");
    }

    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  ;

  DateTime.max = function max() {
    for (var _len2 = arguments.length, dateTimes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      dateTimes[_key2] = arguments[_key2];
    }

    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("max requires all arguments be DateTimes");
    }

    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.max);
  } // MISC

  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  ;

  DateTime.fromFormatExplain = function fromFormatExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$locale = _options.locale,
        locale = _options$locale === void 0 ? null : _options$locale,
        _options$numberingSys = _options.numberingSystem,
        numberingSystem = _options$numberingSys === void 0 ? null : _options$numberingSys,
        localeToUse = Locale.fromOpts({
      locale: locale,
      numberingSystem: numberingSystem,
      defaultToEN: true
    });
    return explainFromTokens(localeToUse, text, fmt);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  ;

  DateTime.fromStringExplain = function fromStringExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }

    return DateTime.fromFormatExplain(text, fmt, options);
  } // FORMAT PRESETS

  /**
   * {@link toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  ;

  _createClass(DateTime, [{
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
     * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "outputCalendar",
    get: function get() {
      return this.isValid ? this.loc.outputCalendar : null;
    }
    /**
     * Get the time zone associated with this DateTime.
     * @type {Zone}
     */

  }, {
    key: "zone",
    get: function get() {
      return this._zone;
    }
    /**
     * Get the name of the time zone.
     * @type {string}
     */

  }, {
    key: "zoneName",
    get: function get() {
      return this.isValid ? this.zone.name : null;
    }
    /**
     * Get the year
     * @example DateTime.local(2017, 5, 25).year //=> 2017
     * @type {number}
     */

  }, {
    key: "year",
    get: function get() {
      return this.isValid ? this.c.year : NaN;
    }
    /**
     * Get the quarter
     * @example DateTime.local(2017, 5, 25).quarter //=> 2
     * @type {number}
     */

  }, {
    key: "quarter",
    get: function get() {
      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
    /**
     * Get the month (1-12).
     * @example DateTime.local(2017, 5, 25).month //=> 5
     * @type {number}
     */

  }, {
    key: "month",
    get: function get() {
      return this.isValid ? this.c.month : NaN;
    }
    /**
     * Get the day of the month (1-30ish).
     * @example DateTime.local(2017, 5, 25).day //=> 25
     * @type {number}
     */

  }, {
    key: "day",
    get: function get() {
      return this.isValid ? this.c.day : NaN;
    }
    /**
     * Get the hour of the day (0-23).
     * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
     * @type {number}
     */

  }, {
    key: "hour",
    get: function get() {
      return this.isValid ? this.c.hour : NaN;
    }
    /**
     * Get the minute of the hour (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
     * @type {number}
     */

  }, {
    key: "minute",
    get: function get() {
      return this.isValid ? this.c.minute : NaN;
    }
    /**
     * Get the second of the minute (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
     * @type {number}
     */

  }, {
    key: "second",
    get: function get() {
      return this.isValid ? this.c.second : NaN;
    }
    /**
     * Get the millisecond of the second (0-999).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
     * @type {number}
     */

  }, {
    key: "millisecond",
    get: function get() {
      return this.isValid ? this.c.millisecond : NaN;
    }
    /**
     * Get the week year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekYear //=> 2015
     * @type {number}
     */

  }, {
    key: "weekYear",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
    }
    /**
     * Get the week number of the week year (1-52ish).
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
     * @type {number}
     */

  }, {
    key: "weekNumber",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
    }
    /**
     * Get the day of the week.
     * 1 is Monday and 7 is Sunday
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekday //=> 4
     * @type {number}
     */

  }, {
    key: "weekday",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
    }
    /**
     * Get the ordinal (meaning the day of the year)
     * @example DateTime.local(2017, 5, 25).ordinal //=> 145
     * @type {number|DateTime}
     */

  }, {
    key: "ordinal",
    get: function get() {
      return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
    }
    /**
     * Get the human readable short month name, such as 'Oct'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
     * @type {string}
     */

  }, {
    key: "monthShort",
    get: function get() {
      return this.isValid ? Info.months("short", {
        locale: this.locale
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable long month name, such as 'October'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthLong //=> October
     * @type {string}
     */

  }, {
    key: "monthLong",
    get: function get() {
      return this.isValid ? Info.months("long", {
        locale: this.locale
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable short weekday, such as 'Mon'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
     * @type {string}
     */

  }, {
    key: "weekdayShort",
    get: function get() {
      return this.isValid ? Info.weekdays("short", {
        locale: this.locale
      })[this.weekday - 1] : null;
    }
    /**
     * Get the human readable long weekday, such as 'Monday'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
     * @type {string}
     */

  }, {
    key: "weekdayLong",
    get: function get() {
      return this.isValid ? Info.weekdays("long", {
        locale: this.locale
      })[this.weekday - 1] : null;
    }
    /**
     * Get the UTC offset of this DateTime in minutes
     * @example DateTime.local().offset //=> -240
     * @example DateTime.utc().offset //=> 0
     * @type {number}
     */

  }, {
    key: "offset",
    get: function get() {
      return this.isValid ? +this.o : NaN;
    }
    /**
     * Get the short human name for the zone's current offset, for example "EST" or "EDT".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: "offsetNameShort",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "short",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: "offsetNameLong",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "long",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get whether this zone's offset ever changes, as in a DST.
     * @type {boolean}
     */

  }, {
    key: "isOffsetFixed",
    get: function get() {
      return this.isValid ? this.zone.universal : null;
    }
    /**
     * Get whether the DateTime is in a DST.
     * @type {boolean}
     */

  }, {
    key: "isInDST",
    get: function get() {
      if (this.isOffsetFixed) {
        return false;
      } else {
        return this.offset > this.set({
          month: 1
        }).offset || this.offset > this.set({
          month: 5
        }).offset;
      }
    }
    /**
     * Returns true if this DateTime is in a leap year, false otherwise
     * @example DateTime.local(2016).isInLeapYear //=> true
     * @example DateTime.local(2013).isInLeapYear //=> false
     * @type {boolean}
     */

  }, {
    key: "isInLeapYear",
    get: function get() {
      return isLeapYear(this.year);
    }
    /**
     * Returns the number of days in this DateTime's month
     * @example DateTime.local(2016, 2).daysInMonth //=> 29
     * @example DateTime.local(2016, 3).daysInMonth //=> 31
     * @type {number}
     */

  }, {
    key: "daysInMonth",
    get: function get() {
      return daysInMonth(this.year, this.month);
    }
    /**
     * Returns the number of days in this DateTime's year
     * @example DateTime.local(2016).daysInYear //=> 366
     * @example DateTime.local(2013).daysInYear //=> 365
     * @type {number}
     */

  }, {
    key: "daysInYear",
    get: function get() {
      return this.isValid ? daysInYear(this.year) : NaN;
    }
    /**
     * Returns the number of weeks in this DateTime's year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2004).weeksInWeekYear //=> 53
     * @example DateTime.local(2013).weeksInWeekYear //=> 52
     * @type {number}
     */

  }, {
    key: "weeksInWeekYear",
    get: function get() {
      return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
    }
  }], [{
    key: "DATE_SHORT",
    get: function get() {
      return DATE_SHORT;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_MED",
    get: function get() {
      return DATE_MED;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_FULL",
    get: function get() {
      return DATE_FULL;
    }
    /**
     * {@link toLocaleString} format like 'Tuesday, October 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_HUGE",
    get: function get() {
      return DATE_HUGE;
    }
    /**
     * {@link toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_SIMPLE",
    get: function get() {
      return TIME_SIMPLE;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_SECONDS",
    get: function get() {
      return TIME_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_WITH_SHORT_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_WITH_LONG_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_SIMPLE",
    get: function get() {
      return TIME_24_SIMPLE;
    }
    /**
     * {@link toLocaleString} format like '09:30:23', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_SECONDS",
    get: function get() {
      return TIME_24_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 EDT', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_24_WITH_SHORT_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_24_WITH_LONG_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_SHORT",
    get: function get() {
      return DATETIME_SHORT;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_SHORT_WITH_SECONDS",
    get: function get() {
      return DATETIME_SHORT_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED",
    get: function get() {
      return DATETIME_MED;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED_WITH_SECONDS",
    get: function get() {
      return DATETIME_MED_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED_WITH_WEEKDAY",
    get: function get() {
      return DATETIME_MED_WITH_WEEKDAY;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_FULL",
    get: function get() {
      return DATETIME_FULL;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_FULL_WITH_SECONDS",
    get: function get() {
      return DATETIME_FULL_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_HUGE",
    get: function get() {
      return DATETIME_HUGE;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_HUGE_WITH_SECONDS",
    get: function get() {
      return DATETIME_HUGE_WITH_SECONDS;
    }
  }]);

  return DateTime;
}();
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new InvalidArgumentError("Unknown datetime argument: " + dateTimeish + ", of type " + typeof dateTimeish);
  }
}

exports.DateTime = DateTime;
exports.Duration = Duration;
exports.FixedOffsetZone = FixedOffsetZone;
exports.IANAZone = IANAZone;
exports.Info = Info;
exports.Interval = Interval;
exports.InvalidZone = InvalidZone;
exports.LocalZone = LocalZone;
exports.Settings = Settings;
exports.Zone = Zone;
//# sourceMappingURL=luxon.js.map


/***/ }),

/***/ "./node_modules/ngx-material-timepicker/fesm5/ngx-material-timepicker.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ngx-material-timepicker/fesm5/ngx-material-timepicker.js ***!
  \*******************************************************************************/
/*! exports provided: NgxMaterialTimepicker12HoursFaceComponent, NgxMaterialTimepicker24HoursFaceComponent, NgxMaterialTimepickerComponent, NgxMaterialTimepickerDialComponent, NgxMaterialTimepickerDialControlComponent, NgxMaterialTimepickerFaceComponent, NgxMaterialTimepickerMinutesFaceComponent, NgxMaterialTimepickerModule, NgxMaterialTimepickerThemeDirective, NgxMaterialTimepickerToggleIconDirective, NgxTimepickerFieldComponent, TimepickerDirective, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs, ɵt, ɵu, ɵv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMaterialTimepicker12HoursFaceComponent", function() { return NgxMaterialTimepicker12HoursFaceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMaterialTimepicker24HoursFaceComponent", function() { return NgxMaterialTimepicker24HoursFaceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMaterialTimepickerComponent", function() { return NgxMaterialTimepickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMaterialTimepickerDialComponent", function() { return NgxMaterialTimepickerDialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMaterialTimepickerDialControlComponent", function() { return NgxMaterialTimepickerDialControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMaterialTimepickerFaceComponent", function() { return NgxMaterialTimepickerFaceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMaterialTimepickerMinutesFaceComponent", function() { return NgxMaterialTimepickerMinutesFaceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMaterialTimepickerModule", function() { return NgxMaterialTimepickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMaterialTimepickerThemeDirective", function() { return NgxMaterialTimepickerThemeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMaterialTimepickerToggleIconDirective", function() { return NgxMaterialTimepickerToggleIconDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxTimepickerFieldComponent", function() { return NgxTimepickerFieldComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerDirective", function() { return TimepickerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgxMaterialTimepickerEventService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DomService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return NgxMaterialTimepickerToggleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return NgxMaterialTimepickerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return TIME_LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return NgxMaterialTimepickerHoursFace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return TimeParserPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return NgxMaterialTimepickerButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return NgxMaterialTimepickerPeriodComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return TimeFormatterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return OverlayDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return AutofocusDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return MinutesFormatterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return NgxTimepickerTimeControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return NgxTimepickerPeriodSelectorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return TimeLocalizerPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return ActiveHourPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return ActiveMinutePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return AnimationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return NgxMaterialTimepickerContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return NgxMaterialTimepickerContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return AppendToInputDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var NgxMaterialTimepickerEventService = /** @class */ (function () {
    function NgxMaterialTimepickerEventService() {
        this.backdropClickSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keydownEventSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    Object.defineProperty(NgxMaterialTimepickerEventService.prototype, "backdropClick", {
        get: function () {
            return this.backdropClickSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])({ bufferSize: 1, refCount: true }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerEventService.prototype, "keydownEvent", {
        get: function () {
            return this.keydownEventSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])({ bufferSize: 1, refCount: true }));
        },
        enumerable: true,
        configurable: true
    });
    NgxMaterialTimepickerEventService.prototype.dispatchEvent = function (event) {
        switch (event.type) {
            case 'click':
                this.backdropClickSubject.next(event);
                break;
            case 'keydown':
                this.keydownEventSubject.next(event);
                break;
            default:
                throw new Error('no such event type');
        }
    };
    NgxMaterialTimepickerEventService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function NgxMaterialTimepickerEventService_Factory() { return new NgxMaterialTimepickerEventService(); }, token: NgxMaterialTimepickerEventService, providedIn: "root" });
    NgxMaterialTimepickerEventService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], NgxMaterialTimepickerEventService);
    return NgxMaterialTimepickerEventService;
}());

var DomService = /** @class */ (function () {
    function DomService(cfr, appRef, injector, document) {
        this.cfr = cfr;
        this.appRef = appRef;
        this.injector = injector;
        this.document = document;
    }
    DomService.prototype.appendTimepickerToBody = function (timepicker, config) {
        var _this = this;
        this.componentRef = this.cfr.resolveComponentFactory(timepicker).create(this.injector);
        Object.keys(config).forEach(function (key) { return _this.componentRef.instance[key] = config[key]; });
        this.appRef.attachView(this.componentRef.hostView);
        var domElement = this.componentRef.hostView
            .rootNodes[0];
        this.document.body.appendChild(domElement);
    };
    DomService.prototype.destroyTimepicker = function () {
        this.componentRef.destroy();
        this.appRef.detachView(this.componentRef.hostView);
    };
    DomService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    DomService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function DomService_Factory() { return new DomService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], 8)); }, token: DomService, providedIn: "root" });
    DomService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))
    ], DomService);
    return DomService;
}());

var TimeUnit;
(function (TimeUnit) {
    TimeUnit[TimeUnit["HOUR"] = 0] = "HOUR";
    TimeUnit[TimeUnit["MINUTE"] = 1] = "MINUTE";
})(TimeUnit || (TimeUnit = {}));

var TimePeriod;
(function (TimePeriod) {
    TimePeriod["AM"] = "AM";
    TimePeriod["PM"] = "PM";
})(TimePeriod || (TimePeriod = {}));

var TimeFormat;
(function (TimeFormat) {
    TimeFormat["TWELVE"] = "hh:mm a";
    TimeFormat["TWELVE_SHORT"] = "h:m a";
    TimeFormat["TWENTY_FOUR"] = "HH:mm";
    TimeFormat["TWENTY_FOUR_SHORT"] = "H:m";
})(TimeFormat || (TimeFormat = {}));

function isSameOrAfter(time, compareWith, unit) {
    if (unit === void 0) { unit = 'minutes'; }
    if (unit === 'hours') {
        return time.hour >= compareWith.hour;
    }
    if (unit === 'minutes') {
        return time.hasSame(compareWith, unit) || time.valueOf() > compareWith.valueOf();
    }
}
function isSameOrBefore(time, compareWith, unit) {
    if (unit === void 0) { unit = 'minutes'; }
    if (unit === 'hours') {
        return time.hour <= compareWith.hour;
    }
    if (unit === 'minutes') {
        return time.hasSame(compareWith, unit) || time.valueOf() <= compareWith.valueOf();
    }
}
function isBetween(time, before, after, unit) {
    if (unit === void 0) { unit = 'minutes'; }
    if (unit === 'hours') {
        return isSameOrBefore(time, after, unit) && isSameOrAfter(time, before, unit);
    }
    if (unit === 'minutes') {
        return isSameOrBefore(time, after) && isSameOrAfter(time, before);
    }
}
function isDigit(e) {
    // Allow: backspace, delete, tab, escape, enter
    if ([46, 8, 9, 27, 13].some(function (n) { return n === e.keyCode; }) ||
        // Allow: Ctrl/cmd+A
        (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: Ctrl/cmd+C
        (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: Ctrl/cmd+X
        (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: home, end, left, right, up, down
        (e.keyCode >= 35 && e.keyCode <= 40)) {
        return true;
    }
    return !((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105));
}

// @dynamic
var TimeAdapter = /** @class */ (function () {
    function TimeAdapter() {
    }
    TimeAdapter.parseTime = function (time, opts) {
        var _a = TimeAdapter.getLocaleOptionsByTime(time, opts), numberingSystem = _a.numberingSystem, locale = _a.locale;
        var isPeriodExist = time.split(' ').length === 2;
        var timeMask = isPeriodExist ? TimeFormat.TWELVE_SHORT : TimeFormat.TWENTY_FOUR_SHORT;
        return luxon__WEBPACK_IMPORTED_MODULE_6__["DateTime"].fromFormat(time, timeMask, { numberingSystem: numberingSystem, locale: locale });
    };
    TimeAdapter.formatTime = function (time, opts) {
        if (!time) {
            return 'Invalid Time';
        }
        var format = opts.format;
        var parsedTime = TimeAdapter.parseTime(time, opts).setLocale(TimeAdapter.DEFAULT_LOCALE);
        if (format !== 24) {
            return parsedTime.toLocaleString(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, luxon__WEBPACK_IMPORTED_MODULE_6__["DateTime"].TIME_SIMPLE, { hour12: format !== 24, numberingSystem: TimeAdapter.DEFAULT_NUMBERING_SYSTEM })).replace(/\u200E/g, '');
        }
        return parsedTime.toISOTime({
            includeOffset: false,
            suppressMilliseconds: true,
            suppressSeconds: true
        }).replace(/\u200E/g, '');
    };
    TimeAdapter.toLocaleTimeString = function (time, opts) {
        if (opts === void 0) { opts = {}; }
        var _a = opts.format, format = _a === void 0 ? TimeAdapter.DEFAULT_FORMAT : _a, _b = opts.locale, locale = _b === void 0 ? TimeAdapter.DEFAULT_LOCALE : _b;
        var hourCycle = format === 24 ? 'h23' : 'h12';
        var timeFormat = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, luxon__WEBPACK_IMPORTED_MODULE_6__["DateTime"].TIME_SIMPLE, { hourCycle: hourCycle });
        var timeMask = (format === 24) ? TimeFormat.TWENTY_FOUR_SHORT : TimeFormat.TWELVE_SHORT;
        return luxon__WEBPACK_IMPORTED_MODULE_6__["DateTime"].fromFormat(time, timeMask).setLocale(locale).toLocaleString(timeFormat);
    };
    TimeAdapter.isTimeAvailable = function (time, min, max, granularity, minutesGap, format) {
        if (!time) {
            return;
        }
        var convertedTime = this.parseTime(time, { format: format });
        var minutes = convertedTime.minute;
        if (minutesGap && minutes === minutes && minutes % minutesGap !== 0) {
            throw new Error("Your minutes - " + minutes + " doesn't match your minutesGap - " + minutesGap);
        }
        var isAfter = (min && !max)
            && isSameOrAfter(convertedTime, min, granularity);
        var isBefore = (max && !min)
            && isSameOrBefore(convertedTime, max, granularity);
        var between = (min && max)
            && isBetween(convertedTime, min, max, granularity);
        var isAvailable = !min && !max;
        return isAfter || isBefore || between || isAvailable;
    };
    /***
     *  Format hour according to time format (12 or 24)
     */
    TimeAdapter.formatHour = function (currentHour, format, period) {
        if (format === 24) {
            return currentHour;
        }
        var hour = period === TimePeriod.AM ? currentHour : currentHour + 12;
        if (period === TimePeriod.AM && hour === 12) {
            return 0;
        }
        else if (period === TimePeriod.PM && hour === 24) {
            return 12;
        }
        return hour;
    };
    TimeAdapter.fromDateTimeToString = function (time, format) {
        var timeFormat = format === 24 ? TimeFormat.TWENTY_FOUR : TimeFormat.TWELVE;
        return time.reconfigure({
            numberingSystem: TimeAdapter.DEFAULT_NUMBERING_SYSTEM,
            locale: TimeAdapter.DEFAULT_LOCALE
        }).toFormat(timeFormat);
    };
    TimeAdapter.getLocaleOptionsByTime = function (time, opts) {
        var _a = luxon__WEBPACK_IMPORTED_MODULE_6__["DateTime"].local().setLocale(opts.locale).resolvedLocaleOpts(), numberingSystem = _a.numberingSystem, locale = _a.locale;
        var localeConfig = { numberingSystem: numberingSystem, locale: locale };
        var defaultConfig = { numberingSystem: TimeAdapter.DEFAULT_NUMBERING_SYSTEM, locale: TimeAdapter.DEFAULT_LOCALE };
        return isNaN(parseInt(time, 10)) ? localeConfig : defaultConfig;
    };
    TimeAdapter.DEFAULT_FORMAT = 12;
    TimeAdapter.DEFAULT_LOCALE = 'en-US';
    TimeAdapter.DEFAULT_NUMBERING_SYSTEM = 'latn';
    return TimeAdapter;
}());

var DEFAULT_HOUR = {
    time: 12,
    angle: 360
};
var DEFAULT_MINUTE = {
    time: 0,
    angle: 360
};
var NgxMaterialTimepickerService = /** @class */ (function () {
    function NgxMaterialTimepickerService() {
        this.hourSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](DEFAULT_HOUR);
        this.minuteSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](DEFAULT_MINUTE);
        this.periodSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](TimePeriod.AM);
    }
    Object.defineProperty(NgxMaterialTimepickerService.prototype, "hour", {
        set: function (hour) {
            this.hourSubject.next(hour);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerService.prototype, "selectedHour", {
        get: function () {
            return this.hourSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerService.prototype, "minute", {
        set: function (minute) {
            this.minuteSubject.next(minute);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerService.prototype, "selectedMinute", {
        get: function () {
            return this.minuteSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerService.prototype, "period", {
        set: function (period) {
            var isPeriodValid = (period === TimePeriod.AM) || (period === TimePeriod.PM);
            if (isPeriodValid) {
                this.periodSubject.next(period);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerService.prototype, "selectedPeriod", {
        get: function () {
            return this.periodSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    NgxMaterialTimepickerService.prototype.setDefaultTimeIfAvailable = function (time, min, max, format, minutesGap) {
        /* Workaround to double error message*/
        try {
            if (TimeAdapter.isTimeAvailable(time, min, max, 'minutes', minutesGap)) {
                this.setDefaultTime(time, format);
            }
        }
        catch (e) {
            console.error(e);
        }
    };
    NgxMaterialTimepickerService.prototype.getFullTime = function (format) {
        var selectedHour = this.hourSubject.getValue().time;
        var selectedMinute = this.minuteSubject.getValue().time;
        var hour = selectedHour != null ? selectedHour : DEFAULT_HOUR.time;
        var minute = selectedMinute != null ? selectedMinute : DEFAULT_MINUTE.time;
        var period = format === 12 ? this.periodSubject.getValue() : '';
        var time = (hour + ":" + minute + " " + period).trim();
        return TimeAdapter.formatTime(time, { format: format });
    };
    NgxMaterialTimepickerService.prototype.setDefaultTime = function (time, format) {
        var defaultTime = TimeAdapter.parseTime(time, { format: format }).toJSDate();
        if (luxon__WEBPACK_IMPORTED_MODULE_6__["DateTime"].fromJSDate(defaultTime).isValid) {
            var period = time.substr(time.length - 2).toUpperCase();
            var hour = defaultTime.getHours();
            this.hour = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DEFAULT_HOUR, { time: formatHourByPeriod(hour, period) });
            this.minute = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DEFAULT_MINUTE, { time: defaultTime.getMinutes() });
            this.period = period;
        }
        else {
            this.resetTime();
        }
    };
    NgxMaterialTimepickerService.prototype.resetTime = function () {
        this.hour = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DEFAULT_HOUR);
        this.minute = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DEFAULT_MINUTE);
        this.period = TimePeriod.AM;
    };
    NgxMaterialTimepickerService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function NgxMaterialTimepickerService_Factory() { return new NgxMaterialTimepickerService(); }, token: NgxMaterialTimepickerService, providedIn: "root" });
    NgxMaterialTimepickerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], NgxMaterialTimepickerService);
    return NgxMaterialTimepickerService;
}());
/***
 *  Format hour in 24hours format to meridian (AM or PM) format
 */
function formatHourByPeriod(hour, period) {
    switch (period) {
        case TimePeriod.AM:
            return hour === 0 ? 12 : hour;
        case TimePeriod.PM:
            return hour === 12 ? 12 : hour - 12;
        default:
            return hour;
    }
}

var TIME_LOCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('TimeLocale', {
    providedIn: 'root',
    factory: function () { return TimeAdapter.DEFAULT_LOCALE; }
});

var AnimationState;
(function (AnimationState) {
    AnimationState["ENTER"] = "enter";
    AnimationState["LEAVE"] = "leave";
})(AnimationState || (AnimationState = {}));
var NgxMaterialTimepickerContainerComponent = /** @class */ (function () {
    function NgxMaterialTimepickerContainerComponent(timepickerService, eventService, locale) {
        this.timepickerService = timepickerService;
        this.eventService = eventService;
        this.locale = locale;
        this.timeUnit = TimeUnit;
        this.activeTimeUnit = TimeUnit.HOUR;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    Object.defineProperty(NgxMaterialTimepickerContainerComponent.prototype, "defaultTime", {
        get: function () {
            return this._defaultTime;
        },
        set: function (time) {
            this._defaultTime = time;
            this.setDefaultTime(time);
        },
        enumerable: true,
        configurable: true
    });
    NgxMaterialTimepickerContainerComponent.prototype.onKeydown = function (e) {
        this.eventService.dispatchEvent(e);
        e.stopPropagation();
    };
    NgxMaterialTimepickerContainerComponent.prototype.ngOnInit = function () {
        this.animationState = !this.disableAnimation && AnimationState.ENTER;
        this.defineTime();
        this.selectedHour = this.timepickerService.selectedHour
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])({ bufferSize: 1, refCount: true }));
        this.selectedMinute = this.timepickerService.selectedMinute
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])({ bufferSize: 1, refCount: true }));
        this.selectedPeriod = this.timepickerService.selectedPeriod
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])({ bufferSize: 1, refCount: true }));
        this.timepickerBaseRef.timeUpdated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe))
            .subscribe(this.setDefaultTime.bind(this));
    };
    NgxMaterialTimepickerContainerComponent.prototype.onHourChange = function (hour) {
        this.timepickerService.hour = hour;
        this.onTimeChange();
    };
    NgxMaterialTimepickerContainerComponent.prototype.onHourSelected = function (hour) {
        if (!this.hoursOnly) {
            this.changeTimeUnit(TimeUnit.MINUTE);
        }
        this.timepickerBaseRef.hourSelected.next(hour);
    };
    NgxMaterialTimepickerContainerComponent.prototype.onMinuteChange = function (minute) {
        this.timepickerService.minute = minute;
        this.onTimeChange();
    };
    NgxMaterialTimepickerContainerComponent.prototype.changePeriod = function (period) {
        this.timepickerService.period = period;
        this.onTimeChange();
    };
    NgxMaterialTimepickerContainerComponent.prototype.changeTimeUnit = function (unit) {
        this.activeTimeUnit = unit;
    };
    NgxMaterialTimepickerContainerComponent.prototype.setTime = function () {
        this.timepickerBaseRef.timeSet.next(this.timepickerService.getFullTime(this.format));
        this.close();
    };
    NgxMaterialTimepickerContainerComponent.prototype.close = function () {
        if (this.disableAnimation) {
            this.timepickerBaseRef.close();
            return;
        }
        this.animationState = AnimationState.LEAVE;
    };
    NgxMaterialTimepickerContainerComponent.prototype.animationDone = function (event) {
        if (event.phaseName === 'done' && event.toState === AnimationState.LEAVE) {
            this.timepickerBaseRef.close();
        }
    };
    NgxMaterialTimepickerContainerComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    NgxMaterialTimepickerContainerComponent.prototype.setDefaultTime = function (time) {
        this.timepickerService.setDefaultTimeIfAvailable(time, this.minTime, this.maxTime, this.format, this.minutesGap);
    };
    NgxMaterialTimepickerContainerComponent.prototype.defineTime = function () {
        var minTime = this.minTime;
        if (minTime && (!this.time && !this.defaultTime)) {
            var time = TimeAdapter.fromDateTimeToString(minTime, this.format);
            this.setDefaultTime(time);
        }
    };
    NgxMaterialTimepickerContainerComponent.prototype.onTimeChange = function () {
        var time = TimeAdapter.toLocaleTimeString(this.timepickerService.getFullTime(this.format), {
            locale: this.locale,
            format: this.format
        });
        this.timepickerBaseRef.timeChanged.emit(time);
    };
    NgxMaterialTimepickerContainerComponent.ctorParameters = function () { return [
        { type: NgxMaterialTimepickerService },
        { type: NgxMaterialTimepickerEventService },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [TIME_LOCALE,] }] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerContainerComponent.prototype, "defaultTime", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])
    ], NgxMaterialTimepickerContainerComponent.prototype, "onKeydown", null);
    NgxMaterialTimepickerContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-material-timepicker-container',
            template: "<div class=\"timepicker-backdrop-overlay\" [overlay]=\"preventOverlayClick\"\n     [ngClass]=\"{'timepicker-backdrop-overlay--transparent': appendToInput}\"></div>\n<div class=\"timepicker-overlay\">\n    <ngx-material-timepicker-content [appendToInput]=\"appendToInput\"\n                                     [inputElement]=\"inputElement\"\n                                     [ngxMaterialTimepickerTheme]=\"theme\">\n        <div class=\"timepicker\"\n             [@timepicker]=\"animationState\"\n             (@timepicker.done)=\"animationDone($event)\"\n             [ngClass]=\"timepickerClass\">\n            <header class=\"timepicker__header\">\n                <ngx-material-timepicker-dial [format]=\"format\" [hour]=\"(selectedHour | async)?.time\"\n                                              [minute]=\"(selectedMinute | async)?.time\"\n                                              [period]=\"selectedPeriod | async\"\n                                              [activeTimeUnit]=\"activeTimeUnit\"\n                                              [minTime]=\"minTime\"\n                                              [maxTime]=\"maxTime\"\n                                              [isEditable]=\"enableKeyboardInput\"\n                                              [editableHintTmpl]=\"editableHintTmpl\"\n                                              [minutesGap]=\"minutesGap\"\n                                              [hoursOnly]=\"hoursOnly\"\n                                              (periodChanged)=\"changePeriod($event)\"\n                                              (timeUnitChanged)=\"changeTimeUnit($event)\"\n                                              (hourChanged)=\"onHourChange($event)\"\n                                              (minuteChanged)=\"onMinuteChange($event)\"\n                ></ngx-material-timepicker-dial>\n            </header>\n            <div class=\"timepicker__main-content\">\n                <div class=\"timepicker__body\" [ngSwitch]=\"activeTimeUnit\">\n                    <div *ngSwitchCase=\"timeUnit.HOUR\">\n                        <ngx-material-timepicker-24-hours-face *ngIf=\"format === 24;else ampmHours\"\n                                                               (hourChange)=\"onHourChange($event)\"\n                                                               [selectedHour]=\"selectedHour | async\"\n                                                               [minTime]=\"minTime\"\n                                                               [maxTime]=\"maxTime\"\n                                                               [format]=\"format\"\n                                                               (hourSelected)=\"onHourSelected($event)\"></ngx-material-timepicker-24-hours-face>\n                        <ng-template #ampmHours>\n                            <ngx-material-timepicker-12-hours-face\n                                (hourChange)=\"onHourChange($event)\"\n                                [selectedHour]=\"selectedHour | async\"\n                                [period]=\"selectedPeriod | async\"\n                                [minTime]=\"minTime\"\n                                [maxTime]=\"maxTime\"\n                                (hourSelected)=\"onHourSelected($event)\"></ngx-material-timepicker-12-hours-face>\n                        </ng-template>\n                    </div>\n                    <ngx-material-timepicker-minutes-face *ngSwitchCase=\"timeUnit.MINUTE\"\n                                                          [selectedMinute]=\"selectedMinute | async\"\n                                                          [selectedHour]=\"(selectedHour | async)?.time\"\n                                                          [minTime]=\"minTime\"\n                                                          [maxTime]=\"maxTime\"\n                                                          [format]=\"format\"\n                                                          [period]=\"selectedPeriod | async\"\n                                                          [minutesGap]=\"minutesGap\"\n                                                          (minuteChange)=\"onMinuteChange($event)\"></ngx-material-timepicker-minutes-face>\n                </div>\n                <div class=\"timepicker__actions\">\n                    <div (click)=\"close()\">\n                        <!--suppress HtmlUnknownAttribute -->\n                        <ng-container\n                            *ngTemplateOutlet=\"cancelBtnTmpl ? cancelBtnTmpl : cancelBtnDefault\"></ng-container>\n                    </div>\n                    <div (click)=\"setTime()\">\n                        <!--suppress HtmlUnknownAttribute -->\n                        <ng-container\n                            *ngTemplateOutlet=\"confirmBtnTmpl ? confirmBtnTmpl : confirmBtnDefault\"></ng-container>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ngx-material-timepicker-content>\n</div>\n<ng-template #cancelBtnDefault>\n    <ngx-material-timepicker-button>Cancel</ngx-material-timepicker-button>\n</ng-template>\n<ng-template #confirmBtnDefault>\n    <ngx-material-timepicker-button>Ok</ngx-material-timepicker-button>\n</ng-template>\n",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('timepicker', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])("* => " + AnimationState.ENTER, [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(-30%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0.2s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(0)' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(AnimationState.ENTER + " => " + AnimationState.LEAVE, [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(0)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0.2s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(-30%)', opacity: 0 }))
                    ])
                ])
            ],
            providers: [NgxMaterialTimepickerService],
            styles: [":host{--body-background-color:#fff;--primary-font-family:'Roboto',sans-serif;--button-color:deepskyblue;--dial-active-color:#fff;--dial-inactive-color:rgba(255, 255, 255, .5);--dial-background-color:deepskyblue;--dial-editable-active-color:deepskyblue;--dial-editable-background-color:#fff;--clock-face-time-active-color:#fff;--clock-face-time-inactive-color:#6c6c6c;--clock-face-inner-time-inactive-color:#929292;--clock-face-time-disabled-color:#c5c5c5;--clock-face-background-color:#f0f0f0;--clock-hand-color:deepskyblue}.timepicker-backdrop-overlay{position:fixed;top:0;bottom:0;right:0;left:0;background-color:rgba(0,0,0,.3);z-index:999;pointer-events:auto}.timepicker-backdrop-overlay--transparent{background-color:transparent}.timepicker-overlay{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:999;pointer-events:none}.timepicker{width:300px;border-radius:2px;box-shadow:rgba(0,0,0,.25) 0 14px 45px,rgba(0,0,0,.22) 0 10px 18px;outline:0;position:static;z-index:999;pointer-events:auto}.timepicker__header{padding:15px 30px;background-color:#00bfff}@supports (background-color:var(--dial-background-color)){.timepicker__header{background-color:var(--dial-background-color)}}.timepicker__body{padding:15px 5px;display:flex;justify-content:center;align-items:center;background-color:#fff}@supports (background-color:var(--body-background-color)){.timepicker__body{background-color:var(--body-background-color)}}.timepicker__actions{display:flex;justify-content:flex-end;padding:15px;background-color:#fff}@supports (background-color:var(--body-background-color)){.timepicker__actions{background-color:var(--body-background-color)}}@media (max-device-width:1023px) and (orientation:landscape){.timepicker{display:flex;width:515px}.timepicker__header{display:flex;align-items:center}.timepicker__main-content{display:flex;flex-direction:column;width:100%}.timepicker__actions{padding:5px;margin-top:-1px}}"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(TIME_LOCALE))
    ], NgxMaterialTimepickerContainerComponent);
    return NgxMaterialTimepickerContainerComponent;
}());

var ESCAPE = 27;
var NgxMaterialTimepickerComponent = /** @class */ (function () {
    function NgxMaterialTimepickerComponent(eventService, domService) {
        this.eventService = eventService;
        this.domService = domService;
        this.timeUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isEsc = true;
        this.hoursOnly = false;
        this.timeSet = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hourSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.timeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    Object.defineProperty(NgxMaterialTimepickerComponent.prototype, "ngxMaterialTimepickerTheme", {
        /**
         * @deprecated Since version 5.1.1. Will be deleted on version 6.0.0. Use @Input() theme instead
         */
        set: function (theme) {
            console.warn("'ngxMaterialTimepickerTheme' is deprecated. Use 'theme' instead");
            this._ngxMaterialTimepickerTheme = theme;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerComponent.prototype, "format", {
        get: function () {
            return this.timepickerInput ? this.timepickerInput.format : this._format;
        },
        set: function (value) {
            this._format = value === 24 ? 24 : 12;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerComponent.prototype, "minutesGap", {
        get: function () {
            return this._minutesGap;
        },
        set: function (gap) {
            if (gap == null) {
                return;
            }
            gap = Math.floor(gap);
            this._minutesGap = gap <= 59 ? gap : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerComponent.prototype, "minTime", {
        get: function () {
            return this.timepickerInput ? this.timepickerInput.min : this.min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerComponent.prototype, "maxTime", {
        get: function () {
            return this.timepickerInput ? this.timepickerInput.max : this.max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerComponent.prototype, "disabled", {
        get: function () {
            return this.timepickerInput && this.timepickerInput.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerComponent.prototype, "time", {
        get: function () {
            return this.timepickerInput && this.timepickerInput.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerComponent.prototype, "inputElement", {
        get: function () {
            return this.timepickerInput && this.timepickerInput.element;
        },
        enumerable: true,
        configurable: true
    });
    /***
     * Register an input with this timepicker.
     * input - The timepicker input to register with this timepicker
     */
    NgxMaterialTimepickerComponent.prototype.registerInput = function (input) {
        if (this.timepickerInput) {
            throw Error('A Timepicker can only be associated with a single input.');
        }
        this.timepickerInput = input;
    };
    NgxMaterialTimepickerComponent.prototype.open = function () {
        this.domService.appendTimepickerToBody(NgxMaterialTimepickerContainerComponent, {
            timepickerBaseRef: this,
            time: this.time,
            defaultTime: this.defaultTime,
            maxTime: this.maxTime,
            minTime: this.minTime,
            format: this.format,
            minutesGap: this.minutesGap,
            disableAnimation: this.disableAnimation,
            cancelBtnTmpl: this.cancelBtnTmpl,
            confirmBtnTmpl: this.confirmBtnTmpl,
            editableHintTmpl: this.editableHintTmpl,
            disabled: this.disabled,
            enableKeyboardInput: this.enableKeyboardInput,
            preventOverlayClick: this.preventOverlayClick,
            appendToInput: this.appendToInput,
            hoursOnly: this.hoursOnly,
            theme: this.theme || this._ngxMaterialTimepickerTheme,
            timepickerClass: this.timepickerClass,
            inputElement: this.inputElement
        });
        this.opened.next();
        this.subscribeToEvents();
    };
    NgxMaterialTimepickerComponent.prototype.close = function () {
        this.domService.destroyTimepicker();
        this.closed.next();
        this.unsubscribeFromEvents();
    };
    NgxMaterialTimepickerComponent.prototype.updateTime = function (time) {
        this.timeUpdated.next(time);
    };
    NgxMaterialTimepickerComponent.prototype.subscribeToEvents = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.eventService.backdropClick, this.eventService.keydownEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (e) { return e.keyCode === ESCAPE && _this.isEsc; })))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe))
            .subscribe(function () { return _this.close(); });
    };
    NgxMaterialTimepickerComponent.prototype.unsubscribeFromEvents = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    NgxMaterialTimepickerComponent.ctorParameters = function () { return [
        { type: NgxMaterialTimepickerEventService },
        { type: DomService }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerComponent.prototype, "cancelBtnTmpl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerComponent.prototype, "editableHintTmpl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerComponent.prototype, "confirmBtnTmpl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ESC')
    ], NgxMaterialTimepickerComponent.prototype, "isEsc", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerComponent.prototype, "enableKeyboardInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerComponent.prototype, "preventOverlayClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerComponent.prototype, "disableAnimation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerComponent.prototype, "appendToInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerComponent.prototype, "hoursOnly", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerComponent.prototype, "defaultTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerComponent.prototype, "timepickerClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerComponent.prototype, "theme", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerComponent.prototype, "min", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerComponent.prototype, "max", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerComponent.prototype, "ngxMaterialTimepickerTheme", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerComponent.prototype, "format", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerComponent.prototype, "minutesGap", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NgxMaterialTimepickerComponent.prototype, "timeSet", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NgxMaterialTimepickerComponent.prototype, "opened", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NgxMaterialTimepickerComponent.prototype, "closed", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NgxMaterialTimepickerComponent.prototype, "hourSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NgxMaterialTimepickerComponent.prototype, "timeChanged", void 0);
    NgxMaterialTimepickerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-material-timepicker',
            template: ''
        })
    ], NgxMaterialTimepickerComponent);
    return NgxMaterialTimepickerComponent;
}());

/* To override a default toggle icon */
var NgxMaterialTimepickerToggleIconDirective = /** @class */ (function () {
    function NgxMaterialTimepickerToggleIconDirective() {
    }
    NgxMaterialTimepickerToggleIconDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[ngxMaterialTimepickerToggleIcon]' })
    ], NgxMaterialTimepickerToggleIconDirective);
    return NgxMaterialTimepickerToggleIconDirective;
}());

var NgxMaterialTimepickerToggleComponent = /** @class */ (function () {
    function NgxMaterialTimepickerToggleComponent() {
    }
    Object.defineProperty(NgxMaterialTimepickerToggleComponent.prototype, "disabled", {
        get: function () {
            return this._disabled === undefined ? this.timepicker.disabled : this._disabled;
        },
        set: function (value) {
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    NgxMaterialTimepickerToggleComponent.prototype.open = function (event) {
        if (this.timepicker) {
            this.timepicker.open();
            event.stopPropagation();
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('for')
    ], NgxMaterialTimepickerToggleComponent.prototype, "timepicker", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerToggleComponent.prototype, "disabled", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(NgxMaterialTimepickerToggleIconDirective, { static: true })
    ], NgxMaterialTimepickerToggleComponent.prototype, "customIcon", void 0);
    NgxMaterialTimepickerToggleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-material-timepicker-toggle',
            template: "<button class=\"ngx-material-timepicker-toggle\" (click)=\"open($event)\" [disabled]=\"disabled\" type=\"button\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24px\" height=\"24px\" *ngIf=\"!customIcon\">\n        <path\n            d=\"M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003                   6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z\"/>\n    </svg>\n\n    <ng-content select=\"[ngxMaterialTimepickerToggleIcon]\"></ng-content>\n</button>\n",
            styles: [".ngx-material-timepicker-toggle{display:flex;justify-content:center;align-items:center;padding:4px;background-color:transparent;border-radius:50%;text-align:center;border:none;outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:background-color .3s;cursor:pointer}.ngx-material-timepicker-toggle:focus{background-color:rgba(0,0,0,.07)}"]
        })
    ], NgxMaterialTimepickerToggleComponent);
    return NgxMaterialTimepickerToggleComponent;
}());

var TimepickerDirective = /** @class */ (function () {
    function TimepickerDirective(elementRef, locale) {
        this.elementRef = elementRef;
        this.locale = locale;
        this._format = 12;
        this._value = '';
        this.timepickerSubscriptions = [];
        this.onTouched = function () {
        };
        this.onChange = function () {
        };
    }
    TimepickerDirective_1 = TimepickerDirective;
    Object.defineProperty(TimepickerDirective.prototype, "format", {
        get: function () {
            return this._format;
        },
        set: function (value) {
            this._format = value === 24 ? 24 : 12;
            var isDynamicallyChanged = value && (this.previousFormat && this.previousFormat !== this._format);
            if (isDynamicallyChanged) {
                this.value = this._value;
                this._timepicker.updateTime(this._value);
            }
            this.previousFormat = this._format;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimepickerDirective.prototype, "min", {
        get: function () {
            return this._min;
        },
        set: function (value) {
            if (typeof value === 'string') {
                this._min = TimeAdapter.parseTime(value, { locale: this.locale, format: this.format });
                return;
            }
            this._min = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimepickerDirective.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (value) {
            if (typeof value === 'string') {
                this._max = TimeAdapter.parseTime(value, { locale: this.locale, format: this.format });
                return;
            }
            this._max = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimepickerDirective.prototype, "timepicker", {
        set: function (picker) {
            this.registerTimepicker(picker);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimepickerDirective.prototype, "value", {
        get: function () {
            if (!this._value) {
                return '';
            }
            return TimeAdapter.toLocaleTimeString(this._value, { format: this.format, locale: this.locale });
        },
        set: function (value) {
            if (!value) {
                this._value = '';
                this.updateInputValue();
                return;
            }
            var time = TimeAdapter.formatTime(value, { locale: this.locale, format: this.format });
            var isAvailable = TimeAdapter.isTimeAvailable(time, this._min, this._max, 'minutes', this._timepicker.minutesGap, this._format);
            if (isAvailable) {
                this._value = time;
                this.updateInputValue();
                return;
            }
            console.warn('Selected time doesn\'t match min or max value');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimepickerDirective.prototype, "element", {
        get: function () {
            return this.elementRef && this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimepickerDirective.prototype, "defaultTime", {
        set: function (time) {
            this._timepicker.defaultTime = TimeAdapter.formatTime(time, { locale: this.locale, format: this.format });
        },
        enumerable: true,
        configurable: true
    });
    TimepickerDirective.prototype.updateValue = function (value) {
        this.value = value;
        this.onChange(value);
    };
    TimepickerDirective.prototype.ngOnChanges = function (changes) {
        if (changes['value'] && changes['value'].currentValue) {
            this.defaultTime = changes['value'].currentValue;
        }
    };
    TimepickerDirective.prototype.onClick = function (event) {
        if (!this.disableClick) {
            this._timepicker.open();
            event.stopPropagation();
        }
    };
    TimepickerDirective.prototype.writeValue = function (value) {
        this.value = value;
        if (value) {
            this.defaultTime = value;
        }
    };
    TimepickerDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TimepickerDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    TimepickerDirective.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    TimepickerDirective.prototype.ngOnDestroy = function () {
        this.timepickerSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    TimepickerDirective.prototype.registerTimepicker = function (picker) {
        var _this = this;
        if (picker) {
            this._timepicker = picker;
            this._timepicker.registerInput(this);
            this.timepickerSubscriptions.push(this._timepicker.timeSet.subscribe(function (time) {
                _this.value = time;
                _this.onChange(_this.value);
                _this.onTouched();
                _this.defaultTime = _this._value;
            }));
        }
        else {
            throw new Error('NgxMaterialTimepickerComponent is not defined.' +
                ' Please make sure you passed the timepicker to ngxTimepicker directive');
        }
    };
    TimepickerDirective.prototype.updateInputValue = function () {
        this.elementRef.nativeElement.value = this.value;
    };
    var TimepickerDirective_1;
    TimepickerDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [TIME_LOCALE,] }] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TimepickerDirective.prototype, "format", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TimepickerDirective.prototype, "min", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TimepickerDirective.prototype, "max", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngxTimepicker')
    ], TimepickerDirective.prototype, "timepicker", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TimepickerDirective.prototype, "value", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TimepickerDirective.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TimepickerDirective.prototype, "disableClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event'])
    ], TimepickerDirective.prototype, "onClick", null);
    TimepickerDirective = TimepickerDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[ngxTimepicker]',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"],
                    useExisting: TimepickerDirective_1,
                    multi: true
                }
            ],
            host: {
                '[disabled]': 'disabled',
                '(change)': 'updateValue($event.target.value)',
                '(blur)': 'onTouched()',
            },
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(TIME_LOCALE))
    ], TimepickerDirective);
    return TimepickerDirective;
}());

var NgxMaterialTimepickerThemeDirective = /** @class */ (function () {
    function NgxMaterialTimepickerThemeDirective(elementRef) {
        this.element = elementRef.nativeElement;
    }
    NgxMaterialTimepickerThemeDirective.prototype.ngAfterViewInit = function () {
        if (this.theme) {
            this.setTheme(this.theme);
        }
    };
    NgxMaterialTimepickerThemeDirective.prototype.setTheme = function (theme) {
        for (var val in theme) {
            if (theme.hasOwnProperty(val)) {
                if (typeof theme[val] === 'string') {
                    for (var prop in theme) {
                        if (theme.hasOwnProperty(prop)) {
                            this.element.style.setProperty("--" + camelCaseToDash(prop), theme[prop]);
                        }
                    }
                    return;
                }
                this.setTheme(theme[val]);
            }
        }
    };
    NgxMaterialTimepickerThemeDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngxMaterialTimepickerTheme')
    ], NgxMaterialTimepickerThemeDirective.prototype, "theme", void 0);
    NgxMaterialTimepickerThemeDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[ngxMaterialTimepickerTheme]' })
    ], NgxMaterialTimepickerThemeDirective);
    return NgxMaterialTimepickerThemeDirective;
}());
function camelCaseToDash(myStr) {
    return myStr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

// @dynamic
var TimepickerTimeUtils = /** @class */ (function () {
    function TimepickerTimeUtils() {
    }
    TimepickerTimeUtils.getHours = function (format) {
        return Array(format).fill(1).map(function (v, i) {
            var angleStep = 30;
            var time = v + i;
            var angle = angleStep * time;
            return { time: time === 24 ? 0 : time, angle: angle };
        });
    };
    TimepickerTimeUtils.disableHours = function (hours, config) {
        if (config.min || config.max) {
            return hours.map(function (value) {
                var hour = config.format === 24 ? value.time : TimeAdapter.formatHour(value.time, config.format, config.period);
                var currentTime = luxon__WEBPACK_IMPORTED_MODULE_6__["DateTime"].fromObject({ hour: hour }).toFormat(TimeFormat.TWELVE);
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, value, { disabled: !TimeAdapter.isTimeAvailable(currentTime, config.min, config.max, 'hours') });
            });
        }
        return hours;
    };
    TimepickerTimeUtils.getMinutes = function (gap) {
        if (gap === void 0) { gap = 1; }
        var minutesCount = 60;
        var angleStep = 360 / minutesCount;
        var minutes = [];
        for (var i = 0; i < minutesCount; i++) {
            var angle = angleStep * i;
            if (i % gap === 0) {
                minutes.push({ time: i, angle: angle !== 0 ? angle : 360 });
            }
        }
        return minutes;
    };
    TimepickerTimeUtils.disableMinutes = function (minutes, selectedHour, config) {
        if (config.min || config.max) {
            var hour_1 = TimeAdapter.formatHour(selectedHour, config.format, config.period);
            return minutes.map(function (value) {
                var currentTime = luxon__WEBPACK_IMPORTED_MODULE_6__["DateTime"].fromObject({ hour: hour_1, minute: value.time }).toFormat(TimeFormat.TWELVE);
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, value, { disabled: !TimeAdapter.isTimeAvailable(currentTime, config.min, config.max, 'minutes') });
            });
        }
        return minutes;
    };
    return TimepickerTimeUtils;
}());

var NgxMaterialTimepickerHoursFace = /** @class */ (function () {
    function NgxMaterialTimepickerHoursFace(format) {
        this.hourChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hourSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hoursList = [];
        this.hoursList = TimepickerTimeUtils.getHours(format);
    }
    NgxMaterialTimepickerHoursFace.prototype.onTimeSelected = function (time) {
        this.hourSelected.next(time);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerHoursFace.prototype, "selectedHour", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerHoursFace.prototype, "minTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerHoursFace.prototype, "maxTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerHoursFace.prototype, "format", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NgxMaterialTimepickerHoursFace.prototype, "hourChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NgxMaterialTimepickerHoursFace.prototype, "hourSelected", void 0);
    return NgxMaterialTimepickerHoursFace;
}());

var NgxMaterialTimepicker24HoursFaceComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgxMaterialTimepicker24HoursFaceComponent, _super);
    function NgxMaterialTimepicker24HoursFaceComponent() {
        return _super.call(this, 24) || this;
    }
    NgxMaterialTimepicker24HoursFaceComponent.prototype.ngAfterContentInit = function () {
        this.hoursList = TimepickerTimeUtils.disableHours(this.hoursList, {
            min: this.minTime,
            max: this.maxTime,
            format: this.format
        });
    };
    NgxMaterialTimepicker24HoursFaceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-material-timepicker-24-hours-face',
            template: "<ngx-material-timepicker-face [selectedTime]=\"selectedHour\" [faceTime]=\"hoursList\" [format]=\"format\"\n                              (timeChange)=\"hourChange.next($event)\"\n                              (timeSelected)=\"onTimeSelected($event)\"></ngx-material-timepicker-face>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        })
    ], NgxMaterialTimepicker24HoursFaceComponent);
    return NgxMaterialTimepicker24HoursFaceComponent;
}(NgxMaterialTimepickerHoursFace));

var NgxMaterialTimepicker12HoursFaceComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgxMaterialTimepicker12HoursFaceComponent, _super);
    function NgxMaterialTimepicker12HoursFaceComponent() {
        return _super.call(this, 12) || this;
    }
    NgxMaterialTimepicker12HoursFaceComponent.prototype.ngOnChanges = function (changes) {
        if (changes['period'] && changes['period'].currentValue) {
            this.hoursList = TimepickerTimeUtils.disableHours(this.hoursList, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepicker12HoursFaceComponent.prototype, "period", void 0);
    NgxMaterialTimepicker12HoursFaceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-material-timepicker-12-hours-face',
            template: "<ngx-material-timepicker-face [selectedTime]=\"selectedHour\" [faceTime]=\"hoursList\"\n                              (timeChange)=\"hourChange.next($event)\" (timeSelected)=\"onTimeSelected($event)\"></ngx-material-timepicker-face>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        })
    ], NgxMaterialTimepicker12HoursFaceComponent);
    return NgxMaterialTimepicker12HoursFaceComponent;
}(NgxMaterialTimepickerHoursFace));

var NgxMaterialTimepickerMinutesFaceComponent = /** @class */ (function () {
    function NgxMaterialTimepickerMinutesFaceComponent() {
        this.minutesList = [];
        this.timeUnit = TimeUnit;
        this.minuteChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NgxMaterialTimepickerMinutesFaceComponent.prototype.ngOnChanges = function (changes) {
        if (changes['period'] && changes['period'].currentValue) {
            var minutes = TimepickerTimeUtils.getMinutes(this.minutesGap);
            this.minutesList = TimepickerTimeUtils.disableMinutes(minutes, this.selectedHour, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerMinutesFaceComponent.prototype, "selectedMinute", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerMinutesFaceComponent.prototype, "selectedHour", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerMinutesFaceComponent.prototype, "period", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerMinutesFaceComponent.prototype, "minTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerMinutesFaceComponent.prototype, "maxTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerMinutesFaceComponent.prototype, "format", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerMinutesFaceComponent.prototype, "minutesGap", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NgxMaterialTimepickerMinutesFaceComponent.prototype, "minuteChange", void 0);
    NgxMaterialTimepickerMinutesFaceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-material-timepicker-minutes-face',
            template: "<ngx-material-timepicker-face [faceTime]=\"minutesList\" [selectedTime]=\"selectedMinute\"\n                              [minutesGap]=\"minutesGap\"\n                              (timeChange)=\"minuteChange.next($event)\" [unit]=\"timeUnit.MINUTE\"></ngx-material-timepicker-face>\n"
        })
    ], NgxMaterialTimepickerMinutesFaceComponent);
    return NgxMaterialTimepickerMinutesFaceComponent;
}());

var CLOCK_HAND_STYLES = {
    small: {
        height: '75px',
        top: 'calc(50% - 75px)'
    },
    large: {
        height: '103px',
        top: 'calc(50% - 103px)'
    }
};
var NgxMaterialTimepickerFaceComponent = /** @class */ (function () {
    function NgxMaterialTimepickerFaceComponent() {
        this.timeUnit = TimeUnit;
        this.innerClockFaceSize = 85;
        this.timeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.timeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NgxMaterialTimepickerFaceComponent.prototype.ngAfterViewInit = function () {
        this.setClockHandPosition();
        this.addTouchEvents();
    };
    NgxMaterialTimepickerFaceComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var faceTimeChanges = changes['faceTime'];
        var selectedTimeChanges = changes['selectedTime'];
        if ((faceTimeChanges && faceTimeChanges.currentValue)
            && (selectedTimeChanges && selectedTimeChanges.currentValue)) {
            /* Set time according to passed an input value */
            this.selectedTime = this.faceTime.find(function (time) { return time.time === _this.selectedTime.time; });
        }
        if (selectedTimeChanges && selectedTimeChanges.currentValue) {
            this.setClockHandPosition();
        }
        if (faceTimeChanges && faceTimeChanges.currentValue) {
            // To avoid an error ExpressionChangedAfterItHasBeenCheckedError
            setTimeout(function () { return _this.selectAvailableTime(); });
        }
    };
    NgxMaterialTimepickerFaceComponent.prototype.trackByTime = function (_, time) {
        return time.time;
    };
    NgxMaterialTimepickerFaceComponent.prototype.onMousedown = function (e) {
        e.preventDefault();
        this.isStarted = true;
    };
    NgxMaterialTimepickerFaceComponent.prototype.selectTime = function (e) {
        if (!this.isStarted && (e instanceof MouseEvent && e.type !== 'click')) {
            return;
        }
        var clockFaceCords = this.clockFace.nativeElement.getBoundingClientRect();
        /* Get x0 and y0 of the circle */
        var centerX = clockFaceCords.left + clockFaceCords.width / 2;
        var centerY = clockFaceCords.top + clockFaceCords.height / 2;
        /* Counting the arctangent and convert it to from radian to deg */
        var arctangent = Math.atan(Math.abs(e.clientX - centerX) / Math.abs(e.clientY - centerY)) * 180 / Math.PI;
        /* Get angle according to quadrant */
        var circleAngle = countAngleByCords(centerX, centerY, e.clientX, e.clientY, arctangent);
        /* Check if selected time from the inner clock face (24 hours format only) */
        var isInnerClockChosen = this.format && this.isInnerClockFace(centerX, centerY, e.clientX, e.clientY);
        /* Round angle according to angle step */
        var angleStep = this.unit === TimeUnit.MINUTE ? (6 * (this.minutesGap || 1)) : 30;
        var roundedAngle = roundAngle(circleAngle, angleStep);
        var angle = (roundedAngle || 360) + (isInnerClockChosen ? 360 : 0);
        var selectedTime = this.faceTime.find(function (val) { return val.angle === angle; });
        if (selectedTime && !selectedTime.disabled) {
            this.timeChange.next(selectedTime);
            /* To let know whether user ended interaction with clock face */
            if (!this.isStarted) {
                this.timeSelected.next(selectedTime.time);
            }
        }
    };
    NgxMaterialTimepickerFaceComponent.prototype.onMouseup = function (e) {
        e.preventDefault();
        this.isStarted = false;
    };
    NgxMaterialTimepickerFaceComponent.prototype.ngOnDestroy = function () {
        this.removeTouchEvents();
    };
    NgxMaterialTimepickerFaceComponent.prototype.addTouchEvents = function () {
        this.touchStartHandler = this.onMousedown.bind(this);
        this.touchEndHandler = this.onMouseup.bind(this);
        this.clockFace.nativeElement.addEventListener('touchstart', this.touchStartHandler);
        this.clockFace.nativeElement.addEventListener('touchend', this.touchEndHandler);
    };
    NgxMaterialTimepickerFaceComponent.prototype.removeTouchEvents = function () {
        this.clockFace.nativeElement.removeEventListener('touchstart', this.touchStartHandler);
        this.clockFace.nativeElement.removeEventListener('touchend', this.touchEndHandler);
    };
    NgxMaterialTimepickerFaceComponent.prototype.setClockHandPosition = function () {
        if (this.format === 24) {
            if (this.selectedTime.time > 12 || this.selectedTime.time === 0) {
                this.decreaseClockHand();
            }
            else {
                this.increaseClockHand();
            }
        }
        this.clockHand.nativeElement.style.transform = "rotate(" + this.selectedTime.angle + "deg)";
    };
    NgxMaterialTimepickerFaceComponent.prototype.selectAvailableTime = function () {
        var _this = this;
        var currentTime = this.faceTime.find(function (time) { return _this.selectedTime.time === time.time; });
        this.isClockFaceDisabled = this.faceTime.every(function (time) { return time.disabled; });
        if ((currentTime && currentTime.disabled) && !this.isClockFaceDisabled) {
            var availableTime = this.faceTime.find(function (time) { return !time.disabled; });
            this.timeChange.next(availableTime);
        }
    };
    NgxMaterialTimepickerFaceComponent.prototype.isInnerClockFace = function (x0, y0, x, y) {
        /* Detect whether time from the inner clock face or not (24 format only) */
        return Math.sqrt(Math.pow(x - x0, 2) + Math.pow(y - y0, 2)) < this.innerClockFaceSize;
    };
    NgxMaterialTimepickerFaceComponent.prototype.decreaseClockHand = function () {
        this.clockHand.nativeElement.style.height = CLOCK_HAND_STYLES.small.height;
        this.clockHand.nativeElement.style.top = CLOCK_HAND_STYLES.small.top;
    };
    NgxMaterialTimepickerFaceComponent.prototype.increaseClockHand = function () {
        this.clockHand.nativeElement.style.height = CLOCK_HAND_STYLES.large.height;
        this.clockHand.nativeElement.style.top = CLOCK_HAND_STYLES.large.top;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerFaceComponent.prototype, "faceTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerFaceComponent.prototype, "selectedTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerFaceComponent.prototype, "unit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerFaceComponent.prototype, "format", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerFaceComponent.prototype, "minutesGap", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NgxMaterialTimepickerFaceComponent.prototype, "timeChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NgxMaterialTimepickerFaceComponent.prototype, "timeSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('clockFace', { static: true })
    ], NgxMaterialTimepickerFaceComponent.prototype, "clockFace", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('clockHand', { static: true })
    ], NgxMaterialTimepickerFaceComponent.prototype, "clockHand", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousedown', ['$event'])
    ], NgxMaterialTimepickerFaceComponent.prototype, "onMousedown", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchmove', ['$event.changedTouches[0]']),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchend', ['$event.changedTouches[0]']),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousemove', ['$event'])
    ], NgxMaterialTimepickerFaceComponent.prototype, "selectTime", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseup', ['$event'])
    ], NgxMaterialTimepickerFaceComponent.prototype, "onMouseup", null);
    NgxMaterialTimepickerFaceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-material-timepicker-face',
            template: "<div class=\"clock-face\" #clockFace>\n    <div *ngIf=\"unit !== timeUnit.MINUTE;else minutesFace\" class=\"clock-face__container\">\n        <div class=\"clock-face__number clock-face__number--outer\"\n             [ngStyle]=\"{'transform': 'rotateZ('+ time.angle +'deg) translateX(-50%)'}\"\n             *ngFor=\"let time of faceTime | slice: 0 : 12; trackBy: trackByTime\">\n\t\t\t<span [ngStyle]=\"{'transform': 'rotateZ(-'+ time.angle +'deg)'}\"\n                  [ngClass]=\"{'active': time.time | activeHour: selectedTime.time : isClockFaceDisabled,\n                   'disabled': time.disabled}\">\n                {{time.time | timeLocalizer: timeUnit.HOUR}}\n            </span>\n        </div>\n        <div class=\"clock-face__inner\" *ngIf=\"faceTime.length > 12\"\n             [style.top]=\"'calc(50% - ' + innerClockFaceSize + 'px)'\">\n            <div class=\"clock-face__number clock-face__number--inner\"\n                 [ngStyle]=\"{'transform': 'rotateZ('+ time.angle +'deg) translateX(-50%)'}\"\n                 [style.height.px]=\"innerClockFaceSize\"\n                 *ngFor=\"let time of faceTime | slice: 12 : 24; trackBy: trackByTime\">\n\t\t\t<span [ngStyle]=\"{'transform': 'rotateZ(-'+ time.angle +'deg)'}\"\n                  [ngClass]=\"{'active': time.time | activeHour: selectedTime?.time : isClockFaceDisabled,\n                   'disabled': time.disabled}\">\n                {{time.time | timeLocalizer: timeUnit.HOUR}}</span>\n            </div>\n        </div>\n    </div>\n\n    <span class=\"clock-face__clock-hand\" [ngClass]=\"{'clock-face__clock-hand_minute': unit === timeUnit.MINUTE}\"\n          #clockHand [hidden]=\"isClockFaceDisabled\"></span>\n</div>\n<ng-template #minutesFace>\n    <div class=\"clock-face__container\">\n        <div class=\"clock-face__number clock-face__number--outer\"\n             [ngStyle]=\"{'transform': 'rotateZ('+ time.angle +'deg) translateX(-50%)'}\"\n             *ngFor=\"let time of faceTime; trackBy: trackByTime\">\n\t<span [ngStyle]=\"{'transform': 'rotateZ(-'+ time.angle +'deg)'}\"\n          [ngClass]=\"{'active': time.time | activeMinute: selectedTime?.time:minutesGap:isClockFaceDisabled,\n           'disabled': time.disabled}\">\n\t{{time.time | minutesFormatter: minutesGap | timeLocalizer: timeUnit.MINUTE}}</span>\n        </div>\n    </div>\n</ng-template>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [".clock-face{width:290px;height:290px;border-radius:50%;position:relative;display:flex;justify-content:center;padding:20px;box-sizing:border-box;background-color:#f0f0f0}@supports (background-color:var(--clock-face-background-color)){.clock-face{background-color:var(--clock-face-background-color)}}.clock-face__inner{position:absolute}.clock-face__container{margin-left:-2px}.clock-face__number{position:absolute;transform-origin:0 100%;width:50px;text-align:center;z-index:2}.clock-face__number--outer{height:calc(290px / 2 - 20px)}.clock-face__number--outer>span{font-size:16px;color:#6c6c6c}@supports (color:var(--clock-face-time-inactive-color)){.clock-face__number--outer>span{color:var(--clock-face-time-inactive-color)}}.clock-face__number--inner>span{font-size:14px;color:#929292}@supports (color:var(--clock-face-inner-time-inactive-color)){.clock-face__number--inner>span{color:var(--clock-face-inner-time-inactive-color)}}.clock-face__number>span{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:30px;height:30px;display:flex;justify-content:center;align-items:center;margin:auto;border-radius:50%;font-weight:500;font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.clock-face__number>span{font-family:var(--primary-font-family)}}.clock-face__number>span.active{background-color:#00bfff;color:#fff}@supports (background-color:var(--clock-hand-color)){.clock-face__number>span.active{background-color:var(--clock-hand-color);color:var(--clock-face-time-active-color)}}.clock-face__number>span.disabled{color:#c5c5c5}@supports (color:var(--clock-face-time-disabled-color)){.clock-face__number>span.disabled{color:var(--clock-face-time-disabled-color)}}.clock-face__clock-hand{height:103px;width:2px;transform-origin:0 100%;position:absolute;top:calc(50% - 103px);z-index:1;background-color:#00bfff}@supports (background-color:var(--clock-hand-color)){.clock-face__clock-hand{background-color:var(--clock-hand-color)}}.clock-face__clock-hand:after{content:'';width:7px;height:7px;border-radius:50%;background-color:inherit;position:absolute;bottom:-3px;left:-3.5px}.clock-face__clock-hand_minute:before{content:'';width:7px;height:7px;background-color:#fff;border-radius:50%;position:absolute;top:-8px;left:calc(50% - 8px);box-sizing:content-box;border:4px solid #00bfff}@supports (border-color:var(--clock-hand-color)){.clock-face__clock-hand_minute:before{border-color:var(--clock-hand-color)}}@media (max-device-width:1023px) and (orientation:landscape){.clock-face{width:225px;height:225px;padding:5px}.clock-face__number--outer{height:calc(225px / 2 - 5px)}.clock-face__clock-hand_minute:before{top:0}}"]
        })
    ], NgxMaterialTimepickerFaceComponent);
    return NgxMaterialTimepickerFaceComponent;
}());
function roundAngle(angle, step) {
    return Math.round(angle / step) * step;
}
function countAngleByCords(x0, y0, x, y, currentAngle) {
    if (y > y0 && x >= x0) { // II quarter
        return 180 - currentAngle;
    }
    else if (y > y0 && x < x0) { // III quarter
        return 180 + currentAngle;
    }
    else if (y < y0 && x < x0) { // IV quarter
        return 360 - currentAngle;
    }
    else { // I quarter
        return currentAngle;
    }
}

var NgxMaterialTimepickerButtonComponent = /** @class */ (function () {
    function NgxMaterialTimepickerButtonComponent() {
    }
    NgxMaterialTimepickerButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-material-timepicker-button',
            template: "<button class=\"timepicker-button\" type=\"button\">\n  <span><ng-content></ng-content></span>\n</button>\n",
            styles: [".timepicker-button{display:inline-block;height:36px;min-width:88px;line-height:36px;border:12px;border-radius:2px;background-color:transparent;text-align:center;transition:450ms cubic-bezier(.23,1,.32,1);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;cursor:pointer;outline:0;color:#00bfff}@supports (color:var(--button-color)){.timepicker-button{color:var(--button-color)}}.timepicker-button:focus,.timepicker-button:hover{background-color:rgba(153,153,153,.2)}.timepicker-button>span{font-size:14px;text-transform:uppercase;font-weight:600;padding-left:16px;padding-right:16px;font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-button>span{font-family:var(--primary-font-family)}}"]
        })
    ], NgxMaterialTimepickerButtonComponent);
    return NgxMaterialTimepickerButtonComponent;
}());

var NgxMaterialTimepickerDialComponent = /** @class */ (function () {
    function NgxMaterialTimepickerDialComponent(locale) {
        this.locale = locale;
        this.timeUnit = TimeUnit;
        this.meridiems = luxon__WEBPACK_IMPORTED_MODULE_6__["Info"].meridiems({ locale: this.locale });
        this.periodChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.timeUnitChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hourChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.minuteChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NgxMaterialTimepickerDialComponent.prototype.ngOnChanges = function (changes) {
        if (changes['period'] && changes['period'].currentValue
            || changes['format'] && changes['format'].currentValue) {
            var hours = TimepickerTimeUtils.getHours(this.format);
            this.hours = TimepickerTimeUtils.disableHours(hours, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
        if (changes['period'] && changes['period'].currentValue
            || changes['hour'] && changes['hour'].currentValue) {
            var minutes = TimepickerTimeUtils.getMinutes(this.minutesGap);
            this.minutes = TimepickerTimeUtils.disableMinutes(minutes, +this.hour, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
    };
    NgxMaterialTimepickerDialComponent.prototype.changeTimeUnit = function (unit) {
        this.timeUnitChanged.next(unit);
    };
    NgxMaterialTimepickerDialComponent.prototype.changePeriod = function (period) {
        this.periodChanged.next(period);
    };
    NgxMaterialTimepickerDialComponent.prototype.changeHour = function (hour) {
        this.hourChanged.next(hour);
    };
    NgxMaterialTimepickerDialComponent.prototype.changeMinute = function (minute) {
        this.minuteChanged.next(minute);
    };
    NgxMaterialTimepickerDialComponent.prototype.showHint = function () {
        this.isHintVisible = true;
    };
    NgxMaterialTimepickerDialComponent.prototype.hideHint = function () {
        this.isHintVisible = false;
    };
    NgxMaterialTimepickerDialComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [TIME_LOCALE,] }] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerDialComponent.prototype, "editableHintTmpl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerDialComponent.prototype, "hour", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerDialComponent.prototype, "minute", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerDialComponent.prototype, "format", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerDialComponent.prototype, "period", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerDialComponent.prototype, "activeTimeUnit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerDialComponent.prototype, "minTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerDialComponent.prototype, "maxTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerDialComponent.prototype, "isEditable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerDialComponent.prototype, "minutesGap", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerDialComponent.prototype, "hoursOnly", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NgxMaterialTimepickerDialComponent.prototype, "periodChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NgxMaterialTimepickerDialComponent.prototype, "timeUnitChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NgxMaterialTimepickerDialComponent.prototype, "hourChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NgxMaterialTimepickerDialComponent.prototype, "minuteChanged", void 0);
    NgxMaterialTimepickerDialComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-material-timepicker-dial',
            template: "<div class=\"timepicker-dial\">\n    <div class=\"timepicker-dial__container\">\n        <div class=\"timepicker-dial__time\">\n            <ngx-material-timepicker-dial-control [timeList]=\"hours\" [time]=\"hour\" [timeUnit]=\"timeUnit.HOUR\"\n                                                  [isActive]=\"activeTimeUnit === timeUnit.HOUR\"\n                                                  [isEditable]=\"isEditable\"\n                                                  (timeUnitChanged)=\"changeTimeUnit($event)\"\n                                                  (timeChanged)=\"changeHour($event)\"\n                                                  (focused)=\"showHint()\"\n                                                  (unfocused)=\"hideHint()\">\n\n            </ngx-material-timepicker-dial-control>\n            <span>:</span>\n            <ngx-material-timepicker-dial-control [timeList]=\"minutes\" [time]=\"minute\" [timeUnit]=\"timeUnit.MINUTE\"\n                                                  [isActive]=\"activeTimeUnit === timeUnit.MINUTE\"\n                                                  [isEditable]=\"isEditable\"\n                                                  [minutesGap]=\"minutesGap\"\n                                                  [disabled]=\"hoursOnly\"\n                                                  (timeUnitChanged)=\"changeTimeUnit($event)\"\n                                                  (timeChanged)=\"changeMinute($event)\"\n                                                  (focused)=\"showHint()\"\n                                                  (unfocused)=\"hideHint()\">\n\n            </ngx-material-timepicker-dial-control>\n        </div>\n        <ngx-material-timepicker-period class=\"timepicker-dial__period\"\n                                        [ngClass]=\"{'timepicker-dial__period--hidden': format === 24}\"\n                                        [selectedPeriod]=\"period\" [activeTimeUnit]=\"activeTimeUnit\"\n                                        [maxTime]=\"maxTime\" [minTime]=\"minTime\" [format]=\"format\"\n                                        [hours]=\"hours\" [minutes]=\"minutes\" [selectedHour]=\"hour\"\n                                        [meridiems]=\"meridiems\"\n                                        (periodChanged)=\"changePeriod($event)\"></ngx-material-timepicker-period>\n    </div>\n    <div *ngIf=\"isEditable || editableHintTmpl\" [ngClass]=\"{'timepicker-dial__hint-container--hidden': !isHintVisible}\">\n        <!--suppress HtmlUnknownAttribute -->\n        <ng-container *ngTemplateOutlet=\"editableHintTmpl ? editableHintTmpl : editableHintDefault\"></ng-container>\n        <ng-template #editableHintDefault>\n            <small class=\"timepicker-dial__hint\"> * use arrows (<span>&#8645;</span>) to change the time</small>\n        </ng-template>\n    </div>\n</div>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [".timepicker-dial{text-align:right}.timepicker-dial__container{display:flex;align-items:center;justify-content:flex-end;-webkit-tap-highlight-color:transparent}.timepicker-dial__time{display:flex;align-items:baseline;line-height:normal;font-size:50px;color:rgba(255,255,255,.5);font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-dial__time{font-family:var(--primary-font-family);color:var(--dial-inactive-color)}}.timepicker-dial__period{display:block;margin-left:10px}.timepicker-dial__hint-container--hidden,.timepicker-dial__period--hidden{visibility:hidden}.timepicker-dial__hint{display:inline-block;font-size:10px;color:#fff}@supports (color:var(--dial-active-color)){.timepicker-dial__hint{color:var(--dial-active-color)}}.timepicker-dial__hint span{font-size:14px}@media (max-device-width:1023px) and (orientation:landscape){.timepicker-dial__container{flex-direction:column}.timepicker-dial__period{margin-left:0}}"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(TIME_LOCALE))
    ], NgxMaterialTimepickerDialComponent);
    return NgxMaterialTimepickerDialComponent;
}());

var TimeParserPipe = /** @class */ (function () {
    function TimeParserPipe(locale) {
        this.locale = locale;
        this.numberingSystem = luxon__WEBPACK_IMPORTED_MODULE_6__["DateTime"].local().setLocale(this.locale).resolvedLocaleOpts().numberingSystem;
    }
    TimeParserPipe.prototype.transform = function (time, timeUnit) {
        if (timeUnit === void 0) { timeUnit = TimeUnit.HOUR; }
        if (time == null || time === '') {
            return '';
        }
        if (!isNaN(+time)) {
            return time;
        }
        if (timeUnit === TimeUnit.MINUTE) {
            return this.parseTime(time, 'm', 'minute');
        }
        return this.parseTime(time, 'H', 'hour');
    };
    TimeParserPipe.prototype.parseTime = function (time, format, timeMeasure) {
        var parsedTime = luxon__WEBPACK_IMPORTED_MODULE_6__["DateTime"].fromFormat(String(time), format, { numberingSystem: this.numberingSystem })[timeMeasure];
        if (!isNaN(parsedTime)) {
            return parsedTime;
        }
        throw new Error("Cannot parse time - " + time);
    };
    TimeParserPipe.ctorParameters = function () { return [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [TIME_LOCALE,] }] }
    ]; };
    TimeParserPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'timeParser'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(TIME_LOCALE))
    ], TimeParserPipe);
    return TimeParserPipe;
}());

var NgxMaterialTimepickerDialControlComponent = /** @class */ (function () {
    function NgxMaterialTimepickerDialControlComponent(timeParserPipe) {
        this.timeParserPipe = timeParserPipe;
        this.timeUnitChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.timeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focused = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.unfocused = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(NgxMaterialTimepickerDialControlComponent.prototype, "selectedTime", {
        get: function () {
            var _this = this;
            if (!!this.time) {
                return this.timeList.find(function (t) { return t.time === +_this.time; });
            }
        },
        enumerable: true,
        configurable: true
    });
    NgxMaterialTimepickerDialControlComponent.prototype.saveTimeAndChangeTimeUnit = function (event, unit) {
        event.preventDefault();
        this.previousTime = this.time;
        this.timeUnitChanged.next(unit);
        this.focused.next();
    };
    NgxMaterialTimepickerDialControlComponent.prototype.updateTime = function () {
        var time = this.selectedTime;
        if (time) {
            this.timeChanged.next(time);
            this.previousTime = time.time;
        }
    };
    NgxMaterialTimepickerDialControlComponent.prototype.changeTimeByKeyboard = function (e) {
        var char = String.fromCharCode(e.keyCode);
        if (isTimeDisabledToChange(this.time, char, this.timeList)) {
            e.preventDefault();
        }
    };
    NgxMaterialTimepickerDialControlComponent.prototype.onKeydown = function (e) {
        if (!isDigit(e)) {
            e.preventDefault();
        }
        else {
            this.changeTimeByArrow(e.keyCode);
        }
    };
    NgxMaterialTimepickerDialControlComponent.prototype.onModelChange = function (value) {
        this.time = this.timeParserPipe.transform(value, this.timeUnit).toString();
    };
    NgxMaterialTimepickerDialControlComponent.prototype.changeTimeByArrow = function (keyCode) {
        var ARROW_UP = 38;
        var ARROW_DOWN = 40;
        var time;
        if (keyCode === ARROW_UP) {
            time = String(+this.time + (this.minutesGap || 1));
        }
        else if (keyCode === ARROW_DOWN) {
            time = String(+this.time - (this.minutesGap || 1));
        }
        if (!isTimeUnavailable(time, this.timeList)) {
            this.time = time;
            this.updateTime();
        }
    };
    NgxMaterialTimepickerDialControlComponent.ctorParameters = function () { return [
        { type: TimeParserPipe }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerDialControlComponent.prototype, "timeList", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerDialControlComponent.prototype, "timeUnit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerDialControlComponent.prototype, "time", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerDialControlComponent.prototype, "isActive", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerDialControlComponent.prototype, "isEditable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerDialControlComponent.prototype, "minutesGap", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerDialControlComponent.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NgxMaterialTimepickerDialControlComponent.prototype, "timeUnitChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NgxMaterialTimepickerDialControlComponent.prototype, "timeChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NgxMaterialTimepickerDialControlComponent.prototype, "focused", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NgxMaterialTimepickerDialControlComponent.prototype, "unfocused", void 0);
    NgxMaterialTimepickerDialControlComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-material-timepicker-dial-control',
            template: "<!--suppress HtmlFormInputWithoutLabel, HtmlUnknownAttribute -->\n<input class=\"timepicker-dial__control timepicker-dial__item\"\n       [ngClass]=\"{'timepicker-dial__item_active': isActive}\"\n       [ngModel]=\"time | timeLocalizer: timeUnit\"\n       (ngModelChange)=\"time = $event\"\n       [disabled]=\"disabled\"\n       (input)=\"updateTime()\" (focus)=\"saveTimeAndChangeTimeUnit($event, timeUnit)\"\n       readonly [timepickerAutofocus]=\"isActive\"\n       *ngIf=\"!isEditable;else editableTemplate\">\n\n<ng-template #editableTemplate>\n    <!--suppress HtmlFormInputWithoutLabel, HtmlUnknownAttribute -->\n    <input class=\"timepicker-dial__control timepicker-dial__item timepicker-dial__control_editable\"\n           [ngClass]=\"{'timepicker-dial__item_active': isActive}\"\n           [ngModel]=\"time | timeParser: timeUnit | timeLocalizer: timeUnit : true\"\n           (ngModelChange)=\"onModelChange($event)\"\n           [disabled]=\"disabled\"\n           (input)=\"updateTime()\" (focus)=\"saveTimeAndChangeTimeUnit($event, timeUnit)\"\n           [timepickerAutofocus]=\"isActive\" (keydown)=\"onKeydown($event)\" (keypress)=\"changeTimeByKeyboard($event)\">\n</ng-template>\n",
            providers: [TimeParserPipe],
            styles: [".timepicker-dial__item{cursor:pointer;color:rgba(255,255,255,.5);font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-dial__item{font-family:var(--primary-font-family);color:var(--dial-inactive-color)}}.timepicker-dial__item_active{color:#fff}@supports (color:var(--dial-active-color)){.timepicker-dial__item_active{color:var(--dial-active-color)}}.timepicker-dial__control{border:none;background-color:transparent;font-size:50px;width:60px;padding:0;border-radius:3px;text-align:right}.timepicker-dial__control_editable:focus{color:#00bfff;background-color:#fff;outline:#00bfff}@supports (color:var(--dial-editable-active-color)){.timepicker-dial__control_editable:focus{color:var(--dial-editable-active-color)}}@supports (background-color:var(--dial-editable-background-color)){.timepicker-dial__control_editable:focus{background-color:var(--dial-editable-background-color)}}@supports (outline:var(--dial-editable-active-color)){.timepicker-dial__control_editable:focus{outline:var(--dial-editable-active-color)}}.timepicker-dial__control:disabled{cursor:default}"]
        })
    ], NgxMaterialTimepickerDialControlComponent);
    return NgxMaterialTimepickerDialControlComponent;
}());
function isTimeDisabledToChange(currentTime, nextTime, timeList) {
    var isNumber = /\d/.test(nextTime);
    if (isNumber) {
        var time = currentTime + nextTime;
        return isTimeUnavailable(time, timeList);
    }
}
function isTimeUnavailable(time, timeList) {
    var selectedTime = timeList.find(function (value) { return value.time === +time; });
    return !selectedTime || (selectedTime && selectedTime.disabled);
}

var NgxMaterialTimepickerPeriodComponent = /** @class */ (function () {
    function NgxMaterialTimepickerPeriodComponent() {
        this.timePeriod = TimePeriod;
        this.isPeriodAvailable = true;
        this.periodChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NgxMaterialTimepickerPeriodComponent.prototype.changePeriod = function (period) {
        this.isPeriodAvailable = this.isSwitchPeriodAvailable(period);
        if (this.isPeriodAvailable) {
            this.periodChanged.next(period);
        }
    };
    NgxMaterialTimepickerPeriodComponent.prototype.animationDone = function () {
        this.isPeriodAvailable = true;
    };
    NgxMaterialTimepickerPeriodComponent.prototype.isSwitchPeriodAvailable = function (period) {
        var time = this.getDisabledTimeByPeriod(period);
        return !time.every(function (t) { return t.disabled; });
    };
    NgxMaterialTimepickerPeriodComponent.prototype.getDisabledTimeByPeriod = function (period) {
        switch (this.activeTimeUnit) {
            case TimeUnit.HOUR:
                return TimepickerTimeUtils.disableHours(this.hours, {
                    min: this.minTime,
                    max: this.maxTime,
                    format: this.format,
                    period: period
                });
            case TimeUnit.MINUTE:
                return TimepickerTimeUtils.disableMinutes(this.minutes, +this.selectedHour, {
                    min: this.minTime,
                    max: this.maxTime,
                    format: this.format,
                    period: period
                });
            default:
                throw new Error('no such TimeUnit');
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerPeriodComponent.prototype, "selectedPeriod", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerPeriodComponent.prototype, "format", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerPeriodComponent.prototype, "activeTimeUnit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerPeriodComponent.prototype, "hours", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerPeriodComponent.prototype, "minutes", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerPeriodComponent.prototype, "minTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerPeriodComponent.prototype, "maxTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerPeriodComponent.prototype, "selectedHour", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerPeriodComponent.prototype, "meridiems", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NgxMaterialTimepickerPeriodComponent.prototype, "periodChanged", void 0);
    NgxMaterialTimepickerPeriodComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-material-timepicker-period',
            template: "<div class=\"timepicker-period\">\n\t\t\t<button class=\"timepicker-dial__item timepicker-period__btn\"\n                  [ngClass]=\"{'timepicker-dial__item_active': selectedPeriod === timePeriod.AM}\"\n                  (click)=\"changePeriod(timePeriod.AM)\"\n                  type=\"button\">{{meridiems[0]}}</button>\n    <button class=\"timepicker-dial__item timepicker-period__btn\"\n          [ngClass]=\"{'timepicker-dial__item_active': selectedPeriod === timePeriod.PM}\"\n          (click)=\"changePeriod(timePeriod.PM)\"\n          type=\"button\">{{meridiems[1]}}</button>\n    <div class=\"timepicker-period__warning\" [@scaleInOut] (@scaleInOut.done)=\"animationDone()\" *ngIf=\"!isPeriodAvailable\">\n        <p>Current time would be invalid in this period.</p>\n    </div>\n</div>\n",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('scaleInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'scale(0)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'scale(1)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["sequence"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1 })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 }))
                        ])
                    ])
                ])
            ],
            styles: [".timepicker-dial__item{cursor:pointer;color:rgba(255,255,255,.5);font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-dial__item{font-family:var(--primary-font-family);color:var(--dial-inactive-color)}}.timepicker-dial__item_active{color:#fff}@supports (color:var(--dial-active-color)){.timepicker-dial__item_active{color:var(--dial-active-color)}}.timepicker-period{display:flex;flex-direction:column;position:relative}.timepicker-period__btn{padding:1px 3px;border:0;background-color:transparent;font-size:18px;font-weight:500;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:0;border-radius:3px;transition:background-color .5s;font-family:Roboto,sans-serif}.timepicker-period__btn:focus{background-color:rgba(0,0,0,.07)}.timepicker-period__warning{padding:5px 10px;border-radius:3px;background-color:rgba(0,0,0,.55);color:#fff;position:absolute;width:200px;left:-20px;top:40px}.timepicker-period__warning>p{margin:0;font-size:12px;font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-period__btn,.timepicker-period__warning>p{font-family:var(--primary-font-family)}}"]
        })
    ], NgxMaterialTimepickerPeriodComponent);
    return NgxMaterialTimepickerPeriodComponent;
}());

var TimeFormatterPipe = /** @class */ (function () {
    function TimeFormatterPipe() {
    }
    TimeFormatterPipe.prototype.transform = function (time, timeUnit) {
        if (time == null || time === '') {
            return time;
        }
        switch (timeUnit) {
            case TimeUnit.HOUR:
                return luxon__WEBPACK_IMPORTED_MODULE_6__["DateTime"].fromObject({ hour: +time }).toFormat('HH');
            case TimeUnit.MINUTE:
                return luxon__WEBPACK_IMPORTED_MODULE_6__["DateTime"].fromObject({ minute: +time }).toFormat('mm');
            default:
                throw new Error('no such time unit');
        }
    };
    TimeFormatterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'timeFormatter'
        })
    ], TimeFormatterPipe);
    return TimeFormatterPipe;
}());

var OverlayDirective = /** @class */ (function () {
    function OverlayDirective(eventService) {
        this.eventService = eventService;
    }
    OverlayDirective.prototype.onClick = function (e) {
        if (!this.preventClick) {
            this.eventService.dispatchEvent(e);
        }
        e.preventDefault();
    };
    OverlayDirective.ctorParameters = function () { return [
        { type: NgxMaterialTimepickerEventService }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('overlay')
    ], OverlayDirective.prototype, "preventClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event'])
    ], OverlayDirective.prototype, "onClick", null);
    OverlayDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[overlay]'
        })
    ], OverlayDirective);
    return OverlayDirective;
}());

var MinutesFormatterPipe = /** @class */ (function () {
    function MinutesFormatterPipe() {
    }
    MinutesFormatterPipe.prototype.transform = function (minute, gap) {
        if (gap === void 0) { gap = 5; }
        if (!minute) {
            return minute;
        }
        return minute % gap === 0 ? minute : '';
    };
    MinutesFormatterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'minutesFormatter'
        })
    ], MinutesFormatterPipe);
    return MinutesFormatterPipe;
}());

var AutofocusDirective = /** @class */ (function () {
    function AutofocusDirective(element, document) {
        this.element = element;
        this.document = document;
        this.activeElement = this.document.activeElement;
    }
    AutofocusDirective.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.isFocusActive) {
            // To avoid ExpressionChangedAfterItHasBeenCheckedError;
            setTimeout(function () { return _this.element.nativeElement.focus({ preventScroll: true }); });
        }
    };
    AutofocusDirective.prototype.ngOnDestroy = function () {
        var _this = this;
        // To avoid ExpressionChangedAfterItHasBeenCheckedError;
        setTimeout(function () { return _this.activeElement.focus({ preventScroll: true }); });
    };
    AutofocusDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('timepickerAutofocus')
    ], AutofocusDirective.prototype, "isFocusActive", void 0);
    AutofocusDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[timepickerAutofocus]'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))
    ], AutofocusDirective);
    return AutofocusDirective;
}());

var NgxTimepickerFieldComponent = /** @class */ (function () {
    function NgxTimepickerFieldComponent(timepickerService, locale) {
        this.timepickerService = timepickerService;
        this.locale = locale;
        this.minHour = 1;
        this.maxHour = 12;
        this.timeUnit = TimeUnit;
        this.buttonAlign = 'right';
        this.timeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._format = 12;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isFirstTimeChange = true;
        this.onChange = function () {
        };
    }
    NgxTimepickerFieldComponent_1 = NgxTimepickerFieldComponent;
    Object.defineProperty(NgxTimepickerFieldComponent.prototype, "format", {
        get: function () {
            return this._format;
        },
        set: function (value) {
            this._format = value === 24 ? 24 : 12;
            this.minHour = this._format === 12 ? 1 : 0;
            this.maxHour = this._format === 12 ? 12 : 23;
            this.hoursList = TimepickerTimeUtils.getHours(this._format);
            var isDynamicallyChanged = value && (this.previousFormat && this.previousFormat !== this._format);
            if (isDynamicallyChanged) {
                this.updateTime(this.timepickerTime);
            }
            this.previousFormat = this._format;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxTimepickerFieldComponent.prototype, "min", {
        get: function () {
            return this._min;
        },
        set: function (value) {
            if (typeof value === 'string') {
                this._min = TimeAdapter.parseTime(value, { locale: this.locale, format: this.format });
                return;
            }
            this._min = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxTimepickerFieldComponent.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (value) {
            if (typeof value === 'string') {
                this._max = TimeAdapter.parseTime(value, { locale: this.locale, format: this.format });
                return;
            }
            this._max = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxTimepickerFieldComponent.prototype, "defaultTime", {
        get: function () {
            return this._defaultTime;
        },
        set: function (val) {
            this._defaultTime = val;
            this.isDefaultTime = !!val;
        },
        enumerable: true,
        configurable: true
    });
    NgxTimepickerFieldComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initTime(this.defaultTime);
        this.hoursList = TimepickerTimeUtils.getHours(this._format);
        this.minutesList = TimepickerTimeUtils.getMinutes();
        this.isTimeRangeSet = !!(this.min || this.max);
        this.hour$ = this.timepickerService.selectedHour.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (clockTime) { return _this.selectedHour = clockTime.time; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.changeDefaultTimeValue.bind(this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.isTimeRangeSet && _this.updateAvailableMinutes(); }));
        this.minute$ = this.timepickerService.selectedMinute.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.changeDefaultTimeValue.bind(this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.isFirstTimeChange = false; }));
        if (this.format === 12) {
            this.timepickerService.selectedPeriod.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (period) { return _this.period = period; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (period) { return _this.isChangePeriodDisabled = _this.isPeriodDisabled(period); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe(function () { return _this.isTimeRangeSet && _this.updateAvailableTime(); });
        }
    };
    NgxTimepickerFieldComponent.prototype.writeValue = function (val) {
        if (val) {
            this.initTime(val);
        }
        else {
            this.resetTime();
        }
    };
    NgxTimepickerFieldComponent.prototype.registerOnTouched = function (fn) {
    };
    NgxTimepickerFieldComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NgxTimepickerFieldComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    NgxTimepickerFieldComponent.prototype.changeHour = function (hour) {
        this.timepickerService.hour = this.hoursList.find(function (h) { return h.time === hour; });
        this.changeTime();
    };
    NgxTimepickerFieldComponent.prototype.changeMinute = function (minute) {
        this.timepickerService.minute = this.minutesList.find(function (m) { return m.time === minute; });
        this.changeTime();
    };
    NgxTimepickerFieldComponent.prototype.changePeriod = function (period) {
        this.timepickerService.period = period;
        this.changeTime();
    };
    NgxTimepickerFieldComponent.prototype.onTimeSet = function (time) {
        this.updateTime(time);
        this.emitLocalTimeChange(time);
    };
    NgxTimepickerFieldComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    NgxTimepickerFieldComponent.prototype.changeTime = function () {
        var time = this.timepickerService.getFullTime(this.format);
        this.timepickerTime = time;
        this.emitLocalTimeChange(time);
    };
    NgxTimepickerFieldComponent.prototype.resetTime = function () {
        this.timepickerService.hour = { angle: 0, time: null };
        this.timepickerService.minute = { angle: 0, time: null };
    };
    NgxTimepickerFieldComponent.prototype.emitLocalTimeChange = function (time) {
        var localTime = TimeAdapter.toLocaleTimeString(time, { format: this.format, locale: this.locale });
        this.onChange(localTime);
        this.timeChanged.emit(localTime);
    };
    NgxTimepickerFieldComponent.prototype.changeDefaultTimeValue = function (clockFaceTime) {
        if (!this.isDefaultTime && this.isFirstTimeChange) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, clockFaceTime, { time: null });
        }
        return clockFaceTime;
    };
    NgxTimepickerFieldComponent.prototype.updateAvailableHours = function () {
        this.hoursList = TimepickerTimeUtils.disableHours(this.hoursList, {
            min: this.min,
            max: this.max,
            format: this.format,
            period: this.period
        });
    };
    NgxTimepickerFieldComponent.prototype.updateAvailableMinutes = function () {
        this.minutesList = TimepickerTimeUtils.disableMinutes(this.minutesList, this.selectedHour, {
            min: this.min,
            max: this.max,
            format: this.format,
            period: this.period
        });
    };
    NgxTimepickerFieldComponent.prototype.updateAvailableTime = function () {
        this.updateAvailableHours();
        if (this.selectedHour) {
            this.updateAvailableMinutes();
        }
    };
    NgxTimepickerFieldComponent.prototype.updateTime = function (time) {
        if (time) {
            var formattedTime = TimeAdapter.formatTime(time, { locale: this.locale, format: this.format });
            this.timepickerService.setDefaultTimeIfAvailable(formattedTime, this.min, this.max, this.format);
            this.timepickerTime = formattedTime;
        }
    };
    NgxTimepickerFieldComponent.prototype.initTime = function (time) {
        var isDefaultTimeAvailable = TimeAdapter
            .isTimeAvailable(time, this.min, this.max, 'minutes', null, this.format);
        if (!isDefaultTimeAvailable) {
            if (this.min) {
                this.updateTime(TimeAdapter.fromDateTimeToString(this.min, this.format));
                return;
            }
            if (this.max) {
                this.updateTime(TimeAdapter.fromDateTimeToString(this.max, this.format));
                return;
            }
        }
        this.updateTime(time);
    };
    NgxTimepickerFieldComponent.prototype.isPeriodDisabled = function (period) {
        return TimepickerTimeUtils.disableHours(TimepickerTimeUtils.getHours(12), {
            min: this.min,
            max: this.max,
            format: 12,
            period: period === TimePeriod.AM ? TimePeriod.PM : TimePeriod.AM
        }).every(function (time) { return time.disabled; });
    };
    var NgxTimepickerFieldComponent_1;
    NgxTimepickerFieldComponent.ctorParameters = function () { return [
        { type: NgxMaterialTimepickerService },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [TIME_LOCALE,] }] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxTimepickerFieldComponent.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxTimepickerFieldComponent.prototype, "toggleIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxTimepickerFieldComponent.prototype, "buttonAlign", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxTimepickerFieldComponent.prototype, "clockTheme", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxTimepickerFieldComponent.prototype, "controlOnly", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxTimepickerFieldComponent.prototype, "cancelBtnTmpl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxTimepickerFieldComponent.prototype, "confirmBtnTmpl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxTimepickerFieldComponent.prototype, "format", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxTimepickerFieldComponent.prototype, "min", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxTimepickerFieldComponent.prototype, "max", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxTimepickerFieldComponent.prototype, "defaultTime", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NgxTimepickerFieldComponent.prototype, "timeChanged", void 0);
    NgxTimepickerFieldComponent = NgxTimepickerFieldComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-timepicker-field',
            template: "<div class=\"ngx-timepicker\" [ngClass]=\"{'ngx-timepicker--disabled': disabled}\">\n    <ngx-timepicker-time-control\n        class=\"ngx-timepicker__control--first\"\n        [placeholder]=\"'HH'\"\n        [time]=\"(hour$ | async)?.time\"\n        [min]=\"minHour\"\n        [max]=\"maxHour\"\n        [timeUnit]=\"timeUnit.HOUR\"\n        [disabled]=\"disabled\"\n        [timeList]=\"hoursList\"\n        [preventTyping]=\"isTimeRangeSet\"\n        (timeChanged)=\"changeHour($event)\"></ngx-timepicker-time-control>\n    <span class=\"ngx-timepicker__time-colon ngx-timepicker__control--second\">:</span>\n    <ngx-timepicker-time-control\n        class=\"ngx-timepicker__control--third\"\n        [placeholder]=\"'MM'\"\n        [time]=\"(minute$ | async)?.time\"\n        [min]=\"0\"\n        [max]=\"59\"\n        [timeUnit]=\"timeUnit.MINUTE\"\n        [disabled]=\"disabled\"\n        [timeList]=\"minutesList\"\n        [preventTyping]=\"isTimeRangeSet\"\n        (timeChanged)=\"changeMinute($event)\"></ngx-timepicker-time-control>\n    <ngx-timepicker-period-selector\n        class=\"ngx-timepicker__control--forth\"\n        [selectedPeriod]=\"period\"\n        [disabled]=\"disabled || isChangePeriodDisabled\"\n        (periodSelected)=\"changePeriod($event)\"\n        *ngIf=\"format !== 24\"></ngx-timepicker-period-selector>\n    <ngx-material-timepicker-toggle\n        class=\"ngx-timepicker__toggle\"\n        *ngIf=\"!controlOnly\"\n        [ngClass]=\"{'ngx-timepicker__toggle--left': buttonAlign === 'left'}\"\n        [for]=\"timepicker\"\n        [disabled]=\"disabled\">\n        <span ngxMaterialTimepickerToggleIcon>\n            <!--suppress HtmlUnknownAttribute -->\n            <ng-container *ngTemplateOutlet=\"toggleIcon || defaultIcon\"></ng-container>\n        </span>\n    </ngx-material-timepicker-toggle>\n</div>\n<ngx-material-timepicker\n    [min]=\"min\"\n    [max]=\"max\"\n    [theme]=\"clockTheme\"\n    [defaultTime]=\"timepickerTime\"\n    [format]=\"format\"\n    [cancelBtnTmpl]=\"cancelBtnTmpl\"\n    [confirmBtnTmpl]=\"confirmBtnTmpl\"\n    (timeSet)=\"onTimeSet($event)\" #timepicker></ngx-material-timepicker>\n\n<ng-template #defaultIcon>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24px\" height=\"24px\">\n        <!--suppress CheckEmptyScriptTag -->\n        <path\n            d=\"M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003                   6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z\"/>\n    </svg>\n</ng-template>\n",
            providers: [
                NgxMaterialTimepickerService,
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"],
                    useExisting: NgxTimepickerFieldComponent_1,
                    multi: true
                }
            ],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [".ngx-timepicker{display:flex;align-items:center;height:100%;border-bottom:1px solid rgba(0,0,0,.12)}.ngx-timepicker--disabled{background:rgba(0,0,0,.07);pointer-events:none}.ngx-timepicker__time-colon{margin-left:10px}.ngx-timepicker__control--first{order:1}.ngx-timepicker__control--second{order:2}.ngx-timepicker__control--third{order:3}.ngx-timepicker__control--forth,.ngx-timepicker__toggle{order:4}.ngx-timepicker__toggle--left{order:0}"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(TIME_LOCALE))
    ], NgxTimepickerFieldComponent);
    return NgxTimepickerFieldComponent;
}());

var NgxTimepickerTimeControlComponent = /** @class */ (function () {
    function NgxTimepickerTimeControlComponent(timeParser) {
        this.timeParser = timeParser;
        this.timeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NgxTimepickerTimeControlComponent.prototype.ngOnChanges = function (changes) {
        if (changes.timeList && this.time != null) {
            if (this.isSelectedTimeDisabled(this.time)) {
                this.setAvailableTime();
            }
        }
    };
    NgxTimepickerTimeControlComponent.prototype.changeTime = function (event) {
        event.stopPropagation();
        var char = String.fromCharCode(event.keyCode);
        var time = concatTime(String(this.time), char);
        this.changeTimeIfValid(time);
    };
    NgxTimepickerTimeControlComponent.prototype.onKeydown = function (event) {
        event.stopPropagation();
        if (!isDigit(event)) {
            event.preventDefault();
        }
        switch (event.key) {
            case 'ArrowUp':
                this.increase();
                break;
            case 'ArrowDown':
                this.decrease();
                break;
        }
        if (this.preventTyping && event.key !== 'Tab') {
            event.preventDefault();
        }
    };
    NgxTimepickerTimeControlComponent.prototype.increase = function () {
        if (!this.disabled) {
            var nextTime = +this.time + 1;
            if (nextTime > this.max) {
                nextTime = this.min;
            }
            if (this.isSelectedTimeDisabled(nextTime)) {
                nextTime = this.getAvailableTime(nextTime, this.getNextAvailableTime.bind(this));
            }
            if (nextTime !== this.time) {
                this.timeChanged.emit(nextTime);
            }
        }
    };
    NgxTimepickerTimeControlComponent.prototype.decrease = function () {
        if (!this.disabled) {
            var previousTime = +this.time - 1;
            if (previousTime < this.min) {
                previousTime = this.max;
            }
            if (this.isSelectedTimeDisabled(previousTime)) {
                previousTime = this.getAvailableTime(previousTime, this.getPrevAvailableTime.bind(this));
            }
            if (previousTime !== this.time) {
                this.timeChanged.emit(previousTime);
            }
        }
    };
    NgxTimepickerTimeControlComponent.prototype.onFocus = function () {
        this.isFocused = true;
        this.previousTime = this.time;
    };
    NgxTimepickerTimeControlComponent.prototype.onBlur = function () {
        this.isFocused = false;
        if (this.previousTime !== this.time) {
            this.changeTimeIfValid(+this.time);
        }
    };
    NgxTimepickerTimeControlComponent.prototype.onModelChange = function (value) {
        this.time = +this.timeParser.transform(value, this.timeUnit);
    };
    NgxTimepickerTimeControlComponent.prototype.changeTimeIfValid = function (value) {
        if (!isNaN(value)) {
            this.time = value;
            if (this.time > this.max) {
                var timeString = String(value);
                this.time = +timeString[timeString.length - 1];
            }
            if (this.time < this.min) {
                this.time = this.min;
            }
            this.timeChanged.emit(this.time);
        }
    };
    NgxTimepickerTimeControlComponent.prototype.isSelectedTimeDisabled = function (time) {
        return this.timeList.find(function (faceTime) { return faceTime.time === time; }).disabled;
    };
    NgxTimepickerTimeControlComponent.prototype.getNextAvailableTime = function (index) {
        var timeCollection = this.timeList;
        var maxValue = timeCollection.length;
        for (var i = index + 1; i < maxValue; i++) {
            var time = timeCollection[i];
            if (!time.disabled) {
                return time.time;
            }
        }
    };
    NgxTimepickerTimeControlComponent.prototype.getPrevAvailableTime = function (index) {
        for (var i = index; i >= 0; i--) {
            var time = this.timeList[i];
            if (!time.disabled) {
                return time.time;
            }
        }
    };
    NgxTimepickerTimeControlComponent.prototype.getAvailableTime = function (currentTime, fn) {
        var currentTimeIndex = this.timeList.findIndex(function (time) { return time.time === currentTime; });
        var availableTime = fn(currentTimeIndex);
        return availableTime != null ? availableTime : this.time;
    };
    NgxTimepickerTimeControlComponent.prototype.setAvailableTime = function () {
        this.time = this.timeList.find(function (t) { return !t.disabled; }).time;
        this.timeChanged.emit(this.time);
    };
    NgxTimepickerTimeControlComponent.ctorParameters = function () { return [
        { type: TimeParserPipe }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxTimepickerTimeControlComponent.prototype, "time", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxTimepickerTimeControlComponent.prototype, "min", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxTimepickerTimeControlComponent.prototype, "max", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxTimepickerTimeControlComponent.prototype, "placeholder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxTimepickerTimeControlComponent.prototype, "timeUnit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxTimepickerTimeControlComponent.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxTimepickerTimeControlComponent.prototype, "timeList", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxTimepickerTimeControlComponent.prototype, "preventTyping", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NgxTimepickerTimeControlComponent.prototype, "timeChanged", void 0);
    NgxTimepickerTimeControlComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-timepicker-time-control',
            template: "<div class=\"ngx-timepicker-control\" [ngClass]=\"{'ngx-timepicker-control--active': isFocused}\">\n    <!--suppress HtmlFormInputWithoutLabel -->\n    <input class=\"ngx-timepicker-control__input\"\n           maxlength=\"2\"\n           [ngModel]=\"time | timeParser: timeUnit | timeLocalizer: timeUnit : true\"\n           (ngModelChange)=\"onModelChange($event)\"\n           [placeholder]=\"placeholder\"\n           [disabled]=\"disabled\"\n           (keydown)=\"onKeydown($event)\"\n           (keypress)=\"changeTime($event)\"\n           (focus)=\"onFocus()\"\n           (blur)=\"onBlur()\">\n    <div class=\"ngx-timepicker-control__arrows\">\n            <span class=\"ngx-timepicker-control__arrow\" role=\"button\" (click)=\"increase()\">\n                &#9650;\n            </span>\n        <span class=\"ngx-timepicker-control__arrow\" role=\"button\" (click)=\"decrease()\">\n                &#9660;\n            </span>\n    </div>\n</div>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            providers: [TimeParserPipe],
            styles: [".ngx-timepicker-control{position:relative;display:flex;width:60px;height:30px;padding:0 5px;box-sizing:border-box}.ngx-timepicker-control--active:after{content:'';position:absolute;bottom:-2px;left:0;width:100%;height:1px;background-color:#00bfff}.ngx-timepicker-control__input{width:100%;height:100%;padding:0 5px 0 0;border:0;font-size:1rem;color:inherit;outline:0;text-align:center}.ngx-timepicker-control__input:disabled{background-color:transparent}.ngx-timepicker-control__arrows{position:absolute;right:2px;top:0;display:flex;flex-direction:column}.ngx-timepicker-control__arrow{font-size:11px;color:rgba(0,0,0,.4);cursor:pointer;transition:color .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ngx-timepicker-control__arrow:hover{color:rgba(0,0,0,.9)}"]
        })
    ], NgxTimepickerTimeControlComponent);
    return NgxTimepickerTimeControlComponent;
}());
function concatTime(currentTime, nextTime) {
    var isNumber = /\d/.test(nextTime);
    if (isNumber) {
        var time = currentTime + nextTime;
        return +time;
    }
}

var NgxTimepickerPeriodSelectorComponent = /** @class */ (function () {
    function NgxTimepickerPeriodSelectorComponent(locale) {
        this.locale = locale;
        this.periodSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.period = TimePeriod;
        this.meridiems = luxon__WEBPACK_IMPORTED_MODULE_6__["Info"].meridiems({ locale: this.locale });
    }
    Object.defineProperty(NgxTimepickerPeriodSelectorComponent.prototype, "selectedPeriod", {
        set: function (period) {
            if (period) {
                var periods = [TimePeriod.AM, TimePeriod.PM];
                this.localizedPeriod = this.meridiems[periods.indexOf(period)];
            }
        },
        enumerable: true,
        configurable: true
    });
    NgxTimepickerPeriodSelectorComponent.prototype.open = function () {
        if (!this.disabled) {
            this.isOpened = true;
        }
    };
    NgxTimepickerPeriodSelectorComponent.prototype.select = function (period) {
        this.periodSelected.next(period);
        this.isOpened = false;
    };
    NgxTimepickerPeriodSelectorComponent.prototype.backdropClick = function () {
        this.isOpened = false;
    };
    NgxTimepickerPeriodSelectorComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [TIME_LOCALE,] }] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxTimepickerPeriodSelectorComponent.prototype, "isOpened", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxTimepickerPeriodSelectorComponent.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxTimepickerPeriodSelectorComponent.prototype, "selectedPeriod", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NgxTimepickerPeriodSelectorComponent.prototype, "periodSelected", void 0);
    NgxTimepickerPeriodSelectorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-timepicker-period-selector',
            template: "<div class=\"period\">\n    <div class=\"period-control\">\n        <button class=\"period-control__button period__btn--default\"\n                [ngClass]=\"{'period-control__button--disabled': disabled}\"\n                type=\"button\"\n                (click)=\"open()\">\n            <span>{{localizedPeriod}}</span>\n            <span class=\"period-control__arrow\">&#9660;</span>\n        </button>\n    </div>\n    <ul class=\"period-selector\" @scaleInOut *ngIf=\"isOpened\" [timepickerAutofocus]=\"true\">\n        <li>\n            <button class=\"period-selector__button period__btn--default\"\n                    type=\"button\"\n                    (click)=\"select(period.AM)\"\n                    [ngClass]=\"{'period-selector__button--active': localizedPeriod === meridiems[0]}\">{{meridiems[0]}}</button>\n        </li>\n        <li>\n            <button class=\"period-selector__button period__btn--default\"\n                    type=\"button\"\n                    (click)=\"select(period.PM)\"\n                    [ngClass]=\"{'period-selector__button--active': localizedPeriod === meridiems[1]}\">{{meridiems[1]}}</button>\n        </li>\n    </ul>\n</div>\n<div class=\"overlay\" (click)=\"backdropClick()\" *ngIf=\"isOpened\"></div>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('scaleInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'scale(0)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'scale(1)', opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'scale(0)', opacity: 0 }))
                    ])
                ])
            ],
            styles: [".period{position:relative}.period__btn--default{padding:0;border:none;background-color:transparent;cursor:pointer;text-align:left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;outline:0}.period-control{position:relative}.period-control__button{position:relative;width:60px;font-size:1rem;color:inherit;text-align:center}.period-control__button:not(.period-control__button--disabled):focus:after{content:'';position:absolute;bottom:-8px;left:0;width:100%;height:1px;background-color:#00bfff}.period-control__arrow{margin-left:10px;font-size:12px;color:rgba(0,0,0,.4)}.period-selector{position:absolute;top:calc(50% - 50px);right:calc(-50% + -50px);max-width:135px;width:150px;padding:6px 0;margin:0;list-style:none;background-color:#f5f5f5;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);z-index:201}.period-selector__button{width:100%;height:48px;padding:0 16px;line-height:48px}.period-selector__button--active{color:#00bfff}.period-selector__button:focus{background-color:#eee}.overlay{position:fixed;width:100%;height:100%;top:0;left:0;background-color:transparent;z-index:200}"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(TIME_LOCALE))
    ], NgxTimepickerPeriodSelectorComponent);
    return NgxTimepickerPeriodSelectorComponent;
}());

var TimeLocalizerPipe = /** @class */ (function () {
    function TimeLocalizerPipe(locale) {
        this.locale = locale;
    }
    TimeLocalizerPipe.prototype.transform = function (time, timeUnit, isKeyboardEnabled) {
        if (isKeyboardEnabled === void 0) { isKeyboardEnabled = false; }
        if (time == null || time === '') {
            return '';
        }
        switch (timeUnit) {
            case TimeUnit.HOUR: {
                var format = (time === 0 || isKeyboardEnabled) ? 'HH' : 'H';
                return this.formatTime('hour', time, format);
            }
            case TimeUnit.MINUTE:
                return this.formatTime('minute', time, 'mm');
            default:
                throw new Error("There is no Time Unit with type " + timeUnit);
        }
    };
    TimeLocalizerPipe.prototype.formatTime = function (timeMeasure, time, format) {
        var _a;
        try {
            return luxon__WEBPACK_IMPORTED_MODULE_6__["DateTime"].fromObject((_a = {}, _a[timeMeasure] = +time, _a)).setLocale(this.locale).toFormat(format);
        }
        catch (_b) {
            throw new Error("Cannot format provided time - " + time + " to locale - " + this.locale);
        }
    };
    TimeLocalizerPipe.ctorParameters = function () { return [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [TIME_LOCALE,] }] }
    ]; };
    TimeLocalizerPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'timeLocalizer'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(TIME_LOCALE))
    ], TimeLocalizerPipe);
    return TimeLocalizerPipe;
}());

var ActiveHourPipe = /** @class */ (function () {
    function ActiveHourPipe() {
    }
    ActiveHourPipe.prototype.transform = function (hour, currentHour, isClockFaceDisabled) {
        if (hour == null || isClockFaceDisabled) {
            return false;
        }
        return hour === currentHour;
    };
    ActiveHourPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'activeHour'
        })
    ], ActiveHourPipe);
    return ActiveHourPipe;
}());

var ActiveMinutePipe = /** @class */ (function () {
    function ActiveMinutePipe() {
    }
    ActiveMinutePipe.prototype.transform = function (minute, currentMinute, gap, isClockFaceDisabled) {
        if (minute == null || isClockFaceDisabled) {
            return false;
        }
        var defaultGap = 5;
        return ((currentMinute === minute) && (minute % (gap || defaultGap) === 0));
    };
    ActiveMinutePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'activeMinute'
        })
    ], ActiveMinutePipe);
    return ActiveMinutePipe;
}());

var NgxMaterialTimepickerContentComponent = /** @class */ (function () {
    function NgxMaterialTimepickerContentComponent() {
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerContentComponent.prototype, "appendToInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxMaterialTimepickerContentComponent.prototype, "inputElement", void 0);
    NgxMaterialTimepickerContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-material-timepicker-content',
            template: "<div [ngxAppendToInput]=\"inputElement\" *ngIf=\"appendToInput;else timepickerModal\">\n    <!--suppress HtmlUnknownAttribute -->\n    <ng-container *ngTemplateOutlet=\"timepickerOutlet\"></ng-container>\n</div>\n\n<ng-template #timepickerModal>\n    <!--suppress HtmlUnknownAttribute -->\n    <ng-container *ngTemplateOutlet=\"timepickerOutlet\"></ng-container>\n</ng-template>\n\n<ng-template #timepickerOutlet>\n    <ng-content></ng-content>\n</ng-template>\n"
        })
    ], NgxMaterialTimepickerContentComponent);
    return NgxMaterialTimepickerContentComponent;
}());

var AppendToInputDirective = /** @class */ (function () {
    function AppendToInputDirective(elementRef, renderer) {
        this.renderer = renderer;
        this.element = elementRef.nativeElement;
    }
    Object.defineProperty(AppendToInputDirective.prototype, "inputCords", {
        get: function () {
            return this.inputElement.getBoundingClientRect();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppendToInputDirective.prototype, "direction", {
        get: function () {
            var height = this.element.offsetHeight;
            var _a = this._inputCords, bottom = _a.bottom, top = _a.top;
            var isElementFit = (window && window.innerHeight) - bottom < height;
            var isTop = isElementFit && top > height;
            var isCenter = isElementFit && top < height;
            if (isTop) {
                return 'top';
            }
            else if (isCenter) {
                return 'center';
            }
            return 'bottom';
        },
        enumerable: true,
        configurable: true
    });
    AppendToInputDirective.prototype.ngAfterViewInit = function () {
        this._inputCords = this.inputCords;
        this._direction = this.direction;
        this.append();
    };
    AppendToInputDirective.prototype.changePosition = function () {
        var _a = this.inputCords, bottom = _a.bottom, top = _a.top;
        var y = this.defineElementYByDirection(top, bottom);
        this.setStyle('top', y + "px");
    };
    AppendToInputDirective.prototype.append = function () {
        var _a = this._inputCords, left = _a.left, bottom = _a.bottom, top = _a.top;
        var y = this.defineElementYByDirection(top, bottom);
        this.setStyle('position', 'fixed');
        this.setStyle('left', left + "px");
        this.setStyle('top', y + "px");
    };
    AppendToInputDirective.prototype.setStyle = function (style, value) {
        this.renderer.setStyle(this.element, style, value);
    };
    AppendToInputDirective.prototype.defineElementYByDirection = function (inputTop, inputBottom) {
        if (this._direction === 'top') {
            return inputTop - this.element.offsetHeight;
        }
        else if (this._direction === 'center') {
            return inputTop - (this.element.offsetHeight / 2);
        }
        return inputBottom;
    };
    AppendToInputDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngxAppendToInput')
    ], AppendToInputDirective.prototype, "inputElement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll')
    ], AppendToInputDirective.prototype, "changePosition", null);
    AppendToInputDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[ngxAppendToInput]'
        })
    ], AppendToInputDirective);
    return AppendToInputDirective;
}());

var NgxMaterialTimepickerModule = /** @class */ (function () {
    function NgxMaterialTimepickerModule() {
    }
    NgxMaterialTimepickerModule_1 = NgxMaterialTimepickerModule;
    NgxMaterialTimepickerModule.setLocale = function (locale) {
        return {
            ngModule: NgxMaterialTimepickerModule_1,
            providers: [
                { provide: TIME_LOCALE, useValue: locale }
            ]
        };
    };
    var NgxMaterialTimepickerModule_1;
    NgxMaterialTimepickerModule = NgxMaterialTimepickerModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            exports: [
                NgxMaterialTimepickerComponent,
                NgxMaterialTimepickerToggleComponent,
                NgxTimepickerFieldComponent,
                TimepickerDirective,
                NgxMaterialTimepickerToggleIconDirective,
                NgxMaterialTimepickerThemeDirective,
                NgxMaterialTimepicker24HoursFaceComponent,
                NgxMaterialTimepicker12HoursFaceComponent,
                NgxMaterialTimepickerMinutesFaceComponent,
                NgxMaterialTimepickerFaceComponent,
                NgxMaterialTimepickerDialComponent,
                NgxMaterialTimepickerDialControlComponent
            ],
            declarations: [
                NgxMaterialTimepickerComponent,
                NgxMaterialTimepicker24HoursFaceComponent,
                NgxMaterialTimepicker12HoursFaceComponent,
                NgxMaterialTimepickerMinutesFaceComponent,
                NgxMaterialTimepickerFaceComponent,
                NgxMaterialTimepickerToggleComponent,
                NgxMaterialTimepickerButtonComponent,
                NgxMaterialTimepickerDialComponent,
                NgxMaterialTimepickerDialControlComponent,
                NgxMaterialTimepickerPeriodComponent,
                TimeFormatterPipe,
                TimepickerDirective,
                OverlayDirective,
                NgxMaterialTimepickerToggleIconDirective,
                AutofocusDirective,
                MinutesFormatterPipe,
                NgxMaterialTimepickerThemeDirective,
                NgxTimepickerFieldComponent,
                NgxTimepickerTimeControlComponent,
                NgxTimepickerPeriodSelectorComponent,
                TimeLocalizerPipe,
                TimeParserPipe,
                ActiveHourPipe,
                ActiveMinutePipe,
                NgxMaterialTimepickerContainerComponent,
                NgxMaterialTimepickerContentComponent,
                AppendToInputDirective
            ],
            entryComponents: [NgxMaterialTimepickerContainerComponent]
        })
    ], NgxMaterialTimepickerModule);
    return NgxMaterialTimepickerModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-material-timepicker.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/category-management/category-management.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/category-management/category-management.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>category-management works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/change-password/change-password.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/change-password/change-password.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"layout-main\">\n<app-left-sidebar></app-left-sidebar>\n<div class=\"profilePage\"></div>\n    <div class=\"layout-content\">\n        <div class=\"layout-content-body\">\n            <div class=\"title-bar\">\n                <h1 class=\"title-bar-title\">\n                  <span class=\"d-ib\">Change Password </span>\n                  <a class=\"m-l-10\" routerLink=\"/home/profile\"><small>Back to Profile</small></a>\n                </h1>\n            </div>\n            <div class=\"col-md-6 col-lg-5 card\">\n                <div class=\"demo-form-wrapper card-body\">\n                    <form class=\"form\" [formGroup]=\"changepass\">\n                        <div class=\"form-group\">\n                            <label for=\"\" class=\" control-label\">Old Password</label>  \n                            <input id=\"\" class=\"form-control\" type=\"password\" formControlName = \"oldPassword\" [ngClass]=\"{ 'is-invalid':invalidPassWord && f.oldPassword.errors}\">\n                            <div *ngIf=\"submitted && f.oldPassword.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\" submitted && f.oldPassword.errors.required\"> Old Password is required.</div>\n                                <div *ngIf=\"f.oldPassword.errors.minlength\">Password must be at least 8 characters.</div>\n                              </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"\" class=\" control-label\">New Password</label>\n                            <input id=\"\" class=\"form-control\" type=\"password\" formControlName = \"newPassword\">\n                            <div *ngIf=\"submitted && f.newPassword.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.newPassword.errors.required\"> New Password is required.</div>\n                                <div *ngIf=\"f.newPassword.errors.minlength\">Password must be at least 4 characters.</div>\n                              </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"\" class=\" control-label\">Confirm Password</label>\n                            <input id=\"\" class=\"form-control\" type=\"password\" formControlName = \"confirmPassword\">\n                            <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required.</div>\n                                <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Password and confirmPassword must match</div>\n                              </div>\n                        </div>\n                        <div *ngIf=\"errorMessage\"  class=\"invalid-feedback\">\n                            <div>{{errorMessage}}</div>\n                        </div>\n                        <div class=\"form-group\">\n                            <button class=\"btn btn-primary btn-block \" (click)= \"submitpassword()\"  type=\"submit\">Submit</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n\n<app-footer></app-footer>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/dashboard/dashboard.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/dashboard/dashboard.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"layout-main\">\n  <app-left-sidebar></app-left-sidebar>\n  <div class=\"dashboardPage\"></div>\n  <div class=\"layout-content\">\n    <div class=\"layout-content-body\">\n      <div class=\"title-bar\">\n        <h1 class=\"title-bar-title\">\n          <span class=\"d-ib\">Dashboard</span>\n          <select class=\"btn btn-primary pull-right\">\n            <option value=\"Daily\">Daily</option>\n            <option value=\"Weekly\">Weekly</option>\n            <option value=\"Monthly\">Monthly</option>\n            <option value=\"Yearly\">Yearly</option>\n          </select>\n        </h1> \n      </div>\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"row gutter-sm\">\n            <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 form-group\">\n              <label class=\"mr-2\">From </label>\n              <div class=\"dateField\">\n                <ng-datepicker class=\"datepic\" (ngModelChange)=\"fromDate($event)\" [(ngModel)]=\"fromdate\"\n                  [options]=\"optionsFrom\"  [ngModelOptions]=\"{standalone: true}\"></ng-datepicker>\n                <i class=\"fa fa-calendar ml-2 fs-18\"></i>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 form-group\">\n              <label class=\"mr-2\">To </label>\n              <div class=\"dateField\">\n                <ng-datepicker class=\"w-100\" [(ngModel)]=\"todate\" [options]=\"optionsTo\"\n                (ngModelChange)=\"filterDate()\" [ngModelOptions]=\"{standalone: true}\"></ng-datepicker>\n                <i class=\"fa fa-calendar ml-2 fs-18\"></i>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3\">\n              <div class=\"dropdown lng-dropdown\">\n                <button class=\"text-left form-control\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n                  <span id=\"dropdown-active-item\">\n                    <img src=\"assets/img/flags/ENGLISH.jpg\" alt=\"\" /> Country\n                  </span>\n                  <span class=\"fa fa-angle-down pull-right\"></span>\n                </button>\n                <ul class=\"dropdown-menu dropdown-menu-left\">\n                  <li>\n                    <a href=\"javascript:void(0)\" data-lng=\"en\">\n                      <img src=\"assets/img/flags/ENGLISH.jpg\" alt=\"\" /> English\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"javascript:void(0)\" data-lng=\"es\">\n                      <img src=\"assets/img/flags/SPAIN.jpg\" alt=\"\" /> Spanish\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"javascript:void(0)\" data-lng=\"pt\">\n                      <img src=\"assets/img/flags/PORTO.jpg\" alt=\"\" /> Portuguese\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"javascript:void(0)\" data-lng=\"fr\">\n                      <img src=\"assets/img/flags/FRANCE.jpg\" alt=\"\" /> French\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3\">\n              <div class=\"form-group lng-dropdown\">\n                <select class=\"form-control\">\n                  <option value=\"Today\">Today</option>\n                  <option value=\"This Week\">This Week</option>\n                  <option value=\"This Month\">This Month</option>\n                  <option value=\"This Year\">This Year</option>\n                </select>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row gutter-xs height-box\">\n        <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8\">\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 full-height\">\n              <!-- <div class=\"card\">\n              <div class=\"card-body\">              \n                <div class=\"media\">                \n                  <div class=\"media-middle media-left\">\n                    <span class=\"bg-primary circle sq-48\">\n                      <span class=\"icon icon-check\"></span>\n                    </span>\n                  </div>\n                  <div class=\"media-middle media-body\">\n                    <h4 class=\"media-heading\">\n                      <span class=\"fw-l text-danger\">User</span>\n                    </h4>\n                    <h3 class=\"media-heading\">678K</h3>\n                    <h5 class=\"media-heading text-danger\">70% ACTIVE</h5>\n                    <h5 class=\"media-heading\">Total Registered Users</h5>\n                  </div>\n                  <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n                    <select class=\"form-control\">\n                      <option value=\"\">ACTIVE</option>\n                      <option value=\"\">INACTIVE</option>\n                    </select>\n                  </div>                \n                </div>\n              </div>\n            </div> -->\n              <div class=\"card\">notification-management\n                <div class=\"card-body\">\n                  <div class=\"row\">\n                    <h6 class=\"col-xs-12 col-sm-6 text-danger\">USERS</h6>\n                    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 mb-5\">\n                      <select class=\"form-control\">\n                        <option>ACTIVE</option>\n                        <option>INACTIVE</option>\n                      </select>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n                      <h4 class=\"d-flex align-items-center m-0\">678K</h4>\n                      <label class=\"d-flex align-items-center text-danger m-0 fs-11\">70% ACTIVE</label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 full-height\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <div class=\"row\">\n                    <h6 class=\"col-xs-12 col-sm-6 text-danger\">USERS</h6>\n                    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 mb-5\">\n                      <select class=\"form-control\">\n                        <option>SUBSCRIBED</option>\n                        <option>UNSUBCRIBED</option>\n                      </select>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n                      <h4 class=\"d-flex align-items-center m-0\">678K</h4>\n                      <label class=\"d-flex align-items-center text-danger m-0 fs-11\">70% SUBSCRIBED</label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"full-height col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <div class=\"row\">\n                    <h6 class=\"col-xs-12 col-sm-6 text-danger\">ROOMS</h6>\n                    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 mb-5\">\n                      <select class=\"form-control\">\n                        <option>ACTIVE</option>\n                        <option>INACTIVE</option>\n                      </select>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-8 col-md-6 col-lg-6\">\n                      <h4 class=\"align-items-center m-0\">678wK</h4>\n                      <label class=\"align-items-center text-danger m-0 fs-11\">70% ACTIVE MEMBERS</label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"full-height col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <div class=\"row\">\n                    <h6 class=\"col-xs-12 col-sm-6 text-danger\">POSTS</h6>\n                    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 mb-5\">\n                      <select class=\"form-control\">\n                        <option>GIT SENT</option>\n                        <option>SHARED</option>\n                        <option>LIKED</option>\n                      </select>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n                      <h4 class=\"d-flex align-items-center m-0\">678K</h4>\n                      <label class=\"d-flex align-items-center text-danger m-0 fs-11\">GIFT SENT</label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-12 full-height\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <!-- <div class=\"media\">\n                    <div class=\"d-flex align-items-center\">\n                      <select class=\"form-control mr-2\">\n                        <option>Country I Currency</option>\n                        <option>Country I Currency</option>\n                        <option>Country I Currency</option>\n                      </select>\n                      <label class=\"d-flex m-0 mt-1 wpx-90 text-right\">\n                        <input type=\"checkbox\" class=\"\" name=\"\">\n                        <span class=\"text-danger pl-1\">Show in $</span>\n                      </label>\n                    </div>\n                    <div class=\"media-middle media-body\">\n                      <h6 class=\"media-heading mt-2\">REVENUE<span class=\"text-danger pull-right\">4 M $</span></h6>\n                      <div class=\" \">\n                        <label>From</label>\n                        <p>Commissions GSDFG <span class=\"text-danger pull-right\">2 M $</span></p>\n                      </div>\n                    </div>\n                  </div> -->\n                  <div class=\"row\">\n                    <h6 class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 text-danger\">DAILY TASK</h6>\n                    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 subtitle\">\n                      <span class=\"title-name\">TASK NAME | 250K COMPLETED</span>                      \n                    </div>\n                    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 mb-5\">\n                      <select class=\"form-control\">\n                        <option>TODAY</option>\n                        <option>WEEK</option>\n                        <option>MONTH</option>\n                        <option>LIFETIME</option>\n                      </select>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\n                      <h4 class=\"d-flex m-0\">678K</h4>\n                      <label class=\"d-flex text-danger m-0\">TOTAL COMPLETED</label>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-6 col-md-6  subtitle\">\n                      <h6 class=\"text-danger\">MOST POPULAR TASK | 45%</h6>                      \n                    </div>\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                      <div class=\"task\">\n                         <ul>\n                            <li>\n                             <div class=\"task-content\">\n                               <h5>Task Name</h5>\n                               <p class=\"text-danger\">20k | 45%  <span></span></p>\n                             </div>\n                            </li>\n                            <li>\n                             <div class=\"task-content\">\n                               <h5>Task Name</h5>\n                               <p class=\"text-danger\">20k | 45%  <span></span></p>\n                             </div>\n                            </li>\n                            <li>\n                             <div class=\"task-content\">\n                               <h5>Task Name</h5>\n                               <p class=\"text-danger\">20k | 45%  <span></span></p>\n                             </div>\n                            </li>\n                            <li>\n                             <div class=\"task-content\">\n                               <h5>Task Name</h5>\n                               <p class=\"text-danger\">20k | 45%  <span></span></p>\n                             </div>\n                            </li>\n                            \n                         </ul>\n                      </div> \n                   </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-12 full-height\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <!-- <div class=\"media\">\n                    <div class=\"d-flex align-items-center\">\n                      <select class=\"form-control mr-2\">\n                        <option>Country I Currency</option>\n                        <option>Country I Currency</option>\n                        <option>Country I Currency</option>\n                      </select>\n                      <label class=\"d-flex m-0 mt-1 wpx-90 text-right\">\n                        <input type=\"checkbox\" class=\"\" name=\"\">\n                        <span class=\"text-danger pl-1\">Show in $</span>\n                      </label>\n                    </div>\n                    <div class=\"media-middle media-body\">\n                      <h6 class=\"media-heading mt-2\">REVENUE<span class=\"text-danger pull-right\">4 M $</span></h6>\n                      <div class=\" \">\n                        <label>From</label>\n                        <p>Commissions GSDFG <span class=\"text-danger pull-right\">2 M $</span></p>\n                      </div>\n                    </div>\n                  </div> -->\n                  <div class=\"row\">\n                    <h5 class=\"col-xs-12 col-sm-6 col-md-8 col-lg-8 col-xl-8\"><i class=\"fa fa-usd mr-5\" aria-hidden=\"true\"></i>Revenue</h5>\n                    <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-5\">\n                      <select class=\"form-control\">\n                        <option>GIT SENT</option>\n                        <option>SHARED</option>\n                        <option>LIKED</option>\n                      </select>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n                      <h4 class=\"d-flex align-items-center m-0\">678K</h4>\n                      <label class=\"d-flex align-items-center text-danger m-0\">GIFT SENT</label>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n                      <h3 class=\"align-items-center text-danger m-0\">2M</h3>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                       <div class=\"task\">\n                          <ul>\n                             <li>\n                              <div class=\"task-content\">\n                                <h5>Task Name</h5>\n                                <p class=\"text-danger\">20k | 45%<span></span></p>\n                              </div>\n                             </li>\n                             <li>\n                              <div class=\"task-content\">\n                                <h5>Task Name</h5>\n                                <p class=\"text-danger\">20k | 45%<span></span></p>\n                              </div>\n                             </li>\n                             <li>\n                              <div class=\"task-content\">\n                                <h5>Task Name</h5>\n                                <p class=\"text-danger\">20k | 45%<span></span></p>\n                              </div>\n                             </li>\n                             <li>\n                              <div class=\"task-content\">\n                                <h5>Task Name</h5>\n                                <p class=\"text-danger\">20k | 45%<span></span></p>\n                              </div>\n                             </li>\n                                                          \n                          </ul>\n                       </div> \n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-12 full-height\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <!-- <div class=\"media\">\n                    <div class=\"d-flex align-items-center\">\n                      <select class=\"form-control mr-2\">\n                        <option>Country I Currency</option>\n                        <option>Country I Currency</option>\n                        <option>Country I Currency</option>\n                      </select>\n                      <label class=\"d-flex m-0 mt-1 wpx-90 text-right\">\n                        <input type=\"checkbox\" class=\"\" name=\"\">\n                        <span class=\"text-danger pl-1\">Show in $</span>\n                      </label>\n                    </div>\n                    <div class=\"media-middle media-body\">\n                      <h6 class=\"media-heading mt-2\">REVENUE<span class=\"text-danger pull-right\">4 M $</span></h6>\n                      <div class=\" \">\n                        <label>From</label>\n                        <p>Commissions GSDFG <span class=\"text-danger pull-right\">2 M $</span></p>\n                      </div>\n                    </div>\n                  </div> -->\n                  <div class=\"row\">\n                    <h6 class=\"col-xs-12 col-sm-3\">ROOM UPGRADES</h6>\n                    <div class=\"col-xs-12 col-sm-6 col-md-6 subtitle\">\n                      <span class=\"title-name\">NAME | 250K SOLD</span>                      \n                    </div>\n                    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 mb-5\">\n                      <select class=\"form-control\">\n                        <option>TODAY</option>\n                        <option>WEEK</option>\n                        <option>MONTH</option>\n                        <option>LIFETIME</option>\n                      </select>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n                      <h4 class=\"d-flex m-0\">678K</h4>\n                      <label class=\"d-flex text-danger m-0\">TOTAL SOLD</label>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-6 col-md-6 subtitle\">\n                      <h6 class=\"text-danger\">MOST POPULAR UPGRADE</h6>                      \n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-12 full-height\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <!-- <div class=\"media\">\n                    <div class=\"d-flex align-items-center\">\n                      <select class=\"form-control mr-2\">\n                        <option>Country I Currency</option>\n                        <option>Country I Currency</option>\n                        <option>Country I Currency</option>\n                      </select>\n                      <label class=\"d-flex m-0 mt-1 wpx-90 text-right\">\n                        <input type=\"checkbox\" class=\"\" name=\"\">\n                        <span class=\"text-danger pl-1\">Show in $</span>\n                      </label>\n                    </div>\n                    <div class=\"media-middle media-body\">\n                      <h6 class=\"media-heading mt-2\">REVENUE<span class=\"text-danger pull-right\">4 M $</span></h6>\n                      <div class=\" \">\n                        <label>From</label>\n                        <p>Commissions GSDFG <span class=\"text-danger pull-right\">2 M $</span></p>\n                      </div>\n                    </div>\n                  </div> -->\n                  <div class=\"row\">\n                    <h6 class=\"col-xs-12 col-sm-3\">MEMBERSHIP</h6>\n                    <div class=\"col-xs-12 col-sm-6 col-md-6 subtitle\">\n                      <span class=\"title-name\">NAME | 250K SOLD</span>                      \n                    </div>\n                    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 mb-5\">\n                      <select class=\"form-control\">\n                        <option>TODAY</option>\n                        <option>WEEK</option>\n                        <option>MONTH</option>\n                        <option>LIFETIME</option>\n                      </select>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n                      <h4 class=\"d-flex m-0\">678K</h4>\n                      <label class=\"d-flex text-danger m-0\">TOTAL SOLD</label>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-6 col-md-6 subtitle\">\n                      <h6 class=\"text-danger\">MOST POPULAR MEMBERSHIP</h6>                      \n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-12 full-height\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <!-- <div class=\"media\">\n                    <div class=\"d-flex align-items-center\">\n                      <select class=\"form-control mr-2\">\n                        <option>Country I Currency</option>\n                        <option>Country I Currency</option>\n                        <option>Country I Currency</option>\n                      </select>\n                      <label class=\"d-flex m-0 mt-1 wpx-90 text-right\">\n                        <input type=\"checkbox\" class=\"\" name=\"\">\n                        <span class=\"text-danger pl-1\">Show in $</span>\n                      </label>\n                    </div>\n                    <div class=\"media-middle media-body\">\n                      <h6 class=\"media-heading mt-2\">REVENUE<span class=\"text-danger pull-right\">4 M $</span></h6>\n                      <div class=\" \">\n                        <label>From</label>\n                        <p>Commissions GSDFG <span class=\"text-danger pull-right\">2 M $</span></p>\n                      </div>\n                    </div>\n                  </div> -->\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <div class=\"row package-cate\">\n                        <div class=\"col-xs-12 col-sm-9 col-md-9 col-lg-9\">\n                          <button type=\"button\" class=\"btn btn-sm btn-primary mr-1 margin-bottom-5\">ROOM LOCK</button>\n                          <button type=\"button\" class=\"btn btn-sm btn-primary ml-1 margin-bottom-5\">PIN TO TOP</button>\n                          <button type=\"button\" class=\"btn btn-sm btn-primary ml-1 margin-bottom-5\">UNIQUE ID</button>\n                          <button type=\"button\" class=\"btn btn-sm btn-primary ml-1 margin-bottom-5\">GOLD PACKAGES</button>\n                          <!-- <span class=\"title-name\">TASK NAME | 250K COMPLETED</span> -->\n                        </div>\n                        <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n                          <select class=\"form-control\">\n                            <option>TODAY</option>\n                            <option>WEEK</option>\n                            <option>MONTH</option>\n                            <option>LIFETIME</option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>                   \n                    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n                      <h4 class=\"d-flex m-0\">678K</h4>\n                      <label class=\"d-flex text-danger m-0\">TOTAL SOLD</label>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-6 col-md-6 subtitle mt-2\">\n                      <h6 class=\"text-dange\">NAME | 250K SOLD</h6>\n                      <label class=\"text-danger m-0\">MOST POPULAR PACKAGE</label>                      \n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            \n            <div class=\"col-lg-12 full-height\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <div class=\"row\">\n                    <h6 class=\"col-xs-12 col-sm-6\"><span class=\"pl-1\">TOTAL COINS CIRCULATING IN APP</span></h6>                    \n                    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 mb-5\">\n                      <select class=\"form-control\">\n                        <option>GOLD COINS</option>\n                        <option>SILVER COINS</option>\n                        <option>BOTH</option>                        \n                      </select>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 subtitle\">\n                      <div class=\"row\">\n                        <div class=\"col-md-6\">\n                          <select class=\"form-control\">\n                            <option>LIFETIME</option>                      \n                          </select>\n                        </div>\n                        <div class=\"col-md-6\">\n                          <span class=\"title-name\">90,06,57,080</span>\n                        </div>\n                      </div>                                            \n                    </div>                    \n                    <!-- <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n                      <h4 class=\"d-flex m-0\">678K</h4>\n                      <label class=\"d-flex text-danger m-0\">TOTAL COMPLETED</label>\n                    </div> -->\n                    <!-- <div class=\"col-xs-12 col-sm-6 col-md-6 subtitle\">\n                      <h6 class=\"text-dange\">MOST POPULAR TASK | 45%</h6>                      \n                    </div> -->\n                  </div>\n                  <div class=\"media\">\n                    <div class=\"d-flex align-items-center\">\n                      <!-- <select class=\"form-control mr-2\">\n                        <option>Country I Currency</option>\n                        <option>Country I Currency</option>\n                        <option>Country I Currency</option>\n                      </select> -->\n                      <label class=\"d-flex m-0 mt-1 wpx-90 text-right\">                        \n                        <span class=\"pl-1\">TOTAL COINS CIRCULATING IN APP</span>\n                      </label>\n                    </div>\n                    <div class=\"media-middle media-body\">\n                      <h6 class=\"media-heading mt-2\">(1)Today<span class=\"text-danger pull-right\">2M</span></h6>\n                      <h6 class=\"media-heading mt-2\">(2)This Week<span class=\"text-danger pull-right\">9M</span></h6>\n                      <h6 class=\"media-heading mt-2\">(3)This Month<span class=\"text-danger pull-right\">90M</span></h6>\n                    </div>\n                  </div>\n\n                  \n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4\">\n          <div class=\"row\">\n            <div class=\"full-height col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <div class=\"media\">\n                    <!-- <div class=\"media-middle media-left\">\n                      <span class=\"bg-info circle sq-48\">\n                        <span class=\"icon icon-times\"></span>\n                      </span>\n                    </div> -->\n                    <div class=\"media-middle media-body\">\n                      <h4 class=\"media-heading\">\n                        <!-- <span class=\"fw-l\">23434K</span> -->\n                        <!-- <select class=\"form-control form-control-sm mb-1 wpx-120 pull-right\">\n                        <option value=\"All\">ALL</option>\n                        <option value=\"Orders\">Orders</option>\n                      </select> -->\n                      </h4>\n                      <div class=\"clearfix\">\n                        <h6 class=\"media-heading\">Top Rooms</h6>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"media\">\n                    <div class=\"row\">\n                      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4\">\n                        <label>(1) Room Id</label>\n                      </div>\n                      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4\">\n                        <span class=\"text-danger pl-1\">9k MEMBERS</span>\n                      </div>\n\n                      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4\"><P class=\"text-warning\">5K GOLD COIN</P></div>\n                      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4\"><label>(2) Room Id</label></div>\n                      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4\"><span class=\"text-danger pl-1\">9k MEMBERS</span></div>\n                      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4\"><P class=\"text-warning\">5K GOLD COIN</P></div>\n                      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4\"><label>(3) Room Id</label></div>\n                      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4\"><span class=\"text-danger pl-1\">9k MEMBERS</span></div>\n                      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4\"><P class=\"text-warning\">5K GOLD COIN</P></div>\n                    </div>                                     \n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"full-height col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <div class=\"media\">\n                    <!-- <div class=\"media-middle media-left\">\n                      <span class=\"bg-info circle sq-48\">\n                        <span class=\"icon icon-film\"></span>\n                      </span>\n                    </div> -->\n                    <div class=\"media-middle media-body\">\n                      <h4 class=\"media-heading\">\n                        <!-- <span class=\"fw-l\">234K</span> -->\n                      </h4>\n                      <h6 class=\"media-heading\">Top Spenders</h6>\n                    </div>\n\n                  </div>\n                  <div class=\"media\">\n                    <div class=\"row\">\n                      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4\"><label>(1) Username</label></div>\n                      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4\"><span class=\"text-danger pl-1\">9k GIFTS</span></div>\n                      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4\"><P class=\"text-warning\">5K GOLD COIN</P></div>\n                      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4\"><label>(2) Username</label></div>\n                      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4\"><span class=\"text-danger pl-1\">9k GIFTS</span></div>\n                      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4\"><P class=\"text-warning\">5K GOLD COIN</P></div>\n                      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4\"><label>(3) Username</label></div>\n                      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4\"><span class=\"text-danger pl-1\">9k GIFTS</span></div>\n                      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4\"><P class=\"text-warning\">5K GOLD COIN</P></div>\n                    </div>                                     \n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 full-height\">\n              <div class=\"row gutter-xs height-box\">\n                <div class=\"full-height col-xs-12 col-sm-12 col-md-12\">\n                  <div class=\"card\">\n                    <div class=\"card-body\">                      \n                      <div class=\"row\">\n                        <h5 class=\"col-xs-12 col-sm-12\"><i class=\"fa fa-usd mr-5\" aria-hidden=\"true\"></i>Revenue</h5>\n                        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-5\">\n                          <select class=\"form-control\">\n                            <option>Week</option>\n                            <option>Week</option>\n                            <option>Week</option>\n                            <option>Week</option>\n                          </select>\n                        </div>\n                        <div class=\"col-xs-12 mt-3 card-chart\">\n                          <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\"\n                            [legend]=\"barChartLegend\" [chartType]=\"barChartType\" (chartHover)=\"chartHovered($event)\"\n                            (chartClick)=\"chartClicked($event)\">\n                          </canvas>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 full-height\">\n              <div class=\"row gutter-xs height-box\">\n                <div class=\"full-height col-xs-12 col-sm-12 col-md-12\">\n                  <div class=\"card\">\n                    <div class=\"card-body\">\n                      <div class=\"row\">\n                        <h5 class=\"col-xs-12 col-sm-12\"><i class=\"fa fa-line-chart mr-5\" aria-hidden=\"true\"></i> Traffic On\n                          User App</h5>\n                        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                          <label class=\"m-0 d-block\">&nbsp;</label>\n                          <label class=\"m-0 d-block\">&nbsp;</label>\n                        </div>\n                        <div class=\"col-xs-12 mt-2 card-chart\">\n                          <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\"\n                            [legend]=\"barChartLegend\" [chartType]=\"barChartType\" (chartHover)=\"chartHovered($event)\"\n                            (chartClick)=\"chartClicked($event)\">\n                          </canvas>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 full-height\">\n              <div class=\"row gutter-xs height-box\">\n                <div class=\"full-height col-xs-12 col-sm-12 col-md-12\">\n                  <div class=\"card\">\n                    <div class=\"card-body\">\n                      <div class=\"row\">\n                        <h5 class=\"col-xs-12 col-sm-12\"><i class=\"fa fa-line-chart mr-5\" aria-hidden=\"true\"></i>Revenue Generation</h5>\n                        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                          <label class=\"m-0 d-block\">&nbsp;</label>\n                          <label class=\"m-0 d-block\">&nbsp;</label>\n                        </div>\n                        <div class=\"col-xs-12 mt-2 card-chart\">\n                          <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\"\n                            [legend]=\"barChartLegend\" [chartType]=\"barChartType\" (chartHover)=\"chartHovered($event)\"\n                            (chartClick)=\"chartClicked($event)\">\n                          </canvas>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 full-height\">\n              <div class=\"row gutter-xs height-box\">\n                <div class=\"full-height col-xs-12 col-sm-12 col-md-12\">\n                  <div class=\"card\">\n                    <div class=\"card-body\">\n                      <div class=\"row\">\n                        <h5 class=\"col-xs-12 col-sm-12\"><i class=\"fa fa-bitcoin mr-5\" aria-hidden=\"true\"></i>Revenue From Coins</h5>\n                        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n                          <label class=\"d-flex align-items-center m-0\">Monthly : 70.05% <i\n                              class=\"fa fa-sort-asc text-success mt-1 ml-1\"></i></label>\n                          <label class=\"d-flex align-items-center m-0\">Overall : 70.65% <i\n                              class=\"fa fa-sort-asc text-success mt-1 ml-1\"></i></label>\n                        </div>\n                        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 mb-5\">\n                          <select class=\"form-control\">\n                            <option>Quaterly</option>\n                            <option>Quaterly</option>\n                            <option>Quaterly</option>\n                            <option>Quaterly</option>\n                          </select>\n                        </div>\n                        <div class=\"col-xs-12 mt-2 card-chart\">\n                          <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\"\n                            [legend]=\"barChartLegend\" [chartType]=\"barChartType\" (chartHover)=\"chartHovered($event)\"\n                            (chartClick)=\"chartClicked($event)\">\n                          </canvas>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- <div class=\"row height-box\">\n        <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4 full-height\">\n          <div class=\"row gutter-xs height-box\">\n            <div class=\"full-height col-xs-12 col-sm-12 col-md-12\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <div class=\"row\">\n                    <h5 class=\"col-xs-12 col-sm-12\"><i class=\"fa fa-android\" aria-hidden=\"true\"></i> Orders Made</h5>\n                    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n                      <label class=\"d-flex align-items-center m-0\">Monthly : 70.05% <i\n                          class=\"fa fa-sort-asc text-success mt-1 ml-1\"></i></label>\n                      <label class=\"d-flex align-items-center m-0\">Overall : 70.65% <i\n                          class=\"fa fa-sort-asc text-success mt-1 ml-1\"></i></label>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n                      <select class=\"form-control\">\n                        <option>Quaterly</option>\n                        <option>Quaterly</option>\n                        <option>Quaterly</option>\n                        <option>Quaterly</option>\n                      </select>\n                    </div>\n                    <div class=\"col-xs-12 mt-2 card-chart\">\n                      <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\"\n                        [legend]=\"barChartLegend\" [chartType]=\"barChartType\" (chartHover)=\"chartHovered($event)\"\n                        (chartClick)=\"chartClicked($event)\">\n                      </canvas>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>                 \n      </div> -->\n    </div>\n  </div>\n  <app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/edit-profile/edit-profile.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/edit-profile/edit-profile.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"layout-main\">\n<app-left-sidebar></app-left-sidebar>\n<div class=\"profilePage\"></div>\n<div class=\"layout-content\">\n    <div class=\"layout-content-body\">\n        <div class=\"title-bar\">\n\n            <h1 class=\"title-bar-title\">\n              <span class=\"d-ib\">Edit Profile </span>\n              <a class=\"m-l-10\" routerLink=\"/home/profile\"><small>Back to Profile</small></a>\n            </h1>\n        </div>\n        <div class=\"col-md-8 card panel-body\" style=\"box-shadow: 0px 0px 14px #999;\">\n            <div class=\"demo-form-wrapper\">\n                <form [formGroup]=\"editprofile\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label class=\" control-label\">Name</label>\n                            <input id=\"\" class=\"form-control\" type=\"text\" [(ngModel)] = 'fullName' formControlName=\"fullName\" placeholder=\"Full Name\" >\n                            <div *ngIf=\"submitted && f.fullName.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.fullName.errors.required\">Name is required</div>\n                              </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label class=\" control-label\">Mobile</label>\n                            <input id=\"\" class=\"form-control\" type=\"text\"  [(ngModel)] = 'mobile' formControlName=\"mobile\" placeholder=\"Mobile\">\n                            <div *ngIf=\"submitted && f.mobile.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.mobile.errors.required\">Mobile Number is required.</div> \n                                <div *ngIf=\"f.mobile.errors.maxlength\">Mobile Number must be at most 13 characters.</div>  \n                                <div *ngIf=\"f.mobile.errors.pattern\" class=\"text-danger\">Number Only</div> \n                              </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label class=\" control-label\">Email ID</label>\n                            <input id=\"\" class=\"form-control\" type=\"text\"  [(ngModel)] = 'email' formControlName=\"email\" placeholder=\"Email ID\" >\n                            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.email.errors.required\">Email is required.</div>\n                                <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                              </div>\n                        </div>\n                    </div>\n                    <!-- <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label class=\" control-label\">City</label>\n                            <input id=\"\" class=\"form-control\" type=\"text\"  [(ngModel)] = 'City' formControlName=\"City\" placeholder=\"City\">\n                        </div>\n                    </div> -->\n\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group add-pic\">\n                            <label class=\" control-label\">Add Images</label>\n                            <div class=\"pic-box\">\n                                <div class=\"logoImg\">\n                                    <img src=\"assets/img/3002121059.jpg\" id=\"imagefile1\">\n                                    <input id=\"logo-file\" type=\"file\" class=\"hide\" formControlName=\"adminImage\" (change)='singleFiles1($event)'>\n                                    <label for=\"logo-file\" class=\"btn btn-large\"></label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <label for=\"about\" class=\" control-label\">Description</label>\n                            <textarea id=\"\" class=\"form-control\" rows=\"3\"  [(ngModel)] = 'description' formControlName=\"description\" placeholder=\"Description\"></textarea>\n                            <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.description.errors.required\">Description is required</div>\n                              </div>\n                        </div> \n                    </div>\n                    <div class=\" col-sm-12\">\n                        <div class=\"form-group\">\n                            <button class=\"btn btn-primary \" type=\"submit\" (click)='profilesave()'>Submit</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n\n    </div>\n</div>\n<app-footer></app-footer>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/notification-management/notification-management.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/notification-management/notification-management.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>notification-management works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile/profile.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile/profile.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"layout-main\">\n  <app-left-sidebar></app-left-sidebar>\n  <div class=\"profilePage\"></div>\n  <div class=\"layout-content\">\n    <div class=\"row gutter-xs\">\n      <div class=\"profile-box\">\n        <div class=\"card text-center\">\n          <div class=\"card-image\">\n            <div class=\"overlay\">\n              <div class=\"overlay-gradient\">\n                <img class=\"card-img-top img-responsive\" [src]=\"admin.adminImage\" alt=\"Admin Image\">\n              </div>\n            </div>\n          </div>\n          <div class=\"card-avatar\">\n            <!-- <a class=\"card-thumbnail rounded sq-100\" href=\"home/profile\">\n              <img class=\"img-responsive\" [src]=\"admin.adminImage\" >\n            </a> -->\n          </div>\n          <div class=\"card-body\">\n            <h3 class=\"card-title\">{{admin.fullName}}</h3>\n            <p class=\"card-text\">\n              <span class=\"app-users\">\n                <!-- <span class=\"icon icon-map-marker\"></span>\n                <strong>City</strong>:{{admin.city}} -->\n              </span>\n            </p>\n            <p class=\"card-text\">\n              <span class=\"app-users\">\n                <span class=\"icon icon-map-marker\"></span>\n                <strong>Email</strong>:{{admin.email}}\n              </span>\n            </p>\n            <p class=\"card-text\">\n              <span class=\"app-users\">\n                <span class=\"icon icon-phone\"></span>\n                <strong>Phone</strong>: {{ admin.mobile}}\n              </span>\n            </p>\n            <p class=\"card-text\">{{admin.description}}</p>\n            <div class=\"col-md-12 text-center\">\n              <button class=\"btn btn-primary btn-sm mr-5\" (click)= \"editProfile(admin._id)\" type=\"button\" routerLink=\"/home/edit-profile\">Edit profile</button>  \n              <button class=\"btn btn-primary btn-sm\" type=\"button\" routerLink=\"/home/change-password\">Change Password</button> \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/settings/settings.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/settings/settings.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"layout-main\">\n<app-left-sidebar></app-left-sidebar>\n<div class=\"settingsPage\"></div>\n\t\t<div class=\"layout-content\">\n\t    <div class=\"layout-content-body\">\n          <div class=\"title-bar\">\n            <h1 class=\"title-bar-title\">\n              <span class=\"d-ib\">Setting</span>\n            </h1>\n          </div>\n        <div class=\"row gutter-xs\">\n            <div class=\"col-md-12\">\n              <div class=\"pcoded-content\">\n                  <div class=\"pcoded-inner-content\">\n                    <div class=\"main-body\">\n                      <div class=\"page-wrapper\">\n                        <div class=\"page-body\" *ngFor=\"let value of data\">\n                          <div class=\"card\">\n                            <div class=\"card-body\">\n                              <h5>\n                              <button (click)=\"getEditValue(1)\" type=\"click\" class=\"btn btn-primary icon icon-pencil p-1 fs-18 pull-right mb-2\" data-target=\"#aboutUs-modal\" data-toggle=\"modal\"></button>\n                              About Us</h5>\n                              <p class=\"padding-top-15\" [innerHtml]=\"value.aboutUs\"></p>\n                            </div>\n                          </div>\n                          <div class=\"card\">\n                              <div class=\"card-body\">\n                                <h5>\n                                <button (click)=\"getEditValue(2)\" class=\"btn btn-primary icon icon-pencil p-1 fs-18 pull-right mb-2\" data-target=\"#aboutUs-modal\" data-toggle=\"modal\"></button>\n                                Terms & Conditions </h5>\n                                <p class=\"padding-top-15\" [innerHtml]=\"value.termCondition\"></p>\n                              </div>\n                            </div>\n                          \n                          <div class=\"card\">\n                            <div class=\"card-body\">\n                              <h5>\n                              <button (click)=\"getEditValue(3)\" class=\"btn btn-primary icon icon-pencil p-1 fs-18 pull-right mb-2\" data-target=\"#aboutUs-modal\" data-toggle=\"modal\"></button>\n                              Contact Us</h5>\n                              <p class=\"padding-top-15\" [innerHtml]=\"value.contactUs\"></p>\n                            </div>\n                          </div>\n                          <!---->\n                          <div class=\"card\">\n                            <div class=\"card-body\">\n                              <h5>\n                              <button (click)=\"getEditValue(4)\" class=\"btn btn-primary icon icon-pencil p-1 fs-18 pull-right mb-2\" data-target=\"#aboutUs-modal\" data-toggle=\"modal\"></button>\n                              Legal</h5>\n                              <p class=\"padding-top-15\" [innerHtml]=\"value.legal\"></p>\n                            </div>\n                          </div>\n                          <!--  -->\n                          <div class=\"card\">\n                            <div class=\"card-body\">\n                              <h5>\n                              <button (click)=\"getEditValue(5)\" class=\"btn btn-primary icon icon-pencil p-1 fs-18 pull-right mb-2\" data-target=\"#aboutUs-modal\" data-toggle=\"modal\"></button>\n                              Privacy Policy</h5>\n                              <p class=\"padding-top-15\" [innerHtml]=\"value.privacyPolicy\"></p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-footer></app-footer>\n    </div>\n\n    <!-- add promotion -->\n\n    <div id=\"aboutUs-modal\" tabindex=\"-1\" role=\"dialog\" class=\"modal fade\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <!-- <div class=\"modal-header\">\n           <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n             <span aria-hidden=\"true\">×</span>\n             <span class=\"sr-only\">Close</span>\n           </button>\n         </div> -->\n         <div class=\"modal-body\">\n             <div class=\"form\">\n               <div class=\"text-center\">\n                   <!-- <textarea [(ngModel)] = \"textValue\" [ngModelOptions]=\"{standalone: true}\" id=\"form-control-8\" class=\"form-control\" rows=\"4\" placeholder=\"write to About Us\"></textarea> -->\n                   <ckeditor [editor]=\"Editor\" [(ngModel)]=\"textValue\"></ckeditor>\n\n                 <div class=\"m-t-lg\">\n                     <button class=\"btn btn-danger\" (click) = \"saveSetting()\"  type=\"click\">Save</button>\n                     <button class=\"btn btn-default\" id=\"close-modal\" data-dismiss=\"modal\" type=\"button\">Cancel</button>\n                 </div>\n               </div>\n             </div>\n         </div>\n         <!-- <div class=\"modal-footer\"></div> -->\n       </div>\n     </div>      \n   </div>\n  \n<!-- success modal -->\n\n    <!-- Add Document -->\n    <div id=\"adddocs\" class=\"modal fade\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header bg-primary\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n                    <h4 class=\"modal-title\">Add new</h4>\n                </div>\n                <div class=\"modal-body provider-detail\">\n                    <form class=\"form\" [formGroup]=\"addFaqQuestion\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                                <div class=\"row gutter-xs\">\n                                    <div class=\"col-xs-12 col-md-12 col-sm-12 col-lg-12 form-group\">\n                                        <label>Heading</label>\n                                        <!-- <small style=\"color: red;\" *ngIf=\"f.question.errors.required\">FAQ question is required</small>                 -->\n                                    </div>\n                                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group\">\n                                        <textarea type=\"text\" formControlName=\"question\"></textarea>\n                                        <!-- <textarea   cols=\"30\" rows=\"10\"></textarea>  -->\n                                        <div style=\"color: red;\" *ngIf=\"f.question.errors.required && submitted\">Please write answer</div>\n                                    </div>\n                                    <div class=\"col-xs-12 col-md-12 col-sm-12 col-lg-12 form-group\">\n                                        <label>Description</label>\n\n                                        <textarea formControlName=\"answer\" name=\"\" id=\"\" rows=\"10\" class=\"form-control\"></textarea>\n                                        <div style=\"color: red;\" *ngIf=\"f.answer.errors.required && submitted\">Please write answer\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\" col-sm-12 col-md-12 text-center\">\n                                <button class=\"btn btn-success mr-5\" type=\"button\" (click)=\"addFaq()\">Add & Save</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Add Document -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user-management/user-management.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user-management/user-management.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"layout-main\">\n  <app-left-sidebar></app-left-sidebar>\n  <div class=\"subadminPage\"></div>\n  <div class=\"sellerListPage ExplorerListPage\">\n    <div class=\"layout-content\">\n      <div class=\"layout-content-body\">\n        <div class=\"title-bar\">\n          <h1 class=\"title-bar-title\">\n            <span class=\"d-ib\">User Management</span>\n          </h1>\n        </div>\n        <div class=\"row gutter-xs\">\n          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-2 margin-bottom-15\">\n                    <label>Sort</label>\n                    <select class=\"form-control\" (change)=\"sortfilter($event)\">\n                      <option value=\"\" disabled>choose</option>\n                      <option value=\"0\">a-z</option>\n                      <option value=\"1\">z-a</option>\n                    </select>\n                  </div>\n                  <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-3 margin-bottom-15\">   \n                    <label>Search</label>                 \n                    <div fxLayout fxLayoutAlign=\"top center\" class=\"table-search\">\n                      <mat-form-field fxFlex=\"100%\">\n                        <mat-label>Search</mat-label>\n                        <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Search\">\n                      </mat-form-field>\n                    </div> \n                  </div>\n                  <!-- <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-3 margin-bottom-15\">\n                    <label>From</label>\n                    <mat-form-field appearance=\"fill\" class=\"w-100\">\n                      <mat-label>Choose a date from</mat-label>\n                      <input matInput [matDatepicker]=\"picker1\" (click)=\"picker1.opened= true\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker1></mat-datepicker>\n                    </mat-form-field>\n                  </div> -->\n                  <div class=\"col-12 col-sm-3 col-md-3 form-group\">\n                    <label class=\"mr-2 wpx-50\">From </label>\n                    <div class=\"d-flex w-100 align-items-center\">                         \n                        <ng-datepicker class=\"w-100\" (ngModelChange)=\"fromDate($event)\" [(ngModel)]=\"fromdate\" [options]=\"optionsFrom\" [ngModelOptions]=\"{standalone: true}\"></ng-datepicker>\n                        <i class=\"fa fa-calendar ml-2 fs-18 cal-icon\"></i>\n                    </div>\n                </div>\n                <div class=\"col-12 col-sm-3 col-md-3 form-group\">\n                  <label class=\"mr-2 wpx-50\">To </label>\n                    <div class=\"d-flex w-100 align-items-center\">                          \n                        <ng-datepicker class=\"w-100\" [(ngModel)]=\"todate\" (ngModelChange)=\"EndDate($event)\"  [options]=\"optionsTo\" [ngModelOptions]=\"{standalone: true}\"></ng-datepicker>\n                        <i class=\"fa fa-calendar ml-2 fs-18 cal-icon\"></i>\n                    </div>\n                </div>\n                  <!-- <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-3 margin-bottom-15\">\n                    <label>To</label>\n                    <mat-form-field appearance=\"fill\" class=\"w-100\">\n                      <mat-label>Choose a date to</mat-label>\n                      <input matInput [matDatepicker]=\"picker2\" (click)=\"picker2.open()\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker2></mat-datepicker>\n                    </mat-form-field> \n                  </div>  -->\n                  <!-- <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-3 margin-bottom-15\">\n                    <label>Sort</label>\n                    <select class=\"form-control\">\n                      <option value=\"0\">Sort By City </option>\n                      <option value=\"1\">Noida</option>\n                      <option value=\"2\">Delhi</option>\n                      <option value=\"3\">Gurugram</option>\n                      <option value=\"4\">Banglore</option>\n                      <option>For all</option>\n                    </select>\n                  </div>    -->\n                  <!-- <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-3 margin-bottom-15\">\n                    <label>Sort</label>\n                    <select class=\"form-control\" (change)=\"sortfilter\">\n                      <option value=\"0\">Sort By Country</option>\n                      <option value=\"1\">India</option>\n                      <option value=\"2\">USA</option>\n                      <option value=\"3\">UAE</option>\n                      <option value=\"4\">UK</option>\n                    </select>\n                  </div>               -->\n                </div>\n                               \n                <div class=\"table-responsive\">\n                  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8 table table-striped table-bordered\">\n                    <ng-container matColumnDef=\"checkbox\">\n                      <th mat-header-cell *matHeaderCellDef class=\"wpx-50\"> \n                        <label class=\"custom-control custom-control-primary custom-checkbox\">\n                          <input class=\"custom-control-input\" type=\"checkbox\" id=\"checkAll\">\n                          <span class=\"custom-control-indicator\"></span>\n                        </label>\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\"> \n                        <label class=\"custom-control custom-control-primary custom-checkbox\">\n                          <input class=\"custom-control-input\" type=\"checkbox\">\n                          <span class=\"custom-control-indicator\"></span>\n                        </label>\n                      </td>\n                    </ng-container>\n                  \n                    <ng-container matColumnDef=\"name\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef> User Name </th>\n                      <td mat-cell *matCellDef=\"let element\"> <img [src]=\"element.profileImage\" style=\"width: 30px;height:30px;\"> {{element.fullName}} </td>\n                    </ng-container>\n                  \n                    <ng-container matColumnDef=\"image\">\n                      <th mat-header-cell *matHeaderCellDef> User Image </th>\n                      <td mat-cell *matCellDef=\"let element\"> <img [src]=\"element.profileImage\" style=\"width: 30px;height:30px;\">  </td>\n                    </ng-container>\n                  \n                    <ng-container matColumnDef=\"email\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef> Country Code </th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element.countryCode}} </td>\n                    </ng-container>\n  \n                    <ng-container matColumnDef=\"contact\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef> Contact Number </th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element.mobile}} </td>\n                    </ng-container> \n\n                    <ng-container matColumnDef=\"address\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef> Address </th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element.address}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"booking\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef> Date of birth </th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element.dob}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"status\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef>Joining Date</th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element.createdAt | date }}   </td>\n                    </ng-container>\n                    \n                    <ng-container matColumnDef=\"action\">\n                      <th mat-header-cell *matHeaderCellDef class=\"wpx-150\"> Action </th>\n                      <td mat-cell *matCellDef=\"let element\">  \n                        <ng-container class=\"d-flex\">\n                          <div class=\"d-flex\">                           \n                            <!-- <button type=\"button\" *ngIf = \"admin.roleId === 1\" class=\"btn btn-sm btn-success\" routerLink=\"/home/user-mgmt-edit/{{element._id}}\"><i class=\"fa fa-pencil\"></i></button> -->\n                            <a class=\"btn btn-sm btn-primary\" routerLink=\"/home/user-mgm-view/{{element._id}}\"><i class=\"fa fa-eye\"></i></a>                           \n                            <button type=\"button\" *ngIf = \"element.isBlocked ===0\" class=\"btn btn-sm btn-success\" data-target=\"#blockUser\" data-toggle=\"modal\"(click)= \"blockid(element._id)\"><i class=\"fa fa-ban\"></i></button>\n                            <button type=\"button\" *ngIf = \"element.isBlocked ===1\" class=\"btn btn-sm btn-danger\" data-target=\"#unblockUser\" data-toggle=\"modal\" (click)= \"blockid(element._id)\"><i class=\"fa fa-ban\"></i></button>\n                            <!-- <button type=\"button\" class=\"btn btn-sm btn-danger\" data-target=\"#deleteUser\" data-toggle=\"modal\" (click)='delete(element._id)'><i class=\"fa fa-trash-o\"></i></button> -->\n                          </div>\n                        </ng-container>\n                      </td>\n                    </ng-container>\n                  \n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                  </table>\n                  <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator>\n                  <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator> -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</div>\n<!-- Block -->\n<div id=\"blockUser\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <div class=\"h2 text-success\">\n            <i class=\"fa fa-ban\"></i>\n          </div>\n          <h4>Are you sure you want to block this user?</h4>\n          <div class=\"m-t-lg\">\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\" data-target=\"#success-block\" (click) = \"blockunblockuser()\">Yes</button>\n            <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\" >No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>      \n</div>\n<!-- Block -->\n<!-- Block Confirm-->\n<div class=\"modal fade\" id=\"success-block\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">      \n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <div class=\"h2 text-success\">\n          <i class=\"fa fa-check-square\"></i>\n        </div>\n        <h4>Blocked Successfully !</h4>\n      </div>     \n    </div>\n  </div>\n</div>\n<!-- Block Confirm-->\n<!-- Block -->\n<div id=\"unblockUser\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <div class=\"h2 text-success\">\n            <i class=\"fa fa-ban\"></i>\n          </div>\n          <h4>Are you sure you want to unblock this user?</h4>\n          <div class=\"m-t-lg\">\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\" data-target=\"#unsuccess-block\" (click) = \"blockunblockuser()\" >Yes</button>\n            <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>      \n</div>\n<!-- Block -->\n<!-- Block Confirm-->\n<div class=\"modal fade\" id=\"unsuccess-block\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">      \n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <div class=\"h2 text-success\">\n          <i class=\"fa fa-check-square\"></i>\n        </div>\n        <h4>Unblocked Successfully !</h4>\n      </div>     \n    </div>\n  </div>\n</div>\n<!-- Unblock Confirm-->\n<!-- Delete -->\n<div id=\"deleteUser\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <div class=\"h2 text-success\">\n            <i class=\"fa fa-trash-o\"></i>\n          </div>\n          <h4>Are you sure you want to delete this user?</h4>\n          <div class=\"m-t-lg\">\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\" data-target=\"#deleted-success\"  (click)='delUser()'>Yes</button>\n            <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>      \n</div>\n<!-- Delete -->\n<!-- Delete Confirm-->\n<div class=\"modal fade\" id=\"deleted-success\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">      \n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <div class=\"h2 text-success\">\n          <i class=\"fa fa-check-square\"></i>\n        </div>\n        <h4>Deleted Successfully !</h4>\n      </div>\n         \n    </div>\n  </div>\n</div>\n<!-- Delete Confirm-->\n<div id=\"viewUser\" class=\"modal fade\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-primary\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n        <h4 class=\"modal-title\">User Details</h4>\n      </div>\n      <div class=\"modal-body provider-detail\">\n        <form class=\"form\">\n          <div class=\"row\">\n            <div class=\"col-sm-4 col-md-4 col-lg-3 form-group\">\n              <img src=\"assets/img/3002121059.jpg\" class=\"w-100 m-b-15\">\n              <h5>Ravi Singh</h5>\n            </div> \n            <div class=\"col-sm-8 col-md-8 col-lg-9\">\n              <div class=\"row gutter-xs\">\n                <div class=\"col-sm-6\">\n                  <label>D.O.B.</label>\n                  <p>11-12-2010</p>\n                </div>\n                <div class=\"col-sm-6\">\n                  <label>Email Address</label>\n                  <p>xyz@gmail.com</p>\n                </div>\n                <div class=\"col-sm-6\">\n                  <label>Contact Number</label>\n                  <p>9988776655</p>\n                </div>\n                <div class=\"col-sm-6\">\n                  <label>Gender</label>\n                  <p>Male</p>\n                </div>\n                <div class=\"col-sm-12 form-group\">\n                  <label>Address</label>\n                  <p>Delhi, INDIA</p>                  \n                </div>\n                <div class=\"col-sm-12\">\n                  <h5>Passport Details</h5>\n                </div>\n                <div class=\"col-sm-6\">\n                  <label>Passport Number</label>\n                  <p>#HFJ&980080</p>\n                </div>\n                <div class=\"col-sm-6\">\n                  <label>Full Name</label>\n                  <p>Ravi Singh</p>\n                </div>\n                <div class=\"col-sm-6\">\n                  <label>Expiry Date</label>\n                  <p>14-07-2020</p>\n                </div>\n                <div class=\"col-sm-6\">\n                  <label>Passport Image</label>\n                  <p><img src=\"assets/img/upload_icon.png\" class=\"img-responsive\" style=\"height:80px\"/></p>\n                </div>\n              </div>   \n            </div>   \n            <div class=\" col-sm-12 col-md-12 text-center\">\n              <button class=\"btn btn-success mr-5\" type=\"button\" data-dismiss=\"modal\">Close</button>\n            </div>\n          </div>\n        </form>  \n      </div>\n    </div>\n  </div>      \n</div> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user-mgm-view/user-mgm-view.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user-mgm-view/user-mgm-view.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"layout-main\">\n  <app-left-sidebar></app-left-sidebar>\n  <div class=\"profilePage\"></div>\n  <div class=\"layout-content\">\n    <div class=\"row gutter-xs\">\n      <div class=\"profile-box-user\">\n        <div class=\"card text-center\">\n          <!-- <div class=\"card-image\">\n                <div class=\"overlay\">\n                  <div class=\"overlay-gradient\">\n                    <img class=\"card-img-top img-responsive\" src=\"assets/img/user.jpg\" alt=\"Admin Image\">\n                  </div>\n                </div>\n              </div> -->\n          <div class=\"card-avatar\">\n            <a class=\"card-thumbnail rounded sq-100\" href=\"/home/user-management\">\n              <img [src]=\"user?.profileImage\" width=\"100px\" height=\"100px\">\n            </a>\n          </div>\n          <div class=\"card-body\">\n            <h3 class=\"card-title\">{{user.fullName}}</h3>\n            <p class=\"card-text\">\n              <span class=\"app-users\">\n                <!-- <span class=\"icon icon-map-marker\"></span> -->\n                <strong>User Id</strong>: {{user._id}}\n              </span>\n            </p>\n            <!-- <div class=\"col-md-12 text-center\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                           <label>D O J</label>\n                            <input class=\"form-group\" type=\"text\">                      \n                         </div>\n                        <div class=\"col-md-6\">\n                            <label>Mobile</label>\n                            <input class=\"form-group\" type=\"text\">\n                        </div>\n                        <div class=\"col-md-6\">\n                            <label>Name</label>\n                            <input class=\"form-group\" type=\"text\">\n                        </div>\n                        <div class=\"col-md-6\">\n                            <label>Country</label>\n                            <input class=\"form-group\" type=\"text\">\n                        </div>\n                        <div class=\"col-md-6\">\n                            <label>Gender</label>\n                            <input class=\"form-group\" type=\"text\">\n                        </div>\n                        <div class=\"col-md-6\">\n                            <label>D O B</label>\n                            <input class=\"form-group\" type=\"text\">\n                        </div>     \n\n                    </div>                  \n                </div> -->\n          </div>\n          <div class=\"card-body\">\n            <div class=\"col-md-12\">\n              <div class=\"row text-left\">\n                <div class=\"col-md-6 info form-group\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <label>D O J</label>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <span class=\"form-control\">{{user.createdAt | date:'dd/MM/yyyy'}}</span>\n                    </div>\n                    <!-- <input class=\"form-group\" type=\"text\"> -->\n                  </div>\n                </div>\n                <div class=\"col-md-6 info form-group\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <label>Mobile</label>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <span class=\"form-control\">{{user.mobile}}</span>\n                    </div>\n                  </div>                                   \n                  <!-- <input class=\"form-group\" type=\"tel\"> -->\n                </div>\n                <div class=\"col-md-6 info form-group\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <label>Name</label>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <span class=\"form-control\">{{user.fullName}}</span>\n                    </div>\n                  </div>                               \n                  <!-- <input class=\"form-group\" type=\"text\"> -->\n                </div>\n                <div class=\"col-md-6 info form-group\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <label>Country</label>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <span class=\"form-control\">{{user.country}}</span>\n                    </div>\n                  </div>                                  \n                  <!-- <input class=\"form-group\" type=\"text\"> -->\n                </div>\n                <div class=\"col-md-6 info form-group\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <label>Gender</label>\n                    </div>\n                    <div class=\"col-md-6\" *ngIf =\"user\">\n                      <span *ngIf =\"user.gender=='1'\" class=\"form-control\">Male</span>\n                      <span *ngIf =\"user.gender=='2'\" class=\"form-control\">Female</span>\n                    </div>\n                  </div>                                   \n                  <!-- <select>\n                    <option>male</option>\n                    <option>female</option>\n                  </select> -->\n                  <!-- <input class=\"form-group\" type=\"text\"> -->\n                </div> \n                <div class=\"col-md-6 info form-group\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\"> \n                      <label>Date Of Birth</label>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <span class=\"form-control\">{{user.dob}}</span>\n                    </div>\n                  </div>                                  \n                  <!-- <mat-form-field appearance=\"fill\">\n                    <mat-label>Choose a date</mat-label>\n                    <input matInput [matDatepicker]=\"picker\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker></mat-datepicker>\n                  </mat-form-field> -->\n                  <!-- <input class=\"form-group\" type=\"date\"> -->\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"col-xs-12\">\n              <nav class=\"nav nav-tabs\">\n                <li class=\"active\">\n                  <a data-toggle=\"tab\" href=\"#nav-home\">USER STATS</a>\n                </li>\n                <li>\n                  <a data-toggle=\"tab\" href=\"#nav-profile\">ROOM STATS</a>\n                </li>\n              </nav>\n              <div class=\"tab-content py-3 px-3 px-sm-0\" id=\"nav-tabContent\">\n                <div class=\"tab-pane fade active in\" id=\"nav-home\">\n                  <div class=\"row\">\n                    <div class=\"col-md-4 form-group\">\n                      <label>TOTAL ROOMS VISITED</label>\n                      <span class=\"form-control\">{{visitData.length}}</span>\n                    </div>\n                    <div class=\"col-md-4 form-group\">\n                      <label>TOTAL GOLD COIN SPEND</label>\n                      <span class=\"form-control\">{{user.spentSilver}}</span>\n                    </div>\n                    <div class=\"col-md-4 form-group\">\n                      <label>TOTAL SILVER COIN SPEND</label>\n                      <span class=\"form-control\">{{user.spentCoin}}</span>\n                    </div>\n                    <div class=\"col-md-4 form-group\">\n                      <label>OWN ROOMS POPULARITY</label>\n                      <span class=\"form-control\">Not yet</span>\n                    </div>\n                    <div class=\"col-md-4 form-group\">\n                      <label>TOTAL GOLD COIN BALANCE</label>\n                      <span class=\"form-control\">{{user.myCoin}}</span>\n                    </div>\n                    <div class=\"col-md-4 form-group\" *ngIf=\"user\">\n                      <label>TOTAL SILVER COIN EARNED</label>\n                      <span *ngIf=\"user.myCoin-1000 > 0 \" class=\"form-control\">{{user.myCoin-1000}}</span>\n                      <span *ngIf=\"user.myCoin-1000 < 0 \"class=\"form-control\">0</span>\n                    </div>\n                    <div class=\"col-md-4 form-group\">\n                      <label>FRAMES BOUGHT</label>\n                      <span class=\"form-control\">Not yet</span>\n                    </div>\n                    <div class=\"col-md-4 form-group\">\n                      <label>THEMES BOUGH</label>\n                      <span class=\"form-control\">Not yet</span>\n                    </div>\n                    <div class=\"col-md-4 form-group\">\n                      <label>TOTAL SILVER COIN BALANCE</label>\n                      <span class=\"form-control\">{{user.myCoin}}</span>\n                    </div>\n                    <div class=\"col-md-4 form-group\">\n                      <label>MEMBERSHIP TAKEN</label>\n                      <span class=\"form-control\">Not yet</span>\n                    </div>\n                    <div class=\"col-md-4 form-group\">\n                      <label>ACHIEVEMENT BADGES EARNED</label>\n                      <span class=\"form-control\">Not yet</span>\n                    </div>\n                    <div class=\"col-md-4 form-group\">\n                      <label>HONOR BADGES EARNED</label>\n                      <span class=\"form-control\">Not yet</span>\n                    </div>\n                    <div class=\"col-md-4 form-group\">\n                      <label>HIGHEST RANKING IN LEADERBOARDS</label>\n                      <span class=\"form-control\">Not yet</span>\n                    </div>\n                    <div class=\"col-md-4 form-group\">\n                      <label>UNIQUE USER ID TAKEN</label>\n                      <span class=\"form-control\">{{user.fullName}}</span>\n                    </div>\n                    <div class=\"col-md-4 form-group\">\n                      <label>UNIQUE ROOM ID TAKEN</label>\n                      <span class=\"form-control\">{{room?.roomTitle}}</span>\n                    </div>\n                    <div class=\"col-md-4 form-group\">\n                      <label>FOLLOWING</label>\n                      <span class=\"form-control\">0</span>\n                    </div>\n                    <div class=\"col-md-4 form-group\">\n                      <label>CURRENT LEVEL</label>\n                      <span class=\"form-control\">Initial</span>\n                    </div>\n                    <div class=\"col-md-4 form-group\">\n                      <label>TOTAL GIFT SENT</label>\n                      <span class=\"form-control\">Not yet</span>\n                    </div>\n                    <div class=\"col-md-4 form-group\">\n                      <label>TOTAL GIFT RECEIVED</label>\n                      <span class=\"form-control\">Not yet</span>\n                    </div>\n                    <div class=\"col-md-4 form-group\">\n                      <label>FOLLOWERS</label>\n                      <span class=\"form-control\">0</span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"tab-pane fade\" id=\"nav-profile\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"row\">\n                        <div class=\"form-group img-data\">\n                          <div class=\"col-md-4 profile-user-room\">\n                            <img [src]=\"room?.roomImage\" alt=\"\" width=\"100px\" height=\"100px\">\n                            <!-- <img src=\"assets/img/user.jpg\" alt=\"\" width=\"100px\"> -->\n                          </div>\n                          <div class=\"col-md-8\">\n                            <h3>{{room?.roomTitle}}</h3>\n                          </div>\n                        </div>\n                        <div class=\"col-md-4 form-group\"><span><strong>Room Type:</strong></span></div>\n                        <div class=\"col-md-4 form-group\"><span class=\"form-control\">Royal</span>\n                        </div>\n                        <div class=\"col-md-4 form-group\"><img src=\"assets/img/upload_icon.png\" width=\"50px\" alt=\"\">\n                        </div>\n\n                        <div class=\"col-md-4 form-group\"><span><strong>Room Locked:</strong></span></div>\n                        <div class=\"col-md-4 form-group\"><span class=\"form-control\">No</span>\n                        </div>\n                        <div class=\"col-md-4 form-group\"><span class=\"form-control\"> No Passcode</span>\n                        </div>\n\n                        <div class=\"col-md-4 form-group\"><span><strong>Paid Entry:</strong></span></div>\n                        <div class=\"col-md-4 form-group\"><span class=\"form-control\">No</span>\n                        </div>\n                        <div class=\"col-md-4 form-group\"><span class=\"form-control\">0 Gold Coin</span></div>\n\n                        <div class=\"col-md-4 form-group\"><span><strong>Number of MICs:</strong></span></div>\n                        <div class=\"col-md-8 form-group\"><span class=\"form-control\">{{room?.micNo}}</span>\n                        </div>\n\n                        <div class=\"col-md-4 form-group\"><span><strong>Price to grab MICs:</strong></span></div>\n                        <div class=\"col-md-4 form-group\"><span class=\"form-control\">No</span>\n                        </div>\n                        <div class=\"col-md-4 form-group\"><span class=\"form-control\">0 Gold Coin</span></div>\n\n                        <div class=\"col-md-4 form-group\"><span><strong>Members:</strong></span></div>\n                        <div class=\"col-md-8 form-group\"><span class=\"form-control\">{{room?.userJoined.length}}</span>\n                        </div>\n\n                        <div class=\"col-md-4 form-group\"><span><strong>Active Members:</strong></span></div>\n                        <div class=\"col-md-8 form-group\"><span class=\"form-control\">{{room?.userJoined.length}}</span>\n                        </div>\n\n                      </div> \n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"row\">\n                        <div class=\"col-md-4 form-group\"><span><strong>Top Sender:</strong></span></div>\n                        <div class=\"col-md-4 form-group\"><span class=\"form-control\">User Id</span>\n                        </div>\n                        <div class=\"col-md-4 form-group\"><span class=\"form-control\">User Name</span></div>\n\n                        <div class=\"col-md-4 form-group\"><span><strong>Top Receivers:</strong></span></div>\n                        <div class=\"col-md-4 form-group\"><span class=\"form-control\">User Id</span>\n                        </div>\n                        <div class=\"col-md-4 form-group\"><span class=\"form-control\">User Name</span></div>\n\n                        <div class=\"col-md-4 form-group\"><span><strong>Admins:</strong></span></div>\n                        <div class=\"col-md-8 form-group\"><span class=\"form-control\">{{user.fullName}}</span>\n                        </div>\n\n                        <!-- <div class=\"col-md-4 form-group\"><span><strong>Rank:</strong></span></div>\n                        <div class=\"col-md-8 form-group\"><span class=\"form-control\">Data</span>\n                        </div> -->\n\n                        <div class=\"col-md-4 form-group\"><span><strong>Country:</strong></span></div>\n                        <div class=\"col-md-8 form-group\"><span class=\"form-control\">{{room?.country}}</span>\n                        </div>\n\n                        <!-- <div class=\"col-md-4 form-group\"><span><strong>Tag:</strong></span></div>\n                        <div class=\"col-md-8 form-group\"><span class=\"form-control\">Data</span>\n                        </div> -->\n\n                        <!-- <div class=\"col-md-4 form-group\"><span><strong>Visitors:</strong></span></div>\n                        <div class=\"col-md-8 form-group\"><span class=\"form-control\">Data</span>\n                        </div> -->\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <!-- <div class=\"tab-pane fade\" id=\"nav-contact\" role=\"tabpanel\" aria-labelledby=\"nav-contact-tab\">\n                        Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.\n                      </div> -->\n                <!-- <div class=\"tab-pane fade\" id=\"nav-about\" role=\"tabpanel\" aria-labelledby=\"nav-about-tab\">\n                        Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.\n                      </div> -->\n              </div>\n            </div>\n            <!-- <div class=\"row text-center\">\n                      <div class=\"col-md-6\">\n                          <a href=\"#\" class=\"form-control btn btn-primary\">USER STATS</a>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <a href=\"#\" class=\"form-control btn btn-primary\">ROOM STATS</a>\n                      </div>\n                  </div> -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user-mgmt-edit/user-mgmt-edit.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user-mgmt-edit/user-mgmt-edit.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"layout-main\">\n  <app-left-sidebar></app-left-sidebar>\n  <div class=\"profilePage\"></div>\n  <div class=\"layout-content\">\n    <div class=\"row gutter-xs\">\n      <div class=\"profile-box-user\">\n        <div class=\"card text-center\">\n          \n          <div class=\"card-avatar\">\n            <div class=\"pic-box\">\n              <div class=\"logoImg profile-user-room\">\n                <img *ngIf=\"user.profileImage\" [src]=\"user?.profileImage\" id=\"imagefile1\" width=\"100px\" height=\"100px\">\n                <img *ngIf=\"!user.profileImage\" src=\"assets/img/user.jpg\" id=\"imagefile1\"  width=\"100px\" height=\"100px\">\n                <input id=\"logo-file\" type=\"file\" class=\"hide\" (change)='singleFiles1($event)'>\n                <label for=\"logo-file\" class=\"btn btn-large\"></label>                                \n              </div>\n            </div>\n            <!-- <a class=\"card-thumbnail rounded sq-100\" href=\"/home/user-management\">\n              <img class=\"img-responsive\" [src]=\"user?.profileImage\">\n            </a> -->\n          </div>\n          <div class=\"card-body\">\n            <!-- <h3 class=\"card-title\">{{user?.fullName}}</h3> -->\n            <p class=\"card-text\">\n              <span class=\"app-users\">\n                <!-- <span class=\"icon icon-map-marker\"></span> -->\n                <!-- <strong>User Id</strong>:{{user?._id | slice:18:24}} -->\n              </span>\n            </p>\n          \n          </div>\n          <form class=\"form\" [formGroup]=\"edituserForm\">\n            <div class=\"card-body\"> \n              <div class=\"col-md-12\">\n                <div class=\"row text-left\">\n                  <div class=\"col-md-6 info form-group\">\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <label>Name</label>\n                      </div>\n                      <div class=\"col-md-6\">\n                          <input class=\"form-control\" type=\"text\" formControlName=\"Name\">\n                          <div *ngIf=\"submitted && g.Name.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"g.Name.errors.required\">Name is required</div>\n                          </div>                       \n                      </div>\n                                       \n                    </div>\n                  </div>\n                  <div class=\"col-md-6 info form-group\">\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <label>Country</label>\n                      </div>\n                      <div class=\"col-md-6\">\n                          <input class=\"form-control\" type=\"text\" placeholder=\"Country\" formControlName=\"Country\">                      \n                          <div *ngIf=\"submitted && g.Country.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"g.Country.errors.required\">Country is required</div>\n                          </div> \n                        </div>\n                     \n                    </div>                                   \n                  </div>\n                  <div class=\"col-md-6 info form-group\">\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <label>Country Code</label>\n                      </div>\n                      <div class=\"col-md-6\">\n                          <input class=\"form-control\" type=\"text\" placeholder=\"Country Code\" formControlName=\"countryCode\">\n                          <div *ngIf=\"submitted && g.countryCode.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"g.countryCode.errors.required\">Country Code is required</div>\n                          </div> \n                        </div>\n                     \n                    </div>                               \n                  </div>\n                  <div class=\"col-md-6 info form-group\">\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <label>Mobile</label>\n                      </div>\n                      <div class=\"col-md-6\">\n                          <input class=\"form-control\" type=\"text\" placeholder=\"Mobile\" formControlName=\"Mobile\">\n                          <div *ngIf=\"submitted && g.Mobile.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"g.Mobile.errors.required\">Mobile is required</div>\n                          </div> \n                        </div>\n                     \n                    </div>                                  \n                  </div>\n                  <div class=\"col-md-6 info form-group\">\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <label>Gender</label>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <select (click) = \"getGender($event.target.value)\" class=\"form-control\" formControlName=\"Gender\">\n                          <option value=\"1\">Male</option>\n                          <option value=\"2\">Female</option>\n                        </select>\n                        <div *ngIf=\"submitted && g.Gender.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"g.Gender.errors.required\">Gender is required</div>\n                        </div> \n                      </div>\n                     \n                    </div>                                             \n                  </div> \n                  <div class=\"col-md-6 info form-group\">\n                    <div class=\"row\">\n                      <div class=\"col-md-6\"> \n                        <label>Date Of Birth</label>\n                      </div>\n                      <div class=\"col-md-6\">\n                          <mat-form-field appearance=\"fill\">\n                              <mat-label>Choose a date</mat-label>\n                              <input matInput [matDatepicker]=\"picker\" formControlName=\"DOB\" placeholder=\"DD/MM/YYYY\" (click)=\"picker.open()\">\n                              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                              <mat-datepicker #picker></mat-datepicker>\n                          </mat-form-field>\n                          <div *ngIf=\"submitted && g.DOB.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"g.DOB.errors.required\">Date of Birth is required</div>\n                          </div>\n                      </div>\n                    </div>                                              \n                  </div>\n                  <div class=\"col-md-6 info form-group\">\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <label>My Coin</label>\n                      </div>\n                      <div class=\"col-md-6\">\n                          <input class=\"form-control\" type=\"text\" formControlName=\"Coin\">\n                          <div *ngIf=\"submitted && g.Coin.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"g.Coin.errors.required\">Coin value is required</div>\n                          </div>                       \n                      </div>\n                                       \n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"col-xs-12 col-sm-12 col-md-12 text-center margin-top-2\">\n                <!-- <a type=\"button\" class=\"btn btn-primary\" (click)=\"editUser()\">Submit</a> -->\n                <button class=\"btn btn-primary\" type=\"button\"  (click)=\"editUser()\" > Submit</button>\n              </div> \n            </div>\n            </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</div>");

/***/ }),

/***/ "./src/app/layout/category-management/category-management.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/layout/category-management/category-management.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jYXRlZ29yeS1tYW5hZ2VtZW50L2NhdGVnb3J5LW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/layout/category-management/category-management.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/category-management/category-management.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CategoryManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryManagementComponent", function() { return CategoryManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CategoryManagementComponent = /** @class */ (function () {
    function CategoryManagementComponent() {
    }
    CategoryManagementComponent.prototype.ngOnInit = function () {
    };
    CategoryManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-management',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/category-management/category-management.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category-management.component.css */ "./src/app/layout/category-management/category-management.component.css")).default]
        })
    ], CategoryManagementComponent);
    return CategoryManagementComponent;
}());



/***/ }),

/***/ "./src/app/layout/change-password/change-password.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/layout/change-password/change-password.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/layout/change-password/change-password.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/change-password/change-password.component.ts ***!
  \*********************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_mustMatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../service/mustMatch */ "./src/app/service/mustMatch.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(formBuilder, api, router, route, toast) {
        this.formBuilder = formBuilder;
        this.api = api;
        this.router = router;
        this.route = route;
        this.toast = toast;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.admin = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.admin);
        this.changepass = this.formBuilder.group({
            oldPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        }, {
            validators: Object(_service_mustMatch__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('newPassword', 'confirmPassword')
        });
    };
    Object.defineProperty(ChangePasswordComponent.prototype, "f", {
        get: function () {
            return this.changepass.controls;
        },
        enumerable: true,
        configurable: true
    });
    ChangePasswordComponent.prototype.submitpassword = function () {
        var _this = this;
        this.submitted = true;
        console.log(this.changepass.invalid, "tur", this.changepass.controls);
        if (this.changepass.invalid)
            return;
        this.admin = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.admin);
        // console.log(this.changepass,"kk")
        if (this.changepass.invalid) {
            console.log("not valid");
            return;
        }
        var data = {
            oldPassword: this.changepass.value.oldPassword,
            newPassword: this.changepass.value.newPassword,
            confirmPassword: this.changepass.value.confirmPassword,
        };
        // console.log(data)   
        //console.log(this.admin)
        data['_id'] = this.admin._id;
        console.log(data);
        //console.log(this.admin)
        this.api.changePassword(data).subscribe(function (data) {
            console.log(data);
            // localStorage.setItem('currentAdmin', JSON.stringify(data['response']));
            //  alert("password updated")
            _this.api.toaster("success", "Password updated successfully");
            return _this.router.navigateByUrl('/home/dashboard');
        }, function (error) {
            _this.invalidPassword = true;
            console.log(error, 'l:::::::::::::::l');
            _this.errorMessage = error.error.message;
            _this.api.toaster("error", _this.errorMessage);
            // // this.toastr.error(JSON.stringify(error['error']['message']));
            console.log(_this.errorMessage, "pewww");
            // return this.router.navigateByUrl('/home/profile'); 
        });
        setTimeout(function () {
            _this.router.navigateByUrl('/home/dashboard');
        }, 100000);
    };
    ChangePasswordComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
    ]; };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/change-password/change-password.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-password.component.css */ "./src/app/layout/change-password/change-password.component.css")).default]
        })
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.css":
/*!**********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".lng-dropdown{\n    margin-top: 24px;\n}\n.title-name{\n    font-size: 15px;\n    font-weight: bold;\n    text-align: center;\n}\n.subtitle{\n    text-align: center!important;\n}\n.package-cate{\n    margin-bottom: 10px; \n}\n.task{\n    position: relative;    \n}\n.task ul{\n    list-style: none;\n    padding-left: 0;\n}\n.task ul li{\n    display: inline-block;\n    padding-right: 20px;\n    width: 25%;\n}\n.task ul li:last-child{\n    padding-right: 0px;\n}\n/* .task ul li:last-child{\n    padding-right: 0px;\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7O0dBRUciLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxuZy1kcm9wZG93bntcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuLnRpdGxlLW5hbWV7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zdWJ0aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xufVxuLnBhY2thZ2UtY2F0ZXtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyBcbn1cblxuLnRhc2t7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAgICBcbn1cbi50YXNrIHVse1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLnRhc2sgdWwgbGl7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDI1JTtcbn1cbi50YXNrIHVsIGxpOmxhc3QtY2hpbGR7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuLyogLnRhc2sgdWwgbGk6bGFzdC1jaGlsZHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59ICovXG4iXX0= */");

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var date_fns_locale_en__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/locale/en */ "./node_modules/date-fns/locale/en/index.js");
/* harmony import */ var date_fns_locale_en__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_en__WEBPACK_IMPORTED_MODULE_4__);

// import { Component, OnInit } from '@angular/core';




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(api) {
        var _this = this;
        this.api = api;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"];
        this.doFilter = function (value) {
            _this.dataSource.filter = value.trim().toLocaleLowerCase();
        };
        this.optionsFrom = {
            minYear: 2017,
            maxDate: new Date(),
            locale: date_fns_locale_en__WEBPACK_IMPORTED_MODULE_4__
        };
        this.optionsTo = {
            // minDate: this.todate,
            maxDate: new Date(),
        };
        // Chart JS
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2015', '2016', '2017', '2018'];
        this.barChartType = 'bar';
        this.barChartLegend = false;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [48, 78, 50, 69, 56, 57, 40], label: 'Series c' }
        ];
        // public doughnutChartLabels: Label[] = ['23', '45', '65', '46',];
        this.doughnutChartData = [
            [240, 88, 40],
            [110, 177, 225],
            [251, 211, 31],
            [128, 195, 91],
        ];
        this.doughnutChartType = 'doughnut';
        this.fromdate = new Date();
        this.todate = new Date();
    }
    DashboardComponent.prototype.fromDate = function ($event) {
        this.todate = $event;
        this.optionsTo = {
            minDate: this.todate,
            maxDate: new Date(),
            locale: date_fns_locale_en__WEBPACK_IMPORTED_MODULE_4__
        };
    };
    // events
    DashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40
        ];
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.getDashboardData();
        $('.lng-dropdown li a').click(function () {
            var aaa = this.innerHTML;
            $('.lng-dropdown #dropdown-active-item').html(aaa);
        });
    };
    DashboardComponent.prototype.getDashboardData = function () {
        var _this = this;
        console.log("hello");
        this.api.dashboardData({}).subscribe(function (res) {
            console.log(res, "res");
            _this.dashboardData = res["response"];
            _this.data = {
                totalUser: (_this.dashboardData.totalUser && _this.dashboardData.totalUser[0]) ? _this.dashboardData.totalUser.length : "",
                totalRoom: (_this.dashboardData.totalRoom && _this.dashboardData.totalRoom[0]) ? _this.dashboardData.totalRoom.length : "",
            };
        }),
            (function (err) {
                console.log(err, "error");
            });
    };
    DashboardComponent.prototype.filterDate = function () {
        debugger;
        console.log("Hhiiiiiiiiiiiiiiiiii", this.fromdate);
        if (this.fromdate && !this.todate) {
            console.log("Hhiiiiiiiiiiiiiiiiii", this.fromdate);
            var fromFilter = new Date(this.fromdate).getTime();
            var fromFilter = this.fromdate.getTime();
            this.alldash = this.dashList.filter(function (item) { return new Date(item.createdAt).getTime() >= fromFilter; });
            console.log(this.alldash, ":::::::::::::", this.fromdate, ":::::::::::::", fromFilter);
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.alldash);
            if (this.forFilter) {
                this.dataSource.filter = this.forFilter.trim().toLowerCase();
            }
            this.dataSource.paginator = this.paginator;
        }
        else if (this.todate && !this.fromdate) {
            console.log(this.todate, ":::::::::::::");
            var toFilter = new Date(this.todate).getTime();
            //var toFilter = this.todate;
            this.alldash = this.dashList.filter(function (item) { return item.createdAt <= toFilter; });
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.alldash);
            if (this.forFilter) {
                this.dataSource.filter = this.forFilter.trim().toLowerCase();
            }
            this.dataSource.paginator = this.paginator;
        }
        else {
            var fromFilter = new Date(this.fromdate).getTime();
            var toFilter = new Date(this.todate).getTime();
            // var fromFilter =this.fromdate
            // var toFilter = this.todate;
            console.log(fromFilter, "::::::::::::::", toFilter, "line asdas");
            this.alldash = this.dashList.filter(function (item) {
                // console.log("Date :",new Date(item.createdAt).getTime());
                return (new Date(item.createdAt).getTime() <= toFilter &&
                    new Date(item.createdAt).getTime() >= fromFilter);
            });
            console.log("Count :", this.alldash.length);
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.alldash);
            if (this.forFilter) {
                this.dataSource.filter = this.forFilter.trim().toLowerCase();
            }
            this.dataSource.paginator = this.paginator;
        }
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
    ], DashboardComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
    ], DashboardComponent.prototype, "sort", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/dashboard/dashboard.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/layout/dashboard/dashboard.component.css")).default]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/layout/edit-profile/edit-profile.component.css":
/*!****************************************************************!*\
  !*** ./src/app/layout/edit-profile/edit-profile.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/layout/edit-profile/edit-profile.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/edit-profile/edit-profile.component.ts ***!
  \***************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(formBuilder, api, router, toast, route) {
        this.formBuilder = formBuilder;
        this.api = api;
        this.router = router;
        this.toast = toast;
        this.route = route;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        this.admin = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.admin);
        this.email = this.admin.email;
        this.mobile = this.admin.mobile;
        this.fullName = this.admin.fullName,
            this.description = this.admin.description,
            this.adminImage = this.admin.adminImage;
        this.editprofile = this.formBuilder.group({
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$")]],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            adminImage: ['',],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
        });
        document.getElementById("imagefile1").setAttribute('src', this.adminImage);
        this.picture = this.adminImage;
    };
    EditProfileComponent.prototype.singleFiles1 = function (event) {
        var e_1, _a;
        var _this = this;
        console.log('*********************');
        var file1 = event.target.files[0];
        this.single = [];
        var singleFiles = event.target.files;
        if (singleFiles) {
            try {
                for (var singleFiles_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](singleFiles), singleFiles_1_1 = singleFiles_1.next(); !singleFiles_1_1.done; singleFiles_1_1 = singleFiles_1.next()) {
                    var file = singleFiles_1_1.value;
                    var singleReader = new FileReader();
                    singleReader.onload = function (e) {
                        _this.single.push(e.target.result);
                        document.getElementById("imagefile1").setAttribute('src', e.target.result);
                    };
                    singleReader.readAsDataURL(file);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (singleFiles_1_1 && !singleFiles_1_1.done && (_a = singleFiles_1.return)) _a.call(singleFiles_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        this.picture = event.target.files[0];
        console.log(this.picture, "::::::::::::::::::::::::::;image");
    };
    Object.defineProperty(EditProfileComponent.prototype, "f", {
        get: function () {
            // console.log(this.countryForm.controls)
            return this.editprofile.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditProfileComponent.prototype.profilesave = function () {
        var _this = this;
        this.submitted = true;
        console.log(this.editprofile.invalid, "tur", this.editprofile.controls);
        if (this.editprofile.invalid) {
            console.log("not valid");
            return;
        }
        this.admin = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.admin._id, "adminid");
        var editdata = new FormData();
        editdata.append('fullName', this.editprofile.value.fullName);
        editdata.append('mobile', this.editprofile.value.mobile);
        editdata.append('adminImage', this.picture);
        editdata.append('email', this.editprofile.value.email);
        editdata.append('description', this.editprofile.value.description);
        editdata.append('_id', this.admin._id);
        this.adminId = this.admin._id;
        this.api.editProfile(editdata).subscribe(function (editdata) {
            console.log(editdata, "from ts file");
            localStorage.setItem('currentUser', JSON.stringify(editdata['response']));
            _this.api.toaster("success", "Profile Edit SuccessFully");
            //alert("password updated")
            return _this.router.navigateByUrl('home/profile');
        }, function (error) {
            // this.submitted = true;
            console.log(error);
            _this.errorMessage = error.error.message;
            // this.toastr.error(JSON.stringify(error['error']['message']));
            console.log(_this.errorMessage);
            return _this.router.navigateByUrl('/home/profile');
        });
        // setTimeout(() => {
        //   this.router.navigateByUrl('/home/dashboard');
        // }, 1000);
    };
    EditProfileComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-profile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/edit-profile/edit-profile.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-profile.component.css */ "./src/app/layout/edit-profile/edit-profile.component.css")).default]
        })
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/layout/dashboard/dashboard.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/layout/change-password/change-password.component.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/layout/edit-profile/edit-profile.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/layout/profile/profile.component.ts");
/* harmony import */ var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-management/user-management.component */ "./src/app/layout/user-management/user-management.component.ts");
/* harmony import */ var _notification_management_notification_management_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notification-management/notification-management.component */ "./src/app/layout/notification-management/notification-management.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/layout/settings/settings.component.ts");
/* harmony import */ var _service_auth_guards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/auth.guards */ "./src/app/service/auth.guards.ts");
/* harmony import */ var _user_mgm_view_user_mgm_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-mgm-view/user-mgm-view.component */ "./src/app/layout/user-mgm-view/user-mgm-view.component.ts");
/* harmony import */ var _user_mgmt_edit_user_mgmt_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-mgmt-edit/user-mgmt-edit.component */ "./src/app/layout/user-mgmt-edit/user-mgmt-edit.component.ts");













var routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_service_auth_guards__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'change-password', component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__["ChangePasswordComponent"], canActivate: [_service_auth_guards__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'edit-profile', component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_5__["EditProfileComponent"], canActivate: [_service_auth_guards__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], canActivate: [_service_auth_guards__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'user-management', component: _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_7__["UserManagementComponent"], canActivate: [_service_auth_guards__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'notification-management', component: _notification_management_notification_management_component__WEBPACK_IMPORTED_MODULE_8__["NotificationManagementComponent"], canActivate: [_service_auth_guards__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'setting', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"], canActivate: [_service_auth_guards__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'user-mgm-view/:id', component: _user_mgm_view_user_mgm_view_component__WEBPACK_IMPORTED_MODULE_11__["UserMgmViewComponent"] },
    { path: 'user-mgmt-edit/:id', component: _user_mgmt_edit_user_mgmt_edit_component__WEBPACK_IMPORTED_MODULE_12__["UserMgmtEditComponent"] },
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-datepicker */ "./node_modules/ng2-datepicker/dist/bundles/ng2-datepicker.umd.js");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_datepicker__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-material-timepicker */ "./node_modules/ngx-material-timepicker/fesm5/ngx-material-timepicker.js");
/* harmony import */ var _common_comman_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/comman.module */ "./src/app/common/comman.module.ts");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/layout/dashboard/dashboard.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/layout/settings/settings.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/layout/profile/profile.component.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/layout/edit-profile/edit-profile.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/layout/change-password/change-password.component.ts");
/* harmony import */ var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user-management/user-management.component */ "./src/app/layout/user-management/user-management.component.ts");
/* harmony import */ var _category_management_category_management_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./category-management/category-management.component */ "./src/app/layout/category-management/category-management.component.ts");
/* harmony import */ var _notification_management_notification_management_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./notification-management/notification-management.component */ "./src/app/layout/notification-management/notification-management.component.ts");
/* harmony import */ var _user_mgm_view_user_mgm_view_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user-mgm-view/user-mgm-view.component */ "./src/app/layout/user-mgm-view/user-mgm-view.component.ts");
/* harmony import */ var _user_mgmt_edit_user_mgmt_edit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user-mgmt-edit/user-mgmt-edit.component */ "./src/app/layout/user-mgmt-edit/user-mgmt-edit.component.ts");
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! mat-table-exporter */ "./node_modules/mat-table-exporter/fesm5/mat-table-exporter.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");






// 




// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// import { HttpClientModule, HttpClient } from '@angular/common/http';















var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_15__["SettingsComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"],
                _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_17__["EditProfileComponent"],
                _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_18__["ChangePasswordComponent"],
                _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_19__["UserManagementComponent"],
                _category_management_category_management_component__WEBPACK_IMPORTED_MODULE_20__["CategoryManagementComponent"],
                _notification_management_notification_management_component__WEBPACK_IMPORTED_MODULE_21__["NotificationManagementComponent"], _user_mgm_view_user_mgm_view_component__WEBPACK_IMPORTED_MODULE_22__["UserMgmViewComponent"], _user_mgmt_edit_user_mgmt_edit_component__WEBPACK_IMPORTED_MODULE_23__["UserMgmtEditComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _common_comman_module__WEBPACK_IMPORTED_MODULE_12__["CommanModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_25__["CKEditorModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_13__["LayoutRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                mat_table_exporter__WEBPACK_IMPORTED_MODULE_24__["MatTableExporterModule"],
                // BrowserAnimationsModule,
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                ng2_datepicker__WEBPACK_IMPORTED_MODULE_9__["NgDatepickerModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_11__["NgxMaterialTimepickerModule"].setLocale('en'),
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/notification-management/notification-management.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/notification-management/notification-management.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ub3RpZmljYXRpb24tbWFuYWdlbWVudC9ub3RpZmljYXRpb24tbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/layout/notification-management/notification-management.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/notification-management/notification-management.component.ts ***!
  \*************************************************************************************/
/*! exports provided: NotificationManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationManagementComponent", function() { return NotificationManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotificationManagementComponent = /** @class */ (function () {
    function NotificationManagementComponent() {
    }
    NotificationManagementComponent.prototype.ngOnInit = function () {
    };
    NotificationManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification-management',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/notification-management/notification-management.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notification-management.component.css */ "./src/app/layout/notification-management/notification-management.component.css")).default]
        })
    ], NotificationManagementComponent);
    return NotificationManagementComponent;
}());



/***/ }),

/***/ "./src/app/layout/profile/profile.component.css":
/*!******************************************************!*\
  !*** ./src/app/layout/profile/profile.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/layout/profile/profile.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/profile/profile.component.ts ***!
  \*****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.admin = JSON.parse(localStorage.getItem("currentUser"));
        console.log(this.admin);
        var adminId = this.admin._id;
        console.log(adminId, "adminid");
    };
    ProfileComponent.prototype.editProfile = function (data) {
        console.log(data);
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-profile",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile/profile.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/layout/profile/profile.component.css")).default]
        })
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/layout/settings/settings.component.css":
/*!********************************************************!*\
  !*** ./src/app/layout/settings/settings.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/layout/settings/settings.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/settings/settings.component.ts ***!
  \*******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5__);






var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(formBuilder, router, route, service) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.service = service;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5__;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.getSetting();
        // this.addFaq();
        this.addFaqQuestion = this.formBuilder.group({
            question: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            answer: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        // this.editFaq = this.formBuilder.group({
        //   question: ["", [Validators.required]],
        //   answer: ["", [Validators.required]],
        // });
    };
    SettingsComponent.prototype.getSetting = function () {
        var _this = this;
        this.service.getSettings().subscribe(function (res) {
            console.log("response data fetched", res);
            _this.data = res.response;
            console.log("getSetting data fetched", _this.data);
        });
    };
    Object.defineProperty(SettingsComponent.prototype, "f", {
        get: function () {
            return this.addFaqQuestion.controls;
        },
        enumerable: true,
        configurable: true
    });
    SettingsComponent.prototype.saveSetting = function (value) {
        var _this = this;
        var data = this.data[0];
        switch (this.modalValue) {
            case 1:
                data.aboutUs = this.textValue;
                break;
            case 2:
                data.termCondition = this.textValue;
                break;
            case 3:
                data.contactUs = this.textValue;
                break;
            case 4:
                data.legal = this.textValue;
                break;
            case 5:
                data.privacyPolicy = this.textValue;
                break;
        }
        this.service.saveSettings(data).subscribe(function (res) {
            console.log("this is saveSetting data", res);
            $('#close-modal').click();
            _this.getSetting();
        });
    };
    SettingsComponent.prototype.getEditValue = function (element) {
        this.modalValue = element;
        switch (element) {
            case 1:
                this.textValue = this.data[0].aboutUs;
                break;
            case 2:
                this.textValue = this.data[0].termCondition;
                break;
            case 3:
                this.textValue = this.data[0].contactUs;
                break;
            case 4:
                this.textValue = this.data[0].legal;
                break;
            case 5:
                this.textValue = this.data[0].privacyPolicy;
                break;
        }
    };
    SettingsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/settings/settings.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.css */ "./src/app/layout/settings/settings.component.css")).default]
        })
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/layout/user-management/user-management.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/layout/user-management/user-management.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/layout/user-management/user-management.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/user-management/user-management.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ELEMENT_DATA = [
    {
        name: "Hydrogen",
        email: "xyz@gmial.com",
        contact: 9988776655,
        address: "Delhi, India",
        booking: "12",
        status: "active",
    },
];
var UserManagementComponent = /** @class */ (function () {
    function UserManagementComponent(formBuilder, api, router, route) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.api = api;
        this.router = router;
        this.route = route;
        this.displayedColumns = [
            "checkbox",
            "name",
            "email",
            "contact",
            "booking",
            "status",
            "action",
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        this.doFilter = function (value) {
            _this.dataSource.filter = value.trim().toLocaleLowerCase();
        };
        this.optionsTo = {
            minYear: 2017,
            minDate: new Date("2017-01-01"),
        };
        this.optionsFrom = {
            minYear: 2017,
            maxDate: new Date(),
        };
    }
    UserManagementComponent.prototype.ngOnInit = function () {
        this.admin = JSON.parse(localStorage.getItem('currentUser'));
        this.getAllUserList();
        setTimeout(function () {
            $("#checkAll").on("click", function () {
                if ($(this).is(":checked")) {
                    $(this)
                        .closest(".table")
                        .find("td")
                        .find("input[type=checkbox]")
                        .prop("checked", true);
                }
                else {
                    $(this)
                        .closest(".table")
                        .find("td")
                        .find("input[type=checkbox]")
                        .prop("checked", false);
                }
            });
        }, 500);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    UserManagementComponent.prototype.getAllUserList = function () {
        var _this = this;
        this.api.getuserlist().subscribe(function (res) {
            console.log(res, ":::::::::::::::::::after api");
            // this.dataSource = new MatTableDataSource(res['response']);
            // console.log(this.dataSource,"lll")
            _this.userList = res["userList"];
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res['userList']);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) {
            console.log(err);
        });
    };
    UserManagementComponent.prototype.blockid = function (id) {
        this.userid = id;
    };
    UserManagementComponent.prototype.blockunblockuser = function () {
        var _this = this;
        this.api.blockUnblock({ id: this.userid }).subscribe(function (res) {
            _this.getAllUserList();
            console.log(res, "After api hit");
            if (res["messsage"] = "Unblocked successfully") {
                setTimeout(function () {
                    $("#unsuccess-block").modal("hide");
                }, 900);
            }
            if (res["message"] = "Blocked successfully") {
                setTimeout(function () {
                    $("#success-block").modal("hide");
                }, 900);
            }
        }, function (error) {
            console.log(error);
        });
    };
    UserManagementComponent.prototype.delete = function (data) {
        this.deletesub = data;
        console.log(this.deletesub);
    };
    UserManagementComponent.prototype.delUser = function () {
        var _this = this;
        var datadelete = {
            id: this.deletesub,
        };
        console.log(datadelete, "data from component");
        this.api.deleteUser(datadelete).subscribe(function (d) {
            // console.log(this.deletesub,'data')
            console.log(d, "data here is:::::::::::::::::::::::::::::::: ");
            if (d) {
                _this.getAllUserList();
            }
            setTimeout(function () {
                $("#deleted-success").modal("hide");
            }, 1200);
        }, function (error) {
            //console.log(error);
            _this.invalidLogin = true;
            //this.errorMessage = error.error.message
            // this.toastr.error(JSON.stringify(error['error']['message']));
            console.log(error);
        });
    };
    UserManagementComponent.prototype.sortfilter = function (event) {
        var sort = event.target.value;
        console.log(sort, "hiiii inside sort");
        if (sort === "0") {
            console.log(this.userList, "userss");
            this.userList.sort(function (a, b) { return (a.fullName > b.fullName) ? 1 : ((b.fullName > a.fullName) ? -1 : 0); });
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.userList);
            this.dataSource.paginator = this.paginator;
        }
        else {
            this.userList.sort(function (a, b) { return (a.fullName < b.fullName) ? 1 : ((b.fullName < a.fullName) ? -1 : 0); });
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.userList);
            this.dataSource.paginator = this.paginator;
        }
    };
    UserManagementComponent.prototype.fromDate = function (event) {
        this.todate = event;
        this.optionsTo = {
            minYear: 2017,
            minDate: new Date("2017-01-01")
        };
        // console.log(event,"lll")
        this.fromdate = Math.round((new Date(event)).getTime());
        console.log("startDate", this.fromdate);
        this.filterDate();
    };
    UserManagementComponent.prototype.EndDate = function (event) {
        // console.log(event,"event");
        this.endDate = event;
        this.optionsTo = {
            minYear: 2017,
            minDate: new Date("2017-01-01"),
        };
        this.endDate = Math.round((new Date(event)).getTime());
        console.log("endDate", this.endDate);
        // console.log(new Date(this.endDate * 1000))
        this.filterDate();
    };
    UserManagementComponent.prototype.filterDate = function () {
        // console.log(this.fromdate)
        if (this.fromdate && !this.endDate) {
            console.log("hi");
            var fromFilter = new Date(this.fromdate).getTime();
            console.log(fromFilter, "sss");
            console.log(this.userList, "listtt");
            this.allUser = this.userList.filter(function (item) {
                return item.createdAt >= fromFilter;
            } //  
            );
            //  console.log(this.allUser,"listtt");
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.allUser);
            console.log(this.dataSource, "calnederrrrrrrrrS");
            if (this.forFilter) {
                this.dataSource.filter = this.forFilter.trim().toLowerCase();
            }
            this.dataSource.paginator = this.paginator;
        }
        else if (this.endDate && !this.fromdate) {
            var toFilter = new Date(this.todate).getTime() + 86400000;
            this.allUser = this.userList.filter(function (item) {
                //  console.log(item,"itemmmmm")  
                item.createdAt <= toFilter;
            });
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.allUser);
            if (this.forFilter) {
                this.dataSource.filter = this.forFilter.trim().toLowerCase();
            }
            this.dataSource.paginator = this.paginator;
        }
        else {
            console.log("inside ekse");
            var fromFilter = new Date(this.fromdate).getTime();
            var toFilter = new Date(this.endDate).getTime() + 86400000;
            this.allUser = this.userList.filter(function (item) {
                return item.createdAt <= toFilter && item.createdAt >= fromFilter;
            });
            console.log(this.allUser, "dd");
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.allUser);
            if (this.forFilter) {
                this.dataSource.filter = this.forFilter.trim().toLowerCase();
            }
            this.dataSource.paginator = this.paginator;
        }
        // console.log("Hhiiiiiiiiiiiiiiiiii", this.fromdate);
        // if (this.fromdate && !this.todate) {
        //   console.log("Hhiiiiiiiiiiiiiiiiii", this.fromdate);
        //   var fromFilter = new Date(this.fromdate).getTime();
        //   // var fromFilter = this.fromdate.getTime();
        //   this.allUser = this.userList.filter(
        //     (item: any) => new Date(item.createdAt).getTime() >= fromFilter
        //   );
        //   console.log(
        //     this.allUser,
        //     ":::::::::::::",
        //     this.fromdate,
        //     ":::::::::::::",
        //     fromFilter
        //   );
        //   this.dataSource = new MatTableDataSource(this.allUser);
        //   if (this.forFilter) {
        //     this.dataSource.filter = this.forFilter.trim().toLowerCase();
        //   }
        //   this.dataSource.paginator = this.paginator;
        // } else if (this.todate && !this.fromdate) {
        //   console.log(this.todate, ":::::::::::::");
        //   var toFilter = new Date(this.todate).getTime();
        //   //var toFilter = this.todate;
        //   this.allUser = this.userList.filter(
        //     (item: any) => item.createdAt <= toFilter
        //   );
        //   this.dataSource = new MatTableDataSource(this.allUser);
        //   if (this.forFilter) {
        //     this.dataSource.filter = this.forFilter.trim().toLowerCase();
        //   }
        //   this.dataSource.paginator = this.paginator;
        // } else {
        //   var fromFilter = new Date(this.fromdate).getTime();
        //   var toFilter = new Date(this.todate).getTime();
        //   // var fromFilter =this.fromdate
        //   // var toFilter = this.todate;
        //   console.log(fromFilter, "::::::::::::::", toFilter, "line asdas");
        //   this.allUser = this.userList.filter((item: any) => {
        //     // console.log("Date :",new Date(item.createdAt).getTime());
        //     return (
        //       new Date(item.createdAt).getTime() <= toFilter &&
        //       new Date(item.createdAt).getTime() >= fromFilter
        //     );
        //   });
        //   console.log("Count :", this.allUser.length);
        //   this.dataSource = new MatTableDataSource(this.allUser);
        //   if (this.forFilter) {
        //     this.dataSource.filter = this.forFilter.trim().toLowerCase();
        //   }
        //   this.dataSource.paginator = this.paginator;
        // }
    };
    UserManagementComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
    ], UserManagementComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
    ], UserManagementComponent.prototype, "sort", void 0);
    UserManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-user-management",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user-management/user-management.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-management.component.css */ "./src/app/layout/user-management/user-management.component.css")).default]
        })
    ], UserManagementComponent);
    return UserManagementComponent;
}());



/***/ }),

/***/ "./src/app/layout/user-mgm-view/user-mgm-view.component.css":
/*!******************************************************************!*\
  !*** ./src/app/layout/user-mgm-view/user-mgm-view.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".info label, .info input{\n    width: 50%;\n}\na.form-control.btn.btn-primary{\n    display: inline-block;\n    margin-bottom: 15px;\n}\nnav > .nav.nav-tabs{\n\n    border: none;\n      color:#fff;\n      background:#fff;\n      border-radius:0;\n  \n  }\nnav > div a.nav-item.nav-link,\n  nav > div a.nav-item.nav-link.active\n  {\n    border: none;\n      padding: 18px 25px;\n      color:#fff;\n      background:#272e38;\n      border-radius:0;\n      text-align: left;\n  }\nnav > div a.nav-item.nav-link.active:after\n   {\n    content: \"\";\n    position: relative;\n    bottom: -60px;\n    left: -10%;\n    /* border: 15px solid transparent; */\n    /* border-top-color: #e74c3c ; */\n  }\n.tab-content{\n    background: #fdfdfd;\n      line-height: 25px;\n      border: 1px solid #ddd;\n      /* border-top:5px solid #e74c3c;\n      border-bottom:5px solid #e74c3c; */\n      padding:30px 25px;\n  }\nnav > div a.nav-item.nav-link:hover,\n  nav > div a.nav-item.nav-link:focus\n  {\n    border: none;\n    background: #eeaa2e;\n    color: #fff;\n    border-radius: 0;\n    text-decoration: none;\n    transition: background 0.20s linear\n  }\n.tab-content>.tab-pane {\n\n    text-align: left;\n}\n.img-data{\n    height: 105px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3VzZXItbWdtLXZpZXcvdXNlci1tZ20tdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCO0FBRUE7O0lBRUksWUFBWTtNQUNWLFVBQVU7TUFDVixlQUFlO01BQ2YsZUFBZTs7RUFFbkI7QUFDQTs7O0lBR0UsWUFBWTtNQUNWLGtCQUFrQjtNQUNsQixVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixnQkFBZ0I7RUFDcEI7QUFFQTs7SUFFRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLGdDQUFnQztFQUNsQztBQUNBO0lBQ0UsbUJBQW1CO01BQ2pCLGlCQUFpQjtNQUNqQixzQkFBc0I7TUFDdEI7d0NBQ2tDO01BQ2xDLGlCQUFpQjtFQUNyQjtBQUVBOzs7SUFHRSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCO0VBQ0Y7QUFDQTs7SUFFRSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvdXNlci1tZ20tdmlldy91c2VyLW1nbS12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mbyBsYWJlbCwgLmluZm8gaW5wdXR7XG4gICAgd2lkdGg6IDUwJTtcbn1cbmEuZm9ybS1jb250cm9sLmJ0bi5idG4tcHJpbWFyeXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxubmF2ID4gLm5hdi5uYXYtdGFic3tcblxuICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiNmZmY7XG4gICAgICBiYWNrZ3JvdW5kOiNmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOjA7XG4gIFxuICB9XG4gIG5hdiA+IGRpdiBhLm5hdi1pdGVtLm5hdi1saW5rLFxuICBuYXYgPiBkaXYgYS5uYXYtaXRlbS5uYXYtbGluay5hY3RpdmVcbiAge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDE4cHggMjVweDtcbiAgICAgIGNvbG9yOiNmZmY7XG4gICAgICBiYWNrZ3JvdW5kOiMyNzJlMzg7XG4gICAgICBib3JkZXItcmFkaXVzOjA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIFxuICBuYXYgPiBkaXYgYS5uYXYtaXRlbS5uYXYtbGluay5hY3RpdmU6YWZ0ZXJcbiAgIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IC02MHB4O1xuICAgIGxlZnQ6IC0xMCU7XG4gICAgLyogYm9yZGVyOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50OyAqL1xuICAgIC8qIGJvcmRlci10b3AtY29sb3I6ICNlNzRjM2MgOyAqL1xuICB9XG4gIC50YWItY29udGVudHtcbiAgICBiYWNrZ3JvdW5kOiAjZmRmZGZkO1xuICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgLyogYm9yZGVyLXRvcDo1cHggc29saWQgI2U3NGMzYztcbiAgICAgIGJvcmRlci1ib3R0b206NXB4IHNvbGlkICNlNzRjM2M7ICovXG4gICAgICBwYWRkaW5nOjMwcHggMjVweDtcbiAgfVxuICBcbiAgbmF2ID4gZGl2IGEubmF2LWl0ZW0ubmF2LWxpbms6aG92ZXIsXG4gIG5hdiA+IGRpdiBhLm5hdi1pdGVtLm5hdi1saW5rOmZvY3VzXG4gIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2VlYWEyZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMjBzIGxpbmVhclxuICB9XG4gIC50YWItY29udGVudD4udGFiLXBhbmUge1xuXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5pbWctZGF0YXtcbiAgICBoZWlnaHQ6IDEwNXB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/layout/user-mgm-view/user-mgm-view.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/user-mgm-view/user-mgm-view.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserMgmViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMgmViewComponent", function() { return UserMgmViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/service/authentication.service.ts");




var UserMgmViewComponent = /** @class */ (function () {
    function UserMgmViewComponent(route, api) {
        this.route = route;
        this.api = api;
    }
    UserMgmViewComponent.prototype.ngOnInit = function () {
        this.userId = this.route.snapshot.paramMap.get('id');
        console.log(this.userId);
        this.getUserById(this.userId);
        $('.nav-tabs li a').on('click', function () {
            $('.nav-tabs li').removeClass('active');
            $(this).addClass('active');
        });
    };
    UserMgmViewComponent.prototype.getUserById = function (id) {
        var _this = this;
        var data = {
            id: id
        };
        this.api.getUserById(data).subscribe(function (res) {
            console.log("response we got", res);
            _this.user = res['response'];
            _this.room = res['roomData'][0];
            _this.visitData = res['visitData'];
            console.log(_this.user, _this.room, "current::::::::::::::::::::::::::::::");
        }, function (err) {
            console.log(err);
        });
    };
    UserMgmViewComponent.prototype.funclick = function () {
    };
    UserMgmViewComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    UserMgmViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-mgm-view',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-mgm-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user-mgm-view/user-mgm-view.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-mgm-view.component.css */ "./src/app/layout/user-mgm-view/user-mgm-view.component.css")).default]
        })
    ], UserMgmViewComponent);
    return UserMgmViewComponent;
}());



/***/ }),

/***/ "./src/app/layout/user-mgmt-edit/user-mgmt-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/layout/user-mgmt-edit/user-mgmt-edit.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".info label, .info input{\n    width: 100%;\n}\na.form-control.btn.btn-primary{\n    display: inline-block;\n    margin-bottom: 15px;\n}\nnav > .nav.nav-tabs{\n\n    border: none;\n      color:#fff;\n      background:#fff;\n      border-radius:0;\n  \n  }\nnav > div a.nav-item.nav-link,\n  nav > div a.nav-item.nav-link.active\n  {\n    border: none;\n      padding: 18px 25px;\n      color:#fff;\n      background:#272e38;\n      border-radius:0;\n      text-align: left;\n  }\nnav > div a.nav-item.nav-link.active:after\n   {\n    content: \"\";\n    position: relative;\n    bottom: -60px;\n    left: -10%;\n    /* border: 15px solid transparent; */\n    /* border-top-color: #e74c3c ; */\n  }\n.tab-content{\n    background: #fdfdfd;\n      line-height: 25px;\n      border: 1px solid #ddd;\n      /* border-top:5px solid #e74c3c;\n      border-bottom:5px solid #e74c3c; */\n      padding:30px 25px;\n  }\nnav > div a.nav-item.nav-link:hover,\n  nav > div a.nav-item.nav-link:focus\n  {\n    border: none;\n    background: #eeaa2e;\n    color: #fff;\n    border-radius: 0;\n    text-decoration: none;\n    transition: background 0.20s linear\n  }\n.tab-content>.tab-pane {\n\n    text-align: left;\n}\n.img-data{\n    height: 105px;\n}\n.card-avatar{\n  display: flex;\n    justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3VzZXItbWdtdC1lZGl0L3VzZXItbWdtdC1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7QUFFQTs7SUFFSSxZQUFZO01BQ1YsVUFBVTtNQUNWLGVBQWU7TUFDZixlQUFlOztFQUVuQjtBQUNBOzs7SUFHRSxZQUFZO01BQ1Ysa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLGdCQUFnQjtFQUNwQjtBQUVBOztJQUVFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7SUFDVixvQ0FBb0M7SUFDcEMsZ0NBQWdDO0VBQ2xDO0FBQ0E7SUFDRSxtQkFBbUI7TUFDakIsaUJBQWlCO01BQ2pCLHNCQUFzQjtNQUN0Qjt3Q0FDa0M7TUFDbEMsaUJBQWlCO0VBQ3JCO0FBRUE7OztJQUdFLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckI7RUFDRjtBQUNBOztJQUVFLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtJQUNYLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC91c2VyLW1nbXQtZWRpdC91c2VyLW1nbXQtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8gbGFiZWwsIC5pbmZvIGlucHV0e1xuICAgIHdpZHRoOiAxMDAlO1xufVxuYS5mb3JtLWNvbnRyb2wuYnRuLmJ0bi1wcmltYXJ5e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG5uYXYgPiAubmF2Lm5hdi10YWJze1xuXG4gICAgYm9yZGVyOiBub25lO1xuICAgICAgY29sb3I6I2ZmZjtcbiAgICAgIGJhY2tncm91bmQ6I2ZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6MDtcbiAgXG4gIH1cbiAgbmF2ID4gZGl2IGEubmF2LWl0ZW0ubmF2LWxpbmssXG4gIG5hdiA+IGRpdiBhLm5hdi1pdGVtLm5hdi1saW5rLmFjdGl2ZVxuICB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgICAgcGFkZGluZzogMThweCAyNXB4O1xuICAgICAgY29sb3I6I2ZmZjtcbiAgICAgIGJhY2tncm91bmQ6IzI3MmUzODtcbiAgICAgIGJvcmRlci1yYWRpdXM6MDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgXG4gIG5hdiA+IGRpdiBhLm5hdi1pdGVtLm5hdi1saW5rLmFjdGl2ZTphZnRlclxuICAge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogLTYwcHg7XG4gICAgbGVmdDogLTEwJTtcbiAgICAvKiBib3JkZXI6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7ICovXG4gICAgLyogYm9yZGVyLXRvcC1jb2xvcjogI2U3NGMzYyA7ICovXG4gIH1cbiAgLnRhYi1jb250ZW50e1xuICAgIGJhY2tncm91bmQ6ICNmZGZkZmQ7XG4gICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAvKiBib3JkZXItdG9wOjVweCBzb2xpZCAjZTc0YzNjO1xuICAgICAgYm9yZGVyLWJvdHRvbTo1cHggc29saWQgI2U3NGMzYzsgKi9cbiAgICAgIHBhZGRpbmc6MzBweCAyNXB4O1xuICB9XG4gIFxuICBuYXYgPiBkaXYgYS5uYXYtaXRlbS5uYXYtbGluazpob3ZlcixcbiAgbmF2ID4gZGl2IGEubmF2LWl0ZW0ubmF2LWxpbms6Zm9jdXNcbiAge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZWVhYTJlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4yMHMgbGluZWFyXG4gIH1cbiAgLnRhYi1jb250ZW50Pi50YWItcGFuZSB7XG5cbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmltZy1kYXRhe1xuICAgIGhlaWdodDogMTA1cHg7XG59XG4uY2FyZC1hdmF0YXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/user-mgmt-edit/user-mgmt-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/user-mgmt-edit/user-mgmt-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserMgmtEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMgmtEditComponent", function() { return UserMgmtEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var UserMgmtEditComponent = /** @class */ (function () {
    function UserMgmtEditComponent(router, formBuilder, route, api) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.api = api;
    }
    UserMgmtEditComponent.prototype.ngOnInit = function () {
        this.userId = this.route.snapshot.paramMap.get('id');
        console.log(this.userId, "jhbkjvkjvjl");
        this.getUserById(this.userId);
        $('.nav-tabs li a').on('click', function () {
            $('.nav-tabs li').removeClass('active');
            $(this).addClass('active');
        });
        this.edituserForm = this.formBuilder.group({
            Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            countryCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            DOB: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Coin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    UserMgmtEditComponent.prototype.singleFiles1 = function (event) {
        var e_1, _a;
        var _this = this;
        this.pChange = true;
        var file1 = event.target.files[0];
        this.single = [];
        var singleFiles = event.target.files;
        if (singleFiles) {
            try {
                for (var singleFiles_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](singleFiles), singleFiles_1_1 = singleFiles_1.next(); !singleFiles_1_1.done; singleFiles_1_1 = singleFiles_1.next()) {
                    var file = singleFiles_1_1.value;
                    var singleReader = new FileReader();
                    singleReader.onload = function (e) {
                        _this.single.push(e.target.result);
                        document.getElementById("imagefile1").setAttribute('src', e.target.result);
                    };
                    singleReader.readAsDataURL(file);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (singleFiles_1_1 && !singleFiles_1_1.done && (_a = singleFiles_1.return)) _a.call(singleFiles_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        this.picture = event.target.files[0];
        console.log(this.picture, "::::::::::::::::::::::::::;singleFiles1 brooooooo");
    };
    UserMgmtEditComponent.prototype.getUserById = function (id) {
        var _this = this;
        var data = {
            id: id
        };
        console.log(this.userId);
        this.api.getUserById(data).subscribe(function (res) {
            console.log(res, "jhvkcvkcv75765r76476776373753");
            _this.user = res['response'];
            // var value = this.user.dob
            // var date = value.slice(0,-7)
            // var month = value.slice(3,-5)
            // var year = value.slice(5)
            // console.log(date,month,year)
            // new Date(2021 , 1 , 25);
            _this.dobDate = new Date(_this.user.dob).setHours(0, 0, 0, 0);
            // console.log(this.user , new Date(this.dobDate), this.dobDate)
            _this.edituserForm.patchValue({
                Name: _this.user.fullName,
                Country: _this.user.country,
                Gender: _this.user.gender,
                countryCode: _this.user.countryCode,
                Mobile: _this.user.mobile,
                DOB: new Date(_this.dobDate),
                Coin: _this.user.myCoin
            });
        }, function (err) {
            console.log(err);
        });
    };
    Object.defineProperty(UserMgmtEditComponent.prototype, "g", {
        get: function () {
            return this.edituserForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    UserMgmtEditComponent.prototype.getGender = function (value) {
        this.gChange = true;
        this.selectedGender = value;
        console.log(this.selectedGender, "gender");
    };
    UserMgmtEditComponent.prototype.editUser = function () {
        var _this = this;
        this.submitted = true;
        var d = new Date(this.edituserForm.value.DOB);
        var dt = d.getDate();
        var mn = d.getMonth();
        mn++;
        var yy = d.getFullYear();
        var dobData = mn + "/" + dt + "/" + yy;
        if (this.edituserForm.invalid) {
            return;
        }
        var a = new FormData();
        a.append('user_id', this.user._id);
        a.append('fullName', this.edituserForm.value.Name);
        a.append('country', this.edituserForm.value.Country);
        a.append('countryCode', this.edituserForm.value.countryCode);
        a.append('mobile', this.edituserForm.value.Mobile);
        a.append('gender', this.gChange == true ? this.selectedGender : this.user.gender);
        a.append('dob', dobData);
        a.append('myCoin', this.edituserForm.value.Coin);
        a.append('profileImage', this.pChange == true ? this.picture : this.user.profileImage);
        this.api.editUser(a).subscribe(function (editdata) {
            console.log(editdata, "after editcurrency api");
            _this.edituserForm.reset();
            _this.api.toaster("success", "Updated Successfully.");
            _this.router.navigateByUrl('/home/user-management');
        }, function (error) {
            console.log(error);
            console.log(error);
            _this.api.toaster("error", "Something went wrong.");
        });
    };
    UserMgmtEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    UserMgmtEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-mgmt-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-mgmt-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user-mgmt-edit/user-mgmt-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-mgmt-edit.component.css */ "./src/app/layout/user-mgmt-edit/user-mgmt-edit.component.css")).default]
        })
    ], UserMgmtEditComponent);
    return UserMgmtEditComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map