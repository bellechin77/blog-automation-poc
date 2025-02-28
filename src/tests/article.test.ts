import { test, expect } from '@playwright/test';
import { SearchPage } from '../pageObjects/search.page';
import { ArticlePage } from '../pageObjects/article.page';
import { CommentPage } from '../pageObjects/comment.page';

test.describe('Medium Article Interactions', () => {
  let searchPage: SearchPage;
  let articlePage: ArticlePage;
  let commentPage: CommentPage;

  test.beforeEach(async ({ page }) => {
    searchPage = new SearchPage(page);
    articlePage = new ArticlePage(page);
    commentPage = new CommentPage(page);
    await page.goto('https://medium.com');
  });

  test('Search for article, open it, post a comment and verify it', async ({ page }) => {
    // Search for an article
    await searchPage.searchForArticle('Playwright Automation');

    // Open the first article
    await articlePage.openArticle();

    // Post a comment
    const commentText = 'This is an automated comment!';
    await commentPage.postComment(commentText);

    // Verify the comment appears
    const isCommentVisible = await commentPage.verifyCommentDisplayed(commentText);
    expect(isCommentVisible).toBe(true);
  });
});
