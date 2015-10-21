

### Comparison of inline styles, traditional CSS file and embedded styles

[Inline page](http://antouank.github.io/Style-perf/inline/)

[Traditional page](http://antouank.github.io/Style-perf/traditional/)

[Embedded page](http://antouank.github.io/Style-perf/embedded/)


## for 100 nodes

- Download size

|inline|traditional|embedded
|---|---|
|0.9kB `html` (716kB) |0.8kB `html + css`

- Download time

|inline|traditional|embedded
|---|---|
|~20ms |~45ms (html + css) 20ms + 5ms + 20ms

In first case, we make only one request, and by the time we get back the `index.html`, we have everything.

In the second case, we have to get the `index.html` ( although it's smaller, RTT is the same ), then it has to finish parsing, and then starts a second request for the CSS file, which although small, again has a RTT.

- First paint

|inline|traditional|embedded
|---|---|
|~35ms |~55ms

The time when wee see the screen painted.
( which basically is 10 ms after the browser gets everything )


## for 1000 nodes

- Download size gzipped ( uncompressed )

|inline|traditional|embedded
|---|---|
|10kB `html` (716kB) |4.6kB `html + css` (335kB)|2.1kB `html` (335kB)

- Download time

|inline|traditional|embedded
|---|---|
|~28ms |~45ms (html + css) 20ms + 10ms + 20ms

- First paint

|inline|traditional|embedded
|---|---|
|~48ms |~110ms |~45ms
