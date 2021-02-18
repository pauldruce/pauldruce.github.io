---
layout: post
title: “Using a shift register (74HC595) to reduce the number of IO pins used“
category: [post,DIY,IoT,blog]
tags: IoT, Smart Devices, blog
keywords: IoT, MQTT, ESP32, ESP2866, Arduino, Raspberry Pi, Python, Micropython
---

# Using a shift register (74HC595) with ESP8266 and Micropython

This post follows the series of posts about creating a temperature sensor using ESP32/ESP8266, a thermistor and a 4 digit 7 segment display. Initially I was using the ESP32 Development board to create this project, as it had plenty of GPIO pins and has plenty of resources online for me to learn how to use it.

However, as the ESP32 board I have is quite expensive (~£10) and way overpowered for this specific task, I want to use a cheaper and a physically smaller board to make this project permanent. So moving this project from the breadboard to protoboard, I decided to see what other WiFi boards there were for cheap. I stumbled across the WeMos D1 Mini. Well I couldn’t get a WeMos board from amazon, so I bought these Makerfire clones. The problem is, these have limited numbers of IO pins, and there isn’t enough to run the thermometer and the display. However, there is a solution. Introducing the shift register…



### Shift Registers

This unassuming little device in my arduino kit has saved the day. It’s a weird device when you first get use it, however, it’s quite simple once you understand whats going on. There is some weird jargon surrounding these devices which I think is a little misleading without some explanation. So I’ll spend some time introducing the shift register called 74HC595 - I know, a catchy name right. I’m not an expert on these devices, however I think I’ve understood enough to be able to explain them quite well. 



