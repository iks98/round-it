export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });
});

browser.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === 'install') {
    browser.tabs.create({
      url: browser.runtime.getURL('/onboarding.html'),
    });
  }
});
