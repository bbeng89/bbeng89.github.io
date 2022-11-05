---
title: Solar Install
category: articles
layout: article
banner: /img/banners/articles/banner-solar-install.jpg
override_home_banner: false
description: "A step-by-step recap of my DIY 800W solar install"
---

After [installing an inverter]({% post_url articles/2019-10-14-electrical-upgrades %}), I decided the next electrical upgrade for my rig was adding solar panels to the roof. I knew this was going to be an expensive upgrade, so I held off on it for quite a while, however, the perfect opportunity came up while I was in Phoenix. I have a relative, Lee, that lives there and sells solar equipment and he told me he could get me a good deal on panels. He ended up finding me some 265W panels for $75 each, which is an amazing deal. At the same time, the COVID-19 crisis was in full swing, so I decided to meet up with my friends Matt and Kelsey. Matt had offered to help me with this install, and since there was nothing else to do it seemed like a perfect time to pick up these panels and work on them together. I decided to leave California and head back to Phoenix to pick up the panels, then meet Matt and Kelsey at a BLM boondocking spot in Las Cruces, NM.

## Planning

I had spent a lot of time planning this install before ever finding the panels, so I already had a good idea how I would wire them. I decided to wire the panels in parallel so that shading on one of the panels wouldn't take out the whole array. 

![wiring diagram]({{ site.cdn }}/img/articles/solar-install/01-wiring-diagram.jpg)

I decided to flat-mount the panels on the roof just for simplicity. Climbing up on the roof to tilt the panels seemed like it would be a pain. When the panels are flat-mounted, they aren't as efficient as they are when tilted or pointed directly at the sun. Because of this, I decided to get more panels than I really needed. I mapped out my roof and decided I could fit three of the 265W panels up there (though it was tight) so that was what I decided to go with.

![roof dimensions]({{ site.cdn }}/img/articles/solar-install/02-roof-drawing.jpg)

I then had to place about 10 orders on Amazon for wires, tools, etc. and had them all shipped to Lee's house in Phoenix. I met him in a Home Depot parking lot and picked up the panels and all the Amazon boxes, and took them out to Las Cruces the next morning. 

## Testing

The first thing Matt and I did was hook each panel up to the charge controller individually so that we could test them. 

![panels lined up]({{ site.cdn }}/img/articles/solar-install/03-panels.jpg)

![testing panel]({{ site.cdn }}/img/articles/solar-install/04-testing.jpg)

The charge controller I bought had bluetooth support, so I was able to check the voltage and current of each panel on my phone. All of the panels checked out.

![victron app]({{ site.cdn }}/img/articles/solar-install/05-victron.jpg)


## Building Brackets

Most of the pre-built brackets I could find for solar panels were only small Z-brackets that didn't look like they were designed for panels as large as the ones I got. I also didn't like the way they bottom-mounted on the panels because it seemed like it would be really hard to get the panel off without unscrewing them from the roof. I ended up deciding to build my own brackets out of angle aluminum.

Each bracket would have two pieces of angle aluminum - one that would have four screw holes and would be screwed into the roof, and one that had two bolt holes and would be bolted into the panel. The two pieces would then be bolted together with two bolts. Each panel would have 6 sets of these brackets (three on each side). This meant we needed the following hardware to build the brackets:

- (36) 12" pieces of 1.5" angle aluminum (432" total)
- (72) 5/16" x 1" bolts
- (72) 5/16" lock nuts
- (144) 1/4" flat washers
- (72) roofing screws

The angle aluminum came in 8' pieces, so we had to fire up the generator and use an angle grinder to cut 36 12" pieces.

![cutting angle aluminum]({{ site.cdn }}/img/articles/solar-install/06-cutting-angle.jpg)

![cut brackets]({{ site.cdn }}/img/articles/solar-install/07-cut-brackets.jpg)

The angle grinder left some pretty rough edges on the aluminum, so we had to file down the edges of all 36 pieces. This was a time consuming process and we ended up working on them into the night by headlamp.

![filing brackets]({{ site.cdn }}/img/articles/solar-install/08-filing.jpg)

After all the pieces of angle were ready, we had to drill the holes that would be used for bolts and screws. This was one of the longest and most tedious processes of the whole install. Each hole was measured and punched, then had a pilot hole drilled, then finally bored out to 5/16". 

![measuring and drilling brackets]({{ site.cdn }}/img/articles/solar-install/09-drilling-brackets.jpg)

We then assembled all the brackets with the hardware, and fastened them to the panels.

![assembled and fastened bracket]({{ site.cdn }}/img/articles/solar-install/10-fastened-bracket.jpg)

![all three assembled panels and brackets]({{ site.cdn }}/img/articles/solar-install/11-all-assembled-brackets.jpg)


## Routing Cables

With the brackets all built, the next thing we had to do was figure out where we were going to run the wires. They would need to come from the junction box on the roof, down to the pass-through storage in the front of the rig where the charge controller would be located. We decided that running the wires down along the gray tank vent in the center of the rig, then under the bath tub and out the floor next to the low point drains, would probably be our best bet. This way we didn't have to drill any new holes in the roof or the floor. Just to be sure the path was clear, we hooked a borescope up to my laptop, and ran it down along the path we were planning and watched on the screen for any obstructions.

![running borescope along gray vent]({{ site.cdn }}/img/articles/solar-install/12-borescope-roof.jpg)

We determined the path was clear, so we ran three wires (positive, negative, and ground) down the channel and were able to pull them out through the access panel behind the bath tub.

![wires pulled through access panel]({{ site.cdn }}/img/articles/solar-install/13-wires-access-panel.jpg)


From there we used the borescope again and ran the wires along the tub, then under the bathroom sink and finally outside by the low point drains. 

![borescope to locate exit for wires]({{ site.cdn }}/img/articles/solar-install/14-access-panel-borescope.jpg)

Once we pulled the wires out, we encased them in some corrugated plastic tubing and ran them along the frame. We screwed the ground wire into the chassis, then pulled the positive and negative wires up into the passthrough storage through a hole we drilled in the floor.

![wires running along frame]({{ site.cdn }}/img/articles/solar-install/15a-wire-routing.jpg)

![wires pulled through floor of passthrough storage]({{ site.cdn }}/img/articles/solar-install/15-wires-through-floor.jpg)

## Building the Junction Box

Now that we had all the wires in place, it was time to build the junction box, which would be mounted on the roof near our newly run wires. All the solar wires would come into this box and join together on a terminal block, which also hooked up to the wires we just ran through the roof. 

To build the box we used 3M VHB tape to fasten a terminal block to the bottom of a waterproof plastic box. We then drilled holes for all the solar wires that would be coming in (6 holes) and for the two wires that would be going out. We installed waterproof wire glands in these holes so that we could run the wires in and keep the box waterproof.

![junction box]({{ site.cdn }}/img/articles/solar-install/16-junction-box.jpg)

## Wiring Panels and Charge Controller

With the junction box ready to go and the wires in place it was time to haul the panels up onto the roof, screw them down, and wire everything together. The panels are each 3.3x5.5' and over 40lbs, so in order to get them on the roof we had to back a truck up next to the rig and stand on the tonneau cover, then lift each panel onto the roof. 

Once they were all up, we discovered our first major problem; the roof was much more curved in some areas than we thought. This created a big gap under one of the brackets.

![bracket gap]({{ site.cdn }}/img/articles/solar-install/17-bracket-gap.jpg)

We were able to make some adjustments to the bracket and fabricate an aluminum spacer so that the bracket with the gap was able to match the curvature of the roof.

![bracket gap fix]({{ site.cdn }}/img/articles/solar-install/18-bracket-gap-fixed.jpg)

With that problem solved, we could then lay out all the panels so that they were flush with the roof, then wire them all together into the junction box.

![roof wiring]({{ site.cdn }}/img/articles/solar-install/19-roof-wiring.jpg)

![junction box wired]({{ site.cdn }}/img/articles/solar-install/19a-roof-junction-box-wiring.jpg)

Now that the roof was all wired, it was time to mount the charge controller inside the pass-through storage, and then plug the wires we ran into it. We decided to install a disconnect switch between the panels and charge controller so that we could cut the power from the panels when we needed to. Finally, we ran a ground wire from the charge controller back down through the floor, which also connected to the same ground on the chassis as all the panels.

![charge controller wiring]({{ site.cdn }}/img/articles/solar-install/20-charge-controller.jpg)

At this point we had a fully working solar system. I even plugged my vacuum in and cleaned out all the sawdust in the passthrough storage area. The only thing left to do was fasten down all the panels and clean up the wiring.

## Fastening and Sealing Brackets

Everything was now in place and working. The last thing to do was fasten it all down. This was honestly the scariest part for me, because drilling holes in your RV roof is shady business. It had to be done though, and we made sure to do it right. 

We started by putting VHB tape under all of the brackets. Some RV solar installs on rigs with aluminum roofs, like Airstreams, only use this mounting method; they don't use any screws at all. However, my roof has a rubber membrane and these panels were pretty monstrous so there's no way that was going to work. So after securing them with VHB tape, we then put 4 screws into the roof on each bracket for a total of 24 screws per panel. Each screw was hand-tightened to make sure we had the right torque on it. 

Now I had 72 holes in my roof, so they all needed to be sealed up and waterproofed. The go-to product for this on RV roofs is Dicor, which is a self-leveling lap sealant. We used a whole tube of Dicor on each panel, going all the way around each bracket and covering every screw. We actually had to disassemble and remove all the panels in order to get Dicor on the back side of each bracket, then put the panels back on. This process took us two days alone. 

![dicor on brackets]({{ site.cdn }}/img/articles/solar-install/21-dicor.jpg)

Once all the brackets were sealed, we had to install a new gray tank vent, which would also seal the wires going into the rig. I decided to replace the old vent with a Camco Cyclone vent, and sealed it all up with Dicor.

![cyclone vent]({{ site.cdn }}/img/articles/solar-install/21a-cyclone-vent.jpg)

We finished by tidying up the cables with zip ties and making everything look clean and professional.

![completed install]({{ site.cdn }}/img/articles/solar-install/22-completed.jpg)

## Conclusion

This project ended up being a much bigger chore than I had ever imagined. I thought it would take maybe 2-3 days, but it ended up taking us 7 full days. However,  all our hard work paid off because I couldn't be happier with the end result. The panels are secure on the roof and generating a ton of power. They are actually providing so much power that Matt and Kelsey have just plugged their rig into mine and are also running off my system.

I was also amazed at how my friends came out to help me with this. Lee and his co-worker Bill spent time hunting the panels down, talking through all the wiring and equipment with me, and then facilitating getting everything to me in Phoenix. Then Matt spent an entire week helping me install it all. The installation days were long as we would start at 7:30AM and work into the evening. At times we were exhausted and morale was low, but we pushed through and got it done. I'm thankful to have friends that are willing to do all of this for me, and now I just hope I can eventually return the favor.

<div class="img-slider">
    <img src="{{ site.cdn }}/img/articles/solar-install/insta/solar-insta-1.jpg">
    <img src="{{ site.cdn }}/img/articles/solar-install/insta/solar-insta-2.jpg">
    <img src="{{ site.cdn }}/img/articles/solar-install/insta/solar-insta-3.jpg">
    <img src="{{ site.cdn }}/img/articles/solar-install/insta/solar-insta-4.jpg">
    <img src="{{ site.cdn }}/img/articles/solar-install/insta/solar-insta-5.jpg">
</div>

## Parts List

<hr/>

**Main Components**
- SolarWorld Sunmodule SW265 Mono Panel (x3)
- [Victron Energy SmartSolar MPPT 100/50 Charge Controller](https://www.solar-electric.com/victron-energy-smartsolar-mppt-100-50-charge-controller.html)

**Brackets**
- [1-1/2 in. x 96 in. Aluminum Angle 1/16 in. Thick](https://www.homedepot.com/p/Everbilt-1-1-2-in-x-96-in-Aluminum-Angle-with-1-16-in-Thick-802597/204273989) (x5)
- [5/16 in.-18 x 1 in. Zinc Plated Hex Bolt (50-pack)](https://www.homedepot.com/p/Everbilt-5-16-in-18-x-1-in-Zinc-Plated-Hex-Bolt-50-Pack-800710/204281546) (x2)
- [5/16 in.-18 Zinc Plated Nylon Lock Nut (15-Pack)](https://www.homedepot.com/p/Everbilt-5-16-in-18-Zinc-Plated-Nylon-Lock-Nut-15-Pack-802622/204325605) (x5)
- [1/4 in. Zinc Flat Washer (100-Pack)](https://www.homedepot.com/p/Everbilt-1-4-in-Zinc-Flat-Washer-100-Pack-800452/204276405) (x2)
- [#9 x 1 in. Steel External Hex Head Washer Sharp Point Roofing Screws (120-Pack)](https://www.homedepot.com/p/Teks-9-x-1-in-Steel-External-Hex-Head-Washer-Sharp-Point-Roofing-Screws-120-Pack-21400/100128842?MERCH=REC-_-pipsem-_-206024079-_-100128842-_-N)

**Wiring**
- 30 ft. red and black 8 AWG wire (junction box to charge controller)
- 30 ft. green 12 AWG wire (junction box and charge controller to chassis ground)
- 10 ft. red and black 6 AWG wire (charge controller to battery)
- 20 ft. black 10 AWG PV wire (panels to junction box)
- [Flex wire tubing](https://www.homedepot.com/p/Gardner-Bender-3-8-in-and-1-2-in-Flex-Tubing-7-ft-and-10-ft-Combo-Pack-FLX-538C10/205588197)
- [Rubber insulated cable clamps](https://www.homedepot.com/p/Gardner-Bender-0-5-in-Rubber-Insulated-Clamp-2-Pack-PPR-1550/202875615?MERCH=REC-_-pipsem-_-100150329-_-202875615-_-N)
- [50 amp fuse](https://www.amazon.com/gp/product/B07SKBR9TZ/ref=ppx_yo_dt_b_asin_title_o04_s01?ie=UTF8&psc=1) (charge controller to battery - needs to be replaced as it keeps tripping at 40 amps)
- [Odyssey 20A MC4 Solar PV In-Line Fuse](https://www.amazon.com/gp/product/B00J948E4W/ref=ppx_yo_dt_b_asin_title_o04_s05?ie=UTF8&psc=1) (x3)

**Junction Box**
- [Ogrmar Plastic Dustproof IP65 Junction Box](https://www.amazon.com/gp/product/B0786ZLFSV/ref=ppx_yo_dt_b_asin_title_o04_s02?ie=UTF8&psc=1)
- [Dinkle Solar Combiner](https://www.amazon.com/gp/product/B01F47OZZE/ref=ppx_yo_dt_b_asin_title_o04_s05?ie=UTF8&psc=1)
- [TUPARKA 50 Pack Cable Gland Waterproof Adjustable 3-16mm Cable Connectors](https://www.amazon.com/gp/product/B07KFCGFYF/ref=ppx_yo_dt_b_asin_title_o04_s04?ie=UTF8&psc=1)



**Tools and Misc.**

- [MC4 crimping kit](https://www.amazon.com/gp/product/B081C3C3GY/ref=ppx_yo_dt_b_asin_title_o04_s05?ie=UTF8&psc=1)
- [3M Scotch 5952 VHB Tape: 1 in. x 15 ft.](https://www.amazon.com/gp/product/B01BU7038A/ref=ppx_yo_dt_b_asin_title_o04_s05?ie=UTF8&psc=1) (x2)
- [Dicor](https://www.amazon.com/gp/product/B000BRF7QE/ref=ppx_yo_dt_b_asin_title_o04_s03?ie=UTF8&psc=1) (x4)
- [Camco Cyclone Vent](https://www.amazon.com/gp/product/B00SQ1K19A/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1)
- [DEPSTECH USB Borescope](https://www.amazon.com/gp/product/B07ZF6SBFK/ref=ppx_yo_dt_b_asin_title_o02_s00?ie=UTF8&psc=1)
- [WolfWise Aluminum Telescopic Extension Ladder](https://www.amazon.com/gp/product/B01B2OFNHM/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1)