#!/usr/bin/env zx
$.verbose = false
let response = await fetch('https://wttr.in/');
if(response.ok) {
    console.log(await response.text());
}