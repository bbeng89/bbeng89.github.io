---
title: Solar Install
category: articles
layout: article
banner: /assets/img/banners/articles/banner-solar-install.jpg
override_home_banner: false
---

After [installing an inverter]({% post_url 2019-10-14-electrical-upgrades %}), I decided the next electrical upgrade for my rig was adding solar panels to the roof. I knew this was going to be an expensive upgrade, so I held off on it for quite a while, however, the perfect opportunity came up while I was in Phoenix. I have a relative, Lee, that lives there and sells solar equipment and he told me he could get me a good deal on panels. He ended up finding me some 265W panels for $75 each, which is an amazing deal. At the same time, the COVID-19 crisis was in full swing, so I decided to meet up with my friends Matt and Kelsey. Matt had offered to help me with this install, and since there was nothing else to do it seemed like a perfect time to pick up these panels and work on them together. I decided to leave California and head back to Phoenix to pick up the panels, then meet Matt and Kelsey at a BLM boondocking spot in Las Cruces, NM.

## Planning

I had spent a lot of time planning this install before ever finding the panels, so I already had a good idea how I would wire them. I decided to wire the panels in parallel so that shading on one of the panels wouldn't take out the whole array. 

![wiring diagram](/assets/img/articles/solar-install/01-wiring-diagram.jpg)

I decided to flat-mount the panels on the roof just for simplicity. Climbing up on the roof to tilt the panels seemed like it would be a pain. When the panels are flat-mounted, they aren't as efficient as they are when tilted or pointed directly at the sun. Because of this, I decided to get more panels than I really needed. I mapped out my roof and decided I could fit three of the 265W panels up there (though it was tight) so that was what I decided to go with.

![roof dimensions](/assets/img/articles/solar-install/02-roof-drawing.jpg)

I then had to place about 10 orders on Amazon for wires, tools, etc. and had them all shipped to Lee's house in Phoenix. I met him in a Home Depot parking lot and picking up the panels and all the Amazon boxes, and took them out to Las Cruces the next morning. 

## Testing

The first thing Matt and I did was hook each panel up to the charge controller individually so that we could test them. 

![panels lined up](/assets/img/articles/solar-install/03-panels.jpg)

![testing panel](/assets/img/articles/solar-install/04-testing.jpg)

The charge controller I bought had bluetooth support, so I was able to check the voltage and current of each panel on my phone. All of the panels checked out.

![victron app](/assets/img/articles/solar-install/05-victron.jpg)


## Building Brackets

Most of the pre-built brackets I could find for solar panels were only small Z-brackets that didn't look like they were designed for panels as large as the ones I got. I also didn't like the way they bottom-mounted on the panels because it seemed like it would be really hard to get the panel off without unscrewing them from the roof. I ended up deciding to build my own brackets out of angle aluminum.

Each bracket would have two pieces of angle aluminum - one that would have four screw holes and would be screwed into the roof, and one that had two bolt holes and would be bolted into the panel. The two pieces would then be bolted together with two bolts. Each panel would have 6 sets of these brackets (three on each side). This meant we needed the following hardware to build the brackets:

