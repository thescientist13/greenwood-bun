// import { expect, test } from "bun:test";

// test("2 + 2", () => {
//   expect(2 + 2).toBe(4);
// });

import { it, test, expect, describe, afterEach, beforeEach } from 'bun:test';
import './card.ts';

describe('Components/Card', () => {
  const MOCK_TITLE = 'My Product';
  const MOCK_IMAGE = 'http://example.com/product/1/image.png';
  let card: HTMLElement;

  beforeEach(async () => {
    card = document.createElement('app-card');
    card.setAttribute('title', MOCK_TITLE);
    card.setAttribute('thumbnail', MOCK_IMAGE);

    document.body.appendChild(card);
    // @ts-expect-error
    await card.updateComplete;
  });

  describe('Default Behavior', () => {
    test('should not be null', () => {
      expect(card).toBeDefined();
      expect(card.shadowRoot.querySelectorAll('div').length).toBe(1);
    });

    test('should set the expected heading', () => {
      const headings = card.shadowRoot.querySelectorAll('h3');

      expect(headings.length).toBe(1);
      expect(headings[0].textContent).toBe(MOCK_TITLE);
    });

    test('should set the expected image properties', () => {
      const images = card.shadowRoot.querySelectorAll('img');

      expect(images.length).toBe(1);
      expect(images[0].getAttribute('src')).toBe(MOCK_IMAGE);
      expect(images[0].getAttribute('alt')).toBe(MOCK_TITLE);
    });

    test('should set the expected button text', () => {
      const buttons = card.shadowRoot.querySelectorAll('button');

      expect(buttons.length).toBe(1);
      expect(buttons[0].textContent).toBe('View Item Details');
    });
  });

  afterEach(() => {
    card.remove();
    card = null;
  });
});