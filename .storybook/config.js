const { addParameters, configure } = require("@storybook/react");
// const Color = require("../src/constants/Color");

function loadStories() {
  req = require.context("../src/components/__stories__", true, /.story.tsx$/);
  req.keys().forEach(file => req(file));
}

addParameters({
  backgrounds: [
    {
      name: "White",
      value: "#fff",
      default: true
    }
    // {
    //   name: "Gray",
    //   value: Color.smokeGray
    // },
    // {
    //   name: "Dark",
    //   value: Color.darkGray
    // },
    // {
    //   name: "Brand",
    //   value: Color.red
    // }
  ]
});

configure(() => {
  loadStories();
}, module);
