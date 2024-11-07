import { useState } from 'react'
import { chromium } from 'playwright'


async function scrapAmazonSearchQuery({ url }) {

  const browser = await chromium.launch(
    { headless: true }
  )
  const page = await browser.newPage()

  // 'https://www.amazon.fr/CHAINSAW-MAN-16-TATSUKI-FUJIMOTO/dp/8467969695/ref=sr_1_2?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&sr=8-2'

  await page.goto(url)

  const products = await page.$$eval(
    '.a-spacing-base',
    (results) => (
      results.map((el) => {

        const title = el.querySelector('h2')?.innerText

        if (!title) return null

        const image = el.querySelector('img').getAttribute('src')

        const price = el.querySelector('.a-price .a-offscreen')?.innerText

        const link = el.querySelector('.a-link-normal').getAttribute('href')

        return { title, image, price, link }
      })
    )
  )
  console.log(products)
  return { products }
}

function AmazonScraper() {

  const [inputText, setInputText] = useState('');


  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Escribe algo..." />
      <button onClick={() => scrapAmazonSearchQuery()}>search</button>
    </>
  );
}

export { AmazonScraper }