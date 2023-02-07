# HostiFiChromePlugin

## Overview

This Chrome extension was developed by Will Blanton to run various JavaScript snippets to make life a work easier for me and my team. The original extension looked at the URL to determine what script should be run on that particular page. Therefore, there are some coding decisions that may seem odd, but it was designed to be a flexible, multi-purpose plugin. The framework has been reformatted for use by HostiFi to develop their "Device Export" tool. 

Feel free to refactor as needed to simply. For example, you may want to get rid of the popup menu and subsequent form entirely, so feel free. Again, the framework was designed because there were often multiple scripts that could be run on any given page, so this allowed the user to select which script to run.

## Installing the Extension

Installing the extension is very straightforward. All you need to do is download the repository by clicking the download icon beside the clone URL for the repo and selecting "Download Zip". Once downloaded, open the zip file and select "Extract All" and save it to somewhere save. It's also find to leave it in your Downloads folder, just make sure you don't delete it.

Next, open up your Chrome browser and click the 3 dots in the top right corner. Then go down to "More tools > Extensions" to bring up the extensions page. 

![Chrome Extensions Menu Location](https://github.com/FreeWillyB/HostiFiChromePlugin/raw/branch/master/readme-images/extension-page.png)

In the very top right corner, click switch button to enable "Developer Mode". Lastly, click on the "Load unpacked" button in the top left corner, then go to the "Plugin" folder in the location you extracted it to earlier and select the "plugin" directory. Once you hit "Select Folder", you should now have an extension called "Unifi Device Export Utility" loaded in the browser.

![Load Unpacked Plugin](https://github.com/FreeWillyB/HostiFiChromePlugin/raw/branch/master/readme-images/load-unpacked.png)

## Updating the Extension

To update the extension, download the latest version as outlined above. Extract the contents of the zip file to the same directory as before, making sure to overwrite any existing files. Once the files have been updated, open up the Chrome extensions page again, except this time click on the circle in the bottom right hand corner of the "Unifi Device Export Utility" card. You should now see an updated version number. 

## Running the Extension

In order to run the script, just click on the icon for the extension to see the pop up window. There should be a list of available scripts for that page with a "Run" button beside them. Find the script you want to run and hit the "Run" button. If there are any additional inputs required, a form will show at the bottom of the page with any default values pre-filled. Once you hit the "submit" button, the script will run according to the values in the form.
