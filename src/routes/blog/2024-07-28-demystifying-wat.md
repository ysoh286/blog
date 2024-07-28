---
title: "i still don't know js: demystifying the 2012 wat video"
date: 2024-07-28 18:00:08
---

For software engineers, you've most likely come across the popular [wat video](https://www.destroyallsoftware.com/talks/wat), which highlights some interesting behaviour of JavaScript (JS part starts at 1:24 - 4:00).

I used to laugh at this and at the nonsense of it (the batman joke was gold), but wouldn't it be good to
demystify what's really going on and why do we have such behaviour?

### Adding 2 empty arrays together:

The addition operator `+` will aim to either perform string concatentation OR numeric addition.

```
[] + []  // returns ""

```

The two empty arrays will try to be converted to a primitive data type, which get converted to string, which evaluates to an empty string, thus concatenating 2 empty strings, gives an empty string.

```
[] + []
// = "" + ""
// = ""
```

### Adding `[] + {} = [object Object]`

This returns `[object Object]`. Strangely enough, we generally see this output when an object is being converted into a primitive data type into a string.

```
String({}); // returns [object Object]
```

Thus, when adding the two together:

```
[] + {}
// = '' + '[object Object]' // converted to string
// = '[object Object]'
```

### What about `{} + [] = 0`?

```
{} + [] // 0
```

This one is a strange one, but JS is interpreting the front `{}` as a empty block rather than an object.
With the empty block evaluated, this means it just leaves `+ []`, which gets converted to a primitive which is a string , then a number, giving us 0

```
{} + []
// = + []
// = ToNumber(ToPrimitive([]))
// = ToNumber("")
// = 0
```

### `{} + {} = NaN`

The first `{}` is just evaluated as an empty block, and thus ignored. Which leaves us with `+ {}`. Once again, the object gets converted to a primitive, which is a string, giving us `+ '[object Object]'`. Next, when we try to convert this to a number, it will return `NaN`.

```
{} + {}
// = + {}
// = ToNumber(ToPrimitive({}))
// = ToNumber('[object Object]')
// = NaN // as the string cannot be converted to number
```

### The Batman `NaN` explanation

```
Array(16).join("wat" - 1);
```

returns a string of `NaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaN`.

Let's dissect the `"wat" - 1` part:

```
"wat" - 1
// = Number("wat") - 1
// = NaN - 1
// = NaN
```

This will evaluate to NaN as trying to convert "wat" into a number will return NaN. Thus, adding numbers to NaN will still result in NaN.
The join operator will try convert this to a string, thus giving "NaN".

```
Array(16).join("wat" - 1) + " Batman!"
// = Array(16).join(NaN) + " Batman!"
// = Array(16).join("NaN") + " Batman!"
// = "NaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaN" + " Batman!"
// = "NaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaN Batman!"
```

From the spec, the + operator will try to convert left and right to a primitive (generally a string, or number), then try add the two if they conform to string or number. If both types are string, then string concatenation will occur. If both types are numbers, then numeric addition will occur.

### Extras

Just some extra gotchas:

`1 < 2 < 3` returns `true` - which is okay, but what's really happening?

```
1 < 2 < 3
// = (1 < 2) < 3
// = true < 3 // converted to boolean, then to number
// = 1 < 3
// = true
```

`3 > 2 > 1` gives `false` following the same thinking above, even though mathematically we know this should be `true`:

```
3 > 2 > 1
// = (3 > 2) > 1
// = true > 1 // boolean gets converted to number (true = 1, false = 0)
// = 1 > 1
// = false
```

### References

- [ECMAScript spec](https://tc39.es/ecma262/#sec-addition-operator-plus)
- [Chidume Nnamdi's blog post on why `{} + {}` returns [object Object]](https://medium.com/dev-proto/why-gives-object-object-object-object-in-javascript-2f350b739cc9)
- [StackOverflow's explanation on the video](https://stackoverflow.com/questions/9032856/what-is-the-explanation-for-these-bizarre-javascript-behaviours-mentioned-in-the)
- [Wat video](https://www.destroyallsoftware.com/talks/wat)
- Kyle Simpson's [Deep JavaScript Foundations](https://frontendmasters.com/courses/deep-javascript-v3/) course on FrontEnd Masters
