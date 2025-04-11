import { MainTitleSlide } from '@Front/Slides/01_MainTitle';
import { IntroductionSlide } from '@Front/Slides/02_Introduction';
import { ComparisonCypressSlide } from '@Front/Slides/03_ComparisonCypress';
import { PlaywrightToolsSlide } from '@Front/Slides/04_PlaywrightTools';
import { PlaywrightInstallSlide } from '@Front/Slides/05_PlaywrightInstall';
import { PlaywrightBddInstallSlide } from '@Front/Slides/06_PlaywrightBbbInstall';
import { WriteFirstBddTestSlide } from '@Front/Slides/07_WriteFirstBddTest';
import { RunBddTestSlide } from '@Front/Slides/08_RunBddTest';
import { DemoEffectSlide } from '@Front/Slides/DemoEffect';
import { type ComponentType } from 'react';

export const slides = [
  MainTitleSlide,
  IntroductionSlide,
  ComparisonCypressSlide,
  PlaywrightToolsSlide,
  PlaywrightInstallSlide,
  DemoEffectSlide,
  PlaywrightBddInstallSlide,
  WriteFirstBddTestSlide,
  RunBddTestSlide,
  DemoEffectSlide,
] as ComponentType[];
