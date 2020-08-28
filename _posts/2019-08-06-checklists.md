---
title: Setup and Teardown Checklists
date: 2019-08-06
category: articles
layout: article
banner: 
override_home_banner: false
description: "All of the setup and teardown checklists I use, including links to interactive checklist apps you can customize and use yourself"
---

<p>
    The following are the checklists I run through each time I set up and tear down. I know these lists are long and verbose, but in my experience it's the small details that you forget.
    Also, parts of these lists are going to be specific to my setup. I'm using a LevelMate Pro with Beech Lane (Andersen style) levelers. I also have a bumper-pull with an Equal-i-zer hitch.
</p>
<p>
    Each list can be loaded in an interactive checklist app that will let you check items off on your smartphone as you're setting up or tearing down. The apps will let you customize the lists to your own needs if your setup is different than mine (customizations will only be saved to the specific device you're using). Bookmark each list to get back to them quickly in the future.
</p>

<div class="row mt-5 mb-5">
    <div class="col-lg-5 col-md-8">
        <div class="list-group">
            <a href="#setup-full-hookups" class="list-group-item list-group-item-action">Setup (Full Hookups)</a>
            <a href="#setup-partial-hookups" class="list-group-item list-group-item-action">Setup (Partial Hookups)</a>
            <a href="#teardown-full-hookups" class="list-group-item list-group-item-action">Teardown (Full Hookups)</a>
            <a href="#teardown-partial-hookups" class="list-group-item list-group-item-action">Teardown (Partial Hookups)</a>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-lg-6">
        <h2 id="setup-full-hookups">Setup (Full Hookups)</h2>
        <ol style="min-height: 400px">
            {% for step in site.data.checklists.setup.full_hookups %}
                <li>{{ step }}</li>
            {% endfor %}
        </ol>
        <div class="mb-5 mt-3 ">
            <a href="/apps/checklists/setup/full-hookups" class="btn btn-lg btn-outline-primary">Open in Checklist App</a>
        </div>
    </div>
    <div class="col-lg-6">
        <h2 id="setup-partial-hookups">Setup (Partial Hookups)</h2>
        <ol style="min-height: 400px">
            {% for step in site.data.checklists.setup.partial_hookups %}
                <li>{{ step }}</li>
            {% endfor %}
        </ol>
        <div class="mb-5 mt-3 ">
            <a href="/apps/checklists/setup/partial-hookups" class="btn btn-lg btn-outline-primary">Open in Checklist App</a>
        </div>
    </div>
</div>
<hr/>
<div class="row">
    <div class="col-lg-6">
        <h2 id="teardown-full-hookups">Teardown (Full Hookups)</h2>
        <ol style="min-height: 760px">
            {% for step in site.data.checklists.teardown.full_hookups %}
                <li>{{ step }}</li>
            {% endfor %}
        </ol>
        <div class="mb-5 mt-3 ">
            <a href="/apps/checklists/teardown/full-hookups" class="btn btn-lg btn-outline-primary">Open in Checklist App</a>
        </div>
    </div>
    <div class="col-lg-6">
        <h2 id="teardown-partial-hookups">Teardown (Partial Hookups)</h2>
        <ol style="min-height:760px">
            {% for step in site.data.checklists.teardown.partial_hookups %}
                <li>{{ step }}</li>
            {% endfor %}
        </ol>
        <div class="mb-5 mt-3 ">
            <a href="/apps/checklists/teardown/partial-hookups" class="btn btn-lg btn-outline-primary">Open in Checklist App</a>
        </div>
    </div>
</div>
