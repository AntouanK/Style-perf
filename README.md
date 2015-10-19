

### Comparison of inline styles, and traditional CSS file

[Inline page](http://antouank.github.io/Style-perf/inline/)

[Traditional page](http://antouank.github.io/Style-perf/traditional/)


- Download size

|inline|traditional
|---|---|
|7.3kB (html) |3.9kB (html + css)

- Download time

|inline|traditional
|---|---|
|20ms |45ms (html + css) 20ms + 5ms + 20ms

In first case, we make only one request, and by the time we get back the `index.html`, we have everything.

In the second case, we have to get the `index.html` ( although it's smaller, RTT is the same ), then it has to finish parsing, and then starts a second request for the CSS file, which although small, again has a RTT.

- First paint

|inline|traditional
|---|---|
|46ms |84ms
|48ms |82ms
|53ms |81ms
|50ms |90ms
|49ms |81ms
|50ms |90ms

The time when wee see the screen painted.
