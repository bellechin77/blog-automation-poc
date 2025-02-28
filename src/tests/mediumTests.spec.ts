import { test, expect } from '@playwright/test';
import { MediumPage } from '../pageObjects/MediumPage';

test.describe('Medium Blog Tests', () => {
  let mediumPage: MediumPage;

  test.beforeEach(async ({ page }) => {
    mediumPage = new MediumPage(page);
    await page.goto('https://medium.com');
  });

  test('Search and Open Article', async () => {
    await mediumPage.searchForArticles('Automation');
    await mediumPage.openArticle();
    await expect(mediumPage.page).toHaveURL(/.*medium\.com\/.*$/);
  });

  test('Post and Verify Comment', async () => {
    const comment = 'Great article! Thanks for sharing!';
    
    await mediumPage.searchForArticles('Automation');
    await mediumPage.openArticle();
    await mediumPage.postComment(comment);
    await mediumPage.verifyCommentDisplayed(comment);
  });
});
