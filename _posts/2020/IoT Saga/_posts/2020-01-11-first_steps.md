---
layout: post
title: "DIY Smart Devices and IoT: Episode 1 - Getting Started - Unfinished"
author: Paul Druce

summary: How to get start with building smart devices.
category: tech
tags: [IoT, blog, post,unfinished]
keywords: [IoT, MQTT, ESP32, ESP2866, Arduino, Raspberry Pi, Python, Micropython]
---
<center>
<img src="/assets/2020/IoTSaga/assets/ESP32_Cover1.jpg" height=400>
</center>

# A total beginners guide to DIY smart devices

Do you have an idea of a smart device that you really want? Something simple that you think shouldn’t be too hard to make, but costs a fortune to buy a pre-made one? Maybe the existing examples don’t do exactly what you want, and you think you could do better? Thats exactly where I was a few months ago. I was in the midst of writing my PhD thesis, drinking copious amounts of tea. Green tea, black tea, Oolong tea, even coffee sometimes. As any avid tea drinker knows that the different types of tea taste the best when you brew them at different temperatures. Black tea requires water ~100ºC, whereas green teas require lower temperatures ~80-90 ºC.
I wanted a kettle where I could set the temperature easily, and I’m also a big fan of WiFi controllable gadgets.
I did a quick search for the kettle of my dreams and was brought screaming back to reality by their price tags.

> £100+ for a WiFi kettle, with a closed-off, buggy app to control it?
No thanks.
> So here we are, elbows deep in electronics projects and I’m no where near building a working kettle, but I’ve learnt so much in the past few weeks alone, that I thought I’d share my adventure.

I should note, I have had no experience with electronics before this. Actually that is a lie, I had a toy as a child called “Electronics Lab: 101 experiments” which was a lot of fun when I was 10, but now at 26 I want to learn how to use fancy electronics.
I also taught myself Python during my PhD so I could do some basic data analysis. I have also been taught the programming language C quite extensively during my degree. So the disclaimer is, I’m going to assume you know roughly how to use C and/or Python. I am terrible at using object-oriented languages, so if something can be done way more simply than I show. Please let me know, I’d love to learn.
The majority of this project is going to use Python, mainly because its easier and I wanted to get tinkering immediately.
I am going to rewrite the code in C/C++ when I’ve got the time as it will be much quicker and I’m hoping to make use of some parallel processing on the device I use.

So this tutorial is going to be an on-going saga. Starting simple, getting more complicated as we go.

The first project is to build a WiFi temperature sensor, that reads the temperature, logs it and we produce a graph of its history. I am also going to display the temperature on a 4 digit 7 segment display with decimal points. Here is a rough outline of the steps that we are going to go through:

- <u>Step one</u>: Grab an Arduino/Raspberry Pi/ESP32/ESP2866. Get to know your devices. A basic program is to make an LED flash. I recommend the ESP32/ESP8266 and a Raspberry Pi as that is what I am going to use. It shouldn’t be difficult to convert this approach for other WiFi enabled devices.
- <u>Step two:</u>  Wire up a simple example to read the air temperature, i.e. wire up a resistor a thermistor and read the value of the thermistor into to an analog port (it turns out this a bad way to measure the temperature, but we will get to why later).
- <u>Step three:</u> Learn how to communicate between your wireless device and a computer. This involves learning some MQTT (very easy). I am reading the temperature on the ESP32 and sending it to a Raspberry Pi.
- <u>Step four:</u> Set up a database on the computer (Raspberry Pi) using Sqlite/MySQL and input the temperature.
- <u>Step five:</u> Read the data from the database and present it as a graph(Raspberry Pi).
- <u>Step six:</u> Wire up a 4 digit 7 segement display and output the temperature using the wireless device (ESP32).

If you don’t want to log the temperature and produce a graph, you can skip steps three, four and five. However step 6 is probably the hardest (depending on the type of diplay) as we shall see.

For this initial post, I’ll talk about the different devices I am going to use and how to make an LED blink on the ESP32.

## Choosing a WiFi chip

There are a lot of different chips, most of them with complicated names. However for this project I suggest you stick to the following devices:

- an Arduino (any of them)
- a Raspberry Pi (the Raspberry 3 is good and should be cheaper now there is the Raspberry Pi 4)
- ESP32 or its younger brother ESP8266. The ESP32 is more powerful, has Bluetooth, has more ports and more ports that can read analog sensors. I’m not sure how I am implementing the display can be done using the ESP8266 but there are definitely other (simpler to use) displays that should work with the ESP8266.

I recommend you buy yourself a kit to begin with. I bought one from amazon by a company called Elegoo, that came with an Arduino and a ton of bits and pieces. I learnt the basics on an Arduino, making an LED flash etc. Then applied them to the ESP32.

I also had a Raspberry Pi 3 lying around, as I used it as a Plex Media Player. However, since getting a Google Chromecast, it has not been used that much. The Raspberry Pi is going to be used as my Hub, where all of the database management and logging of the temperature data will be done. You should be able to do this on any computer, however for continuous monitoring and logging, your computer of choice needs to be always on. I used my Raspberry Pi as it is low wattage, silent and more than powerful enough for this application. It also has a terminal which will be very useful.

I should note that I am using macOS to write all of the code and to flash the ESP32. As the terminal on Mac OS is very similar to the terminal on the Raspberry Pi, it was very easy for me to get to grips with most of the commands we are going to use. I am pretty unfamiliar with how to use Windows to run terminal commands, so if you have only used a Windows device, I recommend you familiarise yourself with that procedure. I wont cover how to flash the ESP32 from a windows device, mainly because I don’t have one to play with. However there are many webpages walking you through how to do this.

Lets familiarise ourselves with the ESP32 we are going to use in this tutorial.

<center><figure>
<img src="/assets/2020/IoTSaga/assets/placeholder-3233423.jpg" width="200px"/>
<figcaption>Image there is an image of a ESP32 with the various ports labelled.</figcaption>
</figure></center>
- [ ] **Get picture of ESP32 with pins labelled**.


## The required components and devices

Get yourself a multi-meter. This will be very useful for finding the resistance of certain components, and figuring out how devices work.

The Elegoo kit I bought came with all kinds of components. The key components this project is going to use are:

- **A thermistor** - mine is a 10kOhm thermistor. Which means at 25ºC, the resistance of this thermistor is 10k Ohms. There are a few types of thermistor, however the most import thing to find out is whether your thermistor is NTC or not. NTC stands for Negative Temperature Coefficient - which means that as the temperature goes up, the resistance goes down. The thermistor used in this project came from the Elegoo kit and is NTC. Which means are my room temperature of ~20ºC the resistance was somewhere between 12kOhms and 15kOhms.
<center>
  <img src="/assets/2020/IoTSaga/assets/ESP32_ThermistorImageCrop.jpg" width =400>
</center>

- **Resistors** - if you have a 10kOhm thermistor, you should get a 10kOhm resistor. Having some spare resistors is never a bad thing either. For instance having some small valued resistors (~100-500Ohms) would be useful when wiring up the display.

- **A breadboard** - this is a piece of kit that allows you to tinker without having to solder components together. Now the ESP32 is too big for the breadboard that came with my kit, however you can bridge two breadboards together as shown in the figure:  

  <center>
    <img src="/assets/2020/IoTSaga/assets/ESP32_BreadboardMount.jpg" width="200px" style='left'/>
    <img src="/assets/2020/IoTSaga/assets/ESP32_BreadboardMount1.jpg" width="180" style='right' overflow:hidden style="transform:rotate(90deg);" />
  </center>



- Some jumper cables, these are cables with pins on each end that plug into the breadboard. These allow you to build circuits and connect them to the input and output pins of the ESP32.

  <center>
  <figure><img 	src="/assets/2020/IoTSaga/assets/ESP32_Jumpers.jpg" width=200px >
  <img src="/assets/2020/IoTSaga/assets/ESP32_Jumpers1.jpg" width=200px >
  <img src="/assets/2020/IoTSaga/assets/ESP32_Jumpers2.jpg" width=200px ></figure>
  <center>

- A 4 digit 7 segment display. These should look familiar as they are used allover the place. There are different options when getting. They are pretty complicated to wire up, as each digit consists of 7 LEDS and another LED for the decimal point. Thus for a 4 digit 7 segment display there are 4*7= 28 LEDS plus another 4 for the decimal places. The one that came with my kit required a total of 12 I/O pins from my ESP32. However some come attached to a bit of circuit board and require far fewer I/O pins.

  - [ ] **Get image of display**

## Baby steps

The first task is to make an LED flash. This will teach you the basics of how to send instructions to the ESP32 and how a basic program is laid out. You’ll notice that an LED is not included in the list of required components above. This is because the ESP32 has a controllable LED on the board already. The Arduinos usually do as well. So we are going to use that.

Now, as with most things in life, getting started is hard work. So bare with me, the progress should speed up pretty quickly. It took me about a week to cobble together all the necessary information and code to get a fully fledged wireless temperature sensor, with a display and a graph of the temperature history shown on my Home Assistant (also run on the Raspberry Pi). I’d argue about 2 days of that time, was learning how to write and send code to an Arduino and an ESP32 and learning how each of the Pins worked. I’ll try to be as detailed as I can as I write this up. I don’t know everything but I’ll include things that I found helpful or explain things I found confusing.

The figure above showing the ESP32 pins is very useful as is this website: [Random Nerd Tutorials](https://randomnerdtutorials.com/esp32-pinout-reference-gpios/). This website is a gold mine for the ESP32 and is where a lot of what I have learn stems from. There will be a couple of other sites I will mention for the display and for calibrating the analog-to-digital converters (ADCs) for the ESP32.

The key bit of information is that the pin D2 on the ESP32 is connected to the on-board LED. So what we need to do is tell the processor on the ESP32 to send voltage to this pin to light up the LED. Here is the code in full and we will then break it down:

```python
import machine
from machine import Pin
import time

on = 1
off = 0

LEDPin = 2
LED=machine.Pin(LEDPin,Pin.OUT)

while True:
	LED.value(on)
	time.sleep(1)
	LED.value(off)
	time.sleep(1)
```

This code is written in Python (technically we will be using MicroPython) and I’ve written it to be clear. The command “import machine” imports the micropython module used to interface with the boards.
