/**
 * 1. visit www.epam.com
 * 2. validate the page's title
 */

describe("first e2e test suite", () => {
  it("should open www.epam.com", async () => {
    const expectedTitle =
      "EPAM | Software Engineering & Product Development Services";
    await browser.url("/");
    await expect(browser).toHaveTitle(expectedTitle);
  });
});
/**
 * Verify menu navigation
 1. visit www.epam.com
 2. navigate to "Services" menu
 3. validate the page's title
 */
describe("menu navigation test suite", () => {
  it("should open hamburger menu", async () => {
    await browser.url("/");
    const hamburgerMenu = await $(".hamburger-menu__button");
    await hamburgerMenu.waitForExist({ timeout: 5000 });
    await hamburgerMenu.click();
    await browser.pause(2000);
  });

  it("should navigate to Services page through hamburger menu", async () => {
    await browser.url("/");

    const hamburgerMenu = await $(".hamburger-menu__button");
    await hamburgerMenu.waitForClickable();
    await hamburgerMenu.click();

    const menu = await $(".hamburger-menu__list");
    await menu.waitForDisplayed();

    const servicesLink = await $(
      '.hamburger-menu__link.first-level-link[href="/services"]',
    );
    await servicesLink.waitForClickable();
    await servicesLink.click();

    await expect(browser).toHaveTitle("Services | EPAM");
  });

  it.only("should navigate to Services page through top menu", async () => {
    await browser.url("/");
    await browser.setWindowSize(1920, 1080);

    const links = await $$(".top-navigation__item-link");

    await links[0].click();
    await expect(browser).toHaveTitle("Services | EPAM");
  });
});
