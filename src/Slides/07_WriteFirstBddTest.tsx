import { Block } from '@Front/components/Block';
import { CodeBlock } from '@Front/components/CodeBlock';
import { List } from '@Front/components/List';
import { ListItem } from '@Front/components/ListItem';
import { Paragraph } from '@Front/components/Paragraph';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

export const WriteFirstBddTestSlide = () => {
  return (
    <Slide>
      <Slide>
        <Title variant="h2">Write your first BDD test</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Create feature file</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Create feature file</Title>
        <Paragraph>
          Create a feature file named <code>sample.feature</code>
        </Paragraph>
        <CodeBlock highlightLines="1-6" language="gherkin">{`Feature: Playwright site

    Scenario: Check get started link
        Given I am on home page
        When I click link "Get started"
        Then I see in title "Installation"`}</CodeBlock>
      </Slide>
      <Slide autoAnimate autoAnimateRestart>
        <Title variant="h3">Implement steps</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Implement steps</Title>
        <Paragraph>
          Implement the steps in <code>steps.js</code>
        </Paragraph>
        <CodeBlock
          highlightLines="1-14|2|4|6-8|9-11|12-14|1-14"
          language="javascript"
        >{`import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('I am on home page', async ({ page }) => {
  await page.goto('https://playwright.dev');
});
When('I click link {string}', async ({ page }, name) => {
  await page.getByRole('link', { name }).click();
});
Then('I see in title {string}', async ({ page }, keyword) => {
  await expect(page).toHaveTitle(new RegExp(keyword));
});`}</CodeBlock>
      </Slide>
      <Slide autoAnimate autoAnimateRestart>
        <Title variant="h3">Writing and Running a Test</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Writing and Running a Test</Title>
        <List>
          <ListItem>
            Running in cli mode: <code>npx playwright test</code>
          </ListItem>
          <ListItem fragment fragmentIndex={1}>
            Running in UI mode: <code>npx playwright test --ui</code>
          </ListItem>
          <ListItem fragment fragmentIndex={2}>
            <Block>Test example</Block>
            <CodeBlock
              language="javascript"
              highlightLines="1-6|1|3,6|4|5|1-6"
            >{`import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});`}</CodeBlock>
          </ListItem>
        </List>
      </Slide>
    </Slide>
  );
};
