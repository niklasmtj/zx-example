# Fetch example
First we will set zx to non verbose to hide the command calls

```js
$.verbose = false
```

## Weather forcast

Now we can use the included `node-fetch` package of `zx` to get the current weather forecast

```js
const response = await fetch('https://wttr.in/');
if(response.ok) {
    console.log(await response.text());
}
```