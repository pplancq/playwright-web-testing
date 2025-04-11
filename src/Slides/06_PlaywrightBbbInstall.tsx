import { Block } from '@Front/components/Block';
import { CodeBlock } from '@Front/components/CodeBlock';
import { List } from '@Front/components/List';
import { ListItem } from '@Front/components/ListItem';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

export const PlaywrightBddInstallSlide = () => {
  return (
    <Slide>
      <Slide>
        <Title variant="h2">Integration with Playwright BDD</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Installation Playwright BDD</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Installation Playwright BDD</Title>
        <List>
          <ListItem>
            Install <code>npm i -D playwright-bdd</code>
          </ListItem>
          <ListItem fragment>
            Update <code>playwright.config.ts</code>
          </ListItem>
        </List>
        <CodeBlock
          fragment
          highlightLines="1-12|2|4-7|5|6|9-12|10|1-12"
        >{`import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'sample.feature',
  steps: 'steps.js',
});

export default defineConfig({
  testDir,
  reporter: 'html',
});`}</CodeBlock>
      </Slide>
      <Slide autoAnimate autoAnimateRestart>
        <Title variant="h3">Starting a Playwright Test Project</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Starting a Playwright Test Project</Title>
        <List>
          <ListItem>
            <Block>Install Playwright</Block>
            <CodeBlock language="bash">npm init playwright@latest</CodeBlock>
          </ListItem>
          <ListItem fragment>
            Configure Playwright: <code>playwright.config.ts</code> to define browsers, test directories, etc.
          </ListItem>
        </List>
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
