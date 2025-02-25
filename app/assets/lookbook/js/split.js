import Split from "split-grid";

export default function (props) {
  const app = Alpine.store("app");
  return {
    init() {
      Split({
        [`${props.direction === "vertical" ? "row" : "column"}Gutters`]: [
          { track: 1, element: this.$el },
        ],
        minSize: props.minSize,
        writeStyle() {},
        onDrag(dir, track, style) {
          splits = style.split(" ").map((num) => parseInt(num));
          props.onDrag(splits);
        },
        onDragStart() {
          app.reflowing = true;
        },
        onDragEnd() {
          app.reflowing = false;
        },
      });
    },
  };
}
