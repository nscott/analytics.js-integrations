
0.4.3 / 2014-02-26
==================

 * google-analytics: dont send user id by default

0.4.2 / 2014-02-26
==================

 * google-analytics: send universal user id, closes #59
 * churnbee: use an object instead of array for supported events
 * intercom: remove counter option

0.4.1 / 2014-02-18
==================

 * saasquatch: add checksum, accountId and image support, closes #58
 * intercom: update track()
 * lytics: not tracking pageview fix

0.4.0 / 2014-02-10
==================

 * upgrade facade to `0.2.7`
 * adwords: fix mappnigs, closes #49
 * add [Mojn](https://mojn.com)
 * add [SaaSquatch](http://www.referralsaasquatch.com/)
 * add [ChurnBee](http://churnbee.com)
 * add [Bing Ads](http://advertise.bingads.microsoft.com/)
 * add [Twitter Ads](http://ads.twitter.com/)
 * Update to raven-js 1.1.10 [mattrobenolt]
 * foxmetrics: add ecommerce
 * kissmetrics: add ecommerce
 * gosquared: add ecommerce
 * bronto: add ecommerce
 * curebit: add ecommerce
 * google-analytics: add ecommerce
 * google analytics: fix page url property name
 * upgrade analytics.js-integration to `0.1.7`

0.3.10 / 2014-01-30
==================

 * upgrade facade to 0.2.4
 * upgrade analytics.js-integration to 0.1.7
 * add group option to livechat

0.3.9 / 2014-01-23
==================

 * add [Bronto](http://bronto.com/).
 * add [Curebit](http://www.curebit.com/)

0.3.8 / 2014-01-18
==================

 * rename facebook to facebook ads

0.3.7 / 2014-01-15
==================

 * update Facade to 0.2.3
 * gosquared: update tracker
 * add [Facebook](https://www.facebook.com/advertising)
 * add [AdWords](https://adwords.google.com/)
 * add [Mouseflow](http://mouseflow.com/)
 * usercycle: map `revenue` to `revenue_amount`

0.3.6 / 2014-01-10
==================

 * intercom: send created_at and name correctly

0.3.5 - January 3, 2014
-----------------------
 * add slugs.json

0.3.4 - December 26, 2013
-------------------------
 * add intercom track

0.3.3 - December 18, 2013
-------------------------
* update obj-case, fixes problems with amd
* add require.js to test file

0.3.2 - December 18, 2013
-------------------------
* fix `segmentio/facade` dependency

0.3.1 - December 18, 2013
-------------------------
* add [Google Tag Manager](https://www.google.com/tagmanager/)
* lucky orange: fix identify bug

0.3.0 - December 12, 2013
-------------------------
* add [facade](https://github.com/segmentio/facade)

0.2.16 - December 11, 2013
--------------------------
* google-analytics: add support for retaining query string in page views

0.2.15 - December 11, 2013
--------------------------
 * webengage: load in initialize

0.2.14 - December 11, 2013
--------------------------
 * add [WebEngage](http://webengage.com)
 * heap: fallback to user id as `.handle`

0.2.13 - December 4, 2013
-------------------------
* uservoice: add `smartvote` option
* errorception: fix bug in sending errors

0.2.12 - December 2, 2013
-------------------------
* mixpanel: fix `track` date conversion

0.2.11 - November 26, 2013
--------------------------
* update `analytics.js-integration` to `0.1.5`

0.2.10 - November 21, 2013
--------------------------
* optimizely: adding .page() support

0.2.9 - November 21, 2013
-------------------------
* awesomatic: fix identify logic

0.2.8 - November 20, 2013
-------------------------
* hubspot: update CDN url

0.2.7 - November 20, 2013
-------------------------
* evergage: add tracking of page name and properties

0.2.6 - November 15, 2013
-------------------------
* updating dependencies

0.2.5 - November 14, 2013
-------------------------
* heap: adding fixes for heap snippet

0.2.4 - November 13, 2013
-------------------------
* adroll: fix custom data key name

0.2.3 - November 12, 2013
-------------------------
* woopra: remove assumesPageview

0.2.2 - November 12, 2013
-------------------------
* optimizely: fix case where snippet does not exist

0.2.1 - November 12, 2013
-------------------------
* awesomatic: fix global loaded check
* bugsnag: fix global loaded check
* clicktale: fix global loaded check
* clicky: fix global loaded check
* drip: fix global loaded check
* hittail: fix global loaded check
* intercom: fix global loaded check
* kissmetrics: fix global loaded check
* mousestats: fix global loaded check
* sentry: fix global loaded check
* snapengage: fix global loaded check

0.2.0 - November 11, 2013
-------------------------
* bugsnag: add bugsnag integration
* lucky-orange: added lucky orange integration
* drip: add drip integration
* inspectlet: add tagging session on track

0.1.2 - November 11, 2013
-------------------------
* preact: fixing load called from initialize

0.1.1 - November 11, 2013
-------------------------
* rename `section` argument to `category`
* change categorized page track logic

0.1.0 - November 10, 2013
-------------------------
* add `loaded` method to all integrations
* change integrations to use the new `page` method signature with `section`

0.0.6 - November 10, 2013
-------------------------
* lytics: remove unused `initialPageview` option
* google analytics: fix classic tests to use non-classic method names
* mixpanel: remove `assumesPageview` setting
* clean all integration files

0.0.5 - November 10, 2013
-------------------------
* add fixes for wrapped loaders GA and UserVoice

0.0.4 - November 8, 2013
------------------------
* exports: actually exporting the integrations

0.0.3 - November 8, 2013
------------------------
* quantcast: change page labels to be behind an option
* quantcast: remove event labels

0.0.2 - November 7, 2013
------------------------
* fix `next-tick` dependency

0.0.1 - November 6, 2013
------------------------
:sparkles:
