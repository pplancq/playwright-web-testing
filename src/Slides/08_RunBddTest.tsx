import { CodeBlock } from '@Front/components/CodeBlock';
import { List } from '@Front/components/List';
import { ListItem } from '@Front/components/ListItem';
import { MarkdownBlock } from '@Front/components/MardownBlock';
import { Note } from '@Front/components/Note';
import { Paragraph } from '@Front/components/Paragraph';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

export const RunBddTestSlide = () => {
  return (
    <Slide>
      <Slide>
        <Title variant="h2">Run tests</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Generate test</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Generate test</Title>
        <List>
          <ListItem>
            Generate test <code>npx bddgen</code>
          </ListItem>
          <ListItem fragment>
            Run test: <code>npx playwright test</code>
          </ListItem>
        </List>
        <Note>
          <MarkdownBlock>{`### Générer un test
- **Générer un test** : \`npx bddgen\`
- **Exécuter un test** : \`npx playwright test\``}</MarkdownBlock>
        </Note>
      </Slide>
      <Slide autoAnimate autoAnimateRestart>
        <Title variant="h3">Check the generated tests (optional)</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Check the generated tests (optional)</Title>
        <Paragraph>
          Check out the <code>.features-gen</code> directory to see what the generated tests look like. You will see
          something like this
        </Paragraph>
        <CodeBlock
          fragment
          highlightLines="1-12|2|4,12|6-10|7|8|9|1-12"
          language="javascript"
        >{`// Generated from: sample.feature
import { test } from 'playwright-bdd';

test.describe('Playwright site', () => {

  test('Check get started link', async ({ Given, When, Then }) => {
    await Given('I am on home page');
    await When('I click link "Get started"');
    await Then('I see in title "Installation"');
  });

});`}</CodeBlock>
        <Note>
          <MarkdownBlock>{`### Vérifier les tests générés (optionnel)
- **Consulter le répertoire \`.features-gen\`** pour voir à quoi ressemblent les tests générés. Vous verrez quelque chose comme ceci :
  \`\`\`typescript
  // Généré à partir de : sample.feature
  import { test } from 'playwright-bdd';

  test.describe('Site Playwright', () => {

    test('Vérifier le lien "Get started"', async ({ Given, When, Then }) => {
      await Given('je suis sur la page d\\'accueil');
      await When('je clique sur le lien "Get started"');
      await Then('je vois dans le titre "Installation"');
    });

  });
  \`\`\``}</MarkdownBlock>
        </Note>
      </Slide>
    </Slide>
  );
};
