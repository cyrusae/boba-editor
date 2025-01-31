report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/bobaboard_ui_Editor_0_document_0_phone.png",
        "test": "../bitmaps_test/20200505-015123/bobaboard_ui_Editor_0_document_0_phone.png",
        "selector": "document",
        "fileName": "bobaboard_ui_Editor_0_document_0_phone.png",
        "label": "Editor",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:6006/iframe.html?selectedKind=editor-preview&selectedStory=editor-simple",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.02",
          "analysisTime": 50
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/bobaboard_ui_Editor_0_document_1_tablet.png",
        "test": "../bitmaps_test/20200505-015123/bobaboard_ui_Editor_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "bobaboard_ui_Editor_0_document_1_tablet.png",
        "label": "Editor",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:6006/iframe.html?selectedKind=editor-preview&selectedStory=editor-simple",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00",
          "analysisTime": 59
        }
      },
      "status": "pass"
    }
  ],
  "id": "bobaboard_ui"
});