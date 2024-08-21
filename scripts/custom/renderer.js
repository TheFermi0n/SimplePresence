document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  const { webFrame } = require("electron");
  const os = require("os");

  try {
    const config = require("../../config.json");
    console.log("Config loaded:", config);

    if (os.type() !== "Darwin") {
      document.body.style.backgroundColor = "#4C4C4C";
    }

    webFrame.setVisualZoomLevelLimits(1, 1);

    console.log(config.textConfig.details);
    console.log(config.textConfig.state);
    console.log(config.imageConfig.smallText);
    var text = "textContent" in document.body ? "textContent" : "innerText";
    document.getElementById("details")[text] = config.textConfig.details;
    document.getElementById("state")[text] = config.textConfig.state;
    document.getElementById("stext")[text] = config.imageConfig.smallText;
    document.getElementById("ltext")[text] = config.imageConfig.largeText;
    document.getElementById("skey")[text] = config.imageConfig.smallKey;
    document.getElementById("lkey")[text] = config.imageConfig.largeKey;

    console.log("UI elements updated");

    if (!config.imageConfig.showButton) {
      document.getElementById("button").style.display = "none";
    }

    if (config.timeConfig.timeType !== "none") {
      document.getElementById("time")[text] = config.timeConfig.whatTime;
    } else {
      document.getElementById("divtime").style.display = "none";
    }
  } catch (error) {
    console.error("Failed to load config or update UI:", error);
  }
});
