import { getActiveTabURL } from "./utils.js";

const callScript = async (targetScript, options) => {
    const activeTab = await getActiveTabURL();
    chrome.tabs.sendMessage(activeTab.id, {
        type: "SCRIPT",
        value: targetScript,
        options: options
    })
}

const defaultListener = async e => {
    callScript(e.target.getAttribute("script"))
}

const exportDevices = e => {
    e.preventDefault();
    const targetScript = e.target.getAttribute("script");
    const popupForm = document.getElementById("formDiv");
    if (targetScript == "exportDevices") {
        popupForm.innerHTML = `
        <hr />
        <form id="form" script="` + targetScript + `" action>
            <div class="mb-3">
                <label for="fileName" class="form-label">Enter the filename.</label>
                <input type="text" class="form-control" name="fileName" value="DeviceExport.csv" aria-describedby="">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        `
        let form = document.getElementById('form');
        form.addEventListener("submit", async e => {
            console.log("Running device export script.")
            const form = e.target;
            const targetScript = form.getAttribute("script");
            const fileName = form.querySelector('input[name="fileName"]').value;
            callScript(targetScript, {
                fileName: fileName,
            })
        });
    }
}

const addTableRow = (table, desc, targetScript, listener=defaultListener) => {
    const row = table.getElementsByTagName('tbody')[0].insertRow(0)
    const col1 = row.insertCell(0);
    col1.innerHTML=desc;
    const col2 = row.insertCell(1);
    const newBtn = document.createElement("button");
    newBtn.textContent = "RUN";
    newBtn.innerHTML = "RUN";
    newBtn.className = "btn btn-success";
    newBtn.setAttribute("script", targetScript)
    newBtn.addEventListener("click", listener);
    col2.appendChild(newBtn);
}

const setupScripts = async setupType => {

    const popupTitle = document.getElementById("popup-title");
    const popupTable = document.getElementById("options-table");
    popupTable.style.display = '';

    if (setupType == "exportDevices") {
        popupTitle.innerText = "Unifi Device Export Tool";
        addTableRow(popupTable, "Export all devices in Unifi Network Controller", "exportDevices", exportDevices);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const activeTab = await getActiveTabURL();
    if (activeTab.url.includes("unifi.ui.com")) {
        setupScripts("exportDevices");
    }
});