var template = {
  html: function (list) {
    return `
              <!doctype html>
                <html>
                <head>
                  <title>Index</title>
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <link rel="stylesheet" href="/static/css/index.css">
                  <link rel="stylesheet" href="https://unpkg.com/mvp.css">
                </head>
                <body>
                  <a href="/static/index.html" download="index.html">
                    <h1>Hello public index.html download file</h1>
                  </a>
                  <div>
                   <button id="showForm">카드 만들기</button>
                  </div>
                  <div>
                      <form action="/create" method="get" id="inputForm">
                          <input type="text" name="name" placeholder="name">
                          <input type="text" name="link" placeholder="link">
                          <button type="submit">CREATE</button>
                      </form>
                  </div>
                  <div class="card-container">
                  ${list}
                  </div>
                  <script src="/static/js/index.js"></script>
                  </body>
                </html>
                `;
  },
  lotto: function (numbers) {
    return `
       <!DOCTYPE html>
           <html lang="en">
           <head>
               <meta charset="UTF-8">
               <meta name="viewport" content="width=device-width, initial-scale=1.0">
               <link rel="stylesheet" href="/static/css/lotto.css">
               <script src="https://code.jquery.com/jquery-3.7.1.min.js"
    integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
               <script src="/static/js/lotto.js"></script>
               <title>로또 번호</title>
               <style>
                   body {
                       font-family: Arial, sans-serif;
                       text-align: center;
                       margin-top: 50px;
                   }
                   h1 {
                       color: #007bff;
                   }
                   .numbers {
                       font-size: 20px;
                       margin-top: 20px;
                   }
               </style>
               <script>
               $(document).ready(function () {
                 $("#header").load("../static/header.html");
               })
               </script>
           </head>
           <body>
          
           <header>
           <div id="header"></div>
          </header>
               <h1>로또 번호</h1>
               <h2>1110회</h2>
               <h3 id="date"></h3>
               <div class="container">
                   <div class="numbers">
                       <div class="number" style="background-color: #e66814;"><p>${numbers[0]}</p></div>
                       <div class="number" style="background-color: #4ab44f;"><p>${numbers[1]}</p></div>
                       <div class="number" style="background-color: #cc2937;"><p>${numbers[2]}</p></div>
                       <div class="number" style="background-color: #2ece49;"><p>${numbers[3]}</p></div>
                       <div class="number" style="background-color: #bd17af;"><p>${numbers[4]}</p></div>
                       <div class="number" style="margin-right: 20px;background-color: #074f70;"><p>${numbers[5]}</p></div>
                       🤸‍♀️
                       <div class="number" style="background-color: #270202;"><p>${numbers[6]}</p></div>
                   </div>
               </div>
           </body>
           </html>
    `
  },

  card: function (image, name, link) {
    return `
      <div class="card">
        <a href="${link}"><img src="${image}" alt="Avatar" style="width:100%"></a>
        <div class="container">
          <h4><b>${name}</b></h4>
        </div>
      </div>`
  }
}
module.exports = template;