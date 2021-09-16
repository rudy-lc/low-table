export default {
  name: "Render",
  functional: true,
  render(h, { props }) {
    return props.render(h, props.data);
  },
};
