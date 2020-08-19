---
title: Getting started with static site generators — python
slug: getting-started-with-static-site-generators-python
author: dennoh peter
excerpt: 'Websites can be divided into two groups: dynamic and static. What are the differences between them? Well, you about to find this out and much more in this article.'
published: 2020-03-20
last_update: 2020-03-20
cover: 

    - static_websites

tags: 

    - statik
    - python

toc: ''

---

This article is not another long story you read out there, it's short, brief yet informative at the same time. It introduces you to static website generators in general, but later we will narrow down to building something useful with [Statik](https://getStatik.com) — a static site generator for Python.

With that said, here is the reason why this article is worthy your time. By the end, you will have learned :-

* What's a static site generator

* How static sites work

* How dynamic sites work

* Why static websites

* And Limits of static websites

* Ideal use cases for static websites

## What's a static site generator

A **static site generator** is tool for generating static websites. It takes a set of source files and generates an entirely **static website** ready for **deployment**. This gives you more freedom to write your own HTML  and text in various format like Markdown, reStructured Text Format, yaml and many others.

## So how do static sites work?

Well, a static site refers to collection of pages that are contained in basic HTML, css and js files and served to the user as-is. This makes them to look the same for every user. You can then take these generated files and deploy them to any hosting provider.

## How about dynamic sites?

With dynamic websites, content rendered to user is from database, so it's (**database-driven content**). This means content displayed might be different for different users depending on there activity, location or time of the day.
There is a [Common Gateway Interface]() **CGI** that enables websites, front-end to communicate with the database, back-end.
Thus dynamic websites are more powerful yet complex to develop compared to static sites discussed above.
This leads us to careful analysis of the trade-offs where we discuss why static? What does it offer attractive? and of course what is misses.

## So Why static websites?

#### They are Fast

By being fast we are referring to load time. This is because :-

* There is no database queries to get data to be displayed.
* There is no templates to render.

* No client-server requests to process.

#### They are Secure

Since there is no database abstraction, attacks like SQL injection don't exist, this makes them damn secure.

#### They are Cheap

Cheap as in no-to less hosting and maintenance procedures and database setup to do. You only provide your static files for hosting and thats it.

#### Lastly, they are scalable

High unexpected traffic surges can crash your dynamic site. A static website is far ideal since delivering static website consumes very little resources.

Everything has limits and  this is no exceptional.

## Limits of static websites

* There is **no content management system CMS**, for non developers.

* **There is no user inputs** like user forms, emails subscription.

    However this limit depends on your hosting provider, some like Netlify provide forms tags that you can use in your website and any form submission from your website will be delivered to you Netlify dashboard
    Or if you are thee guy, you can integrate a third party for handling your user inputs or build yours from scratch using ajax and deliver them to a particular endpoint.

* **There is no user login**

    This is because there is no database to lookup to. Work around for this is to use third party authentication clients like google auth, github auth etc.

* **There is no real time content**

    This means that for you to update your website you need to regenerate the whole website again with the updated content.

That's it as far as I know about static sites limits. Let's see some use cases for static websites

## Hmm, so what are some uses cases for static websites?

* Static websites are ideal for making portfolios. Some notable examples:  [Tania Rascia](https://taniarascia.com), [Chester How](https://chester.how), [Nehalist](https://nehalist.io), [Dennoh Peter](https://dennohpeter.com) and so many others.

* Personal blogs are basically just text with images exactly what a static website needs.

* Information websites like: [Amani Center](https://amanicenter.netlify.com), [Spotify Developer Documentation](https://developer.spotify.com), [Markdown Guide](https://www.markdownguide.org).

* Landing pages are another great option, or any websites that is designed to showcase a product's key features.

## What Next

If your interest is intrigued, you might need to take a look at [StaticGen](https://www.staticgen.com) and you will see a  wide variety of available static site generators in the market that are language language specific, meaning you will have short learning curve to get started.

My static generator of choice is [Statik](https://getstatik.com), in the next article I will be telling you why [Statik](https://getstatik.com) in dozen of static site generators out there. Until then, watch this space!

