Web Application L10N Tool
====================================

This program is a web application l10n tool which enables live translation of web application. Traditionally, translation of web application, or other native applications, was done by translators in a text by text manner, where they are given a list of messages to be translated and would return the translated text, often time without looking at the actual application. Or in case where the translator does reference the application during the translation process, it required them to switch from browser to a text editor throughout the whole translation process. This program aims to make this process more smooth by importing this process into the browser. Moreover, this program aims for a UI-aware translation by updating the elements spontaneously as the translation is completed and  visually alerting the translator by highlighting an element which has changed significantly (the threshold for a significant change can be customized). After the translation of each page is completed, translators can export their translations as a JSON text file. While this program is intended to be setup by developers and used by translators, it could also be useful for the developer responsible for i18n.


This program serves as the final project for COMS E6156 Topics in Software Engineering, instructed by Professor [Gail Kaiser](http://www.cs.columbia.edu/~kaiser/).

Dependencies
------------

-  JavaScript EC5 or later
-  jQuery (for DOM manipulation)
-  npm (to install bower)
-  Bower (for dependency management)


Or if you prefer not to use package managers, you can always add the sources with the html `<script>` tag.

Usage
------------

First install npm and [Bower](https://pypi.python.org/pypi/submarine):

    npm install bower


Then install this program and the dependencies with Bower:

    bower install faketraveler/webapp_l10n
    bower install

And on your html document, give all DOM element you wish to translate the class `.translation-target`. This will bind them to the function `openModal` with browser`click` event in `main.js`, which will open a modal for translation when the element is clicked.

In `statics` folder, sample modal with CSS and JavaScript (from [Bootstrap](http://getbootstrap.com/customize/)) for styling is included for usage/reference. You can use this sample modal or build your own modal. When creating your own modal, please make sure your modal has two html textareas or input with attributes `name="trans-id"` and `name="trans-message"`. You will also need at least two buttons with html ids `"export-translations"` and `"submit-translations"` for submitting the translations to a JSON file and later exporting JSON into a file.

For demo please visit [this page](http://www.columbia.edu/~jl4421/coms6156/stallman.html), featuring Richard Stallman's personal website loaded with this package.

License
-------

Copyright (c) 2017, Jong Ho Lee, except where noted.
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