- (36) 12" pieces of 1.5" angle aluminum (432" total)
- (72) 5/16" x 1" bolts
- (72) 5/16" lock nuts
- (144) 1/4" flat washers
- (72) roofing screws

The angle aluminum came in 8' pieces, so we had to fire up the generator and use an angle grinder to cut 36 12" pieces.

![cutting angle aluminum](/assets/img/articles/solar-install/06-cutting-angle.jpg)

![cut brackets](/assets/img/articles/solar-install/07-cut-brackets.jpg)

The angle grinder left some pretty rough edges on the aluminum, so we had to file down the edges of all 36 pieces. This was a time consuming process and we ended up working on them into the night by headlamp.

![filing brackets](/assets/img/articles/solar-install/08-filing.jpg)

After all the pieces of angle were ready, we had to drill the holes that would be used for bolts and screws. This was one of the longest and most tedious processes of the whole install. Each hole was measured and punched, then had a pilot hole drilled, then finally bored out to 5/16". 

![measuring and drilling brackets](/assets/img/articles/solar-install/09-drilling-brackets.jpg)

We then assembled all the brackets with the hardware, and fastened them to the panels.

![assembled and fastened bracket](/assets/img/articles/solar-install/10-fastened-bracket.jpg)

![all three assembled panels and brackets](/assets/img/articles/solar-install/11-all-assembled-brackets.jpg)


## Routing Cables

With the brackets all built, the next thing we had to do was figure out where we were going to run the wires. They would need to come from the junction box on the roof, down to the pass-through storage in the front of the rig where the charge controller would be located. We decided that running the wires down along the gray tank vent in the center of the rig, then under the bath tub and out the floor next to the low point drains, would probably be our best bet. This way we didn't have to drill any new holes in the roof or the floor. Just to be sure the path was clear, we hooked a borescope up to my laptop, and ran it down along the path we were planning and watched on the screen for any obstructions.

![running borescope along gray vent](/assets/img/articles/solar-install/12-borescope-roof.jpg)

We determined the path was clear, so we ran three wires (positive, negative, and ground) down the channel and were able to pull them out through the access panel behind the bath tub.

![wires pulled through access panel](/assets/img/articles/solar-install/13-wires-access-panel.jpg)


From there we used the borescope again and ran the wires along the tub, then under the bathroom sink and finally outside by the low point drains. 

![borescope to locate exit for wires](/assets/img/articles/solar-install/14-access-panel-borescope.jpg)

Once we pulled the wires out, we encased them in some corrugated plastic tubing and ran them along the frame. We screwed the ground wire into the chassis, then pulled the positive and negative wires up into the passthrough storage through a hole we drilled in the floor.

![wires running along frame](/assets/img/articles/solar-install/15a-wire-routing.jpg)

![wires pulled through floor of passthrough storage](/assets/img/articles/solar-install/15-wires-through-floor.jpg)

## Building the Junction Box

Now that we had all the wires in place, it was time to build the junction box, which would be mounted on the roof near our newly run wires. All the solar wires would come into this box and join together on a terminal block, which also hooked up to the wires we just ran through the roof. 

To build the box we used 3M VHB tape to fasten a terminal block to the bottom of a waterproof plastic box. We then drilled holes for all the solar wires that would be coming in (6 holes) and for the two wires that would be going out. We installed waterproof wire glands in these holes so that we could run the wires in and keep the box waterproof.

![junction box](/assets/img/articles/solar-install/16-junction-box.jpg)

## Wiring Panels and Charge Controller

With the junction box ready to go and the wires in place it was time to haul the panels up onto the roof, screw them down, and wire everything together. The panels are each 3.3x5.5' and over 40lbs, so in order to get them on the roof we had to back a truck up next to the rig and stand on the tonneau cover, then lift each panel onto the roof. 

Once they were all up, we discovered our first major problem; the roof was much more curved in some areas than we thought. This created a big gap under one of the brackets.

![bracket gap](/assets/img/articles/solar-install/17-bracket-gap.jpg)

We were able to make some adjustments to the bracket and fabricate an aluminum spacer so that the bracket with the gap was able to match the curvature of the roof.

![bracket gap fix](/assets/img/articles/solar-install/18-bracket-gap-fixed.jpg)

With that problem solved, we could then lay out all the panels so that they were flush with the roof, then wire them all together into the junction box.

![roof wiring](/assets/img/articles/solar-install/19-roof-wiring.jpg)

![junction box wired](/assets/img/articles/solar-install/19a-roof-junction-box-wiring.jpg)

Now that the roof was all wired, it was time to mount the charge controller inside the pass-through storage, and then plug the wires we ran into it. We decided to install a disconnect switch between the panels and charge controller so that we could cut the power from the panels when we needed to. Finally, we ran a ground wire from the charge controller back down through the floor, which also connected to the same ground on the chassis as all the panels.

![charge controller wiring](/assets/img/articles/solar-install/20-charge-controller.jpg)

At this point we had a fully working solar system. I even plugged my vacuum in and cleaned out all the sawdust in the passthrough storage area. The only thing left to do was fasten down all the panels and clean up the wiring.

## Fastening and Sealing Brackets

Everything was now in place and working. The last thing to do was fasten it all down. This was honestly the scariest part for me, because drilling holes in your RV roof is shady business. It had to be done though, and we made sure to do it right. 

We started by putting VHB tape under all of the brackets. Some RV solar installs on rigs with aluminum roofs, like Airstreams, only use this mounting method; they don't use any screws at all. However, my roof has a rubber membrane and these panels were pretty monstrous so there's no way that was going to work. So after securing them with VHB tape, we then put 4 screws into the roof on each bracket for a total of 24 screws per panel. Each screw was hand-tightened to make sure we had the right torque on it. 

Now I had 72 holes in my roof, so they all needed to be sealed up and waterproofed. The go-to product for this on RV roofs is Dicor, which is a self-leveling lap sealant. We used a whole tube of Dicor on each panel, going all the way around each bracket and covering every screw. We actually had to disassemble and remove all the panels in order to get Dicor on the back side of each bracket, then put the panels back on. This process took us two days alone. 

![dicor on brackets](/assets/img/articles/solar-install/21-dicor.jpg)

Once all the brackets were sealed, we had to install a new gray tank vent, which would also seal the wires going into the rig. I decided to replace the old vent with a Camco Cyclone vent, and sealed it all up with Dicor.

![cyclone vent](/assets/img/articles/solar-install/21a-cyclone-vent.jpg)

We finished by tidying up the cables with zip ties and making everything look clean and professional.

![completed install](/assets/img/articles/solar-install/22-completed.jpg)

## Conclusion

This project ended up being a much bigger chore than I had ever imagined. I thought it would take maybe 2-3 days, but it ended up taking us 7 full days. However,  all our hard work paid off because I couldn't be happier with the end result. The panels are secure on the roof and generating a ton of power. They are actually providing so much power that Matt and Kelsey have just plugged their rig into mine and are also running off my system.

I was also amazed at how my friends came out to help me with this. Lee and his co-worker Bill spent time hunting the panels down, talking through all the wiring and equipment with me, and then facilitating getting everything to me in Phoenix. Then Matt spent an entire week helping me install it all. The installation days were long as we would start at 7:30AM and work into the evening. At times we were exhausted and morale was low, but we pushed through and got it done. I'm thankful to have friends that are willing to do all of this for me, and now I just hope I can eventually return the favor.

<div class="insta">
<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/B-z5kdIAlT9/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/B-z5kdIAlT9/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div></a> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/B-z5kdIAlT9/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">It’s finally done... we installed 800W of solar on the roof of my rig while camped on some BLM land in Las Cruces. Huge thank you to everyone that helped make this happen - @debrakjell and Lee for hooking me up with an amazing deal on the panels, and especially my buddy Matt for spending a week of his life on the roof of my rig under the intense New Mexico sun. There’s no way I could have done this one alone.</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A post shared by <a href="https://www.instagram.com/bbeng89/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank"> Blake Bengtson</a> (@bbeng89) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2020-04-10T18:47:00+00:00">Apr 10, 2020 at 11:47am PDT</time></p></div></blockquote>
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