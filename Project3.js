const key = 'NIYcZbNI0lYttJ9cCsSWINoWj6OdY4HF';
const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=example&api-key=${key}`;

function createArticleCard(article) {
  return `
    <div style="display: flex; flex-direction: row; width: 1120px; height: 310px; border-bottom: 1px solid #000000; padding: 0px 0px 36px 0px; gap: 100px;">
      <div id="firstblock" style="display: flex; flex-direction: column; width: 755px; height: 274px; gap: 70px;">
        <div id="problematic1" style="display: flex; flex-direction: column; width: 693px; height: 174px; gap: 48px;">
          <div style="font-weight: 500; font-size: 14px; line-height: 18px; display: flex; flex-direction: row; width: 755px; height: 24px; gap: 4px;">
            <img style="object-fit: cover; width: 24px; height: 24px; border-radius: 100px;" src="https://s3-alpha-sig.figma.com/img/d972/9da4/074854beea255bab131d15225748e414?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dAdXLgv70A9HAqui7GVTjQVYdqNQ2CQgpmV025tl9rN4rlX5Hk0dVRFUsEKkx7bqebmm174pl03-JjhFYWNuuozHD2bFMEwBqym70Z4EjeRpvnvqbnovNCJaPT0k1yEQkT6F21GyqBR7VhmAFOndsP1QyohDMDgk5xq5LQ7A2XSehPMnl6ZQMXulmxCCxGXfN~PKTCqK989u-pmCaNwHUvZAWGlek6J9EL1mmu0xtq5UtGBrBS4lSTRMZZiOq3vblsQCwuqMm9BG-c1vYCVw4F66FbGEeouHrLoG6nhqE9GriNaTxU6~v2HauAQ3Nau8bQINYjKEY~bIwDn9EIXruw__" alt="">
            <div style="color: #000000; margin-top: 3px; margin-bottom: 3px; width: 150px; height: 18px;">
              ${article.author}
            </div>
            <div style="color: #000000; margin-top: 3px; margin-bottom: 3px; width: 12px; height: 18px; opacity: 50%;">
              in
            </div>
            <div style="color: #000000; margin-top: 3px; margin-bottom: 3px; width: 60px; height: 18px;">
              ${article.sectionname}
            </div>
            <div style="color: #000000; margin-top: 3px; margin-bottom: 3px; width: 12px; height: 18px;">
              ·
            </div>
            <div style="color: #000000; margin-top: 3px; margin-bottom: 3px; width: 200px; height: 18px; opacity: 50%;">
              ${article.date}
            </div>
          </div>
          <div style="display: flex; flex-direction: column; width: 693px; height: 168px; gap: 24px;">
            <div style="font-weight: 700; font-size: 28px; line-height: 34px; width: 693px; height: 34px;">
              ${article.topic}
            </div>
            <div style="width: 693px; height: 44px; font-weight: 400; font-size: 16px; line-height: 22px;">
              ${article.description}
            </div>
          </div>
        </div>
        <div style="display: flex; flex-direction: row; width: 755px; height: 30px; gap: 325px;">
          <div style="font-weight: 500; font-size: 14px; line-height: 18px; text-align: center; display: flex; flex-direction: row; width: 330px; height: 30px; gap: 8px;">
            <button onclick="redirectToProject31()" style="width: 107px; height: 30px; border-radius: 100px; padding: 6px 16px 6px 16px; gap: 8px; border: 0; background-color: lightgray;">Read</button>
            <div style="color: #000000; margin-top: 6px; margin-bottom: 6px; width: 77px; height: 18px; opacity: 50%;">
              ${article.timetoread}
            </div>
            <div style="color: #000000; margin-top: 6px; margin-bottom: 6px; width: 12px; height: 18px;">
              ·
            </div>
            <div style="color: #000000; margin-top: 6px; margin-bottom: 6px; width: 110px; height: 18px; opacity: 50%;">
              ${article.selectedforyou}
            </div>
          </div>
          <div style="display: flex; flex-direction: row; width: 100px; height: 24px; gap: 14px;">
            <div style="width: 24px; height: 24px; background-color: #e1e0e6;"></div>
            <div style="width: 24px; height: 24px; background-color: #e1e0e6;"></div>
            <div style="width: 24px; height: 24px; background-color: #e1e0e6;"></div>
          </div>
        </div>
      </div>
      <img style="object-fit: cover; width: 260px; height: 265px; border-radius: 4px;" src="${article.pictureurl}" alt="">
    </div>
  `;
}

function redirectToProject31() {
  window.location.href = 'Project31.html';
}

document.addEventListener('DOMContentLoaded', function () {
  const articlesContainer = document.getElementById('articlescolumn');

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const articles = data.response.docs;
      let counter = 0;
      articles.forEach(article => {
        if (counter < 3) {
          const articleCard = createArticleCard({
            author: article.byline.original,
            sectionname: article.section_name,
            topic: article.headline.kicker,
            date: article.pub_date,
            description: article.snippet,
            timetoread: "12 min to read",
            selectedforyou: "Selected for you",
            pictureurl: "https://lh4.googleusercontent.com/rAu6Oi1vFIlx747JxosPs9qs3vd08vqU49L1eLWojiWrIIAj5xDEcdSwYS_AeGLwSGR6HmWnkeKk7DZJN3oReVQOop8b7q29kzkC3DEAS3XRtv828wTac8OPlPsdQwgOwd573PaF",
          });
          articlesContainer.innerHTML += articleCard;
          counter++;
        } else {
          return;
        }
      });
    })
});
