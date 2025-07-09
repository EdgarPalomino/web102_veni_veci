# WEB102 Project 4 - Math Trivia

Submitted by: **Edgar Palomino**

**Discover Classical Music** is a website where classical music enthusiasts can find out about new composers they don't know about yet.

Time spent: **5** hours spent in total

## Required Features

The following **required** functionality is completed:

* [X] Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data.
* [X] Only one item/data from API call response is viewable at a time and at least one image is displayed per API call.
* [X] API call response results should appear random to the user.
* [X] Clicking on a displayed value for one attribute adds it to a displayed ban list.
* [X] Attributes on the ban list prevent further images/API results with that attribute from being displayed.

The following **optional** features are implemented:

* [X] Multiple types of attributes are clickable and can be added to the ban list.
* [X] Users can see a stored history of their previously displayed results from this session.

## Video Walkthrough

Here's a walkthrough of implemented features:

<img src='Animation.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ScreenToGif

## Notes

It was a bit difficult for me to figure out when specifically to make the calls to the Open Opus API and also the ways in which I should handle the state renderings with the addition of asynchronous JavaScript. However, in the end I was able to understand how approach these challenges after studying how the JavaScript Fetch API and the React useEffect hook work!

## License

    Copyright [2025] [Edgar Palomino]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
