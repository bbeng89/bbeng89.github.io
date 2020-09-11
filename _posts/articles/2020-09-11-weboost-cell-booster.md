---
title: Installing a weBoost RV 65 Cell Booster
date: 2020-09-11
category: articles
layout: article
banner: 
override_home_banner: false
description: "The weBoost RV 65 is a powerful cell booster but is for stationary use only, and not particularly convenient. I'll show you how I prewired everything to make it a bit faster to setup."
---

I work full-time as a software developer on the road and I use my Verizon hotspot as my sole source of internet. This means that having good cell service is critical for me. If I find a great spot but can't pick up any cell service I usually will have to move on. So far I've had a lot of luck using [Campendium](https://www.campendium.com) to find spots by looking at the cell service reports at each location. However, every once in a while I get in a spot that doesn't quite have the service that was reported. Many times I find that there might be a single bar or maybe it jumps back and forth from LTE to 3G to 1x or you just lose the bar completely. 

I had been researching cell boosters for quite while trying to figure out what would work best for me. Many RVers permanently mount an omnidirectional antenna on their roof, but from what I heard these aren't as good as the directional antennas that you point right at the tower. I decided that if I was going to get one, I wanted to get a powerful one that would be able to scrape some service in these remote areas where you can barely get a solid bar. This is when I landed on the [weBoost Connect RV 65](https://www.amazon.com/gp/product/B07BWFYWNN). This is a directional antenna, so it has to be pointed at the tower, and it sits on a 25 foot pole. Raising it up so high allows you to better grab service, but this setup also means that it's for stationary use only, so you have to take it down before you travel. This is certainly less convenient than a permanent mount, but I knew that I wanted this mainly for the situations where I'm boondocking for a couple weeks and really need to stretch to grab a signal.

The directions that come with the booster instruct you to run wire through your slide-out, which sounded like even more of a pain and a total mess. I wanted to make it so that all I had to do to use it was put the pole up. I discovered that I could actually wire it through the existing coaxial cable in the rig used for television and this way I would have everything set up and ready to go, I'd just have to put the pole up and screw the coax cable into the cable port on the outside of the rig. In the rest of this article I'll show you how I set it all up. 

*Note - When I installed this I hadn't planned on writing an article about it, but later realized that I had enough photos I took during the process for an article. With that said, the photos aren't the best, but they get the point across.*

## Wiring the power supply

The booster comes with a normal 120v plug that you would plug into one of your wall outlets and it also comes with a  12v power supply that you would hard-wire into your 12v circuit so that it can run off the battery. I thought about using the regular plug but realized that would be a bigger mess with cables and would also mean that I'd have to run my inverter to use it when I'm boondocking. I decided the hard-wired 12v power supply would be the better way to go.

![12v power supply](/assets/img/articles/cell-booster/1-power-supply.jpg)

I looked around my rig and tried to think about the best location for the booster. I knew I needed to tap into the 12v circuit and also the coaxial outlets. The area around my television seemed like the perfect spot. I could splice the 12v power supply into the radio's power wires since it runs off 12v, and then I would also have access to the coax ports. The first thing to do was to pull the radio out.

![radio removed](/assets/img/articles/cell-booster/2-radio-pulled.jpg)

The mess of wires when I pulled the radio was a bit daunting at first, so I decided to find the manual for the radio online and see if I could find a wiring diagram. A quick google search pulled it up and I was able to see that the black and white wires were the power wires. So all I needed to do was splice the booster power supply into these wires. 

**Mandatory safety note - you should disconnect your battery before cutting and splicing into the wires.**

As you can see in the earlier picture, the wires on the power supply were really short and I thought that would make it a little more difficult to deal with. So I ran to the hardware store and picked up about a foot or so of red and black wire, some butt connectors, and some T-Taps. I then used the T-Taps to splice the new wires into the black and white wires of the radio. Then, just to be certain that these were the correct wires, I used my multimeter to connect to these wires and verify it was around 12v.

![t-taps splicing wires](/assets/img/articles/cell-booster/3-spliced-wires.jpg)

When the multimeter checked out, I went ahead and used the butt connectors to crimp the new wires onto the power supply wires. 

![extended power supply wires](/assets/img/articles/cell-booster/4-wire-extensions.jpg)

At this point I was able to plug the power supply into the booster and see that it lit up, so now I knew I had power! Now all I needed to do was run the coax cable.

## Running coax cables

The area behind the radio with the rats nest of wires had plenty of room for more, so I figured that would be a good place to stuff all the coax cable. To the right of the radio is an overhead cabinet, and I decided this would be a great place to mount the booster. I could then easily see the lights and unplug the booster when I'm not using it. I used some command strips to mount the booster to the ceiling in the cabinet, then drilled some holes to run the coax cables for the inside and outside antennas.

![mounted booster](/assets/img/articles/cell-booster/5-mounted-booster.jpg)

The compartment that had the radio already had a hole at the bottom so that the radio could connect into the TV. I used this hole to run the two coax cables out.

![coax cable exit](/assets/img/articles/cell-booster/6-coax-exit.jpg)

The "outside" connection needed to run to the coax port on the outside of the rig where I would plug in the antenna, so I needed to connect it to the coax port above the TV. This part was tricky because there are three separate coax connections and figuring out which one to use was confusing. I found [this forum post](https://www.jaycoowners.com/forums/f34/coax-connections-in-27dsrl-19274.html) which explained that Port A went directly to the outside port, so that was the one I wanted. 

![coax port A](/assets/img/articles/cell-booster/7-to-outside.jpg)

The "inside" cable needed to run to the inside antenna provided with the booster. I just mounted this antenna to the wall using the command strips that were included and then connected the coax cable.

![inside antenna](/assets/img/articles/cell-booster/8-to-inside.jpg)

At this point everything was pretty much good to go, the only thing left to do was to put up the antenna. I put the antenna pole next to my ladder and used a combination of velcro straps and niteize gear ties to secure the pole to the ladder.

![antenna raised](/assets/img/articles/cell-booster/9-antenna.jpg)

Then the outside coax port was just on the other side of the pole so all I had to do was screw in the wire from the antenna and it was all ready to go.

![antenna coax connection](/assets/img/articles/cell-booster/10-antenna-connection.jpg)

## Thoughts on performance

So far I've only had two campsites where I've needed to use the booster. The first was in [Alamosa, CO]({% post_url 2020-05-24-alamosa-colorado %}) and the second was in [Buford, WY]({% post_url 2020-08-24-buford-wyoming %}). In Alamosa there was great signal in the area, but I was down behind a hill and therefor was only able to get 1 bar and it would fade in and out. After putting up the antenna I got full bars and it was lightning fast and never cut out. In Buford I would bounce between 1 and 3 bars, occasionally losing all LTE. But even when it said I had LTE it was unreliable and I could only actually get data less than half the time. After putting up the booster my bars didn't really change but the signal became reliable and almost never cut out. In both cases the booster enabled me to stay for two weeks and work without a problem. 

One downside of this setup was that was apparent in both locations was wind. Since the pole goes so high, it can easily be damaged by wind and both of those locations were very windy. It would do fine until the wind was about 25-30mph and at that point I would have to lower the pole. In Buford the wind actually knocked it loose and the pole retracted itself once. The good thing is that even with the pole retracted and just sitting at the height of my rig it still improved the cell signal, so having to lower it isn't that big of a deal. 

The other tricky thing about this setup is getting it pointed in the right direction. There's a website called [Cell Mapper](https://www.cellmapper.net/map) that is supposed to show where the towers are in your area, however, I found I had better luck just making small adjustments to the pole and then checking my service. It can be a long process with a lot of trial and error, but I found I was often surprised where the best spot was because it didn't seem to line up with the cell mapper map. If you have another person with you that can check the service inside while you're adjusting the pole this process would be a lot easier.

## What would I do differently?

I think the only thing I would do differently is mount the inside antenna further way from the outside antenna. I think the recommended distance is 25', so when the pole is raised all the way up it's fine, however, if the pole is lowered there would not be that much distance with my current setup and this can cause interference. At some point I think I will move the inside antenna to the coax outlet in my bedroom, which could give me another 6 feet or so of space between the antennas. I think all I would need to do to make this work is put the jumper on the A and B ports of the coax above the TV, then install the antenna on the third port. I'm not positive about this though, and if I do try to make it work I may post a follow-up article. 

## Final thoughts

At about $650 this cell booster was not cheap but overall I'm happy with the purchase. Knowing that it has already given me service and enabled me to work in areas that I never could have before gives me peace of mind. If you're like me and have to have cell service to work, I think a good booster like this one is worth the investment. 

