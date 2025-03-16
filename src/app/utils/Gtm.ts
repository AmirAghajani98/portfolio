const gtmPageView = (rest: Record<string, any>) => {
  if (!window.dataLayer) return;

  window.dataLayer.push({
    event: "page_view",
    url: window.location.href,
    ...rest,
  });
};

export default gtmPageView;
