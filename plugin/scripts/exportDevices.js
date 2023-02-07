chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, value, options  } = obj;
    if (type == "SCRIPT" && value == "exportDevices") {
        downloadData(options.fileName);
    }
})

async function downloadData(fileName) {
    
    let getUrl = window.location;
    let baseUrl = getUrl.protocol + "//" + getUrl.host;

    // This is the function that does the API calls to get the device information.
    const getDevices = async function() {
        console.log("Fetching list of devices");
        let url = baseUrl + "/apiUrlGoesHere";
        let devices = await fetch(url).then(r => r.json());
        // Make sure to only get a list of these devices...
        return devices
    }

    const downloadFile = (fileName, data) => {
        var file = new Blob([data], {type: "text/csv"});
        var a = document.createElement("a");
        var url = URL.createObjectURL(file);
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
    }

    // CSV HEADER
    fileOutput = "Device,MAC,IP";

    // Comment out this line, and uncomment the line below it.
    let devices = [];
    // let devices = await getDevices();

    for (device of devices) {
        console.log(device);
        // Uncomment the following line and add the real data.
        // fileOutput = fileOutput + "\n" + [device.Name,device.IP, device.MAC].join(",");
    }

    console.log("done");
    downloadFile(fileName, fileOutput);

}

