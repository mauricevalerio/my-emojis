
const emojis = ['๐๐ผโโ๏ธ', '๐ป', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', 'โฃ๏ธ', '๐', 'โค๏ธ', '๐งก', '๐', '๐', '๐', '๐', '๐ค', '๐ค', '๐ค', 'โค๏ธโ', '๐ฅ', 'โค๏ธโ', '๐ฉน', '๐ฏ', 'โจ๏ธ', '๐ข', '๐ฌ', '๐๏ธโ๐จ๏ธ', '๐จ๏ธ', '๐ฏ๏ธ', '๐ญ', '๐ค', '๐', 'โ ๏ธ', 'โฅ๏ธ', 'โฆ๏ธ', 'โฃ๏ธ', '๐', '๐๏ธ', '๐ด', '๐ญ๏ธ', '๐', '๐๏ธ', '๐', '๐', '๐', '๐', '๐ผ', '๐ต', '๐ถ', '๐น', '๐ง', '๐ฎ', '๐ฐ', 'โฟ๏ธ', '๐น๏ธ', '๐บ๏ธ', '๐ป', '๐ผ๏ธ', '๐พ', '๐', '๐', '๐', '๐', 'โ ๏ธ', '๐ธ', 'โ๏ธ', '๐ซ', '๐ณ', '๐ญ๏ธ', '๐ฏ', '๐ฑ', '๐ท', '๐ต', '๐', 'โข๏ธ', 'โฃ๏ธ', 'โฌ๏ธ', 'โ๏ธ', 'โก๏ธ', 'โ๏ธ', 'โฌ๏ธ', 'โ๏ธ', 'โฌ๏ธ', 'โ๏ธ', 'โ๏ธ', 'โ๏ธ', 'โฉ๏ธ', 'โช๏ธ', 'โคด๏ธ', 'โคต๏ธ', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', 'โ๏ธ', '๐๏ธ', 'โก๏ธ', 'โธ๏ธ', 'โฏ๏ธ', 'โ๏ธ', 'โฆ๏ธ', 'โช๏ธ', 'โฎ๏ธ', '๐', '๐ฏ', 'โ๏ธ', 'โ๏ธ', 'โ๏ธ', 'โ๏ธ', 'โ๏ธ', 'โ๏ธ', 'โ๏ธ', 'โ๏ธ', 'โ๏ธ', 'โ๏ธ', 'โ๏ธ', 'โ๏ธ', 'โ', '๐', '๐', '๐', 'โถ๏ธ', 'โฉ๏ธ', 'โญ๏ธ', 'โฏ๏ธ', 'โ๏ธ', 'โช๏ธ', 'โฎ๏ธ', '๐ผ', 'โซ', '๐ฝ', 'โฌ', 'โธ๏ธ', 'โน๏ธ', 'โบ๏ธ', 'โ๏ธ', '๐ฆ', '๐', '๐', '๐ถ', '๐ณ', '๐ด', 'โ๏ธ', 'โ๏ธ', 'โง', 'โ๏ธ', 'โ', 'โ', 'โ', 'โพ๏ธ', 'โผ๏ธ', 'โ๏ธ', 'โ๏ธ', 'โ', 'โ', 'โ๏ธ', 'ใฐ๏ธ', '๐ฑ', '๐ฒ', 'โ๏ธ', 'โป๏ธ', 'โ๏ธ', '๐ฑ', '๐', '๐ฐ', 'โญ๏ธ', 'โ', 'โ๏ธ', 'โ๏ธ', 'โ', 'โ', 'โฐ', 'โฟ', 'ใฝ๏ธ', 'โณ๏ธ', 'โด๏ธ', 'โ๏ธ', 'ยฉ๏ธ', 'ยฎ๏ธ', 'โข๏ธ', '#๏ธโฃ', '*๏ธโฃ', '0๏ธโฃ', '1๏ธโฃ', '2๏ธโฃ', '3๏ธโฃ', '4๏ธโฃ', '5๏ธโฃ', '6๏ธโฃ', '7๏ธโฃ', '8๏ธโฃ', '9๏ธโฃ', '๐', '๐ ', '๐ก', '๐ข', '๐ฃ', '๐ค', '๐ฐ๏ธ', '๐', '๐ฑ๏ธ', '๐', '๐', '๐', 'โน๏ธ', '๐', 'โ๏ธ', '๐', '๐', '๐พ๏ธ', '๐', '๐ฟ๏ธ', '๐', '๐', '๐', '๐', '๐๏ธ', '๐ท๏ธ', '๐ถ', '๐ฏ๏ธ', '๐', '๐น', '๐๏ธ', '๐ฒ', '๐', '๐ธ', '๐ด', '๐ณ', 'ใ๏ธ', 'ใ๏ธ', '๐บ', '๐ต', '๐ด', '๐ ', '๐ก', '๐ข', '๐ต', '๐ฃ', '๐ค', 'โซ๏ธ', 'โช๏ธ', '๐ฅ', '๐ง', '๐จ', '๐ฉ', '๐ฆ', '๐ช', '๐ซ', 'โฌ๏ธ', 'โฌ๏ธ', 'โผ๏ธ', 'โป๏ธ', 'โพ๏ธ', 'โฝ๏ธ', 'โช๏ธ', 'โซ๏ธ', '๐ถ', '๐ท', '๐ธ', '๐น', '๐บ', '๐ป', '๐ ', '๐', '๐ณ', '๐ฒ', '๐๏ธ', '๐ง๏ธ', '๐๏ธ', '๐๏ธ', '๐๏ธ', '๐๏ธ', '๐๏ธ', '๐๏ธ', '๐๏ธ', '๐๏ธ', '๐๏ธ', '๐ ๏ธ', '๐๏ธ', '๐ก๏ธ', '๐๏ธ', '๐ข๏ธ', '๐๏ธ', '๐ฃ๏ธ', '๐๏ธ', '๐ค๏ธ', '๐๏ธ', '๐ฅ๏ธ', '๐๏ธ', '๐ฆ๏ธ', '*๏ธ', '#๏ธ', '0๏ธ', '1๏ธ', '2๏ธ', '3๏ธ', '4๏ธ', '5๏ธ', '6๏ธ', '7๏ธ', '8๏ธ', '9๏ธ', '๐๏ธ', '๐งณ', 'โ๏ธ', 'โณ๏ธ', 'โ๏ธ', 'โฐ', 'โฑ๏ธ', 'โฒ๏ธ', '๐ฐ๏ธ', '๐ก๏ธ', '๐บ๏ธ', '๐งญ', '๐', '๐', '๐งจ', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐๏ธ', '๐๏ธ', '๐ซ', '๐ฎ', '๐งฟ', '๐ฎ๏ธ', '๐น๏ธ', '๐ฐ', '๐ฒ', 'โ๏ธ', '๐งฉ', '๐งธ', '๐ผ๏ธ', '๐จ', '๐งต', '๐งถ', '๐๏ธ', '๐ถ๏ธ', '๐ฅฝ', '๐ฅผ', '๐ฆบ', '๐', '๐', '๐', '๐งฃ', '๐งค', '๐งฅ', '๐งฆ', '๐', '๐', '๐ฅป', '๐ฉฑ', '๐ฉฒ', '๐ฉณ', '๐', '๐', '๐', '๐', '๐', '๐๏ธ', '๐', '๐', '๐', '๐ฅพ', '๐ฅฟ', '๐ ', '๐ก', '๐ฉฐ', '๐ข', '๐', '๐', '๐ฉ', '๐๏ธ', '๐งข', 'โ๏ธ', '๐ฟ', '๐', '๐', '๐', '๐ข', '๐ฃ', '๐ฏ', '๐๏ธ', '๐๏ธ', '๐๏ธ', '๐ค', '๐ง๏ธ', '๐ป๏ธ', '๐ท', '๐ธ', '๐น', '๐บ', '๐ป', '๐ช', '๐ฅ', '๐ฑ', '๐ฒ', 'โ๏ธ', '๐', '๐๏ธ', '๐ ', '๐', '๐', '๐ป๏ธ', '๐ฅ๏ธ', '๐จ๏ธ', 'โจ๏ธ', '๐ฑ๏ธ', '๐ฒ๏ธ', '๐ฝ', '๐พ', '๐ฟ๏ธ', '๐', '๐งฎ', '๐ฅ', '๐๏ธ', '๐ฝ๏ธ', '๐ฌ๏ธ', '๐บ๏ธ', '๐ท๏ธ', '๐ธ', '๐น๏ธ', '๐ผ', '๐๏ธ', '๐', '๐ฏ๏ธ', '๐ก', '๐ฆ', '๐ฎ', '๐ช', '๐', '๐', '๐', '๐', '๐', '๐', '๐๏ธ', '๐', '๐', '๐', '๐', '๐', '๐ฐ', '๐๏ธ', '๐', '๐', '๐ท๏ธ', '๐ฐ๏ธ', '๐ด', '๐ต', '๐ถ', '๐ท', '๐ธ', '๐ณ๏ธ', '๐งพ', 'โ๏ธ', '๐', '๐ง', '๐งง', '๐จ', '๐ฉ', '๐ค๏ธ', '๐ฅ๏ธ', '๐ฆ๏ธ', '๐ซ๏ธ', '๐ช๏ธ', '๐ฌ๏ธ', '๐ญ๏ธ', '๐ฎ', '๐ณ๏ธ', 'โ๏ธ', 'โ๏ธ', '๐๏ธ', '๐๏ธ', '๐๏ธ', '๐๏ธ', '๐', '๐ผ', '๐', '๐', '๐๏ธ', '๐', '๐', '๐๏ธ', '๐๏ธ', '๐', '๐', '๐', '๐', '๐๏ธ', '๐', '๐', '๐', '๐๏ธ', '๐', '๐', 'โ๏ธ', '๐๏ธ', '๐๏ธ', '๐๏ธ', '๐๏ธ', '๐๏ธ', '๐', '๐', '๐', '๐๏ธ', '๐จ', '๐ช', 'โ๏ธ', 'โ๏ธ', '๐ ๏ธ', '๐ก๏ธ', 'โ๏ธ', '๐ฃ๏ธ', '๐น', '๐ก๏ธ', '๐ง', '๐ฉ', 'โ๏ธ', '๐๏ธ', 'โ๏ธ', '๐ฆฏ', '๐', 'โ๏ธ', '๐งฐ', '๐งฒ', 'โ๏ธ', '๐งช', '๐งซ', '๐งฌ', '๐ฌ', '๐ญ', '๐ก', '๐', '๐ฉธ', '๐', '๐ฉน', '๐ฉบ', '๐ช', '๐๏ธ', '๐๏ธ', '๐ช', '๐ฝ', '๐ฟ', '๐', '๐ช', '๐งด', '๐งท', '๐งน', '๐งบ', '๐งป', '๐งผ', '๐งฝ', '๐งฏ', '๐', '๐ฌ', 'โฐ๏ธ', 'โฑ๏ธ', '๐บ', '๐ณ๏ธ', '๐๏ธ', 'โฐ๏ธ', '๐', '๐ป', '๐๏ธ', '๐๏ธ', '๐๏ธ', '๐๏ธ', '๐๏ธ', '๐๏ธ', '๐๏ธ', '๐งฑ', '๐๏ธ', '๐๏ธ', '๐ ๏ธ', '๐ก', '๐ข', '๐ฃ', '๐ค', '๐ฅ', '๐ฆ', '๐จ', '๐ฉ', '๐ช', '๐ซ', '๐ฌ', '๐ญ๏ธ', '๐ฏ', '๐ฐ', '๐', '๐ผ', '๐ฝ', 'โช๏ธ', '๐', '๐', '๐', 'โฉ๏ธ', '๐', 'โฒ๏ธ', 'โบ๏ธ', '๐', '๐', '๐๏ธ', '๐', '๐', '๐', '๐', '๐', '๐พ', '๐๏ธ', '๐ ', '๐ก', '๐ข', '๐', '๐ช', '๐', '๐', '๐', '๐', '๐', '๐๏ธ', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐๏ธ', '๐', '๐', '๐๏ธ', '๐', '๐', '๐๏ธ', '๐', '๐', '๐', '๐๏ธ', '๐', '๐', '๐', '๐', '๐๏ธ', '๐๏ธ', '๐ต', '๐ฆฝ', '๐ฆผ', '๐บ', '๐ฒ๏ธ', '๐ด', '๐น', '๐', '๐ฃ๏ธ', '๐ค๏ธ', '๐ข๏ธ', 'โฝ๏ธ', '๐จ', '๐ฅ', '๐ฆ', '๐', '๐ง', 'โ๏ธ', 'โต๏ธ', '๐ถ', '๐ค', '๐ณ๏ธ', 'โด๏ธ', '๐ฅ๏ธ', '๐ข', 'โ๏ธ', '๐ฉ๏ธ', '๐ซ', '๐ฌ', '๐ช', '๐บ', '๐', '๐', '๐ ', '๐ก', '๐ฐ๏ธ', '๐', '๐ธ', '๐', '๐', '๐', '๐ฟ', 'โฝ๏ธ', 'โพ๏ธ', '๐ฅ', '๐', '๐', '๐', '๐', '๐พ', '๐ฅ', '๐ณ', '๐', '๐', '๐', '๐ฅ', '๐', '๐ธ', '๐ฅ', '๐ฅ', '๐ฅ', 'โณ๏ธ', 'โธ๏ธ', '๐ฃ', '๐คฟ', '๐ฝ', '๐ฟ', '๐ท', '๐ฅ', '๐ฏ', '๐ช', '๐ช', '๐ฑ', '๐๏ธ', '๐๏ธ', '๐', '๐ฅ', '๐ฅ', '๐ฅ', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐ฅญ', '๐', '๐', '๐', '๐', '๐', '๐', '๐ฅ', '๐', '๐ฅฅ', '๐ฅ', '๐', '๐ฅ', '๐ฅ', '๐ฝ', '๐ถ๏ธ', '๐ฅ', '๐ฅฌ', '๐ฅฆ', '๐ง', '๐ง', '๐', '๐ฅ', '๐ฐ', '๐', '๐ฅ', '๐ฅ', '๐ฅจ', '๐ฅฏ', '๐ฅ', '๐ง', '๐ง', '๐', '๐', '๐ฅฉ', '๐ฅ', '๐', '๐', '๐', '๐ญ', '๐ฅช', '๐ฎ', '๐ฏ', '๐ฅ', '๐ง', '๐ฅ', '๐ณ', '๐ฅ', '๐ฒ', '๐ฅฃ', '๐ฅ', '๐ฟ', '๐ง', '๐ง', '๐ฅซ', '๐ฑ', '๐', '๐', '๐', '๐', '๐', '๐', '๐ ', '๐ข', '๐ฃ', '๐ค', '๐ฅ', '๐ฅฎ', '๐ก', '๐ฅ', '๐ฅ ', '๐ฅก', '๐ฆ', '๐ง', '๐จ', '๐ฉ', '๐ช', '๐', '๐ฐ', '๐ง', '๐ฅง', '๐ซ', '๐ฌ', '๐ญ', '๐ฎ', '๐ฏ', '๐ผ', '๐ฅ', 'โ๏ธ', '๐ต', '๐ถ', '๐พ', '๐ท', '๐ธ๏ธ', '๐น', '๐บ', '๐ป', '๐ฅ', '๐ฅ', '๐ฅค', '๐ง', '๐ง', '๐ง', '๐ฅข', '๐ฝ๏ธ', '๐ด', '๐ฅ', '๐ช', '๐ต', '๐', '๐ฆ', '๐ฆง', '๐ถ', '๐๏ธ', '๐ฆฎ', '๐โ', '๐ฆบ', '๐ฉ', '๐บ', '๐ฆ', '๐ฆ', '๐ฑ', '๐๏ธ', '๐โ', '๐ฆ', '๐ฏ', '๐', '๐', '๐ด', '๐', '๐ฆ', '๐ฆ', '๐ฆ', '๐ฎ', '๐', '๐', '๐', '๐ท', '๐', '๐', '๐ฝ', '๐', '๐', '๐', '๐ช', '๐ซ', '๐ฆ', '๐ฆ', '๐', '๐ฆ', '๐ฆ', '๐ญ', '๐', '๐', '๐น', '๐ฐ', '๐', '๐ฟ๏ธ', '๐ฆ', '๐ฆ', '๐ป', '๐ปโ', 'โ๏ธ', '๐จ', '๐ผ', '๐ฆฅ', '๐ฆฆ', '๐ฆจ', '๐ฆ', '๐ฆก', '๐พ', '๐ฆ', '๐', '๐', '๐ฃ', '๐ค', '๐ฅ', '๐ฆ๏ธ', '๐ง', '๐๏ธ', '๐ฆ', '๐ฆ', '๐ฆข', '๐ฆ', '๐ฆฉ', '๐ฆ', '๐ฆ', '๐ธ', '๐', '๐ข', '๐ฆ', '๐', '๐ฒ', '๐', '๐ฆ', '๐ฆ', '๐ณ', '๐', '๐ฌ', '๐๏ธ', '๐ ', '๐ก', '๐ฆ', '๐', '๐ฆ', '๐ฆ', '๐ฆ', '๐ฆ', '๐ฆช', '๐', '๐', '๐ฆ', '๐', '๐', '๐', '๐', '๐ฆ', '๐ท๏ธ', '๐ธ๏ธ', '๐ฆ', '๐ฆ', '๐ฆ ', '๐', '๐ธ', '๐ฎ', '๐ต๏ธ', '๐น', '๐ฅ', '๐บ', '๐ป', '๐ผ', '๐ท', '๐ฑ', '๐ฒ', '๐ณ', '๐ด', '๐ต', '๐', '๐', '๐พ', '๐ฟ', 'โ๏ธ', '๐', '๐', '๐', '๐', '๐๏ธ', '๐๏ธ', '๐๏ธ', '๐', '๐', '๐', '๐', '๐๏ธ', '๐', '๐', '๐', '๐', '๐', '๐', '๐๏ธ', 'โ๏ธ', '๐', '๐', '๐ช', '๐ซ', 'โญ๏ธ', '๐', 'โจ', '๐ ', '๐', 'โ๏ธ', 'โ๏ธ', 'โ๏ธ', '๐ค๏ธ', '๐ฅ๏ธ', '๐ฆ๏ธ', '๐ง๏ธ', '๐จ๏ธ', '๐ฉ๏ธ', '๐ช๏ธ', '๐ซ๏ธ', '๐ฌ๏ธ', '๐', '๐', '๐', 'โ๏ธ', 'โ๏ธ', 'โฑ๏ธ', 'โก๏ธ', 'โ๏ธ', 'โ๏ธ', 'โ๏ธ', 'โ๏ธ', '๐ฅ', '๐ง', '๐', '๐ฅ', '๐ฆ', '๐จ', '๐', '๐', '๐', '๐', '๐', '๐', '๐คฃ', '๐', '๐', '๐', '๐', '๐', '๐', '๐ฅฐ', '๐', '๐คฉ', '๐', '๐', 'โบ๏ธ', '๐', '๐', '๐', '๐', '๐', '๐คช', '๐', '๐ค', '๐ค', '๐คญ', '๐คซ', '๐ค', '๐ค', '๐คจ', '๐๏ธ', '๐', '๐ถ', '๐', '๐', '๐', '๐ฌ', '๐คฅ', '๐', '๐', '๐ช', '๐ฎโ', '๐จ', '๐คค', '๐ด', '๐ท', '๐ค', '๐ค', '๐คข', '๐คฎ', '๐คง', '๐ฅต', '๐ฅถ', '๐ถโ', '๐ซ๏ธ', '๐ฅด', '๐ตโ', '๐ซ', '๐ต', '๐คฏ', '๐ค ', '๐ฅณ', '๐', '๐ค', '๐ง', '๐', '๐', '๐', 'โน๏ธ', '๐ฎ', '๐ฏ', '๐ฒ', '๐ณ', '๐ฅบ', '๐ฆ', '๐ง', '๐จ', '๐ฐ', '๐ฅ', '๐ข', '๐ญ', '๐ฑ', '๐', '๐ฃ', '๐', '๐', '๐ฉ', '๐ซ', '๐ฅฑ', '๐ค', '๐ก', '๐ ', '๐คฌ', '๐', '๐ฟ', '๐', 'โ ๏ธ', '๐ฉ', '๐คก', '๐น', '๐บ', '๐ป', '๐ฝ๏ธ', '๐พ', '๐ค', '๐บ', '๐ธ', '๐น', '๐ป', '๐ผ', '๐ฝ', '๐', '๐ฟ', '๐พ', '๐', '๐', '๐', '๐', '๐ค', '๐๏ธ', 'โ', '๐', '๐', '๐ค', 'โ๏ธ', '๐ค', '๐ค', '๐ค', '๐ค', '๐๏ธ', '๐๏ธ', '๐๏ธ', '๐', '๐๏ธ', 'โ๏ธ', '๐๏ธ', '๐๏ธ', 'โ', '๐', '๐ค', '๐ค', '๐', '๐', '๐', '๐คฒ', '๐ค', '๐', 'โ๏ธ', '๐', '๐คณ', '๐ช', '๐ฆพ', '๐ฆฟ', '๐ฆต', '๐ฆถ', '๐๏ธ', '๐ฆป', '๐', '๐ง ', '๐ฆท', '๐ฆด', '๐', '๐๏ธ', '๐', '๐', '๐', '๐ถ', '๐ง', '๐ฆ', '๐ง', '๐ง', '๐จ', '๐ฉ', '๐ง', '๐งโโ๏ธ', '๐งโโ๏ธ', '๐ง', '๐จโ', '๐ฆฐ', '๐ฉโ', '๐ฆฐ', '๐ง', '๐จโ', '๐ฆฑ', '๐ฉโ', '๐ฆฑ', '๐ง', '๐จโ', '๐ฆณ', '๐ฉโ', '๐ฆณ', '๐ง', '๐จโ', '๐ฆฒ', '๐ฉโ', '๐ฆฒ', '๐ฑ', '๐ฑโโ๏ธ', '๐ฑโโ๏ธ', '๐ง', '๐ด', '๐ต', '๐', '๐โโ๏ธ', '๐โโ๏ธ', '๐', '๐โโ๏ธ', '๐โโ๏ธ', '๐', '๐โโ๏ธ', '๐โโ๏ธ', '๐', '๐โโ๏ธ', '๐โโ๏ธ', '๐', '๐โโ๏ธ', '๐โโ๏ธ', '๐', '๐โโ๏ธ', '๐โโ๏ธ', '๐ง', '๐งโโ๏ธ', '๐งโโ๏ธ', '๐', '๐โโ๏ธ', '๐โโ๏ธ', '๐คฆ', '๐คฆโโ๏ธ', '๐คฆโโ๏ธ', '๐คท', '๐คทโโ๏ธ', '๐คทโโ๏ธ', '๐งโโ๏ธ', '๐จโโ๏ธ', '๐ฉโโ๏ธ', '๐งโ๐', '๐จโ๐', '๐ฉโ๐', '๐งโ๐ซ', '๐จโ๐ซ', '๐ฉโ๐ซ', '๐งโโ๏ธ', '๐จโโ๏ธ', '๐ฉโโ๏ธ', '๐งโ๐พ', '๐จโ๐พ', '๐ฉโ๐พ', '๐งโ๐ณ', '๐จโ๐ณ', '๐ฉโ๐ณ', '๐งโ๐ง', '๐จโ๐ง', '๐ฉโ๐ง', '๐งโ๐ญ', '๐จโ๐ญ', '๐ฉโ๐ญ', '๐งโ๐ผ', '๐จโ๐ผ', '๐ฉโ๐ผ', '๐งโ๐ฌ', '๐จโ๐ฌ', '๐ฉโ๐ฌ', '๐งโ๐ป', '๐จโ๐ป', '๐ฉโ๐ป', '๐งโ๐ค', '๐จโ๐ค', '๐ฉโ๐ค', '๐งโ๐จ', '๐จโ๐จ', '๐ฉโ๐จ', '๐งโโ๏ธ', '๐จโโ๏ธ', '๐ฉโโ๏ธ', '๐งโ๐', '๐จโ๐', '๐ฉโ๐', '๐งโ๐', '๐จโ๐', '๐ฉโ๐', '๐ฎ', '๐ฎโโ๏ธ', '๐ฎโโ๏ธ', '๐ต๏ธ', '๐ต๏ธโโ๏ธ', '๐ต๏ธโโ๏ธ', '๐', '๐โโ๏ธ', '๐โโ๏ธ', '๐ท', '๐ทโโ๏ธ', '๐ทโโ๏ธ', '๐คด', '๐ธ', '๐ณ', '๐ณโโ๏ธ', '๐ณโโ๏ธ', '๐ฒ', '๐ง', '๐คต', '๐คตโโ๏ธ', '๐คตโโ๏ธ', '๐ฐ', '๐ฐโโ๏ธ', '๐ฐโโ๏ธ', '๐คฐ', '๐คฑ', '๐ฉโ', '๐ผ', '๐จโ', '๐ผ', '๐งโ', '๐ผ', '๐ผ', '๐', '๐คถ', '๐งโ', '๐', '๐ฆธ', '๐ฆธโโ๏ธ', '๐ฆธโโ๏ธ', '๐ฆน', '๐ฆนโโ๏ธ', '๐ฆนโโ๏ธ', '๐ง', '๐งโโ๏ธ', '๐งโโ๏ธ', '๐ง', '๐งโโ๏ธ', '๐งโโ๏ธ', '๐ง', '๐งโโ๏ธ', '๐งโโ๏ธ', '๐ง', '๐งโโ๏ธ', '๐งโโ๏ธ', '๐ง', '๐งโโ๏ธ', '๐งโโ๏ธ', '๐ง', '๐งโโ๏ธ', '๐งโโ๏ธ', '๐ง', '๐งโโ๏ธ', '๐งโโ๏ธ', '๐', '๐โโ๏ธ', '๐โโ๏ธ', '๐', '๐โโ๏ธ', '๐โโ๏ธ', '๐ถ', '๐ถโโ๏ธ', '๐ถโโ๏ธ', '๐ง', '๐งโโ๏ธ', '๐งโโ๏ธ', '๐ง', '๐งโโ๏ธ', '๐งโโ๏ธ', '๐งโ', '๐ฆฏ', '๐จโ', '๐ฆฏ', '๐ฉโ', '๐ฆฏ', '๐งโ', '๐ฆผ', '๐จโ', '๐ฆผ', '๐ฉโ', '๐ฆผ', '๐งโ', '๐ฆฝ', '๐จโ', '๐ฆฝ', '๐ฉโ', '๐ฆฝ', '๐', '๐โโ๏ธ', '๐โโ๏ธ', '๐', '๐บ', '๐ด๏ธ', '๐ฏ', '๐ฏโโ๏ธ', '๐ฏโโ๏ธ', '๐ง', '๐งโโ๏ธ', '๐งโโ๏ธ', '๐ง', '๐งโโ๏ธ', '๐งโโ๏ธ', '๐คบ', '๐', 'โท๏ธ', '๐๏ธ', '๐๏ธ', '๐๏ธโโ๏ธ', '๐๏ธโโ๏ธ', '๐๏ธ', '๐โโ๏ธ', '๐โโ๏ธ', '๐ฃ', '๐ฃโโ๏ธ', '๐ฃโโ๏ธ', '๐๏ธ', '๐โโ๏ธ', '๐โโ๏ธ', 'โน๏ธ', 'โน๏ธโโ๏ธ', 'โน๏ธโโ๏ธ', '๐๏ธ', '๐๏ธโโ๏ธ', '๐๏ธโโ๏ธ', '๐ด', '๐ดโโ๏ธ', '๐ดโโ๏ธ', '๐ต', '๐ตโโ๏ธ', '๐ตโโ๏ธ', '๐คธ', '๐คธโโ๏ธ', '๐คธโโ๏ธ', '๐คผ', '๐คผโโ๏ธ', '๐คผโโ๏ธ', '๐คฝ', '๐คฝโโ๏ธ', '๐คฝโโ๏ธ', '๐คพ', '๐คพโโ๏ธ', '๐คพโโ๏ธ', '๐คน', '๐คนโโ๏ธ', '๐คนโโ๏ธ', '๐ง', '๐งโโ๏ธ', '๐งโโ๏ธ', '๐', '๐', '๐งโ', '๐คโ', '๐ง', '๐ญ', '๐ซ', '๐ฌ', '๐', '๐ฉโโค๏ธโ๐โ๐จ', '๐จโโค๏ธโ๐โ๐จ', '๐ฉโโค๏ธโ๐โ๐ฉ', '๐', '๐ฉโโค๏ธโ๐จ', '๐จโโค๏ธโ๐จ', '๐ฉโโค๏ธโ๐ฉ', '๐ช๏ธ', '๐จโ๐ฉโ๐ฆ', '๐จโ๐ฉโ๐ง', '๐จโ๐ฉโ๐งโ๐ฆ', '๐จโ๐ฉโ๐ฆโ๐ฆ', '๐จโ๐ฉโ๐งโ๐ง', '๐จโ๐จโ๐ฆ', '๐จโ๐จโ๐ง', '๐จโ๐จโ๐งโ๐ฆ', '๐จโ๐จโ๐ฆโ๐ฆ', '๐จโ๐จโ๐งโ๐ง', '๐ฉโ๐ฉโ๐ฆ', '๐ฉโ๐ฉโ๐ง', '๐ฉโ๐ฉโ๐งโ๐ฆ', '๐ฉโ๐ฉโ๐ฆโ๐ฆ', '๐ฉโ๐ฉโ๐งโ๐ง', '๐จโ๐ฆ', '๐จโ๐ฆโ๐ฆ', '๐จโ๐ง', '๐จโ๐งโ๐ฆ', '๐จโ๐งโ๐ง', '๐ฉโ๐ฆ', '๐ฉโ๐ฆโ๐ฆ', '๐ฉโ๐ง', '๐ฉโ๐งโ๐ฆ', '๐ฉโ๐งโ๐ง', '๐ฃ๏ธ', '๐ค', '๐ฅ', '๐ฃ'];

const container = document.getElementById("emoji-container");
const addToEndBtn = document.getElementById("add-to-end-btn");
const addToStartBtn = document.getElementById("add-to-start-btn");
const rmToEndBtn = document.getElementById("remove-to-end-btn");
const rmToStartBtn = document.getElementById("remove-to-start-btn");
const emojiInput = document.getElementById("emoji-input");
const emojiSize = document.getElementById("emoji-size-input");
const changeSizeBtn = document.getElementById("change-size-btn");
const spans = document.getElementsByTagName("span");
const sampleEmojis = document.getElementById("sample-emojis");
const errorMessage = document.getElementById("error-message");

let myEmojis = [];
let defaultEmojiSize = `64px`;

function randomizeSampleEmojis() { //generates five random emojis
	for (let i = 0; i < 5; i++) {
		sampleEmojis.textContent += emojis[Math.floor(Math.random() * emojis.length) + 1];
	}

}

function setEmojiSize(size) {
	defaultEmojiSize = size;
	if (defaultEmojiSize) {
		for (let i = 0; i < spans.length; i++) {
			spans[i].style.fontSize = `${defaultEmojiSize}px`;
		}
		localStorage.setItem("emojiSize", JSON.stringify(defaultEmojiSize)); //saves the inputted emoji size to local storage
		emojiSize.value = "";
	}
}

function setDefaultValues() {
	localStorage.setItem("myEmojis", JSON.stringify(myEmojis)); //saves emojis on storage based on the myEmojis array
	localStorage.setItem("emojiSize", JSON.stringify(defaultEmojiSize)); //initializes default emoji size
}

function loadContentFromStorage() {
	if (JSON.parse(localStorage.getItem("myEmojis")) && JSON.parse(localStorage.getItem("emojiSize"))) {//load storage if there are content
		myEmojis = JSON.parse(localStorage.getItem("myEmojis"));
		defaultEmojiSize = JSON.parse(localStorage.getItem("emojiSize"));
	} else {
		setDefaultValues(); //sets default values if there's no content retrieved from storage
	}
}

function renderEmojis() {
	container.innerHTML = ""; //clear emojis on DOM to re-render the array
	localStorage.setItem("myEmojis", JSON.stringify(myEmojis));
	if (myEmojis.length) { //displays emojis if there exists any
		for (let i = 0; i < myEmojis.length; i++) {
			const span = document.createElement("span");
			span.textContent = myEmojis[i];
			container.append(span);
		}
		for (let i = 0; i < spans.length; i++) { //sets emoji size for each span
			spans[i].style.fontSize = `${defaultEmojiSize}px`;
		}
	}

}

randomizeSampleEmojis()
loadContentFromStorage();
renderEmojis();

function addEmojis(action, emoji) {
	if (emoji) {
		if (action === "add-to-end-btn") {
			myEmojis.push(emoji);
		} else if (action === "add-to-start-btn") {
			myEmojis.unshift(emoji);
		} else {
			return;
		}
		renderEmojis();
		emojiInput.value = "";
	}
}

function removeEmojis(action) {
	if (myEmojis.length) {
		if (action === "remove-to-end-btn") {
			myEmojis.pop();
		} else if (action === "remove-to-start-btn") {
			myEmojis.shift();
		} else {
			return;
		}
		renderEmojis();
	}
}

addToEndBtn.addEventListener("click", e => {
	addEmojis(e.target.id, emojiInput.value);
});

addToStartBtn.addEventListener("click", e => {
	addEmojis(e.target.id, emojiInput.value);
});

rmToEndBtn.addEventListener("click", e => {
	removeEmojis(e.target.id);
});

rmToStartBtn.addEventListener("click", e => {
	removeEmojis(e.target.id);
});

changeSizeBtn.addEventListener("click", e => {
	if (Number(emojiSize.value) < 16 || Number(emojiSize.value) > 250) {
		errorMessage.textContent = "Size must be between 16 to 250";
	} else {
		errorMessage.textContent = "";
		setEmojiSize(emojiSize.value);
	}

});